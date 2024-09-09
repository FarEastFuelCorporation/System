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
    const employee_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec"
    );
    const mtf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec"
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
    const sf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec"
    );
    const tpf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec"
    );
    const cod_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbzgiOuXizUVviCsLVfihqYN9HJ3pyNr7ElHoCl3JGkbtQnChnm2U42yQuLd4UMH0ci5/exec"
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
    const accomplishment_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwa4TtV5mhmZRWagXQWmEG6EVH_tlRvwSnIOBM6O6VF_wAd4qnvFGky-1WBsQ74bPI3JQ/exec"
    );
    const maintenance_job_order_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxN9q1p4FSHbE-grd4AIE5cqPJh__dALmmWT9FEZorl2Q-aQsUgYQlIBtCi9COs7mD6/exec"
    );

    const [
      username_response,
      client_list_response,
      type_of_waste_response,
      employee_response,
      mtf_response,
      ltf_response,
      wcf_response,
      wdf_response,
      wtf_response,
      sf_response,
      tpf_response,
      cod_response,
      qlf_response,
      prf_response,
      pof_response,
      accomplishment_response,
      maintenance_job_order_response,
    ] = await Promise.all([
      username_response_promise,
      client_list_response_promise,
      type_of_waste_response_promise,
      employee_response_promise,
      mtf_response_promise,
      ltf_response_promise,
      wcf_response_promise,
      wdf_response_promise,
      wtf_response_promise,
      sf_response_promise,
      tpf_response_promise,
      cod_response_promise,
      qlf_response_promise,
      prf_response_promise,
      pof_response_promise,
      accomplishment_response_promise,
      maintenance_job_order_response_promise,
    ]);

    const username_data_list = await username_response.json();
    const client_data_list = await client_list_response.json();
    const type_of_waste_data_list = await type_of_waste_response.json();
    const employee_data_list = await employee_response.json();
    const mtf_data_list = await mtf_response.json();
    const ltf_data_list = await ltf_response.json();
    const wcf_data_list = await wcf_response.json();
    const wdf_data_list = await wdf_response.json();
    const wtf_data_list = await wtf_response.json();
    const sf_data_list = await sf_response.json();
    const tpf_data_list = await tpf_response.json();
    const cod_data_list = await cod_response.json();
    const qlf_data_list = await qlf_response.json();
    const prf_data_list = await prf_response.json();
    const pof_data_list = await pof_response.json();
    const accomplishment_data_list = await accomplishment_response.json();
    const mjo_data_list = await maintenance_job_order_response.json();

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

    const user_name =
      username_data_list.content[4][
        findTextInArray(username_data_list, "NAME")
      ];
    profile_picture.src = `../images/profile_picture/${
      username_data_list.content[4][
        findTextInArray(username_data_list, "PICTURE")
      ]
    }`;
    users.forEach((user) => {
      user.value =
        username_data_list.content[4][
          findTextInArray(username_data_list, "NAME")
        ];
    });
    user_sidebar.innerHTML = `<u>${
      username_data_list.content[4][findTextInArray(username_data_list, "NAME")]
    }</u>`;
    user_sidebar_officer.innerText =
      username_data_list.content[4][
        findTextInArray(username_data_list, "SECTIONS")
      ];
    user_sidebar_department.innerText =
      username_data_list.content[4][
        findTextInArray(username_data_list, "DEPARTMENT")
      ];
    const user =
      username_data_list.content[4][
        findTextInArray(username_data_list, "NAME")
      ];

    // marketing_dashboard
    const marketing_dashboard_pco = document.getElementById(
      "marketing_dashboard_pco"
    );
    const booked_transactions_marketing = marketing_dashboard_pco.querySelector(
      "#booked_transactions"
    );
    const for_hauling_container_marketing =
      marketing_dashboard_pco.querySelector("#for_hauling");
    const for_receiving_container_marketing =
      marketing_dashboard_pco.querySelector("#for_receiving");
    const for_warehousing_container_marketing =
      marketing_dashboard_pco.querySelector("#for_warehousing");
    const for_sorting_container_marketing =
      marketing_dashboard_pco.querySelector("#for_sorting");
    const for_treatment_container_marketing =
      marketing_dashboard_pco.querySelector("#for_treatment");
    const for_certification_container_marketing =
      marketing_dashboard_pco.querySelector("#for_certification");
    const for_billing_container_marketing =
      marketing_dashboard_pco.querySelector("#for_billing");
    const for_collection_container_marketing =
      marketing_dashboard_pco.querySelector("#for_collection");
    const finished_marketing =
      marketing_dashboard_pco.querySelector("#finished");
    const pending_list_marketing =
      marketing_dashboard_pco.querySelector("#pending_list");
    // certification_dashboard
    const certification_dashboard = document.querySelector(
      "#certification_dashboard"
    );
    const treated_counter_certification =
      certification_dashboard.querySelector("#treated_counter");
    const pending_counter_certification =
      certification_dashboard.querySelector("#pending_counter");
    const certified_counter_certification =
      certification_dashboard.querySelector("#certified_counter");
    const pending_list_certification =
      certification_dashboard.querySelector("#pending_list");
    const finished_list_certification =
      certification_dashboard.querySelector("#finished_list");
    const filter_option_client_certification =
      certification_dashboard.querySelector("#filter_option_client");
    const filter_option_date_certification =
      certification_dashboard.querySelector("#filter_option_date");
    let sf_transaction_certification = {};
    let sf_tpf_transaction_certification = {};
    let sf_transaction_certification_date = {};
    let sf_transaction_certification_client = {};
    let sf_transaction_certification_client_id = {};
    let sf_tpf_transaction_certification_date = {};
    let sf_tpf_transaction_certification_time = {};
    let sf_tpf_transaction_certification_client = {};
    let tpf_certification = [];
    let pending_certification = [];
    let finish_certification = [];
    let pending_list_tpf = [];
    let done_list_cod = [];

    const month_filter = document.querySelector("#month_filter");
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
      sf_transaction_certification = {};
      sf_tpf_transaction_certification = {};
      sf_transaction_certification_date = {};
      sf_transaction_certification_client = {};
      sf_transaction_certification_client_id = {};
      sf_tpf_transaction_certification_date = {};
      sf_tpf_transaction_certification_time = {};
      sf_tpf_transaction_certification_client = {};
      tpf_certification = [];
      pending_certification = [];
      finish_certification = [];
      pending_list_tpf = [];
      done_list_cod = [];
      var for_hauling_marketing = 0;
      var for_receiving_marketing = 0;
      var for_warehousing_marketing = 0;
      var for_sorting_marketing = 0;
      var for_treatment_marketing = 0;
      var for_certification_marketing = 0;
      var for_billing_marketing = 0;
      var for_collection_marketing = 0;
      var for_accounting_marketing = 0;
      var data_value_counter = 1;
      var data_value = "";
      for (let j = mtf_data_list.content.length - 1; j >= 1; j--) {
        var status = "";
        var vehicle = "";
        // for logistics
        if (
          mtf_data_list.content[j][
            findTextInArray(mtf_data_list, "SUBMIT TO")
          ] == "LOGISTICS" &&
          month_filter.value ==
            formatMonth(
              mtf_data_list.content[j][
                findTextInArray(mtf_data_list, "HAULING DATE")
              ]
            )
        ) {
          vehicle =
            mtf_data_list.content[j][
              findTextInArray(mtf_data_list, "TYPE OF VEHICLE")
            ];
          status =
            mtf_data_list.content[j][findTextInArray(mtf_data_list, "STATUS")];
          if (status == "FOR HAULING") {
            for_hauling_marketing += 1;
          } else if (status == "FOR RECEIVING") {
            for_receiving_marketing += 1;
          } else if (status == "FOR SORTING") {
            for_sorting_marketing += 1;
          } else if (status == "FOR TREATMENT") {
            for_treatment_marketing += 1;
          } else if (status == "FOR CERTIFICATION") {
            for_certification_marketing += 1;
          } else if (status == "FOR BILLING") {
            for_billing_marketing += 1;
          } else if (status == "FOR COLLECTION") {
            for_collection_marketing += 1;
          } else if (status == "FOR WAREHOUSING") {
            for_warehousing_marketing += 1;
          } else if (status == "FOR ACCOUNTING") {
            for_accounting_marketing += 1;
          }
        } else if (
          mtf_data_list.content[j][
            findTextInArray(mtf_data_list, "SUBMIT TO")
          ] == "LOGISTICS" &&
          month_filter.value == "ALL"
        ) {
          vehicle =
            mtf_data_list.content[j][
              findTextInArray(mtf_data_list, "TYPE OF VEHICLE")
            ];
          status =
            mtf_data_list.content[j][findTextInArray(mtf_data_list, "STATUS")];
          if (status == "FOR HAULING") {
            for_hauling_marketing += 1;
          } else if (status == "FOR RECEIVING") {
            for_receiving_marketing += 1;
          } else if (status == "FOR SORTING") {
            for_sorting_marketing += 1;
          } else if (status == "FOR TREATMENT") {
            for_treatment_marketing += 1;
          } else if (status == "FOR CERTIFICATION") {
            for_certification_marketing += 1;
          } else if (status == "FOR BILLING") {
            for_billing_marketing += 1;
          } else if (status == "FOR COLLECTION") {
            for_collection_marketing += 1;
          } else if (status == "FOR WAREHOUSING") {
            for_warehousing_marketing += 1;
          } else if (status == "FOR ACCOUNTING") {
            for_accounting_marketing += 1;
          }
        }
        // for receiving
        else if (
          mtf_data_list.content[j][
            findTextInArray(mtf_data_list, "SUBMIT TO")
          ] == "RECEIVING" &&
          month_filter.value ==
            formatMonth(
              mtf_data_list.content[j][
                findTextInArray(mtf_data_list, "HAULING DATE")
              ]
            )
        ) {
          vehicle = "PROVIDED BY CLIENT";
          status =
            mtf_data_list.content[j][findTextInArray(mtf_data_list, "STATUS")];
          if (status == "FOR HAULING") {
            for_hauling_marketing += 1;
          } else if (status == "FOR RECEIVING") {
            for_receiving_marketing += 1;
          } else if (status == "FOR SORTING") {
            for_sorting_marketing += 1;
          } else if (status == "FOR TREATMENT") {
            for_treatment_marketing += 1;
          } else if (status == "FOR CERTIFICATION") {
            for_certification_marketing += 1;
          } else if (status == "FOR BILLING") {
            for_billing_marketing += 1;
          } else if (status == "FOR COLLECTION") {
            for_collection_marketing += 1;
          } else if (status == "FOR WAREHOUSING") {
            for_warehousing_marketing += 1;
          } else if (status == "FOR ACCOUNTING") {
            for_accounting_marketing += 1;
          }
        } else if (
          mtf_data_list.content[j][
            findTextInArray(mtf_data_list, "SUBMIT TO")
          ] == "RECEIVING" &&
          month_filter.value == "ALL"
        ) {
          vehicle = "PROVIDED BY CLIENT";
          status =
            mtf_data_list.content[j][findTextInArray(mtf_data_list, "STATUS")];
          if (status == "FOR HAULING") {
            for_hauling_marketing += 1;
          } else if (status == "FOR RECEIVING") {
            for_receiving_marketing += 1;
          } else if (status == "FOR SORTING") {
            for_sorting_marketing += 1;
          } else if (status == "FOR TREATMENT") {
            for_treatment_marketing += 1;
          } else if (status == "FOR CERTIFICATION") {
            for_certification_marketing += 1;
          } else if (status == "FOR BILLING") {
            for_billing_marketing += 1;
          } else if (status == "FOR COLLECTION") {
            for_collection_marketing += 1;
          } else if (status == "FOR WAREHOUSING") {
            for_warehousing_marketing += 1;
          } else if (status == "FOR ACCOUNTING") {
            for_accounting_marketing += 1;
          }
        }
        var plate_no, driver_name;
        for (let x = 1; x < wcf_data_list.content.length; x++) {
          var mtf_no =
            mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")];
          var mtf_wcf_no =
            wcf_data_list.content[x][
              findTextInArray(wcf_data_list, "LTF/ MTF  #")
            ];
          if (mtf_no == mtf_wcf_no) {
            plate_no =
              wcf_data_list.content[x][
                findTextInArray(wcf_data_list, "PLATE #")
              ];
            driver_name = findEmployeeName(
              wcf_data_list.content[x][
                findTextInArray(wcf_data_list, "DRIVER ID")
              ]
            );
            break;
          } else {
            plate_no = "PENDING";
            driver_name = "PENDING";
          }
        }
        for (let x = 1; x < ltf_data_list.content.length; x++) {
          var mtf_no =
            mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")];
          var mtf_ltf_no =
            ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
          if (mtf_no == mtf_ltf_no) {
            plate_no =
              ltf_data_list.content[x][
                findTextInArray(ltf_data_list, "PLATE #")
              ];
            driver_name = findEmployeeName(
              ltf_data_list.content[x][
                findTextInArray(ltf_data_list, "DRIVER ID")
              ]
            );
            break;
          }
        }
        if (
          month_filter.value ==
          formatMonth(
            mtf_data_list.content[j][
              findTextInArray(mtf_data_list, "HAULING DATE")
            ]
          )
        ) {
          data_value += `
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "MTF #")
                          ]
                        }</td>
                        <td>${date_decoder(
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "HAULING DATE")
                          ]
                        )} /<br> ${time_decoder(
            mtf_data_list.content[j][
              findTextInArray(mtf_data_list, "HAULING TIME")
            ]
          )}</td>
                        <td>${findClientName(
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "CLIENT ID")
                          ]
                        )}</td>
                        <td>${findWasteCode(
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "WASTE ID")
                          ]
                        )}</td>
                        <td>${findWasteName(
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "CLIENT ID")
                          ],
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "WASTE ID")
                          ]
                        )}</td>
                        <td>${vehicle}</td>
                        <td>${
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "SUBMIT TO")
                          ]
                        }</td>
                        <td>${
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "REMARKS")
                          ]
                        }</td>
                        <td>${
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "SUBMITTED BY")
                          ]
                        }</td>
                        <td>${plate_no}</td>
                        <td>${driver_name}</td>
                        <td>${status}</td>
                    </tr>
                    `;
          data_value_counter += 1;
          pending_list_marketing.innerHTML = data_value;
        } else if (month_filter.value == "ALL") {
          data_value += `
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "MTF #")
                          ]
                        }</td>
                        <td>${date_decoder(
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "HAULING DATE")
                          ]
                        )} /<br> ${time_decoder(
            mtf_data_list.content[j][
              findTextInArray(mtf_data_list, "HAULING TIME")
            ]
          )}</td>
                        <td>${findClientName(
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "CLIENT ID")
                          ]
                        )}</td>
                        <td>${findWasteCode(
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "WASTE ID")
                          ]
                        )}</td>
                        <td>${findWasteName(
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "CLIENT ID")
                          ],
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "WASTE ID")
                          ]
                        )}</td>
                        <td>${vehicle}</td>
                        <td>${
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "SUBMIT TO")
                          ]
                        }</td>
                        <td>${
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "REMARKS")
                          ]
                        }</td>
                        <td>${
                          mtf_data_list.content[j][
                            findTextInArray(mtf_data_list, "SUBMITTED BY")
                          ]
                        }</td>
                        <td>${plate_no}</td>
                        <td>${driver_name}</td>
                        <td>${status}</td>
                    </tr>
                    `;
          data_value_counter += 1;
          pending_list_marketing.innerHTML = data_value;
        }
      }
      booked_transactions_marketing.innerText =
        for_hauling_marketing +
        for_receiving_marketing +
        for_warehousing_marketing +
        for_sorting_marketing +
        for_treatment_marketing +
        for_certification_marketing +
        for_billing_marketing +
        for_collection_marketing +
        for_accounting_marketing;
      for_hauling_container_marketing.innerText = for_hauling_marketing;
      for_receiving_container_marketing.innerText = for_receiving_marketing;
      for_warehousing_container_marketing.innerText = for_warehousing_marketing;
      for_sorting_container_marketing.innerText = for_sorting_marketing;
      for_treatment_container_marketing.innerText = for_treatment_marketing;
      for_certification_container_marketing.innerText =
        for_certification_marketing;
      for_billing_container_marketing.innerText = for_billing_marketing;
      for_collection_container_marketing.innerText = for_collection_marketing;
      finished_marketing.innerText = for_accounting_marketing;
      var options = {
        series: [
          for_hauling_marketing,
          for_receiving_marketing,
          for_warehousing_marketing,
          for_sorting_marketing,
          for_treatment_marketing,
          for_certification_marketing,
          for_billing_marketing,
          for_collection_marketing,
          for_accounting_marketing,
        ],
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
        labels: [
          "For Hauling",
          "For Receiving",
          "For Warehousing",
          "For Sorting",
          "For Treatment",
          "For Certification",
          "For Billing",
          "For Collection",
          "Finished",
        ],
        colors: [
          "#dc3545",
          "#ffc107",
          "#c3c3c3",
          "#fd7e14",
          "#0d6efd",
          "#6610f2",
          "#0dcaf0",
          "#d63384",
          "#198754",
        ], // Specify solid colors here
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
      const pieChart2 = document.querySelector("#pieChart2");
      while (pieChart2.firstChild) {
        pieChart2.removeChild(pieChart2.firstChild);
      }
      var chart = new ApexCharts(pieChart2, options);
      chart.render();

      for (let i = 1; i < tpf_data_list.content.length; i++) {
        const tpfNumber =
          tpf_data_list.content[i][findTextInArray(tpf_data_list, "TPF #")];
        const haulingDate = new Date(
          tpf_data_list.content[i][
            findTextInArray(tpf_data_list, "HAULING DATE")
          ]
        );
        const client_id =
          tpf_data_list.content[i][findTextInArray(tpf_data_list, "CLIENT ID")];

        if (month_filter.value === formatMonth(haulingDate)) {
          const weight =
            tpf_data_list.content[i][findTextInArray(tpf_data_list, "WEIGHT")];

          // Check if the tpfNumber already exists in the object
          if (sf_transaction_certification[tpfNumber]) {
            // If it exists, add the weight to the existing value
            sf_transaction_certification[tpfNumber] += weight;
          } else {
            // If it doesn't exist, create a new entry with the weight
            sf_transaction_certification[tpfNumber] = weight;
          }
          sf_transaction_certification_date[tpfNumber] = haulingDate;
          sf_transaction_certification_client[tpfNumber] =
            findClientName(client_id);
          sf_transaction_certification_client_id[tpfNumber] = client_id;
          if (
            !tpf_certification.includes(
              tpf_data_list.content[i][findTextInArray(tpf_data_list, "TPF #")]
            )
          ) {
            tpf_certification.push(
              tpf_data_list.content[i][findTextInArray(tpf_data_list, "TPF #")]
            );
          }
        } else if (month_filter.value === "ALL") {
          const weight =
            tpf_data_list.content[i][findTextInArray(tpf_data_list, "WEIGHT")];

          // Check if the tpfNumber already exists in the object
          if (sf_transaction_certification[tpfNumber]) {
            // If it exists, add the weight to the existing value
            sf_transaction_certification[tpfNumber] += weight;
          } else {
            // If it doesn't exist, create a new entry with the weight
            sf_transaction_certification[tpfNumber] = weight;
          }
          sf_transaction_certification_date[tpfNumber] = haulingDate;
          sf_transaction_certification_client[tpfNumber] =
            findClientName(client_id);
          sf_transaction_certification_client_id[tpfNumber] = client_id;
          if (
            !tpf_certification.includes(
              tpf_data_list.content[i][findTextInArray(tpf_data_list, "TPF #")]
            )
          ) {
            tpf_certification.push(
              tpf_data_list.content[i][findTextInArray(tpf_data_list, "TPF #")]
            );
          }
        }
        if (
          month_filter.value ==
            formatMonth(
              tpf_data_list.content[i][
                findTextInArray(tpf_data_list, "HAULING DATE")
              ]
            ) &&
          !pending_list_tpf.includes(
            tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]
          )
        ) {
          pending_list_tpf.push(
            tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]
          );
        } else if (
          month_filter.value == "ALL" &&
          !pending_list_tpf.includes(
            tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]
          )
        ) {
          pending_list_tpf.push(
            tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]
          );
        }
      }
      for (let i = 1; i < cod_data_list.content.length; i++) {
        const tpfNumber =
          cod_data_list.content[i][findTextInArray(cod_data_list, "TPF #")];
        const haulingDate = new Date(
          cod_data_list.content[i][
            findTextInArray(cod_data_list, "HAULING DATE")
          ]
        );
        const finishDate = new Date(
          cod_data_list.content[i][
            findTextInArray(cod_data_list, "ACTUAL COMPLETION DATE")
          ]
        );
        const finishTime = new Date(
          cod_data_list.content[i][
            findTextInArray(cod_data_list, "ACTUAL COMPLETION TIME")
          ]
        );
        const client_id =
          cod_data_list.content[i][findTextInArray(cod_data_list, "CLIENT ID")];

        if (month_filter.value === formatMonth(haulingDate)) {
          const weight =
            cod_data_list.content[i][findTextInArray(cod_data_list, "WEIGHT")];

          // Check if the tpfNumber already exists in the object
          if (sf_tpf_transaction_certification[tpfNumber]) {
            // If it exists, add the weight to the existing value
            sf_tpf_transaction_certification[tpfNumber] += weight;
          } else {
            // If it doesn't exist, create a new entry with the weight
            sf_tpf_transaction_certification[tpfNumber] = weight;
          }
          sf_tpf_transaction_certification_date[tpfNumber] = finishDate;
          sf_tpf_transaction_certification_time[tpfNumber] = finishTime;
          sf_tpf_transaction_certification_client[tpfNumber] =
            findClientName(client_id);
        } else if (month_filter.value === "ALL") {
          const weight =
            cod_data_list.content[i][findTextInArray(cod_data_list, "WEIGHT")];

          // Check if the tpfNumber already exists in the object
          if (sf_tpf_transaction_certification[tpfNumber]) {
            // If it exists, add the weight to the existing value
            sf_tpf_transaction_certification[tpfNumber] += weight;
          } else {
            // If it doesn't exist, create a new entry with the weight
            sf_tpf_transaction_certification[tpfNumber] = weight;
          }
          sf_tpf_transaction_certification_date[tpfNumber] = finishDate;
          sf_tpf_transaction_certification_time[tpfNumber] = finishTime;
          sf_tpf_transaction_certification_client[tpfNumber] =
            findClientName(client_id);
        }
        if (
          month_filter.value ==
            formatMonth(
              cod_data_list.content[i][
                findTextInArray(cod_data_list, "HAULING DATE")
              ]
            ) &&
          !done_list_cod.includes(
            cod_data_list.content[i][findTextInArray(cod_data_list, "WCF #")]
          )
        ) {
          done_list_cod.push(
            cod_data_list.content[i][findTextInArray(cod_data_list, "WCF #")]
          );
        } else if (
          month_filter.value == "ALL" &&
          !done_list_cod.includes(
            cod_data_list.content[i][findTextInArray(cod_data_list, "WCF #")]
          )
        ) {
          done_list_cod.push(
            cod_data_list.content[i][findTextInArray(cod_data_list, "WCF #")]
          );
        }
      }

      for (const key in sf_transaction_certification) {
        // Check if the key exists in sf_tpf_transaction_certification
        if (sf_tpf_transaction_certification[key]) {
          // If it exists in sf_tpf_transaction_certification, add both "tpf #" and weight to finish_certification
          finish_certification.push({
            tpfNumber: key,
            weight: sf_tpf_transaction_certification[key],
            date: sf_tpf_transaction_certification_date[key],
            time: sf_tpf_transaction_certification_time[key],
            client: sf_tpf_transaction_certification_client[key],
          });
        } else {
          // If it doesn't exist in sf_tpf_transaction_certification, add both "tpf #" and weight to pending_certification
          pending_certification.push({
            tpfNumber: key,
            weight: sf_transaction_certification[key],
            date: sf_transaction_certification_date[key],
            client: sf_transaction_certification_client[key],
            client_id: sf_transaction_certification_client_id[key],
          });
        }
      }
      pending_certification.sort((a, b) => a.date - b.date);
      pending_certification.sort((a, b) => a.client - b.client);
      finish_certification.sort((a, b) => b.time - a.time);
      finish_certification.sort((a, b) => b.date - a.date);
      treated_counter_certification.innerText = pending_list_tpf.length;
      pending_counter_certification.innerText =
        pending_list_tpf.length - done_list_cod.length;
      certified_counter_certification.innerText = done_list_cod.length;

      var done_client = [];
      filter_option_client_certification.innerHTML = `<option value="">SELECT CLIENT</option>`;
      pending_certification.forEach((data) => {
        if (!done_client.includes(data.client)) {
          done_client.push(data.client);
          var client_data = `
                    <option value="${data.client_id}">${data.client}</option>
                    `;
          filter_option_client_certification.insertAdjacentHTML(
            "beforeend",
            client_data
          );
        }
      });

      var done_date = [];
      filter_option_client_certification.addEventListener("change", () => {
        done_date = [];
        filter_option_date_certification.innerHTML = `<option value="">SELECT DATE</option>`;
        pending_certification.forEach((data) => {
          if (!done_date.includes(date_decoder(data.date))) {
            if (filter_option_client_certification.value == data.client_id) {
              done_date.push(date_decoder(data.date));
              var date_data = `
                            <option value="${date_decoder(
                              data.date
                            )}">${date_decoder(data.date)}</option>
                            `;
              filter_option_date_certification.insertAdjacentHTML(
                "beforeend",
                date_data
              );
            }
          }
        });
      });
      filter_option_date_certification.addEventListener("change", () => {
        pending_list_certification.innerHTML = "";

        var data_value = "";
        var data_value_counter = 1;
        for (const item of pending_certification) {
          var status;
          var date_accomplished;
          var target_date;
          if (
            filter_option_client_certification.value == item.client_id &&
            filter_option_date_certification.value == date_decoder(item.date)
          ) {
            for (let j = 1; j < tpf_data_list.content.length; j++) {
              if (
                item.tpfNumber ==
                  tpf_data_list.content[j][
                    findTextInArray(tpf_data_list, "TPF #")
                  ] &&
                month_filter.value ==
                  formatMonth(
                    tpf_data_list.content[j][
                      findTextInArray(tpf_data_list, "HAULING DATE")
                    ]
                  )
              ) {
                date_accomplished = new Date(
                  date_decoder(
                    tpf_data_list.content[j][
                      findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")
                    ]
                  )
                );
                target_date = new Date(
                  date_decoder(
                    tpf_data_list.content[j][
                      findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                    ]
                  )
                );
                if (date_accomplished.getDate() < target_date.getDate()) {
                  status = "AHEAD OF TIME";
                } else if (
                  date_accomplished.getDate() == target_date.getDate()
                ) {
                  status = "ON TIME";
                } else if (
                  date_accomplished.getDate() > target_date.getDate()
                ) {
                  status = "DELAYED";
                }
                var mtf = "";
                var ltf = "";
                var pull_out_slip = "";
                for (let k = 1; k < wcf_data_list.content.length; k++) {
                  if (
                    tpf_data_list.content[j][
                      findTextInArray(tpf_data_list, "WCF #")
                    ] ==
                    wcf_data_list.content[k][
                      findTextInArray(wcf_data_list, "WCF #")
                    ]
                  ) {
                    pull_out_slip =
                      wcf_data_list.content[k][
                        findTextInArray(wcf_data_list, "PULL OUT FORM #")
                      ];
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
                data_value = `
                                <tr>
                                    <td>${data_value_counter}</td>
                                    <td>${
                                      tpf_data_list.content[j][
                                        findTextInArray(tpf_data_list, "TPF #")
                                      ]
                                    }</td>
                                    <td>${mtf}</td>
                                    <td>${pull_out_slip}</td>
                                    <td>${date_decoder(
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "HAULING DATE"
                                        )
                                      ]
                                    )}
                                    <td>${date_decoder(
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "ACTUAL COMPLETION DATE"
                                        )
                                      ]
                                    )} /<br> ${time_decoder(
                  tpf_data_list.content[j][
                    findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")
                  ]
                )}</td>
                                    <td>${findClientName(
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "CLIENT ID"
                                        )
                                      ]
                                    )}</td>
                                    <td>${findWasteCode(
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "WASTE ID"
                                        )
                                      ]
                                    )}</td>
                                    <td>${
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "WASTE NAME"
                                        )
                                      ]
                                    }</td>
                                    <td>${item.weight} kg.</td>
                                    <td>${
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "DESTRUCTION PROCESS"
                                        )
                                      ]
                                    }</td>
                                    <td>${date_decoder(
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "TARGET COMPLETION DATE"
                                        )
                                      ]
                                    )}</td>
                                    <td>${status}</td>
                                    </tr>
                                `;
                data_value_counter += 1;
                pending_list_certification.insertAdjacentHTML(
                  "beforeend",
                  data_value
                );
                break;
              } else if (
                item.tpfNumber ==
                  tpf_data_list.content[j][
                    findTextInArray(tpf_data_list, "TPF #")
                  ] &&
                month_filter.value == "ALL"
              ) {
                date_accomplished = new Date(
                  date_decoder(
                    tpf_data_list.content[j][
                      findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")
                    ]
                  )
                );
                target_date = new Date(
                  date_decoder(
                    tpf_data_list.content[j][
                      findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                    ]
                  )
                );
                if (date_accomplished.getDate() < target_date.getDate()) {
                  status = "AHEAD OF TIME";
                } else if (
                  date_accomplished.getDate() == target_date.getDate()
                ) {
                  status = "ON TIME";
                } else if (
                  date_accomplished.getDate() > target_date.getDate()
                ) {
                  status = "DELAYED";
                }
                var mtf = "";
                var ltf = "";
                var pull_out_slip = "";
                for (let k = 1; k < wcf_data_list.content.length; k++) {
                  if (
                    tpf_data_list.content[j][
                      findTextInArray(tpf_data_list, "WCF #")
                    ] ==
                    wcf_data_list.content[k][
                      findTextInArray(wcf_data_list, "WCF #")
                    ]
                  ) {
                    pull_out_slip =
                      wcf_data_list.content[k][
                        findTextInArray(wcf_data_list, "PULL OUT FORM #")
                      ];
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
                data_value = `
                                <tr>
                                    <td>${data_value_counter}</td>
                                    <td>${
                                      tpf_data_list.content[j][
                                        findTextInArray(tpf_data_list, "TPF #")
                                      ]
                                    }</td>
                                    <td>${mtf}</td>
                                    <td>${pull_out_slip}</td>
                                    <td>${date_decoder(
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "HAULING DATE"
                                        )
                                      ]
                                    )}
                                    <td>${date_decoder(
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "ACTUAL COMPLETION DATE"
                                        )
                                      ]
                                    )} /<br> ${time_decoder(
                  tpf_data_list.content[j][
                    findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")
                  ]
                )}</td>
                                    <td>${findClientName(
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "CLIENT ID"
                                        )
                                      ]
                                    )}</td>
                                    <td>${findWasteCode(
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "WASTE ID"
                                        )
                                      ]
                                    )}</td>
                                    <td>${
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "WASTE NAME"
                                        )
                                      ]
                                    }</td>
                                    <td>${
                                      tpf_data_list.content[j][
                                        findTextInArray(tpf_data_list, "WEIGHT")
                                      ]
                                    } kg.</td>
                                    <td>${
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "DESTRUCTION PROCESS"
                                        )
                                      ]
                                    }</td>
                                    <td>${date_decoder(
                                      tpf_data_list.content[j][
                                        findTextInArray(
                                          tpf_data_list,
                                          "TARGET COMPLETION DATE"
                                        )
                                      ]
                                    )}</td>
                                    <td>${status}</td>
                                    </tr>
                                `;
                data_value_counter += 1;
                pending_list_certification.insertAdjacentHTML(
                  "beforeend",
                  data_value
                );
                break;
              }
            }
          }
        }
      });

      var options = {
        series: [
          pending_list_tpf.length - done_list_cod.length,
          done_list_cod.length,
        ],
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

      var data_value = "";
      var data_value_counter = 1;
      for (const item of pending_certification) {
        var status;
        var date_accomplished;
        var target_date;
        for (let j = 1; j < tpf_data_list.content.length; j++) {
          if (
            item.tpfNumber ==
              tpf_data_list.content[j][
                findTextInArray(tpf_data_list, "TPF #")
              ] &&
            month_filter.value ==
              formatMonth(
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "HAULING DATE")
                ]
              )
          ) {
            date_accomplished = new Date(
              date_decoder(
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")
                ]
              )
            );
            target_date = new Date(
              date_decoder(
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                ]
              )
            );
            if (date_accomplished.getDate() < target_date.getDate()) {
              status = "AHEAD OF TIME";
            } else if (date_accomplished.getDate() == target_date.getDate()) {
              status = "ON TIME";
            } else if (date_accomplished.getDate() > target_date.getDate()) {
              status = "DELAYED";
            }
            var mtf = "";
            var ltf = "";
            var pull_out_slip = "";
            for (let k = 1; k < wcf_data_list.content.length; k++) {
              if (
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "WCF #")
                ] ==
                wcf_data_list.content[k][
                  findTextInArray(wcf_data_list, "WCF #")
                ]
              ) {
                pull_out_slip =
                  wcf_data_list.content[k][
                    findTextInArray(wcf_data_list, "PULL OUT FORM #")
                  ];
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
            data_value += `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "TPF #")
                              ]
                            }</td>
                            <td>${mtf}</td>
                            <td>${pull_out_slip}</td>
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "HAULING DATE")
                              ]
                            )}
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "ACTUAL COMPLETION DATE"
                                )
                              ]
                            )} /<br> ${time_decoder(
              tpf_data_list.content[j][
                findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")
              ]
            )}</td>
                            <td>${findClientName(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "CLIENT ID")
                              ]
                            )}</td>
                            <td>${findWasteCode(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            }</td>
                            <td>${item.weight} kg.</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "DESTRUCTION PROCESS"
                                )
                              ]
                            }</td>
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "TARGET COMPLETION DATE"
                                )
                              ]
                            )}</td>
                            <td>${status}</td>
                            </tr>
                        `;
            data_value_counter += 1;
            break;
          } else if (
            item.tpfNumber ==
              tpf_data_list.content[j][
                findTextInArray(tpf_data_list, "TPF #")
              ] &&
            month_filter.value == "ALL"
          ) {
            date_accomplished = new Date(
              date_decoder(
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")
                ]
              )
            );
            target_date = new Date(
              date_decoder(
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                ]
              )
            );
            if (date_accomplished.getDate() < target_date.getDate()) {
              status = "AHEAD OF TIME";
            } else if (date_accomplished.getDate() == target_date.getDate()) {
              status = "ON TIME";
            } else if (date_accomplished.getDate() > target_date.getDate()) {
              status = "DELAYED";
            }
            var mtf = "";
            var ltf = "";
            var pull_out_slip = "";
            for (let k = 1; k < wcf_data_list.content.length; k++) {
              if (
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "WCF #")
                ] ==
                wcf_data_list.content[k][
                  findTextInArray(wcf_data_list, "WCF #")
                ]
              ) {
                pull_out_slip =
                  wcf_data_list.content[k][
                    findTextInArray(wcf_data_list, "PULL OUT FORM #")
                  ];
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
            data_value += `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "TPF #")
                              ]
                            }</td>
                            <td>${mtf}</td>
                            <td>${pull_out_slip}</td>
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "HAULING DATE")
                              ]
                            )}
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "ACTUAL COMPLETION DATE"
                                )
                              ]
                            )} /<br> ${time_decoder(
              tpf_data_list.content[j][
                findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")
              ]
            )}</td>
                            <td>${findClientName(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "CLIENT ID")
                              ]
                            )}</td>
                            <td>${findWasteCode(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            }</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "WEIGHT")
                              ]
                            } kg.</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "DESTRUCTION PROCESS"
                                )
                              ]
                            }</td>
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "TARGET COMPLETION DATE"
                                )
                              ]
                            )}</td>
                            <td>${status}</td>
                            </tr>
                        `;
            data_value_counter += 1;
            break;
          }
        }
      }
      pending_list_certification.innerHTML = data_value;

      var data_value = "";
      var data_value_counter = 1;
      const finished = [];
      for (const item of finish_certification) {
        var status;
        var date_accomplished;
        var target_date;
        for (let j = 1; j < tpf_data_list.content.length; j++) {
          if (
            !finished.includes(item.tpfNumber) &&
            item.tpfNumber ==
              tpf_data_list.content[j][
                findTextInArray(tpf_data_list, "TPF #")
              ] &&
            month_filter.value ==
              formatMonth(
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "HAULING DATE")
                ]
              )
          ) {
            finished.push(item.tpfNumber);
            date_accomplished = new Date(
              date_decoder(
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")
                ]
              )
            );
            target_date = new Date(
              date_decoder(
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                ]
              )
            );
            if (date_accomplished.getDate() < target_date.getDate()) {
              status = "AHEAD OF TIME";
            } else if (date_accomplished.getDate() == target_date.getDate()) {
              status = "ON TIME";
            } else if (date_accomplished.getDate() > target_date.getDate()) {
              status = "DELAYED";
            }
            var cod_no;
            var finished_date;
            var finished_time;
            for (let k = 1; k < cod_data_list.content.length; k++) {
              if (
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "TPF #")
                ] ==
                cod_data_list.content[k][
                  findTextInArray(cod_data_list, "TPF #")
                ]
              ) {
                cod_no =
                  cod_data_list.content[k][
                    findTextInArray(cod_data_list, "COD #")
                  ];
                finished_date = date_decoder(
                  cod_data_list.content[k][
                    findTextInArray(cod_data_list, "ACTUAL COMPLETION DATE")
                  ]
                );
                finished_time = time_decoder(
                  cod_data_list.content[k][
                    findTextInArray(cod_data_list, "ACTUAL COMPLETION TIME")
                  ]
                );
              }
            }
            var mtf = "";
            var ltf = "";
            for (let k = 1; k < wcf_data_list.content.length; k++) {
              if (
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "WCF #")
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
            data_value += `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${cod_no}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "HAULING DATE")
                              ]
                            )}
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "ACTUAL COMPLETION DATE"
                                )
                              ]
                            )} /<br> ${time_decoder(
              tpf_data_list.content[j][
                findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")
              ]
            )}</td>
                            <td>${findClientName(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "CLIENT ID")
                              ]
                            )}</td>
                            <td>${findWasteCode(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            }</td>
                            <td>${item.weight} kg.</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "DESTRUCTION PROCESS"
                                )
                              ]
                            }</td>
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "TARGET COMPLETION DATE"
                                )
                              ]
                            )}</td>
                            <td>${status}</td>
                            <td>${finished_date} /<br> ${finished_time}</td>
                            <td>${calculateTravelTime(
                              date_decoder(
                                tpf_data_list.content[j][
                                  findTextInArray(
                                    tpf_data_list,
                                    "ACTUAL COMPLETION DATE"
                                  )
                                ]
                              ),
                              time_decoder(
                                tpf_data_list.content[j][
                                  findTextInArray(
                                    tpf_data_list,
                                    "ACTUAL COMPLETION TIME"
                                  )
                                ]
                              ),
                              finished_date,
                              finished_time
                            )}</td>
                        </tr>
                        `;
            data_value_counter += 1;
          } else if (
            !finished.includes(item.tpfNumber) &&
            item.tpfNumber ==
              tpf_data_list.content[j][
                findTextInArray(tpf_data_list, "TPF #")
              ] &&
            month_filter.value == "ALL"
          ) {
            finished.push(item.tpfNumber);
            date_accomplished = new Date(
              date_decoder(
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")
                ]
              )
            );
            target_date = new Date(
              date_decoder(
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                ]
              )
            );
            if (date_accomplished.getDate() < target_date.getDate()) {
              status = "AHEAD OF TIME";
            } else if (date_accomplished.getDate() == target_date.getDate()) {
              status = "ON TIME";
            } else if (date_accomplished.getDate() > target_date.getDate()) {
              status = "DELAYED";
            }
            var cod_no;
            var finished_date;
            var finished_time;
            for (let k = 1; k < cod_data_list.content.length; k++) {
              if (
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "TPF #")
                ] ==
                cod_data_list.content[k][
                  findTextInArray(cod_data_list, "TPF #")
                ]
              ) {
                cod_no =
                  cod_data_list.content[k][
                    findTextInArray(cod_data_list, "COD #")
                  ];
                finished_date = date_decoder(
                  cod_data_list.content[k][
                    findTextInArray(cod_data_list, "ACTUAL COMPLETION DATE")
                  ]
                );
                finished_time = time_decoder(
                  cod_data_list.content[k][
                    findTextInArray(cod_data_list, "ACTUAL COMPLETION TIME")
                  ]
                );
              }
            }
            var mtf = "";
            var ltf = "";
            for (let k = 1; k < wcf_data_list.content.length; k++) {
              if (
                tpf_data_list.content[j][
                  findTextInArray(tpf_data_list, "WCF #")
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
            data_value += `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${cod_no}</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "TPF #")
                              ]
                            }</td>
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "HAULING DATE")
                              ]
                            )}</td>
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "ACTUAL COMPLETION DATE"
                                )
                              ]
                            )} /<br> ${time_decoder(
              tpf_data_list.content[j][
                findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")
              ]
            )}</td>
                            <td>${findClientName(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "CLIENT ID")
                              ]
                            )}</td>
                            <td>${findWasteCode(
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            }</td>
                            <td>${item.weight} kg.</td>
                            <td>${
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "DESTRUCTION PROCESS"
                                )
                              ]
                            }</td>
                            <td>${date_decoder(
                              tpf_data_list.content[j][
                                findTextInArray(
                                  tpf_data_list,
                                  "TARGET COMPLETION DATE"
                                )
                              ]
                            )}</td>
                            <td>${status}</td>
                            <td>${finished_date} /<br> ${finished_time}</td>
                            <td>${calculateTravelTime(
                              date_decoder(
                                tpf_data_list.content[j][
                                  findTextInArray(
                                    tpf_data_list,
                                    "ACTUAL COMPLETION DATE"
                                  )
                                ]
                              ),
                              time_decoder(
                                tpf_data_list.content[j][
                                  findTextInArray(
                                    tpf_data_list,
                                    "ACTUAL COMPLETION TIME"
                                  )
                                ]
                              ),
                              finished_date,
                              finished_time
                            )}</td>
                        </tr>
                        `;
            data_value_counter += 1;
          }
        }
      }
      finished_list_certification.innerHTML = data_value;
    }

    // cod_data_list
    // FORM GENERATOR
    const cod_form_no = document.getElementById("cod_form_no");
    var last_row = cod_data_list.content.length - 1;
    var data_info =
      cod_data_list.content[last_row][findTextInArray(cod_data_list, "COD #")];
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
      cod_form_no.value = `COD${last_counter_year}${month}${data_counter}`;
    } else {
      data_counter = (1).toString().padStart(4, "0");
      cod_form_no.value = `COD${current_year}${month}${data_counter}`;
    }

    // tpf_data_list
    var data_value2 = [];
    for (x = 1; x < client_data_list.content.length; x++) {
      data_value2.push(
        client_data_list.content[x][
          findTextInArray(client_data_list, "CLIENT NAME")
        ]
      );
    }
    const search_wrapper = document.getElementById("cod_search_client");
    const input_box = search_wrapper.querySelector("input");
    const sugg_box = search_wrapper.querySelector(".autocom_box");

    input_box.onkeyup = (e) => {
      let user_data = e.target.value;
      let empty_array = [];
      if (user_data) {
        empty_array = data_value2.filter((data2) => {
          return data2.toLowerCase().includes(user_data.toLowerCase());
        });
        empty_array = empty_array.map((data2) => {
          return "<li>" + data2 + "</li>";
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

    const generate_button = document.getElementById("generate_button");
    const what_to_print = document.getElementById("what_to_print");
    const convertToPDFandDownload_button = document.getElementById(
      "convertToPDFandDownload_button"
    );
    const submit_button = document.getElementById("submit_button");
    const client_container = document.getElementById("client_container");
    const completion = document.getElementById("completion");
    const type_of_certificate_selection = document.getElementById(
      "type_of_certificate_selection"
    );
    const type_of_certificate = document.getElementById("type_of_certificate");
    const type_of_cod = document.getElementById("type_of_cod");
    const table_company = document.getElementById("table_company");
    const table_company_address = document.getElementById(
      "table_company_address"
    );
    const certification = document.getElementById("certification");
    const certification2 = document.getElementById("certification2");
    const certification3 = document.getElementById("certification3");
    const table_data_input_value = document.getElementById(
      "table_data_input_value"
    );
    const result_remarks = document.getElementById("result_remarks");
    const table_data = document.getElementById("table_data");
    const table_head_data = document.getElementById("table_head_data");
    const company = document.getElementById("company");
    const certification_text = document.getElementById("certification_text");

    var certification_hauling_date = "";
    var certification_Hauling_day = "";
    var certification_date = "";
    var certification_day = "";
    var certification_day_ordinal;
    var certification_month = "";
    var year = "";
    var certification_year = "";
    var month = "";
    var hauling_date;
    generate_button.addEventListener("click", choose);
    function choose() {
      const done = [];
      table_data.innerHTML = "";
      var table_data_value = "";
      var table_head_data_value = "";
      var table_data_input = "";
      var table_data_counter = 0;
      var total_cod_weight = 0;
      const df_no = document.getElementById("df_no");
      df_no.innerText = cod_form_no.value;
      type_of_certificate.innerText = type_of_certificate_selection.value;
      if (type_of_cod.value == "By Waste Description") {
        const waste_description = document.getElementById("waste_description");
        const year_covered = document.getElementById("year_covered");
        const month_covered = document.getElementById("month_covered");
        for (const item of pending_certification) {
          for (let x = 1; x < tpf_data_list.content.length; x++) {
            if (
              tpf_data_list.content[x][
                findTextInArray(tpf_data_list, "TPF #")
              ] == item.tpfNumber
            ) {
              if (
                !done.includes(item.tpfNumber) &&
                input_box.value ===
                  findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  )
              ) {
                var mtf = "";
                var ltf = "";
                for (let k = 1; k < wcf_data_list.content.length; k++) {
                  if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "WCF #")
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
                done.push(item.tpfNumber);
                year = new Date(
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "HAULING DATE")
                  ]
                ).getFullYear();
                certification_year = new Date(
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                  ]
                ).getFullYear();
                month =
                  new Date(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "HAULING DATE")
                    ]
                  ).getMonth() + 1;
                cert_month =
                  new Date(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                    ]
                  ).getMonth() + 1;
                certification_date =
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                  ];
                certification_day = new Date(certification_date).getDate();
                certification_day_ordinal = convertToOrdinal(certification_day);
                certification_month = convertToMonthName(cert_month);
                if (
                  waste_description.value ==
                    findWasteName(
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "CLIENT ID")
                      ],
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WASTE ID")
                      ]
                    ) &&
                  year_covered.value == year &&
                  month_covered.value == month
                ) {
                  var pull_out_form = "";
                  for (let y = 1; y < sf_data_list.content.length; y++) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "SF #")
                      ] ==
                      sf_data_list.content[y][
                        findTextInArray(sf_data_list, "SF #")
                      ]
                    )
                      pull_out_form =
                        sf_data_list.content[y][
                          findTextInArray(sf_data_list, "FORM #")
                        ];
                  }
                  for (let y = 1; y < wcf_data_list.content.length; y++) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "SF #")
                      ] ==
                      wcf_data_list.content[y][
                        findTextInArray(wcf_data_list, "WCF #")
                      ]
                    )
                      pull_out_form =
                        wcf_data_list.content[y][
                          findTextInArray(wcf_data_list, "PULL OUT FORM #")
                        ];
                  }
                  const type_of_weight =
                    document.getElementById("type_of_weight");
                  var cod_weight = 0;
                  if (type_of_weight.value == "CLIENT WEIGHT") {
                    cod_weight = findClientWeight(
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WCF #")
                      ]
                    );
                    total_cod_weight += findClientWeight(
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WCF #")
                      ]
                    );
                  } else if (type_of_weight.value == "FEFC WEIGHT") {
                    cod_weight = item.weight;
                    total_cod_weight += item.weight;
                  }
                  certification_text.innerHTML = `A Total of <b>${formatNumber(
                    total_cod_weight
                  )} Kgs.</b> That is/are transported by <b>FAR EAST FUEL CORPORATION</b> to our TSD facility located at No. 888 Purok 5, Irabagon St., Barangay Anyatam, San Ildefonso, Bulacan with <b>TSD No. OL-TR-R3-14-000152.</b>`;
                  table_data_counter += 1;
                  if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023015"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 60px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>TS ${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 60px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>TS No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="TS ${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023026" ||
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2024013"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Gate pass No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023018"
                  ) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WASTE ID")
                      ] == "W20230003"
                    ) {
                      var new_waste_name = "";
                      var pull_out_form;
                      for (let a = 1; a < wcf_data_list.content.length; a++) {
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          pull_out_form =
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "PULL OUT FORM #")
                            ];
                          if (
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "LTF/ MTF  #")
                            ].substring(0, 3) == "MTF"
                          ) {
                          } else {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            } (FEFC)`;
                          }
                        }
                      }
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 70px 90px .7fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${new_waste_name}</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  cod_weight
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 70px 90px .7fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                            `;
                    } else {
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "WASTE NAME"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  findClientWeight(
                                                    tpf_data_list.content[x][
                                                      findTextInArray(
                                                        tpf_data_list,
                                                        "WCF #"
                                                      )
                                                    ]
                                                  )
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${findClientWeight(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            )}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            `;
                    }
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023024"
                  ) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WASTE ID")
                      ] == "W20230002"
                    ) {
                      var new_waste_name = "";
                      var pull_out_form;
                      for (let a = 1; a < wcf_data_list.content.length; a++) {
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          pull_out_form = `${
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "PULL OUT FORM #")
                            ]
                          }`;
                          if (
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "LTF/ MTF  #")
                            ].substring(0, 3) == "MTF"
                          ) {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            }`;
                          } else {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            } (FEFC)`;
                          }
                        }
                      }
                      var prefix = pull_out_form.slice(0, 6);
                      var numbers = pull_out_form.slice(6);
                      var steam_no = [];
                      console.log(
                        tpf_data_list.content[x][
                          findTextInArray(tpf_data_list, "WCF #")
                        ]
                      );
                      for (let y = 1; y < wtf_data_list.content.length; y++) {
                        if (
                          wtf_data_list.content[y][
                            findTextInArray(wtf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          if (
                            !steam_no.includes(
                              wtf_data_list.content[y][
                                findTextInArray(wtf_data_list, "STEAM #")
                              ]
                            )
                          ) {
                            steam_no.push(
                              wtf_data_list.content[y][
                                findTextInArray(wtf_data_list, "STEAM #")
                              ]
                            );
                          }
                        }
                      }
                      var date_finished = "";
                      for (let y = 1; y < wdf_data_list.content.length; y++) {
                        if (
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "SF #")
                          ] ==
                          wdf_data_list.content[y][
                            findTextInArray(wdf_data_list, "WDF #")
                          ]
                        ) {
                          date_finished =
                            wdf_data_list.content[y][
                              findTextInArray(wdf_data_list, "DISPOSAL DATE")
                            ];
                        }
                      }
                      var steam_no_string = steam_no.join(", ");
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 70px 1.3fr 180px 50px 60px 110px 90px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${new_waste_name}</td>
                                                <td style="font-size: 9px !important">${steam_no_string}</td>
                                                <td>${prefix} ${numbers}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  cod_weight
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  date_finished
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 70px 1.3fr 180px 50px 60px 110px 90px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Steam #</th>
                                                <th>Gate Pass #</th>
                                                <th>Qty</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                            `;
                    }
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023057"
                  ) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WASTE ID")
                      ] == "W20230002"
                    ) {
                      var new_waste_name = "";
                      var pull_out_form;
                      for (let a = 1; a < wcf_data_list.content.length; a++) {
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          pull_out_form = `${
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "PULL OUT FORM #")
                            ]
                          }`;
                          if (
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "LTF/ MTF  #")
                            ].substring(0, 3) == "MTF"
                          ) {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            }`;
                          } else {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            } (FEFC)`;
                          }
                        }
                      }
                      var prefix = pull_out_form.slice(0, 6);
                      var numbers = pull_out_form.slice(6);
                      var steam_no = [];
                      console.log(
                        tpf_data_list.content[x][
                          findTextInArray(tpf_data_list, "WCF #")
                        ]
                      );
                      for (let y = 1; y < wtf_data_list.content.length; y++) {
                        if (
                          wtf_data_list.content[y][
                            findTextInArray(wtf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          if (
                            !steam_no.includes(
                              wtf_data_list.content[y][
                                findTextInArray(wtf_data_list, "STEAM #")
                              ]
                            )
                          ) {
                            steam_no.push(
                              wtf_data_list.content[y][
                                findTextInArray(wtf_data_list, "STEAM #")
                              ]
                            );
                          }
                        }
                      }
                      var date_finished = "";
                      for (let y = 1; y < wdf_data_list.content.length; y++) {
                        if (
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "SF #")
                          ] ==
                          wdf_data_list.content[y][
                            findTextInArray(wdf_data_list, "WDF #")
                          ]
                        ) {
                          date_finished =
                            wdf_data_list.content[y][
                              findTextInArray(wdf_data_list, "DISPOSAL DATE")
                            ];
                        }
                      }
                      var steam_no_string = steam_no.join(", ");
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 70px 1.3fr 180px 50px 60px 110px 90px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${new_waste_name}</td>
                                                <td style="font-size: 9px !important">${steam_no_string}</td>
                                                <td>${prefix} ${numbers}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  cod_weight
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  date_finished
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 70px 1.3fr 180px 50px 60px 110px 90px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Steam #</th>
                                                <th>Gate Pass #</th>
                                                <th>Qty</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                            `;
                    } else {
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "WASTE NAME"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  findClientWeight(
                                                    tpf_data_list.content[x][
                                                      findTextInArray(
                                                        tpf_data_list,
                                                        "WCF #"
                                                      )
                                                    ]
                                                  )
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${findClientWeight(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            )}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            `;
                    }
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023016"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>GPF ${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Gate Pass No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="GPF ${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023036"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Pull Out Slip No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023014"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 80px 160px 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 80px 160px 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Waste Code</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Waste Code</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  }
                  table_company.innerHTML = findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  );
                  company.value = findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  );
                  table_data_input_value.innerHTML = table_data_input;
                  for (let y = 1; y < client_data_list.content.length; y++) {
                    if (
                      input_box.value ==
                      client_data_list.content[y][
                        findTextInArray(client_data_list, "CLIENT NAME")
                      ]
                    ) {
                      if (
                        client_data_list.content[y][
                          findTextInArray(client_data_list, "CLIENT ID")
                        ] == "C2023018"
                      ) {
                        table_company_address.innerHTML = `${
                          client_data_list.content[y][
                            findTextInArray(client_data_list, "ADDRESS")
                          ]
                        } <br><h4 style="font-weight: bold">OL-GR-R4A-34-000594</h4>`;
                      } else if (
                        client_data_list.content[y][
                          findTextInArray(client_data_list, "CLIENT ID")
                        ] == "C2023026" ||
                        tpf_data_list.content[x][
                          findTextInArray(tpf_data_list, "CLIENT ID")
                        ] == "C2024013"
                      ) {
                        table_company_address.innerHTML = `A subsidiary of San Miguel Corporation <br> Polo Brewery`;
                      } else {
                        table_company_address.innerHTML =
                          client_data_list.content[y][
                            findTextInArray(client_data_list, "ADDRESS")
                          ];
                      }
                    }
                  }
                  what_to_print.style.display = "block";
                  completion.style.display = "grid";
                  convertToPDFandDownload_button.style.display = "block";
                  table_data.innerHTML = table_data_value;
                  table_head_data.innerHTML = table_head_data_value;
                  certification.innerHTML = `${certification_day}`;
                  certification2.innerHTML = `${certification_day_ordinal}`;
                  certification3.innerHTML = ` day of ${certification_month} ${certification_year}`;
                  result_remarks.innerHTML = "";
                }
              }
            }
          }
        }
      } else if (type_of_cod.value == "By Date") {
        const waste_description = document.getElementById("waste_description");
        const year_covered = document.getElementById("year_covered");
        const month_covered = document.getElementById("month_covered");
        for (const item of pending_certification) {
          for (let x = 1; x < tpf_data_list.content.length; x++) {
            if (
              tpf_data_list.content[x][
                findTextInArray(tpf_data_list, "TPF #")
              ] == item.tpfNumber
            ) {
              if (
                !done.includes(item.tpfNumber) &&
                input_box.value ===
                  findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  )
              ) {
                var mtf = "";
                var ltf = "";
                for (let k = 1; k < wcf_data_list.content.length; k++) {
                  if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "WCF #")
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
                done.push(item.tpfNumber);
                year = new Date(
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "HAULING DATE")
                  ]
                ).getFullYear();
                certification_year = new Date(
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                  ]
                ).getFullYear();
                month =
                  new Date(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                    ]
                  ).getMonth() + 1;
                certification_date =
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                  ];
                certification_day = new Date(certification_date).getDate();
                certification_hauling_date =
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "HAULING DATE")
                  ];
                certification_Hauling_day = new Date(
                  certification_hauling_date
                ).getDate();
                certification_day_ordinal = convertToOrdinal(certification_day);
                certification_month = convertToMonthName(month);
                if (
                  waste_description.value == certification_Hauling_day &&
                  year_covered.value == year &&
                  month_covered.value == month
                ) {
                  var pull_out_form = "";
                  for (let y = 1; y < sf_data_list.content.length; y++) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "SF #")
                      ] ==
                      sf_data_list.content[y][
                        findTextInArray(sf_data_list, "SF #")
                      ]
                    )
                      pull_out_form =
                        sf_data_list.content[y][
                          findTextInArray(sf_data_list, "FORM #")
                        ];
                  }
                  for (let y = 1; y < wcf_data_list.content.length; y++) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "SF #")
                      ] ==
                      wcf_data_list.content[y][
                        findTextInArray(wcf_data_list, "WCF #")
                      ]
                    )
                      pull_out_form =
                        wcf_data_list.content[y][
                          findTextInArray(wcf_data_list, "PULL OUT FORM #")
                        ];
                  }
                  const type_of_weight =
                    document.getElementById("type_of_weight");
                  var cod_weight = 0;
                  if (type_of_weight.value == "CLIENT WEIGHT") {
                    cod_weight = findClientWeight(
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WCF #")
                      ]
                    );
                    total_cod_weight += findClientWeight(
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WCF #")
                      ]
                    );
                  } else if (type_of_weight.value == "FEFC WEIGHT") {
                    cod_weight = item.weight;
                    total_cod_weight += item.weight;
                  }
                  certification_text.innerHTML = `A Total of <b>${formatNumber(
                    total_cod_weight
                  )} Kgs.</b> That is/are transported by <b>FAR EAST FUEL CORPORATION</b> to our TSD facility located at No. 888 Purok 5, Irabagon St., Barangay Anyatam, San Ildefonso, Bulacan with <b>TSD No. OL-TR-R3-14-000152.</b>`;
                  table_data_counter += 1;
                  if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023015"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 60px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>TS ${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 60px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>TS No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="TS ${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023026" ||
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2024013"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Gate pass No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023018"
                  ) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WASTE ID")
                      ] == "W20230003"
                    ) {
                      var new_waste_name = "";
                      var pull_out_form;
                      for (let a = 1; a < wcf_data_list.content.length; a++) {
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          pull_out_form =
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "PULL OUT FORM #")
                            ];
                          if (
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "LTF/ MTF  #")
                            ].substring(0, 3) == "MTF"
                          ) {
                          } else {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            } (FEFC)`;
                          }
                        }
                      }
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 70px 90px .7fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${new_waste_name}</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  cod_weight
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 70px 90px .7fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                            `;
                    } else {
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "WASTE NAME"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  findClientWeight(
                                                    tpf_data_list.content[x][
                                                      findTextInArray(
                                                        tpf_data_list,
                                                        "WCF #"
                                                      )
                                                    ]
                                                  )
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${findClientWeight(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            )}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            `;
                    }
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023024"
                  ) {
                    var new_waste_name = "";
                    var pull_out_form;
                    for (let a = 1; a < wcf_data_list.content.length; a++) {
                      if (
                        wcf_data_list.content[a][
                          findTextInArray(wcf_data_list, "WCF #")
                        ] ==
                        tpf_data_list.content[x][
                          findTextInArray(tpf_data_list, "WCF #")
                        ]
                      ) {
                        pull_out_form =
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "PULL OUT FORM #")
                          ];
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "LTF/ MTF  #")
                          ].substring(0, 3) == "MTF"
                        ) {
                        } else {
                          new_waste_name = `${
                            tpf_data_list.content[x][
                              findTextInArray(tpf_data_list, "WASTE NAME")
                            ]
                          } <br> Plate No. ${
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "PLATE #")
                            ]
                          } (FEFC)`;
                        }
                      }
                    }
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1.3fr 80px 80px .7fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${new_waste_name}</td>
                                            <td>${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1.3fr 80px 80px .7fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Truck Scale Form #</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023016"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>GPF ${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Gate Pass No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="GPF ${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023036"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Pull Out Slip No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023014"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 80px 160px 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 80px 160px 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Waste Code</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Waste Code</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  }
                  table_company.innerHTML = findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  );
                  company.value = findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  );
                  table_data_input_value.innerHTML = table_data_input;
                  for (let y = 1; y < client_data_list.content.length; y++) {
                    if (
                      input_box.value ==
                      client_data_list.content[y][
                        findTextInArray(client_data_list, "CLIENT NAME")
                      ]
                    ) {
                      if (
                        client_data_list.content[y][
                          findTextInArray(client_data_list, "CLIENT ID")
                        ] == "C2023018"
                      ) {
                        table_company_address.innerHTML = `${
                          client_data_list.content[y][
                            findTextInArray(client_data_list, "ADDRESS")
                          ]
                        } <br><h4 style="font-weight: bold">OL-GR-R4A-34-000594</h4>`;
                      } else {
                        table_company_address.innerHTML =
                          client_data_list.content[y][
                            findTextInArray(client_data_list, "ADDRESS")
                          ];
                      }
                    }
                  }
                  what_to_print.style.display = "block";
                  completion.style.display = "grid";
                  convertToPDFandDownload_button.style.display = "block";
                  table_data.innerHTML = table_data_value;
                  table_head_data.innerHTML = table_head_data_value;
                  certification.innerHTML = `${certification_day}`;
                  certification2.innerHTML = `${certification_day_ordinal}`;
                  certification3.innerHTML = ` day of ${certification_month} ${certification_year}`;
                  result_remarks.innerHTML = "";
                }
              }
            }
          }
        }
      } else if (type_of_cod.value == "By Transaction") {
        const waste_description = document.getElementById("waste_description");
        const year_covered = document.getElementById("year_covered");
        const month_covered = document.getElementById("month_covered");
        for (const item of pending_certification) {
          for (let x = 1; x < tpf_data_list.content.length; x++) {
            if (
              tpf_data_list.content[x][
                findTextInArray(tpf_data_list, "TPF #")
              ] == item.tpfNumber
            ) {
              if (
                !done.includes(item.tpfNumber) &&
                input_box.value ===
                  findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  )
              ) {
                var mtf = "";
                var ltf = "";
                for (let k = 1; k < wcf_data_list.content.length; k++) {
                  if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "WCF #")
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
                done.push(item.tpfNumber);
                let haulDate = new Date(
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "HAULING DATE")
                  ]
                );
                year = haulDate.getFullYear();
                year_covered.value = year;
                const monthNames = [
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
                let monthIndex = haulDate.getMonth();
                let monthName = monthNames[monthIndex];
                month_covered.value = monthName;
                certification_year = new Date(
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                  ]
                ).getFullYear();
                month =
                  new Date(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                    ]
                  ).getMonth() + 1;
                certification_date =
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                  ];
                certification_day = new Date(certification_date).getDate();
                certification_hauling_date =
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "HAULING DATE")
                  ];
                certification_Hauling_day = new Date(
                  certification_hauling_date
                ).getDate();
                certification_day_ordinal = convertToOrdinal(certification_day);
                certification_month = convertToMonthName(month);
                if (waste_description.value == mtf) {
                  var pull_out_form = "";
                  for (let y = 1; y < wcf_data_list.content.length; y++) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "SF #")
                      ] ==
                      wcf_data_list.content[y][
                        findTextInArray(wcf_data_list, "WCF #")
                      ]
                    ) {
                      pull_out_form =
                        wcf_data_list.content[y][
                          findTextInArray(wcf_data_list, "PULL OUT FORM #")
                        ];
                      break;
                    }
                  }
                  for (let y = 1; y < sf_data_list.content.length; y++) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "SF #")
                      ] ==
                      sf_data_list.content[y][
                        findTextInArray(sf_data_list, "SF #")
                      ]
                    ) {
                      pull_out_form =
                        sf_data_list.content[y][
                          findTextInArray(sf_data_list, "FORM #")
                        ];
                      break;
                    }
                  }
                  const type_of_weight =
                    document.getElementById("type_of_weight");
                  var cod_weight = 0;
                  if (type_of_weight.value == "CLIENT WEIGHT") {
                    cod_weight = findClientWeight(
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WCF #")
                      ]
                    );
                    total_cod_weight += findClientWeight(
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WCF #")
                      ]
                    );
                  } else if (type_of_weight.value == "FEFC WEIGHT") {
                    cod_weight = item.weight;
                    total_cod_weight += item.weight;
                  }
                  certification_text.innerHTML = `A Total of <b>${formatNumber(
                    total_cod_weight
                  )} Kgs.</b> That is/are transported by <b>FAR EAST FUEL CORPORATION</b> to our TSD facility located at No. 888 Purok 5, Irabagon St., Barangay Anyatam, San Ildefonso, Bulacan with <b>TSD No. OL-TR-R3-14-000152.</b>`;
                  table_data_counter += 1;
                  if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023015"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 60px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>TS ${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 60px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>TS No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="TS ${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023026" ||
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2024013"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Gate pass No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023018"
                  ) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WASTE ID")
                      ] == "W20230003"
                    ) {
                      var new_waste_name = "";
                      var pull_out_form;
                      for (let a = 1; a < wcf_data_list.content.length; a++) {
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          pull_out_form =
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "PULL OUT FORM #")
                            ];
                          if (
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "LTF/ MTF  #")
                            ].substring(0, 3) == "MTF"
                          ) {
                          } else {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            } (FEFC)`;
                          }
                        }
                      }
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 70px 90px .7fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${new_waste_name}</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  cod_weight
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 70px 90px .7fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                            `;
                    } else {
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "WASTE NAME"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  findClientWeight(
                                                    tpf_data_list.content[x][
                                                      findTextInArray(
                                                        tpf_data_list,
                                                        "WCF #"
                                                      )
                                                    ]
                                                  )
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${findClientWeight(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            )}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            `;
                    }
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023024"
                  ) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WASTE ID")
                      ] == "W20230002"
                    ) {
                      var new_waste_name = "";
                      var pull_out_form;
                      for (let a = 1; a < wcf_data_list.content.length; a++) {
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          pull_out_form = `${
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "PULL OUT FORM #")
                            ]
                          }`;
                          if (
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "LTF/ MTF  #")
                            ].substring(0, 3) == "MTF"
                          ) {
                          } else {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            } (FEFC)`;
                          }
                        }
                      }
                      console.log(pull_out_form);
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 60px 80px 80px 110px 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${new_waste_name}</td>
                                                <td>14463169 14463174 14463185</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  cod_weight
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 60px 80px 80px 110px 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Steam #</th>
                                                <th>Gate Pass #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                            `;
                    } else {
                      var new_waste_name = "";
                      var pull_out_form;
                      for (let a = 1; a < wcf_data_list.content.length; a++) {
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          if (
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "SUBMIT TO")
                            ] == "SORTING"
                          ) {
                            for (
                              let b = 1;
                              b < sf_data_list.content.length;
                              b++
                            ) {
                              if (
                                tpf_data_list.content[x][
                                  findTextInArray(tpf_data_list, "SF #")
                                ] ==
                                sf_data_list.content[b][
                                  findTextInArray(sf_data_list, "SF #")
                                ]
                              ) {
                                pull_out_form =
                                  sf_data_list.content[b][
                                    findTextInArray(sf_data_list, "FORM #")
                                  ];
                              }
                            }
                          } else {
                            pull_out_form =
                              wcf_data_list.content[a][
                                findTextInArray(
                                  wcf_data_list,
                                  "PULL OUT FORM #"
                                )
                              ];
                          }
                        }
                      }
                      table_data_value += `
                                          <tr style="display: grid; grid-template-columns: 105px 1.3fr 80px 80px .7fr 105px;">
                                              <td>${date_decoder(
                                                tpf_data_list.content[x][
                                                  findTextInArray(
                                                    tpf_data_list,
                                                    "HAULING DATE"
                                                  )
                                                ]
                                              )}</td>
                                              <td>${
                                                tpf_data_list.content[x][
                                                  findTextInArray(
                                                    tpf_data_list,
                                                    "WASTE NAME"
                                                  )
                                                ]
                                              }</td>
                                              <td>${pull_out_form}</td>
                                              <td style="font-weight: bold">${formatNumber(
                                                cod_weight
                                              )} kgs.</td>
                                              <td>${
                                                tpf_data_list.content[x][
                                                  findTextInArray(
                                                    tpf_data_list,
                                                    "DESTRUCTION PROCESS"
                                                  )
                                                ]
                                              }</td>
                                              <td>${date_decoder(
                                                tpf_data_list.content[x][
                                                  findTextInArray(
                                                    tpf_data_list,
                                                    "TARGET COMPLETION DATE"
                                                  )
                                                ]
                                              )}</td>
                                          </tr>
                                          `;
                      table_head_data_value = `
                                          <tr style="display: grid; grid-template-columns: 105px 1.3fr 80px 80px .7fr 105px;">
                                              <th>Date Hauled</th>
                                              <th>Class and Description of Waste</th>
                                              <th>Truck Scale Form #</th>
                                              <th>Quantity</th>
                                              <th>Destruction Process</th>
                                              <th>Date of Completion</th>
                                          </tr>
                                          `;
                      table_data_input += `
                                          <input type="hidden" value="${
                                            tpf_data_list.content[x][
                                              findTextInArray(
                                                tpf_data_list,
                                                "TPF #"
                                              )
                                            ]
                                          }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                          <input type="hidden" value="${
                                            tpf_data_list.content[x][
                                              findTextInArray(
                                                tpf_data_list,
                                                "SF #"
                                              )
                                            ]
                                          }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                          <input type="hidden" value="${
                                            tpf_data_list.content[x][
                                              findTextInArray(
                                                tpf_data_list,
                                                "WCF #"
                                              )
                                            ]
                                          }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                          <input type="hidden" value="${
                                            tpf_data_list.content[x][
                                              findTextInArray(
                                                tpf_data_list,
                                                "CLIENT ID"
                                              )
                                            ]
                                          }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                          <input type="hidden" value="${
                                            tpf_data_list.content[x][
                                              findTextInArray(
                                                tpf_data_list,
                                                "WASTE ID"
                                              )
                                            ]
                                          }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                          <input type="hidden" value="${findWasteCode(
                                            tpf_data_list.content[x][
                                              findTextInArray(
                                                tpf_data_list,
                                                "WASTE ID"
                                              )
                                            ]
                                          )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                          <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                          <input type="hidden" value="${
                                            tpf_data_list.content[x][
                                              findTextInArray(
                                                tpf_data_list,
                                                "WASTE NAME"
                                              )
                                            ]
                                          }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                          <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                          <input type="hidden" value="${
                                            tpf_data_list.content[x][
                                              findTextInArray(
                                                tpf_data_list,
                                                "DESTRUCTION PROCESS"
                                              )
                                            ]
                                          }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                          <input type="hidden" value="${date_decoder(
                                            tpf_data_list.content[x][
                                              findTextInArray(
                                                tpf_data_list,
                                                "HAULING DATE"
                                              )
                                            ]
                                          )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                          <input type="hidden" value="${date_decoder(
                                            tpf_data_list.content[x][
                                              findTextInArray(
                                                tpf_data_list,
                                                "TARGET COMPLETION DATE"
                                              )
                                            ]
                                          )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                          <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                          `;
                    }
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023057"
                  ) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WASTE ID")
                      ] == "W20230002"
                    ) {
                      var new_waste_name = "";
                      var pull_out_form;
                      for (let a = 1; a < wcf_data_list.content.length; a++) {
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          pull_out_form = `${
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "PULL OUT FORM #")
                            ]
                          }`;
                          if (
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "LTF/ MTF  #")
                            ].substring(0, 3) == "MTF"
                          ) {
                          } else {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            } (FEFC)`;
                          }
                        }
                      }
                      console.log(pull_out_form);
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 60px 80px 80px 110px 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${new_waste_name}</td>
                                                <td>14463169 14463174 14463185</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  cod_weight
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 60px 80px 80px 110px 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Steam #</th>
                                                <th>Gate Pass #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                            `;
                    } else {
                      var new_waste_name = "";
                      for (let a = 1; a < wcf_data_list.content.length; a++) {
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          if (
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "LTF/ MTF  #")
                            ].substring(0, 3) == "MTF"
                          ) {
                          } else {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            } (FEFC)`;
                          }
                        }
                      }
                      console.log(pull_out_form);
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 80px 80px .7fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "WASTE NAME"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  cod_weight
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 80px 80px .7fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                            `;
                    }
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023016"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>GPF ${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Gate Pass No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="GPF ${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023036"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Pull Out Slip No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023014"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 80px 160px 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 80px 160px 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Waste Code</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Waste Code</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  }
                  table_company.innerHTML = findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  );
                  company.value = findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  );
                  table_data_input_value.innerHTML = table_data_input;
                  for (let y = 1; y < client_data_list.content.length; y++) {
                    if (
                      input_box.value ==
                      client_data_list.content[y][
                        findTextInArray(client_data_list, "CLIENT NAME")
                      ]
                    ) {
                      if (
                        client_data_list.content[y][
                          findTextInArray(client_data_list, "CLIENT ID")
                        ] == "C2023018"
                      ) {
                        table_company_address.innerHTML = `${
                          client_data_list.content[y][
                            findTextInArray(client_data_list, "ADDRESS")
                          ]
                        } <br><h4 style="font-weight: bold">OL-GR-R4A-34-000594</h4>`;
                      } else {
                        table_company_address.innerHTML =
                          client_data_list.content[y][
                            findTextInArray(client_data_list, "ADDRESS")
                          ];
                      }
                    }
                  }
                  what_to_print.style.display = "block";
                  completion.style.display = "grid";
                  convertToPDFandDownload_button.style.display = "block";
                  table_data.innerHTML = table_data_value;
                  table_head_data.innerHTML = table_head_data_value;
                  certification.innerHTML = `${certification_day}`;
                  certification2.innerHTML = `${certification_day_ordinal}`;
                  certification3.innerHTML = ` day of ${certification_month} ${certification_year}`;
                  result_remarks.innerHTML = "";
                }
              }
            }
          }
        }
      } else if (type_of_cod.value == "By Waste and Date Coverage") {
        const waste_description = document.getElementById("waste_description");
        const date_from = new Date(
          document.getElementById("date_from").value
        ).setHours(0);
        const date_to = new Date(
          document.getElementById("date_to").value
        ).setHours(0);
        for (const item of pending_certification) {
          for (let x = 1; x < tpf_data_list.content.length; x++) {
            if (
              tpf_data_list.content[x][
                findTextInArray(tpf_data_list, "TPF #")
              ] == item.tpfNumber
            ) {
              if (
                !done.includes(item.tpfNumber) &&
                input_box.value ===
                  findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  )
              ) {
                var mtf = "";
                var ltf = "";
                for (let k = 1; k < wcf_data_list.content.length; k++) {
                  if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "WCF #")
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
                done.push(item.tpfNumber);
                year = new Date(
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "HAULING DATE")
                  ]
                ).getFullYear();
                certification_year = new Date(
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                  ]
                ).getFullYear();
                month =
                  new Date(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                    ]
                  ).getMonth() + 1;
                certification_date =
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
                  ];
                hauling_date = new Date(
                  tpf_data_list.content[x][
                    findTextInArray(tpf_data_list, "HAULING DATE")
                  ]
                );
                certification_day = new Date(certification_date).getDate();
                certification_day_ordinal = convertToOrdinal(certification_day);
                certification_month = convertToMonthName(month);
                if (
                  waste_description.value ==
                    findWasteName(
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "CLIENT ID")
                      ],
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WASTE ID")
                      ]
                    ) &&
                  new Date(date_from).setHours(0) <= hauling_date &&
                  new Date(date_to).setHours(0) >= hauling_date
                ) {
                  var pull_out_form = "";
                  for (let y = 1; y < sf_data_list.content.length; y++) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "SF #")
                      ] ==
                      sf_data_list.content[y][
                        findTextInArray(sf_data_list, "SF #")
                      ]
                    )
                      pull_out_form =
                        sf_data_list.content[y][
                          findTextInArray(sf_data_list, "FORM #")
                        ];
                  }
                  for (let y = 1; y < wcf_data_list.content.length; y++) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "SF #")
                      ] ==
                      wcf_data_list.content[y][
                        findTextInArray(wcf_data_list, "WCF #")
                      ]
                    )
                      pull_out_form =
                        wcf_data_list.content[y][
                          findTextInArray(wcf_data_list, "PULL OUT FORM #")
                        ];
                  }
                  const type_of_weight =
                    document.getElementById("type_of_weight");
                  var cod_weight = 0;
                  if (type_of_weight.value == "CLIENT WEIGHT") {
                    cod_weight = findClientWeight(
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WCF #")
                      ]
                    );
                    total_cod_weight += findClientWeight(
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WCF #")
                      ]
                    );
                  } else if (type_of_weight.value == "FEFC WEIGHT") {
                    cod_weight = item.weight;
                    total_cod_weight += item.weight;
                  }
                  certification_text.innerHTML = `A Total of <b>${formatNumber(
                    total_cod_weight
                  )} Kgs.</b> That is/are transported by <b>FAR EAST FUEL CORPORATION</b> to our TSD facility located at No. 888 Purok 5, Irabagon St., Barangay Anyatam, San Ildefonso, Bulacan with <b>TSD No. OL-TR-R3-14-000152.</b>`;
                  table_data_counter += 1;
                  if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023015"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 60px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>TS ${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 60px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>TS No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="TS ${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023026" ||
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2024013"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Gate pass No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023018"
                  ) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WASTE ID")
                      ] == "W20230003"
                    ) {
                      var new_waste_name = "";
                      var pull_out_form;
                      for (let a = 1; a < wcf_data_list.content.length; a++) {
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          pull_out_form =
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "PULL OUT FORM #")
                            ];
                          if (
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "LTF/ MTF  #")
                            ].substring(0, 3) == "MTF"
                          ) {
                          } else {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            } (FEFC)`;
                          }
                        }
                      }
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 70px 90px .7fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${new_waste_name}</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  cod_weight
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 70px 90px .7fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                            `;
                    } else {
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "WASTE NAME"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  findClientWeight(
                                                    tpf_data_list.content[x][
                                                      findTextInArray(
                                                        tpf_data_list,
                                                        "WCF #"
                                                      )
                                                    ]
                                                  )
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${findClientWeight(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            )}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            `;
                    }
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023024"
                  ) {
                    if (
                      tpf_data_list.content[x][
                        findTextInArray(tpf_data_list, "WASTE ID")
                      ] == "W20230003"
                    ) {
                      var new_waste_name = "";
                      var pull_out_form;
                      for (let a = 1; a < wcf_data_list.content.length; a++) {
                        if (
                          wcf_data_list.content[a][
                            findTextInArray(wcf_data_list, "WCF #")
                          ] ==
                          tpf_data_list.content[x][
                            findTextInArray(tpf_data_list, "WCF #")
                          ]
                        ) {
                          pull_out_form =
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "PULL OUT FORM #")
                            ];
                          if (
                            wcf_data_list.content[a][
                              findTextInArray(wcf_data_list, "LTF/ MTF  #")
                            ].substring(0, 3) == "MTF"
                          ) {
                          } else {
                            new_waste_name = `${
                              tpf_data_list.content[x][
                                findTextInArray(tpf_data_list, "WASTE NAME")
                              ]
                            } <br> Plate No. ${
                              wcf_data_list.content[a][
                                findTextInArray(wcf_data_list, "PLATE #")
                              ]
                            } (FEFC)`;
                          }
                        }
                      }
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 70px 90px .7fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${new_waste_name}</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  cod_weight
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px 1.3fr 70px 90px .7fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                            `;
                    } else {
                      table_data_value += `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "HAULING DATE"
                                                    )
                                                  ]
                                                )}</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "WASTE NAME"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${pull_out_form}</td>
                                                <td style="font-weight: bold">${formatNumber(
                                                  findClientWeight(
                                                    tpf_data_list.content[x][
                                                      findTextInArray(
                                                        tpf_data_list,
                                                        "WCF #"
                                                      )
                                                    ]
                                                  )
                                                )} kgs.</td>
                                                <td>${
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "DESTRUCTION PROCESS"
                                                    )
                                                  ]
                                                }</td>
                                                <td>${date_decoder(
                                                  tpf_data_list.content[x][
                                                    findTextInArray(
                                                      tpf_data_list,
                                                      "TARGET COMPLETION DATE"
                                                    )
                                                  ]
                                                )}</td>
                                            </tr>
                                            `;
                      table_head_data_value = `
                                            <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                                <th>Date Hauled</th>
                                                <th>Class and Description of Waste</th>
                                                <th>Truck Scale Form #</th>
                                                <th>Quantity</th>
                                                <th>Destruction Process</th>
                                                <th>Date of Completion</th>
                                            </tr>
                                            `;
                      table_data_input += `
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TPF #"
                                                )
                                              ]
                                            }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "SF #"
                                                )
                                              ]
                                            }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "CLIENT ID"
                                                )
                                              ]
                                            }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                            <input type="hidden" value="${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                            <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                            <input type="hidden" value="${findClientWeight(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WCF #"
                                                )
                                              ]
                                            )}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                            <input type="hidden" value="${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                            <input type="hidden" value="${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                            `;
                    }
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023016"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>GPF ${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Gate Pass No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="GPF ${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023036"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${pull_out_form}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px .9fr 70px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Pull Out Slip No.</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else if (
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ] == "C2023014"
                  ) {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 80px 160px 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 80px 160px 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Waste Code</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  } else {
                    table_data_value += `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "HAULING DATE"
                                                )
                                              ]
                                            )}</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE NAME"
                                                )
                                              ]
                                            }</td>
                                            <td>${findWasteCode(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "WASTE ID"
                                                )
                                              ]
                                            )}</td>
                                            <td style="font-weight: bold">${formatNumber(
                                              cod_weight
                                            )} kgs.</td>
                                            <td>${
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "DESTRUCTION PROCESS"
                                                )
                                              ]
                                            }</td>
                                            <td>${date_decoder(
                                              tpf_data_list.content[x][
                                                findTextInArray(
                                                  tpf_data_list,
                                                  "TARGET COMPLETION DATE"
                                                )
                                              ]
                                            )}</td>
                                        </tr>
                                        `;
                    table_head_data_value = `
                                        <tr style="display: grid; grid-template-columns: 105px 1fr 50px 90px 1fr 105px;">
                                            <th>Date Hauled</th>
                                            <th>Class and Description of Waste</th>
                                            <th>Waste Code</th>
                                            <th>Quantity</th>
                                            <th>Destruction Process</th>
                                            <th>Date of Completion</th>
                                        </tr>
                                        `;
                    table_data_input += `
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TPF #"
                                            )
                                          ]
                                        }" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "SF #"
                                            )
                                          ]
                                        }" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        }" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        }" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                        <input type="hidden" value="${findWasteCode(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                        <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "WASTE NAME"
                                            )
                                          ]
                                        }" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                        <input type="hidden" value="${cod_weight}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                        <input type="hidden" value="${
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "DESTRUCTION PROCESS"
                                            )
                                          ]
                                        }" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}" name="hauling_date_input${table_data_counter}" id="hauling_date_input${table_data_counter}">    
                                        <input type="hidden" value="${date_decoder(
                                          tpf_data_list.content[x][
                                            findTextInArray(
                                              tpf_data_list,
                                              "TARGET COMPLETION DATE"
                                            )
                                          ]
                                        )}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        <input type="hidden" value="${mtf}" name="mtf_form_no${table_data_counter}" id="mtf_form_no${table_data_counter}">    
                                        `;
                  }
                  table_company.innerHTML = findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  );
                  company.value = findClientName(
                    tpf_data_list.content[x][
                      findTextInArray(tpf_data_list, "CLIENT ID")
                    ]
                  );
                  table_data_input_value.innerHTML = table_data_input;
                  for (let y = 1; y < client_data_list.content.length; y++) {
                    if (
                      input_box.value ==
                      client_data_list.content[y][
                        findTextInArray(client_data_list, "CLIENT NAME")
                      ]
                    ) {
                      if (
                        client_data_list.content[y][
                          findTextInArray(client_data_list, "CLIENT ID")
                        ] == "C2023018"
                      ) {
                        table_company_address.innerHTML = `${
                          client_data_list.content[y][
                            findTextInArray(client_data_list, "ADDRESS")
                          ]
                        } <br><h4 style="font-weight: bold">OL-GR-R4A-34-000594</h4>`;
                      } else {
                        table_company_address.innerHTML =
                          client_data_list.content[y][
                            findTextInArray(client_data_list, "ADDRESS")
                          ];
                      }
                    }
                  }
                  what_to_print.style.display = "block";
                  completion.style.display = "grid";
                  convertToPDFandDownload_button.style.display = "block";
                  table_data.innerHTML = table_data_value;
                  table_head_data.innerHTML = table_head_data_value;
                  certification.innerHTML = `${certification_day}`;
                  certification2.innerHTML = `${certification_day_ordinal}`;
                  certification3.innerHTML = ` day of ${certification_month} ${certification_year}`;
                  result_remarks.innerHTML = "";
                }
              }
            }
          }
        }
      }
      if (table_data_value == undefined || table_data_value == "") {
        result_remarks.innerHTML = `
                <div class="search_cod_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`;
      }
      const generate_qr_button = document.getElementById("generate_qr_button");
      submit_button.style.display = "block";
      generate_qr_button.addEventListener("click", processAndGenerateQRCode);
    }

    const type_of_cod_list = document.getElementById("type_of_cod_list");

    type_of_cod.addEventListener("change", () => {
      var data_content;
      if (type_of_cod.value == "By Waste Description") {
        data_content = `
                <div>
                    <label for="waste_description">
                        <i class="fa-solid fa-list-ol"></i>
                        Waste Description
                    </label><br>
                    <div>
                        <input type="text" id="waste_description" autocomplete="off" name="waste_description" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="year_covered">
                        <i class="fa-solid fa-list-ol"></i>
                        Year Covered
                    </label><br>
                    <div class="form">
                        <input type="text" autocomplete="off" name="year_covered" id="year_covered" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="month_covered">
                        <i class="fa-solid fa-list-ol"></i>
                        Month Covered
                    </label><br>
                    <div class="form">
                        <select name="month_covered" id="month_covered" class="form-control">
                            <option value="">Select Month</option>
                            <option value="1">JANUARY</option>
                            <option value="2">FEBRUARY</option>
                            <option value="3">MARCH</option>
                            <option value="4">APRIL</option>
                            <option value="5">MAY</option>
                            <option value="6">JUNE</option>
                            <option value="7">JULY</option>
                            <option value="8">AUGUST</option>
                            <option value="9">SEPTEMBER</option>
                            <option value="10">OCTOBER</option>
                            <option value="11">NOVEMBER</option>
                            <option value="12">DECEMBER</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label for="type_of_weight">
                    <i class="fa-solid fa-scale-balanced"></i>
                        Type of Weight
                    </label><br>
                    <div class="form">
                        <select name="type_of_weight" id="type_of_weight" class="form-control">
                            <option value="">SELECT WEIGHT</option>
                            <option value="CLIENT WEIGHT">CLIENT WEIGHT</option>
                            <option value="FEFC WEIGHT">SORTED WEIGHT</option>
                        </select>
                    </div>
                </div>
                `;
        what_to_print.style.display = "none";
        client_container.style.display = "grid";
        type_of_cod_list.innerHTML = data_content;
      } else if (type_of_cod.value == "By Date") {
        data_content = `
                <div>
                <label for="waste_description">
                        <i class="fa-solid fa-list-ol"></i>
                        Day
                        </label><br>
                    <div>
                        <input type="number" id="waste_description" autocomplete="off" name="waste_description" class="form-control"><br>
                    </div>
                    </div>
                <div>
                    <label for="year_covered">
                        <i class="fa-solid fa-list-ol"></i>
                        Year Covered
                    </label><br>
                    <div class="form">
                        <input type="text" autocomplete="off" name="year_covered" id="year_covered" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="month_covered">
                        <i class="fa-solid fa-list-ol"></i>
                        Month Covered
                    </label><br>
                    <div class="form">
                        <select name="month_covered" id="month_covered" class="form-control">
                            <option value="">Select Month</option>
                            <option value="1">JANUARY</option>
                            <option value="2">FEBRUARY</option>
                            <option value="3">MARCH</option>
                            <option value="4">APRIL</option>
                            <option value="5">MAY</option>
                            <option value="6">JUNE</option>
                            <option value="7">JULY</option>
                            <option value="8">AUGUST</option>
                            <option value="9">SEPTEMBER</option>
                            <option value="10">OCTOBER</option>
                            <option value="11">NOVEMBER</option>
                            <option value="12">DECEMBER</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label for="type_of_weight">
                    <i class="fa-solid fa-scale-balanced"></i>
                        Type of Weight
                    </label><br>
                    <div class="form">
                        <select name="type_of_weight" id="type_of_weight" class="form-control">
                            <option value="">SELECT WEIGHT</option>
                            <option value="CLIENT WEIGHT">CLIENT WEIGHT</option>
                            <option value="FEFC WEIGHT">SORTED WEIGHT</option>
                        </select>
                    </div>
                </div>
                `;
        what_to_print.style.display = "none";
        client_container.style.display = "grid";
        type_of_cod_list.innerHTML = data_content;
      } else if (type_of_cod.value == "By Transaction") {
        data_content = `
                <div>
                <label for="waste_description">
                        <i class="fa-solid fa-list-ol"></i>
                        MTF #
                        </label><br>
                    <div>
                        <input type="text" id="waste_description" autocomplete="off" name="waste_description" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="type_of_weight">
                    <i class="fa-solid fa-scale-balanced"></i>
                        Type of Weight
                    </label><br>
                    <div class="form">
                        <select name="type_of_weight" id="type_of_weight" class="form-control">
                            <option value="">SELECT WEIGHT</option>
                            <option value="CLIENT WEIGHT">CLIENT WEIGHT</option>
                            <option value="FEFC WEIGHT">SORTED WEIGHT</option>
                        </select>
                    </div>
                </div>
                <input type="hidden" autocomplete="off" name="year_covered" id="year_covered" class="form-control"><br>
                <input type="hidden" autocomplete="off" name="month_covered" id="month_covered" class="form-control"><br>
                `;
        what_to_print.style.display = "none";
        client_container.style.display = "grid";
        type_of_cod_list.innerHTML = data_content;
      } else if (type_of_cod.value == "By Waste and Date Coverage") {
        data_content = `
                <div>
                    <label for="waste_description">
                            <i class="fa-solid fa-list-ol"></i>
                            Waste Description
                    </label><br>
                    <div>
                        <input type="text" id="waste_description" autocomplete="off" name="waste_description" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="waste_description">
                        <i class="fa-solid fa-list-ol"></i>
                        From
                    </label><br>
                    <div class="form">
                        <input type="date" id="date_from" autocomplete="off" name="date_from" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="waste_description">
                        <i class="fa-solid fa-list-ol"></i>
                        To
                    </label><br>
                    <div class="form">
                        <input type="date" id="date_to" autocomplete="off" name="date_to" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="type_of_weight">
                    <i class="fa-solid fa-scale-balanced"></i>
                        Type of Weight
                    </label><br>
                    <div class="form">
                        <select name="type_of_weight" id="type_of_weight" class="form-control">
                            <option value="">SELECT WEIGHT</option>
                            <option value="CLIENT WEIGHT">CLIENT WEIGHT</option>
                            <option value="FEFC WEIGHT">SORTED WEIGHT</option>
                        </select>
                    </div>
                </div>
                `;
        what_to_print.style.display = "none";
        client_container.style.display = "grid";
        type_of_cod_list.innerHTML = data_content;
      }
    });

    // Function to generate a QR code from the content of an HTML element
    function processAndGenerateQRCode() {
      // convertElementToImage(function (imageDataUrl) {
      //     generateQRCodeFromImage(imageDataUrl);
      // });
      function convertElementToImage(callback) {
        const element = document.getElementById("what_to_print");

        // Set the scale to 2 to double the resolution (adjust as needed)
        html2canvas(element, {
          scale: 10, // Increase the resolution by 2x (you can adjust this value)
        }).then(function (canvas) {
          const imageDataUrl = canvas.toDataURL("image/png");
          callback(imageDataUrl);
        });
      }

      // Usage example
      convertElementToImage(function (imageDataUrl) {
        const imgElement = document.createElement("img");
        imgElement.src = imageDataUrl;
        const containerElement = document.getElementById("image-container");
        containerElement.appendChild(imgElement);
      });
    }

    const search_cod_form_no_button = document.getElementById(
      "search_cod_form_no_button"
    );
    const search_cod_form_no = document.getElementById("search_cod_form_no");

    search_cod_form_no_button.addEventListener("click", search);

    function search() {
      var table_data_value = "";
      var table_data_counter = 0;
      certification.innerText = `${certification_day_ordinal} of ${certification_month} ${year}`;
      df_no.innerHTML = `${code_year_month}${data_counter4}`;
      for (let x = 1; x < cod_data_list.content.length; x++) {
        if (
          search_cod_form_no.value ==
          cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]
        ) {
          for (let y = 1; y < tpf_data_list.content.length; y++) {
            year = new Date(
              tpf_data_list.content[y][
                findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")
              ]
            ).getFullYear();
            month =
              new Date(
                tpf_data_list.content[y][
                  findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")
                ]
              ).getMonth() + 1;
            certification_date =
              tpf_data_list.content[y][
                findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")
              ];
            certification_day = new Date(certification_date).getDate();
            certification_day_ordinal = convertToOrdinal(certification_day);
            certification_month = convertToMonthName(month);
            if (
              cod_data_list.content[x][
                findTextInArray(cod_data_list, "TPF #")
              ] ==
              tpf_data_list.content[y][findTextInArray(tpf_data_list, "TPF #")]
            ) {
              table_data_counter += 1;
              table_data_value += `<tr>
                                <td>${date_decoder(
                                  tpf_data_list.content[y][
                                    findTextInArray(
                                      tpf_data_list,
                                      "HAULING DATE"
                                    )
                                  ]
                                )}</td>
                                <td>${findWasteName(
                                  tpf_data_list.content[y][
                                    findTextInArray(tpf_data_list, "CLIENT ID")
                                  ],
                                  pf_data_list.content[y][
                                    findTextInArray(tpf_data_list, "WASTE ID")
                                  ]
                                )}</td>
                                <td>${findWasteCode(
                                  pf_data_list.content[y][
                                    findTextInArray(tpf_data_list, "WASTE ID")
                                  ]
                                )}</td>
                                <td>${
                                  tpf_data_list.content[y][
                                    findTextInArray(tpf_data_list, "WEIGHT")
                                  ]
                                } Kgs.</td>
                                <td>${
                                  tpf_data_list.content[y][
                                    findTextInArray(
                                      tpf_data_list,
                                      "DESTRUCTION PROCESS"
                                    )
                                  ]
                                }</td>
                                <td>${date_decoder(
                                  tpf_data_list.content[y][
                                    findTextInArray(
                                      tpf_data_list,
                                      "TARGET COMPLETION DATE"
                                    )
                                  ]
                                )}</td>
                                </tr>
                                `;
              certification_day_ordinal = convertToOrdinal(certification_day);
              certification_month = convertToMonthName(month);
              certification.innerText = `${certification_day_ordinal} of ${certification_month} ${year}`;
              table_company.innerHTML = findClientName(
                tpf_data_list.content[y][
                  findTextInArray(tpf_data_list, "CLIENT ID")
                ]
              );
              for (let z = 1; z < client_data_list.content.length; z++) {
                if (
                  cod_data_list.content[x][
                    findTextInArray(cod_data_list, "CLIENT ID")
                  ] ==
                  client_data_list.content[z][
                    findTextInArray(client_data_list, "CLIENT ID")
                  ]
                ) {
                  table_company_address.innerHTML =
                    client_data_list.content[z][
                      findTextInArray(client_data_list, "ADDRESS")
                    ];
                }
              }
            }
          }
        }
      }
      table_data.innerHTML = table_data_value;
      what_to_print.style.display = "block";
      convertToPDF_button.style.display = "block";
    }

    // multi section

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
                            findTextInArray(accomplishment_data_list, "ARID #")
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
                                      findTextInArray(mjo_data_list, "DETAILS")
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
      var data_counter = data_info.substring(9, 12) || 0;
      var year = new Date().getFullYear();
      var month = (new Date().getMonth() + 1).toString().padStart(2, "0");

      for (let y = 1; y <= prf_counter.value; y++) {
        prf_form_no[y] = document.querySelector(`#prf_form_no${y}`);
        prf_form_no[y].value = `ITM${year}${month}${(parseInt(data_counter) + y)
          .toString()
          .padStart(3, "0")}`;
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
    function findClientWeight(wcf_number) {
      var client_weight = "";
      for (let c = 1; c < wcf_data_list.content.length; c++) {
        if (
          wcf_number ==
          wcf_data_list.content[c][findTextInArray(wcf_data_list, "WCF #")]
        ) {
          client_weight =
            wcf_data_list.content[c][
              findTextInArray(wcf_data_list, "CLIENT WEIGHT")
            ];
          break;
        }
      }
      return client_weight;
    }

    function findMTFNumber(wcf_number) {
      var mtf = "";
      var ltf = "";
      for (let k = 1; k < wcf_data_list.content.length; k++) {
        if (
          wcf_number ==
          wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]
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
      return mtf;
    }

    const generate_report_button = document.getElementById(
      "generate_report_button"
    );
    const close_report_button = document.getElementById("close_report_button");
    const report_generate_button = document.getElementById(
      "report_generate_button"
    );
    const report_download_button = document.getElementById(
      "report_download_button"
    );
    const generate_report_tab = document.getElementById("generate_report_tab");
    const report_date_from = document.getElementById("report_date_from");
    const report_date_to = document.getElementById("report_date_to");
    let currentPageHeight = 31;

    generate_report_button.addEventListener("click", () => {
      generate_report_tab.style.display = "block";
    });
    close_report_button.addEventListener("click", () => {
      generate_report_tab.style.display = "none";
    });

    report_generate_button.addEventListener("click", () => {
      const filteredData = [];
      const pageHeight = 500;
      const dataHeight = 31; // Adjust this value based on your content

      for (let x = 1; x < cod_data_list.content.length; x++) {
        var hauling_date = new Date(
          cod_data_list.content[x][
            findTextInArray(cod_data_list, "HAULING DATE")
          ]
        );
        var wcf_data =
          cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")];
        var cod_data =
          cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")];
        var date_data =
          cod_data_list.content[x][
            findTextInArray(cod_data_list, "ACTUAL COMPLETION DATE")
          ];
        var time_data =
          cod_data_list.content[x][
            findTextInArray(cod_data_list, "ACTUAL COMPLETION TIME")
          ];
        var client_id_data =
          cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")];
        var waste_name =
          cod_data_list.content[x][
            findTextInArray(cod_data_list, "WASTE NAME")
          ];
        var weight =
          cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")];
        var process =
          cod_data_list.content[x][
            findTextInArray(cod_data_list, "DESTRUCTION PROCESS")
          ];
        var report_from = new Date(report_date_from.value);
        var report_to = new Date(report_date_to.value);
        var datePortion = date_data.split("T")[0];
        var timePortion = time_data.split("T")[1];
        for (let j = 1; j < wcf_data_list.content.length; j++) {
          var mtf = "";
          var ltf = "";
          if (
            wcf_data_list.content[j][
              findTextInArray(wcf_data_list, "LTF/ MTF  #")
            ] == wcf_data &&
            wcf_data_list.content[j][
              findTextInArray(wcf_data_list, "LTF/ MTF  #")
            ].substring(0, 3) == "MTF"
          ) {
            mtf =
              wcf_data_list.content[j][
                findTextInArray(wcf_data_list, "LTF/ MTF  #")
              ];
          } else {
            ltf =
              wcf_data_list.content[j][
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
              }
            }
          }
        }
        var datetime = new Date(datePortion + "T" + timePortion);
        if (
          new Date(date_data) >= report_from &&
          new Date(date_data) <= report_to
        ) {
          filteredData.push({
            cod_data,
            mtf,
            hauling_date,
            date_data,
            time_data,
            client_id_data,
            waste_name,
            weight,
            process,
            datetime,
          });
        }
      }

      // Sort the data by hauling date and time
      filteredData.sort((a, b) => a.datetime - b.datetime);

      // Render the sorted data
      filteredData.forEach((item) => {
        const page_number = document.getElementById("page_number");
        const report_tab_container = document.querySelector(
          `#report_tab_container`
        );
        const report_tab = document.querySelector(
          `#report_tab${page_number.value}`
        );
        const report_body = report_tab.querySelector("tbody");

        var data = `
                    <tr>
                        <td>${item.cod_data}</td>
                        <td>${item.mtf}</td>
                        <td>${date_decoder(item.hauling_date)}</td>
                        <td>${date_decoder(item.date_data)}</td>
                        <td>${time_decoder(item.time_data)}</td>
                        <td>${findClientName(item.client_id_data)}</td>
                        <td>${item.waste_name}</td>
                        <td>${formatNumber(item.weight)}</td>
                        <td>${item.process}</td>
                    </tr>
                `;

        const page_max_counter = document.querySelectorAll("#page_max_counter");
        page_max_counter.forEach((counter) => {
          counter.innerText = `${page_number.value}`;
        });

        // Check if adding this data exceeds the current page height
        if (currentPageHeight + dataHeight > pageHeight) {
          // If it exceeds, add a page break
          report_body.insertAdjacentHTML(
            "beforeend",
            "<div style='page-break-before: always;'></div>"
          );
          currentPageHeight = 0; // Reset the current page height
          page_number.value = parseInt(page_number.value) + 1;
          report_tab_container.insertAdjacentHTML(
            "beforeend",
            `
                    <div id="report_tab${page_number.value}" class="report_tab">
                        <img src="../images/logo.png" alt="logo" style="height: 50px;">
                        <img src="../images/logo_name2.png" alt="logo" style="height: 50px; margin-top: 10px;"><hr>
                        <div style="position: relative;">
                        <h1 style="text-align: center; font-weight: bold; font-size: 32px;">WEEKLY REPORT</h1>
                        <h1 style="text-align: center; font-weight: bold;">CERTIFICATION TRANSACTIONS</h1>
                        <h1 style="text-align: center; font-weight: bold;">TREATMENT DEPARTMENT</h1>
                        <h3 id="date_covered" style="text-align: center;"></h3><br>
                            <div style="display: flex; position: absolute; right: 0; top: 0;">
                                <h6 id="page_counter${page_number.value}" style="margin-right: 5px;"></h6>
                                <h6 style="margin-right: 5px;">of</h6>
                                <h6 id="page_max_counter"></h6>
                            </div>
                        </div>
                        <div id="table_info">
                            <table>
                                <thead id="report_head">
                                    <tr>
                                        <th>COD #</td>
                                        <th>MTF #</td>
                                        <th>HAULING DATE</th>
                                        <th>DATE FINISHED</th>
                                        <th>TIME FINISHED</th>
                                        <th>CLIENT</th>
                                        <th>WASTE NAME</th>
                                        <th>WEIGHT (kg)</th>
                                        <th>TREATMENT PROCESS</th>
                                    </tr>
                                </thead>
                                <tbody id="report_body"></tbody>
                            </table>
                        </div>
                    </div>
                        `
          );
          const page_counter_new = document.querySelector(
            `#page_counter${page_number.value}`
          );
          page_counter_new.innerText = `Page ${page_number.value}`;
          const page_max_counter =
            document.querySelectorAll("#page_max_counter");
          page_max_counter.forEach((counter) => {
            counter.innerText = `${page_number.value}`;
          });
        }
        const page_counter = document.getElementById("page_counter1");
        page_counter.innerText = `Page 1`;

        report_body.insertAdjacentHTML("beforeend", data);
        currentPageHeight += dataHeight;
      });

      const date_covered = document.querySelectorAll("#date_covered");
      date_covered.forEach((date) => {
        date.innerText = `${date_decoder(report_from)} - ${date_decoder(
          report_to
        )}`;
      });
      report_generate_button.style.display = "none";
      report_download_button.style.display = "block";
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
