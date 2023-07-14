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
        const admin = document.getElementById("admin");
        const user = document.getElementById("admin_user");

        admin.value = username_data.content[3][3];
        user.innerHTML = username_data.content[3][3];

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
            for(a=1; a<sf_data_list.content.length; a++){
                if(search_sf_form_no.value == sf_data_list.content[a][1]){
                    data_value = `
                    SF #: ${sf_data_list.content[a][1]}<br>
                    WCF #: ${sf_data_list.content[a][2]}<br>
                    CLIENT: ${sf_data_list.content[a][3]}<br>
                    TYPE OF WASTE: ${sf_data_list.content[a][4]}<br>
                    DESTRUCTION PROCESS: ${sf_data_list.content[a][5]}<br>
                    WEIGHT: ${sf_data_list.content[a][6]} kg.<br>
                    HAULING DATE: ${date_decoder(sf_data_list.content[a][7])}<br>
                    SUBMITTED BY: ${sf_data_list.content[a][8]}<br>
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
                    console.log(hauling_date.value);
                    console.log(target_date_of_completion.value);
                    additional_item1.style.display = "grid";
                    add_item_button.style.display = "block";
                    completion.style.display = "grid";
                    buttons.style.display = "flex";
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

        // tpf_data_list
        const tpf_form_no = document.getElementById("tpf_form_no"); 
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        var month_new;
        var code_year_month;
        var data_counter;

        // dashboard
        var unsorted_list = document.getElementById("unsorted_list");
        var sf_tpf_transaction_counter = 0;
        var sf_transaction_counter = 0;
        let sf_transaction = []; // Variable containing existing elements
        let sf_tpf_transaction = []; // Variable containing existing elements
        
        for (let i = 1; i < sf_data_list.content.length; i++) {
            if (!sf_transaction.includes(sf_data_list.content[i][1])) {
                sf_transaction.push(sf_data_list.content[i][1]);
                sf_transaction_counter += 1
            }
        }

        for (let i = 1; i < tpf_data_list.content.length; i++) {
            if (!sf_tpf_transaction.includes(tpf_data_list.content[i][2])) {
                sf_tpf_transaction.push(tpf_data_list.content[i][2]);
                sf_tpf_transaction_counter += 1
            }
        }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const newElements = sf_transaction.filter((element) => !sf_tpf_transaction.includes(element));

        sorted.innerText = sf_tpf_transaction_counter;
        total.innerText = sf_transaction_counter
        unsorted.innerText = sf_transaction_counter - sf_tpf_transaction_counter;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < newElements.length; i++){
            for(let j = 1; j < sf_data_list.content.length; j++){
                if(newElements[i] == sf_data_list.content[j][1]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${sf_data_list.content[j][1]}</td>
                        <td>${date_decoder(sf_data_list.content[j][0])}</td>
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
        unsorted_list.innerHTML = data_value;    

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

        const additional_item2 = document.getElementById("additional_item2");
        const additional_item3 = document.getElementById("additional_item3");
        const additional_item4 = document.getElementById("additional_item4");
        const additional_item5 = document.getElementById("additional_item5");
        const item_counter = document.getElementById("item_counter");
        const item_counter_int = parseInt(item_counter.value)
        const form_id = document.getElementById("form_id");

        add_item_button.addEventListener("click", add_new_item);

        function add_new_item(){        
            item_counter_int += 1;
            item_counter.value = item_counter_int;
        
            if(item_counter_int == 2){
                additional_item2.style.display ="grid";
                // FOR 2
                form_id.setAttribute("action", "https://script.google.com/macros/s/AKfycbxIxvoXa0qGYc0I-xUqFPkQqJuqsCcUKJeG8MNUHPq471L4cra5rnpXRdxm0VkrJ5QvxA/exec");
                remove_item_button.style.display = "block"
            }
            else if(item_counter_int == 3){
                additional_item3.style.display ="grid";
                // FOR 3
                form_id.setAttribute("action", "https://script.google.com/macros/s/AKfycbx2-fvFIC1YdW-bUQcoh5tyIQtodvHaefwWKREPqMgE2yS8uO8RVWTB3yvx192NN_Sp/exec")
            }
            else if(item_counter_int == 4){
                additional_item4.style.display ="grid";
                // FOR 4
                form_id.setAttribute("action", "https://script.google.com/macros/s/AKfycbxPHB8125bm1p0wiDzrhL4QNwdSSgzccwyrHJfgbzJZzAhO-I6hycO0uvMEbeRjY5k8/exec")
            }
            else if(item_counter_int == 5){
                additional_item5.style.display ="grid";
                // FOR 5
                form_id.setAttribute("action", "https://script.google.com/macros/s/AKfycbxH11XjFq-e32sxFUjYtRS67gfnVcYSOua6M_GEA-ra34B0Dwip8SGY0TzSXiAQjVz-1g/exec")
                add_item_button.style.display = "none"
            }
        }

        remove_item_button.addEventListener("click", remove_new_item);
        
        function remove_new_item(){
            if(item_counter_int == 2){
                additional_item2.style.display ="none";        
                // FOR 1
                form_id.setAttribute("action", "https://script.google.com/macros/s/AKfycbxifJAdo4IHDiJPgOFNKmw9qVXJhDcYUf1XwJiOeIHqO8P_894MIkWF-8TdxHK405mr/exec")
                remove_item_button.style.display = "none"
            }
            else if(item_counter_int == 3){
                additional_item3.style.display ="none";
                // FOR 2
                form_id.setAttribute("action", "https://script.google.com/macros/s/AKfycbxIxvoXa0qGYc0I-xUqFPkQqJuqsCcUKJeG8MNUHPq471L4cra5rnpXRdxm0VkrJ5QvxA/exec")
            }
            else if(item_counter_int == 4){
                additional_item4.style.display ="none";
                // FOR 3
                form_id.setAttribute("action", "https://script.google.com/macros/s/AKfycbx2-fvFIC1YdW-bUQcoh5tyIQtodvHaefwWKREPqMgE2yS8uO8RVWTB3yvx192NN_Sp/exec")
            }
            else if(item_counter_int == 5){
                additional_item5.style.display ="none";
                // FOR 4
                form_id.setAttribute("action", "https://script.google.com/macros/s/AKfycbyiuwTGx2Yh7M4K9EIOcggcyBvgbA2JvQVjSN1ZBUtl4h_z0ogismEnNDHHt93rfa_t/exec")
                add_item_button.style.display = "block"
            }
            item_counter_int -= 1;
            item_counter.value = item_counter_int;
        }        

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});