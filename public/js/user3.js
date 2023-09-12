document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            sf_response,
            tpf_response,
            qlf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            sf_response_promise,
            tpf_response_promise,
            qlf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const sf_data_list  = await sf_response.json();
        const tpf_data_list  = await tpf_response.json();
        const qlf_data_list  = await qlf_response.json();
    
        // Code that depends on the fetched data
        // username_data_list
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const user = document.getElementById("user");

        user.value = username_data_list.content[3][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[3][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[3][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[3][findTextInArray(username_data_list, "DEPARTMENT")];

        // tpf_data_list
        const tpf_form_no = document.getElementById("tpf_form_no"); 
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        var month_new;
        var code_year_month;
        var data_counter;

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
            if(sf_data_list.content[i][findTextInArray(sf_data_list, "WASTE ID")] !== "DISCREPANCY"){
                if(sf_data_list.content[i][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")] !== "FOR STORAGE"){
                    if (!sf_transaction_treatment.includes(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")])) {
                        sf_transaction_treatment.push(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")]);
                        sf_transaction_counter_treatment += 1
                    }
                }
            }
        }

        for (let i = 1; i < tpf_data_list.content.length; i++) {
            if (!sf_tpf_transaction_treatment.includes(tpf_data_list.content[i][findTextInArray(tpf_data_list, "SF #")])) {
                sf_tpf_transaction_treatment.push(tpf_data_list.content[i][findTextInArray(tpf_data_list, "SF #")]);
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
                if(pending_treatment[i] == sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")]}</td>
                        <td>${date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION DATE")])} /<br> ${time_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION TIME")])}</td>
                        <td>${findClientName(sf_data_list.content[j][findTextInArray(sf_data_list, "CLIENT ID")])}</td>
                        <td>${findWasteCode(sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE ID")])}</td>
                        <td>${findWasteName(sf_data_list.content[j][findTextInArray(sf_data_list, "CLIENT ID")], sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE ID")])}</td>
                        <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")]}</td>
                        <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "WEIGHT")]}</td>
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
                if(finished_treatment[i] == sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")]){
                    var sorted_date;
                    var sorted_time;
                    var tpf_no;
                    for(let k = 1; k < tpf_data_list.content.length; k++){
                        if(sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")] == tpf_data_list.content[k][findTextInArray(tpf_data_list, "SF #")]){
                            sorted_date = date_decoder(tpf_data_list.content[k][findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")]);
                            sorted_time = time_decoder(tpf_data_list.content[k][findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")]);
                            tpf_no = tpf_data_list.content[k][findTextInArray(tpf_data_list, "TPF #")];
                            break
                        }
                    }
                    data_value +=`
                    <tr>
                    <td>${data_value_counter}</td>
                    <td>${tpf_no}</td>
                    <td>${date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION DATE")])} /<br> ${time_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION TIME")])}</td>
                    <td>${findClientName(sf_data_list.content[j][findTextInArray(sf_data_list, "CLIENT ID")])}</td>
                    <td>${findWasteCode(sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE ID")])}</td>
                    <td>${findWasteName(sf_data_list.content[j][findTextInArray(sf_data_list, "CLIENT ID")], sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE ID")])}</td>
                    <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")]}</td>
                    <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "WEIGHT")]} Kg.</td>
                    <td>${sorted_date} /<br> ${sorted_time}</td>
                    <td>${calculateTravelTime(date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION DATE")]),time_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION TIME")]),sorted_date,sorted_time)}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        finished_list_treatment.innerHTML = data_value;    

        // FORM GENERATOR
        if(today_month.toString().length == 1){
            month_new = `0${today_month}`
        }

        code_year_month = `TPF${today_year}${month_new}`;

        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;

        for(x=1; x<tpf_data_list.content.length; x++){
            data_info = tpf_data_list.content[x][findTextInArray(tpf_data_list, "TPF #")];

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

        tpf_form_no.value = `${code_year_month}${data_counter}`

        // sf_data_list
        const wcf_form_no = document.getElementById("wcf_form_no");
        const client = document.getElementById("client");
        const waste_description = document.getElementById("waste_description");
        const waste_code_input = document.getElementById("waste_code");
        const weight = document.getElementById("weight");
        const destruction_process = document.getElementById("destruction_process");
        const hauling_date = document.getElementById("hauling_date");
        const target_date_of_completion = document.getElementById("target_date_of_completion");
        const search_sf_form_no = document.getElementById("search_sf_form_no");
        const search_sf_form_no_button = document.getElementById("search_sf_form_no_button");
        const search_sf_result = document.getElementById("search_sf_result");
        const additional_item1 = document.getElementById("additional_item1");
        const add_item_button = document.getElementById("add_item_button");
        const remove_item_button = document.getElementById("remove_item_button");
        const completion = document.getElementById("completion");
        const buttons = document.getElementById("buttons");

        search_sf_form_no_button.addEventListener("click", () => {
            var data_value;
            for(let a = 1; a < sf_data_list.content.length; a++){
                for(let b=0; b<=pending_treatment.length; b++){
                    if(search_sf_form_no.value == sf_data_list.content[a][findTextInArray(sf_data_list, "SF #")]){
                        if(search_sf_form_no.value == pending_treatment[b]){
                            data_value = `
                            SF #: ${sf_data_list.content[a][findTextInArray(sf_data_list, "SF #")]}<br>
                            WCF #: ${sf_data_list.content[a][findTextInArray(sf_data_list, "WCF #")]}<br>
                            CLIENT: ${findClientName(sf_data_list.content[a][findTextInArray(sf_data_list, "CLIENT ID")])}<br>
                            WASTE CODE: ${findWasteCode(sf_data_list.content[a][findTextInArray(sf_data_list, "WASTE ID")])}<br>
                            WASTE DESCRIPTION: ${findWasteName(sf_data_list.content[a][findTextInArray(sf_data_list, "CLIENT ID")], sf_data_list.content[a][findTextInArray(sf_data_list, "WASTE ID")])}<br>
                            DESTRUCTION PROCESS: ${sf_data_list.content[a][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")]}<br>
                            WEIGHT: ${sf_data_list.content[a][findTextInArray(sf_data_list, "WEIGHT")]} kg.<br>
                            HAULING DATE: ${date_decoder(sf_data_list.content[a][findTextInArray(sf_data_list, "HAULING DATE")])}<br>
                            SORTED DATE: ${date_decoder(sf_data_list.content[a][findTextInArray(sf_data_list, "COMPLETION DATE")])}<br>
                            SORTED TIME: ${time_decoder(sf_data_list.content[a][findTextInArray(sf_data_list, "COMPLETION TIME")])}<br>
                            SUBMITTED BY: ${sf_data_list.content[a][findTextInArray(sf_data_list, "SUBMITTED BY")]}<br>
                            `
                            if(sf_data_list.content[a][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")] == 'THERMAL DECOMPOSITION'){
                                machine_list.innerHTML = `
                                <label for="tpf_form_no">
                                    <i class="fa-solid fa-gears"></i>
                                    Machine
                                </label><br>
                                <div>
                                    <select name="machine" id="machine" class="form-control">
                                        <option value="">Select Machine</option>
                                        <option value="THERMAL 1 (ALPHA)">THERMAL 1 (ALPHA)</option>
                                        <option value="THERMAL 2 (BRAVO)">THERMAL 2 (BRAVO)</option>
                                        <option value="THERMAL 3 (CHARLIE)">THERMAL 3 (CHARLIE)</option>
                                    </select>
                                </div><br>
                                `
                            }
                            else if(sf_data_list.content[a][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")] == 'PYROLYSIS'){
                                machine_list.innerHTML = `
                                <label for="tpf_form_no">
                                    <i class="fa-solid fa-gears"></i>
                                    Machine
                                </label><br>
                                <div>
                                    <select name="machine" id="machine" class="form-control">
                                        <option value="">Select Machine</option>
                                        <option value="PYROLYSIS 1">PYROLYSIS 1</option>
                                        <option value="PYROLYSIS 2">PYROLYSIS 2</option>
                                        <option value="PYROLYSIS 3">PYROLYSIS 3</option>
                                    </select>
                                </div><br>
                                `
                            }
                            wcf_form_no.value = sf_data_list.content[a][findTextInArray(sf_data_list, "WCF #")];
                            client.value = sf_data_list.content[a][findTextInArray(sf_data_list, "CLIENT ID")];
                            waste_description.value = sf_data_list.content[a][findTextInArray(sf_data_list, "WASTE ID")];
                            waste_code_input.value = findWasteCode(sf_data_list.content[a][findTextInArray(sf_data_list, "WASTE ID")]);
                            weight.value = sf_data_list.content[a][findTextInArray(sf_data_list, "WEIGHT")];
                            destruction_process.value = sf_data_list.content[a][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")];
                            hauling_date.value = date_decoder(sf_data_list.content[a][findTextInArray(sf_data_list, "HAULING DATE")]);
                            var hauling_date_plus2 = new Date(date_decoder(sf_data_list.content[a][findTextInArray(sf_data_list, "HAULING DATE")]));
                            target_date_of_completion.value = date_decoder(hauling_date_plus2.setDate(hauling_date_plus2.getDate()+2));
                            additional_item1.style.display = "grid";
                            add_item_button.style.display = "block";
                            completion.style.display = "grid";
                            buttons.style.display = "flex";    
                        }
                    }
                }
            }
            if(data_value == undefined){
                search_sf_result.innerHTML = `
                <div class="search_sf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`            
            }
            else{
                search_sf_result.innerHTML = `
                <div class="search_sf_result">
                <h2>INFORMATION</h2>
                ${data_value}
                </div><br>`
            }
        });

        const additional_item2 = document.getElementById("additional_item2");
        const additional_item3 = document.getElementById("additional_item3");
        const additional_item4 = document.getElementById("additional_item4");
        const additional_item5 = document.getElementById("additional_item5");
        const item_counter = document.getElementById("item_counter");
        var item_counter_int = parseInt(item_counter.value)
        const form_id = document.getElementById("form_id");

        add_item_button.addEventListener("click", add_new_item);

        function add_new_item(){        
            item_counter_int += 1;
            item_counter.value = item_counter_int;
        
            if(item_counter_int == 2){
                additional_item2.style.display ="grid";
                // FOR 2
                remove_item_button.style.display = "block"
            }
            else if(item_counter_int == 3){
                additional_item3.style.display ="grid";
                // FOR 3
            }
            else if(item_counter_int == 4){
                additional_item4.style.display ="grid";
                // FOR 4
            }
            else if(item_counter_int == 5){
                additional_item5.style.display ="grid";
                // FOR 5
                add_item_button.style.display = "none"
            }
        }

        remove_item_button.addEventListener("click", remove_new_item);
        
        function remove_new_item(){
            if(item_counter_int == 2){
                additional_item2.style.display ="none";        
                // FOR 1
                remove_item_button.style.display = "none"
            }
            else if(item_counter_int == 3){
                additional_item3.style.display ="none";
                // FOR 2
            }
            else if(item_counter_int == 4){
                additional_item4.style.display ="none";
                // FOR 3
            }
            else if(item_counter_int == 5){
                additional_item5.style.display ="none";
                // FOR 4
                add_item_button.style.display = "block"
            }
            item_counter_int -= 1;
            item_counter.value = item_counter_int;
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