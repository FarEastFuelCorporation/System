document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const idf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyXPvq606vmfSlFG3nVjYuJLN8Jnv4BFGbhEmDp6e4wLL1kUQVa4kIi2dGGRKuSklT2bg/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');

        const [
            username_response,
            idf_response,
            sf_response,
            irf_response,
            employee_response,
        ] = await Promise.all([
            username_response_promise,
            idf_response_promise,
            sf_response_promise,
            irf_response_promise,
            employee_response_promise,
        ]);

        const username_data  = await username_response.json();
        const idf_data_list  = await idf_response.json();
        const sf_data_list  = await sf_response.json();
        const irf_data_list  = await irf_response.json();
        const employee_data_list  = await employee_response.json();

        // Code that depends on the fetched data
        // username_data3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");
        
        user.value = username_data.content[9][3];
        user_sidebar.innerHTML = `<u>${username_data.content[9][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[9][4];
        
        // hr_dashboard
        const regular_employee = document.querySelector("#hr_dashboard #regular_employee");
        const project_based_employee = document.querySelector("#hr_dashboard #project_based_employee");
        const subcon_employee = document.querySelector("#hr_dashboard #subcon_employee");
        const total_employee = document.querySelector("#hr_dashboard #total_employee");
        var total_employee_name = [];
        var total_employee_male = 0;
        var total_employee_female = 0;
        var regular_employee_name = [];
        var regular_employee_male = 0;
        var regular_employee_female = 0;
        var project_based_employee_name = [];
        var project_based_employee_male = 0;
        var project_based_employee_female = 0;
        var subcon_employee_name = [];
        var subcon_employee_male = 0;
        var subcon_employee_female = 0;

        for(let x = 1; x < employee_data_list.content.length; x++){
            if(employee_data_list.content[x][33] == "ACTIVE"){
                var full_name = `${employee_data_list.content[x][2]}, ${employee_data_list.content[x][3]} ${employee_data_list.content[x][4]}`
                var gender = employee_data_list.content[x][7];
                if(employee_data_list.content[x][31] == "REGULAR"){
                    if (!regular_employee_name.includes(full_name)) {
                        regular_employee_name.push(full_name);
                        if(gender == "MALE"){
                            regular_employee_male += 1;
                        }
                        else{
                            regular_employee_female += 1;
                        }
                    }
                }
                if(employee_data_list.content[x][31] == "PROJECT BASED"){
                    if (!project_based_employee_name.includes(full_name)) {
                        project_based_employee_name.push(full_name);
                        if(gender == "MALE"){
                            project_based_employee_male += 1;
                        }
                        else{
                            project_based_employee_female += 1;
                        }
                    }
                }
                if(employee_data_list.content[x][31] == "SUBCON"){
                    if (!subcon_employee_name.includes(full_name)) {
                        subcon_employee_name.push(full_name);
                        if(gender == "MALE"){
                            subcon_employee_male += 1;
                        }
                        else{
                            subcon_employee_female += 1;
                        }
                    }
                }
                if (!total_employee_name.includes(full_name)) {
                    total_employee_name.push(full_name);
                    if(gender == "MALE"){
                        total_employee_male += 1;
                    }
                    else{
                        total_employee_female += 1;
                    }
                }
            }
        }
        regular_employee.innerText = `M:${regular_employee_male}/F:${regular_employee_female}/T:${regular_employee_name.length}`
        project_based_employee.innerText = `M:${project_based_employee_male}/F:${project_based_employee_female}/T:${project_based_employee_name.length}`
        subcon_employee.innerText = `M:${subcon_employee_male}/F:${subcon_employee_female}/T:${subcon_employee_name.length}`
        total_employee.innerText = `M:${total_employee_male}/F:${total_employee_female}/T:${total_employee_name.length}`

        // attendance form
        const days = document.getElementById("days");
        const daily_rate = document.getElementById("daily_rate");
        const time_in_sched = document.getElementById("time_in_sched");
        const time_out_sched = document.getElementById("time_out_sched");
        var day_list = "";
        const day = [];
        const absent_box_input = [];
        const absent_box = [];
        const rest_day_box_input = [];
        const rest_day_box = [];
        const day_input = [];
        const rest_day_ot_box_input = [];
        const rest_day_ot_box = [];
        const regular_holiday_box_input = [];
        const regular_holiday_box = [];
        const special_holiday_box_input = [];
        const special_holiday_box = [];
        const day_name = ["","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const time_in_input = [];
        const day_break = [];
        const day_break_input = [];
        const night_break = [];
        const night_break_input = [];
        const time_out_input = [];
        const regular_hours = [];
        const night_hours = [];
        const regular_hour_rate = [];
        const night_hour_rate = [];
        const regular_rate_per_hour = [];
        const night_rate_per_hour = [];
        const regular_hours_pay = [];
        const night_hours_pay = [];
        const subtotal = [];
        const late_mins = [];
        const under_time_mins = [];
        const late_deduction = [];
        const under_time_deduction = [];
        const regular_pay = [];
        const with_ot_box = [];
        const ot_input = [];
        const ot_hours = [];
        const ot_night_hours = [];
        const ot_regular_hour_rate = [];
        const ot_night_hour_rate = [];
        const ot_rate_per_hour = [];
        const ot_night_rate_per_hour = [];
        const ot_pay = [];
        const ot_night_pay = [];
        const ot_pay_subtotal = [];
        const salary_day = [];
        const gross_salary = document.getElementById("gross_salary");
        const sss_deduction = document.getElementById("sss_deduction");
        const pag_ibig_deduction = document.getElementById("pag_ibig_deduction");
        const philhealth_deduction = document.getElementById("philhealth_deduction");
        const cash_advance = document.getElementById("cash_advance");
        const total_deductions = document.getElementById("total_deductions");
        const net_salary = document.getElementById("net_salary");

                // client_list_data
        const search_wrapper = document.getElementById("search_client");
        const input_box = search_wrapper.querySelector("input");
        const sugg_box = search_wrapper.querySelector(".autocom_box");
        const mtf_data = document.getElementById("mtf_data");
        const client_list = document.getElementById("client_list");
        var data_value = [];

        for(let x = 1; x < employee_data_list.content.length; x++){
            if(employee_data_list.content[x][33] == "ACTIVE"){
                var data_value = `${employee_data_list.content[x][2]}, ${employee_data_list.content[x][3]} ${employee_data_list.content[x][4]}`
            }
        }

        input_box.onkeyup = (e) => {
            let user_data = e.target.value;
            let empty_array = [];
            if (user_data) {
                empty_array = data_value.filter((data) => {
                    return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
                });
                empty_array = empty_array.map((data) => {
                    return '<li>' + data + '</li>';
                });
                console.log(empty_array);
                search_wrapper.classList.add("active");
                show_suggestions(empty_array);
            } else {
                search_wrapper.classList.remove("active");
            }
        };
    
        sugg_box.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                select(e.target.innerHTML);
            }
        });
    
        function select(element) {
            let select_user_data = element;
            input_box.value = select_user_data;
            console.log(input_box.value);
            search_wrapper.classList.remove("active");
            mtf_data.style.display = "block";
                
        }
    
        function show_suggestions(list) {
            let list_data;
            if (!list.length) {
                user_value = input_box.value;
                list_data = '<li>' + user_value + '</li>';
            } else {
                list_data = list.join("");
            }
            sugg_box.innerHTML = list_data;
        }

        var client_list_data_value = "";
        var data_value_counter = 1;
        for(let x = 1; x < client_list_data.content.length; x++){
            client_list_data_value += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${client_list_data.content[x][1]}</td>
                <td>${client_list_data.content[x][2]}</td>
                <td>${client_list_data.content[x][3]}</td>
                <td>${client_list_data.content[x][4]}</td>
            </tr>
            `
            data_value_counter += 1;
        }
        client_list.innerHTML = client_list_data_value

        for(let x = 1; x <= 7; x++){
            if(x == 1){
                day_list += `                        
                <div class="day" id="day${x}">
                    <div class="first_day">
                        <div class="label">ABSENT</div>
                        <div id="absent_box_input${x}">
                        <label for="absent_box${x}" class="custom-checkbox">
                        <input type="checkbox" id="absent_box${x}" name="absent_box${x}" value="YES">
                        <span class="checkmark"></span>
                        </label>
                        </div>
                        <div class="label">REST DAY</div>
                        <div id="rest_day_box_input${x}">
                            <label for="rest_day_box${x}" class="custom-checkbox">
                                <input type="checkbox" id="rest_day_box${x}" name="rest_day_box${x}" value="YES">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div id="day_input${x}">
                        <div class="first_day">
                            <div class="label">REST DAY OT</div>
                            <div id="rest_day_ot_box_input${x}">
                                <label class="custom-checkbox">
                                <input type="checkbox" id="rest_day_ot_box${x}" name="rest_day_ot_box${x}">
                                <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">REGULAR HOLIDAY</div>
                            <div id="regular_holiday_box_input${x}">
                                <label class="custom-checkbox">
                                <input type="checkbox" id="regular_holiday_box${x}" name="regular_holiday_box${x}">
                                <span class="checkmark my-2"></span>
                                </label>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">SPECIAL DAY</div>
                            <div id="special_holiday_box_input${x}">
                                <label class="custom-checkbox">
                                <input type="checkbox" id="special_holiday_box${x}" name="special_holiday_box${x}">
                                <span class="checkmark my-2"></span>
                                </label>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">DAY</div>
                            <label for="time_in${x}" class="text-center">
                                ${day_name[x]}
                            </label>
                        </div>
                        <div class="first_day">
                            <div class="label">TIME IN</div>
                            <input type="time" class="form-control" id="time_in${x}" name="time_in${x}">
                        </div>
                        <div class="first_day">
                            <div class="label">1 HOUR BREAK</div>
                            <div class="d-flex" style="justify-content: space-around;">
                                <div id="day_break_input${x}">
                                    <label for="day_break${x}" class="custom-checkbox">
                                        <input type="checkbox" id="day_break${x}" name="day_break${x}">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div id="night_break_input${x}">
                                    <label for="night_break${x}" class="custom-checkbox">
                                        <input type="checkbox" id="night_break${x}" name="night_break${x}">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">TIME OUT</div>
                            <input type="time" class="form-control" id="time_out${x}" name="time_out${x}">
                        </div>
                        <div class="first_day">
                            <div></div>
                            <div class="d-flex" style="justify-content: space-around;">
                                <div class="d-flex flex-column">
                                    <div>Ordinary</div>
                                </div>
                                <div class="d-flex flex-column">
                                    <div>/</div>
                                </div>
                                <div class="d-flex flex-column">
                                    <div>Night D.</div>
                                </div>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">HOURS</div>
                            <div class="d-flex">
                            <input type="number" class="form-control text-center" readonly id="regular_hours${x}" name="regular_hours${x}" value="0">
                            <input type="number" class="form-control text-center" readonly id="night_hours${x}" name="night_hours${x}" value="0">
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">RATE</div>
                            <div class="d-flex" style="justify-content: space-around;">
                                <div id="regular_hour_rate${x}" name="regular_hour_rate${x}">1.00</div>
                                <div id="night_hour_rate${x}" name="night_hour_rate${x}">1.10</div>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">RATE/hour</div>
                            <div class="d-flex">
                                <input type="number" class="form-control text-center" readonly id="regular_rate_per_hour${x}" name="regular_rate_per_hour${x}" value="0">
                                <input type="number" class="form-control text-center" readonly id="night_rate_per_hour${x}" name="night_rate_per_hour${x}" value="0">
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">HOURS X RATE</div>
                            <div class="d-flex">
                                <input type="number" class="form-control text-center" readonly id="regular_hours_pay${x}" name="regular_hours_pay${x}" value="0">
                                <input type="number" class="form-control text-center" readonly id="night_hours_pay${x}" name="night_hours_pay${x}" value="0">
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">SUBTOTAL</div>
                            <input type="number" class="form-control text-center" readonly id="subtotal${x}" name="subtotal${x}" value="0">
                        </div>
                        <div class="first_day">
                            <div class="label">LATE (mins)</div>
                            <input type="number" class="form-control text-center" readonly id="late_mins${x}" name="late_mins${x}" value="0">                        
                        </div>
                        <div class="first_day">
                            <div class="label">UNDERTIME (mins)</div>
                                <input type="number" class="form-control text-center" readonly id="under_time_mins${x}" name="under_time_mins${x}" value="0">
                            </div>
                        <div class="first_day">
                            <div class="label">LATE DEDUCTION</div>
                                <input type="number" class="form-control text-center" readonly id="late_deduction${x}" name="late_deduction${x}" value="0">
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">UNDERTIME DEDUCTION</div>
                            <input type="number" class="form-control text-center" readonly id="under_time_deduction${x}" name="under_time_deduction${x}" value="0">
                        </div>
                        <div class="first_day">
                            <div class="label">8 HOUR PAY</div>
                            <input type="number" class="form-control text-center" readonly id="regular_pay${x}" name="regular_pay${x}" value="0">
                        </div>
                        <div class="first_day">
                            <div class="label">WITH OT SLIP</div>
                            <label for="with_ot_box${x}" class="custom-checkbox">
                                <input type="checkbox" id="with_ot_box${x}" name="with_ot_box${x}">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="ot_input${x}" class="disabled">
                            <div class="first_day">
                                <div class="label">OT HOURS</div>
                                <div class="d-flex">
                                    <input type="number" class="form-control text-center" readonly id="ot_hours${x}" name="ot_hours${x}" value="0">
                                    <input type="number" class="form-control text-center" readonly id="ot_night_hours${x}" name="ot_night_hours${x}" value="0">
                                </div>
                            </div>
                            <div class="first_day">
                                <div class="label">OT RATE</div>                                
                                <div class="d-flex" style="justify-content: space-around;">
                                    <div id="ot_regular_hour_rate${x}" name="ot_regular_hour_rate${x}">1.25</div>
                                    <div id="ot_night_hour_rate${x}" name="ot_night_hour_rate${x}">1.375</div>
                                </div>
                            </div>
                            <div class="first_day">
                                <div class="label">OT RATE/hour</div>
                                <div class="d-flex">
                                    <input type="number" class="form-control text-center" readonly id="ot_rate_per_hour${x}" name="ot_rate_per_hour${x}" value="0">
                                    <input type="number" class="form-control text-center" readonly id="ot_night_rate_per_hour${x}" name="ot_night_rate_per_hour${x}" value="0">
                                </div>
                            </div>
                            <div class="first_day">
                                <div class="label">OT HOURS X RATE</div>   
                                <div class="d-flex">
                                    <input type="number" class="form-control text-center" readonly id="ot_pay${x}" name="ot_pay${x}" value="0">
                                    <input type="number" class="form-control text-center" readonly id="ot_night_pay${x}" name="ot_night_pay${x}" value="0">
                                </div>
                            </div>
                            <div class="first_day">
                                <div class="label">OT PAY</div>
                                <input type="number" class="form-control text-center" readonly id="ot_pay_subtotal${x}" name="ot_pay_subtotal${x}" value="0">
                            </div>
                            </div>
                        <div class="first_day">
                            <div class="label">SALARY / DAY</div>
                            <input type="number" class="form-control text-center" readonly id="salary_day${x}" name="salary_day${x}" value="0">
                        </div>
                    </div>
                </div>`    
            }
            else{
                day_list += `                        
                <div class="day" id="day${x}">
                    <div id="absent_box_input${x}">
                        <label for="absent_box${x}" class="custom-checkbox">
                            <input type="checkbox" id="absent_box${x}" name="absent_box${x}" value="YES">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div id="rest_day_box_input${x}">
                    <label for="rest_day_box${x}" class="custom-checkbox">
                    <input type="checkbox" id="rest_day_box${x}" name="rest_day_box${x}" value="YES">
                    <span class="checkmark"></span>
                    </label>
                    </div>
                    <div id="day_input${x}">
                        <div id="rest_day_ot_box_input${x}">
                            <label class="custom-checkbox">
                            <input type="checkbox" id="rest_day_ot_box${x}" name="rest_day_ot_box${x}">
                            <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="regular_holiday_box_input${x}">
                            <label class="custom-checkbox">
                            <input type="checkbox" id="regular_holiday_box${x}" name="regular_holiday_box${x}">
                            <span class="checkmark my-2"></span>
                            </label>
                        </div>
                        <div id="special_holiday_box_input${x}">
                            <label class="custom-checkbox">
                            <input type="checkbox" id="special_holiday_box${x}" name="special_holiday_box${x}">
                            <span class="checkmark my-2"></span>
                            </label>
                        </div>
                        <div class="text-center">
                            <label for="time_in${x}" class="text-center">
                                ${day_name[x]}
                            </label>
                        </div>
                        <input type="time" class="form-control" id="time_in${x}" name="time_in${x}">
                        <div class="d-flex" style="justify-content: space-around;">
                            <div id="day_break_input${x}">
                                <label for="day_break${x}" class="custom-checkbox">
                                    <input type="checkbox" id="day_break${x}" name="day_break${x}">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div id="night_break_input${x}">
                                <label for="night_break${x}" class="custom-checkbox">
                                    <input type="checkbox" id="night_break${x}" name="night_break${x}">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <input type="time" class="form-control" id="time_out${x}" name="time_out${x}">
                        <div class="d-flex" style="justify-content: space-around;">
                            <div class="d-flex flex-column">
                                <div>Ordinary</div>
                            </div>
                            <div class="d-flex flex-column">
                                <div>/</div>
                            </div>
                            <div class="d-flex flex-column">
                                <div>Night D.</div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <input type="number" class="form-control text-center" readonly id="regular_hours${x}" name="regular_hours${x}" value="0">
                            <input type="number" class="form-control text-center" readonly id="night_hours${x}" name="night_hours${x}" value="0">
                        </div>
                        <div class="d-flex" style="justify-content: space-around;">
                            <div id="regular_hour_rate${x}" name="regular_hour_rate${x}">1.00</div>
                            <div id="night_hour_rate${x}" name="night_hour_rate${x}">1.10</div>
                        </div>
                        <div class="d-flex">
                            <input type="number" class="form-control text-center" readonly id="regular_rate_per_hour${x}" name="regular_rate_per_hour${x}" value="0">
                            <input type="number" class="form-control text-center" readonly id="night_rate_per_hour${x}" name="night_rate_per_hour${x}" value="0">
                        </div>
                        <div class="d-flex">
                            <input type="number" class="form-control text-center" readonly id="regular_hours_pay${x}" name="regular_hours_pay${x}" value="0">
                            <input type="number" class="form-control text-center" readonly id="night_hours_pay${x}" name="night_hours_pay${x}" value="0">
                        </div>
                        <input type="number" class="form-control text-center" readonly id="subtotal${x}" name="subtotal${x}" value="0">
                        <input type="number" class="form-control text-center" readonly id="late_mins${x}" name="late_mins${x}" value="0">
                        <input type="number" class="form-control text-center" readonly id="under_time_mins${x}" name="under_time_mins${x}" value="0">
                        <input type="number" class="form-control text-center" readonly id="late_deduction${x}" name="late_deduction${x}" value="0">
                        <input type="number" class="form-control text-center" readonly id="under_time_deduction${x}" name="under_time_deduction${x}" value="0">
                        <input type="number" class="form-control text-center" readonly id="regular_pay${x}" name="regular_pay${x}" value="0">
                        <label for="with_ot_box${x}" class="custom-checkbox">
                        <input type="checkbox" id="with_ot_box${x}" name="with_ot_box${x}">
                        <span class="checkmark"></span>
                        </label>
                        <div id="ot_input${x}" class="disabled">
                            <div class="d-flex">
                                <input type="number" class="form-control text-center" readonly id="ot_hours${x}" name="ot_hours${x}" value="0">
                                <input type="number" class="form-control text-center" readonly id="ot_night_hours${x}" name="ot_night_hours${x}" value="0">
                            </div>
                            <div class="d-flex" style="justify-content: space-around;">
                                <div id="ot_regular_hour_rate${x}" name="ot_regular_hour_rate${x}">1.25</div>
                                <div id="ot_night_hour_rate${x}" name="ot_night_hour_rate${x}">1.375</div>
                            </div>                       
                            <div class="d-flex">
                                <input type="number" class="form-control text-center" readonly id="ot_rate_per_hour${x}" name="ot_rate_per_hour${x}" value="0">
                                <input type="number" class="form-control text-center" readonly id="ot_night_rate_per_hour${x}" name="ot_night_rate_per_hour${x}" value="0">
                            </div>
                            <div class="d-flex">
                                <input type="number" class="form-control text-center" readonly id="ot_pay${x}" name="ot_pay${x}" value="0">
                                <input type="number" class="form-control text-center" readonly id="ot_night_pay${x}" name="ot_night_pay${x}" value="0">
                            </div>
                            <input type="number" class="form-control text-center" readonly id="ot_pay_subtotal${x}" name="ot_pay_subtotal${x}" value="0">
                        </div>
                        <input type="number" class="form-control text-center" readonly id="salary_day${x}" name="salary_day${x}" value="0">
                    </div>
                </div>`    
            }
        }
        days.innerHTML = day_list;
        
        for (let x = 1; x <= 7; x++) {
            day[x] = document.getElementById(`day${x}`);
            absent_box_input[x] = document.querySelector(`#absent_box_input${x}`);
            absent_box[x] = document.querySelector(`#absent_box${x}`);
            rest_day_box_input[x] = document.querySelector(`#rest_day_box_input${x}`);
            rest_day_box[x] = document.querySelector(`#rest_day_box${x}`);
            day_input[x] = document.querySelector(`#day_input${x}`);
            rest_day_ot_box_input[x] = document.querySelector(`#rest_day_ot_box_input${x}`);
            rest_day_ot_box[x] = document.querySelector(`#rest_day_ot_box${x}`);
            regular_holiday_box_input[x] = document.querySelector(`#regular_holiday_box_input${x}`);
            regular_holiday_box[x] = document.querySelector(`#regular_holiday_box${x}`);
            special_holiday_box_input[x] = document.querySelector(`#special_holiday_box_input${x}`);
            special_holiday_box[x] = document.querySelector(`#special_holiday_box${x}`);
            time_in_input[x] = document.querySelector(`#time_in${x}`);
            day_break[x] = document.querySelector(`#day_break${x}`);
            day_break_input[x] = document.querySelector(`#day_break_input${x}`);
            night_break[x] = document.querySelector(`#night_break${x}`);
            night_break_input[x] = document.querySelector(`#night_break_input${x}`);
            time_out_input[x] = document.querySelector(`#time_out${x}`);
            regular_hours[x] = document.querySelector(`#regular_hours${x}`);
            night_hours[x] = document.querySelector(`#night_hours${x}`);
            regular_hour_rate[x] = document.querySelector(`#regular_hour_rate${x}`);
            night_hour_rate[x] = document.querySelector(`#night_hour_rate${x}`);
            regular_rate_per_hour[x] = document.querySelector(`#regular_rate_per_hour${x}`);
            night_rate_per_hour[x] = document.querySelector(`#night_rate_per_hour${x}`);
            regular_hours_pay[x] = document.querySelector(`#regular_hours_pay${x}`);
            night_hours_pay[x] = document.querySelector(`#night_hours_pay${x}`);
            subtotal[x] = document.querySelector(`#subtotal${x}`);
            late_mins[x] = document.querySelector(`#late_mins${x}`);
            under_time_mins[x] = document.querySelector(`#under_time_mins${x}`);
            late_deduction[x] = document.querySelector(`#late_deduction${x}`);
            under_time_deduction[x] = document.querySelector(`#under_time_deduction${x}`);
            regular_pay[x] = document.querySelector(`#regular_pay${x}`);
            with_ot_box[x] = document.querySelector(`#with_ot_box${x}`);
            ot_input[x] = document.querySelector(`#ot_input${x}`);
            ot_hours[x] = document.querySelector(`#ot_hours${x}`);
            ot_night_hours[x] = document.querySelector(`#ot_night_hours${x}`);
            ot_regular_hour_rate[x] = document.querySelector(`#ot_regular_hour_rate${x}`);
            ot_night_hour_rate[x] = document.querySelector(`#ot_night_hour_rate${x}`);
            ot_rate_per_hour[x] = document.querySelector(`#ot_rate_per_hour${x}`);
            ot_night_rate_per_hour[x] = document.querySelector(`#ot_night_rate_per_hour${x}`);
            ot_pay[x] = document.querySelector(`#ot_pay${x}`);
            ot_night_pay[x] = document.querySelector(`#ot_night_pay${x}`);
            ot_pay_subtotal[x] = document.querySelector(`#ot_pay_subtotal${x}`);
            salary_day[x] = document.querySelector(`#salary_day${x}`);
            
            // Use a function to create a new scope for each iteration
            
            function calculateAll(){
                regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1);
                night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.1);
                if (with_ot_box[x].checked == true) {
                    ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.25);
                    ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.375);
                }
                else{
                    ot_rate_per_hour[x].value = 0;
                    ot_night_rate_per_hour[x].value = 0;
                }
                calculateHours();
                regular_hours_pay[x].value = (parseFloat(regular_hours[x].value) * parseFloat(regular_rate_per_hour[x].value));
                night_hours_pay[x].value = (parseFloat(night_hours[x].value) * parseFloat(night_rate_per_hour[x].value));
                subtotal[x].value = (parseFloat(regular_hours_pay[x].value) + parseFloat(night_hours_pay[x].value)).toFixed(2);
                late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 8 / 60));
                under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 8 / 60));
                regular_pay[x].value = (parseFloat(subtotal[x].value) - (parseFloat(late_deduction[x].value) + parseFloat(under_time_deduction[x].value))).toFixed(2);
                ot_pay[x].value = (parseFloat(ot_hours[x].value) * parseFloat(ot_rate_per_hour[x].value));
                ot_night_pay[x].value = (parseFloat(ot_night_hours[x].value) * parseFloat(ot_night_rate_per_hour[x].value));
                ot_pay_subtotal[x].value = (parseFloat(ot_pay[x].value) + parseFloat(ot_night_pay[x].value)).toFixed(2);
                salary_day[x].value = (parseFloat(regular_pay[x].value) + parseFloat(ot_pay_subtotal[x].value)).toFixed(2);
            }

            function calculateSalary(){
                var net_income = 0;
                for(let y = 1; y <= 7; y++){
                    net_income += parseFloat(salary_day[y].value)
                }
                gross_salary.value = net_income;

                var deduction = 0;
                deduction = parseFloat(sss_deduction.value) + parseFloat(pag_ibig_deduction.value) + parseFloat(philhealth_deduction.value) + parseFloat(cash_advance.value);
            
                total_deductions.value = deduction;
                net_salary.value = net_income - deduction
            }

            function calculateHours(){
                const timeInValue = time_in_sched.value;
                const timeOutValue = time_out_sched.value;
                const night_hours_start = 22;
                let night_hours_end = 6; // 6 am
                
                let time_start = parseFloat(timeInValue.slice(0, 2));
                let time_end = parseFloat(timeOutValue.slice(0, 2));
                
                let reg_hours = 0;
                let nd_hours = 0;
                
                // Calculate regular and night differential hours
                // 24 hours
                if (time_start == time_end) {
                    reg_hours = 16;
                    nd_hours = 8;
                }
                else if (time_start > time_end) {
                    time_end += 24;
                    night_hours_end += 24;
                    // time_start < time_end
                    // time_start 1-5 / time_end 22-30
                    if (time_start < night_hours_end - 24 && time_end < night_hours_end) {
                        reg_hours = (time_end - time_start) - (((night_hours_end - 24) - time_start) + (time_end - night_hours_start));
                        nd_hours = ((night_hours_end - 24) - time_start) + (time_end - night_hours_start);
                    } 
                    // time_start 6-22 / time_end 22-30
                    if (time_start >= night_hours_end - 24 && time_start <= night_hours_start && time_end <= night_hours_end) {
                        reg_hours = (time_end - time_start) - (time_end - night_hours_start);
                        nd_hours = time_end - night_hours_start;
                    } 
                    // time_start 6-22 / time_end 31-45
                    if (time_start >= night_hours_end - 24 && time_end > night_hours_end && time_end <= night_hours_start + 24) {
                        reg_hours = (time_end - time_start) - (night_hours_end - night_hours_start);
                        nd_hours = night_hours_end - night_hours_start;
                    } 
                    // time_start 22-23 / time_end 22-30
                    if (time_start >= night_hours_start && time_end <= night_hours_end) {
                        nd_hours = (time_end - night_hours_start) - (time_start - night_hours_start);
                    }
                    // time_start 22-23 / time_end 31-45
                    if (time_start >= night_hours_start && time_end > night_hours_end) {
                        reg_hours = (time_end - time_start) - (night_hours_end - time_start);
                        nd_hours = night_hours_end - time_start;
                    } 
                }
                else if (time_start < time_end) {
                    // time_start < time_end
                    // time_start 0-5 / time_end 0-6
                    if (time_start < night_hours_end && time_end <= night_hours_end) {
                        nd_hours = time_end - time_start;
                    }
                    // time_start 0-5 / time_end 7-22
                    else if (time_start < night_hours_end && time_end <= night_hours_start) {
                        reg_hours = (time_end - time_start) - (night_hours_end - time_start);
                        nd_hours = night_hours_end - time_start;
                    }
                    // time_start 0-5 / time_end 23
                    else if (time_start < night_hours_end && time_end > night_hours_start) {
                        reg_hours = (time_end - time_start) - ((night_hours_end - time_start) + (time_end - night_hours_start));
                        nd_hours = (night_hours_end - time_start) + (time_end - night_hours_start);
                    }
                    // time_start 6-21 / time_end 6-22
                    else if (time_start < night_hours_start && time_end <= night_hours_start) {
                        reg_hours = time_end - time_start;
                    }
                    // time_start 6-21 / time_end 23-30
                    else if (time_start < night_hours_start && time_end > night_hours_start) {
                        reg_hours = (time_end - time_start) - (time_end - night_hours_start);
                        nd_hours = time_end - night_hours_start;
                    }
                    // time_start 22 / time_end 23
                    else if (time_start >= night_hours_start && time_end > night_hours_start) {
                        nd_hours = time_end - night_hours_start;
                    }
                }
                else {
                    let reg_hours = 0;
                    let nd_hours = 0;
                }
                if (day_break[x].checked == true) {
                    regular_hours[x].value = reg_hours - 1;
                }
                else{
                    regular_hours[x].value = reg_hours;
                }
                if (night_break[x].checked == true) {
                    night_hours[x].value = nd_hours - 1;
                }
                else{
                    night_hours[x].value = nd_hours;
                }
            }
            
            function calculateOvertimeHours(){
                const scheduleTimeIn = parseFloat(roundDownTime(time_in_sched.value));
                const scheduleTimeOut = parseFloat(roundDownTime(time_out_sched.value));
                var actualTime = parseFloat(roundDownTime(time_out_input[x].value));
                const NIGHT_START_HOUR = 22; // 10 PM (24-hour format)
                var NIGHT_END_HOUR = 6;    // 6 AM (24-hour format)
                var regularOvertimeHours = 0;
                var nightDifferentialOvertimeHours = 0;
                
                if(actualTime > scheduleTimeOut || actualTime <= scheduleTimeIn){
                    if (actualTime == scheduleTimeOut) {
                        regularOvertimeHours = 0;
                        nightDifferentialOvertimeHours = 0;
                    }
                    // Handle cases where actualTime crosses midnight
                    else if (actualTime < scheduleTimeOut) {
                        console.log("bracket 1");
                        actualTime += 24;
                        NIGHT_END_HOUR += 24;
                        // start 0.5 - 5.5 end 22.5 - 30
                        if(scheduleTimeOut < NIGHT_END_HOUR - 24 && actualTime > NIGHT_START_HOUR && actualTime <= NIGHT_END_HOUR){
                            regularOvertimeHours = (actualTime - scheduleTimeOut) - (((NIGHT_END_HOUR -24 ) - scheduleTimeOut) + (actualTime - NIGHT_START_HOUR));
                            nightDifferentialOvertimeHours = ((NIGHT_END_HOUR -24 ) - scheduleTimeOut) + (actualTime - NIGHT_START_HOUR);
                        }
                        // start 6 - 21.5 end 22.5 - 30
                        else if(scheduleTimeOut >= NIGHT_END_HOUR - 24 && scheduleTimeOut <= NIGHT_START_HOUR && actualTime > NIGHT_START_HOUR && actualTime <= NIGHT_END_HOUR){
                            regularOvertimeHours = (actualTime - scheduleTimeOut) - (actualTime - NIGHT_START_HOUR);
                            nightDifferentialOvertimeHours = actualTime - NIGHT_START_HOUR;
                        }
                        // start 6 - 21.5 end 30.5 - 46
                        else if(scheduleTimeOut >= NIGHT_END_HOUR - 24 && scheduleTimeOut <= NIGHT_START_HOUR && actualTime > NIGHT_END_HOUR && actualTime <= NIGHT_START_HOUR + 24){
                            regularOvertimeHours = (actualTime - scheduleTimeOut) - (NIGHT_END_HOUR - NIGHT_START_HOUR);
                            nightDifferentialOvertimeHours = NIGHT_END_HOUR - NIGHT_START_HOUR;
                        }
                        // start 22 - 23.5 end 22.5 - 30
                        else if(scheduleTimeOut >= NIGHT_START_HOUR && actualTime > NIGHT_START_HOUR && actualTime <= NIGHT_END_HOUR){
                            nightDifferentialOvertimeHours = actualTime - scheduleTimeOut;
                        }
                        // start 22 - 23.5 end 30.5 - 46
                        else if(scheduleTimeOut >= NIGHT_START_HOUR && actualTime > NIGHT_END_HOUR && actualTime <= NIGHT_START_HOUR + 24){
                            regularOvertimeHours = (actualTime - scheduleTimeOut) - (NIGHT_END_HOUR - scheduleTimeOut);
                            nightDifferentialOvertimeHours = NIGHT_END_HOUR - scheduleTimeOut;
                        }
                        // start 22 - 23.5 end 46.5 - 47.5
                        else if(scheduleTimeOut >= NIGHT_START_HOUR && actualTime >= NIGHT_START_HOUR + 24){
                            regularOvertimeHours = (actualTime - scheduleTimeOut) - ((NIGHT_END_HOUR - scheduleTimeOut) + (actualTime - (NIGHT_START_HOUR + 24)));
                            nightDifferentialOvertimeHours = (NIGHT_END_HOUR - scheduleTimeOut) + (actualTime - (NIGHT_START_HOUR + 24));
                        }
                    }
                    else if (actualTime > scheduleTimeOut) {
                        // start 0 - 5.5 end 0.5 - 6
                        if(scheduleTimeOut < NIGHT_END_HOUR && actualTime <= NIGHT_END_HOUR){
                            nightDifferentialOvertimeHours = actualTime - scheduleTimeOut;
                        }
                        // start 0 - 5.5 end 6.5 - 22
                        else if(scheduleTimeOut < NIGHT_END_HOUR && actualTime > NIGHT_END_HOUR && actualTime <= NIGHT_START_HOUR){
                            regularOvertimeHours = (actualTime - scheduleTimeOut) - (NIGHT_END_HOUR - scheduleTimeOut);
                            nightDifferentialOvertimeHours = NIGHT_END_HOUR - scheduleTimeOut;
                        }
                        // start 0 - 5.5 end 22.5 - 23.5
                        else if(scheduleTimeOut < NIGHT_END_HOUR && actualTime > NIGHT_START_HOUR){
                            regularOvertimeHours = (actualTime - scheduleTimeOut) - ((NIGHT_END_HOUR - scheduleTimeOut) + (actualTime - NIGHT_START_HOUR));
                            nightDifferentialOvertimeHours = (NIGHT_END_HOUR - scheduleTimeOut) + (actualTime - NIGHT_START_HOUR);
                        }
                        // start 6 - 21.5 end 6.5 - 22 
                        else if(scheduleTimeOut >= NIGHT_END_HOUR && actualTime <= NIGHT_START_HOUR){
                            regularOvertimeHours = actualTime - scheduleTimeOut;
                        }
                        // start 6 - 21.5 end 22.5 - 23.5
                        else if(scheduleTimeOut >= NIGHT_END_HOUR && scheduleTimeOut <= NIGHT_START_HOUR && actualTime > NIGHT_START_HOUR){
                            regularOvertimeHours = (actualTime - scheduleTimeOut) - (actualTime - NIGHT_START_HOUR);
                            nightDifferentialOvertimeHours = actualTime - NIGHT_START_HOUR;
                        }
                        // start 22 - 23 end 22.5 - 23.5
                        else if(scheduleTimeOut >= NIGHT_START_HOUR && actualTime > NIGHT_START_HOUR){
                            nightDifferentialOvertimeHours = actualTime - scheduleTimeOut;
                        }
                    }
                              
                    if (with_ot_box[x].checked == true) {
                        ot_hours[x].value = regularOvertimeHours;
                        ot_night_hours[x].value = nightDifferentialOvertimeHours;
                    }
                }
                else{
                    if (with_ot_box[x].checked == true) {
                        ot_hours[x].value = 0;
                        ot_night_hours[x].value = 0;
                    }
                }
            }
                                    
            time_out_sched.addEventListener("change", () => {
                calculateAll();
                calculateSalary();
            })           


            daily_rate.addEventListener("keyup", () => {                
                calculateAll();
                calculateSalary();
            });
            
            absent_box[x].addEventListener("click", () => {
                if (absent_box[x].checked == true) {
                    day_input[x].classList.add('disabled');
                    rest_day_box_input[x].classList.add('disabled');
                    rest_day_box[x].checked = false;
                    rest_day_ot_box[x].checked = false;
                    regular_holiday_box[x].checked = false;
                    special_holiday_box[x].checked = false;
                    const day_input_number_elements = day_input[x].querySelectorAll("input[type='number']");
                    const day_input_time_elements = day_input[x].querySelectorAll("input[type='time']");
                    day_input_number_elements.forEach((inputElement) => {
                        inputElement.value = "0";
                    });
                    day_input_time_elements.forEach((inputElement) => {
                        inputElement.value = "";
                    });
                    calculateSalary();
                }
                else {
                    day_input[x].classList.remove('disabled');
                    rest_day_box_input[x].classList.remove('disabled');
                    calculateAll();
                    calculateSalary();
                }
            });
            
            rest_day_box[x].addEventListener("click", () => {
                if (rest_day_box[x].checked == true) {
                    day_input[x].classList.add('disabled');
                    absent_box_input[x].classList.add('disabled');
                    absent_box[x].checked = false;
                    rest_day_ot_box[x].checked = false;
                    regular_holiday_box[x].checked = false;
                    special_holiday_box[x].checked = false;
                    const day_input_number_elements = day_input[x].querySelectorAll("input[type='number']");
                    const day_input_time_elements = day_input[x].querySelectorAll("input[type='time']");
                    day_input_number_elements.forEach((inputElement) => {
                        inputElement.value = "0";
                    });
                    day_input_time_elements.forEach((inputElement) => {
                        inputElement.value = "";
                    });
                    calculateSalary();
                }
                else {
                    day_input[x].classList.remove('disabled');
                    absent_box_input[x].classList.remove('disabled');
                    calculateAll();
                    calculateSalary();
                }
            });
            
            rest_day_ot_box[x].addEventListener("click", () => {
                if (rest_day_ot_box[x].checked == true) {
                    absent_box_input[x].classList.add('disabled');
                    rest_day_box_input[x].classList.add('disabled');
                    regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.3);
                    night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.43);
                    regular_hour_rate[x].innerText = "1.30";
                    night_hour_rate[x].innerText = "1.43";
                    ot_regular_hour_rate[x].innerText = "1.69";
                    ot_night_hour_rate[x].innerText = "1.859";
                    if (with_ot_box[x].checked == true) {
                        ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.69);
                        ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.859);
                    }
                    if (special_holiday_box[x].checked == true) {
                        regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.5);
                        night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.65);
                        regular_hour_rate[x].innerText = "1.5";
                        night_hour_rate[x].innerText = "1.65";
                        ot_regular_hour_rate[x].innerText = "1.95";
                        ot_night_hour_rate[x].innerText = "2.145";
                        if (with_ot_box[x].checked == true) {
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.95);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.145);
                        }
                    }
                    if (regular_holiday_box[x].checked == true) {
                        regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.6);
                        night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.86);
                        regular_hour_rate[x].innerText = "2.6";
                        night_hour_rate[x].innerText = "2.86";
                        ot_regular_hour_rate[x].innerText = "3.38";
                        ot_night_hour_rate[x].innerText = "3.718";
                        if (with_ot_box[x].checked == true) {
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 3.38);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 3.718);
                        }
                    }
                } 
                else {
                    absent_box_input[x].classList.remove('disabled');
                    rest_day_box_input[x].classList.remove('disabled');
                    regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1);
                    night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.1);
                    regular_hour_rate[x].innerText = "1.00";
                    night_hour_rate[x].innerText = "1.10";
                    ot_regular_hour_rate[x].innerText = "1.25";
                    ot_night_hour_rate[x].innerText = "1.375";
                    if (with_ot_box[x].checked == true) {
                        ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.25);
                        ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.375);
                    }
                    if (special_holiday_box[x].checked == true) {
                        regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.3);
                        night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.43);
                        regular_hour_rate[x].innerText = "1.30";
                        night_hour_rate[x].innerText = "1.43";
                        ot_regular_hour_rate[x].innerText = "1.69";
                        ot_night_hour_rate[x].innerText = "1.859";
                        if (with_ot_box[x].checked == true) {
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.69);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.859);
                        }
                        else{
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.69);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.859);
                        }
                    }
                    if (regular_holiday_box[x].checked == true) {
                        regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2);
                        night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.2);
                        regular_hour_rate[x].innerText = "2.00";
                        night_hour_rate[x].innerText = "2.20";
                        ot_regular_hour_rate[x].innerText = "2.60";
                        ot_night_hour_rate[x].innerText = "2.86";
                        if (with_ot_box[x].checked == true) {
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.6);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.86);
                        }
                        else{
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.6);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.86);
                        }
                    }
                }
                calculateAll();
                calculateSalary();
            });

            regular_holiday_box[x].addEventListener("click", () => {
                absent_box_input[x].classList.add('disabled');
                rest_day_box_input[x].classList.add('disabled');
                special_holiday_box_input[x].classList.add('disabled');
                if (regular_holiday_box[x].checked == true) {
                    regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2);
                    night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.2);
                    regular_hour_rate[x].innerText = "2.00";
                    night_hour_rate[x].innerText = "2.20";
                    ot_regular_hour_rate[x].innerText = "2.60";
                    ot_night_hour_rate[x].innerText = "2.86";
                    if (with_ot_box[x].checked == true) {
                        ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.6);
                        ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.86);
                    }
                    if (rest_day_ot_box[x].checked == true) {
                        regular_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 2.6;
                        night_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 2.86;
                        regular_hour_rate[x].innerText = "2.6";
                        night_hour_rate[x].innerText = "2.86";
                        ot_regular_hour_rate[x].innerText = "3.38";
                        ot_night_hour_rate[x].innerText = "3.718";
                        if (with_ot_box[x].checked == true) {
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 3.38);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 3.718);
                        }
                    }
                    else{
                        ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.6);
                        ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.86);
                    }
                } 
                else {
                    absent_box_input[x].classList.remove('disabled');
                    rest_day_box_input[x].classList.remove('disabled');
                    special_holiday_box_input[x].classList.remove('disabled');
                    regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1);
                    night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.1);
                    regular_hour_rate[x].innerText = "1.00";
                    night_hour_rate[x].innerText = "1.10";
                    ot_regular_hour_rate[x].innerText = "1.25";
                    ot_night_hour_rate[x].innerText = "1.375";
                    if (with_ot_box[x].checked == true) {
                        ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.25);
                        ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.375);
                    }
                    if (rest_day_ot_box[x].checked == true) {
                        regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.3);
                        night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.43);
                        regular_hour_rate[x].innerText = "1.30";
                        night_hour_rate[x].innerText = "1.43";
                        ot_regular_hour_rate[x].innerText = "1.69";
                        ot_night_hour_rate[x].innerText = "1.859";
                        if (with_ot_box[x].checked == true) {
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.69);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.859);
                        }
                        else{
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.69);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.859);
                        }
                    }
                }
                calculateAll();
                calculateSalary();
            });
            
            special_holiday_box[x].addEventListener("click", () => {
                if (special_holiday_box[x].checked == true) {
                    absent_box_input[x].classList.add('disabled');
                    rest_day_box_input[x].classList.add('disabled');
                    regular_holiday_box_input[x].classList.add('disabled');
                    regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.3);
                    night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.43);
                    regular_hour_rate[x].innerText = "1.30";
                    night_hour_rate[x].innerText = "1.43";
                    ot_regular_hour_rate[x].innerText = "1.69";
                    ot_night_hour_rate[x].innerText = "1.859";
                    if (with_ot_box[x].checked == true) {
                        ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.69);
                        ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.859);
                    }
                    if (rest_day_ot_box[x].checked == true) {
                        regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.5);
                        night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.65);
                        regular_hour_rate[x].innerText = "1.5";
                        night_hour_rate[x].innerText = "1.65";
                        ot_regular_hour_rate[x].innerText = "1.95";
                        ot_night_hour_rate[x].innerText = "2.145";
                        if (with_ot_box[x].checked == true) {
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.95);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.145);
                        }
                    }
                } 
                else {
                    absent_box_input[x].classList.remove('disabled');
                    rest_day_box_input[x].classList.remove('disabled');
                    regular_holiday_box_input[x].classList.remove('disabled');
                    regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1);
                    night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.1);
                    regular_hour_rate[x].innerText = "1.00";
                    night_hour_rate[x].innerText = "1.10";
                    ot_regular_hour_rate[x].innerText = "1.25";
                    ot_night_hour_rate[x].innerText = "1.375";
                    if (with_ot_box[x].checked == true) {
                        ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.25);
                        ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.375);
                    }
                    if (rest_day_ot_box[x].checked == true) {
                        regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.3);
                        night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.43);
                        regular_hour_rate[x].innerText = "1.30";
                        night_hour_rate[x].innerText = "1.43";
                        ot_regular_hour_rate[x].innerText = "1.69";
                        ot_night_hour_rate[x].innerText = "1.859";
                        if (with_ot_box[x].checked == true) {
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.69);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.859);
                        }
                        else{
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.69);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.859);
                        }
                    }
                }
                calculateAll();
                calculateSalary();
            });
            
            time_in_input[x].addEventListener("change", () => {

                const time_in_sched_value = new Date(`2000-01-01T${time_in_sched.value}`);
                const time_in_input_value = new Date(`2000-01-01T${time_in_input[x].value}`);
                const time_in_sched_hours = time_in_sched_value.getHours();
                const time_in_sched_mins = time_in_sched_value.getMinutes();
                const time_in_input_hours = time_in_input_value.getHours();
                const time_in_input_mins = time_in_input_value.getMinutes();
                const time_in_sched_total_mins = (time_in_sched_hours * 60) + time_in_sched_mins;
                const time_in_input_total_mins = (time_in_input_hours * 60) + time_in_input_mins;
                var late = 0
                late = time_in_input_total_mins - time_in_sched_total_mins;
                
                if(late >= 0){
                    late_mins[x].value = late;
                }
                else{
                    late_mins[x].value = 0;
                }
                calculateAll();
                calculateSalary();
            });
            
            day_break[x].addEventListener("click", () => {
                if (day_break[x].checked == true) {
                    regular_hours[x].value = parseFloat(regular_hours[x].value) - 1;
                    night_break_input[x].classList.add("disabled")
                } else {
                    regular_hours[x].value = parseFloat(regular_hours[x].value) + 1;
                    night_break_input[x].classList.remove("disabled")
                }
                calculateAll();
                calculateSalary();
            });
            night_break[x].addEventListener("click", () => {
                if (night_break[x].checked == true) {
                    night_hours[x].value = parseFloat(night_hours[x].value) - 1;
                    day_break_input[x].classList.add("disabled")
                } else {
                    night_hours[x].value = parseFloat(night_hours[x].value) + 1;
                    day_break_input[x].classList.remove("disabled")
                }
                calculateAll();
                calculateSalary();
            });
        
            time_out_input[x].addEventListener("change", () => {
                const time_in_sched_value = new Date(`2000-01-01T${time_in_sched.value}`);
                const time_out_sched_value = new Date(`2000-01-01T${time_out_sched.value}`);
                const time_out_input_value = new Date(`2000-01-01T${time_out_input[x].value}`);
                const time_in_sched_hours = time_in_sched_value.getHours();
                const time_in_sched_mins = time_in_sched_value.getMinutes();
                const time_out_sched_hours = time_out_sched_value.getHours();
                const time_out_sched_mins = time_out_sched_value.getMinutes();
                const time_out_input_hours = time_out_input_value.getHours();
                const time_out_input_mins = time_out_input_value.getMinutes();
                const time_in_sched_total_mins = (time_in_sched_hours * 60) + time_in_sched_mins;
                const time_out_sched_total_mins = (time_out_sched_hours * 60) + time_out_sched_mins;
                const time_out_input_total_mins = (time_out_input_hours * 60) + time_out_input_mins;
                var under_time = 0
                
                if(time_out_sched_total_mins > time_out_input_total_mins && time_out_input_total_mins > time_in_sched_total_mins){
                    under_time = time_out_sched_total_mins - time_out_input_total_mins;
                    under_time_mins[x].value = under_time;
                }
                else{
                    under_time_mins[x].value = 0;
                }
                
                calculateOvertimeHours();
                calculateAll();
                calculateSalary();
            });
            
            with_ot_box[x].addEventListener("click", () => {
                if (with_ot_box[x].checked == true) {
                    ot_input[x].classList.remove('disabled');
                    calculateOvertimeHours();
                    calculateAll();
                } else {
                    ot_input[x].classList.add('disabled');
                    ot_hours[x].value = 0;
                    ot_night_hours[x].value = 0;
                    ot_rate_per_hour[x].value = 0;
                    ot_night_rate_per_hour[x].value = 0;
                    ot_pay[x].value = 0;
                    ot_night_pay[x].value = 0;
                    ot_pay_subtotal[x].value = 0;
                }
                calculateAll();
                calculateSalary();
            });
        }
        sss_deduction.addEventListener("keyup", calculateSalary);
        pag_ibig_deduction.addEventListener("keyup", calculateSalary);
        philhealth_deduction.addEventListener("keyup", calculateSalary);
        cash_advance.addEventListener("keyup", calculateSalary);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
