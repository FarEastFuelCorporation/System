document.addEventListener("DOMContentLoaded", async function () {
  try {
    const username_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec"
    );
    const client_list_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec"
    );
    const type_of_waste_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec"
    );
    const treatment_process_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbzlzR7zmvdHSz4JpeXtEzPE4OQckTIVaE6PBw5IYwlqmmeIprQxEKkp4d2Jb1kBcgndzA/exec"
    );
    const employee_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec"
    );
    const vehicle_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec"
    );
    const ltf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec"
    );
    const wcf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec"
    );
    const wdf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbzqTONQ_bC0F204KVgDsF42r4-51oMRbh57wQgUs8Tob8YxmdUC6lmUX6wZD0LFnrulYw/exec"
    );
    const wtf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxYB-N38emc6GUCKuuy-gGVRHQm4NoYgRRayHf56BwjiAPwsBKZ0llHjLAsW7Vt3j9I/exec"
    );
    const stf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwj90Rla-HId1Oa61WeMKxqJDJUq-n1mvHYi8wXpRMhU34UNxtQpxTG1DytiKpeY4DL/exec"
    );
    const gpf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbzQObpSJ0o3Wo0xg-lYlhoAnN6fO73VGC4TtGlqtRw1GNUqrXmm5zsQrFDl50alIaSTfQ/exec"
    );
    const qlf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec"
    );
    const prf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec"
    );
    const pof_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycby9i2KfOZ_uF7-JUPX8qpXg7Jewmw6oU3EfUTpXiwnRRB91_qIW3xAVNy5SZBN1YhVzzg/exec"
    );
    const iid_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbyaV_cnq0bfOWPgDTfyrit-nCAMwyI5Vw1xlx47RNSoSEBd8PyMw3-0UeNlojqBKgk/exec"
    );
    const wsf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxNmSYTrW2BWirX6dk1DKzJ0F2HmMlkNkdmGGZFoRIt5rW88RjqaUXMh41k_qM8pwjb/exec"
    );
    const irf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec"
    );
    const maintenance_job_order_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxN9q1p4FSHbE-grd4AIE5cqPJh__dALmmWT9FEZorl2Q-aQsUgYQlIBtCi9COs7mD6/exec"
    );

    const [
      username_response,
      client_list_response,
      type_of_waste_response,
      treatment_process_response,
      employee_response,
      vehicle_response,
      ltf_response,
      wcf_response,
      wdf_response,
      wtf_response,
      stf_response,
      gpf_response,
      qlf_response,
      prf_response,
      pof_response,
      iid_response,
      wsf_response,
      irf_response,
      maintenance_job_order_response,
    ] = await Promise.all([
      username_response_promise,
      client_list_response_promise,
      type_of_waste_response_promise,
      treatment_process_response_promise,
      employee_response_promise,
      vehicle_response_promise,
      ltf_response_promise,
      wcf_response_promise,
      wdf_response_promise,
      wtf_response_promise,
      stf_response_promise,
      gpf_response_promise,
      qlf_response_promise,
      prf_response_promise,
      pof_response_promise,
      iid_response_promise,
      wsf_response_promise,
      irf_response_promise,
      maintenance_job_order_response_promise,
    ]);

    const username_data_list = await username_response.json();
    const client_data_list = await client_list_response.json();
    const type_of_waste_data_list = await type_of_waste_response.json();
    const treatment_process_data_list = await treatment_process_response.json();
    const employee_data_list = await employee_response.json();
    const vehicle_data_list = await vehicle_response.json();
    const ltf_data_list = await ltf_response.json();
    const wcf_data_list = await wcf_response.json();
    const wdf_data_list = await wdf_response.json();
    const wtf_data_list = await wtf_response.json();
    const stf_data_list = await stf_response.json();
    const gpf_data_list = await gpf_response.json();
    const qlf_data_list = await qlf_response.json();
    const prf_data_list = await prf_response.json();
    const pof_data_list = await pof_response.json();
    const iid_data_list = await iid_response.json();
    const wsf_data_list = await wsf_response.json();
    const irf_data_list = await irf_response.json();
    const mjo_data_list = await maintenance_job_order_response.json();

    // Code that depends on the fetched data
    // username_data_list3
    const queryParams = new URLSearchParams(window.location.search);
    const xValue = queryParams.get("user");
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
    const irf_user = document.getElementById("irf_user");

    const user_name =
      username_data_list.content[xValue][
        findTextInArray(username_data_list, "NAME")
      ];
    profile_picture.src = `../images/profile_picture/${
      username_data_list.content[xValue][
        findTextInArray(username_data_list, "PICTURE")
      ]
    }`;
    users.forEach((user) => {
      user.value =
        username_data_list.content[xValue][
          findTextInArray(username_data_list, "NAME")
        ];
    });
    departments.forEach((user) => {
      user.value =
        username_data_list.content[xValue][
          findTextInArray(username_data_list, "DEPARTMENT")
        ];
    });
    irf_user.value =
      username_data_list.content[xValue][
        findTextInArray(username_data_list, "NAME")
      ];
    user_sidebar.innerHTML = `<u>${
      username_data_list.content[xValue][
        findTextInArray(username_data_list, "NAME")
      ]
    }</u>`;
    user_sidebar_officer.innerText =
      username_data_list.content[xValue][
        findTextInArray(username_data_list, "SECTIONS")
      ];
    user_sidebar_department.innerText =
      username_data_list.content[xValue][
        findTextInArray(username_data_list, "DEPARTMENT")
      ];

    const user =
      username_data_list.content[xValue][
        findTextInArray(username_data_list, "NAME")
      ];

    const warehouse_dashboard = document.querySelector("#warehouse_dashboard");
    const received_transactions_warehouse = warehouse_dashboard.querySelector(
      "#received_transactions"
    );
    const pending_counter_warehouse =
      warehouse_dashboard.querySelector("#pending");
    const finished_counter_warehouse =
      warehouse_dashboard.querySelector("#finished");
    const supplies_warehouse_pending_list = warehouse_dashboard.querySelector(
      "#supplies_warehouse_pending_list"
    );
    const disposal_warehouse_pending_list = warehouse_dashboard.querySelector(
      "#disposal_warehouse_pending_list"
    );
    const month_filter = document.getElementById("month_filter");
    var wcf_transaction_warehouse = []; // Variable containing existing elements
    var wtf_transaction_warehouse = []; // Variable containing existing elements
    let pending_warehouse = [];
    let done_warehouse = [];

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
      wcf_transaction_warehouse = [];
      wtf_transaction_warehouse = [];
      for (let i = 1; i < wcf_data_list.content.length; i++) {
        if (
          wcf_data_list.content[i][
            findTextInArray(wcf_data_list, "SUBMIT TO")
          ] == "WAREHOUSE"
        ) {
          if (
            !wcf_transaction_warehouse.includes(
              wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]
            ) &&
            month_filter.value ==
              formatMonth(
                wcf_data_list.content[i][
                  findTextInArray(wcf_data_list, "HAULING DATE")
                ]
              )
          ) {
            wcf_transaction_warehouse.push(
              wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]
            );
          } else if (
            !wcf_transaction_warehouse.includes(
              wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]
            ) &&
            month_filter.value == "ALL"
          ) {
            wcf_transaction_warehouse.push(
              wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]
            );
          }
        }
      }
      for (let i = 1; i < wtf_data_list.content.length; i++) {
        if (
          !wtf_transaction_warehouse.includes(
            wtf_data_list.content[i][findTextInArray(wtf_data_list, "WCF #")]
          ) &&
          month_filter.value ==
            formatMonth(
              wtf_data_list.content[i][
                findTextInArray(wtf_data_list, "HAULING DATE")
              ]
            )
        ) {
          wtf_transaction_warehouse.push(
            wtf_data_list.content[i][findTextInArray(wtf_data_list, "WCF #")]
          );
        } else if (
          !wtf_transaction_warehouse.includes(
            wtf_data_list.content[i][findTextInArray(wtf_data_list, "WCF #")]
          ) &&
          month_filter.value == "ALL"
        ) {
          wtf_transaction_warehouse.push(
            wtf_data_list.content[i][findTextInArray(wtf_data_list, "WCF #")]
          );
        }
      }

      pending_warehouse = wcf_transaction_warehouse.filter(
        (element) => !wtf_transaction_warehouse.includes(element)
      );
      done_warehouse = wcf_transaction_warehouse.filter((element) =>
        wtf_transaction_warehouse.includes(element)
      );

      received_transactions_warehouse.innerText =
        pending_warehouse.length + done_warehouse.length;
      pending_counter_warehouse.innerText = pending_warehouse.length;
      finished_counter_warehouse.innerText = done_warehouse.length;

      var data_value_pending = "";
      var data_value_pending_counter = 1;
      for (let j = 0; j < pending_warehouse.length; j++) {
        for (let i = 1; i < wcf_data_list.content.length; i++) {
          if (
            wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")] ==
              pending_warehouse[j] &&
            month_filter.value ==
              formatMonth(
                wcf_data_list.content[i][
                  findTextInArray(wcf_data_list, "HAULING DATE")
                ]
              )
          ) {
            var mtf = "";
            var ltf = "";
            if (
              wcf_data_list.content[i][
                findTextInArray(wcf_data_list, "LTF/ MTF  #")
              ].substring(0, 3) == "MTF"
            ) {
              mtf =
                wcf_data_list.content[i][
                  findTextInArray(wcf_data_list, "LTF/ MTF  #")
                ];
            } else {
              ltf =
                wcf_data_list.content[i][
                  findTextInArray(wcf_data_list, "LTF/ MTF  #")
                ];
              for (let x = 1; x < ltf_data_list.content.length; x++) {
                if (
                  ltf ==
                  ltf_data_list.content[x][
                    findTextInArray(ltf_data_list, "LTF #")
                  ]
                ) {
                  mtf =
                    ltf_data_list.content[x][
                      findTextInArray(ltf_data_list, "MTF #")
                    ];
                  break;
                }
              }
            }
            data_value_pending += `
                        <tr>
                            <td>${data_value_pending_counter}</td>
                            <td>${
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "WCF #")
                              ]
                            }</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "HAULING DATE")
                              ]
                            )}</td>
                            <td>${date_decoder(
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "ARRIVAL DATE")
                              ]
                            )} /<br> ${time_decoder(
              wcf_data_list.content[i][
                findTextInArray(wcf_data_list, "ARRIVAL TIME")
              ]
            )}</td>
                            <td>${findClientName(
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "CLIENT ID")
                              ]
                            )}</td>
                            <td>${findWasteCode(
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${findWasteName(
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "CLIENT ID")
                              ],
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "NET WEIGHT")
                              ]
                            } kg.</td>
                        </tr>
                        `;
            data_value_pending_counter += 1;
          } else if (
            wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")] ==
              pending_warehouse[j] &&
            month_filter.value == "ALL"
          ) {
            var mtf = "";
            var ltf = "";
            if (
              wcf_data_list.content[i][
                findTextInArray(wcf_data_list, "LTF/ MTF  #")
              ].substring(0, 3) == "MTF"
            ) {
              mtf =
                wcf_data_list.content[i][
                  findTextInArray(wcf_data_list, "LTF/ MTF  #")
                ];
            } else {
              ltf =
                wcf_data_list.content[i][
                  findTextInArray(wcf_data_list, "LTF/ MTF  #")
                ];
              for (let x = 1; x < ltf_data_list.content.length; x++) {
                if (
                  ltf ==
                  ltf_data_list.content[x][
                    findTextInArray(ltf_data_list, "LTF #")
                  ]
                ) {
                  mtf =
                    ltf_data_list.content[x][
                      findTextInArray(ltf_data_list, "MTF #")
                    ];
                  break;
                }
              }
            }
            data_value_pending += `
                        <tr>
                            <td>${data_value_pending_counter}</td>
                            <td>${
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "WCF #")
                              ]
                            }</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "HAULING DATE")
                              ]
                            )}</td>
                            <td>${date_decoder(
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "ARRIVAL DATE")
                              ]
                            )} /<br> ${time_decoder(
              wcf_data_list.content[i][
                findTextInArray(wcf_data_list, "ARRIVAL TIME")
              ]
            )}</td>
                            <td>${findClientName(
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "CLIENT ID")
                              ]
                            )}</td>
                            <td>${findWasteCode(
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${findWasteName(
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "CLIENT ID")
                              ],
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${
                              wcf_data_list.content[i][
                                findTextInArray(wcf_data_list, "NET WEIGHT")
                              ]
                            } kg.</td>
                        </tr>
                        `;
            data_value_pending_counter += 1;
          }
        }
      }
      disposal_warehouse_pending_list.innerHTML = data_value_pending;

      var options = {
        series: [pending_warehouse.length, done_warehouse.length],
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
          fontSize: "30px", // Increase legend font size as needed
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
        labels: ["Pending", "Treated"],
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

    var data_value = [];

    for (x = 1; x < client_data_list.content.length; x++) {
      data_value.push(client_data_list.content[x][1]);
    }
    const search_wrappers = document.querySelectorAll("#search_client");

    search_wrappers.forEach((search_wrapper) => {
      const input_box = search_wrapper.querySelector("input");
      const sugg_box = search_wrapper.querySelector(".autocom_box");
      input_box.onkeyup = (e) => {
        let user_data = e.target.value;
        let empty_array = [];
        if (user_data) {
          empty_array = data_value.filter((data) => {
            return data
              .toLocaleLowerCase()
              .includes(user_data.toLocaleLowerCase());
          });
          empty_array = empty_array.map((data) => {
            return "<li>" + data + "</li>";
          });
          search_wrapper.classList.add("active");
          show_suggestions(empty_array);
        } else {
          search_wrapper.classList.remove("active");
        }
      };
      sugg_box.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          select(e.target.innerText);
        }
      });
      function select(element) {
        let select_user_data = element;
        input_box.value = select_user_data;
        search_wrapper.classList.remove("active");
      }

      function show_suggestions(list) {
        let list_data;
        if (!list.length) {
          user_value = input_box.value;
          list_data = "<li>" + user_value + "</li>";
        } else {
          list_data = list.join("");
        }
        sugg_box.innerHTML = list_data;
      }
    });

    // FORM GENERATOR
    // wtf_data_list
    const wtf_form_no = document.getElementById("wtf_form_no");
    var last_row = wtf_data_list.content.length - 1;
    var data_info =
      wtf_data_list.content[last_row][findTextInArray(wtf_data_list, "WTF #")];
    var data_counter;
    if (last_row == 0) {
      data_counter = 0;
    } else {
      data_counter = data_info.substring(9, 13);
    }
    var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
    data_counter = (parseInt(data_counter) + 1).toString().padStart(4, "0");
    var current_year = new Date().getFullYear();
    var last_counter_year = data_info.substring(3, 7);
    if (last_counter_year == current_year) {
      wtf_form_no.value = `WTF${last_counter_year}${month}${data_counter}`;
    } else {
      data_counter = (1).toString().padStart(4, "0");
      wtf_form_no.value = `WTF${current_year}${month}${data_counter}`;
    }

    const disposal_warehouse = document.querySelector("#disposal_warehouse");
    const wcf_form_no_warehouse =
      disposal_warehouse.querySelector("#wcf_form_no");
    const search_wcf_form_no_button_warehouse =
      disposal_warehouse.querySelector("#search_wcf_form_no_button");
    const search_wcf_result_warehouse =
      disposal_warehouse.querySelector("#search_wcf_result");
    const hauling_date_warehouse =
      disposal_warehouse.querySelector("#hauling_date");
    const arrival_date_warehouse =
      disposal_warehouse.querySelector("#arrival_date");
    const item_container_warehouse =
      disposal_warehouse.querySelector("#item_container");
    const item_counter_warehouse =
      disposal_warehouse.querySelector("#item_counter");
    const add_item_button_warehouse =
      disposal_warehouse.querySelector("#add_item_button");
    const remove_item_button_warehouse = disposal_warehouse.querySelector(
      "#remove_item_button"
    );
    const warehouse_data_warehouse =
      disposal_warehouse.querySelector("#warehouse_data");

    function addItem() {
      item_counter_warehouse.value = parseInt(item_counter_warehouse.value) + 1;
      var item_data = `
            <div id="items${item_counter_warehouse.value}" style="display: flex; gap: 20px;">
                <div class="form">
                    <select name="warehouse_no${item_counter_warehouse.value}" id="warehouse_no${item_counter_warehouse.value}" class="form-control">
                        <option value="">SELECT</option>
                        <option value="WAREHOUSE 1">WAREHOUSE 1</option>
                        <option value="WAREHOUSE 2">WAREHOUSE 2</option>
                        <option value="WAREHOUSE 3">WAREHOUSE 3</option>
                        <option value="WAREHOUSE A">WAREHOUSE A</option>
                        <option value="WAREHOUSE B">WAREHOUSE B</option>
                        <option value="WAREHOUSE C">WAREHOUSE C</option>
                    </select>
                </div>
                <div class="form">
                    <select name="area${item_counter_warehouse.value}" id="area${item_counter_warehouse.value}" class="form-control">
                        <option value="">SELECT</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="H">H</option>
                        <option value="I">I</option>
                        <option value="J">J</option>
                        <option value="K">K</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="N">N</option>
                        <option value="O">O</option>
                        <option value="P">P</option>
                        <option value="Q">Q</option>
                        <option value="R">R</option>
                        <option value="S">S</option>
                        <option value="T">T</option>
                        <option value="U">U</option>
                        <option value="V">V</option>
                        <option value="W">W</option>
                        <option value="X">X</option>
                        <option value="Y">Y</option>
                        <option value="Z">Z</option>
                        <option value="AA">AA</option>
                        <option value="AB">AB</option>
                        <option value="AC">AC</option>
                        <option value="AD">AD</option>
                        <option value="AE">AE</option>
                        <option value="AF">AF</option>
                    </select>
                </div>
                <div class="form">
                    <select name="section${item_counter_warehouse.value}" id="section${item_counter_warehouse.value}" class="form-control">
                        <option value="">SELECT</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>                                    
                    </select>
                </div>
                <div class="form">
                    <select name="level${item_counter_warehouse.value}" id="level${item_counter_warehouse.value}" class="form-control" required>
                        <option value="">SELECT</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>                                 
                    </select>
                </div>
                <div class="form">
                    <input type="number" name="pallet${item_counter_warehouse.value}" id="pallet${item_counter_warehouse.value}" class="form-control" step="1" autocomplete="off" required style="width: 100px;">
                </div>
                <div class="form">
                    <input type="text" name="steam${item_counter_warehouse.value}" id="steam${item_counter_warehouse.value}" class="form-control" autocomplete="off" required style="width: 110px;">
                </div>
                <div class="form">
                    <input type="number" name="quantity${item_counter_warehouse.value}" id="quantity${item_counter_warehouse.value}" class="form-control" step="1" autocomplete="off" required style="width: 100px;">
                </div>
                <div class="form">
                    <select name="unit${item_counter_warehouse.value}" id="unit${item_counter_warehouse.value}" class="form-control" required>
                        <option value="">SELECT</option>
                        <option value="KG">KG</option>
                        <option value="PC">PC</option>
                        <option value="CASE">CASE</option>
                        <option value="JUMBO">JUMBO</option>
                        <option value="POLYSACK">POLYSACK</option>                             
                    </select>
                </div>
                <div class="form">
                    <input type="text" name="description${item_counter_warehouse.value}" id="description${item_counter_warehouse.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                </div>
            </div>
            `;
      item_container_warehouse.insertAdjacentHTML("beforeend", item_data);
      if (item_counter_warehouse.value > 1) {
        remove_item_button_warehouse.style.display = "block";
      }
    }

    function remove_item() {
      const item_counter_warehouse =
        disposal_warehouse.querySelector("#item_counter");
      const items_warehouse = disposal_warehouse.querySelector(
        `#items${item_counter_warehouse.value}`
      );
      items_warehouse.remove();
      item_counter_warehouse.value = parseInt(item_counter_warehouse.value) - 1;
      if (item_counter_warehouse.value == 1) {
        remove_item_button_warehouse.style.display = "none";
      }
    }

    add_item_button_warehouse.addEventListener("click", addItem);
    remove_item_button_warehouse.addEventListener("click", remove_item);

    search_wcf_form_no_button_warehouse.addEventListener("click", () => {
      var data_value_text;
      for (let a = 1; a < wcf_data_list.content.length; a++) {
        if (
          wcf_form_no_warehouse.value ==
          wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]
        ) {
          for (let b = 0; b < pending_warehouse.length; b++) {
            if (wcf_form_no_warehouse.value == pending_warehouse[b]) {
              data_value_text = `
                            WCF #: ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "WCF #")
                              ]
                            }<br>
                            CLIENT: ${findClientName(
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "CLIENT ID")
                              ]
                            )}<br>
                            WASTE CODE: ${findWasteCode(
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}<br>
                            WASTE DESCRIPTION: ${findWasteName(
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "CLIENT ID")
                              ],
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}<br>
                            PLATE NO: ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            }<br>
                            DRIVER: ${findEmployeeName(
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "DRIVER ID")
                              ]
                            )}<br>
                            DATE IN: ${date_decoder(
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "ARRIVAL DATE")
                              ]
                            )}<br>
                            TIME IN: ${time_decoder(
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "ARRIVAL TIME")
                              ]
                            )}<br>
                            CLIENT WEIGHT: ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "CLIENT WEIGHT")
                              ]
                            } Kg.<br>
                            TRUCK SCALE #: ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "TRUCK SCALE #")
                              ]
                            }<br>
                            GROSS WEIGHT: ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "GROSS WEIGHT")
                              ]
                            } Kg.<br>
                            TARE WEIGHT: ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "TARE WEIGHT")
                              ]
                            } Kg.<br>
                            NET WEIGHT: ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "NET WEIGHT")
                              ]
                            } Kg.<br>
                            HAULING DATE: ${date_decoder(
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "HAULING DATE")
                              ]
                            )}<br>
                            REMARKS: ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "REMARKS")
                              ]
                            }<br>
                            SUBMITTED BY: ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "SUBMITTED BY")
                              ]
                            }<br>
                            `;
              hauling_date_warehouse.value = date_decoder(
                wcf_data_list.content[a][
                  findTextInArray(wcf_data_list, "HAULING DATE")
                ]
              );
              arrival_date_warehouse.value = date_decoder(
                wcf_data_list.content[a][
                  findTextInArray(wcf_data_list, "ARRIVAL DATE")
                ]
              );
              warehouse_data_warehouse.style.display = "block";
            }
            search_wcf_result_warehouse.innerHTML = `
                        <div class="search_wcf_result">
                        <h2>INFORMATION</h2>
                        No Data Found
                        </div><br>`;
          }
        }
      }
      if (data_value_text == undefined) {
        search_wcf_result_warehouse.innerHTML = `
                <div class="search_wcf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`;
      } else {
        search_wcf_result_warehouse.innerHTML = `
                <div class="search_wcf_result">
                <h2>INFORMATION</h2>
                ${data_value_text}
                </div><br>`;
      }
    });

    // wdf_data_list
    const warehouse_inventory = document.getElementById("warehouse_inventory");
    const warehouse_inventory_list = warehouse_inventory.querySelector(
      "#warehouse_inventory_list"
    );
    const search_filter_options = warehouse_inventory.querySelector(
      "#search_filter_options"
    );
    const disposal_form_button_warehouse_inventory =
      warehouse_inventory.querySelector("#disposal_form_button");
    const form_tab_warehouse_inventory =
      warehouse_inventory.querySelector("#form_tab");
    const search_wtf_form_no_warehouse_inventory =
      warehouse_inventory.querySelector("#search_wtf_form_no");
    const search_wtf_result_warehouse_inventory =
      warehouse_inventory.querySelector("#search_wtf_result");
    const search_wtf_form_no_button_warehouse_inventory =
      warehouse_inventory.querySelector("#search_wtf_form_no_button");
    const item_container_warehouse_inventory =
      warehouse_inventory.querySelector("#item_container");
    const mtf_form_no_warehouse_inventory =
      warehouse_inventory.querySelector("#mtf_form_no");
    const wcf_form_no_warehouse_inventory =
      warehouse_inventory.querySelector("#wcf_form_no");
    const hauling_date_warehouse_inventory =
      warehouse_inventory.querySelector("#hauling_date");

    // FORM GENERATOR
    // wdf_data_list
    const wdf_form_no = document.getElementById("wdf_form_no");
    var last_row = wdf_data_list.content.length - 1;
    var data_info =
      wdf_data_list.content[last_row][findTextInArray(wdf_data_list, "WDF #")];
    var data_counter;
    if (last_row == 0) {
      data_counter = 0;
    } else {
      data_counter = data_info.substring(9, 13);
    }
    var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
    data_counter = (parseInt(data_counter) + 1).toString().padStart(4, "0");
    var current_year = new Date().getFullYear();
    var last_counter_year = data_info.substring(3, 7);
    if (last_counter_year == current_year) {
      wdf_form_no.value = `WDF${last_counter_year}${month}${data_counter}`;
    } else {
      data_counter = (1).toString().padStart(4, "0");
      wdf_form_no.value = `WDF${current_year}${month}${data_counter}`;
    }

    var pending_wtf = [];
    var done_wtf = [];
    for (let x = 1; x < wdf_data_list.content.length; x++) {
      wtf_no_wtf =
        wdf_data_list.content[x][findTextInArray(wdf_data_list, "WTF #")];
      if (!done_wtf.includes(wtf_no_wtf)) {
        done_wtf.push(wtf_no_wtf);
      }
    }
    for (let x = 1; x < wtf_data_list.content.length; x++) {
      wtf_no_wtf =
        wtf_data_list.content[x][findTextInArray(wtf_data_list, "WTF #")];
      if (!done_wtf.includes(wtf_no_wtf)) {
        pending_wtf.push(wtf_no_wtf);
      }
    }

    var inventory_data = "";
    var inventory_data_counter = 1;

    search_filter_options.addEventListener("click", () => {
      warehouse_inventory_list.innerHTML = "";
      filterData();
    });
    filterData();
    function filterData() {
      inventory_data = "";
      const filter_option = warehouse_inventory.querySelector("#filter_option");
      const filter_info = warehouse_inventory.querySelector("#filter_info");
      for (let i = 0; i < pending_wtf.length; i++) {
        for (let x = 1; x < wtf_data_list.content.length; x++) {
          if (
            pending_wtf[i] ==
            wtf_data_list.content[x][findTextInArray(wtf_data_list, "WTF #")]
          ) {
            var column_name = "";
            for (let y = 0; y < wtf_data_list.content[0].length; y++) {
              if (filter_option.value == wtf_data_list.content[0][y]) {
                column_name = y;
                break;
              }
            }
            if (wtf_data_list.content[x][column_name] == filter_info.value) {
              var mtf = "";
              var ltf = "";
              for (let k = 1; k < wcf_data_list.content.length; k++) {
                if (
                  wtf_data_list.content[x][
                    findTextInArray(wtf_data_list, "WCF #")
                  ] ==
                  wcf_data_list.content[k][
                    findTextInArray(wcf_data_list, "WCF #")
                  ]
                ) {
                  if (
                    wcf_data_list.content[k][
                      findTextInArray(wcf_data_list, "LTF/ MTF  #")
                    ].substring(0, 3) == "MTF"
                  ) {
                    mtf =
                      wcf_data_list.content[k][
                        findTextInArray(wcf_data_list, "LTF/ MTF  #")
                      ];
                  } else {
                    ltf =
                      wcf_data_list.content[k][
                        findTextInArray(wcf_data_list, "LTF/ MTF  #")
                      ];
                    for (let x = 1; x < ltf_data_list.content.length; x++) {
                      if (
                        ltf ==
                        ltf_data_list.content[x][
                          findTextInArray(ltf_data_list, "LTF #")
                        ]
                      ) {
                        mtf =
                          ltf_data_list.content[x][
                            findTextInArray(ltf_data_list, "MTF #")
                          ];
                        break;
                      }
                    }
                  }
                }
              }
              inventory_data += `
                            <tr>
                                <td>${inventory_data_counter}</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "WTF #")
                                  ]
                                }</td>
                                <td>${mtf}</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(
                                      wtf_data_list,
                                      "GATE PASS #"
                                    )
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "STEAM #")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(
                                      wtf_data_list,
                                      "WAREHOUSE #"
                                    )
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "AREA")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "SECTION")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "LEVEL")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "PALLET #")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "QUANTITY")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "UNIT")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(
                                      wtf_data_list,
                                      "DESCRIPTION"
                                    )
                                  ]
                                }</td>
                            </tr>
                            `;
              inventory_data_counter += 1;
            } else if (filter_info.value == "") {
              var mtf = "";
              var ltf = "";
              for (let k = 1; k < wcf_data_list.content.length; k++) {
                if (
                  wtf_data_list.content[x][
                    findTextInArray(wtf_data_list, "WCF #")
                  ] ==
                  wcf_data_list.content[k][
                    findTextInArray(wcf_data_list, "WCF #")
                  ]
                ) {
                  if (
                    wcf_data_list.content[k][
                      findTextInArray(wcf_data_list, "LTF/ MTF  #")
                    ].substring(0, 3) == "MTF"
                  ) {
                    mtf =
                      wcf_data_list.content[k][
                        findTextInArray(wcf_data_list, "LTF/ MTF  #")
                      ];
                  } else {
                    ltf =
                      wcf_data_list.content[k][
                        findTextInArray(wcf_data_list, "LTF/ MTF  #")
                      ];
                    for (let x = 1; x < ltf_data_list.content.length; x++) {
                      if (
                        ltf ==
                        ltf_data_list.content[x][
                          findTextInArray(ltf_data_list, "LTF #")
                        ]
                      ) {
                        mtf =
                          ltf_data_list.content[x][
                            findTextInArray(ltf_data_list, "MTF #")
                          ];
                        break;
                      }
                    }
                  }
                }
              }
              inventory_data += `
                            <tr>
                                <td>${inventory_data_counter}</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "WTF #")
                                  ]
                                }</td>
                                <td>${mtf}</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(
                                      wtf_data_list,
                                      "GATE PASS #"
                                    )
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "STEAM #")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(
                                      wtf_data_list,
                                      "WAREHOUSE #"
                                    )
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "AREA")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "SECTION")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "LEVEL")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "PALLET #")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "QUANTITY")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(wtf_data_list, "UNIT")
                                  ]
                                }</td>
                                <td>${
                                  wtf_data_list.content[x][
                                    findTextInArray(
                                      wtf_data_list,
                                      "DESCRIPTION"
                                    )
                                  ]
                                }</td>
                            </tr>
                            `;
              inventory_data_counter += 1;
            }
          }
        }
      }
      warehouse_inventory_list.insertAdjacentHTML("beforeend", inventory_data);
    }

    disposal_form_button_warehouse_inventory.addEventListener("click", () => {
      if (form_tab_warehouse_inventory.style.display == "none") {
        form_tab_warehouse_inventory.style.display = "block";
      } else {
        form_tab_warehouse_inventory.style.display = "none";
      }
    });

    search_wtf_form_no_button_warehouse_inventory.addEventListener(
      "click",
      () => {
        var data_value_text;
        for (let a = 1; a < wtf_data_list.content.length; a++) {
          wtf_no_wtf =
            wtf_data_list.content[a][findTextInArray(wtf_data_list, "WTF #")];
          wcf_no_wtf =
            wtf_data_list.content[a][findTextInArray(wtf_data_list, "WCF #")];
          if (search_wtf_form_no_warehouse_inventory.value == wtf_no_wtf) {
            for (let b = 0; b < pending_wtf.length; b++) {
              if (
                search_wtf_form_no_warehouse_inventory.value == pending_wtf[b]
              ) {
                var mtf, ltf, client_id, waste_id, truck_scale_no, hauling_date;
                for (let c = 1; c < wcf_data_list.content.length; c++) {
                  wcf_no_wcf =
                    wcf_data_list.content[c][
                      findTextInArray(wcf_data_list, "WCF #")
                    ];
                  if (wcf_no_wtf == wcf_no_wcf) {
                    if (
                      wcf_data_list.content[c][
                        findTextInArray(wcf_data_list, "LTF/ MTF  #")
                      ].substring(0, 3) == "MTF"
                    ) {
                      mtf =
                        wcf_data_list.content[c][
                          findTextInArray(wcf_data_list, "LTF/ MTF  #")
                        ];
                    } else {
                      ltf =
                        wcf_data_list.content[c][
                          findTextInArray(wcf_data_list, "LTF/ MTF  #")
                        ];
                      for (let x = 1; x < ltf_data_list.content.length; x++) {
                        if (
                          ltf ==
                          ltf_data_list.content[x][
                            findTextInArray(ltf_data_list, "LTF #")
                          ]
                        ) {
                          mtf =
                            ltf_data_list.content[x][
                              findTextInArray(ltf_data_list, "MTF #")
                            ];
                          break;
                        }
                      }
                    }
                    client_id =
                      wcf_data_list.content[c][
                        findTextInArray(wcf_data_list, "CLIENT ID")
                      ];
                    client_id =
                      wcf_data_list.content[c][
                        findTextInArray(wcf_data_list, "CLIENT ID")
                      ];
                    waste_id =
                      wcf_data_list.content[c][
                        findTextInArray(wcf_data_list, "WASTE ID")
                      ];
                    truck_scale_no =
                      wcf_data_list.content[c][
                        findTextInArray(wcf_data_list, "TRUCK SCALE #")
                      ];
                    hauling_date =
                      wcf_data_list.content[c][
                        findTextInArray(wcf_data_list, "HAULING DATE")
                      ];
                  }
                }
                data_value_text = `
                            WTF #: ${wtf_no_wtf}<br>
                            CLIENT: ${findClientName(client_id)}<br>
                            WASTE CODE: ${findWasteCode(waste_id)}<br>
                            WASTE DESCRIPTION: ${findWasteName(
                              client_id,
                              waste_id
                            )}<br>
                            TRUCK SCALE #: ${truck_scale_no}<br>
                            HAULING DATE: ${date_decoder(hauling_date)}<br>
                            `;
                mtf_form_no_warehouse_inventory.value = mtf;
                wcf_form_no_warehouse_inventory.value = wcf_no_wtf;
                hauling_date_warehouse_inventory.value =
                  date_decoder(hauling_date);
                item_container_warehouse_inventory.style.display = "block";
              }
            }
          }
        }
        if (data_value_text == undefined) {
          search_wtf_result_warehouse_inventory.innerHTML = `
                <div class="search_wtf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`;
        } else {
          search_wtf_result_warehouse_inventory.innerHTML = `
                <div class="search_wtf_result">
                <h2>INFORMATION</h2>
                ${data_value_text}
                </div><br>`;
        }
      }
    );

    // supplies_transaction
    // FORM GENERATOR
    // stf_data_list
    const stf_form_no = document.getElementById("stf_form_no");
    var last_row = stf_data_list.content.length - 1;
    var data_info =
      stf_data_list.content[last_row][findTextInArray(stf_data_list, "STF #")];
    var data_counter;
    if (last_row == 0) {
      data_counter = 0;
    } else {
      data_counter = data_info.substring(9, 13);
    }
    var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
    data_counter = (parseInt(data_counter) + 1).toString().padStart(4, "0");
    var current_year = new Date().getFullYear();
    var last_counter_year = data_info.substring(4, 7);
    if (last_counter_year == current_year) {
      stf_form_no.value = `STF${last_counter_year}${month}${data_counter}`;
    } else {
      data_counter = (1).toString().padStart(4, "0");
      stf_form_no.value = `STF${current_year}${month}${data_counter}`;
    }

    const supplies_transaction = document.querySelector(
      "#supplies_transaction"
    );
    const withdrawal_form_button = supplies_transaction.querySelector(
      "#withdrawal_form_button"
    );
    const form_tab_supplies_transaction =
      supplies_transaction.querySelector("#form_tab");
    const supplies_transaction_list = supplies_transaction.querySelector(
      "#supplies_transaction_list"
    );
    const search_wsf_form_no_supplies_transaction =
      supplies_transaction.querySelector("#search_wsf_form_no");
    const search_wsf_form_no_button_supplies_transaction =
      supplies_transaction.querySelector("#search_wsf_form_no_button");
    const item_container_supplies_transaction =
      supplies_transaction.querySelector("#item_container");
    const pick_up_by_container_supplies_transaction =
      supplies_transaction.querySelector("#pick_up_by_container");
    const transaction_history_list_supplies_transaction =
      supplies_transaction.querySelector("#transaction_history_list");

    withdrawal_form_button.addEventListener("click", () => {
      if (form_tab_supplies_transaction.style.display == "none") {
        form_tab_supplies_transaction.style.display = "block";
      } else {
        form_tab_supplies_transaction.style.display = "none";
      }
    });

    var done_transactions = [];
    for (let y = 1; y < stf_data_list.content.length; y++) {
      if (
        !done_transactions.includes(
          stf_data_list.content[y][
            findTextInArray(stf_data_list, "PRF # / WSF #")
          ]
        )
      ) {
        done_transactions.push(
          stf_data_list.content[y][
            findTextInArray(stf_data_list, "PRF # / WSF #")
          ]
        );
      }
    }

    // supplies_transaction_list
    var table_data_counter = 1;
    for (let x = 1; x < wsf_data_list.content.length; x++) {
      if (
        !done_transactions.includes(
          wsf_data_list.content[x][findTextInArray(wsf_data_list, "WSF #")]
        )
      ) {
        var quantity = 0;
        var total_amount = 0;
        var item_name;
        for (let y = 1; y < iid_data_list.content.length; y++) {
          if (
            wsf_data_list.content[x][findTextInArray(wsf_data_list, "IID #")] ==
            iid_data_list.content[y][findTextInArray(iid_data_list, "IID #")]
          ) {
            item_name =
              iid_data_list.content[y][findTextInArray(iid_data_list, "ITEM")];
          }
        }
        var table_data_supplies_transaction = `
                <tr>
                    <td>${table_data_counter}</td>
                    <td>${
                      wsf_data_list.content[x][
                        findTextInArray(wsf_data_list, "WSF #")
                      ]
                    }</td>
                    <td>${
                      wsf_data_list.content[x][
                        findTextInArray(wsf_data_list, "IID #")
                      ]
                    }</td>
                    <td>${item_name}</td>
                    <td>${
                      wsf_data_list.content[x][
                        findTextInArray(wsf_data_list, "QUANTITY")
                      ]
                    }</td>
                    <td>${
                      wsf_data_list.content[x][
                        findTextInArray(wsf_data_list, "PURPOSE")
                      ]
                    }</td>
                    <td>${
                      wsf_data_list.content[x][
                        findTextInArray(wsf_data_list, "DEPARTMENT")
                      ]
                    }</td>
                    <td>${
                      wsf_data_list.content[x][
                        findTextInArray(wsf_data_list, "SUBMITTED BY")
                      ]
                    }</td>
                </tr>
                `;
        table_data_counter += 1;
        supplies_transaction_list.insertAdjacentHTML(
          "beforeend",
          table_data_supplies_transaction
        );
      }
    }

    // transaction_history_list
    var table_data_counter = 1;
    for (let x = stf_data_list.content.length - 1; x >= 1; x--) {
      var quantity = 0;
      var total_amount = 0;
      var item_name;
      for (let y = 1; y < iid_data_list.content.length; y++) {
        if (
          stf_data_list.content[x][findTextInArray(stf_data_list, "IID #")] ==
          iid_data_list.content[y][findTextInArray(iid_data_list, "IID #")]
        ) {
          item_name =
            iid_data_list.content[y][findTextInArray(iid_data_list, "ITEM")];
        }
      }
      var department = "",
        pick_up_by = "",
        submitted_by = "";
      for (let y = 1; y < wsf_data_list.content.length; y++) {
        if (
          stf_data_list.content[x][
            findTextInArray(stf_data_list, "PRF # / WSF #")
          ] == wsf_data_list.content[y][findTextInArray(wsf_data_list, "WSF #")]
        ) {
          department =
            wsf_data_list.content[y][
              findTextInArray(wsf_data_list, "DEPARTMENT")
            ];
          pick_up_by =
            wsf_data_list.content[y][
              findTextInArray(wsf_data_list, "PICK UP BY")
            ];
          submitted_by =
            wsf_data_list.content[y][
              findTextInArray(wsf_data_list, "SUBMITTED BY")
            ];
        } else {
          department = "";
          pick_up_by = "";
          submitted_by =
            stf_data_list.content[x][
              findTextInArray(stf_data_list, "SUBMITTED BY")
            ];
        }
      }
      var table_data_supplies_transaction = `
            <tr>
                <td>${table_data_counter}</td>
                <td>${
                  stf_data_list.content[x][
                    findTextInArray(stf_data_list, "TRANSACTION")
                  ]
                }</td>
                <td>${
                  stf_data_list.content[x][
                    findTextInArray(stf_data_list, "STF #")
                  ]
                }</td>
                <td>${
                  stf_data_list.content[x][
                    findTextInArray(stf_data_list, "PRF # / WSF #")
                  ]
                }</td>
                <td>${
                  stf_data_list.content[x][
                    findTextInArray(stf_data_list, "IID #")
                  ]
                }</td>
                <td>${item_name}</td>
                <td>${
                  stf_data_list.content[x][
                    findTextInArray(stf_data_list, "QUANTITY")
                  ]
                }</td>
                <td>${
                  stf_data_list.content[x][
                    findTextInArray(stf_data_list, "PURPOSE")
                  ]
                }</td>
                <td>${department}</td>
                <td>${submitted_by}</td>
                <td>${pick_up_by}</td>
            </tr>
            `;
      table_data_counter += 1;
      transaction_history_list_supplies_transaction.insertAdjacentHTML(
        "beforeend",
        table_data_supplies_transaction
      );
    }

    var iid_no_array = [];
    var iid_item_array = [];
    for (let x = 1; x < iid_data_list.content.length; x++) {
      iid_no_array.push(
        iid_data_list.content[x][findTextInArray(iid_data_list, "IID #")]
      );
      iid_item_array.push(
        iid_data_list.content[x][findTextInArray(iid_data_list, "ITEM")]
      );
    }

    search_wsf_form_no_button_supplies_transaction.addEventListener(
      "click",
      () => {
        var purpose;
        for (let x = 1; x < wsf_data_list.content.length; x++) {
          if (
            search_wsf_form_no_supplies_transaction.value ==
            wsf_data_list.content[x][findTextInArray(wsf_data_list, "WSF #")]
          ) {
            // addIIDItem();
            const iid_counter = document.getElementById("iid_counter");
            iid_counter.value = parseInt(iid_counter.value) + 1;
            var item_name;
            purpose =
              wsf_data_list.content[x][
                findTextInArray(wsf_data_list, "PURPOSE")
              ];
            for (let y = 0; y < iid_no_array.length; y++) {
              if (
                wsf_data_list.content[x][
                  findTextInArray(wsf_data_list, "IID #")
                ] == iid_no_array[y]
              ) {
                item_name = iid_item_array[y];
                break;
              }
            }
            var iid_data = `
                    
                    <div id="iid_container${
                      iid_counter.value
                    }" class="iid_container" style="display: flex; gap: 20px;">
                        <input type="hidden" name="amount" id="amount" value="">
                        <div id="iid_form_no">
                            <label for="iid_form_no${iid_counter.value}">
                                <i class="fa-solid fa-list-ol"></i>
                                IID #
                            </label><br>
                            <div class="form">
                                <input type="text" id="iid_form_no${
                                  iid_counter.value
                                }" name="iid_form_no${
              iid_counter.value
            }" autocomplete="off" required readonly class="form-control" value="${
              wsf_data_list.content[x][findTextInArray(wsf_data_list, "IID #")]
            }">
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px">
                            <div>
                                <label for="item${iid_counter.value}">
                                    <i class="fa-solid fa-list-ol"></i>
                                    Item
                                </label>
                                <input type="text" id="item${
                                  iid_counter.value
                                }" name="item${
              iid_counter.value
            }" autocomplete="off" class="form-control" required readonly value="${item_name}">
                            </div>
                            <div>
                                <label for="quantity${iid_counter.value}">
                                    <i class="fa-solid fa-list-ol"></i>
                                    Quantity
                                </label>
                                <input type="text" id="quantity" name="quantity${
                                  iid_counter.value
                                }" autocomplete="off" class="form-control" required value="${
              wsf_data_list.content[x][
                findTextInArray(wsf_data_list, "QUANTITY")
              ]
            }">
                            </div>
                        </div>
                    </div><hr>
                    `;
            item_container_supplies_transaction.insertAdjacentHTML(
              "beforeend",
              iid_data
            );
          }
        }
        var purpose_data = `
            <div id="purpose_container">
                <label for="purpose">
                    <i class="fa-solid fa-list-ol"></i>
                    Purpose
                </label>
            </div>
            <input type="text" id="purpose" name="purpose" autocomplete="off" class="form-control" required value="${purpose}"><br>
            `;
        item_container_supplies_transaction.insertAdjacentHTML(
          "beforeend",
          purpose_data
        );
        pick_up_by_container_supplies_transaction.style.display = "block";
      }
    );

    var driver_data = [];
    for (let x = 1; x < employee_data_list.content.length; x++) {
      if (
        employee_data_list.content[x][
          findTextInArray(employee_data_list, "EMPLOYEE STATUS")
        ] == "ACTIVE"
      ) {
        var gender =
          employee_data_list.content[x][
            findTextInArray(employee_data_list, "GENDER")
          ];
        if (gender == "MALE") {
          var full_name = `${
            employee_data_list.content[x][
              findTextInArray(employee_data_list, "LAST NAME")
            ]
          }, ${
            employee_data_list.content[x][
              findTextInArray(employee_data_list, "FIRST NAME")
            ]
          } ${
            employee_data_list.content[x][
              findTextInArray(employee_data_list, "MIDDLE NAME")
            ]
          } ${
            employee_data_list.content[x][
              findTextInArray(employee_data_list, "AFFIX")
            ]
          }`;
          driver_data.push(full_name);
        } else {
          var full_name = `${
            employee_data_list.content[x][
              findTextInArray(employee_data_list, "LAST NAME")
            ]
          }, ${
            employee_data_list.content[x][
              findTextInArray(employee_data_list, "FIRST NAME")
            ]
          } ${
            employee_data_list.content[x][
              findTextInArray(employee_data_list, "MIDDLE NAME")
            ]
          } - ${
            employee_data_list.content[x][
              findTextInArray(employee_data_list, "SPOUSE NAME")
            ]
          }`;
          driver_data.push(full_name);
        }
      }
    }

    const search_wrapper2 = document.getElementById("search_employee");
    const input_box2 = search_wrapper2.querySelector("input");
    const sugg_box2 = search_wrapper2.querySelector(".autocom_box");

    input_box2.onkeyup = (e) => {
      let user_data = e.target.value;
      let empty_array = [];
      if (user_data) {
        empty_array = driver_data.filter((data) => {
          return data
            .toLocaleLowerCase()
            .includes(user_data.toLocaleLowerCase());
        });
        empty_array = empty_array.map((data) => {
          return "<li>" + data + "</li>";
        });
        search_wrapper2.classList.add("active");
        show_suggestions2(empty_array);
      } else {
        search_wrapper2.classList.remove("active");
      }
    };
    sugg_box2.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        select2(e.target.innerHTML);
      }
    });
    function select2(element) {
      let select_user_data = element;
      input_box2.value = select_user_data;
      search_wrapper2.classList.remove("active");
    }
    function show_suggestions2(list) {
      let list_data;
      if (!list.length) {
        user_value = input_box2.value;
        list_data = "<li>" + user_value + "</li>";
      } else {
        list_data = list.join("");
      }
      sugg_box2.innerHTML = list_data;
    }

    // supplies_inventory
    // FORM GENERATOR
    // iid_data_list
    const iid_form_no = document.getElementById("iid_form_no");
    var last_row = iid_data_list.content.length - 1;
    var data_info =
      iid_data_list.content[last_row][findTextInArray(iid_data_list, "IID #")];
    var data_counter;
    if (last_row == 0) {
      data_counter = 0;
    } else {
      data_counter = data_info.slice(-4);
    }
    data_counter = (parseInt(data_counter) + 1).toString().padStart(4, "0");
    iid_form_no.value = `IID${data_counter}`;

    const supplies_inventory = document.querySelector("#supplies_inventory");
    const new_item_form_button = supplies_inventory.querySelector(
      "#new_item_form_button"
    );
    const form_tab_supplies_inventory =
      supplies_inventory.querySelector("#form_tab");
    const supplies_inventory_list = supplies_inventory.querySelector(
      "#supplies_inventory_list"
    );
    const add_item_button_supplies_inventory =
      supplies_inventory.querySelector("#add_item_button");
    const remove_item_button_supplies_inventory =
      supplies_inventory.querySelector("#remove_item_button");

    new_item_form_button.addEventListener("click", () => {
      if (form_tab_supplies_inventory.style.display == "none") {
        form_tab_supplies_inventory.style.display = "block";
      } else {
        form_tab_supplies_inventory.style.display = "none";
      }
    });

    add_item_button_supplies_inventory.addEventListener("click", () => {
      const inventory_counter =
        supplies_inventory.querySelector("#inventory_counter");
      addTransaction();
      if (inventory_counter.value > 1) {
        remove_item_button_supplies_inventory.style.display = "block";
      }
    });
    remove_item_button_supplies_inventory.addEventListener("click", () => {
      const inventory_counter =
        supplies_inventory.querySelector("#inventory_counter");
      const item = supplies_inventory.querySelector(
        `#items${inventory_counter.value}`
      );
      inventory_counter.value = parseInt(inventory_counter.value) - 1;
      item.remove();
      if (inventory_counter.value == 1) {
        remove_item_button_supplies_inventory.style.display = "none";
      }
    });

    function addTransaction() {
      const item_container =
        supplies_inventory.querySelector("#item_container");
      const inventory_counter =
        supplies_inventory.querySelector("#inventory_counter");
      inventory_counter.value = parseInt(inventory_counter.value) + 1;
      var transaction_data = `
            <div id="items${inventory_counter.value}" style="display: flex; gap: 20px;">
                <div class="form">
                    <label for="storage_type${inventory_counter.value}">
                        <i class="fa-solid fa-table-list"></i>
                        Storage Type
                    </label>
                    <select name="storage_type${inventory_counter.value}" id="storage_type${inventory_counter.value}" class="form-control" required>
                        <option value="">SELECT</option>
                        <option value="RACK">RACK</option>
                        <option value="PALLET">PALLET</option>
                        <option value="LOCKER">LOCKER</option>
                        <option value="1ST FLOOR">1ST FLOOR</option>
                        <option value="2ND FLOOR">2ND FLOOR</option>
                    </select>
                </div>
                <div id="item_detail${inventory_counter.value}" style="display: flex; gap: 20px;">
                </div>
            </div>
            `;
      item_container.insertAdjacentHTML("beforeend", transaction_data);

      const storage_type = supplies_inventory.querySelector(
        `#storage_type${inventory_counter.value}`
      );
      const item_detail = supplies_inventory.querySelector(
        `#item_detail${inventory_counter.value}`
      );

      storage_type.addEventListener("change", () => {
        if (storage_type.value == "RACK") {
          var data = `
                    <div class="form">
                        <label for="area${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Rack
                        </label>
                        <select name="area${inventory_counter.value}" id="area${inventory_counter.value}" class="form-control" required>
                            <option value="">SELECT</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="H">H</option>
                            <option value="I">I</option>
                            <option value="J">J</option>
                            <option value="K">K</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="N">N</option>
                            <option value="O">O</option>
                            <option value="P">P</option>
                            <option value="Q">Q</option>
                        </select>
                    </div>
                    <div class="form">
                        <label for="level${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Level
                        </label>
                        <select name="level${inventory_counter.value}" id="level${inventory_counter.value}" class="form-control" required>
                            <option value="">SELECT</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div class="form">
                        <label for="item${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Item
                        </label>
                        <input type="text" name="item${inventory_counter.value}" id="item${inventory_counter.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                    </div>
                    <div class="form">
                        <label for="description${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Description
                        </label>
                        <input type="text" name="description${inventory_counter.value}" id="description${inventory_counter.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                    </div>
                    <div class="form">
                        <label for="unit${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Unit
                        </label>
                        <input type="text" id="unit${inventory_counter.value}" name="unit${inventory_counter.value}" autocomplete="off" class="form-control" required placeholder="ex. kg/pc/box/set">
                    </div>
                    <div class="form">
                        <label for="quantity${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Quantity
                        </label>
                        <input type="number" id="quantity${inventory_counter.value}" name="quantity${inventory_counter.value}" autocomplete="off" class="form-control" required style="width: 100px">
                    </div>
                    <div class="form">
                        <label for="amount${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Price/Unit
                        </label>
                        <input type="number" id="amount${inventory_counter.value}" name="amount${inventory_counter.value}" autocomplete="off" class="form-control" required placeholder="Amount" style="width: 150px">
                    </div>
                    `;
          item_detail.innerHTML = data;
        } else if (storage_type.value == "PALLET") {
          var data = `
                    <div class="form">
                        <label for="area${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Pallet #
                        </label>
                        <input type="number" name="area${inventory_counter.value}" id="area${inventory_counter.value}" class="form-control" step="1" autocomplete="off" required style="width: 100px;">
                    </div>
                    <div class="form">
                        <label for="level${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Level
                        </label>
                        <input type="number" name="level${inventory_counter.value}" id="level${inventory_counter.value}" class="form-control" step="1" autocomplete="off" required readonly style="width: 100px;" value="1">
                    </div>
                    <div class="form">
                        <label for="item${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Item
                        </label>
                        <input type="text" name="item${inventory_counter.value}" id="item${inventory_counter.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                    </div>
                    <div class="form">
                        <label for="description${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Description
                        </label>
                        <input type="text" name="description${inventory_counter.value}" id="description${inventory_counter.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                    </div>
                    <div class="form">
                        <label for="unit${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Unit
                        </label>
                        <input type="text" id="unit${inventory_counter.value}" name="unit${inventory_counter.value}" autocomplete="off" class="form-control" required placeholder="ex. kg/pc/box/set">
                    </div>
                    <div class="form">
                        <label for="quantity${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Quantity
                        </label>
                        <input type="number" id="quantity${inventory_counter.value}" name="quantity${inventory_counter.value}" autocomplete="off" class="form-control" required style="width: 100px">
                    </div>
                    <div class="form">
                        <label for="amount${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Price/Unit
                        </label>
                        <input type="number" id="amount${inventory_counter.value}" name="amount${inventory_counter.value}" autocomplete="off" class="form-control" required placeholder="Amount" style="width: 150px">
                    </div>
                    `;
          item_detail.innerHTML = data;
        } else if (storage_type.value == "LOCKER") {
          var data = `
                    <div class="form" style="color: white">
                        <label for="area${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Pallet #
                        </label>
                        <input type="number" name="area${inventory_counter.value}" id="area${inventory_counter.value}" class="form-control" step="1" autocomplete="off" required style="width: 100px; border: none !important"">
                    </div>
                    <div class="form">
                        <label for="level${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Locker
                        </label>
                        <select name="level${inventory_counter.value}" id="level${inventory_counter.value}" class="form-control" required>
                            <option value="">SELECT</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div class="form">
                        <label for="item${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Item
                        </label>
                        <input type="text" name="item${inventory_counter.value}" id="item${inventory_counter.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                    </div>
                    <div class="form">
                        <label for="description${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Description
                        </label>
                        <input type="text" name="description${inventory_counter.value}" id="description${inventory_counter.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                    </div>
                    <div class="form">
                        <label for="unit${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Unit
                        </label>
                        <input type="text" id="unit${inventory_counter.value}" name="unit${inventory_counter.value}" autocomplete="off" class="form-control" required placeholder="ex. kg/pc/box/set">
                    </div>
                    <div class="form">
                        <label for="quantity${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Quantity
                        </label>
                        <input type="number" id="quantity${inventory_counter.value}" name="quantity${inventory_counter.value}" autocomplete="off" class="form-control" required style="width: 100px">
                    </div>
                    <div class="form">
                        <label for="amount${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Price/Unit
                        </label>
                        <input type="number" id="amount${inventory_counter.value}" name="amount${inventory_counter.value}" autocomplete="off" class="form-control" required placeholder="Amount" style="width: 150px">
                    </div>
                    `;
          item_detail.innerHTML = data;
        } else if (storage_type.value == "1ST FLOOR") {
          var data = `
                    <div class="form" style="color: white">
                        <label for="area${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Pallet #
                        </label>
                        <input type="number" name="area${inventory_counter.value}" id="area${inventory_counter.value}" class="form-control" step="1" autocomplete="off" required style="width: 100px; border: none !important">
                    </div>
                    <div class="form" style="color: white">
                        <label for="level${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Level
                        </label>
                        <input type="number" name="level${inventory_counter.value}" id="level${inventory_counter.value}" class="form-control" step="1" autocomplete="off" required readonly style="width: 100px; border: none !important">
                    </div>
                    <div class="form">
                        <label for="item${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Item
                        </label>
                        <input type="text" name="item${inventory_counter.value}" id="item${inventory_counter.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                    </div>
                    <div class="form">
                        <label for="description${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Description
                        </label>
                        <input type="text" name="description${inventory_counter.value}" id="description${inventory_counter.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                    </div>
                    <div class="form">
                        <label for="unit${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Unit
                        </label>
                        <input type="text" id="unit${inventory_counter.value}" name="unit${inventory_counter.value}" autocomplete="off" class="form-control" required placeholder="ex. kg/pc/box/set">
                    </div>
                    <div class="form">
                        <label for="quantity${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Quantity
                        </label>
                        <input type="number" id="quantity${inventory_counter.value}" name="quantity${inventory_counter.value}" autocomplete="off" class="form-control" required style="width: 100px">
                    </div>
                    <div class="form">
                        <label for="amount${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Price/Unit
                        </label>
                        <input type="number" id="amount${inventory_counter.value}" name="amount${inventory_counter.value}" autocomplete="off" class="form-control" required placeholder="Amount" style="width: 150px">
                    </div>
                    `;
          item_detail.innerHTML = data;
        } else if (storage_type.value == "2ND FLOOR") {
          var data = `
                    <div class="form" style="color: white">
                        <label for="area${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Pallet #
                        </label>
                        <input type="number" name="area${inventory_counter.value}" id="area${inventory_counter.value}" class="form-control" step="1" autocomplete="off" required style="width: 100px; border: none !important">
                    </div>
                    <div class="form" style="color: white">
                        <label for="level${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Level
                        </label>
                        <input type="number" name="level${inventory_counter.value}" id="level${inventory_counter.value}" class="form-control" step="1" autocomplete="off" required readonly style="width: 100px; border: none !important">
                    </div>
                    <div class="form">
                        <label for="item${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Item
                        </label>
                        <input type="text" name="item${inventory_counter.value}" id="item${inventory_counter.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                    </div>
                    <div class="form">
                        <label for="description${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Description
                        </label>
                        <input type="text" name="description${inventory_counter.value}" id="description${inventory_counter.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                    </div>
                    <div class="form">
                        <label for="unit${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Unit
                        </label>
                        <input type="text" id="unit${inventory_counter.value}" name="unit${inventory_counter.value}" autocomplete="off" class="form-control" required placeholder="ex. kg/pc/box/set">
                    </div>
                    <div class="form">
                        <label for="quantity${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Quantity
                        </label>
                        <input type="number" id="quantity${inventory_counter.value}" name="quantity${inventory_counter.value}" autocomplete="off" class="form-control" required style="width: 100px">
                    </div>
                    <div class="form">
                        <label for="amount${inventory_counter.value}">
                            <i class="fa-solid fa-table-list"></i>
                            Price/Unit
                        </label>
                        <input type="number" id="amount${inventory_counter.value}" name="amount${inventory_counter.value}" autocomplete="off" class="form-control" required placeholder="Amount" style="width: 150px">
                    </div>
                    `;
          item_detail.innerHTML = data;
        } else {
          item_detail.innerHTML = "";
        }
      });
    }

    addTransaction();

    var table_data_counter = 1;
    for (let x = 1; x < iid_data_list.content.length; x++) {
      var quantity = 0;
      var total_amount = 0;
      var iid_no =
        iid_data_list.content[x][findTextInArray(iid_data_list, "IID #")];
      var amount =
        iid_data_list.content[x][findTextInArray(iid_data_list, "AMOUNT/UNIT")];
      for (let y = 1; y < stf_data_list.content.length; y++) {
        if (
          iid_no ==
          stf_data_list.content[y][findTextInArray(stf_data_list, "IID #")]
        ) {
          if (
            stf_data_list.content[y][
              findTextInArray(stf_data_list, "TRANSACTION")
            ] == "RE-STOCK"
          ) {
            quantity +=
              stf_data_list.content[y][
                findTextInArray(stf_data_list, "QUANTITY")
              ];
            total_amount +=
              stf_data_list.content[y][
                findTextInArray(stf_data_list, "QUANTITY")
              ] * amount;
          } else if (
            stf_data_list.content[y][
              findTextInArray(stf_data_list, "TRANSACTION")
            ] == "WITHDRAWAL"
          ) {
            quantity -=
              stf_data_list.content[y][
                findTextInArray(stf_data_list, "QUANTITY")
              ];
            total_amount -=
              stf_data_list.content[y][
                findTextInArray(stf_data_list, "QUANTITY")
              ] * amount;
          } else if (
            stf_data_list.content[y][
              findTextInArray(stf_data_list, "TRANSACTION")
            ] == "NEW ITEM"
          ) {
            quantity +=
              stf_data_list.content[y][
                findTextInArray(stf_data_list, "QUANTITY")
              ];
            total_amount +=
              stf_data_list.content[y][
                findTextInArray(stf_data_list, "QUANTITY")
              ] * amount;
          }
        }
      }
      var table_data_supplies_inventory = `
            <tr>
                <td>${table_data_counter}</td>
                <td>${
                  iid_data_list.content[x][
                    findTextInArray(iid_data_list, "IID #")
                  ]
                }</td>
                <td>${
                  iid_data_list.content[x][
                    findTextInArray(iid_data_list, "STORAGE TYPE")
                  ]
                }</td>
                <td>${
                  iid_data_list.content[x][
                    findTextInArray(iid_data_list, "RACK/ PALLET")
                  ]
                }</td>
                <td>${
                  iid_data_list.content[x][
                    findTextInArray(iid_data_list, "LEVEL")
                  ]
                }</td>
                <td>${
                  iid_data_list.content[x][
                    findTextInArray(iid_data_list, "ITEM")
                  ]
                }</td>
                <td>${
                  iid_data_list.content[x][
                    findTextInArray(iid_data_list, "DESCRIPTION")
                  ]
                }</td>
                <td>${
                  iid_data_list.content[x][
                    findTextInArray(iid_data_list, "UNIT")
                  ]
                }</td>
                <td>${quantity}</td>
                <td>${amount}</td>
                <td>${formatNumber(total_amount)}</td>
                <td>${
                  iid_data_list.content[x][
                    findTextInArray(iid_data_list, "SUBMITTED BY")
                  ]
                }</td>
            </tr>
            `;
      table_data_counter += 1;
      supplies_inventory_list.insertAdjacentHTML(
        "beforeend",
        table_data_supplies_inventory
      );
    }

    // gate_pass_transaction
    const gate_pass_transaction = document.querySelector(
      "#gate_pass_transaction"
    );
    const gate_pass_form_button = gate_pass_transaction.querySelector(
      "#gate_pass_form_button"
    );
    const form_tab_gate_pass_transaction =
      gate_pass_transaction.querySelector("#form_tab");
    const item_container_gate_pass_transaction =
      gate_pass_transaction.querySelector("#item_container");
    const add_item_button_gate_pass_transaction =
      gate_pass_transaction.querySelector("#add_item_button");
    const remove_item_button_gate_pass_transaction =
      gate_pass_transaction.querySelector("#remove_item_button");
    const generate_button_gate_pass_transaction =
      gate_pass_transaction.querySelector("#generate_button");
    const download_button_gate_pass_transaction =
      gate_pass_transaction.querySelector("#download_button");
    const what_to_print_gate_pass_transaction =
      gate_pass_transaction.querySelector("#what_to_print");
    const what_to_print_container_gate_pass_transaction =
      gate_pass_transaction.querySelector("#what_to_print_container");
    const gp_form_no_gate_pass_transaction =
      gate_pass_transaction.querySelector("#gp_form_no");
    const issued_to_gate_pass_transaction =
      gate_pass_transaction.querySelector("#issued_to");
    const company_gate_pass_transaction =
      gate_pass_transaction.querySelector("#company");
    const address_gate_pass_transaction =
      gate_pass_transaction.querySelector("#address");
    const plate_no_gate_pass_transaction =
      gate_pass_transaction.querySelector("#plate_no");
    const type_of_vehicle_gate_pass_transaction =
      gate_pass_transaction.querySelector("#type_of_vehicle");
    const date_input_gate_pass_transaction =
      gate_pass_transaction.querySelector("#date_input");
    const time_in_gate_pass_transaction =
      gate_pass_transaction.querySelector("#time_in");
    const time_out_gate_pass_transaction =
      gate_pass_transaction.querySelector("#time_out");
    const remarks1_gate_pass_transaction =
      gate_pass_transaction.querySelector("#remarks1");
    const remarks2_gate_pass_transaction =
      gate_pass_transaction.querySelector("#remarks2");
    const truck_scale_gate_pass_transaction =
      gate_pass_transaction.querySelector("#truck_scale");
    const other_remarks_gate_pass_transaction =
      gate_pass_transaction.querySelector("#other_remarks");
    const gate_pass_list_gate_pass_transaction =
      gate_pass_transaction.querySelector("#gate_pass_list");

    gate_pass_form_button.addEventListener("click", () => {
      if (form_tab_gate_pass_transaction.style.display == "none") {
        form_tab_gate_pass_transaction.style.display = "block";
      } else {
        form_tab_gate_pass_transaction.style.display = "none";
      }
    });

    add_item_button_gate_pass_transaction.addEventListener("click", () => {
      addGatePassItem();
      const item_counter_gate_pass_transaction =
        gate_pass_transaction.querySelector("#item_counter");

      remove_item_button_gate_pass_transaction.style.display = "block";
      if (item_counter_gate_pass_transaction.value >= 15) {
        add_item_button_gate_pass_transaction.style.display = "none";
      }
    });
    function addGatePassItem() {
      const item_counter_gate_pass_transaction =
        gate_pass_transaction.querySelector("#item_counter");
      item_counter_gate_pass_transaction.value++;
      var item_data = `
            <div id="item${item_counter_gate_pass_transaction.value}">
                <div style="display: flex; gap: 20px;">
                    <div>
                        <label for="item_description${item_counter_gate_pass_transaction.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Item Description:
                        </label><br>
                        <input type="text" id="item_description${item_counter_gate_pass_transaction.value}" name="item_description${item_counter_gate_pass_transaction.value}" autocomplete="off" class="form-control" required style="width: 520px;">
                    </div>
                    <div>
                        <label for="quantity${item_counter_gate_pass_transaction.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Quantity:
                        </label><br>
                        <input type="number" id="quantity${item_counter_gate_pass_transaction.value}" name="quantity${item_counter_gate_pass_transaction.value}" autocomplete="off" class="form-control form" required>
                    </div>
                    <div>
                        <label for="unit${item_counter_gate_pass_transaction.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Unit:
                        </label><br>
                        <input type="text" id="unit${item_counter_gate_pass_transaction.value}" name="unit${item_counter_gate_pass_transaction.value}" autocomplete="off" class="form-control form" required>
                    </div>
                </div><br>
            </div>
            `;
      item_container_gate_pass_transaction.insertAdjacentHTML(
        "beforeend",
        item_data
      );
    }
    addGatePassItem();

    remove_item_button_gate_pass_transaction.addEventListener("click", () => {
      const item_counter_gate_pass_transaction =
        gate_pass_transaction.querySelector("#item_counter");
      const item_gate_pass_transaction = gate_pass_transaction.querySelector(
        `#item${item_counter_gate_pass_transaction.value}`
      );
      item_gate_pass_transaction.remove();
      item_counter_gate_pass_transaction.value--;

      if (item_counter_gate_pass_transaction.value == 1) {
        remove_item_button_gate_pass_transaction.style.display = "none";
      } else if (item_counter_gate_pass_transaction.value < 15) {
        add_item_button_gate_pass_transaction.style.display = "block";
      }
    });

    generate_button_gate_pass_transaction.addEventListener("click", () => {
      var signature = "";
      if (user_name == "BENHUR DAILEG") {
        signature = "DAILEG_BENHUR.png";
      } else if (user_name == "NATHANIEL MARCOLINO") {
        signature = "MARCOLINO_NATHANIEL.png";
      }
      const item_counter_gate_pass_transaction =
        gate_pass_transaction.querySelector("#item_counter");
      var table_data = "";
      var counter = 1;
      for (let x = 1; x <= item_counter_gate_pass_transaction.value; x++) {
        const item_description = gate_pass_transaction.querySelector(
          `#item_description${x}`
        );
        const quantity = gate_pass_transaction.querySelector(`#quantity${x}`);
        const unit = gate_pass_transaction.querySelector(`#unit${x}`);
        var table_row = `
                <tr>
                    <td>${counter}</td>
                    <td>${item_description.value}</td>
                    <td>${quantity.value}</td>
                    <td>${unit.value}</td>
                </tr>
                `;
        counter++;
        table_data += table_row;
      }
      for (let x = 1; x <= 15 - item_counter_gate_pass_transaction.value; x++) {
        table_data += `
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                `;
      }
      var form_data = `
            <div id="container">
                <div style="display: grid; grid-template-columns: 70% 30%; border-bottom: 2px solid black;">
                    <div style="display: flex; border-right: 2px solid black;">
                        <img src="../images/logo.png" id="background-image" style="width: 72px; height: 72px;">
                        <div style="display: flex; flex-direction: column; padding-left: 5px;">
                            <img src="../images/logo_name2.png" id="background-image" style="height: 30px; margin-top: 5px;">
                            <h6>888, Purok 5, Irabagon St. Brgy. Anyatam San Ildefonso, Bulacan-3010</h6>
                            <h6>No: (+63 2) 579 3381, (+63 44) 896 0165</h6>
                            <h6>Email Address: fareastfuel@gmail.com</h6>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-center" style="font-weight: bold; border-bottom: 2px solid black; background-color: #198754; color: white;"><i>CLIENT'S COPY</i></h3>
                        <h3 class="text-center" style="font-weight: bold; border-bottom: 2px solid black;">GATE PASS FORM</h3>
                        <h1 class="text-center" style="font-weight: bold;">${
                          gp_form_no_gate_pass_transaction.value
                        }</h1>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 70% 30%; border-bottom: 2px solid black;">
                    <div>
                        <div style="display: grid; grid-template-columns: 11.50% 88.50%; width: 100%;">
                            <div style="border-right: 2px solid black;">
                                <h5 style="padding-left: 5px; border-bottom: 2px solid black;">Issued To:</h5>
                                <h5 style="padding-left: 5px; border-bottom: 2px solid black;">Company:</h5>
                                <h5 style="padding-left: 5px;">Address:</h5>
                            </div>
                            <div style="border-right: 2px solid black;">
                                <h5 style="padding-left: 5px; font-weight: bold; border-bottom: 2px solid black;">${
                                  issued_to_gate_pass_transaction.value
                                }</h5>
                                <h5 style="padding-left: 5px; font-weight: bold; border-bottom: 2px solid black;">${
                                  company_gate_pass_transaction.value
                                }</h5>
                                <h5 style="padding-left: 5px; font-weight: bold;">${
                                  address_gate_pass_transaction.value
                                }</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 class="text-center" style="font-weight: bold; border-bottom: 2px solid black;">${date_decoder(
                          date_input_gate_pass_transaction.value
                        )}</h5>
                        <h5 class="text-center" style="font-weight: bold; border-bottom: 2px solid black;">${
                          remarks1_gate_pass_transaction.value
                        }</h5>
                        <h5 class="text-center" style="font-weight: bold;">${
                          remarks2_gate_pass_transaction.value
                        }</h5>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: calc(70% - 2px) 15% 15%; width: 100%; border-bottom: 2px solid black;">
                    <div style="display: grid; grid-template-columns: 25% 75%;">
                        <div style="display: flex;">
                            <h5 style="padding-left: 5px;">Plate No.:</h5>
                            <h5 style="padding-left: 5px; font-weight: bold;">${
                              plate_no_gate_pass_transaction.value
                            }</h5>
                        </div>
                        <div style="display: flex;">
                            <h5 style="padding-left: 5px; border-left: 2px solid black;">Type of Vehicle:</h5>
                            <h5 style="padding-left: 5px; font-weight: bold;">${
                              type_of_vehicle_gate_pass_transaction.value
                            }</h5>
                        </div>
                    </div>
                    <div style="display: flex;">
                        <h5 style="padding-left: 5px; border-left: 2px solid black">Time In:</h5>
                        <h5 style="padding-left: 5px; font-weight: bold;">${convertTo24HourFormat2(
                          time_in_gate_pass_transaction.value
                        )}</h5>
                    </div>
                    <div style="display: flex;">
                        <h5 style="padding-left: 5px; border-left: 2px solid black">Time Out:</h5>
                        <h5 style="padding-left: 5px; font-weight: bold;">${convertTo24HourFormat2(
                          time_out_gate_pass_transaction.value
                        )}</h5>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 80% 20%; width: 100%; border-top: 2px solid black; border-bottom: 2px solid black; margin-top: 10px;">
                    <table>
                        <thead>
                            <tr>
                                <th>ITEM</th>
                                <th>DESCRIPTION</th>
                                <th>QUANTITY</th>
                                <th>UNIT</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${table_data}
                        </tbody>
                    </table>
                    <div>
                        <div style="height: 15px;">
                            <h5 style="text-align: center; font-weight: bold; border-bottom: 1px solid black;">Truck Scale / Remarks</h5>
                        </div>
                        <div style="height: 143px; border-bottom: 1px solid black; display: flex; justify-content: center; align-items: center;">
                            ${truck_scale_gate_pass_transaction.value}
                        </div>
                        <div style="height: 95px; border-bottom: 1px solid black; display: flex; justify-content: center; align-items: center;">
                            ${other_remarks_gate_pass_transaction.value}
                        </div>
                    </div>
                </div>
                <div id="footer"  style="display: grid; grid-template-columns: 20% 20% 20% 20% 20%; position: absolute; bottom: 0; width: 100%; border-top: 2px solid black;">
                    <div style="display: flex; flex-direction: column;">
                        <h6 style="padding-left: 5px;">Prepared By</h6><br>
                        <u><h6 style="font-weight: bold; text-align: center; border-bottom: 1px solid black;">${user_name}</h6></u>
                        <img src="../images/${signature}" alt="">
                        <h6 style="text-align: center;">Warehouse Personel</h6>
                    </div>
                    <div style="display: flex; flex-direction: column; border-left: 2px solid black;">
                        <h6 style="padding-left: 5px;">Checked By</h6><br>
                        <u><h6 style="font-weight: bold; text-align: center; border-bottom: 1px solid black;">AMADO CRUZ III</h6></u>
                        <h6 style="text-align: center;">Finance Staff</h6>
                    </div>
                    <div style="display: flex; flex-direction: column; border-left: 2px solid black;">
                        <h6 style="padding-left: 5px;">Approved By</h6><br>
                        <u><h6 style="font-weight: bold; text-align: center; border-bottom: 1px solid black;">_______________________</h6></u>
                        <h6 style="text-align: center;">Authorized Personnel</h6>
                    </div>
                    <div style="display: flex; flex-direction: column; border-left: 2px solid black;">
                        <h6 style="padding-left: 5px;">Released By</h6><br>
                        <u><h6 style="font-weight: bold; text-align: center; border-bottom: 1px solid black;">_______________________</h6></u>
                        <h6 style="text-align: center;">Security</h6>
                    </div>
                    <div style="display: flex; flex-direction: column; border-left: 2px solid black;">
                        <h6 style="padding-left: 5px;">Received By</h6><br>
                        <u><h6 style="font-weight: bold; text-align: center; border-bottom: 1px solid black;">_______________________</h6></u>
                        <h6 style="text-align: center;">Client / Customer</h6>
                    </div>
                </div>
            </div>
            <div style="margin: 23px 0; width: 100%; border-bottom: 2px solid black;"></div>
            <div id="container">
                <div style="display: grid; grid-template-columns: 70% 30%; border-bottom: 2px solid black;">
                    <div style="display: flex; border-right: 2px solid black;">
                        <img src="../images/logo.png" id="background-image" style="width: 72px; height: 72px;">
                        <div style="display: flex; flex-direction: column; padding-left: 5px;">
                            <img src="../images/logo_name2.png" id="background-image" style="height: 30px; margin-top: 5px;">
                            <h6>888, Purok 5, Irabagon St. Brgy. Anyatam San Ildefonso, Bulacan-3010</h6>
                            <h6>No: (+63 2) 579 3381, (+63 44) 896 0165</h6>
                            <h6>Email Address: fareastfuel@gmail.com</h6>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-center" style="font-weight: bold; border-bottom: 2px solid black; background-color: #dc3545; color: white;"><i>COMPANY'S COPY</i></h3>
                        <h3 class="text-center" style="font-weight: bold; border-bottom: 2px solid black;">GATE PASS FORM</h3>
                        <h1 class="text-center" style="font-weight: bold;">${
                          gp_form_no_gate_pass_transaction.value
                        }</h1>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 70% 30%; border-bottom: 2px solid black;">
                    <div>
                        <div style="display: grid; grid-template-columns: 11.50% 88.50%; width: 100%;">
                            <div style="border-right: 2px solid black;">
                                <h5 style="padding-left: 5px; border-bottom: 2px solid black;">Issued To:</h5>
                                <h5 style="padding-left: 5px; border-bottom: 2px solid black;">Company:</h5>
                                <h5 style="padding-left: 5px;">Address:</h5>
                            </div>
                            <div style="border-right: 2px solid black;">
                                <h5 style="padding-left: 5px; font-weight: bold; border-bottom: 2px solid black;">${
                                  issued_to_gate_pass_transaction.value
                                }</h5>
                                <h5 style="padding-left: 5px; font-weight: bold; border-bottom: 2px solid black;">${
                                  company_gate_pass_transaction.value
                                }</h5>
                                <h5 style="padding-left: 5px; font-weight: bold;">${
                                  address_gate_pass_transaction.value
                                }</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 class="text-center" style="font-weight: bold; border-bottom: 2px solid black;">${date_decoder(
                          date_input_gate_pass_transaction.value
                        )}</h5>
                        <h5 class="text-center" style="font-weight: bold; border-bottom: 2px solid black;">${
                          remarks1_gate_pass_transaction.value
                        }</h5>
                        <h5 class="text-center" style="font-weight: bold;">${
                          remarks2_gate_pass_transaction.value
                        }</h5>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: calc(70% - 2px) 15% 15%; width: 100%; border-bottom: 2px solid black;">
                    <div style="display: grid; grid-template-columns: 25% 75%;">
                        <div style="display: flex;">
                            <h5 style="padding-left: 5px;">Plate No.:</h5>
                            <h5 style="padding-left: 5px; font-weight: bold;">${
                              plate_no_gate_pass_transaction.value
                            }</h5>
                        </div>
                        <div style="display: flex;">
                            <h5 style="padding-left: 5px; border-left: 2px solid black;">Type of Vehicle:</h5>
                            <h5 style="padding-left: 5px; font-weight: bold;">${
                              type_of_vehicle_gate_pass_transaction.value
                            }</h5>
                        </div>
                    </div>
                    <div style="display: flex;">
                        <h5 style="padding-left: 5px; border-left: 2px solid black">Time In:</h5>
                        <h5 style="padding-left: 5px; font-weight: bold;">${convertTo24HourFormat2(
                          time_in_gate_pass_transaction.value
                        )}</h5>
                    </div>
                    <div style="display: flex;">
                        <h5 style="padding-left: 5px; border-left: 2px solid black">Time Out:</h5>
                        <h5 style="padding-left: 5px; font-weight: bold;">${convertTo24HourFormat2(
                          time_out_gate_pass_transaction.value
                        )}</h5>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 80% 20%; width: 100%; border-top: 2px solid black; border-bottom: 2px solid black; margin-top: 10px;">
                    <table>
                        <thead>
                            <tr>
                                <th>ITEM</th>
                                <th>DESCRIPTION</th>
                                <th>QUANTITY</th>
                                <th>UNIT</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${table_data}
                        </tbody>
                    </table>
                    <div>
                        <div style="height: 15px;">
                            <h5 style="text-align: center; font-weight: bold; border-bottom: 1px solid black;">Truck Scale / Remarks</h5>
                        </div>
                        <div style="height: 143px; border-bottom: 1px solid black; display: flex; justify-content: center; align-items: center;">
                            ${truck_scale_gate_pass_transaction.value}
                        </div>
                        <div style="height: 95px; border-bottom: 1px solid black; display: flex; justify-content: center; align-items: center;">
                            ${other_remarks_gate_pass_transaction.value}
                        </div>
                    </div>
                </div>
                <div id="footer" style="display: grid; grid-template-columns: 20% 20% 20% 20% 20%; position: absolute; bottom: 0; width: 100%; border-top: 2px solid black;">
                    <div style="display: flex; flex-direction: column;">
                        <h6 style="padding-left: 5px;">Prepared By</h6><br>
                        <u><h6 style="font-weight: bold; text-align: center; border-bottom: 1px solid black;">${user_name}</h6></u>
                        <img src="../images/${signature}" alt="">
                        <h6 style="text-align: center;">Warehouse Personel</h6>
                    </div>
                    <div style="display: flex; flex-direction: column; border-left: 2px solid black;">
                        <h6 style="padding-left: 5px;">Checked By</h6><br>
                        <u><h6 style="font-weight: bold; text-align: center; border-bottom: 1px solid black;">AMADO CRUZ III</h6></u>
                        <h6 style="text-align: center;">Finance Staff</h6>
                    </div>
                    <div style="display: flex; flex-direction: column; border-left: 2px solid black;">
                        <h6 style="padding-left: 5px;">Approved By</h6><br>
                        <u><h6 style="font-weight: bold; text-align: center; border-bottom: 1px solid black;">_______________________</h6></u>
                        <h6 style="text-align: center;">Authorized Personnel</h6>
                    </div>
                    <div style="display: flex; flex-direction: column; border-left: 2px solid black;">
                        <h6 style="padding-left: 5px;">Released By</h6><br>
                        <u><h6 style="font-weight: bold; text-align: center; border-bottom: 1px solid black;">_______________________</h6></u>
                        <h6 style="text-align: center;">Security</h6>
                    </div>
                    <div style="display: flex; flex-direction: column; border-left: 2px solid black;">
                        <h6 style="padding-left: 5px;">Received By</h6><br>
                        <u><h6 style="font-weight: bold; text-align: center; border-bottom: 1px solid black;">_______________________</h6></u>
                        <h6 style="text-align: center;">Client / Customer</h6>
                    </div>
                </div>
            </div>
            `;
      what_to_print_container_gate_pass_transaction.innerHTML = "";
      what_to_print_container_gate_pass_transaction.insertAdjacentHTML(
        "afterbegin",
        form_data
      );
      what_to_print_gate_pass_transaction.style.display = "Block";
      download_button_gate_pass_transaction.style.display = "Block";
    });

    var counter = 1;
    for (let x = 1; x < gpf_data_list.content.length; x++) {
      var data_table = `
            <tr>
                <td>${counter}</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "GPF #")
                  ]
                }</td>
                <td>${date_decoder(
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "DATE")
                  ]
                )}</td>
                <td>${time_decoder(
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "TIME IN")
                  ]
                )}</td>
                <td>${time_decoder(
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "TIME OUT")
                  ]
                )}</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "ITEM DESCRIPTION")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "QUANTITY")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "UNIT")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "ISSUED TO")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "COMPANY")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "ADDRESS")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "PLATE #")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "TYPE OF VEHICLE")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "REMARKS 1")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "REMARKS 2")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "TRUCK SCALE")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "OTHER REMARKS")
                  ]
                }</td>
                <td>${
                  gpf_data_list.content[x][
                    findTextInArray(gpf_data_list, "SUBMITTED BY")
                  ]
                }</td>
            </tr>
            `;
      counter++;
      gate_pass_list_gate_pass_transaction.insertAdjacentHTML(
        "beforeend",
        data_table
      );
    }

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

    maintenance_job_order_button.addEventListener("click", () => {
      if (maintenance_job_order_tab.style.display == "block") {
        maintenance_job_order_tab.style.display = "none";
        // update_vehicle_tab.style.display = "none";
      } else {
        maintenance_job_order_tab.style.display = "block";
        // update_vehicle_tab.style.display = "none";
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
                    findTextInArray(mjo_data_list, "MJO #")
                  ]
                }</td>
                <td>${date_decoder(
                  mjo_data_list.content[x][
                    findTextInArray(mjo_data_list, "CREATED AT")
                  ]
                )} /<br> ${time_decoder(
          mjo_data_list.content[x][findTextInArray(mjo_data_list, "CREATED AT")]
        )}</td>
                <td>${
                  mjo_data_list.content[x][
                    findTextInArray(mjo_data_list, "JOB CATEGORY")
                  ]
                }</td>
                <td>${
                  mjo_data_list.content[x][
                    findTextInArray(mjo_data_list, "PRIORITY LEVEL")
                  ]
                }</td>
                <td>${
                  mjo_data_list.content[x][
                    findTextInArray(mjo_data_list, "FOR MAINTENANCE")
                  ]
                }</td>
                <td>${
                  mjo_data_list.content[x][
                    findTextInArray(mjo_data_list, "DETAILS")
                  ]
                }</td>
                <td>${
                  mjo_data_list.content[x][
                    findTextInArray(mjo_data_list, "REQUISITIONER")
                  ]
                }</td>
                <td>${
                  mjo_data_list.content[x][
                    findTextInArray(mjo_data_list, "DEPARTMENT")
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

    var purchase_request_data_value_counter = 1;
    for (let x = 1; x < prf_data_list.content.length; x++) {
      if (
        prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")] ==
        "PURCHASED"
      ) {
        var pr_data =
          prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
        var button = `
                <form action="https://script.google.com/macros/s/AKfycbxMJ_VUlt6j5bXcSDzuGI8NNJXd2G5KhlvURMXTPaX6pAcFvQ6ZW8Bu--PG3rABBb0o/exec" method="post">
                    <input type="hidden" name="itm_form_no" id="itm_form_no" value="${pr_data}">
                    <input type="hidden" name="timestamp" id="timestamp" value="${new Date()}">
                    <input type="hidden" name="user" id="user" value="${user_name}">
                    <button type="submit" style="background-color: transparent !important; padding:0; color: #198754; border: none">
                        <i class="fa-solid fa-clipboard-check"></i>
                    </button>
                </form>
                `;
        var purchase_request_data_value = `
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
          prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")]
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
        purchase_request_list.insertAdjacentHTML(
          "beforeend",
          purchase_request_data_value
        );
        purchase_request_data_value_counter += 1;
      }
    }
    for (let x = 1; x < prf_data_list.content.length; x++) {
      if (
        prf_data_list.content[x][
          findTextInArray(prf_data_list, "SUBMITTED BY")
        ] == user_name
      ) {
        if (
          prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")] !=
          "PURCHASED"
        ) {
          var purchase_request_data_value = `
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
        purchase_request_list.insertAdjacentHTML(
          "beforeend",
          purchase_request_data_value
        );
        purchase_request_data_value_counter += 1;
      }
    }

    purchase_request_form_button.addEventListener("click", () => {
      if (form_tab.style.display == "block") {
        form_tab.style.display = "none";
      } else {
        form_tab.style.display = "block";
      }
    });

    // // incident report form
    // const irf_form_no = document.getElementById("irf_form_no");
    // var irf_code_year_month;
    // irf_code_year_month = `IRF${today_year}${today_month}`;

    // var data_content = 1;
    // var data_info;
    // var data_last_3digit = 0;

    // for(x=1; x<irf_data_list.content.length; x++){
    //     data_info = irf_data_list.content[x][findTextInArray(irf_data_list, "IRF #")];

    //     if(data_info.includes(irf_code_year_month) == true){
    //         data_last_3digit = data_info.slice(9)
    //     }
    // }

    // data_content = parseInt(data_last_3digit) +1

    // if(data_content.toString().length == 1){
    //     data_counter = `00${data_content}`;
    // }
    // else if(data_content.toString().length == 2){
    //     data_counter = `0${data_content}`;
    // }
    // else if(data_content.toString().length == 3){
    //     data_counter = `${data_content}`;
    // }

    // irf_form_no.value = `${irf_code_year_month}${data_counter}`

    // const incident_report_form = document.querySelector("#incident_report_form");
    // const person_involved_containers = incident_report_form.querySelector("#person_involved_containers");
    // const irf_counter_incident_report_form = incident_report_form.querySelector("#irf_counter");
    // const add_tf_button_incident_report_form = incident_report_form.querySelector("#add_tf_button");
    // const remove_tf_button_incident_report_form = incident_report_form.querySelector("#add_tf_button");
    // const form_tab_incident_report_form = incident_report_form.querySelector("#form_tab");
    // const incident_report_form_button_incident_report_form = incident_report_form.querySelector("#incident_report_form_button");
    // const incident_history_list_incident_report_form = incident_report_form.querySelector("#incident_history_list");
    // var employee_name = [];
    // var employee_department = [];
    // var employee_designation = [];
    // for(let x = 1; x < employee_data_list.content.length; x++){
    //     if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
    //         var gender = employee_data_list.content[x][findTextInArray(employee_data_list, "GENDER")];
    //         if(gender == "MALE"){
    //             var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "AFFIX")]}`
    //             employee_name.push(full_name);
    //             employee_department.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DEPARTMENT")]);
    //             employee_designation.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DESIGNATION")]);
    //         }
    //         else{
    //             var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[x][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
    //             employee_name.push(full_name);
    //             employee_department.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DEPARTMENT")]);
    //             employee_designation.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DESIGNATION")]);
    //         }
    //     }
    // }
    // function addPersonInvolved(){
    //     const person_involved_container = person_involved_containers.querySelector(`#person_involved_container${irf_counter_incident_report_form.value}`);
    //     var search_wrapper2 = person_involved_container.querySelector(`#search_irf_client${irf_counter_incident_report_form.value}`);
    //     var irf_department = person_involved_container.querySelector(`#irf_department${irf_counter_incident_report_form.value}`);
    //     var irf_designation = person_involved_container.querySelector(`#irf_designation${irf_counter_incident_report_form.value}`);
    //     var irf_client = search_wrapper2.querySelector(`#irf_client${irf_counter_incident_report_form.value}`);
    //     var sugg_box2 = search_wrapper2.querySelector(".autocom_box");
    //     irf_client.onkeyup = (e) => {
    //         let user_data = e.target.value;
    //         let empty_array = [];
    //         if (user_data) {
    //             empty_array = employee_name.filter((data) => {
    //                 return data.toLocaleLowerCase().includes(user_data.toLocaleLowerCase());
    //             });
    //             empty_array = empty_array.map((data) => {
    //                 return '<li>' + data + '</li>';
    //             });
    //             search_wrapper2.classList.add("active");
    //             show_suggestions2(empty_array);
    //         } else {
    //             search_wrapper2.classList.remove("active");
    //         }
    //     };
    //     sugg_box2.addEventListener("click", (e) => {
    //         if (e.target.tagName === "LI") {
    //             select2(e.target.innerHTML);
    //         }
    //     });
    //     function select2(element) {
    //         let select_user_data = element;
    //         search_wrapper2.classList.remove("active");
    //         irf_client.value = select_user_data;
    //         irf_department.value = employee_department[findTextInArray2(employee_name, select_user_data)];
    //         employee_department.splice(findTextInArray2(employee_name, select_user_data), 1);
    //         irf_designation.value = employee_designation[findTextInArray2(employee_name, select_user_data)];
    //         employee_designation.splice(findTextInArray2(employee_name, select_user_data), 1);
    //         employee_name = employee_name.filter(item => item !== select_user_data);
    //     }
    //     function show_suggestions2(list) {
    //         let list_data;
    //         if (!list.length) {
    //             user_value = irf_client.value;
    //             list_data = '<li>' + user_value + '</li>';
    //         } else {
    //             list_data = list.join("");
    //         }
    //         sugg_box2.innerHTML = list_data;
    //     }
    // }
    // addPersonInvolved();
    // add_tf_button_incident_report_form.addEventListener("click", () => {
    //     irf_counter_incident_report_form.value = parseInt(irf_counter_incident_report_form.value) + 1;
    //     var data = `
    //     <div id="person_involved_container${irf_counter_incident_report_form.value}" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
    //         <div class="wrapper">
    //             <label for="irf_client${irf_counter_incident_report_form.value}">
    //                 <i class="fa-solid fa-user"></i>
    //                 Person Involved
    //             </label><br>
    //             <div class="search_input" id="search_irf_client${irf_counter_incident_report_form.value}">
    //                 <input type="text" name="irf_client${irf_counter_incident_report_form.value}" id="irf_client${irf_counter_incident_report_form.value}" autocomplete="off" class="form-control" required placeholder="Type to Search Client Name...">
    //                 <div class="autocom_box">
    //                 </div>
    //                 <div class="icon"><i class="fas fa-search"></i></div>
    //             </div>
    //         </div>
    //         <div>
    //             <label for="irf_department${irf_counter_incident_report_form.value}">
    //                 <i class="fa-solid fa-building-user"></i>
    //                 Department
    //             </label><br>
    //             <input type="text" id="irf_department${irf_counter_incident_report_form.value}" autocomplete="off" name="irf_department${irf_counter_incident_report_form.value}" class="form-control" required readonly placeholder="Input Department..." style="height: 55px !important;">
    //         </div>
    //         <div>
    //             <label for="irf_designation${irf_counter_incident_report_form.value}">
    //                 <i class="fa-solid fa-id-card"></i>
    //                 Designation
    //             </label><br>
    //             <input type="text" id="irf_designation${irf_counter_incident_report_form.value}" autocomplete="off" name="irf_designation${irf_counter_incident_report_form.value}" class="form-control" required readonly placeholder="Input Designation..." style="height: 55px !important;">
    //         </div>
    //     </div>
    //     `
    //     person_involved_containers.insertAdjacentHTML("beforeend", data);
    //     remove_tf_button_incident_report_form.style.display = "block";
    //     addPersonInvolved();
    // })
    // // incident_history_list
    // var incident_history_data_value = "";
    // var incident_history_data_value_counter = 1;

    // for(let x = 1; x < irf_data_list.content.length; x++){
    //     const resultArray = (irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]).split(" || ");
    //     var data_value2 = [];
    //     for(let z = 0; z < resultArray.length; z++){
    //         for(let y = 1; y < employee_data_list.content.length; y++){
    //             if(employee_data_list.content[y][findTextInArray(employee_data_list, "EMPLOYEE ID")] == resultArray[z]){
    //                 var gender = employee_data_list.content[y][findTextInArray(employee_data_list, "GENDER")];
    //                 if(gender == "MALE"){
    //                     var full_name = `${employee_data_list.content[y][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[y][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[y][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[y][findTextInArray(employee_data_list, "AFFIX")]}`
    //                     data_value2.push(full_name);
    //                 }
    //                 else{
    //                     var full_name = `${employee_data_list.content[y][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[y][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[y][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[y][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
    //                     data_value2.push(full_name);
    //                 }
    //             }
    //         }
    //     }
    //     const concatenatedString = data_value2.join(" || ")
    //     incident_history_data_value += `
    //     <tr>
    //         <td>${incident_history_data_value_counter}</td>
    //         <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "IRF #")]}</td>
    //         <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF INCIDENT")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF INCIDENT")])}</td>
    //         <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DEPARTMENT")]}</td>
    //         <td>${concatenatedString}</td>
    //         <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DESIGNATION")]}</td>
    //         <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "LOCATION")]}</td>
    //         <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT DETAILS")]}</td>
    //         <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF REPORT")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF REPORT")])}</td>
    //         <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF INCIDENT")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF INCIDENT")]),date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF REPORT")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF REPORT")]))}</td>
    //     </tr>
    //     `
    //     incident_history_data_value_counter += 1;
    // }
    // incident_history_list_incident_report_form.innerHTML = incident_history_data_value

    // incident_report_form_button_incident_report_form.addEventListener("click", () => {
    //     if(form_tab_incident_report_form.style.display == "block"){
    //         form_tab_incident_report_form.style.display = "none";
    //     }
    //     else{
    //         form_tab_incident_report_form.style.display = "block";
    //     }
    // })

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
          employee_name =
            employee_id ==
            employee_data_list.content[c][
              findTextInArray(employee_data_list, "EMPLOYEE ID")
            ];
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
        }
      }
      return waste_name;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
