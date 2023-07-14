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
        const admin = document.getElementById("admin");
        const user = document.getElementById("admin_user");

        admin.value = username_data.content[2][3];
        user.innerHTML = username_data.content[2][3];

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
                if(search_sf_wcf_form_no.value == wcf_data_list.content[a][1]){
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

        // sf_data_list
        const total = document.getElementById("total");
        const sorted = document.getElementById("sorted");
        const unsorted = document.getElementById("unsorted");
        const sf_form_no = document.getElementById("sf_form_no");
        const sf_form_no2 = document.getElementById("sf_form_no2");
        const sf_form_no3 = document.getElementById("sf_form_no3");
        const sf_form_no4 = document.getElementById("sf_form_no4");
        const sf_form_no5 = document.getElementById("sf_form_no5");
        const sf_form_no6 = document.getElementById("sf_form_no6");
        const sf_form_no7 = document.getElementById("sf_form_no7");
        const sf_form_no8 = document.getElementById("sf_form_no8");
        const sf_form_no9 = document.getElementById("sf_form_no9");
        const sf_form_no10 = document.getElementById("sf_form_no10");
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        var month_new;
        var code_year_month;
        var data_counter;
        var data_counter2;
        var data_counter3;
        var data_counter4;
        var data_counter5;
        var data_counter6;
        var data_counter7;
        var data_counter8;
        var data_counter9;
        var data_counter10;
    
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
        const newElements = wcf_transaction.filter((element) => !wcf_sf_transaction.includes(element));

        sorted.innerText = wcf_sf_transaction_counter;
        total.innerText = wcf_transaction_counter
        unsorted.innerText = wcf_transaction_counter - wcf_sf_transaction_counter;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < newElements.length; i++){
            for(let j = 1; j < wcf_data_list.content.length; j++){
                if(newElements[i] == wcf_data_list.content[j][1]){
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
    
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
    
        for(x=1; x<sf_data_list.content.length; x++){
            data_info = sf_data_list.content[x][1];
            
            if(data_info.includes(code_year_month) == true){
                data_last_3digit = data_info.slice(9)
            }
        }
                
        data_content = parseInt(data_last_3digit) +1
    
        var data_content2 = data_content + 1;
        var data_content3 = data_content + 2;
        var data_content4 = data_content + 3;
        var data_content5 = data_content + 4;
        var data_content6 = data_content + 5;
        var data_content7 = data_content + 6;
        var data_content8 = data_content + 7;
        var data_content9 = data_content + 8;
        var data_content10 = data_content + 9;
    
        if(data_content.toString().length == 1){
            data_counter = `00${data_content}`;
        }
        else if(data_content.toString().length == 2){
            data_counter = `0${data_content}`;
        }
        else if(data_content.toString().length == 3){
            data_counter = `${data_content}`;
        }
    
        if(data_content2.toString().length == 1){
            data_counter2 = `00${data_content2}`;
        }
        else if(data_content2.toString().length == 2){
            data_counter2 = `0${data_content2}`;
        }
        else if(data_content2.toString().length == 3){
            data_counter2 = `${data_content2}`;
        }
    
        if(data_content3.toString().length == 1){
            data_counter3 = `00${data_content3}`;
        }
        else if(data_content3.toString().length == 2){
            data_counter3 = `0${data_content3}`;
        }
        else if(data_content3.toString().length == 3){
            data_counter3 = `${data_content3}`;
        }
    
        if(data_content4.toString().length == 1){
            data_counter4 = `00${data_content4}`;
        }
        else if(data_content4.toString().length == 2){
            data_counter4 = `0${data_content4}`;
        }
        else if(data_content4.toString().length == 3){
            data_counter4 = `${data_content4}`;
        }
    
        if(data_content5.toString().length == 1){
            data_counter5 = `00${data_content5}`;
        }
        else if(data_content5.toString().length == 2){
            data_counter5 = `0${data_content5}`;
        }
        else if(data_content5.toString().length == 3){
            data_counter5 = `${data_content5}`;
        }
    
        if(data_content6.toString().length == 1){
            data_counter6 = `00${data_content6}`;
        }
        else if(data_content6.toString().length == 2){
            data_counter6 = `0${data_content6}`;
        }
        else if(data_content6.toString().length == 3){
            data_counter6 = `${data_content6}`;
        }
    
        if(data_content7.toString().length == 1){
            data_counter7 = `00${data_content7}`;
        }
        else if(data_content7.toString().length == 2){
            data_counter7 = `0${data_content7}`;
        }
        else if(data_content7.toString().length == 3){
            data_counter7 = `${data_content7}`;
        }
    
        if(data_content8.toString().length == 1){
            data_counter8 = `00${data_content8}`;
        }
        else if(data_content8.toString().length == 2){
            data_counter8 = `0${data_content8}`;
        }
        else if(data_content8.toString().length == 3){
            data_counter8 = `${data_content8}`;
        }
    
        if(data_content9.toString().length == 1){
            data_counter9 = `00${data_content9}`;
        }
        else if(data_content9.toString().length == 2){
            data_counter9 = `0${data_content9}`;
        }
        else if(data_content9.toString().length == 3){
            data_counter9 = `${data_content9}`;
        }
        
        if(data_content10.toString().length == 1){
            data_counter10 = `00${data_conten10t}`;
        }
        else if(data_content10.toString().length == 2){
            data_counter10 = `0${data_content10}`;
        }
        else if(data_content10.toString().length == 3){
            data_counter10 = `${data_content10}`;
        }
    
        sf_form_no.value = `${code_year_month}${data_counter}`
        sf_form_no2.value = `${code_year_month}${data_counter2}`
        sf_form_no3.value = `${code_year_month}${data_counter3}`
        sf_form_no4.value = `${code_year_month}${data_counter4}`
        sf_form_no5.value = `${code_year_month}${data_counter5}`
        sf_form_no6.value = `${code_year_month}${data_counter6}`
        sf_form_no7.value = `${code_year_month}${data_counter7}`
        sf_form_no8.value = `${code_year_month}${data_counter8}`
        sf_form_no9.value = `${code_year_month}${data_counter9}`
        sf_form_no10.value = `${code_year_month}${data_counter10}`
    
        // type_of_waste_data
        var data_value = [];

        for (var x = 1; x < type_of_waste_data.content.length; x++) {
            data_value.push(type_of_waste_data.content[x][1]);
        }

        const total_weight = document.getElementById("total_weight");
        const rem_weight = document.getElementById("rem_weight");
        const itemcounter = document.querySelectorAll(".search_input_type");
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
            weight[z].addEventListener("change", () => {
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
        const item_counter = document.getElementById("item_counter");
        var item_counter_int = parseInt(item_counter.value)
        const form_id = document.getElementById("form_id");

        add_item_button.addEventListener("click", add_new_item);

        function add_new_item(){
            item_counter_int += 1;
            item_counter.value = item_counter_int;
            console.log(item_counter)

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
            }
            else if(item_counter_int == 3){
                additional_item3.style.display ="none";
                // FOR 2
            }
            else if(item_counter_int == 4){
                additional_item4.style.display ="none";
                // FOR 3
            }
            else if(item_counter_int == 5){
                additional_item5.style.display ="none";
                // FOR 4
            }
            else if(item_counter_int == 6){
                additional_item6.style.display ="none";
                // FOR 5
            }
            else if(item_counter_int == 7){
                additional_item7.style.display ="none";
                // FOR 6
            }
            else if(item_counter_int == 8){
                additional_item8.style.display ="none";
                // FOR 7
            }
            else if(item_counter_int == 9){
                additional_item9.style.display ="none";
                // FOR 8
            }
            else if(item_counter_int == 10){
                additional_item10.style.display ="none";
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

