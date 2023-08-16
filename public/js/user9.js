document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const idf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyXPvq606vmfSlFG3nVjYuJLN8Jnv4BFGbhEmDp6e4wLL1kUQVa4kIi2dGGRKuSklT2bg/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const payroll_transaction_response_promise = fetch('https://script.google.com/macros/s/AKfycbzYyGI99twep_njWGI4_Cd7Gd6bBERGhpP3IuwFRtUZ6hXYD-mpP2gRse2KEqjqKyNckw/exec');
        const payroll_summary_response_promise = fetch('https://script.google.com/macros/s/AKfycbxOfQ8EeEUegve06wUBw4afHRkHSnTP4QwnB8N9AKyHfp8x00pDhLkGiCKkECUm2Iuy2g/exec');

        const [
            username_response,
            idf_response,
            sf_response,
            irf_response,
            employee_response,
            payroll_transaction_response,
            payroll_summary_response,
        ] = await Promise.all([
            username_response_promise,
            idf_response_promise,
            sf_response_promise,
            irf_response_promise,
            employee_response_promise,
            payroll_transaction_response_promise,
            payroll_summary_response_promise,
        ]);

        const username_data  = await username_response.json();
        const idf_data_list  = await idf_response.json();
        const sf_data_list  = await sf_response.json();
        const irf_data_list  = await irf_response.json();
        const employee_data_list  = await employee_response.json();
        const payroll_transaction_data_list  = await payroll_transaction_response.json();
        const payroll_summary_data_list  = await payroll_summary_response.json();

        // Code that depends on the fetched data
        // username_data3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const users = document.querySelectorAll("user");
        
        users.forEach(user => {user.value = username_data.content[9][3]})
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
            if(employee_data_list.content[x][30] == "ACTIVE"){
                var gender = employee_data_list.content[x][6];
                if(gender == "MALE"){
                    var full_name = `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} ${employee_data_list.content[x][5]}`
                    active_employee_name.push(full_name);
                }
                else{
                    var full_name = `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} - ${employee_data_list.content[x][4]}`
                    active_employee_name.push(full_name);
                }
                if(employee_data_list.content[x][28] == "REGULAR"){
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
                if(employee_data_list.content[x][28] == "PROJECT BASED"){
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
                if(employee_data_list.content[x][28] == "SUBCON"){
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
            if(employee_data_list.content[b][30] == "ACTIVE"){
                var full_name_record = "";
                
                if(employee_data_list.content[b][6] == "MALE"){
                    full_name_record = `${employee_data_list.content[b][3]}, ${employee_data_list.content[b][1]} ${employee_data_list.content[b][2]} ${employee_data_list.content[b][5]}`
                }
                else{
                    full_name_record = `${employee_data_list.content[b][3]}, ${employee_data_list.content[b][1]} ${employee_data_list.content[b][2]} - ${employee_data_list.content[b][4]}`
                
                }
                if(employee_data_list.content[b][30] == "ACTIVE"){
                    employee_record += `
                    <tr>
                        <td>${employee_data_list.content[b][0]}</td>
                        <td>${full_name_record}</td>
                        <td>${employee_data_list.content[b][31]}</td>
                        <td>${employee_data_list.content[b][32]}</td>
                        <td>${employee_data_list.content[b][6]}</td>
                        <td>${employee_data_list.content[b][28]}</td>
                        <td>${date_decoder(employee_data_list.content[b][8])}</td>
                        <td>${employee_data_list.content[b][10]}</td>
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
        const year = document.querySelector("#attendance_form #year");
        const week_number = document.querySelector("#attendance_form #week_number");
        var day_list = "";
        const date_input = [];
        const day = [];
        const absent_box_input = [];
        const absent_box = [];
        const rest_day_box_input = [];
        const rest_day_box = [];
        const day_input = [];
        const half_day_box_input = [];
        const half_day_box = [];
        const sick_leave_box_input = [];
        const sick_leave_box = [];
        const vacation_leave_box_input = [];
        const vacation_leave_box = [];
        const leave_box_input = [];
        const leave_box = [];
        const rest_day_duty_box_input = [];
        const rest_day_duty_box = [];
        const regular_holiday_box_input = [];
        const regular_holiday_box = [];
        const special_holiday_box_input = [];
        const special_holiday_box = [];
        const day_name = ["","MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
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
        const with_ot_box_input = [];
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
        const salary_day_input = [];
        const salary_day = [];
        const gross_salary = document.querySelector("#attendance_form #gross_salary");
        const adjustment = document.querySelector("#attendance_form #adjustment");
        const cash_advance = document.querySelector("#attendance_form #cash_advance");
        const total_additional = document.querySelector("#attendance_form #total_additional");
        const sss_deduction = document.querySelector("#attendance_form #sss_deduction");
        const pag_ibig_deduction = document.querySelector("#attendance_form #pag_ibig_deduction");
        const sss_loan = document.querySelector("#attendance_form #sss_loan");
        const pag_ibig_loan = document.querySelector("#attendance_form #pag_ibig_loan");
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
                if(employee_data_list.content[z][30] == "ACTIVE"){
                    var full_name;
                    var gender = employee_data_list.content[z][6];
                    if(gender == "MALE"){
                        console.log("🚀 ~ file: user9.js:290 ~ select ~ gender:", gender)
                        full_name = `${employee_data_list.content[z][3]}, ${employee_data_list.content[z][1]} ${employee_data_list.content[z][2]} ${employee_data_list.content[z][5]}`
                    }
                    else{
                        full_name = `${employee_data_list.content[z][3]}, ${employee_data_list.content[z][1]} ${employee_data_list.content[z][2]} - ${employee_data_list.content[z][4]}`
                    }
                    if(select_user_data == full_name){
                        for(x=1; x<=7; x++){
                            time_in_sched.value = convertTo24HourFormat(time_decoder(employee_data_list.content[z][36]));
                            time_out_sched.value = convertTo24HourFormat(time_decoder(employee_data_list.content[z][37]));
                            if(parseInt(time_in_sched.value.slice(0,2)) >= 18){
                                allowance[x].value = parseFloat(employee_data_list.content[z][35]);
                            }
                            else{
                                allowance[x].value = parseFloat(employee_data_list.content[z][34]);
                            }
                            id_no.value = employee_data_list.content[z][0];
                            department.value = employee_data_list.content[z][31];
                            designation.value = employee_data_list.content[z][32];
                            daily_rate.value = employee_data_list.content[z][33];
                            day_allowance.value = employee_data_list.content[z][34];
                            night_allowance.value = employee_data_list.content[z][35];
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
                            calculateNetSalary();
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
                <div class="day px-3" id="day${x}">
                    <div class="first_day">
                        <div class="label text-center">ABSENT / REST DAY /<br>SICK LEAVE / LEAVE</div>
                        <div class="d-flex justify-content-between">
                            <div id="absent_box_input${x}" class="d-flex flex-column">
                                <div class="fs-5 d-flex justify-content-center"><b>A</b></div>
                                <label for="absent_box${x}" class="custom-checkbox">
                                    <input type="checkbox" id="absent_box${x}" name="absent_box${x}" value="YES">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div id="rest_day_box_input${x}" class="d-flex flex-column">
                                <div class="fs-5 d-flex justify-content-center"><b>RD</b></div>
                                <label for="rest_day_box${x}" class="custom-checkbox">
                                    <input type="checkbox" id="rest_day_box${x}" name="rest_day_box${x}" value="YES">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div id="sick_leave_box_input${x}" class="d-flex flex-column">
                                <div class="fs-5 d-flex justify-content-center"><b>SL</b></div>
                                <label class="custom-checkbox">
                                    <input type="checkbox" id="sick_leave_box${x}" name="sick_leave_box${x}">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div id="vacation_leave_box_input${x}" class="d-flex flex-column">
                                <div class="fs-5 d-flex justify-content-center"><b>VL</b></div>
                                <label class="custom-checkbox">
                                    <input type="checkbox" id="vacation_leave_box${x}" name="vacation_leave_box${x}">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div id="leave_box_input${x}" class="d-flex flex-column">
                                <div class="fs-5 d-flex justify-content-center"><b>L</b></div>
                                <label class="custom-checkbox">
                                    <input type="checkbox" id="leave_box${x}" name="leave_box${x}">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="first_day">
                        <div class="label text-center">HALF DAY / REST DAY DUTY<br>REGULAR HOLIDAY/<br>SPECIAL HOLIDAY</div>
                        <div class="d-flex justify-content-between">
                            <div id="half_day_box_input${x}" class="d-flex flex-column">
                            <div class="fs-5 d-flex justify-content-center"><b>HD</b></div>
                                <label for="half_day_box${x}" class="custom-checkbox">
                                <input type="checkbox" id="half_day_box${x}" name="half_day_box${x}" value="YES">
                                <span class="checkmark"></span>
                                </label>
                            </div>
                            <div id="rest_day_duty_box_input${x}" class="d-flex flex-column">
                                <div class="fs-5 d-flex justify-content-center"><b>RDD</b></div>
                                <label class="custom-checkbox">
                                    <input type="checkbox" id="rest_day_duty_box${x}" name="rest_day_duty_box${x}" value="YES">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div id="regular_holiday_box_input${x}" class="d-flex flex-column">
                                <div class="fs-5 d-flex justify-content-center"><b>RH</b></div>
                                <label class="custom-checkbox">
                                    <input type="checkbox" id="regular_holiday_box${x}" name="regular_holiday_box${x}" value="YES">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div id="special_holiday_box_input${x}" class="d-flex flex-column">
                                <div class="fs-5 d-flex justify-content-center"><b>SH</b></div>
                                <label class="custom-checkbox">
                                    <input type="checkbox" id="special_holiday_box${x}" name="special_holiday_box${x}" value="YES">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="first_day">
                            <div class="label fs-3">DAY</div>
                            <div class="day_input${x}">
                                <div for="time_in${x}" class="text-center fs-3">
                                    <b>${day_name[x]}</b><br>
                                </div>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label fs-3">DATE</div>
                            <div class="day_input${x}">
                                <input type="date" class="form-control" id="date_input${x}" name="date_input${x}" readonly>                         
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">TIME IN</div>
                            <div class="day_input${x}">
                                <input type="time" class="form-control" id="time_in${x}" name="time_in${x}">
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">TIME OUT</div>
                            <div class="day_input${x}">
                                <input type="time" class="form-control" id="time_out${x}" name="time_out${x}">
                            </div>
                        </div>
                        <div class="first_day">
                            <div></div>
                            <div class="day_input${x}">
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
                        </div>
                        <div class="first_day">
                            <div class="label">BREAK (hours)</div>
                            <div class="day_input${x}">
                                <div class="d-flex" style="justify-content: space-around;">
                                    <input type="number" class="form-control" au id="day_break${x}" name="day_break${x}" required autocomplete="off" value="0">
                                    <input type="number" class="form-control" id="night_break${x}" name="night_break${x}" required autocomplete="off" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">HOURS</div>
                            <div class="day_input${x}">
                                <div class="d-flex">
                                    <input type="number" class="form-control text-center" readonly id="regular_hours${x}" name="regular_hours${x}" value="0">
                                    <input type="number" class="form-control text-center" readonly id="night_hours${x}" name="night_hours${x}" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">RATE</div>
                            <div class="day_input${x}">
                                <div class="d-flex" style="justify-content: space-around;">
                                    <div id="regular_hour_rate${x}" name="regular_hour_rate${x}">1.00</div>
                                    <div id="night_hour_rate${x}" name="night_hour_rate${x}">1.10</div>
                                </div>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">RATE/hour</div>
                            <div class="day_input${x}">
                                <div class="d-flex">
                                    <input type="number" class="form-control text-center" readonly id="regular_rate_per_hour${x}" name="regular_rate_per_hour${x}" value="0">
                                    <input type="number" class="form-control text-center" readonly id="night_rate_per_hour${x}" name="night_rate_per_hour${x}" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">HOURS X RATE</div>
                            <div class="day_input${x}">
                                <div class="d-flex">
                                    <input type="number" class="form-control text-center" readonly id="regular_hours_pay${x}" name="regular_hours_pay${x}" value="0">
                                    <input type="number" class="form-control text-center" readonly id="night_hours_pay${x}" name="night_hours_pay${x}" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">SUBTOTAL</div>
                            <div class="day_input${x}">
                                <input type="number" class="form-control text-center" readonly id="subtotal${x}" name="subtotal${x}" value="0">
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">LATE (mins)</div>
                            <div class="day_input${x}">
                                <input type="number" class="form-control text-center" id="late_mins${x}" name="late_mins${x}" value="0">                        
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">UNDERTIME (hours)</div>
                            <div class="day_input${x}">
                                <input type="number" class="form-control text-center" id="under_time_mins${x}" name="under_time_mins${x}" value="0">
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">LATE DEDUCTION</div>
                            <div class="day_input${x}">
                                <input type="number" class="form-control text-center" readonly id="late_deduction${x}" name="late_deduction${x}" value="0">
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">UNDERTIME DEDUCTION</div>
                            <div class="day_input${x}">
                                <input type="number" class="form-control text-center" readonly id="under_time_deduction${x}" name="under_time_deduction${x}" value="0">
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">8 HOUR PAY</div>
                            <div class="day_input${x}">
                                <input type="number" class="form-control text-center" readonly id="regular_pay${x}" name="regular_pay${x}" value="0">
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">WITH OT SLIP</div>
                            <div id="with_ot_box_input${x}">
                                <label for="with_ot_box${x}" class="custom-checkbox">
                                    <input type="checkbox" id="with_ot_box${x}" name="with_ot_box${x}">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div class="first_day">
                                <div class="label">OT BREAK</div>
                                <div class="ot_input${x} disabled">
                                    <div class="d-flex" style="justify-content: space-around;">
                                        <input type="number" class="form-control" id="ot_day_break${x}" name="ot_day_break${x}" required autocomplete="off" value="0">
                                        <input type="number" class="form-control" id="ot_night_break${x}" name="ot_night_break${x}" required autocomplete="off" value="0">
                                    </div>
                                </div>
                            </div>
                            <div class="first_day">
                                <div class="label">OT HOURS</div>
                                <div class="ot_input${x} disabled">
                                    <div class="d-flex">
                                        <input type="number" class="form-control text-center" readonly id="ot_hours${x}" name="ot_hours${x}" value="0">
                                        <input type="number" class="form-control text-center" readonly id="ot_night_hours${x}" name="ot_night_hours${x}" value="0">
                                    </div>
                                </div>
                            </div>
                            <div class="first_day">
                                <div class="label">OT RATE</div>
                                <div class="ot_input${x} disabled">                                
                                    <div class="d-flex" style="justify-content: space-around !important; width: 100% !important">
                                        <div id="ot_regular_hour_rate${x}" name="ot_regular_hour_rate${x}">1.25</div>
                                        <div id="ot_night_hour_rate${x}" name="ot_night_hour_rate${x}">1.375</div>
                                    </div>
                                </div>
                            </div>
                            <div class="first_day">
                                <div class="label">OT RATE/hour</div>
                                <div class="ot_input${x} disabled">
                                    <div class="d-flex">
                                        <input type="number" class="form-control text-center" readonly id="ot_rate_per_hour${x}" name="ot_rate_per_hour${x}" value="0">
                                        <input type="number" class="form-control text-center" readonly id="ot_night_rate_per_hour${x}" name="ot_night_rate_per_hour${x}" value="0">
                                    </div>
                                </div>
                            </div>
                            <div class="first_day">
                                <div class="label">OT HOURS X RATE</div>
                                <div class="ot_input${x} disabled">
                                    <div class="d-flex">
                                        <input type="number" class="form-control text-center" readonly id="ot_pay${x}" name="ot_pay${x}" value="0">
                                        <input type="number" class="form-control text-center" readonly id="ot_night_pay${x}" name="ot_night_pay${x}" value="0">
                                    </div>
                                </div>
                            </div>
                            <div class="first_day">
                                <div class="label">OT PAY</div>
                                <div class="ot_input${x} disabled">
                                    <input type="number" class="form-control text-center" readonly id="ot_pay_subtotal${x}" name="ot_pay_subtotal${x}" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">ALLOWANCE</div>
                            <div class="day_input${x}">
                                <input type="number" class="form-control text-center" readonly id="allowance${x}" name="allowance${x}" value="0">
                            </div>
                        </div>
                        <div class="first_day">
                            <div class="label">SALARY / DAY</div>
                            <div id="salary_day_input${x}">
                                <input type="number" class="form-control text-center" readonly id="salary_day${x}" name="salary_day${x}" value="0">
                            </div>                           
                        </div>
                    </div>
                </div>`    
            }
            else{
                day_list += `                   
                <div class="day px-3" id="day${x}">
                    <div class="d-flex justify-content-between">
                        <div id="absent_box_input${x}" class="d-flex flex-column">
                            <div class="fs-5 d-flex justify-content-center"><b>A</b></div>
                            <label for="absent_box${x}" class="custom-checkbox">
                                <input type="checkbox" id="absent_box${x}" name="absent_box${x}" value="YES">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="rest_day_box_input${x}" class="d-flex flex-column">
                            <div class="fs-5 d-flex justify-content-center"><b>RD</b></div>
                            <label for="rest_day_box${x}" class="custom-checkbox">
                                <input type="checkbox" id="rest_day_box${x}" name="rest_day_box${x}" value="YES">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="sick_leave_box_input${x}" class="d-flex flex-column">
                            <div class="fs-5 d-flex justify-content-center"><b>SL</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="sick_leave_box${x}" name="sick_leave_box${x}">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="vacation_leave_box_input${x}" class="d-flex flex-column">
                            <div class="fs-5 d-flex justify-content-center"><b>VL</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="vacation_leave_box${x}" name="vacation_leave_box${x}">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="leave_box_input${x}" class="d-flex flex-column">
                            <div class="fs-5 d-flex justify-content-center"><b>L</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="leave_box${x}" name="leave_box${x}">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div id="half_day_box_input${x}" class="d-flex flex-column">
                        <div class="fs-5 d-flex justify-content-center"><b>HD</b></div>
                            <label for="half_day_box${x}" class="custom-checkbox">
                            <input type="checkbox" id="half_day_box${x}" name="half_day_box${x}" value="YES">
                            <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="rest_day_duty_box_input${x}" class="d-flex flex-column">
                            <div class="fs-5 d-flex justify-content-center"><b>RDD</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="rest_day_duty_box${x}" name="rest_day_duty_box${x}" value="YES">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="regular_holiday_box_input${x}" class="d-flex flex-column">
                            <div class="fs-5 d-flex justify-content-center"><b>RH</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="regular_holiday_box${x}" name="regular_holiday_box${x}" value="YES">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="special_holiday_box_input${x}" class="d-flex flex-column">
                            <div class="fs-5 d-flex justify-content-center"><b>SH</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="special_holiday_box${x}" name="special_holiday_box${x}" value="YES">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div class="day_input${x}">
                        <div class="text-center">
                            <div for="time_in${x}" class="text-center fs-3">
                                <b>${day_name[x]}</b>
                                <input type="date" class="form-control" id="date_input${x}" name="date_input${x}" readonly>                         
                            </div>
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
                        <input type="number" class="form-control text-center" id="late_mins${x}" name="late_mins${x}" value="0">
                        <input type="number" class="form-control text-center" id="under_time_mins${x}" name="under_time_mins${x}" value="0">
                        <input type="number" class="form-control text-center" readonly id="late_deduction${x}" name="late_deduction${x}" value="0">
                        <input type="number" class="form-control text-center" readonly id="under_time_deduction${x}" name="under_time_deduction${x}" value="0">
                        <input type="number" class="form-control text-center" readonly id="regular_pay${x}" name="regular_pay${x}" value="0">
                        <div id="with_ot_box_input${x}">
                            <label for="with_ot_box${x}" class="custom-checkbox">
                                <input type="checkbox" id="with_ot_box${x}" name="with_ot_box${x}">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="ot_input${x} disabled">
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
                    </div>
                    <div id="salary_day_input${x}">
                        <input type="number" class="form-control text-center" readonly id="salary_day${x}" name="salary_day${x}" value="0">
                    </div>    
                </div>`    
            }
        }
        days.innerHTML = day_list;

          // Get all input elements of type "number"
        const numberInputs = document.querySelectorAll('input[type="number"]');

        // Loop through each input and set the "step" attribute
        numberInputs.forEach(input => {
            input.setAttribute('step', '0.01'); // Set the desired step value
        });
        
        for (let x = 1; x <= 7; x++) {
            day[x] = document.getElementById(`day${x}`);
            date_input[x] = document.querySelector(`#date_input${x}`);
            absent_box_input[x] = document.querySelector(`#absent_box_input${x}`);
            absent_box[x] = document.querySelector(`#absent_box${x}`);
            sick_leave_box_input[x] = document.querySelector(`#sick_leave_box_input${x}`);
            sick_leave_box[x] = document.querySelector(`#sick_leave_box${x}`);
            vacation_leave_box_input[x] = document.querySelector(`#vacation_leave_box_input${x}`);
            vacation_leave_box[x] = document.querySelector(`#vacation_leave_box${x}`);
            leave_box_input[x] = document.querySelector(`#leave_box_input${x}`);
            leave_box[x] = document.querySelector(`#leave_box${x}`);
            rest_day_box_input[x] = document.querySelector(`#rest_day_box_input${x}`);
            rest_day_box[x] = document.querySelector(`#rest_day_box${x}`);
            day_input[x] = document.querySelectorAll(`.day_input${x}`);
            half_day_box_input[x] = document.querySelector(`#half_day_box_input${x}`);
            half_day_box[x] = document.querySelector(`#half_day_box${x}`);
            rest_day_duty_box_input[x] = document.querySelector(`#rest_day_duty_box_input${x}`);
            rest_day_duty_box[x] = document.querySelector(`#rest_day_duty_box${x}`);
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
            with_ot_box_input[x] = document.querySelector(`#with_ot_box_input${x}`);
            with_ot_box[x] = document.querySelector(`#with_ot_box${x}`);
            ot_input[x] = document.querySelectorAll(`.ot_input${x}`);
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
            salary_day_input[x] = document.querySelector(`#salary_day_input${x}`);
            salary_day[x] = document.querySelector(`#salary_day${x}`);
            
            // Use a function to create a new scope for each iteration
            
            function calculateGrossSalary(){
                if (regular_holiday_box[x].checked == true) {
                    if (rest_day_duty_box[x].checked == true) {
                        regular_hours_pay[x].value = (parseFloat(regular_hours[x].value) * parseFloat(regular_rate_per_hour[x].value));
                        night_hours_pay[x].value = (parseFloat(night_hours[x].value) * parseFloat(night_rate_per_hour[x].value));
                        subtotal[x].value = (parseFloat(regular_hours_pay[x].value) + parseFloat(night_hours_pay[x].value)).toFixed(2);
                        if (half_day_box[x].checked == true) {
                            late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 4 / 60));
                            under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 4));
                        }
                        else{
                            late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 8 / 60));
                            under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 8));
                        }
                        regular_pay[x].value = (parseFloat(subtotal[x].value) - (parseFloat(late_deduction[x].value) + parseFloat(under_time_deduction[x].value)) + (parseFloat(daily_rate.value) * 1.3)).toFixed(2);
                        ot_pay[x].value = (parseFloat(ot_hours[x].value) * parseFloat(ot_rate_per_hour[x].value));
                        ot_night_pay[x].value = (parseFloat(ot_night_hours[x].value) * parseFloat(ot_night_rate_per_hour[x].value));
                        ot_pay_subtotal[x].value = (parseFloat(ot_pay[x].value) + parseFloat(ot_night_pay[x].value)).toFixed(2);
                        salary_day[x].value = (parseFloat(regular_pay[x].value) + parseFloat(ot_pay_subtotal[x].value) + parseFloat(allowance[x].value)).toFixed(2);        
                    }
                    else{
                        regular_hours_pay[x].value = (parseFloat(regular_hours[x].value) * parseFloat(regular_rate_per_hour[x].value));
                        night_hours_pay[x].value = (parseFloat(night_hours[x].value) * parseFloat(night_rate_per_hour[x].value));
                        subtotal[x].value = (parseFloat(regular_hours_pay[x].value) + parseFloat(night_hours_pay[x].value)).toFixed(2);
                        if (half_day_box[x].checked == true) {
                            late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 4 / 60));
                            under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 4));
                        }
                        else{
                            late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 8 / 60));
                            under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 8));
                        }                        
                        regular_pay[x].value = (parseFloat(subtotal[x].value) - (parseFloat(late_deduction[x].value) + parseFloat(under_time_deduction[x].value)) + parseFloat(daily_rate.value)).toFixed(2);
                        ot_pay[x].value = (parseFloat(ot_hours[x].value) * parseFloat(ot_rate_per_hour[x].value));
                        ot_night_pay[x].value = (parseFloat(ot_night_hours[x].value) * parseFloat(ot_night_rate_per_hour[x].value));
                        ot_pay_subtotal[x].value = (parseFloat(ot_pay[x].value) + parseFloat(ot_night_pay[x].value)).toFixed(2);
                        salary_day[x].value = (parseFloat(regular_pay[x].value) + parseFloat(ot_pay_subtotal[x].value) + parseFloat(allowance[x].value)).toFixed(2);   
                    }
                }
                else{
                    regular_hours_pay[x].value = (parseFloat(regular_hours[x].value) * parseFloat(regular_rate_per_hour[x].value));
                    night_hours_pay[x].value = (parseFloat(night_hours[x].value) * parseFloat(night_rate_per_hour[x].value));
                    subtotal[x].value = (parseFloat(regular_hours_pay[x].value) + parseFloat(night_hours_pay[x].value)).toFixed(2);
                    if (half_day_box[x].checked == true) {
                        late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 4 / 60));
                        under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 4));
                    }
                    else{
                        late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 8 / 60));
                        under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 8));
                    }                    
                    regular_pay[x].value = (parseFloat(subtotal[x].value) - (parseFloat(late_deduction[x].value) + parseFloat(under_time_deduction[x].value))).toFixed(2);
                    ot_pay[x].value = (parseFloat(ot_hours[x].value) * parseFloat(ot_rate_per_hour[x].value));
                    ot_night_pay[x].value = (parseFloat(ot_night_hours[x].value) * parseFloat(ot_night_rate_per_hour[x].value));
                    ot_pay_subtotal[x].value = (parseFloat(ot_pay[x].value) + parseFloat(ot_night_pay[x].value)).toFixed(2);
                    salary_day[x].value = (parseFloat(regular_pay[x].value) + parseFloat(ot_pay_subtotal[x].value) + parseFloat(allowance[x].value)).toFixed(2);    
                }
            }
            
            function calculateUnderTimeHour(){
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

                if(half_day_box[x].checked == true){
                    time_out_sched_total_mins -= 240;
                }
                var break_hours = parseFloat(day_break[x].value) + parseFloat(night_break[x].value);
                var break_mins = break_hours * 60;
                time_out_sched_total_mins -= break_mins;
                
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
            }

            function calculateRatePerHour(){
                regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1);
                night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.1);
            }

            function calculateOtRatePerHour(){
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
                    else if(((parseFloat(regular_hours[x].value))+(parseFloat(night_hours[x].value))) < 8 && ((parseFloat(regular_hours[x].value))+(parseFloat(night_hours[x].value))) >= 4){
                        allowance[x].value = parseFloat(night_allowance.value)/2;
                    }
                    else if(((parseFloat(regular_hours[x].value))+(parseFloat(night_hours[x].value))) < 4){
                        allowance[x].value = 0;
                    }
                }
                else{
                    if(((parseFloat(regular_hours[x].value))+(parseFloat(night_hours[x].value))) >= 8){
                        allowance[x].value = parseFloat(day_allowance.value);
                    }
                    else if(((parseFloat(regular_hours[x].value))+(parseFloat(night_hours[x].value))) < 8 && ((parseFloat(regular_hours[x].value))+(parseFloat(night_hours[x].value))) >= 4){
                        allowance[x].value = parseFloat(day_allowance.value)/2;
                    }
                    else if(((parseFloat(regular_hours[x].value))+(parseFloat(night_hours[x].value))) < 8){
                        allowance[x].value = 0;
                    }
                }
            }

            function calculateNetSalary(){
                var net_income = 0;
                for(let y = 1; y <= 7; y++){
                    net_income += parseFloat(salary_day[y].value)
                }
                gross_salary.value = net_income;
                var additional = 0;
                additional = parseFloat(adjustment.value) + parseFloat(cash_advance.value)

                var deduction = 0;
                deduction = parseFloat(sss_deduction.value) + parseFloat(pag_ibig_deduction.value) + parseFloat(philhealth_deduction.value) + parseFloat(sss_loan.value) + parseFloat(pag_ibig_loan.value) + parseFloat(ca_deduction.value) + parseFloat(uniform.value) + parseFloat(housing.value) + parseFloat(st_peter.value) + parseFloat(cash_not_return.value) + parseFloat(hard_hat.value) + parseFloat(safety_shoes.value) + parseFloat(over_meals.value) + parseFloat(bereavement_assistance.value);
            
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
                
                if (half_day_box[x].checked == true) {
                    time_end -= 4;
                                    
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
                else{
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
                if (with_ot_box[x].checked == true) {
                    ot_hours[x].value = regularOvertimeHours - parseFloat(ot_day_break[x].value);
                    ot_night_hours[x].value = nightDifferentialOvertimeHours - parseFloat(ot_night_break[x].value);
                }
            }

            function calculateRegularHoliday(){
                if (regular_holiday_box[x].checked == true) {
                    regular_hour_rate[x].innerText = "1.00";
                    night_hour_rate[x].innerText = "1.10";
                    ot_regular_hour_rate[x].innerText = "2.60";
                    ot_night_hour_rate[x].innerText = "2.86";
                    if (with_ot_box[x].checked == true) {
                        ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.6);
                        ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 2.86);
                    }
                    else{
                        ot_rate_per_hour[x].value = 0;
                        ot_night_rate_per_hour[x].value = 0;
                    }
                    if (rest_day_duty_box[x].checked == true) {
                        regular_hour_rate[x].innerText = "1.3";
                        night_hour_rate[x].innerText = "1.43";
                        ot_regular_hour_rate[x].innerText = "3.38";
                        ot_night_hour_rate[x].innerText = "3.718";
                        if (with_ot_box[x].checked == true) {
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 3.38);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 3.718);
                        }
                    }
                } 
                else {
                    special_holiday_box_input[x].classList.remove('disabled');
                    regular_hour_rate[x].innerText = "1.00";
                    night_hour_rate[x].innerText = "1.10";
                    ot_regular_hour_rate[x].innerText = "1.25";
                    ot_night_hour_rate[x].innerText = "1.375";
                    if (with_ot_box[x].checked == true) {
                        ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.25);
                        ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.375);
                    }
                    if (rest_day_duty_box[x].checked == true) {
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
            }
                                    
            time_out_sched.addEventListener("change", () => {
                calculateGrossSalary();
                calculateNetSalary();
            })           

            daily_rate.addEventListener("keyup", () => {                
                calculateGrossSalary();
                calculateNetSalary();
            });
            
            absent_box[x].addEventListener("click", () => {
                if (absent_box[x].checked == true) {
                    absent_box[x].value = "YES";
                    day_input[x].forEach(otherInput => {otherInput.classList.add('disabled')});
                    rest_day_box_input[x].classList.add('disabled');
                    sick_leave_box_input[x].classList.add('disabled');
                    vacation_leave_box_input[x].classList.add('disabled');
                    leave_box_input[x].classList.add('disabled');
                    half_day_box_input[x].classList.add('disabled');
                    rest_day_duty_box_input[x].classList.add('disabled');
                    special_holiday_box_input[x].classList.add('disabled');
                    const day_input_number_elements = day[x].querySelectorAll("input[type='number']");
                    const day_input_time_elements = day[x].querySelectorAll("input[type='time']");
                    day_input_number_elements.forEach((inputElement) => {
                        inputElement.value = "0";
                    });
                    day_input_time_elements.forEach((inputElement) => {
                        inputElement.value = "";
                    });
                    if (regular_holiday_box[x].checked == true) {
                        salary_day[x].value = parseFloat(daily_rate.value)
                    }
                    else{
                        salary_day_input[x].classList.add('disabled');
                    }
                    calculateNetSalary();
                }
                else {
                    absent_box[x].value = "NO";
                    day_input[x].forEach(otherInput => {otherInput.classList.remove('disabled')});
                    salary_day_input[x].classList.remove('disabled');
                    rest_day_box_input[x].classList.remove('disabled');
                    sick_leave_box_input[x].classList.remove('disabled');
                    vacation_leave_box_input[x].classList.remove('disabled');
                    leave_box_input[x].classList.remove('disabled');
                    half_day_box_input[x].classList.remove('disabled');
                    rest_day_duty_box_input[x].classList.remove('disabled');
                    special_holiday_box_input[x].classList.remove('disabled');
                    calculateHours();
                    calculateRatePerHour();
                    calculateOtRatePerHour();
                    calculateAllowance();
                    calculateGrossSalary();
                    calculateNetSalary();
                }
            });
            
            rest_day_box[x].addEventListener("click", () => {
                if (rest_day_box[x].checked == true) {
                    rest_day_box[x].value = "YES";
                    day_input[x].forEach(otherInput => {otherInput.classList.add('disabled')});
                    salary_day_input[x].classList.add('disabled');
                    absent_box_input[x].classList.add('disabled');
                    sick_leave_box_input[x].classList.add('disabled');
                    vacation_leave_box_input[x].classList.add('disabled');
                    leave_box_input[x].classList.add('disabled');
                    half_day_box_input[x].classList.add('disabled');
                    rest_day_duty_box_input[x].classList.add('disabled');
                    regular_holiday_box_input[x].classList.add('disabled');
                    special_holiday_box_input[x].classList.add('disabled');
                    const day_input_number_elements = day[x].querySelectorAll("input[type='number']");
                    const day_input_time_elements = day[x].querySelectorAll("input[type='time']");
                    day_input_number_elements.forEach((inputElement) => {
                        inputElement.value = "0";
                    });
                    day_input_time_elements.forEach((inputElement) => {
                        inputElement.value = "";
                    });
                    calculateNetSalary();
                }
                else {
                    rest_day_box[x].value = "NO";
                    day_input[x].forEach(otherInput => {otherInput.classList.remove('disabled')});
                    salary_day_input[x].classList.remove('disabled');
                    absent_box_input[x].classList.remove('disabled');
                    sick_leave_box_input[x].classList.remove('disabled');
                    vacation_leave_box_input[x].classList.remove('disabled');
                    leave_box_input[x].classList.remove('disabled');
                    half_day_box_input[x].classList.remove('disabled');
                    rest_day_duty_box_input[x].classList.remove('disabled');
                    regular_holiday_box_input[x].classList.remove('disabled');
                    special_holiday_box_input[x].classList.remove('disabled');
                    calculateHours();
                    calculateRatePerHour();
                    calculateOtRatePerHour();
                    calculateAllowance();
                    calculateGrossSalary();
                    calculateNetSalary();
                }
            });
            
            sick_leave_box[x].addEventListener("click", () => {
                if (sick_leave_box[x].checked == true) {
                    sick_leave_box[x].value = "YES";
                    day_input[x].forEach(otherInput => {otherInput.classList.add('disabled')});
                    absent_box_input[x].classList.add('disabled');
                    rest_day_box_input[x].classList.add('disabled');
                    vacation_leave_box_input[x].classList.add('disabled');
                    leave_box_input[x].classList.add('disabled');
                    half_day_box_input[x].classList.add('disabled');
                    rest_day_duty_box_input[x].classList.add('disabled');
                    regular_holiday_box_input[x].classList.add('disabled');
                    special_holiday_box_input[x].classList.add('disabled');
                    const day_input_number_elements = day[x].querySelectorAll("input[type='number']");
                    const day_input_time_elements = day[x].querySelectorAll("input[type='time']");
                    day_input_number_elements.forEach((inputElement) => {
                        inputElement.value = "0";
                    });
                    day_input_time_elements.forEach((inputElement) => {
                        inputElement.value = "";
                    });
                    salary_day[x].value = daily_rate.value
                    calculateNetSalary();
                }
                else {
                    sick_leave_box[x].value = "NO";
                    day_input[x].forEach(otherInput => {otherInput.classList.remove('disabled')});
                    absent_box_input[x].classList.remove('disabled');
                    rest_day_box_input[x].classList.remove('disabled');
                    vacation_leave_box_input[x].classList.remove('disabled');
                    leave_box_input[x].classList.remove('disabled');
                    half_day_box_input[x].classList.remove('disabled');
                    rest_day_duty_box_input[x].classList.remove('disabled');
                    regular_holiday_box_input[x].classList.remove('disabled');
                    special_holiday_box_input[x].classList.remove('disabled');
                    calculateHours();
                    calculateRatePerHour();
                    calculateOtRatePerHour();
                    calculateAllowance();
                    calculateGrossSalary();
                    calculateNetSalary();
                }
            });

            vacation_leave_box[x].addEventListener("click", () => {
                if (vacation_leave_box[x].checked == true) {
                    vacation_leave_box[x].value = "YES";
                    day_input[x].forEach(otherInput => {otherInput.classList.add('disabled')});
                    absent_box_input[x].classList.add('disabled');
                    rest_day_box_input[x].classList.add('disabled');
                    sick_leave_box_input[x].classList.add('disabled');
                    leave_box_input[x].classList.add('disabled');
                    half_day_box_input[x].classList.add('disabled');
                    rest_day_duty_box_input[x].classList.add('disabled');
                    regular_holiday_box_input[x].classList.add('disabled');
                    special_holiday_box_input[x].classList.add('disabled');
                    const day_input_number_elements = day[x].querySelectorAll("input[type='number']");
                    const day_input_time_elements = day[x].querySelectorAll("input[type='time']");
                    day_input_number_elements.forEach((inputElement) => {
                        inputElement.value = "0";
                    });
                    day_input_time_elements.forEach((inputElement) => {
                        inputElement.value = "";
                    });
                    salary_day[x].value = daily_rate.value
                    calculateNetSalary();
                }
                else {
                    vacation_leave_box[x].value = "NO";
                    day_input[x].forEach(otherInput => {otherInput.classList.remove('disabled')});
                    absent_box_input[x].classList.remove('disabled');
                    rest_day_box_input[x].classList.remove('disabled');
                    sick_leave_box_input[x].classList.remove('disabled');
                    leave_box_input[x].classList.remove('disabled');
                    half_day_box_input[x].classList.remove('disabled');
                    rest_day_duty_box_input[x].classList.remove('disabled');
                    regular_holiday_box_input[x].classList.remove('disabled');
                    special_holiday_box_input[x].classList.remove('disabled');
                    calculateHours();
                    calculateRatePerHour();
                    calculateOtRatePerHour();
                    calculateAllowance();
                    calculateGrossSalary();
                    calculateNetSalary();
                }
            });


            leave_box[x].addEventListener("click", () => {
                if (leave_box[x].checked == true) {
                    leave_box[x].value = "YES";
                    day_input[x].forEach(otherInput => {otherInput.classList.add('disabled')});
                    salary_day_input[x].classList.add('disabled');
                    absent_box_input[x].classList.add('disabled');
                    rest_day_box_input[x].classList.add('disabled');
                    sick_leave_box_input[x].classList.add('disabled');
                    vacation_leave_box_input[x].classList.add('disabled');
                    half_day_box_input[x].classList.add('disabled');
                    rest_day_duty_box_input[x].classList.add('disabled');
                    regular_holiday_box_input[x].classList.add('disabled');
                    special_holiday_box_input[x].classList.add('disabled');
                    const day_input_number_elements = day[x].querySelectorAll("input[type='number']");
                    const day_input_time_elements = day[x].querySelectorAll("input[type='time']");
                    day_input_number_elements.forEach((inputElement) => {
                        inputElement.value = "0";
                    });
                    day_input_time_elements.forEach((inputElement) => {
                        inputElement.value = "";
                    });
                    calculateNetSalary();
                }
                else {
                    leave_box[x].value = "NO";
                    day_input[x].forEach(otherInput => {otherInput.classList.remove('disabled')});
                    absent_box_input[x].classList.remove('disabled');
                    rest_day_box_input[x].classList.remove('disabled');
                    sick_leave_box_input[x].classList.remove('disabled');
                    vacation_leave_box_input[x].classList.remove('disabled');
                    salary_day_input[x].classList.remove('disabled');
                    half_day_box_input[x].classList.remove('disabled');
                    rest_day_duty_box_input[x].classList.remove('disabled');
                    regular_holiday_box_input[x].classList.remove('disabled');
                    special_holiday_box_input[x].classList.remove('disabled');
                    calculateHours();
                    calculateRatePerHour();
                    calculateOtRatePerHour();
                    calculateAllowance();
                    calculateGrossSalary();
                    calculateNetSalary();
                }
            });
            
            half_day_box[x].addEventListener("click", () => {
                if (half_day_box[x].checked == true) {
                    half_day_box[x].value = "YES";
                    absent_box_input[x].classList.add('disabled');
                    rest_day_box_input[x].classList.add('disabled')
                    sick_leave_box_input[x].classList.add('disabled');
                    vacation_leave_box_input[x].classList.add('disabled');
                    leave_box_input[x].classList.add('disabled');
                    with_ot_box_input[x].classList.add('disabled');
                    
                }
                else{
                    half_day_box[x].value = "NO";
                    with_ot_box_input[x].classList.remove('disabled');
                    if(regular_holiday_box[x].checked == true && rest_day_duty_box[x].checked == false ){
                        absent_box_input[x].classList.remove('disabled');
                    }
                    else if(regular_holiday_box[x].checked == true && rest_day_duty_box[x].checked == true ){
                    }
                    else if(regular_holiday_box[x].checked == false && rest_day_duty_box[x].checked == true ){
                    }
                    else if(special_holiday_box[x].checked == true){
                    }
                    else{
                        absent_box_input[x].classList.remove('disabled');
                        rest_day_box_input[x].classList.remove('disabled');
                        sick_leave_box_input[x].classList.remove('disabled');
                        vacation_leave_box_input[x].classList.remove('disabled');
                        leave_box_input[x].classList.remove('disabled');
                    }
                }
                calculateHours();
                calculateAllowance();
                calculateGrossSalary();
                calculateNetSalary();
            })
            
            rest_day_duty_box[x].addEventListener("click", () => {
                if (rest_day_duty_box[x].checked == true) {
                    rest_day_duty_box[x].value = "YES";
                    absent_box_input[x].classList.add('disabled');
                    rest_day_box_input[x].classList.add('disabled');
                    sick_leave_box_input[x].classList.add('disabled');
                    vacation_leave_box_input[x].classList.add('disabled');
                    leave_box_input[x].classList.add('disabled');
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
                        regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.3);
                        night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.43);
                        regular_hour_rate[x].innerText = "1.3";
                        night_hour_rate[x].innerText = "1.43";
                        ot_regular_hour_rate[x].innerText = "3.38";
                        ot_night_hour_rate[x].innerText = "3.718";
                        if (with_ot_box[x].checked == true) {
                            ot_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 3.38);
                            ot_night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 3.718);
                        }
                        calculateRegularHoliday();
                    }
                } 
                else {
                    rest_day_duty_box[x].value = "NO";
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
                    else if (regular_holiday_box[x].checked == true) {
                        regular_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1);
                        night_rate_per_hour[x].value = (parseFloat(daily_rate.value)/8 * 1.1);
                        regular_hour_rate[x].innerText = "1.00";
                        night_hour_rate[x].innerText = "1.10";
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
                        calculateRegularHoliday();
                    }
                    if (regular_holiday_box[x].checked == true && half_day_box[x].checked == false ) {
                        absent_box_input[x].classList.remove('disabled');
                    }
                    else if (regular_holiday_box[x].checked == true && half_day_box[x].checked == true ) {
                    }
                    else if (special_holiday_box[x].checked == true) {
                    }
                    else{
                        absent_box_input[x].classList.remove('disabled');
                        rest_day_box_input[x].classList.remove('disabled');
                        sick_leave_box_input[x].classList.remove('disabled');
                        vacation_leave_box_input[x].classList.remove('disabled');
                        leave_box_input[x].classList.remove('disabled');
                    }
                }
                calculateGrossSalary();
                calculateNetSalary();
            });

            regular_holiday_box[x].addEventListener("click", () => {
                if (regular_holiday_box[x].checked == true) {
                    regular_holiday_box[x].value = "YES";
                    rest_day_box_input[x].classList.add('disabled');
                    sick_leave_box_input[x].classList.add('disabled');
                    vacation_leave_box_input[x].classList.add('disabled');
                    leave_box_input[x].classList.add('disabled');
                    special_holiday_box_input[x].classList.add('disabled');
                    if (absent_box[x].checked == true) {
                        salary_day_input[x].classList.remove('disabled');
                        salary_day[x].value = parseFloat(daily_rate.value);
                        calculateNetSalary();
                    }
                    calculateRegularHoliday();
                    calculateGrossSalary()
                }
                else{
                    regular_holiday_box[x].value = "NO";
                    if (half_day_box[x].checked == true) {
                        special_holiday_box_input[x].classList.remove('disabled');
                        console.log("pass1")
                    }
                    else if (rest_day_duty_box[x].checked == true) {

                    }
                    else if (absent_box[x].checked == true) {
                        console.log("pass2")
                        salary_day_input[x].classList.add('disabled');
                        salary_day[x].value = 0;
                        calculateNetSalary();
                    }
                    else{
                        console.log("pass3")
                        rest_day_box_input[x].classList.remove('disabled');
                        sick_leave_box_input[x].classList.remove('disabled');
                        vacation_leave_box_input[x].classList.remove('disabled');
                        leave_box_input[x].classList.remove('disabled');
                        special_holiday_box_input[x].classList.remove('disabled');

                    }
                    calculateRegularHoliday();
                    calculateGrossSalary();
                    calculateNetSalary();
                }
            });
            
            special_holiday_box[x].addEventListener("click", () => {
                if (special_holiday_box[x].checked == true) {
                    special_holiday_box[x].value = "YES";
                    absent_box_input[x].classList.add('disabled');
                    rest_day_box_input[x].classList.add('disabled');
                    sick_leave_box_input[x].classList.add('disabled');
                    vacation_leave_box_input[x].classList.add('disabled');
                    leave_box_input[x].classList.add('disabled');
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
                    if (rest_day_duty_box[x].checked == true) {
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
                    special_holiday_box[x].value = "NO";
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
                    if (rest_day_duty_box[x].checked == true) {
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
                    if(half_day_box[x].checked == true || rest_day_duty_box[x].checked == true ){
                    }
                    else{
                        absent_box_input[x].classList.remove('disabled');
                        rest_day_box_input[x].classList.remove('disabled');
                        sick_leave_box_input[x].classList.remove('disabled');
                        vacation_leave_box_input[x].classList.remove('disabled');
                        leave_box_input[x].classList.remove('disabled');
                    }
                }
                calculateGrossSalary();
                calculateNetSalary();
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
                calculateGrossSalary();
                calculateNetSalary();
            });
            
            day_break[x].addEventListener("keyup", () => {
                regular_hours[x].value = parseFloat(regular_hours[x].value) - parseFloat(day_break[x].value);
                calculateHours();
                calculateGrossSalary();
                calculateNetSalary();
            });

            night_break[x].addEventListener("keyup", () => {
                night_hours[x].value = parseFloat(night_hours[x].value) - parseFloat(night_break[x].value);
                calculateHours();
                calculateGrossSalary();
                calculateNetSalary();
            });

            ot_day_break[x].addEventListener("keyup", () => {
                ot_hours[x].value = parseFloat(ot_hours[x].value) - parseFloat(ot_day_break[x].value);
                calculateOvertimeHours();
                calculateGrossSalary();
                calculateNetSalary();
            });

            ot_night_break[x].addEventListener("keyup", () => {
                ot_night_hours[x].value = parseFloat(ot_night_hours[x].value) - parseFloat(ot_night_break[x].value);
                calculateOvertimeHours();
                calculateGrossSalary();
                calculateNetSalary();
            });
        
            time_out_input[x].addEventListener("change", () => {
                calculateUnderTimeHour();
                calculateOtRatePerHour();
                calculateOvertimeHours();
                calculateGrossSalary();
                calculateNetSalary();
            });
            
            with_ot_box[x].addEventListener("click", () => {
                if (with_ot_box[x].checked == true) {
                    ot_input[x].forEach(otherInput => {otherInput.classList.remove('disabled')});
                    if(regular_holiday_box[x].checked == true && rest_day_duty_box[x].checked == false){
                        ot_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 2.60;
                        ot_night_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 2.86;    
                        ot_regular_hour_rate[x].innerText = "2.60";    
                        ot_night_hour_rate[x].innerText= "2.86";    
                    }
                    else if(regular_holiday_box[x].checked == true && rest_day_duty_box[x].checked == true){
                        ot_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 3.38;
                        ot_night_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 3.718;    
                        ot_regular_hour_rate[x].innerText = "3.38";    
                        ot_night_hour_rate[x].innerText= "3.718";    
                    }
                    else if(special_holiday_box[x].checked == true && rest_day_duty_box[x].checked == false){
                        ot_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 1.69;
                        ot_night_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 1.859;    
                        ot_regular_hour_rate[x].innerText = "1.69";    
                        ot_night_hour_rate[x].innerText= "1.859";    
                    }
                    else if(special_holiday_box[x].checked == true && rest_day_duty_box[x].checked == true){
                        ot_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 1.95;
                        ot_night_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 2.145;    
                        ot_regular_hour_rate[x].innerText = "1.95";    
                        ot_night_hour_rate[x].innerText= "2.145";    
                    }
                    else if(rest_day_duty_box[x].checked == true && regular_holiday_box[x].checked == false && special_holiday_box[x].checked == false){
                        ot_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 1.69;
                        ot_night_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 1.859;    
                        ot_regular_hour_rate[x].innerText = "1.69";    
                        ot_night_hour_rate[x].innerText= "1.859";    
                    }
                    else{
                        ot_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 1.25;
                        ot_night_rate_per_hour[x].value = parseFloat(daily_rate.value)/8 * 1.375;    
                        ot_regular_hour_rate[x].innerText = "1.25";    
                        ot_night_hour_rate[x].innerText = "1.375";    
                    }
                    calculateOvertimeHours();
                } else {
                    ot_input[x].forEach(otherInput => {otherInput.classList.add('disabled')});
                    ot_hours[x].value = 0;
                    ot_night_hours[x].value = 0;
                    ot_rate_per_hour[x].value = 0;
                    ot_night_rate_per_hour[x].value = 0;
                    ot_pay[x].value = 0;
                    ot_night_pay[x].value = 0;
                    ot_pay_subtotal[x].value = 0;
                }
                calculateGrossSalary();
                calculateNetSalary();
            });

            function formatDateToString(date) {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}-${month}-${day}`;
            }
            
            function formatDateToString(date) {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}-${month}-${day}`;
            }
            
            function getDateOfWeek(day) {
                // Validate the day parameter to ensure it's within the valid range (1 to 7)
                if (day < 1 || day > 7) {
                    throw new Error('Invalid day parameter. It should be between 1 and 7.');
                }
                
                // Assuming you have HTML input elements with ids "year" and "week_number"
                const year = parseInt(document.getElementById('year').value, 10);
                const weekNumber = parseInt(document.getElementById('week_number').value, 10);
                
                // Calculate the date of the first day of the week (e.g., Monday) for the given year and week number
                const firstDay = new Date(year, 0, (weekNumber - 1) * 7 + day + 1);
                
                return formatDateToString(firstDay);
            }
                                
            
            year.addEventListener("change", () => {
                date_input[x].value = getDateOfWeek(x);
                console.log(getDateOfWeek(x))
            })
            
            week_number.addEventListener("change", () => {
                date_input[x].value = getDateOfWeek(x);
                console.log(getDateOfWeek(x))
            })
            late_mins[x].addEventListener("keyup", calculateGrossSalary);
            under_time_mins[x].addEventListener("keyup", calculateGrossSalary);
        }
        
        adjustment.addEventListener("keyup", calculateNetSalary);
        cash_advance.addEventListener("keyup", calculateNetSalary);
        sss_deduction.addEventListener("keyup", calculateNetSalary);
        pag_ibig_deduction.addEventListener("keyup", calculateNetSalary);
        philhealth_deduction.addEventListener("keyup", calculateNetSalary);
        sss_loan.addEventListener("keyup", calculateNetSalary);
        pag_ibig_loan.addEventListener("keyup", calculateNetSalary);
        ca_deduction.addEventListener("keyup", calculateNetSalary);
        uniform.addEventListener("keyup", calculateNetSalary);
        housing.addEventListener("keyup", calculateNetSalary);
        st_peter.addEventListener("keyup", calculateNetSalary);
        cash_not_return.addEventListener("keyup", calculateNetSalary);
        hard_hat.addEventListener("keyup", calculateNetSalary);
        safety_shoes.addEventListener("keyup", calculateNetSalary);
        over_meals.addEventListener("keyup", calculateNetSalary);
        bereavement_assistance.addEventListener("keyup", calculateNetSalary);

        const payroll_button = document.querySelector("#attendance_form #payroll_button");
        const payroll_tab = document.querySelector("#attendance_form #payroll_tab");

        payroll_button.addEventListener("click", () => {
            if(payroll_tab.style.display == "block"){
                payroll_tab.style.display = "none";
            }
            else{
                payroll_tab.style.display = "block";
            }
        })


        const payslip_container = document.querySelector("#payslip_container")
        const generate_payslip_button = document.querySelector("#generate_payslip_button")
        const download_payslip_button = document.querySelector("#download_payslip_button")
        const search_year = document.querySelector("#search_year")
        const search_week_number = document.querySelector("#search_week_number")
        const pay_date = document.querySelector("#pay_date")

        generate_payslip_button.addEventListener("click", () => {
            var payslip_employee_id = [];
            for(let c = 1; c < payroll_transaction_data_list.content.length; c++){
                if(payroll_transaction_data_list.content[c][1] == search_year.value && payroll_transaction_data_list.content[c][2] == search_week_number.value){
                    if (!payslip_employee_id.includes(payroll_transaction_data_list.content[c][3])) {
                        payslip_employee_id.push(payroll_transaction_data_list.content[c][3]);
                    }
                }
            }

            for(let x = 0; x < payslip_employee_id.length; x++){
                var duration = [];
                var type_of_day = [];
                var date = [];
                var time_in = [];
                var time_out = [];
                var hours = [];
                var hours_rate_per_hour = [];
                var night_hours = [];
                var night_hours_rate_per_hour = [];
                var late_mins = [];
                var late_deduction = [];
                var under_time_hour = [];
                var under_time_deduction = [];
                var ot_hours = [];
                var ot_hours_rate_per_hour = [];
                var ot_night_hours = [];
                var ot_night_hours_rate_per_hour = [];
                var allowance = [];
                var gross = [];

                for(let c = 1; c < payroll_transaction_data_list.content.length; c++){
                    if(payslip_employee_id[x] == payroll_transaction_data_list.content[c][3] &&
                        search_year.value == payroll_transaction_data_list.content[c][1]  && 
                        search_week_number.value == payroll_transaction_data_list.content[c][2]){

                        duration.push({[payroll_transaction_data_list.content[c][3]] : payroll_transaction_data_list.content[c][5]});
                        type_of_day.push(payroll_transaction_data_list.content[c][6]);
                        date.push(date_decoder(payroll_transaction_data_list.content[c][8]));
                        if (payroll_transaction_data_list.content[c][9] !== null && payroll_transaction_data_list.content[c][9] !== "") {
                            time_in.push(time_decoder(payroll_transaction_data_list.content[c][9]));
                        } else {
                            time_in.push("N/A");
                        }                        
                        if (payroll_transaction_data_list.content[c][10] !== null && payroll_transaction_data_list.content[c][10] !== "") {
                            time_out.push(time_decoder(payroll_transaction_data_list.content[c][10]));
                        } else {
                            time_out.push("N/A");
                        }                        
                        hours.push(payroll_transaction_data_list.content[c][16]);
                        hours_rate_per_hour.push(payroll_transaction_data_list.content[c][17]);
                        night_hours.push(payroll_transaction_data_list.content[c][18]);
                        night_hours_rate_per_hour.push(payroll_transaction_data_list.content[c][19]);
                        late_mins.push(payroll_transaction_data_list.content[c][12]);
                        late_deduction.push(payroll_transaction_data_list.content[c][13]);
                        under_time_hour.push(payroll_transaction_data_list.content[c][14]);
                        under_time_deduction.push(payroll_transaction_data_list.content[c][15]);
                        ot_hours.push(payroll_transaction_data_list.content[c][20]);
                        ot_hours_rate_per_hour.push(payroll_transaction_data_list.content[c][21]);
                        ot_night_hours.push(payroll_transaction_data_list.content[c][22]);
                        ot_night_hours_rate_per_hour.push(payroll_transaction_data_list.content[c][23]);
                        allowance.push(payroll_transaction_data_list.content[c][24]);
                        gross.push(payroll_transaction_data_list.content[c][25]);        
                    }

                }
    
                var subtotal_1 = hours.map((hours, index) => {
                    const daySubtotal = hours * hours_rate_per_hour[index];
                    const nightSubtotal = night_hours[index] * night_hours_rate_per_hour[index];
                    return daySubtotal + nightSubtotal;
                });
                var subtotal_2 = late_deduction.map((late_deduction, index) => {
                    const late_under_time_subtotal = late_deduction + under_time_deduction[index];
                    return late_under_time_subtotal;
                });
                var subtotal_3 = ot_hours.map((ot_hours, index) => {
                    const day_ot_Subtotal = ot_hours * ot_hours_rate_per_hour[index];
                    const night_ot_Subtotal = ot_night_hours[index] * ot_night_hours_rate_per_hour[index];
                    return day_ot_Subtotal + night_ot_Subtotal;
                });
    
    
                var payslip_form_data ="";
                for(let d = 0; d < payslip_employee_id.length; d++){
                    for(let e = 1; e < payroll_summary_data_list.content.length; e++){
                        if(payslip_employee_id[d] == payroll_summary_data_list.content[e][3] && search_year.value == payroll_summary_data_list.content[e][1] && search_week_number.value == payroll_summary_data_list.content[e][2]){
                            var department = "";
                            var designation = "";
                            var tin_id = "";
                            var type_of_employee = "";
                            for(let f =1; f < employee_data_list.content.length; f++){
                                if(payslip_employee_id[d] == employee_data_list.content[f][0]){
                                    department = employee_data_list.content[f][31];
                                    designation = employee_data_list.content[f][32];
                                    tin_id = employee_data_list.content[f][19];
                                    type_of_employee = employee_data_list.content[f][28];
                                }
                            }
                            if(type_of_employee == "REGULAR"){
                                payslip_form_data += `
                                <div id="payslip_form">
                                    <div class="payslip">
                                        <div class="summary">
                                            <div class="header">
                                                <img src="../images/logo.png" alt="">
                                                <div class="header_title">
                                                    <h2 class="bold">FAR EAST FUEL CORPORATION</h2>
                                                    <h3>#888 Purok 5, Irabagon St. Brgy. Anyatam, San Ildefonso, Bulacan, 3010</h3>
                                                </div>
                                            </div>
                                            <div class="employee_details">
                                                <div class="grid1">
                                                    <div class="d-flex">
                                                        <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${payroll_summary_data_list.content[e][4]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Department:</h4><h4 class="ps-1 truncate_text">${department}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Designation:</h4><h4 class="ps-1 truncate_text">${designation}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">ID No:</h4><h4 class="ps-1 truncate_text">${payslip_employee_id[d]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Pay Period:</h4><h4 class="ps-1 truncate_text">${date[0]} - ${date[6]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Pay Date:</h4><h4 class="ps-1 truncate_text">${date_decoder(pay_date.value)}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Tin No:</h4><h4 class="ps-1 truncate_text">${tin_id}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Tax Code:</h4><h4 class="ps-1 truncate_text"></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="summary_details_header">
                                                <h3 class="bold">BREAKDOWN</h3>
                                            </div>
                                            <div class="summary_details_details">
                                                <div class="table">
                                                    <table>
                                                        <tr class="bold">
                                                            <th>Day</th>
                                                            <td>Monday</td>
                                                            <td>Tuesday</td>
                                                            <td>Wednesday</td>
                                                            <td>Thursday</td>
                                                            <td>Friday</td>
                                                            <td>Saturday</td>
                                                            <td>Sunday</td>
                                                        </tr>
                                                        <tr id="payslip_date">
                                                            <th>Date</th>
                                                            ${date.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_type_of_day">
                                                            <th>Type of Day</th>
                                                            ${type_of_day.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_time_in_time_out">
                                                            <th>Time IN</th>
                                                            ${time_in.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_time_in_time_out">
                                                            <th>Time OUT</th>
                                                            ${time_out.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="border-top">
                                                            <th>Work Shifts</th>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                        </tr>
                                                        <tr id="payslip_regular_hours">
                                                            <th>Hours</th>
                                                            ${hours.map((item1, index) => `<td>${item1} || ${night_hours[index]}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_regular_hours_rate">
                                                            <th>Rate/hour</th>
                                                            ${hours_rate_per_hour.map((item1, index) => `<td>${item1} || ${night_hours_rate_per_hour[index]}</td>`).join('')}                                
                                                        </tr>
                                                        <tr class="border-top-bottom" id="payslip_regular_pay">
                                                        <th>Subtotal</th>
                                                            ${subtotal_1.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_late_mins">
                                                            <th>Late (mins)</th>
                                                            ${late_mins.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_late_deduction">
                                                            <th>Late Deduction</th>
                                                            ${late_deduction.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_under_time_hour">
                                                            <th>Under Time (hour)</th>
                                                            ${under_time_hour.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_under_time_deduction">
                                                            <th style="font-size: 8px !important;">Under Time Deduction</th>
                                                            ${under_time_deduction.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="border-top-bottom" id="payslip_late_undertime">
                                                            <th>Subtotal</th>
                                                            ${subtotal_2.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr>
                                                            <th>Work Shifts</th>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                        </tr>
                                                        <tr id="payslip_ot_hours">
                                                            <th>Overtime Hours</th>
                                                            ${ot_hours.map((item1, index) => `<td>${item1} || ${ot_night_hours[index]}</td>`).join('')}                                </tr>
                                                        </tr>
                                                        <tr id="payslip_ot_hours_rate">
                                                            <th>Overtime Rate/hour</th>
                                                            ${ot_hours_rate_per_hour.map((item1, index) => `<td>${item1} || ${ot_night_hours_rate_per_hour[index]}</td>`).join('')}                                </tr>
                                                        </tr>
                                                        <tr class="bold border-top" id="payslip_ot_subtotal">
                                                            <th>Subtotal</th>
                                                            ${subtotal_3.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_allowance">
                                                            <th>Allowance</th>
                                                            ${allowance.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="bold border-top" id="payslip_total">
                                                            <th>Total</th>
                                                            ${gross.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>            
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="summary_details_header">
                                                <h3 class="bold">SUMMARY</h3>
                                            </div>
                                            <div id="footer" class="border-bottom">
                                                <div class="px-1 border-left border-right">
                                                <div class="summary_details_header">
                                                    <h3 class="bold">DEDUCTIONS</h3>
                                                </div>
                                                <div class="deductions_detail border">
                                                    <div class="border-bottom-right">
                                                        <h4 class="bold ps-1 truncate_text">SSS JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][9]}</h4>
                                                    </div>
                                                    <div class="border-bottom">
                                                        <h4 class="bold ps-1 truncate_text">SSS Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][12]}</h4>
                                                    </div>
                                                    <div class="border-bottom-right">
                                                        <h4 class="bold ps-1 truncate_text">HDMF JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][10]}</h4>
                                                    </div>
                                                    <div class="border-bottom">
                                                        <h4 class="bold ps-1 truncate_text">HDMF Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][13]}</h4>
                                                    </div>
                                                    <div class="border-bottom-right">
                                                        <h4 class="bold ps-1 truncate_text">PHIC JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][11]}</h4>
                                                    </div>
                                                    <div class="border-bottom">
                                                    </div>
                                                    <div class="border-bottom-right">
                                                    </div>
                                                    <div class="border-bottom">
                                                    </div>
                                                    <div class="border-right">
                                                    </div>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-1 border-left border-right">
                                                <div class="summary_details_header">
                                                        <h3 class="bold">ADDITIONAL</h3>
                                                        <div class="additional_detail border">
                                                            <div class="border-bottom">
                                                                <h4 class="bold ps-1 truncate_text left">Adjustments</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][6]}</h4>
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="payslip_gross_salary" class="border-right">
                                                    <h4 class="ps-1 pt-1">Gross Salary:</h4>
                                                    <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][5]).toFixed(2)}</h3>
                                                    <h4 class="ps-1 pt-1">Total Additional:</h4>
                                                    <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][6]).toFixed(2)}</h3>
                                                    <h4 class="ps-1 pt-1 border-bottom">Total Deductions:</h4>
                                                    <h3 class="text-end bold pt-1 pe-1 border-bottom">${(payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13]).toFixed(2)}</h3>
                                                    <h4 class="ps-1 pt-1">Net Pay:</h4>
                                                    <h1 class="text-end bold pe-1">${((payroll_summary_data_list.content[e][5] + payroll_summary_data_list.content[e][6]) - (payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13])).toFixed(2)}</h1>
                                                </div>
                                                <div class="border-right text-center">
                                                    <br>
                                                    <h4 class="pt-3">_______</h4>
                                                    <h4>Employee Signature</h4>
                                                </div>
                                                <div class="border-right text-center">
                                                    <br>
                                                    <h4 class="pt-3">_______</h4>
                                                    <h4>Authorized Signature</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="position: absolute; border: 1px solid black; top: 20px; right: 120px; height:485px;">
                                    </div>
                                    <div style="position: absolute; border: 3px solid black; top: 20px; right: 20px; width: 80px; height:485px; padding: 5px; display: flex; justify-content: end;">
                                        <div style=" transform: rotate(270deg); width: 485px; height: 80px; position: absolute; right: -205px; top: 200px;">
                                            <div style="padding:5px; display: grid; grid-template-columns: 65% 35%;">
                                                <div style="border-right: 1px solid black; padding-right: 5px; height: 70px;">
                                                    <div style="text-align: center; border-bottom: 1px solid black;">
                                                        <h2>OTHER DEDUCTIONS</h2>
                                                    </div>
                                                    <div style="display: grid; grid-template-columns: repeat(3,calc(100%/3))" class="border">
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">C/A Deduction</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][14]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Uniform</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][15]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Housing</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][16]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">St. Peter</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][17]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Cash Not Return</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][18]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Hard Hat</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][19]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Safety Shoes</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][20]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Over Meals</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][21]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Bereavement Assistance</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][22]}</h4>
                                                        </div>
                                                        <div class="border" style="height: 12px">
                                                        </div>
                                                        <div class="border" style="height: 12px">
                                                        </div>
                                                        <div class="border" style="height: 12px">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style="padding-left: 5px; height: 70px;">
                                                    <div style="text-align: center; border-bottom: 1px solid black;">
                                                        <h2>SUMMARY</h2>
                                                    </div>
                                                    <div class="border">
                                                        <div class="border" style="display: grid; grid-template-columns: 70% 30%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Net Pay:</h4><h3 class="pe-1 bold" style="text-align: end;">${((payroll_summary_data_list.content[e][5] + payroll_summary_data_list.content[e][6]) - (payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13])).toFixed(2)}</h3>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 70% 30%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Other Deductions:</h4><h3 class="pe-1 bold" style="text-align: end;">${(payroll_summary_data_list.content[e][14] + payroll_summary_data_list.content[e][15] + payroll_summary_data_list.content[e][16] + payroll_summary_data_list.content[e][17] + payroll_summary_data_list.content[e][18] + payroll_summary_data_list.content[e][19] + payroll_summary_data_list.content[e][20] + payroll_summary_data_list.content[e][21] + payroll_summary_data_list.content[e][22]).toFixed(2)}</h3>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 70% 30%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Remaining Salary:</h4><h1 class="pe-1 bold" style="text-align: end;">${((payroll_summary_data_list.content[e][5] + payroll_summary_data_list.content[e][6]) - (payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13]) - (payroll_summary_data_list.content[e][14] + payroll_summary_data_list.content[e][15] + payroll_summary_data_list.content[e][16] + payroll_summary_data_list.content[e][17] + payroll_summary_data_list.content[e][18] + payroll_summary_data_list.content[e][19] + payroll_summary_data_list.content[e][20] + payroll_summary_data_list.content[e][21] + payroll_summary_data_list.content[e][22])).toFixed(2)}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="border: 1px solid black;"></div>
                                    <div class="payslip2">
                                        <div class="summary">
                                            <div class="header">
                                                <img src="../images/logo.png" alt="">
                                                <div class="header_title">
                                                    <h2 class="bold">FAR EAST FUEL CORPORATION</h2>
                                                    <h3>#888 Purok 5, Irabagon St. Brgy. Anyatam, San Ildefonso, Bulacan, 3010</h3>
                                                </div>
                                            </div>
                                            <div class="employee_details">
                                                <div class="grid1">
                                                    <div class="d-flex">
                                                        <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${payroll_summary_data_list.content[e][4]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Department:</h4><h4 class="ps-1 truncate_text">${department}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Designation:</h4><h4 class="ps-1 truncate_text">${designation}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">ID No:</h4><h4 class="ps-1 truncate_text">${payslip_employee_id[d]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Pay Period:</h4><h4 class="ps-1 truncate_text">${date[0]} - ${date[6]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Pay Date:</h4><h4 class="ps-1 truncate_text">${date_decoder(pay_date.value)}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Tin No:</h4><h4 class="ps-1 truncate_text">${tin_id}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Tax Code:</h4><h4 class="ps-1 truncate_text"></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="summary_details_header">
                                                <h3 class="bold">BREAKDOWN</h3>
                                            </div>
                                            <div class="summary_details_details">
                                                <div class="vertical-table">
                                                    <table>
                                                        <tr class="bold">
                                                            <th>Day</th>
                                                            <td>Monday</td>
                                                            <td>Tuesday</td>
                                                            <td>Wednesday</td>
                                                            <td>Thursday</td>
                                                            <td>Friday</td>
                                                            <td>Saturday</td>
                                                            <td>Sunday</td>
                                                        </tr>
                                                        <tr id="payslip_date">
                                                            <th>Date</th>
                                                            ${date.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_type_of_day">
                                                            <th>Type of Day</th>
                                                            ${type_of_day.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_time_in_time_out">
                                                            <th>Time IN</th>
                                                            ${time_in.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_time_in_time_out">
                                                            <th>Time OUT</th>
                                                            ${time_out.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="border-top">
                                                            <th>Work Shifts</th>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                        </tr>
                                                        <tr id="payslip_regular_hours">
                                                            <th>Hours</th>
                                                            ${hours.map((item1, index) => `<td>${item1} || ${night_hours[index]}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_regular_hours_rate">
                                                            <th>Rate/hour</th>
                                                            ${hours_rate_per_hour.map((item1, index) => `<td>${item1} || ${night_hours_rate_per_hour[index]}</td>`).join('')}                                
                                                        </tr>
                                                        <tr class="border-top-bottom" id="payslip_regular_pay">
                                                        <th>Subtotal</th>
                                                            ${subtotal_1.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_late_mins">
                                                            <th>Late (mins)</th>
                                                            ${late_mins.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_late_deduction">
                                                            <th>Late Deduction</th>
                                                            ${late_deduction.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_under_time_hour">
                                                            <th>Under Time (hour)</th>
                                                            ${under_time_hour.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_under_time_deduction">
                                                            <th>Under Time Deduction</th>
                                                            ${under_time_deduction.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="border-top-bottom" id="payslip_late_undertime">
                                                            <th>Subtotal</th>
                                                            ${subtotal_2.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr>
                                                            <th>Work Shifts</th>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                        </tr>
                                                        <tr id="payslip_ot_hours">
                                                            <th>Overtime Hours</th>
                                                            ${ot_hours.map((item1, index) => `<td>${item1} || ${ot_night_hours[index]}</td>`).join('')}                                
                                                        </tr>
                                                        <tr id="payslip_ot_hours_rate">
                                                            <th>Overtime Rate/hour</th>
                                                            ${ot_hours_rate_per_hour.map((item1, index) => `<td>${item1} || ${ot_night_hours_rate_per_hour[index]}</td>`).join('')}                                
                                                        </tr>
                                                        <tr class="bold border-top" id="payslip_ot_subtotal">
                                                            <th>Subtotal</th>
                                                            ${subtotal_3.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_allowance">
                                                            <th>Allowance</th>
                                                            ${allowance.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="bold border-top" id="payslip_total">
                                                            <th>Total</th>
                                                            ${gross.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>            
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="summary_details_header">
                                                <h3 class="bold">SUMMARY</h3>
                                            </div>
                                            <div id="footer" class="border-bottom">
                                                <div class="px-1 border-left border-right">
                                                    <div class="summary_details_header">
                                                        <h3 class="bold">DEDUCTIONS</h3>
                                                    </div>
                                                    <div class="deductions_detail border">
                                                        <div class="border-bottom-right">
                                                            <h4 class="bold ps-1 truncate_text">SSS JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][9]}</h4>
                                                        </div>
                                                        <div class="border-bottom-right">
                                                            <h4 class="bold ps-1 truncate_text">HDMF JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][10]}</h4>
                                                        </div>
                                                        <div class="border-bottom">
                                                            <h4 class="bold ps-1 truncate_text">PHIC JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][11]}</h4>
                                                        </div>
                                                        <div class="border-bottom-right">
                                                            <h4 class="bold ps-1 truncate_text">SSS Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][12]}</h4>
                                                        </div>
                                                        <div class="border-bottom-right">
                                                            <h4 class="bold ps-1 truncate_text">HDMF Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][13]}</h4>
                                                        </div>
                                                        <div class="border-bottom">
                                                        </div>
                                                        <div class="border-bottom-right">
                                                        </div>
                                                        <div class="border-bottom-right">
                                                        </div>
                                                        <div class="border-bottom">
                                                        </div>
                                                        <div class="border-bottom-right">
                                                        </div>
                                                        <div class="border-bottom-right">
                                                        </div>
                                                        <div class="border-bottom">
                                                        </div>
                                                        <div class="border-right">
                                                        </div>
                                                        <div class="border-right">
                                                        </div>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="px-1 border-left border-right">
                                                    <div class="summary_details_header">
                                                        <h3 class="bold">ADDITIONAL</h3>
                                                        <div class="additional_detail border">
                                                            <div class="border-bottom">
                                                                <h4 class="bold ps-1 truncate_text left">Adjustments</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][6]}</h4>
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="payslip_gross_salary" class="border-right">
                                                <h4 class="ps-1 pt-1">Gross Salary:</h4>
                                                <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][5]).toFixed(2)}</h3>
                                                <h4 class="ps-1 pt-1">Total Additional:</h4>
                                                <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][6]).toFixed(2)}</h3>
                                                <h4 class="ps-1 pt-1 border-bottom">Total Deductions:</h4>
                                                <h3 class="text-end bold pt-1 pe-1 border-bottom">${(payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13]).toFixed(2)}</h3>
                                                <h4 class="ps-1 pt-1">Net Pay:</h4>
                                                <h1 class="text-end bold pe-1">${((payroll_summary_data_list.content[e][5] + payroll_summary_data_list.content[e][6]) - (payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13])).toFixed(2)}</h1>
                                            </div>
                                                <div class="border-right text-center">
                                                    <br>
                                                    <h4 class="pt-3">__________</h4>
                                                    <h4>Employee Signature</h4>
                                                </div>
                                                <div class="border-right text-center">
                                                    <br>
                                                    <h4 class="pt-3">__________</h4>
                                                    <h4>Authorized Signature</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
                            }
                            else if(type_of_employee == "PROJECT BASED"){
                                payslip_form_data += `
                                <div id="payslip_form">
                                    <div class="payslip">
                                        <div class="summary">
                                            <div class="header">
                                            </div>
                                            <div class="employee_details">
                                                <div class="grid1">
                                                    <div class="d-flex">
                                                        <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${payroll_summary_data_list.content[e][4]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Department:</h4><h4 class="ps-1 truncate_text">${department}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Designation:</h4><h4 class="ps-1 truncate_text">${designation}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">ID No:</h4><h4 class="ps-1 truncate_text">${payslip_employee_id[d]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Pay Period:</h4><h4 class="ps-1 truncate_text">${date[0]} - ${date[6]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Pay Date:</h4><h4 class="ps-1 truncate_text">${date_decoder(pay_date.value)}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Tin No:</h4><h4 class="ps-1 truncate_text">${tin_id}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Tax Code:</h4><h4 class="ps-1 truncate_text"></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="summary_details_header">
                                                <h3 class="bold">BREAKDOWN</h3>
                                            </div>
                                            <div class="summary_details_details">
                                                <div class="vertical-table">
                                                    <table>
                                                        <tr class="bold">
                                                            <th>Day</th>
                                                            <td>Monday</td>
                                                            <td>Tuesday</td>
                                                            <td>Wednesday</td>
                                                            <td>Thursday</td>
                                                            <td>Friday</td>
                                                            <td>Saturday</td>
                                                            <td>Sunday</td>
                                                        </tr>
                                                        <tr id="payslip_date">
                                                            <th>Date</th>
                                                            ${date.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_type_of_day">
                                                            <th>Type of Day</th>
                                                            ${type_of_day.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_time_in_time_out">
                                                            <th>Time IN</th>
                                                            ${time_in.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_time_in_time_out">
                                                            <th>Time OUT</th>
                                                            ${time_out.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="border-top">
                                                            <th>Work Shifts</th>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                        </tr>
                                                        <tr id="payslip_regular_hours">
                                                            <th>Hours</th>
                                                            ${hours.map((item1, index) => `<td>${item1} || ${night_hours[index]}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_regular_hours_rate">
                                                            <th>Rate/hour</th>
                                                            ${hours_rate_per_hour.map((item1, index) => `<td>${item1} || ${night_hours_rate_per_hour[index]}</td>`).join('')}                                
                                                        </tr>
                                                        <tr class="border-top-bottom" id="payslip_regular_pay">
                                                        <th>Subtotal</th>
                                                            ${subtotal_1.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_late_mins">
                                                            <th>Late (mins)</th>
                                                            ${late_mins.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_late_deduction">
                                                            <th>Late Deduction</th>
                                                            ${late_deduction.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_under_time_hour">
                                                            <th>Under Time (hour)</th>
                                                            ${under_time_hour.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_under_time_deduction">
                                                            <th style="font-size: 8px !important;">Under Time Deduction</th>
                                                            ${under_time_deduction.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="border-top-bottom" id="payslip_late_undertime">
                                                            <th>Subtotal</th>
                                                            ${subtotal_2.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr>
                                                            <th>Work Shifts</th>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                        </tr>
                                                        <tr id="payslip_ot_hours">
                                                            <th>Overtime Hours</th>
                                                            ${ot_hours.map((item1, index) => `<td>${item1} || ${ot_night_hours[index]}</td>`).join('')}                                </tr>
                                                        </tr>
                                                        <tr id="payslip_ot_hours_rate">
                                                            <th>Overtime Rate/hour</th>
                                                            ${ot_hours_rate_per_hour.map((item1, index) => `<td>${item1} || ${ot_night_hours_rate_per_hour[index]}</td>`).join('')}                                </tr>
                                                        </tr>
                                                        <tr class="bold border-top" id="payslip_ot_subtotal">
                                                            <th>Subtotal</th>
                                                            ${subtotal_3.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_allowance">
                                                            <th>Allowance</th>
                                                            ${allowance.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="bold border-top" id="payslip_total">
                                                            <th>Total</th>
                                                            ${gross.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>            
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="summary_details_header">
                                                <h3 class="bold">SUMMARY</h3>
                                            </div>
                                            <div id="footer" class="border-bottom">
                                                <div class="px-1 border-left border-right">
                                                <div class="summary_details_header">
                                                    <h3 class="bold">DEDUCTIONS</h3>
                                                </div>
                                                <div class="deductions_detail border">
                                                    <div class="border-bottom-right">
                                                        <h4 class="bold ps-1 truncate_text">SSS JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][9]}</h4>
                                                    </div>
                                                    <div class="border-bottom">
                                                        <h4 class="bold ps-1 truncate_text">SSS Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][12]}</h4>
                                                    </div>
                                                    <div class="border-bottom-right">
                                                        <h4 class="bold ps-1 truncate_text">HDMF JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][10]}</h4>
                                                    </div>
                                                    <div class="border-bottom">
                                                        <h4 class="bold ps-1 truncate_text">HDMF Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][13]}</h4>
                                                    </div>
                                                    <div class="border-bottom-right">
                                                        <h4 class="bold ps-1 truncate_text">PHIC JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][11]}</h4>
                                                    </div>
                                                    <div class="border-bottom">
                                                    </div>
                                                    <div class="border-bottom-right">
                                                    </div>
                                                    <div class="border-bottom">
                                                    </div>
                                                    <div class="border-right">
                                                    </div>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-1 border-left border-right">
                                                <div class="summary_details_header">
                                                        <h3 class="bold">ADDITIONAL</h3>
                                                        <div class="additional_detail border">
                                                            <div class="border-bottom">
                                                                <h4 class="bold ps-1 truncate_text left">Adjustments</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][6]}</h4>
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="payslip_gross_salary" class="border-right">
                                                    <h4 class="ps-1 pt-1">Gross Salary:</h4>
                                                    <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][5]).toFixed(2)}</h3>
                                                    <h4 class="ps-1 pt-1">Total Additional:</h4>
                                                    <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][6]).toFixed(2)}</h3>
                                                    <h4 class="ps-1 pt-1 border-bottom">Total Deductions:</h4>
                                                    <h3 class="text-end bold pt-1 pe-1 border-bottom">${(payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13]).toFixed(2)}</h3>
                                                    <h4 class="ps-1 pt-1">Net Pay:</h4>
                                                    <h1 class="text-end bold pe-1">${((payroll_summary_data_list.content[e][5] + payroll_summary_data_list.content[e][6]) - (payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13])).toFixed(2)}</h1>
                                                </div>
                                                <div class="border-right text-center">
                                                    <br>
                                                    <h4 class="pt-3">_______</h4>
                                                    <h4>Employee Signature</h4>
                                                </div>
                                                <div class="border-right text-center">
                                                    <br>
                                                    <h4 class="pt-3">_______</h4>
                                                    <h4>Authorized Signature</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="position: absolute; border: 1px solid black; top: 20px; right: 120px; height:485px;">
                                    </div>
                                    <div style="position: absolute; border: 3px solid black; top: 20px; right: 20px; width: 80px; height:485px; padding: 5px; display: flex; justify-content: end;">
                                        <div style=" transform: rotate(270deg); width: 485px; height: 80px; position: absolute; right: -205px; top: 200px;">
                                            <div style="padding:5px; display: grid; grid-template-columns: 65% 35%;">
                                                <div style="border-right: 1px solid black; padding-right: 5px; height: 70px;">
                                                    <div style="text-align: center; border-bottom: 1px solid black;">
                                                        <h2>OTHER DEDUCTIONS</h2>
                                                    </div>
                                                    <div style="display: grid; grid-template-columns: repeat(3,calc(100%/3))" class="border">
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">C/A Deduction</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][14]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Uniform</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][15]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Housing</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][16]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">St. Peter</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][17]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Cash Not Return</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][18]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Hard Hat</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][19]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Safety Shoes</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][20]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Over Meals</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][21]}</h4>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Bereavement Assistance</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][22]}</h4>
                                                        </div>
                                                        <div class="border" style="height: 12px">
                                                        </div>
                                                        <div class="border" style="height: 12px">
                                                        </div>
                                                        <div class="border" style="height: 12px">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style="padding-left: 5px; height: 70px;">
                                                    <div style="text-align: center; border-bottom: 1px solid black;">
                                                        <h2>SUMMARY</h2>
                                                    </div>
                                                    <div class="border">
                                                        <div class="border" style="display: grid; grid-template-columns: 70% 30%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Net Pay:</h4><h3 class="pe-1 bold" style="text-align: end;">${((payroll_summary_data_list.content[e][5] + payroll_summary_data_list.content[e][6]) - (payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13])).toFixed(2)}</h3>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 70% 30%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Other Deductions:</h4><h3 class="pe-1 bold" style="text-align: end;">${(payroll_summary_data_list.content[e][14] + payroll_summary_data_list.content[e][15] + payroll_summary_data_list.content[e][16] + payroll_summary_data_list.content[e][17] + payroll_summary_data_list.content[e][18] + payroll_summary_data_list.content[e][19] + payroll_summary_data_list.content[e][20] + payroll_summary_data_list.content[e][21] + payroll_summary_data_list.content[e][22]).toFixed(2)}</h3>
                                                        </div>
                                                        <div class="border" style="display: grid; grid-template-columns: 70% 30%;">
                                                            <h4 class="bold ps-1 truncate_text" style="text-align: start;">Remaining Salary:</h4><h1 class="pe-1 bold" style="text-align: end;">${((payroll_summary_data_list.content[e][5] + payroll_summary_data_list.content[e][6]) - (payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13]) - (payroll_summary_data_list.content[e][14] + payroll_summary_data_list.content[e][15] + payroll_summary_data_list.content[e][16] + payroll_summary_data_list.content[e][17] + payroll_summary_data_list.content[e][18] + payroll_summary_data_list.content[e][19] + payroll_summary_data_list.content[e][20] + payroll_summary_data_list.content[e][21] + payroll_summary_data_list.content[e][22])).toFixed(2)}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="border: 1px solid black;"></div>
                                    <div class="payslip">
                                        <div class="summary">
                                            <div class="header">
                                            </div>
                                            <div class="employee_details">
                                                <div class="grid1">
                                                    <div class="d-flex">
                                                        <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${payroll_summary_data_list.content[e][4]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Department:</h4><h4 class="ps-1 truncate_text">${department}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Designation:</h4><h4 class="ps-1 truncate_text">${designation}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">ID No:</h4><h4 class="ps-1 truncate_text">${payslip_employee_id[d]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Pay Period:</h4><h4 class="ps-1 truncate_text">${date[0]} - ${date[6]}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Pay Date:</h4><h4 class="ps-1 truncate_text">${date_decoder(pay_date.value)}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Tin No:</h4><h4 class="ps-1 truncate_text">${tin_id}</h4>
                                                    </div>
                                                    <div class="d-flex">
                                                        <h4 class="bold">Tax Code:</h4><h4 class="ps-1 truncate_text"></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="summary_details_header">
                                                <h3 class="bold">BREAKDOWN</h3>
                                            </div>
                                            <div class="summary_details_details">
                                                <div class="vertical-table">
                                                    <table>
                                                        <tr class="bold">
                                                            <th>Day</th>
                                                            <td>Monday</td>
                                                            <td>Tuesday</td>
                                                            <td>Wednesday</td>
                                                            <td>Thursday</td>
                                                            <td>Friday</td>
                                                            <td>Saturday</td>
                                                            <td>Sunday</td>
                                                        </tr>
                                                        <tr id="payslip_date">
                                                            <th>Date</th>
                                                            ${date.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_type_of_day">
                                                            <th>Type of Day</th>
                                                            ${type_of_day.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_time_in_time_out">
                                                            <th>Time IN</th>
                                                            ${time_in.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_time_in_time_out">
                                                            <th>Time OUT</th>
                                                            ${time_out.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="border-top">
                                                            <th>Work Shifts</th>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                        </tr>
                                                        <tr id="payslip_regular_hours">
                                                            <th>Hours</th>
                                                            ${hours.map((item1, index) => `<td>${item1} || ${night_hours[index]}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_regular_hours_rate">
                                                            <th>Rate/hour</th>
                                                            ${hours_rate_per_hour.map((item1, index) => `<td>${item1} || ${night_hours_rate_per_hour[index]}</td>`).join('')}                                
                                                        </tr>
                                                        <tr class="border-top-bottom" id="payslip_regular_pay">
                                                        <th>Subtotal</th>
                                                            ${subtotal_1.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_late_mins">
                                                            <th>Late (mins)</th>
                                                            ${late_mins.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_late_deduction">
                                                            <th>Late Deduction</th>
                                                            ${late_deduction.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_under_time_hour">
                                                            <th>Under Time (hour)</th>
                                                            ${under_time_hour.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_under_time_deduction">
                                                            <th>Under Time Deduction</th>
                                                            ${under_time_deduction.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="border-top-bottom" id="payslip_late_undertime">
                                                            <th>Subtotal</th>
                                                            ${subtotal_2.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr>
                                                            <th>Work Shifts</th>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                            <td>Day || Night D.</td>
                                                        </tr>
                                                        <tr id="payslip_ot_hours">
                                                            <th>Overtime Hours</th>
                                                            ${ot_hours.map((item1, index) => `<td>${item1} || ${ot_night_hours[index]}</td>`).join('')}                                
                                                        </tr>
                                                        <tr id="payslip_ot_hours_rate">
                                                            <th>Overtime Rate/hour</th>
                                                            ${ot_hours_rate_per_hour.map((item1, index) => `<td>${item1} || ${ot_night_hours_rate_per_hour[index]}</td>`).join('')}                                
                                                        </tr>
                                                        <tr class="bold border-top" id="payslip_ot_subtotal">
                                                            <th>Subtotal</th>
                                                            ${subtotal_3.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr id="payslip_allowance">
                                                            <th>Allowance</th>
                                                            ${allowance.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>
                                                        <tr class="bold border-top" id="payslip_total">
                                                            <th>Total</th>
                                                            ${gross.map(item => `<td>${item}</td>`).join('')}
                                                        </tr>            
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="summary_details_header">
                                                <h3 class="bold">SUMMARY</h3>
                                            </div>
                                            <div id="footer" class="border-bottom">
                                                <div class="px-1 border-left border-right">
                                                    <div class="summary_details_header">
                                                        <h3 class="bold">DEDUCTIONS</h3>
                                                    </div>
                                                    <div class="deductions_detail border">
                                                        <div class="border-bottom-right">
                                                            <h4 class="bold ps-1 truncate_text">SSS JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][9]}</h4>
                                                        </div>
                                                        <div class="border-bottom-right">
                                                            <h4 class="bold ps-1 truncate_text">HDMF JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][10]}</h4>
                                                        </div>
                                                        <div class="border-bottom">
                                                            <h4 class="bold ps-1 truncate_text">PHIC JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][11]}</h4>
                                                        </div>
                                                        <div class="border-bottom-right">
                                                            <h4 class="bold ps-1 truncate_text">SSS Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][12]}</h4>
                                                        </div>
                                                        <div class="border-bottom-right">
                                                            <h4 class="bold ps-1 truncate_text">HDMF Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][13]}</h4>
                                                        </div>
                                                        <div class="border-bottom">
                                                        </div>
                                                        <div class="border-bottom-right">
                                                        </div>
                                                        <div class="border-bottom-right">
                                                        </div>
                                                        <div class="border-bottom">
                                                        </div>
                                                        <div class="border-bottom-right">
                                                        </div>
                                                        <div class="border-bottom-right">
                                                        </div>
                                                        <div class="border-bottom">
                                                        </div>
                                                        <div class="border-right">
                                                        </div>
                                                        <div class="border-right">
                                                        </div>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="px-1 border-left border-right">
                                                    <div class="summary_details_header">
                                                        <h3 class="bold">ADDITIONAL</h3>
                                                        <div class="additional_detail border">
                                                            <div class="border-bottom">
                                                                <h4 class="bold ps-1 truncate_text left">Adjustments</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][6]}</h4>
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div class="border-bottom">
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="payslip_gross_salary" class="border-right">
                                                <h4 class="ps-1 pt-1">Gross Salary:</h4>
                                                <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][5]).toFixed(2)}</h3>
                                                <h4 class="ps-1 pt-1">Total Additional:</h4>
                                                <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][6]).toFixed(2)}</h3>
                                                <h4 class="ps-1 pt-1 border-bottom">Total Deductions:</h4>
                                                <h3 class="text-end bold pt-1 pe-1 border-bottom">${(payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13]).toFixed(2)}</h3>
                                                <h4 class="ps-1 pt-1">Net Pay:</h4>
                                                <h1 class="text-end bold pe-1">${((payroll_summary_data_list.content[e][5] + payroll_summary_data_list.content[e][6]) - (payroll_summary_data_list.content[e][9] + payroll_summary_data_list.content[e][10] + payroll_summary_data_list.content[e][11] + payroll_summary_data_list.content[e][12] + payroll_summary_data_list.content[e][13])).toFixed(2)}</h1>
                                            </div>
                                                <div class="border-right text-center">
                                                    <br>
                                                    <h4 class="pt-3">__________</h4>
                                                    <h4>Employee Signature</h4>
                                                </div>
                                                <div class="border-right text-center">
                                                    <br>
                                                    <h4 class="pt-3">__________</h4>
                                                    <h4>Authorized Signature</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
                            }
                        }
                    }
                }

                payslip_container.innerHTML = payslip_form_data;
                download_payslip_button.style.display = "block";
            }
        })


        // employee_form
        const employee_form = document.querySelector("#employee_form");
        const new_employee_button = employee_form.querySelector("#new_employee_button");
        const update_record_button = employee_form.querySelector("#update_record_button");
        const resign_button = employee_form.querySelector("#resign_button");
        const new_employee_form = employee_form.querySelector("#new_employee_form");
        const new_employee_id = new_employee_form.querySelector("#employee_id");
        const new_gender= new_employee_form.querySelector("#gender");
        const new_civil_status= new_employee_form.querySelector("#civil_status");
        const new_spouse_name_container= new_employee_form.querySelector("#spouse_name_container");
        const new_affix_container= new_employee_form.querySelector("#affix_container");
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
        const timestamp = update_record_form.querySelector("#timestamp");
        new_spouse_name_container.style.display = "none";

        new_employee_button.addEventListener("click", () => {
            if(new_employee_form.style.display == "block"){
                new_employee_form.style.display = "none";
            }
            else{
                new_employee_form.style.display = "block";
                update_record_form.style.display = "none";
            }
        })
        new_gender.addEventListener("change", () => {
            if(new_gender.value == "MALE"){
                new_spouse_name_container.style.display = "none";
                new_affix_container.style.display = "block";
            }
            else if(new_gender.value == "FEMALE"){
                if(new_civil_status.value == "SINGLE"){
                    new_affix_container.style.display = "none";
                    new_spouse_name_container.style.display = "none";
                }
                else{
                    new_spouse_name_container.style.display = "block";
                    new_affix_container.style.display = "none";
                }
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
            if(update_employee_id.value == employee_data_list.content[a][0]){
                update_gender.value = employee_data_list.content[a][6];
                update_civil_status.value = employee_data_list.content[a][7];
                update_first_name.value = employee_data_list.content[a][1];
                update_middle_name.value = employee_data_list.content[a][2];
                update_last_name.value = employee_data_list.content[a][3];
                update_spouse_name.value = employee_data_list.content[a][4];
                update_affix.value = employee_data_list.content[a][5];
                update_birthday.value = formatDateToInputValue(employee_data_list.content[a][8]);
                update_birth_place.value = employee_data_list.content[a][9];
                update_mobile_number.value = employee_data_list.content[a][10];
                update_email_address.value = employee_data_list.content[a][11];
                update_nationality.value = employee_data_list.content[a][12];
                update_address.value = employee_data_list.content[a][13];
                update_other_address.value = employee_data_list.content[a][14];
                update_mothers_maiden_name.value = employee_data_list.content[a][15];
                update_educational_attainment.value = employee_data_list.content[a][16];
                update_course.value = employee_data_list.content[a][17];
                update_year.value = employee_data_list.content[a][18];
                update_tin_no.value = employee_data_list.content[a][19];
                update_sss_no.value = employee_data_list.content[a][20];
                update_philhealth_no.value = employee_data_list.content[a][21];
                update_pag_ibig_no.value = employee_data_list.content[a][22];
                update_drivers_license_no.value = employee_data_list.content[a][23];
                update_nbi_no.value = employee_data_list.content[a][24];
                update_police_clearance_no.value = employee_data_list.content[a][25];
                update_cedula_no.value = employee_data_list.content[a][26];
                update_date_hire.value = formatDateToInputValue(employee_data_list.content[a][27]);
                update_employee_type.value = employee_data_list.content[a][28];
                update_payroll_type.value = employee_data_list.content[a][29];
                update_employee_status.value = employee_data_list.content[a][30];
                update_department.value = employee_data_list.content[a][31];
                update_designation.value = employee_data_list.content[a][32];
                update_rate.value = employee_data_list.content[a][33];
                update_day_allowance.value = employee_data_list.content[a][34];
                update_night_allowance.value = employee_data_list.content[a][35];
                update_time_in_schedule.value = formatTimeToInputValue(employee_data_list.content[a][36]);
                update_time_out_schedule.value = formatTimeToInputValue(employee_data_list.content[a][37]);
                update_date_resignation.value = employee_data_list.content[a][38];
                reason_resignation.value = formatDateToInputValue(employee_data_list.content[a][39]);        
                timestamp.value = formatDateToInputValue(employee_data_list.content[a][40]);        
            }
            update_details.style.display = "block";
            if(update_gender.value == "MALE"){
                update_spouse_name_container.style.display = "none"
                update_affix_container.style.display = "block"
            }
            else if(update_gender.value == "FEMALE"){
                if(update_civil_status.value == "SINGLE"){
                    update_affix_container.style.display = "none"
                    update_spouse_name_container.style.display = "none"
                }
                else{
                    update_spouse_name_container.style.display = "block"
                    update_affix_container.style.display = "none"
                }
            }
        })

        // FORM GENERATOR    
        const currentYear = new Date().getFullYear();
        const lastTwoDigitsOfYear = currentYear.toString().slice(-2);        
        var last_three_digit = 0;
        
        for (let x = 0; x < employee_data_list.content.length; x++) {
            var employee_number = String(employee_data_list.content[x][0]); // Convert to a string
            if (employee_number.slice(0, 2) == lastTwoDigitsOfYear) {
                let threeDigitValue = parseFloat(employee_number.slice(-3));
                if (!isNaN(threeDigitValue) && last_three_digit < threeDigitValue) {
                    last_three_digit = threeDigitValue;
                }
            }
        }
        last_three_digit += 1;
        new_employee_id.value = `${lastTwoDigitsOfYear}${String(last_three_digit).padStart(3, '0')}`;        

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
