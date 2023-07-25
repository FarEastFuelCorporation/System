document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');

        const [
            username_response,
            wcf_response,
            sf_response,
            tpf_response
        ] = await Promise.all([
            username_response_promise,
            wcf_response_promise,
            sf_response_promise,
            tpf_response_promise
        ]);

        const username_data  = await username_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
        const tpf_data_list  = await tpf_response.json();
    
        // Code that depends on the fetched data
        // username_data
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");

        user.value = username_data.content[3][3];
        user_sidebar.innerHTML = `<u>${username_data.content[3][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[3][4];

        // tpf_data_list
        const tpf_form_no = document.getElementById("tpf_form_no"); 
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        var month_new;
        var code_year_month;
        var data_counter;

        // treatment_process_dashboard
        const total_counter_treatment = document.querySelector("#treatment_process_dashboard #total_counter");
        const pending_counter_treatment = document.querySelector("#treatment_process_dashboard #pending_counter");
        const treated_counter_treatment = document.querySelector("#treatment_process_dashboard #treated_counter");
        const pending_list_treatment = document.querySelector("#treatment_process_dashboard #pending_list");
        const finished_list_treatment = document.querySelector("#treatment_process_dashboard #finished_list");
        var sf_tpf_transaction_counter_treatment = 0;
        var sf_transaction_counter_treatment = 0;
        let sf_transaction_treatment = []; // Variable containing existing elements
        let sf_tpf_transaction_treatment = []; // Variable containing existing elements
        
        for (let i = 1; i < sf_data_list.content.length; i++) {
            if(sf_data_list.content[i][4] !== "DISCREPANCY"){
                if(sf_data_list.content[i][5] !== "FOR STORAGE"){
                    if (!sf_transaction_treatment.includes(sf_data_list.content[i][1])) {
                        sf_transaction_treatment.push(sf_data_list.content[i][1]);
                        sf_transaction_counter_treatment += 1
                    }
                }
            }
        }

        for (let i = 1; i < tpf_data_list.content.length; i++) {
            if (!sf_tpf_transaction_treatment.includes(tpf_data_list.content[i][2])) {
                sf_tpf_transaction_treatment.push(tpf_data_list.content[i][2]);
                sf_tpf_transaction_counter_treatment += 1
            }
        }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const pending_treatment = sf_transaction_treatment.filter((element) => !sf_tpf_transaction_treatment.includes(element));
        const finished_treatment = sf_transaction_treatment.filter((element) => sf_tpf_transaction_treatment.includes(element));

        // pending_list
        treated_counter_treatment.innerText = sf_tpf_transaction_counter_treatment;
        total_counter_treatment.innerText = sf_transaction_counter_treatment;
        pending_counter_treatment.innerText = sf_transaction_counter_treatment - sf_tpf_transaction_counter_treatment;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < pending_treatment.length; i++){
            for(let j = 1; j < sf_data_list.content.length; j++){
                if(pending_treatment[i] == sf_data_list.content[j][1]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${sf_data_list.content[j][1]}</td>
                        <td>${date_decoder(sf_data_list.content[j][8])} /<br> ${time_decoder(sf_data_list.content[j][9])}</td>
                        <td>${sf_data_list.content[j][3]}</td>
                        <td>${sf_data_list.content[j][4]}</td>
                        <td>${sf_data_list.content[j][5]}</td>
                        <td>${sf_data_list.content[j][6]}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        pending_list_treatment.innerHTML = data_value;    

        // finished_list
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < finished_treatment.length; i++){
            for(let j = 1; j < sf_data_list.content.length; j++){
                if(finished_treatment[i] == sf_data_list.content[j][1]){
                    var sorted_date;
                    var sorted_time;
                    var tpf_no;
                    for(let k = 1; k < tpf_data_list.content.length; k++){
                        if(sf_data_list.content[j][1] == tpf_data_list.content[k][2]){
                            sorted_date = date_decoder(tpf_data_list.content[k][11]);
                            sorted_time = time_decoder(tpf_data_list.content[k][12]);
                            tpf_no = tpf_data_list.content[k][1];
                            break
                        }
                    }
                    data_value +=`
                    <tr>
                    <td>${data_value_counter}</td>
                    <td>${tpf_no}</td>
                    <td>${date_decoder(sf_data_list.content[j][8])} /<br> ${time_decoder(sf_data_list.content[j][9])}</td>
                    <td>${sf_data_list.content[j][3]}</td>
                    <td>${sf_data_list.content[j][4]}</td>
                    <td>${sf_data_list.content[j][5]}</td>
                    <td>${sf_data_list.content[j][6]}</td>
                    <td>${sorted_date} /<br> ${sorted_time}</td>
                    <td>${calculateTravelTime(date_decoder(sf_data_list.content[j][8]),time_decoder(sf_data_list.content[j][9]),sorted_date,sorted_time)}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        finished_list_treatment.innerHTML = data_value;    

        // FORM GENERATOR
        if(today_month.toString().length == 1){
            month_new = `0${today_month}`
        }

        code_year_month = `TPF${today_year}${month_new}`;

        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;

        for(x=1; x<tpf_data_list.content.length; x++){
            data_info = tpf_data_list.content[x][1];

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

        tpf_form_no.value = `${code_year_month}${data_counter}`

        // sf_data_list
        const wcf_form_no = document.getElementById("wcf_form_no");
        const client = document.getElementById("client");
        const waste_description = document.getElementById("waste_description");
        const weight = document.getElementById("weight");
        const destruction_process = document.getElementById("destruction_process");
        const hauling_date = document.getElementById("hauling_date");
        const target_date_of_completion = document.getElementById("target_date_of_completion");
        const search_sf_form_no = document.getElementById("search_sf_form_no");
        const search_sf_form_no_button = document.getElementById("search_sf_form_no_button");
        const search_sf_result = document.getElementById("search_sf_result");
        const additional_item1 = document.getElementById("additional_item1");
        const add_item_button = document.getElementById("add_item_button");
        const remove_item_button = document.getElementById("remove_item_button");
        const completion = document.getElementById("completion");
        const buttons = document.getElementById("buttons");

        search_sf_form_no_button.addEventListener("click", () => {
            var data_value;
            for(let a = 1; a < sf_data_list.content.length; a++){
                for(let b=0; b<=pending.length; b++){
                    if(search_sf_form_no.value == sf_data_list.content[a][1]){
                        if(search_sf_form_no.value == pending[b]){
                            data_value = `
                            SF #: ${sf_data_list.content[a][1]}<br>
                            WCF #: ${sf_data_list.content[a][2]}<br>
                            CLIENT: ${sf_data_list.content[a][3]}<br>
                            TYPE OF WASTE: ${sf_data_list.content[a][4]}<br>
                            DESTRUCTION PROCESS: ${sf_data_list.content[a][5]}<br>
                            WEIGHT: ${sf_data_list.content[a][6]} kg.<br>
                            HAULING DATE: ${date_decoder(sf_data_list.content[a][7])}<br>
                            SORTED DATE: ${date_decoder(sf_data_list.content[a][8])}<br>
                            SORTED TIME: ${time_decoder(sf_data_list.content[a][9])}<br>
                            SUBMITTED BY: ${sf_data_list.content[a][10]}<br>
                            `
                            if(sf_data_list.content[a][5] == 'THERMAL DECOMPOSITION'){
                                machine_list.innerHTML = `
                                <label for="tpf_form_no">
                                    <i class="fa-solid fa-gears"></i>
                                    Machine
                                </label><br>
                                <div>
                                    <select name="machine" id="machine" class="form-control">
                                        <option value="">Select Machine</option>
                                        <option value="THERMAL 1 (ALPHA)">THERMAL 1 (ALPHA)</option>
                                        <option value="THERMAL 2 (BRAVO)">THERMAL 2 (BRAVO)</option>
                                        <option value="THERMAL 3 (CHARLIE)">THERMAL 3 (CHARLIE)</option>
                                    </select>
                                </div><br>
                                `
                            }
                            wcf_form_no.value = sf_data_list.content[a][2];
                            client.value = sf_data_list.content[a][3];
                            waste_description.value = sf_data_list.content[a][4];
                            weight.value = sf_data_list.content[a][6];
                            waste_description.value = sf_data_list.content[a][4];
                            destruction_process.value = sf_data_list.content[a][5];
                            hauling_date.value = date_decoder(sf_data_list.content[a][7]);
                            var hauling_date_plus2 = new Date(date_decoder(sf_data_list.content[a][7]));
                            target_date_of_completion.value = date_decoder(hauling_date_plus2.setDate(hauling_date_plus2.getDate()+2));
                            additional_item1.style.display = "grid";
                            add_item_button.style.display = "block";
                            completion.style.display = "grid";
                            buttons.style.display = "flex";    
                        }
                    }
                }
            }
            if(data_value == undefined){
                search_sf_result.innerHTML = `
                <div class="search_sf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`            
            }
            else{
                search_sf_result.innerHTML = `
                <div class="search_sf_result">
                <h2>INFORMATION</h2>
                ${data_value}
                </div><br>`
            }
        });

        const additional_item2 = document.getElementById("additional_item2");
        const additional_item3 = document.getElementById("additional_item3");
        const additional_item4 = document.getElementById("additional_item4");
        const additional_item5 = document.getElementById("additional_item5");
        const item_counter = document.getElementById("item_counter");
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
                add_item_button.style.display = "block"
            }
            item_counter_int -= 1;
            item_counter.value = item_counter_int;
        }        

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});