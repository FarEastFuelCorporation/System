document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');
        const cod_response_promise = fetch('https://script.google.com/macros/s/AKfycbzgiOuXizUVviCsLVfihqYN9HJ3pyNr7ElHoCl3JGkbtQnChnm2U42yQuLd4UMH0ci5/exec');
        const bpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyux0GBj9tk6quRz46IkXa0VemEDAi-v2iEHx7C_6OFi416ERkv_BFtKqBmbw-bxaaiFQ/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            vehicle_response,
            wcf_response,
            tpf_response,
            cod_response,
            bpf_response,
            qlf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            vehicle_response_promise,
            wcf_response_promise,
            tpf_response_promise,
            cod_response_promise,
            bpf_response_promise,
            qlf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const vehicle_data_list  = await vehicle_response.json();
        const wcf_data_list  = await wcf_response.json();
        const tpf_data_list  = await tpf_response.json();
        const cod_data_list  = await cod_response.json();
        const bpf_data_list  = await bpf_response.json();
        const qlf_data_list  = await qlf_response.json();

        // Code that depends on the fetched data
        // clusername_data_list
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");

        user.value = username_data_list.content[5][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[5][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[5][findTextInArray(username_data_list, "SECTIONS")];
    
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
                    var client_name = "";
                    for(let c = 1; c < client_data_list.content.length; c++){
                        if(cod_data_list.content[j][findTextInArray(cod_data_list, "CLIENT ID")] == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")]){
                            client_name = client_data_list.content[c][findTextInArray(client_data_list, "CLIENT NAME")];
                            break
                        }
                    }
                    var waste_code = "";
                    var waste_name = "";
                    for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                        if(cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE ID")] == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                            waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                            waste_name = type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE NAME")];
                            break
                        }
                        else{
                            waste_name = cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE ID")];
                        }
                    }
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")]}</td>
                        <td>${date_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "DATE OF CERTIFICATION")])}</td>
                        <td>${client_name}</td>
                        <td>${waste_code}</td>
                        <td>${waste_name}</td>
                        <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "WEIGHT")]}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        unsorted_list_billing.innerHTML = data_value;            

        // cod_data_list
        const bpf_form_no = document.getElementById("bpf_form_no");
        const df_no = document.getElementById("df_no");
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        var month_new;
        var code_year_month;
        var data_counter4;

        // FORM GENERATOR
        if(today_month.toString().length == 1){ 
            month_new = `0${today_month}`;
        }
    
        code_year_month = `BPF${today_year}${month_new}`;
    
        var data_content4 = 1;
        var data_info4;
        var data_last_3digit = 0;
    
        for(x=1; x<bpf_data_list.content.length; x++){
            data_info4 = bpf_data_list.content[x][findTextInArray(bpf_data_list, "BILLING NUMBER")];
            
            if(data_info4.includes(code_year_month) == true){
                data_last_3digit = data_info4.slice(9)
            }
        }
        
        data_content4 = parseInt(data_last_3digit) +1
    
        if(data_content4.toString().length == 1){
            data_counter4 = `00${data_content4}`;
        }
        else if(data_content4.toString().length == 2){
            data_counter4 = `0${data_content4}`;
        }
        else if(data_content4.toString().length == 3){
            data_counter4 = `${data_content4}`;
        }
    
        bpf_form_no.value = `${code_year_month}${data_counter4}`
        
        const billing_process_form = document.querySelector("#billing_process_form");
        const search_cod_form_no = billing_process_form.querySelector("#search_cod_form_no");
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

        var wcf_transaction = [];
        var cod_transaction = [];
        for (let i = 1; i < cod_data_list.content.length; i++) {
            if (!wcf_transaction.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "WCF #")])) {
                wcf_transaction.push(cod_data_list.content[i][findTextInArray(cod_data_list, "WCF #")]);
                cod_transaction.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
            }
        }
        generate_button.addEventListener("click", () => {
            var non_vatable = 0;
            var vatable = 0;
            var credits = 0;
            var si_total_amount = 0;
            var si_credits = 0;
            var date_of_certification = "";
            var transportation_vehicle = ""
            var transportation_unit = ""
            var transportation_fee = ""
            var transportation_calculation = ""
            var term = ""
            var data3_counter = 1;
            var table_counter = 0;
            for(let x = 1; x < cod_data_list.content.length; x++){
                var client_name = "";
                var address = "";
                var nature_of_business = "";
                date_of_certification = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "DATE OF CERTIFICATION")]);
                for(let c = 1; c < client_data_list.content.length; c++){
                    if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")]){
                        client_name = client_data_list.content[c][findTextInArray(client_data_list, "CLIENT NAME")];
                        address = client_data_list.content[c][findTextInArray(client_data_list, "ADDRESS")];
                        nature_of_business = client_data_list.content[c][findTextInArray(client_data_list, "NATURE OF BUSINESS")];
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
                        waste_name = cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")];
                    }
                }
                for(let a = 1; a < wcf_data_list.content.length; a++){
                    if(cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]){
                        for(let b = 1; b < vehicle_data_list.content.length; b++){
                            if(wcf_data_list.content[a][findTextInArray(wcf_data_list, "PLATE #")] == vehicle_data_list.content[b][findTextInArray(vehicle_data_list, "PLATE #")]){
                                for(let c = 1; c < qlf_data_list.content.length; c++){
                                    if(wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                                        vehicle_data_list.content[b][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                        transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                        transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                        transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                        transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                        term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS DAYS")]
                                    }
                                }
                            }
                        }
                    }
                }
                var data = "";
                var data3 = "";
                if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #" && vat_calculation == "CHARGE")]){
                    bpf_form_no_container.innerText = bpf_form_no.value;
                    date_made_container.innerText = date_decoder(new Date());
                    client_name_container.innerText = client_name;
                    si_client_name_container.innerText = client_name;
                    address_container.innerText = address;
                    si_address_container.innerText = address;
                    tin_id_container.innerText = "008-648-866-000";
                    nature_of_business_container.innerText = nature_of_business;
                    si_tin_nature_of_business_container.innerText = `008-648-866-000 / ${nature_of_business}`;
                    si_tin_nature_of_business_container.innerText = `008-648-866-000 / ${nature_of_business}`;
                    si_date_container.innerText = date_of_certification;
                    data = `
                    <tr>
                        <td>${date_of_certification}</td>
                        <td></td>
                        <td>4648</td>
                        <td style="font-size: 10px !important">${waste_name}</td>
                        <td>${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                        <td>${unit}</td>
                        <td style="text-align: right; padding-right: 5px">${unit_price}</td>
                        <td style="text-align: right; padding-right: 5px">${formatNumber(parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price))}</td>
                        <td style="font-size: 10px !important">${vat_calculation}</td>
                    </tr>
                    `
                    table_data.insertAdjacentHTML("beforeend", data);
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
                    data3_counter += 1;
                    table_counter += 1;
                    si_table_data.insertAdjacentHTML("beforeend", data3);
                }
            }
            for(let x = 0; x < wcf_transaction.length; x++){
                if(search_cod_form_no.value == cod_transaction[x]){
                    var data2 = "";
                    var data4 = "";
                    data2 = `
                    <tr>
                        <td>${date_of_certification}</td>
                        <td></td>
                        <td>4648</td>
                        <td style="font-size: 10px !important">TRANS. FEE ${transportation_vehicle}</td>
                        <td>${1}</td>
                        <td>${transportation_unit}</td>
                        <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                        <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                        <td style="font-size: 10px !important">${transportation_calculation}</td>
                    </tr>
                    `
                    table_data.insertAdjacentHTML("beforeend", data2);
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
                    console.log(transportation_calculation)
                    data4 = `
                    <tr>
                        <td>${data3_counter}</td>
                        <td class="amount">${1}</td>
                        <td>${transportation_unit}</td>
                        <td>${date_of_certification}</td>
                        <td style="font-size: 10px !important; padding-top: 5px !important;">TRANS. FEE ${transportation_vehicle}</td>
                        <td class="amount">${formatNumber(si_unit_price)}</td>
                        <td class="amount">${formatNumber(si_amount)}</td>
                    </tr>
                    `
                    data3_counter += 1;
                    table_counter += 1;
                    si_table_data.insertAdjacentHTML("beforeend", data4);
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
            due_date_container.innerHTML = `${term} days<br>from the date received`;
            total_amount_container.innerText = formatNumber((non_vatable + vatable + (parseFloat(vatable))*.12) - parseFloat(credits));
            si_vat_ex_container.innerText = formatNumber((parseFloat(si_total_amount))/1.12);
            si_vat_container.innerText = formatNumber((parseFloat(si_total_amount)) - ((parseFloat(si_total_amount))/1.12));
            si_credits_container.innerText = formatNumber(si_credits);
            si_total_amount_container.innerText = formatNumber(si_total_amount);
            si_total_sales_container.innerText = formatNumber(si_total_amount);
            si_terms_container.innerText = `${term} Days Term`;
            convertToPDFandDownload_button.style.display = "block";
            convertToPDF_button.style.display = "block";
        })

    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
