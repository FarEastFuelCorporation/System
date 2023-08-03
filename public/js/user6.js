document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const orf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwSliANKKtPArcb7BDb-TlZC7Cnv7Dc6TwqMZi87EYzaBD20HfIy9CshHJzuNRifqwDOg/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            mtf_response,
            ltf_response,
            wcf_response,
            sf_response,
            orf_response,
            irf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise,
            orf_response_promise,
            irf_response_promise,
        ]);

        const username_data  = await username_response.json();
        const client_list_data  = await client_list_response.json();
        const type_of_waste_data  = await type_of_waste_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
        const orf_data_list  = await orf_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");
        const orf_user = document.getElementById("orf_user");
        console.log("🚀 ~ file: user6.js:51 ~ document.addEventListener ~ orf_user:", orf_user)
        const orf_department = document.getElementById("orf_department");
        console.log("🚀 ~ file: user6.js:53 ~ document.addEventListener ~ orf_department:", orf_department)
        const irf_user = document.getElementById("irf_user");

        user.value = username_data.content[6][3];
        orf_user.value = username_data.content[6][3];
        orf_department.value = username_data.content[6][5];
        irf_user.value = username_data.content[6][3];
        user_sidebar.innerHTML = `<u>${username_data.content[6][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[6][4];
        
        // marketing_dashboard
        const booked_transactions_marketing = document.getElementById("booked_transactions");
        const on_hauling_marketing = document.getElementById("on_hauling");
        const pending_marketing = document.getElementById("pending");
        const received_marketing = document.getElementById("received");
        const pending_list_marketing = document.getElementById("pending_list");
        const for_logistics_pending_marketing = document.getElementById("for_logistics_pending");
        const for_logistics_on_haul_marketing = document.getElementById("for_logistics_on_haul");
        const for_logistics_received_marketing = document.getElementById("for_logistics_received");
        const for_receiving_pending_marketing = document.getElementById("for_receiving_pending");
        const for_receiving_received_marketing = document.getElementById("for_receiving_received");
        var mtf_transaction_counter_marketing = 0;
        var mtf_ltf_transaction_counter_marketing = 0;
        var mtf_transaction_logistic_transaction_counter_marketing = 0;
        var mtf_transaction_receiving_transaction_counter_marketing = 0;
        var ltf_transaction_counter_marketing = 0;
        var ltf_wcf_transaction_counter_marketing = 0;
        var for_logistics_pending_counter_marketing = 0;
        var for_logistics_on_haul_counter_marketing = 0;
        var for_logistics_received_counter_marketing = 0;
        var for_receiving_pending_counter_marketing = 0;
        var for_receiving_received_counter_marketing = 0;
        var mtf_transaction_marketing = []; // Variable containing existing elements
        var mtf_ltf_transaction_marketing = []; // Variable containing existing elements
        var mtf_transaction_logistic_transaction_marketing = []; // Variable containing existing elements
        var mtf_transaction_receiving_transaction_marketing = []; // Variable containing existing elements
        var ltf_transaction_marketing = []; // Variable containing existing elements
        var ltf_wcf_transaction_marketing = []; // Variable containing existing elements
        
        for (let i = 1; i < mtf_data_list.content.length; i++) {
            if (!mtf_transaction_marketing.includes(mtf_data_list.content[i][1])) {
                mtf_transaction_marketing.push(mtf_data_list.content[i][1]);
                mtf_transaction_counter_marketing += 1
            }
            if(mtf_data_list.content[i][8] == "LOGISTICS"){
                if (!mtf_transaction_logistic_transaction_marketing.includes(mtf_data_list.content[i][1])) {
                    mtf_transaction_logistic_transaction_marketing.push(mtf_data_list.content[i][1]);
                    mtf_transaction_logistic_transaction_counter_marketing += 1
                }
            }
            if(mtf_data_list.content[i][8] == "RECEIVING"){
                if (!mtf_transaction_receiving_transaction_marketing.includes(mtf_data_list.content[i][1])) {
                    mtf_transaction_receiving_transaction_marketing.push(mtf_data_list.content[i][1]);
                    mtf_transaction_receiving_transaction_counter_marketing += 1
                }
            }
        }

        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!mtf_ltf_transaction_marketing.includes(ltf_data_list.content[i][2])) {
                mtf_ltf_transaction_marketing.push(ltf_data_list.content[i][2]);
                mtf_ltf_transaction_counter_marketing += 1
            }
            if (!ltf_transaction_marketing.includes(ltf_data_list.content[i][1])) {
                ltf_transaction_marketing.push(ltf_data_list.content[i][1]);
                ltf_transaction_counter_marketing += 1
            }
        }

        for (let i = 1; i < wcf_data_list.content.length; i++) {
            if (!ltf_wcf_transaction_marketing.includes(wcf_data_list.content[i][2])) {
                ltf_wcf_transaction_marketing.push(wcf_data_list.content[i][2]);
                ltf_wcf_transaction_counter_marketing += 1
            }
        }

        booked_transactions_marketing.innerText = mtf_transaction_counter_marketing

        var data_value = "";
        var data_value_counter = 1;
        for(let j = 1; j < mtf_data_list.content.length; j++){
            var status = "PENDING";
            // for logistics
            if(mtf_data_list.content[j][8] == "LOGISTICS"){
                for(let k = 1; k < ltf_data_list.content.length; k++){
                    if(mtf_data_list.content[j][1] == ltf_data_list.content[k][2]){
                        status = "ON HAULING";
                        for_logistics_on_haul_counter_marketing += 1;
                        for_logistics_pending_counter_marketing -= 1;
                        for(let m = 1; m < wcf_data_list.content.length; m++){
                            if(ltf_data_list.content[k][1] == wcf_data_list.content[m][2]){
                                status = "RECEIVED";
                                for_logistics_received_counter_marketing += 1;
                                for_logistics_on_haul_counter_marketing -= 1;
                            }
                        }
                    }
                }
                for_logistics_pending_counter_marketing += 1;
            }

            // for receiving
            if(mtf_data_list.content[j][8] == "RECEIVING"){
                for(let m = 1; m < wcf_data_list.content.length; m++){
                    if((wcf_data_list.content[m][2]).slice(0,3) == "MTF"){
                        if(mtf_data_list.content[j][1] == wcf_data_list.content[m][2]){
                            status = "RECEIVED";
                            for_receiving_received_counter_marketing += 1;
                            for_receiving_pending_counter_marketing -= 1;
                        }
                    }
                }
                for_receiving_pending_counter_marketing += 1;
            }

            data_value +=`
            <tr>
                <td>${data_value_counter}</td>
                <td>${mtf_data_list.content[j][1]}</td>
                <td>${date_decoder(mtf_data_list.content[j][4])} /<br> ${time_decoder(mtf_data_list.content[j][5])}</td>
                <td>${mtf_data_list.content[j][2]}</td>
                <td>${mtf_data_list.content[j][3]}</td>
                <td>${mtf_data_list.content[j][6]}</td>
                <td>${mtf_data_list.content[j][8]}</td>
                <td>${status}</td>
            </tr>
            `
            data_value_counter += 1;
        }
        pending_list_marketing.innerHTML = data_value;    
        for_logistics_pending_marketing.innerText = for_logistics_pending_counter_marketing;
        for_logistics_on_haul_marketing.innerText = for_logistics_on_haul_counter_marketing;
        for_logistics_received_marketing.innerText = for_logistics_received_counter_marketing;
        for_receiving_pending_marketing.innerText = for_receiving_pending_counter_marketing;
        for_receiving_received_marketing.innerText = for_receiving_received_counter_marketing;
        on_hauling_marketing.innerText = for_logistics_on_haul_counter_marketing;
        pending_marketing.innerText = for_logistics_pending_counter_marketing + for_receiving_pending_counter_marketing;
        received_marketing.innerText = for_logistics_received_counter_marketing + for_receiving_received_counter_marketing;

        // incident_history_list
        var incident_history_data_value = "";
        var incident_history_data_value_counter = 1;
        for(let x = 1; x < irf_data_list.content.length; x++){
            incident_history_data_value += `
            <tr>
                <td>${incident_history_data_value_counter}</td>
                <td>${irf_data_list.content[x][1]}</td>
                <td>${date_decoder(irf_data_list.content[x][6])} /<br> ${time_decoder(irf_data_list.content[x][7])}</td>
                <td>${irf_data_list.content[x][3]}</td>
                <td>${irf_data_list.content[x][2]}</td>
                <td>${irf_data_list.content[x][4]}</td>
                <td>${irf_data_list.content[x][8]}</td>
                <td>${date_decoder(irf_data_list.content[x][9])} /<br> ${time_decoder(irf_data_list.content[x][10])}</td>
                <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][6]),time_decoder(irf_data_list.content[x][7]),date_decoder(irf_data_list.content[x][9]),time_decoder(irf_data_list.content[x][10]))}</td>
            </tr>
            `
            incident_history_data_value_counter += 1;
        }
        incident_history_list.innerHTML = incident_history_data_value


        // client_list_data
        const search_wrapper = document.getElementById("search_client");
        const input_box = search_wrapper.querySelector("input");
        const sugg_box = search_wrapper.querySelector(".autocom_box");
        const mtf_data = document.getElementById("mtf_data");
        const client_list = document.getElementById("client_list");
        var data_value = [];

        for (x = 1; x < client_list_data.content.length; x++) {
            data_value.push(client_list_data.content[x][1]);
        }
    
        input_box.onkeyup = (e) => {
            let user_data = e.target.value;
            let empty_array = [];
            if (user_data) {
                empty_array = data_value.filter((data) => {
                    return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
                });
                empty_array = empty_array.map((data) => {
                    return '<li>' + data + '</li>';
                });
                console.log(empty_array);
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
            console.log(input_box.value);
            search_wrapper.classList.remove("active");
            mtf_data.style.display = "block";
                
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

        var client_list_data_value = "";
        var data_value_counter = 1;
        for(let x = 1; x < client_list_data.content.length; x++){
            client_list_data_value += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${client_list_data.content[x][1]}</td>
                <td>${client_list_data.content[x][2]}</td>
                <td>${client_list_data.content[x][3]}</td>
                <td>${client_list_data.content[x][4]}</td>
            </tr>
            `
            data_value_counter += 1;
        }
        client_list.innerHTML = client_list_data_value

        // type_of_waste_data
        const type_of_waste_list = document.getElementById("type_of_waste_list");
        const treatment_process = document.getElementById("treatment_process");
        const code = document.getElementById("code");
        const search_wrapper2 = document.getElementById("search_type_of_waste");
        const input_box2 = search_wrapper2.querySelector("input");
        const sugg_box2 = search_wrapper2.querySelector(".autocom_box");
        var data_value2 = [];

        for (x = 1; x < type_of_waste_data.content.length; x++) {
            data_value2.push(type_of_waste_data.content[x][1]);
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

        var type_of_waste__list_data_value = "";
        var type_of_waste__list_data_value_counter = 1;
        for(let x = 1; x < type_of_waste_data.content.length; x++){
            type_of_waste__list_data_value += `
            <tr>
                <td>${type_of_waste__list_data_value_counter}</td>
                <td>${type_of_waste_data.content[x][1]}</td>
                <td>${type_of_waste_data.content[x][2]}</td>
                <td>${type_of_waste_data.content[x][3]}</td>
            </tr>
            `
            type_of_waste__list_data_value_counter += 1;
        }
        type_of_waste_list.innerHTML = type_of_waste__list_data_value

        var treatment_process_list = [];
        var code_list = [];
        for (let i = 1; i < type_of_waste_data.content.length; i++) {
            if (!treatment_process_list.includes(type_of_waste_data.content[i][2])) {
                treatment_process_list.push(type_of_waste_data.content[i][2]);
            }
            if (!code_list.includes(type_of_waste_data.content[i][3])) {
                code_list.push(type_of_waste_data.content[i][3]);
            }
        }

        var select_value = `<option value="">Select Treatment Process</option>`;
        for(let i = 0; i < treatment_process_list.length; i++){
            select_value += `<option value="${treatment_process_list[i]}">${treatment_process_list[i]}</option>`
        }
        treatment_process.innerHTML = select_value;

        var select_value = `<option value="">Select Code</option>`;
        for(let i = 0; i < code_list.length; i++){
            select_value += `<option value="${code_list[i]}">${code_list[i]}</option>`
        }
        code.innerHTML = select_value;


        // mtf_data_list
        const mtf_form_no = document.getElementById("mtf_form_no"); 
        const search_mtf_form_no = document.getElementById("search_mtf_form_no");
        const search_mtf_form_no_button = document.getElementById("search_mtf_form_no_button");
        const clear_mtf_form_no_button = document.getElementById("clear_mtf_form_no_button");
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
        
        code_year_month = `MTF${today_year}${month_new}`;
        
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
        
        for(x=1; x<mtf_data_list.content.length; x++){
            data_info = mtf_data_list.content[x][1];
            
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
        
        mtf_form_no.value = `${code_year_month}${data_counter}`
        
        
        // multi section
        // purchase_request_form
        const order_request_form = document.querySelector("#order_request_form");
        const add_item_button = order_request_form.querySelector("#add_item_button");
        const remove_item_button = order_request_form.querySelector("#remove_item_button");
        var orf_counter = order_request_form.querySelector("#orf_counter");
        var orf_form_no = [];
        
        function orf_generator() {
            var data_content = 0;
            var data_info;
            var data_last_3digit = 0;
            var orf_code_year_month;
            orf_code_year_month = `ORF${today_year}${month_new}`;
        
            for (let x = 1; x < orf_data_list.content.length; x++) {
                data_info = orf_data_list.content[x][1];
        
                if (data_info.includes(orf_code_year_month) == true) {
                    data_last_3digit = data_info.slice(9);
                }
            }
        
            data_content = parseInt(data_last_3digit);
        
            for (let y = 1; y <= orf_counter.value; y++) {
                orf_form_no[y] = document.querySelector(`#orf_form_no${y}`);
                orf_form_no[y].value = `${orf_code_year_month}${String(parseInt(data_content) + y).padStart(3,"0")}`;
            }
        }
        
        orf_generator()
        
        add_item_button.addEventListener("click", () => {
            const orf_item_container = order_request_form.querySelector("#orf_item_container");
            orf_counter.value = parseInt(orf_counter.value) + 1; // Increment the counter for the next item
            const itemHTML = `
            <div id="orf_item">
                <div>
                    <div>
                        <label for="orf_form_no${orf_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            ORF #
                        </label><br>
                        <div class="form">
                            <input type="text" id="orf_form_no${orf_counter.value}" name="orf_form_no${orf_counter.value}" autocomplete="off" class="form-control" readonly>
                        </div>
                    </div>
                    <div>
                        <label for="item${orf_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Item ${orf_counter.value}
                        </label>
                        <div>
                            <input type="text" id="item${orf_counter.value}" name="item${orf_counter.value}" autocomplete="off" class="form-control" required placeholder="Item Name">
                        </div>
                    </div>
                    <div>
                        <label for="quantity${orf_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Quantity
                        </label>
                        <div>
                            <input type="text" id="quantity${orf_counter.value}" name="quantity${orf_counter.value}" autocomplete="off" class="form-control" required>
                        </div>
                    </div>
                    <div>
                        <label for="unit${orf_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Unit
                        </label>
                        <div>
                            <input type="text" id="unit${orf_counter.value}" name="unit${orf_counter.value}" autocomplete="off" class="form-control" required placeholder="ex. kg/pc/box/set">
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <label for="details${orf_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Details
                        </label>
                        <div>
                            <input type="text" id="details${orf_counter.value}" name="details${orf_counter.value}" autocomplete="off" class="form-control" required  placeholder="Brand/Unit/Specifications">
                        </div>
                    </div>
                    <div>
                        <label for="remarks1">
                            <i class="fa-solid fa-list-ol"></i>
                            Remarks
                        </label>
                        <div>
                            <input type="text" id="remarks${orf_counter.value}" name="remarks${orf_counter.value}" autocomplete="off" class="form-control" required placeholder="Where to use">
                        </div>
                    </div>
                </div>
            </div>
            `;
            orf_item_container.insertAdjacentHTML("beforeend", itemHTML);

            // Call the orf_generator function after adding a new item
            orf_generator();

            if (orf_counter.value > 1) {
                remove_item_button.style.display = "block";
            }
        });
        
        remove_item_button.addEventListener("click", () => {
            const lastItem = order_request_form.querySelector("#orf_item_container").lastElementChild;
            if (lastItem) {
                lastItem.remove();
                orf_counter.value = parseInt(orf_counter.value) - 1;

                // Call the orf_generator function after removing an item
                orf_generator();

                if (orf_counter.value <= 1) {
                    remove_item_button.style.display = "none";
                }
            }
        });

                
        // incident report form
        const irf_form_no = document.getElementById("irf_form_no"); 
        var irf_code_year_month;
        irf_code_year_month = `IRF${today_year}${month_new}`;
        
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
    
        for(x=1; x<irf_data_list.content.length; x++){
            data_info = irf_data_list.content[x][1];
            
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

    
        // Search Button
        search_mtf_form_no_button.addEventListener("click", () => {
        
            for(a=1; a<mtf_data_list.content.length; a++){
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
        clear_mtf_form_no_button.addEventListener("click", () => {
            search_wcf_result.innerHTML = ``;
            search_mtf_form_no.value = ``;
        })
    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
