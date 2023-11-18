document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const vehicle_log_response_promise = fetch('https://script.google.com/macros/s/AKfycbwOVO1qi9ac0YojlrZUh-XMYMe_gAeO2bg_wU_lSRdBkLgmJKQuzQuq41lzvSOjKfzA/exec');
        const vehicle_maintenance_response_promise = fetch('https://script.google.com/macros/s/AKfycbwB-vjJrQoSk9Q0L5DoLKFdaSPtENNC60VfpIWG8IuHHXC_Nq6HU0bKhmektlKMMPqa/exec');
        const vehicle_maintenance_log_response_promise = fetch('https://script.google.com/macros/s/AKfycbxUIEa6seadOZmn_cS16qRO82PrJTitwT2z57WezdEJ_QltmRysS6IEaujCYbgIEdVFkw/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');
        const prf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec');
        const pof_response_promise = fetch('https://script.google.com/macros/s/AKfycby9i2KfOZ_uF7-JUPX8qpXg7Jewmw6oU3EfUTpXiwnRRB91_qIW3xAVNy5SZBN1YhVzzg/exec');

        const [
            username_response,
            employee_response,
            client_list_response,
            type_of_waste_response,
            vehicle_response,
            vehicle_log_response,
            vehicle_maintenance_response,
            vehicle_maintenance_log_response,
            mtf_response,
            ltf_response,
            wcf_response,
            qlf_response,
            prf_response,
            pof_response,
        ] = await Promise.all([
            username_response_promise,
            employee_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            vehicle_response_promise,
            vehicle_log_response_promise,
            vehicle_maintenance_response_promise,
            vehicle_maintenance_log_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            qlf_response_promise,
            prf_response_promise,
            pof_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const employee_data_list  = await employee_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const vehicle_data_list  = await vehicle_response.json();
        const vehicle_log_data_list  = await vehicle_log_response.json();
        const vmr_data_list  = await vehicle_maintenance_response.json();
        const vmf_data_list  = await vehicle_maintenance_log_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const qlf_data_list  = await qlf_response.json();
        const prf_data_list  = await prf_response.json();
        const pof_data_list  = await pof_response.json();

        // Code that depends on the fetched data
        // username_data_list
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("#user");
        const departments = document.querySelectorAll("#department");

        const user_name = username_data_list.content[19][findTextInArray(username_data_list, "NAME")];
        users.forEach(user => {user.value = username_data_list.content[19][findTextInArray(username_data_list, "NAME")]})
        departments.forEach(user => {user.value = username_data_list.content[19][findTextInArray(username_data_list, "DEPARTMENT")]})
        user_sidebar.innerHTML = `<u>${username_data_list.content[19][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[19][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[19][findTextInArray(username_data_list, "DEPARTMENT")];
        
        // dashboard
        const dashboard_section = document.querySelector("#dashboard_section");
        const to_received_receiving = dashboard_section.querySelector("#to_received");
        const received_receiving = dashboard_section.querySelector("#received");
        const pending_receiving = dashboard_section.querySelector("#pending");
        const pending_list_receiving = dashboard_section.querySelector("#pending_list");
        const received_list_receiving = dashboard_section.querySelector("#received_list");
        const month_filter = document.getElementById("month_filter");

        var pending_array = [];
        var finish_array = [];
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
            pending_array = [];
            finish_array = [];
            for (let i = 1; i < vmf_data_list.content.length; i++) {
                if (!finish_array.includes(vmf_data_list.content[i][findTextInArray(vmf_data_list, "VMR #")])) {
                    finish_array.push(vmf_data_list.content[i][findTextInArray(vmf_data_list, "VMR #")]);
                }            
            }
            for (let i = 1; i < vmr_data_list.content.length; i++) {
                if (!finish_array.includes(vmr_data_list.content[i][findTextInArray(vmr_data_list, "VMR #")])) {
                    pending_array.push(vmr_data_list.content[i][findTextInArray(vmr_data_list, "VMR #")]);
                }
            }

            to_received_receiving.innerText = pending_array.length + finish_array.length;
            pending_receiving.innerText = pending_array.length;
            received_receiving.innerText = finish_array.length;
            
            var options = {
                series: [pending_array.length, finish_array.length],
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
                    fontSize: '25px', // Increase legend font size as needed
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
                labels: ["Pending", "Received"],
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

            var data_value = "";
            var data_value_counter = 1;
            for(let x = 1; x < vmr_data_list.content.length; x++){
                if(pending_array.includes(vmr_data_list.content[x][findTextInArray(vmr_data_list, "VMR #")])){
                    var type_of_vehicle
                    var vehicle
                    for(let y = 1; y < vehicle_data_list.content.length; y++){
                        if(vmr_data_list.content[x][findTextInArray(vmr_data_list, "PLATE #")] == vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "PLATE #")]){
                            vehicle = vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "VEHICLE")]
                            type_of_vehicle = vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]
                        }
                    }
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${vmr_data_list.content[x][findTextInArray(vmr_data_list, "VMR #")]}</td>
                        <td>${date_decoder(vmr_data_list.content[x][findTextInArray(vmr_data_list, "CREATED AT")])} /<br> ${time_decoder(vmr_data_list.content[x][findTextInArray(vmr_data_list, "CREATED AT")])}</td>
                        <td>${vmr_data_list.content[x][findTextInArray(vmr_data_list, "PLATE #")]}</td>
                        <td>${vehicle}</td>
                        <td>${type_of_vehicle}</td>
                        <td>${vmr_data_list.content[x][findTextInArray(vmr_data_list, "DETAILS")]}</td>
                        <td>${vmr_data_list.content[x][findTextInArray(vmr_data_list, "REQUISITIONER")]}</td>
                        <td>${vmr_data_list.content[x][findTextInArray(vmr_data_list, "SUBMITTED BY")]}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
            pending_list_receiving.innerHTML = data_value;

        }

        // vmf_data_list
        // FORM GENERATOR
        const vmf_form_no = document.querySelector("#vmf_form_no");
        var last_row = vmf_data_list.content.length -1;
        var data_info = vmf_data_list.content[last_row][findTextInArray(vmf_data_list, "VMF #")];
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
        vmf_form_no.value = `VMF${year}${month}${data_counter}`;    

        const search_vmr_form_no_button = document.querySelector("#search_vmr_form_no_button");
        const search_vmr_form_no = document.querySelector("#search_vmr_form_no");
        const search_vmr_result = document.querySelector("#search_vmr_result");
        const vmr_data = document.querySelector("#vmr_data");

        var data_value;
        search_vmr_form_no_button.addEventListener("click", () => {
            for(let x = 1; x < vmr_data_list.content.length; x++){
                if(search_vmr_form_no.value == vmr_data_list.content[x][findTextInArray(vmr_data_list, "VMR #")]){
                    var type_of_vehicle
                    var vehicle
                    for(let y = 1; y < vehicle_data_list.content.length; y++){
                        if(vmr_data_list.content[x][findTextInArray(vmr_data_list, "PLATE #")] == vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "PLATE #")]){
                            vehicle = vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "VEHICLE")]
                            type_of_vehicle = vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]
                        }
                    }
                    data_value = `
                    VMR #: ${vmr_data_list.content[x][findTextInArray(vmr_data_list, "VMR #")]}<br>
                    PLATE #: ${vmr_data_list.content[x][findTextInArray(vmr_data_list, "PLATE #")]}<br>
                    VEHICLE: ${vehicle}<br>
                    TYPE OF VEHICLE: ${type_of_vehicle}<br>
                    DETAILS: ${vmr_data_list.content[x][findTextInArray(vmr_data_list, "DETAILS")]}<br>
                    REQUISITIONER: ${vmr_data_list.content[x][findTextInArray(vmr_data_list, "REQUISITIONER")]}<br>
                    SUBMITTED BY: ${vmr_data_list.content[x][findTextInArray(vmr_data_list, "SUBMITTED BY")]}<br>
                    `
                    vmr_data.style.display = "block"
                }                        
                if(data_value == undefined){
                    search_vmr_result.innerHTML = `
                    <div class="search_ltf_result">
                    <h2>INFORMATION</h2>
                    No Data Found
                    </div><br>`            
                }
                else{
                    search_vmr_result.innerHTML = `
                    <div class="search_ltf_result">
                    <h2>INFORMATION</h2>
                    ${data_value}
                    </div><br>`
                }
            }
        })

        // multi section
        // purchase_request_form
        const purchase_request_form = document.querySelector("#purchase_request_form");
        const add_item_button = purchase_request_form.querySelector("#add_item_button");
        const remove_item_button = purchase_request_form.querySelector("#remove_item_button");
        const purchase_request_form_button = purchase_request_form.querySelector("#purchase_request_form_button");
        const purchase_request_list = purchase_request_form.querySelector("#purchase_request_list");
        const form_tab = purchase_request_form.querySelector("#form_tab");
        var prf_counter = purchase_request_form.querySelector("#prf_counter");
        var prf_form_no = [];
        
        function prf_generator() {
            var last_row = prf_data_list.content.length -1;        
            var data_info = prf_data_list.content[last_row][findTextInArray(prf_data_list, "ITM #")];
            var data_counter = data_info.substring(9,12) || 0;
            var year = new Date().getFullYear();
            var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        
            for (let y = 1; y <= prf_counter.value; y++) {
                prf_form_no[y] = document.querySelector(`#prf_form_no${y}`);
                prf_form_no[y].value = `ITM${year}${month}${((parseInt(data_counter) + y).toString().padStart(3,"0"))}`;
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
                            ITM #
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
            if(prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")] == user_name){
                if(prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")] == "PURCHASED"){
                    var pr_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]
                    var button = `
                    <form action="https://script.google.com/macros/s/AKfycbzVr8O3e2RcbQpgvexfEaxtZnDT6N5I4_l6uGI0bh81kBQVFZJcemVLvKW7pIRZ15Eg/exec" method="post">
                        <input type="hidden" name="itm_form_no" id="itm_form_no" value="${pr_data}">
                        <input type="hidden" name="timestamp" id="timestamp" value="${new Date()}">
                        <input type="hidden" name="user" id="user" value="${user_name}">
                        <button type="submit" style="background-color: transparent !important; padding:0; color: #198754; border: none">
                            <i class="fa-solid fa-clipboard-check"></i>
                        </button>
                    </form>
                    `
                    purchase_request_data_value += `
                    <tr>
                        <td>${purchase_request_data_value_counter}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]}</td>
                        <td>${date_decoder(prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")])}/<br>${time_decoder(prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")])}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")]}</td>
                        <td>${button}</td>
                    </tr>
                    `
                }
                else{
                    purchase_request_data_value += `
                    <tr>
                        <td>${purchase_request_data_value_counter}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]}</td>
                        <td>${date_decoder(prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")])}/<br>${time_decoder(prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")])}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")]}</td>
                        <td>${prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")]}</td>
                    </tr>
                    `
                }
                purchase_request_data_value_counter += 1;
            }
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
                    employee_name = employee_id;
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
                if(waste_id.substring(0, 8) == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                    waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                    break
                }
                else{
                    waste_code = "N/A";
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
                else{
                    waste_name = waste_id
                }
            }
            return waste_name
        }

        const generate_report_button = document.getElementById("generate_report_button");
        const close_report_button = document.getElementById("close_report_button");
        const report_generate_button = document.getElementById("report_generate_button");
        const report_download_button = document.getElementById("report_download_button");
        const generate_report_tab = document.getElementById("generate_report_tab");
        const report_date_from = document.getElementById("report_date_from");
        const report_date_to = document.getElementById("report_date_to");
        let currentPageHeight = 31;

        generate_report_button.addEventListener("click", () => {
            generate_report_tab.style.display = "block"
        })
        close_report_button.addEventListener("click", () => {
            generate_report_tab.style.display = "none"
        })

        report_generate_button.addEventListener("click", () => {
            const filteredData = [];
            const pageHeight = 500;
            const dataHeight = 31; // Adjust this value based on your content

            for(let x = 1; x < wcf_data_list.content.length; x++){
                var hauling_date = new Date(wcf_data_list.content[x][findTextInArray(wcf_data_list, "HAULING DATE")])
                var wcf_data = wcf_data_list.content[x][findTextInArray(wcf_data_list, "WCF #")]
                var date_data = wcf_data_list.content[x][findTextInArray(wcf_data_list, "ARRIVAL DATE")]
                var time_data = wcf_data_list.content[x][findTextInArray(wcf_data_list, "ARRIVAL TIME")]
                var client_id_data = wcf_data_list.content[x][findTextInArray(wcf_data_list, "CLIENT ID")]
                var waste_id_data = wcf_data_list.content[x][findTextInArray(wcf_data_list, "WASTE ID")]
                var type_of_vehicle_data = wcf_data_list.content[x][findTextInArray(wcf_data_list, "TYPE OF VEHICLE")]
                var plate_no_data = wcf_data_list.content[x][findTextInArray(wcf_data_list, "PLATE #")]
                var report_from = new Date(report_date_from.value)
                var report_to = new Date(report_date_to.value)
                var datePortion = date_data.split("T")[0];
                var timePortion = time_data.split("T")[1];
                var datetime = new Date(datePortion + "T" + timePortion);

                var mtf = "";
                var ltf = "";
                if((wcf_data_list.content[x][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                    mtf = wcf_data_list.content[x][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                }else{
                    ltf = wcf_data_list.content[x][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                    for(let y = 1; y < ltf_data_list.content.length; y++){
                        if(ltf == ltf_data_list.content[y][findTextInArray(ltf_data_list, "LTF #")]){
                            mtf = ltf_data_list.content[y][findTextInArray(ltf_data_list, "MTF #")];
                        }
                    }
                }

                if (hauling_date >= report_from && hauling_date <= report_to) {
                    filteredData.push({
                    wcf_data,
                    mtf,
                    hauling_date,
                    date_data,
                    time_data,
                    client_id_data,
                    waste_id_data,
                    type_of_vehicle_data,
                    plate_no_data,
                    datetime,
                    });
                }
            }
            
            // Sort the data by hauling date and time
            filteredData.sort((a, b) => a.datetime - b.datetime);
        
            // Render the sorted data
            filteredData.forEach((item) => {
                const page_number = document.getElementById("page_number");
                const report_tab_container = document.querySelector(`#report_tab_container`);
                const report_tab = document.querySelector(`#report_tab${page_number.value}`);
                const report_body = report_tab.querySelector("tbody");
                
                var data = `
                    <tr>
                        <td>${item.wcf_data}</td>
                        <td>${item.mtf}</td>
                        <td>${date_decoder(item.hauling_date)}</td>
                        <td>${date_decoder(item.date_data)}</td>
                        <td>${time_decoder(item.time_data)}</td>
                        <td>${findClientName(item.client_id_data)}</td>
                        <td>${findWasteName(item.client_id_data, item.waste_id_data)}</td>
                        <td>${item.type_of_vehicle_data}</td>
                        <td>${item.plate_no_data}</td>
                    </tr>
                `;

                const page_max_counter = document.querySelectorAll("#page_max_counter");
                page_max_counter.forEach((counter) => {
                    counter.innerText = `${page_number.value}`;
                })

                // Check if adding this data exceeds the current page height
                if (currentPageHeight + dataHeight > pageHeight) {
                    // If it exceeds, add a page break
                    report_body.insertAdjacentHTML("beforeend", "<div style='page-break-before: always;'></div>");
                    currentPageHeight = 0; // Reset the current page height
                    page_number.value = parseInt(page_number.value) + 1;
                    report_tab_container.insertAdjacentHTML("beforeend", 
                    `
                    <div id="report_tab${page_number.value}" class="report_tab">
                        <img src="../images/logo.png" alt="logo" style="height: 50px;">
                        <img src="../images/logo_name2.png" alt="logo" style="height: 50px; margin-top: 10px;"><hr>
                        <div style="position: relative;">
                            <h1 style="text-align: center; font-weight: bold; font-size: 32px;">WEEKLY REPORT</h1>
                            <h1 style="text-align: center; font-weight: bold;">RECEIVING</h1>
                            <h1 style="text-align: center; font-weight: bold;">LOGISTICS DEPARTMENT</h1>
                            <h3 id="date_covered" style="text-align: center;"></h3><br>
                            <div style="display: flex; position: absolute; right: 0; top: 0;">
                                <h6 id="page_counter${page_number.value}" style="margin-right: 5px;"></h6>
                                <h6 style="margin-right: 5px;">of</h6>
                                <h6 id="page_max_counter"></h6>
                            </div>
                        </div>
                        <div id="table_info">
                            <table>
                                <thead id="report_head">
                                    <tr>
                                        <th>WCF #</td>
                                        <th>MTF #</td>
                                        <th>HAULING DATE</th>
                                        <th>ARRIVAL DATE</th>
                                        <th>ARRIVAL TIME</th>
                                        <th>CLIENT</th>
                                        <th>TYPE OF WASTE</th>
                                        <th>TYPE OF VEHICLE</th>
                                        <th>PLATE #</th>
                                    </tr>
                                </thead>
                                <tbody id="report_body"></tbody>
                            </table>
                        </div>
                    </div>
                        `
                    )
                    const page_counter_new = document.querySelector(`#page_counter${page_number.value}`);
                    page_counter_new.innerText = `Page ${page_number.value}`
                    const page_max_counter = document.querySelectorAll("#page_max_counter");
                    page_max_counter.forEach((counter) => {
                        counter.innerText = `${page_number.value}`;
                    })
                }
                const page_counter = document.getElementById("page_counter1");
                page_counter.innerText = `Page 1`

                report_body.insertAdjacentHTML("beforeend", data);
                currentPageHeight += dataHeight;

            });
            
            const date_covered = document.querySelectorAll("#date_covered");
            date_covered.forEach((date) => {
                date.innerText = `${date_decoder(report_from)} - ${date_decoder(report_to)}`;
            })
            report_generate_button.style.display = "none";
            report_download_button.style.display = "block";
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
