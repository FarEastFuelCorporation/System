document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');
        const cod_response_promise = fetch('https://script.google.com/macros/s/AKfycbzgiOuXizUVviCsLVfihqYN9HJ3pyNr7ElHoCl3JGkbtQnChnm2U42yQuLd4UMH0ci5/exec');

        const [
            username_response,
            client_list_response,
            wcf_response,
            tpf_response,
            cod_response
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            wcf_response_promise,
            tpf_response_promise,
            cod_response_promise
        ]);

        const username_data  = await username_response.json();
        const client_list_data  = await client_list_response.json();
        const wcf_data_list  = await wcf_response.json();
        const tpf_data_list  = await tpf_response.json();
        const cod_data_list  = await cod_response.json();

        // Code that depends on the fetched data
        // username_data
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");

        user.value = username_data.content[4][3];
        user_sidebar.innerHTML = `<u>${username_data.content[4][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[4][4];
    
        // dashboard
        var unsorted_list = document.getElementById("unsorted_list");
        var sf_tpf_transaction_counter = 0;
        var sf_transaction_counter = 0;
        let sf_transaction = []; // Variable containing existing elements
        let sf_tpf_transaction = []; // Variable containing existing elements
        
        for (let i = 1; i < tpf_data_list.content.length; i++) {
            if (!sf_transaction.includes(tpf_data_list.content[i][1])) {
                sf_transaction.push(tpf_data_list.content[i][1]);
                sf_transaction_counter += 1
            }
        }

        for (let i = 1; i < cod_data_list.content.length; i++) {
            if (!sf_tpf_transaction.includes(cod_data_list.content[i][2])) {
                sf_tpf_transaction.push(cod_data_list.content[i][2]);
                sf_tpf_transaction_counter += 1
            }
        }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const newElements = sf_transaction.filter((element) => !sf_tpf_transaction.includes(element));

        sorted.innerText = sf_tpf_transaction_counter;
        total.innerText = sf_transaction_counter
        unsorted.innerText = sf_transaction_counter - sf_tpf_transaction_counter;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < newElements.length; i++){
            var status;
            var date_accomplished;
            var target_date;
            for(let j = 1; j < tpf_data_list.content.length; j++){
                if(newElements[i] == tpf_data_list.content[j][1]){
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
                        <td>${date_decoder(tpf_data_list.content[j][11])}</td>
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
        unsorted_list.innerHTML = data_value;

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
            data_info4 = cod_data_list.content[x][1];
            
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
        df_no.innerHTML = `${code_year_month}${data_counter4}`
    
        // tpf_data_list
        var data_value2 = [];
        for (x = 1; x < client_list_data.content.length; x++) {
            data_value2.push(client_list_data.content[x][1]);
        }
        const search_wrapper = document.getElementById("cod_search_client");
        const input_box = search_wrapper.querySelector("input");
        const sugg_box = search_wrapper.querySelector(".autocom_box");
        const table_data = document.getElementById("table_data");

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
        const type_of_cod = document.getElementById("type_of_cod");
        const table_company = document.getElementById("table_company");
        const table_company_address = document.getElementById("table_company_address");
        const certification = document.getElementById("certification");
        const table_data_input_value = document.getElementById("table_data_input_value");
        const result_remarks = document.getElementById("result_remarks");
        
        generate_button.addEventListener("click", choose);
        
        function choose() {
            var table_data_value = "";
            var table_data_input = "";
            var table_data_counter = 0;
            
            if(type_of_cod.value == "By Waste Description"){
                for (let x = 1; x < tpf_data_list.content.length; x++) {
                    var year = (new Date(tpf_data_list.content[x][10])).getFullYear();
                    var month = (new Date(tpf_data_list.content[x][10])).getMonth() + 1;
                    if (input_box.value === tpf_data_list.content[x][4]) {
                        const waste_description = document.getElementById("waste_description");
                        const year_covered = document.getElementById("year_covered");
                        const month_covered = document.getElementById("month_covered");
                        var certification_date = tpf_data_list.content[x][10];
                        var certification_day = new Date(certification_date).getDate();
                        var certification_day_ordinal = convertToOrdinal(certification_day);
                        var certification_month = convertToMonthName(month);
                        for(let a = 0; a <= newElements.length; a++){
                            if(tpf_data_list.content[x][1] == newElements[a]){
                                if (waste_description.value == tpf_data_list.content[x][5] &&
                                    year_covered.value == year &&
                                    month_covered.value == month) {
                                    table_data_counter += 1;
                                    table_data_value +=
                                    `<tr>
                                    <td>${date_decoder(tpf_data_list.content[x][9])}</td>
                                    <td>${tpf_data_list.content[x][5]}</td>
                                    <td>${tpf_data_list.content[x][6]}</td>
                                    <td>${tpf_data_list.content[x][7]} Kgs.</td>
                                    <td>${tpf_data_list.content[x][8]}</td>
                                    <td>${date_decoder(tpf_data_list.content[x][10])}</td>
                                    </tr>
                                    `;
                                    table_data_input += `
                                    <input type="hidden" value="${tpf_data_list.content[x][1]}" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][2]}" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][3]}" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][4]}" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][5]}" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][6]}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][7]}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][8]}" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                    <input type="hidden" value="${date_decoder(tpf_data_list.content[x][10])}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                    `
                                    var certification_day_ordinal = convertToOrdinal(certification_day);
                                    var certification_month = convertToMonthName(month);
                                    certification.innerText = `${certification_day_ordinal} of ${certification_month} ${year}`;
                                    table_company.innerHTML = tpf_data_list.content[x][4];
                                    table_data_input_value.innerHTML = table_data_input;
                                    for (let y = 1; y < client_list_data.content.length; y++) {
                                        if (input_box.value == client_list_data.content[y][1]) {
                                            table_company_address.innerHTML = client_list_data.content[y][3];
                                        }
                                    }
                                    what_to_print.style.display = "block";
                                    convertToPDFandDownload_button.style.display = "block";    
                                    table_data.innerHTML = table_data_value;
                                    result_remarks.innerHTML = "";
                                }
                            }
                        }
                    }    
                }
            }
            else if(type_of_cod.value == "By Date"){
                for (let x = 1; x < tpf_data_list.content.length; x++) {
                    var year = (new Date(tpf_data_list.content[x][10])).getFullYear();
                    var month = (new Date(tpf_data_list.content[x][10])).getMonth() + 1;
                    if (input_box.value === tpf_data_list.content[x][4]) {
                        const waste_description = document.getElementById("waste_description");
                        const year_covered = document.getElementById("year_covered");
                        const month_covered = document.getElementById("month_covered");
                        var certification_date = tpf_data_list.content[x][10];
                        var certification_day = new Date(certification_date).getDate();
                        var certification_day_ordinal = convertToOrdinal(certification_day);
                        var certification_month = convertToMonthName(month);
                        for(let a = 0; a <= newElements.length; a++){
                            if(tpf_data_list.content[x][1] == newElements[a]){
                                if (waste_description.value == certification_day &&
                                    year_covered.value == year &&
                                    month_covered.value == month) {
                                    table_data_counter += 1;
                                    table_data_value +=
                                    `<tr>
                                    <td>${date_decoder(tpf_data_list.content[x][9])}</td>
                                    <td>${tpf_data_list.content[x][5]}</td>
                                    <td>${tpf_data_list.content[x][6]}</td>
                                    <td>${tpf_data_list.content[x][7]} Kgs.</td>
                                    <td>${tpf_data_list.content[x][8]}</td>
                                    <td>${date_decoder(tpf_data_list.content[x][10])}</td>
                                    </tr>
                                    `;
                                    table_data_input += `
                                    <input type="hidden" value="${tpf_data_list.content[x][1]}" name="tpf_no_input${table_data_counter}" id="tpf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][2]}" name="sf_no_input${table_data_counter}" id="sf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][3]}" name="wcf_no_input${table_data_counter}" id="wcf_no_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][4]}" name="client_input${table_data_counter}" id="client_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][5]}" name="waste_description_input${table_data_counter}" id="waste_description_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][6]}" name="waste_code_input${table_data_counter}" id="waste_code_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][7]}" name="weight_input${table_data_counter}" id="weight_input${table_data_counter}">
                                    <input type="hidden" value="${tpf_data_list.content[x][8]}" name="destruction_process_input${table_data_counter}" id="destruction_process_input${table_data_counter}">
                                    <input type="hidden" value="${date_decoder(tpf_data_list.content[x][10])}" name="certification_date_input${table_data_counter}" id="certification_date_input${table_data_counter}">    
                                        `
                                    certification.innerText = `${certification_day_ordinal} of ${certification_month} ${year}`;
                                    table_company.innerHTML = tpf_data_list.content[x][4];
                                    table_data_input_value.innerHTML = table_data_input;
                                    for (let y = 1; y < client_list_data.content.length; y++) {
                                        if (input_box.value == client_list_data.content[y][1]) {
                                            table_company_address.innerHTML = client_list_data.content[y][3];
                                        }
                                    }
                                    what_to_print.style.display = "block";
                                    convertToPDFandDownload_button.style.display = "block";    
                                    table_data.innerHTML = table_data_value;
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
                type_of_cod_list.innerHTML = data_content;
            }
        })

        const search_cod_form_no_button = document.getElementById("search_cod_form_no_button");
        const search_cod_form_no = document.getElementById("search_cod_form_no");

        search_cod_form_no_button.addEventListener("click", search)
    
        function search() {
            var table_data_value = "";
            var table_data_counter = 0;
            df_no.innerHTML = search_cod_form_no.value;
            for (let x = 1; x < cod_data_list.content.length; x++) {
                if (search_cod_form_no.value == cod_data_list.content[x][1]) {
                    for(let y = 1; y <tpf_data_list.content.length; y++){
                        var year = (new Date(tpf_data_list.content[y][11])).getFullYear();
                        var month = (new Date(tpf_data_list.content[y][11])).getMonth() + 1;
                        var certification_date = tpf_data_list.content[y][11];
                        var certification_day = new Date(certification_date).getDate();
                        var certification_day_ordinal = convertToOrdinal(certification_day);
                        var certification_month = convertToMonthName(month);
                        if(cod_data_list.content[x][2] == tpf_data_list.content[y][1]){
                            table_data_counter += 1;
                            table_data_value +=
                                `<tr>
                                <td>${date_decoder(tpf_data_list.content[y][9])}</td>
                                <td>${tpf_data_list.content[y][5]}</td>
                                <td>${tpf_data_list.content[y][6]}</td>
                                <td>${tpf_data_list.content[y][7]} Kgs.</td>
                                <td>${tpf_data_list.content[y][8]}</td>
                                <td>${date_decoder(tpf_data_list.content[y][11])}</td>
                                </tr>
                                `;
                        var certification_day_ordinal = convertToOrdinal(certification_day);
                        var certification_month = convertToMonthName(month);
                        certification.innerText = `${certification_day_ordinal} of ${certification_month} ${year}`;
                        table_company.innerHTML = tpf_data_list.content[y][4];
                        for (let z = 1; z < client_list_data.content.length; z++) {
                            if (cod_data_list.content[x][5] == client_list_data.content[z][1]) {
                                table_company_address.innerHTML = client_list_data.content[z][3];
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


    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
