document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const idf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyXPvq606vmfSlFG3nVjYuJLN8Jnv4BFGbhEmDp6e4wLL1kUQVa4kIi2dGGRKuSklT2bg/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');

        const [
            username_response,
            employee_response,
            idf_response,
            sf_response,
            irf_response
        ] = await Promise.all([
            username_response_promise,
            employee_response_promise,
            idf_response_promise,
            sf_response_promise,
            irf_response_promise
        ]);

        const username_data_list  = await username_response.json();
        const employee_data_list  = await employee_response.json();
        const idf_data_list  = await idf_response.json();
        const sf_data_list  = await sf_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data_list3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const user = document.getElementById("user");
        
        user.value = username_data_list.content[8][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[8][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[8][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[8][findTextInArray(username_data_list, "DEPARTMENT")];
        
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
            if (!irf_transaction_safety.includes(irf_data_list.content[i][findTextInArray(irf_data_list, "IRF #")])) {
                irf_transaction_safety.push(irf_data_list.content[i][findTextInArray(irf_data_list, "IRF #")]);
                irf_transaction_counter_safety += 1
            }
        }

        for (let i = 1; i < idf_data_list.content.length; i++) {
            if (!irf_idf_transaction_safety.includes(idf_data_list.content[i][findTextInArray(idf_data_list, "IRF #")])) {
                irf_idf_transaction_safety.push(idf_data_list.content[i][findTextInArray(idf_data_list, "IRF #")]);
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
            for(let y = 0; y < pending_safety.length; y++){
                if(irf_data_list.content[x][findTextInArray(irf_data_list, "IRF #")] == pending_safety[y]){
                    var employee_names = [];
                    if(((irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]).toString()).includes("||")){
                        (irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]).split("||").map(number => {
                            employee_names.push(findEmployeeName(number.trim()))
                        });
                    }
                    else{
                        employee_names.push(number.trim())
                    }
                    incident_history_data_value += `
                    <tr>
                        <td>${incident_history_data_value_counter}</td>
                        <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "IRF #")]}</td>
                        <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT DATE")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT TIME")])}</td>
                        <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DEPARTMENT")]}</td>
                        <td>${employee_names.join(" || ")}</td>
                        <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DESIGNATION")]}</td>
                        <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT DETAILS")]}</td>
                        <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "REPORT DATE")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "REPORT TIME")])}</td>
                        <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT DATE")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT TIME")]),date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "REPORT DATE")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "REPORT TIME")]))}</td>
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
                if(irf_data_list.content[x][findTextInArray(irf_data_list, "IRF #")] == pending_counter_safety[y]){
                    var employee_names = [];
                    if(((irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]).toString()).includes("||")){
                        (irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]).split("||").map(number => {
                            employee_names.push(findEmployeeName(number.trim()))
                        });
                    }
                    else{
                        employee_names.push(number.trim())
                    }
                    incident_history_data_value += `
                    <tr>
                        <td>${incident_history_data_value_counter}</td>
                        <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "IRF #")]}</td>
                        <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT DATE")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT TIME")])}</td>
                        <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DEPARTMENT")]}</td>
                        <td>${employee_names.join(" || ")}</td>
                        <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DESIGNATION")]}</td>
                        <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT DETAILS")]}</td>
                        <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "REPORT DATE")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "REPORT TIME")])}</td>
                        <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT DATE")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT TIME")]),date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "REPORT DATE")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "REPORT TIME")]))}</td>
                    </tr>
                    `
                    incident_history_data_value_counter += 1;                 
                }
            }
        }
        incident_history_list_safety.innerHTML = incident_history_data_value

        // FORM GENERATOR
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        const uarf_form_no = document.getElementById("uarf_form_no");
        const nmrf_form_no = document.getElementById("nmrf_form_no");
        const airf_form_no = document.getElementById("airf_form_no");
        var month_new;
        var code_year_month;
        var data_counter;

        if(today_month.toString().length == 1){
            month_new = `0${today_month}`
        }
    
        // UARF
        code_year_month = `UARF${today_year}${month_new}`;
    
        var data_content = 1;
        var uarf_data;
        var data_last_3digit = 0;
    
        for(x=1; x<idf_data_list.content.length; x++){
            if((idf_data_list.content[x][findTextInArray(idf_data_list, "IDF #")]).slice(0,4) == "UARF"){
                uarf_data = idf_data_list.content[x][1];
            }
            
            if(uarf_data.includes(code_year_month) == true){
                data_last_3digit = uarf_data.slice(10)
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
    
        uarf_form_no.value = `${code_year_month}${data_counter}`
        
        // NMRF
        code_year_month = `NMRF${today_year}${month_new}`;
        var data_content = 1;
        var uarf_data;
        var data_last_3digit = 0;
    
        for(x=1; x<idf_data_list.content.length; x++){
            if((idf_data_list.content[x][findTextInArray(idf_data_list, "IDF #")]).slice(0,4) == "NMRF"){
                uarf_data = idf_data_list.content[x][1];
            }
            
            if(uarf_data.includes(code_year_month) == true){
                data_last_3digit = uarf_data.slice(10)
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
    
        nmrf_form_no.value = `${code_year_month}${data_counter}`

        // AIRF
        code_year_month = `AIRF${today_year}${month_new}`;
        var data_content = 1;
        var uarf_data;
        var data_last_3digit = 0;
    
        for(x=1; x<idf_data_list.content.length; x++){
            if((idf_data_list.content[x][findTextInArray(idf_data_list, "IDF #")]).slice(0,4) == "AIRF"){
                uarf_data = idf_data_list.content[x][1];
            }
            
            if(uarf_data.includes(code_year_month) == true){
                data_last_3digit = uarf_data.slice(10)
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
    
        airf_form_no.value = `${code_year_month}${data_counter}`

        const unsafe_act_condition = document.getElementById("unsafe_act_condition");
        const near_miss = document.getElementById("near_miss");
        const accident = document.getElementById("accident");
        const uarf_form = document.getElementById("uarf_form");
        const nmrf_form = document.getElementById("nmrf_form");
        const airf_form = document.getElementById("airf_form");
        const form_details = document.getElementById("form_details");

        unsafe_act_condition.addEventListener("click", () => {
            form_details.style.display = "block";
            uarf_form.style.display = "block";
            nmrf_form.style.display = "none";
            airf_form.style.display = "none";
        })
        
        near_miss.addEventListener("click", () => {
            form_details.style.display = "block";
            uarf_form.style.display = "none";
            nmrf_form.style.display = "block";
            airf_form.style.display = "none";
        })
        
        accident.addEventListener("click", () => {
            form_details.style.display = "block";
            uarf_form.style.display = "none";
            nmrf_form.style.display = "none";
            airf_form.style.display = "block";
        })

        const search_irf_form_no = document.getElementById("search_irf_form_no");
        const search_irf_form_no_button = document.getElementById("search_irf_form_no_button");
        const clear_irf_form_no_button = document.getElementById("clear_irf_form_no_button");
        const search_irf_result = document.getElementById("search_irf_result");
        const head_button = document.getElementById("head_button");

        search_irf_form_no_button.addEventListener("click", () => {
            var data_value;
            for(let a = 1; a < irf_data_list.content.length; a++){
                for(let b = 0; b<=pending_safety.length; b++){
                    if(search_irf_form_no.value == irf_data_list.content[a][findTextInArray(irf_data_list, "IRF #")]){
                        if(search_irf_form_no.value == pending_safety[b]){
                            var employee_names = [];
                            if(((irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]).toString()).includes("||")){
                                (irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]).split("||").map(number => {
                                    employee_names.push(findEmployeeName(number.trim()))
                                });
                            }
                            else{
                                employee_names.push(number.trim())
                            }
                            data_value = `
                            <b>IRF #: </b>${irf_data_list.content[a][findTextInArray(irf_data_list, "IRF #")]}<br>
                            <b>INCIDENT DATE: </b>${date_decoder(irf_data_list.content[a][findTextInArray(irf_data_list, "INCIDENT DATE")])}<br>
                            <b>INCIDENT TIME: </b>${time_decoder(irf_data_list.content[a][findTextInArray(irf_data_list, "INCIDENT TIME")])}<br><br>
                            <b>PERSON INVOLVED: </b>${employee_names.join(" || ")}<br>
                            <b>DEPARTMENT: </b>${irf_data_list.content[a][findTextInArray(irf_data_list, "DEPARTMENT")]}<br>
                            <b>DESIGNATION: </b>${irf_data_list.content[a][findTextInArray(irf_data_list, "DESIGNATION")]}<br>
                            <b>LOCATION: </b>${irf_data_list.content[a][findTextInArray(irf_data_list, "LOCATION")]}<br><br>
                            <b>DETAILS: </b>${irf_data_list.content[a][findTextInArray(irf_data_list, "INCIDENT DETAILS")]}<br><br>
                            <b>REPORT DATE: </b>${date_decoder(irf_data_list.content[a][findTextInArray(irf_data_list, "REPORT DATE")])}<br>
                            <b>REPORT TIME: </b>${time_decoder(irf_data_list.content[a][findTextInArray(irf_data_list, "REPORT TIME")])}<br>
                            <b>SUBMITTED BY: </b>${irf_data_list.content[a][findTextInArray(irf_data_list, "SUBMITTED BY")]}<br>
                            `
                            // wcf_form_no.value = sf_data_list.content[a][2];
                            // client.value = sf_data_list.content[a][3];
                            // waste_description.value = sf_data_list.content[a][4];
                            // weight.value = sf_data_list.content[a][6];
                            // waste_description.value = sf_data_list.content[a][4];
                            // destruction_process.value = sf_data_list.content[a][5];
                            // hauling_date.value = date_decoder(sf_data_list.content[a][7]);
                            // var hauling_date_plus2 = new Date(date_decoder(sf_data_list.content[a][7]));
                            // target_date_of_completion.value = date_decoder(hauling_date_plus2.setDate(hauling_date_plus2.getDate()+2));
                            search_irf_result.style.display = "block";
                            head_button.style.display = "block";
                        }
                    }
                }
            }
            if(data_value == undefined){
                search_irf_result.innerHTML = `
                <div class="search_irf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`            
            }
            else{
                search_irf_result.innerHTML = `
                <div class="search_irf_result">
                <h2>INFORMATION</h2>
                ${data_value}
                </div><br>`
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
