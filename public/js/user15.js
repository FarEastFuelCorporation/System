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
        const prf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec');
        const pof_response_promise = fetch('https://script.google.com/macros/s/AKfycbzqVTd17rQV4G2nAWPDBoc2RNftAq92WL5DRsayPw98taWmzUIvhX9ppc27euLXjUe7PA/exec');
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
            prf_response,
            pof_response,
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
            prf_response_promise,
            pof_response_promise,
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
        const prf_data_list  = await prf_response.json();
        const pof_data_list  = await pof_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data3
        const profile_picture = document.getElementById("profile_picture");
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("#user");
        const irf_user = document.getElementById("irf_user");

        const user_name = username_data_list.content[15][findTextInArray(username_data_list, "NAME")];
        profile_picture.src = `../images/profile_picture/${username_data_list.content[15][findTextInArray(username_data_list, "PICTURE")]}`;
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
        const sir_ruels_fund_ap_accounting = ap_accounting_dashboard.querySelector("#sir_ruels_fund");
        const scrap_sales_ap_accounting = ap_accounting_dashboard.querySelector("#scrap_sales");
        const mold_runner_sales_ap_accounting = ap_accounting_dashboard.querySelector("#mold_runner_sales");
        const truck_scale_collection_ap_accounting = ap_accounting_dashboard.querySelector("#truck_scale_collection");
        const house_collection_ap_accounting = ap_accounting_dashboard.querySelector("#house_collection");
        const representation_fund_ap_accounting = ap_accounting_dashboard.querySelector("#representation_fund");
        const purchase_request_fund_ap_accounting = ap_accounting_dashboard.querySelector("#purchase_request_fund");
        const approved_purchased_request_list_container_purchasing = ap_accounting_dashboard.querySelector("#approved_purchased_request_list");
        const history_list_container_purchasing = ap_accounting_dashboard.querySelector("#purchase_request_history");
        const pcv_no_pr_input_purchasing = ap_accounting_dashboard.querySelector("#pcv_no_pr_input");

        var source_of_fund = 0;
        var trucking_fund = 0;
        var hauling_fund = 0;
        var diesel_fund = 0;
        var gasoline_fund = 0;
        var sir_ruels_fund = 0;
        var scrap_sales = 0;
        var mold_runner_sales = 0;
        var truck_scale_collection = 0;
        var house_collection = 0;
        var representation_fund = 0;
        var purchase_request_fund = 0;
        var deduction_source_of_fund = 0;
        var deduction_trucking_fund = 0;
        var deduction_hauling_fund = 0;
        var deduction_diesel_fund = 0;
        var deduction_gasoline_fund = 0;
        var deduction_sir_ruels_fund = 0;
        var deduction_scrap_sales = 0;
        var deduction_mold_runner_sales = 0;
        var deduction_truck_scale_collection = 0;
        var deduction_house_collection = 0;
        var deduction_representation_fund = 0;
        var deduction_purchase_request_fund = 0;
        var additional_source_of_fund = 0;
        var additional_trucking_fund = 0;
        var additional_hauling_fund = 0;
        var additional_diesel_fund = 0;
        var additional_gasoline_fund = 0;
        var additional_sir_ruels_fund = 0;
        var additional_scrap_sales = 0;
        var additional_mold_runner_sales = 0;
        var additional_truck_scale_collection = 0;
        var additional_house_collection = 0;
        var additional_representation_fund = 0;
        var additional_purchase_request_fund = 0;

        function updateAmount(){
            source_of_fund = 0;
            trucking_fund = 0;
            hauling_fund = 0;
            diesel_fund = 0;
            gasoline_fund = 0;
            sir_ruels_fund = 0;
            scrap_sales = 0;
            mold_runner_sales = 0;
            truck_scale_collection = 0;
            house_collection = 0;
            representation_fund = 0;
            purchase_request_fund = 0;
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
                else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "SIR RUEL'S FUND") {
                    sir_ruels_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
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
                else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "PURCHASE REQUEST FUND") {
                    purchase_request_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
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
                else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "SIR RUEL'S FUND") {
                    sir_ruels_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
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
                else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "PURCHASE REQUEST FUND") {
                    purchase_request_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                }
            }
        }
        updateAmount();
        source_of_fund_ap_accounting.innerText = formatNumber(source_of_fund);
        trucking_fund_ap_accounting.innerText = formatNumber(trucking_fund);
        hauling_fund_ap_accounting.innerText = formatNumber(hauling_fund);
        diesel_fund_ap_accounting.innerText = formatNumber(diesel_fund);
        gasoline_fund_ap_accounting.innerText = formatNumber(gasoline_fund);
        sir_ruels_fund_ap_accounting.innerText = formatNumber(sir_ruels_fund);
        scrap_sales_ap_accounting.innerText = formatNumber(scrap_sales);
        mold_runner_sales_ap_accounting.innerText = formatNumber(mold_runner_sales);
        truck_scale_collection_ap_accounting.innerText = formatNumber(truck_scale_collection);
        house_collection_ap_accounting.innerText = formatNumber(house_collection);
        representation_fund_ap_accounting.innerText = formatNumber(representation_fund);
        purchase_request_fund_ap_accounting.innerText = formatNumber(purchase_request_fund);

        const pending_list_container_ap_accounting = ap_accounting_dashboard.querySelector("#pending_list");
        const history_list_container_ap_accounting = document.querySelector("#history_list");
        const liquidation_history_list_container_ap_accounting = document.querySelector("#liquidation_history_list");
        
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
        for(let x = ltf_data_list.content.length -1; x >= 1 ; x--){
            for(let y = 0; y < pending_list_ltf_ap_accounting.length; y++){
                if(pending_list_ltf_ap_accounting[y] == ltf_data_list.content[x][0]){
                    if(ltf_data_list.content[x][6] == "10 WHEELER WING VAN" && ltf_data_list.content[x][7] !== "NAY2264"){
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
                            <td>${ltf_data_list.content[x][7]}</td>
                            <td>${ltf_data_list.content[x][12]}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            pending_list_container_ap_accounting.innerHTML = data_value;
        }

        // purchase_request
        let prf_transaction = []; // Variable containing existing elements
        let prf_pr_transaction = []; // Variable containing existing elements
        var pending = [];
        var requested = [];
        var approved = [];
        var released = [];
        var purchased = [];
        for (let i = 1; i < prf_data_list.content.length; i++) {
            if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "PENDING") {
                pending.push(prf_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
            }
            if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "REQUESTED") {
                requested.push(prf_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
            }
            if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "APPROVED") {
                approved.push(prf_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
            }
            if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "RELEASED") {
                released.push(prf_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
            }
            if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "PURCHASED") {
                purchased.push(prf_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
            }
        }
        for (let i = 1; i < pof_data_list.content.length; i++) {
            if (!prf_pr_transaction.includes(pof_data_list.content[i][findTextInArray(prf_data_list, "ITM #")])) {
                prf_pr_transaction.push(pof_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
            }
        }

        // approved_purchased_request_list
        var approved_data_value = "";
        var approved_data_value_counter = 1;
        for(let x = 1; x < prf_data_list.content.length; x++){  
            for(let y = 0; y < approved.length; y++){
                if(approved[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                    var pr_no, pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner, button, button2;
                    pr_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
                    date_time = prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")];
                    quantity = prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")];
                    unit = prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")];
                    item = prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")];
                    details = prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")];
                    remarks = prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")];
                    department = prf_data_list.content[x][findTextInArray(prf_data_list, "DEPARTMENT")];
                    status = prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")];
                    requisitioner = prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")];
                    for(let z = 1; z < pof_data_list.content.length; z++){
                        if(pr_data == pof_data_list.content[z][findTextInArray(pof_data_list, "ITM #")]){
                            amount = pof_data_list.content[z][findTextInArray(pof_data_list, "AMOUNT")]
                            pr_no = pof_data_list.content[z][findTextInArray(pof_data_list, "PRF #")]
                        }
                    }
                    button = `
                    <form action="https://script.google.com/macros/s/AKfycbyQQEonqcAsX19cNv_fHNqyB8U5RttkF-2xdGcPuclqJkEckUbrSrXbFfFFOdzhDZW_pQ/exec" method="post">
                        <input type="hidden" name="pr_form_no" id="pr_form_no" value="${pr_no}">
                        <input type="hidden" name="itm_form_no" id="itm_form_no" value="${pr_data}">
                        <input type="hidden" name="timestamp" id="timestamp" value="${new Date()}">
                        <input type="hidden" name="user" id="user" value="${user_name}">
                        <input type="hidden" name="pr_amount" id="pr_amount" value="${amount}">
                        <input type="hidden" name="pcv_no_pr" id="pcv_no_pr">
                        <button type="submit" style="background-color: transparent !important; padding:0; color: #198754; border: none">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                        </button>
                    </form>
                    `
                    // button2 = `
                    // <form action="https://script.google.com/macros/s/AKfycbx5SYw9DIYhoeFs656bTN-5G8qCcbrWnH5saJzZEeptNXL04S-dFQgbu10ecNU-s2hu2w/exec" method="post">
                    // <input type="hidden" name="itm_form_no" id="itm_form_no" value="${pr_data}">
                    // <input type="hidden" name="timestamp" id="timestamp" value="${new Date()}">
                    // <button type="submit" style="background-color: transparent !important; padding:0; color: #dc3545; border: none">
                    //         <i class="fa-solid fa-thumbs-down"></i>
                    //     </button>
                    // </form>
                    // `

                    approved_data_value += `
                    <tr>
                        <td>${approved_data_value_counter}</td>
                        <td>${pr_no}</td>
                        <td>${pr_data}</td>
                        <td>${date_decoder(date_time)} /<br> ${time_decoder(date_time)}</td>
                        <td>${quantity}</td>
                        <td>${unit}</td>
                        <td>${item}</td>
                        <td>${details}</td>
                        <td>${remarks}</td>
                        <td>${department}</td>
                        <td>${requisitioner}</td>
                        <td>${formatNumber(amount)}</td>
                        <td>${status}</td>
                        <td>${button}</td>
                    </tr>
                    `
                    approved_data_value_counter += 1;
                }
            }
        }
        approved_purchased_request_list_container_purchasing.innerHTML = approved_data_value;

        pcv_no_pr_input_purchasing.addEventListener("change", () => {
            const pcv_no_pr = document.querySelectorAll("#pcv_no_pr")
            pcv_no_pr.forEach((data) => {
                data.value = pcv_no_pr_input_purchasing.value
            })
        })
        
        // purchase_request_history
        var released_data_value = "";
        var released_data_value_counter = 1;
        var purchased_data_value = "";
        var purchased_data_value_counter = 1;
        for(let x = 1; x < prf_data_list.content.length; x++){  
            for(let y = 0; y < released.length; y++){
                if(released[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                    var pr_no, pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner;
                    pr_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
                    date_time = prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")];
                    quantity = prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")];
                    unit = prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")];
                    item = prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")];
                    details = prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")];
                    remarks = prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")];
                    department = prf_data_list.content[x][findTextInArray(prf_data_list, "DEPARTMENT")];
                    status = prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")];
                    requisitioner = prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")];
                    for(let z = 1; z < pof_data_list.content.length; z++){
                        if(pr_data == pof_data_list.content[z][findTextInArray(pof_data_list, "ITM #")]){
                            amount = pof_data_list.content[z][findTextInArray(pof_data_list, "AMOUNT")]
                            pr_no = pof_data_list.content[z][findTextInArray(pof_data_list, "PRF #")]
                        }
                    }
                    released_data_value += `
                    <tr>
                        <td>${released_data_value_counter}</td>
                        <td>${pr_no}</td>
                        <td>${pr_data}</td>
                        <td>${date_decoder(date_time)} /<br> ${time_decoder(date_time)}</td>
                        <td>${quantity}</td>
                        <td>${unit}</td>
                        <td>${item}</td>
                        <td>${details}</td>
                        <td>${remarks}</td>
                        <td>${department}</td>
                        <td>${requisitioner}</td>
                        <td>${amount}</td>
                        <td>${status}</td>
                    </tr>
                    `
                    released_data_value_counter += 1;
                }
            }
            for(let y = 0; y < purchased.length; y++){
                if(purchased[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                    var pr_no, pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner;
                    pr_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
                    date_time = prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")];
                    quantity = prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")];
                    unit = prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")];
                    item = prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")];
                    details = prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")];
                    remarks = prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")];
                    department = prf_data_list.content[x][findTextInArray(prf_data_list, "DEPARTMENT")];
                    status = prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")];
                    requisitioner = prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")];
                    for(let z = 1; z < pof_data_list.content.length; z++){
                        if(pr_data == pof_data_list.content[z][findTextInArray(pof_data_list, "ITM #")]){
                            amount = pof_data_list.content[z][findTextInArray(pof_data_list, "AMOUNT")]
                            pr_no = pof_data_list.content[z][findTextInArray(pof_data_list, "PRF #")]
                        }
                    }
                    purchased_data_value += `
                    <tr>
                        <td>${purchased_data_value_counter}</td>
                        <td>${pr_no}</td>
                        <td>${pr_data}</td>
                        <td>${date_decoder(date_time)} /<br> ${time_decoder(date_time)}</td>
                        <td>${quantity}</td>
                        <td>${unit}</td>
                        <td>${item}</td>
                        <td>${details}</td>
                        <td>${remarks}</td>
                        <td>${department}</td>
                        <td>${requisitioner}</td>
                        <td>${amount}</td>
                        <td>${status}</td>
                    </tr>
                    `
                    purchased_data_value_counter += 1;
                }
            }
        }
        history_list_container_purchasing.insertAdjacentHTML("beforeend", released_data_value);
        history_list_container_purchasing.insertAdjacentHTML("beforeend", purchased_data_value);

        // history_list
        var data_value = "";
        var data_value_counter = 1;
        for(let x = ltf_data_list.content.length -1; x >= 1 ; x--){
            for(let y = 0; y < done_list_ltf_ap_accounting.length; y++){
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

        var data_value = "";
        var data_value_counter = 1;
        for(let x = tlf_data_list.content.length -1; x >= 1 ; x--){
            data_value += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${tlf_data_list.content[x][0]}</td>
                <td>${tlf_data_list.content[x][1]}</td>
                <td>${tlf_data_list.content[x][2]}</td>
                <td>${tlf_data_list.content[x][3]}</td>
                <td>${date_decoder(tlf_data_list.content[x][7])}<br>${time_decoder2(tlf_data_list.content[x][7])}</td>
                <td>${findEmployeeName2(tlf_data_list.content[x][4])}</td>
                <td>${tlf_data_list.content[x][5]}</td>
                <td>${tlf_data_list.content[x][6]}</td>
            </tr>
            `
        }
        liquidation_history_list_container_ap_accounting.innerHTML = data_value


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
        const search_ltf_form_no_button_ap_accounting = budget_form_ap_accounting.querySelector("#search_ltf_form_no_button");
        const reset_ap_accounting = budget_form_ap_accounting.querySelector("#reset");
        const budget_form_inputs_ap_accounting = budget_form_ap_accounting.querySelector("#budget_form_inputs");
        const budget_form_buttons_ap_accounting = budget_form_ap_accounting.querySelector("#budget_form_buttons");
        const available_funds_ap_accounting = budget_form_ap_accounting.querySelector("#available_funds");
        
        const liquidation_form_ap_accounting = trip_forms_ap_accounting.querySelector("#liquidation_form");
        const search_tbf_form_no_ap_accounting = liquidation_form_ap_accounting.querySelector("#search_tbf_form_no");
        const search_tbf_result_container_ap_accounting = liquidation_form_ap_accounting.querySelector("#search_tbf_result");
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
        const tbf_no_ap_accounting = budget_form_ap_accounting.querySelector("#tbf_no");
        var last_row = tbf_data_list.content.length -1;        
        var data_info = tbf_data_list.content[last_row][findTextInArray(tbf_data_list, "TBF #")];
        var data_counter = data_info.substring(9,13);
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(4,7);
        if(last_counter_year == current_year){
            tbf_no_ap_accounting.value = `TBF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            tbf_no_ap_accounting.value = `TBF${current_year}${month}${data_counter}`;
        }

        search_ltf_form_no_button_ap_accounting.addEventListener("click", () => {
            var data_value;
            var driver_name = "";
            var truck_helper_name = "";
            for(b=0; b < pending_list_ltf_ap_accounting.length; b++){
                if(search_ltf_form_no_ap_accounting.value == pending_list_ltf_ap_accounting[b]){
                    for(a=0; a < ltf_data_list.content.length; a++){
                        if(search_ltf_form_no_ap_accounting.value == ltf_data_list.content[a][0]){
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
                                var valueArray;
                                if ((values.toString()).includes(" || ")) {
                                    valueArray = values.split(" || ");
                                } else {
                                    valueArray = [values];
                                }
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
        const tlf_no_ap_accounting = liquidation_form_ap_accounting.querySelector("#tlf_no");
        var last_row = tlf_data_list.content.length -1;        
        var data_info = tlf_data_list.content[last_row][findTextInArray(tlf_data_list, "TLF #")];
        var data_counter = data_info.substring(9,13);
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(4,7);
        if(last_counter_year == current_year){
            tlf_no_ap_accounting.value = `TLF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            tlf_no_ap_accounting.value = `TLF${current_year}${month}${data_counter}`;
        }

        var released_budget = "";
        search_tbf_form_no_button_ap_accounting.addEventListener("click", () => {
            var data_value;
            var pcv_no = "";
            var ltf_no = "";
            var driver_name = "";
            var truck_helper_name_list = "";
            var released_by = "";
            for(b=0; b<pending_list_tbf_ap_accounting.length; b++){
                if(search_tbf_form_no_ap_accounting.value == pending_list_tbf_ap_accounting[b]){
                    for(let y = 1; y<tbf_data_list.content.length; y++){
                        if(search_tbf_form_no_ap_accounting.value == tbf_data_list.content[y][0]){
                            released_budget = tbf_data_list.content[y][3];
                            released_by = tbf_data_list.content[y][4];
                            pcv_no = tbf_data_list.content[y][1];
                            ltf_no = tbf_data_list.content[y][2];
                        }
                    }
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
                                        }
                                    }
                                }
                            }
                            var values = "";
                            var valueArray = "";
                            var cash_advance = "";
                            var truck_helper_name = "";
                            for(let c = 1; c < tbf_data_list.content.length; c++){
                                if(search_tbf_form_no_ap_accounting.value == tbf_data_list.content[c][0]){
                                    if (ltf_data_list.content[a][0] == tbf_data_list.content[c][2]) {
                                        var values = ltf_data_list.content[a][9];
                                        // Check if the values contain "||"
                                        if (values.toString().includes("||")) {
                                            var valueArray = values.split(" || ");
                                        } else {
                                            // If there are no "||", set valueArray to an empty array
                                            var valueArray = [values];
                                        }
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

                        ltf_no_ap_accounting.value = ltf_no;
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
        const transfer_history_list_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#transfer_history_list");
        const filter_fund_source_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#filter_fund_source");
        const filter_tab_fund_source_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#filter_tab_fund_source");
        const filter_fund_allocation_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#filter_fund_allocation");
        const filter_tab_fund_allocation_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#filter_tab_fund_allocation");
        const add_item_button2_ftf_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#add_item_button2_ftf");
        const remove_item_button2_ftf_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#remove_item_button2_ftf");
        const data_counter_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#data_counter");
        const fund_transfer_form_buttons_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_transfer_form_buttons");

        const ftf_form_no_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#ftf_form_no");
        var last_row = ftf_data_list.content.length -1;        
        var data_info = ftf_data_list.content[last_row][findTextInArray(ftf_data_list, "FTF # / FORM #")];
        var data_counter = data_info.substring(9,13);
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(3,7);
        console.log(last_counter_year)
        if(last_counter_year == current_year){
            ftf_form_no_ap_accounting.value = `FTF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            ftf_form_no_ap_accounting.value = `FTF${current_year}${month}${data_counter}`;
        }

        
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

        addNewData();

        add_item_button2_ftf_ap_accounting.addEventListener("click", () => {
            data_counter_ap_accounting.value = parseInt(data_counter_ap_accounting.value) + 1;
            addNewData();
        })

        remove_item_button2_ftf_ap_accounting.addEventListener("click", () => {
            const item_data = document.querySelector(`#data_container${data_counter_ap_accounting.value}`)
            item_data.remove()
            data_counter_ap_accounting.value = parseInt(data_counter_ap_accounting.value) - 1;
        })

        function addNewData(){            
            var data = 
            `
            <div id="data_container${data_counter_ap_accounting.value}">
                <div class="d-flex gap-4" id="data">
                    <div style="width: 10%;">
                        <div>
                            <label for="transaction_date${data_counter_ap_accounting.value}">
                                Transaction Date
                            </label><br>
                            <input type="date" id="transaction_date${data_counter_ap_accounting.value}" name="transaction_date${data_counter_ap_accounting.value}" class="form-control"  autocomplete="off" placeholder="Input Fund Amount" required value="0"> 
                        </div>
                    </div>
                    <div style="width: 30%;">
                        <div>
                            <label for="fund_source${data_counter_ap_accounting.value}">
                                Fund Source
                            </label><br>
                            <select name="fund_source${data_counter_ap_accounting.value}" id="fund_source${data_counter_ap_accounting.value}" class="form-control fund_source" required>
                                <option value="">SELECT FUND SOURCE</option>
                                <option value="SOURCE OF FUND">SOURCE OF FUND</option>
                                <option value="TRUCKING FUND">TRUCKING FUND</option>
                                <option value="HAULING FUND">HAULING FUND</option>
                                <option value="DIESEL FUND">DIESEL FUND</option>
                                <option value="GASOLINE FUND">GASOLINE FUND</option>
                                <option value="SIR RUEL'S FUND">SIR RUEL'S FUND</option>
                                <option value="SCRAP SALES">SCRAP SALES</option>
                                <option value="MOLD RUNNER SALES">MOLD RUNNER SALES</option>
                                <option value="TRUCK SCALE COLLECTION">TRUCK SCALE COLLECTION</option>
                                <option value="HOUSE COLLECTION">HOUSE COLLECTION</option>
                                <option value="REPRESENTATION FUND">REPRESENTATION FUND</option>
                                <option value="OTHERS">OTHERS</option>
                            </select>
                        </div>
                        <div id="fund_source_amount_container${data_counter_ap_accounting.value}">
                            <label for="fund_source_amount${data_counter_ap_accounting.value}">
                                Fund Source Amount
                            </label><br>
                            <input type="text" id="fund_source_amount${data_counter_ap_accounting.value}" name="fund_source_amount${data_counter_ap_accounting.value}" class="form-control fund_source_amount" autocomplete="off" readonly>
                        </div>
                        <div id="fund_source_other_details_container${data_counter_ap_accounting.value}" style="display: none">
                            <label for="fund_source_other_details${data_counter_ap_accounting.value}">
                                Fund Source Input
                            </label><br>
                            <input type="text" id="fund_source_other_details${data_counter_ap_accounting.value}" name="fund_source_other_details${data_counter_ap_accounting.value}" class="form-control"  autocomplete="off" placeholder="Input Fund Allocation"><br>
                        </div>
                    </div>
                    <div style="width: 30%;">
                        <div>
                            <label for="fund_allocation${data_counter_ap_accounting.value}">
                                Fund Allocation
                            </label><br>
                            <select name="fund_allocation${data_counter_ap_accounting.value}" id="fund_allocation${data_counter_ap_accounting.value}" class="form-control fund_allocation" required>
                                <option value="">SELECT FUND ALLOCATION</option>
                                <option value="BANK">BANK</option>
                                <option value="SOURCE OF FUND">SOURCE OF FUND</option>
                                <option value="TRUCKING FUND">TRUCKING FUND</option>
                                <option value="HAULING FUND">HAULING FUND</option>
                                <option value="DIESEL FUND">DIESEL FUND</option>
                                <option value="GASOLINE FUND">GASOLINE FUND</option>
                                <option value="SIR RUEL'S FUND">SIR RUEL'S FUND</option>
                                <option value="SCRAP SALES">SCRAP SALES</option>
                                <option value="MOLD RUNNER SALES">MOLD RUNNER SALES</option>
                                <option value="TRUCK SCALE COLLECTION">TRUCK SCALE COLLECTION</option>
                                <option value="HOUSE COLLECTION">HOUSE COLLECTION</option>
                                <option value="REPRESENTATION FUND">REPRESENTATION FUND</option>
                                <option value="OTHERS">OTHERS</option>
                            </select>
                        </div>
                        <div id="fund_allocation_amount_container${data_counter_ap_accounting.value}">
                            <label for="fund_allocation_amount${data_counter_ap_accounting.value}">
                                Fund Allocation Amount
                            </label><br>
                            <input type="text" id="fund_allocation_amount${data_counter_ap_accounting.value}" name="fund_allocation_amount${data_counter_ap_accounting.value}" class="form-control" autocomplete="off" readonly>
                        </div>
                        <div id="fund_allocation_other_details_container${data_counter_ap_accounting.value}" style="display: none">
                            <label for="fund_allocation_other_details${data_counter_ap_accounting.value}">
                                Fund Allocation Input
                            </label><br>
                            <input type="text" id="fund_allocation_other_details${data_counter_ap_accounting.value}" name="fund_allocation_other_details${data_counter_ap_accounting.value}" class="form-control"  autocomplete="off" placeholder="Input Fund Allocation">
                        </div>
                    </div>
                    <div style="width: 15%;">
                        <div>
                            <label for="fund_amount${data_counter_ap_accounting.value}">
                                Fund Amount
                            </label><br>
                            <input type="number" id="fund_amount${data_counter_ap_accounting.value}" name="fund_amount${data_counter_ap_accounting.value}" class="form-control fund_amount"  autocomplete="off" placeholder="Input Fund Amount" required value="0">
                        </div>
                    </div>
                </div>
            </div><hr>
            `
            fund_transfer_form_buttons_ap_accounting.insertAdjacentHTML("beforebegin", data);
            updateFunction ();
        }
        
        function updateFundSourceAmount(source, source2, source3, source4, source5) {
            updateAmount();
            const fundSourceValue = source.value;
            const fundAllocationValue = source3.value;
            let fundAmount = 0;
            source_of_fund += deduction_source_of_fund + additional_source_of_fund;
            trucking_fund += deduction_trucking_fund + additional_trucking_fund;
            hauling_fund += deduction_hauling_fund + additional_hauling_fund;
            diesel_fund += deduction_diesel_fund + additional_diesel_fund;
            gasoline_fund += deduction_gasoline_fund + additional_gasoline_fund;
            sir_ruels_fund += deduction_sir_ruels_fund + additional_sir_ruels_fund;
            scrap_sales += deduction_scrap_sales + additional_scrap_sales;
            mold_runner_sales += deduction_mold_runner_sales + additional_mold_runner_sales;
            truck_scale_collection += deduction_truck_scale_collection + additional_truck_scale_collection;
            house_collection += deduction_house_collection + additional_house_collection;
            representation_fund += deduction_representation_fund + additional_representation_fund;
            purchase_request_fund += deduction_representation_fund + additional_purchase_request_fund;
            switch (fundSourceValue) {
                case "SOURCE OF FUND":
                    fundAmount = source_of_fund - source5;
                    deduction_source_of_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "TRUCKING FUND":
                    fundAmount = trucking_fund - source5;
                    deduction_trucking_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "HAULING FUND":
                    fundAmount = hauling_fund - source5;
                    deduction_hauling_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "DIESEL FUND":
                    fundAmount = diesel_fund - source5;
                    deduction_diesel_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "GASOLINE FUND":
                    fundAmount = gasoline_fund - source5;
                    deduction_gasoline_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "SIR RUEL'S FUND":
                    fundAmount = sir_ruels_fund - source5;
                    deduction_sir_ruels_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "SCRAP SALES":
                    fundAmount = scrap_sales - source5;
                    deduction_scrap_sales -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "MOLD RUNNER SALES":
                    fundAmount = mold_runner_sales - source5;
                    deduction_mold_runner_sales -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "TRUCK SCALE COLLECTION":
                    fundAmount = truck_scale_collection - source5;
                    deduction_truck_scale_collection -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "HOUSE COLLECTION":
                    fundAmount = house_collection - source5;
                    deduction_house_collection -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "REPRESENTATION FUND":
                    fundAmount = representation_fund - source5;
                    deduction_representation_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "PURCHASE REQUEST FUND":
                    fundAmount = purchase_request_fund - source5;
                    deduction_purchase_request_fund -= source5;
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
            switch (fundAllocationValue) {
                case "SOURCE OF FUND":
                    additional_source_of_fund += source5;
                    break;
                case "TRUCKING FUND":
                    additional_trucking_fund += source5;
                    break;
                case "HAULING FUND":
                    additional_hauling_fund += source5;
                    break;
                case "DIESEL FUND":
                    additional_diesel_fund += source5;
                    break;
                case "GASOLINE FUND":
                    additional_gasoline_fund += source5;
                    break;
                case "SIR RUEL'S FUND":
                    additional_sir_ruels_fund += source5;
                    break;
                case "SCRAP SALES":
                    additional_scrap_sales += source5;
                    break;
                case "MOLD RUNNER SALES":
                    additional_mold_runner_sales += source5;
                    break;
                case "TRUCK SCALE COLLECTION":
                    additional_truck_scale_collection += source5;
                    break;
                case "HOUSE COLLECTION":
                    additional_house_collection += source5;
                    break;
                case "REPRESENTATION FUND":
                    additional_representation_fund += source5;
                    break;
                case "PURCHASE REQUEST FUND":
                    additional_purchase_request_fund += source5;
                    break;
            }
            source3.value = fundAmount.toFixed(2);
            source3.style.display = "flex";
        }
        function updateFundSourceAmount2(source, source2, source3, source4, source5, source6) {
            updateAmount();
            const fundSourceValue = source.value;
            const fundAllocationValue = source6.value;
            let fundAmount = 0;
            source_of_fund += deduction_source_of_fund + additional_source_of_fund;
            trucking_fund += deduction_trucking_fund + additional_trucking_fund;
            hauling_fund += deduction_hauling_fund + additional_hauling_fund;
            diesel_fund += deduction_diesel_fund + additional_diesel_fund;
            gasoline_fund += deduction_gasoline_fund + additional_gasoline_fund;
            sir_ruels_fund += deduction_sir_ruels_fund + additional_sir_ruels_fund;
            scrap_sales += deduction_scrap_sales + additional_scrap_sales;
            mold_runner_sales += deduction_mold_runner_sales + additional_mold_runner_sales;
            truck_scale_collection += deduction_truck_scale_collection + additional_truck_scale_collection;
            house_collection += deduction_house_collection + additional_house_collection;
            representation_fund += deduction_representation_fund + additional_representation_fund;
            switch (fundSourceValue) {
                case "SOURCE OF FUND":
                    fundAmount = source_of_fund;
                    deduction_source_of_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "TRUCKING FUND":
                    fundAmount = trucking_fund;
                    deduction_trucking_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "HAULING FUND":
                    fundAmount = hauling_fund;
                    deduction_hauling_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "DIESEL FUND":
                    fundAmount = diesel_fund;
                    deduction_diesel_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "GASOLINE FUND":
                    fundAmount = gasoline_fund;
                    deduction_gasoline_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "SIR RUEL'S FUND":
                    fundAmount = sir_ruels_fund;
                    deduction_sir_ruels_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "SCRAP SALES":
                    fundAmount = scrap_sales;
                    deduction_scrap_sales -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "MOLD RUNNER SALES":
                    fundAmount = mold_runner_sales;
                    deduction_mold_runner_sales -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "TRUCK SCALE COLLECTION":
                    fundAmount = truck_scale_collection;
                    deduction_truck_scale_collection -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "HOUSE COLLECTION":
                    fundAmount = house_collection;
                    deduction_house_collection -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "REPRESENTATION FUND":
                    fundAmount = representation_fund;
                    deduction_representation_fund -= source5;
                    source2.style.display = "block";
                    source4.style.display = "none";
                    break;
                case "PURCHASE REQUEST FUND":
                    fundAmount = purchase_request_fund - source5;
                    deduction_purchase_request_fund -= source5;
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
            switch (fundAllocationValue) {
                case "SOURCE OF FUND":
                    additional_source_of_fund += parseFloat(source5);
                    break;
                case "TRUCKING FUND":
                    additional_trucking_fund += parseFloat(source5);
                    break;
                case "HAULING FUND":
                    additional_hauling_fund += parseFloat(source5);
                    break;
                case "DIESEL FUND":
                    additional_diesel_fund += parseFloat(source5);
                    break;
                case "GASOLINE FUND":
                    additional_gasoline_fund += parseFloat(source5);
                    break;
                case "SIR RUEL'S FUND":
                    additional_sir_ruels_fund += parseFloat(source5);
                    break;
                case "SCRAP SALES":
                    additional_scrap_sales += parseFloat(source5);
                    break;
                case "MOLD RUNNER SALES":
                    additional_mold_runner_sales += parseFloat(source5);
                    break;
                case "TRUCK SCALE COLLECTION":
                    additional_truck_scale_collection += parseFloat(source5);
                    break;
                case "HOUSE COLLECTION":
                    additional_house_collection += parseFloat(source5);
                    break;
                case "REPRESENTATION FUND":
                    additional_representation_fund += parseFloat(source5);
                    break;
                case "PURCHASE REQUEST FUND":
                    additional_purchase_request_fund += source5;
                    break;
            }
            source3.value = fundAmount.toFixed(2);
            source3.style.display = "flex";
        }

        function updateFunction(){
            const data_ap_accounting = fund_transfer_form_ap_accounting.querySelectorAll("#data");
            data_ap_accounting.forEach((data, index) => {
                const fund_source_ap_accounting = data.querySelector(`#fund_source${index + 1}`);
                const fund_allocation_ap_accounting = data.querySelector(`#fund_allocation${index + 1}`);
                const fund_source_amount_ap_accounting = data.querySelector(`#fund_source_amount${index + 1}`);
                const fund_allocation_amount_ap_accounting = data.querySelector(`#fund_allocation_amount${index + 1}`);
                const fund_source_amount_container_ap_accounting = data.querySelector(`#fund_source_amount_container${index + 1}`);
                const fund_allocation_amount_container_ap_accounting = data.querySelector(`#fund_allocation_amount_container${index + 1}`);
                const fund_source_other_details_ap_accounting = data.querySelector(`#fund_source_other_details_container${index + 1}`);
                const fund_allocation_other_details_ap_accounting = data.querySelector(`#fund_allocation_other_details_container${index + 1}`);
                const fund_amount_ap_accounting = data.querySelector(`#fund_amount${index + 1}`);
                fund_source_ap_accounting.addEventListener("change", function() {
                    updateFundSourceAmount(fund_source_ap_accounting, fund_source_amount_container_ap_accounting, fund_source_amount_ap_accounting, fund_source_other_details_ap_accounting, fund_amount_ap_accounting.value);
                });
                
                fund_allocation_ap_accounting.addEventListener("change", function() {
                    updateFundSourceAmount(fund_allocation_ap_accounting, fund_allocation_amount_container_ap_accounting, fund_allocation_amount_ap_accounting, fund_allocation_other_details_ap_accounting, fund_amount_ap_accounting.value);
                });
                fund_amount_ap_accounting.addEventListener("change", function() {
                    updateFundSourceAmount2(fund_source_ap_accounting, fund_source_amount_container_ap_accounting, fund_source_amount_ap_accounting, fund_source_other_details_ap_accounting, fund_amount_ap_accounting.value, fund_allocation_ap_accounting);
                });
                const numberInputs = document.querySelectorAll('input[type="number"]');
    
                // Loop through each input and set the "step" attribute
                numberInputs.forEach(input => {
                    input.setAttribute('step', '0.01'); // Set the desired step value
                });
            })
        }
        
        const numberInputs = document.querySelectorAll('input[type="number"]');
        // Loop through each input and set the "step" attribute
        numberInputs.forEach(input => {
            input.setAttribute('step', '0.01'); // Set the desired step value
        });

        // FORM GENERATOR
        // frf_data_list
        const fund_request_form_button_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_request_form_button");
        const fund_request_form_id_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#fund_request_form_id");
        const add_item_button2_ap_accounting = fund_request_form_id_ap_accounting.querySelector("#add_item_button");
        const remove_item_button2_ap_accounting = fund_request_form_id_ap_accounting.querySelector("#remove_item_button");
        const request_list_container_ap_accounting = fund_request_form_id_ap_accounting.querySelector("#request_list_container");
        const request_list_counter_ap_accounting = fund_request_form_id_ap_accounting.querySelector("#request_list_counter");
        const request_history_list_ap_accounting = fund_transfer_form_ap_accounting.querySelector("#request_history_list");

        const frf_form_no_ap_accounting = fund_request_form_id_ap_accounting.querySelector("#frf_form_no1");
        var last_row = frf_data_list.content.length -1;        
        var data_info = frf_data_list.content[last_row][findTextInArray(frf_data_list, "FRF #")];
        var data_counter = data_info.substring(9,13);
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(4,7);
        if(last_counter_year == current_year){
            frf_form_no_ap_accounting.value = `FRF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            frf_form_no_ap_accounting.value = `FRF${current_year}${month}${data_counter}`;
        }
        
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

        function generateData(fund_source = "ALL", fund_allocation = "ALL"){
            var data = "";
            var data_value_counter = 0;
            var transaction_date
            for(let x = ftf_data_list.content.length -1; x >= 1 ; x--){
                if(ftf_data_list.content[x][findTextInArray(ftf_data_list, "DATE")] == ""){
                    transaction_date = ftf_data_list.content[x][findTextInArray(ftf_data_list, "CREATED AT")]
                }else{
                    transaction_date = ftf_data_list.content[x][findTextInArray(ftf_data_list, "DATE")]
                }
                if(fund_source == "ALL" && fund_allocation == "ALL"){
                    data_value_counter += 1;
                    data += `
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "FTF # / FORM #")]}</td>
                        <td>${date_decoder(transaction_date)}</td>
                        <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "FUND SOURCE")]}</td>
                        <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "FUND ALLOCATION")]}</td>
                        <td>${formatNumber(ftf_data_list.content[x][findTextInArray(ftf_data_list, "AMOUNT")])}</td>
                        <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "SUBMITTED BY")]}</td>
                        <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "REMARKS")]}</td>
                    </tr>
                    `
                }
                else if(fund_source != "ALL" && fund_allocation == "ALL"){
                    if(ftf_data_list.content[x][findTextInArray(ftf_data_list, "FUND SOURCE")] == fund_source){
                        data_value_counter += 1;
                        data += `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "FTF # / FORM #")]}</td>
                            <td>${date_decoder(transaction_date)}</td>
                            <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "FUND SOURCE")]}</td>
                            <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "FUND ALLOCATION")]}</td>
                            <td>${formatNumber(ftf_data_list.content[x][findTextInArray(ftf_data_list, "AMOUNT")])}</td>
                            <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "SUBMITTED BY")]}</td>
                            <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "REMARKS")]}</td>
                        </tr>
                        `
                    }
                }
                else if(fund_source == "ALL" && fund_allocation != "ALL"){
                    if(ftf_data_list.content[x][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == fund_allocation){
                        data_value_counter += 1;
                        data += `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "FTF # / FORM #")]}</td>
                            <td>${date_decoder(transaction_date)}</td>
                            <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "FUND SOURCE")]}</td>
                            <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "FUND ALLOCATION")]}</td>
                            <td>${formatNumber(ftf_data_list.content[x][findTextInArray(ftf_data_list, "AMOUNT")])}</td>
                            <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "SUBMITTED BY")]}</td>
                            <td>${ftf_data_list.content[x][findTextInArray(ftf_data_list, "REMARKS")]}</td>
                        </tr>
                        `
                    }
                }
            }
            transfer_history_list_ap_accounting.innerHTML = data;
        }
        generateData();

        filter_fund_source_ap_accounting.addEventListener("click", () => {
            if(filter_tab_fund_source_ap_accounting.style.display == "block"){
                filter_tab_fund_source_ap_accounting.style.display = "none"
            }
            else{
                filter_tab_fund_source_ap_accounting.style.display = "block"
            }
        })
        filter_fund_allocation_ap_accounting.addEventListener("click", () => {
            if(filter_tab_fund_allocation_ap_accounting.style.display == "block"){
                filter_tab_fund_allocation_ap_accounting.style.display = "none"
            }
            else{
                filter_tab_fund_allocation_ap_accounting.style.display = "block"
            }
        })

        filter_tab_fund_source_ap_accounting.addEventListener("change", () => {
            var filter_fund_source = filter_tab_fund_source_ap_accounting.value || "ALL";
            var filter_fund_allocation = filter_tab_fund_allocation_ap_accounting.value || "ALL";
            generateData(filter_fund_source, filter_fund_allocation);
        })
        filter_tab_fund_allocation_ap_accounting.addEventListener("change", () => {
            var filter_fund_source = filter_tab_fund_source_ap_accounting.value || "ALL";
            var filter_fund_allocation = filter_tab_fund_allocation_ap_accounting.value || "ALL";
            generateData(filter_fund_source, filter_fund_allocation);
        })

        var data = "";
        var data_value_counter = 0;
        for(let x = frf_data_list.content.length -1; x >= 1 ; x--){
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

        // incident report form
        const irf_form_no = document.getElementById("irf_form_no");
        var last_row = irf_data_list.content.length -1;        
        var data_info = irf_data_list.content[last_row][findTextInArray(irf_data_list, "IRF #")];
        var data_counter = data_info.substring(9,13);
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(3,7);
        if(last_counter_year == current_year){
            irf_form_no.value = `IRF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            irf_form_no.value = `IRF${current_year}${month}${data_counter}`;
        }


        const incident_report_form = document.querySelector("#incident_report_form");
        const person_involved_containers = incident_report_form.querySelector("#person_involved_containers");
        const irf_counter_incident_report_form = incident_report_form.querySelector("#irf_counter");
        const add_tf_button_incident_report_form = incident_report_form.querySelector("#add_tf_button");
        const remove_tf_button_incident_report_form = incident_report_form.querySelector("#add_tf_button");
        const form_tab_incident_report_form = incident_report_form.querySelector("#form_tab");
        const incident_report_form_button_incident_report_form = incident_report_form.querySelector("#incident_report_form_button");
        const incident_history_list_incident_report_form = incident_report_form.querySelector("#incident_history_list");
        var employee_name = [];
        var employee_department = [];
        var employee_designation = [];
        for(let x = 1; x < employee_data_list.content.length; x++){
            if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
                var gender = employee_data_list.content[x][findTextInArray(employee_data_list, "GENDER")];
                if(gender == "MALE"){
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "AFFIX")]}`
                    employee_name.push(full_name);
                    employee_department.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DEPARTMENT")]);
                    employee_designation.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DESIGNATION")]);
                }
                else{
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[x][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                    employee_name.push(full_name);
                    employee_department.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DEPARTMENT")]);
                    employee_designation.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DESIGNATION")]);
                }
            }
        }
        function addPersonInvolved(){
            const person_involved_container = person_involved_containers.querySelector(`#person_involved_container${irf_counter_incident_report_form.value}`);
            var search_wrapper2 = person_involved_container.querySelector(`#search_irf_client${irf_counter_incident_report_form.value}`);
            var irf_department = person_involved_container.querySelector(`#irf_department${irf_counter_incident_report_form.value}`);
            var irf_designation = person_involved_container.querySelector(`#irf_designation${irf_counter_incident_report_form.value}`);
            var irf_client = search_wrapper2.querySelector(`#irf_client${irf_counter_incident_report_form.value}`);
            var sugg_box2 = search_wrapper2.querySelector(".autocom_box");
            irf_client.onkeyup = (e) => {
                let user_data = e.target.value;
                let empty_array = [];
                if (user_data) {
                    empty_array = employee_name.filter((data) => {
                        return data.toLocaleLowerCase().includes(user_data.toLocaleLowerCase());
                    });
                    empty_array = empty_array.map((data) => {
                        return '<li>' + data + '</li>';
                    });
                    search_wrapper2.classList.add("active");
                    show_suggestions2(empty_array);
                } else {
                    search_wrapper2.classList.remove("active");
                }
            };
            sugg_box2.addEventListener("click", (e) => {
                if (e.target.tagName === "LI") {
                    select2(e.target.innerHTML);
                }
            });
            function select2(element) {
                let select_user_data = element;
                search_wrapper2.classList.remove("active");
                irf_client.value = select_user_data;
                irf_department.value = employee_department[findTextInArray2(employee_name, select_user_data)];
                employee_department.splice(findTextInArray2(employee_name, select_user_data), 1);
                irf_designation.value = employee_designation[findTextInArray2(employee_name, select_user_data)];
                employee_designation.splice(findTextInArray2(employee_name, select_user_data), 1);
                employee_name = employee_name.filter(item => item !== select_user_data);
            }
            function show_suggestions2(list) {
                let list_data;
                if (!list.length) {
                    user_value = irf_client.value;
                    list_data = '<li>' + user_value + '</li>';
                } else {
                    list_data = list.join("");
                }
                sugg_box2.innerHTML = list_data;
            }
        }
        addPersonInvolved();
        add_tf_button_incident_report_form.addEventListener("click", () => {
            irf_counter_incident_report_form.value = parseInt(irf_counter_incident_report_form.value) + 1;
            var data = `
            <div id="person_involved_container${irf_counter_incident_report_form.value}" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                <div class="wrapper">
                    <label for="irf_client${irf_counter_incident_report_form.value}">
                        <i class="fa-solid fa-user"></i>
                        Person Involved
                    </label><br>
                    <div class="search_input" id="search_irf_client${irf_counter_incident_report_form.value}">
                        <input type="text" name="irf_client${irf_counter_incident_report_form.value}" id="irf_client${irf_counter_incident_report_form.value}" autocomplete="off" class="form-control" required placeholder="Type to Search Client Name...">
                        <div class="autocom_box">
                        </div>
                        <div class="icon"><i class="fas fa-search"></i></div>
                    </div>
                </div>
                <div>
                    <label for="irf_department${irf_counter_incident_report_form.value}">
                        <i class="fa-solid fa-building-user"></i>
                        Department
                    </label><br>
                    <input type="text" id="irf_department${irf_counter_incident_report_form.value}" autocomplete="off" name="irf_department${irf_counter_incident_report_form.value}" class="form-control" required readonly placeholder="Input Department..." style="height: 55px !important;">    
                </div>
                <div>
                    <label for="irf_designation${irf_counter_incident_report_form.value}">
                        <i class="fa-solid fa-id-card"></i>
                        Designation
                    </label><br>
                    <input type="text" id="irf_designation${irf_counter_incident_report_form.value}" autocomplete="off" name="irf_designation${irf_counter_incident_report_form.value}" class="form-control" required readonly placeholder="Input Designation..." style="height: 55px !important;">   
                </div>
            </div>
            `
            person_involved_containers.insertAdjacentHTML("beforeend", data);
            remove_tf_button_incident_report_form.style.display = "block";
            addPersonInvolved();
        })
        // incident_history_list
        var incident_history_data_value = "";
        var incident_history_data_value_counter = 1;

        for(let x = 1; x < irf_data_list.content.length; x++){
            const resultArray = (irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]).split(" || ");
            var data_value2 = [];
            for(let z = 0; z < resultArray.length; z++){
                for(let y = 1; y < employee_data_list.content.length; y++){
                    if(employee_data_list.content[y][findTextInArray(employee_data_list, "EMPLOYEE ID")] == resultArray[z]){
                        var gender = employee_data_list.content[y][findTextInArray(employee_data_list, "GENDER")];
                        if(gender == "MALE"){
                            var full_name = `${employee_data_list.content[y][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[y][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[y][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[y][findTextInArray(employee_data_list, "AFFIX")]}`
                            data_value2.push(full_name);
                        }
                        else{
                            var full_name = `${employee_data_list.content[y][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[y][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[y][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[y][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                            data_value2.push(full_name);
                        }
                    }
                }
            }
            const concatenatedString = data_value2.join(" || ")
            incident_history_data_value += `
            <tr>
                <td>${incident_history_data_value_counter}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "IRF #")]}</td>
                <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF INCIDENT")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF INCIDENT")])}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DEPARTMENT")]}</td>
                <td>${concatenatedString}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DESIGNATION")]}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "LOCATION")]}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT DETAILS")]}</td>
                <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF REPORT")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF REPORT")])}</td>
                <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF INCIDENT")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF INCIDENT")]),date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF REPORT")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF REPORT")]))}</td>
            </tr>
            `
            incident_history_data_value_counter += 1;
        }
        incident_history_list_incident_report_form.innerHTML = incident_history_data_value

        incident_report_form_button_incident_report_form.addEventListener("click", () => {
            if(form_tab_incident_report_form.style.display == "block"){
                form_tab_incident_report_form.style.display = "none";
            }
            else{
                form_tab_incident_report_form.style.display = "block";
            }
        })

        function findEmployeeName(employee_id){
            var employee_name = "";
            for(let c = 1; c < employee_data_list.content.length; c++){
                if(employee_id == employee_data_list.content[c][findTextInArray(employee_data_list, "EMPLOYEE ID")]){
                    var gender = employee_data_list.content[c][findTextInArray(employee_data_list, "GENDER")];
                    if(gender == "MALE"){
                        employee_name = `${employee_data_list.content[c][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[c][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[c][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[c][findTextInArray(employee_data_list, "AFFIX")]}`
                    }
                    else{
                        employee_name = `${employee_data_list.content[c][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[c][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[c][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[c][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                    }
                    break
                }
                else{
                    employee_name = employee_id;
                }
            }
            return employee_name
        }
        function findEmployeeName2(employee_id){
            var employee_name = "";
            for(let c = 1; c < employee_data_list.content.length; c++){
                if(employee_id == employee_data_list.content[c][findTextInArray(employee_data_list, "EMPLOYEE ID")]){
                    var gender = employee_data_list.content[c][findTextInArray(employee_data_list, "GENDER")];
                    if(gender == "MALE"){
                        employee_name = `${employee_data_list.content[c][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[c][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[c][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[c][findTextInArray(employee_data_list, "AFFIX")]} - ADVANCE SALARY`
                    }
                    else{
                        employee_name = `${employee_data_list.content[c][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[c][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[c][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[c][findTextInArray(employee_data_list, "SPOUSE NAME")]} - ADVANCE SALARY`
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
        function findWasteCode2(waste_id){
            var waste_code = "";
            for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                if(waste_id == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                    waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]);
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
