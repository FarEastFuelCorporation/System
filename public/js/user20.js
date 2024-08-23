document.addEventListener("DOMContentLoaded", async function () {
  try {
    const username_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec"
    );
    const maintenance_job_order_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxN9q1p4FSHbE-grd4AIE5cqPJh__dALmmWT9FEZorl2Q-aQsUgYQlIBtCi9COs7mD6/exec"
    );
    const employee_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec"
    );
    const client_list_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec"
    );
    const type_of_waste_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec"
    );
    const qlf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec"
    );
    const prf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec"
    );
    const accomplishment_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwa4TtV5mhmZRWagXQWmEG6EVH_tlRvwSnIOBM6O6VF_wAd4qnvFGky-1WBsQ74bPI3JQ/exec"
    );

    const [
      username_response,
      maintenance_job_order_response,
      employee_response,
      client_list_response,
      type_of_waste_response,
      qlf_response,
      prf_response,
      accomplishment_response,
    ] = await Promise.all([
      username_response_promise,
      maintenance_job_order_response_promise,
      employee_response_promise,
      client_list_response_promise,
      type_of_waste_response_promise,
      qlf_response_promise,
      prf_response_promise,
      accomplishment_response_promise,
    ]);

    const username_data_list = await username_response.json();
    const mjo_data_list = await maintenance_job_order_response.json();
    const employee_data_list = await employee_response.json();
    const client_data_list = await client_list_response.json();
    const type_of_waste_data_list = await type_of_waste_response.json();
    const qlf_data_list = await qlf_response.json();
    const prf_data_list = await prf_response.json();
    const accomplishment_data_list = await accomplishment_response.json();

    // Code that depends on the fetched data
    // username_data_list
    const profile_picture = document.getElementById("profile_picture");
    const user_sidebar = document.getElementById("user_sidebar");
    const user_sidebar_officer = document.getElementById(
      "user_sidebar_officer"
    );
    const user_sidebar_department = document.getElementById(
      "user_sidebar_department"
    );
    const users = document.querySelectorAll("#user");
    const departments = document.querySelectorAll("#department");

    const user_name =
      username_data_list.content[20][
        findTextInArray(username_data_list, "NAME")
      ];
    profile_picture.src = `../images/profile_picture/${
      username_data_list.content[20][
        findTextInArray(username_data_list, "PICTURE")
      ]
    }`;
    users.forEach((user) => {
      user.value =
        username_data_list.content[20][
          findTextInArray(username_data_list, "NAME")
        ];
    });
    departments.forEach((user) => {
      user.value =
        username_data_list.content[20][
          findTextInArray(username_data_list, "DEPARTMENT")
        ];
    });
    user_sidebar.innerHTML = `<u>${
      username_data_list.content[20][
        findTextInArray(username_data_list, "NAME")
      ]
    }</u>`;
    user_sidebar_officer.innerText =
      username_data_list.content[20][
        findTextInArray(username_data_list, "SECTIONS")
      ];
    user_sidebar_department.innerText =
      username_data_list.content[20][
        findTextInArray(username_data_list, "DEPARTMENT")
      ];
    const user =
      username_data_list.content[20][
        findTextInArray(username_data_list, "NAME")
      ];

    const mjo_data_list_MJO = findTextInArray(mjo_data_list, "MJO #");
    const mjo_data_list_JOB_CATEGORY = findTextInArray(
      mjo_data_list,
      "JOB CATEGORY"
    );
    const mjo_data_list_PRIORITY_LEVEL = findTextInArray(
      mjo_data_list,
      "PRIORITY LEVEL"
    );
    const mjo_data_list_FOR_MAINTENANCE = findTextInArray(
      mjo_data_list,
      "FOR MAINTENANCE"
    );
    const mjo_data_list_DETAILS = findTextInArray(mjo_data_list, "DETAILS");
    const mjo_data_list_REQUISITIONER = findTextInArray(
      mjo_data_list,
      "REQUISITIONER"
    );
    const mjo_data_list_DEPARTMENT = findTextInArray(
      mjo_data_list,
      "DEPARTMENT"
    );
    const mjo_data_list_CREATED_AT = findTextInArray(
      mjo_data_list,
      "CREATED AT"
    );
    const mjo_data_list_ASSIGNED_WORKER = findTextInArray(
      mjo_data_list,
      "ASSIGNED WORKER"
    );

    // dashboard
    const dashboard_section = document.querySelector("#dashboard_section");
    const job_order = dashboard_section.querySelector("#job_order");
    const pending = dashboard_section.querySelector("#pending");
    const accomplished = dashboard_section.querySelector("#accomplished");
    const maintenance_job_order_request_list_dashboard =
      dashboard_section.querySelector(
        "#maintenance_job_order_request_list_dashboard"
      );
    const accomplished_transactions = dashboard_section.querySelector(
      "#accomplished_transactions"
    );

    const month_filter = document.getElementById("month_filter");

    function getCurrentMonthName() {
      const months = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
      ];
      const currentDate = new Date();
      const currentMonthIndex = currentDate.getMonth();

      return months[currentMonthIndex];
    }
    month_filter.value = getCurrentMonthName();
    month_filter.addEventListener("change", generatePending);
    generatePending();
    function generatePending() {
      var pending_data_value = "";
      var pending_data_value_counter = 0;
      var accomplished_data_value = "";
      var accomplished_data_value_counter = 0;
      for (let i = mjo_data_list.content.length - 1; i >= 1; i--) {
        var status = mjo_data_list.content[i][mjo_data_list_ASSIGNED_WORKER]
          ? "PENDING"
          : "APPROVED";
        if (
          (mjo_data_list.content[i][mjo_data_list_JOB_CATEGORY] ===
            "COMPUTER" ||
            mjo_data_list.content[i][mjo_data_list_JOB_CATEGORY] ===
              "IT SUPPORT") &&
          month_filter.value ==
            formatMonth(mjo_data_list.content[i][mjo_data_list_CREATED_AT])
        ) {
          if (status === "PENDING") {
            pending_data_value_counter += 1;
            pending_data_value += `
              <tr>
                  <td>${pending_data_value_counter}</td>
                  <td>${mjo_data_list.content[i][mjo_data_list_MJO]}</td>
                  <td>${date_decoder(
                    mjo_data_list.content[i][mjo_data_list_CREATED_AT]
                  )} /<br> ${time_decoder(
              mjo_data_list.content[i][mjo_data_list_CREATED_AT]
            )}</td>
                  <td>${
                    mjo_data_list.content[i][mjo_data_list_JOB_CATEGORY]
                  }</td>
                  <td>${
                    mjo_data_list.content[i][mjo_data_list_PRIORITY_LEVEL]
                  }</td>
                  <td>${
                    mjo_data_list.content[i][mjo_data_list_FOR_MAINTENANCE]
                  }</td>
                  <td>${mjo_data_list.content[i][mjo_data_list_DETAILS]}</td>
                  <td>${mjo_data_list.content[i][mjo_data_list_DEPARTMENT]}</td>
                  <td>${
                    mjo_data_list.content[i][mjo_data_list_REQUISITIONER]
                  }</td>
                  <td>${status}</td>
              </tr>
              `;
          } else if (status === "APPROVED") {
            accomplished_data_value_counter += 1;
          }
        }
      }
      pending.innerText = pending_data_value_counter;
      accomplished.innerText = accomplished_data_value_counter;
      job_order.innerText =
        pending_data_value_counter + accomplished_data_value_counter;
      maintenance_job_order_request_list_dashboard.innerHTML =
        pending_data_value;
      accomplished_transactions.innerHTML = accomplished_data_value;

      var options = {
        series: [pending_data_value_counter, accomplished_data_value_counter],
        chart: {
          width: 500, // Set the desired width
          height: 550, // Set the desired height
          type: "pie",
        },
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
          },
        },
        dataLabels: {
          enabled: false, // Disable data labels inside the pie chart
        },
        fill: {
          type: "gradient", // Use solid fill type
        },
        legend: {
          show: true,
          position: "left", // Set the legend position to "left"
          fontSize: "20px", // Increase legend font size as needed
          formatter: function (seriesName, opts) {
            // Here, you should use the correct variable to get the series value
            var seriesValue = opts.w.globals.series[opts.seriesIndex];
            var totalValue = opts.w.globals.series.reduce(
              (acc, val) => acc + val,
              0
            );
            var percentage = ((seriesValue / totalValue) * 100).toFixed(2); // Calculate and format the percentage
            return `${percentage}% ${seriesName}`; // Format legend label as "47.06% Pending"
          },
          labels: {
            useSeriesColors: false, // Use custom color
          },
        },
        labels: ["Pending", "Accomplished"],
        colors: ["#dc3545", "#198754"], // Specify solid colors here
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
            },
          },
        ],
      };
      const pieChart = document.querySelector("#pieChart");
      while (pieChart.firstChild) {
        pieChart.removeChild(pieChart.firstChild);
      }
      var chart = new ApexCharts(pieChart, options);
      chart.render();
    }

    // ACCOMPLISHMENT REPORT
    const accomplishment_report_section = document.querySelector(
      "#accomplishment_report"
    );
    const new_accomplishment_report_button =
      accomplishment_report_section.querySelector(
        "#new_accomplishment_report_button"
      );
    const update_accomplishment_report_button =
      accomplishment_report_section.querySelector(
        "#update_accomplishment_report_button"
      );
    const new_accomplishment_form_tab =
      accomplishment_report_section.querySelector(
        "#new_accomplishment_form_tab"
      );
    const update_accomplishment_form_tab =
      accomplishment_report_section.querySelector(
        "#update_accomplishment_form_tab"
      );
    const accomplishment_report_list =
      accomplishment_report_section.querySelector(
        "#accomplishment_report_list"
      );
    const accomplishment_report_user =
      new_accomplishment_form_tab.querySelector("#user").value;
    const update_task_id_button =
      update_accomplishment_form_tab.querySelector("#task_id_button");
    const update_task_id =
      update_accomplishment_form_tab.querySelector("#task_id");
    const update_task = update_accomplishment_form_tab.querySelector("#task");
    const update_ar_date_start =
      update_accomplishment_form_tab.querySelector("#ar_date_start");
    const update_ar_time_start =
      update_accomplishment_form_tab.querySelector("#ar_time_start");
    const update_percentage =
      update_accomplishment_form_tab.querySelector("#percentage");
    const update_sliderValue =
      update_accomplishment_form_tab.querySelector("#sliderValue");
    const update_ar_details =
      update_accomplishment_form_tab.querySelector("#ar_details");

    new_accomplishment_report_button.addEventListener("click", () => {
      if (new_accomplishment_form_tab.style.display == "block") {
        new_accomplishment_form_tab.style.display = "none";
      } else {
        new_accomplishment_form_tab.style.display = "block";
        update_accomplishment_form_tab.style.display = "none";
      }
    });
    update_accomplishment_report_button.addEventListener("click", () => {
      if (update_accomplishment_form_tab.style.display == "block") {
        update_accomplishment_form_tab.style.display = "none";
      } else {
        update_accomplishment_form_tab.style.display = "block";
        new_accomplishment_form_tab.style.display = "none";
      }
    });

    var data_value = "";
    var data_value_counter = 1;
    let task_id = [];
    for (let j = accomplishment_data_list.content.length - 1; j >= 1; j--) {
      if (
        accomplishment_data_list.content[j][
          findTextInArray(accomplishment_data_list, "SUBMITTED BY")
        ] == accomplishment_report_user
      ) {
        if (
          !task_id.includes(
            accomplishment_data_list.content[j][
              findTextInArray(accomplishment_data_list, "TASK ID #")
            ]
          )
        ) {
          task_id.push(
            accomplishment_data_list.content[j][
              findTextInArray(accomplishment_data_list, "TASK ID #")
            ]
          );
          let finished;
          let duration;
          if (
            accomplishment_data_list.content[j][
              findTextInArray(accomplishment_data_list, "DATE FINISHED")
            ] == ""
          ) {
            finished = "ONGOING";
            duration = "ONGOING";
          } else {
            finished = `${date_decoder(
              accomplishment_data_list.content[j][
                findTextInArray(accomplishment_data_list, "DATE FINISHED")
              ]
            )} /<br> ${time_decoder(
              accomplishment_data_list.content[j][
                findTextInArray(accomplishment_data_list, "TIME FINISHED")
              ]
            )}`;
            duration = `${calculateTravelTime(
              date_decoder(
                accomplishment_data_list.content[j][
                  findTextInArray(accomplishment_data_list, "DATE START")
                ]
              ),
              time_decoder(
                accomplishment_data_list.content[j][
                  findTextInArray(accomplishment_data_list, "TIME START")
                ]
              ),
              date_decoder(
                accomplishment_data_list.content[j][
                  findTextInArray(accomplishment_data_list, "DATE FINISHED")
                ]
              ),
              time_decoder(
                accomplishment_data_list.content[j][
                  findTextInArray(accomplishment_data_list, "TIME FINISHED")
                ]
              )
            )}`;
          }
          data_value = `
                      <tr>
                          <td>${data_value_counter}</td>
                          <td>${
                            accomplishment_data_list.content[j][
                              findTextInArray(
                                accomplishment_data_list,
                                "ARID #"
                              )
                            ]
                          }</td>
                          <td>${
                            accomplishment_data_list.content[j][
                              findTextInArray(
                                accomplishment_data_list,
                                "TASK ID #"
                              )
                            ]
                          }</td>
                          <td>${
                            accomplishment_data_list.content[j][
                              findTextInArray(accomplishment_data_list, "TASKS")
                            ]
                          }</td>
                          <td>${
                            accomplishment_data_list.content[j][
                              findTextInArray(
                                accomplishment_data_list,
                                "ACCOMPLISHMENT"
                              )
                            ]
                          }</td>
                          <td>${date_decoder(
                            accomplishment_data_list.content[j][
                              findTextInArray(
                                accomplishment_data_list,
                                "DATE START"
                              )
                            ]
                          )} /<br> ${time_decoder(
            accomplishment_data_list.content[j][
              findTextInArray(accomplishment_data_list, "TIME START")
            ]
          )}</td>
                          <td>${finished}</td>
                          <td>${duration}</td>
                          <td class="progress_td"><div class="progress" id="progress${data_value_counter}"><div class="progress-done" id="progress-done${data_value_counter}"></div></div></td>
                      </tr>
                      `;
          accomplishment_report_list.insertAdjacentHTML(
            "beforeend",
            data_value
          );

          let progress = document.getElementById(
            `progress-done${data_value_counter}`
          );

          let percentage =
            accomplishment_data_list.content[j][
              findTextInArray(accomplishment_data_list, "PERCENTAGE")
            ];
          let fontColor;
          let progressColor;
          if (percentage <= 100 / 3) {
            fontColor = "white";
            progressColor = "#dc3545";
          } else if (percentage <= (100 / 3) * 2) {
            fontColor = "black";
            progressColor = "#ffbf00";
          } else {
            fontColor = "white";
            progressColor = "#198754";
          }
          progress.style.backgroundColor = progressColor;
          progress.style.color = fontColor;
          progress.style.width = percentage + "%";
          progress.innerText = percentage + "%";
          data_value_counter++;
        }
      }
    }

    update_task_id_button.addEventListener("click", () => {
      for (let j = accomplishment_data_list.content.length - 1; j >= 1; j--) {
        if (
          accomplishment_data_list.content[j][
            findTextInArray(accomplishment_data_list, "TASK ID #")
          ] == update_task_id.value
        ) {
          update_task.value =
            accomplishment_data_list.content[j][
              findTextInArray(accomplishment_data_list, "TASKS")
            ];
          update_ar_date_start.value = date_decoder5(
            accomplishment_data_list.content[j][
              findTextInArray(accomplishment_data_list, "DATE START")
            ]
          );
          update_ar_time_start.value = time_decoder5(
            accomplishment_data_list.content[j][
              findTextInArray(accomplishment_data_list, "TIME START")
            ]
          );
          update_percentage.value =
            accomplishment_data_list.content[j][
              findTextInArray(accomplishment_data_list, "PERCENTAGE")
            ];
          update_sliderValue.textContent =
            accomplishment_data_list.content[j][
              findTextInArray(accomplishment_data_list, "PERCENTAGE")
            ] + "%";
          update_ar_details.style.display = "block";
          break;
        }
      }
    });

    // multi section
    // maintenance_job_order_form
    const maintenance_job_order_form = document.querySelector(
      "#maintenance_job_order_form"
    );
    const maintenance_job_order_tab = maintenance_job_order_form.querySelector(
      "#maintenance_job_order_tab"
    );
    const maintenance_job_order_button =
      maintenance_job_order_form.querySelector("#maintenance_job_order_button");
    const maintenance_job_order_transaction_tab =
      maintenance_job_order_form.querySelector(
        "#maintenance_job_order_transaction_tab"
      );
    const maintenance_job_order_transaction_button =
      maintenance_job_order_form.querySelector(
        "#maintenance_job_order_transaction_button"
      );

    maintenance_job_order_button.addEventListener("click", () => {
      if (maintenance_job_order_tab.style.display == "block") {
        maintenance_job_order_tab.style.display = "none";
        maintenance_job_order_transaction_tab.style.display = "none";
      } else {
        maintenance_job_order_tab.style.display = "block";
        maintenance_job_order_transaction_tab.style.display = "none";
      }
    });

    maintenance_job_order_transaction_button.addEventListener("click", () => {
      if (maintenance_job_order_transaction_tab.style.display == "block") {
        maintenance_job_order_transaction_tab.style.display = "none";
        maintenance_job_order_tab.style.display = "none";
      } else {
        maintenance_job_order_transaction_tab.style.display = "block";
        maintenance_job_order_tab.style.display = "none";
      }
    });

    // mjo_data_list
    const maintenance_job_order_request_list =
      maintenance_job_order_form.querySelector(
        "#maintenance_job_order_request_list"
      );
    var data_value = "";
    var data_value_counter = 1;
    for (let x = 1; x < mjo_data_list.content.length; x++) {
      if (
        mjo_data_list.content[x][
          findTextInArray(mjo_data_list, "REQUISITIONER")
        ] == user
      )
        data_value += `
                                              <tr>
                                                  <td>${data_value_counter}</td>
                                                  <td>${
                                                    mjo_data_list.content[x][
                                                      findTextInArray(
                                                        mjo_data_list,
                                                        "MJO #"
                                                      )
                                                    ]
                                                  }</td>
                                                  <td>${date_decoder(
                                                    mjo_data_list.content[x][
                                                      findTextInArray(
                                                        mjo_data_list,
                                                        "CREATED AT"
                                                      )
                                                    ]
                                                  )} /<br> ${time_decoder(
          mjo_data_list.content[x][findTextInArray(mjo_data_list, "CREATED AT")]
        )}</td>
                                                  <td>${
                                                    mjo_data_list.content[x][
                                                      findTextInArray(
                                                        mjo_data_list,
                                                        "JOB CATEGORY"
                                                      )
                                                    ]
                                                  }</td>
                                                  <td>${
                                                    mjo_data_list.content[x][
                                                      findTextInArray(
                                                        mjo_data_list,
                                                        "PRIORITY LEVEL"
                                                      )
                                                    ]
                                                  }</td>
                                                  <td>${
                                                    mjo_data_list.content[x][
                                                      findTextInArray(
                                                        mjo_data_list,
                                                        "FOR MAINTENANCE"
                                                      )
                                                    ]
                                                  }</td>
                                                  <td>${
                                                    mjo_data_list.content[x][
                                                      findTextInArray(
                                                        mjo_data_list,
                                                        "DETAILS"
                                                      )
                                                    ]
                                                  }</td>
                                                  <td>${
                                                    mjo_data_list.content[x][
                                                      findTextInArray(
                                                        mjo_data_list,
                                                        "REQUISITIONER"
                                                      )
                                                    ]
                                                  }</td>
                                                  <td>${
                                                    mjo_data_list.content[x][
                                                      findTextInArray(
                                                        mjo_data_list,
                                                        "DEPARTMENT"
                                                      )
                                                    ]
                                                  }</td>
                                              </tr>
                                              `;
      data_value_counter += 1;
    }
    maintenance_job_order_request_list.innerHTML = data_value;

    // purchase_request_form
    const purchase_request_form = document.querySelector(
      "#purchase_request_form"
    );
    const add_item_button =
      purchase_request_form.querySelector("#add_item_button");
    const remove_item_button = purchase_request_form.querySelector(
      "#remove_item_button"
    );
    const purchase_request_form_button = purchase_request_form.querySelector(
      "#purchase_request_form_button"
    );
    const purchase_request_list = purchase_request_form.querySelector(
      "#purchase_request_list"
    );
    const form_tab = purchase_request_form.querySelector("#form_tab");
    var prf_counter = purchase_request_form.querySelector("#prf_counter");
    var prf_form_no = [];

    function prf_generator() {
      var last_row = prf_data_list.content.length - 1;
      var data_info =
        prf_data_list.content[last_row][
          findTextInArray(prf_data_list, "ITM #")
        ];
      var data_counter = data_info.substring(9, 13) || 0;
      var month = (new Date().getMonth() + 1).toString().padStart(2, "0");

      for (let y = 1; y <= prf_counter.value; y++) {
        prf_form_no[y] = document.querySelector(`#prf_form_no${y}`);
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(3, 7);
        if (last_counter_year == current_year) {
          data_counter = data_info.substring(9, 13) || 0;
          prf_form_no[y].value = `ITM${last_counter_year}${month}${(
            parseInt(data_counter) + y
          )
            .toString()
            .padStart(4, "0")}`;
        } else {
          data_counter = (0).toString().padStart(4, "0");
          prf_form_no[y].value = `ITM${current_year}${month}${(
            parseInt(data_counter) + y
          )
            .toString()
            .padStart(4, "0")}`;
        }
      }
    }

    prf_generator();

    add_item_button.addEventListener("click", () => {
      const prf_item_container = purchase_request_form.querySelector(
        "#prf_item_container"
      );
      prf_counter.value = parseInt(prf_counter.value) + 1; // Increment the counter for the next item
      const itemHTML = `
              <div id="prf_item">
                  <div>
                      <div>
                          <label for="prf_form_no${prf_counter.value}">
                              <i class="fa-solid fa-list-ol"></i>
                              ITM #
                          </label><br>
                          <div class="form">
                              <input type="text" id="prf_form_no${prf_counter.value}" name="prf_form_no${prf_counter.value}" autocomplete="off" class="form-control" readonly>
                          </div>
                      </div>
                      <div>
                          <label for="item${prf_counter.value}">
                              <i class="fa-solid fa-list-ol"></i>
                              Item ${prf_counter.value}
                          </label>
                          <div>
                              <input type="text" id="item${prf_counter.value}" name="item${prf_counter.value}" autocomplete="off" class="form-control" required placeholder="Item Name">
                          </div>
                      </div>
                      <div>
                          <label for="quantity${prf_counter.value}">
                              <i class="fa-solid fa-list-ol"></i>
                              Quantity
                          </label>
                          <div>
                              <input type="number" id="quantity${prf_counter.value}" name="quantity${prf_counter.value}" autocomplete="off" class="form-control" required>
                          </div>
                      </div>
                      <div>
                          <label for="unit${prf_counter.value}">
                              <i class="fa-solid fa-list-ol"></i>
                              Unit
                          </label>
                          <div>
                              <input type="text" id="unit${prf_counter.value}" name="unit${prf_counter.value}" autocomplete="off" class="form-control" required placeholder="ex. kg/pc/box/set">
                          </div>
                      </div>
                  </div>
                  <div>
                      <div>
                          <label for="details${prf_counter.value}">
                              <i class="fa-solid fa-list-ol"></i>
                              Details
                          </label>
                          <div>
                              <input type="text" id="details${prf_counter.value}" name="details${prf_counter.value}" autocomplete="off" class="form-control" required  placeholder="Brand/Unit/Specifications">
                          </div>
                      </div>
                      <div>
                          <label for="remarks1">
                              <i class="fa-solid fa-list-ol"></i>
                              Remarks
                          </label>
                          <div>
                              <input type="text" id="remarks${prf_counter.value}" name="remarks${prf_counter.value}" autocomplete="off" class="form-control" required placeholder="Where to use">
                          </div>
                      </div>
                  </div>
              </div>
              `;
      prf_item_container.insertAdjacentHTML("beforeend", itemHTML);

      // Call the prf_generator function after adding a new item
      prf_generator();

      if (prf_counter.value > 1) {
        remove_item_button.style.display = "block";
      }
    });

    remove_item_button.addEventListener("click", () => {
      const lastItem = purchase_request_form.querySelector(
        "#prf_item_container"
      ).lastElementChild;
      if (lastItem) {
        lastItem.remove();
        prf_counter.value = parseInt(prf_counter.value) - 1;

        // Call the prf_generator function after removing an item
        prf_generator();

        if (prf_counter.value <= 1) {
          remove_item_button.style.display = "none";
        }
      }
    });

    var purchase_request_data_value = "";
    var purchase_request_data_value_counter = 1;
    for (let x = 1; x < prf_data_list.content.length; x++) {
      if (
        prf_data_list.content[x][
          findTextInArray(prf_data_list, "SUBMITTED BY")
        ] == user_name
      ) {
        if (
          prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")] ==
          "PURCHASED"
        ) {
          var pr_data =
            prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
          var button = `
                      <form action="https://script.google.com/macros/s/AKfycbzVr8O3e2RcbQpgvexfEaxtZnDT6N5I4_l6uGI0bh81kBQVFZJcemVLvKW7pIRZ15Eg/exec" method="post">
                          <input type="hidden" name="itm_form_no" id="itm_form_no" value="${pr_data}">
                          <input type="hidden" name="timestamp" id="timestamp" value="${new Date()}">
                          <input type="hidden" name="user" id="user" value="${user_name}">
                          <button type="submit" style="background-color: transparent !important; padding:0; color: #198754; border: none">
                              <i class="fa-solid fa-clipboard-check"></i>
                          </button>
                      </form>
                      `;
          purchase_request_data_value += `
                      <tr>
                          <td>${purchase_request_data_value_counter}</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "ITM #")
                            ]
                          }</td>
                          <td>${date_decoder(
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "CREATED AT")
                            ]
                          )}/<br>${time_decoder(
            prf_data_list.content[x][
              findTextInArray(prf_data_list, "CREATED AT")
            ]
          )}</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "ITEM")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "QUANTITY")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "UNIT")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "DETAILS")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "REMARKS")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "SUBMITTED BY")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "STATUS")
                            ]
                          }</td>
                          <td>${button}</td>
                      </tr>
                      `;
        } else {
          purchase_request_data_value += `
                      <tr>
                          <td>${purchase_request_data_value_counter}</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "ITM #")
                            ]
                          }</td>
                          <td>${date_decoder(
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "CREATED AT")
                            ]
                          )}/<br>${time_decoder(
            prf_data_list.content[x][
              findTextInArray(prf_data_list, "CREATED AT")
            ]
          )}</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "ITEM")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "QUANTITY")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "UNIT")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "DETAILS")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "REMARKS")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "SUBMITTED BY")
                            ]
                          }</td>
                          <td>${
                            prf_data_list.content[x][
                              findTextInArray(prf_data_list, "STATUS")
                            ]
                          }</td>
                      </tr>
                      `;
        }
        purchase_request_data_value_counter += 1;
      }
    }
    purchase_request_list.innerHTML = purchase_request_data_value;

    purchase_request_form_button.addEventListener("click", () => {
      if (form_tab.style.display == "block") {
        form_tab.style.display = "none";
      } else {
        form_tab.style.display = "block";
      }
    });

    function findEmployeeName(employee_id) {
      var employee_name = "";
      for (let c = 1; c < employee_data_list.content.length; c++) {
        if (
          employee_id ==
          employee_data_list.content[c][
            findTextInArray(employee_data_list, "EMPLOYEE ID")
          ]
        ) {
          var gender =
            employee_data_list.content[c][
              findTextInArray(employee_data_list, "GENDER")
            ];
          if (gender == "MALE") {
            employee_name = `${
              employee_data_list.content[c][
                findTextInArray(employee_data_list, "LAST NAME")
              ]
            }, ${
              employee_data_list.content[c][
                findTextInArray(employee_data_list, "FIRST NAME")
              ]
            } ${
              employee_data_list.content[c][
                findTextInArray(employee_data_list, "MIDDLE NAME")
              ]
            } ${
              employee_data_list.content[c][
                findTextInArray(employee_data_list, "AFFIX")
              ]
            }`;
          } else {
            employee_name = `${
              employee_data_list.content[c][
                findTextInArray(employee_data_list, "LAST NAME")
              ]
            }, ${
              employee_data_list.content[c][
                findTextInArray(employee_data_list, "FIRST NAME")
              ]
            } ${
              employee_data_list.content[c][
                findTextInArray(employee_data_list, "MIDDLE NAME")
              ]
            } - ${
              employee_data_list.content[c][
                findTextInArray(employee_data_list, "SPOUSE NAME")
              ]
            }`;
          }
          break;
        } else {
          employee_name = employee_id;
        }
      }
      return employee_name;
    }
    function findClientName(client_id) {
      var client_name = "";
      for (let c = 1; c < client_data_list.content.length; c++) {
        if (
          client_id ==
          client_data_list.content[c][
            findTextInArray(client_data_list, "CLIENT ID")
          ]
        ) {
          client_name =
            client_data_list.content[c][
              findTextInArray(client_data_list, "CLIENT NAME")
            ];
          break;
        }
      }
      return client_name;
    }
    function findWasteCode(waste_id) {
      var waste_code = "";
      for (let c = 1; c < type_of_waste_data_list.content.length; c++) {
        if (
          waste_id.substring(0, 8) ==
          type_of_waste_data_list.content[c][
            findTextInArray(type_of_waste_data_list, "WASTE ID")
          ]
        ) {
          waste_code = type_of_waste_data_list.content[c][
            findTextInArray(type_of_waste_data_list, "WASTE CODE")
          ].substring(0, 4);
          break;
        } else {
          waste_code = "N/A";
        }
      }
      return waste_code;
    }
    function findWasteName(client_id, waste_id) {
      var waste_name = "";
      for (let c = 1; c < qlf_data_list.content.length; c++) {
        if (
          client_id ==
            qlf_data_list.content[c][
              findTextInArray(qlf_data_list, "CLIENT ID")
            ] &&
          waste_id ==
            qlf_data_list.content[c][
              findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")
            ]
        ) {
          waste_name =
            qlf_data_list.content[c][
              findTextInArray(qlf_data_list, "WASTE NAME")
            ];
          break;
        } else {
          waste_name = waste_id;
        }
      }
      return waste_name;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
