document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');

        const [
            username_response,
            type_of_waste_response,
            wcf_response,
            sf_response
        ] = await Promise.all([
            username_response_promise,
            type_of_waste_response_promise,
            wcf_response_promise,
            sf_response_promise
        ]);

        const username_data  = await username_response.json();
        const type_of_waste_data  = await type_of_waste_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();

        // Code that depends on the fetched data
        // username_data
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");

        user.value = username_data.content[2][3];
        user_sidebar.innerHTML = `<u>${username_data.content[2][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[2][4];

        // sf_data_list
        const total = document.getElementById("total");
        const sorted = document.getElementById("sorted");
        const unsorted = document.getElementById("unsorted");
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        var month_new;
        var code_year_month;
    
        // dashboard
        const unsorted_list = document.getElementById("unsorted_list");
        const sorted_list = document.getElementById("sorted_list");
        const sorted_items = document.getElementById("sorted_items");
        const sorted_items_list = document.getElementById("sorted_items_list");
        var wcf_sf_transaction_counter = 0;
        var wcf_transaction_counter = 0;
        let wcf_transaction = []; // Variable containing existing elements
        let wcf_sf_transaction = []; // Variable containing existing elements
        
        for (let i = 1; i < wcf_data_list.content.length; i++) {
            if (!wcf_transaction.includes(wcf_data_list.content[i][1])) {
                wcf_transaction.push(wcf_data_list.content[i][1]);
                wcf_transaction_counter += 1
            }
        }

        for (let i = 1; i < sf_data_list.content.length; i++) {
            if (!wcf_sf_transaction.includes(sf_data_list.content[i][2])) {
                wcf_sf_transaction.push(sf_data_list.content[i][2]);
                wcf_sf_transaction_counter += 1
            }
        }

        // Get elements from wcf_transaction not included in wcf_sf_transaction
        const pending = wcf_transaction.filter((element) => !wcf_sf_transaction.includes(element));
        const done_sorting = wcf_transaction.filter((element) => wcf_sf_transaction.includes(element));
        
        // unsorted_list
        sorted.innerText = wcf_sf_transaction_counter;
        total.innerText = wcf_transaction_counter
        unsorted.innerText = wcf_transaction_counter - wcf_sf_transaction_counter;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < pending.length; i++){
            for(let j = 1; j < wcf_data_list.content.length; j++){
                if(pending[i] == wcf_data_list.content[j][1]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${wcf_data_list.content[j][1]}</td>
                        <td>${date_decoder(wcf_data_list.content[j][11])} /<br> ${time_decoder(wcf_data_list.content[j][12])}</td>
                        <td>${wcf_data_list.content[j][3]}</td>
                        <td>${wcf_data_list.content[j][5]}</td>
                        <td>${wcf_data_list.content[j][17]} kg.</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        unsorted_list.innerHTML = data_value;    

        // sorted_list
        var data_value_done = "";
        var data_value__done_counter = 1;
        for(let i = 0; i < done_sorting.length; i++){
            for(let j = 1; j < wcf_data_list.content.length; j++){
                if(done_sorting[i] == wcf_data_list.content[j][1]){
                    var discrepancy_weight = 0;
                    var discrepancy_remarks ="COMPLETE";
                    var finished_date;
                    var finished_time;
                    for(let k = 1; k < sf_data_list.content.length; k++){
                        finished_date = date_decoder(sf_data_list.content[k][8]);
                        finished_time = time_decoder(sf_data_list.content[k][9]);
                        if(done_sorting[i] == sf_data_list.content[k][2]){
                            if(sf_data_list.content[k][4] == "DISCREPANCY"){
                                discrepancy_weight = sf_data_list.content[k][6];
                                discrepancy_remarks = sf_data_list.content[k][5];
                            }
                        }
                    }
                    data_value_done +=`
                    <tr>
                        <td>${data_value__done_counter}</td>
                        <td>${wcf_data_list.content[j][1]}</td>
                        <td>${date_decoder(wcf_data_list.content[j][11])} /<br> ${time_decoder(wcf_data_list.content[j][12])}</td>
                        <td>${wcf_data_list.content[j][3]}</td>
                        <td>${wcf_data_list.content[j][17]} kg.</td>
                        <td>${discrepancy_weight} kg.</td>
                        <td>${discrepancy_remarks}</td>
                        <td>${finished_date} /<br> ${finished_time}</td>
                        <td>${calculateTravelTime(date_decoder(wcf_data_list.content[j][11]),time_decoder(wcf_data_list.content[j][12]),finished_date,finished_time)}</td>
                    </tr>
                    `
                    data_value__done_counter += 1;
                }
            }
        }
        sorted_list.innerHTML = data_value_done;

        // sorted_items_list
        var data_value_done = "";
        var data_value__done_counter = 1;
        for(let i = 1; i < sf_data_list.content.length; i++){
            if(sf_data_list.content[i][4] !== "DISCREPANCY"){
                data_value_done +=`
                <tr>
                    <td>${data_value__done_counter}</td>
                    <td>${sf_data_list.content[i][1]}</td>
                    <td>${sf_data_list.content[i][2]}</td>
                    <td>${date_decoder(sf_data_list.content[i][8])} /<br> ${time_decoder(sf_data_list.content[i][9])}</td>
                    <td>${sf_data_list.content[i][3]}</td>
                    <td>${sf_data_list.content[i][4]}</td>
                    <td>${sf_data_list.content[i][6]} kg.</td>
                    <td>${sf_data_list.content[i][5]}</td>
                </tr>
                `
                data_value__done_counter += 1;
    
            }
        }
        sorted_items_list.innerHTML = data_value_done;    
        sorted_items.innerText = data_value__done_counter;

        // FORM GENERATOR
        if(today_month.toString().length == 1){
            month_new = `0${today_month}`
        }
    
        code_year_month = `SF${today_year}${month_new}`;
    
        var data_info;
        var data_last_3digit = 0;
    
        for(x=1; x<sf_data_list.content.length; x++){
            data_info = sf_data_list.content[x][1];
            
            if(data_info.includes(code_year_month) == true){
                data_last_3digit = data_info.slice(9)
            }
        }
                
        const data_content = parseInt(data_last_3digit) + 1;
        const data_counters = [];
        const sf_form_nos = [];
        
        for (let i = 0; i < 11; i++) {
        const data_counter = data_content + i;
        let formatted_counter = data_counter.toString();
        
        if (formatted_counter.length === 1) {
            formatted_counter = `00${formatted_counter}`;
        } else if (formatted_counter.length === 2) {
            formatted_counter = `0${formatted_counter}`;
        }
        
        data_counters.push(formatted_counter);
        sf_form_nos.push(`${code_year_month}${formatted_counter}`);
        }
        
        // Assigning values to sf_form_no variables
        for (let i = 0; i < 11; i++) {
        const sf_form_no = document.getElementById(`sf_form_no${i + 1}`);
        sf_form_no.value = sf_form_nos[i];
        }
        
        // wcf_data_list
        const search_sf_wcf_form_no = document.getElementById("search_sf_wcf_form_no");
        const search_sf_wcf_form_no_button = document.getElementById("search_sf_wcf_form_no_button");
        const sf_wcf_client = document.getElementById("sf_wcf_client");
        const search_sf_wcf_result = document.getElementById("search_sf_wcf_result");
        const batch_weight = document.getElementById("batch_weight");
        const batch_weight_list = document.getElementById("batch_weight_list");
        const additional_item1 = document.getElementById("additional_item1");
        const header = document.getElementById("header");
        const completion = document.getElementById("completion");
        const clear_sf_wcf_form_no_button = document.getElementById("clear_sf_wcf_form_no_button");
        const add_item_button = document.getElementById("add_item_button");
        const remove_item_button = document.getElementById("remove_item_button");
        const weights = document.getElementById("weights");
        const buttons = document.getElementById("buttons");
        const hauling_date = document.getElementById("hauling_date");
    
        search_sf_wcf_form_no_button.addEventListener("click", () => {
            var data_value;
            for(a=1; a<wcf_data_list.content.length; a++){
                for(b=0; b<pending.length; b++){
                    if(search_sf_wcf_form_no.value == wcf_data_list.content[a][1]){
                        if(search_sf_wcf_form_no.value == pending[b]){
                            data_value = `
                            WCF #: ${wcf_data_list.content[a][1]}<br>
                            CLIENT: ${wcf_data_list.content[a][3]}<br>
                            TYPE OF WASTE: ${wcf_data_list.content[a][4]}<br>
                            WASTE DESCRIPTION: ${wcf_data_list.content[a][5]}<br>
                            TYPE OF DOCUMENT: ${wcf_data_list.content[a][6]}<br>
                            DOCUMENT #: ${wcf_data_list.content[a][7]}<br>
                            PERMIT TO TRAVEL #: ${wcf_data_list.content[a][8]}<br>
                            PLATE NO: ${wcf_data_list.content[a][9]}<br>
                            DRIVER: ${wcf_data_list.content[a][10]}<br>
                            DATE IN: ${date_decoder(wcf_data_list.content[a][11])}<br>
                            TIME IN: ${time_decoder(wcf_data_list.content[a][12])}<br>
                            GROSS WEIGHT: ${wcf_data_list.content[a][15]}<br>
                            TARE WEIGHT: ${wcf_data_list.content[a][16]}<br>
                            NET WEIGHT: ${wcf_data_list.content[a][17]}<br>
                            HAULING DATE: ${date_decoder(wcf_data_list.content[a][19])}<br>
                            REMARKS: ${wcf_data_list.content[a][18]}<br>
                            SUBMITTED BY: ${wcf_data_list.content[a][20]}<br>
                            `
                            sf_wcf_client.value = wcf_data_list.content[a][3];
                            batch_weight.value = wcf_data_list.content[a][17];
                            hauling_date.value = date_decoder(wcf_data_list.content[a][19]);
                            batch_weight_list.style.display = "grid";
                            additional_item1.style.display = "grid";
                            completion.style.display = "grid";
                            header.style.display = "grid";
                            add_item_button.style.display = "block";
                            weights.style.display = "flex";
                            buttons.style.display = "flex";
                            rem_weight.value = batch_weight.value - total_weight.value;
                        }
                        search_sf_wcf_result.innerHTML = `
                        <div class="search_sf_wcf_result">
                        <h2>INFORMATION</h2>
                        No Data Found
                        </div><br>`
                        break    
                    }
                }
            }
            if(data_value == undefined){
                search_sf_wcf_result.innerHTML = `
                <div class="search_sf_wcf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`            
            }
            else{
                search_sf_wcf_result.innerHTML = `
                <div class="search_sf_wcf_result">
                <h2>INFORMATION</h2>
                ${data_value}
                </div><br>`
            }
        });
    
        clear_sf_wcf_form_no_button.addEventListener("click", () => {
            search_sf_wcf_result.innerHTML = ``;
            search_sf_wcf_form_no.value = ``;
        })

        // type_of_waste_data
        var data_value = [];

        for (var x = 1; x < type_of_waste_data.content.length; x++) {
            data_value.push(type_of_waste_data.content[x][1]);
        }
        
        const total_weight = document.getElementById("total_weight");
        const rem_weight = document.getElementById("rem_weight");
        const itemcounter = document.querySelectorAll(".search_input_type");
        const item_counter = document.getElementById("item_counter");
        const form_id = document.getElementById("form_id");
        const search_wrapper = [];
        const destruction_process = [];
        const weight = [];
        const input_box = [];
        const sugg_box = [];

        form_id.addEventListener("submit", () => {               
            if(rem_weight.value == 0){
                return true;
            }
            else if(rem_weight.value != 0){
                alert("Please Input the Remaining Weight");
                event.preventDefault();
                return false;
            }
        })

        for (let z = 1; z <= itemcounter.length; z++) {
            search_wrapper[z] = document.getElementById(`search_type_of_waste${z}`);
            destruction_process[z] = document.getElementById(`destruction_process${z}`);
            weight[z] = document.getElementById(`weight${z}`);
            input_box[z] = search_wrapper[z].querySelector("input");
            sugg_box[z] = search_wrapper[z].querySelector(".autocom_box");

            input_box[z].onkeyup = (e) => {
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
                    search_wrapper[z].classList.add("active");
                    show_suggestions(empty_array, z);
                } else {
                    search_wrapper[z].classList.remove("active");
                }
            };

            sugg_box[z].addEventListener("click", (e) => {
                if (e.target.tagName === "LI") {
                    select(e.target.innerHTML, z);
                }
            });

            function select(element, index) {
                let select_user_data = element;
                input_box[index].value = select_user_data;
                search_wrapper[index].classList.remove("active");
                var treatment_input = document.getElementById(`destruction_process${index}`);
                for (var a = 1; a < type_of_waste_data.content.length; a++) {
                    if (input_box[z].value == type_of_waste_data.content[a][1]) {
                        destruction_process[z].value = type_of_waste_data.content[a][2];
                        treatment_input.setAttribute("readonly", "true")
                        break
                    }
                    else{
                        destruction_process[z].value = "";
                        treatment_input.removeAttribute("readonly")
                    }
                }
            }

            function show_suggestions(list, index) {
                let list_data;
                if (!list.length) {
                    user_value = input_box[index].value;
                    list_data = '<li>' + user_value + '</li>';
                } else {
                    list_data = list.join("");
                }
                sugg_box[index].innerHTML = list_data;
            }

            // Batch Weight Calculator
            weight[z].addEventListener("input", () => {
                var new_weight = 0;
                var inputWeights = [];

                // Store the input values in the array and exclude NaN values
                for (let i = 1; i <= 11; i++) {
                    var weightInput = document.getElementById(`weight${i}`);
                    var intWeight = parseInt(weightInput.value);
                    if (!isNaN(intWeight)) {
                        inputWeights.push(intWeight);
                    }
                }

                // Calculate the new weight by summing the input values
                new_weight = inputWeights.reduce((total, weight) => total + weight, 0);

                // Update the total weight input
                total_weight.value = new_weight;

                // Calculate and update the remaining weight
                rem_weight.value = batch_weight.value - total_weight.value;
                  
            });

            item_counter.addEventListener("input", () => {
                var new_weight = 0;
                var inputWeights = [];

                // Store the input values in the array and exclude NaN values
                for (let i = 1; i <= 10; i++) {
                    var weightInput = document.getElementById(`weight${i}`);
                    var intWeight = parseInt(weightInput.value);
                    if (!isNaN(intWeight)) {
                        inputWeights.push(intWeight);
                    }
                }

                // Calculate the new weight by summing the input values
                new_weight = inputWeights.reduce((total, weight) => total + weight, 0);

                // Update the total weight input
                total_weight.value = new_weight;

                // Calculate and update the remaining weight
                rem_weight.value = batch_weight.value - total_weight.value;
            });

            // Create and dispatch the input event
            const inputEvent = new Event('input', { bubbles: true, cancelable: true });
            item_counter.dispatchEvent(inputEvent);
        }

        // treatment_type
        const itemcounter2 = document.querySelectorAll(".search_treatment_type");
        const search_wrapper2 = [];
        const input_box2 = [];
        const sugg_box2 = [];

        for (let z = 1; z <= itemcounter2.length; z++) {
            search_wrapper2[z] = document.getElementById(`search_type_of_treatment${z}`);
            input_box2[z] = search_wrapper2[z].querySelector("input");
            sugg_box2[z] = search_wrapper2[z].querySelector(".autocom_box");

            var data_value2 = ["FOR STORAGE"];

            for (let i = 1; i < type_of_waste_data.content.length; i++) {
                if (!data_value2.includes(type_of_waste_data.content[i][2])) {
                    data_value2.push(type_of_waste_data.content[i][2]);
                }
            }

            input_box2[z].onkeyup = (e) => {
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
                    search_wrapper2[z].classList.add("active");
                    show_suggestions2(empty_array, z);
                } else {
                    search_wrapper2[z].classList.remove("active");
                }
            };

            sugg_box2[z].addEventListener("click", (e) => {
                if (e.target.tagName === "LI") {
                    select2(e.target.innerHTML, z);
                }
            });

            function select2(element, index) {
                let select_user_data = element;
                input_box2[index].value = select_user_data;
                search_wrapper2[index].classList.remove("active");
            }

            function show_suggestions2(list, index) {
                let list_data;
                if (!list.length) {
                    user_value = input_box[index].value;
                    list_data = '<li>' + user_value + '</li>';
                } else {
                    list_data = list.join("");
                }
                sugg_box2[index].innerHTML = list_data;
            }
        }

        const discrepancy = document.getElementById("discrepancy");
        const discrepancy_button = document.getElementById("discrepancy_button");
        
        discrepancy_button.addEventListener("click", add_discrepancy_input);
        add_item_button.addEventListener("click", add_new_item);
        remove_item_button.addEventListener("click", remove_new_item);
        
        function add_discrepancy_input() {
          const is_discrepancy = document.getElementById("is_discrepancy");
          const sf_discrepancy = document.getElementById(`sf_discrepancy`);
          const sf_form_no = document.getElementById(`sf_form_no${parseInt(item_counter.value) + 1}`);
          sf_discrepancy.value = sf_form_no.value;
          
          discrepancy.style.display = "grid";
          add_item_button.style.display = "none";
          remove_item_button.style.display = "none";
          is_discrepancy.value = "true";
        }
        
        function add_new_item() {
          const item_counter_int = parseInt(item_counter.value) + 1;
          item_counter.value = item_counter_int;

          
          if (item_counter_int >= 2 && item_counter_int <= 10) {
            const additional_item = document.getElementById(`additional_item${item_counter_int}`);
            const type_of_waste = document.getElementById(`type_of_waste${item_counter_int}`);
            const weight = document.getElementById(`weight${item_counter_int}`);
            const destruction_process = document.getElementById(`destruction_process${item_counter_int}`);
            additional_item.style.display = "grid";
            type_of_waste.setAttribute("required", "true");
            weight.setAttribute("required", "true");
            destruction_process.setAttribute("required", "true");
            
            if (item_counter_int === 2) {
              remove_item_button.style.display = "block";
            }
            
            if (item_counter_int === 10) {
              add_item_button.style.display = "none";
            }
          }
        }
        
        function remove_new_item() {
            const item_counter_int = parseInt(item_counter.value);
            
            if (item_counter_int >= 2 && item_counter_int <= 10) {
                const additional_item = document.getElementById(`additional_item${item_counter_int}`);
                additional_item.style.display = "none";
                const type_of_waste = document.getElementById(`type_of_waste${item_counter_int}`);
                const destruction_process = document.getElementById(`destruction_process${item_counter_int}`);
                const weight = document.getElementById(`weight${item_counter_int}`);
                weight.value = 0;
                
                type_of_waste.removeAttribute("required")
                destruction_process.removeAttribute("required")
                weight.removeAttribute("required")

                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                item_counter.dispatchEvent(inputEvent);
                
                if (item_counter_int === 2) {
                    remove_item_button.style.display = "none";
                }
                
                if (item_counter_int === 10) {
                    add_item_button.style.display = "block";
                }
            }
            
            item_counter.value = item_counter_int - 1;
        }
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

