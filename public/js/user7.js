document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const driver_response_promise = fetch('https://script.google.com/macros/s/AKfycbyJ_ttOt1Ab9HnpWtQJWszInOY1hUBKvERX-dX8iijDTrQWJNUeRdgShrk-jFUoyz1zug/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const vehicle_log_response_promise = fetch('https://script.google.com/macros/s/AKfycbwOVO1qi9ac0YojlrZUh-XMYMe_gAeO2bg_wU_lSRdBkLgmJKQuzQuq41lzvSOjKfzA/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');

        const [
            username_response,
            driver_response,
            vehicle_response,
            vehicle_log_response,
            mtf_response,
            ltf_response,
            wcf_response,
            sf_response
        ] = await Promise.all([
            username_response_promise,
            driver_response_promise,
            vehicle_response_promise,
            vehicle_log_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise
        ]);

        const username_data  = await username_response.json();
        const driver_data  = await driver_response.json();
        const vehicle_data  = await vehicle_response.json();
        const vehicle_log_data  = await vehicle_log_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();

        // Code that depends on the fetched data
        // username_data
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");

        user.value = username_data.content[7][3];
        user_sidebar.innerHTML = `<u>${username_data.content[7][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[7][4];
        
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
        
        const search_wrapper3 = document.getElementById("search_plate_no");
        const input_box3 = search_wrapper3.querySelector("input");
        const sugg_box3 = search_wrapper3.querySelector(".autocom_box");
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

        const search_wrapper4 = document.getElementById("maintenance_plate_no");
        const input_box4 = search_wrapper4.querySelector("input");
        const sugg_box4 = search_wrapper4.querySelector(".autocom_box");
        var data_value4 = [];
        
        input_box4.onkeyup = (e) => {
            let user_data = e.target.value;
            let empty_array = [];
            if (user_data) {
                empty_array = data_value4.filter((data) => {
                    return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
                });
                empty_array = empty_array.map((data) => {
                    return '<li>' + data + '</li>';
                });
                console.log(empty_array);
                search_wrapper4.classList.add("active");
                show_suggestions4(empty_array);
            } else {
                search_wrapper4.classList.remove("active");
            }
        };
    
        sugg_box4.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                select4(e.target.innerHTML);
            }
        });
    
        function select4(element) {
            let select_user_data = element;
            input_box4.value = select_user_data;
            search_wrapper4.classList.remove("active");            
        }
    
        function show_suggestions4(list) {
            let list_data;
            if (!list.length) {
                user_value = input_box4.value;
                list_data = '<li>' + user_value + '</li>';
            } else {
                list_data = list.join("");
            }
            sugg_box4.innerHTML = list_data;
        }    

        // ltf_data_list
        const ltf_form_no = document.getElementById("ltf_form_no"); 
        const search_ltf_form_no = document.getElementById("search_ltf_form_no");
        const search_ltf_form_no_button = document.getElementById("search_ltf_form_no_button");
        const clear_ltf_form_no_button = document.getElementById("clear_ltf_form_no_button");
        const search_mtf_form_no = document.getElementById("search_mtf_form_no");
        const search_mtf_form_no_button = document.getElementById("search_mtf_form_no_button");
        const clear_mtf_form_no_button = document.getElementById("clear_mtf_form_no_button");
        const mtf_form_no = document.getElementById("mtf_form_no");
        const client = document.getElementById("client");
        const type_of_waste = document.getElementById("type_of_waste");
        const hauling_date = document.getElementById("hauling_date");
        const hauling_time = document.getElementById("hauling_time");
        const weight = document.getElementById("weight");
        const ltf_data = document.getElementById("ltf_data");
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
    
        code_year_month = `LTF${today_year}${month_new}`;
    
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
    
        for(x=1; x < ltf_data_list.content.length; x++){
            data_info = ltf_data_list.content[x][1];
            
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
    
        ltf_form_no.value = `${code_year_month}${data_counter}`
    
        // Search Button
        search_mtf_form_no_button.addEventListener("click", () => {
            for(a=0; a<=newElements.length; a++){
                var data_value;
                if(search_mtf_form_no.value == mtf_data_list.content[a][1]){
                    data_value =`
                    MTF #: ${mtf_data_list.content[a][1]}<br>
                    CLIENT: ${mtf_data_list.content[a][2]}<br>
                    TYPE OF WASTE: ${mtf_data_list.content[a][3]}<br>
                    HAULING DATE: ${date_decoder(mtf_data_list.content[a][4])}<br>
                    HAULING TIME: ${time_decoder(mtf_data_list.content[a][5])}<br>
                    WEIGHT: ${mtf_data_list.content[a][6]} kg.<br>
                    REMARKS: ${mtf_data_list.content[a][7]}<br>
                    SUBMITTED BY: ${mtf_data_list.content[a][9]}<br>
                    `
                    mtf_form_no.value = mtf_data_list.content[a][1];
                    client.value = mtf_data_list.content[a][2];
                    type_of_waste.value = mtf_data_list.content[a][3];
                    hauling_date.value = date_decoder(mtf_data_list.content[a][4]);
                    hauling_time.value = time_decoder(mtf_data_list.content[a][5]);
                    weight.value = mtf_data_list.content[a][6];
                    ltf_data.style.display = "block";
                }        
                if(data_value == undefined){
                    search_mtf_result.innerHTML = `
                    <div class="search_ltf_result">
                    <h2>INFORMATION</h2>
                    No Data Found
                    </div><br>`            
                }
                else{
                    search_mtf_result.innerHTML = `
                    <div class="search_ltf_result">
                    <h2>INFORMATION</h2>
                    ${data_value}
                    </div><br>`
                }
            }  
        });
    
        // Clear Button
        clear_mtf_form_no_button.addEventListener("click", () => {
            search_mtf_result.innerHTML = ``;
            search_mtf_form_no.value = ``;
        })
    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
