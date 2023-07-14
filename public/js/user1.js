document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const driver_response_promise = fetch('https://script.google.com/macros/s/AKfycbyJ_ttOt1Ab9HnpWtQJWszInOY1hUBKvERX-dX8iijDTrQWJNUeRdgShrk-jFUoyz1zug/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');

        const [
            username_response,
            client_list_response,
            driver_response,
            vehicle_response,
            mtf_response,
            ltf_response,
            wcf_response
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            driver_response_promise,
            vehicle_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise
        ]);

        const username_data  = await username_response.json();
        const client_list_data  = await client_list_response.json();
        const driver_data  = await driver_response.json();
        const vehicle_data  = await vehicle_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();

        // Code that depends on the fetched data
        // username_data
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");

        user.value = username_data.content[1][3];
        user_sidebar.innerHTML = `<u>${username_data.content[1][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[1][4];
        
        // dashboard
        const to_received = document.getElementById("to_received");
        const received = document.getElementById("received");
        const pending = document.getElementById("pending");
        const pending_list = document.getElementById("pending_list");
        var ltf_transaction_counter = 0;
        var ltf_wcf_transaction_counter = 0;
        var mtf_transaction_counter = 0;
        var mtf_wcf_transaction_counter = 0;
        let ltf_transaction = []; // Variable containing existing elements
        let ltf_wcf_transaction = []; // Variable containing existing elements
        let mtf_transaction = []; // Variable containing existing elements
        let mtf_wcf_transaction = []; // Variable containing existing elements
        
        for (let i = 1; i < mtf_data_list.content.length; i++) {
            if(mtf_data_list.content[i][8] ==  "RECEIVING"){
                if (!mtf_transaction.includes(mtf_data_list.content[i][1])) {
                    mtf_transaction.push(mtf_data_list.content[i][1]);
                    mtf_transaction_counter += 1
                }
            }
        }

        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!ltf_transaction.includes(ltf_data_list.content[i][1])) {
                ltf_transaction.push(ltf_data_list.content[i][1]);
                ltf_transaction_counter += 1
            }
        }
        
        for (let i = 1; i < wcf_data_list.content.length; i++) {
            if (!ltf_wcf_transaction.includes(wcf_data_list.content[i][2])) {
                ltf_wcf_transaction.push(wcf_data_list.content[i][2]);
                ltf_wcf_transaction_counter += 1
            }
            if (!mtf_wcf_transaction.includes(wcf_data_list.content[i][2])) {
                mtf_wcf_transaction.push(wcf_data_list.content[i][2]);
                mtf_wcf_transaction_counter += 1
            }
        }
        
        // Get elements from wcf_transaction not included in wcf_sf_transaction
        const newElements = ltf_transaction.filter((element) => !ltf_wcf_transaction.includes(element));
        const newElements2 = mtf_transaction.filter((element) => !mtf_wcf_transaction.includes(element));

        received.innerText = ltf_wcf_transaction_counter;
        to_received.innerText = ltf_transaction_counter + mtf_transaction_counter;
        pending.innerText = newElements.length +newElements2.length;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < newElements.length; i++){
            for(let j = 1; j < ltf_data_list.content.length; j++){
                if(newElements[i] == ltf_data_list.content[j][1]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${ltf_data_list.content[j][1]}</td>
                        <td>${date_decoder(ltf_data_list.content[j][5])}</td>
                        <td>${time_decoder(ltf_data_list.content[j][6])}</td>
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
        for(let i = 0; i < newElements2.length; i++){
            for(let j = 1; j < mtf_data_list.content.length; j++){
                if(newElements2[i] == mtf_data_list.content[j][1]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${mtf_data_list.content[j][1]}</td>
                        <td>${date_decoder(mtf_data_list.content[j][4])}</td>
                        <td>${time_decoder(mtf_data_list.content[j][5])}</td>
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
        pending_list.innerHTML = data_value;

        const wcf_data2 = document.getElementById("wcf_data2");
        const ltf_form_no = document.getElementById("ltf_form_no");
        const client = document.getElementById("client");
        const plate_no = document.getElementById("plate_no");
        const driver = document.getElementById("driver");
        const hauling_date = document.getElementById("hauling_date");
        const waste_description = document.getElementById("waste_description");
        const search_ltf_form_no = document.getElementById("search_ltf_form_no");
        const search_ltf_form_no_button = document.getElementById("search_ltf_form_no_button");
        const clear_ltf_form_no_button = document.getElementById("clear_ltf_form_no_button");
        const search_ltf_result = document.getElementById("search_ltf_result");
        const wcf_data = document.getElementById("wcf_data");
        const category = document.getElementById("category");

        search_ltf_form_no_button.addEventListener("click", () => {
            var data_value;
            for(a=0; a<=newElements.length; a++){
                if(search_ltf_form_no.value == ltf_data_list.content[a][1]){
                    data_value = `
                    LTF #: ${ltf_data_list.content[a][1]}<br>
                    CLIENT: ${ltf_data_list.content[a][3]}<br>
                    WASTE DESCRIPTION: ${ltf_data_list.content[a][4]}<br>
                    HAULING DATE: ${date_decoder(ltf_data_list.content[a][5])}<br>
                    HAULING TIME: ${time_decoder(ltf_data_list.content[a][6])}<br>
                    BATCH WEIGHT: ${ltf_data_list.content[a][7]} kg.<br>
                    PLATE #: ${ltf_data_list.content[a][8]}<br>
                    DRIVER: ${ltf_data_list.content[a][9]}<br>
                    TRUCK HELPER: ${ltf_data_list.content[a][10]}<br>
                    DATE DEPARTURE: ${date_decoder(ltf_data_list.content[a][11])}<br>
                    TIME DEPARTURE: ${time_decoder(ltf_data_list.content[a][12])}<br>
                    REMARKS: ${ltf_data_list.content[a][13]}<br>
                    SUBMITTED BY: ${ltf_data_list.content[a][14]}<br>
                    `
                    ltf_form_no.value = ltf_data_list.content[a][1];
                    client.value = ltf_data_list.content[a][3];
                    waste_description.value = ltf_data_list.content[a][4];
                    plate_no.value = ltf_data_list.content[a][8];
                    driver.value = ltf_data_list.content[a][9];
                    hauling_date.value = date_decoder(ltf_data_list.content[a][5]);
                    wcf_data2.style.display = "block";
                    wcf_data.style.display = "block";
                    console.log(hauling_date)
                }
            }
            for(a=1; a<mtf_data_list.content.length; a++){
                if(search_ltf_form_no.value == mtf_data_list.content[a][1]){
                    data_value = `
                    MTF #: ${mtf_data_list.content[a][1]}<br>
                    CLIENT: ${mtf_data_list.content[a][2]}<br>
                    WASTE DESCRIPTION: ${mtf_data_list.content[a][3]}<br>
                    HAULING DATE: ${date_decoder(mtf_data_list.content[a][4])}<br>
                    HAULING TIME: ${time_decoder(mtf_data_list.content[a][5])}<br>
                    BATCH WEIGHT: ${mtf_data_list.content[a][6]} kg.<br>
                    PLATE #: PROVIDED BY CLIENT <br>
                    DRIVER:  PROVIDED BY CLIENT <br>
                    TRUCK HELPER:  PROVIDED BY CLIENT <br>
                    REMARKS: ${mtf_data_list.content[a][7]}<br>
                    SUBMITTED BY: ${mtf_data_list.content[a][9]}<br>
                    `
                    ltf_form_no.value = mtf_data_list.content[a][1];
                    client.value = mtf_data_list.content[a][2];
                    waste_description.value = mtf_data_list.content[a][3];
                    hauling_date.value = date_decoder(mtf_data_list.content[a][4]);
                    wcf_data2.style.display = "block";
                    wcf_data.style.display = "block";
                }
            }        
            for(x=1; x<client_list_data.content.length; x++){
                if(client.value === client_list_data.content[x][1]){
                    if(client_list_data.content[x][2] === "RW, HW, NHW"){
                        category.innerHTML = `
                        <label for="type_of_waste">
                            <i class="fa-solid fa-list"></i>
                            Type of Waste
                        </label>
                        <select onchange="GetClientCategory()" class="form-control" name="type_of_waste"  required id="type_of_waste">
                            <option value="">Select Category</option>
                            <option value="RW">RW - Raw Waste</option>
                            <option value="HW">HW - Hazardous Waste</option>
                            <option value="NHW">NHW - Non Hazardous Waste</option>
                        </select><br>
                        `
                    }
                    else if(client_list_data.content[x][2] === "RW"){
                        category.innerHTML = `
                        <label for="type_of_waste">
                            <i class="fa-solid fa-list"></i>
                            Type of Waste
                        </label>
                        <select onchange="GetClientCategory()" class="form-control" name="type_of_waste"  required id="type_of_waste">
                            <option value="">Select Category</option>
                            <option value="RW">RW - Raw Waste</option>
                        </select><br>
                        `
                    }
                    else if(client_list_data.content[x][2] === "HW"){
                        category.innerHTML = `
                        <label for="type_of_waste">
                            <i class="fa-solid fa-list"></i>
                            Type of Waste
                        </label>
                        <select onchange="GetClientCategory()" class="form-control" name="type_of_waste"  required id="type_of_waste">
                            <option value="">Select Category</option>
                            <option value="HW">HW - Hazardous Waste</option>
                        </select><br>
                        `
                    }
                    else if(client_list_data.content[x][2] === "NHW"){
                        category.innerHTML = `
                        <label for="type_of_waste">
                            <i class="fa-solid fa-list"></i>
                            Type of Waste
                        </label>
                        <select onchange="GetClientCategory()" class="form-control" name="type_of_waste"  required id="type_of_waste">
                            <option value="">Select Category</option>
                            <option value="NHW">NHW - Non Hazardous Waste</option>
                        </select><br>
                        `
                    }
                    else if(client_list_data.content[x][2] === "RW, HW"){
                        category.innerHTML = `
                        <label for="type_of_waste">
                            <i class="fa-solid fa-list"></i>
                            Type of Waste
                        </label>
                        <select onchange="GetClientCategory()" class="form-control" name="type_of_waste"  required id="type_of_waste">
                            <option value="">Select Category</option>
                            <option value="RW">RW - Raw Waste</option>
                            <option value="HW">HW - Hazardous Waste</option>
                        </select><br>
                        `
                    }
                    if(client_list_data.content[x][2] === "RW, NHW"){
                        category.innerHTML = `
                        <label for="type_of_waste">
                            <i class="fa-solid fa-list"></i>
                            Type of Waste
                        </label>
                        <select onchange="GetClientCategory()" class="form-control" name="type_of_waste"  required id="type_of_waste">
                            <option value="">Select Category</option>
                            <option value="RW">RW - Raw Waste</option>
                            <option value="NHW">NHW - Non Hazardous Waste</option>
                        </select><br>
                        `
                    }
                    if(client_list_data.content[x][2] === "HW, NHW"){
                        category.innerHTML = `
                        <label for="type_of_waste">
                            <i class="fa-solid fa-list"></i>
                            Type of Waste
                        </label>
                        <select onchange="GetClientCategory()" class="form-control" name="type_of_waste"  required id="type_of_waste">
                            <option value="">Select Category</option>
                            <option value="HW">HW - Hazardous Waste</option>
                            <option value="NHW">NHW - Non Hazardous Waste</option>
                        </select><br>
                        `
                    }
                }
            }
            if(data_value == undefined){
                search_ltf_result.innerHTML = `
                <div class="search_ltf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`            
            }
            else{
                search_ltf_result.innerHTML = `
                <div class="search_ltf_result">
                <h2>INFORMATION</h2>
                ${data_value}
                </div><br>`
            }
        })

        clear_ltf_form_no_button.addEventListener("click", () => {
            search_ltf_result.innerHTML = ``;
            search_ltf_form_no.value = ``;
        })

        // driver_data
        const search_wrapper2 = document.getElementById("search_driver");
        const input_box2 = search_wrapper2.querySelector("input");
        const sugg_box2 = search_wrapper2.querySelector(".autocom_box");
        var data_value2 = [];

        for (x = 1; x < driver_data.content.length; x++) {
            data_value2.push(driver_data.content[x][3]);
        }
    
        input_box2.onkeyup = (e) => {
            let user_data = e.target.value;
            let empty_array = [];
            if (user_data) {
                empty_array = data_value2.filter((data) => {
                    return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
                });
                empty_array = empty_array.map((data) => {
                    return '<li>' + data + '</li>';
                });
                console.log(empty_array);
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
            input_box2.value = select_user_data;
            console.log(input_box2.value);
            search_wrapper2.classList.remove("active");
        }
    
        function show_suggestions2(list) {
            let list_data;
            if (!list.length) {
                user_value = input_box2.value;
                list_data = '<li>' + user_value + '</li>';
            } else {
                list_data = list.join("");
            }
            sugg_box2.innerHTML = list_data;
        }
    
        // vehicle_data
        const search_wrapper3 = document.getElementById("search_plate_no");
        const input_box3 = search_wrapper3.querySelector("input");
        const sugg_box3 = search_wrapper3.querySelector(".autocom_box");
        var data_value3 = [];

        for (x = 1; x < vehicle_data.content.length; x++) {
            data_value3.push(vehicle_data.content[x][0]);
        }
    
    
        input_box3.onkeyup = (e) => {
            let user_data = e.target.value;
            let empty_array = [];
            if (user_data) {
                empty_array = data_value3.filter((data) => {
                    return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
                });
                empty_array = empty_array.map((data) => {
                    return '<li>' + data + '</li>';
                });
                console.log(empty_array);
                search_wrapper3.classList.add("active");
                show_suggestions3(empty_array);
            } else {
                search_wrapper3.classList.remove("active");
            }
        };
    
        sugg_box3.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                select3(e.target.innerHTML);
            }
        });
    
        function select3(element) {
            let select_user_data = element;
            input_box3.value = select_user_data;
            console.log(input_box3.value);
            search_wrapper3.classList.remove("active");            
        }
    
        function show_suggestions3(list) {
            let list_data;
            if (!list.length) {
                user_value = input_box3.value;
                list_data = '<li>' + user_value + '</li>';
            } else {
                list_data = list.join("");
            }
            sugg_box3.innerHTML = list_data;
        }    

        // wcf_data_list
        const wcf_form_no = document.getElementById("wcf_form_no"); 
        const search_wcf_form_no = document.getElementById("search_wcf_form_no");
        const search_wcf_form_no_button = document.getElementById("search_wcf_form_no_button");
        const clear_wcf_form_no_button = document.getElementById("clear_wcf_form_no_button");
        const search_wcf_result = document.getElementById("search_wcf_result");
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        var month_new;
        var code_year_month;
        var data_counter;
    
        // FORM GENERATOR
        if(today_month.toString().length == 1){
            month_new = `0${today_month}`
        }
    
        code_year_month = `WCF${today_year}${month_new}`;
    
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
    
        for(x=1; x<wcf_data_list.content.length; x++){
            data_info = wcf_data_list.content[x][1];
            
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
    
        wcf_form_no.value = `${code_year_month}${data_counter}`
    
        // Search Button
        search_wcf_form_no_button.addEventListener("click", () => {
        
            for(a=1; a<wcf_data_list.content.length; a++){
                var data_value;
                if(search_wcf_form_no.value == wcf_data_list.content[a][1]){
    
                    data_value =`
                    WCF #: ${wcf_data_list.content[a][1]}<br>
                    CLIENT: ${wcf_data_list.content[a][2]}<br>
                    TYPE OF WASTE: ${wcf_data_list.content[a][3]}<br>
                    TYPE OF DOCUMENT: ${wcf_data_list.content[a][4]}<br>
                    DOCUMENT #: ${wcf_data_list.content[a][5]}<br>
                    PERMIT TO TRAVEL #: ${wcf_data_list.content[a][6]}<br>
                    PLATE NO: ${wcf_data_list.content[a][7]}<br>
                    DRIVER: ${wcf_data_list.content[a][8]}<br>
                    DATE IN: ${date_decoder(wcf_data_list.content[a][9])}<br>
                    TIME IN: ${time_decoder(wcf_data_list.content[a][10])}<br>
                    DATE OUT: ${date_decoder(wcf_data_list.content[a][11])}<br>
                    TIME OUT: ${time_decoder(wcf_data_list.content[a][12])}<br>
                    ITEM: ${wcf_data_list.content[a][13]}<br>
                    GROSS WEIGHT: ${wcf_data_list.content[a][14]} kg.<br>
                    TARE WEIGHT: ${wcf_data_list.content[a][15]} kg.<br>
                    NET WEIGHT: ${wcf_data_list.content[a][16]} kg.<br>
                    SUBMITTED BY: ${wcf_data_list.content[a][17]}<br>
                    `
    
                }        
                if(data_value == undefined){
                    search_wcf_result.innerHTML = `
                    <div class="search_wcf_result">
                    <h2>INFORMATION</h2>
                    No Data Found
                    </div><br>`            
                }
                else{
                    search_wcf_result.innerHTML = `
                    <div class="search_wcf_result">
                    <h2>INFORMATION</h2>
                    ${data_value}
                    </div><br>`
                }
            }   
        });
    
        // Clear Button
        clear_wcf_form_no_button.addEventListener("click", () => {
            search_wcf_result.innerHTML = ``;
            search_wcf_form_no.value = ``;
        })
    
        // Dashboard Data
        const raw_waste = document.getElementById("raw_waste"); 
        const hazardous_waste = document.getElementById("hazardous_waste"); 
        const non_hazardous_waste = document.getElementById("non_hazardous_waste");
        const total = document.getElementById("total");
    
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
    
        raw_waste.innerText = parseInt(rw) + " kg";
        hazardous_waste.innerText = parseInt(hw) + " kg";
        non_hazardous_waste.innerText = parseInt(nhw) + " kg";
        total.innerText = parseInt(rw) + parseInt(hw) + parseInt(nhw)  + " kg";    

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
