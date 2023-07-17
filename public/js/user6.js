document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            mtf_response,
            ltf_response,
            wcf_response,
            sf_response
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise
        ]);

        const username_data  = await username_response.json();
        const client_list_data  = await client_list_response.json();
        const type_of_waste_data  = await type_of_waste_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();

        // Code that depends on the fetched data
        // username_data3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");

        user.value = username_data.content[6][3];
        user_sidebar.innerHTML = `<u>${username_data.content[6][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[6][4];
        
        // dashboard
        var booked_transactions = document.getElementById("booked_transactions");
        var on_hauling = document.getElementById("on_hauling");
        var pending = document.getElementById("pending");
        var received = document.getElementById("received");
        var pending_list = document.getElementById("pending_list");
        var for_logistics_pending = document.getElementById("for_logistics_pending");
        var for_logistics_on_haul = document.getElementById("for_logistics_on_haul");
        var for_logistics_received = document.getElementById("for_logistics_received");
        var for_receiving_pending = document.getElementById("for_receiving_pending");
        var for_receiving_received = document.getElementById("for_receiving_received");
        var mtf_transaction_counter = 0;
        var mtf_ltf_transaction_counter = 0;
        var mtf_transaction_logistic_transaction_counter = 0;
        var mtf_transaction_receiving_transaction_counter = 0;
        var ltf_transaction_counter = 0;
        var ltf_wcf_transaction_counter = 0;
        var for_logistics_pending_counter = 0;
        var for_logistics_on_haul_counter = 0;
        var for_logistics_received_counter = 0;
        var for_receiving_pending_counter = 0;
        var for_receiving_received_counter = 0;
        let mtf_transaction = []; // Variable containing existing elements
        let mtf_ltf_transaction = []; // Variable containing existing elements
        let mtf_transaction_logistic_transaction = []; // Variable containing existing elements
        let mtf_transaction_receiving_transaction = []; // Variable containing existing elements
        let ltf_transaction = []; // Variable containing existing elements
        let ltf_wcf_transaction = []; // Variable containing existing elements
        
        for (let i = 1; i < mtf_data_list.content.length; i++) {
            if (!mtf_transaction.includes(mtf_data_list.content[i][1])) {
                mtf_transaction.push(mtf_data_list.content[i][1]);
                mtf_transaction_counter += 1
            }
            if(mtf_data_list.content[i][8] == "LOGISTICS"){
                if (!mtf_transaction_logistic_transaction.includes(mtf_data_list.content[i][1])) {
                    mtf_transaction_logistic_transaction.push(mtf_data_list.content[i][1]);
                    mtf_transaction_logistic_transaction_counter += 1
                }
            }
            if(mtf_data_list.content[i][8] == "RECEIVING"){
                if (!mtf_transaction_receiving_transaction.includes(mtf_data_list.content[i][1])) {
                    mtf_transaction_receiving_transaction.push(mtf_data_list.content[i][1]);
                    mtf_transaction_receiving_transaction_counter += 1
                }
            }
        }

        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!mtf_ltf_transaction.includes(ltf_data_list.content[i][2])) {
                mtf_ltf_transaction.push(ltf_data_list.content[i][2]);
                mtf_ltf_transaction_counter += 1
            }
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
        }

        const in_mtf_not_in_ltf = mtf_transaction.filter((element) => !mtf_ltf_transaction.includes(element));

        booked_transactions.innerText = mtf_transaction_counter
        // for_logistics.innerText = mtf_transaction_logistic_transaction_counter;
        // for_receiving.innerText = mtf_transaction_receiving_transaction_counter;
        var data_value = "";
        var data_value_counter = 1;
        for(let j = 1; j < mtf_data_list.content.length; j++){
            var status = "PENDING";
            // for logistics
            if(mtf_data_list.content[j][8] == "LOGISTICS"){
                for(let k = 1; k < ltf_data_list.content.length; k++){
                    if(mtf_data_list.content[j][1] == ltf_data_list.content[k][2]){
                        status = "ON HAULING";
                        for_logistics_on_haul_counter += 1;
                        for_logistics_pending_counter -= 1;
                        for(let m = 1; m < wcf_data_list.content.length; m++){
                            if(ltf_data_list.content[k][1] == wcf_data_list.content[m][2]){
                                status = "RECEIVED";
                                for_logistics_received_counter += 1;
                                for_logistics_on_haul_counter -= 1;
                            }
                        }
                    }
                }
                for_logistics_pending_counter += 1;
            }

            // for receiving
            if(mtf_data_list.content[j][8] == "RECEIVING"){
                for(let m = 1; m < wcf_data_list.content.length; m++){
                    if((wcf_data_list.content[m][2]).slice(0,3) == "MTF"){
                        if(mtf_data_list.content[j][1] == wcf_data_list.content[m][2]){
                            status = "RECEIVED";
                            for_receiving_received_counter += 1;
                            for_receiving_pending_counter -= 1;
                        }
                    }
                }
                for_receiving_pending_counter += 1;
            }

            data_value +=`
            <tr>
                <td>${data_value_counter}</td>
                <td>${mtf_data_list.content[j][1]}</td>
                <td>${date_decoder(mtf_data_list.content[j][4])}</td>
                <td>${time_decoder(mtf_data_list.content[j][5])}</td>
                <td>${mtf_data_list.content[j][2]}</td>
                <td>${mtf_data_list.content[j][3]}</td>
                <td>${mtf_data_list.content[j][6]}</td>
                <td>${mtf_data_list.content[j][8]}</td>
                <td>${status}</td>
            </tr>
            `
            data_value_counter += 1;
        }
        pending_list.innerHTML = data_value;    
        for_logistics_pending.innerText = for_logistics_pending_counter;
        for_logistics_on_haul.innerText = for_logistics_on_haul_counter;
        for_logistics_received.innerText = for_logistics_received_counter;
        for_receiving_pending.innerText = for_receiving_pending_counter;
        for_receiving_received.innerText = for_receiving_received_counter;
        on_hauling.innerText = for_logistics_on_haul_counter;
        pending.innerText = for_logistics_pending_counter + for_receiving_pending_counter;
        received.innerText = for_logistics_received_counter + for_receiving_received_counter;

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
