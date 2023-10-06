document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const treatment_process_response_promise = fetch('https://script.google.com/macros/s/AKfycbzlzR7zmvdHSz4JpeXtEzPE4OQckTIVaE6PBw5IYwlqmmeIprQxEKkp4d2Jb1kBcgndzA/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
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
            mtf_response,
            ltf_response,
            wcf_response,
            sf_response,
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
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise,
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
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
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
        const user = username_data_list.content[25][findTextInArray(username_data_list, "NAME")];

        users.forEach(user => {user.value = username_data_list.content[25][findTextInArray(username_data_list, "NAME")]})
        user_sidebar.innerHTML = `<u>${username_data_list.content[25][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[25][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[25][findTextInArray(username_data_list, "DEPARTMENT")];
        
        // marketing_dashboard
        const booked_transactions_marketing = document.getElementById("booked_transactions");
        const on_hauling_marketing = document.getElementById("on_hauling");
        const pending_marketing = document.getElementById("pending");
        const received_marketing = document.getElementById("received");
        const pending_list_marketing = document.getElementById("pending_list");
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
            var for_logistics_pending_counter_marketing = 0;
            var for_logistics_on_haul_counter_marketing = 0;
            var for_logistics_received_counter_marketing = 0;
            var for_receiving_pending_counter_marketing = 0;
            var for_receiving_received_counter_marketing = 0;    
            var data_value_counter = 1;
            var data_value = "";
            for(let j = mtf_data_list.content.length - 1; j >= 1; j--){
                if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMITTED BY")] == user){
                    var status = "PENDING";
                    var vehicle = "";
                    // for logistics
                    if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS" &&
                    month_filter.value == formatMonth(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])){
                        vehicle = mtf_data_list.content[j][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")];
                        for(let k = 1; k < ltf_data_list.content.length; k++){
                            if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")] == ltf_data_list.content[k][findTextInArray(ltf_data_list, "MTF #")]){
                                status = "ON HAULING";
                                for_logistics_on_haul_counter_marketing += 1;
                                for_logistics_pending_counter_marketing -= 1;
                                for(let m = 1; m < wcf_data_list.content.length; m++){
                                    if(ltf_data_list.content[k][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                        status = "RECEIVED";
                                        for_logistics_received_counter_marketing += 1;
                                        for_logistics_on_haul_counter_marketing -= 1;
                                    }
                                }
                            }
                        }
                        for_logistics_pending_counter_marketing += 1;
                    }
                    else if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS" &&
                    month_filter.value == "ALL"){
                        vehicle = mtf_data_list.content[j][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")];
                        for(let k = 1; k < ltf_data_list.content.length; k++){
                            if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")] == ltf_data_list.content[k][findTextInArray(ltf_data_list, "MTF #")]){
                                status = "ON HAULING";
                                for_logistics_on_haul_counter_marketing += 1;
                                for_logistics_pending_counter_marketing -= 1;
                                for(let m = 1; m < wcf_data_list.content.length; m++){
                                    if(ltf_data_list.content[k][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
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
                    else if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "RECEIVING" &&
                    month_filter.value == formatMonth(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])){
                        vehicle = "PROVIDED BY CLIENT";
                        for(let m = 1; m < wcf_data_list.content.length; m++){
                            if((wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).slice(0,3) == "MTF"){
                                if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")] == wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                    status = "RECEIVED";
                                    for_receiving_received_counter_marketing += 1;
                                    for_receiving_pending_counter_marketing -= 1;
                                }
                            }
                        }
                        for_receiving_pending_counter_marketing += 1;
                    }
                    else if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "RECEIVING" &&
                    month_filter.value == "ALL"){
                        vehicle = "PROVIDED BY CLIENT";
                        for(let m = 1; m < wcf_data_list.content.length; m++){
                            if((wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF/ MTF  #")]).slice(0,3) == "MTF"){
                                if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")] == wcf_data_list.content[m][findTextInArray(wcf_data_list, "LTF/ MTF  #")]){
                                    status = "RECEIVED";
                                    for_receiving_received_counter_marketing += 1;
                                    for_receiving_pending_counter_marketing -= 1;
                                }
                            }
                        }
                        for_receiving_pending_counter_marketing += 1;
                    }
                    if(month_filter.value == formatMonth(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])){
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")]}</td>
                            <td>${date_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])} /<br> ${time_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING TIME")])}</td>
                            <td>${findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")], (mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")]))}</td>
                            <td>${vehicle}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")]}</td>
                            <td>${status}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "REMARKS")]}</td>
                        </tr>
                        `
                        
                        data_value_counter += 1;
                        pending_list_marketing.innerHTML = data_value;
                    }
                    else if(month_filter.value == "ALL"){
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")]}</td>
                            <td>${date_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])} /<br> ${time_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING TIME")])}</td>
                            <td>${findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")], (mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")]))}</td>
                            <td>${vehicle}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")]}</td>
                            <td>${status}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "REMARKS")]}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                        pending_list_marketing.innerHTML = data_value;
                    }
                }
            }
            booked_transactions_marketing.innerText = for_logistics_on_haul_counter_marketing + for_logistics_pending_counter_marketing + for_receiving_pending_counter_marketing + for_logistics_received_counter_marketing + for_receiving_received_counter_marketing;
            on_hauling_marketing.innerText = for_logistics_on_haul_counter_marketing;
            pending_marketing.innerText = for_logistics_pending_counter_marketing + for_receiving_pending_counter_marketing;
            received_marketing.innerText = for_logistics_received_counter_marketing + for_receiving_received_counter_marketing;
    
            var options = {
                series: [for_logistics_pending_counter_marketing + for_receiving_pending_counter_marketing, for_logistics_on_haul_counter_marketing, for_logistics_received_counter_marketing + for_receiving_received_counter_marketing],
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
                labels: ["Pending", "Ongoing", "Received"],
                colors: ["#dc3545", "#c3c3c3", "#198754"], // Specify solid colors here
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
                mtf_data.style.display = "block";
                
                // type_of_waste_data_list
                const type_of_waste = document.getElementById("type_of_waste");
                const type_of_vehicle = document.getElementById("type_of_vehicle");
                
                for (let y = 1; y < client_data_list.content.length; y++) {
                    if (input_box.value == client_data_list.content[y][1]) {
                        var client_id = "";
                        client_id = client_data_list.content[y][findTextInArray(client_data_list, "CLIENT ID")];
                        for (let x = 1; x < qlf_data_list.content.length; x++) {
                            if (client_id == qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")] && qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT")] !== "TRIP") {
                                var data = `
                                <option value="${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]}">${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")]}</option>
                                `
                                type_of_waste.insertAdjacentHTML("beforeend", data)
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

        var waste_name_list = [];
        for (x = 1; x < type_of_waste_data_list.content.length; x++) {
            waste_name_list.push(type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE CODE")]);
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
                        empty_array = waste_name_list.filter((data) => {
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

        var treatment_process_list = [];
        for (let i = 1; i < treatment_process_data_list.content.length; i++) {
            if (!treatment_process_list.includes(treatment_process_data_list.content[i][findTextInArray(treatment_process_data_list, "TREATMENT PROCESS")])) {
                treatment_process_list.push(treatment_process_data_list.content[i][findTextInArray(treatment_process_data_list, "TREATMENT PROCESS")]);
            }
        }       

        var vehicle_list = [];
        for(let y = 1; y < vehicle_data_list.content.length; y++){
            if (!vehicle_list.includes(vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")])) {
                vehicle_list.push(vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]);
            }
        }

        // mtf_data_list
        const mtf_form_no = document.getElementById("mtf_form_no");
        var last_row = mtf_data_list.content.length -1;        
        var data_info = mtf_data_list.content[last_row][findTextInArray(mtf_data_list, "MTF #")];
        var data_counter = data_info.substring(9,12);
        var year = new Date().getFullYear();
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(3, "0");
        mtf_form_no.value = `MTF${year}${month}${data_counter}`;

        const marketing_transaction_form = document.querySelector("#marketing_transaction_form");
        const waste_category = marketing_transaction_form.querySelector("#waste_category");
        const document_container = marketing_transaction_form.querySelector("#document_container");
        const submit_to = marketing_transaction_form.querySelector("#submit_to");
        const type_of_waste_container = marketing_transaction_form.querySelector("#type_of_waste_container");
        vehicle_list
        submit_to.addEventListener("change", () => {
            if(submit_to.value == "LOGISTICS"){
                // type_of_waste_data_list
                const marketing_transaction_form = document.querySelector("#marketing_transaction_form");
                const client = marketing_transaction_form.querySelector("#client");
                
                var data_value = 
                `
                <div id="type_of_vehicle_container" >
                    <label for="type_of_vehicle">
                        <i class="fa-solid fa-truck"></i>
                        Type of Vehicle
                    </label>
                    <select name="type_of_vehicle" id="type_of_vehicle" class="form-control" required>
                        <option value="">SELECT</option>
                    </select>
                </div>
                `
                type_of_waste_container.insertAdjacentHTML("beforebegin", data_value)

                const type_of_vehicle = marketing_transaction_form.querySelector("#type_of_vehicle");

                for (let y = 1; y < client_data_list.content.length; y++) {
                    if (client.value == client_data_list.content[y][1]) {
                        var client_id = "";
                        client_id = client_data_list.content[y][findTextInArray(client_data_list, "CLIENT ID")];
                        for (let x = 1; x < qlf_data_list.content.length; x++) {
                            if (client_id == qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")] && qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT")] == "TRIP") {
                                if(vehicle_list.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])){
                                    var data = `
                                    <option value="${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]}">${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]}</option>
                                    `
                                    type_of_vehicle.insertAdjacentHTML("beforeend", data)
                                }
                            }
                        }
                    }
                }  
            }
            else{
                const type_of_vehicle_container = marketing_transaction_form.querySelector("#type_of_vehicle_container");
                if(type_of_vehicle_container != undefined){
                    type_of_vehicle_container.remove()
                }
            }
        })

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