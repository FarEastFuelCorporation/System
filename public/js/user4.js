document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');
        const cod_response_promise = fetch('https://script.google.com/macros/s/AKfycbzgiOuXizUVviCsLVfihqYN9HJ3pyNr7ElHoCl3JGkbtQnChnm2U42yQuLd4UMH0ci5/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            wcf_response,
            tpf_response,
            cod_response,
            qlf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            wcf_response_promise,
            tpf_response_promise,
            cod_response_promise,
            qlf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const wcf_data_list  = await wcf_response.json();
        const tpf_data_list  = await tpf_response.json();
        const cod_data_list  = await cod_response.json();
        const qlf_data_list  = await qlf_response.json();

        // Code that depends on the fetched data
        // username_data_list
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const user = document.getElementById("user");

        user.value = username_data_list.content[4][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[4][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[4][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[4][findTextInArray(username_data_list, "DEPARTMENT")];
    
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
            if (!sf_transaction_certification.includes(tpf_data_list.content[i][findTextInArray(tpf_data_list, "TPF #")])) {
                sf_transaction_certification.push(tpf_data_list.content[i][findTextInArray(tpf_data_list, "TPF #")]);
                sf_transaction_counter_certification += 1
            }
        }

        for (let i = 1; i < cod_data_list.content.length; i++) {
            if (!sf_tpf_transaction_certification.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "TPF #")])) {
                sf_tpf_transaction_certification.push(cod_data_list.content[i][findTextInArray(cod_data_list, "TPF #")]);
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
                if(pending_certification[i] == tpf_data_list.content[j][findTextInArray(tpf_data_list, "TPF #")]){
                    date_accomplished = new Date(date_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")]));
                    target_date = new Date(date_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")]));
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
                        <td>${tpf_data_list.content[j][findTextInArray(tpf_data_list, "TPF #")]}</td>
                        <td>${date_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")])} /<br> ${time_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")])}</td>
                        <td>${findClientName(tpf_data_list.content[j][findTextInArray(tpf_data_list, "CLIENT ID")])}</td>
                        <td>${findWasteCode(tpf_data_list.content[j][findTextInArray(tpf_data_list, "WASTE ID")])}</td>
                        <td>${tpf_data_list.content[j][findTextInArray(tpf_data_list, "WASTE NAME")]}</td>
                        <td>${tpf_data_list.content[j][findTextInArray(tpf_data_list, "WEIGHT")]} kg.</td>
                        <td>${date_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")])}</td>
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
                if(finish_certification[i] == tpf_data_list.content[j][findTextInArray(tpf_data_list, "TPF #")]){
                    date_accomplished = new Date(date_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")]));
                    target_date = new Date(date_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")]));
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
                        if(tpf_data_list.content[j][findTextInArray(tpf_data_list, "TPF #")] == cod_data_list.content[k][findTextInArray(cod_data_list, "TPF #")]){
                            cod_no = cod_data_list.content[k][findTextInArray(cod_data_list, "COD #")];
                            finished_date = date_decoder(cod_data_list.content[k][findTextInArray(cod_data_list, "DATE ACCOMPLISHED")]);
                            finished_time = time_decoder(cod_data_list.content[k][findTextInArray(cod_data_list, "TIME ACCOMPLISHED")]);
                        }
                    }
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${cod_no}</td>
                        <td>${tpf_data_list.content[j][findTextInArray(tpf_data_list, "TPF #")]}</td>
                        <td>${date_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")])} /<br> ${time_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")])}</td>
                        <td>${findClientName(tpf_data_list.content[j][findTextInArray(tpf_data_list, "CLIENT ID")])}</td>
                        <td>${findWasteCode(tpf_data_list.content[j][findTextInArray(tpf_data_list, "WASTE ID")])}</td>
                        <td>${findWasteName(tpf_data_list.content[j][findTextInArray(tpf_data_list, "CLIENT ID")], tpf_data_list.content[j][findTextInArray(tpf_data_list, "WASTE ID")])}</td>
                        <td>${tpf_data_list.content[j][findTextInArray(tpf_data_list, "WEIGHT")]} kg.</td>
                        <td>${date_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")])}</td>
                        <td>${status}</td>
                        <td>${finished_date} /<br> ${finished_time}</td>
                        <td>${calculateTravelTime(date_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")]),time_decoder(tpf_data_list.content[j][findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")]),finished_date,finished_time)}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        finished_list_certification.innerHTML = data_value;

        // cod_data_list
        const cod_form_no = document.getElementById("cod_form_no");
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
    
        code_year_month = `COD${today_year}${month_new}`;
    
        var data_content4;
        var data_info4;
        var data_last_3digit = 0;
    
        for(x=1; x<cod_data_list.content.length; x++){
            data_info4 = cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")];
            
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
    
        cod_form_no.value = `${code_year_month}${data_counter4}`
    
        // tpf_data_list
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
                select(e.target.innerHTML);
            }
        });

        function select(element) {
            let select_user_data = element;
            input_box.value = select_user_data;
            search_wrapper.classList.remove("active");
        }

        const generate_button = document.getElementById("generate_button");
        const what_to_print = document.getElementById("what_to_print");
        const convertToPDFandDownload_button = document.getElementById("convertToPDFandDownload_button");
        const client_container = document.getElementById("client_container");
        const completion = document.getElementById("completion");
        const type_of_cod = document.getElementById("type_of_cod");
        const table_company = document.getElementById("table_company");
        const table_company_address = document.getElementById("table_company_address");
        const certification = document.getElementById("certification");
        const table_data_input_value = document.getElementById("table_data_input_value");
        const result_remarks = document.getElementById("result_remarks");
        const table_data = document.getElementById("table_data");
        const table_head_data = document.getElementById("table_head_data");
        
        var certification_date = "";
        var certification_day = "";
        var certification_day_ordinal;
        var certification_month = "";
        var year = "";
        var month = "";
        generate_button.addEventListener("click", choose);
        function choose() {
            var table_data_value = "";
            var table_head_data_value = "";
            var table_data_input = "";
            var table_data_counter = 0;
            if(type_of_cod.value == "By Waste Description"){
                for (let x = 1; x < tpf_data_list.content.length; x++) {
                    year = (new Date(tpf_data_list.content[x][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")])).getFullYear();
                    month = (new Date(tpf_data_list.content[x][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")])).getMonth() + 1;
                    if (input_box.value == findClientName(tpf_data_list.content[x][findTextInArray(tpf_data_list, "CLIENT ID")])) {
                        const waste_description = document.getElementById("waste_description");
                        const year_covered = document.getElementById("year_covered");
                        const month_covered = document.getElementById("month_covered");
                        certification_date = tpf_data_list.content[x][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")];
                        certification_day = new Date(certification_date).getDate();
                        certification_day_ordinal = convertToOrdinal(certification_day);
                        certification_month = convertToMonthName(month);
                        for(let a = 0; a <= pending_certification.length; a++){
                            if(tpf_data_list.content[x][findTextInArray(tpf_data_list, "TPF #")] == pending_certification[a]){
                                if (waste_description.value == findWasteName(tpf_data_list.content[x][findTextInArray(tpf_data_list, "CLIENT ID")], tpf_data_list.content[x][findTextInArray(tpf_data_list, "WASTE ID")]) &&
                                    year_covered.value == year &&
                                    month_covered.value == month) {
                                    var pull_out_form = ""
                                    for(let y = 1; y < wcf_data_list.content.length; y++){
                                        if(tpf_data_list.content[x][findTextInArray(tpf_data_list, "WCF #")] == wcf_data_list.content[y][findTextInArray(wcf_data_list, "WCF #")])
                                        pull_out_form = wcf_data_list.content[y][findTextInArray(wcf_data_list, "PULL OUT FORM #")]
                                    }
                                    table_data_counter += 1;
                                    table_data_value +=
                                    `<tr>
                                    <td>${date_decoder(tpf_data_list.content[x][findTextInArray(tpf_data_list, "HAULING DATE")])}</td>
                                    <td>${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WASTE NAME")]}</td>
                                    <td>${findWasteCode(tpf_data_list.content[x][findTextInArray(tpf_data_list, "WASTE ID")])}</td>
                                    <td>${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WEIGHT")]} kgs.</td>
                                    <td>${tpf_data_list.content[x][findTextInArray(tpf_data_list, "DESTRUCTION PROCESS")]}</td>
                                    <td>${date_decoder(tpf_data_list.content[x][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")])}</td>
                                    </tr>
                                    `;
                                    table_head_data_value = 
                                    `
                                    <th>Date Hauled</th>
                                    <th>Waste Description</th>
                                    <th>Pull-out Form #</th>
                                    <th>Quantity</th>
                                    <th>Destruction Process</th>
                                    <th>Date of Completion</th>
                                    `
                                    table_data_input += `
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "TPF #")]}" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "SF #")]}" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WCF #")]}" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "CLIENT ID")]}" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WASTE ID")]}" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                    <input type="hidden" value="${findWasteCode(tpf_data_list.content[x][findTextInArray(tpf_data_list, "WASTE ID")])}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                    <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WASTE NAME")]}" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WEIGHT")]}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "DESTRUCTION PROCESS")]}" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                    <input type="hidden" value="${date_decoder(tpf_data_list.content[x][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")])}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                    `
                                    table_company.innerHTML = findClientName(tpf_data_list.content[x][findTextInArray(tpf_data_list, "CLIENT ID")]);
                                    table_data_input_value.innerHTML = table_data_input;
                                    for (let y = 1; y < client_data_list.content.length; y++) {
                                        if (input_box.value == client_data_list.content[y][findTextInArray(client_data_list, "CLIENT NAME")]) {
                                            table_company_address.innerHTML = client_data_list.content[y][findTextInArray(client_data_list, "ADDRESS")];
                                        }
                                    }
                                    what_to_print.style.display = "block";
                                    completion.style.display = "grid";    
                                    convertToPDFandDownload_button.style.display = "block";    
                                    table_data.innerHTML = table_data_value;
                                    table_head_data.innerHTML = table_head_data_value;
                                    result_remarks.innerHTML = "";
                                }
                            }
                        }
                    }    
                }
            }
            else if(type_of_cod.value == "By Date"){
                for (let x = 1; x < tpf_data_list.content.length; x++) {
                    year = (new Date(tpf_data_list.content[x][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")])).getFullYear();
                    month = (new Date(tpf_data_list.content[x][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")])).getMonth() + 1;
                    if (input_box.value === findClientName(tpf_data_list.content[x][findTextInArray(tpf_data_list, "CLIENT ID")])) {
                        const waste_description = document.getElementById("waste_description");
                        const year_covered = document.getElementById("year_covered");
                        const month_covered = document.getElementById("month_covered");
                        certification_date = tpf_data_list.content[x][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")];
                        certification_day = new Date(certification_date).getDate();
                        certification_day_ordinal = convertToOrdinal(certification_day);
                        certification_month = convertToMonthName(month);    
                        for(let a = 0; a <= pending_certification.length; a++){
                            if(tpf_data_list.content[x][findTextInArray(tpf_data_list, "TPF #")] == pending_certification[a]){
                                if (waste_description.value == certification_day &&
                                    year_covered.value == year &&
                                    month_covered.value == month) {
                                    var pull_out_form = ""
                                    for(let y = 1; y < wcf_data_list.content.length; y++){
                                        if(tpf_data_list.content[x][findTextInArray(tpf_data_list, "WCF #")] == wcf_data_list.content[y][findTextInArray(wcf_data_list, "WCF #")])
                                        pull_out_form = wcf_data_list.content[y][findTextInArray(wcf_data_list, "PULL OUT FORM #")]
                                    }
                                    table_data_counter += 1;
                                    table_data_value +=
                                    `<tr>
                                    <td>${date_decoder(tpf_data_list.content[x][findTextInArray(tpf_data_list, "HAULING DATE")])}</td>
                                    <td>${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WASTE NAME")]}</td>
                                    <td>${pull_out_form}</td>
                                    <td>${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WEIGHT")]} kgs.</td>
                                    <td>${tpf_data_list.content[x][findTextInArray(tpf_data_list, "DESTRUCTION PROCESS")]}</td>
                                    <td>${date_decoder(tpf_data_list.content[x][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")])}</td>
                                    </tr>
                                    `;
                                    table_head_data_value = 
                                    `
                                    <th>Date Hauled</th>
                                    <th>Waste Description</th>
                                    <th>Pull-out Form #</th>
                                    <th>Quantity</th>
                                    <th>Destruction Process</th>
                                    <th>Date of Completion</th>
                                    `
                                    table_data_input += `
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "TPF #")]}" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "SF #")]}" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WCF #")]}" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "CLIENT ID")]}" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WASTE ID")]}" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                    <input type="hidden" value="${findWasteCode(tpf_data_list.content[x][findTextInArray(tpf_data_list, "WASTE ID")])}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                    <input type="hidden" value="${pull_out_form}" name="pull_out_form${table_data_counter}" id="pull_out_form${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WASTE NAME")]}" name="waste_name_input${table_data_counter}" id="waste_name_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "WEIGHT")]}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][findTextInArray(tpf_data_list, "DESTRUCTION PROCESS")]}" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                    <input type="hidden" value="${date_decoder(tpf_data_list.content[x][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")])}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        `
                                    table_company.innerHTML = findClientName(tpf_data_list.content[x][findTextInArray(tpf_data_list, "CLIENT ID")]);
                                    table_data_input_value.innerHTML = table_data_input;
                                    for (let y = 1; y < client_data_list.content.length; y++) {
                                        if (input_box.value == client_data_list.content[y][findTextInArray(client_data_list, "CLIENT NAME")]) {
                                            table_company_address.innerHTML = client_data_list.content[y][findTextInArray(client_data_list, "ADDRESS")];
                                        }
                                    }
                                    what_to_print.style.display = "block";
                                    completion.style.display = "grid";    
                                    convertToPDFandDownload_button.style.display = "block";    
                                    table_data.innerHTML = table_data_value;
                                    table_head_data.innerHTML = table_head_data_value;
                                    result_remarks.innerHTML = "";
                                }
                            }
                        }
                    }    
                }    
            }
            if(table_data_value == undefined || table_data_value == ""){
                result_remarks.innerHTML = `
                <div class="search_cod_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`            
            }  
            const generate_qr_button =document.getElementById("generate_qr_button")
            generate_qr_button.addEventListener("click", processAndGenerateQRCode)
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

        const type_of_cod_list = document.getElementById("type_of_cod_list");
        
        type_of_cod.addEventListener("change", () => {
            var data_content;
            if(type_of_cod.value == "By Waste Description"){
                data_content = 
                `
                <div>
                    <label for="waste_description">
                        <i class="fa-solid fa-list-ol"></i>
                        Waste Description
                    </label><br>
                    <div>
                        <input type="text" id="waste_description" autocomplete="off" name="waste_description" class="form-control"><br>
                        </div>
                        </div>
                        <div>
                        <label for="year_covered">
                        <i class="fa-solid fa-list-ol"></i>
                        Year Covered
                    </label><br>
                    <div class="form">
                    <input type="text" autocomplete="off" name="year_covered" id="year_covered" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="month_covered">
                        <i class="fa-solid fa-list-ol"></i>
                        Month Covered
                    </label><br>
                    <div class="form">
                        <select name="month_covered" id="month_covered" class="form-control">
                            <option value="">Select Month</option>
                            <option value="1">JANUARY</option>
                            <option value="2">FEBRUARY</option>
                            <option value="3">MARCH</option>
                            <option value="4">APRIL</option>
                            <option value="5">MAY</option>
                            <option value="6">JUNE</option>
                            <option value="7">JULY</option>
                            <option value="8">AUGUST</option>
                            <option value="9">SEPTEMBER</option>
                            <option value="10">OCTOBER</option>
                            <option value="11">NOVEMBER</option>
                            <option value="12">DECEMBER</option>
                        </select>
                    </div>
                </div>
                `
                what_to_print.style.display = "none";
                client_container.style.display = "grid";    
                type_of_cod_list.innerHTML = data_content;
            }
            if(type_of_cod.value == "By Date"){
                data_content = 
                `
                <div>
                <label for="waste_description">
                        <i class="fa-solid fa-list-ol"></i>
                        Day
                        </label><br>
                    <div>
                        <input type="number" id="waste_description" autocomplete="off" name="waste_description" class="form-control"><br>
                    </div>
                    </div>
                <div>
                    <label for="year_covered">
                        <i class="fa-solid fa-list-ol"></i>
                        Year Covered
                    </label><br>
                    <div class="form">
                        <input type="text" autocomplete="off" name="year_covered" id="year_covered" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="month_covered">
                        <i class="fa-solid fa-list-ol"></i>
                        Month Covered
                    </label><br>
                    <div class="form">
                        <select name="month_covered" id="month_covered" class="form-control">
                            <option value="">Select Month</option>
                            <option value="1">JANUARY</option>
                            <option value="2">FEBRUARY</option>
                            <option value="3">MARCH</option>
                            <option value="4">APRIL</option>
                            <option value="5">MAY</option>
                            <option value="6">JUNE</option>
                            <option value="7">JULY</option>
                            <option value="8">AUGUST</option>
                            <option value="9">SEPTEMBER</option>
                            <option value="10">OCTOBER</option>
                            <option value="11">NOVEMBER</option>
                            <option value="12">DECEMBER</option>
                        </select>
                    </div>
                    </div>
                `
                what_to_print.style.display = "none";
                client_container.style.display = "grid";    
                type_of_cod_list.innerHTML = data_content;
            }
        })

        // Function to generate a QR code from the content of an HTML element
        function processAndGenerateQRCode() {
            convertElementToImage(function (imageDataUrl) {
                generateQRCodeFromImage(imageDataUrl);
            });
        }
        
        const search_cod_form_no_button = document.getElementById("search_cod_form_no_button");
        const search_cod_form_no = document.getElementById("search_cod_form_no");
        
        search_cod_form_no_button.addEventListener("click", search)
        
        function search() {
            var table_data_value = "";
            var table_data_counter = 0;
            certification.innerText = `${certification_day_ordinal} of ${certification_month} ${year}`;
            df_no.innerHTML = `${code_year_month}${data_counter4}`
            for (let x = 1; x < cod_data_list.content.length; x++) {
                if (search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")]) {
                    for(let y = 1; y <tpf_data_list.content.length; y++){
                        year = (new Date(tpf_data_list.content[y][findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")])).getFullYear();
                        month = (new Date(tpf_data_list.content[y][findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")])).getMonth() + 1;
                        certification_date = tpf_data_list.content[y][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")];
                        certification_day = new Date(certification_date).getDate();
                        certification_day_ordinal = convertToOrdinal(certification_day);
                        certification_month = convertToMonthName(month);
                        if(cod_data_list.content[x][findTextInArray(cod_data_list, "TPF #")] == tpf_data_list.content[y][findTextInArray(tpf_data_list, "TPF #")]){
                            table_data_counter += 1;
                            table_data_value +=
                                `<tr>
                                <td>${date_decoder(tpf_data_list.content[y][findTextInArray(tpf_data_list, "HAULING DATE")])}</td>
                                <td>${findWasteName(tpf_data_list.content[y][findTextInArray(tpf_data_list, "CLIENT ID")], pf_data_list.content[y][findTextInArray(tpf_data_list, "WASTE ID")])}</td>
                                <td>${findWasteCode(pf_data_list.content[y][findTextInArray(tpf_data_list, "WASTE ID")])}</td>
                                <td>${tpf_data_list.content[y][findTextInArray(tpf_data_list, "WEIGHT")]} Kgs.</td>
                                <td>${tpf_data_list.content[y][findTextInArray(tpf_data_list, "DESTRUCTION PROCESS")]}</td>
                                <td>${date_decoder(tpf_data_list.content[y][findTextInArray(tpf_data_list, "TARGET COMPLETION DATE")])}</td>
                                </tr>
                                `;
                            certification_day_ordinal = convertToOrdinal(certification_day);
                            certification_month = convertToMonthName(month);
                            certification.innerText = `${certification_day_ordinal} of ${certification_month} ${year}`;
                            table_company.innerHTML = findClientName(tpf_data_list.content[y][findTextInArray(tpf_data_list, "CLIENT ID")]);
                            for (let z = 1; z < client_data_list.content.length; z++) {
                                if (cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == client_data_list.content[z][findTextInArray(client_data_list, "CLIENT ID")]) {
                                    table_company_address.innerHTML = client_data_list.content[z][findTextInArray(client_data_list, "ADDRESS")];
                                }
                            }
                        }
                    }
                }
            }    
            table_data.innerHTML = table_data_value;
            what_to_print.style.display = "block";
            convertToPDF_button.style.display = "block";    
        }

        // generic template
        function genericTemplate(){
            var data = 
            `
            <h2 class="text-center">C E R T I F I C A T I O N</h2>
            <div class="cod text-center">
                <h4>C. No. </h4>
                <div id="df_no" class="fw-bold"></div>    
            </div><br>
            <div class="header_detail">
                <h3>Pursuant to the provisions of Republic Act 9003 also known as Ecological Solid Waste Management Act of 2000 we are issuing this certificate of destruction to:</h3>
            </div><br>
            <div class="company">
                <h2 id="table_company"></h2>
                <h4 id="table_company_address"></h4>
            </div><br>
            <h4>For the waste(s) processed/ treated as follows:</h4>
            <table>
                <thead>
                    <th>Date Hauled</th>
                    <th>Waste Description</th>
                    <th>Waste Code</th>
                    <th>Quantity</th>
                    <th>Destruction Process</th>
                    <th>Date of Completion</th>
                </thead>
                <tbody id="table_data">
                </tbody>
            </table>
            <h4>That is/are transported by <b>FAR EAST FUEL CORPORATION</b> to our TSD facility located at No. 888 Purok 5, Irabagon St., Barangay Anyatam, San Ildefonso, Bulacan with <b>TSD No. OL-TR-R3-14-000152.</b></h4><br>
            <div class="d-flex">
                <h4 class="fw-bold me-1">Certified this</h4>
                <h4 class="fw-bold" id="certification"></h4>
            </div>
            <br>
            <h4>Certified By:</h4><br><br><br><br>
            <div class="signature">
                <div>
                    <h3 class="fw-bold"><u>LAWRENCE R. ANTONIO</u></h3>
                    <h4>Pollution Control Officer</h4>
                    <img class="pco" src="../images/pco_signature.JPG" alt="">
                </div>
                <div>
                    <h3 class="fw-bold"><u>CRIS DURAN</u></h3>
                    <h4>Plant Manager</h4>
                    <img class="pm" src="../images/pm_signature.JPG" alt="">
                </div>    
            </div><br>
            <div>
                <h4 class="fw-bold">COA No. 2023-RIII-5575</h4>
                <h4>Not Valid Without FEFC Dry Seal. </h4>
            </div><br>
            <p>Cc</p>
            <p>DENR-EMB R3</p>
            <style>
                #what_to_print
                {
                    padding: 123px 38px 38px 76px;
                }
    
                #what_to_print h2
                {
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    font-size: 24px;
                    font-weight: bold;
                    margin: 0;
                }
    
                #what_to_print h3
                {
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    font-size: 16px;
                    margin: 0;
                }
    
                #what_to_print h4,
                #what_to_print #df_no
                {
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    font-size: 14px;
                    margin: 0;
                }
    
                #what_to_print .cod
                {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                }
    
                #what_to_print .header_detail
                {
                    text-align: justify;
                }
    
                #what_to_print .company
                {
                    text-align: center;
                }
    
                #what_to_print .company h2
                {
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 18px;
                }
    
                #what_to_print table
                {
                    border: 2px solid black;
                }
    
                #what_to_print table th,
                #what_to_print table td
                {
                    border: 1px solid black;
                    padding: 0 5px;
                    text-align: center;
                }
    
                #what_to_print .signature
                {
                    position: relative;
                    width: 660px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    text-align: center;
                }
    
                #what_to_print .signature .pco
                {
                    position: absolute;
                    top: -90px;
                    left: 75px;
                    width: 200px;
    
                }
    
                #what_to_print .signature .pm
                {
                    position: absolute;
                    top: -100px;
                    left: 430px;
                    width: 120px;
    
                }
    
                .overflow-element 
                {
                break-inside: avoid; /* Prevent the element from being split across pages */
                page-break-inside: avoid; /* Additional property for better cross-browser support */
                }
            </style>
            `
            what_to_print.insertAdjacentHTML("beforeend", data)
            console.log(what_to_print)
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
