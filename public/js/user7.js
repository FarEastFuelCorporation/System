document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const vehicle_log_response_promise = fetch('https://script.google.com/macros/s/AKfycbwOVO1qi9ac0YojlrZUh-XMYMe_gAeO2bg_wU_lSRdBkLgmJKQuzQuq41lzvSOjKfzA/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            employee_response,
            vehicle_response,
            vehicle_log_response,
            mtf_response,
            ltf_response,
            wcf_response,
            sf_response,
            qlf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            employee_response_promise,
            vehicle_response_promise,
            vehicle_log_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise,
            qlf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const employee_data_list  = await employee_response.json();
        const vehicle_data_list  = await vehicle_response.json();
        const vehicle_log_data_list  = await vehicle_log_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
        const qlf_data_list  = await qlf_response.json();

        // Code that depends on the fetched data
        // username_data_list
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const users = document.querySelectorAll("#user");

        users.forEach(user => {user.value = username_data_list.content[6][findTextInArray(username_data_list, "NAME")]})
        user_sidebar.innerHTML = `<u>${username_data_list.content[7][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[7][findTextInArray(username_data_list, "SECTIONS")];
        
        // logistic_dashboard
        const booked_transactions_logistics = document.querySelector("#logistic_dashboard #booked_transactions");
        const on_hauling_transactions_logistics = document.querySelector("#logistic_dashboard #on_hauling_transactions");
        const hauled_transactions_logistics = document.querySelector("#logistic_dashboard #hauled_transactions");
        const pending_transactions_logistics = document.querySelector("#logistic_dashboard #pending_transactions");
        const ongoing_list_logistics = document.querySelector("#logistic_dashboard #ongoing_list");
        const pending_list_logistics = document.querySelector("#logistic_dashboard #pending_list");
        const vehicle_list_logistics = document.querySelector("#vehicle_list_section #vehicle_list");
        var mtf_transaction_logistics = [];
        var mtf_ltf_transaction_logistics = [];
        var ltf_transaction_logistics = [];
        var ltf_wcf_transaction_logistics = [];
        
        for (let i = 1; i < mtf_data_list.content.length; i++) {
            if(mtf_data_list.content[i][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS"){
                if (!mtf_transaction_logistics.includes(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")])) {
                    mtf_transaction_logistics.push(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")]);
                }
            }
        }

        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!mtf_ltf_transaction_logistics.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "MTF #")])) {
                mtf_ltf_transaction_logistics.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "MTF #")]);
            }
            if (!ltf_transaction_logistics.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")])) {
                ltf_transaction_logistics.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]);
            }

        }

        for (let i = 1; i < wcf_data_list.content.length; i++) {
            if (!ltf_wcf_transaction_logistics.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")])) {
                ltf_wcf_transaction_logistics.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]);
            }
        }

        const newElements_logistics = mtf_transaction_logistics.filter((element) => !mtf_ltf_transaction_logistics.includes(element));
        const newElements2_logistics = ltf_transaction_logistics.filter((element) => !ltf_wcf_transaction_logistics.includes(element));
        const newElements3_logistics = ltf_transaction_logistics.filter((element) => ltf_wcf_transaction_logistics.includes(element));
        on_hauling_transactions_logistics.innerText = newElements2_logistics.length;
        hauled_transactions_logistics.innerText = newElements3_logistics.length;
        booked_transactions_logistics.innerText = mtf_transaction_logistics.length;
        pending_transactions_logistics.innerText = newElements_logistics.length;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < newElements_logistics.length; i++){
            for(let j = 1; j < mtf_data_list.content.length; j++){
                if(newElements_logistics[i] == mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")]){
                    if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS"){
                        data_value +=`
                        <tr>
                        <td>${data_value_counter}</td>
                        <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")]}</td>
                        <td>${date_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])}<br>${time_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING TIME")])}</td>
                        <td>${findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")])}</td>
                        <td>${findWasteCode(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                        <td>${findWasteName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")], mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                        <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")]}</td>
                        <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "REMARKS")]}</td>
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
                if(ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")] == newElements2_logistics[k]){
                    data3_value +=`
                    <tr>
                    <td>${data_value3_counter}</td>
                    <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")]}</td>
                    <td>${date_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE DATE")])}<br>${time_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE TIME")])}</td>
                    <td>${findClientName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")])}</td>
                    <td>${findWasteCode(ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                    <td>${findWasteName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")], ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                    <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "PLATE #")]}</td>
                    <td>${findEmployeeName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DRIVER ID")])}</td>
                    <td>ON HAULING</td>
                    <td>PENDING</td>
                    </tr>
                    `
                    data_value3_counter += 1;
                }
            }
            for(let k = 1; k < wcf_data_list.content.length; k++){
                if(ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF #")]){
                    data3_value +=`
                    <tr>
                    <td>${data_value3_counter}</td>
                    <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")]}</td>
                    <td>${date_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE DATE")])}<br>${time_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE TIME")])}</td>
                    <td>${findClientName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")])}</td>
                    <td>${findWasteCode(ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                    <td>${findWasteName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")], ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                    <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "PLATE #")]}</td>
                    <td>${findEmployeeName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DRIVER ID")])}</td>
                    <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")])}<br>${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                    <td>${calculateTravelTime(date_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE DATE")]),time_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE TIME")]),date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")]),time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")]))}</td>
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
        for(let j = 1; j < vehicle_data_list.content.length; j++){
            var vehicle_status_logistics = `AVAILABLE`;
            for(let k = 1; k < vehicle_log_data_list.content.length; k++){
                if(vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "PLATE #")] == vehicle_log_data_list.content[k][findTextInArray(vehicle_log_data_list, "PLATE #")]){
                    vehicle_status_logistics = vehicle_log_data_list.content[k][findTextInArray(vehicle_log_data_list, "STATUS")];
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
                <td>${vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "PLATE #")]}</td>
                <td>${vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "VEHICLE")]}</td>
                <td>${vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]}</td>
                <td>${vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "NET CAPACITY (MT)")]}</td>
                <td>${vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "OWNED / LEASED")]}</td>
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
        for(let x = 1; x < employee_data_list.content.length; x++){
            if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
                var gender = employee_data_list.content[x][findTextInArray(employee_data_list, "GENDER")];
                if(gender == "MALE"){
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "AFFIX")]}`
                    data_value2.push(full_name);
                }
                else{
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[x][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                    data_value2.push(full_name);
                }
            }
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
        
        // truck_helper
        const plate_driver_truck_helper = document.getElementById("plate_driver_truck_helper");
        var truck_helper_count = document.getElementById("truck_helper_count");
        const add_item_button = document.getElementById("add_item_button");
        const remove_item_button = document.getElementById("remove_item_button");
        
        add_item_button.addEventListener("click", () => {
            truck_helper_count.value = parseInt(truck_helper_count.value) + 1; // Increment the counter for the next item
            var data = `
            <div class="wrapper">
                <label for="truck_helper">
                    <i class="fa-solid fa-id-card"></i>
                    Truck Helper ${truck_helper_count.value}
                </label><br>
                <div class="search_input" id="search_truck_helper">
                    <input type="text" autocomplete="off" name="truck_helper${truck_helper_count.value}" id="truck_helper${truck_helper_count.value}" class="form-control" required placeholder="Type to Search Truck Helper Name...">
                    <div class="autocom_box">
                    </div>
                    <div class="icon"><i class="fas fa-search"></i></div>
                </div>
            </div>
            `
            plate_driver_truck_helper.insertAdjacentHTML("beforeend", data);
            add_event_function();
            if (truck_helper_count.value > 1) {
                remove_item_button.style.display = "block";
            }
        })

        add_event_function();

        function add_event_function(){
            const search_wrapper5 = document.querySelectorAll("#search_truck_helper");
            search_wrapper5.forEach((search_wrapper) => {
                const input_box5 = search_wrapper.querySelector("input");
                const sugg_box5 = search_wrapper.querySelector(".autocom_box");
                var data_value5 = [];
                for(let x = 1; x < employee_data_list.content.length; x++){
                    if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
                        var gender = employee_data_list.content[x][findTextInArray(employee_data_list, "GENDER")];
                        if(gender == "MALE"){
                            var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "AFFIX")]}`
                            data_value5.push(full_name);
                        }
                        else{
                            var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[x][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                            data_value5.push(full_name);
                        }
                    }
                }
                input_box5.onkeyup = (e) => {
                    let user_data = e.target.value;
                    let empty_array = [];
                    if (user_data) {
                        empty_array = data_value5.filter((data) => {
                            return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
                        });
                        empty_array = empty_array.map((data) => {
                            return '<li>' + data + '</li>';
                        });
                        search_wrapper.classList.add("active");
                        show_suggestions5(empty_array);
                    } else {
                        search_wrapper.classList.remove("active");
                    }
                };
                sugg_box5.addEventListener("click", (e) => {
                    if (e.target.tagName === "LI") {
                        select5(e.target.innerHTML);
                    }
                });
                function select5(element) {
                    let select_user_data = element;
                    input_box5.value = select_user_data;
                    search_wrapper.classList.remove("active");
                }
                function show_suggestions5(list) {
                    let list_data;
                    if (!list.length) {
                        user_value = input_box5.value;
                        list_data = '<li>' + user_value + '</li>';
                    } else {
                        list_data = list.join("");
                    }
                    sugg_box5.innerHTML = list_data;
                }
            })
        }

        remove_item_button.addEventListener("click", () => {
            const truckHelpers = plate_driver_truck_helper.querySelectorAll(".wrapper");
            const lastTruckHelper = truckHelpers[truckHelpers.length - 1];
            if (truckHelpers.length > 1) {
                plate_driver_truck_helper.removeChild(lastTruckHelper);
                truck_helper_count.value = parseInt(truck_helper_count.value) - 1;
                if (truck_helper_count.value === 1) {
                    remove_item_button.style.display = "none";
                }
            }
        });

        // vehicle_list_section 
        const total_vehicle_vehicle_list_section = document.querySelector("#total_vehicle");
        const available_vehicle_vehicle_list_section = document.querySelector("#available_vehicle");
        const on_hauling_vehicle_vehicle_list_section = document.querySelector("#on_hauling_vehicle");
        const under_maintenance_vehicle_vehicle_list_section = document.querySelector("#under_maintenance_vehicle");
        const for_maintenance_vehicle_vehicle_list_section = document.querySelector("#for_maintenance_vehicle");        
        var data_value3 = [];
        var total_vehicle_counter_vehicle_list_section = 0;
        for (x = 1; x < vehicle_data_list.content.length; x++) {
            data_value3.push(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "PLATE #")]);
            total_vehicle_counter_vehicle_list_section += 1;
            for (y = 1; y < vehicle_log_data_list.content.length; y++) {
                if(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "PLATE #")] == vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "PLATE #")]){
                    if(vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "STATUS")] != "AVAILABLE"){
                        data_value3 = data_value3.filter(item => item !== vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "PLATE #")]);
                    }
                    else if(vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "STATUS")] == "AVAILABLE"){
                        data_value3.push(vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "PLATE #")]);
                    }
                }
            }
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
        const timestamp = document.getElementById("timestamp");
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
            data_info = ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")];
            
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
            for(b=0; b<=newElements_logistics.length; b++){
                for(a=1; a < mtf_data_list.content.length; a++){
                    if(newElements_logistics[b] == mtf_data_list.content[a][findTextInArray(mtf_data_list, "MTF #")]){
                        var data_value;
                        if(search_mtf_form_no.value == mtf_data_list.content[a][findTextInArray(mtf_data_list, "MTF #")]){
                            data_value =`
                            MTF #: ${mtf_data_list.content[a][findTextInArray(mtf_data_list, "MTF #")]}<br>
                            CLIENT: ${findClientName(mtf_data_list.content[a][findTextInArray(mtf_data_list, "CLIENT ID")])}<br>
                            WASTE CODE: ${findWasteCode(mtf_data_list.content[a][findTextInArray(mtf_data_list, "WASTE ID")])}<br>
                            WASTE DESCRIPTION: ${findWasteName(mtf_data_list.content[a][findTextInArray(mtf_data_list, "CLIENT ID")], mtf_data_list.content[a][findTextInArray(mtf_data_list, "WASTE ID")])}<br>
                            HAULING DATE: ${date_decoder(mtf_data_list.content[a][findTextInArray(mtf_data_list, "HAULING DATE")])}<br>
                            HAULING TIME: ${time_decoder(mtf_data_list.content[a][findTextInArray(mtf_data_list, "HAULING TIME")])}<br>
                            TYPE OF VEHICLE: ${mtf_data_list.content[a][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")]}<br>
                            REMARKS: ${mtf_data_list.content[a][findTextInArray(mtf_data_list, "REMARKS")]}<br>
                            SUBMITTED BY: ${mtf_data_list.content[a][findTextInArray(mtf_data_list, "SUBMITTED BY")]}<br>
                            `
                            mtf_form_no.value = mtf_data_list.content[a][findTextInArray(mtf_data_list, "MTF #")];
                            client.value = findClientName(mtf_data_list.content[a][findTextInArray(mtf_data_list, "CLIENT ID")]);
                            type_of_waste.value = mtf_data_list.content[a][findTextInArray(mtf_data_list, "WASTE ID")];
                            hauling_date.value = date_decoder(mtf_data_list.content[a][findTextInArray(mtf_data_list, "HAULING DATE")]);
                            hauling_time.value = time_decoder(mtf_data_list.content[a][findTextInArray(mtf_data_list, "HAULING TIME")]);
                            weight.value = mtf_data_list.content[a][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")];
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
                }  
            }  
        });
        
        search_ltf_form_no_button.addEventListener("click", () => {
            for(b=0; b<=newElements2_logistics.length; b++){
                for(a=1; a < ltf_data_list.content.length; a++){
                    if(newElements2_logistics[b] == ltf_data_list.content[a][findTextInArray(ltf_data_list, "LTF #")]){
                        var data_value;
                        if(search_ltf_form_no.value == ltf_data_list.content[a][findTextInArray(ltf_data_list, "LTF #")]){
                            data_value =`
                            LTF #: ${ltf_data_list.content[a][findTextInArray(ltf_data_list, "LTF #")]}<br>
                            MTF #: ${ltf_data_list.content[a][findTextInArray(ltf_data_list, "MTF #")]}<br>
                            CLIENT: ${findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")])}<br>
                            WASTE CODE: ${findWasteCode(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}<br>
                            WASTE DESCRIPTION: ${findWasteName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")], mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}<br>
                            HAULING DATE: ${date_decoder(ltf_data_list.content[a][findTextInArray(ltf_data_list, "HAULING DATE")])}<br>
                            HAULING TIME: ${time_decoder(ltf_data_list.content[a][findTextInArray(ltf_data_list, "HAULING TIME")])}<br>
                            TYPE OF VEHICLE: ${ltf_data_list.content[a][findTextInArray(ltf_data_list, "TYPE OF VEHICLE")]}<br>
                            REMARKS: ${ltf_data_list.content[a][findTextInArray(ltf_data_list, "REMARKS")]}<br>
                            SUBMITTED BY: ${ltf_data_list.content[a][findTextInArray(ltf_data_list, "SUBMITTED BY")]}<br>
                            `
                            mtf_form_no.value = ltf_data_list.content[a][findTextInArray(ltf_data_list, "MTF #")];
                            client.value = findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")]);
                            type_of_waste.value = mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")];
                            hauling_date.value = date_decoder(ltf_data_list.content[a][findTextInArray(ltf_data_list, "HAULING DATE")]);
                            hauling_time.value = time_decoder(ltf_data_list.content[a][findTextInArray(ltf_data_list, "HAULING TIME")]);
                            weight.value = ltf_data_list.content[a][findTextInArray(ltf_data_list, "TYPE OF VEHICLE")];
                            timestamp.value = ltf_data_list.content[a][findTextInArray(ltf_data_list, "CREATED AT")];
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
                }  
            }  
        });
    
        // Clear Button
        clear_mtf_form_no_button.addEventListener("click", () => {
            search_mtf_result.innerHTML = ``;
            search_mtf_form_no.value = ``;
        })

        const vehicle_list_section = document.querySelector("#vehicle_list_section"); 
        const new_vehicle_tab = vehicle_list_section.querySelector("#new_vehicle_tab");
        const vehicle_maintenance_tab = vehicle_list_section.querySelector("#vehicle_maintenance_tab");
        const new_vehicle_button = vehicle_list_section.querySelector("#new_vehicle_button");
        const vehicle_maintenance_button = vehicle_list_section.querySelector("#vehicle_maintenance_button");

        new_vehicle_button.addEventListener("click", () => {
            if(new_vehicle_tab.style.display == "block"){
                new_vehicle_tab.style.display = "none";
                vehicle_maintenance_tab.style.display = "none";
            }
            else{
                new_vehicle_tab.style.display = "block";
                vehicle_maintenance_tab.style.display = "none";
            }
        })
        vehicle_maintenance_button.addEventListener("click", () => {
            if(vehicle_maintenance_tab.style.display == "block"){
                vehicle_maintenance_tab.style.display = "none";
                new_vehicle_tab.style.display = "none";
            }
            else{
                vehicle_maintenance_tab.style.display = "block";
                new_vehicle_tab.style.display = "none";
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
            console.log(waste_id)
            var waste_code = "";
            for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                if(waste_id == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                    waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                    console.log(waste_code)
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
