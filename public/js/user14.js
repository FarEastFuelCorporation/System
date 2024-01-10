document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const supplier_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbx4b5_3pU4WmzId9E8dDHWQy4tZO2AiNUvNqDhFGuccx89OyEAT6KrGCEDvGZM9SF90/exec');
        const prf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec');
        const pof_response_promise = fetch('https://script.google.com/macros/s/AKfycbzqVTd17rQV4G2nAWPDBoc2RNftAq92WL5DRsayPw98taWmzUIvhX9ppc27euLXjUe7PA/exec');
        const stf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwj90Rla-HId1Oa61WeMKxqJDJUq-n1mvHYi8wXpRMhU34UNxtQpxTG1DytiKpeY4DL/exec');
        const iid_response_promise = fetch('https://script.google.com/macros/s/AKfycbyaV_cnq0bfOWPgDTfyrit-nCAMwyI5Vw1xlx47RNSoSEBd8PyMw3-0UeNlojqBKgk/exec');
        const wsf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxNmSYTrW2BWirX6dk1DKzJ0F2HmMlkNkdmGGZFoRIt5rW88RjqaUXMh41k_qM8pwjb/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');

        const [
            username_response,
            employee_response,
            supplier_list_response,
            prf_response,
            pof_response,
            stf_response,
            iid_response,
            wsf_response,
            irf_response,
        ] = await Promise.all([
            username_response_promise,
            employee_response_promise,
            supplier_list_response_promise,
            prf_response_promise,
            pof_response_promise,
            stf_response_promise,
            iid_response_promise,
            wsf_response_promise,
            irf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const employee_data_list  = await employee_response.json();
        const supplier_data_list  = await supplier_list_response.json();
        const prf_data_list  = await prf_response.json();
        const pof_data_list  = await pof_response.json();
        const stf_data_list  = await stf_response.json();
        const iid_data_list  = await iid_response.json();
        const wsf_data_list  = await wsf_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data3
        const profile_picture = document.getElementById("profile_picture");
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("#user");

        const user_name = username_data_list.content[14][findTextInArray(username_data_list, "NAME")];
        profile_picture.src = `../images/profile_picture/${username_data_list.content[14][findTextInArray(username_data_list, "PICTURE")]}`;
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
        const received_purchasing = purchasing_dashboard.querySelector("#received");
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
            var received = [];
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
                if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "RECEIVED") {
                    received.push(prf_data_list.content[i][findTextInArray(prf_data_list, "ITM #")]);
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
            received_purchasing.innerText = received.length;
    
            var options = {
                series: [pending.length, requested.length, approved.length, released.length, purchased.length, received.length],
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
                labels: ["Pending", "Requested", "Approved", "Released", "Purchased", "Received"],
                colors: ["#dc3545", "#ffc107", "#fd7e14", "#0dcaf0", "#0d6efd", "#198754"], // Specify solid colors here
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
            var received_data_value = "";
            var received_data_value_counter = 1;
            for(let x = 1; x < prf_data_list.content.length; x++){  
                for(let y = 0; y < pending.length; y++){
                    if(pending[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                        var pr_no, pr_data, date_time, quantity, unit, item, details, remarks, department, status, requisitioner;
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
                                pr_no = pof_data_list.content[z][findTextInArray(pof_data_list, "PRF #")]
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
                        var pr_no, pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner;
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
                                pr_no = pof_data_list.content[z][findTextInArray(pof_data_list, "PRF #")]
                            }
                        }
                        requested_data_value += `
                        <tr>
                            <td>${requested_data_value_counter}</td>
                            <td>${pr_no}</td>
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
                        var pr_no, pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner;
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
                                pr_no = pof_data_list.content[z][findTextInArray(pof_data_list, "PRF #")]
                            }
                        }
                        approved_data_value += `
                        <tr>
                            <td>${approved_data_value_counter}</td>
                            <td>${pr_no}</td>
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
                for(let y = 0; y < purchased.length; y++){
                    if(purchased[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                        var pr_no, pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner;
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
                                pr_no = pof_data_list.content[z][findTextInArray(pof_data_list, "PRF #")]
                            }
                        }
                        purchased_data_value += `
                        <tr>
                            <td>${purchased_data_value_counter}</td>
                            <td>${pr_no}</td>
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
                for(let y = 0; y < received.length; y++){
                    if(received[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                        var pr_no, pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner;
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
                                pr_no = pof_data_list.content[z][findTextInArray(pof_data_list, "PRF #")]
                            }
                        }
                        received_data_value += `
                        <tr>
                            <td>${received_data_value_counter}</td>
                            <td>${pr_no}</td>
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
                        received_data_value_counter += 1;
                    }
                }
            }

            for(let x = 1; x < prf_data_list.content.length; x++){  
                for(let y = 0; y < released.length; y++){
                    if(released[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                        var pr_no, pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner, button, button2;
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
                                pr_no = pof_data_list.content[z][findTextInArray(pof_data_list, "PRF #")]
                            }
                        }
                        button = `
                        <form action="https://script.google.com/macros/s/AKfycbz6Ldg1tPj8y7474gYLrpRjtvcI9uw_RLaFUOK02WCpbe25mt-Z0UO76PbxcvLgJKGFlA/exec" method="post">
                            <input type="hidden" name="itm_form_no" id="itm_form_no" value="${pr_data}">
                            <input type="hidden" name="timestamp" id="timestamp" value="${new Date()}">
                            <input type="hidden" name="user" id="user" value="${user_name}">
                            <button type="submit" style="background-color: transparent !important; padding:0; color: #198754; border: none">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </form>
                        `
                        // button2 = `
                        // <form action="https://script.google.com/macros/s/AKfycbx5SYw9DIYhoeFs656bTN-5G8qCcbrWnH5saJzZEeptNXL04S-dFQgbu10ecNU-s2hu2w/exec" method="post">
                        // <input type="hidden" name="itm_form_no" id="itm_form_no" value="${pr_data}">
                        // <input type="hidden" name="timestamp" id="timestamp" value="${new Date()}">
                        // <button type="submit" style="background-color: transparent !important; padding:0; color: #dc3545; border: none">
                        //         <i class="fa-solid fa-thumbs-down"></i>
                        //     </button>
                        // </form>
                        // `
    
                        released_data_value += `
                        <tr>
                            <td>${released_data_value_counter}</td>
                            <td>${pr_no}</td>
                            <td>${pr_data}</td>
                            <td>${date_decoder(date_time)} /<br> ${time_decoder(date_time)}</td>
                            <td>${quantity}</td>
                            <td>${unit}</td>
                            <td>${item}</td>
                            <td>${details}</td>
                            <td>${remarks}</td>
                            <td>${department}</td>
                            <td>${requisitioner}</td>
                            <td>${formatNumber(amount)}</td>
                            <td>${status}</td>
                            <td>${button}</td>
                        </tr>
                        `
                        released_data_value_counter += 1;
                    }
                }
            }
            history_list_container_purchasing.innerHTML = released_data_value;
    
            pending_list_container_purchasing.insertAdjacentHTML("beforeend", pending_data_value);
            history_list_container_purchasing.insertAdjacentHTML("beforeend", approved_data_value);
            history_list_container_purchasing.insertAdjacentHTML("beforeend", requested_data_value);
            history_list_container_purchasing.insertAdjacentHTML("beforeend", purchased_data_value);
            history_list_container_purchasing.insertAdjacentHTML("beforeend", received_data_value);
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
            data_counter = data_info.substring(9,13);
        }
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(3,7);
        if(last_counter_year == current_year){
            prf_form_no.value = `PRF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            prf_form_no.value = `PRF${current_year}${month}${data_counter}`;
        }
    
        const purchase_order_form = document.getElementById("purchase_order_form");
        const item_container_data = purchase_order_form.querySelector("#item_container_data");
        const total_amount_input = purchase_order_form.querySelector("#total_amount");
        const add_item_button = purchase_order_form.querySelector("#add_item_button");
        const remove_item_button = purchase_order_form.querySelector("#remove_item_button");
        
        // supplier_data_list
        const search_wrapper2 = document.getElementById("search_supplier_name");
        const input_box2 = search_wrapper2.querySelector("input");
        const sugg_box2 = search_wrapper2.querySelector(".autocom_box");
        const address = purchase_order_form.querySelector("#address");
        var data_value = [];
        var data_value_address = [];

        for (x = 1; x < supplier_data_list.content.length; x++) {
            data_value.push(supplier_data_list.content[x][findTextInArray(supplier_data_list, "SUPPLIER")]);
            data_value_address.push(supplier_data_list.content[x][findTextInArray(supplier_data_list, "ADDRESS")]);
        }
        input_box2.onkeyup = (e) => {
            let user_data = e.target.value;
            let empty_array = [];
            if (user_data) {
                empty_array = data_value.filter((data) => {
                    return data.toLocaleLowerCase().includes(user_data.toLocaleLowerCase());
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
                select2(e.target.innerText);
            }
        });
        function select2(element) {
            let select_user_data = element;
            input_box2.value = select_user_data;
            search_wrapper2.classList.remove("active");
            for(let x = 1; x < supplier_data_list.content.length; x++){
                if(select_user_data == supplier_data_list.content[x][findTextInArray(supplier_data_list, "SUPPLIER")]){
                    address.value = supplier_data_list.content[x][findTextInArray(supplier_data_list, "ADDRESS")]
                }
            }
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
                                <input type="text" id="item" name="item${item_counter.value}" class="form-control" required readonly autocomplete="off">
                            </div>
                        </div>
                        <div>
                            <label for="quantity">
                                <i class="fa-solid fa-list-ol"></i>
                                Qty
                            </label><br>
                            <div>
                                <div>
                                    <input type="number" id="quantity" name="quantity${item_counter.value}" class="form-control" required readonly autocomplete="off">
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
                                    <input type="text" id="unit" name="unit${item_counter.value}" class="form-control" required readonly autocomplete="off">
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
                                    <input type="text" id="details" name="details${item_counter.value}" class="form-control" required readonly autocomplete="off">
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
                                    <input type="text" id="remarks" name="remarks${item_counter.value}" class="form-control" required readonly autocomplete="off">
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
                                    <input type="text" id="department" name="department${item_counter.value}" class="form-control" required readonly autocomplete="off">
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
                                    <input type="text" id="requisitioner" name="requisitioner${item_counter.value}" class="form-control" required readonly autocomplete="off">
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
                                <input type="number" id="amount" name="amount${item_counter.value}" class="form-control" required readonly autocomplete="off" value="0">
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
                    for(let x = 1; x < prf_data_list.content.length; x++){
                        var itm_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
                        var item_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")];
                        var quantity_data = prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")];
                        var unit_data = prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")];
                        var details_data = prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")];
                        var remarks_data = prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")];
                        var department_data = prf_data_list.content[x][findTextInArray(prf_data_list, "DEPARTMENT")];
                        var requisitioner_data = prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")];
                        if(itm_form_no.value == itm_data){
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
                    var amount_data = 0;
                    const amount_inputs = document.querySelectorAll("#amount")
                    amount_input.value = parseFloat(unit_cost_input.value) * parseFloat(quantity_input.value)
                    
                    amount_inputs.forEach((data) => {
                        amount_data += parseFloat(data.value);
                    })
                    total_amount_input.value = amount_data;
                })
            })
        }

        // supplier_list_section
        // supplier_data_list
        const supplier_id = document.getElementById("supplier_id");
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        var code_year_month;
        var data_counter;
        
        // FORM GENERATOR
        
        code_year_month = `S${today_year}`;
        
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
        
        for(x=1; x<supplier_data_list.content.length; x++){
            data_info = supplier_data_list.content[x][findTextInArray(supplier_data_list, "SUPPLIER ID")];
            
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
        
        supplier_id.value = `${code_year_month}${data_counter}`

        const supplier_list = document.getElementById("supplier_list")
        var supplier_data_list_value = "";
        var data_value_counter = 1;
        for(let x = 1; x < supplier_data_list.content.length; x++){
            supplier_data_list_value += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${supplier_data_list.content[x][findTextInArray(supplier_data_list, "SUPPLIER ID")]}</td>
                <td>${supplier_data_list.content[x][findTextInArray(supplier_data_list, "SUPPLIER")]}</td>
                <td>${supplier_data_list.content[x][findTextInArray(supplier_data_list, "CONTACT PERSON")]}</td>
                <td>${supplier_data_list.content[x][findTextInArray(supplier_data_list, "CONTACT NUMBER")]}</td>
                <td>${supplier_data_list.content[x][findTextInArray(supplier_data_list, "TIN #")]}</td>
                <td>${supplier_data_list.content[x][findTextInArray(supplier_data_list, "ADDRESS")]}</td>
            </tr>
            `
            data_value_counter += 1;
        }
        supplier_list.innerHTML = supplier_data_list_value;
        
        const supplier_list_section = document.querySelector("#supplier_list_section");
        const new_supplier_form_tab_supplier_list_section = supplier_list_section.querySelector("#new_supplier_form_tab");
        const new_supplier_button_supplier_list_section = supplier_list_section.querySelector("#new_supplier_button");
        const update_record_button_supplier_list_section = supplier_list_section.querySelector("#update_record_button");
        const suppler_form_tab_supplier_list_section = supplier_list_section.querySelector("#update_supplier_form_tab");
        const search_supplier_id_button_update_supplier_form = suppler_form_tab_supplier_list_section.querySelector("#search_supplier_id_button");
        const search_supplier_id_update_supplier_form = suppler_form_tab_supplier_list_section.querySelector("#supplier_id");
        const supplier_name_update_supplier_form = suppler_form_tab_supplier_list_section.querySelector("#supplier_name");
        const contact_person_update_supplier_form = suppler_form_tab_supplier_list_section.querySelector("#contact_person");
        const contact_number_update_supplier_form = suppler_form_tab_supplier_list_section.querySelector("#contact_number");
        const tin_no_update_supplier_form = suppler_form_tab_supplier_list_section.querySelector("#tin_no");
        const address_update_supplier_form = suppler_form_tab_supplier_list_section.querySelector("#address");
        const timestamp_update_supplier_form = suppler_form_tab_supplier_list_section.querySelector("#timestamp");
        const update_supplier_form_tab_container = suppler_form_tab_supplier_list_section.querySelector("#update_supplier_form_tab_container");

        new_supplier_button_supplier_list_section.addEventListener("click", () => {
            if(new_supplier_form_tab_supplier_list_section.style.display == "block"){
                new_supplier_form_tab_supplier_list_section.style.display = "none";
            }
            else{
                new_supplier_form_tab_supplier_list_section.style.display = "block";
                suppler_form_tab_supplier_list_section.style.display = "none";
            }
        })
        update_record_button_supplier_list_section.addEventListener("click", () => {
            if(suppler_form_tab_supplier_list_section.style.display == "block"){
                suppler_form_tab_supplier_list_section.style.display = "none";
            }
            else{
                suppler_form_tab_supplier_list_section.style.display = "block";
                new_supplier_form_tab_supplier_list_section.style.display = "none";
            }
        })
        search_supplier_id_button_update_supplier_form.addEventListener("click", () => {
            for(let x = 1; x < supplier_data_list.content.length; x++){
                if(search_supplier_id_update_supplier_form.value == supplier_data_list.content[x][findTextInArray(supplier_data_list, "SUPPLIER ID")]){
                    supplier_name_update_supplier_form.value = supplier_data_list.content[x][findTextInArray(supplier_data_list, "SUPPLIER")];
                    contact_person_update_supplier_form.value = supplier_data_list.content[x][findTextInArray(supplier_data_list, "CONTACT PERSON")];
                    contact_number_update_supplier_form.value = supplier_data_list.content[x][findTextInArray(supplier_data_list, "CONTACT NUMBER")];
                    tin_no_update_supplier_form.value = supplier_data_list.content[x][findTextInArray(supplier_data_list, "TIN #")];
                    address_update_supplier_form.value = supplier_data_list.content[x][findTextInArray(supplier_data_list, "ADDRESS")];
                    timestamp_update_supplier_form.value = supplier_data_list.content[x][findTextInArray(supplier_data_list, "CREATED AT")];
                    update_supplier_form_tab_container.style.display = "block"
                }
            }
        })

        // multi section
        // FORM GENERATOR
        // supplies_warehouse
        const wsf_form_no = document.getElementById("wsf_form_no");
        var last_row = wsf_data_list.content.length -1;
        var data_info = wsf_data_list.content[last_row][findTextInArray(wsf_data_list, "WSF #")];
        var data_counter;
        if(last_row == 0){
            data_counter = 0;
        }
        else{
            data_counter = data_info.substring(9,13);
        }
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(3,7);
        if(last_counter_year == current_year){
            wsf_form_no.value = `WSF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            wsf_form_no.value = `WSF${current_year}${month}${data_counter}`;
        }

        const supplies_warehouse = document.querySelector("#supplies_warehouse");
        const withdrawal_form_button = supplies_warehouse.querySelector("#withdrawal_form_button");
        const form_tab_supplies_transaction = supplies_warehouse.querySelector("#form_tab");
        const add_item_button_supplies_warehouse = supplies_warehouse.querySelector("#add_item_button");
        const remove_item_button_supplies_warehouse = supplies_warehouse.querySelector("#remove_item_button");
        const purpose_container_supplies_warehouse = supplies_warehouse.querySelector("#purpose_container");

        withdrawal_form_button.addEventListener("click", () => {
            if(form_tab_supplies_transaction.style.display == "none"){
                form_tab_supplies_transaction.style.display = "block"
            } else{
                form_tab_supplies_transaction.style.display = "none"
            }
        })
        addIIDItem()
        add_item_button_supplies_warehouse.addEventListener("click", () => {
            addIIDItem()
            remove_item_button_supplies_warehouse.style.display = "block"
        })
        remove_item_button_supplies_warehouse.addEventListener("click", () => {
            const iid_counter = document.getElementById("iid_counter");
            const iid_container = document.querySelector(`#iid_container${iid_counter.value}`)
            iid_container.remove();
            if(iid_counter.value == 1){
                remove_item_button_supplies_warehouse.style.display = "none"
            }
            iid_counter.value = parseInt(iid_counter.value) - 1;
        })

        var iid_no_array = [];
        var iid_item_array = [];
        var table_data_counter = 1;
        for(let x = 1; x < iid_data_list.content.length; x++){
            var quantity = 0
            var total_amount = 0
            var iid_no = iid_data_list.content[x][findTextInArray(iid_data_list, "IID #")]
            for(let y = 1; y < stf_data_list.content.length; y++){
                if(iid_no == stf_data_list.content[y][findTextInArray(stf_data_list, "IID #")]){
                    if(stf_data_list.content[y][findTextInArray(stf_data_list, "TRANSACTION")] == "RE-STOCK"){
                        quantity += stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")];
                        total_amount += (stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")] * stf_data_list.content[y][findTextInArray(stf_data_list, "AMOUNT")]);
                    }
                    else if(stf_data_list.content[y][findTextInArray(stf_data_list, "TRANSACTION")] == "WITHDRAW"){
                        quantity -= stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")];
                        total_amount -= (stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")] * stf_data_list.content[y][findTextInArray(stf_data_list, "AMOUNT")]);
                    }
                    else if(stf_data_list.content[y][findTextInArray(stf_data_list, "TRANSACTION")] == "NEW ITEM"){
                        quantity += stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")];
                        total_amount += (stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")] * stf_data_list.content[y][findTextInArray(stf_data_list, "AMOUNT")]);
                    }
                }
            }
            var table_data_supplies_inventory =
            `
            <tr>
                <td>${table_data_counter}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "IID #")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "STORAGE TYPE")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "RACK/ PALLET")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "LEVEL")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "ITEM")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "DESCRIPTION")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "UNIT")]}</td>
                <td>${quantity}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "SUBMITTED BY")]}</td>
            </tr>
            `
            table_data_counter += 1;
            iid_no_array.push(iid_data_list.content[x][findTextInArray(iid_data_list, "IID #")])
            iid_item_array.push(iid_data_list.content[x][findTextInArray(iid_data_list, "ITEM")])
            supplies_inventory_list.insertAdjacentHTML("beforeend", table_data_supplies_inventory)
        }

        function addIIDItem(){
            const iid_counter = document.getElementById("iid_counter");
            iid_counter.value = parseInt(iid_counter.value) + 1;
            var iid_data = 
            `
            <div id="iid_container${iid_counter.value}" class="iid_container" style="display: flex; gap: 20px;">
                <div id="iid_form_no">
                    <label for="iid_form_no${iid_counter.value}">
                        <i class="fa-solid fa-list-ol"></i>
                        IID #
                    </label><br>
                    <div class="form">
                        <input type="text" id="iid_form_no${iid_counter.value}" name="iid_form_no${iid_counter.value}" required autocomplete="off" class="form-control">
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px">
                    <div>
                        <label for="item${iid_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Item
                        </label>
                        <input type="text" id="item${iid_counter.value}" name="item${iid_counter.value}" autocomplete="off" class="form-control" required readonly placeholder="Autofind">
                    </div>
                    <div>
                        <label for="quantity${iid_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Quantity
                        </label>
                        <input type="text" id="quantity" name="quantity${iid_counter.value}" autocomplete="off" class="form-control" required placeholder="Input Quantity">
                    </div>
                </div>
            </div><hr>
            `
            purpose_container_supplies_warehouse.insertAdjacentHTML("beforebegin", iid_data)

            const iid_form_no = supplies_warehouse.querySelector(`#iid_form_no${iid_counter.value}`);
            const item = supplies_warehouse.querySelector(`#item${iid_counter.value}`);
            iid_form_no.addEventListener("keyup", () => {
                for(let x = 0; x < iid_no_array.length; x++){
                    if(iid_form_no.value == iid_no_array[x]){
                        for(let y = 1; y < iid_data_list.content.length; y++){
                            if(iid_form_no.value == iid_data_list.content[y][findTextInArray(iid_data_list, "IID #")]){
                                item.value = `${iid_data_list.content[y][findTextInArray(iid_data_list, "ITEM")]} ${iid_data_list.content[y][findTextInArray(iid_data_list, "DESCRIPTION")]}`;
                                break
                            }
                            else{
                                item.value = "No Item Found"
                            }
                        }
                    }
                }
            })
        }
                
        // incident report form
        const irf_form_no = document.getElementById("irf_form_no");
        var last_row = irf_data_list.content.length -1;        
        var data_info = irf_data_list.content[last_row][findTextInArray(irf_data_list, "IRF #")];
        var data_counter = data_info.substring(9,13);
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(3,7);
        if(last_counter_year == current_year){
            irf_form_no.value = `IRF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            irf_form_no.value = `IRF${current_year}${month}${data_counter}`;
        }
    

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
                        return data.toLocaleLowerCase().includes(user_data.toLocaleLowerCase());
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

    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
