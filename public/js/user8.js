document.addEventListener("DOMContentLoaded", async function () {
  try {
    const username_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec"
    );
    const employee_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec"
    );
    const idf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbyXPvq606vmfSlFG3nVjYuJLN8Jnv4BFGbhEmDp6e4wLL1kUQVa4kIi2dGGRKuSklT2bg/exec"
    );
    const sf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec"
    );
    const irf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec"
    );
    const sif_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbzGVbiQV2LOCAI_eeNF6wqfg7INqawyP3ieeTuGY7B5wE8aPApqlujc4onghGCwcow1iw/exec"
    );
    const prf_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec"
    );
    const accomplishment_response_promise = fetch(
      "https://script.google.com/macros/s/AKfycbwa4TtV5mhmZRWagXQWmEG6EVH_tlRvwSnIOBM6O6VF_wAd4qnvFGky-1WBsQ74bPI3JQ/exec"
    );

    const [
      username_response,
      employee_response,
      idf_response,
      sf_response,
      irf_response,
      sif_response,
      prf_response,
      accomplishment_response,
    ] = await Promise.all([
      username_response_promise,
      employee_response_promise,
      idf_response_promise,
      sf_response_promise,
      irf_response_promise,
      sif_response_promise,
      prf_response_promise,
      accomplishment_response_promise,
    ]);

    const username_data_list = await username_response.json();
    const employee_data_list = await employee_response.json();
    const idf_data_list = await idf_response.json();
    const sf_data_list = await sf_response.json();
    const irf_data_list = await irf_response.json();
    const sif_data_list = await sif_response.json();
    const prf_data_list = await prf_response.json();
    const accomplishment_data_list = await accomplishment_response.json();

    // Code that depends on the fetched data
    // username_data_list3
    const profile_picture = document.getElementById("profile_picture");
    const user_sidebar = document.getElementById("user_sidebar");
    const user_sidebar_officer = document.getElementById(
      "user_sidebar_officer"
    );
    const user_sidebar_department = document.getElementById(
      "user_sidebar_department"
    );
    const user = document.getElementById("user");

    const user_name =
      username_data_list.content[8][
        findTextInArray(username_data_list, "NAME")
      ];
    profile_picture.src = `../images/profile_picture/${
      username_data_list.content[8][
        findTextInArray(username_data_list, "PICTURE")
      ]
    }`;
    user.value =
      username_data_list.content[8][
        findTextInArray(username_data_list, "NAME")
      ];
    user_sidebar.innerHTML = `<u>${
      username_data_list.content[8][findTextInArray(username_data_list, "NAME")]
    }</u>`;
    user_sidebar_officer.innerText =
      username_data_list.content[8][
        findTextInArray(username_data_list, "SECTIONS")
      ];
    user_sidebar_department.innerText =
      username_data_list.content[8][
        findTextInArray(username_data_list, "DEPARTMENT")
      ];

    // // incident_history_list
    const incident_report_safety = document.querySelector(
      "#safety_dashboard #incident_report"
    );
    const pending_counter_safety = document.querySelector(
      "#safety_dashboard #pending_counter"
    );
    const documented_safety = document.querySelector(
      "#safety_dashboard #documented"
    );
    const pending_list_safety = document.querySelector(
      "#safety_dashboard #pending_list"
    );
    const incident_history_list_safety = document.querySelector(
      "#safety_dashboard #incident_history_list"
    );
    var irf_transaction_safety = [];
    var irf_idf_transaction_safety = [];
    var irf_transaction_counter_safety = 0;
    var irf_idf_transaction_counter_safety = 0;

    for (let i = 1; i < irf_data_list.content.length; i++) {
      if (
        !irf_transaction_safety.includes(
          irf_data_list.content[i][findTextInArray(irf_data_list, "IRF #")]
        )
      ) {
        irf_transaction_safety.push(
          irf_data_list.content[i][findTextInArray(irf_data_list, "IRF #")]
        );
        irf_transaction_counter_safety += 1;
      }
    }

    for (let i = 1; i < idf_data_list.content.length; i++) {
      if (
        !irf_idf_transaction_safety.includes(
          idf_data_list.content[i][findTextInArray(idf_data_list, "IRF #")]
        )
      ) {
        irf_idf_transaction_safety.push(
          idf_data_list.content[i][findTextInArray(idf_data_list, "IRF #")]
        );
        irf_idf_transaction_counter_safety += 1;
      }
    }

    const pending_safety = irf_transaction_safety.filter(
      (element) => !irf_idf_transaction_safety.includes(element)
    );
    const finished_safety = irf_transaction_safety.filter((element) =>
      irf_idf_transaction_safety.includes(element)
    );

    incident_report_safety.innerText =
      pending_safety.length + finished_safety.length;
    pending_counter_safety.innerText = pending_safety.length;
    documented_safety.innerText = finished_safety.length;
    var incident_history_data_value = "";
    var incident_history_data_value_counter = 1;
    for (let x = 1; x < irf_data_list.content.length; x++) {
      for (let y = 0; y < pending_safety.length; y++) {
        if (
          irf_data_list.content[x][findTextInArray(irf_data_list, "IRF #")] ==
          pending_safety[y]
        ) {
          var employee_names = [];
          if (
            irf_data_list.content[x][
              findTextInArray(irf_data_list, "PERSON INVOLVE")
            ]
              .toString()
              .includes("||")
          ) {
            irf_data_list.content[x][
              findTextInArray(irf_data_list, "PERSON INVOLVE")
            ]
              .split("||")
              .map((number) => {
                employee_names.push(findEmployeeName(number.trim()));
              });
          } else {
            employee_names.push(number.trim());
          }
          incident_history_data_value += `
                    <tr>
                        <td>${incident_history_data_value_counter}</td>
                        <td>${
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "IRF #")
                          ]
                        }</td>
                        <td>${date_decoder(
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "INCIDENT DATE")
                          ]
                        )} /<br> ${time_decoder(
            irf_data_list.content[x][
              findTextInArray(irf_data_list, "INCIDENT TIME")
            ]
          )}</td>
                        <td>${
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "DEPARTMENT")
                          ]
                        }</td>
                        <td>${employee_names.join(" || ")}</td>
                        <td>${
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "DESIGNATION")
                          ]
                        }</td>
                        <td>${
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "INCIDENT DETAILS")
                          ]
                        }</td>
                        <td>${date_decoder(
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "REPORT DATE")
                          ]
                        )} /<br> ${time_decoder(
            irf_data_list.content[x][
              findTextInArray(irf_data_list, "REPORT TIME")
            ]
          )}</td>
                        <td>${calculateTravelTime(
                          date_decoder(
                            irf_data_list.content[x][
                              findTextInArray(irf_data_list, "INCIDENT DATE")
                            ]
                          ),
                          time_decoder(
                            irf_data_list.content[x][
                              findTextInArray(irf_data_list, "INCIDENT TIME")
                            ]
                          ),
                          date_decoder(
                            irf_data_list.content[x][
                              findTextInArray(irf_data_list, "REPORT DATE")
                            ]
                          ),
                          time_decoder(
                            irf_data_list.content[x][
                              findTextInArray(irf_data_list, "REPORT TIME")
                            ]
                          )
                        )}</td>
                    </tr>
                    `;
          incident_history_data_value_counter += 1;
        }
      }
    }
    pending_list_safety.innerHTML = incident_history_data_value;

    var incident_history_data_value = "";
    var incident_history_data_value_counter = 1;
    for (let x = 1; x < irf_data_list.content.length; x++) {
      for (let y = 0; y < finished_safety.length; y++) {
        if (
          irf_data_list.content[x][findTextInArray(irf_data_list, "IRF #")] ==
          pending_counter_safety[y]
        ) {
          var employee_names = [];
          if (
            irf_data_list.content[x][
              findTextInArray(irf_data_list, "PERSON INVOLVE")
            ]
              .toString()
              .includes("||")
          ) {
            irf_data_list.content[x][
              findTextInArray(irf_data_list, "PERSON INVOLVE")
            ]
              .split("||")
              .map((number) => {
                employee_names.push(findEmployeeName(number.trim()));
              });
          } else {
            employee_names.push(number.trim());
          }
          incident_history_data_value += `
                    <tr>
                        <td>${incident_history_data_value_counter}</td>
                        <td>${
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "IRF #")
                          ]
                        }</td>
                        <td>${date_decoder(
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "INCIDENT DATE")
                          ]
                        )} /<br> ${time_decoder(
            irf_data_list.content[x][
              findTextInArray(irf_data_list, "INCIDENT TIME")
            ]
          )}</td>
                        <td>${
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "DEPARTMENT")
                          ]
                        }</td>
                        <td>${employee_names.join(" || ")}</td>
                        <td>${
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "DESIGNATION")
                          ]
                        }</td>
                        <td class="my_element">${
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "INCIDENT DETAILS")
                          ]
                        }</td>
                        <td>${
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "ACTION TAKEN")
                          ]
                        }</td>
                        <td>${date_decoder(
                          irf_data_list.content[x][
                            findTextInArray(irf_data_list, "REPORT DATE")
                          ]
                        )} /<br> ${time_decoder(
            irf_data_list.content[x][
              findTextInArray(irf_data_list, "REPORT TIME")
            ]
          )}</td>
                        <td>${calculateTravelTime(
                          date_decoder(
                            irf_data_list.content[x][
                              findTextInArray(irf_data_list, "INCIDENT DATE")
                            ]
                          ),
                          time_decoder(
                            irf_data_list.content[x][
                              findTextInArray(irf_data_list, "INCIDENT TIME")
                            ]
                          ),
                          date_decoder(
                            irf_data_list.content[x][
                              findTextInArray(irf_data_list, "REPORT DATE")
                            ]
                          ),
                          time_decoder(
                            irf_data_list.content[x][
                              findTextInArray(irf_data_list, "REPORT TIME")
                            ]
                          )
                        )}</td>
                    </tr>
                    `;
          incident_history_data_value_counter += 1;
        }
      }
    }
    incident_history_list_safety.innerHTML = incident_history_data_value;

    // // FORM GENERATOR
    const today = new Date();
    const today_year = today.getFullYear();
    const today_month = today.getMonth() + 1;
    const uarf_form_no = document.getElementById("uarf_form_no");
    const nmrf_form_no = document.getElementById("nmrf_form_no");
    const airf_form_no = document.getElementById("airf_form_no");
    var month_new;
    var code_year_month;
    var data_counter;

    if (today_month.toString().length == 1) {
      month_new = `0${today_month}`;
    }

    // UARF
    code_year_month = `UARF${today_year}${month_new}`;

    var data_content = 1;
    var uarf_data;
    var data_last_3digit = 0;

    for (x = 1; x < idf_data_list.content.length; x++) {
      if (
        idf_data_list.content[x][findTextInArray(idf_data_list, "IDF #")].slice(
          0,
          4
        ) == "UARF"
      ) {
        uarf_data = idf_data_list.content[x][1];
      }

      if (uarf_data.includes(code_year_month) == true) {
        data_last_3digit = uarf_data.slice(10);
      }
    }

    data_content = parseInt(data_last_3digit) + 1;

    if (data_content.toString().length == 1) {
      data_counter = `000${data_content}`;
    } else if (data_content.toString().length == 2) {
      data_counter = `00${data_content}`;
    } else if (data_content.toString().length == 3) {
      data_counter = `0${data_content}`;
    } else if (data_content.toString().length == 4) {
      data_counter = `${data_content}`;
    }

    uarf_form_no.value = `${code_year_month}${data_counter}`;

    // NMRF
    code_year_month = `NMRF${today_year}${month_new}`;
    var data_content = 1;
    var uarf_data;
    var data_last_3digit = 0;

    for (x = 1; x < idf_data_list.content.length; x++) {
      if (
        idf_data_list.content[x][findTextInArray(idf_data_list, "IDF #")].slice(
          0,
          4
        ) == "NMRF"
      ) {
        uarf_data = idf_data_list.content[x][1];
      }

      if (uarf_data.includes(code_year_month) == true) {
        data_last_3digit = uarf_data.slice(10);
      }
    }

    data_content = parseInt(data_last_3digit) + 1;

    if (data_content.toString().length == 1) {
      data_counter = `000${data_content}`;
    } else if (data_content.toString().length == 2) {
      data_counter = `00${data_content}`;
    } else if (data_content.toString().length == 3) {
      data_counter = `0${data_content}`;
    } else if (data_content.toString().length == 4) {
      data_counter = `${data_content}`;
    }

    nmrf_form_no.value = `${code_year_month}${data_counter}`;

    // AIRF
    code_year_month = `AIRF${today_year}${month_new}`;
    var data_content = 1;
    var uarf_data;
    var data_last_3digit = 0;

    for (x = 1; x < idf_data_list.content.length; x++) {
      if (
        idf_data_list.content[x][findTextInArray(idf_data_list, "IDF #")].slice(
          0,
          4
        ) == "AIRF"
      ) {
        uarf_data = idf_data_list.content[x][1];
      }

      if (uarf_data.includes(code_year_month) == true) {
        data_last_3digit = uarf_data.slice(10);
      }
    }

    data_content = parseInt(data_last_3digit) + 1;

    if (data_content.toString().length == 1) {
      data_counter = `000${data_content}`;
    } else if (data_content.toString().length == 2) {
      data_counter = `00${data_content}`;
    } else if (data_content.toString().length == 3) {
      data_counter = `0${data_content}`;
    } else if (data_content.toString().length == 4) {
      data_counter = `${data_content}`;
    }

    airf_form_no.value = `${code_year_month}${data_counter}`;

    const incident_documentation_form = document.getElementById(
      "incident_documentation_form"
    );
    const unsafe_act_condition = document.getElementById(
      "unsafe_act_condition"
    );
    const near_miss = document.getElementById("near_miss");
    const accident = document.getElementById("accident");
    const uarf_form = document.getElementById("uarf_form");
    const nmrf_form = document.getElementById("nmrf_form");
    const airf_form = document.getElementById("airf_form");
    const form_details = document.getElementById("form_details");
    const generate_btn = document.getElementById("generate_btn");
    const generate_report_btn = document.getElementById("generate_report_btn");
    const identified_hazard_input =
      document.getElementById("identified_hazard");
    const recommendation_input = document.getElementById("recommendation");
    const file_input_container = document.getElementById(
      "file_input_container"
    );
    var counter = "";
    var header = "";

    unsafe_act_condition.addEventListener("click", () => {
      form_details.style.display = "block";
      uarf_form.style.display = "block";
      nmrf_form.style.display = "none";
      airf_form.style.display = "none";
      counter = `UARF NO. ${uarf_form_no.value}`;
      header = `UNSAFE ACT/CONDITION REPORT FORM`;
    });

    near_miss.addEventListener("click", () => {
      form_details.style.display = "block";
      uarf_form.style.display = "none";
      nmrf_form.style.display = "block";
      airf_form.style.display = "none";
      counter = `NMRF NO. ${uarf_form_no.value}`;
      header = `NEAR-MISS REPORT FORM`;
    });

    accident.addEventListener("click", () => {
      form_details.style.display = "block";
      uarf_form.style.display = "none";
      nmrf_form.style.display = "none";
      airf_form.style.display = "block";
      counter = `AIRF NO. ${uarf_form_no.value}`;
      header = `ACCIDENT REPORT FORM`;
    });

    const search_irf_form_no = document.getElementById("search_irf_form_no");
    const search_irf_form_no_button = document.getElementById(
      "search_irf_form_no_button"
    );
    const search_irf_result = document.getElementById("search_irf_result");
    const head_button = document.getElementById("head_button");
    var employee_id = [];
    var employee_names = [];
    var employee_department = [];
    var employee_designation = [];
    var incident_date = "";
    var incident_time = "";
    var location = "";
    var details = "";
    var action_taken = "";
    var recommendation = "";

    generate_btn.addEventListener("click", () => {
      generateData();
      recommendation = recommendation_input.value;
      generate_report_btn.style.display = "block";
      file_input_container.style.display = "block";
      // Get the textarea element
      const hazardTextarea = document.getElementById("identified_hazard");
      const hazardTextarea2 = document.getElementById("potential_harm");
      const hazardTextarea3 = document.getElementById("recommendation");

      // Get the container for displaying formatted information
      const formattedHazardInfo = document.getElementById(
        "identified_hazard_input"
      );
      const formattedHazardInfo2 = document.getElementById(
        "potential_harm_input"
      );
      const formattedHazardInfo3 = document.getElementById(
        "recommendation_input"
      );

      // Event listener to update formatted content when the textarea changes
      hazardTextarea.addEventListener("input", function () {
        const content = this.value.replace(/\n/g, "<br>"); // Replace newline characters with <br> tags
        formattedHazardInfo.innerHTML = content;
      });
      hazardTextarea2.addEventListener("input", function () {
        const content = this.value.replace(/\n/g, "<br>"); // Replace newline characters with <br> tags
        formattedHazardInfo2.innerHTML = content;
      });
      hazardTextarea3.addEventListener("input", function () {
        const content = this.value.replace(/\n/g, "<br>"); // Replace newline characters with <br> tags
        formattedHazardInfo3.innerHTML = content;
      });
    });

    search_irf_form_no_button.addEventListener("click", () => {
      var data_value;
      for (let a = 1; a < irf_data_list.content.length; a++) {
        for (let b = 0; b <= pending_safety.length; b++) {
          if (
            search_irf_form_no.value ==
            irf_data_list.content[a][findTextInArray(irf_data_list, "IRF #")]
          ) {
            if (search_irf_form_no.value == pending_safety[b]) {
              if (
                irf_data_list.content[x][
                  findTextInArray(irf_data_list, "PERSON INVOLVE")
                ]
                  .toString()
                  .includes("||")
              ) {
                irf_data_list.content[x][
                  findTextInArray(irf_data_list, "PERSON INVOLVE")
                ]
                  .split("||")
                  .map((number) => {
                    employee_names.push(findEmployeeName(number.trim()));
                    employee_id.push(number.trim());
                  });
                irf_data_list.content[x][
                  findTextInArray(irf_data_list, "DEPARTMENT")
                ]
                  .split("||")
                  .map((number) => {
                    employee_department.push(number.trim());
                  });
                irf_data_list.content[x][
                  findTextInArray(irf_data_list, "DESIGNATION")
                ]
                  .split("||")
                  .map((number) => {
                    employee_designation.push(number.trim());
                  });
              } else {
                employee_names.push(number.trim());
                employee_id.push(number.trim());
              }
              data_value = `
                            <b>IRF #: </b>${
                              irf_data_list.content[a][
                                findTextInArray(irf_data_list, "IRF #")
                              ]
                            }<br>
                            <b>INCIDENT DATE: </b>${date_decoder(
                              irf_data_list.content[a][
                                findTextInArray(irf_data_list, "INCIDENT DATE")
                              ]
                            )}<br>
                            <b>INCIDENT TIME: </b>${time_decoder(
                              irf_data_list.content[a][
                                findTextInArray(irf_data_list, "INCIDENT TIME")
                              ]
                            )}<br><br>
                            <b>PERSON INVOLVED: </b>${employee_names.join(
                              " || "
                            )}<br>
                            <b>DEPARTMENT: </b>${
                              irf_data_list.content[a][
                                findTextInArray(irf_data_list, "DEPARTMENT")
                              ]
                            }<br>
                            <b>DESIGNATION: </b>${
                              irf_data_list.content[a][
                                findTextInArray(irf_data_list, "DESIGNATION")
                              ]
                            }<br>
                            <b>LOCATION: </b>${
                              irf_data_list.content[a][
                                findTextInArray(irf_data_list, "LOCATION")
                              ]
                            }<br><br>
                            <b>DETAILS: </b>${
                              irf_data_list.content[a][
                                findTextInArray(
                                  irf_data_list,
                                  "INCIDENT DETAILS"
                                )
                              ]
                            }<br><br>
                            <b>REPORT DATE: </b>${date_decoder(
                              irf_data_list.content[a][
                                findTextInArray(irf_data_list, "REPORT DATE")
                              ]
                            )}<br>
                            <b>REPORT TIME: </b>${time_decoder(
                              irf_data_list.content[a][
                                findTextInArray(irf_data_list, "REPORT TIME")
                              ]
                            )}<br>
                            <b>SUBMITTED BY: </b>${
                              irf_data_list.content[a][
                                findTextInArray(irf_data_list, "SUBMITTED BY")
                              ]
                            }<br>
                            `;
              incident_date = date_decoder(
                irf_data_list.content[a][
                  findTextInArray(irf_data_list, "INCIDENT DATE")
                ]
              );
              incident_time = time_decoder(
                irf_data_list.content[a][
                  findTextInArray(irf_data_list, "INCIDENT TIME")
                ]
              );
              location =
                irf_data_list.content[a][
                  findTextInArray(irf_data_list, "LOCATION")
                ];
              details =
                irf_data_list.content[a][
                  findTextInArray(irf_data_list, "INCIDENT DETAILS")
                ];
              action_taken =
                irf_data_list.content[a][
                  findTextInArray(irf_data_list, "ACTION TAKEN")
                ];
              search_irf_result.style.display = "block";
              head_button.style.display = "block";
            }
          }
        }
      }
      if (data_value == undefined) {
        search_irf_result.innerHTML = `
                <div class="search_irf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`;
      } else {
        search_irf_result.innerHTML = `
                <div class="search_irf_result">
                <h2>INFORMATION</h2>
                ${data_value}
                </div><br>`;
      }
    });
    function generateData() {
      var data = `
            <div class="what_to_print" id="what_to_print" style="width: 816px; height: 1056px; border: 3px solid black; background-color: white; padding: 50px 50px 25px 50px; position: relative;">
                <div style="display: flex; align-items: end; gap: 10px;">
                    <img src="/public/images/logo.png" alt="" style="height: 50px;">
                    <img src="/public/images/logo_name2.png" alt="" style="height: 40px;">
                </div>
                <h4 style="margin: 20px 0 0 0; text-align: center; font-weight: bold;">${header}</h4>
                <h6 style="text-align: center; font-weight: bold; margin: 0;">${counter}</h6>
                <h5 style="margin: 20px 0 0 0; font-weight: bold; margin: 0;">PERSONS INVOLVE</h5>
                <div style="display: grid; grid-template-columns: 30px 1fr 1fr 1fr; border: 1px solid black;">
                    <h6 style="margin: 0; font-weight: bold; display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                        #
                    </h6>
                    <h6 style="margin: 0; font-weight: bold; border-left: 1px solid black;  display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                        NAME:
                    </h6>
                    <h6 style="margin: 0; font-weight: bold; border-left: 1px solid black;  display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                        DEPARTMENT:
                    </h6>
                    <h6 style="margin: 0; font-weight: bold; border-left: 1px solid black;  display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                        DESIGNATION:
                    </h6>
                </div>
                ${employee_id
                  .map((id, index) => {
                    const incrementedValue = index + 1;
                    return `
                    <div style="display: grid; grid-template-columns: 30px 1fr 1fr 1fr; border: 1px solid black;">
                        <h6 style="margin: 0; font-size: 12px; text-align: center; height: 100%; display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                            ${incrementedValue}
                        </h6>
                        <h6 style="margin: 0; font-size: 12px; text-align: center; border-left: 1px solid black; height: 100%; display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                            ${findEmployeeName(id)}
                        </h6>
                        <h6 style="margin: 0; font-size: 12px; text-align: center; border-left: 1px solid black; height: 100%; display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                            ${employee_department[index]}
                        </h6>
                        <h6 style="margin: 0; font-size: 12px; text-align: center; border-left: 1px solid black; height: 100%; display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                            ${employee_designation[index]}
                        </h6>
                    </div>
                    `;
                  })
                  .join("")}                
                <h5 style="margin: 20px 0 0 0; font-weight: bold;">DESCRIPTION OF ACCIDENT</h5>
                <div style="border: 1px solid black;">
                    <div style="display: flex; padding: 0 5px;">
                        <h6 style="margin: 0; font-weight: bold;">LOCATION:</h6>
                        <h6 style="margin: 0; padding-left: 5px">${location}</h6>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 2fr; border-top: 1px solid black;">
                        <div style="display: flex; padding: 0 5px">
                            <h6 style="margin: 0; font-weight: bold;">DATE:</h6>
                            <h6 style="margin: 0; padding-left: 5px">${incident_date}</h6>
                        </div>
                        <div style="display: flex; padding: 0 5px; border-left: 1px solid black;">
                            <h6 style="margin: 0; font-weight: bold;">TIME:</h6>
                            <h6 style="margin: 0; padding-left: 5px">${incident_time}</h6>
                        </div>
                        <div style="display: flex; align-items: center; padding: 0 5px; border-left: 1px solid black;">
                            <h6 style="margin: 0; font-weight: bold; padding: 0 5px">POLICE NOTIFED:</h6>
                            <div style="border: 1px solid black; height: 10px; width: 10px; margin-left: 15px;"></div>
                            <h6 style="margin: 0; padding-left: 5px">YES</h6>
                            <div style="border: 1px solid black; height: 10px; width: 10px; margin-left: 15px;"></div>
                            <h6 style="margin: 0; padding-left: 5px">NO</h6>
                            <div style="border: 1px solid black; height: 10px; width: 10px; margin-left: 15px; background-color: black;"></div>
                            <h6 style="margin: 0; padding-left: 5px">N/A</h6>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; border-top: 1px solid black;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px">ACCIDENT/INCIDENT DETAILS:</h6>
                        <h6 style="margin: 0; padding-left: 5px; padding: 0 5px; text-indent: 50px; text-align: justify;">${details}</h6>
                    </div>
                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px; border-top: 1px solid black;">ATTACHMENT:</h6>
                    <div id="fileDisplayArea" style="height: 400px; max-width: 700px; max-height: 400px; padding: 5px; display: flex; justify-content: center; align-items: center;"></div>
                </div>
                <div style="margin: 20px 0 0 0; border: 1px solid black; display: grid; grid-template-columns: 50% 50%; height: 170px;">
                    <div style="display: flex; flex-direction: column;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px">IDENTIFIED HAZARD:</h6>
                        <h6 id="identified_hazard_input" style="margin: 0; padding-left: 5px; padding: 0 5px; text-align: justify; border-top: 1px solid black;"></h6>
                    </div>
                    <div style="display: flex; flex-direction: column; border-left: 1px solid black;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px;">ACTION TAKEN:</h6>
                        <h6 style="margin: 0; padding-left: 5px; padding: 0 5px; text-align: justify; border-top: 1px solid black;">${action_taken}</h6>
                    </div>
                </div>
                <style>
                    h5{
                        font-size: 16px;
                    }
                    h6{
                        font-size: 14px;
                    }
                    #fileDisplayArea img{
                        max-height: 100%;
                        max-width: 100%;
                        border: 1px solid black;
                    }
                </style>
            </div>
            <div class="what_to_print2" id="what_to_print2" style="width: 816px; height: 1056px; border: 3px solid black; background-color: white; padding: 50px 50px 25px 50px; position: relative;">
                <div style="display: flex; align-items: end; gap: 10px;">
                    <img src="/public/images/logo.png" alt="" style="height: 50px;">
                    <img src="/public/images/logo_name2.png" alt="" style="height: 40px;">
                </div>
                <h4 style="margin: 20px 0 0 0; text-align: center; font-weight: bold;">${header}</h4>
                <h6 style="text-align: center; font-weight: bold; margin: 0;">${counter}</h6>
                <div style="margin: 20px 0 0 0; border: 1px solid black;">
                    <div style="display: flex; flex-direction: column; border-top: 1px solid black; height: 65px;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px">POTENTIAL HARM:</h6>
                        <h6 id="potential_harm_input" style="margin: 0; padding-left: 5px; padding: 0 5px; text-align: justify;"></h6>
                    </div>
                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px; border-top: 1px solid black;">ATTACHMENT:</h6>
                    <div id="fileDisplayArea2" style="height: 400px; max-width: 700px; max-height: 400px; padding: 5px; display: grid; justify-content: center; align-items: center; grid-template-columns: repeat(3, 1fr);"></div>
                </div>
                <div style="margin: 20px 0 0 0; border: 1px solid black; display: grid; grid-template-columns: 1fr; height: 140px;">
                    <div style="display: flex; flex-direction: column;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px">RECOMMENDATION / CONTROL MEASURE::</h6>
                        <h6 id="recommendation_input" style="margin: 0; padding-left: 5px; padding: 0 5px; text-align: justify; border-top: 1px solid black;"></h6>
                    </div>
                </div>
                <div style="margin: 20px 0 0 0; border: 1px solid black; display: grid; grid-template-columns: 1fr 3fr; height: 175px;">
                    <div style="display: flex; flex-direction: column; border-right: 1px solid black;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px">REPORTED BY:</h6>
                        <h6 style="margin: 106px 0 0 0; padding: 0 5px; text-align: center; font-size: 13px"><u><b>ARLENE DELOS SANTOS</b></u></h6>
                        <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>PLANT SAFETY OFFICER 2</i></h6>            
                        <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>     
                    </div>
                    <div>
                        <div style="height: 85px;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
                                <div style="display: flex; flex-direction: column;">
                                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px">RECEIVED BY:</h6>
                                    <h6 style="margin: 20px 0 0 0;padding: 0 5px; text-align: center; font-size: 13px"><u><b>____________________</b></u></h6>
                                    <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>SUPERVISOR</i></h6>            
                                    <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>            
                                </div>
                                <div style="display: flex; flex-direction: column; border-left: 1px solid black;">
                                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px">RECEIVED BY:</h6>
                                    <h6 style="margin: 20px 0 0 0;padding: 0 5px; text-align: center; font-size: 13px"><u><b>ROSARIO RIVERA</b></u></h6>
                                    <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>HR ASSOCIATE</i></h6>            
                                    <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>            
                                </div>
                                <div style="display: flex; flex-direction: column; border-left: 1px solid black;">
                                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px">RECEIVED BY:</h6>
                                    <h6 style="margin: 20px 0 0 0;padding: 0 5px; text-align: center; font-size: 13px"><u><b>LAWRENCE ANTONIO</b></u></h6>
                                    <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>PCO</i></h6>
                                    <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>
                                </div>
                            </div>
                        </div>
                        <div style=" border-top: 1px solid black;; height: 70px;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr;">
                                <div style="display: flex; flex-direction: column;">
                                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px">NOTED BY:</h6>
                                    <h6 style="margin: 20px 0 0 0;padding: 0 5px; text-align: center; font-size: 13px"><u><b>DAISY CARDINEZ</b></u></h6>
                                    <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>ADMINISTRATIVE HEAD</i></h6>
                                    <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>            
                                </div>
                                <div style="display: flex; flex-direction: column; border-left: 1px solid black;">
                                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px">NOTED BY:</h6>
                                    <h6 style="margin: 20px 0 0 0;padding: 0 5px; text-align: center; font-size: 13px"><u><b>CRIS DURAN</b></u></h6>
                                    <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>PLANT MANAGER</i></h6>
                                    <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>           
                                </div>
                            </div>

                        </div>
                    </div>
                </div><br>
                <style>
                    h5{
                        font-size: 16px;
                    }
                    h6{
                        font-size: 14px;
                    }
                    #fileDisplayArea img{
                        max-height: 100%;
                        max-width: 100%;
                        border: 1px solid black;
                    }
                </style>
            </div>
            `;
      incident_documentation_form.insertAdjacentHTML("beforeend", data);
    }

    // // safety_inspection
    const safety_inspection = document.querySelector("#safety_inspection");
    const safety_inspection_button = document.querySelector(
      "#safety_inspection_button"
    );
    const safety_inspection_form = safety_inspection.querySelector(
      "#safety_inspection_form"
    );
    const history_list = safety_inspection.querySelector("#history_list");
    const department_selection = safety_inspection.querySelector(
      "#department_selection"
    );
    const section_selection =
      safety_inspection.querySelector("#section_selection");
    const grade = safety_inspection.querySelector("#grade");

    var list_counter = 1;
    for (let x = sif_data_list.content.length - 1; x >= 1; x--) {
      var list = `
            <td>${list_counter}</td>
            <td>${
              sif_data_list.content[x][findTextInArray(sif_data_list, "SIF #")]
            }</td>
            <td>${date_decoder(
              sif_data_list.content[x][
                findTextInArray(sif_data_list, "CREATED AT")
              ]
            )} / ${time_decoder(
        sif_data_list.content[x][findTextInArray(sif_data_list, "CREATED AT")]
      )}</td>
            <td>${
              sif_data_list.content[x][
                findTextInArray(sif_data_list, "DEPARTMENT")
              ]
            }</td>
            <td>${
              sif_data_list.content[x][
                findTextInArray(sif_data_list, "SECTION")
              ]
            }</td>
            <td>${formatNumber(
              sif_data_list.content[x][
                findTextInArray(sif_data_list, "SAFETY GRADE")
              ]
            )}%</td>
            <td>${
              sif_data_list.content[x][
                findTextInArray(sif_data_list, "SUBMITTED BY")
              ]
            }</td>
            `;
      history_list.insertAdjacentHTML("beforeend", list);
      list_counter++;
    }

    // sif_data_list
    // FORM GENERATOR
    const sif_form_no = safety_inspection.querySelector("#sif_form_no");
    var last_row = sif_data_list.content.length - 1;
    var data_info =
      sif_data_list.content[last_row][findTextInArray(sif_data_list, "SIF #")];
    var data_counter;
    if (last_row == 0) {
      data_counter = 0;
    } else {
      data_counter = data_info.substring(9, 12);
    }
    var year = new Date().getFullYear();
    var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
    data_counter = (parseInt(data_counter) + 1).toString().padStart(3, "0");
    sif_form_no.value = `SIF${year}${month}${data_counter}`;

    safety_inspection_button.addEventListener("click", () => {
      if (safety_inspection_form.style.display == "block") {
        safety_inspection_form.style.display = "none";
      } else {
        safety_inspection_form.style.display = "block";
      }
    });

    department_selection.addEventListener("change", () => {
      var options;
      if (department_selection.value === "TREATMENT DEPARTMENT") {
        options = `
                    <option value="">SELECT SECTION</option>
                    <option value="THERMAL SECTION">THERMAL SECTION</option>
                    <option value="ROTARY SECTION">ROTARY SECTION</option>
                    <option value="FURNACE SECTION">FURNACE SECTION</option>
                    <option value="WASTE WATER SECTION">WASTE WATER SECTION</option>
                `;
      } else if (
        department_selection.value === "WAREHOUSE AND RENDERING DEPARTMENT"
      ) {
        options = `
                    <option value="">SELECT SECTION</option>
                    <option value="WAREHOUSE SECTION">WAREHOUSE SECTION</option>
                    <option value="RENDERING SECTION">RENDERING SECTION</option>
                `;
      } else if (department_selection.value === "LOGISTICS DEPARTMENT") {
        options = `
                    <option value="">SELECT SECTION</option>
                    <option value="LOGISTICS SECTION">LOGISTICS SECTION</option>
                    <option value="MOTORPOOL SECTION">MOTORPOOL SECTION</option>
                `;
      } else if (department_selection.value === "ADMIN DEPARTMENT") {
        options = `
                    <option value="">SELECT SECTION</option>
                    <option value="ADMIN SECTION">ADMIN SECTION</option>
                `;
      } else if (department_selection.value === "CONSTRUCTION DEPARTMENT") {
        options = `
                    <option value="">SELECT SECTION</option>
                    <option value="CONSTRUCTION SECTION">CONSTRUCTION SECTION</option>
                `;
      } else if (
        department_selection.value === "FACILITY SERVICES MANAGEMENT DEPARTMENT"
      ) {
        options = `
                    <option value="">SELECT SECTION</option>
                    <option value="FACILITY SERVICES MANAGEMENT SECTION">FACILITY SERVICES MANAGEMENT SECTION</option>
                `;
      } else if (department_selection.value === "MARKETING DEPARTMENT") {
        options = `
                    <option value="">SELECT SECTION</option>
                    <option value="MARKETING SECTION">MARKETING SECTION</option>
                `;
      } else if (department_selection.value === "ACCOUNTING DEPARTMENT") {
        options = `
                    <option value="">SELECT SECTION</option>
                    <option value="ACCOUNTING SECTION">ACCOUNTING SECTION</option>
                `;
      }
      // Clear existing options
      section_selection.innerHTML = "";
      // Add new options
      section_selection.insertAdjacentHTML("beforeend", options);
    });

    const departmentGuidelines = {
      "ADMIN DEPARTMENT": {
        "Floors and Other Areas": [
          "Are floors/operation site clean and clear of waste?",
          "Are floors/operation site in good condition?",
          "Are floors free from protruding objects such as nails, sharp corners, open cabinet drawers, trailing electrical wires?",
          "Are all areas without dust deposits?",
          "Is the workplace lighting adequate?",
        ],
        "Equipment Maintenance": [
          "Is equipment in good working order, with all necessary safety features operational or in place?",
          "Is there no damaged equipment/outdated in the floor area?",
          "Are tools and machinery inspected regularly for wear or leaks?",
          "Is equipment repaired promptly?",
          "Are drip pans or absorbent materials available and can be used if leaks cannot be stopped at the source?",
          "Are machines and tools cleaned regularly?",
        ],
        "Waste Disposal": [
          "Are there adequate numbers of containers?",
          "Are there separate and approved containers for toxic and flammable waste?",
          "Are waste containers located where the waste is produced?",
          "Are waste containers emptied regularly?",
          "Are toxic and flammable waste chemicals handled properly?",
        ],
        "Storage/Cabinet": [
          "Are zoning of materials properly observed?",
          "Are storage areas safe and accessible?",
          "Is material stacked securely, stable, or interlocked if possible?",
          "Are materials stored in areas that do not obstruct fire escapes, exits, or firefighting equipment?",
          "Are materials stored in areas that do not interfere with workers or the flow of operation?",
          "Are bins or racks provided where material cannot be piled?",
          "Are materials not in use properly piled?",
          "Are all storage areas clearly marked?",
          "Do workers understand material storage and handling procedures?",
          "Are records properly compiled and archived and can be immediately retrieved?",
          "Are obsolete records properly tagged and discarded if beyond retention period?",
        ],
        "Fire Prevention": [
          "Are electrical wirings, junction boxes, outlets, and switches properly covered and not exposed?",
          "Are combustible and flammable materials present only in the quantities needed for the job at hand?",
          "Are hazardous materials stored in approved containers and away from ignition sources?",
          "Are fire extinguishers inspected and located along commonly traveled routes and close to possible ignition sources?",
          "Are oily or greasy rags placed in metal containers and disposed regularly?",
        ],
        "Dust and Dirt Removal": [
          "Is sufficient ventilation in place to (1) provide good operator visibility, (2) prevent dust from settling and accumulating in the room, (3) reduce dust concentrations, and (4) prevent the escape of contaminants into adjacent work areas or the environment?",
          "Are dust residues cleaned at regular intervals and in areas that may be normally overlooked (e.g., overhead)?",
        ],
        "Sanitation Facility": [
          "Are toilets clean, serviceable, and adequate in number at the worksite?",
        ],
      },
      "ACCOUNTING DEPARTMENT": {
        "Floors and Other Areas": [
          "Are floors/operation site clean and clear of waste?",
          "Are floors/operation site in good condition?",
          "Are floors free from protruding objects such as nails, sharp corners, open cabinet drawers, trailing electrical wires?",
          "Are all areas without dust deposits?",
          "Is the workplace lighting adequate?",
        ],
        "Equipment Maintenance": [
          "Is equipment in good working order, with all necessary safety features operational or in place?",
          "Is there no damaged equipment/outdated in the floor area?",
          "Are tools and machinery inspected regularly for wear or leaks?",
          "Is equipment repaired promptly?",
          "Are drip pans or absorbent materials available and can be used if leaks cannot be stopped at the source?",
          "Are machines and tools cleaned regularly?",
        ],
        "Waste Disposal": [
          "Are there adequate numbers of containers?",
          "Are there separate and approved containers for toxic and flammable waste?",
          "Are waste containers located where the waste is produced?",
          "Are waste containers emptied regularly?",
          "Are toxic and flammable waste chemicals handled properly?",
        ],
        "Storage/Cabinet": [
          "Are zoning of materials properly observed?",
          "Are storage areas safe and accessible?",
          "Is material stacked securely, stable, or interlocked if possible?",
          "Are materials stored in areas that do not obstruct fire escapes, exits, or firefighting equipment?",
          "Are materials stored in areas that do not interfere with workers or the flow of operation?",
          "Are bins or racks provided where material cannot be piled?",
          "Are materials not in use properly piled?",
          "Are all storage areas clearly marked?",
          "Do workers understand material storage and handling procedures?",
          "Are records properly compiled and archived and can be immediately retrieved?",
          "Are obsolete records properly tagged and discarded if beyond retention period?",
        ],
        "Fire Prevention": [
          "Are electrical wirings, junction boxes, outlets, and switches properly covered and not exposed?",
          "Are combustible and flammable materials present only in the quantities needed for the job at hand?",
          "Are hazardous materials stored in approved containers and away from ignition sources?",
          "Are fire extinguishers inspected and located along commonly traveled routes and close to possible ignition sources?",
          "Are oily or greasy rags placed in metal containers and disposed regularly?",
        ],
        "Dust and Dirt Removal": [
          "Is sufficient ventilation in place to (1) provide good operator visibility, (2) prevent dust from settling and accumulating in the room, (3) reduce dust concentrations, and (4) prevent the escape of contaminants into adjacent work areas or the environment?",
          "Are dust residues cleaned at regular intervals and in areas that may be normally overlooked (e.g., overhead)?",
        ],
        "Sanitation Facility": [
          "Are toilets clean, serviceable, and adequate in number at the worksite?",
        ],
      },
      "MARKETING DEPARTMENT": {
        "Floors and Other Areas": [
          "Are floors/operation site clean and clear of waste?",
          "Are floors/operation site in good condition?",
          "Are floors free from protruding objects such as nails, sharp corners, open cabinet drawers, trailing electrical wires?",
          "Are all areas without dust deposits?",
          "Is the workplace lighting adequate?",
        ],
        "Equipment Maintenance": [
          "Is equipment in good working order, with all necessary safety features operational or in place?",
          "Is there no damaged equipment/outdated in the floor area?",
          "Are tools and machinery inspected regularly for wear or leaks?",
          "Is equipment repaired promptly?",
          "Are drip pans or absorbent materials available and can be used if leaks cannot be stopped at the source?",
          "Are machines and tools cleaned regularly?",
        ],
        "Waste Disposal": [
          "Are there adequate numbers of containers?",
          "Are there separate and approved containers for toxic and flammable waste?",
          "Are waste containers located where the waste is produced?",
          "Are waste containers emptied regularly?",
          "Are toxic and flammable waste chemicals handled properly?",
        ],
        "Storage/Cabinet": [
          "Are zoning of materials properly observed?",
          "Are storage areas safe and accessible?",
          "Is material stacked securely, stable, or interlocked if possible?",
          "Are materials stored in areas that do not obstruct fire escapes, exits, or firefighting equipment?",
          "Are materials stored in areas that do not interfere with workers or the flow of operation?",
          "Are bins or racks provided where material cannot be piled?",
          "Are materials not in use properly piled?",
          "Are all storage areas clearly marked?",
          "Do workers understand material storage and handling procedures?",
          "Are records properly compiled and archived and can be immediately retrieved?",
          "Are obsolete records properly tagged and discarded if beyond retention period?",
        ],
        "Fire Prevention": [
          "Are electrical wirings, junction boxes, outlets, and switches properly covered and not exposed?",
          "Are combustible and flammable materials present only in the quantities needed for the job at hand?",
          "Are hazardous materials stored in approved containers and away from ignition sources?",
          "Are fire extinguishers inspected and located along commonly traveled routes and close to possible ignition sources?",
          "Are oily or greasy rags placed in metal containers and disposed regularly?",
        ],
        "Dust and Dirt Removal": [
          "Is sufficient ventilation in place to (1) provide good operator visibility, (2) prevent dust from settling and accumulating in the room, (3) reduce dust concentrations, and (4) prevent the escape of contaminants into adjacent work areas or the environment?",
          "Are dust residues cleaned at regular intervals and in areas that may be normally overlooked (e.g., overhead)?",
        ],
        "Sanitation Facility": [
          "Are toilets clean, serviceable, and adequate in number at the worksite?",
        ],
      },
      "LOGISTICS DEPARTMENT": {
        "Floors and Other Areas": [
          "Are floors/operation site clean and clear of waste?",
          "Are floors/operation site in good condition?",
          "Are floors free from protruding objects such as nails, sharp corners, open cabinet drawers, trailing electrical wires?",
          "Are all areas without dust deposits?",
          "Is the workplace lighting adequate?",
        ],
        "Equipment Maintenance": [
          "Is equipment in good working order, with all necessary safety features operational or in place?",
          "Is there no damaged equipment/outdated in the floor area?",
          "Are tools and machinery inspected regularly for wear or leaks?",
          "Is equipment repaired promptly?",
          "Are drip pans or absorbent materials available and can be used if leaks cannot be stopped at the source?",
          "Are machines and tools cleaned regularly?",
        ],
        "Waste Disposal": [
          "Are there adequate numbers of containers?",
          "Are there separate and approved containers for toxic and flammable waste?",
          "Are waste containers located where the waste is produced?",
          "Are waste containers emptied regularly?",
          "Are toxic and flammable waste chemicals handled properly?",
        ],
        "Storage/Cabinet": [
          "Are zoning of materials properly observed?",
          "Are storage areas safe and accessible?",
          "Is material stacked securely, stable, or interlocked if possible?",
          "Are materials stored in areas that do not obstruct fire escapes, exits, or firefighting equipment?",
          "Are materials stored in areas that do not interfere with workers or the flow of operation?",
          "Are bins or racks provided where material cannot be piled?",
          "Are materials not in use properly piled?",
          "Are all storage areas clearly marked?",
          "Do workers understand material storage and handling procedures?",
          "Are records properly compiled and archived and can be immediately retrieved?",
          "Are obsolete records properly tagged and discarded if beyond retention period?",
        ],
        "Fire Prevention": [
          "Are electrical wirings, junction boxes, outlets, and switches properly covered and not exposed?",
          "Are combustible and flammable materials present only in the quantities needed for the job at hand?",
          "Are hazardous materials stored in approved containers and away from ignition sources?",
          "Are fire extinguishers inspected and located along commonly traveled routes and close to possible ignition sources?",
          "Are oily or greasy rags placed in metal containers and disposed regularly?",
        ],
        "Dust and Dirt Removal": [
          "Is sufficient ventilation in place to (1) provide good operator visibility, (2) prevent dust from settling and accumulating in the room, (3) reduce dust concentrations, and (4) prevent the escape of contaminants into adjacent work areas or the environment?",
          "Are dust residues cleaned at regular intervals and in areas that may be normally overlooked (e.g., overhead)?",
        ],
        "Sanitation Facility": [
          "Are toilets clean, serviceable, and adequate in number at the worksite?",
        ],
      },
      "TREATMENT DEPARTMENT": {
        "Floors and Other Areas": [
          "Are floors/operation site clean and clear of waste?",
          "Are floors/operation site in good condition?",
          "Are floors free from protruding objects such as nails, sharp corners, open cabinet drawers, trailing electrical wires?",
          "Are all areas without dust deposits?",
          "Is the workplace lighting adequate?",
        ],
        "Equipment Maintenance": [
          "Is equipment in good working order, with all necessary safety features operational or in place?",
          "Is there no damaged equipment/outdated in the floor area?",
          "Are tools and machinery inspected regularly for wear or leaks?",
          "Is equipment repaired promptly?",
          "Are drip pans or absorbent materials available and can be used if leaks cannot be stopped at the source?",
          "Are machines and tools cleaned regularly?",
        ],
        "Waste Disposal": [
          "Are there adequate numbers of containers?",
          "Are there separate and approved containers for toxic and flammable waste?",
          "Are waste containers located where the waste is produced?",
          "Are waste containers emptied regularly?",
          "Are toxic and flammable waste chemicals handled properly?",
        ],
        "Storage/Cabinet": [
          "Are zoning of materials properly observed?",
          "Are storage areas safe and accessible?",
          "Is material stacked securely, stable, or interlocked if possible?",
          "Are materials stored in areas that do not obstruct fire escapes, exits, or firefighting equipment?",
          "Are materials stored in areas that do not interfere with workers or the flow of operation?",
          "Are bins or racks provided where material cannot be piled?",
          "Are materials not in use properly piled?",
          "Are all storage areas clearly marked?",
          "Do workers understand material storage and handling procedures?",
          "Are records properly compiled and archived and can be immediately retrieved?",
          "Are obsolete records properly tagged and discarded if beyond retention period?",
        ],
        "Fire Prevention": [
          "Are electrical wirings, junction boxes, outlets, and switches properly covered and not exposed?",
          "Are combustible and flammable materials present only in the quantities needed for the job at hand?",
          "Are hazardous materials stored in approved containers and away from ignition sources?",
          "Are fire extinguishers inspected and located along commonly traveled routes and close to possible ignition sources?",
          "Are oily or greasy rags placed in metal containers and disposed regularly?",
        ],
        "Dust and Dirt Removal": [
          "Is sufficient ventilation in place to (1) provide good operator visibility, (2) prevent dust from settling and accumulating in the room, (3) reduce dust concentrations, and (4) prevent the escape of contaminants into adjacent work areas or the environment?",
          "Are dust residues cleaned at regular intervals and in areas that may be normally overlooked (e.g., overhead)?",
        ],
        "Sanitation Facility": [
          "Are toilets clean, serviceable, and adequate in number at the worksite?",
        ],
      },
      "WAREHOUSE AND RENDERING DEPARTMENT": {
        "Floors and Other Areas": [
          "Are floors/operation site clean and clear of waste?",
          "Are floors/operation site in good condition?",
          "Are floors free from protruding objects such as nails, sharp corners, open cabinet drawers, trailing electrical wires?",
          "Are all areas without dust deposits?",
          "Is the workplace lighting adequate?",
        ],
        "Equipment Maintenance": [
          "Is equipment in good working order, with all necessary safety features operational or in place?",
          "Is there no damaged equipment/outdated in the floor area?",
          "Are tools and machinery inspected regularly for wear or leaks?",
          "Is equipment repaired promptly?",
          "Are drip pans or absorbent materials available and can be used if leaks cannot be stopped at the source?",
          "Are machines and tools cleaned regularly?",
        ],
        "Waste Disposal": [
          "Are there adequate numbers of containers?",
          "Are there separate and approved containers for toxic and flammable waste?",
          "Are waste containers located where the waste is produced?",
          "Are waste containers emptied regularly?",
          "Are toxic and flammable waste chemicals handled properly?",
        ],
        "Storage/Cabinet": [
          "Are zoning of materials properly observed?",
          "Are storage areas safe and accessible?",
          "Is material stacked securely, stable, or interlocked if possible?",
          "Are materials stored in areas that do not obstruct fire escapes, exits, or firefighting equipment?",
          "Are materials stored in areas that do not interfere with workers or the flow of operation?",
          "Are bins or racks provided where material cannot be piled?",
          "Are materials not in use properly piled?",
          "Are all storage areas clearly marked?",
          "Do workers understand material storage and handling procedures?",
          "Are records properly compiled and archived and can be immediately retrieved?",
          "Are obsolete records properly tagged and discarded if beyond retention period?",
        ],
        "Fire Prevention": [
          "Are electrical wirings, junction boxes, outlets, and switches properly covered and not exposed?",
          "Are combustible and flammable materials present only in the quantities needed for the job at hand?",
          "Are hazardous materials stored in approved containers and away from ignition sources?",
          "Are fire extinguishers inspected and located along commonly traveled routes and close to possible ignition sources?",
          "Are oily or greasy rags placed in metal containers and disposed regularly?",
        ],
        "Dust and Dirt Removal": [
          "Is sufficient ventilation in place to (1) provide good operator visibility, (2) prevent dust from settling and accumulating in the room, (3) reduce dust concentrations, and (4) prevent the escape of contaminants into adjacent work areas or the environment?",
          "Are dust residues cleaned at regular intervals and in areas that may be normally overlooked (e.g., overhead)?",
        ],
        "Sanitation Facility": [
          "Are toilets clean, serviceable, and adequate in number at the worksite?",
        ],
      },
      "CONSTRUCTION DEPARTMENT": {
        "Floors and Other Areas": [
          "Are floors/operation site clean and clear of waste?",
          "Are floors/operation site in good condition?",
          "Are floors free from protruding objects such as nails, sharp corners, open cabinet drawers, trailing electrical wires?",
          "Are all areas without dust deposits?",
          "Is the workplace lighting adequate?",
        ],
        "Equipment Maintenance": [
          "Is equipment in good working order, with all necessary safety features operational or in place?",
          "Is there no damaged equipment/outdated in the floor area?",
          "Are tools and machinery inspected regularly for wear or leaks?",
          "Is equipment repaired promptly?",
          "Are drip pans or absorbent materials available and can be used if leaks cannot be stopped at the source?",
          "Are machines and tools cleaned regularly?",
        ],
        "Waste Disposal": [
          "Are there adequate numbers of containers?",
          "Are there separate and approved containers for toxic and flammable waste?",
          "Are waste containers located where the waste is produced?",
          "Are waste containers emptied regularly?",
          "Are toxic and flammable waste chemicals handled properly?",
        ],
        "Storage/Cabinet": [
          "Are zoning of materials properly observed?",
          "Are storage areas safe and accessible?",
          "Is material stacked securely, stable, or interlocked if possible?",
          "Are materials stored in areas that do not obstruct fire escapes, exits, or firefighting equipment?",
          "Are materials stored in areas that do not interfere with workers or the flow of operation?",
          "Are bins or racks provided where material cannot be piled?",
          "Are materials not in use properly piled?",
          "Are all storage areas clearly marked?",
          "Do workers understand material storage and handling procedures?",
          "Are records properly compiled and archived and can be immediately retrieved?",
          "Are obsolete records properly tagged and discarded if beyond retention period?",
        ],
        "Fire Prevention": [
          "Are electrical wirings, junction boxes, outlets, and switches properly covered and not exposed?",
          "Are combustible and flammable materials present only in the quantities needed for the job at hand?",
          "Are hazardous materials stored in approved containers and away from ignition sources?",
          "Are fire extinguishers inspected and located along commonly traveled routes and close to possible ignition sources?",
          "Are oily or greasy rags placed in metal containers and disposed regularly?",
        ],
        "Dust and Dirt Removal": [
          "Is sufficient ventilation in place to (1) provide good operator visibility, (2) prevent dust from settling and accumulating in the room, (3) reduce dust concentrations, and (4) prevent the escape of contaminants into adjacent work areas or the environment?",
          "Are dust residues cleaned at regular intervals and in areas that may be normally overlooked (e.g., overhead)?",
        ],
        "Sanitation Facility": [
          "Are toilets clean, serviceable, and adequate in number at the worksite?",
        ],
      },
      "FACILITY SERVICES MANAGEMENT DEPARTMENT": {
        "Floors and Other Areas": [
          "Are floors/operation site clean and clear of waste?",
          "Are floors/operation site in good condition?",
          "Are floors free from protruding objects such as nails, sharp corners, open cabinet drawers, trailing electrical wires?",
          "Are all areas without dust deposits?",
          "Is the workplace lighting adequate?",
        ],
        "Equipment Maintenance": [
          "Is equipment in good working order, with all necessary safety features operational or in place?",
          "Is there no damaged equipment/outdated in the floor area?",
          "Are tools and machinery inspected regularly for wear or leaks?",
          "Is equipment repaired promptly?",
          "Are drip pans or absorbent materials available and can be used if leaks cannot be stopped at the source?",
          "Are machines and tools cleaned regularly?",
        ],
        "Waste Disposal": [
          "Are there adequate numbers of containers?",
          "Are there separate and approved containers for toxic and flammable waste?",
          "Are waste containers located where the waste is produced?",
          "Are waste containers emptied regularly?",
          "Are toxic and flammable waste chemicals handled properly?",
        ],
        "Storage/Cabinet": [
          "Are zoning of materials properly observed?",
          "Are storage areas safe and accessible?",
          "Is material stacked securely, stable, or interlocked if possible?",
          "Are materials stored in areas that do not obstruct fire escapes, exits, or firefighting equipment?",
          "Are materials stored in areas that do not interfere with workers or the flow of operation?",
          "Are bins or racks provided where material cannot be piled?",
          "Are materials not in use properly piled?",
          "Are all storage areas clearly marked?",
          "Do workers understand material storage and handling procedures?",
          "Are records properly compiled and archived and can be immediately retrieved?",
          "Are obsolete records properly tagged and discarded if beyond retention period?",
        ],
        "Fire Prevention": [
          "Are electrical wirings, junction boxes, outlets, and switches properly covered and not exposed?",
          "Are combustible and flammable materials present only in the quantities needed for the job at hand?",
          "Are hazardous materials stored in approved containers and away from ignition sources?",
          "Are fire extinguishers inspected and located along commonly traveled routes and close to possible ignition sources?",
          "Are oily or greasy rags placed in metal containers and disposed regularly?",
        ],
        "Dust and Dirt Removal": [
          "Is sufficient ventilation in place to (1) provide good operator visibility, (2) prevent dust from settling and accumulating in the room, (3) reduce dust concentrations, and (4) prevent the escape of contaminants into adjacent work areas or the environment?",
          "Are dust residues cleaned at regular intervals and in areas that may be normally overlooked (e.g., overhead)?",
        ],
        "Sanitation Facility": [
          "Are toilets clean, serviceable, and adequate in number at the worksite?",
        ],
      },
    };

    let yesCount = 0;
    let noCount = 0;

    // Function to create a radio button
    function createRadioButton(index, value) {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `guideline${index}`;
      input.value = value.toLowerCase();
      input.required = true;

      // Add event listener to track changes
      input.addEventListener("change", updateCounts);

      return input;
    }

    // Function to create a remarks input
    function createRemarksInput(index) {
      const input = document.createElement("input");
      input.type = "text";
      input.name = `remarks${index}`;
      input.required = false; // Initially, set it as not required
      input.autocomplete = "off"; // Disable autocomplete

      // Add event listener to track changes in the radio buttons
      document
        .querySelectorAll(`input[name="guideline${index}"]`)
        .forEach((radio) => {
          radio.addEventListener("change", () => {
            input.required = radio.value.toLowerCase() === "no"; // Set required based on the selected option
          });
        });

      return input;
    }

    let currentIndex = 1; // Initialize the index

    // Function to generate a table row for each guideline
    function generateGuidelineRow(category, guideline) {
      const row = document.createElement("tr");

      if (!guideline) {
        const categoryHeaderCell = document.createElement("td");
        categoryHeaderCell.textContent = category;
        categoryHeaderCell.colSpan = 4;
        categoryHeaderCell.style.fontWeight = "bold";
        categoryHeaderCell.style.textAlign = "center";
        row.appendChild(categoryHeaderCell);
      } else {
        const numberCell = document.createElement("td");
        numberCell.textContent = currentIndex;

        const guidelineCell = document.createElement("td");
        guidelineCell.textContent = guideline;

        const yesInput = createRadioButton(currentIndex, "Yes");
        const noInput = createRadioButton(currentIndex, "No");
        const naInput = createRadioButton(currentIndex, "N/A");

        const remarksInput = createRemarksInput(currentIndex);

        const radioCell = document.createElement("td");
        radioCell.classList.add("radio_btn");
        const radioDiv = document.createElement("div");

        radioDiv.appendChild(yesInput);
        radioDiv.appendChild(noInput);
        radioDiv.appendChild(naInput);
        radioCell.appendChild(radioDiv);

        const remarksCell = document.createElement("td");
        const remarksDiv = document.createElement("div");
        remarksCell.appendChild(remarksDiv);
        remarksDiv.classList.add("remarks-input");
        remarksDiv.appendChild(remarksInput);

        row.appendChild(numberCell);
        row.appendChild(guidelineCell);
        row.appendChild(radioCell);
        row.appendChild(remarksCell);

        // Add event listener to radio buttons to toggle remarks input
        const updateRemarksVisibility = () => {
          remarksDiv.classList.toggle("remarks-input-show", noInput.checked);
        };

        yesInput.addEventListener("change", updateRemarksVisibility);
        noInput.addEventListener("change", updateRemarksVisibility);
        naInput.addEventListener("change", updateRemarksVisibility);

        currentIndex++; // Increment the index for the next row
      }

      return row;
    }

    // Get the safetyTable tbody element
    const safetyTableBody = document.querySelector("#safetyTable tbody");

    // Generate a table row for each guideline in the category and append to safetyTableBody
    document
      .getElementById("department_selection")
      .addEventListener("change", function () {
        const selectedDepartment = this.value; // Get the selected department value

        // Clear existing table rows
        safetyTableBody.innerHTML = "";

        // Validate if the selected department is a valid key in the guidelines object
        if (
          selectedDepartment !== "" &&
          departmentGuidelines[selectedDepartment]
        ) {
          // If a valid department is selected, generate and display guidelines for that department
          Object.keys(departmentGuidelines[selectedDepartment]).forEach(
            (category) => {
              const headerRow = generateGuidelineRow(category, "");
              safetyTableBody.appendChild(headerRow);

              departmentGuidelines[selectedDepartment][category].forEach(
                (guideline) => {
                  var counter = 0;
                  const row = generateGuidelineRow(category, guideline);
                  safetyTableBody.appendChild(row);
                  document
                    .getElementById("safety_inspection_form")
                    .querySelector("#counter").value = counter;
                }
              );
            }
          );
        }
      });

    // Function to update the counts and compute the percentage
    function updateCounts() {
      yesCount = 0;
      noCount = 0;

      document
        .querySelectorAll('.radio_btn input[type="radio"]')
        .forEach((radio) => {
          if (radio.value.toLowerCase() === "yes" && radio.checked) {
            yesCount++;
          }
          if (radio.value.toLowerCase() === "no" && radio.checked) {
            noCount++;
          }
        });
      const percentage = (yesCount / (yesCount + noCount)) * 100;

      if (isNaN(percentage)) {
        grade.value = "Safety Grade: N/A";
      } else {
        grade.value = `Safety Grade: ${percentage.toFixed(2)}%`;
      }
    }

    // Add event listener to all radio buttons
    document
      .querySelectorAll('.radio_btn input[type="radio"]')
      .forEach((radio) => {
        radio.addEventListener("change", updateCounts);
      });

    // Initialize counts and percentage on page load
    updateCounts();

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
          waste_id ==
          type_of_waste_data_list.content[c][
            findTextInArray(type_of_waste_data_list, "WASTE ID")
          ]
        ) {
          waste_code = type_of_waste_data_list.content[c][
            findTextInArray(type_of_waste_data_list, "WASTE CODE")
          ].substring(0, 4);
          break;
        } else {
          waste_code = waste_id;
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
