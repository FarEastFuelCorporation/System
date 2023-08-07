document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const tbf_response_promise = fetch('https://script.google.com/macros/s/AKfycbx5g9gBi60zlkrI-GqRf7HxnVyF8ePvh1vg7ukI5ta3Kl6kQl3u54ygzuHK7irm6yt1/exec');
        const tlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxhS8uhT-WE1BMoyk6colLF4ToDA1WN6fj7Op4Jt2PPIZW_laVvgWzN3cP1gIKMUYI7Hg/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');

        const [
            username_response,
            employee_response,
            ltf_response,
            tbf_response,
            tlf_response,
            irf_response,
        ] = await Promise.all([
            username_response_promise,
            employee_response_promise,
            ltf_response_promise,
            tbf_response_promise,
            tlf_response_promise,
            irf_response_promise,
        ]);

        const username_data  = await username_response.json();
        const employee_data_list  = await employee_response.json();
        const ltf_data_list  = await ltf_response.json();
        const tbf_data_list  = await tbf_response.json();
        const tlf_data_list  = await tlf_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");
        const irf_user = document.getElementById("irf_user");

        user.value = username_data.content[15][3];
        irf_user.value = username_data.content[15][3];
        user_sidebar.innerHTML = `<u>${username_data.content[15][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[15][4];
        

        // ap_accounting_dashboard
        const ap_accounting_dashboard = document.querySelector("#ap_accounting_dashboard");
        const pending_list_container_ap_accounting = ap_accounting_dashboard.querySelector("#pending_list");
        const history_list_container_ap_accounting = ap_accounting_dashboard.querySelector("#history_list");
        let ltf_transaction_ap_accounting = []; // Variable containing existing elements
        let ltf_tbf_transaction_ap_accounting = []; // Variable containing existing elements
        let tbf_transaction_ap_accounting = []; // Variable containing existing elements
        let tbf_tlf_transaction_ap_accounting = []; // Variable containing existing elements
        
        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!ltf_transaction_ap_accounting.includes(ltf_data_list.content[i][1])) {
                ltf_transaction_ap_accounting.push(ltf_data_list.content[i][1]);
            }
        }

        for (let i = 1; i < tbf_data_list.content.length; i++) {
            if (!ltf_tbf_transaction_ap_accounting.includes(tbf_data_list.content[i][2])) {
                ltf_tbf_transaction_ap_accounting.push(tbf_data_list.content[i][2]);
            }
        }
        
        for (let i = 1; i < tbf_data_list.content.length; i++) {
            if (!tbf_transaction_ap_accounting.includes(tbf_data_list.content[i][1])) {
                tbf_transaction_ap_accounting.push(tbf_data_list.content[i][1]);
            }
        }

        for (let i = 1; i < tlf_data_list.content.length; i++) {
            if (!tbf_tlf_transaction_ap_accounting.includes(tlf_data_list.content[i][2])) {
                tbf_tlf_transaction_ap_accounting.push(tlf_data_list.content[i][2]);
            }
        }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const pending_list_ltf_ap_accounting = ltf_transaction_ap_accounting.filter((element) => !ltf_tbf_transaction_ap_accounting.includes(element));
        const pending_list_tbf_ap_accounting = tbf_transaction_ap_accounting.filter((element) => !tbf_tlf_transaction_ap_accounting.includes(element));

        // ordered_transactions_purchasing.innerText = prf_transaction_treatment.length;
        // pending_purchasing.innerText = pending_list_purchasing.length;
        // requested_purchasing.innerText = 0;
        // approved_purchasing.innerText = 0;
        // purchased_purchasing.innerText = 0;

        // pending_list
        var data_value = "";
        var data_value_counter = 1;
        for(let y = 0; y < pending_list_ltf_ap_accounting.length; y++){
            for(let x = 1; x < ltf_data_list.content.length; x++){
                if(pending_list_ltf_ap_accounting[y] == ltf_data_list.content[x][1]){
                    if(ltf_data_list.content[x][7] == "10 WHEELER WING VAN"){
                        data_value += `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${ltf_data_list.content[x][1]}</td>
                            <td>${date_decoder(ltf_data_list.content[x][5])} /<br> ${time_decoder(ltf_data_list.content[x][6])}</td>
                            <td>${ltf_data_list.content[x][3]}</td>
                            <td>${ltf_data_list.content[x][4]}</td>
                            <td>${ltf_data_list.content[x][7]}</td>
                            <td>${ltf_data_list.content[x][13]}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            pending_list_container_ap_accounting.innerHTML = data_value;
        }

        // history_list
        var data_value = "";
        var data_value_counter = 1;
        for(let y = 0; y < ltf_transaction_ap_accounting.length; y++){
            for(let x = 1; x < ltf_data_list.content.length; x++){
                if(ltf_transaction_ap_accounting[y] == ltf_data_list.content[x][1]){
                    if(ltf_data_list.content[x][7] == "10 WHEELER WING VAN"){
                        var tbf_data = "";
                        var tbf_budget = "";
                        var remarks = "PENDING LIQUIDATION";
                        var actual_budget = "PENDING";
                        for(let x = 1; x < tbf_data_list.content.length; x++){
                            if(ltf_transaction_ap_accounting[y] == tbf_data_list.content[x][2]){
                                tbf_data = tbf_data_list.content[x][1]
                                tbf_budget = tbf_data_list.content[x][3]
                            }
                        }
                        data_value += `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${tbf_data}</td>
                            <td>${ltf_data_list.content[x][1]}</td>
                            <td>${date_decoder(ltf_data_list.content[x][5])} /<br> ${time_decoder(ltf_data_list.content[x][6])}</td>
                            <td>${ltf_data_list.content[x][3]}</td>
                            <td>${ltf_data_list.content[x][4]}</td>
                            <td>${ltf_data_list.content[x][7]}</td>
                            <td>${parseFloat(tbf_budget).toFixed(2)}</td>
                            <td>${remarks}</td>
                            <td>${actual_budget}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            history_list_container_ap_accounting.innerHTML = data_value;
        }

        // trip_forms
        const trip_forms_ap_accounting = document.querySelector("#trip_forms");
        const budget_form_button_ap_accounting = trip_forms_ap_accounting.querySelector("#budget_form_button");
        const liquidation_form_button_ap_accounting = trip_forms_ap_accounting.querySelector("#liquidation_form_button");

        const budget_form_ap_accounting = trip_forms_ap_accounting.querySelector("#budget_form");
        const search_ltf_form_no_ap_accounting = budget_form_ap_accounting.querySelector("#search_ltf_form_no");
        const search_ltf_result_container_ap_accounting = budget_form_ap_accounting.querySelector("#search_ltf_result");
        const tbf_no_ap_accounting = budget_form_ap_accounting.querySelector("#tbf_no");
        const search_ltf_form_no_button_ap_accounting = budget_form_ap_accounting.querySelector("#search_ltf_form_no_button");
        const reset_ap_accounting = budget_form_ap_accounting.querySelector("#reset");
        const budget_form_inputs_ap_accounting = budget_form_ap_accounting.querySelector("#budget_form_inputs");
        const budget_form_buttons_ap_accounting = budget_form_ap_accounting.querySelector("#budget_form_buttons");
        
        const liquidation_form_ap_accounting = trip_forms_ap_accounting.querySelector("#liquidation_form");
        const search_tbf_form_no_ap_accounting = liquidation_form_ap_accounting.querySelector("#search_tbf_form_no");
        const search_tbf_result_container_ap_accounting = liquidation_form_ap_accounting.querySelector("#search_tbf_result");
        const tlf_no_ap_accounting = liquidation_form_ap_accounting.querySelector("#tlf_no");
        const search_tbf_form_no_button_ap_accounting = liquidation_form_ap_accounting.querySelector("#search_tbf_form_no_button");
        const clear_ltf_form_no_button_ap_accounting = liquidation_form_ap_accounting.querySelector("#clear_ltf_form_no_button");
        const liquidation_form_inputs_ap_accounting = liquidation_form_ap_accounting.querySelector("#liquidation_form_inputs");
        const liquidation_form_buttons_ap_accounting = liquidation_form_ap_accounting.querySelector("#liquidation_form_buttons");
        const budget_ap_accounting = liquidation_form_ap_accounting.querySelector("#budget");
        const cash_advance_list_ap_accounting = liquidation_form_ap_accounting.querySelector("#cash_advance_list");
        
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;

        budget_form_button_ap_accounting.addEventListener("click", () => {
            if(budget_form_ap_accounting.style.display == "block"){
                budget_form_ap_accounting.style.display = "none";
                liquidation_form_ap_accounting.style.display = "none";
            }
            else{
                budget_form_ap_accounting.style.display = "block";
                liquidation_form_ap_accounting.style.display = "none";
            }
        });

        liquidation_form_button_ap_accounting.addEventListener("click", () => {
            if(liquidation_form_ap_accounting.style.display == "block"){
                budget_form_ap_accounting.style.display = "none";
                liquidation_form_ap_accounting.style.display = "none";

            }
            else{
                budget_form_ap_accounting.style.display = "none";
                liquidation_form_ap_accounting.style.display = "block";
            }        
        });
    
        // FORM GENERATOR
        // tbf_data_list
        var month_new;
        var code_year_month;
        var data_counter;
        if(today_month.toString().length == 1){
            month_new = `0${today_month}`
        }
    
        code_year_month = `TBF${today_year}${month_new}`;
    
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
    
        for(x=1; x<tbf_data_list.content.length; x++){
            data_info = tbf_data_list.content[x][1];
            
            if(data_info.includes(code_year_month) == true){
                data_last_3digit = data_info.slice(9)
            }
        }
        
        data_content = parseInt(data_last_3digit) +1
    
        if(data_content.toString().length == 1){
            data_counter = `00${data_content}`;
        }
        else if(data_content.toString().length == 2){
            data_counter = `0${data_content}`;
        }
        else if(data_content.toString().length == 3){
            data_counter = `${data_content}`;
        }
    
        tbf_no_ap_accounting.value = `${code_year_month}${data_counter}`


        search_ltf_form_no_button_ap_accounting.addEventListener("click", () => {
            var data_value;
            var driver_name = "";
            var truck_helper_name = "";
            for(a=0; a<=pending_list_ltf_ap_accounting.length; a++){
                if(search_ltf_form_no_ap_accounting.value == ltf_data_list.content[a][1]){
                    for(let x = 1; x<employee_data_list.content.length; x++){
                        if(employee_data_list.content[x][1] == ltf_data_list.content[a][9]){
                            var gender = employee_data_list.content[x][7];
                            if(gender == "MALE"){
                                driver_name = `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} ${employee_data_list.content[x][6]}`
                            }
                            else{
                                driver_name = `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} - ${employee_data_list.content[x][5]}`
                            }
                        }
                        var values = ltf_data_list.content[a][10];
                        var valueArray = values.split(" || ");
                        valueArray.forEach(element => {
                            if(employee_data_list.content[x][1] == element){
                                var gender = employee_data_list.content[x][7];
                                if(gender == "MALE"){
                                    truck_helper_name += `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} ${employee_data_list.content[x][6]} || `
                                }
                                else{
                                    truck_helper_name += `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} - ${employee_data_list.content[x][5]} || `
                                }
                            }
                        });
                    }
                    data_value = `
                    LTF #: ${ltf_data_list.content[a][1]}<br>
                    CLIENT: ${ltf_data_list.content[a][3]}<br>
                    WASTE DESCRIPTION: ${ltf_data_list.content[a][4]}<br>
                    HAULING DATE: ${date_decoder(ltf_data_list.content[a][5])}<br>
                    HAULING TIME: ${time_decoder(ltf_data_list.content[a][6])}<br>
                    TYPE OF VEHICLE: ${ltf_data_list.content[a][7]}<br>
                    PLATE #: ${ltf_data_list.content[a][8]}<br>
                    DRIVER: ${driver_name}<br>
                    TRUCK HELPER: ${truck_helper_name}<br>
                    DATE DEPARTURE: ${date_decoder(ltf_data_list.content[a][11])}<br>
                    TIME DEPARTURE: ${time_decoder(ltf_data_list.content[a][12])}<br>
                    REMARKS: ${ltf_data_list.content[a][13]}<br>
                    SUBMITTED BY: ${ltf_data_list.content[a][14]}<br>
                    `
                    budget_form_inputs_ap_accounting.style.display = "flex";
                    budget_form_buttons_ap_accounting.style.display = "flex";
                }
            }     
            if(data_value == undefined){
                search_ltf_result_container_ap_accounting.innerHTML = `
                <div class="search_ltf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`            
            }
            else{
                search_ltf_result_container_ap_accounting.innerHTML = `
                <div class="search_ltf_result">
                <h2>INFORMATION</h2>
                ${data_value}
                </div><br>`
            }
        });

        // FORM GENERATOR
        // tlf_data_list
        var month_new;
        var code_year_month;
        var data_counter;
        if(today_month.toString().length == 1){
            month_new = `0${today_month}`
        }
    
        code_year_month = `TLF${today_year}${month_new}`;
    
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
    
        for(x=1; x<tlf_data_list.content.length; x++){
            data_info = tlf_data_list.content[x][1];
            
            if(data_info.includes(code_year_month) == true){
                data_last_3digit = data_info.slice(9)
            }
        }
        
        data_content = parseInt(data_last_3digit) +1
    
        if(data_content.toString().length == 1){
            data_counter = `00${data_content}`;
        }
        else if(data_content.toString().length == 2){
            data_counter = `0${data_content}`;
        }
        else if(data_content.toString().length == 3){
            data_counter = `${data_content}`;
        }
    
        tlf_no_ap_accounting.value = `${code_year_month}${data_counter}`

        search_tbf_form_no_button_ap_accounting.addEventListener("click", () => {
            var data_value;
            var driver_name = "";
            var truck_helper_name_list = "";
            for(b=0; b<pending_list_tbf_ap_accounting.length; b++){
                if(search_tbf_form_no_ap_accounting.value == pending_list_tbf_ap_accounting[b]){
                    for(a=1; a<ltf_data_list.content.length; a++){
                        for(let x = 1; x<employee_data_list.content.length; x++){
                            if(employee_data_list.content[x][1] == ltf_data_list.content[a][9]){
                                var gender = employee_data_list.content[x][7];
                                if(gender == "MALE"){
                                    driver_name = `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} ${employee_data_list.content[x][6]}`
                                }
                                else{
                                    driver_name = `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} - ${employee_data_list.content[x][5]}`
                                }
                            }
                            var released_budget = "";
                            var released_by = "";
                            for(let y = 1; y<tbf_data_list.content.length; y++){
                                if(ltf_data_list.content[a][1] == tbf_data_list.content[y][2]){
                                    released_budget = tbf_data_list.content[a][3];
                                    released_by = tbf_data_list.content[a][4];
                                }
                            }
                        }
                        data_value = `
                        LTF #: ${ltf_data_list.content[a][1]}<br>
                        CLIENT: ${ltf_data_list.content[a][3]}<br>
                        WASTE DESCRIPTION: ${ltf_data_list.content[a][4]}<br>
                        HAULING DATE: ${date_decoder(ltf_data_list.content[a][5])}<br>
                        HAULING TIME: ${time_decoder(ltf_data_list.content[a][6])}<br>
                        TYPE OF VEHICLE: ${ltf_data_list.content[a][7]}<br>
                        PLATE #: ${ltf_data_list.content[a][8]}<br>
                        DRIVER: ${driver_name}<br>
                        TRUCK HELPER: ${truck_helper_name_list}<br>
                        DATE DEPARTURE: ${date_decoder(ltf_data_list.content[a][11])}<br>
                        TIME DEPARTURE: ${time_decoder(ltf_data_list.content[a][12])}<br>
                        REMARKS: ${ltf_data_list.content[a][13]}<br>
                        SUBMITTED BY: ${ltf_data_list.content[a][14]}<br>
                        RELEASED BUDGET: ${parseFloat(released_budget).toFixed(2)}<br>
                        RELEASED BY: ${released_by}<br>
                        `
                        liquidation_form_inputs_ap_accounting.style.display = "flex";
                        liquidation_form_buttons_ap_accounting.style.display = "flex";
                        budget_ap_accounting.value = parseFloat(released_budget).toFixed(2);  
                        var values = ltf_data_list.content[a][10];
                        var valueArray = values.split(" || ");
                        var cash_advance = "";
                        valueArray.forEach((element, index) => {
                            var truck_helper_name = "";
                            if(employee_data_list.content[x][1] == element){
                                var gender = employee_data_list.content[x][7];
                                if(gender == "MALE"){
                                    truck_helper_name_list += `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} ${employee_data_list.content[x][6]} || `
                                    truck_helper_name = `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} ${employee_data_list.content[x][6]}`
                                }
                                else{
                                    truck_helper_name_list += `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} - ${employee_data_list.content[x][5]} || `
                                    truck_helper_name = `${employee_data_list.content[x][4]}, ${employee_data_list.content[x][2]} ${employee_data_list.content[x][3]} - ${employee_data_list.content[x][5]}`
                                }
                            }
                            console.log(truck_helper_name)
                            cash_advance += `
                            <div>
                                <label for="cash_advance${index + 1}">
                                    Advance Salary
                                </label>
                                <input type="text" id="cash_advance${index + 1}" name="cash_advance${index + 1}" class="form-control" autocomplete="off" readonly value="${truck_helper_name}">
                            </div>
                            <div>
                                <label for="budget">
                                    Amount
                                    <input type="number" id="cash_advance_amount${index + 1}" name="cash_advance_amount${index + 1}" class="form-control" autocomplete="off" required>
                                </label>
                            </div>
                            `
                            cash_advance_list_ap_accounting.innerHTML = cash_advance;
                        });   
                    }
                }
            }
            if(data_value == undefined){
                search_tbf_result_container_ap_accounting.innerHTML = `
                <div class="search_ltf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`            
            }
            else{
                search_tbf_result_container_ap_accounting.innerHTML = `
                <div class="search_ltf_result">
                <h2>INFORMATION</h2>
                ${data_value}
                </div><br>`
            }
        });


        // // incident_history_list
        // var incident_history_data_value = "";
        // var incident_history_data_value_counter = 1;
        // for(let x = 1; x < irf_data_list.content.length; x++){
        //     incident_history_data_value += `
        //     <tr>
        //         <td>${incident_history_data_value_counter}</td>
        //         <td>${irf_data_list.content[x][1]}</td>
        //         <td>${date_decoder(irf_data_list.content[x][6])} /<br> ${time_decoder(irf_data_list.content[x][7])}</td>
        //         <td>${irf_data_list.content[x][3]}</td>
        //         <td>${irf_data_list.content[x][2]}</td>
        //         <td>${irf_data_list.content[x][4]}</td>
        //         <td>${irf_data_list.content[x][8]}</td>
        //         <td>${date_decoder(irf_data_list.content[x][9])} /<br> ${time_decoder(irf_data_list.content[x][10])}</td>
        //         <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][6]),time_decoder(irf_data_list.content[x][7]),date_decoder(irf_data_list.content[x][9]),time_decoder(irf_data_list.content[x][10]))}</td>
        //     </tr>
        //     `
        //     incident_history_data_value_counter += 1;
        // }
        // incident_history_list.innerHTML = incident_history_data_value;

        // // incident report form
        // const today = new Date();
        // const today_year = today.getFullYear();
        // const today_month = today.getMonth()+1;
        // var month_new;
        // var irf_code_year_month;
        // var data_counter;

        // irf_code_year_month = `IRF${today_year}${month_new}`;

        // var data_content = 1;
        // var data_info;
        // var data_last_3digit = 0;
    
        // for(x=1; x<irf_data_list.content.length; x++){
        //     data_info = irf_data_list.content[x][1];
            
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
    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
