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

        const username_data_list  = await username_response.json();
        const idf_data_list  = await idf_response.json();
        const sf_data_list  = await sf_response.json();
        const irf_data_list  = await irf_response.json();
        const employee_data_list  = await employee_response.json();
        const payroll_transaction_data_list  = await payroll_transaction_response.json();
        const payroll_summary_data_list  = await payroll_summary_response.json();

        // Code that depends on the fetched data
        // username_data_list3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("user");
        
        users.forEach(user => {user.value = username_data_list.content[9][findTextInArray(username_data_list, "NAME")]})
        user_sidebar.innerHTML = `<u>${username_data_list.content[9][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[9][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[9][findTextInArray(username_data_list, "DEPARTMENT")];
        
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
            if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
                var full_name = findEmployeeName(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE ID")])
                var gender = employee_data_list.content[x][findTextInArray(employee_data_list, "GENDER")]
                active_employee_name.push(full_name)
                if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE TYPE")] == "REGULAR"){
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
                if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE TYPE")] == "PROJECT BASED"){
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
                if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE TYPE")] == "TEMPORARY"){
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
        regular_employee.innerText = `${regular_employee_male}/${regular_employee_female}/${regular_employee_name.length}`
        project_based_employee.innerText = `${project_based_employee_male}/${project_based_employee_female}/${project_based_employee_name.length}`
        subcon_employee.innerText = `${subcon_employee_male}/${subcon_employee_female}/${subcon_employee_name.length}`
        total_employee.innerText = `${total_employee_male}/${total_employee_female}/${total_employee_name.length}`

        // employee_list_section
        const employee_list = document.querySelector("#employee_list_section #employee_list");
        var employee_record = "";
        for(let b = 1; b < employee_data_list.content.length; b++){
            if(employee_data_list.content[b][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
                employee_record += `
                <tr>
                    <td>${employee_data_list.content[b][findTextInArray(employee_data_list, "EMPLOYEE ID")]}</td>
                    <td>${findEmployeeName(employee_data_list.content[b][findTextInArray(employee_data_list, "EMPLOYEE ID")])}</td>
                    <td>${employee_data_list.content[b][findTextInArray(employee_data_list, "DEPARTMENT")]}</td>
                    <td>${employee_data_list.content[b][findTextInArray(employee_data_list, "DESIGNATION")]}</td>
                    <td>${employee_data_list.content[b][findTextInArray(employee_data_list, "GENDER")]}</td>
                    <td>${employee_data_list.content[b][findTextInArray(employee_data_list, "EMPLOYEE TYPE")]}</td>
                    <td>${date_decoder(employee_data_list.content[b][findTextInArray(employee_data_list, "BIRTH DATE")])}</td>
                    <td>${employee_data_list.content[b][findTextInArray(employee_data_list, "MOBILE NO.")]}</td>
                    <td>${date_decoder(employee_data_list.content[b][findTextInArray(employee_data_list, "DATE HIRE")])}</td>
                    <td>${employee_data_list.content[b][findTextInArray(employee_data_list, "TIN NO.")]}</td>
                    <td>${employee_data_list.content[b][findTextInArray(employee_data_list, "SSS/GSIS NO.")]}</td>
                    <td>${employee_data_list.content[b][findTextInArray(employee_data_list, "PHILHEALTH NO.")]}</td>
                    <td>${employee_data_list.content[b][findTextInArray(employee_data_list, "PAG-IBIG NO.")]}</td>
                </tr>
                `
            }
        }
        employee_list.innerHTML = employee_record

        var options = {
            series: [regular_employee_male + regular_employee_female, project_based_employee_male + project_based_employee_female, subcon_employee_male + subcon_employee_female],
            chart: {
                width: 500, // Set the desired width
                height: 550, // Set the desired height
                type: 'pie',
            },
            plotOptions: {
                pie: {
                    startAngle: 0,
                    endAngle: 360
                }
            },
            dataLabels: {
                enabled: false, // Disable data labels inside the pie chart
            },
            fill: {
                type: 'gradient', // Use solid fill type
            },
            legend: {
                show: true,
                position: "left", // Set the legend position to "left"
                fontSize: '20px', // Increase legend font size as needed
                formatter: function (seriesName, opts) {
                    // Here, you should use the correct variable to get the series value
                    var seriesValue = opts.w.globals.series[opts.seriesIndex];
                    var totalValue = opts.w.globals.series.reduce((acc, val) => acc + val, 0);
                    var percentage = ((seriesValue / totalValue) * 100).toFixed(2); // Calculate and format the percentage
                    return `${percentage}% ${seriesName}`; // Format legend label as "47.06% Pending"
                },
                labels: {
                    useSeriesColors: false, // Use custom color
                },
            },
            labels: ["Regular", "Project Based", "Temporary"],
            colors: ["#198754", "#c3c3c3", "#dc3545"], // Specify solid colors here
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                }
            }]
        };
        const pieChart = document.querySelector("#pieChart");
        while (pieChart.firstChild) {
            pieChart.removeChild(pieChart.firstChild);
        }
        var chart = new ApexCharts(pieChart, options);
        chart.render();

        // attendance form
        const attendance_form = document.querySelector("#attendance_form");
        const payroll_summary = document.querySelector("#payroll_summary");
        const form_tab = attendance_form.querySelector("#form_tab");
        const employee_name = form_tab.querySelector("#employee_name");
        const days = form_tab.querySelector("#days");
        const daily_rate = form_tab.querySelector("#daily_rate");
        const time_in_sched = form_tab.querySelector("#time_in_sched");
        const time_out_sched = form_tab.querySelector("#time_out_sched");
        const payroll_type = form_tab.querySelector("#payroll_type");
        const generate_button = form_tab.querySelector("#generate_button");
        const payroll_details_data = form_tab.querySelector("#payroll_details_data");

        var payroll_counter = 1
        for(let x = 1; x < payroll_summary_data_list.content.length; x++){
            var payroll_record = 
            `
            <tr>
                <td>${payroll_counter}</td>
                <td>${payroll_summary_data_list.content[x][findTextInArray(payroll_summary_data_list, "YEAR")]}</td>
                <td>${payroll_summary_data_list.content[x][findTextInArray(payroll_summary_data_list, "WEEK NUMBER")]}</td>
                <td>${(payroll_summary_data_list.content[x][findTextInArray(payroll_summary_data_list, "EMPLOYEE ID")]).toString().padStart(5,"0")}</td>
                <td>${payroll_summary_data_list.content[x][findTextInArray(payroll_summary_data_list, "FULL NAME")]}</td>
                <td>${formatNumber(payroll_summary_data_list.content[x][findTextInArray(payroll_summary_data_list, "GROSS SALARY")])}</td>
                <td>${formatNumber(payroll_summary_data_list.content[x][findTextInArray(payroll_summary_data_list, "TOTAL DEDUCTIONS")])}</td>
                <td>${formatNumber(payroll_summary_data_list.content[x][findTextInArray(payroll_summary_data_list, "NET SALARY")])}</td>
            </tr>
            `
            payroll_summary.insertAdjacentHTML("beforeend", payroll_record);
            payroll_counter += 1;
            console.log()
        }

        // payroll_tab
        var payroll_length = 0;
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
        var day_name = [];
        var day_dates = [];
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
        const gross_salary = form_tab.querySelector("#gross_salary");
        const adjustment = form_tab.querySelector("#adjustment");
        const cash_advance = form_tab.querySelector("#cash_advance");
        const total_additional = form_tab.querySelector("#total_additional");
        const sss_deduction = form_tab.querySelector("#sss_deduction");
        const pag_ibig_deduction = form_tab.querySelector("#pag_ibig_deduction");
        const sss_loan = form_tab.querySelector("#sss_loan");
        const pag_ibig_loan = form_tab.querySelector("#pag_ibig_loan");
        const philhealth_deduction = form_tab.querySelector("#philhealth_deduction");
        const ca_deduction = form_tab.querySelector("#ca_deduction");
        const uniform = form_tab.querySelector("#uniform");
        const housing = form_tab.querySelector("#housing");
        const st_peter = form_tab.querySelector("#st_peter");
        const cash_not_return = form_tab.querySelector("#cash_not_return");
        const hard_hat = form_tab.querySelector("#hard_hat");
        const bereavement_assistance = form_tab.querySelector("#bereavement_assistance");
        const over_meals = form_tab.querySelector("#over_meals");
        const safety_shoes = form_tab.querySelector("#safety_shoes");
        const total_deductions = form_tab.querySelector("#total_deductions");
        const net_salary = form_tab.querySelector("#net_salary");

        // client_list_data
        const id_no = form_tab.querySelector("#id_no");
        const department = form_tab.querySelector("#department");
        const designation = form_tab.querySelector("#designation");
        const day_allowance = form_tab.querySelector("#day_allowance");
        const night_allowance = form_tab.querySelector("#night_allowance");
        const hide = form_tab.querySelector(".hide");
        const input_container = form_tab.querySelector("#input_container");
        const search_wrapper = form_tab.querySelector("#search_employee_name");
        const input_box = search_wrapper.querySelector("input");
        const sugg_box = search_wrapper.querySelector(".autocom_box");
        var data_value = active_employee_name;

        input_box.onkeyup = (e) => {
            let user_data = e.target.value;
            let empty_array = [];
            if (user_data) {
                empty_array = data_value.filter((data) => {
                    return data.toLocaleLowerCase().includes(user_data.toLocaleLowerCase());
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
                if(employee_data_list.content[z][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
                    if(select_user_data == findEmployeeName(employee_data_list.content[z][findTextInArray(employee_data_list, "EMPLOYEE ID")])){
                        id_no.value = employee_data_list.content[z][findTextInArray(employee_data_list, "EMPLOYEE ID")];
                        department.value = employee_data_list.content[z][findTextInArray(employee_data_list, "DEPARTMENT")];
                        designation.value = employee_data_list.content[z][findTextInArray(employee_data_list, "DESIGNATION")];
                        daily_rate.value = employee_data_list.content[z][findTextInArray(employee_data_list, "DAILY RATE")];
                        day_allowance.value = employee_data_list.content[z][findTextInArray(employee_data_list, "DAY ALLOWANCE")];
                        night_allowance.value = employee_data_list.content[z][findTextInArray(employee_data_list, "NIGHT ALLOWANCE")];
                        payroll_type.value = employee_data_list.content[z][findTextInArray(employee_data_list, "PAYROLL TYPE")];
                        time_in_sched.value = convertTo24HourFormat(time_decoder(employee_data_list.content[z][findTextInArray(employee_data_list, "TIME IN")]));
                        time_out_sched.value = convertTo24HourFormat(time_decoder(employee_data_list.content[z][findTextInArray(employee_data_list, "TIME OUT")]));
                        if(payroll_type.value == "WEEKLY"){
                            payroll_details_data.innerHTML = "";
                            var data = 
                            `
                            <label for="week_number">
                                <i class="fa-solid fa-id-card"></i>
                                Week Number
                                <input type="number" id="week_number" name="week_number" class="form-control form" required autocomplete="off"> 
                            </label>
                            `
                            payroll_details_data.insertAdjacentHTML("beforeend", data)
                        }
                        else if(payroll_type.value == "SEMI-MONTHLY"){
                            payroll_details_data.innerHTML = "";
                            var data = 
                            `
                            <label for="cut_off_period">
                                <i class="fa-solid fa-id-card"></i>
                                Cut Off Number
                                <input type="number" id="cut_off_period" name="cut_off_period" class="form-control form" required autocomplete="off"> 
                            </label>
                            `
                            payroll_details_data.insertAdjacentHTML("beforeend", data)
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

        generate_button.addEventListener("click", () => {
            if(payroll_type.value == "WEEKLY"){
                const year = form_tab.querySelector("#year");
                const week_number = form_tab.querySelector("#week_number");
                const number_of_days = form_tab.querySelector("#number_of_days");
                payroll_length = 7;
                day_name = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                day_dates = getDatesInWeek(year.value, week_number.value);
                number_of_days.value = payroll_length;
                insertInputs();
                days.style.display = "flex";
                hide.style.display = "grid";
                input_container.style.display = "grid";
            }
            else if(payroll_type.value == "SEMI-MONTHLY"){
                const year = form_tab.querySelector("#year");
                const cut_off_period = form_tab.querySelector("#cut_off_period");
                const number_of_days = form_tab.querySelector("#number_of_days");
                payroll_length = getNumberOfDays(getCutoffPeriodAndMonth(parseInt(cut_off_period.value))[1], year.value, getCutoffPeriodAndMonth(parseInt(cut_off_period.value))[0]);
                day_name = getDayNamesForCutoffPeriod(getCutoffPeriodAndMonth(parseInt(cut_off_period.value))[1], year.value, getCutoffPeriodAndMonth(parseInt(cut_off_period.value))[0]);
                day_dates = getDatesForCutoffPeriod(getCutoffPeriodAndMonth(parseInt(cut_off_period.value))[1], year.value, getCutoffPeriodAndMonth(parseInt(cut_off_period.value))[0]);
                number_of_days.value = payroll_length;
                console.log(day_name)
                console.log(day_dates)
                insertInputs();
                days.style.display = "flex";
                hide.style.display = "grid";
                input_container.style.display = "grid";
            }
        })

        function insertInputs(){
            for(let x = 1; x <= payroll_length; x++){
                day_list += `                   
                <div class="day px-1" id="day${x}">
                    <div class="d-flex justify-content-around">
                        <div id="absent_box_input${x}" class="d-flex flex-column">
                            <div class="d-flex justify-content-center" style=" font-size: 12px !important;"><b>A</b></div>
                            <label for="absent_box${x}" class="custom-checkbox">
                                <input type="checkbox" id="absent_box${x}" name="absent_box${x}" value="YES">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="rest_day_box_input${x}" class="d-flex flex-column">
                            <div class="d-flex justify-content-center" style=" font-size: 12px !important;"><b>RD</b></div>
                            <label for="rest_day_box${x}" class="custom-checkbox">
                                <input type="checkbox" id="rest_day_box${x}" name="rest_day_box${x}" value="YES">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="sick_leave_box_input${x}" class="d-flex flex-column">
                            <div class="d-flex justify-content-center" style=" font-size: 12px !important;"><b>SL</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="sick_leave_box${x}" name="sick_leave_box${x}">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="vacation_leave_box_input${x}" class="d-flex flex-column">
                            <div class="d-flex justify-content-center" style=" font-size: 12px !important;"><b>VL</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="vacation_leave_box${x}" name="vacation_leave_box${x}">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="leave_box_input${x}" class="d-flex flex-column">
                            <div class="d-flex justify-content-center" style=" font-size: 12px !important;"><b>L</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="leave_box${x}" name="leave_box${x}">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div class="d-flex justify-content-around">
                        <div id="half_day_box_input${x}" class="d-flex flex-column">
                        <div class="d-flex justify-content-center" style=" font-size: 12px !important;"><b>HD</b></div>
                            <label for="half_day_box${x}" class="custom-checkbox">
                            <input type="checkbox" id="half_day_box${x}" name="half_day_box${x}" value="YES">
                            <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="rest_day_duty_box_input${x}" class="d-flex flex-column">
                            <div class="d-flex justify-content-center" style=" font-size: 12px !important;"><b>RDD</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="rest_day_duty_box${x}" name="rest_day_duty_box${x}" value="YES">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="regular_holiday_box_input${x}" class="d-flex flex-column">
                            <div class="d-flex justify-content-center" style=" font-size: 12px !important;"><b>RH</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="regular_holiday_box${x}" name="regular_holiday_box${x}" value="YES">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div id="special_holiday_box_input${x}" class="d-flex flex-column">
                            <div class="d-flex justify-content-center" style=" font-size: 12px !important;"><b>SH</b></div>
                            <label class="custom-checkbox">
                                <input type="checkbox" id="special_holiday_box${x}" name="special_holiday_box${x}" value="YES">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div class="day_input${x}">
                        <div class="text-center">
                            <b>${day_name[x - 1]}</b>
                        </div>
                        <div class="text-center">
                            <div for="time_in${x}" class="text-center fs-3">
                                <input type="date" class="form-control" id="date_input${x}" name="date_input${x}" readonly value="${day_dates[x - 1]}">                         
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
            days.insertAdjacentHTML("beforeend", day_list)
    
              // Get all input elements of type "number"
            const numberInputs = form_tab.querySelectorAll('input[type="number"]');
    
            // Loop through each input and set the "step" attribute
            numberInputs.forEach(input => {
                input.setAttribute('step', '0.01'); // Set the desired step value
            });
            
            for (let x = 1; x <= payroll_length; x++) {
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
                                late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 4 / 60)) * 2;
                                under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 4)) * 2;
                            }
                            else{
                                late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 8 / 60)) * 2;
                                under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 8)) * 2;
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
                                late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 4 / 60)) * 2;
                                under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 4)) * 2;
                            }
                            else{
                                late_deduction[x].value = (parseFloat(late_mins[x].value) * (parseFloat(subtotal[x].value) / 8 / 60)) * 2;
                                under_time_deduction[x].value = (parseFloat(under_time_mins[x].value) * (parseFloat(subtotal[x].value) / 8)) * 2;
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
                    const totalHours = parseFloat(regular_hours[x].value) + parseFloat(night_hours[x].value);
                    if(rest_day_duty_box[x].checked == true){
                        allowance[x].value = 0;
                    }
                    
                    else{
                        if (parseInt(time_in_sched.value.slice(0, 2)) >= 18) {
                            if (totalHours > 8) {
                                allowance[x].value = parseFloat(night_allowance.value);
                            } else if (totalHours > 0 && totalHours <= 8) {
                                allowance[x].value = ((totalHours - (parseFloat(under_time_mins[x].value) + ((parseFloat(late_mins[x].value))/60))) / 8) * parseFloat(night_allowance.value);
                            } else {
                                allowance[x].value = 0;
                            }
                        }
                        else {                        
                            if (totalHours > 8) {
                                allowance[x].value = parseFloat(day_allowance.value);
                            } else if (totalHours > 0 && totalHours <= 8) {
                                allowance[x].value = ((totalHours - (parseFloat(under_time_mins[x].value) + ((parseFloat(late_mins[x].value))/60))) / 8) * parseFloat(day_allowance.value);
                            } else if (totalHours < 4) {
                                allowance[x].value = 0;
                            }
                        }
                    }
                }
    
                function calculateNetSalary(){
                    var net_income = 0;
                    for(let y = 1; y <= payroll_length; y++){
                        net_income += parseFloat(salary_day[y].value)
                    }
                    gross_salary.value = net_income.toFixed(2);
                    var additional = 0;
                    additional = parseFloat(adjustment.value) + parseFloat(cash_advance.value)
    
                    var deduction = 0;
                    deduction = parseFloat(sss_deduction.value) + parseFloat(pag_ibig_deduction.value) + parseFloat(philhealth_deduction.value) + parseFloat(sss_loan.value) + parseFloat(pag_ibig_loan.value) + parseFloat(ca_deduction.value) + parseFloat(uniform.value) + parseFloat(housing.value) + parseFloat(st_peter.value) + parseFloat(cash_not_return.value) + parseFloat(hard_hat.value) + parseFloat(safety_shoes.value) + parseFloat(over_meals.value) + parseFloat(bereavement_assistance.value);
                
                    total_additional.value = additional;
                    total_deductions.value = deduction;
                    net_salary.value = (net_income + additional - deduction).toFixed(2)
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
                
                function calculateSpecialHoliday(){
                    if (special_holiday_box[x].checked == true) {
                        special_holiday_box[x].value = "YES";
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
                            rest_day_box_input[x].classList.remove('disabled');
                            sick_leave_box_input[x].classList.remove('disabled');
                            vacation_leave_box_input[x].classList.remove('disabled');
                            leave_box_input[x].classList.remove('disabled');
                        }
                    }
                    calculateGrossSalary();
                    calculateNetSalary();
                }

                time_out_sched.addEventListener("change", () => {
                    calculateAllowance();
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
                        const day_input_number_elements = day[x].querySelectorAll("input[type='number']");
                        const day_input_time_elements = day[x].querySelectorAll("input[type='time']");
                        day_input_number_elements.forEach((inputElement) => {
                            inputElement.value = "0";
                        });
                        day_input_time_elements.forEach((inputElement) => {
                            inputElement.value = "";
                        });
                        if (regular_holiday_box[x].checked == true || special_holiday_box[x].checked == true && payroll_type.value == "SEMI-MONTHLY") {
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
                        calculateHours();
                        calculateRatePerHour();
                        calculateOtRatePerHour();
                        calculateAllowance();
                        calculateGrossSalary();
                        calculateNetSalary();
                        if (special_holiday_box[x].checked == true) {
                            calculateSpecialHoliday();
                        }
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
                        allowance[x].value = 0;
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
                    calculateAllowance();
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
                        }
                        else if (rest_day_duty_box[x].checked == true) {
    
                        }
                        else if (absent_box[x].checked == true) {
                            salary_day_input[x].classList.add('disabled');
                            salary_day[x].value = 0;
                            calculateNetSalary();
                        }
                        else{
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
                    calculateSpecialHoliday();
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
                    calculateAllowance();
                    calculateGrossSalary();
                    calculateNetSalary();
                });
                
                day_break[x].addEventListener("keyup", () => {
                    regular_hours[x].value = parseFloat(regular_hours[x].value) - parseFloat(day_break[x].value);
                    calculateHours();
                    calculateAllowance();
                    calculateGrossSalary();
                    calculateNetSalary();
                });
    
                night_break[x].addEventListener("keyup", () => {
                    night_hours[x].value = parseFloat(night_hours[x].value) - parseFloat(night_break[x].value);
                    calculateHours();
                    calculateAllowance();
                    calculateGrossSalary();
                    calculateNetSalary();
                });
    
                ot_day_break[x].addEventListener("keyup", () => {
                    ot_hours[x].value = parseFloat(ot_hours[x].value) - parseFloat(ot_day_break[x].value);
                    calculateOvertimeHours();
                    calculateAllowance();
                    calculateGrossSalary();
                    calculateNetSalary();
                });
    
                ot_night_break[x].addEventListener("keyup", () => {
                    ot_night_hours[x].value = parseFloat(ot_night_hours[x].value) - parseFloat(ot_night_break[x].value);
                    calculateOvertimeHours();
                    calculateAllowance();
                    calculateGrossSalary();
                    calculateNetSalary();
                });
            
                time_out_input[x].addEventListener("change", () => {
                    calculateUnderTimeHour();
                    calculateOtRatePerHour();
                    calculateOvertimeHours();
                    calculateAllowance();
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

                late_mins[x].addEventListener("keyup", () => {
                    calculateAllowance();
                    calculateGrossSalary();
                });
                under_time_mins[x].addEventListener("keyup", () => {
                    calculateAllowance();
                    calculateGrossSalary();
                });
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

            for(let z = 1; z < employee_data_list.content.length; z++){
                if(employee_name.value == findEmployeeName(employee_data_list.content[z][findTextInArray(employee_data_list, "EMPLOYEE ID")])){
                    for(let x = 1; x <= payroll_length; x++){
                        if(parseInt(time_in_sched.value.slice(0,2)) >= 18){
                            allowance[x].value = parseFloat(employee_data_list.content[z][findTextInArray(employee_data_list, "NIGHT ALLOWANCE")]);
                        }
                        else{
                            allowance[x].value = parseFloat(employee_data_list.content[z][findTextInArray(employee_data_list, "DAY ALLOWANCE")]);
                        }
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
                    }
                }
            }
        }

        const payroll_button = attendance_form.querySelector("#payroll_button");
        const payroll_tab = attendance_form.querySelector("#payroll_tab");
        const payroll_transaction_button = attendance_form.querySelector("#payroll_transaction_button");
        const payroll_type2 = payroll_tab.querySelector("#payroll_type");
        const payroll_details = payroll_tab.querySelector("#payroll_details");

        payroll_type2.addEventListener("change", () => {
            if(payroll_type2.value == "WEEKLY"){
                payroll_details.innerHTML = "";
                var data_value = 
                `
                <div style="width: 200px !important;">
                    <label>
                        <i class="fa-solid fa-calendar-days"></i>
                        Year
                    </label>
                    <input type="number" id="search_year" name="search_year" class="form-control form" required autocomplete="off" placeholder="Input Year">
                </div>
                <div style="width: 200px !important;">
                    <label>
                        <i class="fa-solid fa-calendar-days"></i>
                        Week Number
                    </label>
                    <input type="number" id="search_week_number" name="search_week_number" class="form-control form" required autocomplete="off" placeholder="Input Week Number"><br>
                </div>
                <div style="width: 200px !important;">
                    <label>
                        <i class="fa-solid fa-calendar-days"></i>
                        Pay Date
                    </label>
                    <input type="date" id="pay_date" name="pay_date" class="form-control form" required autocomplete="off"><br>
                </div>
                `      
                payroll_details.insertAdjacentHTML("afterbegin", data_value)
            }
            else if(payroll_type2.value == "SEMI-MONTHLY"){
                payroll_details.innerHTML = "";
                var data_value = 
                `
                <div style="width: 200px !important;">
                    <label>
                        <i class="fa-solid fa-calendar-days"></i>
                        Year
                    </label>
                    <input type="number" id="search_year" name="search_year" class="form-control form" required autocomplete="off" placeholder="Input Year">
                </div>
                <div style="width: 200px !important;">
                    <label for="cut_off_period">
                        <i class="fa-solid fa-calendar-days"></i>
                        Cut Off Number
                        <input type="number" id="search_cut_off_period" name="search_cut_off_period" class="form-control form" required autocomplete="off" placeholder="Input Cut-off Number"><br>
                    </label>
                </div>
                <div style="width: 200px !important;">
                    <label>
                        <i class="fa-solid fa-calendar-days"></i>
                        Pay Date
                    </label>
                    <input type="date" id="pay_date" name="pay_date" class="form-control form" required autocomplete="off"><br>
                </div>
                `
                payroll_details.insertAdjacentHTML("afterbegin", data_value)
            }
            else{
                payroll_details.innerHTML = "";
            }
        })

        payroll_button.addEventListener("click", () => {
            if(payroll_tab.style.display == "block"){
                payroll_tab.style.display = "none";
            }
            else{
                payroll_tab.style.display = "block";
                form_tab.style.display = "none";
            }
        })
        payroll_transaction_button.addEventListener("click", () => {
            if(form_tab.style.display == "block"){
                form_tab.style.display = "none";
            }
            else{
                form_tab.style.display = "block";
                payroll_tab.style.display = "none";
            }
        })

        const payslip_container = payroll_tab.querySelector("#payslip_container")
        const generate_payslip_button = payroll_tab.querySelector("#generate_payslip_button")
        const download_payslip_button = payroll_tab.querySelector("#download_payslip_button")
        
        generate_payslip_button.addEventListener("click", () => {
            download_payslip_button.style.display = "block"
            var payslip_employee_id = [];
            const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
            if(payroll_type2.value == "WEEKLY"){
                const search_year = attendance_form.querySelector("#search_year")
                const search_week_number = attendance_form.querySelector("#search_week_number")        
                for(let c = 1; c < payroll_transaction_data_list.content.length; c++){
                    if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "YEAR")] == search_year.value && payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "WEEK NUMBER / MONTH-CUT OFF")] == search_week_number.value){
                        if (!payslip_employee_id.includes(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")])) {
                            payslip_employee_id.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")]);
                        }
                    }
                }
                var payslip_data = []
                var payslip_others = []
                var payslip_data2 = []
                var payslip_others2 = []
                var government_dues_month = "";
                var government_dues_year = "";
                var month = (new Date((getDatesInWeek(search_year.value, search_week_number.value))[0])).getMonth() -1;
                var year = (new Date((getDatesInWeek(search_year.value, search_week_number.value))[0])).getFullYear();
                if(month == 0){
                    government_dues_month = months[11];
                    government_dues_year = parseInt(year) - 1;
                }
                else {
                    government_dues_month = months[month];
                    government_dues_year = parseInt(year);
                }
                for(let x = 0; x < payslip_employee_id.length; x += 2){
                    var employee_name = "";
                    var employee_id = "";
                    var daily_rate = 0;
                    var ord_day_hrs = 0;
                    var ord_day_hrs_pay = 0;
                    var ord_ot_day_hrs = 0;
                    var ord_ot_day_hrs_pay = 0;
                    var ord_night_hrs = 0;
                    var ord_night_hrs_pay = 0;
                    var ord_ot_night_hrs = 0;
                    var ord_ot_night_hrs_pay = 0;
                    var rdd_day_hrs = 0;
                    var rdd_day_hrs_pay = 0;
                    var rdd_ot_day_hrs = 0;
                    var rdd_ot_day_hrs_pay = 0;
                    var rdd_night_hrs = 0;
                    var rdd_night_hrs_pay = 0;
                    var rdd_ot_night_hrs = 0;
                    var rdd_ot_night_hrs_pay = 0;
                    var sh_day_hrs = 0;
                    var sh_day_hrs_pay = 0;
                    var sh_ot_day_hrs = 0;
                    var sh_ot_day_hrs_pay = 0;
                    var sh_night_hrs = 0;
                    var sh_night_hrs_pay = 0;
                    var sh_ot_night_hrs = 0;
                    var sh_ot_night_hrs_pay = 0;
                    var rh_day_hrs = 0;
                    var rh_day_hrs_pay = 0;
                    var rh_ot_day_hrs = 0;
                    var rh_ot_day_hrs_pay = 0;
                    var rh_night_hrs = 0;
                    var rh_night_hrs_pay = 0;
                    var rh_ot_night_hrs = 0;
                    var rh_ot_night_hrs_pay = 0;
                    var sh_rdd_day_hrs = 0;
                    var sh_rdd_day_hrs_pay = 0;
                    var sh_rdd_ot_day_hrs = 0;
                    var sh_rdd_ot_day_hrs_pay = 0;
                    var sh_rdd_night_hrs = 0;
                    var sh_rdd_night_hrs_pay = 0;
                    var sh_rdd_ot_night_hrs = 0;
                    var sh_rdd_ot_night_hrs_pay = 0;
                    var rh_rdd_day_hrs = 0;
                    var rh_rdd_day_hrs_pay = 0;
                    var rh_rdd_ot_day_hrs = 0;
                    var rh_rdd_ot_day_hrs_pay = 0;
                    var rh_rdd_night_hrs = 0;
                    var rh_rdd_night_hrs_pay = 0;
                    var rh_rdd_ot_night_hrs = 0;
                    var rh_rdd_ot_night_hrs_pay = 0;
                    var allowance = 0;
                    var adjustment = 0;
                    var cash_advance = 0;
                    var sss = 0;
                    var pag_ibig = 0;
                    var philhealth = 0;
                    var sss_loan = 0;
                    var pag_ibig_loan = 0;
                    var withholding_tax = 0;
                    var under_time_deduction = 0;
                    var under_time_hours = 0;
                    var late_deduction = 0;
                    var late_mins = 0;
                    var ca_deduction = 0;
                    var uniform = 0;
                    var housing = 0;
                    var st_peter = 0;
                    var cash_not_return = 0;
                    var hard_hat = 0;
                    var safety_shoes = 0;
                    var over_meals = 0;
                    var bereavement_assistance = 0;
                    var gross_salary = 0;
                    var sub_deduction = 0;
                    var subtotal = 0;
                    var other_deduction = 0;
                    for(let c = 1; c < payroll_summary_data_list.content.length; c++){
                        if(payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "EMPLOYEE ID")] == payslip_employee_id[x] && payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "YEAR")] == search_year.value && payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "WEEK NUMBER")] == search_week_number.value){
                            adjustment = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "ADJUSTMENT")];
                            cash_advance = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "CASH ADVANCE")];
                            sss = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SSS")];
                            pag_ibig = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PAG-IBIG")];
                            philhealth = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PHILHEALTH")];
                            sss_loan = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SSS LOAN")];
                            pag_ibig_loan = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PAG-IBIG LOAN")];
                            ca_deduction = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "C/A DEDUCTION")];
                            uniform = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "UNIFORM")];
                            housing = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "HOUSING")];
                            st_peter = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "ST. PETER")];
                            cash_not_return = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "CASH NOT RETURN")];
                            hard_hat = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "HARD HAT")];
                            safety_shoes = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SAFETY SHOES")];
                            over_meals = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "OVER MEALS")];
                            bereavement_assistance = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "BEREAVEMENT ASSISTANCE")];
                            gross_salary = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "GROSS SALARY")];
                            sub_deduction = sss + sss_loan + pag_ibig + pag_ibig_loan + philhealth;
                            subtotal = gross_salary - sub_deduction;
                            other_deduction = ca_deduction + uniform + housing + st_peter + cash_not_return + hard_hat + safety_shoes + over_meals + bereavement_assistance;
                        }
                    }
                    for(let c = 1; c < payroll_transaction_data_list.content.length; c++){
                        if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")] == payslip_employee_id[x] && payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "YEAR")] == search_year.value && payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "WEEK NUMBER / MONTH-CUT OFF")] == search_week_number.value){
                            employee_id = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")];
                            employee_name = findEmployeeName(employee_id);
                            daily_rate = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DAILY RATE")];
                            allowance += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "ALLOWANCE")];
                            under_time_deduction += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "UNDER TIME DEDUCTION")];
                            under_time_hours += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "UNDER TIME (HOURS)")];
                            late_deduction += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "LATE DEDUCTION")];
                            late_mins += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "LATE (MINS)")];
                            // if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "LEAVE" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "VACATION LEAVE" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "SICK LEAVE"){
                            // if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT"){
                            if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT"){
                                var type_of_day = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "TYPE OF DAY")];
                                var day_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DAY HOURS")];
                                var ot_day_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "OT DAY HOURS")];
                                var night_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "NIGHT HOURS")];
                                var ot_night_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "OT NIGHT HOURS")];
                                if(type_of_day == "ORD"){
                                    ord_day_hrs += day_hours;
                                    ord_ot_day_hrs += ot_day_hours;
                                    ord_night_hrs += night_hours;
                                    ord_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RDD"){
                                    rdd_day_hrs += day_hours;
                                    rdd_ot_day_hrs += ot_day_hours;
                                    rdd_night_hrs += night_hours;
                                    rdd_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "SH"){
                                    sh_day_hrs += day_hours;
                                    sh_ot_day_hrs += ot_day_hours;
                                    sh_night_hrs += night_hours;
                                    sh_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RH"){
                                    rh_day_hrs += day_hours;
                                    rh_ot_day_hrs += ot_day_hours;
                                    rh_night_hrs += night_hours;
                                    rh_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "SH & RDD"){
                                    sh_rdd_day_hrs += day_hours;
                                    sh_rdd_ot_day_hrs += ot_day_hours;
                                    sh_rdd_night_hrs += night_hours;
                                    sh_rdd_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RH & RDD"){
                                    rh_rdd_day_hrs += day_hours;
                                    rh_rdd_ot_day_hrs += ot_day_hours;
                                    rh_rdd_night_hrs += night_hours;
                                    rh_rdd_ot_night_hrs += ot_night_hours;
                                }
                                ord_day_hrs_pay = parseFloat(ord_day_hrs) * (parseFloat(daily_rate)) / 8;
                                ord_ot_day_hrs_pay = parseFloat(ord_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.25) / 8;
                                ord_night_hrs_pay = parseFloat(ord_night_hrs) * ((parseFloat(daily_rate)) * 1.10) / 8;
                                ord_ot_night_hrs_pay = parseFloat(ord_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.375) / 8;
                                rdd_day_hrs_pay = parseFloat(rdd_day_hrs) * ((parseFloat(daily_rate)) * 1.30) / 8;
                                rdd_ot_day_hrs_pay = parseFloat(rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.69 ) / 8;
                                rdd_night_hrs_pay = parseFloat(rdd_night_hrs) * ((parseFloat(daily_rate)) * 1.43) / 8;
                                rdd_ot_night_hrs_pay = parseFloat(rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.859) / 8;
                                sh_day_hrs_pay = parseFloat(sh_day_hrs) * ((parseFloat(daily_rate)) * 1.30) / 8;
                                sh_ot_day_hrs_pay = parseFloat(sh_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.69) / 8;
                                sh_night_hrs_pay = parseFloat(sh_night_hrs) * ((parseFloat(daily_rate)) * 1.43) / 8;
                                sh_ot_night_hrs_pay = parseFloat(sh_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.859) / 8;
                                rh_day_hrs_pay = parseFloat(rh_day_hrs) * ((parseFloat(daily_rate)) * 2) / 8;
                                rh_ot_day_hrs_pay = parseFloat(rh_ot_day_hrs) * ((parseFloat(daily_rate)) * 2.60) / 8;
                                rh_night_hrs_pay = parseFloat(rh_night_hrs) * ((parseFloat(daily_rate)) * 2.20) / 8;
                                rh_ot_night_hrs_pay = parseFloat(rh_ot_night_hrs) * ((parseFloat(daily_rate)) * 2.86) / 8;
                                sh_rdd_day_hrs_pay = parseFloat(sh_rdd_day_hrs) * ((parseFloat(daily_rate)) * 1.50) / 8;
                                sh_rdd_ot_day_hrs_pay = parseFloat(sh_rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.95 ) / 8;
                                sh_rdd_night_hrs_pay = parseFloat(sh_rdd_night_hrs) * ((parseFloat(daily_rate)) * 1.65) / 8;
                                sh_rdd_ot_night_hrs_pay = parseFloat(sh_rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 2.145) / 8;
                                rh_rdd_day_hrs_pay = parseFloat(rh_rdd_day_hrs) * ((parseFloat(daily_rate)) * 2.60) / 8;
                                rh_rdd_ot_day_hrs_pay = parseFloat(rh_rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 3.38) / 8;
                                rh_rdd_night_hrs_pay = parseFloat(rh_rdd_night_hrs) * ((parseFloat(daily_rate)) * 2.86) / 8;
                                rh_rdd_ot_night_hrs_pay = parseFloat(rh_rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 3.718) / 8;
                            }    
                        }
                    }
                    var employee_department = "";
                    var employee_designation = "";
                    var employee_tin_no = "";
                    var pay_period_dates = getDatesInWeek(search_year.value, search_week_number.value);
                    const parts = (date_decoder(pay_period_dates[0])).split(', ');
                    var date_start = parts.slice(0, -1).join(', ');
                    var pay_period = `${date_start} - ${date_decoder(pay_period_dates[6])}`
                    for(let c = 1; c < employee_data_list.content.length; c++){
                        if(employee_id == employee_data_list.content[c][findTextInArray(employee_data_list, "EMPLOYEE ID")]){
                            employee_department = employee_data_list.content[c][findTextInArray(employee_data_list, "DEPARTMENT")];
                            employee_designation = employee_data_list.content[c][findTextInArray(employee_data_list, "DESIGNATION")];
                            employee_tin_no = employee_data_list.content[c][findTextInArray(employee_data_list, "TIN NO.")];
                        }
                    }
                    payslip_data.push(
                        `
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
                                            <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${employee_name}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">ID No:</h4><h4 class="ps-1 truncate_text">${employee_id}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Department:</h4><h4 class="ps-1 truncate_text">${employee_department}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Tin No:</h4><h4 class="ps-1 truncate_text">${employee_tin_no}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Designation:</h4><h4 class="ps-1 truncate_text">${employee_designation}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Tax Code:</h4><h4 class="ps-1 truncate_text"></h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Pay Period:</h4><h4 class="ps-1 truncate_text">${pay_period}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Pay Date:</h4><h4 class="ps-1 truncate_text">${pay_date.value}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">EARNINGS</h3>
                                </div>
                                <div class="summary_details_details">
                                    <div class="border-right border-left detail_header">
                                        <h4 class="bold">Type of Day</h4>
                                        <h4 class="bold" style="text-align: center;">Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">OT<br>Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">N.Diff<br>Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">N.Diff<br>OT Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                    </div>
                                </div>
                                <div class="summary_details_details">
                                    <div class="border-right border-left">
                                        <h4>Ordinary Day</h4>
                                        <h4 style="text-align: center;">${ord_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_ot_night_hrs_pay)}</h4>
                                        <h4>Rest Day Duty</h4>
                                        <h4 style="text-align: center;">${rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_ot_night_hrs_pay)}</h4>
                                        <h4>Special Holiday</h4>
                                        <h4 style="text-align: center;">${sh_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_ot_night_hrs_pay)}</h4>
                                        <h4>Legal Holiday</h4>
                                        <h4 style="text-align: center;">${rh_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_ot_night_hrs_pay)}</h4>
                                        <h4>RDD + Spec. Hol.</h4>
                                        <h4 style="text-align: center;">${sh_rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_ot_night_hrs_pay)}</h4>
                                        <h4>RDD + Leg. Hol.</h4>
                                        <h4 style="text-align: center;">${rh_rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_ot_night_hrs_pay)}</h4>
                                        <h4>Allowance</h4>
                                        <h4 style="text-align: center;"></h4>
                                        <h4 style="text-align: right;">${formatNumber(parseFloat(allowance))}</h4>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">DEDUCTIONS</h3>
                                </div>
                                <div class="summary_details_details2">
                                    <div class="border-right border-left">
                                        <h4>SSS ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(sss)}</h4>
                                        <h4>HDMF ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(pag_ibig)}</h4>
                                        <h4>PHIC ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(philhealth)}</h4>
                                        <h4>SSS Loan</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(sss_loan)}</h4>
                                        <h4>HDMF Loan</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(pag_ibig_loan)}</h4>
                                        <h4>Withholding Tax</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(withholding_tax)}</h4>
                                        <h4>Undertime (Hrs):    ${under_time_hours} </h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(under_time_deduction)}</h4>
                                        <h4>Late (Mins):        ${late_mins}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(late_deduction)}</h4>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">SUMMARY</h3>
                                </div>
                                <div class="summary_footer border-left border-right">
                                    <div>
                                        <div>
                                            <h3>Adjustments</h3>
                                            <h3>Total Earnings</h3>
                                            <h3>Total Deductions</h3>
                                        </div>
                                        <div>
                                            <h3 style="text-align: right; padding-right: 5px;">0.00</h3>
                                            <h3 style="text-align: right; padding-right: 5px;">${formatNumber(gross_salary)}</h3>
                                            <h3 style="text-align: right; padding-right: 5px;">${formatNumber(sub_deduction)}</h3>
                                        </div>
                                    </div>
                                    <div class="border-left ps-1" style="display: grid; grid-template-columns: 50% 50%; justify-content: center; align-items: center;">
                                        <h3>Net Pay:</h3>
                                        <h3 style="text-align: right; padding-right: 5px;">${formatNumber(subtotal)}</h3>
                                    </div>
                                </div>
                                <div class="summary_footer2 border-left border-right">
                                    <div style="text-align: center;">
                                        <h3 style="display: flex; justify-content: center; align-items: end; height: 16px;">__________________</h3>
                                        <h3>Employee's Signature</h3>
                                    </div>
                                    <div style="text-align: center;">
                                        <h3 style="display: flex; justify-content: center; align-items: end; height: 16px;">__________________</h3>
                                        <h3>Authorized Signature</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )

                    payslip_others.push(
                        `
                        <div style="position: absolute; border: 3px solid black; top: 20px; left: 940px; width: 92px; height:368px; padding: 3px; display: flex; justify-content: end;">
                            <div style=" transform: rotate(270deg); width: 368px; height: 92px; position: absolute; left: -140px; top: 135px;">
                                <div style="width: 100%; height: 100%; padding: 3px; display: grid; grid-template-columns: 65% 35%;">
                                    <div style="border-right: 1px solid black; padding: 0 3px;">
                                        <div style="display: flex; justify-content: space-around;">
                                            <h2>${employee_id}</h2>
                                            <h2>OTHER DEDUCTIONS</h2>
                                        </div>
                                        <div style="display: grid; grid-template-columns: 55% 45%" class="border">
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">C/A Deduction</h4><h4 class="pe-1 right">${ca_deduction}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Uniform</h4><h4 class="pe-1 right">${uniform}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Housing</h4><h4 class="pe-1 right">${housing}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">St. Peter</h4><h4 class="pe-1 right">${st_peter}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Safety Shoes</h4><h4 class="pe-1 right">${safety_shoes}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Hard Hat</h4><h4 class="pe-1 right">${hard_hat}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Cash Not Return</h4><h4 class="pe-1 right">${cash_not_return}</h4>
                                            </div>
                                            <div style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Bereavement</h4><h4 class="pe-1 right">${bereavement_assistance}</h4>
                                            </div>
                                            <div class="border-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Over Meals</h4><h4 class="pe-1 right">${over_meals}</h4>
                                            </div>
                                            <div style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Assistance</h4><h4 class="pe-1 right"></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="padding: 0 3px; height: 70px;">
                                        <div style="text-align: center;">
                                            <h2>SUMMARY</h2>
                                        </div>
                                        <div class="border">
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Net Pay:</h4><h3 class="pe-1 bold" style="text-align: end;">${formatNumber(subtotal)}</h3>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Other<br>Deductions:</h4><h3 class="pe-1 bold" style="text-align: end;">${formatNumber(other_deduction)}</h3>
                                            </div>
                                            <div class="" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Remaining<br>Salary:</h4><h2 class="pe-1 bold" style="text-align: end;">${formatNumber(subtotal - other_deduction)}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                }
                for(let x = 1; x < payslip_employee_id.length; x += 2){
                    var employee_name = "";
                    var employee_id = "";
                    var daily_rate = 0;
                    var ord_day_hrs = 0;
                    var ord_day_hrs_pay = 0;
                    var ord_ot_day_hrs = 0;
                    var ord_ot_day_hrs_pay = 0;
                    var ord_night_hrs = 0;
                    var ord_night_hrs_pay = 0;
                    var ord_ot_night_hrs = 0;
                    var ord_ot_night_hrs_pay = 0;
                    var rdd_day_hrs = 0;
                    var rdd_day_hrs_pay = 0;
                    var rdd_ot_day_hrs = 0;
                    var rdd_ot_day_hrs_pay = 0;
                    var rdd_night_hrs = 0;
                    var rdd_night_hrs_pay = 0;
                    var rdd_ot_night_hrs = 0;
                    var rdd_ot_night_hrs_pay = 0;
                    var sh_day_hrs = 0;
                    var sh_day_hrs_pay = 0;
                    var sh_ot_day_hrs = 0;
                    var sh_ot_day_hrs_pay = 0;
                    var sh_night_hrs = 0;
                    var sh_night_hrs_pay = 0;
                    var sh_ot_night_hrs = 0;
                    var sh_ot_night_hrs_pay = 0;
                    var rh_day_hrs = 0;
                    var rh_day_hrs_pay = 0;
                    var rh_ot_day_hrs = 0;
                    var rh_ot_day_hrs_pay = 0;
                    var rh_night_hrs = 0;
                    var rh_night_hrs_pay = 0;
                    var rh_ot_night_hrs = 0;
                    var rh_ot_night_hrs_pay = 0;
                    var sh_rdd_day_hrs = 0;
                    var sh_rdd_day_hrs_pay = 0;
                    var sh_rdd_ot_day_hrs = 0;
                    var sh_rdd_ot_day_hrs_pay = 0;
                    var sh_rdd_night_hrs = 0;
                    var sh_rdd_night_hrs_pay = 0;
                    var sh_rdd_ot_night_hrs = 0;
                    var sh_rdd_ot_night_hrs_pay = 0;
                    var rh_rdd_day_hrs = 0;
                    var rh_rdd_day_hrs_pay = 0;
                    var rh_rdd_ot_day_hrs = 0;
                    var rh_rdd_ot_day_hrs_pay = 0;
                    var rh_rdd_night_hrs = 0;
                    var rh_rdd_night_hrs_pay = 0;
                    var rh_rdd_ot_night_hrs = 0;
                    var rh_rdd_ot_night_hrs_pay = 0;
                    var allowance = 0;
                    var adjustment = 0;
                    var cash_advance = 0;
                    var sss = 0;
                    var pag_ibig = 0;
                    var philhealth = 0;
                    var sss_loan = 0;
                    var pag_ibig_loan = 0;
                    var withholding_tax = 0;
                    var under_time_deduction = 0;
                    var under_time_hours = 0;
                    var late_deduction = 0;
                    var late_mins = 0;
                    var ca_deduction = 0;
                    var uniform = 0;
                    var housing = 0;
                    var st_peter = 0;
                    var cash_not_return = 0;
                    var hard_hat = 0;
                    var safety_shoes = 0;
                    var over_meals = 0;
                    var bereavement_assistance = 0;
                    var gross_salary = 0;
                    var sub_deduction = 0;
                    var subtotal = 0;
                    var other_deduction = 0;
                    for(let c = 1; c < payroll_summary_data_list.content.length; c++){
                        if(payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "EMPLOYEE ID")] == payslip_employee_id[x] && payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "YEAR")] == search_year.value && payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "WEEK NUMBER")] == search_week_number.value){
                            adjustment = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "ADJUSTMENT")];
                            cash_advance = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "CASH ADVANCE")];
                            sss = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SSS")];
                            pag_ibig = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PAG-IBIG")];
                            philhealth = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PHILHEALTH")];
                            sss_loan = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SSS LOAN")];
                            pag_ibig_loan = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PAG-IBIG LOAN")];
                            ca_deduction = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "C/A DEDUCTION")];
                            uniform = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "UNIFORM")];
                            housing = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "HOUSING")];
                            st_peter = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "ST. PETER")];
                            cash_not_return = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "CASH NOT RETURN")];
                            hard_hat = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "HARD HAT")];
                            safety_shoes = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SAFETY SHOES")];
                            over_meals = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "OVER MEALS")];
                            bereavement_assistance = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "BEREAVEMENT ASSISTANCE")];
                            gross_salary = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "GROSS SALARY")];
                            sub_deduction = sss + sss_loan + pag_ibig + pag_ibig_loan + philhealth;
                            subtotal = gross_salary - sub_deduction;
                            other_deduction = ca_deduction + uniform + housing + st_peter + cash_not_return + hard_hat + safety_shoes + over_meals + bereavement_assistance;
                        }
                    }
                    for(let c = 1; c < payroll_transaction_data_list.content.length; c++){
                        if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")] == payslip_employee_id[x] && payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "YEAR")] == search_year.value && payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "WEEK NUMBER / MONTH-CUT OFF")] == search_week_number.value){
                            employee_id = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")];
                            employee_name = findEmployeeName(employee_id);
                            daily_rate = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DAILY RATE")];
                            allowance += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "ALLOWANCE")];
                            under_time_deduction += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "UNDER TIME DEDUCTION")];
                            under_time_hours += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "UNDER TIME (HOURS)")];
                            late_deduction += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "LATE DEDUCTION")];
                            late_mins += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "LATE (MINS)")];
                            // if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "LEAVE" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "VACATION LEAVE" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "SICK LEAVE"){
                            // if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT"){
                            if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT"){
                                var type_of_day = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "TYPE OF DAY")];
                                var day_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DAY HOURS")];
                                var ot_day_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "OT DAY HOURS")];
                                var night_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "NIGHT HOURS")];
                                var ot_night_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "OT NIGHT HOURS")];
                                if(type_of_day == "ORD"){
                                    ord_day_hrs += day_hours;
                                    ord_ot_day_hrs += ot_day_hours;
                                    ord_night_hrs += night_hours;
                                    ord_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RDD"){
                                    rdd_day_hrs += day_hours;
                                    rdd_ot_day_hrs += ot_day_hours;
                                    rdd_night_hrs += night_hours;
                                    rdd_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "SH"){
                                    sh_day_hrs += day_hours;
                                    sh_ot_day_hrs += ot_day_hours;
                                    sh_night_hrs += night_hours;
                                    sh_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RH"){
                                    rh_day_hrs += day_hours;
                                    rh_ot_day_hrs += ot_day_hours;
                                    rh_night_hrs += night_hours;
                                    rh_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "SH & RDD"){
                                    sh_rdd_day_hrs += day_hours;
                                    sh_rdd_ot_day_hrs += ot_day_hours;
                                    sh_rdd_night_hrs += night_hours;
                                    sh_rdd_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RH & RDD"){
                                    rh_rdd_day_hrs += day_hours;
                                    rh_rdd_ot_day_hrs += ot_day_hours;
                                    rh_rdd_night_hrs += night_hours;
                                    rh_rdd_ot_night_hrs += ot_night_hours;
                                }
                                ord_day_hrs_pay = parseFloat(ord_day_hrs) * (parseFloat(daily_rate)) / 8;
                                ord_ot_day_hrs_pay = parseFloat(ord_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.25) / 8;
                                ord_night_hrs_pay = parseFloat(ord_night_hrs) * ((parseFloat(daily_rate)) * 1.10) / 8;
                                ord_ot_night_hrs_pay = parseFloat(ord_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.375) / 8;
                                rdd_day_hrs_pay = parseFloat(rdd_day_hrs) * ((parseFloat(daily_rate)) * 1.30) / 8;
                                rdd_ot_day_hrs_pay = parseFloat(rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.69 ) / 8;
                                rdd_night_hrs_pay = parseFloat(rdd_night_hrs) * ((parseFloat(daily_rate)) * 1.43) / 8;
                                rdd_ot_night_hrs_pay = parseFloat(rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.859) / 8;
                                sh_day_hrs_pay = parseFloat(sh_day_hrs) * ((parseFloat(daily_rate)) * 1.30) / 8;
                                sh_ot_day_hrs_pay = parseFloat(sh_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.69) / 8;
                                sh_night_hrs_pay = parseFloat(sh_night_hrs) * ((parseFloat(daily_rate)) * 1.43) / 8;
                                sh_ot_night_hrs_pay = parseFloat(sh_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.859) / 8;
                                rh_day_hrs_pay = parseFloat(rh_day_hrs) * ((parseFloat(daily_rate)) * 2) / 8;
                                rh_ot_day_hrs_pay = parseFloat(rh_ot_day_hrs) * ((parseFloat(daily_rate)) * 2.60) / 8;
                                rh_night_hrs_pay = parseFloat(rh_night_hrs) * ((parseFloat(daily_rate)) * 2.20) / 8;
                                rh_ot_night_hrs_pay = parseFloat(rh_ot_night_hrs) * ((parseFloat(daily_rate)) * 2.86) / 8;
                                sh_rdd_day_hrs_pay = parseFloat(sh_rdd_day_hrs) * ((parseFloat(daily_rate)) * 1.50) / 8;
                                sh_rdd_ot_day_hrs_pay = parseFloat(sh_rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.95 ) / 8;
                                sh_rdd_night_hrs_pay = parseFloat(sh_rdd_night_hrs) * ((parseFloat(daily_rate)) * 1.65) / 8;
                                sh_rdd_ot_night_hrs_pay = parseFloat(sh_rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 2.145) / 8;
                                rh_rdd_day_hrs_pay = parseFloat(rh_rdd_day_hrs) * ((parseFloat(daily_rate)) * 2.60) / 8;
                                rh_rdd_ot_day_hrs_pay = parseFloat(rh_rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 3.38) / 8;
                                rh_rdd_night_hrs_pay = parseFloat(rh_rdd_night_hrs) * ((parseFloat(daily_rate)) * 2.86) / 8;
                                rh_rdd_ot_night_hrs_pay = parseFloat(rh_rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 3.718) / 8;
                            }    
                        }
                    }
                    var employee_department = "";
                    var employee_designation = "";
                    var employee_tin_no = "";
                    var pay_period_dates = getDatesInWeek(search_year.value, search_week_number.value);
                    const parts = (date_decoder(pay_period_dates[0])).split(', ');
                    var date_start = parts.slice(0, -1).join(', ');
                    var pay_period = `${date_start} - ${date_decoder(pay_period_dates[6])}`
                    for(let c = 1; c < employee_data_list.content.length; c++){
                        if(employee_id == employee_data_list.content[c][findTextInArray(employee_data_list, "EMPLOYEE ID")]){
                            employee_department = employee_data_list.content[c][findTextInArray(employee_data_list, "DEPARTMENT")];
                            employee_designation = employee_data_list.content[c][findTextInArray(employee_data_list, "DESIGNATION")];
                            employee_tin_no = employee_data_list.content[c][findTextInArray(employee_data_list, "TIN NO.")];
                        }
                    }
                    payslip_data2.push(
                        `
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
                                            <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${employee_name}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">ID No:</h4><h4 class="ps-1 truncate_text">${employee_id}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Department:</h4><h4 class="ps-1 truncate_text">${employee_department}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Tin No:</h4><h4 class="ps-1 truncate_text">${employee_tin_no}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Designation:</h4><h4 class="ps-1 truncate_text">${employee_designation}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Tax Code:</h4><h4 class="ps-1 truncate_text"></h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Pay Period:</h4><h4 class="ps-1 truncate_text">${pay_period}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Pay Date:</h4><h4 class="ps-1 truncate_text">${pay_date.value}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">EARNINGS</h3>
                                </div>
                                <div class="summary_details_details">
                                    <div class="border-right border-left detail_header">
                                        <h4 class="bold">Type of Day</h4>
                                        <h4 class="bold" style="text-align: center;">Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">OT<br>Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">N.Diff<br>Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">N.Diff<br>OT Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                    </div>
                                </div>
                                <div class="summary_details_details">
                                    <div class="border-right border-left">
                                        <h4>Ordinary Day</h4>
                                        <h4 style="text-align: center;">${ord_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_ot_night_hrs_pay)}</h4>
                                        <h4>Rest Day Duty</h4>
                                        <h4 style="text-align: center;">${rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_ot_night_hrs_pay)}</h4>
                                        <h4>Special Holiday</h4>
                                        <h4 style="text-align: center;">${sh_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_ot_night_hrs_pay)}</h4>
                                        <h4>Legal Holiday</h4>
                                        <h4 style="text-align: center;">${rh_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_ot_night_hrs_pay)}</h4>
                                        <h4>RDD + Spec. Hol.</h4>
                                        <h4 style="text-align: center;">${sh_rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_ot_night_hrs_pay)}</h4>
                                        <h4>RDD + Leg. Hol.</h4>
                                        <h4 style="text-align: center;">${rh_rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_ot_night_hrs_pay)}</h4>
                                        <h4>Allowance</h4>
                                        <h4 style="text-align: center;"></h4>
                                        <h4 style="text-align: right;">${formatNumber(parseFloat(allowance))}</h4>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">DEDUCTIONS</h3>
                                </div>
                                <div class="summary_details_details2">
                                    <div class="border-right border-left">
                                        <h4>SSS ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(sss)}</h4>
                                        <h4>HDMF ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(pag_ibig)}</h4>
                                        <h4>PHIC ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(philhealth)}</h4>
                                        <h4>SSS Loan</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(sss_loan)}</h4>
                                        <h4>HDMF Loan</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(pag_ibig_loan)}</h4>
                                        <h4>Withholding Tax</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(withholding_tax)}</h4>
                                        <h4>Undertime (Hrs):    ${under_time_hours} </h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(under_time_deduction)}</h4>
                                        <h4>Late (Mins):        ${late_mins}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(late_deduction)}</h4>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">SUMMARY</h3>
                                </div>
                                <div class="summary_footer border-left border-right">
                                    <div>
                                        <div>
                                            <h3>Adjustments</h3>
                                            <h3>Total Earnings</h3>
                                            <h3>Total Deductions</h3>
                                        </div>
                                        <div>
                                            <h3 style="text-align: right; padding-right: 5px;">0.00</h3>
                                            <h3 style="text-align: right; padding-right: 5px;">${formatNumber(gross_salary)}</h3>
                                            <h3 style="text-align: right; padding-right: 5px;">${formatNumber(sub_deduction)}</h3>
                                        </div>
                                    </div>
                                    <div class="border-left ps-1" style="display: grid; grid-template-columns: 50% 50%; justify-content: center; align-items: center;">
                                        <h3>Net Pay:</h3>
                                        <h3 style="text-align: right; padding-right: 5px;">${formatNumber(subtotal)}</h3>
                                    </div>
                                </div>
                                <div class="summary_footer2 border-left border-right">
                                    <div style="text-align: center;">
                                        <h3 style="display: flex; justify-content: center; align-items: end; height: 16px;">__________________</h3>
                                        <h3>Employee's Signature</h3>
                                    </div>
                                    <div style="text-align: center;">
                                        <h3 style="display: flex; justify-content: center; align-items: end; height: 16px;">__________________</h3>
                                        <h3>Authorized Signature</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )

                    payslip_others2.push(
                        `
                        <div style="position: absolute; border: 3px solid black; top: 428px; left: 940px; width: 92px; height:368px; padding: 3px; display: flex; justify-content: end;">
                            <div style=" transform: rotate(270deg); width: 368px; height: 92px; position: absolute; left: -140px; top: 135px;">
                                <div style="width: 100%; height: 100%; padding: 3px; display: grid; grid-template-columns: 65% 35%;">
                                    <div style="border-right: 1px solid black; padding: 0 3px;">
                                        <div style="display: flex; justify-content: space-around;">
                                            <h2>${employee_id}</h2>
                                            <h2>OTHER DEDUCTIONS</h2>
                                        </div>
                                        <div style="display: grid; grid-template-columns: 55% 45%" class="border">
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">C/A Deduction</h4><h4 class="pe-1 right">${ca_deduction}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Uniform</h4><h4 class="pe-1 right">${uniform}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Housing</h4><h4 class="pe-1 right">${housing}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">St. Peter</h4><h4 class="pe-1 right">${st_peter}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Safety Shoes</h4><h4 class="pe-1 right">${safety_shoes}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Hard Hat</h4><h4 class="pe-1 right">${hard_hat}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Cash Not Return</h4><h4 class="pe-1 right">${cash_not_return}</h4>
                                            </div>
                                            <div style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Bereavement</h4><h4 class="pe-1 right">${bereavement_assistance}</h4>
                                            </div>
                                            <div class="border-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Over Meals</h4><h4 class="pe-1 right">${over_meals}</h4>
                                            </div>
                                            <div style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Assistance</h4><h4 class="pe-1 right"></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="padding: 0 3px; height: 70px;">
                                        <div style="text-align: center;">
                                            <h2>SUMMARY</h2>
                                        </div>
                                        <div class="border">
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Net Pay:</h4><h3 class="pe-1 bold" style="text-align: end;">${formatNumber(subtotal)}</h3>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Other<br>Deductions:</h4><h3 class="pe-1 bold" style="text-align: end;">${formatNumber(other_deduction)}</h3>
                                            </div>
                                            <div class="" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Remaining<br>Salary:</h4><h2 class="pe-1 bold" style="text-align: end;">${formatNumber(subtotal - other_deduction)}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )

                }
                for(let x = 0; x < Math.floor(payslip_employee_id.length/2); x++){
                    var payslip_container_data = 
                    `
                    <div id="payslip_form" style="display: flex; flex-direction: row;">
                        <div style="position: absolute; left: 460px; height: 816px; border-left: 1px solid black;"></div>
                        <div style="position: absolute; left: 920px; height: 816px; border-left: 1px solid black;"></div>
                        <div style="position: absolute; top: 408px; width: 1056px; border-top: 1px solid black;"></div>
                        <div style="display: flex; flex-wrap: wrap; width: 920px">
                            ${payslip_data[x]}
                            ${payslip_data[x]}
                            ${payslip_data2[x]}
                            ${payslip_data2[x]}
                            ${payslip_others[x]}
                            ${payslip_others2[x]}
                        </div>
                    </div>
                    `
                    payslip_container.insertAdjacentHTML("beforeend", payslip_container_data)
                }
                if(payslip_employee_id.length % 2 == 1){
                    var payslip_container_data = 
                    `
                    <div id="payslip_form" style="display: flex; flex-direction: row;">
                        <div style="position: absolute; left: 460px; height: 816px; border-left: 1px solid black;"></div>
                        <div style="position: absolute; left: 920px; height: 816px; border-left: 1px solid black;"></div>
                        <div style="position: absolute; top: 408px; width: 1056px; border-top: 1px solid black;"></div>
                        <div style="display: flex; flex-wrap: wrap; width: 920px">
                            ${payslip_data[payslip_data.length -1]}
                            ${payslip_data[payslip_data.length -1]}
                            ${payslip_others[payslip_data.length -1]}
                        </div>
                    </div>
                    `
                    payslip_container.insertAdjacentHTML("beforeend", payslip_container_data)
                }
            }
            else if(payroll_type2.value == "SEMI-MONTHLY"){
                const search_year = attendance_form.querySelector("#search_year")
                const search_cut_off_period = attendance_form.querySelector("#search_cut_off_period")        
                for(let c = 1; c < payroll_transaction_data_list.content.length; c++){
                    if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "YEAR")] == search_year.value && (payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "WEEK NUMBER / MONTH-CUT OFF")]) == (parseInt(search_cut_off_period.value))){
                        if (!payslip_employee_id.includes(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")])) {
                            payslip_employee_id.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")]);
                        }
                    }
                }
                var payslip_data = []
                var payslip_others = []
                var payslip_data2 = []
                var payslip_others2 = []
                var government_dues_month = "";
                var government_dues_year = "";
                var month = months.indexOf(getCutoffPeriodAndMonth(parseInt(search_cut_off_period.value))[1]);
                var year = (search_year.value);
                if(month == 0){
                    government_dues_month = months[11];
                    government_dues_year = parseInt(year) - 1;
                }
                else {
                    government_dues_month = months[month];
                    government_dues_year = parseInt(year);
                }
                for(let x = 0; x < payslip_employee_id.length; x += 2){
                    var employee_name = "";
                    var employee_id = "";
                    var daily_rate = 0;
                    var ord_day_hrs = 0;
                    var ord_day_hrs_pay = 0;
                    var ord_ot_day_hrs = 0;
                    var ord_ot_day_hrs_pay = 0;
                    var ord_night_hrs = 0;
                    var ord_night_hrs_pay = 0;
                    var ord_ot_night_hrs = 0;
                    var ord_ot_night_hrs_pay = 0;
                    var rdd_day_hrs = 0;
                    var rdd_day_hrs_pay = 0;
                    var rdd_ot_day_hrs = 0;
                    var rdd_ot_day_hrs_pay = 0;
                    var rdd_night_hrs = 0;
                    var rdd_night_hrs_pay = 0;
                    var rdd_ot_night_hrs = 0;
                    var rdd_ot_night_hrs_pay = 0;
                    var sh_day_hrs = 0;
                    var sh_day_hrs_pay = 0;
                    var sh_ot_day_hrs = 0;
                    var sh_ot_day_hrs_pay = 0;
                    var sh_night_hrs = 0;
                    var sh_night_hrs_pay = 0;
                    var sh_ot_night_hrs = 0;
                    var sh_ot_night_hrs_pay = 0;
                    var rh_day_hrs = 0;
                    var rh_day_hrs_pay = 0;
                    var rh_ot_day_hrs = 0;
                    var rh_ot_day_hrs_pay = 0;
                    var rh_night_hrs = 0;
                    var rh_night_hrs_pay = 0;
                    var rh_ot_night_hrs = 0;
                    var rh_ot_night_hrs_pay = 0;
                    var sh_rdd_day_hrs = 0;
                    var sh_rdd_day_hrs_pay = 0;
                    var sh_rdd_ot_day_hrs = 0;
                    var sh_rdd_ot_day_hrs_pay = 0;
                    var sh_rdd_night_hrs = 0;
                    var sh_rdd_night_hrs_pay = 0;
                    var sh_rdd_ot_night_hrs = 0;
                    var sh_rdd_ot_night_hrs_pay = 0;
                    var rh_rdd_day_hrs = 0;
                    var rh_rdd_day_hrs_pay = 0;
                    var rh_rdd_ot_day_hrs = 0;
                    var rh_rdd_ot_day_hrs_pay = 0;
                    var rh_rdd_night_hrs = 0;
                    var rh_rdd_night_hrs_pay = 0;
                    var rh_rdd_ot_night_hrs = 0;
                    var rh_rdd_ot_night_hrs_pay = 0;
                    var allowance = 0;
                    var adjustment = 0;
                    var cash_advance = 0;
                    var sss = 0;
                    var pag_ibig = 0;
                    var philhealth = 0;
                    var sss_loan = 0;
                    var pag_ibig_loan = 0;
                    var withholding_tax = 0;
                    var under_time_deduction = 0;
                    var under_time_hours = 0;
                    var late_deduction = 0;
                    var late_mins = 0;
                    var ca_deduction = 0;
                    var uniform = 0;
                    var housing = 0;
                    var st_peter = 0;
                    var cash_not_return = 0;
                    var hard_hat = 0;
                    var safety_shoes = 0;
                    var over_meals = 0;
                    var bereavement_assistance = 0;
                    var gross_salary = 0;
                    var sub_deduction = 0;
                    var subtotal = 0;
                    var other_deduction = 0;
                    for(let c = 1; c < payroll_summary_data_list.content.length; c++){
                        if(payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "EMPLOYEE ID")] == payslip_employee_id[x] && payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "YEAR")] == search_year.value && (payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "WEEK NUMBER")]) == (parseInt(search_cut_off_period.value))){
                            adjustment = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "ADJUSTMENT")];
                            cash_advance = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "CASH ADVANCE")];
                            sss = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SSS")];
                            pag_ibig = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PAG-IBIG")];
                            philhealth = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PHILHEALTH")];
                            sss_loan = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SSS LOAN")];
                            pag_ibig_loan = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PAG-IBIG LOAN")];
                            ca_deduction = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "C/A DEDUCTION")];
                            uniform = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "UNIFORM")];
                            housing = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "HOUSING")];
                            st_peter = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "ST. PETER")];
                            cash_not_return = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "CASH NOT RETURN")];
                            hard_hat = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "HARD HAT")];
                            safety_shoes = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SAFETY SHOES")];
                            over_meals = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "OVER MEALS")];
                            bereavement_assistance = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "BEREAVEMENT ASSISTANCE")];
                            gross_salary = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "GROSS SALARY")];
                            sub_deduction = sss + sss_loan + pag_ibig + pag_ibig_loan + philhealth;
                            subtotal = gross_salary - sub_deduction;
                            other_deduction = ca_deduction + uniform + housing + st_peter + cash_not_return + hard_hat + safety_shoes + over_meals + bereavement_assistance;
                        }
                    }
                    for(let c = 1; c < payroll_transaction_data_list.content.length; c++){
                        if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")] == payslip_employee_id[x] && payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "YEAR")] == search_year.value && (payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "WEEK NUMBER / MONTH-CUT OFF")]) == (parseInt(search_cut_off_period.value))){
                            employee_id = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")];
                            employee_name = findEmployeeName(employee_id);
                            daily_rate = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DAILY RATE")];
                            allowance += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "ALLOWANCE")];
                            under_time_deduction += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "UNDER TIME DEDUCTION")];
                            under_time_hours += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "UNDER TIME (HOURS)")];
                            late_deduction += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "LATE DEDUCTION")];
                            late_mins += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "LATE (MINS)")];
                            // if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "LEAVE" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "VACATION LEAVE" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "SICK LEAVE"){
                            // if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT"){
                            if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT"){
                                var type_of_day = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "TYPE OF DAY")];
                                var day_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DAY HOURS")];
                                var ot_day_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "OT DAY HOURS")];
                                var night_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "NIGHT HOURS")];
                                var ot_night_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "OT NIGHT HOURS")];
                                if(type_of_day == "ORD"){
                                    ord_day_hrs += day_hours;
                                    ord_ot_day_hrs += ot_day_hours;
                                    ord_night_hrs += night_hours;
                                    ord_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RDD"){
                                    rdd_day_hrs += day_hours;
                                    rdd_ot_day_hrs += ot_day_hours;
                                    rdd_night_hrs += night_hours;
                                    rdd_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "SH"){
                                    sh_day_hrs += day_hours;
                                    sh_ot_day_hrs += ot_day_hours;
                                    sh_night_hrs += night_hours;
                                    sh_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RH"){
                                    rh_day_hrs += day_hours;
                                    rh_ot_day_hrs += ot_day_hours;
                                    rh_night_hrs += night_hours;
                                    rh_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "SH & RDD"){
                                    sh_rdd_day_hrs += day_hours;
                                    sh_rdd_ot_day_hrs += ot_day_hours;
                                    sh_rdd_night_hrs += night_hours;
                                    sh_rdd_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RH & RDD"){
                                    rh_rdd_day_hrs += day_hours;
                                    rh_rdd_ot_day_hrs += ot_day_hours;
                                    rh_rdd_night_hrs += night_hours;
                                    rh_rdd_ot_night_hrs += ot_night_hours;
                                }
                                ord_day_hrs_pay = parseFloat(ord_day_hrs) * (parseFloat(daily_rate)) / 8;
                                ord_ot_day_hrs_pay = parseFloat(ord_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.25) / 8;
                                ord_night_hrs_pay = parseFloat(ord_night_hrs) * ((parseFloat(daily_rate)) * 1.10) / 8;
                                ord_ot_night_hrs_pay = parseFloat(ord_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.375) / 8;
                                rdd_day_hrs_pay = parseFloat(rdd_day_hrs) * ((parseFloat(daily_rate)) * 1.30) / 8;
                                rdd_ot_day_hrs_pay = parseFloat(rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.69 ) / 8;
                                rdd_night_hrs_pay = parseFloat(rdd_night_hrs) * ((parseFloat(daily_rate)) * 1.43) / 8;
                                rdd_ot_night_hrs_pay = parseFloat(rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.859) / 8;
                                sh_day_hrs_pay = parseFloat(sh_day_hrs) * ((parseFloat(daily_rate)) * 1.30) / 8;
                                sh_ot_day_hrs_pay = parseFloat(sh_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.69) / 8;
                                sh_night_hrs_pay = parseFloat(sh_night_hrs) * ((parseFloat(daily_rate)) * 1.43) / 8;
                                sh_ot_night_hrs_pay = parseFloat(sh_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.859) / 8;
                                rh_day_hrs_pay = parseFloat(rh_day_hrs) * ((parseFloat(daily_rate)) * 2) / 8;
                                rh_ot_day_hrs_pay = parseFloat(rh_ot_day_hrs) * ((parseFloat(daily_rate)) * 2.60) / 8;
                                rh_night_hrs_pay = parseFloat(rh_night_hrs) * ((parseFloat(daily_rate)) * 2.20) / 8;
                                rh_ot_night_hrs_pay = parseFloat(rh_ot_night_hrs) * ((parseFloat(daily_rate)) * 2.86) / 8;
                                sh_rdd_day_hrs_pay = parseFloat(sh_rdd_day_hrs) * ((parseFloat(daily_rate)) * 1.50) / 8;
                                sh_rdd_ot_day_hrs_pay = parseFloat(sh_rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.95 ) / 8;
                                sh_rdd_night_hrs_pay = parseFloat(sh_rdd_night_hrs) * ((parseFloat(daily_rate)) * 1.65) / 8;
                                sh_rdd_ot_night_hrs_pay = parseFloat(sh_rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 2.145) / 8;
                                rh_rdd_day_hrs_pay = parseFloat(rh_rdd_day_hrs) * ((parseFloat(daily_rate)) * 2.60) / 8;
                                rh_rdd_ot_day_hrs_pay = parseFloat(rh_rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 3.38) / 8;
                                rh_rdd_night_hrs_pay = parseFloat(rh_rdd_night_hrs) * ((parseFloat(daily_rate)) * 2.86) / 8;
                                rh_rdd_ot_night_hrs_pay = parseFloat(rh_rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 3.718) / 8;
                            }    
                        }
                    }
                    var employee_department = "";
                    var employee_designation = "";
                    var employee_tin_no = "";
                    var pay_period_dates = getDatesForCutoffPeriod(getCutoffPeriodAndMonth(parseInt(search_cut_off_period.value))[1], search_year.value, getCutoffPeriodAndMonth(parseInt(search_cut_off_period.value))[0]);
                    const parts = (date_decoder(pay_period_dates[0])).split(', ');
                    var date_start = parts.slice(0, -1).join(', ');
                    var pay_period = `${date_start} - ${date_decoder(pay_period_dates[6])}`
                    for(let c = 1; c < employee_data_list.content.length; c++){
                        if(employee_id == employee_data_list.content[c][findTextInArray(employee_data_list, "EMPLOYEE ID")]){
                            employee_department = employee_data_list.content[c][findTextInArray(employee_data_list, "DEPARTMENT")];
                            employee_designation = employee_data_list.content[c][findTextInArray(employee_data_list, "DESIGNATION")];
                            employee_tin_no = employee_data_list.content[c][findTextInArray(employee_data_list, "TIN NO.")];
                        }
                    }
                    payslip_data.push(
                        `
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
                                            <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${employee_name}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">ID No:</h4><h4 class="ps-1 truncate_text">${employee_id}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Department:</h4><h4 class="ps-1 truncate_text">${employee_department}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Tin No:</h4><h4 class="ps-1 truncate_text">${employee_tin_no}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Designation:</h4><h4 class="ps-1 truncate_text">${employee_designation}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Tax Code:</h4><h4 class="ps-1 truncate_text"></h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Pay Period:</h4><h4 class="ps-1 truncate_text">${pay_period}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Pay Date:</h4><h4 class="ps-1 truncate_text">${pay_date.value}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">EARNINGS</h3>
                                </div>
                                <div class="summary_details_details">
                                    <div class="border-right border-left detail_header">
                                        <h4 class="bold">Type of Day</h4>
                                        <h4 class="bold" style="text-align: center;">Days</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">OT<br>Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">N.Diff<br>Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">N.Diff<br>OT Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                    </div>
                                </div>
                                <div class="summary_details_details">
                                    <div class="border-right border-left">
                                        <h4>Ordinary Day</h4>
                                        <h4 style="text-align: center;">${(ord_day_hrs)/8}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_ot_night_hrs_pay)}</h4>
                                        <h4>Rest Day Duty</h4>
                                        <h4 style="text-align: center;">${rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_ot_night_hrs_pay)}</h4>
                                        <h4>Special Holiday</h4>
                                        <h4 style="text-align: center;">${sh_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_ot_night_hrs_pay)}</h4>
                                        <h4>Legal Holiday</h4>
                                        <h4 style="text-align: center;">${rh_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_ot_night_hrs_pay)}</h4>
                                        <h4>RDD + Spec. Hol.</h4>
                                        <h4 style="text-align: center;">${sh_rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_ot_night_hrs_pay)}</h4>
                                        <h4>RDD + Leg. Hol.</h4>
                                        <h4 style="text-align: center;">${rh_rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_ot_night_hrs_pay)}</h4>
                                        <h4>Allowance</h4>
                                        <h4 style="text-align: center;"></h4>
                                        <h4 style="text-align: right;">${formatNumber(parseFloat(allowance))}</h4>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">DEDUCTIONS</h3>
                                </div>
                                <div class="summary_details_details2">
                                    <div class="border-right border-left">
                                        <h4>SSS ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(sss)}</h4>
                                        <h4>HDMF ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(pag_ibig)}</h4>
                                        <h4>PHIC ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(philhealth)}</h4>
                                        <h4>SSS Loan</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(sss_loan)}</h4>
                                        <h4>HDMF Loan</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(pag_ibig_loan)}</h4>
                                        <h4>Withholding Tax</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(withholding_tax)}</h4>
                                        <h4>Undertime (Hrs):    ${under_time_hours} </h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(under_time_deduction)}</h4>
                                        <h4>Late (Mins):        ${late_mins}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(late_deduction)}</h4>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">SUMMARY</h3>
                                </div>
                                <div class="summary_footer border-left border-right">
                                    <div>
                                        <div>
                                            <h3>Adjustments</h3>
                                            <h3>Total Earnings</h3>
                                            <h3>Total Deductions</h3>
                                        </div>
                                        <div>
                                            <h3 style="text-align: right; padding-right: 5px;">0.00</h3>
                                            <h3 style="text-align: right; padding-right: 5px;">${formatNumber(gross_salary)}</h3>
                                            <h3 style="text-align: right; padding-right: 5px;">${formatNumber(sub_deduction)}</h3>
                                        </div>
                                    </div>
                                    <div class="border-left ps-1" style="display: grid; grid-template-columns: 50% 50%; justify-content: center; align-items: center;">
                                        <h3>Net Pay:</h3>
                                        <h3 style="text-align: right; padding-right: 5px;">${formatNumber(subtotal)}</h3>
                                    </div>
                                </div>
                                <div class="summary_footer2 border-left border-right">
                                    <div style="text-align: center;">
                                        <h3 style="display: flex; justify-content: center; align-items: end; height: 16px;">__________________</h3>
                                        <h3>Employee's Signature</h3>
                                    </div>
                                    <div style="text-align: center;">
                                        <h3 style="display: flex; justify-content: center; align-items: end; height: 16px;">__________________</h3>
                                        <h3>Authorized Signature</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )

                    payslip_others.push(
                        `
                        <div style="position: absolute; border: 3px solid black; top: 20px; left: 940px; width: 92px; height:368px; padding: 3px; display: flex; justify-content: end;">
                            <div style=" transform: rotate(270deg); width: 368px; height: 92px; position: absolute; left: -140px; top: 135px;">
                                <div style="width: 100%; height: 100%; padding: 3px; display: grid; grid-template-columns: 65% 35%;">
                                    <div style="border-right: 1px solid black; padding: 0 3px;">
                                        <div style="display: flex; justify-content: space-around;">
                                            <h2>${employee_id}</h2>
                                            <h2>OTHER DEDUCTIONS</h2>
                                        </div>
                                        <div style="display: grid; grid-template-columns: 55% 45%" class="border">
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">C/A Deduction</h4><h4 class="pe-1 right">${ca_deduction}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Uniform</h4><h4 class="pe-1 right">${uniform}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Housing</h4><h4 class="pe-1 right">${housing}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">St. Peter</h4><h4 class="pe-1 right">${st_peter}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Safety Shoes</h4><h4 class="pe-1 right">${safety_shoes}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Hard Hat</h4><h4 class="pe-1 right">${hard_hat}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Cash Not Return</h4><h4 class="pe-1 right">${cash_not_return}</h4>
                                            </div>
                                            <div style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Bereavement</h4><h4 class="pe-1 right">${bereavement_assistance}</h4>
                                            </div>
                                            <div class="border-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Over Meals</h4><h4 class="pe-1 right">${over_meals}</h4>
                                            </div>
                                            <div style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Assistance</h4><h4 class="pe-1 right"></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="padding: 0 3px; height: 70px;">
                                        <div style="text-align: center;">
                                            <h2>SUMMARY</h2>
                                        </div>
                                        <div class="border">
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Net Pay:</h4><h3 class="pe-1 bold" style="text-align: end;">${formatNumber(subtotal)}</h3>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Other<br>Deductions:</h4><h3 class="pe-1 bold" style="text-align: end;">${formatNumber(other_deduction)}</h3>
                                            </div>
                                            <div class="" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Remaining<br>Salary:</h4><h2 class="pe-1 bold" style="text-align: end;">${formatNumber(subtotal - other_deduction)}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                }
                for(let x = 1; x < payslip_employee_id.length; x += 2){
                    var employee_name = "";
                    var employee_id = "";
                    var daily_rate = 0;
                    var ord_day_hrs = 0;
                    var ord_day_hrs_pay = 0;
                    var ord_ot_day_hrs = 0;
                    var ord_ot_day_hrs_pay = 0;
                    var ord_night_hrs = 0;
                    var ord_night_hrs_pay = 0;
                    var ord_ot_night_hrs = 0;
                    var ord_ot_night_hrs_pay = 0;
                    var rdd_day_hrs = 0;
                    var rdd_day_hrs_pay = 0;
                    var rdd_ot_day_hrs = 0;
                    var rdd_ot_day_hrs_pay = 0;
                    var rdd_night_hrs = 0;
                    var rdd_night_hrs_pay = 0;
                    var rdd_ot_night_hrs = 0;
                    var rdd_ot_night_hrs_pay = 0;
                    var sh_day_hrs = 0;
                    var sh_day_hrs_pay = 0;
                    var sh_ot_day_hrs = 0;
                    var sh_ot_day_hrs_pay = 0;
                    var sh_night_hrs = 0;
                    var sh_night_hrs_pay = 0;
                    var sh_ot_night_hrs = 0;
                    var sh_ot_night_hrs_pay = 0;
                    var rh_day_hrs = 0;
                    var rh_day_hrs_pay = 0;
                    var rh_ot_day_hrs = 0;
                    var rh_ot_day_hrs_pay = 0;
                    var rh_night_hrs = 0;
                    var rh_night_hrs_pay = 0;
                    var rh_ot_night_hrs = 0;
                    var rh_ot_night_hrs_pay = 0;
                    var sh_rdd_day_hrs = 0;
                    var sh_rdd_day_hrs_pay = 0;
                    var sh_rdd_ot_day_hrs = 0;
                    var sh_rdd_ot_day_hrs_pay = 0;
                    var sh_rdd_night_hrs = 0;
                    var sh_rdd_night_hrs_pay = 0;
                    var sh_rdd_ot_night_hrs = 0;
                    var sh_rdd_ot_night_hrs_pay = 0;
                    var rh_rdd_day_hrs = 0;
                    var rh_rdd_day_hrs_pay = 0;
                    var rh_rdd_ot_day_hrs = 0;
                    var rh_rdd_ot_day_hrs_pay = 0;
                    var rh_rdd_night_hrs = 0;
                    var rh_rdd_night_hrs_pay = 0;
                    var rh_rdd_ot_night_hrs = 0;
                    var rh_rdd_ot_night_hrs_pay = 0;
                    var allowance = 0;
                    var adjustment = 0;
                    var cash_advance = 0;
                    var sss = 0;
                    var pag_ibig = 0;
                    var philhealth = 0;
                    var sss_loan = 0;
                    var pag_ibig_loan = 0;
                    var withholding_tax = 0;
                    var under_time_deduction = 0;
                    var under_time_hours = 0;
                    var late_deduction = 0;
                    var late_mins = 0;
                    var ca_deduction = 0;
                    var uniform = 0;
                    var housing = 0;
                    var st_peter = 0;
                    var cash_not_return = 0;
                    var hard_hat = 0;
                    var safety_shoes = 0;
                    var over_meals = 0;
                    var bereavement_assistance = 0;
                    var gross_salary = 0;
                    var sub_deduction = 0;
                    var subtotal = 0;
                    var other_deduction = 0;
                    for(let c = 1; c < payroll_summary_data_list.content.length; c++){
                        if(payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "EMPLOYEE ID")] == payslip_employee_id[x] && payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "YEAR")] == search_year.value && (payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "WEEK NUMBER")]) == (parseInt(search_cut_off_period.value))){
                            adjustment = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "ADJUSTMENT")];
                            cash_advance = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "CASH ADVANCE")];
                            sss = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SSS")];
                            pag_ibig = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PAG-IBIG")];
                            philhealth = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PHILHEALTH")];
                            sss_loan = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SSS LOAN")];
                            pag_ibig_loan = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "PAG-IBIG LOAN")];
                            ca_deduction = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "C/A DEDUCTION")];
                            uniform = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "UNIFORM")];
                            housing = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "HOUSING")];
                            st_peter = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "ST. PETER")];
                            cash_not_return = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "CASH NOT RETURN")];
                            hard_hat = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "HARD HAT")];
                            safety_shoes = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "SAFETY SHOES")];
                            over_meals = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "OVER MEALS")];
                            bereavement_assistance = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "BEREAVEMENT ASSISTANCE")];
                            gross_salary = payroll_summary_data_list.content[c][findTextInArray(payroll_summary_data_list, "GROSS SALARY")];
                            sub_deduction = sss + sss_loan + pag_ibig + pag_ibig_loan + philhealth;
                            subtotal = gross_salary - sub_deduction;
                            other_deduction = ca_deduction + uniform + housing + st_peter + cash_not_return + hard_hat + safety_shoes + over_meals + bereavement_assistance;
                        }
                    }
                    for(let c = 1; c < payroll_transaction_data_list.content.length; c++){
                        if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")] == payslip_employee_id[x] && payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "YEAR")] == search_year.value && (payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "WEEK NUMBER / MONTH-CUT OFF")]) == (parseInt(search_cut_off_period.value))){
                            employee_id = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")];
                            employee_name = findEmployeeName(employee_id);
                            daily_rate = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DAILY RATE")];
                            allowance += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "ALLOWANCE")];
                            under_time_deduction += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "UNDER TIME DEDUCTION")];
                            under_time_hours += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "UNDER TIME (HOURS)")];
                            late_deduction += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "LATE DEDUCTION")];
                            late_mins += payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "LATE (MINS)")];
                            // if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "LEAVE" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "VACATION LEAVE" ||
                            //     payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "SICK LEAVE"){
                            // if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT"){
                            if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")] != "ABSENT"){
                                var type_of_day = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "TYPE OF DAY")];
                                var day_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DAY HOURS")];
                                var ot_day_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "OT DAY HOURS")];
                                var night_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "NIGHT HOURS")];
                                var ot_night_hours = payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "OT NIGHT HOURS")];
                                if(type_of_day == "ORD"){
                                    ord_day_hrs += day_hours;
                                    ord_ot_day_hrs += ot_day_hours;
                                    ord_night_hrs += night_hours;
                                    ord_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RDD"){
                                    rdd_day_hrs += day_hours;
                                    rdd_ot_day_hrs += ot_day_hours;
                                    rdd_night_hrs += night_hours;
                                    rdd_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "SH"){
                                    sh_day_hrs += day_hours;
                                    sh_ot_day_hrs += ot_day_hours;
                                    sh_night_hrs += night_hours;
                                    sh_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RH"){
                                    rh_day_hrs += day_hours;
                                    rh_ot_day_hrs += ot_day_hours;
                                    rh_night_hrs += night_hours;
                                    rh_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "SH & RDD"){
                                    sh_rdd_day_hrs += day_hours;
                                    sh_rdd_ot_day_hrs += ot_day_hours;
                                    sh_rdd_night_hrs += night_hours;
                                    sh_rdd_ot_night_hrs += ot_night_hours;
                                }
                                else if(type_of_day == "RH & RDD"){
                                    rh_rdd_day_hrs += day_hours;
                                    rh_rdd_ot_day_hrs += ot_day_hours;
                                    rh_rdd_night_hrs += night_hours;
                                    rh_rdd_ot_night_hrs += ot_night_hours;
                                }
                                ord_day_hrs_pay = parseFloat(ord_day_hrs) * (parseFloat(daily_rate)) / 8;
                                ord_ot_day_hrs_pay = parseFloat(ord_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.25) / 8;
                                ord_night_hrs_pay = parseFloat(ord_night_hrs) * ((parseFloat(daily_rate)) * 1.10) / 8;
                                ord_ot_night_hrs_pay = parseFloat(ord_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.375) / 8;
                                rdd_day_hrs_pay = parseFloat(rdd_day_hrs) * ((parseFloat(daily_rate)) * 1.30) / 8;
                                rdd_ot_day_hrs_pay = parseFloat(rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.69 ) / 8;
                                rdd_night_hrs_pay = parseFloat(rdd_night_hrs) * ((parseFloat(daily_rate)) * 1.43) / 8;
                                rdd_ot_night_hrs_pay = parseFloat(rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.859) / 8;
                                sh_day_hrs_pay = parseFloat(sh_day_hrs) * ((parseFloat(daily_rate)) * 1.30) / 8;
                                sh_ot_day_hrs_pay = parseFloat(sh_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.69) / 8;
                                sh_night_hrs_pay = parseFloat(sh_night_hrs) * ((parseFloat(daily_rate)) * 1.43) / 8;
                                sh_ot_night_hrs_pay = parseFloat(sh_ot_night_hrs) * ((parseFloat(daily_rate)) * 1.859) / 8;
                                rh_day_hrs_pay = parseFloat(rh_day_hrs) * ((parseFloat(daily_rate)) * 2) / 8;
                                rh_ot_day_hrs_pay = parseFloat(rh_ot_day_hrs) * ((parseFloat(daily_rate)) * 2.60) / 8;
                                rh_night_hrs_pay = parseFloat(rh_night_hrs) * ((parseFloat(daily_rate)) * 2.20) / 8;
                                rh_ot_night_hrs_pay = parseFloat(rh_ot_night_hrs) * ((parseFloat(daily_rate)) * 2.86) / 8;
                                sh_rdd_day_hrs_pay = parseFloat(sh_rdd_day_hrs) * ((parseFloat(daily_rate)) * 1.50) / 8;
                                sh_rdd_ot_day_hrs_pay = parseFloat(sh_rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 1.95 ) / 8;
                                sh_rdd_night_hrs_pay = parseFloat(sh_rdd_night_hrs) * ((parseFloat(daily_rate)) * 1.65) / 8;
                                sh_rdd_ot_night_hrs_pay = parseFloat(sh_rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 2.145) / 8;
                                rh_rdd_day_hrs_pay = parseFloat(rh_rdd_day_hrs) * ((parseFloat(daily_rate)) * 2.60) / 8;
                                rh_rdd_ot_day_hrs_pay = parseFloat(rh_rdd_ot_day_hrs) * ((parseFloat(daily_rate)) * 3.38) / 8;
                                rh_rdd_night_hrs_pay = parseFloat(rh_rdd_night_hrs) * ((parseFloat(daily_rate)) * 2.86) / 8;
                                rh_rdd_ot_night_hrs_pay = parseFloat(rh_rdd_ot_night_hrs) * ((parseFloat(daily_rate)) * 3.718) / 8;
                            }    
                        }
                    }
                    var employee_department = "";
                    var employee_designation = "";
                    var employee_tin_no = "";
                    var pay_period_dates = getDatesForCutoffPeriod(getCutoffPeriodAndMonth(parseInt(search_cut_off_period.value))[1], search_year.value, getCutoffPeriodAndMonth(parseInt(search_cut_off_period.value))[0]);
                    const parts = (date_decoder(pay_period_dates[0])).split(', ');
                    var date_start = parts.slice(0, -1).join(', ');
                    var pay_period = `${date_start} - ${date_decoder(pay_period_dates[pay_period_dates.length])}`
                    for(let c = 1; c < employee_data_list.content.length; c++){
                        if(employee_id == employee_data_list.content[c][findTextInArray(employee_data_list, "EMPLOYEE ID")]){
                            employee_department = employee_data_list.content[c][findTextInArray(employee_data_list, "DEPARTMENT")];
                            employee_designation = employee_data_list.content[c][findTextInArray(employee_data_list, "DESIGNATION")];
                            employee_tin_no = employee_data_list.content[c][findTextInArray(employee_data_list, "TIN NO.")];
                        }
                    }
                    payslip_data2.push(
                        `
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
                                            <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${employee_name}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">ID No:</h4><h4 class="ps-1 truncate_text">${employee_id}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Department:</h4><h4 class="ps-1 truncate_text">${employee_department}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Tin No:</h4><h4 class="ps-1 truncate_text">${employee_tin_no}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Designation:</h4><h4 class="ps-1 truncate_text">${employee_designation}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Tax Code:</h4><h4 class="ps-1 truncate_text"></h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Pay Period:</h4><h4 class="ps-1 truncate_text">${pay_period}</h4>
                                        </div>
                                        <div class="d-flex">
                                            <h4 class="bold">Pay Date:</h4><h4 class="ps-1 truncate_text">${pay_date.value}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">EARNINGS</h3>
                                </div>
                                <div class="summary_details_details">
                                    <div class="border-right border-left detail_header">
                                        <h4 class="bold">Type of Day</h4>
                                        <h4 class="bold" style="text-align: center;">Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">OT<br>Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">N.Diff<br>Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                        <h4 class="bold">N.Diff<br>OT Hrs</h4>
                                        <h4 class="bold" style="text-align: center;">Amount</h4>
                                    </div>
                                </div>
                                <div class="summary_details_details">
                                    <div class="border-right border-left">
                                        <h4>Ordinary Day</h4>
                                        <h4 style="text-align: center;">${(ord_day_hrs/8)}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${ord_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(ord_ot_night_hrs_pay)}</h4>
                                        <h4>Rest Day Duty</h4>
                                        <h4 style="text-align: center;">${rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rdd_ot_night_hrs_pay)}</h4>
                                        <h4>Special Holiday</h4>
                                        <h4 style="text-align: center;">${sh_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_ot_night_hrs_pay)}</h4>
                                        <h4>Legal Holiday</h4>
                                        <h4 style="text-align: center;">${rh_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_ot_night_hrs_pay)}</h4>
                                        <h4>RDD + Spec. Hol.</h4>
                                        <h4 style="text-align: center;">${sh_rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${sh_rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(sh_rdd_ot_night_hrs_pay)}</h4>
                                        <h4>RDD + Leg. Hol.</h4>
                                        <h4 style="text-align: center;">${rh_rdd_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_ot_day_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_ot_day_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_night_hrs_pay)}</h4>
                                        <h4 style="text-align: center;">${rh_rdd_ot_night_hrs}</h4>
                                        <h4 style="text-align: right;">${formatNumber(rh_rdd_ot_night_hrs_pay)}</h4>
                                        <h4>Allowance</h4>
                                        <h4 style="text-align: center;"></h4>
                                        <h4 style="text-align: right;">${formatNumber(parseFloat(allowance))}</h4>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">DEDUCTIONS</h3>
                                </div>
                                <div class="summary_details_details2">
                                    <div class="border-right border-left">
                                        <h4>SSS ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(sss)}</h4>
                                        <h4>HDMF ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(pag_ibig)}</h4>
                                        <h4>PHIC ${government_dues_month.substring(0, 3)} ${government_dues_year}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(philhealth)}</h4>
                                        <h4>SSS Loan</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(sss_loan)}</h4>
                                        <h4>HDMF Loan</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(pag_ibig_loan)}</h4>
                                        <h4>Withholding Tax</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(withholding_tax)}</h4>
                                        <h4>Undertime (Hrs):    ${under_time_hours} </h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(under_time_deduction)}</h4>
                                        <h4>Late (Mins):        ${late_mins}</h4>
                                        <h4 style="text-align: right; padding-right: 5px;">${formatNumber(late_deduction)}</h4>
                                    </div>
                                </div>
                                <div class="summary_details_header">
                                    <h3 class="bold">SUMMARY</h3>
                                </div>
                                <div class="summary_footer border-left border-right">
                                    <div>
                                        <div>
                                            <h3>Adjustments</h3>
                                            <h3>Total Earnings</h3>
                                            <h3>Total Deductions</h3>
                                        </div>
                                        <div>
                                            <h3 style="text-align: right; padding-right: 5px;">0.00</h3>
                                            <h3 style="text-align: right; padding-right: 5px;">${formatNumber(gross_salary)}</h3>
                                            <h3 style="text-align: right; padding-right: 5px;">${formatNumber(sub_deduction)}</h3>
                                        </div>
                                    </div>
                                    <div class="border-left ps-1" style="display: grid; grid-template-columns: 50% 50%; justify-content: center; align-items: center;">
                                        <h3>Net Pay:</h3>
                                        <h3 style="text-align: right; padding-right: 5px;">${formatNumber(subtotal)}</h3>
                                    </div>
                                </div>
                                <div class="summary_footer2 border-left border-right">
                                    <div style="text-align: center;">
                                        <h3 style="display: flex; justify-content: center; align-items: end; height: 16px;">__________________</h3>
                                        <h3>Employee's Signature</h3>
                                    </div>
                                    <div style="text-align: center;">
                                        <h3 style="display: flex; justify-content: center; align-items: end; height: 16px;">__________________</h3>
                                        <h3>Authorized Signature</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )

                    payslip_others2.push(
                        `
                        <div style="position: absolute; border: 3px solid black; top: 428px; left: 940px; width: 92px; height:368px; padding: 3px; display: flex; justify-content: end;">
                            <div style=" transform: rotate(270deg); width: 368px; height: 92px; position: absolute; left: -140px; top: 135px;">
                                <div style="width: 100%; height: 100%; padding: 3px; display: grid; grid-template-columns: 65% 35%;">
                                    <div style="border-right: 1px solid black; padding: 0 3px;">
                                        <div style="display: flex; justify-content: space-around;">
                                            <h2>${employee_id}</h2>
                                            <h2>OTHER DEDUCTIONS</h2>
                                        </div>
                                        <div style="display: grid; grid-template-columns: 55% 45%" class="border">
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">C/A Deduction</h4><h4 class="pe-1 right">${ca_deduction}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Uniform</h4><h4 class="pe-1 right">${uniform}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Housing</h4><h4 class="pe-1 right">${housing}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">St. Peter</h4><h4 class="pe-1 right">${st_peter}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Safety Shoes</h4><h4 class="pe-1 right">${safety_shoes}</h4>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Hard Hat</h4><h4 class="pe-1 right">${hard_hat}</h4>
                                            </div>
                                            <div class="border-bottom-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Cash Not Return</h4><h4 class="pe-1 right">${cash_not_return}</h4>
                                            </div>
                                            <div style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Bereavement</h4><h4 class="pe-1 right">${bereavement_assistance}</h4>
                                            </div>
                                            <div class="border-right" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Over Meals</h4><h4 class="pe-1 right">${over_meals}</h4>
                                            </div>
                                            <div style="display: grid; grid-template-columns: 60% 40%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Assistance</h4><h4 class="pe-1 right"></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="padding: 0 3px; height: 70px;">
                                        <div style="text-align: center;">
                                            <h2>SUMMARY</h2>
                                        </div>
                                        <div class="border">
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Net Pay:</h4><h3 class="pe-1 bold" style="text-align: end;">${formatNumber(subtotal)}</h3>
                                            </div>
                                            <div class="border-bottom" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Other<br>Deductions:</h4><h3 class="pe-1 bold" style="text-align: end;">${formatNumber(other_deduction)}</h3>
                                            </div>
                                            <div class="" style="display: grid; grid-template-columns: 50% 50%; align-items: center;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Remaining<br>Salary:</h4><h2 class="pe-1 bold" style="text-align: end;">${formatNumber(subtotal - other_deduction)}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )

                }
                for(let x = 0; x < Math.floor(payslip_employee_id.length/2); x++){
                    var payslip_container_data = 
                    `
                    <div id="payslip_form" style="display: flex; flex-direction: row;">
                        <div style="position: absolute; left: 460px; height: 816px; border-left: 1px solid black;"></div>
                        <div style="position: absolute; left: 920px; height: 816px; border-left: 1px solid black;"></div>
                        <div style="position: absolute; top: 408px; width: 1056px; border-top: 1px solid black;"></div>
                        <div style="display: flex; flex-wrap: wrap; width: 920px">
                            ${payslip_data[x]}
                            ${payslip_data[x]}
                            ${payslip_data2[x]}
                            ${payslip_data2[x]}
                            ${payslip_others[x]}
                            ${payslip_others2[x]}
                        </div>
                    </div>
                    `
                    payslip_container.insertAdjacentHTML("beforeend", payslip_container_data)
                }
                if(payslip_employee_id.length % 2 == 1){
                    var payslip_container_data = 
                    `
                    <div id="payslip_form" style="display: flex; flex-direction: row;">
                        <div style="position: absolute; left: 460px; height: 816px; border-left: 1px solid black;"></div>
                        <div style="position: absolute; left: 920px; height: 816px; border-left: 1px solid black;"></div>
                        <div style="position: absolute; top: 408px; width: 1056px; border-top: 1px solid black;"></div>
                        <div style="display: flex; flex-wrap: wrap; width: 920px">
                            ${payslip_data[payslip_data.length -1]}
                            ${payslip_data[payslip_data.length -1]}
                            ${payslip_others[payslip_data.length -1]}
                        </div>
                    </div>
                    `
                    payslip_container.insertAdjacentHTML("beforeend", payslip_container_data)
                }
            }
        })


        // employee_form
        const employee_form = document.querySelector("#employee_list_section");
        const new_employee_button = employee_form.querySelector("#new_employee_button");
        const resignation_form = employee_form.querySelector("#resignation_form");
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
        const update_salary_type = update_record_form.querySelector("#salary_type");
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
        const resign_search_employee_id_button = resignation_form.querySelector("#search_employee_id_button");
        const resign_employee_id = resignation_form.querySelector("#employee_id");
        const resign_gender = resignation_form.querySelector("#gender");
        const resign_civil_status = resignation_form.querySelector("#civil_status");
        const resign_first_name = resignation_form.querySelector("#first_name");
        const resign_middle_name = resignation_form.querySelector("#middle_name");
        const resign_last_name = resignation_form.querySelector("#last_name");
        const resign_spouse_name = resignation_form.querySelector("#spouse_name");
        const resign_spouse_name_container = resignation_form.querySelector("#spouse_name_container");
        const resign_affix = resignation_form.querySelector("#affix");
        const resign_affix_container = resignation_form.querySelector("#affix_container");
        const resign_date_resignation = resignation_form.querySelector("#date_resignation");
        const resign_reason_resignation = resignation_form.querySelector("#reason_resignation");
        const resign_timestamp = resignation_form.querySelector("#timestamp");
        const resign_details = resignation_form.querySelector("#details");

        new_spouse_name_container.style.display = "none";

        new_employee_button.addEventListener("click", () => {
            if(new_employee_form.style.display == "block"){
                new_employee_form.style.display = "none";
            }
            else{
                new_employee_form.style.display = "block";
                update_record_form.style.display = "none";
                resignation_form.style.display = "none";
            }
        })

        update_record_button.addEventListener("click", () => {
            if(update_record_form.style.display == "block"){
                update_record_form.style.display = "none";
            }
            else{
                new_employee_form.style.display = "none";
                update_record_form.style.display = "block";
                resignation_form.style.display = "none";
            }
        })

        resign_button.addEventListener("click", () => {
            if(resignation_form.style.display == "block"){
                resignation_form.style.display = "none";
            }
            else{
                new_employee_form.style.display = "none";
                update_record_form.style.display = "none";
                resignation_form.style.display = "block";
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
        
        update_search_employee_id_button.addEventListener("click", () => {
            for(let a = 1; a < employee_data_list.content.length; a++){
                if(update_employee_id.value == employee_data_list.content[a][findTextInArray(employee_data_list, "EMPLOYEE ID")]){
                    update_gender.value = employee_data_list.content[a][findTextInArray(employee_data_list, "GENDER")];
                    update_civil_status.value = employee_data_list.content[a][findTextInArray(employee_data_list, "CIVIL STATUS")];
                    update_first_name.value = employee_data_list.content[a][findTextInArray(employee_data_list, "FIRST NAME")];
                    update_middle_name.value = employee_data_list.content[a][findTextInArray(employee_data_list, "MIDDLE NAME")];
                    update_last_name.value = employee_data_list.content[a][findTextInArray(employee_data_list, "LAST NAME")];
                    update_spouse_name.value = employee_data_list.content[a][findTextInArray(employee_data_list, "SPOUSE NAME")];
                    update_affix.value = employee_data_list.content[a][findTextInArray(employee_data_list, "AFFIX")];
                    update_birthday.value = formatDateToInputValue(employee_data_list.content[a][findTextInArray(employee_data_list, "BIRTH DATE")]);
                    update_birth_place.value = employee_data_list.content[a][findTextInArray(employee_data_list, "BIRTH PLACE")];
                    update_mobile_number.value = employee_data_list.content[a][findTextInArray(employee_data_list, "MOBILE NO.")];
                    update_email_address.value = employee_data_list.content[a][findTextInArray(employee_data_list, "EMAIL ADDRESS")];
                    update_nationality.value = employee_data_list.content[a][findTextInArray(employee_data_list, "NATIONALITY")];
                    update_address.value = employee_data_list.content[a][findTextInArray(employee_data_list, "PERMANENT ADDRESS")];
                    update_other_address.value = employee_data_list.content[a][findTextInArray(employee_data_list, "OTHER ADDRESS")];
                    update_mothers_maiden_name.value = employee_data_list.content[a][findTextInArray(employee_data_list, "MOTHER'S MAIDEN NAME")];
                    update_educational_attainment.value = employee_data_list.content[a][findTextInArray(employee_data_list, "EDUCATIONAL ATTAINMENT")];
                    update_course.value = employee_data_list.content[a][findTextInArray(employee_data_list, "COURSE")];
                    update_year.value = employee_data_list.content[a][findTextInArray(employee_data_list, "YEAR GRADUATE")];
                    update_tin_no.value = employee_data_list.content[a][findTextInArray(employee_data_list, "TIN NO.")];
                    update_sss_no.value = employee_data_list.content[a][findTextInArray(employee_data_list, "SSS/GSIS NO.")];
                    update_philhealth_no.value = employee_data_list.content[a][findTextInArray(employee_data_list, "PHILHEALTH NO.")];
                    update_pag_ibig_no.value = employee_data_list.content[a][findTextInArray(employee_data_list, "PAG-IBIG NO.")];
                    update_drivers_license_no.value = employee_data_list.content[a][findTextInArray(employee_data_list, "DRIVER'S LICENSE NO.")];
                    update_nbi_no.value = employee_data_list.content[a][findTextInArray(employee_data_list, "NBI NO.")];
                    update_police_clearance_no.value = employee_data_list.content[a][findTextInArray(employee_data_list, "POLICE CLEARANCE NO.")];
                    update_cedula_no.value = employee_data_list.content[a][findTextInArray(employee_data_list, "CEDULA NO.")];
                    update_date_hire.value = formatDateToInputValue(employee_data_list.content[a][findTextInArray(employee_data_list, "DATE HIRE")]);
                    update_employee_type.value = employee_data_list.content[a][findTextInArray(employee_data_list, "EMPLOYEE TYPE")];
                    update_payroll_type.value = employee_data_list.content[a][findTextInArray(employee_data_list, "PAYROLL TYPE")];
                    update_salary_type.value = employee_data_list.content[a][findTextInArray(employee_data_list, "SALARY TYPE")];
                    update_employee_status.value = employee_data_list.content[a][findTextInArray(employee_data_list, "EMPLOYEE STATUS")];
                    update_department.value = employee_data_list.content[a][findTextInArray(employee_data_list, "DEPARTMENT")];
                    update_designation.value = employee_data_list.content[a][findTextInArray(employee_data_list, "DESIGNATION")];
                    update_rate.value = employee_data_list.content[a][findTextInArray(employee_data_list, "DAILY RATE")];
                    update_day_allowance.value = employee_data_list.content[a][findTextInArray(employee_data_list, "DAY ALLOWANCE")];
                    update_night_allowance.value = employee_data_list.content[a][findTextInArray(employee_data_list, "NIGHT ALLOWANCE")];
                    update_time_in_schedule.value = formatTimeToInputValue(employee_data_list.content[a][findTextInArray(employee_data_list, "TIME IN")]);
                    update_time_out_schedule.value = formatTimeToInputValue(employee_data_list.content[a][findTextInArray(employee_data_list, "TIME OUT")]);
                    update_date_resignation.value = formatDateToInputValue(employee_data_list.content[a][findTextInArray(employee_data_list, "DATE OF RESIGNATION")]);
                    reason_resignation.value = employee_data_list.content[a][findTextInArray(employee_data_list, "REASON OF RESIGNATION")];        
                    timestamp.value = formatDateToInputValue(employee_data_list.content[a][findTextInArray(employee_data_list, "CREATED AT")]);        
                }
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

        resign_search_employee_id_button.addEventListener("click", () => {
            for(let a = 1; a < employee_data_list.content.length; a++){
                if(resign_employee_id.value == employee_data_list.content[a][findTextInArray(employee_data_list, "EMPLOYEE ID")]){
                    resign_gender.value = employee_data_list.content[a][findTextInArray(employee_data_list, "GENDER")];
                    resign_civil_status.value = employee_data_list.content[a][findTextInArray(employee_data_list, "CIVIL STATUS")];
                    resign_first_name.value = employee_data_list.content[a][findTextInArray(employee_data_list, "FIRST NAME")];
                    resign_middle_name.value = employee_data_list.content[a][findTextInArray(employee_data_list, "MIDDLE NAME")];
                    resign_last_name.value = employee_data_list.content[a][findTextInArray(employee_data_list, "LAST NAME")];
                    resign_spouse_name.value = employee_data_list.content[a][findTextInArray(employee_data_list, "SPOUSE NAME")];
                    resign_affix.value = employee_data_list.content[a][findTextInArray(employee_data_list, "AFFIX")];
                    resign_date_resignation.value = formatDateToInputValue(employee_data_list.content[a][findTextInArray(employee_data_list, "DATE OF RESIGNATION")]);
                    resign_reason_resignation.value = employee_data_list.content[a][findTextInArray(employee_data_list, "REASON OF RESIGNATION")];        
                    resign_timestamp.value = formatDateToInputValue(employee_data_list.content[a][findTextInArray(employee_data_list, "CREATED AT")]);        
                }
            }
            resign_details.style.display = "block";
            if(resign_gender.value == "MALE"){
                resign_spouse_name_container.style.display = "none"
                resign_affix_container.style.display = "block"
            }
            else if(resign_gender.value == "FEMALE"){
                if(resign_civil_status.value == "SINGLE"){
                    resign_affix_container.style.display = "none"
                    resign_spouse_name_container.style.display = "none"
                }
                else{
                    resign_spouse_name_container.style.display = "block"
                    resign_affix_container.style.display = "none"
                }
            }
        })

        // FORM GENERATOR    
        const currentYear = new Date().getFullYear();
        const lastTwoDigitsOfYear = currentYear.toString().slice(-2);        
        var last_three_digit = 0;
        
        var employee_number = String(employee_data_list.content[employee_data_list.content.length -1][findTextInArray(employee_data_list, "EMPLOYEE ID")]); // Convert to a string
        if (employee_number.slice(0, 2) == lastTwoDigitsOfYear) {
            let threeDigitValue = parseFloat(employee_number.slice(-3));
            if (!isNaN(threeDigitValue) && last_three_digit < threeDigitValue) {
                last_three_digit = threeDigitValue;
                last_three_digit += 1;
                new_employee_id.value = `${lastTwoDigitsOfYear}${String(last_three_digit).padStart(3, '0')}`;                    
            }
        }
        else{
            new_employee_id.value = `${lastTwoDigitsOfYear}${String(1).padStart(3, '0')}`;                
        }
        for (let x = 0; x < employee_data_list.content.length; x++) {
        }
        
        function findEmployeeName(employee_id){
            var employee_name = "";
            for(let c = 1; c < employee_data_list.content.length; c++){
                if(employee_id == employee_data_list.content[c][findTextInArray(employee_data_list, "EMPLOYEE ID")]){
                    var gender = employee_data_list.content[c][findTextInArray(employee_data_list, "GENDER")];
                    var civil_status = employee_data_list.content[c][findTextInArray(employee_data_list, "CIVIL STATUS")];
                    if(gender == "MALE"){
                        employee_name = `${employee_data_list.content[c][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[c][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[c][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[c][findTextInArray(employee_data_list, "AFFIX")]}`
                    }
                    else{
                        if(civil_status == "SINGLE"){
                            employee_name = `${employee_data_list.content[c][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[c][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[c][findTextInArray(employee_data_list, "MIDDLE NAME")]}`
                        }
                        else{
                            employee_name = `${employee_data_list.content[c][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[c][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[c][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[c][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                        }
                    }
                    break
                }
                else{
                    employee_name = employee_id;
                }
            }
            return employee_name
        }
        function findClientName(client_id){
            var client_name = "";
            for(let c = 1; c < client_data_list.content.length; c++){
                if(client_id == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")]){
                    client_name = client_data_list.content[c][findTextInArray(client_data_list, "CLIENT NAME")];
                    break
                }
            }
            return client_name
        }
        function findWasteCode(waste_id){
            var waste_code = "";
            for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                if(waste_id == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                    waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                    break
                }
                else{
                    waste_code = waste_id;
                }
            }
            return waste_code
        }
        function findWasteName(client_id, waste_id){
            var waste_name = "";
            for(let c = 1; c < qlf_data_list.content.length; c++){
                if(client_id == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")]&& 
                    waste_id == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                    waste_name = (qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE NAME")]);
                    break
                }
            }
            return waste_name
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
