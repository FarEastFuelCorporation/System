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
        var active_employee_name = [];
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
            if(employee_data_list.content[x][31] == "ACTIVE"){
                var gender = employee_data_list.content[x][7];
                if(gender == "MALE"){
                    var full_name = `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} ${employee_data_list.content[x][6]}`
                    active_employee_name.push(full_name);
                }
                else{
                    var full_name = `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} - ${employee_data_list.content[x][5]}`
                    active_employee_name.push(full_name);
                }
                if(employee_data_list.content[x][29] == "REGULAR"){
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
                if(employee_data_list.content[x][29] == "PROJECT BASED"){
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
                if(employee_data_list.content[x][29] == "SUBCON"){
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

        // employee_list_section
        const employee_list = document.querySelector("#employee_list_section #employee_list");
        var employee_record = "";
        for(let b = 1; b < employee_data_list.content.length; b++){
            if(employee_data_list.content[b][31] == "ACTIVE"){
                var full_name_record = "";
                
                if(employee_data_list.content[b][7] == "MALE"){
                    full_name_record = `${employee_data_list.content[b][4]}, ${employee_data_list.content[b][2]} ${employee_data_list.content[b][3]} ${employee_data_list.content[b][6]}`
                }
                else{
                    full_name_record = `${employee_data_list.content[b][4]}, ${employee_data_list.content[b][2]} ${employee_data_list.content[b][3]} - ${employee_data_list.content[b][5]}`
                
                }
                if(employee_data_list.content[b][31] == "ACTIVE"){
                    employee_record += `
                    <tr>
                        <td>${employee_data_list.content[b][1]}</td>
                        <td>${full_name_record}</td>
                        <td>${employee_data_list.content[b][32]}</td>
                        <td>${employee_data_list.content[b][33]}</td>
                        <td>${employee_data_list.content[b][7]}</td>
                        <td>${employee_data_list.content[b][29]}</td>
                        <td>${date_decoder(employee_data_list.content[b][9])}</td>
                        <td>${employee_data_list.content[b][11]}</td>
                    </tr>
                    `
                }
            }
        }
        employee_list.innerHTML = employee_record


        // attendance form
        const days = document.querySelector("#attendance_form #days");
        const daily_rate = document.querySelector("#attendance_form #daily_rate");
        const time_in_sched = document.querySelector("#attendance_form #time_in_sched");
        const time_out_sched = document.querySelector("#attendance_form #time_out_sched");
        var day_list = "";
        const day = [];
        const absent_box_input = [];
        const absent_box = [];
        const rest_day_box_input = [];
        const rest_day_box = [];
        const day_input = [];
        const half_day_box_input = [];
        const half_day_box = [];
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
        const ot_day_break = [];
        const ot_night_break = [];
        const ot_regular_hour_rate = [];
        const ot_night_hour_rate = [];
        const ot_rate_per_hour = [];
        const ot_night_rate_per_hour = [];
        const ot_pay = [];
        const ot_night_pay = [];
        const ot_pay_subtotal = [];
        const allowance = [];
        const salary_day = [];
        const gross_salary = document.querySelector("#attendance_form #gross_salary");
        const adjustment = document.querySelector("#attendance_form #adjustment");
        const cash_advance = document.querySelector("#attendance_form #cash_advance");
        const total_additional = document.querySelector("#attendance_form #total_additional");
        const sss_deduction = document.querySelector("#attendance_form #sss_deduction");
        const pag_ibig_deduction = document.querySelector("#attendance_form #pag_ibig_deduction");
        const philhealth_deduction = document.querySelector("#attendance_form #philhealth_deduction");
        const ca_deduction = document.querySelector("#attendance_form #ca_deduction");
        const uniform = document.querySelector("#attendance_form #uniform");
        const housing = document.querySelector("#attendance_form #housing");
        const st_peter = document.querySelector("#attendance_form #st_peter");
        const cash_not_return = document.querySelector("#attendance_form #cash_not_return");
        const hard_hat = document.querySelector("#attendance_form #hard_hat");
        const bereavement_assistance = document.querySelector("#attendance_form #bereavement_assistance");
        const over_meals = document.querySelector("#attendance_form #over_meals");
        const safety_shoes = document.querySelector("#attendance_form #safety_shoes");
        const total_deductions = document.querySelector("#attendance_form #total_deductions");
        const net_salary = document.querySelector("#attendance_form #net_salary");

        // client_list_data
        const id_no = document.querySelector("#attendance_form #id_no");
        const department = document.querySelector("#attendance_form #department");
        const designation = document.querySelector("#attendance_form #designation");
        const day_allowance = document.querySelector("#attendance_form #day_allowance");
        const night_allowance = document.querySelector("#attendance_form #night_allowance");
        const hide = document.querySelector("#attendance_form .hide");
        const search_wrapper = document.querySelector("#attendance_form #search_employee_name");
        const input_box = search_wrapper.querySelector("#attendance_form input");
        const sugg_box = search_wrapper.querySelector("#attendance_form .autocom_box");
        var data_value = active_employee_name;

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
            search_wrapper.classList.remove("active");
            for(let z = 1; z < employee_data_list.content.length; z++){
                if(employee_data_list.content[z][31] == "ACTIVE"){
                    var full_name;
                    var gender = employee_data_list.content[z][7];
                    if(gender == "MALE"){
                        full_name = `${employee_data_list.content[z][4]}, ${employee_data_list.content[z][2]} ${employee_data_list.content[z][3]} ${employee_data_list.content[z][6]}`
                    }
                    else{
                        full_name = `${employee_data_list.content[z][4]}, ${employee_data_list.content[z][2]} ${employee_data_list.content[z][3]} - ${employee_data_list.content[z][5]}`
                    }
                    if(select_user_data == full_name){
                        for(x=1; x<=7; x++){
                            time_in_sched.value = convertTo24HourFormat(time_decoder(employee_data_list.content[z][37]));
                            time_out_sched.value = convertTo24HourFormat(time_decoder(employee_data_list.content[z][38]));
                            if(parseInt(time_in_sched.value.slice(0,2)) >= 18){
                                allowance[x].value = parseFloat(employee_data_list.content[z][36]);
                            }
                            else{
                                allowance[x].value = parseFloat(employee_data_list.content[z][35]);
                            }
                            id_no.value = employee_data_list.content[z][1];
                            department.value = employee_data_list.content[z][32];
                            designation.value = employee_data_list.content[z][33];
                            daily_rate.value = employee_data_list.content[z][34];
                            day_allowance.value = employee_data_list.content[z][35];
                            night_allowance.value = employee_data_list.content[z][36];
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
                            regular_hours_pay[x].value = (parseFloat(regular_hours[x].value) * parseFloat(regular_rate_per_hour[x].value));
                            night_hours_pay[x].value = (parseFloat(night_hours[x].value) * parseFloat(night_rate_per_hour[x].value));
                            subtotal[x].value = (parseFloat(regular_hours_pay[x].value) + parseFloat(night_hours_pay[x].value)).toFixed(2);
                            late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 8 / 60));
                            under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 8));
                            regular_pay[x].value = (parseFloat(subtotal[x].value) - (parseFloat(late_deduction[x].value) + parseFloat(under_time_deduction[x].value))).toFixed(2);
                            ot_pay[x].value = (parseFloat(ot_hours[x].value) * parseFloat(ot_rate_per_hour[x].value));
                            ot_night_pay[x].value = (parseFloat(ot_night_hours[x].value) * parseFloat(ot_night_rate_per_hour[x].value));
                            ot_pay_subtotal[x].value = (parseFloat(ot_pay[x].value) + parseFloat(ot_night_pay[x].value)).toFixed(2);
                            salary_day[x].value = (parseFloat(regular_pay[x].value) + parseFloat(ot_pay_subtotal[x].value) + parseFloat(allowance[x].value)).toFixed(2);
                            calculateSalary();
                            days.style.display = "grid";
                            hide.style.display = "grid";
                        }
                    }
                }
            }
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
                            <div class="label">HALF DAY</div>
                            <div id="absent_box_input${x}">
                                <label for="half_day_box${x}" class="custom-checkbox">
                                <input type="checkbox" id="half_day_box${x}" name="half_day_box${x}" value="YES">
                                <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
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
                            <div class="label">BREAK (hours)</div>
                            <div class="d-flex" style="justify-content: space-around;">
                                <input type="number" class="form-control" au id="day_break${x}" name="day_break${x}" required autocomplete="off" value="0">
                                <input type="number" class="form-control" id="night_break${x}" name="night_break${x}" required autocomplete="off" value="0">
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
                            <div class="label">UNDERTIME (hours)</div>
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
                                <div class="label">OT BREAK</div>
                                <div class="d-flex" style="justify-content: space-around;">
                                    <input type="number" class="form-control" id="ot_day_break${x}" name="ot_day_break${x}" required autocomplete="off" value="0">
                                    <input type="number" class="form-control" id="ot_night_break${x}" name="ot_night_break${x}" required autocomplete="off" value="0">
                                </div>
                            </div>
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
                            <div class="label">ALLOWANCE</div>
                            <input type="number" class="form-control text-center" readonly id="allowance${x}" name="allowance${x}" value="0">
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
                        <div id="half_day_box_input${x}">
                            <label for="half_day_box${x}" class="custom-checkbox">
                            <input type="checkbox" id="half_day_box${x}" name="half_day_box${x}" value="YES">
                            <span class="checkmark"></span>
                            </label>
                        </div>
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
                        <div class="d-flex" style="justify-content: space-around;">
                            <input type="number" class="form-control" id="day_break${x}" name="day_break${x}" required autocomplete="off" value="0">
                            <input type="number" class="form-control" id="night_break${x}" name="night_break${x}" required autocomplete="off" value="0">
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
                            <div class="d-flex" style="justify-content: space-around;">
                                <input type="number" class="form-control" id="ot_day_break${x}" name="ot_day_break${x}" required autocomplete="off" value="0">
                                <input type="number" class="form-control" id="ot_night_break${x}" name="ot_night_break${x}" required autocomplete="off" value="0">
                            </div>
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
                        <input type="number" class="form-control text-center" readonly id="allowance${x}" name="allowance${x}" value="0">
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
            half_day_box_input[x] = document.querySelector(`#half_day_box_input${x}`);
            half_day_box[x] = document.querySelector(`#half_day_box${x}`);
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
            ot_day_break[x] = document.querySelector(`#ot_day_break${x}`);
            ot_night_break[x] = document.querySelector(`#ot_night_break${x}`);
            ot_hours[x] = document.querySelector(`#ot_hours${x}`);
            ot_night_hours[x] = document.querySelector(`#ot_night_hours${x}`);
            ot_regular_hour_rate[x] = document.querySelector(`#ot_regular_hour_rate${x}`);
            ot_night_hour_rate[x] = document.querySelector(`#ot_night_hour_rate${x}`);
            ot_rate_per_hour[x] = document.querySelector(`#ot_rate_per_hour${x}`);
            ot_night_rate_per_hour[x] = document.querySelector(`#ot_night_rate_per_hour${x}`);
            ot_pay[x] = document.querySelector(`#ot_pay${x}`);
            ot_night_pay[x] = document.querySelector(`#ot_night_pay${x}`);
            ot_pay_subtotal[x] = document.querySelector(`#ot_pay_subtotal${x}`);
            allowance[x] = document.querySelector(`#allowance${x}`);
            salary_day[x] = document.querySelector(`#salary_day${x}`);
            
            // Use a function to create a new scope for each iteration
            
            function calculateAll(){
                calculateHours();
                regular_hours_pay[x].value = (parseFloat(regular_hours[x].value) * parseFloat(regular_rate_per_hour[x].value));
                night_hours_pay[x].value = (parseFloat(night_hours[x].value) * parseFloat(night_rate_per_hour[x].value));
                subtotal[x].value = (parseFloat(regular_hours_pay[x].value) + parseFloat(night_hours_pay[x].value)).toFixed(2);
                late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 8 / 60));
                under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 8));
                regular_pay[x].value = (parseFloat(subtotal[x].value) - (parseFloat(late_deduction[x].value) + parseFloat(under_time_deduction[x].value))).toFixed(2);
                ot_pay[x].value = (parseFloat(ot_hours[x].value) * parseFloat(ot_rate_per_hour[x].value));
                ot_night_pay[x].value = (parseFloat(ot_night_hours[x].value) * parseFloat(ot_night_rate_per_hour[x].value));
                ot_pay_subtotal[x].value = (parseFloat(ot_pay[x].value) + parseFloat(ot_night_pay[x].value)).toFixed(2);
                salary_day[x].value = (parseFloat(regular_pay[x].value) + parseFloat(ot_pay_subtotal[x].value) + parseFloat(allowance[x].value)).toFixed(2);
            }

            function calculateRatePerHour(){
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
            }
            function calculateAllowance(){
                if(parseInt(time_in_sched.value.slice(0,2)) >= 18){
                    if(((parseFloat(regular_hours[x].value))+(parseFloat(night_hours[x].value))) >= 8){
                        allowance[x].value = parseFloat(night_allowance.value);
                    }
                    else if(((parseFloat(regular_hours[x].value))+(parseFloat(night_hours[x].value))) < 8){
                        allowance[x].value = parseFloat(night_allowance.value)/2
                        console.log(allowance[x].value)
                    }
                }
                else{
                    if(((parseFloat(regular_hours[x].value))+(parseFloat(night_hours[x].value))) >= 8){
                        allowance[x].value = parseFloat(day_allowance.value);
                    }
                    else if(((parseFloat(regular_hours[x].value))+(parseFloat(night_hours[x].value))) < 8){
                        allowance[x].value = parseFloat(day_allowance.value)/2
                    }
                }
            }

            function calculateSalary(){
                var net_income = 0;
                for(let y = 1; y <= 7; y++){
                    net_income += parseFloat(salary_day[y].value)
                }
                gross_salary.value = net_income;
                var additional = 0;
                additional = parseFloat(adjustment.value) + parseFloat(cash_advance.value)

                var deduction = 0;
                deduction = parseFloat(sss_deduction.value) + parseFloat(pag_ibig_deduction.value) + parseFloat(philhealth_deduction.value) + parseFloat(ca_deduction.value) + parseFloat(uniform.value) + parseFloat(housing.value) + parseFloat(st_peter.value) + parseFloat(cash_not_return.value) + parseFloat(hard_hat.value) + parseFloat(safety_shoes.value) + parseFloat(over_meals.value) + parseFloat(bereavement_assistance.value);
            
                total_additional.value = additional;
                total_deductions.value = deduction;
                net_salary.value = net_income + additional - deduction
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
                
                // if (half_day_box[x].checked == true) {
                //     time_end -= 4
                // }
                
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
                regular_hours[x].value = reg_hours - day_break[x].value;
                night_hours[x].value = nd_hours - night_break[x].value;

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
                }
                else{
                    ot_hours[x].value = 0;
                    ot_night_hours[x].value = 0;
                }
                ot_hours[x].value = regularOvertimeHours - parseFloat(ot_day_break[x].value);
                ot_night_hours[x].value = nightDifferentialOvertimeHours - parseFloat(ot_night_break[x].value);
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
                    calculateAllowance();
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
                    calculateAllowance();
                    calculateAll();
                    calculateSalary();
                }
            });
            
            half_day_box[x].addEventListener("click", () => {
                if (half_day_box[x].checked == true) {
                    absent_box_input[x].classList.add('disabled');
                    rest_day_box_input[x].classList.add('disabled');
                }
                else{
                    absent_box_input[x].classList.remove('disabled');
                    rest_day_box_input[x].classList.remove('disabled');  
                }
            })
            
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
            
            day_break[x].addEventListener("keyup", () => {
                regular_hours[x].value = parseFloat(regular_hours[x].value) - parseFloat(day_break[x].value);
                calculateAllowance();
                calculateAll();
                calculateSalary();
            });
            night_break[x].addEventListener("keyup", () => {
                night_hours[x].value = parseFloat(night_hours[x].value) - parseFloat(night_break[x].value);
                calculateAllowance();
                calculateAll();
                calculateSalary();
            });
            ot_day_break[x].addEventListener("keyup", () => {
                ot_hours[x].value = parseFloat(ot_hours[x].value) - parseFloat(ot_day_break[x].value);
                calculateOvertimeHours();
                calculateAll();
                calculateSalary();
            });
            ot_night_break[x].addEventListener("keyup", () => {
                ot_night_hours[x].value = parseFloat(ot_night_hours[x].value) - parseFloat(ot_night_break[x].value);
                calculateOvertimeHours();
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
                var time_out_sched_total_mins = (time_out_sched_hours * 60) + time_out_sched_mins;
                var time_out_input_total_mins = (time_out_input_hours * 60) + time_out_input_mins;
                var under_time = 0
                var under_time_hour = 0
                
                if(time_out_sched_total_mins > time_in_sched_total_mins){
                    if(time_out_sched_total_mins > time_out_input_total_mins && time_out_input_total_mins > time_in_sched_total_mins){
                        under_time = time_out_sched_total_mins - time_out_input_total_mins;
                        under_time_hour = Math.ceil((under_time/60) * 2) / 2;
                        under_time_mins[x].value = under_time_hour;
                    }
                    else{
                        under_time_mins[x].value = 0;
                    }
                }
                else if(time_out_sched_total_mins < time_in_sched_total_mins){
                    time_out_sched_total_mins += 1440;
                    time_out_input_total_mins += 1440;
                    if(time_out_sched_total_mins > time_out_input_total_mins && time_out_input_total_mins > time_in_sched_total_mins){
                        under_time = time_out_sched_total_mins - time_out_input_total_mins;
                        under_time_hour = Math.ceil((under_time/60) * 2) / 2;
                        under_time_mins[x].value = under_time_hour;
                    }
                    else{
                        under_time_mins[x].value = 0;
                    }
                }
                calculateRatePerHour();
                calculateOvertimeHours();
                calculateAll();
                calculateSalary();
            });
            
            with_ot_box[x].addEventListener("click", () => {
                if (with_ot_box[x].checked == true) {
                    ot_input[x].classList.remove('disabled');
                    calculateRatePerHour();
                    calculateOvertimeHours();
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
        adjustment.addEventListener("keyup", calculateSalary);
        cash_advance.addEventListener("keyup", calculateSalary);
        sss_deduction.addEventListener("keyup", calculateSalary);
        pag_ibig_deduction.addEventListener("keyup", calculateSalary);
        philhealth_deduction.addEventListener("keyup", calculateSalary);
        ca_deduction.addEventListener("keyup", calculateSalary);
        uniform.addEventListener("keyup", calculateSalary);
        housing.addEventListener("keyup", calculateSalary);
        st_peter.addEventListener("keyup", calculateSalary);
        cash_not_return.addEventListener("keyup", calculateSalary);
        hard_hat.addEventListener("keyup", calculateSalary);
        safety_shoes.addEventListener("keyup", calculateSalary);
        over_meals.addEventListener("keyup", calculateSalary);
        bereavement_assistance.addEventListener("keyup", calculateSalary);

        // employee_form
        const employee_form = document.querySelector("#employee_form");
        const new_employee_button = employee_form.querySelector("#new_employee_button");
        const update_record_button = employee_form.querySelector("#update_record_button");
        const resign_button = employee_form.querySelector("#resign_button");
        const new_employee_form = employee_form.querySelector("#new_employee_form");
        const update_record_form = employee_form.querySelector("#update_record_form");
        const update_employee_id = update_record_form.querySelector("#employee_id");
        const update_search_employee_id_button = update_record_form.querySelector("#search_employee_id_button");
        const update_details = update_record_form.querySelector("#details");
        const update_gender = update_record_form.querySelector("#gender");
        const update_civil_status = update_record_form.querySelector("#civil_status");
        const update_first_name = update_record_form.querySelector("#first_name");
        const update_middle_name = update_record_form.querySelector("#middle_name");
        const update_last_name = update_record_form.querySelector("#last_name");
        const update_spouse_name = update_record_form.querySelector("#spouse_name");
        const update_spouse_name_container = update_record_form.querySelector("#spouse_name_container");
        const update_affix = update_record_form.querySelector("#affix");
        const update_affix_container = update_record_form.querySelector("#affix_container");
        const update_birthday = update_record_form.querySelector("#birthday");
        const update_birth_place = update_record_form.querySelector("#birth_place");
        const update_mobile_number = update_record_form.querySelector("#mobile_number");
        const update_email_address = update_record_form.querySelector("#email_address");
        const update_nationality = update_record_form.querySelector("#nationality");
        const update_address = update_record_form.querySelector("#address");
        const update_other_address = update_record_form.querySelector("#other_address");
        const update_mothers_maiden_name = update_record_form.querySelector("#mothers_maiden_name");
        const update_educational_attainment = update_record_form.querySelector("#educational_attainment");
        const update_course = update_record_form.querySelector("#course");
        const update_year = update_record_form.querySelector("#year");
        const update_tin_no = update_record_form.querySelector("#tin_no");
        const update_sss_no = update_record_form.querySelector("#sss_no");
        const update_philhealth_no = update_record_form.querySelector("#philhealth_no");
        const update_pag_ibig_no = update_record_form.querySelector("#pag_ibig_no");
        const update_drivers_license_no = update_record_form.querySelector("#drivers_license_no");
        const update_nbi_no = update_record_form.querySelector("#nbi_no");
        const update_police_clearance_no = update_record_form.querySelector("#police_clearance_no");
        const update_cedula_no = update_record_form.querySelector("#cedula_no");
        const update_date_hire = update_record_form.querySelector("#date_hire");
        const update_employee_type = update_record_form.querySelector("#employee_type");
        const update_payroll_type = update_record_form.querySelector("#payroll_type");
        const update_employee_status = update_record_form.querySelector("#employee_status");
        const update_department = update_record_form.querySelector("#department");
        const update_designation = update_record_form.querySelector("#designation");
        const update_rate = update_record_form.querySelector("#rate");
        const update_day_allowance = update_record_form.querySelector("#day_allowance");
        const update_night_allowance = update_record_form.querySelector("#night_allowance");
        const update_time_in_schedule = update_record_form.querySelector("#time_in_schedule");
        const update_time_out_schedule = update_record_form.querySelector("#time_out_schedule");
        const update_date_resignation = update_record_form.querySelector("#date_resignation");
        const reason_resignation = update_record_form.querySelector("#reason_resignation");
        
        new_employee_button.addEventListener("click", () => {
            if(new_employee_form.style.display == "block"){
                new_employee_form.style.display = "none";
            }
            else{
                new_employee_form.style.display = "block";
                update_record_form.style.display = "none";
            }
        })

        update_record_button.addEventListener("click", () => {
            if(update_record_form.style.display == "block"){
                update_record_form.style.display = "none";
            }
            else{
                new_employee_form.style.display = "none";
                update_record_form.style.display = "block";
            }
        })
        
        update_search_employee_id_button.addEventListener("click", () => {
            for(let a = 1; a < employee_data_list.content.length; a++)
            if(update_employee_id.value == employee_data_list.content[a][1]){
                update_gender.value = employee_data_list.content[a][7];
                update_civil_status.value = employee_data_list.content[a][8];
                update_first_name.value = employee_data_list.content[a][2];
                update_middle_name.value = employee_data_list.content[a][3];
                update_last_name.value = employee_data_list.content[a][4];
                update_spouse_name.value = employee_data_list.content[a][5];
                update_affix.value = employee_data_list.content[a][6];
                update_birthday.value = formatDateToInputValue(employee_data_list.content[a][9]);
                update_birth_place.value = employee_data_list.content[a][10];
                update_mobile_number.value = employee_data_list.content[a][11];
                update_email_address.value = employee_data_list.content[a][12];
                update_nationality.value = employee_data_list.content[a][13];
                update_address.value = employee_data_list.content[a][14];
                update_other_address.value = employee_data_list.content[a][15];
                update_mothers_maiden_name.value = employee_data_list.content[a][16];
                update_educational_attainment.value = employee_data_list.content[a][17];
                update_course.value = employee_data_list.content[a][18];
                update_year.value = employee_data_list.content[a][19];
                update_tin_no.value = employee_data_list.content[a][20];
                update_sss_no.value = employee_data_list.content[a][21];
                update_philhealth_no.value = employee_data_list.content[a][22];
                update_pag_ibig_no.value = employee_data_list.content[a][23];
                update_drivers_license_no.value = employee_data_list.content[a][24];
                update_nbi_no.value = employee_data_list.content[a][25];
                update_police_clearance_no.value = employee_data_list.content[a][26];
                update_cedula_no.value = employee_data_list.content[a][27];
                update_date_hire.value = formatDateToInputValue(employee_data_list.content[a][28]);
                update_employee_type.value = employee_data_list.content[a][29];
                update_payroll_type.value = employee_data_list.content[a][30];
                update_employee_status.value = employee_data_list.content[a][31];
                update_department.value = employee_data_list.content[a][32];
                update_designation.value = employee_data_list.content[a][33];
                update_rate.value = employee_data_list.content[a][34];
                update_day_allowance.value = employee_data_list.content[a][35];
                update_night_allowance.value = employee_data_list.content[a][36];
                update_time_in_schedule.value = formatTimeToInputValue(employee_data_list.content[a][37]);
                update_time_out_schedule.value = formatTimeToInputValue(employee_data_list.content[a][38]);
                update_date_resignation.value = employee_data_list.content[a][39];
                reason_resignation.value = formatDateToInputValue(employee_data_list.content[a][40]);        
            }
            update_details.style.display = "block";
            if(update_gender.value == "MALE"){
                update_spouse_name_container.style.display = "none"
                update_affix_container.style.display = "block"
                console.log("male")
            }
            else if(update_gender.value == "FEMALE"){
                if(update_civil_status.value == "SINGLE"){
                    update_affix_container.style.display = "none"
                    update_spouse_name_container.style.display = "none"
                    console.log("single")
                }
                else{
                    update_spouse_name_container.style.display = "block"
                    update_affix_container.style.display = "none"
                    console.log("married")
                }
            }
        })

        // FORM GENERATOR    
        const currentYear = new Date().getFullYear();
        const lastTwoDigitsOfYear = currentYear.toString().slice(-2);        
        var last_three_digit = 0;
        
        for (let x = 0; x < employee_data_list.content.length; x++) {
          var employee_number = String(employee_data_list.content[x][1]); // Convert to a string
          if (employee_number.slice(0, 2) == lastTwoDigitsOfYear) {
            let threeDigitValue = parseFloat(employee_number.slice(-3));
            if (!isNaN(threeDigitValue) && last_three_digit < threeDigitValue) {
              last_three_digit = threeDigitValue;
            }
          }
        }
        last_three_digit += 1;
        employee_id.value = `${lastTwoDigitsOfYear}${String(last_three_digit).padStart(3, '0')}`;        

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
