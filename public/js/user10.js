document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const vehicle_log_response_promise = fetch('https://script.google.com/macros/s/AKfycbwOVO1qi9ac0YojlrZUh-XMYMe_gAeO2bg_wU_lSRdBkLgmJKQuzQuq41lzvSOjKfzA/exec');
        const ftf_response_promise = fetch('https://script.google.com/macros/s/AKfycby_KPLGaMLvzccQFKwKCZVrI1mkOzVDh7cySezC_OiZW6YVOR4mC5XkNbwllOe_Ua6TGA/exec');
        const frf_response_promise = fetch('https://script.google.com/macros/s/AKfycbz1BRgSEEjm-WwwEViGKbtqG_HodoU2O-Bw1DMySKnOytZJVtq3XmfOc4mbVhnc7Rke/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');
        const cod_response_promise = fetch('https://script.google.com/macros/s/AKfycbzgiOuXizUVviCsLVfihqYN9HJ3pyNr7ElHoCl3JGkbtQnChnm2U42yQuLd4UMH0ci5/exec');
        const bpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyux0GBj9tk6quRz46IkXa0VemEDAi-v2iEHx7C_6OFi416ERkv_BFtKqBmbw-bxaaiFQ/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');
        const idf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyXPvq606vmfSlFG3nVjYuJLN8Jnv4BFGbhEmDp6e4wLL1kUQVa4kIi2dGGRKuSklT2bg/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            vehicle_response,
            vehicle_log_response,
            ftf_response,
            frf_response,
            mtf_response,
            ltf_response,
            wcf_response,
            sf_response,
            tpf_response,
            cod_response,
            bpf_response,
            irf_response,
            idf_response,
            qlf_response,
        ] = await Promise.all([
            username_response_promise,
            type_of_waste_response_promise,
            client_list_response_promise,
            vehicle_response_promise,
            vehicle_log_response_promise,
            ftf_response_promise,
            frf_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise,
            tpf_response_promise,
            cod_response_promise,
            bpf_response_promise,
            irf_response_promise,
            idf_response_promise,
            qlf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const vehicle_data  = await vehicle_response.json();
        const vehicle_log_data  = await vehicle_log_response.json();
        const ftf_data_list  = await ftf_response.json();
        const frf_data_list  = await frf_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
        const tpf_data_list  = await tpf_response.json();
        const cod_data_list  = await cod_response.json();
        const bpf_data_list  = await bpf_response.json();
        const irf_data_list  = await irf_response.json();
        const idf_data_list  = await idf_response.json();
        const qlf_data_list  = await qlf_response.json();

        // Code that depends on the fetched data
        // username_data
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        // const users = document.querySelectorAll("#user");
        const irf_user = document.getElementById("irf_user");

        // users.forEach(user => {user.value = username_data_list.content[10][findTextInArray(username_data_list, "NAME")]})
        irf_user.value = username_data_list.content[10][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[10][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[10][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[10][findTextInArray(username_data_list, "DEPARTMENT")];


        // ap_accounting_dashboard
        const ap_accounting_dashboard = document.querySelector("#accounting_head_dashboard");

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

        // for (let i = 1; i < tbf_data_list.content.length; i++) {
        //     if (!ltf_tbf_transaction_ap_accounting.includes(tbf_data_list.content[i][2])) {
        //         ltf_tbf_transaction_ap_accounting.push(tbf_data_list.content[i][2]);
        //     }
        // }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const pending_list_ltf_ap_accounting = ltf_transaction_ap_accounting.filter((element) => !ltf_tbf_transaction_ap_accounting.includes(element));
        
        
        // frf_data_list
        const request_history_list_ap_accounting = document.querySelector("#request_history_list");

        // pending_list
        var data = "";
        var data_value_counter = 0;
        for(let x = 1; x < frf_data_list.content.length; x++){
            data_value_counter += 1;
            var button = "";
            var button2 = "";
            var button3 = "";
            if(frf_data_list.content[x][6] == "" && frf_data_list.content[x][4] !== "DISAPPROVED"){
                button = `
                <form action="https://script.google.com/macros/s/AKfycbwi5iYRP9xlinY9nS9YBRW7Alex9LdImCWhKBda6VtrIiDmPvH72AUlW-CgEPNwJCg/exec" method="post">
                    <input type="hidden" name="frf_no" id="frf_no" value="${frf_data_list.content[x][0]}">
                    <input type="hidden" name="fund_allocation" id="fund_allocation" value="${frf_data_list.content[x][1]}">
                    <input type="hidden" name="fund_amount" id="fund_amount" value="${frf_data_list.content[x][2]}">
                    <input type="hidden" name="purpose" id="purpose" value="${frf_data_list.content[x][3]}">
                    <input type="hidden" name="submitted_by" id="submitted_by" value="${frf_data_list.content[x][5]}">
                    <input type="hidden" name="timestamp" id="timestamp" value="${frf_data_list.content[x][8]}">
                    <button type="submit" style="background-color: black !important; padding:0; border: 1px solid black; color: #ffbf00 !important;">
                        <i class="fa-solid fa-thumbs-up"></i>
                    </button>
                </form>
                `
            }
            if(frf_data_list.content[x][6] == "" && frf_data_list.content[x][4] !== "DISAPPROVED"){
                button2 = `
                <form action="https://script.google.com/macros/s/AKfycbzq-UG0qBDytOpODyfXMWVKEPYyKHKlfBkqTOm2Aje_JiYeSicB4i6aoxE97Zc9MSyTSQ/exec" method="post">
                    <input type="hidden" name="frf_no" id="frf_no" value="${frf_data_list.content[x][0]}">
                    <input type="hidden" name="fund_allocation" id="fund_allocation" value="${frf_data_list.content[x][1]}">
                    <input type="hidden" name="fund_amount" id="fund_amount" value="${frf_data_list.content[x][2]}">
                    <input type="hidden" name="purpose" id="purpose" value="${frf_data_list.content[x][3]}">
                    <input type="hidden" name="submitted_by" id="submitted_by" value="${frf_data_list.content[x][5]}">
                    <input type="hidden" name="timestamp" id="timestamp" value="${frf_data_list.content[x][8]}">
                    <button type="submit" style="background-color: black !important; padding:0; border: 1px solid black; color: #ffbf00 !important;">
                        <i class="fa-solid fa-thumbs-down"></i>
                    </button>
                </form>
                `
            }
            if(frf_data_list.content[x][6] == "" && frf_data_list.content[x][4] !== "DISAPPROVED"){
                button3 = `
                <button type="button" id="amount_tab_button" style="background-color: black !important; padding:0; border: 1px solid black; color: #ffbf00 !important;">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <input type="hidden" name="frf_no" id="frf_no" value="${frf_data_list.content[x][0]}">
                </button>
                `
            }
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
                <td>${button}</td>
                <td class="px-0">${button2}</td>
                <td>${button3}</td>
            </tr>
            `
        }
        request_history_list_ap_accounting.innerHTML = data;

        const amount_tab_buttons = document.querySelectorAll("#amount_tab_button");
        const amount_tab = document.getElementById("amount_tab");
        const frf_no =  amount_tab.querySelector("#frf_no");
        const fund_allocation =  amount_tab.querySelector("#fund_allocation");
        const fund_amount =  amount_tab.querySelector("#fund_amount");
        const purpose =  amount_tab.querySelector("#purpose");
        const submitted_by =  amount_tab.querySelector("#submitted_by");
        const timestamp =  amount_tab.querySelector("#timestamp");
        const close_button =  amount_tab.querySelector("#close_button");

        amount_tab_buttons.forEach(amount_tab_button => {
            amount_tab_button.addEventListener("click", () => {
                if(amount_tab.style.display == "block"){
                    amount_tab.style.display = "none";
                }
                else{
                    amount_tab.style.display = "block";
                }
                const input_value = amount_tab_button.querySelector("input");
                for(let x = 1; x < frf_data_list.content.length; x++){
                    if(input_value.value == frf_data_list.content[x][0]){
                        frf_no.value = frf_data_list.content[x][0]
                        fund_allocation.value = frf_data_list.content[x][1]
                        console.log("🚀 ~ file: user10.js:283 ~ amount_tab_button.addEventListener ~ fund_allocation.value:", fund_allocation.value)
                        fund_amount.value = frf_data_list.content[x][2]
                        purpose.value = frf_data_list.content[x][3]
                        submitted_by.value = frf_data_list.content[x][5]
                        timestamp.value = frf_data_list.content[x][8]
                    }
                }
            })
            close_button.addEventListener("click", () => {
                amount_tab.style.display = "none";
            })
        })

        // marketing_dashboard
        const booked_transactions_marketing = document.getElementById("booked_transactions");
        const on_hauling_marketing = document.getElementById("on_hauling");
        const pending_marketing = document.getElementById("pending");
        const received_marketing = document.getElementById("received");
        const pending_list_marketing = document.getElementById("pending_list");
        const for_logistics_pending_marketing = document.getElementById("for_logistics_pending");
        const for_logistics_on_haul_marketing = document.getElementById("for_logistics_on_haul");
        const for_logistics_received_marketing = document.getElementById("for_logistics_received");
        const for_receiving_pending_marketing = document.getElementById("for_receiving_pending");
        const for_receiving_received_marketing = document.getElementById("for_receiving_received");
        var for_logistics_pending_counter_marketing = 0;
        var for_logistics_on_haul_counter_marketing = 0;
        var for_logistics_received_counter_marketing = 0;
        var for_receiving_pending_counter_marketing = 0;
        var for_receiving_received_counter_marketing = 0;
        var mtf_transaction_marketing = []; // Variable containing existing elements
        var mtf_ltf_transaction_marketing = []; // Variable containing existing elements
        var mtf_transaction_logistic_transaction_marketing = []; // Variable containing existing elements
        var mtf_transaction_receiving_transaction_marketing = []; // Variable containing existing elements
        var ltf_transaction_marketing = []; // Variable containing existing elements
        var ltf_wcf_transaction_marketing = []; // Variable containing existing elements
        
        for (let i = 1; i < mtf_data_list.content.length; i++) {
            if (!mtf_transaction_marketing.includes(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")])) {
                mtf_transaction_marketing.push(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")]);
            }
            if(mtf_data_list.content[i][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS"){
                if (!mtf_transaction_logistic_transaction_marketing.includes(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")])) {
                    mtf_transaction_logistic_transaction_marketing.push(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")]);
                }
            }
            if(mtf_data_list.content[i][findTextInArray(mtf_data_list, "SUBMIT TO")] == "RECEIVING"){
                if (!mtf_transaction_receiving_transaction_marketing.includes(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")])) {
                    mtf_transaction_receiving_transaction_marketing.push(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")]);
                }
            }
        }
        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!mtf_ltf_transaction_marketing.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "MTF #")])) {
                mtf_ltf_transaction_marketing.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "MTF #")]);
            }
            if (!ltf_transaction_marketing.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")])) {
                ltf_transaction_marketing.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]);
            }
        }

        for (let i = 1; i < wcf_data_list.content.length; i++) {
            if (!ltf_wcf_transaction_marketing.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF #")])) {
                ltf_wcf_transaction_marketing.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF #")]);
            }
        }

        booked_transactions_marketing.innerText = mtf_transaction_marketing.length;

        var data_value = "";
        var data_value_counter = 1;
        for(let j = 1; j < mtf_data_list.content.length; j++){
            var status = "PENDING";
            // for logistics
            if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS"){
                for(let k = 1; k < ltf_data_list.content.length; k++){
                    if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")] == ltf_data_list.content[k][findTextInArray(ltf_data_list, "MTF #")]){
                        status = "ON HAULING";
                        for_logistics_on_haul_counter_marketing += 1;
                        for_logistics_pending_counter_marketing -= 1;
                        for(let m = 1; m < wcf_data_list.content.length; m++){
                            if(ltf_data_list.content[k][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                status = "RECEIVED";
                                for_logistics_received_counter_marketing += 1;
                                for_logistics_on_haul_counter_marketing -= 1;
                            }
                        }
                    }
                }
                for_logistics_pending_counter_marketing += 1;
            }
            // for receiving
            else if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "RECEIVING"){
                for(let m = 1; m < wcf_data_list.content.length; m++){
                    if((wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).slice(0,3) == "MTF"){
                        if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")] == wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                            status = "RECEIVED";
                            for_receiving_received_counter_marketing += 1;
                            for_receiving_pending_counter_marketing -= 1;
                        }
                    }
                }
                for_receiving_pending_counter_marketing += 1;
            }
            data_value +=`
            <tr>
                <td>${data_value_counter}</td>
                <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")]}</td>
                <td>${date_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])} /<br> ${time_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING TIME")])}</td>
                <td>${findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")])}</td>
                <td>${findWasteCode(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                <td>${findWasteName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")], (mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")]))}</td>
                <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")]}</td>
                <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")]}</td>
                <td>${status}</td>
            </tr>
            `
            data_value_counter += 1;
        }
        pending_list_marketing.innerHTML = data_value;

        for_logistics_pending_marketing.innerText = for_logistics_pending_counter_marketing;
        for_logistics_on_haul_marketing.innerText = for_logistics_on_haul_counter_marketing;
        for_logistics_received_marketing.innerText = for_logistics_received_counter_marketing;
        for_receiving_pending_marketing.innerText = for_receiving_pending_counter_marketing;
        for_receiving_received_marketing.innerText = for_receiving_received_counter_marketing;
        on_hauling_marketing.innerText = for_logistics_on_haul_counter_marketing;
        pending_marketing.innerText = for_logistics_pending_counter_marketing + for_receiving_pending_counter_marketing;
        received_marketing.innerText = for_logistics_received_counter_marketing + for_receiving_received_counter_marketing;

        // billing_dashboard
        const certified_counter_billing = document.querySelector("#billing_dashboard #certified_counter");
        const pending_counter_billing = document.querySelector("#billing_dashboard #pending_counter");
        const billed_counter_billing = document.querySelector("#billing_dashboard #billed_counter");
        const unsorted_list_billing = document.querySelector("#billing_dashboard #unsorted_list");
        var sf_tpf_transaction_counter_billing = 0;
        var sf_transaction_counter_billing = 0;
        let sf_transaction_billing = []; // Variable containing existing elements
        let sf_tpf_transaction_billing = []; // Variable containing existing elements

        for (let i = 1; i < cod_data_list.content.length; i++) {
            if (!sf_transaction_billing.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")])) {
                sf_transaction_billing.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
                sf_transaction_counter_billing += 1
            }
        }

        for (let i = 1; i < bpf_data_list.content.length; i++) {
            if (!sf_tpf_transaction_billing.includes(bpf_data_list.content[i][findTextInArray(bpf_data_list, "COD #")])) {
                sf_tpf_transaction_billing.push(bpf_data_list.content[i][findTextInArray(bpf_data_list, "COD #")]);
                sf_tpf_transaction_counter_billing += 1
            }
        }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const newElements_billing = sf_transaction_billing.filter((element) => !sf_tpf_transaction_billing.includes(element));

        certified_counter_billing.innerText = sf_transaction_counter_billing;
        pending_counter_billing.innerText = sf_transaction_counter_billing - sf_tpf_transaction_counter_billing;
        billed_counter_billing.innerText = sf_tpf_transaction_counter_billing;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < newElements_billing.length; i++){
            for(let j = 1; j < cod_data_list.content.length; j++){
                if(newElements_billing[i] == cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")]}</td>
                        <td>${date_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "DATE OF CERTIFICATION")])}</td>
                        <td>${findClientName(cod_data_list.content[j][findTextInArray(cod_data_list, "CLIENT ID")])}</td>
                        <td>${findWasteCode(cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE ID")])}</td>
                        <td>${findWasteName(cod_data_list.content[j][findTextInArray(cod_data_list, "CLIENT ID")], cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE ID")])}</td>
                        <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "WEIGHT")]}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        unsorted_list_billing.innerHTML = data_value;            

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
        incident_history_list.innerHTML = incident_history_data_value

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
                    employee_name = employee_id == employee_data_list.content[c][findTextInArray(employee_data_list, "EMPLOYEE ID")]
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
