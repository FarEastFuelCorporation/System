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

        const incident_documentation_form = document.getElementById("incident_documentation_form");
        const unsafe_act_condition = document.getElementById("unsafe_act_condition");
        const near_miss = document.getElementById("near_miss");
        const accident = document.getElementById("accident");
        const uarf_form = document.getElementById("uarf_form");
        const nmrf_form = document.getElementById("nmrf_form");
        const airf_form = document.getElementById("airf_form");
        const form_details = document.getElementById("form_details");
        const generate_btn = document.getElementById("generate_btn");
        const generate_report_btn = document.getElementById("generate_report_btn");
        const identified_hazard_input = document.getElementById("identified_hazard");
        const recommendation_input = document.getElementById("recommendation");
        const file_input_container = document.getElementById("file_input_container");
        var counter = ""
        var header = ""

        unsafe_act_condition.addEventListener("click", () => {
            form_details.style.display = "block";
            uarf_form.style.display = "block";
            nmrf_form.style.display = "none";
            airf_form.style.display = "none";
            counter = `UARF NO. ${uarf_form_no.value}`
            header = `UNSAFE ACT/CONDITION REPORT FORM`
        })
        
        near_miss.addEventListener("click", () => {
            form_details.style.display = "block";
            uarf_form.style.display = "none";
            nmrf_form.style.display = "block";
            airf_form.style.display = "none";
            counter = `NMRF NO. ${uarf_form_no.value}`
            header = `NEAR-MISS REPORT FORM`
        })
        
        accident.addEventListener("click", () => {
            form_details.style.display = "block";
            uarf_form.style.display = "none";
            nmrf_form.style.display = "none";
            airf_form.style.display = "block";
            counter = `AIRF NO. ${uarf_form_no.value}`
            header = `ACCIDENT REPORT FORM`
        })

        const search_irf_form_no = document.getElementById("search_irf_form_no");
        const search_irf_form_no_button = document.getElementById("search_irf_form_no_button");
        const search_irf_result = document.getElementById("search_irf_result");
        const head_button = document.getElementById("head_button");
        var employee_id = [];
        var employee_names = [];
        var employee_department = [];
        var employee_designation = [];
        var incident_date = "";
        var incident_time = "";
        var location = "";
        var details = "";
        var action_taken = "";
        var recommendation = "";

        generate_btn.addEventListener("click", () => {
            generateData();
            recommendation = recommendation_input.value
            generate_report_btn.style.display = "block";
            file_input_container.style.display = "block";
            // Get the textarea element
            const hazardTextarea = document.getElementById('identified_hazard');
            const hazardTextarea2 = document.getElementById('potential_harm');
            const hazardTextarea3 = document.getElementById('recommendation');
            
            // Get the container for displaying formatted information
            const formattedHazardInfo = document.getElementById('identified_hazard_input');
            const formattedHazardInfo2 = document.getElementById('potential_harm_input');
            const formattedHazardInfo3 = document.getElementById('recommendation_input');
            
            // Event listener to update formatted content when the textarea changes
            hazardTextarea.addEventListener('input', function () {
                const content = this.value.replace(/\n/g, '<br>'); // Replace newline characters with <br> tags
                formattedHazardInfo.innerHTML = content;
            });
            hazardTextarea2.addEventListener('input', function () {
                const content = this.value.replace(/\n/g, '<br>'); // Replace newline characters with <br> tags
                formattedHazardInfo2.innerHTML = content;
            });
            hazardTextarea3.addEventListener('input', function () {
                const content = this.value.replace(/\n/g, '<br>'); // Replace newline characters with <br> tags
                formattedHazardInfo3.innerHTML = content;
            });
        })

        search_irf_form_no_button.addEventListener("click", () => {
            var data_value;
            for(let a = 1; a < irf_data_list.content.length; a++){
                for(let b = 0; b<=pending_safety.length; b++){
                    if(search_irf_form_no.value == irf_data_list.content[a][findTextInArray(irf_data_list, "IRF #")]){
                        if(search_irf_form_no.value == pending_safety[b]){
                            if(((irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]).toString()).includes("||")){
                                (irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]).split("||").map(number => {
                                    employee_names.push(findEmployeeName(number.trim()))
                                    employee_id.push(number.trim())
                                });
                                (irf_data_list.content[x][findTextInArray(irf_data_list, "DEPARTMENT")]).split("||").map(number => {
                                    employee_department.push(number.trim())
                                });
                                (irf_data_list.content[x][findTextInArray(irf_data_list, "DESIGNATION")]).split("||").map(number => {
                                    employee_designation.push(number.trim())
                                });
                            }
                            else{
                                employee_names.push(number.trim())
                                employee_id.push(number.trim())
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
                            incident_date = date_decoder(irf_data_list.content[a][findTextInArray(irf_data_list, "INCIDENT DATE")])
                            incident_time = time_decoder(irf_data_list.content[a][findTextInArray(irf_data_list, "INCIDENT TIME")])
                            location = irf_data_list.content[a][findTextInArray(irf_data_list, "LOCATION")]
                            details = irf_data_list.content[a][findTextInArray(irf_data_list, "INCIDENT DETAILS")]
                            action_taken = irf_data_list.content[a][findTextInArray(irf_data_list, "INCIDENT DETAILS")]
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
        function generateData() {
            var data = 
            `
            <div class="what_to_print" id="what_to_print" style="width: 816px; height: 1056px; border: 3px solid black; background-color: white; padding: 50px 50px 25px 50px; position: relative;">
                <div style="display: flex; align-items: end; gap: 10px;">
                    <img src="/public/images/logo.png" alt="" style="height: 50px;">
                    <img src="/public/images/logo_name2.png" alt="" style="height: 40px;">
                </div>
                <h4 style="margin: 20px 0 0 0; text-align: center; font-weight: bold;">${header}</h4>
                <h6 style="text-align: center; font-weight: bold; margin: 0;">${counter}</h6>
                <h5 style="margin: 20px 0 0 0; font-weight: bold; margin: 0;">PERSONS INVOLVE</h5>
                <div style="display: grid; grid-template-columns: 30px 1fr 1fr 1fr; border: 1px solid black;">
                    <h6 style="margin: 0; font-weight: bold; display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                        #
                    </h6>
                    <h6 style="margin: 0; font-weight: bold; border-left: 1px solid black;  display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                        NAME:
                    </h6>
                    <h6 style="margin: 0; font-weight: bold; border-left: 1px solid black;  display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                        DEPARTMENT:
                    </h6>
                    <h6 style="margin: 0; font-weight: bold; border-left: 1px solid black;  display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                        DESIGNATION:
                    </h6>
                </div>
                ${employee_id.map((id, index) => {
                    const incrementedValue = index + 1;
                    return `
                    <div style="display: grid; grid-template-columns: 30px 1fr 1fr 1fr; border: 1px solid black;">
                        <h6 style="margin: 0; font-size: 12px; text-align: center; height: 100%; display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                            ${incrementedValue}
                        </h6>
                        <h6 style="margin: 0; font-size: 12px; text-align: center; border-left: 1px solid black; height: 100%; display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                            ${findEmployeeName(id)}
                        </h6>
                        <h6 style="margin: 0; font-size: 12px; text-align: center; border-left: 1px solid black; height: 100%; display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                            ${employee_department[index]}
                        </h6>
                        <h6 style="margin: 0; font-size: 12px; text-align: center; border-left: 1px solid black; height: 100%; display: flex; align-items: center; justify-content: center; padding: 0 5px;">
                            ${employee_designation[index]}
                        </h6>
                    </div>
                    `;
                }).join('')}                
                <h5 style="margin: 20px 0 0 0; font-weight: bold;">DESCRIPTION OF ACCIDENT</h5>
                <div style="border: 1px solid black;">
                    <div style="display: flex; padding: 0 5px;">
                        <h6 style="margin: 0; font-weight: bold;">LOCATION:</h6>
                        <h6 style="margin: 0; padding-left: 5px">${location}</h6>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 2fr; border-top: 1px solid black;">
                        <div style="display: flex; padding: 0 5px">
                            <h6 style="margin: 0; font-weight: bold;">DATE:</h6>
                            <h6 style="margin: 0; padding-left: 5px">${incident_date}</h6>
                        </div>
                        <div style="display: flex; padding: 0 5px; border-left: 1px solid black;">
                            <h6 style="margin: 0; font-weight: bold;">TIME:</h6>
                            <h6 style="margin: 0; padding-left: 5px">${incident_time}</h6>
                        </div>
                        <div style="display: flex; align-items: center; padding: 0 5px; border-left: 1px solid black;">
                            <h6 style="margin: 0; font-weight: bold; padding: 0 5px">POLICE NOTIFED:</h6>
                            <div style="border: 1px solid black; height: 10px; width: 10px; margin-left: 15px;"></div>
                            <h6 style="margin: 0; padding-left: 5px">YES</h6>
                            <div style="border: 1px solid black; height: 10px; width: 10px; margin-left: 15px;"></div>
                            <h6 style="margin: 0; padding-left: 5px">NO</h6>
                            <div style="border: 1px solid black; height: 10px; width: 10px; margin-left: 15px; background-color: black;"></div>
                            <h6 style="margin: 0; padding-left: 5px">N/A</h6>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; border-top: 1px solid black;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px">ACCIDENT/INCIDENT DETAILS:</h6>
                        <h6 style="margin: 0; padding-left: 5px; padding: 0 5px; text-indent: 50px; text-align: justify;">${details}</h6>
                    </div>
                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px; border-top: 1px solid black;">ATTACHMENT:</h6>
                    <div id="fileDisplayArea" style="height: 400px; max-width: 700px; max-height: 400px; padding: 5px; display: flex; justify-content: center; align-items: center;"></div>
                </div>
                <div style="margin: 20px 0 0 0; border: 1px solid black; display: grid; grid-template-columns: 50% 50%; height: 170px;">
                    <div style="display: flex; flex-direction: column;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px">IDENTIFIED HAZARD:</h6>
                        <h6 id="identified_hazard_input" style="margin: 0; padding-left: 5px; padding: 0 5px; text-align: justify; border-top: 1px solid black;"></h6>
                    </div>
                    <div style="display: flex; flex-direction: column; border-left: 1px solid black;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px;">ACTION TAKEN:</h6>
                        <h6 style="margin: 0; padding-left: 5px; padding: 0 5px; text-align: justify; border-top: 1px solid black;">${action_taken}</h6>
                    </div>
                </div>
                <style>
                    h5{
                        font-size: 16px;
                    }
                    h6{
                        font-size: 14px;
                    }
                    #fileDisplayArea img{
                        max-height: 100%;
                        max-width: 100%;
                        border: 1px solid black;
                    }
                </style>
            </div>
            <div class="what_to_print2" id="what_to_print2" style="width: 816px; height: 1056px; border: 3px solid black; background-color: white; padding: 50px 50px 25px 50px; position: relative;">
                <div style="display: flex; align-items: end; gap: 10px;">
                    <img src="/public/images/logo.png" alt="" style="height: 50px;">
                    <img src="/public/images/logo_name2.png" alt="" style="height: 40px;">
                </div>
                <h4 style="margin: 20px 0 0 0; text-align: center; font-weight: bold;">${header}</h4>
                <h6 style="text-align: center; font-weight: bold; margin: 0;">${counter}</h6>
                <div style="margin: 20px 0 0 0; border: 1px solid black;">
                    <div style="display: flex; flex-direction: column; border-top: 1px solid black; height: 65px;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px">POTENTIAL HARM:</h6>
                        <h6 id="potential_harm_input" style="margin: 0; padding-left: 5px; padding: 0 5px; text-indent: 50px; text-align: justify;"></h6>
                    </div>
                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px; border-top: 1px solid black;">ATTACHMENT:</h6>
                    <div id="fileDisplayArea2" style="height: 400px; max-width: 700px; max-height: 400px; padding: 5px; display: grid; justify-content: center; align-items: center; grid-template-columns: repeat(3, 1fr);"></div>
                </div>
                <div style="margin: 20px 0 0 0; border: 1px solid black; display: grid; grid-template-columns: 1fr; height: 140px;">
                    <div style="display: flex; flex-direction: column;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px">RECOMMENDATION / CONTROL MEASURE::</h6>
                        <h6 id="recommendation_input" style="margin: 0; padding-left: 5px; padding: 0 5px; text-indent: 50px; text-align: justify; border-top: 1px solid black;"></h6>
                    </div>
                </div>
                <div style="margin: 20px 0 0 0; border: 1px solid black; display: grid; grid-template-columns: 1fr 3fr; height: 175px;">
                    <div style="display: flex; flex-direction: column; border-right: 1px solid black;">
                        <h6 style="margin: 0; font-weight: bold; padding: 0 5px">REPORTED BY:</h6>
                        <h6 style="margin: 106px 0 0 0; padding: 0 5px; text-align: center; font-size: 13px"><u><b>ARLENE DELOS SANTOS</b></u></h6>
                        <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>PLANT SAFETY OFFICER 2</i></h6>            
                        <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>     
                    </div>
                    <div>
                        <div style="height: 85px;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
                                <div style="display: flex; flex-direction: column;">
                                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px">RECEIVED BY:</h6>
                                    <h6 style="margin: 20px 0 0 0;padding: 0 5px; text-align: center; font-size: 13px"><u><b>____________________</b></u></h6>
                                    <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>SUPERVISOR</i></h6>            
                                    <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>            
                                </div>
                                <div style="display: flex; flex-direction: column; border-left: 1px solid black;">
                                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px">RECEIVED BY:</h6>
                                    <h6 style="margin: 20px 0 0 0;padding: 0 5px; text-align: center; font-size: 13px"><u><b>ROSARIO RIVERA</b></u></h6>
                                    <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>HR ASSOCIATE</i></h6>            
                                    <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>            
                                </div>
                                <div style="display: flex; flex-direction: column; border-left: 1px solid black;">
                                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px">RECEIVED BY:</h6>
                                    <h6 style="margin: 20px 0 0 0;padding: 0 5px; text-align: center; font-size: 13px"><u><b>LAWRENCE ANTONIO</b></u></h6>
                                    <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>PCO</i></h6>
                                    <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>
                                </div>
                            </div>
                        </div>
                        <div style=" border-top: 1px solid black;; height: 70px;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr;">
                                <div style="display: flex; flex-direction: column;">
                                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px">NOTED BY:</h6>
                                    <h6 style="margin: 20px 0 0 0;padding: 0 5px; text-align: center; font-size: 13px"><u><b>DAISY CARDINEZ</b></u></h6>
                                    <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>ADMINISTRATIVE HEAD</i></h6>
                                    <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>            
                                </div>
                                <div style="display: flex; flex-direction: column; border-left: 1px solid black;">
                                    <h6 style="margin: 0; font-weight: bold; padding: 0 5px">NOTED BY:</h6>
                                    <h6 style="margin: 20px 0 0 0;padding: 0 5px; text-align: center; font-size: 13px"><u><b>CRIS DURAN</b></u></h6>
                                    <h6 style="margin: 0; padding: 0 5px; text-align: center; font-size: 13px"><i>PLANT MANAGER</i></h6>
                                    <h6 style="margin: 0; padding: 0 5px; font-size: 13px; border-top: 1px solid black;">DATE:</h6>           
                                </div>
                            </div>

                        </div>
                    </div>
                </div><br>
                <style>
                    h5{
                        font-size: 16px;
                    }
                    h6{
                        font-size: 14px;
                    }
                    #fileDisplayArea img{
                        max-height: 100%;
                        max-width: 100%;
                        border: 1px solid black;
                    }
                </style>
            </div>
            `
            incident_documentation_form.insertAdjacentHTML("beforeend", data)
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
