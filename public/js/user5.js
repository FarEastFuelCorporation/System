document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');
        const cod_response_promise = fetch('https://script.google.com/macros/s/AKfycbzgiOuXizUVviCsLVfihqYN9HJ3pyNr7ElHoCl3JGkbtQnChnm2U42yQuLd4UMH0ci5/exec');
        const bpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyux0GBj9tk6quRz46IkXa0VemEDAi-v2iEHx7C_6OFi416ERkv_BFtKqBmbw-bxaaiFQ/exec');
        const ctf_response_promise = fetch('https://script.google.com/macros/s/AKfycbx1baTJSEL1piW4QrLRRuqIw0FW1kvz37Zo3NaMfJivPZUZObrkuDlcSZaa8GDUw9Td/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            vehicle_response,
            mtf_response,
            ltf_response,
            wcf_response,
            tpf_response,
            cod_response,
            bpf_response,
            ctf_response,
            qlf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            vehicle_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            tpf_response_promise,
            cod_response_promise,
            bpf_response_promise,
            ctf_response_promise,
            qlf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const vehicle_data_list  = await vehicle_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const tpf_data_list  = await tpf_response.json();
        const cod_data_list  = await cod_response.json();
        const bpf_data_list  = await bpf_response.json();
        const ctf_data_list  = await ctf_response.json();
        const qlf_data_list  = await qlf_response.json();

        // Code that depends on the fetched data
        // username_data_list
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const user = document.getElementById("user");

        user.value = username_data_list.content[5][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[5][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[5][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[5][findTextInArray(username_data_list, "DEPARTMENT")];
    
        // billing_dashboard
        const billing_dashboard = document.querySelector("#billing_dashboard");
        const certified_counter_billing = billing_dashboard.querySelector("#certified_counter");
        const pending_counter_billing = billing_dashboard.querySelector("#pending_counter");
        const billed_counter_billing = billing_dashboard.querySelector("#billed_counter");
        const pending_list_billing = billing_dashboard.querySelector("#pending_list");
        let sf_transaction_billing = []; 
        let sf_tpf_transaction_billing = [];
        const collection_dashboard = document.querySelector("#collection_dashboard");
        const billed_counter_collection = collection_dashboard.querySelector("#billed_counter");
        const pending_counter_collection = collection_dashboard.querySelector("#pending_counter");
        const collected_counter_collection = collection_dashboard.querySelector("#collected_counter");
        const billed_counter_amount_collection = collection_dashboard.querySelector("#billed_counter_amount");
        const pending_counter_amount_collection = collection_dashboard.querySelector("#pending_counter_amount");
        const collected_counter_amount_collection = collection_dashboard.querySelector("#collected_counter_amount");
        const pending_list_collection = collection_dashboard.querySelector("#pending_list");   
        // collection_dashboard
        let bpf_transaction_collection = {};
        let bpf_ctf_transaction_collection = {};
        let bpf_transaction_collection_date = {};
        let bpf_ctf_transaction_collection_date = {};
        let bpf_collection = [];
        let pending_collection = [];
        let finish_collection = [];
        let bpf_transaction_amount_collection = 0
        let bpf_ctf_transaction_amount_collection = 0
        const month_filter = document.querySelector("#month_filter");
        function getCurrentMonthName() {
            const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
            const currentDate = new Date();
            const currentMonthIndex = currentDate.getMonth();
            
            return months[currentMonthIndex];
        }        
        month_filter.value = getCurrentMonthName();
        month_filter.addEventListener("change", generatePending)
        generatePending();
        function generatePending(){
            // billing
            sf_transaction_billing = [];
            sf_tpf_transaction_billing = [];
            var mtf_cod_list = [];
            var mtf_bpf_list = [];
            var done_cod = [];
            for (let i = 1; i < cod_data_list.content.length; i++) {
                for (let x = 1; x < bpf_data_list.content.length; x++) {
                    if(!done_cod.includes(bpf_data_list.content[x][findTextInArray(bpf_data_list, "COD #")])){
                        done_cod.push(bpf_data_list.content[x][findTextInArray(bpf_data_list, "COD #")])
                    }
                }
                var mtf = "";
                var ltf = "";
                for(let k = 1; k < wcf_data_list.content.length; k++){
                    if(cod_data_list.content[i][findTextInArray(cod_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
                        if((wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                            mtf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                        }else{
                            ltf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                            for(let x = 1; x < ltf_data_list.content.length; x++){
                                if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                    mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                                    break
                                }
                            }
                        }
                    }
                }
                if(!done_cod.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")])){
                    if (month_filter.value == formatMonth(cod_data_list.content[i][findTextInArray(cod_data_list, "HAULING DATE")])) {
                        if(!sf_transaction_billing.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")])){
                            sf_transaction_billing.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
                        }
                        if(!mtf_cod_list.includes(mtf)){
                            mtf_cod_list.push(mtf)
                        }
                    }
                    else if (month_filter.value == "ALL") {
                        if(!sf_transaction_billing.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")])){
                            sf_transaction_billing.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
                        }
                        if(!mtf_cod_list.includes(mtf)){
                            mtf_cod_list.push(mtf)
                        }
                    }
                }
                else{
                    if (month_filter.value == formatMonth(cod_data_list.content[i][findTextInArray(cod_data_list, "HAULING DATE")])) {
                        if(!sf_tpf_transaction_billing.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")])){
                            sf_tpf_transaction_billing.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
                        }
                        if(!mtf_bpf_list.includes(mtf)){
                            mtf_bpf_list.push(mtf)
                        }
                    }
                    else if (month_filter.value == "ALL") {
                        if(!sf_tpf_transaction_billing.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")])){
                            sf_tpf_transaction_billing.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
                        }
                        if(!mtf_bpf_list.includes(mtf)){
                            mtf_bpf_list.push(mtf)
                        }
                    }
                }
            }
            const pending_billing = sf_transaction_billing.filter((element) => !sf_tpf_transaction_billing.includes(element));;

            // collection
            bpf_transaction_collection = {};
            bpf_ctf_transaction_collection = {};
            bpf_transaction_collection_date = {};
            bpf_ctf_transaction_collection_date = {};
            bpf_collection = [];
            pending_collection = [];
            finish_collection = [];
            bpf_transaction_amount_collection = 0
            bpf_ctf_transaction_amount_collection = 0
            for (let i = 1; i < bpf_data_list.content.length; i++) {
                const bpfNumber = bpf_data_list.content[i][findTextInArray(bpf_data_list, "BPF #")];
                const haulingDate = new Date(bpf_data_list.content[i][findTextInArray(bpf_data_list, "HAULING DATE")]);

                if (month_filter.value === formatMonth(haulingDate)) {
                    const amount = bpf_data_list.content[i][findTextInArray(bpf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")];
                    
                    // Check if the bpfNumber already exists in the object
                    if (bpf_transaction_collection[bpfNumber]) {
                        // If it exists, add the amount to the existing value
                        bpf_transaction_collection[bpfNumber] += amount;
                    } else {
                        // If it doesn't exist, create a new entry with the amount
                        bpf_transaction_collection[bpfNumber] = amount;
                    }
                    bpf_transaction_collection_date[bpfNumber] = haulingDate;
                    if(!bpf_collection.includes(bpf_data_list.content[i][findTextInArray(bpf_data_list, "BPF #")])){
                        bpf_collection.push(bpf_data_list.content[i][findTextInArray(bpf_data_list, "BPF #")])
                    }
                }
                else if (month_filter.value === "ALL") {
                    const amount = bpf_data_list.content[i][findTextInArray(bpf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")];
                    
                    // Check if the bpfNumber already exists in the object
                    if (bpf_transaction_collection[bpfNumber]) {
                        // If it exists, add the amount to the existing value
                        bpf_transaction_collection[bpfNumber] += amount;
                    } else {
                        // If it doesn't exist, create a new entry with the amount
                        bpf_transaction_collection[bpfNumber] = amount;
                    }
                    bpf_transaction_collection_date[bpfNumber] = haulingDate;
                    if(!bpf_collection.includes(bpf_data_list.content[i][findTextInArray(bpf_data_list, "BPF #")])){
                        bpf_collection.push(bpf_data_list.content[i][findTextInArray(bpf_data_list, "BPF #")])
                    }
                }
            }
            for (let i = 1; i < ctf_data_list.content.length; i++) {
                const bpfNumber = ctf_data_list.content[i][findTextInArray(ctf_data_list, "BPF #")];
                const haulingDate = new Date(ctf_data_list.content[i][findTextInArray(ctf_data_list, "HAULING DATE")]);
                
                if (month_filter.value === formatMonth(haulingDate)) {
                    const amount = ctf_data_list.content[i][findTextInArray(ctf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")];
                    
                    // Check if the bpfNumber already exists in the object
                    if (bpf_ctf_transaction_collection[bpfNumber]) {
                        // If it exists, add the amount to the existing value
                        bpf_ctf_transaction_collection[bpfNumber] += amount;
                    } else {
                        // If it doesn't exist, create a new entry with the amount
                        bpf_ctf_transaction_collection[bpfNumber] = amount;
                    }
                    bpf_ctf_transaction_collection_date[tpfbpfNumberNumber] = haulingDate;
                }
                else if (month_filter.value === "ALL") {
                    const amount = ctf_data_list.content[i][findTextInArray(ctf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")];
                    
                    // Check if the bpfNumber already exists in the object
                    if (bpf_ctf_transaction_collection[bpfNumber]) {
                        // If it exists, add the amount to the existing value
                        bpf_ctf_transaction_collection[bpfNumber] += amount;
                    } else {
                        // If it doesn't exist, create a new entry with the amount
                        bpf_ctf_transaction_collection[bpfNumber] = amount;
                    }
                    bpf_ctf_transaction_collection_date[bpfNumber] = haulingDate;
                }
            }

            for (const key in bpf_transaction_collection) {     
                // Check if the key exists in bpf_ctf_transaction_collection
                if (bpf_ctf_transaction_collection[key]) {
                    // If it exists in bpf_ctf_transaction_collection, add both "tpf #" and weight to finish_collection
                    finish_collection.push({ bpfNumber: key, amount: bpf_ctf_transaction_collection[key], date: bpf_ctf_transaction_collection_date[key]});
                } else {
                    // If it doesn't exist in bpf_ctf_transaction_billing, add both "tpf #" and weight to pending_collection
                    pending_collection.push({ bpfNumber: key, amount: bpf_transaction_collection[key], date: bpf_transaction_collection_date[key]});
                }
            }
            pending_collection.sort((a, b) => a.date - b.date);
            finish_collection.sort((a, b) => a.date - b.date);
            pending_collection.forEach((data) => {
                bpf_transaction_amount_collection += data.amount;
            })
            finish_collection.forEach((data) => {
                bpf_ctf_transaction_amount_collection += data.amount;
            })
            
            // billing
            var data_value = "";
            var data_value_counter = 1;
            for(let i = 0; i < pending_billing.length; i++){
                for(let j = 1; j < cod_data_list.content.length; j++){
                    if(pending_billing[i] == cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")] &&
                    month_filter.value == formatMonth(cod_data_list.content[j][findTextInArray(cod_data_list, "HAULING DATE")])){
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "ACTUAL COMPLETION DATE")])} /<br>${time_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "ACTUAL COMPLETION TIME")])}</td>
                            <td>${findClientName(cod_data_list.content[j][findTextInArray(cod_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE ID")])}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE NAME")]}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "WEIGHT")]}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "SUBMITTED BY")]}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                    else if(pending_billing[i] == cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")] &&
                    month_filter.value == "ALL"){
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "ACTUAL COMPLETION DATE")])} /<br>${time_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "ACTUAL COMPLETION TIME")])}</td>
                            <td>${findClientName(cod_data_list.content[j][findTextInArray(cod_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE ID")])}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE NAME")]}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "WEIGHT")]}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "SUBMITTED BY")]}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            pending_list_billing.innerHTML = data_value;
            
            // collection
            var data_value_collection = "";
            var data_value_counter_collection = 1;
            for (const item of pending_collection){
                for(let j = 1; j < bpf_data_list.content.length; j++){
                    if(item.bpfNumber == bpf_data_list.content[j][findTextInArray(bpf_data_list, "BPF #")] &&
                    month_filter.value == formatMonth(bpf_data_list.content[j][findTextInArray(bpf_data_list, "HAULING DATE")])){
                        var mtf = "";
                        var ltf = "";
                        for(let k = 1; k < wcf_data_list.content.length; k++){
                            if(bpf_data_list.content[j][findTextInArray(bpf_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
                                if((wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                                    mtf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                                }else{
                                    ltf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                                    for(let x = 1; x < ltf_data_list.content.length; x++){
                                        if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                            mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                                            break
                                        }
                                    }
                                }
                            }
                        }
                        data_value_collection +=`
                        <tr>
                            <td>${data_value_counter_collection}</td>
                            <td>${bpf_data_list.content[j][findTextInArray(bpf_data_list, "BPF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "HAULING DATE")])}</td>
                            <td>${bpf_data_list.content[j][findTextInArray(bpf_data_list, "SERVICE INVOICE #")]}</td>
                            <td>${date_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CREATED AT")])} /<br>${time_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CREATED AT")])}</td>
                            <td>${findClientName(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CLIENT ID")])}</td>
                            <td>${formatNumber(bpf_data_list.content[j][findTextInArray(bpf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")])}</td>
                        </tr>
                        `
                        data_value_counter_collection += 1;
                    }
                    else if(item.bpfNumber == bpf_data_list.content[j][findTextInArray(bpf_data_list, "BPF #")] &&
                    month_filter.value == "ALL"){
                        var mtf = "";
                        var ltf = "";
                        for(let k = 1; k < wcf_data_list.content.length; k++){
                            if(bpf_data_list.content[j][findTextInArray(bpf_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
                                if((wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                                    mtf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                                }else{
                                    ltf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                                    for(let x = 1; x < ltf_data_list.content.length; x++){
                                        if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                            mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                                            break
                                        }
                                    }
                                }
                            }
                        }
                        data_value_collection +=`
                        <tr>
                            <td>${data_value_counter_collection}</td>
                            <td>${bpf_data_list.content[j][findTextInArray(bpf_data_list, "BPF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "HAULING DATE")])}</td>
                            <td>${bpf_data_list.content[j][findTextInArray(bpf_data_list, "SERVICE INVOICE #")]}</td>
                            <td>${date_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CREATED AT")])} /<br>${time_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CREATED AT")])}</td>
                            <td>${findClientName(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CLIENT ID")])}</td>
                            <td>${formatNumber(bpf_data_list.content[j][findTextInArray(bpf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")])}</td>
                        </tr>
                        `
                        data_value_counter_collection += 1;
                    }
                }
            }
            pending_list_collection.innerHTML = data_value_collection;         
            
            // billing
            certified_counter_billing.innerText = mtf_cod_list.length + mtf_bpf_list.length;
            pending_counter_billing.innerText = mtf_cod_list.length;
            billed_counter_billing.innerText = mtf_bpf_list.length;

            // collection
            // const pending_collection = bpf_transaction_collection.filter((element) => !bpf_ctf_transaction_collection.includes(element));
            billed_counter_collection.innerText = pending_collection.length + finish_collection.length;
            pending_counter_collection.innerText = pending_collection.length;
            collected_counter_collection.innerText = finish_collection.length;
            billed_counter_amount_collection.innerText = formatNumber(bpf_transaction_amount_collection + bpf_ctf_transaction_amount_collection);
            pending_counter_amount_collection.innerText = formatNumber(bpf_transaction_amount_collection);
            collected_counter_amount_collection.innerText = formatNumber(bpf_ctf_transaction_amount_collection);
                        
            // billing
            var options = {
                series: [mtf_cod_list.length, mtf_bpf_list.length],
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
                    fontSize: '25px', // Increase legend font size as needed
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
                labels: ["Pending", "Billed"],
                colors: ["#dc3545", "#198754"], // Specify solid colors here
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
            
            // collection
            var options = {
                series: [pending_collection.length, finish_collection.length],
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
                    fontSize: '25px', // Increase legend font size as needed
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
                labels: ["Pending", "Collected"],
                colors: ["#dc3545", "#198754"], // Specify solid colors here
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                    }
                }]
            };
            const pieChart2 = document.querySelector("#pieChart2");
            while (pieChart2.firstChild) {
                pieChart2.removeChild(pieChart2.firstChild);
            }
            var chart = new ApexCharts(pieChart2, options);
            chart.render();
        }

        // bpf_data_list
        // FORM GENERATOR
        // const bpf_form_no = document.getElementById("bpf_form_no");
        // var last_row = bpf_data_list.content.length -1;
        // var data_info = bpf_data_list.content[last_row][findTextInArray(bpf_data_list, "BPF #")];
        // var data_counter;
        // if(last_row == 0){
        //     data_counter = 0;
        // }
        // else{
        //     data_counter = data_info.substring(9,12);
        // }
        // var year = new Date().getFullYear();
        // var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        // data_counter = (parseInt(data_counter) +1).toString().padStart(3, "0");
        // bpf_form_no.value = `BPF${year}${month}${data_counter}`;
        
        const billing_process_form = document.querySelector("#billing_process_form");
        const generate_button = billing_process_form.querySelector("#generate_button");
        const convertToPDFandDownload_button = billing_process_form.querySelector("#convertToPDFandDownload_button");
        const convertToPDF_button = billing_process_form.querySelector("#convertToPDF_button");
        const bpf_form_no_container = billing_process_form.querySelector("#bpf_form_no_container");
        const date_made_container = billing_process_form.querySelector("#date_made_container");
        const client_name_container = billing_process_form.querySelector("#client_name_container");
        const address_container = billing_process_form.querySelector("#address_container");
        const tin_id_container = billing_process_form.querySelector("#tin_id_container");
        const nature_of_business_container = billing_process_form.querySelector("#nature_of_business_container");
        const table_data = billing_process_form.querySelector("#table_data");
        const total_amount_payable_container = billing_process_form.querySelector("#total_amount_payable_container");
        const non_vatable_container = billing_process_form.querySelector("#non_vatable_container");
        const vatable_container = billing_process_form.querySelector("#vatable_container");
        const vat_container = billing_process_form.querySelector("#vat_container");
        const credits_container = billing_process_form.querySelector("#credits_container");
        const total_amount_due_container = billing_process_form.querySelector("#total_amount_due_container");
        const due_date_container = billing_process_form.querySelector("#due_date_container");
        const total_amount_container = billing_process_form.querySelector("#total_amount_container");
        const si_client_name_container = billing_process_form.querySelector("#si_client_name_container");
        const si_address_container = billing_process_form.querySelector("#si_address_container");
        const si_tin_nature_of_business_container = billing_process_form.querySelector("#si_tin_nature_of_business_container");
        const si_date_container = billing_process_form.querySelector("#si_date_container");
        const si_table_data = billing_process_form.querySelector("#si_table_data");
        const si_vat_ex_container = billing_process_form.querySelector("#si_vat_ex_container");
        const si_vat_container = billing_process_form.querySelector("#si_vat_container");
        const si_credits_container = billing_process_form.querySelector("#si_credits_container");
        const si_total_amount_container = billing_process_form.querySelector("#si_total_amount_container");
        const si_total_sales_container = billing_process_form.querySelector("#si_total_sales_container");
        const si_terms_container = billing_process_form.querySelector("#si_terms_container");
        const what_to_print = billing_process_form.querySelector("#what_to_print");
        const what_to_print2 = billing_process_form.querySelector("#what_to_print2");
        const client_id = billing_process_form.querySelector("#client");
        const wcf_form_no = billing_process_form.querySelector("#wcf_form_no1");
        const hauling_date = billing_process_form.querySelector("#hauling_date1");
        const total_vat_in = billing_process_form.querySelector("#total_vat_in1");
        const total_vat_ex = billing_process_form.querySelector("#total_vat_ex1");
        const billing_date = billing_process_form.querySelector("#billing_date");
        const terms = billing_process_form.querySelector("#terms");
        const cod_counter = document.getElementById("cod_counter");
        const signature = document.getElementById("signature");
        const submit_button = document.getElementById("submit_button");

        signature.innerHTML = `<img src="../images/FLORES_FRANK.png" alt="">`;

        var table_data_info = [];
        let table_data_transportation = [];
        let si_table_data_info = [];
        let si_table_data_transportation = [];

        var wcf_transaction = [];
        var cod_transaction = [];
        for (let i = 1; i < cod_data_list.content.length; i++) {
            if (!wcf_transaction.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "WCF #")])) {
                wcf_transaction.push(cod_data_list.content[i][findTextInArray(cod_data_list, "WCF #")]);
                cod_transaction.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
            }
        }
        function generate(){
            const search_cod_form_no = billing_process_form.querySelector("#search_cod_form_no1");
            const service_invoice_no = billing_process_form.querySelector("#service_invoice_no1");
            const type_of_form = billing_process_form.querySelector("#type_of_form");
            table_data.innerHTML = ""
            table_data_info = [];
            table_data_transportation = [];
            si_table_data_info = [];
            si_table_data_transportation = [];
            var non_vatable = 0;
            var vatable = 0;
            var credits = 0;
            var si_total_amount = 0;
            var si_credits = 0;
            var date_of_certification = "";
            var date_of_certification_transportation = "";
            var transportation_vehicle = ""
            var transportation_unit = ""
            var transportation_fee = ""
            var transportation_calculation = ""
            var term = ""
            var data3_counter = 1;
            var data4_counter = 2;
            var table_counter = 0;
            var client = "";
            var quotation_no = "";
            billing_date.value = date_decoder(new Date());
            if(type_of_form.value == "By COD (Single Transaction)"){
                for(let x = 1; x < cod_data_list.content.length; x++){
                    if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]){
                        client = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                        wcf_form_no.value = cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]
                        client_id.value = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                        hauling_date.value = date_decoder(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")])
                        break
                    }
                }
                for(let x = 1; x < cod_data_list.content.length; x++){
                    var client_name = "";
                    var address = "";
                    var nature_of_business = "";
                    date_of_certification = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                    for(let c = 1; c < client_data_list.content.length; c++){
                        if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")]){
                            client_name = client_data_list.content[c][findTextInArray(client_data_list, "BILLER NAME")];
                            address = client_data_list.content[c][findTextInArray(client_data_list, "BILLER ADDRESS")];
                            // nature_of_business = client_data_list.content[c][findTextInArray(client_data_list, "NATURE OF BUSINESS")];
                            break
                        }
                    }
                    var waste_code = "";
                    for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                        if(cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                            waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                            break
                        }
                    }
                    var waste_name = "";
                    var mode = "";
                    var unit = "";
                    var unit_price = "";
                    var vat_calculation = "";
                    for(let c = 1; c < qlf_data_list.content.length; c++){
                        if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                        cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                            waste_name = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE NAME")];
                            mode = qlf_data_list.content[c][findTextInArray(qlf_data_list, "MODE")];
                            unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")];
                            unit_price = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")];
                            vat_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")];
                            break
                        }
                        else{
                            waste_name = cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")];
                        }
                    }
                    for(let a = 1; a < wcf_data_list.content.length; a++){
                        if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")] &&
                        cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]){
                            if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "MTF"){
                                for(let b = 1; b < mtf_data_list.content.length; b++){
                                    if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                        for(let c = 1; c < qlf_data_list.content.length; c++){
                                            if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                            mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                                transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                            else if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "LTF"){
                                for(let d = 1; d < ltf_data_list.content.length; d++){
                                    if(ltf_data_list.content[d][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                        for(let b = 1; b < mtf_data_list.content.length; b++){
                                            if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == ltf_data_list.content[d][findTextInArray(ltf_data_list, "MTF #")]){
                                                for(let c = 1; c < qlf_data_list.content.length; c++){
                                                    if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                                    mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                                        transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                        transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                        transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                        transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                        term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var data = "";
                    var data3 = "";
                    if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]){
                        // && vat_calculation == "CHARGE"
                        bpf_form_no_container.innerText = bpf_form_no.value;
                        date_made_container.innerText = date_decoder(new Date());
                        client_name_container.innerHTML = client_name;
                        si_client_name_container.innerText = client_name;
                        address_container.innerText = address;
                        si_address_container.innerText = address;
                        tin_id_container.innerText = "";
                        nature_of_business_container.innerText = nature_of_business;
                        si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                        si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                        si_date_container.innerText = date_of_certification;
                        data = `
                        <tr>
                            <td>${date_of_certification}</td>
                            <td></td>
                            <td>${service_invoice_no.value}</td>
                            <td style="font-size: 10px !important; padding-top: 2px;">${cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")]}</td>
                            <td>${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                            <td>${unit}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(unit_price)}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price))}</td>
                            <td style="font-size: 10px !important">${vat_calculation}</td>
                        </tr>
                        `
                        table_data_info.push(data);
                        var si_unit_price = 0;
                        var si_amount = 0;
                        if(vat_calculation == "VAT EXCLUSIVE"){
                            vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                            si_unit_price = parseFloat(unit_price) + (parseFloat(unit_price)*.12);
                            si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                            si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                        }
                        else{
                            non_vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                            si_unit_price = parseFloat(unit_price);
                            si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                            si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                        }                    
                        data3 = `
                        <tr>
                            <td>${data3_counter}</td>
                            <td class="amount">${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                            <td>${unit}</td>
                            <td>${date_of_certification}</td>
                            <td style="font-size: 10px !important; padding-top: 5px !important;">${waste_name}</td>
                            <td class="amount">${formatNumber(si_unit_price)}</td>
                            <td class="amount">${formatNumber(si_amount)}</td>
                        </tr>
                        `
                        data3_counter += 2;
                        table_counter += 1;
                        si_table_data_info.push(data3);
                    }
                }
                for(let y = 0; y < wcf_transaction.length; y++){
                    if(search_cod_form_no.value == cod_transaction[y]){
                        for(let x = 1; x < cod_data_list.content.length; x++){
                            if(wcf_transaction[y] == cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]){
                                date_of_certification_transportation = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                            }
                        }
                        var data2 = "";
                        var data4 = "";
                        data2 = `
                        <tr>
                            <td>${date_of_certification_transportation}</td>
                            <td></td>
                            <td>${service_invoice_no.value}</td>
                            <td style="font-size: 10px !important; padding-top: 2px">TRANS. FEE ${transportation_vehicle}</td>
                            <td>${1}</td>
                            <td>${transportation_unit}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                            <td style="font-size: 10px !important">${transportation_calculation}</td>
                        </tr>
                        `
                        table_data_transportation.push(data2);
                        var si_unit_price = 0;
                        var si_amount = 0;
                        if(transportation_calculation == "VAT EXCLUSIVE"){
                            vatable += parseFloat(transportation_fee);
                            si_unit_price = parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12);
                            si_amount = (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                            si_total_amount += (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                        }
                        else{
                            non_vatable += parseFloat(transportation_fee);
                            si_unit_price = parseFloat(transportation_fee);
                            si_amount = (1 * (parseFloat(transportation_fee)));
                            si_total_amount += (1 * (parseFloat(transportation_fee)));
                        }
                        data4 = `
                        <tr>
                            <td>${data4_counter}</td>
                            <td class="amount">${1}</td>
                            <td>${transportation_unit}</td>
                            <td>${date_of_certification_transportation}</td>
                            <td style="font-size: 10px !important; padding-top: 5px !important;">TRANS. FEE ${transportation_vehicle}</td>
                            <td class="amount">${formatNumber(si_unit_price)}</td>
                            <td class="amount">${formatNumber(si_amount)}</td>
                        </tr>
                        `
                        data4_counter += 2;
                        table_counter += 1;
                        si_table_data_transportation.push(data4);
                        break
                    }
                }
                for(let x = 0; x < table_data_info.length; x++){
                    table_data.insertAdjacentHTML("beforeend", table_data_info[x])
                }
                table_data.insertAdjacentHTML("beforeend", table_data_transportation[0])
                for(let x = 0; x < si_table_data_info.length; x++){
                    si_table_data.insertAdjacentHTML("beforeend", si_table_data_info[x])
                }
                si_table_data.insertAdjacentHTML("beforeend", si_table_data_transportation[0])
                for(let x = 0; x < 20 - table_counter; x++){
                    var data5 = "";
                    data5 = `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    `
                    table_data.insertAdjacentHTML("beforeend", data5);
                }
                non_vatable_container.innerText = formatNumber(non_vatable);
                vatable_container.innerText = formatNumber(vatable);
                total_vat_ex.value = formatNumber(vatable);
                vat_container.innerText = formatNumber((parseFloat(vatable))*.12);
                total_amount_payable_container.innerText = formatNumber(non_vatable + vatable + (parseFloat(vatable))*.12);
                total_vat_in.value = formatNumber(non_vatable + vatable + (parseFloat(vatable))*.12);
                credits_container.innerText = formatNumber(credits);
                total_amount_due_container.innerText = formatNumber((non_vatable + vatable + (parseFloat(vatable))*.12) - parseFloat(credits));
                due_date_container.innerHTML = `${parseInt(term)} days<br>from the date received`;
                total_amount_container.innerText = formatNumber((non_vatable + vatable) - parseFloat(credits));
                si_vat_ex_container.innerText = formatNumber((parseFloat(si_total_amount))/1.12);
                si_vat_container.innerText = formatNumber((parseFloat(si_total_amount)) - ((parseFloat(si_total_amount))/1.12));
                si_credits_container.innerText = formatNumber(si_credits);
                si_total_amount_container.innerText = formatNumber(si_total_amount);
                si_total_sales_container.innerText = formatNumber(si_total_amount);
                si_terms_container.innerText = `${term} Days Term`;
                terms.value = term;
                convertToPDFandDownload_button.style.display = "block";
                convertToPDF_button.style.display = "block";
                submit_button.style.display = "block";
                what_to_print.style.display = "block";
                // what_to_print2.style.display = "block";
            }
            else if(type_of_form.value == "By COD (Multiple Transaction)"){

                for(let x = 1; x < cod_data_list.content.length; x++){
                    if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]){
                        client = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                        wcf_form_no.value = cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]
                        client_id.value = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                        hauling_date.value = date_decoder(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")])
                        break
                    }
                }
                for(let x = 1; x < cod_data_list.content.length; x++){
                    var client_name = "";
                    var address = "";
                    var nature_of_business = "";
                    date_of_certification = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                    for(let c = 1; c < client_data_list.content.length; c++){
                        if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")]){
                            client_name = client_data_list.content[c][findTextInArray(client_data_list, "BILLER NAME")];
                            address = client_data_list.content[c][findTextInArray(client_data_list, "BILLER ADDRESS")];
                            // nature_of_business = client_data_list.content[c][findTextInArray(client_data_list, "NATURE OF BUSINESS")];
                            break
                        }
                    }
                    var waste_code = "";
                    for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                        if(cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                            waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                            break
                        }
                    }
                    var waste_name = "";
                    var mode = "";
                    var unit = "";
                    var unit_price = "";
                    var vat_calculation = "";
                    for(let c = 1; c < qlf_data_list.content.length; c++){
                        if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                        cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                            waste_name = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE NAME")];
                            mode = qlf_data_list.content[c][findTextInArray(qlf_data_list, "MODE")];
                            unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")];
                            unit_price = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")];
                            vat_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")];
                            quotation_no = qlf_data_list.content[c][findTextInArray(qlf_data_list, "QUOTATION CODE")]
                            break
                        }
                        else{
                            waste_name = cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")];
                        }
                    }
                    for(let a = 1; a < wcf_data_list.content.length; a++){
                        if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")] &&
                            cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]){
                            if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "MTF"){
                                for(let b = 1; b < mtf_data_list.content.length; b++){
                                    if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                        for(let c = 1; c < qlf_data_list.content.length; c++){
                                            if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                            mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")] &&
                                            quotation_no == qlf_data_list.content[c][findTextInArray(qlf_data_list, "QUOTATION CODE")]){
                                                transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                console.log(term)
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                            else if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "LTF"){
                                for(let d = 1; d < ltf_data_list.content.length; d++){
                                    if(ltf_data_list.content[d][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                        for(let b = 1; b < mtf_data_list.content.length; b++){
                                            if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == ltf_data_list.content[d][findTextInArray(ltf_data_list, "MTF #")]){
                                                for(let c = 1; c < qlf_data_list.content.length; c++){
                                                    if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                                    mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")] &&
                                                    quotation_no == qlf_data_list.content[c][findTextInArray(qlf_data_list, "QUOTATION CODE")]){
                                                        transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                        transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                        transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                        transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                        term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                        console.log(term)
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var data = "";
                    var data3 = "";
                    if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]){
                        // && vat_calculation == "CHARGE"
                        bpf_form_no_container.innerText = bpf_form_no.value;
                        date_made_container.innerText = date_decoder(new Date());
                        client_name_container.innerHTML = client_name;
                        si_client_name_container.innerText = client_name;
                        address_container.innerText = address;
                        si_address_container.innerText = address;
                        tin_id_container.innerText = "";
                        nature_of_business_container.innerText = nature_of_business;
                        si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                        si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                        si_date_container.innerText = date_of_certification;
                        data = `
                        <tr>
                            <td>${date_of_certification}</td>
                            <td></td>
                            <td>${service_invoice_no.value}</td>
                            <td style="font-size: 10px !important; padding-top: 2px;">${cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")]}</td>
                            <td>${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                            <td>${unit}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(unit_price)}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price))}</td>
                            <td style="font-size: 10px !important">${vat_calculation}</td>
                        </tr>
                        `
                        table_data_info.push(data);
                        var si_unit_price = 0;
                        var si_amount = 0;
                        if(vat_calculation == "VAT EXCLUSIVE"){
                            vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                            si_unit_price = parseFloat(unit_price) + (parseFloat(unit_price)*.12);
                            si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                            si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                        }
                        else{
                            non_vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                            si_unit_price = parseFloat(unit_price);
                            si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                            si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                        }                    
                        data3 = `
                        <tr>
                            <td>${data3_counter}</td>
                            <td class="amount">${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                            <td>${unit}</td>
                            <td>${date_of_certification}</td>
                            <td style="font-size: 10px !important; padding-top: 5px !important;">${waste_name}</td>
                            <td class="amount">${formatNumber(si_unit_price)}</td>
                            <td class="amount">${formatNumber(si_amount)}</td>
                        </tr>
                        `
                        data3_counter += 2;
                        table_counter += 1;
                        si_table_data_info.push(data3);
                    }
                }
                for(let y = 0; y < wcf_transaction.length; y++){
                    if(search_cod_form_no.value == cod_transaction[y]){
                        for(let x = 1; x < cod_data_list.content.length; x++){
                            if(wcf_transaction[y] == cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]){
                                date_of_certification_transportation = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                            }
                        }
                        var data2 = "";
                        var data4 = "";
                        data2 = `
                        <tr>
                            <td>${date_of_certification_transportation}</td>
                            <td></td>
                            <td>${service_invoice_no.value}</td>
                            <td style="font-size: 10px !important; padding-top: 2px">TRANS. FEE ${transportation_vehicle}</td>
                            <td>${1}</td>
                            <td>${transportation_unit}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                            <td style="font-size: 10px !important">${transportation_calculation}</td>
                        </tr>
                        `
                        table_data_transportation.push(data2);
                        var si_unit_price = 0;
                        var si_amount = 0;
                        if(transportation_calculation == "VAT EXCLUSIVE"){
                            vatable += parseFloat(transportation_fee);
                            si_unit_price = parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12);
                            si_amount = (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                            si_total_amount += (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                        }
                        else{
                            non_vatable += parseFloat(transportation_fee);
                            si_unit_price = parseFloat(transportation_fee);
                            si_amount = (1 * (parseFloat(transportation_fee)));
                            si_total_amount += (1 * (parseFloat(transportation_fee)));
                        }
                        data4 = `
                        <tr>
                            <td>${data4_counter}</td>
                            <td class="amount">${1}</td>
                            <td>${transportation_unit}</td>
                            <td>${date_of_certification_transportation}</td>
                            <td style="font-size: 10px !important; padding-top: 5px !important;">TRANS. FEE ${transportation_vehicle}</td>
                            <td class="amount">${formatNumber(si_unit_price)}</td>
                            <td class="amount">${formatNumber(si_amount)}</td>
                        </tr>
                        `
                        data4_counter += 2;
                        table_counter += 1;
                        si_table_data_transportation.push(data4);

                    }
                }
                for(let x = 0; x < table_data_info.length; x++){
                    table_data.insertAdjacentHTML("beforeend", table_data_info[x])
                    table_data.insertAdjacentHTML("beforeend", table_data_transportation[x])
                }
                for(let x = 0; x < si_table_data_info.length; x++){
                    si_table_data.insertAdjacentHTML("beforeend", si_table_data_info[x])
                    si_table_data.insertAdjacentHTML("beforeend", si_table_data_transportation[x])
                }
                for(let x = 0; x < 20 - table_counter; x++){
                    var data5 = "";
                    data5 = `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    `
                    table_data.insertAdjacentHTML("beforeend", data5);
                }
                non_vatable_container.innerText = formatNumber(non_vatable);
                vatable_container.innerText = formatNumber(vatable);
                total_vat_ex.value = formatNumber(vatable);
                vat_container.innerText = formatNumber((parseFloat(vatable))*.12);
                total_amount_payable_container.innerText = formatNumber(non_vatable + vatable + (parseFloat(vatable))*.12);
                total_vat_in.value = formatNumber(non_vatable + vatable + (parseFloat(vatable))*.12);
                credits_container.innerText = formatNumber(credits);
                total_amount_due_container.innerText = formatNumber((non_vatable + vatable + (parseFloat(vatable))*.12) - parseFloat(credits));
                due_date_container.innerHTML = `${parseInt(term)} days<br>from the date received`;
                total_amount_container.innerText = formatNumber((non_vatable + vatable) - parseFloat(credits));
                si_vat_ex_container.innerText = formatNumber((parseFloat(si_total_amount))/1.12);
                si_vat_container.innerText = formatNumber((parseFloat(si_total_amount)) - ((parseFloat(si_total_amount))/1.12));
                si_credits_container.innerText = formatNumber(si_credits);
                si_total_amount_container.innerText = formatNumber(si_total_amount);
                si_total_sales_container.innerText = formatNumber(si_total_amount);
                si_terms_container.innerText = `${term} Days Term`;
                terms.value = term;
                convertToPDFandDownload_button.style.display = "block";
                convertToPDF_button.style.display = "block";
                what_to_print.style.display = "block";
                submit_button.style.display = "block";
                // what_to_print2.style.display = "block";
            }
            else if(type_of_form.value == "By Multiple COD (Single Transaction)"){
                for(let s = 1; s <= cod_counter.value; s++){
                    var individual_non_vatable = 0;
                    var individual_vatable = 0;    
                    table_data_info = [];
                    const search_cod_form_no = billing_process_form.querySelector(`#search_cod_form_no${s}`);
                    const service_invoice_no = billing_process_form.querySelector(`#service_invoice_no${s}`);
                    const wcf_form_no = billing_process_form.querySelector(`#wcf_form_no${s}`);
                    const hauling_date = billing_process_form.querySelector(`#hauling_date${s}`);
                    const total_vat_in = billing_process_form.querySelector(`#total_vat_in${s}`);
                    const total_vat_ex = billing_process_form.querySelector(`#total_vat_ex${s}`);
                    for(let x = 1; x < cod_data_list.content.length; x++){
                        if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]){
                            client = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                            wcf_form_no.value = cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]
                            client_id.value = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                            hauling_date.value = date_decoder(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")])
                            break
                        }
                    }
                    for(let x = 1; x < cod_data_list.content.length; x++){
                        var client_name = "";
                        var address = "";
                        var nature_of_business = "";
                        date_of_certification = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                        for(let c = 1; c < client_data_list.content.length; c++){
                            if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")]){
                                client_name = client_data_list.content[c][findTextInArray(client_data_list, "BILLER NAME")];
                                address = client_data_list.content[c][findTextInArray(client_data_list, "BILLER ADDRESS")];
                                // nature_of_business = client_data_list.content[c][findTextInArray(client_data_list, "NATURE OF BUSINESS")];
                                break
                            }
                        }
                        var waste_code = "";
                        for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                            if(cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                                waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                                break
                            }
                        }
                        var waste_name = "";
                        var mode = "";
                        var unit = "";
                        var unit_price = "";
                        var vat_calculation = "";
                        for(let c = 1; c < qlf_data_list.content.length; c++){
                            if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                            cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                waste_name = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE NAME")];
                                mode = qlf_data_list.content[c][findTextInArray(qlf_data_list, "MODE")];
                                unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")];
                                unit_price = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")];
                                vat_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")];
                                break
                            }
                            else{
                                waste_name = cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")];
                            }
                        }
                        for(let a = 1; a < wcf_data_list.content.length; a++){
                            if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")] &&
                            cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]){
                                if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "MTF"){
                                    for(let b = 1; b < mtf_data_list.content.length; b++){
                                        if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                            for(let c = 1; c < qlf_data_list.content.length; c++){
                                                if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                                mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                                    transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                    transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                    transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                    transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                    term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                else if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "LTF"){
                                    for(let d = 1; d < ltf_data_list.content.length; d++){
                                        if(ltf_data_list.content[d][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                            for(let b = 1; b < mtf_data_list.content.length; b++){
                                                if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == ltf_data_list.content[d][findTextInArray(ltf_data_list, "MTF #")]){
                                                    for(let c = 1; c < qlf_data_list.content.length; c++){
                                                        if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                                        mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                                            transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                            transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                            transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                            transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                            term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        var data = "";
                        var data3 = "";
                        if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]){
                            // && vat_calculation == "CHARGE"
                            bpf_form_no_container.innerText = bpf_form_no.value;
                            date_made_container.innerText = date_decoder(new Date());
                            client_name_container.innerHTML = client_name;
                            si_client_name_container.innerText = client_name;
                            address_container.innerText = address;
                            si_address_container.innerText = address;
                            tin_id_container.innerText = "";
                            nature_of_business_container.innerText = nature_of_business;
                            si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                            si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                            si_date_container.innerText = date_of_certification;
                            data = `
                            <tr>
                                <td>${date_of_certification}</td>
                                <td></td>
                                <td>${service_invoice_no.value}</td>
                                <td style="font-size: 10px !important; padding-top: 2px;">${cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")]}</td>
                                <td>${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                                <td>${unit}</td>
                                <td style="text-align: right; padding-right: 5px">${formatNumber(unit_price)}</td>
                                <td style="text-align: right; padding-right: 5px">${formatNumber(parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price))}</td>
                                <td style="font-size: 10px !important">${vat_calculation}</td>
                            </tr>
                            `
                            table_data_info.push(data);
                            var si_unit_price = 0;
                            var si_amount = 0;
                            if(vat_calculation == "VAT EXCLUSIVE"){
                                vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                individual_vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_unit_price = parseFloat(unit_price) + (parseFloat(unit_price)*.12);
                                si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                                si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                            }
                            else{
                                non_vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                individual_non_vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_unit_price = parseFloat(unit_price);
                                si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                            }                    
                            data3 = `
                            <tr>
                                <td>${data3_counter}</td>
                                <td class="amount">${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                                <td>${unit}</td>
                                <td>${date_of_certification}</td>
                                <td style="font-size: 10px !important; padding-top: 5px !important;">${waste_name}</td>
                                <td class="amount">${formatNumber(si_unit_price)}</td>
                                <td class="amount">${formatNumber(si_amount)}</td>
                            </tr>
                            `
                            data3_counter += 2;
                            table_counter += 1;
                            si_table_data_info.push(data3);
                        }
                    }
                    for(let y = 0; y < wcf_transaction.length; y++){
                        if(search_cod_form_no.value == cod_transaction[y]){
                            for(let x = 1; x < cod_data_list.content.length; x++){
                                if(wcf_transaction[y] == cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]){
                                    date_of_certification_transportation = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                                }
                            }
                            var data2 = "";
                            var data4 = "";
                            data2 = `
                            <tr>
                                <td>${date_of_certification_transportation}</td>
                                <td></td>
                                <td>${service_invoice_no.value}</td>
                                <td style="font-size: 10px !important; padding-top: 2px">TRANS. FEE ${transportation_vehicle}</td>
                                <td>${1}</td>
                                <td>${transportation_unit}</td>
                                <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                                <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                                <td style="font-size: 10px !important">${transportation_calculation}</td>
                            </tr>
                            `
                            table_data_transportation.push(data2);
                            var si_unit_price = 0;
                            var si_amount = 0;
                            if(transportation_calculation == "VAT EXCLUSIVE"){
                                vatable += parseFloat(transportation_fee);
                                individual_vatable += parseFloat(transportation_fee);
                                si_unit_price = parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12);
                                si_amount = (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                                si_total_amount += (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                            }
                            else{
                                non_vatable += parseFloat(transportation_fee);
                                individual_non_vatable += parseFloat(transportation_fee);
                                si_unit_price = parseFloat(transportation_fee);
                                si_amount = (1 * (parseFloat(transportation_fee)));
                                si_total_amount += (1 * (parseFloat(transportation_fee)));
                            }
                            data4 = `
                            <tr>
                                <td>${data4_counter}</td>
                                <td class="amount">${1}</td>
                                <td>${transportation_unit}</td>
                                <td>${date_of_certification_transportation}</td>
                                <td style="font-size: 10px !important; padding-top: 5px !important;">TRANS. FEE ${transportation_vehicle}</td>
                                <td class="amount">${formatNumber(si_unit_price)}</td>
                                <td class="amount">${formatNumber(si_amount)}</td>
                            </tr>
                            `
                            data4_counter += 2;
                            table_counter += 1;
                            si_table_data_transportation.push(data4);
                            break
                        }
                    }
                    for(let x = 0; x < table_data_info.length; x++){
                        table_data.insertAdjacentHTML("beforeend", table_data_info[x])
                    }
                    table_data.insertAdjacentHTML("beforeend", table_data_transportation[0])
                    var space = 
                    `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    `
                    table_data.insertAdjacentHTML("beforeend", space)
                    for(let x = 0; x < si_table_data_info.length; x++){
                        si_table_data.insertAdjacentHTML("beforeend", si_table_data_info[x])
                    }
                    total_vat_ex.value = formatNumber(individual_vatable);
                    total_vat_in.value = formatNumber(individual_non_vatable + individual_vatable + (parseFloat(individual_vatable))*.12);
                }
                si_table_data.insertAdjacentHTML("beforeend", si_table_data_transportation[0])
                for(let x = 0; x < 20 - table_counter; x++){
                    var data5 = "";
                    data5 = `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    `
                    table_data.insertAdjacentHTML("beforeend", data5);
                }
                non_vatable_container.innerText = formatNumber(non_vatable);
                vatable_container.innerText = formatNumber(vatable);
                vat_container.innerText = formatNumber((parseFloat(vatable))*.12);
                total_amount_payable_container.innerText = formatNumber(non_vatable + vatable + (parseFloat(vatable))*.12);
                credits_container.innerText = formatNumber(credits);
                total_amount_due_container.innerText = formatNumber((non_vatable + vatable + (parseFloat(vatable))*.12) - parseFloat(credits));
                due_date_container.innerHTML = `${parseInt(term)} days<br>from the date received`;
                total_amount_container.innerText = formatNumber((non_vatable + vatable) - parseFloat(credits));
                si_vat_ex_container.innerText = formatNumber((parseFloat(si_total_amount))/1.12);
                si_vat_container.innerText = formatNumber((parseFloat(si_total_amount)) - ((parseFloat(si_total_amount))/1.12));
                si_credits_container.innerText = formatNumber(si_credits);
                si_total_amount_container.innerText = formatNumber(si_total_amount);
                si_total_sales_container.innerText = formatNumber(si_total_amount);
                si_terms_container.innerText = `${term} Days Term`;
                terms.value = term;
                convertToPDFandDownload_button.style.display = "block";
                convertToPDF_button.style.display = "block";
                what_to_print.style.display = "block";
                submit_button.style.display = "block";
                // what_to_print2.style.display = "block";
            }
            else if(type_of_form.value == "By Multiple COD (Multiple Transaction)"){
                for(let s = 1; s <= cod_counter.value; s++){
                    table_data_info = [];
                    const search_cod_form_no = billing_process_form.querySelector(`#search_cod_form_no${s}`);
                    const service_invoice_no = billing_process_form.querySelector(`#service_invoice_no${s}`);
                    for(let x = 1; x < cod_data_list.content.length; x++){
                        if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]){
                            client = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                            wcf_form_no.value = cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]
                            client_id.value = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                            hauling_date.value = date_decoder(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")])
                            break
                        }
                    }
                    for(let x = 1; x < cod_data_list.content.length; x++){
                        var client_name = "";
                        var address = "";
                        var nature_of_business = "";
                        date_of_certification = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                        for(let c = 1; c < client_data_list.content.length; c++){
                            if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")]){
                                client_name = client_data_list.content[c][findTextInArray(client_data_list, "BILLER NAME")];
                                address = client_data_list.content[c][findTextInArray(client_data_list, "BILLER ADDRESS")];
                                // nature_of_business = client_data_list.content[c][findTextInArray(client_data_list, "NATURE OF BUSINESS")];
                                break
                            }
                        }
                        var waste_code = "";
                        for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                            if(cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                                waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                                break
                            }
                        }
                        var waste_name = "";
                        var mode = "";
                        var unit = "";
                        var unit_price = "";
                        var vat_calculation = "";
                        for(let c = 1; c < qlf_data_list.content.length; c++){
                            if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                            cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                waste_name = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE NAME")];
                                mode = qlf_data_list.content[c][findTextInArray(qlf_data_list, "MODE")];
                                unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")];
                                unit_price = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")];
                                vat_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")];
                                break
                            }
                            else{
                                waste_name = cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")];
                            }
                        }
                        for(let a = 1; a < wcf_data_list.content.length; a++){
                            if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")] &&
                                cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]){
                                if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "MTF"){
                                    for(let b = 1; b < mtf_data_list.content.length; b++){
                                        if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                            for(let c = 1; c < qlf_data_list.content.length; c++){
                                                if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                                mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                                    transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                    transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                    transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                    transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                    term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                else if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "LTF"){
                                    for(let d = 1; d < ltf_data_list.content.length; d++){
                                        if(ltf_data_list.content[d][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                            for(let b = 1; b < mtf_data_list.content.length; b++){
                                                if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == ltf_data_list.content[d][findTextInArray(ltf_data_list, "MTF #")]){
                                                    for(let c = 1; c < qlf_data_list.content.length; c++){
                                                        if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                                        mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                                            transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                            transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                            transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                            transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                            term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        var data = "";
                        var data3 = "";
                        if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]){
                            // && vat_calculation == "CHARGE"
                            bpf_form_no_container.innerText = bpf_form_no.value;
                            date_made_container.innerText = date_decoder(new Date());
                            client_name_container.innerHTML = client_name;
                            si_client_name_container.innerText = client_name;
                            address_container.innerText = address;
                            si_address_container.innerText = address;
                            tin_id_container.innerText = "";
                            nature_of_business_container.innerText = nature_of_business;
                            si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                            si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                            si_date_container.innerText = date_of_certification;
                            data = `
                            <tr>
                                <td>${date_of_certification}</td>
                                <td></td>
                                <td>${service_invoice_no.value}</td>
                                <td style="font-size: 10px !important; padding-top: 2px;">${cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")]}</td>
                                <td>${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                                <td>${unit}</td>
                                <td style="text-align: right; padding-right: 5px">${formatNumber(unit_price)}</td>
                                <td style="text-align: right; padding-right: 5px">${formatNumber(parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price))}</td>
                                <td style="font-size: 10px !important">${vat_calculation}</td>
                            </tr>
                            `
                            table_data_info.push(data);
                            var si_unit_price = 0;
                            var si_amount = 0;
                            if(vat_calculation == "VAT EXCLUSIVE"){
                                vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_unit_price = parseFloat(unit_price) + (parseFloat(unit_price)*.12);
                                si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                                si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                            }
                            else{
                                non_vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_unit_price = parseFloat(unit_price);
                                si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                            }                    
                            data3 = `
                            <tr>
                                <td>${data3_counter}</td>
                                <td class="amount">${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                                <td>${unit}</td>
                                <td>${date_of_certification}</td>
                                <td style="font-size: 10px !important; padding-top: 5px !important;">${waste_name}</td>
                                <td class="amount">${formatNumber(si_unit_price)}</td>
                                <td class="amount">${formatNumber(si_amount)}</td>
                            </tr>
                            `
                            data3_counter += 2;
                            table_counter += 1;
                            si_table_data_info.push(data3);
                        }
                    }
                    for(let y = 0; y < wcf_transaction.length; y++){
                        if(search_cod_form_no.value == cod_transaction[y]){
                            for(let x = 1; x < cod_data_list.content.length; x++){
                                if(wcf_transaction[y] == cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]){
                                    date_of_certification_transportation = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                                }
                            }
                            var data2 = "";
                            var data4 = "";
                            data2 = `
                            <tr>
                                <td>${date_of_certification_transportation}</td>
                                <td></td>
                                <td>${service_invoice_no.value}</td>
                                <td style="font-size: 10px !important; padding-top: 2px">TRANS. FEE ${transportation_vehicle}</td>
                                <td>${1}</td>
                                <td>${transportation_unit}</td>
                                <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                                <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                                <td style="font-size: 10px !important">${transportation_calculation}</td>
                            </tr>
                            `
                            table_data_transportation.push(data2);
                            var si_unit_price = 0;
                            var si_amount = 0;
                            if(transportation_calculation == "VAT EXCLUSIVE"){
                                vatable += parseFloat(transportation_fee);
                                si_unit_price = parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12);
                                si_amount = (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                                si_total_amount += (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                            }
                            else{
                                non_vatable += parseFloat(transportation_fee);
                                si_unit_price = parseFloat(transportation_fee);
                                si_amount = (1 * (parseFloat(transportation_fee)));
                                si_total_amount += (1 * (parseFloat(transportation_fee)));
                            }
                            data4 = `
                            <tr>
                                <td>${data4_counter}</td>
                                <td class="amount">${1}</td>
                                <td>${transportation_unit}</td>
                                <td>${date_of_certification_transportation}</td>
                                <td style="font-size: 10px !important; padding-top: 5px !important;">TRANS. FEE ${transportation_vehicle}</td>
                                <td class="amount">${formatNumber(si_unit_price)}</td>
                                <td class="amount">${formatNumber(si_amount)}</td>
                            </tr>
                            `
                            data4_counter += 2;
                            table_counter += 1;
                            si_table_data_transportation.push(data4);
                        }
                    }
                    for(let x = 0; x < table_data_info.length; x++){
                        table_data.insertAdjacentHTML("beforeend", table_data_info[x])
                        table_data.insertAdjacentHTML("beforeend", table_data_transportation[x])
                    }
                    var space = 
                    `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    `
                    table_data.insertAdjacentHTML("beforeend", space)
                    for(let x = 0; x < si_table_data_info.length; x++){
                        si_table_data.insertAdjacentHTML("beforeend", si_table_data_info[x])
                        si_table_data.insertAdjacentHTML("beforeend", si_table_data_transportation[x])
                    }
                }
                for(let x = 0; x < 20 - table_counter; x++){
                    var data5 = "";
                    data5 = `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    `
                    table_data.insertAdjacentHTML("beforeend", data5);
                }
                non_vatable_container.innerText = formatNumber(non_vatable);
                vatable_container.innerText = formatNumber(vatable);
                vat_container.innerText = formatNumber((parseFloat(vatable))*.12);
                total_amount_payable_container.innerText = formatNumber(non_vatable + vatable + (parseFloat(vatable))*.12);
                credits_container.innerText = formatNumber(credits);
                total_amount_due_container.innerText = formatNumber((non_vatable + vatable + (parseFloat(vatable))*.12) - parseFloat(credits));
                due_date_container.innerHTML = `${parseInt(term)} days<br>from the date received`;
                total_amount_container.innerText = formatNumber((non_vatable + vatable) - parseFloat(credits));
                si_vat_ex_container.innerText = formatNumber((parseFloat(si_total_amount))/1.12);
                si_vat_container.innerText = formatNumber((parseFloat(si_total_amount)) - ((parseFloat(si_total_amount))/1.12));
                si_credits_container.innerText = formatNumber(si_credits);
                si_total_amount_container.innerText = formatNumber(si_total_amount);
                si_total_sales_container.innerText = formatNumber(si_total_amount);
                si_terms_container.innerText = `${term} Days Term`;
                terms.value = term;
                convertToPDFandDownload_button.style.display = "block";
                convertToPDF_button.style.display = "block";
                submit_button.style.display = "block";
                what_to_print.style.display = "block";
                // what_to_print2.style.display = "block";
            }
            else if(type_of_form.value == "By Date (Single Transaction)"){
                const search_date = document.getElementById("search_date1");
                const client_input = document.getElementById("client_input");
                var cod_no;
                var client_id_input = "";
                for(let c = 1; c < client_data_list.content.length; c++){
                    if(client_input.value == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT NAME")]){
                        client_id_input = client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")];
                        break
                    }
                }
                for(let x = 1; x < cod_data_list.content.length; x++){
                    if(date_decoder(new Date(search_date.value)) == date_decoder(new Date(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")])) &&
                    client_id_input == cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]){
                        client = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                        wcf_form_no.value = cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]
                        client_id.value = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                        hauling_date.value = date_decoder(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")])
                        cod_no = cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]
                        break
                    }
                }
                
                for(let x = 1; x < cod_data_list.content.length; x++){
                    var client_name = "";
                    var address = "";
                    var nature_of_business = "";
                    for(let c = 1; c < client_data_list.content.length; c++){
                        if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")]){
                            client_name = client_data_list.content[c][findTextInArray(client_data_list, "BILLER NAME")];
                            address = client_data_list.content[c][findTextInArray(client_data_list, "BILLER ADDRESS")];
                            // nature_of_business = client_data_list.content[c][findTextInArray(client_data_list, "NATURE OF BUSINESS")];
                            break
                        }
                    }
                    var waste_code = "";
                    for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                        if(cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                            waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                            break
                        }
                    }
                    var waste_name = "";
                    var mode = "";
                    var unit = "";
                    var unit_price = "";
                    var vat_calculation = "";
                    for(let c = 1; c < qlf_data_list.content.length; c++){
                        if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                        cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                            waste_name = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE NAME")];
                            mode = qlf_data_list.content[c][findTextInArray(qlf_data_list, "MODE")];
                            unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")];
                            unit_price = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")];
                            vat_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")];
                            break
                        }
                        else{
                            waste_name = cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")];
                        }
                    }
                    for(let a = 1; a < wcf_data_list.content.length; a++){
                        if(wcf_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")] &&
                        cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]){
                            if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "MTF"){
                                for(let b = 1; b < mtf_data_list.content.length; b++){
                                    if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                        for(let c = 1; c < qlf_data_list.content.length; c++){
                                            if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                            mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                                transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                            else if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "LTF"){
                                for(let d = 1; d < ltf_data_list.content.length; d++){
                                    if(ltf_data_list.content[d][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                        for(let b = 1; b < mtf_data_list.content.length; b++){
                                            if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == ltf_data_list.content[d][findTextInArray(ltf_data_list, "MTF #")]){
                                                for(let c = 1; c < qlf_data_list.content.length; c++){
                                                    if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                                    mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                                        transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                        transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                        transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                        transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                        term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var data = "";
                    var data3 = "";
                    if(wcf_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]){
                        // && vat_calculation == "CHARGE"
                        bpf_form_no_container.innerText = bpf_form_no.value;
                        date_made_container.innerText = date_decoder(new Date());
                        client_name_container.innerHTML = client_name;
                        si_client_name_container.innerText = client_name;
                        address_container.innerText = address;
                        si_address_container.innerText = address;
                        tin_id_container.innerText = "";
                        nature_of_business_container.innerText = nature_of_business;
                        si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                        si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                        date_of_certification = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                        si_date_container.innerText = date_of_certification;
                        data = `
                        <tr>
                            <td>${date_of_certification}</td>
                            <td></td>
                            <td>${service_invoice_no.value}</td>
                            <td style="font-size: 10px !important; padding-top: 2px;">${cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")]}</td>
                            <td>${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                            <td>${unit}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(unit_price)}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price))}</td>
                            <td style="font-size: 10px !important">${vat_calculation}</td>
                        </tr>
                        `
                        table_data_info.push(data);
                        var si_unit_price = 0;
                        var si_amount = 0;
                        if(mode == "CHARGE"){
                            if(vat_calculation == "VAT EXCLUSIVE"){
                                vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_unit_price = parseFloat(unit_price) + (parseFloat(unit_price)*.12);
                                si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                                si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                            }
                            else{
                                non_vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_unit_price = parseFloat(unit_price);
                                si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                            }
                        }
                        else if(mode == "BUYING"){
                            if(vat_calculation == "VAT EXCLUSIVE"){
                                credits += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_credits += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_unit_price = parseFloat(unit_price) + (parseFloat(unit_price)*.12);
                                si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                                si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                            }
                            else{
                                credits += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_credits += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_unit_price = parseFloat(unit_price);
                                si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                            }
                        }
                        data3 = `
                        <tr>
                            <td>${data3_counter}</td>
                            <td class="amount">${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                            <td>${unit}</td>
                            <td>${date_of_certification}</td>
                            <td style="font-size: 10px !important; padding-top: 5px !important;">${waste_name}</td>
                            <td class="amount">${formatNumber(si_unit_price)}</td>
                            <td class="amount">${formatNumber(si_amount)}</td>
                        </tr>
                        `
                        data3_counter += 2;
                        table_counter += 1;
                        si_table_data_info.push(data3);
                    }
                }
                for(let y = 0; y < wcf_transaction.length; y++){
                    if(cod_no == cod_transaction[y]){
                        for(let x = 1; x < cod_data_list.content.length; x++){
                            if(wcf_transaction[y] == cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]){
                                date_of_certification_transportation = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                            }
                        }
                        var data2 = "";
                        var data4 = "";
                        data2 = `
                        <tr>
                            <td>${date_of_certification}</td>
                            <td></td>
                            <td>${service_invoice_no.value}</td>
                            <td style="font-size: 10px !important; padding-top: 2px">TRANS. FEE ${transportation_vehicle}</td>
                            <td>${1}</td>
                            <td>${transportation_unit}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                            <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                            <td style="font-size: 10px !important">${transportation_calculation}</td>
                        </tr>
                        `
                        table_data_transportation.push(data2);
                        var si_unit_price = 0;
                        var si_amount = 0;
                        if(transportation_calculation == "VAT EXCLUSIVE"){
                            vatable += parseFloat(transportation_fee);
                            si_unit_price = parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12);
                            si_amount = (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                            si_total_amount += (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                        }
                        else{
                            non_vatable += parseFloat(transportation_fee);
                            si_unit_price = parseFloat(transportation_fee);
                            si_amount = (1 * (parseFloat(transportation_fee)));
                            si_total_amount += (1 * (parseFloat(transportation_fee)));
                        }
                        data4 = `
                        <tr>
                            <td>${data4_counter}</td>
                            <td class="amount">${1}</td>
                            <td>${transportation_unit}</td>
                            <td>${date_of_certification}</td>
                            <td style="font-size: 10px !important; padding-top: 5px !important;">TRANS. FEE ${transportation_vehicle}</td>
                            <td class="amount">${formatNumber(si_unit_price)}</td>
                            <td class="amount">${formatNumber(si_amount)}</td>
                        </tr>
                        `
                        data4_counter += 2;
                        table_counter += 1;
                        si_table_data_transportation.push(data4);
                        break
                    }
                }
                for(let x = 0; x < table_data_info.length; x++){
                    table_data.insertAdjacentHTML("beforeend", table_data_info[x])
                }
                table_data.insertAdjacentHTML("beforeend", table_data_transportation[0])
                for(let x = 0; x < si_table_data_info.length; x++){
                    si_table_data.insertAdjacentHTML("beforeend", si_table_data_info[x])
                }
                si_table_data.insertAdjacentHTML("beforeend", si_table_data_transportation[0])
                for(let x = 0; x < 20 - table_counter; x++){
                    var data5 = "";
                    data5 = `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    `
                    table_data.insertAdjacentHTML("beforeend", data5);
                }
                non_vatable_container.innerText = formatNumber(non_vatable);
                vatable_container.innerText = formatNumber(vatable);
                total_vat_ex.value = formatNumber(vatable);
                vat_container.innerText = formatNumber((parseFloat(vatable))*.12);
                total_amount_payable_container.innerText = formatNumber(non_vatable + vatable + (parseFloat(vatable))*.12);
                total_vat_in.value = formatNumber(non_vatable + vatable + (parseFloat(vatable))*.12);
                credits_container.innerText = formatNumber(credits);
                total_amount_due_container.innerText = formatNumber((non_vatable + vatable + (parseFloat(vatable))*.12) - parseFloat(credits));
                due_date_container.innerHTML = `${parseInt(term)} days<br>from the date received`;
                total_amount_container.innerText = formatNumber((non_vatable + vatable) - parseFloat(credits));
                si_vat_ex_container.innerText = formatNumber((parseFloat(si_total_amount))/1.12);
                si_vat_container.innerText = formatNumber((parseFloat(si_total_amount)) - ((parseFloat(si_total_amount))/1.12));
                si_credits_container.innerText = formatNumber(si_credits);
                si_total_amount_container.innerText = formatNumber(si_total_amount);
                si_total_sales_container.innerText = formatNumber(si_total_amount);
                si_terms_container.innerText = `${term} Days Term`;
                terms.value = term;
                convertToPDFandDownload_button.style.display = "block";
                convertToPDF_button.style.display = "block";
                submit_button.style.display = "block";
                what_to_print.style.display = "block";
                // what_to_print2.style.display = "block";
            }
            else if(type_of_form.value == "By Date (Multiple Transaction)"){
                for(let s = 1; s <= cod_counter.value; s++){
                    table_data_info = [];
                    const client_input = document.getElementById("client_input");
                    const search_date = billing_process_form.querySelector(`#search_date${s}`);
                    const service_invoice_no = billing_process_form.querySelector(`#service_invoice_no${s}`);
                    var is_transportation = true;
                    var cod_no;
                    var client_id_input = "";
                    for(let c = 1; c < client_data_list.content.length; c++){
                        if(client_input.value == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT NAME")]){
                            client_id_input = client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")];
                            break
                        }
                    }
                    for(let x = 1; x < cod_data_list.content.length; x++){
                        if(date_decoder(new Date(search_date.value)) == date_decoder(new Date(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")])) &&
                        client_id_input == cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]){
                            client = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                            wcf_form_no.value = cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]
                            client_id.value = cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")]
                            hauling_date.value = date_decoder(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")])
                            cod_no = cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]
                            break
                        }
                    }
                    for(let x = 1; x < cod_data_list.content.length; x++){
                        var client_name = "";
                        var address = "";
                        var nature_of_business = "";
                        for(let c = 1; c < client_data_list.content.length; c++){
                            if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")]){
                                client_name = client_data_list.content[c][findTextInArray(client_data_list, "BILLER NAME")];
                                address = client_data_list.content[c][findTextInArray(client_data_list, "BILLER ADDRESS")];
                                // nature_of_business = client_data_list.content[c][findTextInArray(client_data_list, "NATURE OF BUSINESS")];
                                break
                            }
                        }
                        var waste_code = "";
                        for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                            if(cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                                waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                                break
                            }
                        }
                        var waste_name = "";
                        var mode = "";
                        var unit = "";
                        var unit_price = "";
                        var vat_calculation = "";
                        for(let c = 1; c < qlf_data_list.content.length; c++){
                            if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                            cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                waste_name = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE NAME")];
                                mode = qlf_data_list.content[c][findTextInArray(qlf_data_list, "MODE")];
                                unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")];
                                unit_price = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")];
                                vat_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")];
                                break
                            }
                            else{
                                waste_name = cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")];
                            }
                        }
                        for(let a = 1; a < wcf_data_list.content.length; a++){
                            if(wcf_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")] &&
                            cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]){
                                if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "MTF"){
                                    for(let b = 1; b < mtf_data_list.content.length; b++){
                                        if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                            for(let c = 1; c < qlf_data_list.content.length; c++){
                                                if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                                mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                                    transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                    transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                    transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                    transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                    term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                else if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).substring(0,3) == "LTF"){
                                    for(let d = 1; d < ltf_data_list.content.length; d++){
                                        if(ltf_data_list.content[d][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                            for(let b = 1; b < mtf_data_list.content.length; b++){
                                                if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "MTF #")] == ltf_data_list.content[d][findTextInArray(ltf_data_list, "MTF #")]){
                                                    for(let c = 1; c < qlf_data_list.content.length; c++){
                                                        if(mtf_data_list.content[b][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                                        mtf_data_list.content[b][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                                            transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                                            transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                                            transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                                            transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                                            term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS CHARGE")]
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        var data = "";
                        var data3 = "";
                        if(wcf_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]){
                            // && vat_calculation == "CHARGE"
                            bpf_form_no_container.innerText = bpf_form_no.value;
                            date_made_container.innerText = date_decoder(new Date());
                            client_name_container.innerHTML = client_name;
                            si_client_name_container.innerText = client_name;
                            address_container.innerText = address;
                            si_address_container.innerText = address;
                            tin_id_container.innerText = "";
                            nature_of_business_container.innerText = nature_of_business;
                            si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                            si_tin_nature_of_business_container.innerText = `${nature_of_business}`;
                            date_of_certification = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                            si_date_container.innerText = date_of_certification;
                            if(cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")] == "CARDBOARDS"){
                                is_transportation = false
                            }
                            var si_unit_price = 0;
                            var si_amount = 0;
                            if(mode == "CHARGE"){
                                if(vat_calculation == "VAT EXCLUSIVE"){
                                    vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                    si_unit_price = parseFloat(unit_price) + (parseFloat(unit_price)*.12);
                                    si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                                    si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                                }
                                else{
                                    non_vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                    si_unit_price = parseFloat(unit_price);
                                    si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                    si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                }
                                data = `
                                <tr>
                                    <td>${date_of_certification}</td>
                                    <td></td>
                                    <td>${service_invoice_no.value}</td>
                                    <td style="font-size: 10px !important; padding-top: 2px;">${cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")]}</td>
                                    <td>${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                                    <td>${unit}</td>
                                    <td style="text-align: right; padding-right: 5px">${formatNumber(unit_price)}</td>
                                    <td style="text-align: right; padding-right: 5px">${formatNumber(parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price))}</td>
                                    <td style="font-size: 10px !important">${vat_calculation}</td>
                                </tr>
                                `
                                table_data_info.push(data);
                            }
                            else if(mode == "BUYING"){
                                if(vat_calculation == "VAT EXCLUSIVE"){
                                    credits += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                    si_credits += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                    si_unit_price = parseFloat(unit_price) + (parseFloat(unit_price)*.12);
                                    si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                                    si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                                }
                                else{
                                    credits += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                    si_credits += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                    si_unit_price = parseFloat(unit_price);
                                    si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                    si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                                }
                                data = `
                                <tr style="color: #dc3545;">
                                    <td>${date_of_certification}</td>
                                    <td></td>
                                    <td>${service_invoice_no.value}</td>
                                    <td style="font-size: 10px !important; padding-top: 2px;">${cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")]}</td>
                                    <td>${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                                    <td>${unit}</td>
                                    <td style="text-align: right; padding-right: 5px">${formatNumber(unit_price)}</td>
                                    <td style="text-align: right; padding-right: 5px">${formatNumber(parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price))}</td>
                                    <td style="font-size: 10px !important">${vat_calculation}</td>
                                </tr>
                                `
                                table_data_info.push(data);
                            }
                            data3 = `
                            <tr>
                                <td>${data3_counter}</td>
                                <td class="amount">${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                                <td>${unit}</td>
                                <td>${date_of_certification}</td>
                                <td style="font-size: 10px !important; padding-top: 5px !important;">${waste_name}</td>
                                <td class="amount">${formatNumber(si_unit_price)}</td>
                                <td class="amount">${formatNumber(si_amount)}</td>
                            </tr>
                            `
                            data3_counter += 2;
                            table_counter += 1;
                            si_table_data_info.push(data3);
                        }
                        console.log(date_of_certification)

                    }
                    if(is_transportation == true){
                        for(let y = 0; y < wcf_transaction.length; y++){
                            if(cod_no == cod_transaction[y]){
                                for(let x = 1; x < cod_data_list.content.length; x++){
                                    if(wcf_transaction[y] == cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]){
                                        date_of_certification_transportation = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                                    }
                                }
                                var data2 = "";
                                var data4 = "";
                                console.log(date_of_certification)
                                data2 = `
                                <tr>
                                    <td>${date_of_certification}</td>
                                    <td></td>
                                    <td>${service_invoice_no.value}</td>
                                    <td style="font-size: 10px !important; padding-top: 2px">TRANS. FEE ${transportation_vehicle}</td>
                                    <td>${1}</td>
                                    <td>${transportation_unit}</td>
                                    <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                                    <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                                    <td style="font-size: 10px !important">${transportation_calculation}</td>
                                </tr>
                                `
                                table_data_transportation.push(data2);
                                var si_unit_price = 0;
                                var si_amount = 0;
                                if(transportation_calculation == "VAT EXCLUSIVE"){
                                    vatable += parseFloat(transportation_fee);
                                    si_unit_price = parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12);
                                    si_amount = (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                                    si_total_amount += (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                                }
                                else{
                                    non_vatable += parseFloat(transportation_fee);
                                    si_unit_price = parseFloat(transportation_fee);
                                    si_amount = (1 * (parseFloat(transportation_fee)));
                                    si_total_amount += (1 * (parseFloat(transportation_fee)));
                                }
                                data4 = `
                                <tr>
                                    <td>${data4_counter}</td>
                                    <td class="amount">${1}</td>
                                    <td>${transportation_unit}</td>
                                    <td>${date_of_certification}</td>
                                    <td style="font-size: 10px !important; padding-top: 5px !important;">TRANS. FEE ${transportation_vehicle}</td>
                                    <td class="amount">${formatNumber(si_unit_price)}</td>
                                    <td class="amount">${formatNumber(si_amount)}</td>
                                </tr>
                                `
                                data4_counter += 2;
                                table_counter += 1;
                                si_table_data_transportation.push(data4);
                                break
                            }
                        }
                    }
                    for(let x = 0; x < table_data_info.length; x++){
                        table_data.insertAdjacentHTML("beforeend", table_data_info[x])
                    }
                    if(is_transportation == true){
                        table_data.insertAdjacentHTML("beforeend", table_data_transportation[0])
                    }
                    var space = 
                    `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    `
                    table_data.insertAdjacentHTML("beforeend", space)
                    for(let x = 0; x < si_table_data_info.length; x++){
                        si_table_data.insertAdjacentHTML("beforeend", si_table_data_info[x])
                    }
                }
                for(let x = 0; x < 20 - table_counter; x++){
                    var data5 = "";
                    data5 = `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    `
                    table_data.insertAdjacentHTML("beforeend", data5);
                }
                si_table_data.insertAdjacentHTML("beforeend", si_table_data_transportation[0])
                non_vatable_container.innerText = formatNumber(non_vatable);
                vatable_container.innerText = formatNumber(vatable);
                total_vat_ex.value = formatNumber(vatable);
                vat_container.innerText = formatNumber((parseFloat(vatable))*.12);
                total_amount_payable_container.innerText = formatNumber(non_vatable + vatable + (parseFloat(vatable))*.12);
                total_vat_in.value = formatNumber(non_vatable + vatable + (parseFloat(vatable))*.12);
                credits_container.innerText = formatNumber(credits);
                total_amount_due_container.innerText = formatNumber((non_vatable + vatable + (parseFloat(vatable))*.12) - parseFloat(credits));
                due_date_container.innerHTML = `${parseInt(term)} days<br>from the date received`;
                total_amount_container.innerText = formatNumber((non_vatable + vatable) - parseFloat(credits));
                si_vat_ex_container.innerText = formatNumber((parseFloat(si_total_amount))/1.12);
                si_vat_container.innerText = formatNumber((parseFloat(si_total_amount)) - ((parseFloat(si_total_amount))/1.12));
                si_credits_container.innerText = formatNumber(si_credits);
                si_total_amount_container.innerText = formatNumber(si_total_amount);
                si_total_sales_container.innerText = formatNumber(si_total_amount);
                si_terms_container.innerText = `${term} Days Term`;
                terms.value = term;
                convertToPDFandDownload_button.style.display = "block";
                convertToPDF_button.style.display = "block";
                submit_button.style.display = "block";
                what_to_print.style.display = "block";
                // what_to_print2.style.display = "block";
            }
        }

        const form_id = document.getElementById("form_id");
        const type_of_form = document.getElementById("type_of_form");
        const type_of_form_list = document.getElementById("type_of_form_list");
        const bpf_form = document.getElementById("bpf_form");
        const add_item_button = document.getElementById("add_item_button");
        
        add_item_button.addEventListener("click", addCOD)
        type_of_form.addEventListener("change", () => {
            var data_content;
            if(type_of_form.value == "By COD (Single Transaction)" || type_of_form.value == "By COD (Multiple Transaction)"){
                data_content = 
                `
                <div style="display: grid; grid-template-columns: 200px 200px; gap: 20px;">
                    <div>
                        <label for="search_cod_form_no1">
                            Search COD #
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="text" id="search_cod_form_no1" autocomplete="off" name="search_cod_form_no1" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="service_invoice_no1">
                            Service Invoice #
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="text" id="service_invoice_no1" autocomplete="off" name="service_invoice_no1" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                `
                type_of_form_list.innerHTML = data_content;
                generate_button.addEventListener("click", generate)
                add_item_button.style.display = "none"
            }
            else if(type_of_form.value == "By Multiple COD (Single Transaction)" || type_of_form.value == "By Multiple COD (Multiple Transaction)"){
                data_content = 
                `
                <div style="display: grid; grid-template-columns: 200px 200px; gap: 20px;">
                    <div>
                        <label for="search_cod_form_no1">
                            Search COD #
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="text" id="search_cod_form_no1" autocomplete="off" name="search_cod_form_no1" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="service_invoice_no1">
                            Service Invoice #
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="text" id="service_invoice_no1" autocomplete="off" name="service_invoice_no1" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                `
                type_of_form_list.innerHTML = data_content;
                generate_button.addEventListener("click", generate)
                add_item_button.style.display = "block"
            }
            else if(type_of_form.value == "By Date (Single Transaction)"){
                data_content = 
                `
                <div class="wrapper" id="client_container" style="display: grid; grid-template-columns: 600px;">
                    <div>
                        <label for="client">
                            <i class="fa-solid fa-user"></i>
                            Client
                        </label>
                        <div class="search_input" id="cod_search_client">
                            <input type="text" name="client_input" id="client_input" autocomplete="off" class="form-control" required placeholder="Type to Search Client Name...">
                            <div class="autocom_box">
                            </div>
                            <div class="icon"><i class="fas fa-search"></i></div>
                        </div>
                    </div>
                </div><br>
                <div style="display: grid; grid-template-columns: 200px 200px; gap: 20px;">
                    <div>
                        <label for="search_date1">
                            Date
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="date" id="search_date1" autocomplete="off" name="search_date1" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="service_invoice_no1">
                            Service Invoice #
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="text" id="service_invoice_no1" autocomplete="off" name="service_invoice_no1" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                `
                type_of_form_list.innerHTML = data_content;
                generate_button.addEventListener("click", generate)
                add_item_button.style.display = "none"
                searchClient ()
            }
            else if(type_of_form.value == "By Date (Multiple Transaction)"){
                data_content = 
                `
                <div class="wrapper" id="client_container" style="display: grid; grid-template-columns: 600px;">
                    <div>
                        <label for="client">
                            <i class="fa-solid fa-user"></i>
                            Client
                        </label>
                        <div class="search_input" id="cod_search_client">
                            <input type="text" name="client_input" id="client_input" autocomplete="off" class="form-control" required placeholder="Type to Search Client Name...">
                            <div class="autocom_box">
                            </div>
                            <div class="icon"><i class="fas fa-search"></i></div>
                        </div>
                    </div>
                </div><br>
                <div style="display: grid; grid-template-columns: 200px 200px; gap: 20px;">
                    <div>
                        <label for="search_date1">
                            Date
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="date" id="search_date1" autocomplete="off" name="search_date1" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="service_invoice_no1">
                            Service Invoice #
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="text" id="service_invoice_no1" autocomplete="off" name="service_invoice_no1" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                `
                type_of_form_list.innerHTML = data_content;
                generate_button.addEventListener("click", generate)
                add_item_button.style.display = "block"
                searchClient ()
            }
            else{
                data_content = ``
                type_of_form_list.innerHTML = data_content;
                generate_button.addEventListener("click", generate)
                add_item_button.style.display = "none"
            }
        })

        function addCOD () {
            cod_counter.value = parseInt(cod_counter.value) + 1;
            if(type_of_form.value == "By Multiple COD (Single Transaction)" || type_of_form.value == "By Multiple COD (Multiple Transaction)"){
                var data_content = 
                `
                <div style="display: grid; grid-template-columns: 200px 200px; gap: 20px;">
                    <div>
                        <label for="search_cod_form_no${cod_counter.value}">
                            Search COD #
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="text" id="search_cod_form_no${cod_counter.value}" autocomplete="off" name="search_cod_form_no${cod_counter.value}" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="service_invoice_no1">
                            Service Invoice #
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="text" id="service_invoice_no${cod_counter.value}" autocomplete="off" name="service_invoice_no${cod_counter.value}" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                `
                type_of_form_list.insertAdjacentHTML("beforeend", data_content)
            }
            else if(type_of_form.value == "By Date (Multiple Transaction)"){
                var data_content = 
                `
                <div style="display: grid; grid-template-columns: 200px 200px; gap: 20px;">
                    <div>
                        <label for="search_date${cod_counter.value}">
                            Date
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="date" id="search_date${cod_counter.value}" autocomplete="off" name="search_date${cod_counter.value}" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="service_invoice_no${cod_counter.value}">
                            Service Invoice #
                        </label><br>
                        <div class="bpf_form">
                            <div class="form">
                                <input type="text" id="service_invoice_no${cod_counter.value}" autocomplete="off" name="service_invoice_no${cod_counter.value}" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                `
                type_of_form_list.insertAdjacentHTML("beforeend", data_content)
            }
            var additional_data =
            `
                <input type="hidden" name="wcf_form_no${cod_counter.value}" id="wcf_form_no${cod_counter.value}">
                <input type="hidden" name="hauling_date${cod_counter.value}" id="hauling_date${cod_counter.value}">
                <input type="hidden" name="total_vat_in${cod_counter.value}" id="total_vat_in${cod_counter.value}">
                <input type="hidden" name="total_vat_ex${cod_counter.value}" id="total_vat_ex${cod_counter.value}">
            `
            form_id.insertAdjacentHTML("afterbegin", additional_data)
        }

        function searchClient () {
            var data_value2 = [];
            for (x = 1; x < client_data_list.content.length; x++) {
                data_value2.push(client_data_list.content[x][findTextInArray(client_data_list, "CLIENT NAME")]);
            }
            const search_wrapper = document.getElementById("cod_search_client");
            const input_box = search_wrapper.querySelector("input");
            const sugg_box = search_wrapper.querySelector(".autocom_box");

            input_box.onkeyup = (e) => {
                let user_data = e.target.value;
                let empty_array = [];
                if (user_data) {
                    empty_array = data_value2.filter((data2) => {
                        return data2.toLowerCase().startsWith(user_data.toLowerCase());
                    });
                    empty_array = empty_array.map((data2) => {
                        return '<li>' + data2 + '</li>';
                    });
                    search_wrapper.classList.add("active");
                    show_suggestions(empty_array);
                } else {
                    search_wrapper.classList.remove("active");
                }
            };

            sugg_box.addEventListener("click", (e) => {
                if (e.target.tagName === "LI") {
                    select(e.target.innerText);
                }
            });

            function select(element) {
                let select_user_data = element;
                input_box.value = select_user_data;
                search_wrapper.classList.remove("active");
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
        }

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
                if(waste_id.substring(0, 8) == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                    waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                    break
                }
                else{
                    waste_code = "N/A";
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
                else{
                    waste_name = waste_id
                }
            }
            return waste_name
        }

        const generate_report_button = document.getElementById("generate_report_button");
        const close_report_button = document.getElementById("close_report_button");
        const report_generate_button = document.getElementById("report_generate_button");
        const report_download_button = document.getElementById("report_download_button");
        const generate_report_tab = document.getElementById("generate_report_tab");
        const report_date_from = document.getElementById("report_date_from");
        const report_date_to = document.getElementById("report_date_to");
        let currentPageHeight = 31;

        generate_report_button.addEventListener("click", () => {
            generate_report_tab.style.display = "block"
        })
        close_report_button.addEventListener("click", () => {
            generate_report_tab.style.display = "none"
        })

        report_generate_button.addEventListener("click", () => {
            const filteredData = [];
            const pageHeight = 500;
            const dataHeight = 31; // Adjust this value based on your content

            for(let x = 1; x < bpf_data_list.content.length; x++){
                var hauling_date = new Date(bpf_data_list.content[x][findTextInArray(bpf_data_list, "HAULING DATE")])
                var wcf_data = bpf_data_list.content[x][findTextInArray(bpf_data_list, "WCF #")]
                var bpf_data = bpf_data_list.content[x][findTextInArray(bpf_data_list, "BPF #")]
                var date_data = bpf_data_list.content[x][findTextInArray(bpf_data_list, "CREATED AT")]
                var time_data = bpf_data_list.content[x][findTextInArray(bpf_data_list, "CREATED AT")]
                var client_id_data = bpf_data_list.content[x][findTextInArray(bpf_data_list, "CLIENT ID")]
                var vat_in_data = bpf_data_list.content[x][findTextInArray(bpf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")]
                var vat_ex_data = bpf_data_list.content[x][findTextInArray(bpf_data_list, "TOTAL AMOUNT DUE VAT EXCLUSIVE")]
                var billing_date_data = bpf_data_list.content[x][findTextInArray(bpf_data_list, "BILLING DATE")]
                var report_from = new Date(report_date_from.value)
                var report_to = new Date(report_date_to.value)
                var datePortion = date_data.split("T")[0];
                var timePortion = time_data.split("T")[1];

                for(let j = 1; j < wcf_data_list.content.length; j++){
                    var mtf = "";
                    var ltf = "";
                    if((wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")] == wcf_data && 
                        wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                        mtf = wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                    }else{
                        ltf = wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                        for(let x = 1; x < ltf_data_list.content.length; x++){
                            if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                            }
                        }
                    }
                }
                var datetime = new Date(datePortion + "T" + timePortion);
                if (new Date(date_data) >= report_from && new Date(date_data) <= report_to) {
                    filteredData.push({
                    bpf_data,
                    mtf,
                    hauling_date,
                    date_data,
                    time_data,
                    client_id_data,
                    vat_in_data,
                    vat_ex_data,
                    billing_date_data,
                    datetime,
                    });
                }
            }
            
            // Sort the data by hauling date and time
            filteredData.sort((a, b) => a.datetime - b.datetime);
        
            // Render the sorted data
            filteredData.forEach((item) => {
                const page_number = document.getElementById("page_number");
                const report_tab_container = document.querySelector(`#report_tab_container`);
                const report_tab = document.querySelector(`#report_tab${page_number.value}`);
                const report_body = report_tab.querySelector("tbody");
                
                var data = `
                    <tr>
                        <td>${item.bpf_data}</td>
                        <td>${item.mtf}</td>
                        <td>${date_decoder(item.hauling_date)}</td>
                        <td>${date_decoder(item.date_data)}</td>
                        <td>${time_decoder(item.time_data)}</td>
                        <td>${findClientName(item.client_id_data)}</td>
                        <td>${item.vat_in_data}</td>
                        <td>${item.vat_ex_data}</td>
                        <td>${date_decoder(item.billing_date_data)}</td>
                    </tr>
                `;

                const page_max_counter = document.querySelectorAll("#page_max_counter");
                page_max_counter.forEach((counter) => {
                    counter.innerText = `${page_number.value}`;
                })

                // Check if adding this data exceeds the current page height
                if (currentPageHeight + dataHeight > pageHeight) {
                    // If it exceeds, add a page break
                    report_body.insertAdjacentHTML("beforeend", "<div style='page-break-before: always;'></div>");
                    currentPageHeight = 0; // Reset the current page height
                    page_number.value = parseInt(page_number.value) + 1;
                    report_tab_container.insertAdjacentHTML("beforeend", 
                    `
                    <div id="report_tab${page_number.value}" class="report_tab">
                        <img src="../images/logo.png" alt="logo" style="height: 50px;">
                        <img src="../images/logo_name2.png" alt="logo" style="height: 50px; margin-top: 10px;"><hr>
                        <div style="position: relative;">
                            <h1 style="text-align: center; font-weight: bold; font-size: 32px;">WEEKLY REPORT</h1>
                            <h1 style="text-align: center; font-weight: bold;">RECEIVING</h1>
                            <h1 style="text-align: center; font-weight: bold;">LOGISTICS DEPARTMENT</h1>
                            <h3 id="date_covered" style="text-align: center;"></h3><br>
                            <div style="display: flex; position: absolute; right: 0; top: 0;">
                                <h6 id="page_counter${page_number.value}" style="margin-right: 5px;"></h6>
                                <h6 style="margin-right: 5px;">of</h6>
                                <h6 id="page_max_counter"></h6>
                            </div>
                        </div>
                        <div id="table_info">
                            <table>
                                <thead id="report_head">
                                    <tr>
                                        <th>BPF #</td>
                                        <th>MTF #</td>
                                        <th>HAULING DATE</th>
                                        <th>DATE FINISHED</th>
                                        <th>TIME FINISHED</th>
                                        <th>CLIENT</th>
                                        <th>TOTAL AMOUNT DUE VAT INCLUSIVE</th>
                                        <th>TOTAL AMOUNT DUE VAT EXCLUSIVE</th>
                                        <th>BILLING DATE</th>
                                    </tr>
                                </thead>
                                <tbody id="report_body"></tbody>
                            </table>
                        </div>
                    </div>
                        `
                    )
                    const page_counter_new = document.querySelector(`#page_counter${page_number.value}`);
                    page_counter_new.innerText = `Page ${page_number.value}`
                    const page_max_counter = document.querySelectorAll("#page_max_counter");
                    page_max_counter.forEach((counter) => {
                        counter.innerText = `${page_number.value}`;
                    })
                }
                const page_counter = document.getElementById("page_counter1");
                page_counter.innerText = `Page 1`

                report_body.insertAdjacentHTML("beforeend", data);
                currentPageHeight += dataHeight;

            });

            const date_covered = document.querySelectorAll("#date_covered");
            date_covered.forEach((date) => {
                date.innerText = `${date_decoder(report_date_from.value)} - ${date_decoder(report_date_to.value)}`;
            })
            report_generate_button.style.display = "none";
            report_download_button.style.display = "block";
        });
    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
