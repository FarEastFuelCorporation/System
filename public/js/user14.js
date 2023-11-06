document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const prf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec');
        const pof_response_promise = fetch('https://script.google.com/macros/s/AKfycbzqVTd17rQV4G2nAWPDBoc2RNftAq92WL5DRsayPw98taWmzUIvhX9ppc27euLXjUe7PA/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');

        const [
            username_response,
            prf_response,
            pof_response,
            irf_response,
        ] = await Promise.all([
            username_response_promise,
            prf_response_promise,
            pof_response_promise,
            irf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const prf_data_list  = await prf_response.json();
        const pof_data_list  = await pof_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("#user");

        users.forEach(user => {user.value = username_data_list.content[14][findTextInArray(username_data_list, "NAME")]})
        user_sidebar.innerHTML = `<u>${username_data_list.content[14][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[14][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[14][findTextInArray(username_data_list, "DEPARTMENT")];

        // purchasing_dashboard
        const purchasing_dashboard = document.querySelector("#purchasing_dashboard");
        const pending_list_container_purchasing = purchasing_dashboard.querySelector("#pending_list");
        const history_list_container_purchasing = purchasing_dashboard.querySelector("#history_list");
        const pending_purchasing = purchasing_dashboard.querySelector("#pending");
        const requested_purchasing = purchasing_dashboard.querySelector("#requested");
        const approved_purchasing = purchasing_dashboard.querySelector("#approved");
        const released_purchasing = purchasing_dashboard.querySelector("#released");
        const purchased_purchasing = purchasing_dashboard.querySelector("#purchased");
        let prf_transaction = []; // Variable containing existing elements
        let prf_pr_transaction = []; // Variable containing existing elements
        
        const month_filter = document.getElementById("month_filter");
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
            var pending = [];
            var requested = [];
            var approved = [];
            var released = [];
            var purchased = [];
            for (let i = 1; i < prf_data_list.content.length; i++) {
                if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "PENDING") {
                    pending.push(prf_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
                }
                if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "REQUESTED") {
                    requested.push(prf_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
                }
                if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "APPROVED") {
                    approved.push(prf_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
                }
                if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "RELEASED") {
                    released.push(prf_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
                }
                if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "PURCHASED") {
                    purchased.push(prf_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
                }
            }
    
            for (let i = 1; i < pof_data_list.content.length; i++) {
                if (!prf_pr_transaction.includes(pof_data_list.content[i][findTextInArray(prf_data_list, "ITM #")])) {
                    prf_pr_transaction.push(pof_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
                }
            }
        
            pending_purchasing.innerText = pending.length;
            requested_purchasing.innerText = requested.length;
            approved_purchasing.innerText = approved.length;
            released_purchasing.innerText = released.length;
            purchased_purchasing.innerText = purchased.length;
    
            var options = {
                series: [pending.length, requested.length, approved.length, released.length, purchased.length],
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
                    fontSize: '20px', // Increase legend font size as needed
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
                labels: ["Pending", "Requested", "Approved", "Released", "Purchased"],
                colors: ["#dc3545", "#ffc107","#0dcaf0", "#0d6efd", "#198754"], // Specify solid colors here
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

            // pending_list
            var pending_data_value = "";
            var pending_data_value_counter = 1;
            var requested_data_value = "";
            var requested_data_value_counter = 1;
            var approved_data_value = "";
            var approved_data_value_counter = 1;
            var released_data_value = "";
            var released_data_value_counter = 1;
            var purchased_data_value = "";
            var purchased_data_value_counter = 1;
            for(let x = 1; x < prf_data_list.content.length; x++){  
                for(let y = 0; y < pending.length; y++){
                    if(pending[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                        var pr_data, date_time, quantity, unit, item, details, remarks, department, status, requisitioner;
                        pr_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
                        date_time = prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")];
                        quantity = prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")];
                        unit = prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")];
                        item = prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")];
                        details = prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")];
                        remarks = prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")];
                        department = prf_data_list.content[x][findTextInArray(prf_data_list, "DEPARTMENT")];
                        status = prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")];
                        requisitioner = prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")];
                        for(let z = 1; z < pof_data_list.content.length; z++){
                            if(pr_data == pof_data_list.content[z][findTextInArray(pof_data_list, "ITM #")]){
                                amount = pof_data_list.content[z][findTextInArray(pof_data_list, "AMOUNT")]
                            }
                        }
                        pending_data_value += `
                        <tr>
                            <td>${pending_data_value_counter}</td>
                            <td>${pr_data}</td>
                            <td>${date_decoder(date_time)} /<br> ${time_decoder(date_time)}</td>
                            <td>${quantity}</td>
                            <td>${unit}</td>
                            <td>${item}</td>
                            <td>${details}</td>
                            <td>${remarks}</td>
                            <td>${department}</td>
                            <td>${requisitioner}</td>
                            <td>${status}</td>
                        </tr>
                        `
                        pending_data_value_counter += 1;
                    }
                }
                for(let y = 0; y < requested.length; y++){
                    if(requested[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                        var pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner;
                        pr_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
                        date_time = prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")];
                        quantity = prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")];
                        unit = prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")];
                        item = prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")];
                        details = prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")];
                        remarks = prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")];
                        department = prf_data_list.content[x][findTextInArray(prf_data_list, "DEPARTMENT")];
                        status = prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")];
                        requisitioner = prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")];
                        for(let z = 1; z < pof_data_list.content.length; z++){
                            if(pr_data == pof_data_list.content[z][findTextInArray(pof_data_list, "ITM #")]){
                                amount = pof_data_list.content[z][findTextInArray(pof_data_list, "AMOUNT")]
                            }
                        }
                        requested_data_value += `
                        <tr>
                            <td>${requested_data_value_counter}</td>
                            <td>${pr_data}</td>
                            <td>${date_decoder(date_time)} /<br> ${time_decoder(date_time)}</td>
                            <td>${quantity}</td>
                            <td>${unit}</td>
                            <td>${item}</td>
                            <td>${details}</td>
                            <td>${remarks}</td>
                            <td>${department}</td>
                            <td>${requisitioner}</td>
                            <td>${amount}</td>
                            <td>${status}</td>
                        </tr>
                        `
                        requested_data_value_counter += 1;
                    }
                }
                for(let y = 0; y < approved.length; y++){
                    if(approved[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                        var pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner;
                        pr_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
                        date_time = prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")];
                        quantity = prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")];
                        unit = prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")];
                        item = prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")];
                        details = prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")];
                        remarks = prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")];
                        department = prf_data_list.content[x][findTextInArray(prf_data_list, "DEPARTMENT")];
                        status = prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")];
                        requisitioner = prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")];
                        for(let z = 1; z < pof_data_list.content.length; z++){
                            if(pr_data == pof_data_list.content[z][findTextInArray(pof_data_list, "ITM #")]){
                                amount = pof_data_list.content[z][findTextInArray(pof_data_list, "AMOUNT")]
                            }
                        }
                        approved_data_value += `
                        <tr>
                            <td>${approved_data_value_counter}</td>
                            <td>${pr_data}</td>
                            <td>${date_decoder(date_time)} /<br> ${time_decoder(date_time)}</td>
                            <td>${quantity}</td>
                            <td>${unit}</td>
                            <td>${item}</td>
                            <td>${details}</td>
                            <td>${remarks}</td>
                            <td>${department}</td>
                            <td>${requisitioner}</td>
                            <td>${amount}</td>
                            <td>${status}</td>
                        </tr>
                        `
                        approved_data_value_counter += 1;
                    }
                }
                for(let y = 0; y < released.length; y++){
                    if(released[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                        var pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner;
                        pr_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
                        date_time = prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")];
                        quantity = prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")];
                        unit = prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")];
                        item = prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")];
                        details = prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")];
                        remarks = prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")];
                        department = prf_data_list.content[x][findTextInArray(prf_data_list, "DEPARTMENT")];
                        status = prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")];
                        requisitioner = prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")];
                        for(let z = 1; z < pof_data_list.content.length; z++){
                            if(pr_data == pof_data_list.content[z][findTextInArray(pof_data_list, "ITM #")]){
                                amount = pof_data_list.content[z][findTextInArray(pof_data_list, "AMOUNT")]
                            }
                        }
                        released_data_value += `
                        <tr>
                            <td>${released_data_value_counter}</td>
                            <td>${pr_data}</td>
                            <td>${date_decoder(date_time)} /<br> ${time_decoder(date_time)}</td>
                            <td>${quantity}</td>
                            <td>${unit}</td>
                            <td>${item}</td>
                            <td>${details}</td>
                            <td>${remarks}</td>
                            <td>${department}</td>
                            <td>${requisitioner}</td>
                            <td>${amount}</td>
                            <td>${status}</td>
                        </tr>
                        `
                        released_data_value_counter += 1;
                    }
                }
                for(let y = 0; y < purchased.length; y++){
                    if(purchased[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                        var pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner;
                        pr_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
                        date_time = prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")];
                        quantity = prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")];
                        unit = prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")];
                        item = prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")];
                        details = prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")];
                        remarks = prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")];
                        department = prf_data_list.content[x][findTextInArray(prf_data_list, "DEPARTMENT")];
                        status = prf_data_list.content[x][findTextInArray(prf_data_list, "STATUS")];
                        requisitioner = prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")];
                        for(let z = 1; z < pof_data_list.content.length; z++){
                            if(pr_data == pof_data_list.content[z][findTextInArray(pof_data_list, "ITM #")]){
                                amount = pof_data_list.content[z][findTextInArray(pof_data_list, "AMOUNT")]
                            }
                        }
                        purchased_data_value += `
                        <tr>
                            <td>${purchased_data_value_counter}</td>
                            <td>${pr_data}</td>
                            <td>${date_decoder(date_time)} /<br> ${time_decoder(date_time)}</td>
                            <td>${quantity}</td>
                            <td>${unit}</td>
                            <td>${item}</td>
                            <td>${details}</td>
                            <td>${remarks}</td>
                            <td>${department}</td>
                            <td>${requisitioner}</td>
                            <td>${amount}</td>
                            <td>${status}</td>
                        </tr>
                        `
                        purchased_data_value_counter += 1;
                    }
                }
            }
            pending_list_container_purchasing.insertAdjacentHTML("beforeend", pending_data_value);
            history_list_container_purchasing.insertAdjacentHTML("beforeend", requested_data_value);
            history_list_container_purchasing.insertAdjacentHTML("beforeend", approved_data_value);
            history_list_container_purchasing.insertAdjacentHTML("beforeend", released_data_value);
            history_list_container_purchasing.insertAdjacentHTML("beforeend", purchased_data_value);
        }

        // pof_data_list
        // FORM GENERATOR
        const prf_form_no = document.getElementById("prf_form_no");
        var last_row = pof_data_list.content.length -1;
        var data_info = pof_data_list.content[last_row][findTextInArray(pof_data_list, "PRF #")];
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
        prf_form_no.value = `PRF${year}${month}${data_counter}`;
    
        const purchase_order_form = document.getElementById("purchase_order_form");
        const item_container_data = purchase_order_form.querySelector("#item_container_data");
        const total_amount_input = purchase_order_form.querySelector("#total_amount");
        const add_item_button = purchase_order_form.querySelector("#add_item_button");
        const remove_item_button = purchase_order_form.querySelector("#remove_item_button");
        
        function addItem(){
            const item_counter = purchase_order_form.querySelector("#item_counter");
            var template =
            `
            <div id="item_container" style="display: grid; grid-template-columns: 4fr 1fr; gap: 20px; gap: 20px;">
                <div>
                    <div style="display: grid; grid-template-columns: 1fr 2fr .5fr .5fr; gap: 20px;">
                        <div>
                            <label for="itm_form_no">
                                <i class="fa-solid fa-list-ol"></i>
                                ITM #
                            </label><br>
                            <div>
                                <input type="text" id="itm_form_no" name="itm_form_no${item_counter.value}" class="form-control" required autocomplete="off">
                            </div>
                        </div>
                        <div>
                            <label for="item">
                                <i class="fa-solid fa-list-ol"></i>
                                Item
                            </label><br>
                            <div>
                                <input type="text" id="item" name="item${item_counter.value}" class="form-control" required autocomplete="off">
                            </div>
                        </div>
                        <div>
                            <label for="quantity">
                                <i class="fa-solid fa-list-ol"></i>
                                Qty
                            </label><br>
                            <div>
                                <div>
                                    <input type="number" id="quantity" name="quantity${item_counter.value}" class="form-control" required autocomplete="off">
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="unit">
                                <i class="fa-solid fa-list-ol"></i>
                                Unit
                            </label><br>
                            <div>
                                <div>
                                    <input type="text" id="unit" name="unit${item_counter.value}" class="form-control" required autocomplete="off">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 20px;">
                        <div>
                            <label for="details">
                                <i class="fa-solid fa-list-ol"></i>
                                Details
                            </label><br>
                            <div>
                                <div>
                                    <input type="text" id="details" name="details${item_counter.value}" class="form-control" required autocomplete="off">
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="remarks">
                                <i class="fa-solid fa-list-ol"></i>
                                Remarks
                            </label><br>
                            <div>
                                <div>
                                    <input type="text" id="remarks" name="remarks${item_counter.value}" class="form-control" required autocomplete="off">
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="department">
                                <i class="fa-solid fa-list-ol"></i>
                                Department
                            </label><br>
                            <div>
                                <div>
                                    <input type="text" id="department" name="department${item_counter.value}" class="form-control" required autocomplete="off">
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="requisitioner">
                                <i class="fa-solid fa-list-ol"></i>
                                Requisitioner
                            </label><br>
                            <div>
                                <div>
                                    <input type="text" id="requisitioner" name="requisitioner${item_counter.value}" class="form-control" required autocomplete="off">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <label for="unit_cost">
                            <i class="fa-solid fa-list-ol"></i>
                            Unit Cost
                        </label><br>
                        <div>
                            <div>
                                <input type="number" id="unit_cost" name="unit_cost${item_counter.value}" class="form-control" required autocomplete="off" value="0">
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="amount">
                            <i class="fa-solid fa-list-ol"></i>
                            Amount
                        </label><br>
                        <div>
                            <div>
                                <input type="number" id="amount" name="amount${item_counter.value}" class="form-control" required autocomplete="off" value="0">
                            </div>
                        </div>
                    </div>
                </div><hr>
            </div>
            `
            item_container_data.insertAdjacentHTML("beforeend", template)

            autoFind();
        }

        addItem()

        add_item_button.addEventListener("click", () => {
            const item_counter = purchase_order_form.querySelector("#item_counter");
            item_counter.value = parseInt(item_counter.value) + 1;
            remove_item_button.style.display = "block"
            addItem();
        })
        remove_item_button.addEventListener("click", () => {
            const item_containers = purchase_order_form.querySelectorAll("#item_container");
            const item_counter = purchase_order_form.querySelector("#item_counter");
            item_counter.value = parseInt(item_counter.value) - 1;
            
            item_containers[item_counter.value].remove()

            if(item_counter.value == 1){
                remove_item_button.style.display = "none"
            }
        })

        function autoFind(){
            const item_containers = purchase_order_form.querySelectorAll("#item_container");
            item_containers.forEach((item) => {
                const itm_form_no = item.querySelector("#itm_form_no")
                const item_input = item.querySelector("#item")
                const quantity_input = item.querySelector("#quantity")
                const unit_input = item.querySelector("#unit")
                const details = item.querySelector("#details")
                const remarks_input = item.querySelector("#remarks")
                const departmentt_input = item.querySelector("#department")
                const requisitioner_input = item.querySelector("#requisitioner")
                const unit_cost_input = item.querySelector("#unit_cost")
                const amount_input = item.querySelector("#amount")
    
                itm_form_no.addEventListener("keyup", () => {
                    console.log("pass")
                    for(let x = 1; x < prf_data_list.content.length; x++){
                        var itm_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
                        var item_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")];
                        var quantity_data = prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")];
                        var unit_data = prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")];
                        var details_data = prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")];
                        var remarks_data = prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")];
                        var department_data = prf_data_list.content[x][findTextInArray(prf_data_list, "DEPARTMENT")];
                        var requisitioner_data = prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")];
                        console.log(itm_form_no.value)
                        console.log(itm_data)
                        if(itm_form_no.value == itm_data){
                            console.log("pass2")
                            item_input.value = item_data;
                            quantity_input.value = quantity_data;
                            unit_input.value = unit_data;
                            details.value = details_data;
                            remarks_input.value = remarks_data;
                            departmentt_input.value = department_data;
                            requisitioner_input.value = requisitioner_data;
                            break
                        }else{
                            item_input.value = "";
                            quantity_input.value = "";
                            unit_input.value = "";
                            details.value = "";
                            remarks_input.value = "";
                            departmentt_input.value = "";
                            requisitioner_input.value = "";
                        }
                    }
                })
                unit_cost_input.addEventListener("keyup", () => {
                    const unit_cost_inputs = document.querySelectorAll("#unit_cost")
                    amount_input.value = parseFloat(unit_cost_input.value) * parseFloat(quantity_input.value)
                    
                    var amount_data = 0;
                    unit_cost_inputs.forEach((data) => {
                        console.log("pass")
                        amount_data += parseFloat(data.value) * parseFloat(quantity_input.value);
                    })
                    total_amount_input.value = amount_data;
                })
            })
        }

        // // incident_history_list
        // var incident_history_data_value = "";
        // var incident_history_data_value_counter = 1;
        // for(let x = 1; x < irf_data_list.content.length; x++){
        //     incident_history_data_value += `
        //     <tr>
        //         <td>${incident_history_data_value_counter}</td>
        //         <td>${irf_data_list.content[x][1]}</td>
        //         <td>${date_decoder(irf_data_list.content[x][6])} /<br> ${time_decoder(irf_data_list.content[x][7])}</td>
        //         <td>${irf_data_list.content[x][3]}</td>
        //         <td>${irf_data_list.content[x][2]}</td>
        //         <td>${irf_data_list.content[x][4]}</td>
        //         <td>${irf_data_list.content[x][8]}</td>
        //         <td>${date_decoder(irf_data_list.content[x][9])} /<br> ${time_decoder(irf_data_list.content[x][10])}</td>
        //         <td>${calculateTravelTime(date_decoder(irf_data_list.content[x][6]),time_decoder(irf_data_list.content[x][7]),date_decoder(irf_data_list.content[x][9]),time_decoder(irf_data_list.content[x][10]))}</td>
        //     </tr>
        //     `
        //     incident_history_data_value_counter += 1;
        // }
        // incident_history_list.innerHTML = incident_history_data_value;

        // // incident report form
        // const today = new Date();
        // const today_year = today.getFullYear();
        // const today_month = today.getMonth()+1;
        // var month_new;
        // var irf_code_year_month;
        // var data_counter;

        // irf_code_year_month = `IRF${today_year}${month_new}`;

        // var data_content = 1;
        // var data_info;
        // var data_last_3digit = 0;
    
        // for(x=1; x<irf_data_list.content.length; x++){
        //     data_info = irf_data_list.content[x][1];
            
        //     if(data_info.includes(irf_code_year_month) == true){
        //         data_last_3digit = data_info.slice(9)
        //     }
        // }

        // data_content = parseInt(data_last_3digit) +1
    
        // if(data_content.toString().length == 1){
        //     data_counter = `00${data_content}`;
        // }
        // else if(data_content.toString().length == 2){
        //     data_counter = `0${data_content}`;
        // }
        // else if(data_content.toString().length == 3){
        //     data_counter = `${data_content}`;
        // }
    
        // irf_form_no.value = `${irf_code_year_month}${data_counter}`
    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
