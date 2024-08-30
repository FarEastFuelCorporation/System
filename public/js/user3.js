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
    const ltf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec"
    );
    const wcf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec"
    );
    const sf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec"
    );
    const wdf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbzqTONQ_bC0F204KVgDsF42r4-51oMRbh57wQgUs8Tob8YxmdUC6lmUX6wZD0LFnrulYw/exec"
    );
    const tpf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec"
    );
    const tmt_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbw_TOB0NqxYrU9yQEYRqyvV2Ceb-M6GKaSv_DF7UQ2_1FTrfdFjy4cEj6Cin6_2vkOl/exec"
    );
    const tmtw_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwPH2Q2jHt2WxQvHXbAPpMVaxCtpitzjVTeY1LtO5zCCIEOKUA8NRgCc3edpINhRVwk/exec"
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
    const maintenance_job_order_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxN9q1p4FSHbE-grd4AIE5cqPJh__dALmmWT9FEZorl2Q-aQsUgYQlIBtCi9COs7mD6/exec"
    );

    const [
      username_response,
      client_list_response,
      type_of_waste_response,
      employee_response,
      ltf_response,
      wcf_response,
      sf_response,
      wdf_response,
      tpf_response,
      tmt_response,
      tmtw_response,
      qlf_response,
      prf_response,
      accomplishment_response,
      maintenance_job_order_response,
    ] = await Promise.all([
      username_response_promise,
      client_list_response_promise,
      type_of_waste_response_promise,
      employee_response_promise,
      ltf_response_promise,
      wcf_response_promise,
      sf_response_promise,
      wdf_response_promise,
      tpf_response_promise,
      tmt_response_promise,
      tmtw_response_promise,
      qlf_response_promise,
      prf_response_promise,
      accomplishment_response_promise,
      maintenance_job_order_response_promise,
    ]);

    const username_data_list = await username_response.json();
    const client_data_list = await client_list_response.json();
    const type_of_waste_data_list = await type_of_waste_response.json();
    const employee_data_list = await employee_response.json();
    const ltf_data_list = await ltf_response.json();
    const wcf_data_list = await wcf_response.json();
    const sf_data_list = await sf_response.json();
    const wdf_data_list = await wdf_response.json();
    const tpf_data_list = await tpf_response.json();
    const tmt_data_list = await tmt_response.json();
    const tmtw_data_list = await tmtw_response.json();
    const qlf_data_list = await qlf_response.json();
    const prf_data_list = await prf_response.json();
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
    const departments = document.querySelectorAll("#department");

    const user_name =
      username_data_list.content[3][
        findTextInArray(username_data_list, "NAME")
      ];
    profile_picture.src = `../images/profile_picture/${
      username_data_list.content[3][
        findTextInArray(username_data_list, "PICTURE")
      ]
    }`;
    users.forEach((user) => {
      user.value =
        username_data_list.content[3][
          findTextInArray(username_data_list, "NAME")
        ];
    });
    departments.forEach((user) => {
      user.value =
        username_data_list.content[3][
          findTextInArray(username_data_list, "DEPARTMENT")
        ];
    });
    user_sidebar.innerHTML = `<u>${
      username_data_list.content[3][findTextInArray(username_data_list, "NAME")]
    }</u>`;
    user_sidebar_officer.innerText =
      username_data_list.content[3][
        findTextInArray(username_data_list, "SECTIONS")
      ];
    user_sidebar_department.innerText =
      username_data_list.content[3][
        findTextInArray(username_data_list, "DEPARTMENT")
      ];
    const user =
      username_data_list.content[3][
        findTextInArray(username_data_list, "NAME")
      ];

    // treatment_process_dashboard
    const total_counter_treatment = document.querySelector(
      "#treatment_process_dashboard #total_counter"
    );
    const pending_counter_treatment = document.querySelector(
      "#treatment_process_dashboard #pending_counter"
    );
    const treated_counter_treatment = document.querySelector(
      "#treatment_process_dashboard #treated_counter"
    );
    const pending_list_treatment = document.querySelector(
      "#treatment_process_dashboard #pending_list"
    );
    const finished_list_treatment = document.querySelector(
      "#treatment_process_dashboard #finished_list"
    );
    const month_filter = document.getElementById("month_filter");
    let pending_treatment_sf = [];
    let pending_treatment_sf_wcf = [];
    let pending_treatment_wcf = [];
    let pending_treatment_wdf = [];
    let pending_treatment_wdf_wcf = [];
    let wcf_transaction_wcf = [];
    let sf_transaction_sf = [];
    let wcf_transaction_sf = [];
    let wdf_transaction_wdf = [];
    let wcf_transaction_wdf = [];
    let wcf_done_list_tpf = [];
    let sf_wdf_done_list_tpf = [];
    let finished_treatment = [];

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
      pending_treatment_sf = [];
      pending_treatment_sf_wcf = [];
      pending_treatment_wcf = [];
      pending_treatment_wdf = [];
      pending_treatment_wdf_wcf = [];
      wcf_transaction_wcf = [];
      sf_transaction_sf = [];
      wcf_transaction_sf = [];
      wdf_transaction_wdf = [];
      wcf_transaction_wdf = [];
      wcf_done_list_tpf = [];
      sf_wdf_done_list_tpf = [];
      finished_treatment = [];

      // wcf to tpf
      for (let i = 1; i < wcf_data_list.content.length; i++) {
        if (
          month_filter.value ==
          formatMonth(
            wcf_data_list.content[i][
              findTextInArray(wcf_data_list, "HAULING DATE")
            ]
          )
        ) {
          if (
            wcf_data_list.content[i][
              findTextInArray(wcf_data_list, "SUBMIT TO")
            ] !== "SORTING" &&
            wcf_data_list.content[i][
              findTextInArray(wcf_data_list, "SUBMIT TO")
            ] !== "WAREHOUSE" &&
            wcf_data_list.content[i][
              findTextInArray(wcf_data_list, "SUBMIT TO")
            ] !== "ACCOUNTING" &&
            !wcf_transaction_wcf.includes(
              wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]
            )
          ) {
            wcf_transaction_wcf.push(
              wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]
            );
          }
        }
      }
      // sf to tpf
      for (let i = 1; i < sf_data_list.content.length; i++) {
        if (
          month_filter.value ==
          formatMonth(
            sf_data_list.content[i][
              findTextInArray(sf_data_list, "HAULING DATE")
            ]
          )
        ) {
          if (
            sf_data_list.content[i][
              findTextInArray(sf_data_list, "WASTE ID")
            ] !== "DISCREPANCY"
          ) {
            if (
              sf_data_list.content[i][
                findTextInArray(
                  sf_data_list,
                  "DESTRUCTION PROCESS / DISCREPANCY REMARKS"
                )
              ] !== "FOR STORAGE" &&
              sf_data_list.content[i][
                findTextInArray(
                  sf_data_list,
                  "DESTRUCTION PROCESS / DISCREPANCY REMARKS"
                )
              ] !== "RECYCLING" &&
              sf_data_list.content[i][
                findTextInArray(
                  sf_data_list,
                  "DESTRUCTION PROCESS / DISCREPANCY REMARKS"
                )
              ] !== "RECLAMATION" &&
              sf_data_list.content[i][
                findTextInArray(
                  sf_data_list,
                  "DESTRUCTION PROCESS / DISCREPANCY REMARKS"
                )
              ] !== "COMBUSTION OF RECOVERED OF ALTERNATIVE FUEL" &&
              sf_data_list.content[i][
                findTextInArray(
                  sf_data_list,
                  "DESTRUCTION PROCESS / DISCREPANCY REMARKS"
                )
              ] !== "CRUSHING" &&
              !sf_transaction_sf.includes(
                sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")]
              )
            ) {
              sf_transaction_sf.push(
                sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")]
              );
              if (
                !wcf_transaction_sf.includes(
                  sf_data_list.content[i][
                    findTextInArray(sf_data_list, "WCF #")
                  ]
                )
              ) {
                wcf_transaction_sf.push(
                  sf_data_list.content[i][
                    findTextInArray(sf_data_list, "WCF #")
                  ]
                );
              }
            }
          }
        }
      }
      // wdf to tpf
      for (let i = 1; i < wdf_data_list.content.length; i++) {
        if (
          month_filter.value ==
          formatMonth(
            wdf_data_list.content[i][
              findTextInArray(wdf_data_list, "HAULING DATE")
            ]
          )
        ) {
          if (
            !wdf_transaction_wdf.includes(
              wdf_data_list.content[i][findTextInArray(wdf_data_list, "WCF #")]
            )
          ) {
            wdf_transaction_wdf.push(
              wdf_data_list.content[i][findTextInArray(wdf_data_list, "WDF #")]
            );
            if (
              !wcf_transaction_wdf.includes(
                wdf_data_list.content[i][
                  findTextInArray(wdf_data_list, "WCF #")
                ]
              )
            ) {
              wcf_transaction_wdf.push(
                wdf_data_list.content[i][
                  findTextInArray(wdf_data_list, "WCF #")
                ]
              );
            }
          }
        }
      }
      // tpf
      for (let i = 1; i < tpf_data_list.content.length; i++) {
        if (
          month_filter.value ==
          formatMonth(
            tpf_data_list.content[i][
              findTextInArray(tpf_data_list, "HAULING DATE")
            ]
          )
        ) {
          if (
            !sf_wdf_done_list_tpf.includes(
              tpf_data_list.content[i][findTextInArray(tpf_data_list, "SF #")]
            )
          ) {
            sf_wdf_done_list_tpf.push(
              tpf_data_list.content[i][findTextInArray(tpf_data_list, "SF #")]
            );
            sf_wdf_done_list_tpf.push(
              tpf_data_list.content[i][findTextInArray(tpf_data_list, "TPF #")]
            );
          }
          if (
            !wcf_done_list_tpf.includes(
              tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]
            )
          ) {
            wcf_done_list_tpf.push(
              tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]
            );
          }
        }
      }

      pending_treatment_sf = sf_transaction_sf.filter(
        (element) => !sf_wdf_done_list_tpf.includes(element)
      );
      pending_treatment_wdf = wdf_transaction_wdf.filter(
        (element) => !sf_wdf_done_list_tpf.includes(element)
      );
      pending_treatment_wcf = wcf_transaction_wcf.filter(
        (element) => !wcf_done_list_tpf.includes(element)
      );
      pending_treatment_sf_wcf = wcf_transaction_sf.filter(
        (element) => !wcf_done_list_tpf.includes(element)
      );
      pending_treatment_wdf_wcf = wcf_transaction_wdf.filter(
        (element) => !wcf_done_list_tpf.includes(element)
      );
      finished_treatment = sf_wdf_done_list_tpf;
      // pending_list
      total_counter_treatment.innerText =
        pending_treatment_wcf.length +
        pending_treatment_sf_wcf.length +
        pending_treatment_wdf_wcf.length +
        wcf_done_list_tpf.length;
      pending_counter_treatment.innerText =
        pending_treatment_wcf.length +
        pending_treatment_sf_wcf.length +
        pending_treatment_wdf_wcf.length;
      treated_counter_treatment.innerText = wcf_done_list_tpf.length;
      var options = {
        series: [
          pending_treatment_wcf.length +
            pending_treatment_sf_wcf.length +
            pending_treatment_wdf_wcf.length,
          wcf_done_list_tpf.length,
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

      var data_value_counter = 1;
      pending_list_treatment.innerHTML = "";
      for (let i = 0; i < pending_treatment_sf.length; i++) {
        for (let j = 1; j < sf_data_list.content.length; j++) {
          if (
            pending_treatment_sf[i] ==
              sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")] &&
            month_filter.value ==
              formatMonth(
                sf_data_list.content[j][
                  findTextInArray(sf_data_list, "HAULING DATE")
                ]
              )
          ) {
            var mtf = "";
            var ltf = "";
            for (let k = 1; k < wcf_data_list.content.length; k++) {
              if (
                sf_data_list.content[j][
                  findTextInArray(sf_data_list, "WCF #")
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
            var data_value = `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "SF #")
                              ]
                            }</td>
                            <td>${mtf}</td>
                            <td>${
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "FORM #")
                              ]
                            }</td>
                            <td>${date_decoder(
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "HAULING DATE")
                              ]
                            )}</td>
                            <td>${date_decoder(
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "COMPLETION DATE")
                              ]
                            )} /<br> ${time_decoder(
              sf_data_list.content[j][
                findTextInArray(sf_data_list, "COMPLETION TIME")
              ]
            )}</td>
                            <td>${findClientName(
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "CLIENT ID")
                              ]
                            )}</td>
                            <td>${findWasteCode(
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "WASTE NAME")
                              ]
                            }</td>
                            <td>${
                              sf_data_list.content[j][
                                findTextInArray(
                                  sf_data_list,
                                  "DESTRUCTION PROCESS / DISCREPANCY REMARKS"
                                )
                              ]
                            }</td>
                            <td>${
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "WEIGHT")
                              ]
                            }</td>
                        </tr>
                        `;
            data_value_counter += 1;
            pending_list_treatment.insertAdjacentHTML("beforeend", data_value);
          } else if (
            pending_treatment_sf[i] ==
              sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")] &&
            month_filter.value == "ALL"
          ) {
            var mtf = "";
            var ltf = "";
            for (let k = 1; k < wcf_data_list.content.length; k++) {
              if (
                sf_data_list.content[j][
                  findTextInArray(sf_data_list, "WCF #")
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
            var data_value = `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "SF #")
                              ]
                            }</td>
                            <td>${mtf}</td>
                            <td>${
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "FORM #")
                              ]
                            }</td>
                            <td>${date_decoder(
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "HAULING DATE")
                              ]
                            )}</td>
                            <td>${date_decoder(
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "COMPLETION DATE")
                              ]
                            )} /<br> ${time_decoder(
              sf_data_list.content[j][
                findTextInArray(sf_data_list, "COMPLETION TIME")
              ]
            )}</td>
                            <td>${findClientName(
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "CLIENT ID")
                              ]
                            )}</td>
                            <td>${findWasteCode(
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "WASTE NAME")
                              ]
                            }</td>
                            <td>${
                              sf_data_list.content[j][
                                findTextInArray(
                                  sf_data_list,
                                  "DESTRUCTION PROCESS / DISCREPANCY REMARKS"
                                )
                              ]
                            }</td>
                            <td>${
                              sf_data_list.content[j][
                                findTextInArray(sf_data_list, "WEIGHT")
                              ]
                            }</td>
                        </tr>
                        `;
            data_value_counter += 1;
            pending_list_treatment.insertAdjacentHTML("beforeend", data_value);
          }
        }
      }
      for (let i = 0; i < pending_treatment_wcf.length; i++) {
        for (let j = 1; j < wcf_data_list.content.length; j++) {
          if (
            pending_treatment_wcf[i] ==
              wcf_data_list.content[j][
                findTextInArray(wcf_data_list, "WCF #")
              ] &&
            month_filter.value ==
              formatMonth(
                wcf_data_list.content[j][
                  findTextInArray(wcf_data_list, "HAULING DATE")
                ]
              )
          ) {
            var mtf = "";
            var ltf = "";
            if (
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
                  break;
                }
              }
            }
            var data_value = `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "WCF #")
                              ]
                            }</td>
                            <td>${mtf}</td>
                            <td>${
                              wcf_data_list.content[j][
                                findTextInArray(
                                  wcf_data_list,
                                  "PULL OUT FORM #"
                                )
                              ]
                            }</td>
                            <td>${date_decoder(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "HAULING DATE")
                              ]
                            )}</td>
                            <td>${date_decoder(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "ARRIVAL DATE")
                              ]
                            )} /<br> ${time_decoder(
              wcf_data_list.content[j][
                findTextInArray(wcf_data_list, "ARRIVAL TIME")
              ]
            )}</td>
                            <td>${findClientName(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "CLIENT ID")
                              ]
                            )}</td>
                            <td>${findWasteCode(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${findWasteName(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "CLIENT ID")
                              ],
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${findTreatmentProcess(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "NET WEIGHT")
                              ]
                            }</td>
                        </tr>
                        `;
            data_value_counter += 1;
            pending_list_treatment.insertAdjacentHTML("beforeend", data_value);
          } else if (
            pending_treatment_wcf[i] ==
              wcf_data_list.content[j][
                findTextInArray(wcf_data_list, "WCF #")
              ] &&
            month_filter.value == "ALL"
          ) {
            var mtf = "";
            var ltf = "";
            if (
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
                  break;
                }
              }
            }
            var data_value = `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "WCF #")
                              ]
                            }</td>
                            <td>${mtf}</td>
                            <td>${
                              wcf_data_list.content[j][
                                findTextInArray(
                                  wcf_data_list,
                                  "PULL OUT FORM #"
                                )
                              ]
                            }</td>
                            <td>${date_decoder(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "HAULING DATE")
                              ]
                            )}</td>
                            <td>${date_decoder(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "ARRIVAL DATE")
                              ]
                            )} /<br> ${time_decoder(
              wcf_data_list.content[j][
                findTextInArray(wcf_data_list, "ARRIVAL TIME")
              ]
            )}</td>
                            <td>${findClientName(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "CLIENT ID")
                              ]
                            )}</td>
                            <td>${findWasteCode(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${findWasteName(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "CLIENT ID")
                              ],
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${findTreatmentProcess(
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "WASTE ID")
                              ]
                            )}</td>
                            <td>${
                              wcf_data_list.content[j][
                                findTextInArray(wcf_data_list, "NET WEIGHT")
                              ]
                            }</td>
                        </tr>
                        `;
            data_value_counter += 1;
            pending_list_treatment.insertAdjacentHTML("beforeend", data_value);
          }
        }
      }
      var wdf_wcf_array = [];
      for (let i = 0; i < pending_treatment_wdf_wcf.length; i++) {
        for (let j = 1; j < wdf_data_list.content.length; j++) {
          if (
            pending_treatment_wdf_wcf[i] ==
              wdf_data_list.content[j][
                findTextInArray(wdf_data_list, "WCF #")
              ] &&
            month_filter.value ==
              formatMonth(
                wdf_data_list.content[j][
                  findTextInArray(wdf_data_list, "HAULING DATE")
                ]
              )
          ) {
            if (
              !wdf_wcf_array.includes(
                wdf_data_list.content[j][
                  findTextInArray(wdf_data_list, "WCF #")
                ]
              )
            ) {
              wdf_wcf_array.push(
                wdf_data_list.content[j][
                  findTextInArray(wdf_data_list, "WCF #")
                ]
              );
              var mtf, ltf, client_id, waste_id, weight_data, pull_out_form;
              for (let k = 1; k < wcf_data_list.content.length; k++) {
                if (
                  wdf_data_list.content[j][
                    findTextInArray(wdf_data_list, "WCF #")
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
                  pull_out_form =
                    wcf_data_list.content[k][
                      findTextInArray(wcf_data_list, "PULL OUT FORM #")
                    ];
                  client_id =
                    wcf_data_list.content[k][
                      findTextInArray(wcf_data_list, "CLIENT ID")
                    ];
                  waste_id =
                    wcf_data_list.content[k][
                      findTextInArray(wcf_data_list, "WASTE ID")
                    ];
                  weight_data =
                    wcf_data_list.content[k][
                      findTextInArray(wcf_data_list, "NET WEIGHT")
                    ];
                }
              }
              var data_value = `
                            <tr>
                                <td>${data_value_counter}</td>
                                <td>${
                                  wdf_data_list.content[j][
                                    findTextInArray(wdf_data_list, "WDF #")
                                  ]
                                }</td>
                                <td>${mtf}</td>
                                <td>${pull_out_form}</td>
                                <td>${date_decoder(
                                  wdf_data_list.content[j][
                                    findTextInArray(
                                      wdf_data_list,
                                      "HAULING DATE"
                                    )
                                  ]
                                )}</td>
                                <td>${date_decoder(
                                  wdf_data_list.content[j][
                                    findTextInArray(
                                      wdf_data_list,
                                      "DISPOSAL DATE"
                                    )
                                  ]
                                )} /<br> ${time_decoder(
                wdf_data_list.content[j][
                  findTextInArray(wdf_data_list, "DISPOSAL TIME")
                ]
              )}</td>
                                <td>${findClientName(client_id)}</td>
                                <td>${findWasteCode(waste_id)}</td>
                                <td>${findWasteName(client_id, waste_id)}</td>
                                <td>${
                                  wdf_data_list.content[j][
                                    findTextInArray(
                                      wdf_data_list,
                                      "DESTRUCTION PROCESS"
                                    )
                                  ]
                                }</td>
                                <td>${weight_data}</td>
                            </tr>
                            `;
              data_value_counter += 1;
              pending_list_treatment.insertAdjacentHTML(
                "beforeend",
                data_value
              );
            }
          } else if (
            pending_treatment_wdf[i] ==
              wdf_data_list.content[j][
                findTextInArray(wdf_data_list, "WCF #")
              ] &&
            month_filter.value == "ALL"
          ) {
            var mtf, ltf, client_id, waste_id, weight_data;
            for (let k = 1; k < wcf_data_list.content.length; k++) {
              if (
                wdf_data_list.content[j][
                  findTextInArray(wdf_data_list, "WCF #")
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
                client_id =
                  wcf_data_list.content[k][
                    findTextInArray(wcf_data_list, "CLIENT ID")
                  ];
                waste_id =
                  wcf_data_list.content[k][
                    findTextInArray(wcf_data_list, "WASTE ID")
                  ];
                weight_data =
                  wcf_data_list.content[k][
                    findTextInArray(wcf_data_list, "NET WEIGHT")
                  ];
              }
            }
            var data_value = `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${
                              wdf_data_list.content[j][
                                findTextInArray(wdf_data_list, "WDF #")
                              ]
                            }</td>
                            <td>${mtf}</td>
                            <td></td>
                            <td>${date_decoder(
                              wdf_data_list.content[j][
                                findTextInArray(wdf_data_list, "HAULING DATE")
                              ]
                            )}</td>
                            <td>${date_decoder(
                              wdf_data_list.content[j][
                                findTextInArray(wdf_data_list, "DISPOSAL DATE")
                              ]
                            )} /<br> ${time_decoder(
              wdf_data_list.content[j][
                findTextInArray(wdf_data_list, "DISPOSAL TIME")
              ]
            )}</td>
                            <td>${findClientName(client_id)}</td>
                            <td>${findWasteCode(waste_id)}</td>
                            <td>${findWasteName(client_id, waste_id)}</td>
                            <td>${
                              wdf_data_list.content[j][
                                findTextInArray(
                                  wdf_data_list,
                                  "DESTRUCTION PROCESS"
                                )
                              ]
                            }</td>
                            <td>${weight_data}</td>
                        </tr>
                        `;
            data_value_counter += 1;
            pending_list_treatment.insertAdjacentHTML("beforeend", data_value);
          }
        }
      }

      // finished_list
      var data_value = "";
      var data_value_counter = 1;
      for (let j = 1; j < tpf_data_list.content.length; j++) {
        if (
          tpf_data_list.content[j][
            findTextInArray(tpf_data_list, "DESTRUCTION PROCESS")
          ] == "THERMAL DECOMPOSITION" ||
          tpf_data_list.content[j][
            findTextInArray(tpf_data_list, "DESTRUCTION PROCESS")
          ] == "PYROLYSIS"
        ) {
          if (
            month_filter.value ==
            formatMonth(
              tpf_data_list.content[j][
                findTextInArray(tpf_data_list, "HAULING DATE")
              ]
            )
          ) {
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
                          <td>${
                            tpf_data_list.content[j][
                              findTextInArray(tpf_data_list, "TPF #")
                            ]
                          }</td>
                          <td>${mtf}</td>
                          <td>${date_decoder(
                            tpf_data_list.content[j][
                              findTextInArray(tpf_data_list, "HAULING DATE")
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
                              findTextInArray(
                                tpf_data_list,
                                "DESTRUCTION PROCESS"
                              )
                            ]
                          }</td>
                          <td>${
                            tpf_data_list.content[j][
                              findTextInArray(tpf_data_list, "MACHINE USED")
                            ]
                          }</td>
                          <td>${
                            tpf_data_list.content[j][
                              findTextInArray(tpf_data_list, "WEIGHT")
                            ]
                          } Kg.</td>
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
                          </tr>
                          `;
            data_value_counter += 1;
          } else if (month_filter.value == "ALL") {
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
                          <td>${
                            tpf_data_list.content[j][
                              findTextInArray(tpf_data_list, "TPF #")
                            ]
                          }</td>
                          <td>${mtf}</td>
                          <td>${date_decoder(
                            tpf_data_list.content[j][
                              findTextInArray(tpf_data_list, "HAULING DATE")
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
                              findTextInArray(
                                tpf_data_list,
                                "DESTRUCTION PROCESS"
                              )
                            ]
                          }</td>
                          <td>${
                            tpf_data_list.content[j][
                              findTextInArray(tpf_data_list, "MACHINE USED")
                            ]
                          }</td>
                          <td>${
                            tpf_data_list.content[j][
                              findTextInArray(tpf_data_list, "WEIGHT")
                            ]
                          } Kg.</td>
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
                          </tr>
                          `;
            data_value_counter += 1;
          }
        }
      }
      finished_list_treatment.innerHTML = data_value;

      // FORM GENERATOR
      // tpf_data_list
      const tpf_form_no = document.getElementById("tpf_form_no");
      var data_info;
      for (let x = tpf_data_list.content.length - 1; x > 1; x--) {
        if (
          tpf_data_list.content[x][
            findTextInArray(tpf_data_list, "TPF #")
          ].substring(0, 3) == "TPF"
        ) {
          data_info =
            tpf_data_list.content[x][findTextInArray(tpf_data_list, "TPF #")];
          break;
        }
      }
      var data_counter = data_info.substring(9, 13);
      var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
      data_counter = (parseInt(data_counter) + 1).toString().padStart(4, "0");
      var current_year = new Date().getFullYear();
      var last_counter_year = data_info.substring(3, 7);
      if (last_counter_year == current_year) {
        tpf_form_no.value = `TPF${last_counter_year}${month}${data_counter}`;
      } else {
        data_counter = (1).toString().padStart(4, "0");
        tpf_form_no.value = `TPF${current_year}${month}${data_counter}`;
      }

      // sf_data_list
      const wcf_form_no = document.getElementById("wcf_form_no");
      const client = document.getElementById("client");
      const waste_description = document.getElementById("waste_description");
      const waste_code_input = document.getElementById("waste_code");
      const weight = document.getElementById("weight");
      const destruction_process = document.getElementById(
        "destruction_process"
      );
      const hauling_date = document.getElementById("hauling_date");
      const target_date_of_completion = document.getElementById(
        "target_date_of_completion"
      );
      const search_sf_form_no = document.getElementById("search_sf_form_no");
      const search_sf_form_no_button = document.getElementById(
        "search_sf_form_no_button"
      );
      const search_sf_result = document.getElementById("search_sf_result");
      const additional_item1 = document.getElementById("additional_item1");
      const add_item_button = document.getElementById("add_item_button");
      const remove_item_button = document.getElementById("remove_item_button");
      const completion = document.getElementById("completion");
      const buttons = document.getElementById("buttons");
      const machine_counter = document.getElementById("machine_counter");
      const mtf_form_no = document.getElementById("mtf_form_no");

      search_sf_form_no_button.addEventListener("click", () => {
        var data_value;
        for (let a = 1; a < sf_data_list.content.length; a++) {
          for (let b = 0; b <= pending_treatment_sf.length; b++) {
            if (
              search_sf_form_no.value ==
              sf_data_list.content[a][findTextInArray(sf_data_list, "SF #")]
            ) {
              if (search_sf_form_no.value == pending_treatment_sf[b]) {
                var mtf = "";
                var ltf = "";
                var process, client_weight;
                for (let c = 1; c < wcf_data_list.content.length; c++) {
                  if (
                    wcf_data_list.content[c][
                      findTextInArray(wcf_data_list, "WCF #")
                    ] ==
                    sf_data_list.content[a][
                      findTextInArray(sf_data_list, "WCF #")
                    ]
                  ) {
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
                    client_weight =
                      wcf_data_list.content[c][
                        findTextInArray(wcf_data_list, "CLIENT WEIGHT")
                      ];
                  }
                }
                var unit = "";
                for (let c = 1; c < qlf_data_list.content.length; c++) {
                  if (
                    qlf_data_list.content[c][
                      findTextInArray(qlf_data_list, "QUOTATION CODE")
                    ] ==
                      sf_data_list.content[a][
                        findTextInArray(sf_data_list, "QUOTATION CODE")
                      ] &&
                    qlf_data_list.content[c][
                      findTextInArray(
                        qlf_data_list,
                        "WASTE ID/ TYPE OF VEHICLE"
                      )
                    ] ==
                      sf_data_list.content[a][
                        findTextInArray(sf_data_list, "WASTE ID")
                      ]
                  ) {
                    unit =
                      qlf_data_list.content[c][
                        findTextInArray(qlf_data_list, "UNIT")
                      ];
                  }
                }
                mtf_form_no.value = mtf;
                data_value = `
                                SF #: ${
                                  sf_data_list.content[a][
                                    findTextInArray(sf_data_list, "SF #")
                                  ]
                                }<br>
                                WCF #: ${
                                  sf_data_list.content[a][
                                    findTextInArray(sf_data_list, "WCF #")
                                  ]
                                }<br>
                                CLIENT: ${findClientName(
                                  sf_data_list.content[a][
                                    findTextInArray(sf_data_list, "CLIENT ID")
                                  ]
                                )}<br>
                                WASTE NAME: ${
                                  sf_data_list.content[a][
                                    findTextInArray(sf_data_list, "WASTE NAME")
                                  ]
                                }<br>
                                WASTE CODE: ${findWasteCode(
                                  sf_data_list.content[a][
                                    findTextInArray(sf_data_list, "WASTE ID")
                                  ]
                                )}<br>
                                WASTE DESCRIPTION: ${findWasteName(
                                  sf_data_list.content[a][
                                    findTextInArray(sf_data_list, "CLIENT ID")
                                  ],
                                  sf_data_list.content[a][
                                    findTextInArray(sf_data_list, "WASTE ID")
                                  ]
                                )}<br>
                                DESTRUCTION PROCESS: ${
                                  sf_data_list.content[a][
                                    findTextInArray(
                                      sf_data_list,
                                      "DESTRUCTION PROCESS / DISCREPANCY REMARKS"
                                    )
                                  ]
                                }<br>
                                CLIENT BATCH WEIGHT: ${client_weight} kg.<br>
                                FEFC WEIGHT: ${
                                  sf_data_list.content[a][
                                    findTextInArray(sf_data_list, "WEIGHT")
                                  ]
                                } ${unit}<br>
                                HAULING DATE: ${date_decoder(
                                  sf_data_list.content[a][
                                    findTextInArray(
                                      sf_data_list,
                                      "HAULING DATE"
                                    )
                                  ]
                                )}<br>
                                SORTED DATE: ${date_decoder(
                                  sf_data_list.content[a][
                                    findTextInArray(
                                      sf_data_list,
                                      "COMPLETION DATE"
                                    )
                                  ]
                                )}<br>
                                SORTED TIME: ${time_decoder(
                                  sf_data_list.content[a][
                                    findTextInArray(
                                      sf_data_list,
                                      "COMPLETION TIME"
                                    )
                                  ]
                                )}<br>
                                SUBMITTED BY: ${
                                  sf_data_list.content[a][
                                    findTextInArray(
                                      sf_data_list,
                                      "SUBMITTED BY"
                                    )
                                  ]
                                }<br>
                                `;
                process =
                  sf_data_list.content[a][
                    findTextInArray(
                      sf_data_list,
                      "DESTRUCTION PROCESS / DISCREPANCY REMARKS"
                    )
                  ];
                if (process == "THERMAL DECOMPOSITION") {
                  machine_list.innerHTML = `
                                    <label for="tpf_form_no">
                                        <i class="fa-solid fa-gears"></i>
                                        Machine
                                    </label><br>
                                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px">
                                        <div>
                                            <label for="machine1">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Alpha
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight1" id="weight1" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine1" value="THERMAL GASIFIER ALPHA">
                                        </div>
                                        <div>
                                            <label for="machine2">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Bravo
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight2" id="weight2" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine2" value="THERMAL GASIFIER BRAVO">
                                        </div>
                                        <div>
                                            <label for="machine3">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Charlie
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight3" id="weight3" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine3" value="THERMAL GASIFIER CHARLIE">
                                        </div>
                                    </div><br>
                                    `;
                  machine_counter.value = 3;
                } else if (process == "PYROLYSIS") {
                  machine_list.innerHTML = `
                                    <label for="tpf_form_no">
                                        <i class="fa-solid fa-gears"></i>
                                        Machine
                                    </label><br>
                                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 20px">
                                        <div>
                                            <label for="machine1">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 1
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight1" id="weight1" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine1" value="Rotary 1">
                                        </div>
                                        <div>
                                            <label for="machine2">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 2
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight2" id="weight2" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine2" value="Rotary 2">
                                        </div>
                                        <div>
                                            <label for="machine3">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 3
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight3" id="weight3" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine3" value="Rotary 3">
                                        </div>
                                        <div>
                                            <label for="machine4">
                                                <i class="fa-solid fa-gears"></i>
                                                Furnace
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight4" id="weight4" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine4" value="Furnace">
                                        </div>
                                    </div><br>
                                    `;
                  machine_counter.value = 4;
                } else {
                  machine_counter.value = 1;
                }
                wcf_form_no.value =
                  sf_data_list.content[a][
                    findTextInArray(sf_data_list, "WCF #")
                  ];
                client.value =
                  sf_data_list.content[a][
                    findTextInArray(sf_data_list, "CLIENT ID")
                  ];
                waste_description.value =
                  sf_data_list.content[a][
                    findTextInArray(sf_data_list, "WASTE ID")
                  ];
                waste_code_input.value =
                  sf_data_list.content[a][
                    findTextInArray(sf_data_list, "WASTE NAME")
                  ];
                weight.value =
                  sf_data_list.content[a][
                    findTextInArray(sf_data_list, "WEIGHT")
                  ];
                destruction_process.value =
                  sf_data_list.content[a][
                    findTextInArray(
                      sf_data_list,
                      "DESTRUCTION PROCESS / DISCREPANCY REMARKS"
                    )
                  ];
                hauling_date.value = date_decoder(
                  sf_data_list.content[a][
                    findTextInArray(sf_data_list, "HAULING DATE")
                  ]
                );
                var hauling_date_plus2 = new Date(
                  date_decoder(
                    sf_data_list.content[a][
                      findTextInArray(sf_data_list, "HAULING DATE")
                    ]
                  )
                );
                target_date_of_completion.value = date_decoder(
                  hauling_date_plus2.setDate(hauling_date_plus2.getDate() + 2)
                );
                additional_item1.style.display = "grid";
                add_item_button.style.display = "block";
                completion.style.display = "grid";
                buttons.style.display = "flex";
              }
            }
          }
        }
        for (let a = 1; a < wcf_data_list.content.length; a++) {
          for (let b = 0; b <= pending_treatment_wcf.length; b++) {
            if (
              search_sf_form_no.value ==
              wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]
            ) {
              if (search_sf_form_no.value == pending_treatment_wcf[b]) {
                var mtf = "";
                var ltf = "";
                var process, client_weight;
                if (
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "LTF/ MTF  #")
                  ].substring(0, 3) == "MTF"
                ) {
                  mtf =
                    wcf_data_list.content[a][
                      findTextInArray(wcf_data_list, "LTF/ MTF  #")
                    ];
                } else {
                  ltf =
                    wcf_data_list.content[a][
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
                client_weight =
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "CLIENT WEIGHT")
                  ];
                process =
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "SUBMIT TO")
                  ];
                mtf_form_no.value = mtf;
                data_value = `
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
                                DESTRUCTION PROCESS: ${findTreatmentProcess(
                                  wcf_data_list.content[a][
                                    findTextInArray(wcf_data_list, "WASTE ID")
                                  ]
                                )}<br>
                                CLIENT BATCH WEIGHT: ${client_weight} kg.<br>
                                FEFC WEIGHT: ${
                                  wcf_data_list.content[a][
                                    findTextInArray(wcf_data_list, "NET WEIGHT")
                                  ]
                                } kg.<br>
                                HAULING DATE: ${date_decoder(
                                  wcf_data_list.content[a][
                                    findTextInArray(
                                      wcf_data_list,
                                      "HAULING DATE"
                                    )
                                  ]
                                )}<br>
                                ARRIVAL DATE: ${date_decoder(
                                  wcf_data_list.content[a][
                                    findTextInArray(
                                      wcf_data_list,
                                      "ARRIVAL DATE"
                                    )
                                  ]
                                )}<br>
                                ARRIVAL TIME: ${time_decoder(
                                  wcf_data_list.content[a][
                                    findTextInArray(
                                      wcf_data_list,
                                      "ARRIVAL TIME"
                                    )
                                  ]
                                )}<br>
                                SUBMITTED BY: ${
                                  wcf_data_list.content[a][
                                    findTextInArray(
                                      wcf_data_list,
                                      "SUBMITTED BY"
                                    )
                                  ]
                                }<br>
                                `;
                if (process == "THERMAL GASIFIER") {
                  machine_list.innerHTML = `
                                    <label for="tpf_form_no">
                                        <i class="fa-solid fa-gears"></i>
                                        Machine
                                    </label><br>
                                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px">
                                        <div>
                                            <label for="machine1">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Alpha
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight1" id="weight1" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine1" value="THERMAL GASIFIER ALPHA">
                                        </div>
                                        <div>
                                            <label for="machine2">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Bravo
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight2" id="weight2" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine2" value="THERMAL GASIFIER BRAVO">
                                        </div>
                                        <div>
                                            <label for="machine3">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Charlie
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight3" id="weight3" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine3" value="THERMAL GASIFIER CHARLIE">
                                        </div>
                                    </div><br>
                                    `;
                  machine_counter.value = 3;
                } else if (process == "ROTARY" || process == "FURNACE") {
                  machine_list.innerHTML = `
                                    <label for="tpf_form_no">
                                        <i class="fa-solid fa-gears"></i>
                                        Machine
                                    </label><br>
                                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 20px">
                                        <div>
                                            <label for="machine1">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 1
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight1" id="weight1" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine1" value="Rotary 1">
                                        </div>
                                        <div>
                                            <label for="machine2">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 2
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight2" id="weight2" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine2" value="Rotary 2">
                                        </div>
                                        <div>
                                            <label for="machine3">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 3
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight3" id="weight3" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine3" value="Rotary 3">
                                        </div>
                                        <div>
                                            <label for="machine4">
                                                <i class="fa-solid fa-gears"></i>
                                                Furnace
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight4" id="weight4" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine4" value="Furnace">
                                        </div>
                                    </div><br>
                                    `;
                  machine_counter.value = 4;
                }
                wcf_form_no.value =
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "WCF #")
                  ];
                client.value =
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "CLIENT ID")
                  ];
                waste_description.value =
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "WASTE ID")
                  ];
                waste_code_input.value = findWasteName(
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "CLIENT ID")
                  ],
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "WASTE ID")
                  ]
                );
                weight.value =
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "NET WEIGHT")
                  ];
                destruction_process.value = findTreatmentProcess(
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "WASTE ID")
                  ]
                );
                hauling_date.value = date_decoder(
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "HAULING DATE")
                  ]
                );
                var hauling_date_plus2 = new Date(
                  date_decoder(
                    wcf_data_list.content[a][
                      findTextInArray(wcf_data_list, "HAULING DATE")
                    ]
                  )
                );
                target_date_of_completion.value = date_decoder(
                  hauling_date_plus2.setDate(hauling_date_plus2.getDate() + 2)
                );
                additional_item1.style.display = "grid";
                add_item_button.style.display = "block";
                completion.style.display = "grid";
                buttons.style.display = "flex";
              }
            }
          }
        }
        for (let c = 1; c < wdf_data_list.content.length; c++) {
          if (
            search_sf_form_no.value ==
            wdf_data_list.content[c][findTextInArray(wdf_data_list, "WDF #")]
          ) {
            for (let a = 1; a < wcf_data_list.content.length; a++) {
              for (let b = 0; b <= pending_treatment_wdf.length; b++) {
                if (
                  wdf_data_list.content[c][
                    findTextInArray(wdf_data_list, "WCF #")
                  ] ==
                  wcf_data_list.content[a][
                    findTextInArray(wcf_data_list, "WCF #")
                  ]
                ) {
                  if (search_sf_form_no.value == pending_treatment_wdf[b]) {
                    var mtf = "";
                    var ltf = "";
                    var process, client_weight;
                    if (
                      wcf_data_list.content[a][
                        findTextInArray(wcf_data_list, "LTF/ MTF  #")
                      ].substring(0, 3) == "MTF"
                    ) {
                      mtf =
                        wcf_data_list.content[a][
                          findTextInArray(wcf_data_list, "LTF/ MTF  #")
                        ];
                    } else {
                      ltf =
                        wcf_data_list.content[a][
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
                    client_weight =
                      wcf_data_list.content[a][
                        findTextInArray(wcf_data_list, "CLIENT WEIGHT")
                      ];
                    process =
                      wdf_data_list.content[c][
                        findTextInArray(wdf_data_list, "DESTRUCTION PROCESS")
                      ];
                    mtf_form_no.value = mtf;
                    data_value = `
                                        WCF #: ${
                                          wcf_data_list.content[a][
                                            findTextInArray(
                                              wcf_data_list,
                                              "WCF #"
                                            )
                                          ]
                                        }<br>
                                        CLIENT: ${findClientName(
                                          wcf_data_list.content[a][
                                            findTextInArray(
                                              wcf_data_list,
                                              "CLIENT ID"
                                            )
                                          ]
                                        )}<br>
                                        WASTE CODE: ${findWasteCode(
                                          wcf_data_list.content[a][
                                            findTextInArray(
                                              wcf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}<br>
                                        WASTE DESCRIPTION: ${findWasteName(
                                          wcf_data_list.content[a][
                                            findTextInArray(
                                              wcf_data_list,
                                              "CLIENT ID"
                                            )
                                          ],
                                          wcf_data_list.content[a][
                                            findTextInArray(
                                              wcf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}<br>
                                        DESTRUCTION PROCESS: ${findTreatmentProcess(
                                          wcf_data_list.content[a][
                                            findTextInArray(
                                              wcf_data_list,
                                              "WASTE ID"
                                            )
                                          ]
                                        )}<br>
                                        CLIENT BATCH WEIGHT: ${client_weight} kg.<br>
                                        FEFC WEIGHT: ${
                                          wcf_data_list.content[a][
                                            findTextInArray(
                                              wcf_data_list,
                                              "NET WEIGHT"
                                            )
                                          ]
                                        } kg.<br>
                                        HAULING DATE: ${date_decoder(
                                          wcf_data_list.content[a][
                                            findTextInArray(
                                              wcf_data_list,
                                              "HAULING DATE"
                                            )
                                          ]
                                        )}<br>
                                        ARRIVAL DATE: ${date_decoder(
                                          wcf_data_list.content[a][
                                            findTextInArray(
                                              wcf_data_list,
                                              "ARRIVAL DATE"
                                            )
                                          ]
                                        )}<br>
                                        ARRIVAL TIME: ${time_decoder(
                                          wcf_data_list.content[a][
                                            findTextInArray(
                                              wcf_data_list,
                                              "ARRIVAL TIME"
                                            )
                                          ]
                                        )}<br>
                                        SUBMITTED BY: ${
                                          wcf_data_list.content[a][
                                            findTextInArray(
                                              wcf_data_list,
                                              "SUBMITTED BY"
                                            )
                                          ]
                                        }<br>
                                        `;
                    if (process == "THERMAL GASIFIER") {
                      machine_list.innerHTML = `
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Machine
                                            </label><br>
                                            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px">
                                                <div>
                                                    <label for="machine1">
                                                        <i class="fa-solid fa-gears"></i>
                                                        Thermal Gasifier Alpha
                                                    </label><br>
                                                    <input type="number" autocomplete="off" name="weight1" id="weight1" step="0.01" class="form-control" placeholder="Input Weight">
                                                    <input type="hidden" name="machine1" value="THERMAL GASIFIER ALPHA">
                                                </div>
                                                <div>
                                                    <label for="machine2">
                                                        <i class="fa-solid fa-gears"></i>
                                                        Thermal Gasifier Bravo
                                                    </label><br>
                                                    <input type="number" autocomplete="off" name="weight2" id="weight2" step="0.01" class="form-control" placeholder="Input Weight">
                                                    <input type="hidden" name="machine2" value="THERMAL GASIFIER BRAVO">
                                                </div>
                                                <div>
                                                    <label for="machine3">
                                                        <i class="fa-solid fa-gears"></i>
                                                        Thermal Gasifier Charlie
                                                    </label><br>
                                                    <input type="number" autocomplete="off" name="weight3" id="weight3" step="0.01" class="form-control" placeholder="Input Weight">
                                                    <input type="hidden" name="machine3" value="THERMAL GASIFIER CHARLIE">
                                                </div>
                                            </div><br>
                                            `;
                      machine_counter.value = 3;
                    } else if (process == "ROTARY" || process == "FURNACE") {
                      machine_list.innerHTML = `
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Machine
                                            </label><br>
                                            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 20px">
                                                <div>
                                                    <label for="machine1">
                                                        <i class="fa-solid fa-gears"></i>
                                                        Rotary 1
                                                    </label><br>
                                                    <input type="number" autocomplete="off" name="weight1" id="weight1" step="0.01" class="form-control" placeholder="Input Weight">
                                                    <input type="hidden" name="machine1" value="Rotary 1">
                                                </div>
                                                <div>
                                                    <label for="machine2">
                                                        <i class="fa-solid fa-gears"></i>
                                                        Rotary 2
                                                    </label><br>
                                                    <input type="number" autocomplete="off" name="weight2" id="weight2" step="0.01" class="form-control" placeholder="Input Weight">
                                                    <input type="hidden" name="machine2" value="Rotary 2">
                                                </div>
                                                <div>
                                                    <label for="machine3">
                                                        <i class="fa-solid fa-gears"></i>
                                                        Rotary 3
                                                    </label><br>
                                                    <input type="number" autocomplete="off" name="weight3" id="weight3" step="0.01" class="form-control" placeholder="Input Weight">
                                                    <input type="hidden" name="machine3" value="Rotary 3">
                                                </div>
                                                <div>
                                                    <label for="machine4">
                                                        <i class="fa-solid fa-gears"></i>
                                                        Furnace
                                                    </label><br>
                                                    <input type="number" autocomplete="off" name="weight4" id="weight4" step="0.01" class="form-control" placeholder="Input Weight">
                                                    <input type="hidden" name="machine4" value="Furnace">
                                                </div>
                                            </div><br>
                                            `;
                      machine_counter.value = 4;
                    }
                    wcf_form_no.value =
                      wcf_data_list.content[a][
                        findTextInArray(wcf_data_list, "WCF #")
                      ];
                    client.value =
                      wcf_data_list.content[a][
                        findTextInArray(wcf_data_list, "CLIENT ID")
                      ];
                    waste_description.value =
                      wcf_data_list.content[a][
                        findTextInArray(wcf_data_list, "WASTE ID")
                      ];
                    waste_code_input.value = findWasteName(
                      wcf_data_list.content[a][
                        findTextInArray(wcf_data_list, "CLIENT ID")
                      ],
                      wcf_data_list.content[a][
                        findTextInArray(wcf_data_list, "WASTE ID")
                      ]
                    );
                    weight.value =
                      wcf_data_list.content[a][
                        findTextInArray(wcf_data_list, "NET WEIGHT")
                      ];
                    destruction_process.value = findTreatmentProcess(
                      wcf_data_list.content[a][
                        findTextInArray(wcf_data_list, "WASTE ID")
                      ]
                    );
                    hauling_date.value = date_decoder(
                      wcf_data_list.content[a][
                        findTextInArray(wcf_data_list, "HAULING DATE")
                      ]
                    );
                    var hauling_date_plus2 = new Date(
                      date_decoder(
                        wcf_data_list.content[a][
                          findTextInArray(wcf_data_list, "HAULING DATE")
                        ]
                      )
                    );
                    target_date_of_completion.value = date_decoder(
                      hauling_date_plus2.setDate(
                        hauling_date_plus2.getDate() + 2
                      )
                    );
                    additional_item1.style.display = "grid";
                    add_item_button.style.display = "block";
                    completion.style.display = "grid";
                    buttons.style.display = "flex";
                  }
                }
              }
            }
          }
        }
        if (data_value == undefined) {
          search_sf_result.innerHTML = `
                    <div class="search_sf_result">
                    <h2>INFORMATION</h2>
                    No Data Found
                    </div><br>`;
        } else {
          search_sf_result.innerHTML = `
                    <div class="search_sf_result">
                    <h2>INFORMATION</h2>
                    ${data_value}
                    </div><br>`;
        }
      });
      const additional_item2 = document.getElementById("additional_item2");
      const additional_item3 = document.getElementById("additional_item3");
      const additional_item4 = document.getElementById("additional_item4");
      const additional_item5 = document.getElementById("additional_item5");
      const item_counter = document.getElementById("item_counter");
      var item_counter_int = parseInt(item_counter.value);
      const form_id = document.getElementById("form_id");

      add_item_button.addEventListener("click", add_new_item);

      function add_new_item() {
        item_counter_int += 1;
        item_counter.value = item_counter_int;

        if (item_counter_int == 2) {
          additional_item2.style.display = "grid";
          // FOR 2
          remove_item_button.style.display = "block";
        } else if (item_counter_int == 3) {
          additional_item3.style.display = "grid";
          // FOR 3
        } else if (item_counter_int == 4) {
          additional_item4.style.display = "grid";
          // FOR 4
        } else if (item_counter_int == 5) {
          additional_item5.style.display = "grid";
          // FOR 5
          add_item_button.style.display = "none";
        }
      }

      remove_item_button.addEventListener("click", remove_new_item);

      function remove_new_item() {
        if (item_counter_int == 2) {
          additional_item2.style.display = "none";
          // FOR 1
          remove_item_button.style.display = "none";
        } else if (item_counter_int == 3) {
          additional_item3.style.display = "none";
          // FOR 2
        } else if (item_counter_int == 4) {
          additional_item4.style.display = "none";
          // FOR 3
        } else if (item_counter_int == 5) {
          additional_item5.style.display = "none";
          // FOR 4
          add_item_button.style.display = "block";
        }
        item_counter_int -= 1;
        item_counter.value = item_counter_int;
      }
    }

    // tmt_data_list
    const today = new Date();

    function getStartOfWeek(date) {
      const currentDay = date.getDay();
      const diff = currentDay >= 6 ? 0 : -(currentDay + 1); // Adjust so that Saturday is the start of the week
      const startOfWeek = new Date(date);
      startOfWeek.setDate(date.getDate() + diff);
      startOfWeek.setHours(0, 0, 0, 0);
      return startOfWeek;
    }

    // Function to get the week number based on a date
    function getWeekNumber(date) {
      const startOfYear = new Date(date.getFullYear(), 0, 1);
      const pastDaysOfYear =
        (date - startOfYear) / 86400000 + startOfYear.getDay() + 1;
      return Math.ceil(pastDaysOfYear / 7);
    }

    function getWeekStartEnd(weekNumber) {
      const currentYear = new Date().getFullYear();
      const startOfYear = new Date(currentYear, 0, 1);
      const dayOfWeek = startOfYear.getDay();
      const daysToAdd =
        (weekNumber - 1) * 7 + (dayOfWeek > 6 ? 0 : 6 - dayOfWeek);

      const startOfWeek = new Date(startOfYear);
      startOfWeek.setDate(startOfYear.getDate() + daysToAdd);
      startOfWeek.setHours(0, 0, 0, 0);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);

      const options = { year: "numeric", month: "long", day: "numeric" };
      const startFormatted = startOfWeek.toLocaleDateString("en-US", options);
      const endFormatted = endOfWeek.toLocaleDateString("en-US", options);

      return `${startFormatted} - ${endFormatted}`;
    }

    function normalizeToMidnightUTC(date) {
      const normalizedDate = new Date(date);
      normalizedDate.setUTCHours(0, 0, 0, 0);
      return normalizedDate;
    }

    function extractDatePart(input) {
      let dateString;

      // Check if input is a string and use it directly
      if (typeof input === "string") {
        dateString = input;
      } else if (input instanceof Date) {
        // Convert Date object to ISO string
        dateString = input.toISOString();
      } else {
        throw new Error(
          "Invalid input type. Expected a string or Date object."
        );
      }

      // Split the ISO string to get the date part
      return dateString.split("T")[0];
    }

    // Calculate the start dates for the current and previous weeks
    const currentWeekStart = getStartOfWeek(today);
    const lastWeekStart = new Date(currentWeekStart);
    lastWeekStart.setDate(currentWeekStart.getDate() - 7);
    const last2WeeksStart = new Date(currentWeekStart);
    last2WeeksStart.setDate(currentWeekStart.getDate() - 14);
    const last3WeeksStart = new Date(currentWeekStart);
    last3WeeksStart.setDate(currentWeekStart.getDate() - 21);

    // Arrays to store rows for each week
    const currentWeek = [];
    const lastWeek = [];
    const last2Weeks = [];
    const last3Weeks = [];

    const treatment_machine_transaction = document.querySelector(
      "#treatment_machine_transaction"
    );
    const new_transaction_button = treatment_machine_transaction.querySelector(
      "#new_transaction_button"
    );
    const update_transaction_button =
      treatment_machine_transaction.querySelector("#update_transaction_button");
    const new_transaction_form_tab =
      treatment_machine_transaction.querySelector("#new_transaction_form_tab");
    const update_transaction_form_tab =
      treatment_machine_transaction.querySelector(
        "#update_transaction_form_tab"
      );
    const treatment_machine_transaction_list = document.querySelector(
      "#treatment_machine_transaction_list"
    );

    new_transaction_button.addEventListener("click", () => {
      if (new_transaction_form_tab.style.display == "block") {
        new_transaction_form_tab.style.display = "none";
      } else {
        new_transaction_form_tab.style.display = "block";
        update_transaction_form_tab.style.display = "none";
      }
    });
    // update_transaction_button.addEventListener("click", () => {
    //   if (update_transaction_form_tab.style.display == "block") {
    //     update_transaction_form_tab.style.display = "none";
    //   } else {
    //     update_transaction_form_tab.style.display = "block";
    //     new_transaction_form_tab.style.display = "none";
    //   }
    // });

    const status1 = new_transaction_form_tab.querySelector("#status1");
    const waste1 = new_transaction_form_tab.querySelector("#waste1");
    const status2 = new_transaction_form_tab.querySelector("#status2");
    const waste2 = new_transaction_form_tab.querySelector("#waste2");
    const status3 = new_transaction_form_tab.querySelector("#status3");
    const waste3 = new_transaction_form_tab.querySelector("#waste3");

    // operator

    function createAutoComplete(searchWrapperId) {
      const searchWrapper = document.getElementById(searchWrapperId);
      const inputBox = searchWrapper.querySelector("input");
      const suggBox = searchWrapper.querySelector(".autocom_box");

      let driverData = [];

      // Populate the driver data based on employee status and gender
      for (let x = 1; x < employee_data_list.content.length; x++) {
        if (
          employee_data_list.content[x][
            findTextInArray(employee_data_list, "EMPLOYEE STATUS")
          ] == "ACTIVE"
        ) {
          let gender =
            employee_data_list.content[x][
              findTextInArray(employee_data_list, "GENDER")
            ];
          let fullName;

          if (gender == "MALE") {
            fullName = `${
              employee_data_list.content[x][
                findTextInArray(employee_data_list, "FIRST NAME")
              ]
            } ${
              employee_data_list.content[x][
                findTextInArray(employee_data_list, "LAST NAME")
              ]
            } ${
              employee_data_list.content[x][
                findTextInArray(employee_data_list, "AFFIX")
              ]
            }`;
          } else {
            fullName = `${
              employee_data_list.content[x][
                findTextInArray(employee_data_list, "FIRST NAME")
              ]
            } ${
              employee_data_list.content[x][
                findTextInArray(employee_data_list, "LAST NAME")
              ]
            } ${
              employee_data_list.content[x][
                findTextInArray(employee_data_list, "AFFIX")
              ]
            }`;
          }

          driverData.push(fullName);
        }
      }

      // Event listener for input keyup
      inputBox.onkeyup = (e) => {
        let userData = e.target.value;
        let emptyArray = [];

        if (userData) {
          emptyArray = driverData.filter((data) => {
            return data
              .toLocaleLowerCase()
              .includes(userData.toLocaleLowerCase());
          });

          emptyArray = emptyArray.map((data) => {
            return "<li>" + data + "</li>";
          });

          searchWrapper.classList.add("active");
          showSuggestions(emptyArray);
        } else {
          searchWrapper.classList.remove("active");
        }
      };

      // Event listener for suggestion click
      suggBox.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          select(e.target.innerHTML);
        }
      });

      // Function to handle selection
      function select(element) {
        inputBox.value = element;
        searchWrapper.classList.remove("active");
      }

      // Function to show suggestions
      function showSuggestions(list) {
        let listData;

        if (!list.length) {
          let userValue = inputBox.value;
          listData = "<li>" + userValue + "</li>";
        } else {
          listData = list.join("");
        }

        suggBox.innerHTML = listData;
      }
    }

    function wasteInput(value, status) {
      var data = `
        <div style="display: grid; grid-template-columns: 3fr 1fr; gap: 20px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                  <label for="time_start_input${value}">
                  <i class="fa-solid fa-briefcase"></i>
                  Operation Start </label
                  ><br />
                  <input
                  type="time"
                  name="time_start_input${value}"
                  id="time_start_input${value}"
                  autocomplete="off"
                  class="form-control"
                  required
                  style="width: 100%;"
                  />
              </div>
              <div>
                  <label for="time_end_input${value}">
                  <i class="fa-solid fa-briefcase"></i>
                  Operation End </label
                  ><br />
                  <input
                  type="time"
                  name="time_end_input${value}"
                  id="time_end_input${value}"
                  autocomplete="off"
                  class="form-control"
                  required
                  style="width: 100%;"
                  />
              </div>
          </div>
          <div>
              <div>
                  <label for="ash${value}">
                  <i class="fa-solid fa-briefcase"></i>
                  Ash (Kg) </label
                  ><br />
                  <input
                  type="number"
                  name="ash${value}"
                  id="ash${value}"
                  autocomplete="off"
                  class="form-control"
                  required
                  style="width: 100%;"
                  value="0"
                  />
              </div>
          </div>
      </div>
      <div>
          <label for="operator${value}">
          <i class="fa-solid fa-briefcase"></i>
          Operator </label
          ><br />
          <div class="search_input" id="search_operator${value}">
                  <input
                  type="text"
                  autocomplete="off"
                  name="operator${value}"
                  id="operator${value}"
                  class="form-control"
                  required
                  placeholder="Type to Search Operator Name..."
                  />
              <div class="autocom_box"></div>
              <div class="icon"><i class="fas fa-search"></i></div>
          </div>
      </div>
      <div style="display: grid; grid-template-columns: 3fr 1fr; gap: 20px;">
          <div>
              <label for="waste_description_${value}_1">
              <i class="fa-solid fa-briefcase"></i>
              Waste Description </label
              ><br />
          </div>
          <div>
              <label for="weight_${value}_1">
              <i class="fa-solid fa-briefcase"></i>
              Weight </label
              ><br />
          </div>
      </div>
      <input type="hidden" name="counter_${value}" id="counter_${value}">
      <div id="wasteContainer_${value}" style="display: grid; gap: 20px;">
          <div class="waste-row">
              <div style="display: grid; grid-template-columns: 3fr 1fr; gap: 20px;">
                  <div>
                      <input
                          type="text"
                          name="waste_description_${value}_1"
                          id="waste_description_${value}_1"
                          autocomplete="off"
                          class="form-control"
                          required
                      />
                  </div>
                  <div>
                      <input
                          type="number"
                          name="weight_${value}_1"
                          id="weight_${value}_1"
                          autocomplete="off"
                          class="form-control"
                          required
                      />
                  </div>
              </div>
          </div>
      </div>
      
      <div style="margin-top: 20px; display: flex; gap: 20px;">
          <button type="button" id="add_${value}" class="form-control" style="width: 60px; height: 60px; border-radius: 100%;"><i class="fa-solid fa-plus"></i></button>
          <button type="button" id="remove_${value}" class="form-control" style="display: none; width: 60px; height: 60px; border-radius: 100%;"><i class="fa-solid fa-minus"></i></button>
      </div>
      `;
      var data2 = `
        <div style="display: grid; grid-template-columns: 3fr 1fr; gap: 20px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                  <label for="time_start_input${value}">
                  <i class="fa-solid fa-briefcase"></i>
                  Operation Start </label
                  ><br />
                  <input
                  type="time"
                  name="time_start_input${value}"
                  id="time_start_input${value}"
                  autocomplete="off"
                  class="form-control"
                  required
                  style="width: 100%;"
                  />
              </div>
              <div>
                  <label for="time_end_input${value}">
                  <i class="fa-solid fa-briefcase"></i>
                  Operation End </label
                  ><br />
                  <input
                  type="time"
                  name="time_end_input${value}"
                  id="time_end_input${value}"
                  autocomplete="off"
                  class="form-control"
                  required
                  style="width: 100%;"
                  />
              </div>
          </div>
          <div>
              <div>
                  <label for="ash${value}">
                  <i class="fa-solid fa-briefcase"></i>
                  Ash (Kg) </label
                  ><br />
                  <input
                  type="number"
                  name="ash${value}"
                  id="ash${value}"
                  autocomplete="off"
                  class="form-control"
                  required
                  style="width: 100%;"
                  value="0"
                  />
              </div>
          </div>
      </div>
      <div>
          <label for="operator${value}">
          <i class="fa-solid fa-briefcase"></i>
          Operator </label
          ><br />
          <div class="search_input" id="search_operator${value}">
                  <input
                  type="text"
                  autocomplete="off"
                  name="operator${value}"
                  id="operator${value}"
                  class="form-control"
                  required
                  placeholder="Type to Search Operator Name..."
                  />
              <div class="autocom_box"></div>
              <div class="icon"><i class="fas fa-search"></i></div>
          </div>
      </div>
      `;

      if (status === "ACTIVE") {
        if (value === 1) {
          waste1.innerHTML = data;
          createAutoComplete("search_operator1");
        } else if (value === 2) {
          waste2.innerHTML = data;
          createAutoComplete("search_operator2");
        } else {
          waste3.innerHTML = data;
          createAutoComplete("search_operator3");
        }
        const add = new_transaction_form_tab.querySelector(`#add_${value}`);
        const remove = new_transaction_form_tab.querySelector(
          `#remove_${value}`
        );

        add.addEventListener("click", () => {
          addWasteRow(value);
        });
        remove.addEventListener("click", () => {
          removeWasteRow(value);
        });
      } else {
        if (value === 1) {
          waste1.innerHTML = data2;
          createAutoComplete("search_operator1");
        } else if (value === 2) {
          waste2.innerHTML = data2;
          createAutoComplete("search_operator2");
        } else {
          waste3.innerHTML = data2;
          createAutoComplete("search_operator3");
        }
      }
    }

    wasteInput(1, "ACTIVE");
    wasteInput(2, "ACTIVE");
    wasteInput(3, "ACTIVE");

    status1.addEventListener("change", () => {
      if (status1.value === "ACTIVE") {
        waste1.innerHTML = "";
        wasteInput(1, "ACTIVE");
      } else if (status1.value === "UNLOADING OF ASH") {
        wasteInput(1, "UNLOADING OF ASH");
      } else {
        waste1.innerHTML = "";
      }
    });

    status2.addEventListener("change", () => {
      if (status2.value === "ACTIVE") {
        waste2.innerHTML = "";
        wasteInput(2, "ACTIVE");
      } else if (status2.value === "UNLOADING OF ASH") {
        wasteInput(2, "UNLOADING OF ASH");
      } else {
        waste2.innerHTML = "";
      }
    });

    status3.addEventListener("change", () => {
      if (status3.value === "ACTIVE") {
        waste3.innerHTML = "";
        wasteInput(3, "ACTIVE");
      } else if (status3.value === "UNLOADING OF ASH") {
        wasteInput(3, "UNLOADING OF ASH");
      } else {
        waste3.innerHTML = "";
      }
    });

    let wasteCount_1 = 1;
    let wasteCount_2 = 1;
    let wasteCount_3 = 1;

    function addWasteRow(value) {
      let counter;
      if (value === 1) {
        wasteCount_1++;
        counter = wasteCount_1;
        const remove_1 = new_transaction_form_tab.querySelector("#remove_1");
        remove_1.style.display = "block";
      } else if (value === 2) {
        wasteCount_2++;
        counter = wasteCount_2;
        const remove_2 = new_transaction_form_tab.querySelector("#remove_2");
        remove_2.style.display = "block";
      } else {
        wasteCount_3++;
        counter = wasteCount_3;
        const remove_3 = new_transaction_form_tab.querySelector("#remove_3");
        remove_3.style.display = "block";
      }

      const wasteContainer = document.getElementById(`wasteContainer_${value}`);

      const newRow = document.createElement("div");
      newRow.classList.add("waste-row");
      newRow.innerHTML = `
            <div style="display: grid; grid-template-columns: 3fr 1fr; gap: 20px;">
                <div>
                    <input
                        type="text"
                        name="waste_description_${value}_${counter}"
                        id="waste_description_${value}_${counter}"
                        autocomplete="off"
                        class="form-control"
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="weight_${value}_${counter}"
                        id="weight_${value}_${counter}"
                        autocomplete="off"
                        class="form-control"
                        required
                    />
                </div>
            </div>
        `;
      wasteContainer.appendChild(newRow);

      if (value === 1) {
        const counter_1 = new_transaction_form_tab.querySelector("#counter_1");
        counter_1.value = wasteCount_1;
      } else if (value === 2) {
        const counter_2 = new_transaction_form_tab.querySelector("#counter_2");
        counter_2.value = wasteCount_2;
      } else {
        const counter_3 = new_transaction_form_tab.querySelector("#counter_3");
        counter_3.value = wasteCount_3;
      }
    }

    function removeWasteRow(value) {
      let counter;
      const wasteContainer = document.getElementById(`wasteContainer_${value}`);
      if (wasteContainer.children.length > 1) {
        wasteContainer.removeChild(wasteContainer.lastChild);
        if (value === 1) {
          wasteCount_1--;
          counter = wasteCount_1;
          const counter_1 =
            new_transaction_form_tab.querySelector("#counter_1");
          counter_1.value = wasteCount_1;
        } else if (value === 2) {
          wasteCount_2--;
          counter = wasteCount_2;
          const counter_2 =
            new_transaction_form_tab.querySelector("#counter_2");
          counter_2.value = wasteCount_2;
        } else {
          wasteCount_3--;
          counter = wasteCount_2;
          const counter_3 =
            new_transaction_form_tab.querySelector("#counter_3");
          counter_3.value = wasteCount_3;
        }
      }

      if (counter === 1) {
        if (value === 1) {
          const remove_1 = new_transaction_form_tab.querySelector("#remove_1");
          wasteCount_1 === 1 ? (remove_1.style.display = "none") : "";
        } else if (value === 2) {
          const remove_2 = new_transaction_form_tab.querySelector("#remove_2");
          wasteCount_2 === 1 ? (remove_2.style.display = "none") : "";
        } else {
          const remove_3 = new_transaction_form_tab.querySelector("#remove_3");
          wasteCount_3 === 1 ? (remove_3.style.display = "none") : "";
        }
      }
    }

    var counter = 1;
    for (let x = tmt_data_list.content.length - 1; x > 1; x--) {
      var operation_start = "";
      var operation_end = "";
      var duration = "";
      var treated_waste = 0;
      var ash = 0;

      for (let y = tmtw_data_list.content.length - 1; y > 1; y--) {
        if (
          tmt_data_list.content[x][findTextInArray(tmt_data_list, "TMT ID")] ==
          tmtw_data_list.content[y][findTextInArray(tmtw_data_list, "TMT ID")]
        ) {
          treated_waste +=
            tmtw_data_list.content[y][
              findTextInArray(tmtw_data_list, "WEIGHT")
            ];
        }
      }

      if (
        tmt_data_list.content[x][findTextInArray(tmt_data_list, "STATUS")] ==
          "UNDER MAINTENANCE" ||
        tmt_data_list.content[x][findTextInArray(tmt_data_list, "STATUS")] ==
          "NO OPERATION"
      ) {
        operation_start = "";
        operation_end = "";
        duration = "";
        treated_waste = "";
        ash = "";
      } else {
        operation_start = time_decoder(
          tmt_data_list.content[x][
            findTextInArray(tmt_data_list, "OPERATION START")
          ]
        );
        operation_end = time_decoder(
          tmt_data_list.content[x][
            findTextInArray(tmt_data_list, "OPERATION END")
          ]
        );
        duration = calculateDuration(
          time_decoder(
            tmt_data_list.content[x][
              findTextInArray(tmt_data_list, "OPERATION START")
            ]
          ),
          time_decoder(
            tmt_data_list.content[x][
              findTextInArray(tmt_data_list, "OPERATION END")
            ]
          )
        );
        treated_waste = `${treated_waste} Kg`;
        ash = `${formatNumber(
          parseFloat(
            tmt_data_list.content[x][findTextInArray(tmt_data_list, "ASH")]
              ? tmt_data_list.content[x][findTextInArray(tmt_data_list, "ASH")]
              : 0
          )
        )} Kg`;
      }

      const haulingDateStr =
        tmt_data_list.content[x][findTextInArray(tmt_data_list, "DATE")];
      const haulingDateNew = new Date(haulingDateStr);
      const haulingWeekStart = getStartOfWeek(haulingDateNew);

      const itemWithTreatedWaste = {
        ...tmt_data_list.content[x],
        treated_waste: treated_waste, // Add the treated_waste property
        ash: ash, // Add the treated_waste property
      };

      if (
        normalizeToMidnightUTC(haulingWeekStart).getTime() ===
        normalizeToMidnightUTC(currentWeekStart).getTime()
      ) {
        currentWeek.push(itemWithTreatedWaste);
      } else if (
        normalizeToMidnightUTC(haulingWeekStart).getTime() ===
        normalizeToMidnightUTC(lastWeekStart).getTime()
      ) {
        lastWeek.push(itemWithTreatedWaste);
      } else if (
        normalizeToMidnightUTC(haulingWeekStart).getTime() ===
        normalizeToMidnightUTC(last2WeeksStart).getTime()
      ) {
        last2Weeks.push(itemWithTreatedWaste);
      } else if (
        normalizeToMidnightUTC(haulingWeekStart).getTime() ===
        normalizeToMidnightUTC(last3WeeksStart).getTime()
      ) {
        last3Weeks.push(itemWithTreatedWaste);
      }

      var list = `
        <tr>
          <td>${counter}</td>
          <td>${
            tmt_data_list.content[x][findTextInArray(tmt_data_list, "TMT ID")]
          }</td>
          <td>${
            tmt_data_list.content[x][findTextInArray(tmt_data_list, "STATUS")]
          }</td>
          <td>${
            tmt_data_list.content[x][findTextInArray(tmt_data_list, "MACHINE")]
          }</td>
          <td>${date_decoder(
            tmt_data_list.content[x][findTextInArray(tmt_data_list, "DATE")]
          )}</td>
          <td>${time_decoder(
            tmt_data_list.content[x][
              findTextInArray(tmt_data_list, "SHIFT START")
            ]
          )}<br />
          ${time_decoder(
            tmt_data_list.content[x][
              findTextInArray(tmt_data_list, "SHIFT END")
            ]
          )}
          </td>
          <td>${operation_start}<br />${operation_end}</td>
          <td>${
            tmt_data_list.content[x][findTextInArray(tmt_data_list, "OPERATOR")]
          }</td>
          <td>${formatNumber(treated_waste)}</td>
          <td>${duration}</td>
          <td>${ash}</td>
          <td>${
            tmt_data_list.content[x][findTextInArray(tmt_data_list, "REMARKS")]
          }</td>
        </tr>
      `;
      treatment_machine_transaction_list.insertAdjacentHTML("beforeend", list);
      counter++;
    }

    // weekly_report
    const tg_alpha = document.querySelector("#tg_alpha");
    const tg_bravo = document.querySelector("#tg_bravo");
    const tg_charlie = document.querySelector("#tg_charlie");
    const total_treated_waste = document.querySelector("#total_treated_waste");
    const tg_alpha_ash = document.querySelector("#tg_alpha_ash");
    const tg_bravo_ash = document.querySelector("#tg_bravo_ash");
    const tg_charlie_ash = document.querySelector("#tg_charlie_ash");
    const total_ash = document.querySelector("#total_ash");
    const tg_alpha_ash_percentage = document.querySelector(
      "#tg_alpha_ash_percentage"
    );
    const tg_bravo_ash_percentage = document.querySelector(
      "#tg_bravo_ash_percentage"
    );
    const tg_charlie_ash_percentage = document.querySelector(
      "#tg_charlie_ash_percentage"
    );
    const total_ash_percentage = document.querySelector(
      "#total_ash_percentage"
    );

    var tg_alpha_counter = 0;
    var tg_bravo_counter = 0;
    var tg_charlie_counter = 0;
    var previous_tg_alpha_counter = 0;
    var previous_tg_bravo_counter = 0;
    var previous_tg_charlie_counter = 0;
    var tg_alpha_counter_ash = 0;
    var tg_bravo_counter_ash = 0;
    var tg_charlie_counter_ash = 0;
    var previous_tg_alpha_counter_ash = 0;
    var previous_tg_bravo_counter_ash = 0;
    var previous_tg_charlie_counter_ash = 0;

    const currentWeekNumber = getWeekNumber(currentWeekStart);
    const lastWeekNumber = getWeekNumber(lastWeekStart);
    const last2WeeksNumber = getWeekNumber(last2WeeksStart);
    const last3WeeksNumber = getWeekNumber(last3WeeksStart);

    const weekArray = [
      currentWeekNumber,
      lastWeekNumber,
      last2WeeksNumber,
      last3WeeksNumber,
    ];

    const weekData = {
      [currentWeekNumber]: currentWeek,
      [lastWeekNumber]: lastWeek,
      [last2WeeksNumber]: last2Weeks,
      [last3WeeksNumber]: last3Weeks,
    };

    const week_filter = document.getElementById("week_filter");
    const week_dates = document.getElementById("week_dates");
    const transaction_history = document.getElementById("transaction_history");
    const graph_data = document.getElementById("graph_data");

    weekArray.forEach((item) => {
      week_filter.insertAdjacentHTML(
        "beforeend",
        `<option value=${item}>Week ${item}</option>`
      );
    });

    var weight = {};

    function classify(day, treatedWaste, ash, machine) {
      // Check if the machine key exists in the weight object
      if (!weight[machine]) {
        weight[machine] = {}; // If not, initialize it as an empty object
      }

      // Check if the day key exists under the machine in the weight object
      if (!weight[machine][day]) {
        weight[machine][day] = { waste: 0, ash: 0 }; // Initialize with waste and ash attributes
      }

      // Add treated waste and ash to the existing values
      weight[machine][day].waste += treatedWaste;
      weight[machine][day].ash += ash;
    }

    // Function to round up to the nearest thousand
    function roundUpToNearestThousand(num) {
      return Math.ceil(num / 1000) * 1000;
    }

    // Function to get maximum weight and round it up
    function getMaxWeightAndRound(weight) {
      let maxWasteWeight = 0;
      let maxAshWeight = 0;

      for (let machine in weight) {
        for (let day in weight[machine]) {
          if (weight[machine][day].waste > maxWasteWeight) {
            maxWasteWeight = weight[machine][day].waste;
          }
          if (weight[machine][day].ash > maxAshWeight) {
            maxAshWeight = weight[machine][day].ash;
          }
        }
      }

      // Round up the maximum waste and ash weights to the nearest thousand
      return {
        maxWasteWeight: roundUpToNearestThousand(maxWasteWeight),
        maxAshWeight: roundUpToNearestThousand(maxAshWeight),
      };
    }

    // Function to calculate weight percentages
    function calculateWeightPercentage(weight, roundedMaxWeights) {
      let weightPercentage = {};

      for (let machine in weight) {
        weightPercentage[machine] = {};

        for (let day in weight[machine]) {
          let wastePercentage =
            (weight[machine][day].waste / roundedMaxWeights.maxWasteWeight) *
            100;
          let ashPercentageByMaxWasteWeight =
            (weight[machine][day].ash / roundedMaxWeights.maxWasteWeight) * 100;
          let ashPercentageByMaxAshWeight =
            (weight[machine][day].ash / roundedMaxWeights.maxAshWeight) * 100;
          weightPercentage[machine][day] = {
            waste: wastePercentage,
            ashPercentageByMaxWasteWeight: ashPercentageByMaxWasteWeight,
            ashPercentageByMaxAshWeight: ashPercentageByMaxAshWeight,
          };
        }
      }

      return weightPercentage;
    }

    function generateHTML(weightPercentage) {
      const daysInWeek = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ];
      const machines = [
        "THERMAL GASIFIER ALPHA",
        "THERMAL GASIFIER BRAVO",
        "THERMAL GASIFIER CHARLIE",
      ];

      let htmlContent = `
          <div style="height: 200px; display: flex; justify-content: space-between;">
      `;

      daysInWeek.forEach((day) => {
        htmlContent += `
              <div style="display: flex; flex-direction: column;">
                  <div style="height: 175px; display: flex; flex-direction: row; align-items: flex-end;">
          `;
        console.log(weightPercentage);
        machines.forEach((machine) => {
          let heightPercentage = weightPercentage[machine]?.[day]?.waste || 0;
          let ashPercentageByMaxWasteWeight =
            weightPercentage[machine]?.[day]?.ashPercentageByMaxWasteWeight ||
            0;
          let ashPercentageByMaxAshWeight =
            weightPercentage[machine]?.[day]?.ashPercentageByMaxAshWeight || 0;

          if (graph_data.value === "All") {
            htmlContent += `
              <div style="position: relative; width: 50px; height: ${heightPercentage}%; background-color: ${
              machine === "THERMAL GASIFIER ALPHA"
                ? "#198754"
                : machine === "THERMAL GASIFIER BRAVO"
                ? "#FFFF00"
                : "#FF0000"
            };">
                <div style="position: absolute; bottom: 0; left: 0; width: 50px; height: ${ashPercentageByMaxWasteWeight}%; background-color: #808080;">
                </div>
              </div>
                `;
          } else if (graph_data.value === "Treated Waste") {
            htmlContent += `
              <div style="position: relative; width: 50px; height: ${heightPercentage}%; background-color: ${
              machine === "THERMAL GASIFIER ALPHA"
                ? "#198754"
                : machine === "THERMAL GASIFIER BRAVO"
                ? "#FFFF00"
                : "#FF0000"
            };">
              </div>
                `;
          } else if (graph_data.value === "Ash") {
            htmlContent += `
              <div style="position: relative; width: 50px; height: ${ashPercentageByMaxAshWeight}%; background-color: ${
              machine === "THERMAL GASIFIER ALPHA"
                ? "#198754"
                : machine === "THERMAL GASIFIER BRAVO"
                ? "#FFFF00"
                : "#FF0000"
            };">
              </div>
                `;
          }
        });

        htmlContent += `
                  </div>
                  <div style="height: 50px; text-align: center;">
                      <h5 style="font-weight: bold">${day}</h5>
                  </div>
              </div>
          `;
      });

      htmlContent += "</div>";
      return htmlContent;
    }

    function updateTransactionHistoryTable(weekNumber) {
      tg_alpha_counter = 0;
      tg_bravo_counter = 0;
      tg_charlie_counter = 0;
      previous_tg_alpha_counter = 0;
      previous_tg_bravo_counter = 0;
      previous_tg_charlie_counter = 0;
      tg_alpha_counter_ash = 0;
      tg_bravo_counter_ash = 0;
      tg_charlie_counter_ash = 0;
      previous_tg_alpha_counter_ash = 0;
      previous_tg_bravo_counter_ash = 0;
      previous_tg_charlie_counter_ash = 0;
      weight = {};

      const data = weekData[weekNumber] || [];
      const previous_data = weekData[weekNumber - 1] || [];

      // Sort the data by date and time
      data.sort((a, b) => {
        const dateA = new Date(a[findTextInArray(tmt_data_list, "DATE")]);
        const dateB = new Date(b[findTextInArray(tmt_data_list, "DATE")]);
        const timeA = a[findTextInArray(tmt_data_list, "DATE")];
        const timeB = b[findTextInArray(tmt_data_list, "DATE")];

        if (dateA.getTime() === dateB.getTime()) {
          return timeA.localeCompare(timeB);
        }
        return dateA - dateB;
      });

      // Aggregate data by operator
      const operatorData = {};

      // Update transaction_history table
      transaction_history.innerHTML = "";
      data.forEach((row, index) => {
        // Get the date from the row (assuming it comes from the row and your findTextInArray function)
        const date = row[findTextInArray(tmt_data_list, "DATE")];
        const machine = row[findTextInArray(tmt_data_list, "MACHINE")];
        const operation_start =
          row[findTextInArray(tmt_data_list, "OPERATION START")];
        const operation_end =
          row[findTextInArray(tmt_data_list, "OPERATION END")];
        const duration = calculateDuration(
          time_decoder(row[findTextInArray(tmt_data_list, "OPERATION START")]),
          time_decoder(row[findTextInArray(tmt_data_list, "OPERATION END")])
        );

        // Get the corresponding day of the week
        const day = getDayOfWeek(date);

        // Get the treated waste value, or default to 0 if not available
        const treatedWaste = row["treated_waste"]
          ? parseFloat(row["treated_waste"])
          : 0;
        const ash = row["ash"] ? parseFloat(row["ash"]) : 0;

        var list = `
          <tr>
            <td>${index + 1}</td>
            <td>${row[findTextInArray(tmt_data_list, "TMT ID")]}</td>
            <td>${row[findTextInArray(tmt_data_list, "STATUS")]}</td>
            <td>${machine}</td>
            <td>${date_decoder(date)}</td>
            <td>${time_decoder(
              row[findTextInArray(tmt_data_list, "SHIFT START")]
            )}<br />
            ${time_decoder(row[findTextInArray(tmt_data_list, "SHIFT END")])}
            </td>
            <td>${operation_start ? time_decoder(operation_start) : ""}<br />
            ${operation_end ? time_decoder(operation_end) : ""}</td>
            <td>${row[findTextInArray(tmt_data_list, "OPERATOR")]}</td>
            <td>${row["treated_waste"]}</td>
            <td>${isNaN(duration) ? "" : duration}</td>
            <td>${row["ash"]}</td>
            <td>${row[findTextInArray(tmt_data_list, "REMARKS")]}</td>
          </tr>
        `;
        transaction_history.insertAdjacentHTML("beforeend", list);

        classify(day, treatedWaste, ash, machine);

        if (machine == "THERMAL GASIFIER ALPHA") {
          tg_alpha_counter += treatedWaste;
          tg_alpha_counter_ash += ash;
        } else if (machine == "THERMAL GASIFIER BRAVO") {
          tg_bravo_counter += treatedWaste;
          tg_bravo_counter_ash += ash;
        } else if (machine == "THERMAL GASIFIER CHARLIE") {
          tg_charlie_counter += treatedWaste;
          tg_charlie_counter_ash += ash;
        }

        if (!operatorData[row[findTextInArray(tmt_data_list, "OPERATOR")]]) {
          operatorData[row[findTextInArray(tmt_data_list, "OPERATOR")]] = {
            treated_waste: row["treated_waste"]
              ? parseFloat(row["treated_waste"])
              : 0,
            duration: parseFloat(duration),
          };
        } else {
          (operatorData[
            row[findTextInArray(tmt_data_list, "OPERATOR")]
          ].treated_waste += treatedWaste),
            (operatorData[
              row[findTextInArray(tmt_data_list, "OPERATOR")]
            ].duration += parseFloat(duration));
        }
      });

      previous_data.forEach((row, index) => {
        const machine = row[findTextInArray(tmt_data_list, "MACHINE")];
        if (machine == "THERMAL GASIFIER ALPHA") {
          previous_tg_alpha_counter += row["treated_waste"]
            ? parseFloat(row["treated_waste"])
            : 0;
          previous_tg_alpha_counter_ash += row["ash"]
            ? parseFloat(row["ash"])
            : 0;
        } else if (machine == "THERMAL GASIFIER BRAVO") {
          previous_tg_bravo_counter += row["treated_waste"]
            ? parseFloat(row["treated_waste"])
            : 0;
          previous_tg_bravo_counter_ash += row["ash"]
            ? parseFloat(row["ash"])
            : 0;
        } else if (machine == "THERMAL GASIFIER CHARLIE") {
          previous_tg_charlie_counter += row["treated_waste"]
            ? parseFloat(row["treated_waste"])
            : 0;
          previous_tg_charlie_counter_ash += row["ash"]
            ? parseFloat(row["ash"])
            : 0;
        }
      });

      var roundedMaxWeight = getMaxWeightAndRound(weight);
      var weightPercentage = calculateWeightPercentage(
        weight,
        roundedMaxWeight
      );

      document.getElementById("bargraph").innerHTML =
        generateHTML(weightPercentage);

      // Update counters
      tg_alpha.innerText = formatNumber(tg_alpha_counter);
      tg_bravo.innerText = formatNumber(tg_bravo_counter);
      tg_charlie.innerText = formatNumber(tg_charlie_counter);
      total_treated_waste.innerText = formatNumber(
        tg_alpha_counter + tg_bravo_counter + tg_charlie_counter
      );
      tg_alpha_ash.innerText = formatNumber(tg_alpha_counter_ash);
      tg_bravo_ash.innerText = formatNumber(tg_bravo_counter_ash);
      tg_charlie_ash.innerText = formatNumber(tg_charlie_counter_ash);
      total_ash.innerText = formatNumber(
        tg_alpha_counter_ash + tg_bravo_counter_ash + tg_charlie_counter_ash
      );
      tg_alpha_ash_percentage.innerText = `${
        isNaN(tg_alpha_counter_ash / tg_alpha_counter)
          ? 0
          : formatNumber((tg_alpha_counter_ash / tg_alpha_counter) * 100)
      } %`;
      tg_bravo_ash_percentage.innerText = `${
        isNaN(tg_bravo_counter_ash / tg_bravo_counter)
          ? 0
          : formatNumber((tg_bravo_counter_ash / tg_bravo_counter) * 100)
      } %`;
      tg_charlie_ash_percentage.innerText = `${
        isNaN(tg_charlie_counter_ash / tg_charlie_counter)
          ? 0
          : formatNumber((tg_charlie_counter_ash / tg_charlie_counter) * 100)
      } %`;
      total_ash_percentage.innerText = `${
        isNaN(
          (tg_alpha_counter_ash +
            tg_bravo_counter_ash +
            tg_charlie_counter_ash) /
            (tg_alpha_counter + tg_bravo_counter + tg_charlie_counter)
        )
          ? 0
          : formatNumber(
              ((tg_alpha_counter_ash +
                tg_bravo_counter_ash +
                tg_charlie_counter_ash) /
                (tg_alpha_counter + tg_bravo_counter + tg_charlie_counter)) *
                100
            )
      } %`;

      var options = {
        series: [tg_alpha_counter, tg_bravo_counter, tg_charlie_counter],
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
        labels: ["TG ALPHA", "TG BRAVO", "TG CHARLIE"],
        colors: ["#198754", "#FFFF00", "#FF0000"],
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

      var options = {
        series: [
          tg_alpha_counter_ash,
          tg_bravo_counter_ash,
          tg_charlie_counter_ash,
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
        labels: ["TG ALPHA ASH", "TG BRAVO ASH", "TG CHARLIE ASH"],
        colors: ["#198754", "#FFFF00", "#FF0000"],
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
      const pieChart3 = document.querySelector("#pieChart3");
      while (pieChart3.firstChild) {
        pieChart3.removeChild(pieChart3.firstChild);
      }
      var chart = new ApexCharts(pieChart3, options);
      chart.render();

      // Update transaction_per_operator table
      transaction_per_client.innerHTML = "";
      Object.entries(operatorData)
        .sort(([, a], [, b]) => {
          // Sort by treated_waste / duration in descending order
          const ratioA = a.treated_waste / a.duration;
          const ratioB = b.treated_waste / b.duration;
          return ratioB - ratioA;
        })
        .forEach(([operatorName, counts], index) => {
          if (operatorName) {
            const rowHtml = `
            <tr>
              <td>${index + 1}</td>
              <td>${operatorName}</td>
              <td>${formatNumber(counts.treated_waste)}</td>
              <td>${formatNumber(counts.duration)}</td>
              <td>${formatNumber(counts.treated_waste / counts.duration)}</td>
            </tr>
          `;
            transaction_per_client.insertAdjacentHTML("beforeend", rowHtml);
          }
        });

      const comparison = `
        <tr>
          <td>TG ALPHA</td>
          <td>${formatNumber(tg_alpha_counter)}</td>
          <td>${formatNumber(previous_tg_alpha_counter)}</td>
        </tr>
        <tr>
          <td>TG BRAVO</td>
          <td>${formatNumber(tg_bravo_counter)}</td>
          <td>${formatNumber(previous_tg_bravo_counter)}</td>
        </tr>
        <tr>
          <td>TG CHARLIE</td>
          <td>${formatNumber(tg_charlie_counter)}</td>
          <td>${formatNumber(previous_tg_charlie_counter)}</td>
        </tr>
        <tr>
          <td>TOTAL</td>
          <td>${formatNumber(
            tg_alpha_counter + tg_bravo_counter + tg_charlie_counter
          )}</td>
          <td>${formatNumber(
            previous_tg_alpha_counter +
              previous_tg_bravo_counter +
              previous_tg_charlie_counter
          )}</td>
        </tr>
      `;

      const comparison_head = `
        <tr>
          <th>TREATED WASTE</th>
          <th>WEEK ${weekNumber}</th>
          <th>WEEK ${weekNumber - 1}</th>
        </tr>
        `;

      const comparison2 = `
        <tr>
          <td>TG ALPHA</td>
          <td>${formatNumber(tg_alpha_counter_ash)}</td>
          <td>${formatNumber(previous_tg_alpha_counter_ash)}</td>
        </tr>
        <tr>
          <td>TG BRAVO</td>
          <td>${formatNumber(tg_bravo_counter_ash)}</td>
          <td>${formatNumber(previous_tg_bravo_counter_ash)}</td>
        </tr>
        <tr>
          <td>TG CHARLIE</td>
          <td>${formatNumber(tg_charlie_counter_ash)}</td>
          <td>${formatNumber(previous_tg_charlie_counter_ash)}</td>
        </tr>
        <tr>
          <td>TOTAL</td>
          <td>${formatNumber(
            tg_alpha_counter_ash + tg_bravo_counter_ash + tg_charlie_counter_ash
          )}</td>
          <td>${formatNumber(
            previous_tg_alpha_counter_ash +
              previous_tg_bravo_counter_ash +
              previous_tg_charlie_counter_ash
          )}</td>
        </tr>
      `;

      const comparison_head2 = `
        <tr>
          <th>ASH</th>
          <th>WEEK ${weekNumber}</th>
          <th>WEEK ${weekNumber - 1}</th>
        </tr>
        `;

      transaction_comparison.innerHTML = comparison;
      transaction_comparison2.innerHTML = comparison2;

      transaction_comparison_head.innerHTML = comparison_head;
      transaction_comparison_head2.innerHTML = comparison_head2;

      week_dates.innerText = getWeekStartEnd(weekNumber);
    }

    // Initialize the table with the current week's data
    updateTransactionHistoryTable(currentWeekNumber);

    week_filter.addEventListener("change", (event) => {
      const selectedWeekNumber = event.target.value;
      updateTransactionHistoryTable(selectedWeekNumber);
    });

    graph_data.addEventListener("change", (event) => {
      const selectedWeekNumber = week_filter.value;
      updateTransactionHistoryTable(selectedWeekNumber);
    });

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
    const add_item_button_purchase_request_form =
      purchase_request_form.querySelector("#add_item_button");
    const remove_item_button_purchase_request_form =
      purchase_request_form.querySelector("#remove_item_button");
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

    add_item_button_purchase_request_form.addEventListener("click", () => {
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
        remove_item_button_purchase_request_form.style.display = "block";
      }
    });

    remove_item_button_purchase_request_form.addEventListener("click", () => {
      const lastItem = purchase_request_form.querySelector(
        "#prf_item_container"
      ).lastElementChild;
      if (lastItem) {
        lastItem.remove();
        prf_counter.value = parseInt(prf_counter.value) - 1;

        // Call the prf_generator function after removing an item
        prf_generator();

        if (prf_counter.value <= 1) {
          remove_item_button_purchase_request_form.style.display = "none";
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
        } else if (waste_id == "W2023100") {
          waste_name = "ASSORTED NON-HAZARDOUS WASTE";
        } else if (waste_id == "W2023200") {
          waste_name = "ASSORTED HAZARDOUS WASTE";
        } else {
          waste_name = waste_id;
        }
      }
      return waste_name;
    }
    function findTreatmentProcess(waste_id) {
      var treatment_process = "";
      for (let c = 1; c < type_of_waste_data_list.content.length; c++) {
        if (
          waste_id.substring(0, 8) ==
          type_of_waste_data_list.content[c][
            findTextInArray(type_of_waste_data_list, "WASTE ID")
          ]
        ) {
          treatment_process =
            type_of_waste_data_list.content[c][
              findTextInArray(type_of_waste_data_list, "TREATMENT PROCESS")
            ];
          break;
        }
      }
      return treatment_process;
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

      for (let x = 1; x < tpf_data_list.content.length; x++) {
        var hauling_date = new Date(
          tpf_data_list.content[x][
            findTextInArray(tpf_data_list, "HAULING DATE")
          ]
        );
        var wcf_data =
          tpf_data_list.content[x][findTextInArray(tpf_data_list, "WCF #")];
        var tpf_data =
          tpf_data_list.content[x][findTextInArray(tpf_data_list, "TPF #")];
        var date_data =
          tpf_data_list.content[x][
            findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")
          ];
        var time_data =
          tpf_data_list.content[x][
            findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")
          ];
        var client_id_data =
          tpf_data_list.content[x][findTextInArray(tpf_data_list, "CLIENT ID")];
        var waste_name =
          tpf_data_list.content[x][
            findTextInArray(tpf_data_list, "WASTE NAME")
          ];
        var weight =
          tpf_data_list.content[x][findTextInArray(tpf_data_list, "WEIGHT")];
        var process =
          tpf_data_list.content[x][
            findTextInArray(tpf_data_list, "DESTRUCTION PROCESS")
          ];
        var machine =
          tpf_data_list.content[x][
            findTextInArray(tpf_data_list, "MACHINE USED")
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
        if (hauling_date >= report_from && hauling_date <= report_to) {
          filteredData.push({
            tpf_data,
            mtf,
            hauling_date,
            date_data,
            time_data,
            client_id_data,
            waste_name,
            weight,
            process,
            machine,
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
                        <td>${item.tpf_data}</td>
                        <td>${item.mtf}</td>
                        <td>${date_decoder(item.hauling_date)}</td>
                        <td>${date_decoder(item.date_data)}</td>
                        <td>${time_decoder(item.time_data)}</td>
                        <td>${findClientName(item.client_id_data)}</td>
                        <td>${item.waste_name}</td>
                        <td>${formatNumber(item.weight)}</td>
                        <td>${item.process}</td>
                        <td>${item.machine}</td>
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
                            <h1 style="text-align: center; font-weight: bold;">TREATMENT TRANSACTIONS</h1>
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
                                        <th>SF #/ TPF #</td>
                                        <th>MTF #</td>
                                        <th>HAULING DATE</th>
                                        <th>DATE FINISHED</th>
                                        <th>TIME FINISHED</th>
                                        <th>CLIENT</th>
                                        <th>WASTE NAME</th>
                                        <th>WEIGHT (kg)</th>
                                        <th>TREATMENT PROCESS</th>
                                        <th>MACHINE USED</th>
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
