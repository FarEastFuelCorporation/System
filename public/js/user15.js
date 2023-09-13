document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const tbf_response_promise = fetch('https://script.google.com/macros/s/AKfycbx5g9gBi60zlkrI-GqRf7HxnVyF8ePvh1vg7ukI5ta3Kl6kQl3u54ygzuHK7irm6yt1/exec');
        const tlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxhS8uhT-WE1BMoyk6colLF4ToDA1WN6fj7Op4Jt2PPIZW_laVvgWzN3cP1gIKMUYI7Hg/exec');
        const ftf_response_promise = fetch('https://script.google.com/macros/s/AKfycby_KPLGaMLvzccQFKwKCZVrI1mkOzVDh7cySezC_OiZW6YVOR4mC5XkNbwllOe_Ua6TGA/exec');
        const frf_response_promise = fetch('https://script.google.com/macros/s/AKfycbz1BRgSEEjm-WwwEViGKbtqG_HodoU2O-Bw1DMySKnOytZJVtq3XmfOc4mbVhnc7Rke/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');

        const [
            username_response,
            client_list_response,
            employee_response,
            type_of_waste_response,
            ltf_response,
            tbf_response,
            tlf_response,
            ftf_response,
            frf_response,
            irf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            employee_response_promise,
            type_of_waste_response_promise,
            ltf_response_promise,
            tbf_response_promise,
            tlf_response_promise,
            ftf_response_promise,
            frf_response_promise,
            irf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const employee_data_list  = await employee_response.json();
        const type_of_waste_data  = await type_of_waste_response.json();
        const ltf_data_list  = await ltf_response.json();
        const tbf_data_list  = await tbf_response.json();
        const tlf_data_list  = await tlf_response.json();
        const ftf_data_list  = await ftf_response.json();
        const frf_data_list  = await frf_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("#user");
        const irf_user = document.getElementById("irf_user");

        users.forEach(user => {user.value = username_data_list.content[15][findTextInArray(username_data_list, "NAME")]})
        irf_user.value = username_data_list.content[15][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[15][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[15][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[15][findTextInArray(username_data_list, "DEPARTMENT")];

        // ap_accounting_dashboard
        const ap_accounting_dashboard = document.querySelector("#ap_accounting_dashboard");

        const source_of_fund_ap_accounting = ap_accounting_dashboard.querySelector("#source_of_fund");
        const trucking_fund_ap_accounting = ap_accounting_dashboard.querySelector("#trucking_fund");
        const hauling_fund_ap_accounting = ap_accounting_dashboard.querySelector("#hauling_fund");
        const diesel_fund_ap_accounting = ap_accounting_dashboard.querySelector("#diesel_fund");
        const gasoline_fund_ap_accounting = ap_accounting_dashboard.querySelector("#gasoline_fund");
        const scrap_sales_ap_accounting = ap_accounting_dashboard.querySelector("#scrap_sales");
        const mold_runner_sales_ap_accounting = ap_accounting_dashboard.querySelector("#mold_runner_sales");
        const truck_scale_collection_ap_accounting = ap_accounting_dashboard.querySelector("#truck_scale_collection");
        const house_collection_ap_accounting = ap_accounting_dashboard.querySelector("#house_collection");
        const representation_fund_ap_accounting = ap_accounting_dashboard.querySelector("#representation_fund");
        
        var source_of_fund = 0;
        var trucking_fund = 0;
        var hauling_fund = 0;
        var diesel_fund = 0;
        var gasoline_fund = 0;
        var scrap_sales = 0;
        var mold_runner_sales = 0;
        var truck_scale_collection = 0;
        var house_collection = 0;
        var representation_fund = 0;

        for (let i = 1; i < ftf_data_list.content.length; i++) {
            // fund_source
            if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "SOURCE OF FUND") {
                source_of_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "HAULING FUND") {
                hauling_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "TRUCKING FUND") {
                trucking_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "DIESEL FUND") {
                diesel_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "GASOLINE FUND") {
                gasoline_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "SCRAP SALES") {
                scrap_sales -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "MOLD RUNNER SALES") {
                mold_runner_sales -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "TRUCK SCALE COLLECTION") {
                truck_scale_collection -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "HOUSE COLLECTION") {
                house_collection -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "REPRESENTATION FUND") {
                representation_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            // fund_allocation
            if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "SOURCE OF FUND") {
                source_of_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "HAULING FUND") {
                hauling_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "TRUCKING FUND") {
                trucking_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "DIESEL FUND") {
                diesel_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "GASOLINE FUND") {
                gasoline_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "SCRAP SALES") {
                scrap_sales += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "MOLD RUNNER SALES") {
                mold_runner_sales += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "TRUCK SCALE COLLECTION") {
                truck_scale_collection += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "HOUSE COLLECTION") {
                house_collection += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "REPRESENTATION FUND") {
                representation_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
        }
        
        source_of_fund_ap_accounting.innerText = formatNumber(source_of_fund);
        trucking_fund_ap_accounting.innerText = formatNumber(trucking_fund);
        hauling_fund_ap_accounting.innerText = formatNumber(hauling_fund);
        diesel_fund_ap_accounting.innerText = formatNumber(diesel_fund);
        gasoline_fund_ap_accounting.innerText = formatNumber(gasoline_fund);
        scrap_sales_ap_accounting.innerText = formatNumber(scrap_sales);
        mold_runner_sales_ap_accounting.innerText = formatNumber(mold_runner_sales);
        truck_scale_collection_ap_accounting.innerText = formatNumber(truck_scale_collection);
        house_collection_ap_accounting.innerText = formatNumber(house_collection);
        representation_fund_ap_accounting.innerText = formatNumber(representation_fund);

        const pending_list_container_ap_accounting = ap_accounting_dashboard.querySelector("#pending_list");
        const history_list_container_ap_accounting = document.querySelector("#history_list");
        
        let ltf_transaction_ap_accounting = []; // Variable containing existing elements
        let ltf_tbf_transaction_ap_accounting = []; // Variable containing existing elements
        let ltf_tlf_transaction_ap_accounting = []; // Variable containing existing elements
        let tbf_transaction_ap_accounting = []; // Variable containing existing elements
        let tbf_tlf_transaction_ap_accounting = []; // Variable containing existing elements
        
        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!ltf_transaction_ap_accounting.includes(ltf_data_list.content[i][0])) {
                ltf_transaction_ap_accounting.push(ltf_data_list.content[i][0]);
            }
        }

        for (let i = 1; i < tbf_data_list.content.length; i++) {
            if (!ltf_tbf_transaction_ap_accounting.includes(tbf_data_list.content[i][2])) {
                ltf_tbf_transaction_ap_accounting.push(tbf_data_list.content[i][2]);
            }
        }

        for (let i = 1; i < tlf_data_list.content.length; i++) {
            if (!ltf_tlf_transaction_ap_accounting.includes(tlf_data_list.content[i][3])) {
                ltf_tlf_transaction_ap_accounting.push(tlf_data_list.content[i][3]);
            }
        }
        
        for (let i = 1; i < tbf_data_list.content.length; i++) {
            if (!tbf_transaction_ap_accounting.includes(tbf_data_list.content[i][0])) {
                tbf_transaction_ap_accounting.push(tbf_data_list.content[i][0]);
            }
        }

        for (let i = 1; i < tlf_data_list.content.length; i++) {
            if (!tbf_tlf_transaction_ap_accounting.includes(tlf_data_list.content[i][1])) {
                tbf_tlf_transaction_ap_accounting.push(tlf_data_list.content[i][1]);
            }
        }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const pending_list_ltf_ap_accounting = ltf_transaction_ap_accounting.filter((element) => !ltf_tbf_transaction_ap_accounting.includes(element));
        const done_list_ltf_ap_accounting = ltf_transaction_ap_accounting.filter((element) => ltf_tbf_transaction_ap_accounting.includes(element));
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
                if(pending_list_ltf_ap_accounting[y] == ltf_data_list.content[x][0]){
                    if(ltf_data_list.content[x][6] == "10 WHEELER WING VAN"){
                        var client_name = "";
                        for(let c = 1; c < client_data_list.content.length; c++){
                            if(ltf_data_list.content[x][2] == client_data_list.content[c][0]){
                                client_name = client_data_list.content[c][1];
                            }
                        }
                        var waste_name = "";
                        for(let c = 1; c < type_of_waste_data.content.length; c++){
                            if(ltf_data_list.content[x][3] == type_of_waste_data.content[c][0]){
                                waste_name = type_of_waste_data.content[c][1];
                            }
                        }
                        data_value += `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${ltf_data_list.content[x][0]}</td>
                            <td>${date_decoder(ltf_data_list.content[x][4])}<br>${time_decoder2(ltf_data_list.content[x][5])}</td>
                            <td>${client_name}</td>
                            <td>${waste_name}</td>
                            <td>${ltf_data_list.content[x][6]}</td>
                            <td>${ltf_data_list.content[x][12]}</td>
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
        for(let y = 0; y < done_list_ltf_ap_accounting.length; y++){
            for(let x = 1; x < ltf_data_list.content.length; x++){
                if(done_list_ltf_ap_accounting[y] == ltf_data_list.content[x][0]){
                    if(ltf_data_list.content[x][6] == "10 WHEELER WING VAN"){
                        var tbf_data = "";
                        var pcv_data = "";
                        var tbf_budget = "";
                        var remarks = "PENDING LIQUIDATION";
                        var actual_budget = "PENDING";
                        
                        for(let z = 1; z < tbf_data_list.content.length; z++){
                            if(done_list_ltf_ap_accounting[y] == tbf_data_list.content[z][2]){
                                tbf_data = tbf_data_list.content[z][0];
                                pcv_data = tbf_data_list.content[z][1];
                                tbf_budget = tbf_data_list.content[z][3];
                            }
                        }
                        for(let a = 0; a < ltf_tlf_transaction_ap_accounting.length; a++){
                            for(let z = 1; z < tlf_data_list.content.length; z++){
                                if(done_list_ltf_ap_accounting[y] == tlf_data_list.content[z][3]){
                                    if(tlf_data_list.content[z][4] == "CASH RETURN"){
                                        actual_budget = (tbf_budget - tlf_data_list.content[z][5]).toFixed(2)
                                        remarks = "LIQUIDATED"
                                    }
                                }
                            }
                        }
                        var client_name = "";
                        for(let c = 1; c < client_data_list.content.length; c++){
                            if(ltf_data_list.content[x][2] == client_data_list.content[c][0]){
                                client_name = client_data_list.content[c][1];
                            }
                        }
                        var waste_name = "";
                        for(let c = 1; c < type_of_waste_data.content.length; c++){
                            if(ltf_data_list.content[x][3] == type_of_waste_data.content[c][0]){
                                waste_name = type_of_waste_data.content[c][2];
                            }
                        }
                        data_value += `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${tbf_data}</td>
                            <td>${pcv_data}</td>
                            <td>${ltf_data_list.content[x][0]}</td>
                            <td>${date_decoder(ltf_data_list.content[x][4])}<br>${time_decoder2(ltf_data_list.content[x][5])}</td>
                            <td>${client_name}</td>
                            <td>${waste_name}</td>
                            <td>${ltf_data_list.content[x][6]}</td>
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
        const payroll_button_ap_accounting = trip_forms_ap_accounting.querySelector("#payroll_button");
        const payroll_tab_ap_accounting = trip_forms_ap_accounting.querySelector("#payroll_tab");
        const payslip_container_ap_accounting = trip_forms_ap_accounting.querySelector("#payslip_container");
        const search_year_ap_accounting = trip_forms_ap_accounting.querySelector("#search_year");
        const search_week_number_ap_accounting = trip_forms_ap_accounting.querySelector("#search_week_number");
        const pay_date_ap_accounting = trip_forms_ap_accounting.querySelector("#pay_date");
        const generate_payslip_button_ap_accounting = trip_forms_ap_accounting.querySelector("#generate_payslip_button");

        const budget_form_ap_accounting = trip_forms_ap_accounting.querySelector("#budget_form");
        const search_ltf_form_no_ap_accounting = budget_form_ap_accounting.querySelector("#search_ltf_form_no");
        const search_ltf_result_container_ap_accounting = budget_form_ap_accounting.querySelector("#search_ltf_result");
        const tbf_no_ap_accounting = budget_form_ap_accounting.querySelector("#tbf_no");
        const search_ltf_form_no_button_ap_accounting = budget_form_ap_accounting.querySelector("#search_ltf_form_no_button");
        const reset_ap_accounting = budget_form_ap_accounting.querySelector("#reset");
        const budget_form_inputs_ap_accounting = budget_form_ap_accounting.querySelector("#budget_form_inputs");
        const budget_form_buttons_ap_accounting = budget_form_ap_accounting.querySelector("#budget_form_buttons");
        const available_funds_ap_accounting = budget_form_ap_accounting.querySelector("#available_funds");
        
        const liquidation_form_ap_accounting = trip_forms_ap_accounting.querySelector("#liquidation_form");
        const search_tbf_form_no_ap_accounting = liquidation_form_ap_accounting.querySelector("#search_tbf_form_no");
        const search_tbf_result_container_ap_accounting = liquidation_form_ap_accounting.querySelector("#search_tbf_result");
        const tlf_no_ap_accounting = liquidation_form_ap_accounting.querySelector("#tlf_no");
        const ltf_no_ap_accounting = liquidation_form_ap_accounting.querySelector("#ltf_no");
        const pcv_no_ap_accounting = liquidation_form_ap_accounting.querySelector("#pcv_no");
        const search_tbf_form_no_button_ap_accounting = liquidation_form_ap_accounting.querySelector("#search_tbf_form_no_button");
        const clear_ltf_form_no_button_ap_accounting = liquidation_form_ap_accounting.querySelector("#clear_ltf_form_no_button");
        const liquidation_form_inputs_ap_accounting = liquidation_form_ap_accounting.querySelector("#liquidation_form_inputs");
        const liquidation_form_buttons_ap_accounting = liquidation_form_ap_accounting.querySelector("#liquidation_form_buttons");
        const budget_ap_accounting = liquidation_form_ap_accounting.querySelector("#budget");
        const liquidation_list_ap_accounting = liquidation_form_ap_accounting.querySelector("#liquidation_list");
        const diesel_gasoline_expense_container_ap_accounting = liquidation_form_ap_accounting.querySelector("#diesel_gasoline_expense_container");
        const truck_helper_count_ap_accounting = liquidation_form_ap_accounting.querySelector("#truck_helper_count");
        const cash_return_container_ap_accounting = liquidation_form_ap_accounting.querySelector("#cash_return_container");
        const add_item_button_ap_accounting = liquidation_form_ap_accounting.querySelector("#add_item_button");
        const remove_item_button_ap_accounting = liquidation_form_ap_accounting.querySelector("#remove_item_button");
        const particular_counter_ap_accounting = liquidation_form_ap_accounting.querySelector("#particular_counter");

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
            data_info = tbf_data_list.content[x][0];
            
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
            for(b=0; b < pending_list_ltf_ap_accounting.length; b++){
                if(search_ltf_form_no_ap_accounting.value == pending_list_ltf_ap_accounting[b]){
                    for(a=0; a < ltf_data_list.content.length; a++){
                        if(search_ltf_form_no_ap_accounting.value == ltf_data_list.content[a][0]){
                            console.log(pending_list_ltf_ap_accounting)
                            console.log(search_ltf_form_no_ap_accounting.value)
                            console.log(search_ltf_form_no_ap_accounting.value)
                            console.log("pass")
                            for(let x = 1; x<employee_data_list.content.length; x++){
                                if(employee_data_list.content[x][0] == ltf_data_list.content[a][8]){
                                    var gender = employee_data_list.content[x][6];
                                    if(gender == "MALE"){
                                        driver_name = `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} ${employee_data_list.content[x][5]}`
                                    }
                                    else{
                                        driver_name = `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} - ${employee_data_list.content[x][4]}`
                                    }
                                }
                                var values = ltf_data_list.content[a][9];
                                var valueArray = values.split(" || ");
                                valueArray.forEach(element => {
                                    if(employee_data_list.content[x][0] == element){
                                        var gender = employee_data_list.content[x][6];
                                        if(gender == "MALE"){
                                            truck_helper_name += `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} ${employee_data_list.content[x][5]} || `
                                        }
                                        else{
                                            truck_helper_name += `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} - ${employee_data_list.content[x][4]} || `
                                        }
                                    }
                                });
                            }
                            var client_name = "";
                            for(let c = 1; c < client_data_list.content.length; c++){
                                if(ltf_data_list.content[a][2] == client_data_list.content[c][0]){
                                    client_name = client_data_list.content[c][1];
                                }
                            }
                            var waste_name = "";
                            for(let c = 1; c < type_of_waste_data.content.length; c++){
                                if(ltf_data_list.content[a][3] == type_of_waste_data.content[c][0]){
                                    waste_name = type_of_waste_data.content[c][2];
                                }
                            }
                            data_value = `
                            LTF #: ${ltf_data_list.content[a][0]}<br>
                            CLIENT: ${client_name}<br>
                            WASTE DESCRIPTION: ${waste_name}<br>
                            HAULING DATE: ${date_decoder(ltf_data_list.content[a][4])}<br>
                            HAULING TIME: ${time_decoder(ltf_data_list.content[a][5])}<br>
                            TYPE OF VEHICLE: ${ltf_data_list.content[a][6]}<br>
                            PLATE #: ${ltf_data_list.content[a][7]}<br>
                            DRIVER: ${driver_name}<br>
                            TRUCK HELPER: ${truck_helper_name}<br>
                            DATE DEPARTURE: ${date_decoder(ltf_data_list.content[a][10])}<br>
                            TIME DEPARTURE: ${time_decoder(ltf_data_list.content[a][11])}<br>
                            REMARKS: ${ltf_data_list.content[a][12]}<br>
                            SUBMITTED BY: ${ltf_data_list.content[a][13]}<br>
                            `
                            budget_form_inputs_ap_accounting.style.display = "flex";
                            budget_form_buttons_ap_accounting.style.display = "flex";
                            budget_form_buttons_ap_accounting.style.display = "flex";
                            available_funds_ap_accounting.value = trucking_fund.toFixed(2);
                        }
                    }
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
            data_info = tlf_data_list.content[x][0];
            
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

        var released_budget = "";
        search_tbf_form_no_button_ap_accounting.addEventListener("click", () => {
            var data_value;
            var pcv_no = "";
            var driver_name = "";
            var truck_helper_name_list = "";
            for(b=0; b<pending_list_tbf_ap_accounting.length; b++){
                if(search_tbf_form_no_ap_accounting.value == pending_list_tbf_ap_accounting[b]){
                    for(a=1; a<ltf_data_list.content.length; a++){
                        for(let x = 1; x<employee_data_list.content.length; x++){
                            for(let c = 1; c < tbf_data_list.content.length; c++){
                                if(search_tbf_form_no_ap_accounting.value == tbf_data_list.content[c][0]){
                                    if(ltf_data_list.content[a][0] == tbf_data_list.content[c][2]){
                                        var cash_advance = "";
                                        if(employee_data_list.content[x][0] == ltf_data_list.content[a][8]){
                                            var gender = employee_data_list.content[x][6];
                                            if(gender == "MALE"){
                                                driver_name = `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} ${employee_data_list.content[x][5]}`
                                            }
                                            else{
                                                driver_name = `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} - ${employee_data_list.content[x][4]}`
                                            }
                                            cash_advance += `
                                            <div>
                                                <label for="cash_advance">
                                                    Advance Salary Driver
                                                </label>
                                                <input type="text" id="cash_advance" name="cash_advance" class="form-control" autocomplete="off" readonly value='${driver_name}'>
                                            </div>
                                            <div>
                                                <label for="cash_advance_amount">
                                                    Amount
                                                    <input type="number" id="cash_advance_amount" name="cash_advance_amount" class="form-control" autocomplete="off" required value="0">
                                                </label>
                                            </div>
                                            `
                                            liquidation_list_ap_accounting.insertAdjacentHTML("afterbegin", cash_advance);
                                            console.log("driver${c + 1}")
                                        }
                                    }
                                }
                            }
                            var released_by = "";
                            for(let y = 1; y<tbf_data_list.content.length; y++){
                                if(ltf_data_list.content[a][0] == tbf_data_list.content[y][2]){
                                    released_budget = tbf_data_list.content[a][3];
                                    released_by = tbf_data_list.content[a][4];
                                    pcv_no = tbf_data_list.content[a][1];
                                }
                            }
                            var values = "";
                            var valueArray = "";
                            var cash_advance = "";
                            var truck_helper_name = "";
                            for(let c = 1; c < tbf_data_list.content.length; c++){
                                if(search_tbf_form_no_ap_accounting.value == tbf_data_list.content[c][0]){
                                    if(ltf_data_list.content[a][0] == tbf_data_list.content[c][2]){
                                        var values = ltf_data_list.content[a][9];
                                        var valueArray = values.split(" || ");
                                    }
                                }
                            }
                            for(let c = 0; c < valueArray.length; c++){
                                if(employee_data_list.content[x][0] == valueArray[c]){
                                    var gender = employee_data_list.content[x][6];
                                    if(gender == "MALE"){
                                        truck_helper_name_list += `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} ${employee_data_list.content[x][5]} || `
                                    truck_helper_name = `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} ${employee_data_list.content[x][5]}`
                                    }
                                    else{
                                        truck_helper_name_list += `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} - ${employee_data_list.content[x][4]} || `
                                        truck_helper_name = `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} - ${employee_data_list.content[x][4]}`
                                    }
                                    cash_advance += `
                                    <div>
                                        <label for="cash_advance${c + 1}">
                                            Advance Salary Truck Helper ${c + 1}
                                        </label>
                                        <input type="text" id="cash_advance${c + 1}" name="cash_advance${c + 1}" class="form-control" autocomplete="off" readonly value='${truck_helper_name}'>
                                    </div>
                                    <div>
                                        <label for="cash_advance_amount${c + 1}">
                                            Amount
                                            <input type="number" id="cash_advance_amount${c + 1}" name="cash_advance_amount${c + 1}" class="form-control" autocomplete="off" required value="0">
                                        </label>
                                    </div>
                                    `
                                    truck_helper_count_ap_accounting.value = parseFloat(truck_helper_count_ap_accounting.value) + 1;
                                    diesel_gasoline_expense_container_ap_accounting.insertAdjacentHTML("beforebegin", cash_advance);
                                    add_item_button_ap_accounting.style.display = "block";
                                    console.log("th${c + 1}")
                                }
                            };   
                        }
                        var client_name = "";
                        for(let c = 1; c < client_data_list.content.length; c++){
                            if(ltf_data_list.content[a][2] == client_data_list.content[c][0]){
                                client_name = client_data_list.content[c][1];
                            }
                        }
                        var waste_name = "";
                        for(let c = 1; c < type_of_waste_data.content.length; c++){
                            if(ltf_data_list.content[a][3] == type_of_waste_data.content[c][0]){
                                waste_name = type_of_waste_data.content[c][2];
                            }
                        }
                        data_value = `
                        LTF #: ${ltf_data_list.content[a][0]}<br>
                        CLIENT: ${client_name}<br>
                        WASTE DESCRIPTION: ${waste_name}<br>
                        HAULING DATE: ${date_decoder(ltf_data_list.content[a][4])}<br>
                        HAULING TIME: ${time_decoder(ltf_data_list.content[a][5])}<br>
                        TYPE OF VEHICLE: ${ltf_data_list.content[a][6]}<br>
                        PLATE #: ${ltf_data_list.content[a][7]}<br>
                        DRIVER: ${driver_name}<br>
                        TRUCK HELPER: ${truck_helper_name_list}<br>
                        DATE DEPARTURE: ${date_decoder(ltf_data_list.content[a][10])}<br>
                        TIME DEPARTURE: ${time_decoder(ltf_data_list.content[a][11])}<br>
                        REMARKS: ${ltf_data_list.content[a][12]}<br>
                        SUBMITTED BY: ${ltf_data_list.content[a][13]}<br>
                        RELEASED BUDGET: ${parseFloat(released_budget).toFixed(2)}<br>
                        RELEASED BY: ${released_by}<br>
                        `
                        
                        // Get references to the input elements
                        const inputElements = liquidation_list_ap_accounting.querySelectorAll('input[type="number"]');
                        const totalInput = document.getElementById('liquidated_budget');
                        const remaining = document.getElementById('remaining');

                        // Add input event listeners to each input element
                        inputElements.forEach(inputElement => {
                            inputElement.addEventListener('input', calculateTotal);
                        });

                        // Function to calculate the total and update the total input element
                        function calculateTotal() {
                            let sum = 0;
                            inputElements.forEach(inputElement => {
                                sum += parseInt(inputElement.value) || 0;
                            });
                            totalInput.value = sum;
                            remaining.value = parseFloat(released_budget).toFixed(2) - sum;
                        }

                        ltf_no_ap_accounting.value = ltf_data_list.content[a][0];
                        pcv_no_ap_accounting.value = pcv_no;
                        liquidation_form_inputs_ap_accounting.style.display = "flex";
                        liquidation_form_buttons_ap_accounting.style.display = "flex";
                        liquidation_list_ap_accounting.style.display = "grid";
                        budget_ap_accounting.value = parseFloat(released_budget).toFixed(2);
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
        add_item_button_ap_accounting.addEventListener("click", () => {
            particular_counter_ap_accounting.value = parseFloat(particular_counter_ap_accounting.value) + 1
            var data = `
                <div id="particular_container${particular_counter_ap_accounting.value}">
                    <label for="particular${particular_counter_ap_accounting.value}">
                        Particulars
                    </label><br>
                    <input type="text" id="particular${particular_counter_ap_accounting.value}" name="particular${particular_counter_ap_accounting.value}" class="form-control" autocomplete="off" value="Input Particulars">
                </div>
                <div id="particular_container${particular_counter_ap_accounting.value}">
                    <label for="particular_amount${particular_counter_ap_accounting.value}">
                        Amount
                        <input type="number" id="particular_amount${particular_counter_ap_accounting.value}" name="particular_amount${particular_counter_ap_accounting.value}" class="form-control" autocomplete="off" required value="0">
                    </label><br>
                </div>
            `
            remove_item_button_ap_accounting.style.display = "block";
            cash_return_container_ap_accounting.insertAdjacentHTML("beforebegin", data);
        
            // Get references to the input elements
            const inputElements = liquidation_list_ap_accounting.querySelectorAll('input[type="number"]');
            const totalInput = document.getElementById('liquidated_budget');
            const remaining = document.getElementById('remaining');

            // Add input event listeners to each input element
            inputElements.forEach(inputElement => {
                inputElement.addEventListener('input', calculateTotal);
            });

            // Function to calculate the total and update the total input element
            function calculateTotal() {
                let sum = 0;
                inputElements.forEach(inputElement => {
                    sum += parseInt(inputElement.value) || 0;
                });
                totalInput.value = sum;
                remaining.value = parseFloat(released_budget).toFixed(2) - sum;
            }
        });
        
        remove_item_button_ap_accounting.addEventListener("click", () => {
            // Find the last added particular container
            const lastParticularContainers = document.querySelectorAll(`#particular_container${particular_counter_ap_accounting.value}`);
            // Decrement the particular counter
            particular_counter_ap_accounting.value = parseFloat(particular_counter_ap_accounting.value) - 1;
        
            lastParticularContainers.forEach(lastParticularContainer => {
                // Remove the last particular container if found
                if (lastParticularContainer) {
                    lastParticularContainer.remove();
            
            
                    // Get references to the input elements
                    const inputElements = liquidation_list_ap_accounting.querySelectorAll('input[type="number"]');
                    const totalInput = document.getElementById('liquidated_budget');
                    const remaining = document.getElementById('remaining');
                    const released_budget = parseFloat(budget_ap_accounting.value); // Assuming you have a budget_ap_accounting element
            
                    // Recalculate the total after removal
                    let sum = 0;
                    inputElements.forEach(inputElement => {
                        sum += parseInt(inputElement.value) || 0;
                    });
                    totalInput.value = sum;
                    remaining.value = released_budget - sum;
            
                }
            })
            // Hide the "Remove" button if no particular elements are left
            if (particular_counter_ap_accounting.value == 0) {
                remove_item_button_ap_accounting.style.display = "none";
            }
        });
        
        payroll_button_ap_accounting.addEventListener("click", () => {
            if(payroll_tab_ap_accounting.style.display == "block"){
                payroll_tab_ap_accounting.style.display = "none"
            }
            else{
                payroll_tab_ap_accounting.style.display = "block"
            }
        })
        
        generate_payslip_button_ap_accounting.addEventListener("click", () => {
            var payslip_form_data = "";
            var employee_array = [];
            var tlf_transaction_ap_accounting = [];
    
            for(let x = 1; x < ltf_data_list.content.length; x++){
                for(let y = 1; y < tlf_data_list.content.length; y++){
                    if(tlf_data_list.content[y][3] == ltf_data_list.content[x][0]){
                        if( search_year_ap_accounting.value == getYearFromDate(date_decoder(ltf_data_list.content[x][4])) &&
                        search_week_number_ap_accounting.value == getWeekNumber(date_decoder(ltf_data_list.content[x][4]))){
                            if (!tlf_transaction_ap_accounting.includes(tlf_data_list.content[y][4])) {
                                tlf_transaction_ap_accounting.push(tlf_data_list.content[y][4]);
                            }
                        }   
                    }
                }
            }
            for(let z = 0; z < tlf_transaction_ap_accounting.length; z++){
                for(let x = 1; x < employee_data_list.content.length; x++){
                    if(tlf_transaction_ap_accounting[z] == employee_data_list.content[x][0]){
                        if (!employee_array.includes(employee_data_list.content[x][0])) {
                            employee_array.push(employee_data_list.content[x][0]);
                        }
                    }
                }
            }
            console.log("🚀 ~ file: user15.js:764 ~ generate_payslip_button_ap_accounting.addEventListener ~ employee_array:", employee_array)

            for(let z = 0; z < employee_array.length; z++){
                var ltf_data = [];
                var cash_advance = [];
                var name = "";
                var department = "";
                var designation = "";
                var employee_id = "";
                var date = "";
                var pay_date = "";
                var tin_id = "";
                for(let x = 1; x < ltf_data_list.content.length; x++){
                    for(let y = 1; y < tlf_data_list.content.length; y++){
                        if(tlf_data_list.content[y][3] == ltf_data_list.content[x][0]){
                            if( search_year_ap_accounting.value == getYearFromDate(date_decoder(ltf_data_list.content[x][4])) &&
                                search_week_number_ap_accounting.value == getWeekNumber(date_decoder(ltf_data_list.content[x][4]))){
                                date = getWeekDates2(date_decoder(tlf_data_list.content[y][7]));
                                pay_date = date_decoder(pay_date_ap_accounting.value);
                                if (!ltf_data.includes(tlf_data_list.content[y][3])) {
                                    ltf_data.push(tlf_data_list.content[y][3]);
                                }
                            }
                        }
                    }
                }
                for(let x = 1; x < employee_data_list.content.length; x++){
                    if(employee_array[z] == employee_data_list.content[x][0]){
                        var gender = employee_data_list.content[x][6];
                        if(gender == "MALE"){
                            name = `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} ${employee_data_list.content[x][5]}`
                        }
                        else{
                            name = `${employee_data_list.content[x][3]}, ${employee_data_list.content[x][1]} ${employee_data_list.content[x][2]} - ${employee_data_list.content[x][4]}`
                        }
                        department = employee_data_list.content[x][31];
                        designation = employee_data_list.content[x][32];
                        employee_id = employee_data_list.content[x][0];
                        tin_id = employee_data_list.content[x][19];
                    }
                }
                var client_id = [];
                var client_name = [];
                var date_of_haul = [];
                var plate_no = [];
                var employee_designation = [];
                var employee_rate = "";
                for(let y = 0; y < ltf_data.length; y++){
                    for(let x = 1; x < ltf_data_list.content.length; x++){
                        if(ltf_data[y] == ltf_data_list.content[x][0]){
                            client_id.push(ltf_data_list.content[x][2]);
                            date_of_haul.push(date_decoder(ltf_data_list.content[x][4]));
                            plate_no.push(ltf_data_list.content[x][7]);
                            if(employee_array[z] == ltf_data_list.content[x][8]){
                                employee_designation.push("DRIVER");
                                employee_rate = 800;
                            }
                            else{
                                employee_designation.push("TRUCK HELPER");
                                employee_rate = 480;
                            }
                        }
                    }
                }
                console.log(employee_designation)
                for(let x = 1; x < tlf_data_list.content.length; x++){
                    for(let y = 0; y < ltf_data.length; y++){
                        if(tlf_data_list.content[x][4] == employee_array[z]){
                            cash_advance.push(0);
                            if(tlf_data_list.content[x][3] == ltf_data[y]){
                                cash_advance[y] = tlf_data_list.content[x][5];
                            }
                        }
                    }
                }
                var client_distance = [];
                for(let y = 0; y < client_id.length; y++){
                    for(let x = 1; x < client_data_list.content.length; x++){
                        if(client_id[y] == client_data_list.content[x][0]){
                            client_distance.push(client_data_list.content[x][6]);
                            client_name.push(client_data_list.content[x][1]);
                        }
                    }
                }
                var additional_rate = [];
                for(let x = 0; x < client_distance.length; x++){
                    if(parseFloat(client_distance[x]) > 50){
                        var percentage = (parseFloat(client_distance[x]) - 50) * 10;
                        if(employee_designation[0] == "DRIVER"){
                            additional_rate.push(percentage * .6);
                        }
                        else{
                            additional_rate.push(percentage * .4);
                        }
                    }
                    else{
                        if(employee_designation[0] == "DRIVER"){
                            additional_rate.push(0);
                        }
                        else{
                            additional_rate.push(0);
                        }
                    }
                }
                var net_pay = [];
                for(let x = 0; x < additional_rate.length; x++){
                    net_pay.push(parseFloat(employee_rate) + 200 + parseFloat(additional_rate[x]) - parseFloat(cash_advance[x]))
                }
                var total_net_pay = 0;
                for(let x = 0; x < net_pay.length; x++){
                    total_net_pay += parseFloat(net_pay[x])
                }
                
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
                                        <h4 class="bold">Name:</h4><h4 class="ps-1 truncate_text">${name}</h4>
                                    </div>
                                    <div class="d-flex">
                                        <h4 class="bold">Department:</h4><h4 class="ps-1 truncate_text">${department}</h4>
                                    </div>
                                    <div class="d-flex">
                                        <h4 class="bold">Designation:</h4><h4 class="ps-1 truncate_text">${designation}</h4>
                                    </div>
                                    <div class="d-flex">
                                        <h4 class="bold">ID No:</h4><h4 class="ps-1 truncate_text">${employee_id}</h4>
                                    </div>
                                    <div class="d-flex">
                                        <h4 class="bold">Pay Period:</h4><h4 class="ps-1 truncate_text">${date_decoder(date[0])} - ${date_decoder(date[6])}</h4>
                                    </div>
                                    <div class="d-flex">
                                        <h4 class="bold">Pay Date:</h4><h4 class="ps-1 truncate_text">${pay_date}</h4>
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
                                        <tbody>
                                            <tr>
                                                <th>DATE OF HAUL</th>
                                                <th>PLATE #</th>
                                                <th>CLIENT NAME</th>
                                                <th>DIST.</th>
                                                <th>RATE</th>
                                                <th>MEAL<br>ALLOW.</th>
                                                <th>ADD.<br>RATE</th>
                                                <th>CASH<br>ADVANCE</th>
                                                <th>NET PAY</th>
                                            </tr>
                                            ${date_of_haul.map((item1, index) => `
                                            <tr>
                                                <td>${item1}</td>
                                                <td>${plate_no[index]}</td>
                                                <td class="truncate_text2">${client_name[index]}</td>
                                                <td>${client_distance[index]}</td>
                                                <td>${formatNumber(employee_rate)}</td>
                                                <td>${formatNumber(200)}</td>
                                                <td>${formatNumber(additional_rate[index])}</td>
                                                <td>${formatNumber(cash_advance[index])}</td>
                                                <td>${formatNumber(net_pay[index])}</td>
                                            </tr>`).join('')}
                                            <tr class="bold">
                                                <td style="grid-column-start: 1; grid-column-end: 9">TOTAL</td>
                                                <td>${formatNumber(total_net_pay)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
                `
            }
            payslip_container_ap_accounting.innerHTML = payslip_form_data;
        })



        // FORM GENERATOR
        // ftf_data_list
        const fund_transfer_form_ap_accounting = document.querySelector("#fund_transfer_form");
        const fund_transfer_form_button_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_transfer_form_button");
        const fund_transfer_form_id_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_transfer_form_id");
        const ftf_form_no_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#ftf_form_no");
        const fund_source_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_source");
        const fund_allocation_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_allocation");
        const fund_source_amount_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_source_amount");
        const fund_allocation_amount_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_allocation_amount");
        const fund_source_amount_container_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_source_amount_container");
        const fund_allocation_amount_container_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_allocation_amount_container");
        const transfer_history_list_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#transfer_history_list");
        const fund_source_other_details_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_source_other_details_container");
        const fund_allocation_other_details_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_allocation_other_details_container");
        
        var month_new;
        var code_year_month;
        var data_counter;
        if(today_month.toString().length == 1){
            month_new = `0${today_month}`
        }
    
        code_year_month = `FTF${today_year}${month_new}`;
    
        
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
        
        for(x=1; x<ftf_data_list.content.length; x++){
            data_info = ftf_data_list.content[x][0];
            
            if((String(data_info)).includes(code_year_month) == true){
                data_last_3digit = data_info.slice(9)
            }
            else{}
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
    
        ftf_form_no_ap_accounting.value = `${code_year_month}${data_counter}`

        
        fund_transfer_form_button_ap_accounting.addEventListener("click", () => {
            if(fund_transfer_form_id_ap_accounting.style.display == "block"){
                fund_transfer_form_id_ap_accounting.style.display = "none";
                fund_request_form_id_ap_accounting.style.display = "none";
            }
            else{
                fund_transfer_form_id_ap_accounting.style.display = "block";
                fund_request_form_id_ap_accounting.style.display = "none";
            }        
        });

        function updateFundSourceAmount(source, source2, source3, source4) {
            const fundSourceValue = source.value;
            let fundAmount = 0;
        
            switch (fundSourceValue) {
                case "SOURCE OF FUND":
                    fundAmount = source_of_fund;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "TRUCKING FUND":
                    fundAmount = trucking_fund;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "HAULING FUND":
                    fundAmount = hauling_fund;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "DIESEL FUND":
                    fundAmount = diesel_fund;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "GASOLINE FUND":
                    fundAmount = gasoline_fund;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "SCRAP SALES":
                    fundAmount = scrap_sales;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "MOLD RUNNER SALES":
                    fundAmount = mold_runner_sales;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "TRUCK SCALE COLLECTION":
                    fundAmount = truck_scale_collection;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "HOUSE COLLECTION":
                    fundAmount = house_collection;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "BANK":
                    source2.style.display = "none";
                    source4.style.display = "none";
                    return;
                case "OTHERS":
                    source2.style.display = "none";
                    source4.style.display = "block";
                    return;
            }
        
            source3.value = fundAmount.toFixed(2);
            source3.style.display = "flex";
        }
        
        fund_source_ap_accounting.addEventListener("change", function() {
            updateFundSourceAmount(fund_source_ap_accounting, fund_source_amount_container_ap_accounting, fund_source_amount_ap_accounting, fund_source_other_details_ap_accounting);
        });
        
        fund_allocation_ap_accounting.addEventListener("change", function() {
            updateFundSourceAmount(fund_allocation_ap_accounting, fund_allocation_amount_container_ap_accounting, fund_allocation_amount_ap_accounting, fund_allocation_other_details_ap_accounting);
        });
        
        // frf_data_list
        const fund_request_form_button_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_request_form_button");
        const fund_request_form_id_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_request_form_id");
        const frf_form_no_ap_accounting = fund_request_form_id_ap_accounting.querySelector("#frf_form_no1");
        const add_item_button2_ap_accounting = fund_request_form_id_ap_accounting.querySelector("#add_item_button");
        const remove_item_button2_ap_accounting = fund_request_form_id_ap_accounting.querySelector("#remove_item_button");
        const request_list_container_ap_accounting = fund_request_form_id_ap_accounting.querySelector("#request_list_container");
        const request_list_counter_ap_accounting = fund_request_form_id_ap_accounting.querySelector("#request_list_counter");
        const request_history_list_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#request_history_list");

        var month_new;
        var code_year_month;
        var data_counter;
        if(today_month.toString().length == 1){
            month_new = `0${today_month}`
        }
    
        code_year_month = `FRF${today_year}${month_new}`;
    
        
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
        
        for(x=1; x<frf_data_list.content.length; x++){
            data_info = frf_data_list.content[x][0];
            
            if((String(data_info)).includes(code_year_month) == true){
                data_last_3digit = data_info.slice(9)
            }
            else{}
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
    
        frf_form_no_ap_accounting.value = `${code_year_month}${data_counter}`

        
        fund_request_form_button_ap_accounting.addEventListener("click", () => {
            if(fund_request_form_id_ap_accounting.style.display == "block"){
                fund_request_form_id_ap_accounting.style.display = "none";
                fund_transfer_form_id_ap_accounting.style.display = "none";
            }
            else{
                fund_request_form_id_ap_accounting.style.display = "block";
                fund_transfer_form_id_ap_accounting.style.display = "none";
            }        
        });        

        add_item_button2_ap_accounting.addEventListener("click", () => {
            var data_counter_value = data_counter
            data_counter_value = String(parseFloat(data_counter_value) + parseFloat(request_list_counter_ap_accounting.value)).padStart(3,"0");
            request_list_counter_ap_accounting.value = parseFloat(request_list_counter_ap_accounting.value) + 1
            var data = `
            <div id="request_list${request_list_counter_ap_accounting.value}" class="d-flex gap-4">
                <div>
                    <div class="ap_form">
                        <div class="form">
                            <input type="text" id="frf_form_no${request_list_counter_ap_accounting.value}" name="frf_form_no${request_list_counter_ap_accounting.value}" class="form-control"  autocomplete="off" value="${code_year_month}${data_counter_value}">
                        </div>
                    </div>
                </div>
                <div style="width: 30%;">
                    <select name="fund_allocation${request_list_counter_ap_accounting.value}" id="fund_allocation${request_list_counter_ap_accounting.value}" class="form-control" required>
                        <option value="">SELECT FUND ALLOCATION</option>
                        <option value="SOURCE OF FUND">SOURCE OF FUND</option>
                        <option value="TRUCKING FUND">TRUCKING FUND</option>
                        <option value="HAULING FUND">HAULING FUND</option>
                        <option value="DIESEL FUND">DIESEL FUND</option>
                        <option value="GASOLINE FUND">GASOLINE FUND</option>
                        <option value="SCRAP SALES">SCRAP SALES</option>
                        <option value="MOLD RUNNER SALES">MOLD RUNNER SALES</option>
                        <option value="TRUCK SCALE COLLECTION">TRUCK SCALE COLLECTION</option>
                        <option value="HOUSE COLLECTION">HOUSE COLLECTION</option>
                    </select>
                </div>
                <div style="width: 20%;">
                    <input type="number" id="fund_amount${request_list_counter_ap_accounting.value}" name="fund_amount${request_list_counter_ap_accounting.value}" class="form-control"  autocomplete="off" placeholder="Input Fund Amount" required>
                </div>
                <div style="width: 40%;">
                    <input type="text" id="purpose${request_list_counter_ap_accounting.value}" name="purpose${request_list_counter_ap_accounting.value}" class="form-control" autocomplete="off" required>
                </div>
            </div>
            `
            remove_item_button2_ap_accounting.style.display = "block";
            request_list_container_ap_accounting.insertAdjacentHTML("beforeend", data);
        });

        remove_item_button2_ap_accounting.addEventListener("click", () => {
            // Find the last added particular container
            const last_request_list = document.querySelector(`#request_list${request_list_counter_ap_accounting.value}`);
            
            last_request_list.remove();
            request_list_counter_ap_accounting.value = parseFloat(request_list_counter_ap_accounting.value) - 1;
            if(request_list_counter_ap_accounting.value == 1){
                remove_item_button2_ap_accounting.style.display = "none";
            }
        });

        var data = "";
        var data_value_counter = 0;
        for(let x = 1; x < ftf_data_list.content.length; x++){
            data_value_counter += 1;
            data += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${ftf_data_list.content[x][0]}</td>
                <td>${date_decoder(ftf_data_list.content[x][6])} / ${time_decoder2(ftf_data_list.content[x][6])}</td>
                <td>${ftf_data_list.content[x][1]}</td>
                <td>${ftf_data_list.content[x][2]}</td>
                <td>${formatNumber(ftf_data_list.content[x][3])}</td>
                <td>${ftf_data_list.content[x][5]}</td>
                <td>${ftf_data_list.content[x][4]}</td>
            </tr>
            `
        }
        transfer_history_list_ap_accounting.innerHTML = data;

        var data = "";
        var data_value_counter = 0;
        for(let x = 1; x < frf_data_list.content.length; x++){
            data_value_counter += 1;
            var approved_date = "";
            var approved_time = "";
            var duration = "";
            if(frf_data_list.content[x][9] !== ""){
                approved_date = date_decoder(frf_data_list.content[x][9]);
                approved_time = time_decoder2(frf_data_list.content[x][9]);
                duration = calculateTravelTime(date_decoder(frf_data_list.content[x][8]),time_decoder2(frf_data_list.content[x][8]),date_decoder(frf_data_list.content[x][9]),time_decoder2(frf_data_list.content[x][9]))
            }

            data += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${frf_data_list.content[x][0]}</td>
                <td>${date_decoder(frf_data_list.content[x][8])}<br>${time_decoder2(frf_data_list.content[x][8])}</td>
                <td>${frf_data_list.content[x][1]}</td>
                <td>${formatNumber(frf_data_list.content[x][2])}</td>
                <td>${frf_data_list.content[x][3]}</td>
                <td>${frf_data_list.content[x][5]}</td>
                <td>${formatNumber(frf_data_list.content[x][6])}</td>
                <td>${frf_data_list.content[x][7]}</td>
                <td>${approved_date}<br>${approved_time}</td>
                <td>${duration}</td>
                <td>${frf_data_list.content[x][4]}</td>
            </tr>
            `
        }
        request_history_list_ap_accounting.innerHTML = data;

        // // incident_history_list
        // var incident_history_data_value = "";
        // var incident_history_data_value_counter = 1;
        // for(let x = 1; x < irf_data_list.content.length; x++){
        //     incident_history_data_value += `
        //     <tr>
        //         <td>${incident_history_data_value_counter}</td>
        //         <td>${irf_data_list.content[x][1]}</td>
        //         <td>${date_decoder(irf_data_list.content[x][6])} /<br> ${time_decoder2(irf_data_list.content[x][7])}</td>
        //         <td>${irf_data_list.content[x][3]}</td>
        //         <td>${irf_data_list.content[x][2]}</td>
        //         <td>${irf_data_list.content[x][4]}</td>
        //         <td>${irf_data_list.content[x][8]}</td>
        //         <td>${date_decoder(irf_data_list.content[x][9])} /<br> ${time_decoder2(irf_data_list.content[x][10])}</td>
        //         <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][6]),time_decoder2(irf_data_list.content[x][7]),date_decoder(irf_data_list.content[x][9]),time_decoder2(irf_data_list.content[x][10]))}</td>
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
