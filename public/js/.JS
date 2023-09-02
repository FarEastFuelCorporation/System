var payslip_employee_id = [];
for(let c = 1; c < payroll_transaction_data_list.content.length; c++){
    if(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "YEAR")] == search_year.value && payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "WEEK NUMBER")] == search_week_number.value){
        if (!payslip_employee_id.includes(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")])) {
            payslip_employee_id.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")]);
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
        if(payslip_employee_id[x] == payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")] &&
            search_year.value == payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "YEAR")]  && 
            search_week_number.value == payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "WEEK NUMBER")]){

            duration.push({[payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "EMPLOYEE ID")]] : payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DURATION")]});
            type_of_day.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "TYPE OF DAY")]);
            date.push(date_decoder(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DATE")]));
            if (payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "TIME IN")] !== null && payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "TIME IN")] !== "") {
                time_in.push(time_decoder(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "TIME IN")]));
            } else {
                time_in.push("N/A");
            }                        
            if (payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "TIME OUT")] !== null && payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "TIME OUT")] !== "") {
                time_out.push(time_decoder(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "TIME OUT")]));
            } else {
                time_out.push("N/A");
            }                        
            hours.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DAY HOURS")]);
            hours_rate_per_hour.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "DAY RATE PER HOUR")]);
            night_hours.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "NIGHT HOURS")]);
            night_hours_rate_per_hour.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "NIGHT RATE PER HOUR")]);
            late_mins.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "")12]);
            late_deduction.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "")13]);
            under_time_hour.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "")14]);
            under_time_deduction.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "")15]);
            ot_hours.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "")20]);
            ot_hours_rate_per_hour.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "")21]);
            ot_night_hours.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "")22]);
            ot_night_hours_rate_per_hour.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "")23]);
            allowance.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "")24]);
            gross.push(payroll_transaction_data_list.content[c][findTextInArray(payroll_transaction_data_list, "")25]);        
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
            if(payslip_employee_id[d] == payroll_summary_data_list.content[e][findTextInArray(payroll_transaction_data_list, "")3] && search_year.value == payroll_summary_data_list.content[e][findTextInArray(payroll_transaction_data_list, "")1] && search_week_number.value == payroll_summary_data_list.content[e][findTextInArray(payroll_transaction_data_list, "")2]){
                var department = "";
                var designation = "";
                var tin_id = "";
                var type_of_employee = "";
                for(let f =1; f < employee_data_list.content.length; f++){
                    if(payslip_employee_id[d] == employee_data_list.content[f][findTextInArray(employee_data_list, "")0]){
                        department = employee_data_list.content[f][findTextInArray(employee_data_list, "")31];
                        designation = employee_data_list.content[f][findTextInArray(employee_data_list, "")32];
                        tin_id = employee_data_list.content[f][findTextInArray(employee_data_list, "")19];
                        type_of_employee = employee_data_list.content[f][findTextInArray(employee_data_list, "")28];
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
                                            <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")4]}</h4>
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
                                            <h4 class="bold ps-1 truncate_text">SSS JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9]}</h4>
                                        </div>
                                        <div class="border-bottom">
                                            <h4 class="bold ps-1 truncate_text">SSS Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12]}</h4>
                                        </div>
                                        <div class="border-bottom-right">
                                            <h4 class="bold ps-1 truncate_text">HDMF JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10]}</h4>
                                        </div>
                                        <div class="border-bottom">
                                            <h4 class="bold ps-1 truncate_text">HDMF Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13]}</h4>
                                        </div>
                                        <div class="border-bottom-right">
                                            <h4 class="bold ps-1 truncate_text">PHIC JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11]}</h4>
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
                                                    <h4 class="bold ps-1 truncate_text left">Adjustments</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]}</h4>
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
                                        <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5]).toFixed(2)}</h3>
                                        <h4 class="ps-1 pt-1">Total Additional:</h4>
                                        <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]).toFixed(2)}</h3>
                                        <h4 class="ps-1 pt-1 border-bottom">Total Deductions:</h4>
                                        <h3 class="text-end bold pt-1 pe-1 border-bottom">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13]).toFixed(2)}</h3>
                                        <h4 class="ps-1 pt-1">Net Pay:</h4>
                                        <h1 class="text-end bold pe-1">${((payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]) - (payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13])).toFixed(2)}</h1>
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
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">C/A Deduction</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")14]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Uniform</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")15]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Housing</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")16]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">St. Peter</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")17]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Cash Not Return</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")18]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Hard Hat</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")19]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Safety Shoes</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")20]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Over Meals</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")21]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Bereavement Assistance</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")22]}</h4>
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
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Net Pay:</h4><h3 class="pe-1 bold" style="text-align: end;">${((payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]) - (payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13])).toFixed(2)}</h3>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Other Deductions:</h4><h3 class="pe-1 bold" style="text-align: end;">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")14] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")15] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")16] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")17] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")18] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")19] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")20] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")21] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")22]).toFixed(2)}</h3>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Remaining Salary:</h4><h1 class="pe-1 bold" style="text-align: end;">${((payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]) - (payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13]) - (payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")14] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")15] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")16] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")17] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")18] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")19] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")20] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")21] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")22])).toFixed(2)}</h1>
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
                                            <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")4]}</h4>
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
                                                <h4 class="bold ps-1 truncate_text">SSS JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9]}</h4>
                                            </div>
                                            <div class="border-bottom-right">
                                                <h4 class="bold ps-1 truncate_text">HDMF JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10]}</h4>
                                            </div>
                                            <div class="border-bottom">
                                                <h4 class="bold ps-1 truncate_text">PHIC JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11]}</h4>
                                            </div>
                                            <div class="border-bottom-right">
                                                <h4 class="bold ps-1 truncate_text">SSS Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e]findTextInArray(payroll_summary_data_list, "")12]}</h4>
                                            </div>
                                            <div class="border-bottom-right">
                                                <h4 class="bold ps-1 truncate_text">HDMF Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13]}</h4>
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
                                                    <h4 class="bold ps-1 truncate_text left">Adjustments</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]}</h4>
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
                                    <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5]).toFixed(2)}</h3>
                                    <h4 class="ps-1 pt-1">Total Additional:</h4>
                                    <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]).toFixed(2)}</h3>
                                    <h4 class="ps-1 pt-1 border-bottom">Total Deductions:</h4>
                                    <h3 class="text-end bold pt-1 pe-1 border-bottom">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13]).toFixed(2)}</h3>
                                    <h4 class="ps-1 pt-1">Net Pay:</h4>
                                    <h1 class="text-end bold pe-1">${((payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]) - (payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13])).toFixed(2)}</h1>
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
                                            <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")4]}</h4>
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
                                            <h4 class="bold ps-1 truncate_text">SSS JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9]}</h4>
                                        </div>
                                        <div class="border-bottom">
                                            <h4 class="bold ps-1 truncate_text">SSS Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12]}</h4>
                                        </div>
                                        <div class="border-bottom-right">
                                            <h4 class="bold ps-1 truncate_text">HDMF JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10]}</h4>
                                        </div>
                                        <div class="border-bottom">
                                            <h4 class="bold ps-1 truncate_text">HDMF Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13]}</h4>
                                        </div>
                                        <div class="border-bottom-right">
                                            <h4 class="bold ps-1 truncate_text">PHIC JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11]}</h4>
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
                                                    <h4 class="bold ps-1 truncate_text left">Adjustments</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]}</h4>
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
                                        <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5]).toFixed(2)}</h3>
                                        <h4 class="ps-1 pt-1">Total Additional:</h4>
                                        <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]).toFixed(2)}</h3>
                                        <h4 class="ps-1 pt-1 border-bottom">Total Deductions:</h4>
                                        <h3 class="text-end bold pt-1 pe-1 border-bottom">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13]).toFixed(2)}</h3>
                                        <h4 class="ps-1 pt-1">Net Pay:</h4>
                                        <h1 class="text-end bold pe-1">${((payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]) - (payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13])).toFixed(2)}</h1>
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
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">C/A Deduction</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")14]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Uniform</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")15]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Housing</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")16]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">St. Peter</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")17]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Cash Not Return</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")18]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Hard Hat</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")19]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Safety Shoes</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")20]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Over Meals</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")21]}</h4>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 80% 20%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Bereavement Assistance</h4><h4 class="pe-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")22]}</h4>
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
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Net Pay:</h4><h3 class="pe-1 bold" style="text-align: end;">${((payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]) - (payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13])).toFixed(2)}</h3>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Other Deductions:</h4><h3 class="pe-1 bold" style="text-align: end;">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")14] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")15] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")16] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")17] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")18] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")19] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")20] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")21] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")22]).toFixed(2)}</h3>
                                            </div>
                                            <div class="border" style="display: grid; grid-template-columns: 70% 30%;">
                                                <h4 class="bold ps-1 truncate_text" style="text-align: start;">Remaining Salary:</h4><h1 class="pe-1 bold" style="text-align: end;">${((payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]) - (payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13]) - (payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")14] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")15] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")16] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")17] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")18] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")19] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")20] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")21] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")22])).toFixed(2)}</h1>
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
                                            <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")4]}</h4>
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
                                                <h4 class="bold ps-1 truncate_text">SSS JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9]}</h4>
                                            </div>
                                            <div class="border-bottom-right">
                                                <h4 class="bold ps-1 truncate_text">HDMF JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10]}</h4>
                                            </div>
                                            <div class="border-bottom">
                                                <h4 class="bold ps-1 truncate_text">PHIC JUNE 2023</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11]}</h4>
                                            </div>
                                            <div class="border-bottom-right">
                                                <h4 class="bold ps-1 truncate_text">SSS Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12]}</h4>
                                            </div>
                                            <div class="border-bottom-right">
                                                <h4 class="bold ps-1 truncate_text">HDMF Loan Payment</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13]}</h4>
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
                                                    <h4 class="bold ps-1 truncate_text left">Adjustments</h4><h4 class="ps-1">${payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]}</h4>
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
                                    <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5]).toFixed(2)}</h3>
                                    <h4 class="ps-1 pt-1">Total Additional:</h4>
                                    <h3 class="text-end bold pt-1 pe-1">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]).toFixed(2)}</h3>
                                    <h4 class="ps-1 pt-1 border-bottom">Total Deductions:</h4>
                                    <h3 class="text-end bold pt-1 pe-1 border-bottom">${(payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13]).toFixed(2)}</h3>
                                    <h4 class="ps-1 pt-1">Net Pay:</h4>
                                    <h1 class="text-end bold pe-1">${((payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")5] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")6]) - (payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")9] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")10] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")11] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")12] + payroll_summary_data_list.content[e][findTextInArray(payroll_summary_data_list, "")13])).toFixed(2)}</h1>
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

