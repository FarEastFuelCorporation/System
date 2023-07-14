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
        var unsorted_list = document.getElementById("unsorted_list");
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
                        <td>${date_decoder(wcf_data_list.content[j][11])}</td>
                        <td>${wcf_data_list.content[j][3]}</td>
                        <td>${wcf_data_list.content[j][17]} kg.</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        unsorted_list.innerHTML = data_value;    

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
        
        for (let i = 0; i < 10; i++) {
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
        for (let i = 0; i < 10; i++) {
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
        const search_wrapper = [];
        const destruction_process = [];
        const weight = [];
        const input_box = [];
        const sugg_box = [];

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
                console.log(input_box[index].value);
                search_wrapper[index].classList.remove("active");
                for (var a = 1; a < type_of_waste_data.content.length; a++) {
                    if (input_box[z].value == type_of_waste_data.content[a][1]) {
                        destruction_process[z].value = type_of_waste_data.content[a][2];
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

                var form_id = document.getElementById("form_id");

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

                var form_id = document.getElementById("form_id");

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
            });

            // Create and dispatch the input event
            const inputEvent = new Event('input', { bubbles: true, cancelable: true });
            item_counter.dispatchEvent(inputEvent);
        }

        const additional_item2 = document.getElementById("additional_item2");
        const additional_item3 = document.getElementById("additional_item3");
        const additional_item4 = document.getElementById("additional_item4");
        const additional_item5 = document.getElementById("additional_item5");
        const additional_item6 = document.getElementById("additional_item6");
        const additional_item7 = document.getElementById("additional_item7");
        const additional_item8 = document.getElementById("additional_item8");
        const additional_item9 = document.getElementById("additional_item9");
        const additional_item10 = document.getElementById("additional_item10");
        const weight2 = document.getElementById("weight2");
        const weight3 = document.getElementById("weight3");
        const weight4 = document.getElementById("weight4");
        const weight5 = document.getElementById("weight5");
        const weight6 = document.getElementById("weight6");
        const weight7 = document.getElementById("weight7");
        const weight8 = document.getElementById("weight8");
        const weight9 = document.getElementById("weight9");
        const weight10 = document.getElementById("weight10");
        var item_counter_int = parseInt(item_counter.value)
        const form_id = document.getElementById("form_id");

        add_item_button.addEventListener("click", add_new_item);

        function add_new_item(){
            item_counter_int += 1;
            item_counter.value = item_counter_int;

            if(item_counter_int == 2){
                additional_item2.style.display ="grid";
                // FOR 2
                remove_item_button.style.display = "block"
            }
            else if(item_counter_int == 3){
                additional_item3.style.display ="grid";
                // FOR 3
            }
            else if(item_counter_int == 4){
                additional_item4.style.display ="grid";
                // FOR 4
            }
            else if(item_counter_int == 5){
                additional_item5.style.display ="grid";
                // FOR 5
            }
            else if(item_counter_int == 6){
                additional_item6.style.display ="grid";
                // FOR 6
            }
            else if(item_counter_int == 7){
                additional_item7.style.display ="grid";
                // FOR 7
            }
            else if(item_counter_int == 8){
                additional_item8.style.display ="grid";
                // FOR 8
            }
            else if(item_counter_int == 9){
                additional_item9.style.display ="grid";
                // FOR 9
            }
            else if(item_counter_int == 10){
                additional_item10.style.display ="grid";
                // FOR 10
                add_item_button.style.display = "none"
            }
        }

        remove_item_button.addEventListener("click", remove_new_item);

        function remove_new_item(){
            if(item_counter_int == 2){
                additional_item2.style.display ="none";        
                // FOR 1
                remove_item_button.style.display = "none"
                weight2.value = 0;4            
                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                item_counter.dispatchEvent(inputEvent);
            }
            else if(item_counter_int == 3){
                additional_item3.style.display ="none";
                weight3.value = 0;
                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                item_counter.dispatchEvent(inputEvent);
                // FOR 2
            }
            else if(item_counter_int == 4){
                additional_item4.style.display ="none";
                weight4.value = 0;
                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                item_counter.dispatchEvent(inputEvent);
                // FOR 3
            }
            else if(item_counter_int == 5){
                additional_item5.style.display ="none";
                weight5.value = 0;
                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                item_counter.dispatchEvent(inputEvent);
                // FOR 4
            }
            else if(item_counter_int == 6){
                additional_item6.style.display ="none";
                weight6.value = 0;
                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                item_counter.dispatchEvent(inputEvent);
                // FOR 5
            }
            else if(item_counter_int == 7){
                additional_item7.style.display ="none";
                weight7.value = 0;
                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                item_counter.dispatchEvent(inputEvent);
                // FOR 6
            }
            else if(item_counter_int == 8){
                additional_item8.style.display ="none";
                weight8.value = 0;
                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                item_counter.dispatchEvent(inputEvent);
                // FOR 7
            }
            else if(item_counter_int == 9){
                additional_item9.style.display ="none";
                weight9.value = 0;
                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                item_counter.dispatchEvent(inputEvent);
                // FOR 8
            }
            else if(item_counter_int == 10){
                additional_item10.style.display ="none";
                weight10.value = 0;
                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                item_counter.dispatchEvent(inputEvent);
                // FOR 9
                add_item_button.style.display = "block"
            }
            item_counter_int -= 1;
            item_counter.value = item_counter_int;
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

