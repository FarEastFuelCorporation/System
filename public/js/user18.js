document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const treatment_process_response_promise = fetch('https://script.google.com/macros/s/AKfycbzlzR7zmvdHSz4JpeXtEzPE4OQckTIVaE6PBw5IYwlqmmeIprQxEKkp4d2Jb1kBcgndzA/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const wtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxYB-N38emc6GUCKuuy-gGVRHQm4NoYgRRayHf56BwjiAPwsBKZ0llHjLAsW7Vt3j9I/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');
        const prf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec');
        const pof_response_promise = fetch('https://script.google.com/macros/s/AKfycby9i2KfOZ_uF7-JUPX8qpXg7Jewmw6oU3EfUTpXiwnRRB91_qIW3xAVNy5SZBN1YhVzzg/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            treatment_process_response,
            employee_response,
            vehicle_response,
            ltf_response,
            wcf_response,
            wtf_response,
            qlf_response,
            prf_response,
            pof_response,
            irf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            treatment_process_response_promise,
            employee_response_promise,
            vehicle_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            wtf_response_promise,
            qlf_response_promise,
            prf_response_promise,
            pof_response_promise,
            irf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const treatment_process_data_list  = await treatment_process_response.json();
        const employee_data_list  = await employee_response.json();
        const vehicle_data_list  = await vehicle_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const wtf_data_list  = await wtf_response.json();
        const qlf_data_list  = await qlf_response.json();
        const prf_data_list  = await prf_response.json();
        const pof_data_list  = await pof_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data_list3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("#user");
        const prf_user = document.getElementById("prf_user");
        const prf_department = document.getElementById("prf_department");
        const irf_user = document.getElementById("irf_user");

        users.forEach(user => {user.value = username_data_list.content[18][findTextInArray(username_data_list, "NAME")]})
        prf_user.value = username_data_list.content[18][findTextInArray(username_data_list, "NAME")];
        prf_department.value = username_data_list.content[18][findTextInArray(username_data_list, "DEPARTMENT")];
        irf_user.value = username_data_list.content[18][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[18][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[18][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[18][findTextInArray(username_data_list, "DEPARTMENT")];
        
        const warehouse_dashboard = document.querySelector("#warehouse_dashboard");
        const received_transactions_warehouse = warehouse_dashboard.querySelector("#received_transactions");
        const pending_counter_warehouse = warehouse_dashboard.querySelector("#pending");
        const finished_counter_warehouse = warehouse_dashboard.querySelector("#finished");
        const supplies_warehouse_pending_list = warehouse_dashboard.querySelector("#supplies_warehouse_pending_list");
        const disposal_warehouse_pending_list = warehouse_dashboard.querySelector("#disposal_warehouse_pending_list");
        const month_filter = document.getElementById("month_filter");
        var wcf_transaction_warehouse = []; // Variable containing existing elements
        var wtf_transaction_warehouse = []; // Variable containing existing elements
        let pending_warehouse = [];
        let done_warehouse = [];

        function getCurrentMonthName() {
            const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
            const currentDate = new Date();
            const currentMonthIndex = currentDate.getMonth();
            
            return months[currentMonthIndex];
        }        
        month_filter.value = getCurrentMonthName();
        month_filter.addEventListener("change", generatePending)
        generatePending();
        function generatePending(){
            wcf_transaction_warehouse = [];
            wtf_transaction_warehouse = [];
            for (let i = 1; i < wcf_data_list.content.length; i++) {
                if(wcf_data_list.content[i][findTextInArray(wcf_data_list, "SUBMIT TO")] == "WAREHOUSE"){
                    if (!wcf_transaction_warehouse.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]) &&
                    month_filter.value == formatMonth(wcf_data_list.content[i][findTextInArray(wcf_data_list, "HAULING DATE")])) {
                        wcf_transaction_warehouse.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]);
                    }
                    else if (!wcf_transaction_warehouse.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]) &&
                    month_filter.value == "ALL") {
                    wcf_transaction_warehouse.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]);
                    }
                }
            }
            for (let i = 1; i < wtf_data_list.content.length; i++) {
                if (!wtf_transaction_warehouse.includes(wtf_data_list.content[i][findTextInArray(wtf_data_list, "WCF #")]) &&
                month_filter.value == formatMonth(wtf_data_list.content[i][findTextInArray(wtf_data_list, "HAULING DATE")])) {
                    wtf_transaction_warehouse.push(wtf_data_list.content[i][findTextInArray(wtf_data_list, "WCF #")]);
                }
                else if (!wtf_transaction_warehouse.includes(wtf_data_list.content[i][findTextInArray(wtf_data_list, "WCF #")]) &&
                month_filter.value == "ALL") {
                wtf_transaction_warehouse.push(wtf_data_list.content[i][findTextInArray(wtf_data_list, "WCF #")]);
                }
            }

            pending_warehouse = wcf_transaction_warehouse.filter((element) => !wtf_transaction_warehouse.includes(element));
            done_warehouse = wcf_transaction_warehouse.filter((element) => wtf_transaction_warehouse.includes(element));
            
            received_transactions_warehouse.innerText = pending_warehouse.length + done_warehouse.length;
            pending_counter_warehouse.innerText = pending_warehouse.length;
            finished_counter_warehouse.innerText = done_warehouse.length;

            var data_value_pending = "";
            var data_value_pending_counter = 1;
            for(let j = 0; j < pending_warehouse.length; j++){
                for(let i = 1; i < wcf_data_list.content.length; i++){
                    if(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")] == pending_warehouse[j] &&
                    month_filter.value == formatMonth(wcf_data_list.content[i][findTextInArray(wcf_data_list, "HAULING DATE")])){
                        var mtf = "";
                        var ltf = "";
                        if((wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                            mtf = wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                        }else{
                            ltf = wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                            for(let x = 1; x < ltf_data_list.content.length; x++){
                                if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                    mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                                    break
                                }
                            }
                        }
                        data_value_pending +=`
                        <tr>
                            <td>${data_value_pending_counter}</td>
                            <td>${wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(wcf_data_list.content[i][findTextInArray(wcf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(wcf_data_list.content[i][findTextInArray(wcf_data_list, "ARRIVAL DATE")])} /<br> ${time_decoder(wcf_data_list.content[i][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                            <td>${findClientName(wcf_data_list.content[i][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(wcf_data_list.content[i][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[i][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${wcf_data_list.content[i][findTextInArray(wcf_data_list, "NET WEIGHT")]} kg.</td>
                        </tr>
                        `
                        data_value_pending_counter += 1;
                    }
                    else if(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")] == pending_warehouse[j] &&
                    month_filter.value == "ALL"){
                        var mtf = "";
                        var ltf = "";
                        if((wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                            mtf = wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                        }else{
                            ltf = wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                            for(let x = 1; x < ltf_data_list.content.length; x++){
                                if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                    mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                                    break
                                }
                            }
                        }
                        data_value_pending +=`
                        <tr>
                            <td>${data_value_pending_counter}</td>
                            <td>${wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(wcf_data_list.content[i][findTextInArray(wcf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(wcf_data_list.content[i][findTextInArray(wcf_data_list, "ARRIVAL DATE")])} /<br> ${time_decoder(wcf_data_list.content[i][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                            <td>${findClientName(wcf_data_list.content[i][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(wcf_data_list.content[i][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[i][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${wcf_data_list.content[i][findTextInArray(wcf_data_list, "NET WEIGHT")]} kg.</td>
                        </tr>
                        `
                        data_value_pending_counter += 1;
                    }
                }
            }
            disposal_warehouse_pending_list.innerHTML = data_value_pending;    

            var options = {
                series: [pending_warehouse.length, done_warehouse.length],
                chart: {
                    width: 500, // Set the desired width
                    height: 550, // Set the desired height
                    type: 'pie',
                },
                plotOptions: {
                    pie: {
                        startAngle: 0,
                        endAngle: 360
                    }
                },
                dataLabels: {
                    enabled: false, // Disable data labels inside the pie chart
                },
                fill: {
                    type: 'gradient', // Use solid fill type
                },
                legend: {
                    show: true,
                    position: "left", // Set the legend position to "left"
                    fontSize: '30px', // Increase legend font size as needed
                    formatter: function (seriesName, opts) {
                        // Here, you should use the correct variable to get the series value
                        var seriesValue = opts.w.globals.series[opts.seriesIndex];
                        var totalValue = opts.w.globals.series.reduce((acc, val) => acc + val, 0);
                        var percentage = ((seriesValue / totalValue) * 100).toFixed(2); // Calculate and format the percentage
                        return `${percentage}% ${seriesName}`; // Format legend label as "47.06% Pending"
                    },
                    labels: {
                        useSeriesColors: false, // Use custom color
                    },
                },
                labels: ["Pending", "Treated"],
                colors: ["#dc3545", "#198754"], // Specify solid colors here
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                    }
                }]
            };
            const pieChart = document.querySelector("#pieChart");
            while (pieChart.firstChild) {
                pieChart.removeChild(pieChart.firstChild);
            }
            var chart = new ApexCharts(pieChart, options);
            chart.render();

        }

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
                    select(e.target.innerText);
                }
            });
            function select(element) {
                let select_user_data = element;
                input_box.value = select_user_data;
                search_wrapper.classList.remove("active");
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


        // FORM GENERATOR
        // wtf_data_list
        const wtf_form_no = document.getElementById("wtf_form_no");
        var last_row = wtf_data_list.content.length -1;
        var data_info = wtf_data_list.content[last_row][findTextInArray(wtf_data_list, "WTF #")];
        var data_counter;
        if(last_row == 0){
            data_counter = 0;
        }
        else{
            data_counter = data_info.substring(9,12);
        }
        var year = new Date().getFullYear();
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(3, "0");
        wtf_form_no.value = `WTF${year}${month}${data_counter}`;

        const disposal_warehouse = document.querySelector("#disposal_warehouse");
        const wcf_form_no_warehouse = disposal_warehouse.querySelector("#wcf_form_no");
        const search_wcf_form_no_button_warehouse = disposal_warehouse.querySelector("#search_wcf_form_no_button");
        const search_wcf_result_warehouse = disposal_warehouse.querySelector("#search_wcf_result");
        const hauling_date_warehouse = disposal_warehouse.querySelector("#hauling_date");
        const arrival_date_warehouse = disposal_warehouse.querySelector("#arrival_date");
        const item_container_warehouse = disposal_warehouse.querySelector("#item_container");
        const item_counter_warehouse = disposal_warehouse.querySelector("#item_counter");
        const add_item_button_warehouse = disposal_warehouse.querySelector("#add_item_button");
        const remove_item_button_warehouse = disposal_warehouse.querySelector("#remove_item_button");
        const warehouse_data_warehouse = disposal_warehouse.querySelector("#warehouse_data");

        function addItem () {
            item_counter_warehouse.value = parseInt(item_counter_warehouse.value) +1;
            var item_data = 
            `
            <div id="items${item_counter_warehouse.value}" style="display: flex; gap: 20px;">
                <div class="form">
                    <select name="warehouse_no${item_counter_warehouse.value}" id="warehouse_no${item_counter_warehouse.value}" class="form-control">
                        <option value="">SELECT</option>
                        <option value="WAREHOUSE 1">WAREHOUSE 1</option>
                        <option value="WAREHOUSE 2">WAREHOUSE 2</option>
                        <option value="WAREHOUSE 3">WAREHOUSE 3</option>
                        <option value="WAREHOUSE A">WAREHOUSE A</option>
                        <option value="WAREHOUSE B">WAREHOUSE B</option>
                        <option value="WAREHOUSE C">WAREHOUSE C</option>
                    </select>
                </div>
                <div class="form">
                    <select name="area${item_counter_warehouse.value}" id="area${item_counter_warehouse.value}" class="form-control">
                        <option value="">SELECT</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="H">H</option>
                        <option value="I">I</option>
                        <option value="J">J</option>
                        <option value="K">K</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="N">N</option>
                        <option value="O">O</option>
                        <option value="P">P</option>
                        <option value="Q">Q</option>
                        <option value="R">R</option>
                        <option value="S">S</option>
                        <option value="T">T</option>
                        <option value="U">U</option>
                        <option value="V">V</option>
                        <option value="W">W</option>
                        <option value="X">X</option>
                        <option value="Y">Y</option>
                        <option value="Z">Z</option>
                        <option value="AA">AA</option>
                        <option value="AB">AB</option>
                        <option value="AC">AC</option>
                        <option value="AD">AD</option>
                        <option value="AE">AE</option>
                        <option value="AF">AF</option>
                    </select>
                </div>
                <div class="form">
                    <select name="section${item_counter_warehouse.value}" id="section${item_counter_warehouse.value}" class="form-control">
                        <option value="">SELECT</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>                                    
                    </select>
                </div>
                <div class="form">
                    <select name="level${item_counter_warehouse.value}" id="level${item_counter_warehouse.value}" class="form-control" required>
                        <option value="">SELECT</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>                                 
                    </select>
                </div>
                <div class="form">
                    <input type="number" name="pallet${item_counter_warehouse.value}" id="pallet${item_counter_warehouse.value}" class="form-control" step="1" autocomplete="off" required style="width: 100px;">
                </div>
                <div class="form">
                    <input type="text" name="steam${item_counter_warehouse.value}" id="steam${item_counter_warehouse.value}" class="form-control" autocomplete="off" required style="width: 110px;">
                </div>
                <div class="form">
                    <input type="number" name="quantity${item_counter_warehouse.value}" id="quantity${item_counter_warehouse.value}" class="form-control" step="1" autocomplete="off" required style="width: 100px;">
                </div>
                <div class="form">
                    <select name="unit${item_counter_warehouse.value}" id="unit${item_counter_warehouse.value}" class="form-control" required>
                        <option value="">SELECT</option>
                        <option value="PC">PC</option>
                        <option value="CASE">CASE</option>
                        <option value="JUMBO">JUMBO</option>
                        <option value="POLYSACK">POLYSACK</option>                             
                    </select>
                </div>
                <div class="form">
                    <input type="text" name="description${item_counter_warehouse.value}" id="description${item_counter_warehouse.value}" class="form-control" autocomplete="off" required style="width: 250px;">
                </div>
            </div>
            `
            item_container_warehouse.insertAdjacentHTML("beforeend", item_data)
            if(item_counter_warehouse.value > 1){
                remove_item_button_warehouse.style.display = "block"
            }
        }

        function remove_item() {
            const item_counter_warehouse = disposal_warehouse.querySelector("#item_counter");
            const items_warehouse = disposal_warehouse.querySelector(`#items${item_counter_warehouse.value}`);
            items_warehouse.remove()
            item_counter_warehouse.value = parseInt(item_counter_warehouse.value) -1;
            if(item_counter_warehouse.value == 1){
                remove_item_button_warehouse.style.display = "none"
            }
        }

        add_item_button_warehouse.addEventListener("click", addItem)
        remove_item_button_warehouse.addEventListener("click", remove_item)
        
        search_wcf_form_no_button_warehouse.addEventListener("click", () => {
            var data_value_text;
            for(let a = 1; a < wcf_data_list.content.length; a++){
                if(wcf_form_no_warehouse.value == wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]){
                    for(let b = 0; b < pending_warehouse.length; b++){
                        if(wcf_form_no_warehouse.value == pending_warehouse[b]){
                            data_value_text = `
                            WCF #: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]}<br>
                            CLIENT: ${findClientName(wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")])}<br>
                            WASTE CODE: ${findWasteCode(wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")])}<br>
                            WASTE DESCRIPTION: ${findWasteName(wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")])}<br>
                            PLATE NO: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "PLATE #")]}<br>
                            DRIVER: ${findEmployeeName(wcf_data_list.content[a][findTextInArray(wcf_data_list, "DRIVER ID")])}<br>
                            DATE IN: ${date_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "ARRIVAL DATE")])}<br>
                            TIME IN: ${time_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}<br>
                            CLIENT WEIGHT: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT WEIGHT")]} Kg.<br>
                            TRUCK SCALE #: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "TRUCK SCALE #")]}<br>
                            GROSS WEIGHT: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "GROSS WEIGHT")]} Kg.<br>
                            TARE WEIGHT: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "TARE WEIGHT")]} Kg.<br>
                            NET WEIGHT: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "NET WEIGHT")]} Kg.<br>
                            HAULING DATE: ${date_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "HAULING DATE")])}<br>
                            REMARKS: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "REMARKS")]}<br>
                            SUBMITTED BY: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "SUBMITTED BY")]}<br>
                            `
                            hauling_date_warehouse.value = date_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "HAULING DATE")]);
                            arrival_date_warehouse.value = date_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "ARRIVAL DATE")]);
                            warehouse_data_warehouse.style.display = "block"
                        }
                        search_wcf_result_warehouse.innerHTML = `
                        <div class="search_wcf_result">
                        <h2>INFORMATION</h2>
                        No Data Found
                        </div><br>`
                    }
                }
            }
            if(data_value_text == undefined){
                search_wcf_result_warehouse.innerHTML = `
                <div class="search_wcf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`            
            }
            else{
                search_wcf_result_warehouse.innerHTML = `
                <div class="search_wcf_result">
                <h2>INFORMATION</h2>
                ${data_value_text}
                </div><br>`
            }
        })

        const warehouse_inventory = document.getElementById("warehouse_inventory")
        const warehouse_inventory_list = warehouse_inventory.querySelector("#warehouse_inventory_list")
        const search_filter_options = warehouse_inventory.querySelector("#search_filter_options")

        var inventory_data = "";
        var inventory_data_counter = 1;

        search_filter_options.addEventListener("click", () => {
            warehouse_inventory_list.innerHTML = "";
            filterData()
        })
        filterData()
        function filterData(){
            inventory_data = ""
            const filter_option = warehouse_inventory.querySelector("#filter_option")
            const filter_info = warehouse_inventory.querySelector("#filter_info")
            for(let x = 1; x < wtf_data_list.content.length; x++){
                var column_name = "";
                for(let y = 0; y < wtf_data_list.content[0].length; y++){
                    if(filter_option.value == wtf_data_list.content[0][y]){
                        column_name = y
                        break
                    }
                }
                if(wtf_data_list.content[x][column_name] == filter_info.value){
                    var mtf = "";
                    var ltf = "";
                    for(let k = 1; k < wcf_data_list.content.length; k++){
                        if(wtf_data_list.content[x][findTextInArray(wtf_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
                            if((wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                                mtf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                            }else{
                                ltf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                                for(let x = 1; x < ltf_data_list.content.length; x++){
                                    if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                        mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                                        break
                                    }
                                }
                            }
                        }
                    }
                    inventory_data += 
                    `
                    <tr>
                        <td>${inventory_data_counter}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "WTF #")]}</td>
                        <td>${mtf}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "GATE PASS #")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "STEAM #")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "WAREHOUSE #")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "AREA")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "SECTION")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "LEVEL")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "PALLET #")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "QUANTITY")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "UNIT")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "DESCRIPTION")]}</td>
                    </tr>
                    `
                    inventory_data_counter += 1;
                }
                else if(filter_info.value == ""){
                    var mtf = "";
                    var ltf = "";
                    for(let k = 1; k < wcf_data_list.content.length; k++){
                        if(wtf_data_list.content[x][findTextInArray(wtf_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
                            if((wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                                mtf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                            }else{
                                ltf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                                for(let x = 1; x < ltf_data_list.content.length; x++){
                                    if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                        mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                                        break
                                    }
                                }
                            }
                        }
                    }
                    inventory_data += 
                    `
                    <tr>
                        <td>${inventory_data_counter}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "WTF #")]}</td>
                        <td>${mtf}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "GATE PASS #")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "STEAM #")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "WAREHOUSE #")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "AREA")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "SECTION")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "LEVEL")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "PALLET #")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "QUANTITY")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "UNIT")]}</td>
                        <td>${wtf_data_list.content[x][findTextInArray(wtf_data_list, "DESCRIPTION")]}</td>
                    </tr>
                    `
                    inventory_data_counter += 1;
                }
            }
            warehouse_inventory_list.insertAdjacentHTML("beforeend", inventory_data)
        }

        // multi section
        // purchase_request_form
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        if(today_month.toString().length == 1){
            month_new = `0${today_month}`
        }
        const purchase_request_form = document.querySelector("#purchase_request_form");
        const add_item_button = purchase_request_form.querySelector("#add_item_button");
        const remove_item_button = purchase_request_form.querySelector("#remove_item_button");
        const purchase_request_form_button = purchase_request_form.querySelector("#purchase_request_form_button");
        const purchase_request_list = purchase_request_form.querySelector("#purchase_request_list");
        const form_tab = purchase_request_form.querySelector("#form_tab");
        var prf_counter = purchase_request_form.querySelector("#prf_counter");
        var prf_form_no = [];
        
        // function prf_generator() {
        //     var data_content = 0;
        //     var data_info;
        //     var data_last_3digit = 0;
        //     var prf_code_year_month;
        //     prf_code_year_month = `PR${today_year}${month_new}`;
        
        //     for (let x = 1; x < prf_data_list.content.length; x++) {
        //         data_info = prf_data_list.content[x][findTextInArray(prf_data_list, "PR #")];
        
        //         if (data_info.includes(prf_code_year_month) == true) {
        //             data_last_3digit = data_info.slice(8);
        //         }
        //     }
        
        //     data_content = parseInt(data_last_3digit);
        
        //     for (let y = 1; y <= prf_counter.value; y++) {
        //         prf_form_no[y] = document.querySelector(`#prf_form_no${y}`);
        //         prf_form_no[y].value = `${prf_code_year_month}${String(parseInt(data_content) + y).padStart(3,"0")}`;
        //     }
        // }
        
        // prf_generator()
        
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

        var purchase_request_data_value = "";
        var purchase_request_data_value_counter = 1;
        for(let x = 1; x < prf_data_list.content.length; x++){
            var status = "PENDING";
            var duration = "PENDING";
            for(let y = 1; y < pof_data_list.content.length; y++){
                if(prf_data_list.content[x][findTextInArray(prf_data_list, "PR #")] == (pof_data_list.content[y][findTextInArray(pof_data_list, "PR #")])){
                    status = "REQUESTED"
                }
            }
            purchase_request_data_value += `
            <tr>
                <td>${purchase_request_data_value_counter}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "PR #")]}</td>
                <td>${date_decoder(prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")])}/<br>${time_decoder(prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")])}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")]}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")]}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")]}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")]}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")]}</td>
                <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")]}</td>
                <td>${status}</td>
                <td>${duration}</td>
            </tr>
            `
            purchase_request_data_value_counter += 1;
        }
        purchase_request_list.innerHTML = purchase_request_data_value;


        purchase_request_form_button.addEventListener("click", () => {
            if(form_tab.style.display == "block"){
                form_tab.style.display = "none";
            }
            else{
                form_tab.style.display = "block";
            }
        })
                
        // incident report form
        const irf_form_no = document.getElementById("irf_form_no"); 
        var irf_code_year_month;
        irf_code_year_month = `IRF${today_year}${today_month}`;
        
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

        const incident_report_form = document.querySelector("#incident_report_form");
        const person_involved_containers = incident_report_form.querySelector("#person_involved_containers");
        const irf_counter_incident_report_form = incident_report_form.querySelector("#irf_counter");
        const add_tf_button_incident_report_form = incident_report_form.querySelector("#add_tf_button");
        const remove_tf_button_incident_report_form = incident_report_form.querySelector("#add_tf_button");
        const form_tab_incident_report_form = incident_report_form.querySelector("#form_tab");
        const incident_report_form_button_incident_report_form = incident_report_form.querySelector("#incident_report_form_button");
        const incident_history_list_incident_report_form = incident_report_form.querySelector("#incident_history_list");
        var employee_name = [];
        var employee_department = [];
        var employee_designation = [];
        for(let x = 1; x < employee_data_list.content.length; x++){
            if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
                var gender = employee_data_list.content[x][findTextInArray(employee_data_list, "GENDER")];
                if(gender == "MALE"){
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "AFFIX")]}`
                    employee_name.push(full_name);
                    employee_department.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DEPARTMENT")]);
                    employee_designation.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DESIGNATION")]);
                }
                else{
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[x][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                    employee_name.push(full_name);
                    employee_department.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DEPARTMENT")]);
                    employee_designation.push(employee_data_list.content[x][findTextInArray(employee_data_list, "DESIGNATION")]);
                }
            }
        }
        function addPersonInvolved(){
            const person_involved_container = person_involved_containers.querySelector(`#person_involved_container${irf_counter_incident_report_form.value}`);
            var search_wrapper2 = person_involved_container.querySelector(`#search_irf_client${irf_counter_incident_report_form.value}`);
            var irf_department = person_involved_container.querySelector(`#irf_department${irf_counter_incident_report_form.value}`);
            var irf_designation = person_involved_container.querySelector(`#irf_designation${irf_counter_incident_report_form.value}`);
            var irf_client = search_wrapper2.querySelector(`#irf_client${irf_counter_incident_report_form.value}`);
            var sugg_box2 = search_wrapper2.querySelector(".autocom_box");
            irf_client.onkeyup = (e) => {
                let user_data = e.target.value;
                let empty_array = [];
                if (user_data) {
                    empty_array = employee_name.filter((data) => {
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
                search_wrapper2.classList.remove("active");
                irf_client.value = select_user_data;
                irf_department.value = employee_department[findTextInArray2(employee_name, select_user_data)];
                employee_department.splice(findTextInArray2(employee_name, select_user_data), 1);
                irf_designation.value = employee_designation[findTextInArray2(employee_name, select_user_data)];
                employee_designation.splice(findTextInArray2(employee_name, select_user_data), 1);
                employee_name = employee_name.filter(item => item !== select_user_data);
            }
            function show_suggestions2(list) {
                let list_data;
                if (!list.length) {
                    user_value = irf_client.value;
                    list_data = '<li>' + user_value + '</li>';
                } else {
                    list_data = list.join("");
                }
                sugg_box2.innerHTML = list_data;
            }
        }
        addPersonInvolved();
        add_tf_button_incident_report_form.addEventListener("click", () => {
            irf_counter_incident_report_form.value = parseInt(irf_counter_incident_report_form.value) + 1;
            var data = `
            <div id="person_involved_container${irf_counter_incident_report_form.value}" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                <div class="wrapper">
                    <label for="irf_client${irf_counter_incident_report_form.value}">
                        <i class="fa-solid fa-user"></i>
                        Person Involved
                    </label><br>
                    <div class="search_input" id="search_irf_client${irf_counter_incident_report_form.value}">
                        <input type="text" name="irf_client${irf_counter_incident_report_form.value}" id="irf_client${irf_counter_incident_report_form.value}" autocomplete="off" class="form-control" required placeholder="Type to Search Client Name...">
                        <div class="autocom_box">
                        </div>
                        <div class="icon"><i class="fas fa-search"></i></div>
                    </div>
                </div>
                <div>
                    <label for="irf_department${irf_counter_incident_report_form.value}">
                        <i class="fa-solid fa-building-user"></i>
                        Department
                    </label><br>
                    <input type="text" id="irf_department${irf_counter_incident_report_form.value}" autocomplete="off" name="irf_department${irf_counter_incident_report_form.value}" class="form-control" required readonly placeholder="Input Department..." style="height: 55px !important;">    
                </div>
                <div>
                    <label for="irf_designation${irf_counter_incident_report_form.value}">
                        <i class="fa-solid fa-id-card"></i>
                        Designation
                    </label><br>
                    <input type="text" id="irf_designation${irf_counter_incident_report_form.value}" autocomplete="off" name="irf_designation${irf_counter_incident_report_form.value}" class="form-control" required readonly placeholder="Input Designation..." style="height: 55px !important;">   
                </div>
            </div>
            `
            person_involved_containers.insertAdjacentHTML("beforeend", data);
            remove_tf_button_incident_report_form.style.display = "block";
            addPersonInvolved();
        })
        // incident_history_list
        var incident_history_data_value = "";
        var incident_history_data_value_counter = 1;

        for(let x = 1; x < irf_data_list.content.length; x++){
            const resultArray = (irf_data_list.content[x][findTextInArray(irf_data_list, "PERSON INVOLVE")]).split(" || ");
            var data_value2 = [];
            for(let z = 0; z < resultArray.length; z++){
                for(let y = 1; y < employee_data_list.content.length; y++){
                    if(employee_data_list.content[y][findTextInArray(employee_data_list, "EMPLOYEE ID")] == resultArray[z]){
                        var gender = employee_data_list.content[y][findTextInArray(employee_data_list, "GENDER")];
                        if(gender == "MALE"){
                            var full_name = `${employee_data_list.content[y][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[y][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[y][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[y][findTextInArray(employee_data_list, "AFFIX")]}`
                            data_value2.push(full_name);
                        }
                        else{
                            var full_name = `${employee_data_list.content[y][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[y][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[y][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[y][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                            data_value2.push(full_name);
                        }
                    }
                }
            }
            const concatenatedString = data_value2.join(" || ")
            incident_history_data_value += `
            <tr>
                <td>${incident_history_data_value_counter}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "IRF #")]}</td>
                <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF INCIDENT")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF INCIDENT")])}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DEPARTMENT")]}</td>
                <td>${concatenatedString}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "DESIGNATION")]}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "LOCATION")]}</td>
                <td>${irf_data_list.content[x][findTextInArray(irf_data_list, "INCIDENT DETAILS")]}</td>
                <td>${date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF REPORT")])} /<br> ${time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF REPORT")])}</td>
                <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF INCIDENT")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF INCIDENT")]),date_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "DATE OF REPORT")]),time_decoder(irf_data_list.content[x][findTextInArray(irf_data_list, "TIME OF REPORT")]))}</td>
            </tr>
            `
            incident_history_data_value_counter += 1;
        }
        incident_history_list_incident_report_form.innerHTML = incident_history_data_value

        incident_report_form_button_incident_report_form.addEventListener("click", () => {
            if(form_tab_incident_report_form.style.display == "block"){
                form_tab_incident_report_form.style.display = "none";
            }
            else{
                form_tab_incident_report_form.style.display = "block";
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
                else{
                    employee_name = employee_id == employee_data_list.content[c][findTextInArray(employee_data_list, "EMPLOYEE ID")]
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
            var waste_code = "";
            for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                if(waste_id == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                    waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                    break
                }
                else{
                    waste_code = waste_id;
                }
            }
            return waste_code
        }
        function findWasteCode2(waste_id){
            var waste_code = "";
            for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                if(waste_id == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                    waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]);
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