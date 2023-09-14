document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const treatment_process_response_promise = fetch('https://script.google.com/macros/s/AKfycbzlzR7zmvdHSz4JpeXtEzPE4OQckTIVaE6PBw5IYwlqmmeIprQxEKkp4d2Jb1kBcgndzA/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');
        const prf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec');
        const pof_response_promise = fetch('https://script.google.com/macros/s/AKfycby9i2KfOZ_uF7-JUPX8qpXg7Jewmw6oU3EfUTpXiwnRRB91_qIW3xAVNy5SZBN1YhVzzg/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            treatment_process_response,
            employee_response,
            vehicle_response,
            mtf_response,
            ltf_response,
            wcf_response,
            sf_response,
            qlf_response,
            prf_response,
            pof_response,
            irf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            treatment_process_response_promise,
            employee_response_promise,
            vehicle_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise,
            qlf_response_promise,
            prf_response_promise,
            pof_response_promise,
            irf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const treatment_process_data_list  = await treatment_process_response.json();
        const employee_data_list  = await employee_response.json();
        const vehicle_data_list  = await vehicle_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
        const qlf_data_list  = await qlf_response.json();
        const prf_data_list  = await prf_response.json();
        const pof_data_list  = await pof_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data_list3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("#user");
        const prf_user = document.getElementById("prf_user");
        const prf_department = document.getElementById("prf_department");
        const irf_user = document.getElementById("irf_user");

        users.forEach(user => {user.value = username_data_list.content[18][findTextInArray(username_data_list, "NAME")]})
        prf_user.value = username_data_list.content[18][findTextInArray(username_data_list, "NAME")];
        prf_department.value = username_data_list.content[18][findTextInArray(username_data_list, "DEPARTMENT")];
        irf_user.value = username_data_list.content[18][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[18][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[18][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[18][findTextInArray(username_data_list, "DEPARTMENT")];
        
        // multi section
        // purchase_request_form
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        if(today_month.toString().length == 1){
            month_new = `0${today_month}`
        }
        const purchase_request_form = document.querySelector("#purchase_request_form");
        const add_item_button = purchase_request_form.querySelector("#add_item_button");
        const remove_item_button = purchase_request_form.querySelector("#remove_item_button");
        const purchase_request_form_button = purchase_request_form.querySelector("#purchase_request_form_button");
        const purchase_request_list = purchase_request_form.querySelector("#purchase_request_list");
        const form_tab = purchase_request_form.querySelector("#form_tab");
        var prf_counter = purchase_request_form.querySelector("#prf_counter");
        var prf_form_no = [];
        
        function prf_generator() {
            var data_content = 0;
            var data_info;
            var data_last_3digit = 0;
            var prf_code_year_month;
            prf_code_year_month = `PR${today_year}${month_new}`;
        
            for (let x = 1; x < prf_data_list.content.length; x++) {
                data_info = prf_data_list.content[x][findTextInArray(prf_data_list, "PR #")];
        
                if (data_info.includes(prf_code_year_month) == true) {
                    data_last_3digit = data_info.slice(8);
                }
            }
        
            data_content = parseInt(data_last_3digit);
        
            for (let y = 1; y <= prf_counter.value; y++) {
                prf_form_no[y] = document.querySelector(`#prf_form_no${y}`);
                prf_form_no[y].value = `${prf_code_year_month}${String(parseInt(data_content) + y).padStart(3,"0")}`;
            }
        }
        
        prf_generator()
        
        add_item_button.addEventListener("click", () => {
            const prf_item_container = purchase_request_form.querySelector("#prf_item_container");
            prf_counter.value = parseInt(prf_counter.value) + 1; // Increment the counter for the next item
            const itemHTML = `
            <div id="prf_item">
                <div>
                    <div>
                        <label for="prf_form_no${prf_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            PR #
                        </label><br>
                        <div class="form">
                            <input type="text" id="prf_form_no${prf_counter.value}" name="prf_form_no${prf_counter.value}" autocomplete="off" class="form-control" readonly>
                        </div>
                    </div>
                    <div>
                        <label for="item${prf_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Item ${prf_counter.value}
                        </label>
                        <div>
                            <input type="text" id="item${prf_counter.value}" name="item${prf_counter.value}" autocomplete="off" class="form-control" required placeholder="Item Name">
                        </div>
                    </div>
                    <div>
                        <label for="quantity${prf_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Quantity
                        </label>
                        <div>
                            <input type="number" id="quantity${prf_counter.value}" name="quantity${prf_counter.value}" autocomplete="off" class="form-control" required>
                        </div>
                    </div>
                    <div>
                        <label for="unit${prf_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Unit
                        </label>
                        <div>
                            <input type="text" id="unit${prf_counter.value}" name="unit${prf_counter.value}" autocomplete="off" class="form-control" required placeholder="ex. kg/pc/box/set">
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <label for="details${prf_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Details
                        </label>
                        <div>
                            <input type="text" id="details${prf_counter.value}" name="details${prf_counter.value}" autocomplete="off" class="form-control" required  placeholder="Brand/Unit/Specifications">
                        </div>
                    </div>
                    <div>
                        <label for="remarks1">
                            <i class="fa-solid fa-list-ol"></i>
                            Remarks
                        </label>
                        <div>
                            <input type="text" id="remarks${prf_counter.value}" name="remarks${prf_counter.value}" autocomplete="off" class="form-control" required placeholder="Where to use">
                        </div>
                    </div>
                </div>
            </div>
            `;
            prf_item_container.insertAdjacentHTML("beforeend", itemHTML);

            // Call the prf_generator function after adding a new item
            prf_generator();

            if (prf_counter.value > 1) {
                remove_item_button.style.display = "block";
            }
        });
        
        remove_item_button.addEventListener("click", () => {
            const lastItem = purchase_request_form.querySelector("#prf_item_container").lastElementChild;
            if (lastItem) {
                lastItem.remove();
                prf_counter.value = parseInt(prf_counter.value) - 1;

                // Call the prf_generator function after removing an item
                prf_generator();

                if (prf_counter.value <= 1) {
                    remove_item_button.style.display = "none";
                }
            }
        });

        var purchase_request_data_value = "";
        var purchase_request_data_value_counter = 1;
        for(let x = 1; x < prf_data_list.content.length; x++){
            var status = "PENDING";
            var duration = "PENDING";
            for(let y = 1; y < pof_data_list.content.length; y++){
                if(prf_data_list.content[x][findTextInArray(prf_data_list, "PR #")] == (pof_data_list.content[y][findTextInArray(pof_data_list, "PR #")])){
                    status = "REQUESTED"
                }
            }
            purchase_request_data_value += `
            <tr>
                <td>${purchase_request_data_value_counter}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "PR #")]}</td>
                <td>${date_decoder(prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")])}/<br>${time_decoder(prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")])}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")]}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")]}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")]}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")]}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")]}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")]}</td>
                <td>${status}</td>
                <td>${duration}</td>
            </tr>
            `
            purchase_request_data_value_counter += 1;
        }
        purchase_request_list.innerHTML = purchase_request_data_value;


        purchase_request_form_button.addEventListener("click", () => {
            if(form_tab.style.display == "block"){
                form_tab.style.display = "none";
            }
            else{
                form_tab.style.display = "block";
            }
        })
                
        // incident report form
        const irf_form_no = document.getElementById("irf_form_no"); 
        var irf_code_year_month;
        irf_code_year_month = `IRF${today_year}${today_month}`;
        
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
    
        for(x=1; x<irf_data_list.content.length; x++){
            data_info = irf_data_list.content[x][findTextInArray(irf_data_list, "IRF #")];
            
            if(data_info.includes(irf_code_year_month) == true){
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
    
        irf_form_no.value = `${irf_code_year_month}${data_counter}`

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
                        return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
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