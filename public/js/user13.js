document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const vehicle_log_response_promise = fetch('https://script.google.com/macros/s/AKfycbwOVO1qi9ac0YojlrZUh-XMYMe_gAeO2bg_wU_lSRdBkLgmJKQuzQuq41lzvSOjKfzA/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');
        const cod_response_promise = fetch('https://script.google.com/macros/s/AKfycbzgiOuXizUVviCsLVfihqYN9HJ3pyNr7ElHoCl3JGkbtQnChnm2U42yQuLd4UMH0ci5/exec');
        const bpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyux0GBj9tk6quRz46IkXa0VemEDAi-v2iEHx7C_6OFi416ERkv_BFtKqBmbw-bxaaiFQ/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');
        const idf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyXPvq606vmfSlFG3nVjYuJLN8Jnv4BFGbhEmDp6e4wLL1kUQVa4kIi2dGGRKuSklT2bg/exec');

        const [
            username_response,
            vehicle_response,
            vehicle_log_response,
            mtf_response,
            ltf_response,
            wcf_response,
            sf_response,
            tpf_response,
            cod_response,
            bpf_response,
            irf_response,
            idf_response,
        ] = await Promise.all([
            username_response_promise,
            vehicle_response_promise,
            vehicle_log_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise,
            tpf_response_promise,
            cod_response_promise,
            bpf_response_promise,
            irf_response_promise,
            idf_response_promise,
        ]);

        const username_data  = await username_response.json();
        const vehicle_data  = await vehicle_response.json();
        const vehicle_log_data  = await vehicle_log_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
        const tpf_data_list  = await tpf_response.json();
        const cod_data_list  = await cod_response.json();
        const bpf_data_list  = await bpf_response.json();
        const irf_data_list  = await irf_response.json();
        const idf_data_list  = await idf_response.json();

        // Code that depends on the fetched data
        // username_data
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");

        user_sidebar.innerHTML = `<u>${username_data.content[13][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[13][4];

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
        var mtf_transaction_counter_marketing = 0;
        var mtf_ltf_transaction_counter_marketing = 0;
        var mtf_transaction_logistic_transaction_counter_marketing = 0;
        var mtf_transaction_receiving_transaction_counter_marketing = 0;
        var ltf_transaction_counter_marketing = 0;
        var ltf_wcf_transaction_counter_marketing = 0;
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
            if (!mtf_transaction_marketing.includes(mtf_data_list.content[i][1])) {
                mtf_transaction_marketing.push(mtf_data_list.content[i][1]);
                mtf_transaction_counter_marketing += 1
            }
            if(mtf_data_list.content[i][8] == "LOGISTICS"){
                if (!mtf_transaction_logistic_transaction_marketing.includes(mtf_data_list.content[i][1])) {
                    mtf_transaction_logistic_transaction_marketing.push(mtf_data_list.content[i][1]);
                    mtf_transaction_logistic_transaction_counter_marketing += 1
                }
            }
            if(mtf_data_list.content[i][8] == "RECEIVING"){
                if (!mtf_transaction_receiving_transaction_marketing.includes(mtf_data_list.content[i][1])) {
                    mtf_transaction_receiving_transaction_marketing.push(mtf_data_list.content[i][1]);
                    mtf_transaction_receiving_transaction_counter_marketing += 1
                }
            }
        }

        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!mtf_ltf_transaction_marketing.includes(ltf_data_list.content[i][2])) {
                mtf_ltf_transaction_marketing.push(ltf_data_list.content[i][2]);
                mtf_ltf_transaction_counter_marketing += 1
            }
            if (!ltf_transaction_marketing.includes(ltf_data_list.content[i][1])) {
                ltf_transaction_marketing.push(ltf_data_list.content[i][1]);
                ltf_transaction_counter_marketing += 1
            }
        }

        for (let i = 1; i < wcf_data_list.content.length; i++) {
            if (!ltf_wcf_transaction_marketing.includes(wcf_data_list.content[i][2])) {
                ltf_wcf_transaction_marketing.push(wcf_data_list.content[i][2]);
                ltf_wcf_transaction_counter_marketing += 1
            }
        }

        booked_transactions_marketing.innerText = mtf_transaction_counter_marketing

        var data_value = "";
        var data_value_counter = 1;
        for(let j = 1; j < mtf_data_list.content.length; j++){
            var status = "PENDING";
            // for logistics
            if(mtf_data_list.content[j][8] == "LOGISTICS"){
                for(let k = 1; k < ltf_data_list.content.length; k++){
                    if(mtf_data_list.content[j][1] == ltf_data_list.content[k][2]){
                        status = "ON HAULING";
                        for_logistics_on_haul_counter_marketing += 1;
                        for_logistics_pending_counter_marketing -= 1;
                        for(let m = 1; m < wcf_data_list.content.length; m++){
                            if(ltf_data_list.content[k][1] == wcf_data_list.content[m][2]){
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
            if(mtf_data_list.content[j][8] == "RECEIVING"){
                for(let m = 1; m < wcf_data_list.content.length; m++){
                    if((wcf_data_list.content[m][2]).slice(0,3) == "MTF"){
                        if(mtf_data_list.content[j][1] == wcf_data_list.content[m][2]){
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
                <td>${mtf_data_list.content[j][1]}</td>
                <td>${date_decoder(mtf_data_list.content[j][4])} /<br> ${time_decoder(mtf_data_list.content[j][5])}</td>
                <td>${mtf_data_list.content[j][2]}</td>
                <td>${mtf_data_list.content[j][3]}</td>
                <td>${mtf_data_list.content[j][6]}</td>
                <td>${mtf_data_list.content[j][8]}</td>
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

        // logistic_dashboard
        const booked_transactions_logistics = document.querySelector("#logistic_dashboard #booked_transactions");
        const on_hauling_transactions_logistics = document.querySelector("#logistic_dashboard #on_hauling_transactions");
        const hauled_transactions_logistics = document.querySelector("#logistic_dashboard #hauled_transactions");
        const pending_transactions_logistics = document.querySelector("#logistic_dashboard #pending_transactions");
        const ongoing_list_logistics = document.querySelector("#logistic_dashboard #ongoing_list");
        const pending_list_logistics = document.querySelector("#logistic_dashboard #pending_list");
        const vehicle_list_logistics = document.querySelector("#vehicle_list_section #vehicle_list");
        var mtf_transaction_logistics = [];
        var mtf_transaction_counter_logistics = 0;
        var mtf_ltf_transaction_logistics = [];
        var mtf_ltf_transaction_counter_logistics = 0;
        var ltf_transaction_logistics = [];
        var ltf_transaction_counter_logistics = 0;
        var ltf_wcf_transaction_logistics = [];
        var ltf_wcf_transaction_counter_logistics = 0;
        
        for (let i = 1; i < mtf_data_list.content.length; i++) {
            if(mtf_data_list.content[i][8] == "LOGISTICS"){
                if (!mtf_transaction_logistics.includes(mtf_data_list.content[i][1])) {
                    mtf_transaction_logistics.push(mtf_data_list.content[i][1]);
                    mtf_transaction_counter_logistics += 1
                }
            }
        }

        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!mtf_ltf_transaction_logistics.includes(ltf_data_list.content[i][2])) {
                mtf_ltf_transaction_logistics.push(ltf_data_list.content[i][2]);
                mtf_ltf_transaction_counter_logistics += 1
            }
            if (!ltf_transaction_logistics.includes(ltf_data_list.content[i][1])) {
                ltf_transaction_logistics.push(ltf_data_list.content[i][1]);
                ltf_transaction_counter_logistics += 1
            }

        }

        for (let i = 1; i < wcf_data_list.content.length; i++) {
            if (!ltf_wcf_transaction_logistics.includes(wcf_data_list.content[i][2])) {
                ltf_wcf_transaction_logistics.push(wcf_data_list.content[i][2]);
                ltf_wcf_transaction_counter_logistics += 1
            }
        }

        const newElements_logistics = mtf_transaction_logistics.filter((element) => !mtf_ltf_transaction_logistics.includes(element));
        const newElements2_logistics = ltf_transaction_logistics.filter((element) => !ltf_wcf_transaction_logistics.includes(element));
        const newElements3_logistics = ltf_transaction_logistics.filter((element) => ltf_wcf_transaction_logistics.includes(element));

        on_hauling_transactions_logistics.innerText = newElements2_logistics.length;
        hauled_transactions_logistics.innerText = newElements3_logistics.length;
        booked_transactions_logistics.innerText = mtf_transaction_counter_logistics;
        pending_transactions_logistics.innerText = newElements_logistics.length;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < newElements_logistics.length; i++){
            for(let j = 1; j < mtf_data_list.content.length; j++){
                if(newElements_logistics[i] == mtf_data_list.content[j][1]){
                    if(mtf_data_list.content[j][8] == "LOGISTICS"){
                        data_value +=`
                        <tr>
                        <td>${data_value_counter}</td>
                        <td>${mtf_data_list.content[j][1]}</td>
                        <td>${date_decoder(mtf_data_list.content[j][4])} / ${time_decoder(mtf_data_list.content[j][5])}</td>
                        <td>${mtf_data_list.content[j][2]}</td>
                        <td>${mtf_data_list.content[j][3]}</td>
                        <td>${mtf_data_list.content[j][6]}</td>
                        <td>${mtf_data_list.content[j][7]}</td>
                        </tr>
                        `
                        data_value_counter += 1;        
                    }
                }
            }
        }
        pending_list_logistics.innerHTML = data_value;    

        var data3_value = "";
        var data_value3_counter = 1;
        for(let j = 1; j < ltf_data_list.content.length; j++){
            for(let k = 0; k <= newElements2_logistics.length; k++){
                if(ltf_data_list.content[j][1] == newElements2_logistics[k]){
                    data3_value +=`
                    <tr>
                    <td>${data_value3_counter}</td>
                    <td>${ltf_data_list.content[j][1]}</td>
                    <td>${date_decoder(ltf_data_list.content[j][11])} / ${time_decoder(ltf_data_list.content[j][12])}</td>
                    <td>${ltf_data_list.content[j][3]}</td>
                    <td>${ltf_data_list.content[j][4]}</td>
                    <td>${ltf_data_list.content[j][8]}</td>
                    <td>${ltf_data_list.content[j][9]}</td>
                    <td>ON HAULING</td>
                    <td>PENDING</td>
                    </tr>
                    `
                    data_value3_counter += 1;
                }
            }
            for(let k = 1; k < wcf_data_list.content.length; k++){
                if(ltf_data_list.content[j][1] == wcf_data_list.content[k][2]){
                    data3_value +=`
                    <tr>
                    <td>${data_value3_counter}</td>
                    <td>${ltf_data_list.content[j][1]}</td>
                    <td>${date_decoder(ltf_data_list.content[j][11])} /<br> ${time_decoder(ltf_data_list.content[j][12])}</td>
                    <td>${ltf_data_list.content[j][3]}</td>
                    <td>${ltf_data_list.content[j][4]}</td>
                    <td>${ltf_data_list.content[j][8]}</td>
                    <td>${ltf_data_list.content[j][9]}</td>
                    <td>${date_decoder(wcf_data_list.content[j][11])} /<br> ${time_decoder(wcf_data_list.content[j][12])}</td>
                    <td>${calculateTravelTime(date_decoder(ltf_data_list.content[j][11]),time_decoder(ltf_data_list.content[j][12]),date_decoder(wcf_data_list.content[j][11]),time_decoder(wcf_data_list.content[j][12]))}</td>
                    </tr>
                    `
                    data_value3_counter += 1;            
                }
            }
        }
        ongoing_list_logistics.innerHTML = data3_value;    
        
        var on_hauling_vehicle_counter_logistics = 0;
        var under_maintenance_vehicle_counter_logistics = 0;
        var for_maintenance_vehicle_counter_logistics = 0;
        var data2_value = "";
        var data2_value_counter = 1;
        for(let j = 1; j < vehicle_data.content.length; j++){
            var vehicle_status_logistics = `AVAILABLE`;
            for(let k = 1; k < vehicle_log_data.content.length; k++){
                if(vehicle_data.content[j][0] == vehicle_log_data.content[k][2]){
                    vehicle_status_logistics = vehicle_log_data.content[k][5];
                    if(vehicle_status_logistics == "ON HAUL"){
                        on_hauling_vehicle_counter_logistics += 1
                    }
                    if(vehicle_status_logistics == "AVAILABLE"){
                        on_hauling_vehicle_counter_logistics -= 1
                    }
                    else if(vehicle_status_logistics == "UNDER MAINTENANCE"){
                        under_maintenance_vehicle_counter_logistics += 1
                    }
                    else if(vehicle_status_logistics == "FOR MAINTENANCE"){
                        for_maintenance_vehicle_counter_logistics += 1
                    }
                }
            }
            data2_value +=`
            <tr>
                <td>${data2_value_counter}</td>
                <td>${vehicle_data.content[j][0]}</td>
                <td>${vehicle_data.content[j][1]}</td>
                <td>${vehicle_data.content[j][4]}</td>
                <td>${vehicle_data.content[j][2]}</td>
                <td>${vehicle_data.content[j][3]}</td>
                <td>${vehicle_status_logistics}</td>
            </tr>
            `
            data2_value_counter += 1;

        }
        vehicle_list_logistics.innerHTML = data2_value;    

        // vehicle_list_section
        const total_vehicle_vehicle_list_section = document.querySelector("#total_vehicle");
        const available_vehicle_vehicle_list_section = document.querySelector("#available_vehicle");
        const on_hauling_vehicle_vehicle_list_section = document.querySelector("#on_hauling_vehicle");
        const under_maintenance_vehicle_vehicle_list_section = document.querySelector("#under_maintenance_vehicle");
        const for_maintenance_vehicle_vehicle_list_section = document.querySelector("#for_maintenance_vehicle");        var data_value3 = [];
        var total_vehicle_counter_vehicle_list_section = 0;

        for (x = 1; x < vehicle_data.content.length; x++) {
            data_value3.push(vehicle_data.content[x][0]);
            total_vehicle_counter_vehicle_list_section += 1;
        }
    
        total_vehicle_vehicle_list_section.innerHTML = total_vehicle_counter_vehicle_list_section;
        available_vehicle_vehicle_list_section.innerHTML = total_vehicle_counter_vehicle_list_section - (for_maintenance_vehicle_counter_logistics + under_maintenance_vehicle_counter_logistics + on_hauling_vehicle_counter_logistics) ;
        on_hauling_vehicle_vehicle_list_section.innerHTML = on_hauling_vehicle_counter_logistics;
        under_maintenance_vehicle_vehicle_list_section.innerHTML = under_maintenance_vehicle_counter_logistics;
        for_maintenance_vehicle_vehicle_list_section.innerHTML = for_maintenance_vehicle_counter_logistics;

        // receiving_dashboard
        const to_received_receiving = document.querySelector("#dashboard_section #to_received");
        const received_receiving = document.querySelector("#dashboard_section #received");
        const pending_receiving = document.querySelector("#dashboard_section #pending");
        const pending_list_receiving = document.querySelector("#dashboard_section #pending_list");
        const received_list_receiving = document.querySelector("#dashboard_section #received_list");
        var ltf_transaction_counter_receiving = 0;
        var ltf_wcf_transaction_counter_receiving = 0;
        var mtf_transaction_counter_receiving = 0;
        var mtf_wcf_transaction_counter_receiving = 0;
        var ltf_transaction_receiving = []; // Variable containing existing elements
        var ltf_wcf_transaction_receiving = []; // Variable containing existing elements
        var mtf_transaction_receiving = []; // Variable containing existing elements
        var mtf_wcf_transaction_receiving = []; // Variable containing existing elements
        
        for (let i = 1; i < mtf_data_list.content.length; i++) {
            if(mtf_data_list.content[i][8] ==  "RECEIVING"){
                if (!mtf_transaction_receiving.includes(mtf_data_list.content[i][1])) {
                    mtf_transaction_receiving.push(mtf_data_list.content[i][1]);
                    mtf_transaction_counter_receiving += 1
                }
            }
        }

        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!ltf_transaction_receiving.includes(ltf_data_list.content[i][1])) {
                ltf_transaction_receiving.push(ltf_data_list.content[i][1]);
                ltf_transaction_counter_receiving += 1
            }
        }
        
        for (let i = 1; i < wcf_data_list.content.length; i++) {
            if (!ltf_wcf_transaction_receiving.includes(wcf_data_list.content[i][2])) {
                ltf_wcf_transaction_receiving.push(wcf_data_list.content[i][2]);
                ltf_wcf_transaction_counter_receiving += 1
            }
            if (!mtf_wcf_transaction_receiving.includes(wcf_data_list.content[i][2])) {
                mtf_wcf_transaction_receiving.push(wcf_data_list.content[i][2]);
                mtf_wcf_transaction_counter_receiving += 1
            }
        }
        
        // Get elements from wcf_transaction not included in wcf_sf_transaction
        const newElements_receiving = ltf_transaction_receiving.filter((element) => !ltf_wcf_transaction_receiving.includes(element));
        const newElements2_receiving = mtf_transaction_receiving.filter((element) => !mtf_wcf_transaction_receiving.includes(element));
        const newElements3_receiving = ltf_transaction_receiving.filter((element) => ltf_wcf_transaction_receiving.includes(element));
        const newElements4_receiving = mtf_transaction_receiving.filter((element) => mtf_wcf_transaction_receiving.includes(element));

        received_receiving.innerText = ltf_wcf_transaction_counter_receiving;
        to_received_receiving.innerText = ltf_transaction_counter_receiving + mtf_transaction_counter_receiving;
        pending_receiving.innerText = newElements_receiving.length + newElements2_receiving.length;
        
        const raw_waste_receiving = document.querySelector("#dashboard_section #raw_waste"); 
        const hazardous_waste_receiving = document.querySelector("#dashboard_section #hazardous_waste"); 
        const non_hazardous_waste_receiving = document.querySelector("#dashboard_section #non_hazardous_waste");
        const total_receiving = document.querySelector("#dashboard_section #total");
    
        var rw = 0;
        var hw = 0;
        var nhw = 0;
    
        for(y=1; y<wcf_data_list.content.length; y++){
    
            if(wcf_data_list.content[y][4] === "RW"){
                rw += parseInt(wcf_data_list.content[y][17]);
            }
            else if(wcf_data_list.content[y][4] === "HW"){
                hw += parseInt(wcf_data_list.content[y][17]);
            }
            else if(wcf_data_list.content[y][4] === "NHW"){
                nhw += parseInt(wcf_data_list.content[y][17]);
            }
        }
    
        raw_waste_receiving.innerText = parseInt(rw) + " kg";
        hazardous_waste_receiving.innerText = parseInt(hw) + " kg";
        non_hazardous_waste_receiving.innerText = parseInt(nhw) + " kg";
        total_receiving.innerText = parseInt(rw) + parseInt(hw) + parseInt(nhw)  + " kg";    
        
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < newElements_receiving.length; i++){
            for(let j = 1; j < ltf_data_list.content.length; j++){
                if(newElements_receiving[i] == ltf_data_list.content[j][1]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${ltf_data_list.content[j][1]}</td>
                        <td>${date_decoder(ltf_data_list.content[j][5])} /<br> ${time_decoder(ltf_data_list.content[j][6])}</td>
                        <td>${ltf_data_list.content[j][3]}</td>
                        <td>${ltf_data_list.content[j][4]}</td>
                        <td>${ltf_data_list.content[j][7]}</td>
                        <td>${ltf_data_list.content[j][8]}</td>
                        <td>${ltf_data_list.content[j][9]}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        for(let i = 0; i < newElements2_receiving.length; i++){
            for(let j = 1; j < mtf_data_list.content.length; j++){
                if(newElements2_receiving[i] == mtf_data_list.content[j][1]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${mtf_data_list.content[j][1]}</td>
                        <td>${date_decoder(mtf_data_list.content[j][4])} /<br> ${time_decoder(mtf_data_list.content[j][5])}</td>
                        <td>${mtf_data_list.content[j][2]}</td>
                        <td>${mtf_data_list.content[j][3]}</td>
                        <td>PROVIDED BY CLIENT</td>
                        <td>PROVIDED BY CLIENT</td>
                        <td>PROVIDED BY CLIENT</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        pending_list_receiving.innerHTML = data_value;

        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < newElements3_receiving.length; i++){
            for(let j = 1; j < wcf_data_list.content.length; j++){
                if(newElements3_receiving[i] == wcf_data_list.content[j][2]){
                    for(let k = 1; k < ltf_data_list.content.length; k++){
                        var hauling_date_info;
                        var hauling_time_info;
                        if(wcf_data_list.content[j][2] == ltf_data_list.content[k][1]){
                            hauling_date_info =  date_decoder(ltf_data_list.content[k][5]);
                            hauling_time_info =  time_decoder(ltf_data_list.content[k][6]);
                            break
                        }
                    }
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${wcf_data_list.content[j][1]}</td>
                        <td>${hauling_date_info} /<br> ${hauling_time_info}</td>
                        <td>${wcf_data_list.content[j][3]}</td>
                        <td>${wcf_data_list.content[j][4]}</td>
                        <td>${wcf_data_list.content[j][17]}</td>
                        <td>${wcf_data_list.content[j][9]}</td>
                        <td>${wcf_data_list.content[j][10]}</td>
                        <td>${date_decoder(wcf_data_list.content[j][11])} /<br> ${time_decoder(wcf_data_list.content[j][12])}</td>
                        <td>${date_decoder(wcf_data_list.content[j][13])} /<br> ${time_decoder(wcf_data_list.content[j][14])}</td>
                        <td>${calculateTravelTime(date_decoder(wcf_data_list.content[j][11]),time_decoder(wcf_data_list.content[j][12]),date_decoder(wcf_data_list.content[j][13]),time_decoder(wcf_data_list.content[j][14]))}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            for(let i = 0; i < newElements4_receiving.length; i++){
            for(let j = 1; j < wcf_data_list.content.length; j++){
                if(newElements4_receiving[i] == wcf_data_list.content[j][2]){
                    for(let k = 1; k < mtf_data_list.content.length; k++){
                        var hauling_date_info;
                        var hauling_time_info;
                        if(wcf_data_list.content[j][2] == mtf_data_list.content[k][1]){
                            hauling_date_info =  date_decoder(mtf_data_list.content[k][4]);
                            hauling_time_info =  time_decoder(mtf_data_list.content[k][5]);
                            break
                        }
                    }
                    data_value +=`
                    <tr>
                    <td>${data_value_counter}</td>
                        <td>${wcf_data_list.content[j][1]}</td>
                        <td>${hauling_date_info} /<br> ${hauling_time_info}</td>
                        <td>${wcf_data_list.content[j][3]}</td>
                        <td>${wcf_data_list.content[j][4]}</td>
                        <td>${wcf_data_list.content[j][17]}</td>
                        <td>${wcf_data_list.content[j][9]}</td>
                        <td>${wcf_data_list.content[j][10]}</td>
                        <td>${date_decoder(wcf_data_list.content[j][11])} /<br> ${time_decoder(wcf_data_list.content[j][12])}</td>
                        <td>${date_decoder(wcf_data_list.content[j][13])} /<br> ${time_decoder(wcf_data_list.content[j][14])}</td>
                        <td>${calculateTravelTime(date_decoder(wcf_data_list.content[j][11]),time_decoder(wcf_data_list.content[j][12]),date_decoder(wcf_data_list.content[j][13]),time_decoder(wcf_data_list.content[j][14]))}</td>
                        </tr>
                        `
                    data_value_counter += 1;
                }
            }
        }
        received_list_receiving.innerHTML = data_value;

        // sorting_dashboard_section
        const total_sorting = document.querySelector("#sorting_dashboard_section #total");
        const sorted_sorting = document.querySelector("#sorting_dashboard_section #sorted");
        const unsorted_sorting = document.querySelector("#sorting_dashboard_section #unsorted");
        const unsorted_list_sorting = document.querySelector("#sorting_dashboard_section #unsorted_list");
        const sorted_list_sorting = document.querySelector("#sorting_dashboard_section #sorted_list");
        const sorted_items_sorting = document.querySelector("#sorting_dashboard_section #sorted_items");
        const sorted_items_list_sorting = document.querySelector("#sorting_dashboard_section #sorted_items_list");
        var wcf_sf_transaction_counter_sorting = 0;
        var wcf_transaction_counter_sorting = 0;
        var sf_transaction_counter_sorting = 0;
        var wcf_transaction_sorting = []; // Variable containing existing elements
        var wcf_sf_transaction_sorting = []; // Variable containing existing elements
        var sf_transaction_sorting = []; // Variable containing existing elements
        
        for (let i = 1; i < wcf_data_list.content.length; i++) {
            if (!wcf_transaction_sorting.includes(wcf_data_list.content[i][1])) {
                wcf_transaction_sorting.push(wcf_data_list.content[i][1]);
                wcf_transaction_counter_sorting += 1
            }
        }

        for (let i = 1; i < sf_data_list.content.length; i++) {
            if (!wcf_sf_transaction_sorting.includes(sf_data_list.content[i][2])) {
                wcf_sf_transaction_sorting.push(sf_data_list.content[i][2]);
                wcf_sf_transaction_counter_sorting += 1
            }
            if (sf_data_list.content[i][4] !==  "DISCREPANCY") {
                if (!sf_transaction_sorting.includes(sf_data_list.content[i][1])) {
                    sf_transaction_sorting.push(sf_data_list.content[i][1]);
                    sf_transaction_counter_sorting += 1
                }
            }
        }

        // Get elements from wcf_transaction not included in wcf_sf_transaction
        const pending_sorting = wcf_transaction_sorting.filter((element) => !wcf_sf_transaction_sorting.includes(element));
        const done_sorting_sorting = wcf_transaction_sorting.filter((element) => wcf_sf_transaction_sorting.includes(element));
        
        total_sorting.innerText = wcf_transaction_counter_sorting;
        unsorted_sorting.innerText = wcf_transaction_counter_sorting - wcf_sf_transaction_counter_sorting;
        sorted_sorting.innerText = wcf_sf_transaction_counter_sorting;
        sorted_items_sorting.innerText = sf_transaction_counter_sorting;

        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < pending_sorting.length; i++){
            for(let j = 1; j < wcf_data_list.content.length; j++){
                if(pending_sorting[i] == wcf_data_list.content[j][1]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${wcf_data_list.content[j][1]}</td>
                        <td>${date_decoder(wcf_data_list.content[j][11])} /<br> ${time_decoder(wcf_data_list.content[j][12])}</td>
                        <td>${wcf_data_list.content[j][3]}</td>
                        <td>${wcf_data_list.content[j][5]}</td>
                        <td>${wcf_data_list.content[j][17]} kg.</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        unsorted_list_sorting.innerHTML = data_value;    

        // sorted_list
        var data_value_done = "";
        var data_value__done_counter = 1;
        for(let i = 0; i < done_sorting_sorting.length; i++){
            for(let j = 1; j < wcf_data_list.content.length; j++){
                if(done_sorting_sorting[i] == wcf_data_list.content[j][1]){
                    var discrepancy_weight = 0;
                    var discrepancy_remarks ="COMPLETE";
                    var finished_date;
                    var finished_time;
                    for(let k = 1; k < sf_data_list.content.length; k++){
                        finished_date = date_decoder(sf_data_list.content[k][8]);
                        finished_time = time_decoder(sf_data_list.content[k][9]);
                        if(done_sorting_sorting[i] == sf_data_list.content[k][2]){
                            if(sf_data_list.content[k][4] == "DISCREPANCY"){
                                discrepancy_weight = sf_data_list.content[k][6];
                                discrepancy_remarks = sf_data_list.content[k][5];
                            }
                        }
                    }
                    data_value_done +=`
                    <tr>
                        <td>${data_value__done_counter}</td>
                        <td>${wcf_data_list.content[j][1]}</td>
                        <td>${date_decoder(wcf_data_list.content[j][11])} /<br> ${time_decoder(wcf_data_list.content[j][12])}</td>
                        <td>${wcf_data_list.content[j][3]}</td>
                        <td>${wcf_data_list.content[j][17]} kg.</td>
                        <td>${discrepancy_weight} kg.</td>
                        <td>${discrepancy_remarks}</td>
                        <td>${finished_date} /<br> ${finished_time}</td>
                        <td>${calculateTravelTime(date_decoder(wcf_data_list.content[j][11]),time_decoder(wcf_data_list.content[j][12]),finished_date,finished_time)}</td>
                    </tr>
                    `
                    data_value__done_counter += 1;
                }
            }
        }
        sorted_list_sorting.innerHTML = data_value_done;

        // sorted_items_list
        var data_value_done = "";
        var data_value__done_counter = 1;
        for(let i = 1; i < sf_data_list.content.length; i++){
            if(sf_data_list.content[i][4] !== "DISCREPANCY"){
                data_value_done +=`
                <tr>
                    <td>${data_value__done_counter}</td>
                    <td>${sf_data_list.content[i][1]}</td>
                    <td>${sf_data_list.content[i][2]}</td>
                    <td>${date_decoder(sf_data_list.content[i][8])} /<br> ${time_decoder(sf_data_list.content[i][9])}</td>
                    <td>${sf_data_list.content[i][3]}</td>
                    <td>${sf_data_list.content[i][4]}</td>
                    <td>${sf_data_list.content[i][6]} kg.</td>
                    <td>${sf_data_list.content[i][5]}</td>
                </tr>
                `
                data_value__done_counter += 1;
    
            }
        }
        sorted_items_list_sorting.innerHTML = data_value_done;    

        // treatment_process_dashboard
        const total_counter_treatment = document.querySelector("#treatment_process_dashboard #total_counter");
        const pending_counter_treatment = document.querySelector("#treatment_process_dashboard #pending_counter");
        const treated_counter_treatment = document.querySelector("#treatment_process_dashboard #treated_counter");
        const pending_list_treatment = document.querySelector("#treatment_process_dashboard #pending_list");
        const finished_list_treatment = document.querySelector("#treatment_process_dashboard #finished_list");
        var sf_tpf_transaction_counter_treatment = 0;
        var sf_transaction_counter_treatment = 0;
        let sf_transaction_treatment = []; // Variable containing existing elements
        let sf_tpf_transaction_treatment = []; // Variable containing existing elements
        
        for (let i = 1; i < sf_data_list.content.length; i++) {
            if(sf_data_list.content[i][4] !== "DISCREPANCY"){
                if(sf_data_list.content[i][5] !== "FOR STORAGE"){
                    if (!sf_transaction_treatment.includes(sf_data_list.content[i][1])) {
                        sf_transaction_treatment.push(sf_data_list.content[i][1]);
                        sf_transaction_counter_treatment += 1
                    }
                }
            }
        }

        for (let i = 1; i < tpf_data_list.content.length; i++) {
            if (!sf_tpf_transaction_treatment.includes(tpf_data_list.content[i][2])) {
                sf_tpf_transaction_treatment.push(tpf_data_list.content[i][2]);
                sf_tpf_transaction_counter_treatment += 1
            }
        }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const pending_treatment = sf_transaction_treatment.filter((element) => !sf_tpf_transaction_treatment.includes(element));
        const finished_treatment = sf_transaction_treatment.filter((element) => sf_tpf_transaction_treatment.includes(element));

        // pending_list
        treated_counter_treatment.innerText = sf_tpf_transaction_counter_treatment;
        total_counter_treatment.innerText = sf_transaction_counter_treatment;
        pending_counter_treatment.innerText = sf_transaction_counter_treatment - sf_tpf_transaction_counter_treatment;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < pending_treatment.length; i++){
            for(let j = 1; j < sf_data_list.content.length; j++){
                if(pending_treatment[i] == sf_data_list.content[j][1]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${sf_data_list.content[j][1]}</td>
                        <td>${date_decoder(sf_data_list.content[j][8])} /<br> ${time_decoder(sf_data_list.content[j][9])}</td>
                        <td>${sf_data_list.content[j][3]}</td>
                        <td>${sf_data_list.content[j][4]}</td>
                        <td>${sf_data_list.content[j][5]}</td>
                        <td>${sf_data_list.content[j][6]}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        pending_list_treatment.innerHTML = data_value;    

        // finished_list
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < finished_treatment.length; i++){
            for(let j = 1; j < sf_data_list.content.length; j++){
                if(finished_treatment[i] == sf_data_list.content[j][1]){
                    var sorted_date;
                    var sorted_time;
                    var tpf_no;
                    for(let k = 1; k < tpf_data_list.content.length; k++){
                        if(sf_data_list.content[j][1] == tpf_data_list.content[k][2]){
                            sorted_date = date_decoder(tpf_data_list.content[k][11]);
                            sorted_time = time_decoder(tpf_data_list.content[k][12]);
                            tpf_no = tpf_data_list.content[k][1];
                            break
                        }
                    }
                    data_value +=`
                    <tr>
                    <td>${data_value_counter}</td>
                    <td>${tpf_no}</td>
                    <td>${date_decoder(sf_data_list.content[j][8])} /<br> ${time_decoder(sf_data_list.content[j][9])}</td>
                    <td>${sf_data_list.content[j][3]}</td>
                    <td>${sf_data_list.content[j][4]}</td>
                    <td>${sf_data_list.content[j][5]}</td>
                    <td>${sf_data_list.content[j][6]}</td>
                    <td>${sorted_date} /<br> ${sorted_time}</td>
                    <td>${calculateTravelTime(date_decoder(sf_data_list.content[j][8]),time_decoder(sf_data_list.content[j][9]),sorted_date,sorted_time)}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        finished_list_treatment.innerHTML = data_value;    

        // certification_dashboard
        const treated_counter_certification = document.querySelector("#certification_dashboard #treated_counter");
        const pending_counter_certification = document.querySelector("#certification_dashboard #pending_counter");
        const certified_counter_certification = document.querySelector("#certification_dashboard #certified_counter");
        const pending_list_certification = document.querySelector("#certification_dashboard #pending_list");
        const finished_list_certification = document.querySelector("#certification_dashboard #finished_list");
        var sf_tpf_transaction_counter_certification = 0;
        var sf_transaction_counter_certification = 0;
        let sf_transaction_certification = []; // Variable containing existing elements
        let sf_tpf_transaction_certification = []; // Variable containing existing elements
        
        for (let i = 1; i < tpf_data_list.content.length; i++) {
            if (!sf_transaction_certification.includes(tpf_data_list.content[i][1])) {
                sf_transaction_certification.push(tpf_data_list.content[i][1]);
                sf_transaction_counter_certification += 1
            }
        }

        for (let i = 1; i < cod_data_list.content.length; i++) {
            if (!sf_tpf_transaction_certification.includes(cod_data_list.content[i][2])) {
                sf_tpf_transaction_certification.push(cod_data_list.content[i][2]);
                sf_tpf_transaction_counter_certification += 1
            }
        }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const pending_certification = sf_transaction_certification.filter((element) => !sf_tpf_transaction_certification.includes(element));
        const finish_certification = sf_transaction_certification.filter((element) => sf_tpf_transaction_certification.includes(element));

        treated_counter_certification.innerText = sf_transaction_counter_certification;
        pending_counter_certification.innerText = sf_transaction_counter_certification - sf_tpf_transaction_counter_certification;
        certified_counter_certification.innerText = sf_tpf_transaction_counter_certification;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < pending_certification.length; i++){
            var status;
            var date_accomplished;
            var target_date;
            for(let j = 1; j < tpf_data_list.content.length; j++){
                if(pending_certification[i] == tpf_data_list.content[j][1]){
                    date_accomplished = new Date(date_decoder(tpf_data_list.content[j][11]));
                    target_date = new Date(date_decoder(tpf_data_list.content[j][10]));
                    if(date_accomplished.getDate() < target_date.getDate()){
                        status = "AHEAD OF TIME";
                    }
                    else if(date_accomplished.getDate() == target_date.getDate()){
                        status = "ON TIME";
                    }
                    else if(date_accomplished.getDate() > target_date.getDate()){
                        status = "DELAYED";
                    }
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${tpf_data_list.content[j][1]}</td>
                        <td>${date_decoder(tpf_data_list.content[j][11])} /<br> ${time_decoder(tpf_data_list.content[j][12])}</td>
                        <td>${tpf_data_list.content[j][4]}</td>
                        <td>${tpf_data_list.content[j][5]}</td>
                        <td>${tpf_data_list.content[j][7]} kg.</td>
                        <td>${date_decoder(tpf_data_list.content[j][10])}</td>
                        <td>${status}</td>
                        </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        pending_list_certification.innerHTML = data_value;

        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < finish_certification.length; i++){
            var status;
            var date_accomplished;
            var target_date;
            for(let j = 1; j < tpf_data_list.content.length; j++){
                if(finish_certification[i] == tpf_data_list.content[j][1]){
                    date_accomplished = new Date(date_decoder(tpf_data_list.content[j][11]));
                    target_date = new Date(date_decoder(tpf_data_list.content[j][10]));
                    if(date_accomplished.getDate() < target_date.getDate()){
                        status = "AHEAD OF TIME";
                    }
                    else if(date_accomplished.getDate() == target_date.getDate()){
                        status = "ON TIME";
                    }
                    else if(date_accomplished.getDate() > target_date.getDate()){
                        status = "DELAYED";
                    }
                    var cod_no;
                    var finished_date;
                    var finished_time;
                    for(let k = 1; k < cod_data_list.content.length; k++){
                        if(tpf_data_list.content[j][1] == cod_data_list.content[k][2]){
                            cod_no = cod_data_list.content[k][1];
                            finished_date = date_decoder(cod_data_list.content[k][11]);
                            finished_time = time_decoder(cod_data_list.content[k][12]);
                        }
                    }
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${cod_no}</td>
                        <td>${tpf_data_list.content[j][1]}</td>
                        <td>${date_decoder(tpf_data_list.content[j][11])} /<br> ${time_decoder(tpf_data_list.content[j][12])}</td>
                        <td>${tpf_data_list.content[j][4]}</td>
                        <td>${tpf_data_list.content[j][5]}</td>
                        <td>${tpf_data_list.content[j][7]} kg.</td>
                        <td>${date_decoder(tpf_data_list.content[j][10])}</td>
                        <td>${status}</td>
                        <td>${finished_date} /<br> ${finished_time}</td>
                        <td>${calculateTravelTime(date_decoder(tpf_data_list.content[j][11]),time_decoder(tpf_data_list.content[j][12]),finished_date,finished_time)}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        finished_list_certification.innerHTML = data_value;

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
            if (!sf_transaction_billing.includes(cod_data_list.content[i][1])) {
                sf_transaction_billing.push(cod_data_list.content[i][1]);
                sf_transaction_counter_billing += 1
            }
        }

        for (let i = 1; i < bpf_data_list.content.length; i++) {
            if (!sf_tpf_transaction_billing.includes(bpf_data_list.content[i][2])) {
                sf_tpf_transaction_billing.push(bpf_data_list.content[i][2]);
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
                if(newElements_billing[i] == cod_data_list.content[j][1]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${cod_data_list.content[j][1]}</td>
                        <td>${date_decoder(cod_data_list.content[j][10])}</td>
                        <td>${cod_data_list.content[j][5]}</td>
                        <td>${cod_data_list.content[j][6]}</td>
                        <td>${cod_data_list.content[j][8]}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        unsorted_list_billing.innerHTML = data_value;            

        // incident_history_list
        const incident_report_safety = document.querySelector("#safety_dashboard #incident_report");
        const pending_counter_safety = document.querySelector("#safety_dashboard #pending_counter");
        const documented_safety = document.querySelector("#safety_dashboard #documented");
        const pending_list_safety = document.querySelector("#safety_dashboard #pending_list");
        const incident_history_list_safety = document.querySelector("#safety_dashboard #incident_history_list");
        var irf_transaction_safety = [];
        var irf_idf_transaction_safety = [];
        var irf_transaction_counter_safety = 0;
        var irf_idf_transaction_counter_safety = 0;

        for (let i = 1; i < irf_data_list.content.length; i++) {
            if (!irf_transaction_safety.includes(irf_data_list.content[i][1])) {
                irf_transaction_safety.push(irf_data_list.content[i][1]);
                irf_transaction_counter_safety += 1
            }
        }

        for (let i = 1; i < idf_data_list.content.length; i++) {
            if (!irf_idf_transaction_safety.includes(idf_data_list.content[i][2])) {
                irf_idf_transaction_safety.push(idf_data_list.content[i][2]);
                irf_idf_transaction_counter_safety += 1
            }
        }

        const pending_safety = irf_transaction_safety.filter((element) => !irf_idf_transaction_safety.includes(element));
        const finished_safety = irf_transaction_safety.filter((element) => irf_idf_transaction_safety.includes(element));

        incident_report_safety.innerText = pending_safety.length + finished_safety.length;
        pending_counter_safety.innerText = pending_safety.length;
        documented_safety.innerText = finished_safety.length;

        var incident_history_data_value = "";
        var incident_history_data_value_counter = 1;
        for(let x = 1; x < irf_data_list.content.length; x++){
            for(let y = 0; y < pending_counter_safety.length; y++){
                if(irf_data_list.content[x][1] == pending_counter_safety[y]){
                    incident_history_data_value += `
                    <tr>
                        <td>${incident_history_data_value_counter}</td>
                        <td>${irf_data_list.content[x][1]}</td>
                        <td>${date_decoder(irf_data_list.content[x][6])} /<br> ${time_decoder(irf_data_list.content[x][7])}</td>
                        <td>${irf_data_list.content[x][3]}</td>
                        <td>${irf_data_list.content[x][2]}</td>
                        <td>${irf_data_list.content[x][4]}</td>
                        <td>${irf_data_list.content[x][8]}</td>
                        <td>${date_decoder(irf_data_list.content[x][9])} /<br> ${time_decoder(irf_data_list.content[x][10])}</td>
                        <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][6]),time_decoder(irf_data_list.content[x][7]),date_decoder(irf_data_list.content[x][9]),time_decoder(irf_data_list.content[x][10]))}</td>
                    </tr>
                    `
                    incident_history_data_value_counter += 1;    
                }
            }
        }
        pending_list_safety.innerHTML = incident_history_data_value

        var incident_history_data_value = "";
        var incident_history_data_value_counter = 1;
        for(let x = 1; x < irf_data_list.content.length; x++){
            for(let y = 0; y < finished_safety.length; y++){
                if(irf_data_list.content[x][1] == pending_counter_safety[y]){
                    incident_history_data_value += `
                    <tr>
                        <td>${incident_history_data_value_counter}</td>
                        <td>${irf_data_list.content[x][1]}</td>
                        <td>${date_decoder(irf_data_list.content[x][6])} /<br> ${time_decoder(irf_data_list.content[x][7])}</td>
                        <td>${irf_data_list.content[x][3]}</td>
                        <td>${irf_data_list.content[x][2]}</td>
                        <td>${irf_data_list.content[x][4]}</td>
                        <td>${irf_data_list.content[x][8]}</td>
                        <td>${date_decoder(irf_data_list.content[x][9])} /<br> ${time_decoder(irf_data_list.content[x][10])}</td>
                        <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][6]),time_decoder(irf_data_list.content[x][7]),date_decoder(irf_data_list.content[x][9]),time_decoder(irf_data_list.content[x][10]))}</td>
                    </tr>
                    `
                    incident_history_data_value_counter += 1;                 
                }
            }
        }
        incident_history_list_safety.innerHTML = incident_history_data_value



    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
