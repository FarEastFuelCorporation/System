document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const treatment_process_response_promise = fetch('https://script.google.com/macros/s/AKfycbzlzR7zmvdHSz4JpeXtEzPE4OQckTIVaE6PBw5IYwlqmmeIprQxEKkp4d2Jb1kBcgndzA/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');
        const prf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            treatment_process_response,
            mtf_response,
            ltf_response,
            wcf_response,
            sf_response,
            qlf_response,
            prf_response,
            irf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            treatment_process_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise,
            qlf_response_promise,
            prf_response_promise,
            irf_response_promise,
        ]);

        const username_data  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const treatment_process_data_list  = await treatment_process_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
        const qlf_data_list  = await qlf_response.json();
        const prf_data_list  = await prf_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const users = document.querySelectorAll("#user");
        const prf_user = document.getElementById("prf_user");
        const prf_department = document.getElementById("prf_department");
        const irf_user = document.getElementById("irf_user");

        users.forEach(user => {user.value = username_data.content[6][3]})
        prf_user.value = username_data.content[6][3];
        prf_department.value = username_data.content[6][5];
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
            if (!mtf_transaction_marketing.includes(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")])) {
                mtf_transaction_marketing.push(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")]);
            }
            if(mtf_data_list.content[i][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS"){
                if (!mtf_transaction_logistic_transaction_marketing.includes(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")])) {
                    mtf_transaction_logistic_transaction_marketing.push(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")]);
                }
            }
            if(mtf_data_list.content[i][findTextInArray(mtf_data_list, "SUBMIT TO")] == "RECEIVING"){
                if (!mtf_transaction_receiving_transaction_marketing.includes(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")])) {
                    mtf_transaction_receiving_transaction_marketing.push(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")]);
                }
            }
        }
        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!mtf_ltf_transaction_marketing.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "MTF #")])) {
                mtf_ltf_transaction_marketing.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "MTF #")]);
            }
            if (!ltf_transaction_marketing.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")])) {
                ltf_transaction_marketing.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]);
            }
        }

        for (let i = 1; i < wcf_data_list.content.length; i++) {
            if (!ltf_wcf_transaction_marketing.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF #")])) {
                ltf_wcf_transaction_marketing.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF #")]);
            }
        }

        booked_transactions_marketing.innerText = mtf_transaction_marketing.length;

        var data_value = "";
        var data_value_counter = 1;
        for(let j = 1; j < mtf_data_list.content.length; j++){
            var status = "PENDING";
            // for logistics
            if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS"){
                for(let k = 1; k < ltf_data_list.content.length; k++){
                    if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")] == ltf_data_list.content[k][findTextInArray(ltf_data_list, "MTF #")]){
                        status = "ON HAULING";
                        for_logistics_on_haul_counter_marketing += 1;
                        for_logistics_pending_counter_marketing -= 1;
                        for(let m = 1; m < wcf_data_list.content.length; m++){
                            if(ltf_data_list.content[k][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF #")]){
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
            else if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "RECEIVING"){
                for(let m = 1; m < wcf_data_list.content.length; m++){
                    if((wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).slice(0,3) == "MTF"){
                        if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF  #")] == wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                            status = "RECEIVED";
                            for_receiving_received_counter_marketing += 1;
                            for_receiving_pending_counter_marketing -= 1;
                        }
                    }
                }
                for_receiving_pending_counter_marketing += 1;
            }
            var client_name = "";
            for(let c = 1; c < client_data_list.content.length; c++){
                if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")] == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")]){
                    client_name = client_data_list.content[c][findTextInArray(client_data_list, "CLIENT NAME")];
                }
            }
            var waste_code = "";
            var waste_name = "";
            for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")] == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                    waste_code = type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")];
                    waste_name = type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE NAME")];
                }
            }
            data_value +=`
            <tr>
                <td>${data_value_counter}</td>
                <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")]}</td>
                <td>${date_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])} /<br> ${time_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING TIME")])}</td>
                <td>${client_name}</td>
                <td>${waste_code}</td>
                <td>${waste_name}</td>
                <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")]}</td>
                <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")]}</td>
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
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]}</td>
                <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF INCIDENT")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF INCIDENT")])}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DESIGNATION")]}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DEPARTMENT")]}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "LOCATION")]}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DETAILS")]}</td>
                <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF REPORT")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF REPORT")])}</td>
                <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF INCIDENT")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF INCIDENT")]),date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF REPORT")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIMEOF REPORT")]))}</td>
            </tr>
            `
            incident_history_data_value_counter += 1;
        }
        incident_history_list.innerHTML = incident_history_data_value

        // client_data_list
        const mtf_data = document.getElementById("mtf_data");
        const client_list = document.getElementById("client_list");
        const client_id = document.getElementById("client_id");
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        var code_year_month;
        var data_counter;
        
        // FORM GENERATOR
        
        code_year_month = `C${today_year}`;
        
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
        
        for(x=1; x<client_data_list.content.length; x++){
            data_info = client_data_list.content[x][findTextInArray(client_data_list, "CLIENT ID")];
            
            if(data_info.includes(code_year_month) == true){
                data_last_3digit = data_info.slice(5)
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
        
        client_id.value = `${code_year_month}${data_counter}`

        var data_value = [];

        for (x = 1; x < client_data_list.content.length; x++) {
            data_value.push(client_data_list.content[x][1]);
        }

        const search_wrappers = document.querySelectorAll("#search_client");

        search_wrappers.forEach((search_wrapper) => {
            const input_box = search_wrapper.querySelector("input");
            const sugg_box = search_wrapper.querySelector(".autocom_box");
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
                mtf_data.style.display = "block";
                
                // type_of_waste_data_list
                const type_of_waste = document.getElementById("type_of_waste");
                const type_of_vehicle = document.getElementById("type_of_vehicle");
                
                for (let y = 1; y < client_data_list.content.length; y++) {
                    if (input_box.value == client_data_list.content[y][1]) {
                        var client_id = "";
                        client_id = client_data_list.content[y][findTextInArray(client_data_list, "CLIENT ID")];
                        for (let x = 1; x < qlf_data_list.content.length; x++) {
                            if (client_id == qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")] && qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")] !== "TRANSPORTATION FEE") {
                                var data = `
                                <option value="${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")]}">${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")]}</option>
                                `
                                type_of_waste.insertAdjacentHTML("beforeend", data)
                            }
                            if (client_id == qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")] && qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")] == "TRANSPORTATION FEE") {
                                var data = `
                                <option value="${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID")]}">${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID")]}</option>
                                `
                                type_of_vehicle.insertAdjacentHTML("beforeend", data)
                            }
                        }
                    }
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
        })

        var data_value3 = [];
        for (x = 1; x < type_of_waste_data_list.content.length; x++) {
            data_value3.push(type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE CODE")]);
        }

        function typeOfWaste(){
            const search_wrappers2 = document.querySelectorAll("#search_waste_code");

            search_wrappers2.forEach((search_wrapper) => {
                const input_box = search_wrapper.querySelector("input");
                const sugg_box = search_wrapper.querySelector(".autocom_box");
        
                input_box.onkeyup = (e) => {
                    let user_data = e.target.value;
                    let empty_array = [];
                    if (user_data) {
                        empty_array = data_value3.filter((data) => {
                            return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
                        });
                        empty_array = empty_array.map((data) => {
                            return '<li>' + data + '</li>';
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
            })    
        }
        typeOfWaste();

        const type_of_waste_list = document.getElementById("type_of_waste_list");
        const treatment_process = document.getElementById("treatment_process");
        const code = document.getElementById("code");

        var client_data_list_value = "";
        var data_value_counter = 1;
        for(let x = 1; x < client_data_list.content.length; x++){
            client_data_list_value += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "CLIENT ID")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "CLIENT NAME")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "ADDRESS")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "NATURE OF BUSINESS")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "CONTACT NUMBER")]}</td>
            </tr>
            `
            data_value_counter += 1;
        }
        client_list.innerHTML = client_data_list_value;

        var type_of_waste__list_data_value = "";
        var type_of_waste__list_data_value_counter = 1;
        for(let x = 1; x < type_of_waste_data_list.content.length; x++){
            type_of_waste__list_data_value += `
            <tr>
                <td>${type_of_waste__list_data_value_counter}</td>
                <td>${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE ID")]}</td>
                <td>${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE CODE")]}</td>
                <td>${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE NAME")]}</td>
                <td>${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "TREATMENT PROCESS")]}</td>
                <td>${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "CATEGORY")]}</td>
            </tr>
            `
            type_of_waste__list_data_value_counter += 1;
        }
        type_of_waste_list.innerHTML = type_of_waste__list_data_value

        var treatment_process_list = [];
        var code_list = ["B", "D", "E", "B, D"];
        for (let i = 1; i < treatment_process_data_list.content.length; i++) {
            if (!treatment_process_list.includes(treatment_process_data_list.content[i][findTextInArray(treatment_process_data_list, "TREATMENT PROCESS")])) {
                treatment_process_list.push(treatment_process_data_list.content[i][findTextInArray(treatment_process_data_list, "TREATMENT PROCESS")]);
            }
        }       

        var select_value = `<option value="">SELECT</option>`;
        for(let i = 0; i < treatment_process_list.length; i++){
            select_value += `<option value="${treatment_process_list[i]}">${treatment_process_list[i]}</option>`
        }
        treatment_process.innerHTML = select_value;

        var select_value = `<option value="">SELECT</option>`;
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
            data_info = mtf_data_list.content[x][findTextInArray(mtf_data_list, "MTF #")];
            
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

        const marketing_transaction_form = document.querySelector("#marketing_transaction_form");
        const waste_category = marketing_transaction_form.querySelector("#waste_category");
        const document_container = marketing_transaction_form.querySelector("#document_container");
        
        waste_category.addEventListener("change", () => {
            if(waste_category.value == "HAZARDOUS WASTE"){
                while (document_container.firstChild) {
                    document_container.removeChild(document_container.firstChild);
                }
                var data =                     
                `<div id="pull_out_form_container" style="display: none">
                    <label for="pull_out_form">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Pull Out Form #
                    </label>
                    <input type="text" autocomplete="off" name="pull_out_form" id="pull_out_form" class="form-control" required value="N/A">
                </div>
                <div id="ptt_container">
                    <label for="ptt">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        PTT #
                    </label>
                    <input type="text" autocomplete="off" name="ptt" id="ptt" class="form-control" required>
                </div>
                <div id="manifest_container">
                    <label for="manifest">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Manifest #
                    </label>
                    <input type="text" autocomplete="off" name="manifest" id="manifest" class="form-control" required>
                </div>`
                document_container.insertAdjacentHTML("afterbegin", data)
            }
            else if(waste_category.value == "NON-HAZARDOUS WASTE"){
                while (document_container.firstChild) {
                    document_container.removeChild(document_container.firstChild);
                }
                var data2 = 
                `<div id="pull_out_form_container">
                    <label for="pull_out_form">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Pull Out Form #
                    </label>
                    <input type="text" autocomplete="off" name="pull_out_form" id="pull_out_form" class="form-control" required>
                </div>
                <div id="ptt_container" style="display: none">
                    <label for="ptt">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        PTT #
                    </label>
                    <input type="text" autocomplete="off" name="ptt" id="ptt" class="form-control" required value="N/A">
                </div>
                <div id="manifest_container" style="display: none">
                    <label for="manifest">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Manifest #
                    </label>
                    <input type="text" autocomplete="off" name="manifest" id="manifest" class="form-control" required value="N/A">
                </div>`
                document_container.insertAdjacentHTML("afterbegin", data2)
            }
            else{
                while (document_container.firstChild) {
                    document_container.removeChild(document_container.firstChild);
                }
            }
        })

        // client_list_section
        const client_list_section = document.querySelector("#client_list_section");
        const new_client_form_tab_client_list_section = client_list_section.querySelector("#new_client_form_tab");
        const new_employee_button_client_list_section = client_list_section.querySelector("#new_employee_button");
        const update_record_button_client_list_section = client_list_section.querySelector("#update_record_button");
        const update_client_form_tab_client_list_section = client_list_section.querySelector("#update_client_form_tab");
        const search_client_id_button_update_client_form = update_client_form_tab_client_list_section.querySelector("#search_client_id_button");
        const search_client_id_update_client_form = update_client_form_tab_client_list_section.querySelector("#client_id");
        const client_name_update_client_form = update_client_form_tab_client_list_section.querySelector("#client_name");
        const address_update_client_form = update_client_form_tab_client_list_section.querySelector("#address");
        const nature_of_business_update_client_form = update_client_form_tab_client_list_section.querySelector("#nature_of_business");
        const contact_number_update_client_form = update_client_form_tab_client_list_section.querySelector("#contact_number");
        const timestamp_update_client_form = update_client_form_tab_client_list_section.querySelector("#timestamp");
        const update_client_form_tab_container_client_form = update_client_form_tab_client_list_section.querySelector("#update_client_form_tab_container");

        new_employee_button_client_list_section.addEventListener("click", () => {
            if(new_client_form_tab_client_list_section.style.display == "block"){
                new_client_form_tab_client_list_section.style.display = "none";
            }
            else{
                new_client_form_tab_client_list_section.style.display = "block";
                update_client_form_tab_client_list_section.style.display = "none";
            }
        })
        update_record_button_client_list_section.addEventListener("click", () => {
            if(update_client_form_tab_client_list_section.style.display == "block"){
                update_client_form_tab_client_list_section.style.display = "none";
            }
            else{
                update_client_form_tab_client_list_section.style.display = "block";
                new_client_form_tab_client_list_section.style.display = "none";
            }
        })
        search_client_id_button_update_client_form.addEventListener("click", () => {
            for(let x = 1; x < client_data_list.content.length; x++){
                if(search_client_id_update_client_form.value == client_data_list.content[x][findTextInArray(client_data_list, "CLIENT ID")]){
                    client_name_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "CLIENT NAME")];
                    address_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "ADDRESS")];
                    nature_of_business_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "NATURE OF BUSINESS")];
                    contact_number_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "CONTACT NUMBER")];
                    timestamp_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "CREATED AT")];
                    update_client_form_tab_container_client_form.style.display = "block"
                }
            }
        })


        // quotation_form
        const quotation_form = document.querySelector("#quotation_form");
        const add_item_button_quotation_form = quotation_form.querySelector("#add_item_button");
        const remove_item_button_quotation_form = quotation_form.querySelector("#remove_item_button");
        const list_counter_quotation_form = quotation_form.querySelector("#list_counter");
        const list_container_quotation_form = quotation_form.querySelector("#list_container");
        const transportation_fee_container_quotation_form = quotation_form.querySelector("#transportation_fee_container");
        const tf_button_quotation_form = quotation_form.querySelector("#tf_button");
        const tf_value_quotation_form = quotation_form.querySelector("#tf_value");
        const tf_counter_quotation_form = quotation_form.querySelector("#tf_counter");
        const add_tf_button_quotation_form = quotation_form.querySelector("#add_tf_button");
        const remove_tf_button_quotation_form = quotation_form.querySelector("#remove_tf_button");

        add_item_button_quotation_form.addEventListener("click", () => {
            list_counter_quotation_form.value = parseInt(list_counter_quotation_form.value) + 1;
            var data = `
            <div class="list_item" id="list${list_counter_quotation_form.value}" style="display: grid; grid-template-columns: 17% 30% 15% 15% 10% 13%; gap: 20px; width: calc(100% - 240px);">
                <div class="wrapper">
                    <div class="search_input" id="search_waste_code">
                        <input type="text" name="waste_code${list_counter_quotation_form.value}" id="waste_code${list_counter_quotation_form.value}" autocomplete="off" class="form-control" required placeholder="Search">
                        <div class="autocom_box">
                        </div>
                        <div class="icon"><i class="fas fa-search"></i></div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="text" name="waste_name${list_counter_quotation_form.value}" id="waste_name${list_counter_quotation_form.value}" autocomplete="off" class="form-control" required placeholder="Type Waste Name..." style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="mode${list_counter_quotation_form.value}" id="mode${list_counter_quotation_form.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="CHARGE">CHARGE</option>
                            <option value="FREE OF CHARGE">FREE OF CHARGE</option>
                            <option value="BUYING">BUYING</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="unit${list_counter_quotation_form.value}" id="unit${list_counter_quotation_form.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="KILOGRAMS">KILOGRAMS</option>
                            <option value="LITERS">LITERS</option>
                            <option value="DRUM">DRUM</option>
                            <option value="TRIP">TRIP</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="number" name="unit_price${list_counter_quotation_form.value}" id="unit_price${list_counter_quotation_form.value}" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="vat_calculation${list_counter_quotation_form.value}" id="vat_calculation${list_counter_quotation_form.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="VAT INCLUSIVE">VAT INCLUSIVE</option>
                            <option value="VAT EXCLUSIVE">VAT EXCLUSIVE</option>
                        </select>
                    </div>
                </div>
            </div>
            `
            list_container_quotation_form.insertAdjacentHTML("beforeend", data);
            remove_item_button_quotation_form.style.display = "block";
            typeOfWaste();
            // Get all input elements of type "number"
            const numberInputs = document.querySelectorAll('input[type="number"]');

            // Loop through each input and set the "step" attribute
            numberInputs.forEach(input => {
                input.setAttribute('step', '0.01'); // Set the desired step value
            });
        })

        remove_item_button_quotation_form.addEventListener("click", () => {
            const list = list_container_quotation_form.querySelectorAll(".list_item");
            const last_list = list[list.length - 1];
            
            if (list.length > 1) {
                list_container_quotation_form.removeChild(last_list);
                list_counter_quotation_form.value = parseInt(list_counter_quotation_form.value) - 1;
                
                if (list_counter_quotation_form.value == 1) {
                    remove_item_button_quotation_form.style.display = "none";
                }
            }
        });

        tf_button_quotation_form.addEventListener("click", () => {
            if(tf_value_quotation_form.value == "false"){
                tf_counter_quotation_form.value = 1;
                var data = `                        
                <div class="tf_item" style="display: grid; grid-template-columns: 17% 30% 15% 15% 10% 13%; gap: 20px; width: calc(100% - 240px);">
                    <div class="wrapper">
                        <label for="type_of_vehicle1">
                        <i class="fa-solid fa-truck"></i>
                            Type of Vehicle
                        </label><br>
                        <select name="type_of_vehicle1" id="type_of_vehicle1" class="form-control" required style=" height: 55px !important;">
                            <option value="">SELECT</option>
                            <option value="6 WHEELER CLOSED VAN">6 WHEELER CLOSED VAN</option>
                            <option value="10 WHEELER WING VAN">10 WHEELER WING VAN</option>
                            <option value="DUMP TRUCK">DUMP TRUCK</option>
                            <option value="FX">FX</option>
                            <option value="BOOM TRUCK">BOOM TRUCK</option>
                            <option value="CRAINE">CRAINE</option>
                        </select>
                    </div>
                    <div class="wrapper">
                        <label for="transportation_fee1">
                        <i class="fa-solid fa-list"></i>
                            Particulars
                        </label><br>
                        <div class="search_input">
                            <input type="text" name="transportation_fee1" id="transportation_fee1" autocomplete="off" class="form-control" required value="TRANSPORTATION FEE" readonly style="padding-right: 20px !important;">
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="mode1">
                        <i class="fa-solid fa-cart-shopping"></i>
                            Mode
                        </label><br>
                        <div class="search_input">
                            <select name="mode1" id="mode1" class="form-control" required style="height: 55px;">
                                <option value="">SELECT</option>
                                <option value="CHARGE">CHARGE</option>
                                <option value="FREE OF CHARGE">FREE OF CHARGE</option>
                            </select>
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="unit1">
                        <i class="fa-solid fa-scale-balanced"></i>
                            Unit
                        </label><br>
                        <div class="search_input">
                            <select name="unit1" id="unit1" class="form-control" required style="height: 55px;">
                                <option value="">SELECT</option>
                                <option value="TRIP">TRIP</option>
                            </select>
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="unit_price1">
                        <i class="fa-solid fa-money-bill-wave"></i>
                            Unit Price
                        </label><br>
                        <div class="search_input">
                            <input type="number" name="unit_price1" id="unit_price1" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="vat_calculation1">
                        <i class="fa-solid fa-calculator"></i>
                            Vat Calculation
                        </label><br>
                        <div class="search_input">
                            <select name="vat_calculation1" id="vat_calculation1" class="form-control" required style="height: 55px;">
                                <option value="">SELECT</option>
                                <option value="VAT INCLUSIVE">VAT INCLUSIVE</option>
                                <option value="VAT EXCLUSIVE">VAT EXCLUSIVE</option>
                            </select>
                        </div>
                    </div>
                </div>      
                `
                transportation_fee_container_quotation_form.insertAdjacentHTML("beforeend", data);
                tf_value_quotation_form.value = "true";
                tf_button_quotation_form.innerHTML = "WITHOUT<br>TRANSPORTATION<br>FEE";
                add_tf_button_quotation_form.style.display = "block";
                // Get all input elements of type "number"
                const numberInputs = document.querySelectorAll('input[type="number"]');

                // Loop through each input and set the "step" attribute
                numberInputs.forEach(input => {
                    input.setAttribute('step', '0.01'); // Set the desired step value
                });
            }
            else{
                tf_counter_quotation_form.value = 0;
                const transportation_fee_container = document.querySelector("#transportation_fee_container");
                const tf_items = transportation_fee_container.querySelectorAll(".tf_item");
                
                tf_items.forEach(tf_item => {
                    transportation_fee_container.removeChild(tf_item);
                })
                tf_value_quotation_form.value = "false";
                tf_button_quotation_form.innerHTML = "WITH<br>TRANSPORTATION<br>FEE";
                add_tf_button_quotation_form.style.display = "none";
                remove_tf_button_quotation_form.style.display = "none";
            }
        })
        
        add_tf_button_quotation_form.addEventListener("click", () => {
            tf_counter_quotation_form.value = parseInt(tf_counter_quotation_form.value) + 1;
            var data = `                        
            <div class="tf_item" style="display: grid; grid-template-columns: 17% 30% 15% 15% 10% 13%; gap: 20px; width: calc(100% - 240px);">
                <div class="wrapper">
                    <select name="type_of_vehicle${tf_counter_quotation_form.value}" id="type_of_vehicle${tf_counter_quotation_form.value}" class="form-control" required style=" height: 55px !important;">
                        <option value="">SELECT</option>
                        <option value="6 WHEELER CLOSED VAN">6 WHEELER CLOSED VAN</option>
                        <option value="10 WHEELER WING VAN">10 WHEELER WING VAN</option>
                        <option value="DUMP TRUCK">DUMP TRUCK</option>
                        <option value="FX">FX</option>
                        <option value="BOOM TRUCK">BOOM TRUCK</option>
                        <option value="CRAINE">CRAINE</option>
                    </select>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="text" name="transportation_fee${tf_counter_quotation_form.value}" id="transportation_fee${tf_counter_quotation_form.value}" autocomplete="off" class="form-control" required value="TRANSPORTATION FEE" readonly style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="tf_mode${tf_counter_quotation_form.value}" id="tf_mode${tf_counter_quotation_form.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="CHARGE">CHARGE</option>
                            <option value="FREE OF CHARGE">FREE OF CHARGE</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="tf_unit${tf_counter_quotation_form.value}" id="tf_unit${tf_counter_quotation_form.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="TRIP">TRIP</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="number" name="tf_unit_price${tf_counter_quotation_form.value}" id="tf_unit_price${tf_counter_quotation_form.value}" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="tf_vat_calculation${tf_counter_quotation_form.value}" id="tf_vat_calculation${tf_counter_quotation_form.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="VAT INCLUSIVE">VAT INCLUSIVE</option>
                            <option value="VAT EXCLUSIVE">VAT EXCLUSIVE</option>
                        </select>
                    </div>
                </div>
            </div>      
            `
            transportation_fee_container_quotation_form.insertAdjacentHTML("beforeend", data);
            tf_value_quotation_form.value = "true";
            remove_tf_button_quotation_form.style.display = "block";
            // Get all input elements of type "number"
            const numberInputs = document.querySelectorAll('input[type="number"]');

            // Loop through each input and set the "step" attribute
            numberInputs.forEach(input => {
                input.setAttribute('step', '0.01'); // Set the desired step value
            });
        })

        remove_tf_button_quotation_form.addEventListener("click", () => {
            const transportation_fee_container = document.querySelector("#transportation_fee_container");
            const tf_item = transportation_fee_container.querySelectorAll(".tf_item");

            const last_tf_item = tf_item[tf_item.length - 1];
            
            if (tf_item.length > 1) {
                transportation_fee_container.removeChild(last_tf_item);
                tf_counter_quotation_form.value = parseInt(tf_counter_quotation_form.value) - 1;
                
                if (tf_counter_quotation_form.value == 1) {
                    remove_tf_button_quotation_form.style.display = "none";
                }
            }
        });

        // multi section
        // purchase_request_form
        const purchase_request_form = document.querySelector("#purchase_request_form");
        const add_item_button = purchase_request_form.querySelector("#add_item_button");
        const remove_item_button = purchase_request_form.querySelector("#remove_item_button");
        var prf_counter = purchase_request_form.querySelector("#prf_counter");
        var prf_form_no = [];
        
        function prf_generator() {
            var data_content = 0;
            var data_info;
            var data_last_3digit = 0;
            var prf_code_year_month;
            prf_code_year_month = `PR${today_year}${month_new}`;
        
            for (let x = 1; x < prf_data_list.content.length; x++) {
                data_info = prf_data_list.content[x][1];
        
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
                
        // incident report form
        const irf_form_no = document.getElementById("irf_form_no"); 
        var irf_code_year_month;
        irf_code_year_month = `IRF${today_year}${month_new}`;
        
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

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});