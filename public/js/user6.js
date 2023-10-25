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
        const clf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxTthjFI5UO-6LgpCH7bcy7A-c59g83xfiRiWgeBpetpHrPU9TBY7pP-TabLCQXc0zlSQ/exec');
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
            clf_response,
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
            clf_response_promise,
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
        const clf_data_list  = await clf_response.json();
        const prf_data_list  = await prf_response.json();
        const pof_data_list  = await pof_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data_list3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("#user");
        const departments = document.querySelectorAll("department");

        users.forEach(user => {user.value = username_data_list.content[6][findTextInArray(username_data_list, "NAME")]})
        departments.forEach(user => {user.value = username_data_list.content[6][findTextInArray(username_data_list, "DEPARTMENT")]})
        user_sidebar.innerHTML = `<u>${username_data_list.content[6][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[6][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[6][findTextInArray(username_data_list, "DEPARTMENT")];
        
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
                        <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMITTED BY")]}</td>
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
                        <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMITTED BY")]}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                    pending_list_marketing.innerHTML = data_value;
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

        // client_data_list
        const mtf_data = document.getElementById("mtf_data");
        const client_list = document.getElementById("client_list");
        const client_id = document.getElementById("client_id");
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        var code_year_month;
        var data_counter;
        
        // FORM GENERATOR
        
        code_year_month = `C${today_year}`;
        
        var data_content = 1;
        var data_info;
        var data_last_3digit = 0;
        
        for(x=1; x<client_data_list.content.length; x++){
            data_info = client_data_list.content[x][findTextInArray(client_data_list, "CLIENT ID")];
            
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
        
        client_id.value = `${code_year_month}${data_counter}`

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
                const client_id_input = document.getElementById("client_id_input");
                for (let y = 1; y < client_data_list.content.length; y++) {
                    if (select_user_data == client_data_list.content[y][findTextInArray(client_data_list, "CLIENT NAME")]) {
                        var client_id = "";
                        client_id = client_data_list.content[y][findTextInArray(client_data_list, "CLIENT ID")];
                        client_id_input.value = client_id;
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

        const type_of_waste_list = document.getElementById("type_of_waste_list");
        const code = document.getElementById("code");

        var client_data_list_value = "";
        var data_value_counter = 1;
        for(let x = 1; x < client_data_list.content.length; x++){
            client_data_list_value += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "CLIENT ID")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "CLIENT NAME")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "ADDRESS")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "NATURE OF BUSINESS")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "CONTACT NUMBER")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "BILLER NAME")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "BILLER ADDRESS")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "BILLER CONTACT PERSON")]}</td>
                <td>${client_data_list.content[x][findTextInArray(client_data_list, "BILLER CONTACT NUMBER")]}</td>
            </tr>
            `
            data_value_counter += 1;
        }
        client_list.innerHTML = client_data_list_value;

        var type_of_waste__list_data_value = "";
        var type_of_waste__list_data_value_counter = 1;
        for(let x = 1; x < type_of_waste_data_list.content.length; x++){
            type_of_waste__list_data_value += `
            <tr>
                <td>${type_of_waste__list_data_value_counter}</td>
                <td>${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE ID")]}</td>
                <td>${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE CODE")]}</td>
                <td>${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE NAME")]}</td>
                <td>${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "TREATMENT PROCESS")]}</td>
                <td>${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "CATEGORY")]}</td>
            </tr>
            `
            type_of_waste__list_data_value_counter += 1;
        }
        type_of_waste_list.innerHTML = type_of_waste__list_data_value

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

        // client_list_section
        const client_list_section = document.querySelector("#client_list_section");
        const new_client_form_tab_client_list_section = client_list_section.querySelector("#new_client_form_tab");
        const new_employee_button_client_list_section = client_list_section.querySelector("#new_employee_button");
        const update_record_button_client_list_section = client_list_section.querySelector("#update_record_button");
        const update_client_form_tab_client_list_section = client_list_section.querySelector("#update_client_form_tab");
        const search_client_id_button_update_client_form = update_client_form_tab_client_list_section.querySelector("#search_client_id_button");
        const search_client_id_update_client_form = update_client_form_tab_client_list_section.querySelector("#client_id");
        const client_name_update_client_form = update_client_form_tab_client_list_section.querySelector("#client_name");
        const address_update_client_form = update_client_form_tab_client_list_section.querySelector("#address");
        const nature_of_business_update_client_form = update_client_form_tab_client_list_section.querySelector("#nature_of_business");
        const contact_number_update_client_form = update_client_form_tab_client_list_section.querySelector("#contact_number");
        const biller_name_update_client_form = update_client_form_tab_client_list_section.querySelector("#biller_name");
        const biller_address_update_client_form = update_client_form_tab_client_list_section.querySelector("#biller_address");
        const biller_contact_person_update_client_form = update_client_form_tab_client_list_section.querySelector("#biller_contact_person");
        const biller_contact_number_update_client_form = update_client_form_tab_client_list_section.querySelector("#biller_contact_number");
        const timestamp_update_client_form = update_client_form_tab_client_list_section.querySelector("#timestamp");
        const update_client_form_tab_container_client_form = update_client_form_tab_client_list_section.querySelector("#update_client_form_tab_container");

        new_employee_button_client_list_section.addEventListener("click", () => {
            if(new_client_form_tab_client_list_section.style.display == "block"){
                new_client_form_tab_client_list_section.style.display = "none";
            }
            else{
                new_client_form_tab_client_list_section.style.display = "block";
                update_client_form_tab_client_list_section.style.display = "none";
            }
        })
        update_record_button_client_list_section.addEventListener("click", () => {
            if(update_client_form_tab_client_list_section.style.display == "block"){
                update_client_form_tab_client_list_section.style.display = "none";
            }
            else{
                update_client_form_tab_client_list_section.style.display = "block";
                new_client_form_tab_client_list_section.style.display = "none";
            }
        })
        search_client_id_button_update_client_form.addEventListener("click", () => {
            for(let x = 1; x < client_data_list.content.length; x++){
                if(search_client_id_update_client_form.value == client_data_list.content[x][findTextInArray(client_data_list, "CLIENT ID")]){
                    client_name_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "CLIENT NAME")];
                    address_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "ADDRESS")];
                    nature_of_business_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "NATURE OF BUSINESS")];
                    contact_number_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "CONTACT NUMBER")];
                    biller_name_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "BILLER NAME")];
                    biller_address_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "BILLER ADDRESS")];
                    biller_contact_person_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "BILLER CONTACT PERSON")];
                    biller_contact_number_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "BILLER CONTACT NUMBER")];
                    timestamp_update_client_form.value = client_data_list.content[x][findTextInArray(client_data_list, "CREATED AT")];
                    update_client_form_tab_container_client_form.style.display = "block"
                }
            }
        })

        // quotation_form
        const quotation_form = document.querySelector("#quotation_form");
        const qlf_list_quotation_form = quotation_form.querySelector("#qlf_list");
        const new_quotation_button_quotation_form = quotation_form.querySelector("#new_quotation_button");
        const update_quotation_button_quotation_form = quotation_form.querySelector("#update_quotation_button");
        const new_quotation_form_tab = quotation_form.querySelector("#new_quotation_form_tab");
        const update_quotation_form_tab = quotation_form.querySelector("#update_quotation_form_tab");
        const add_item_button_quotation_form = new_quotation_form_tab.querySelector("#add_item_button");
        const remove_item_button_quotation_form = new_quotation_form_tab.querySelector("#remove_item_button");
        const list_counter_quotation_form = new_quotation_form_tab.querySelector("#list_counter");
        const list_container_quotation_form = new_quotation_form_tab.querySelector("#list_container");
        const transportation_fee_container_quotation_form = new_quotation_form_tab.querySelector("#transportation_fee_container");
        const tf_button_quotation_form = new_quotation_form_tab.querySelector("#tf_button");
        const tf_value_quotation_form = new_quotation_form_tab.querySelector("#tf_value");
        const tf_counter_quotation_form = new_quotation_form_tab.querySelector("#tf_counter");
        const add_tf_button_quotation_form = new_quotation_form_tab.querySelector("#add_tf_button");
        const remove_tf_button_quotation_form = new_quotation_form_tab.querySelector("#remove_tf_button");
        const search_quotation_no_button_quotation_form = update_quotation_form_tab.querySelector("#search_quotation_no_button");
        const search_quotation_no_button_container_quotation_form = update_quotation_form_tab.querySelector("#search_quotation_no_button_container");
        const display_input_quotation_form = update_quotation_form_tab.querySelectorAll(".display_input");
        const list_container_quotation_form2 = update_quotation_form_tab.querySelector("#list_container");
        const transportation_fee_container = update_quotation_form_tab.querySelector("#transportation_fee_container");
        const button_container_quotation_form = update_quotation_form_tab.querySelector("#button_container");
        const add_item_button_quotation_form2 = update_quotation_form_tab.querySelector("#add_item_button");
        const remove_item_button_quotation_form2 = update_quotation_form_tab.querySelector("#remove_item_button");
        const list_counter_quotation_form2 = update_quotation_form_tab.querySelector("#list_counter");
        const transportation_fee_container_quotation_form2 = update_quotation_form_tab.querySelector("#transportation_fee_container");
        const tf_button_quotation_form2 = update_quotation_form_tab.querySelector("#tf_button");
        const tf_value_quotation_form2 = update_quotation_form_tab.querySelector("#tf_value");
        const tf_counter_quotation_form2 = update_quotation_form_tab.querySelector("#tf_counter");
        const add_tf_button_quotation_form2 = update_quotation_form_tab.querySelector("#add_tf_button");
        const remove_tf_button_quotation_form2 = update_quotation_form_tab.querySelector("#remove_tf_button");
        const quotation_no_quotation_form2 = update_quotation_form_tab.querySelector("#quotation_no");
        const validity_quotation_form2 = update_quotation_form_tab.querySelector("#validity");
        const timestamp_quotation_form2 = update_quotation_form_tab.querySelector("#timestamp");
        const terms_quotation_form2 = update_quotation_form_tab.querySelector("#terms");
        const client_quotation_form2 = update_quotation_form_tab.querySelector("#client");
        const waste_code1_quotation_form2 = update_quotation_form_tab.querySelector("#waste_code1");
        const waste_name1_quotation_form2 = update_quotation_form_tab.querySelector("#waste_name1");
        const mode1_quotation_form2 = update_quotation_form_tab.querySelector("#mode1");
        const unit1_quotation_form2 = update_quotation_form_tab.querySelector("#unit1");
        const unit_price1_quotation_form2 = update_quotation_form_tab.querySelector("#unit_price1");
        const vat_calculation1_quotation_form2 = update_quotation_form_tab.querySelector("#vat_calculation1");

        function typeOfVehicleOption(){
            var type_of_vehicle = [];
            var type_of_vehicle_selection = "";
            const  type_of_vehicle_containers = new_quotation_form_tab.querySelectorAll("#type_of_vehicle_container select")
            for(let x = 1; x < vehicle_data_list.content.length; x++){
                if (!type_of_vehicle.includes(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")])) {
                    type_of_vehicle.push(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]);
                    type_of_vehicle_selection += `<option value="${vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]}">${vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]}</option>`
                }
            }
            type_of_vehicle_containers[tf_counter_quotation_form.value -1].insertAdjacentHTML("beforeend", type_of_vehicle_selection)
        }
        typeOfVehicleOption();

        function typeOfVehicleOption2(){
            var type_of_vehicle = [];
            var type_of_vehicle_selection = "";
            const  type_of_vehicle_containers = update_quotation_form_tab.querySelectorAll("#type_of_vehicle_container select")
            for(let x = 1; x < vehicle_data_list.content.length; x++){
                if (!type_of_vehicle.includes(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")])) {
                    type_of_vehicle.push(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]);
                    type_of_vehicle_selection += `<option value="${vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]}">${vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]}</option>`
                }
            }
            type_of_vehicle_containers[tf_counter_quotation_form2.value -1].insertAdjacentHTML("beforeend", type_of_vehicle_selection)
        }

        new_quotation_button_quotation_form.addEventListener("click", () => {
            if(new_quotation_form_tab.style.display == "block"){
                new_quotation_form_tab.style.display = "none";
            }
            else{
                new_quotation_form_tab.style.display = "block";
                update_quotation_form_tab.style.display = "none";
            }
        })
        update_quotation_button_quotation_form.addEventListener("click", () => {
            if(update_quotation_form_tab.style.display == "block"){
                update_quotation_form_tab.style.display = "none";
            }
            else{
                update_quotation_form_tab.style.display = "block";
                new_quotation_form_tab.style.display = "none";
            }
        })
        
        var qlf_data_value = "";
        var qlf_data_value_counter = 1;
        for(let x = 1; x < qlf_data_list.content.length; x++){
            if(qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT")] != "TRIP"){
                qlf_data_value += `
                <tr>
                    <td>${qlf_data_value_counter}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")]}</td>
                    <td>${date_decoder(qlf_data_list.content[x][findTextInArray(qlf_data_list, "VALIDITY")])}</td>
                    <td>${findClientName(qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")])}</td>
                    <td>${findWasteCode(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "MODE")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT")]}</td>
                    <td>${formatNumber(qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT PRICE")])}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "VAT CALCULATION")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "TERMS DAYS")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "SUBMITTED BY")]}</td>
                </tr>
                `
                qlf_data_value_counter += 1;
            }
            else if(qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT")] == "TRIP"){
                qlf_data_value += `
                <tr>
                    <td>${qlf_data_value_counter}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")]}</td>
                    <td>${date_decoder(qlf_data_list.content[x][findTextInArray(qlf_data_list, "VALIDITY")])}</td>
                    <td>${findClientName(qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")])}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "MODE")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT")]}</td>
                    <td>${formatNumber(qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT PRICE")])}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "VAT CALCULATION")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "TERMS DAYS")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "SUBMITTED BY")]}</td>
                </tr>
                `
                qlf_data_value_counter += 1;
            }
        }
        qlf_list_quotation_form.innerHTML = qlf_data_value;

        add_item_button_quotation_form.addEventListener("click", () => {
            list_counter_quotation_form.value = parseInt(list_counter_quotation_form.value) + 1;
            var data = `
            <div class="list_item" id="list${list_counter_quotation_form.value}" style="display: grid; grid-template-columns: 17% 30% 15% 13% 10% 15%; gap: 20px; width: calc(100% - 240px);">
                <div class="wrapper">
                    <div class="search_input" id="search_waste_code">
                        <input type="text" name="waste_code${list_counter_quotation_form.value}" id="waste_code${list_counter_quotation_form.value}" autocomplete="off" class="form-control" required placeholder="Search">
                        <div class="autocom_box">
                        </div>
                        <div class="icon"><i class="fas fa-search"></i></div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="text" name="waste_name${list_counter_quotation_form.value}" id="waste_name${list_counter_quotation_form.value}" autocomplete="off" class="form-control" required placeholder="Type Waste Name..." style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="mode${list_counter_quotation_form.value}" id="mode${list_counter_quotation_form.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="CHARGE">CHARGE</option>
                            <option value="FREE OF CHARGE">FREE OF CHARGE</option>
                            <option value="BUYING">BUYING</option>
                            <option value="SELLING">SELLING</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="unit${list_counter_quotation_form.value}" id="unit${list_counter_quotation_form.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="Kg">KILOGRAMS</option>
                            <option value="L">LITERS</option>
                            <option value="DRUM">DRUM</option>
                            <option value="TRIP">TRIP</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="number" name="unit_price${list_counter_quotation_form.value}" id="unit_price${list_counter_quotation_form.value}" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="vat_calculation${list_counter_quotation_form.value}" id="vat_calculation${list_counter_quotation_form.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="VAT INCLUSIVE">VAT INCLUSIVE</option>
                            <option value="VAT EXCLUSIVE">VAT EXCLUSIVE</option>
                            <option value="NON VATABLE">NON VATABLE</option>
                        </select>
                    </div>
                </div>
            </div>
            `
            list_container_quotation_form.insertAdjacentHTML("beforeend", data);
            remove_item_button_quotation_form.style.display = "block";
            typeOfWaste();
            // Get all input elements of type "number"
            const numberInputs = document.querySelectorAll('input[type="number"]');
    
            // Loop through each input and set the "step" attribute
            numberInputs.forEach(input => {
                input.setAttribute('step', '0.01'); // Set the desired step value
            })
        });

        remove_item_button_quotation_form.addEventListener("click", () => {
            const list = list_container_quotation_form.querySelectorAll(".list_item");
            const last_list = list[list.length - 1];
            
            if (list.length > 1) {
                list_container_quotation_form.removeChild(last_list);
                list_counter_quotation_form.value = parseInt(list_counter_quotation_form.value) - 1;
                
                if (list_counter_quotation_form.value == 1) {
                    remove_item_button_quotation_form.style.display = "none";
                }
            }
        });

        tf_button_quotation_form.addEventListener("click", () => {
            if(tf_value_quotation_form.value == "false"){
                tf_counter_quotation_form.value = 1;
                var data = `                        
                <div class="tf_item" style="display: grid; grid-template-columns: 17% 30% 15% 13% 10% 15%; gap: 20px; margin-top: 30px;">
                    <h4 style="position: absolute; top: -30px;">TRANSPORTATION FEE</h4>
                    <div class="wrapper">
                        <label for="type_of_vehicle1">
                        <i class="fa-solid fa-truck"></i>
                            Type of Vehicle
                        </label><br>
                        <select name="type_of_vehicle1" id="type_of_vehicle1" class="form-control" required style=" height: 55px !important;">
                            <option value="">SELECT</option>
                        </select>
                    </div>
                    <div class="wrapper">
                        <label for="transportation_fee1">
                        <i class="fa-solid fa-list"></i>
                        Area of Hauling
                        </label><br>
                        <div class="search_input">
                        <input type="text" name="transportation_fee1" id="transportation_fee1" autocomplete="off" class="form-control" required style="padding-right: 20px !important;" placeholder="Type Area of Hauling...">
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="mode1">
                        <i class="fa-solid fa-cart-shopping"></i>
                            Mode
                        </label><br>
                        <div class="search_input">
                            <select name="mode1" id="mode1" class="form-control" required style="height: 55px;">
                                <option value="">SELECT</option>
                                <option value="CHARGE">CHARGE</option>
                                <option value="FREE OF CHARGE">FREE OF CHARGE</option>
                            </select>
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="unit1">
                        <i class="fa-solid fa-scale-balanced"></i>
                            Unit
                        </label><br>
                        <div class="search_input">
                            <select name="unit1" id="unit1" class="form-control" required style="height: 55px;">
                                <option value="">SELECT</option>
                                <option value="TRIP">TRIP</option>
                            </select>
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="unit_price1">
                        <i class="fa-solid fa-money-bill-wave"></i>
                            Unit Price
                        </label><br>
                        <div class="search_input">
                            <input type="number" name="unit_price1" id="unit_price1" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="vat_calculation1">
                        <i class="fa-solid fa-calculator"></i>
                            Vat Calculation
                        </label><br>
                        <div class="search_input">
                            <select name="vat_calculation1" id="vat_calculation1" class="form-control" required style="height: 55px;">
                                <option value="">SELECT</option>
                                <option value="VAT INCLUSIVE">VAT INCLUSIVE</option>
                                <option value="VAT EXCLUSIVE">VAT EXCLUSIVE</option>
                                <option value="NON VATABLE">NON VATABLE</option>
                            </select>
                        </div>
                    </div>
                </div>      
                `
                transportation_fee_container_quotation_form.insertAdjacentHTML("beforeend", data);
                tf_value_quotation_form.value = "true";
                tf_button_quotation_form.innerHTML = "WITHOUT<br>TRANSPORTATION<br>FEE";
                add_tf_button_quotation_form.style.display = "block";
                // Get all input elements of type "number"
                const numberInputs = document.querySelectorAll('input[type="number"]');
                typeOfVehicleOption();

                // Loop through each input and set the "step" attribute
                numberInputs.forEach(input => {
                    input.setAttribute('step', '0.01'); // Set the desired step value
                });
            }
            else{
                tf_counter_quotation_form.value = 0;
                const transportation_fee_container = new_quotation_form_tab.querySelector("#transportation_fee_container");
                const tf_items = transportation_fee_container.querySelectorAll(".tf_item");
                
                tf_items.forEach(tf_item => {
                    transportation_fee_container.removeChild(tf_item);
                })
                tf_value_quotation_form.value = "false";
                tf_button_quotation_form.innerHTML = "WITH<br>TRANSPORTATION<br>FEE";
                add_tf_button_quotation_form.style.display = "none";
                remove_tf_button_quotation_form.style.display = "none";
            }
        })
        
        add_tf_button_quotation_form.addEventListener("click", () => {
            tf_counter_quotation_form.value = parseInt(tf_counter_quotation_form.value) + 1;
            var data = `                        
            <div class="tf_item" style="display: grid; grid-template-columns: 17% 30% 15% 13% 10% 15%; gap: 20px; width: calc(100% - 240px);">
                <div class="wrapper" id="type_of_vehicle_container">
                    <select name="type_of_vehicle${tf_counter_quotation_form.value}" id="type_of_vehicle${tf_counter_quotation_form.value}" class="form-control" required style=" height: 55px !important;">
                        <option value="">SELECT</option>
                    </select>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="text" name="transportation_fee${tf_counter_quotation_form.value}" id="transportation_fee${tf_counter_quotation_form.value}" autocomplete="off" class="form-control" required style="padding-right: 20px !important;" placeholder="Type Area of Hauling...">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="tf_mode${tf_counter_quotation_form.value}" id="tf_mode${tf_counter_quotation_form.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="CHARGE">CHARGE</option>
                            <option value="FREE OF CHARGE">FREE OF CHARGE</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="tf_unit${tf_counter_quotation_form.value}" id="tf_unit${tf_counter_quotation_form.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="TRIP">TRIP</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="number" name="tf_unit_price${tf_counter_quotation_form.value}" id="tf_unit_price${tf_counter_quotation_form.value}" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="tf_vat_calculation${tf_counter_quotation_form.value}" id="tf_vat_calculation${tf_counter_quotation_form.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="VAT INCLUSIVE">VAT INCLUSIVE</option>
                            <option value="VAT EXCLUSIVE">VAT EXCLUSIVE</option>
                            <option value="NON VATABLE">NON VATABLE</option>
                        </select>
                    </div>
                </div>
            </div>      
            `
            transportation_fee_container_quotation_form.insertAdjacentHTML("beforeend", data);
            tf_value_quotation_form.value = "true";
            remove_tf_button_quotation_form.style.display = "block";
            // Get all input elements of type "number"
            const numberInputs = document.querySelectorAll('input[type="number"]');
            typeOfVehicleOption();

            // Loop through each input and set the "step" attribute
            numberInputs.forEach(input => {
                input.setAttribute('step', '0.01'); // Set the desired step value
            });
        })

        remove_tf_button_quotation_form.addEventListener("click", () => {
            const transportation_fee_container = new_quotation_form_tab.querySelector("#transportation_fee_container");
            const tf_item = transportation_fee_container.querySelectorAll(".tf_item");

            const last_tf_item = tf_item[tf_item.length - 1];
            
            if (tf_item.length > 1) {
                transportation_fee_container.removeChild(last_tf_item);
                tf_counter_quotation_form.value = parseInt(tf_counter_quotation_form.value) - 1;
                
                if (tf_counter_quotation_form.value == 1) {
                    remove_tf_button_quotation_form.style.display = "none";
                }
            }
        });

        search_quotation_no_button_quotation_form.addEventListener("click", () => {
            search_quotation_no_button_container_quotation_form.style.display = "none";
            add_item_button_quotation_form2.style.display = "block";
            display_input_quotation_form.forEach(input => {input.style.display = "block"});
            list_container_quotation_form2.style.display = "block";
            transportation_fee_container.style.display = "block";
            button_container_quotation_form.style.display = "flex";
            var waste_counter = 1;
            var counter = 1;
            for(let x = 1; x < qlf_data_list.content.length; x++){
                for(let y = 1; y < type_of_waste_data_list.content.length; y++){
                    if(quotation_no_quotation_form2.value == qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")] &&
                    qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")].substring(0,8) == type_of_waste_data_list.content[y][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                        if(waste_counter == 1){
                            timestamp_quotation_form2.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "CREATED AT")];
                            validity_quotation_form2.value = date_decoder2(qlf_data_list.content[x][findTextInArray(qlf_data_list, "VALIDITY")]);
                            terms_quotation_form2.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "TERMS DAYS")];
                            client_quotation_form2.value = findClientName(qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")]);
                            waste_code1_quotation_form2.value = findWasteCode(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]);
                            waste_name1_quotation_form2.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")];
                            mode1_quotation_form2.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "MODE")];
                            unit1_quotation_form2.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT")];
                            unit_price1_quotation_form2.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT PRICE")];
                            vat_calculation1_quotation_form2.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "VAT CALCULATION")];
                            waste_counter += 1;
                        }
                        else if (waste_counter > 1){
                            addQuotationList();
                            var waste_code1_quotation_form = update_quotation_form_tab.querySelector(`#waste_code${waste_counter}`);
                            var waste_name1_quotation_form = update_quotation_form_tab.querySelector(`#waste_name${waste_counter}`);
                            var mode1_quotation_form = update_quotation_form_tab.querySelector(`#mode${waste_counter}`);
                            var unit1_quotation_form = update_quotation_form_tab.querySelector(`#unit${waste_counter}`);
                            var unit_price1_quotation_form = update_quotation_form_tab.querySelector(`#unit_price${waste_counter}`);
                            var vat_calculation1_quotation_form = update_quotation_form_tab.querySelector(`#vat_calculation${waste_counter}`);
                                                
                            waste_code1_quotation_form.value = findWasteCode(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]);
                            waste_name1_quotation_form.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")];
                            mode1_quotation_form.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "MODE")];
                            unit1_quotation_form.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT")];
                            unit_price1_quotation_form.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT PRICE")];
                            vat_calculation1_quotation_form.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "VAT CALCULATION")];
                            waste_counter += 1;
                        }
                    }
                }
                for(let y = 1; y < vehicle_list.length; y++){
                    if(quotation_no_quotation_form2.value == qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")] &&
                    qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")] == vehicle_list[y]){
                        addTransportationFeeList();
                        var waste_code1_quotation_form = update_quotation_form_tab.querySelector(`#type_of_vehicle${counter}`);
                        var waste_name1_quotation_form = update_quotation_form_tab.querySelector(`#transportation_fee${counter}`);
                        var mode1_quotation_form = update_quotation_form_tab.querySelector(`#tf_mode${counter}`);
                        var unit1_quotation_form = update_quotation_form_tab.querySelector(`#tf_unit${counter}`);
                        var unit_price1_quotation_form = update_quotation_form_tab.querySelector(`#tf_unit_price${counter}`);
                        var vat_calculation1_quotation_form = update_quotation_form_tab.querySelector(`#tf_vat_calculation${counter}`);
                                            
                        waste_code1_quotation_form.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")];
                        waste_name1_quotation_form.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")];
                        mode1_quotation_form.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "MODE")];
                        unit1_quotation_form.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT")];
                        unit_price1_quotation_form.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT PRICE")];
                        vat_calculation1_quotation_form.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "VAT CALCULATION")];
                        counter += 1;
                    }
                }
            }
        })

        function addQuotationList() {
            list_counter_quotation_form2.value = parseInt(list_counter_quotation_form2.value) + 1;
            var data = `
            <div class="list_item" id="list${list_counter_quotation_form2.value}" style="display: grid; grid-template-columns: 17% 30% 15% 13% 10% 15%; gap: 20px; width: calc(100% - 240px);"">
                <div class="wrapper">
                    <div class="search_input" id="search_waste_code">
                        <input type="text" name="waste_code${list_counter_quotation_form2.value}" id="waste_code${list_counter_quotation_form2.value}" autocomplete="off" class="form-control" required placeholder="Search">
                        <div class="autocom_box">
                        </div>
                        <div class="icon"><i class="fas fa-search"></i></div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="text" name="waste_name${list_counter_quotation_form2.value}" id="waste_name${list_counter_quotation_form2.value}" autocomplete="off" class="form-control" required placeholder="Type Waste Name..." style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="mode${list_counter_quotation_form2.value}" id="mode${list_counter_quotation_form2.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="CHARGE">CHARGE</option>
                            <option value="FREE OF CHARGE">FREE OF CHARGE</option>
                            <option value="BUYING">BUYING</option>
                            <option value="SELLING">SELLING</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="unit${list_counter_quotation_form2.value}" id="unit${list_counter_quotation_form2.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="Kg">KILOGRAMS</option>
                            <option value="L">LITERS</option>
                            <option value="DRUM">DRUM</option>
                            <option value="TRIP">TRIP</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="number" name="unit_price${list_counter_quotation_form2.value}" id="unit_price${list_counter_quotation_form2.value}" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="vat_calculation${list_counter_quotation_form2.value}" id="vat_calculation${list_counter_quotation_form2.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="VAT INCLUSIVE">VAT INCLUSIVE</option>
                            <option value="VAT EXCLUSIVE">VAT EXCLUSIVE</option>
                            <option value="NON VATABLE">NON VATABLE</option>
                        </select>
                    </div>
                </div>
            </div>
            `
            list_container_quotation_form2.insertAdjacentHTML("beforeend", data);
            if(list_counter_quotation_form2.value > 1){
                remove_item_button_quotation_form2.style.display = "block";
            }
            else{
                remove_item_button_quotation_form2.style.display = "none";
            }
            typeOfWaste();
            // Get all input elements of type "number"
            const numberInputs = document.querySelectorAll('input[type="number"]');
    
            // Loop through each input and set the "step" attribute
            numberInputs.forEach(input => {
                input.setAttribute('step', '0.01'); // Set the desired step value
            })
        } 

        function addTransportationFeeList() {
            tf_counter_quotation_form2.value = parseInt(tf_counter_quotation_form2.value) + 1;
            var data = `                        
            <h4 style="position: absolute; top: -30px;">TRANSPORTATION FEE</h4>
            <div class="tf_item" style="display: grid; grid-template-columns: 17% 30% 15% 13% 10% 15%; gap: 20px; width: calc(100% - 240px); margin-top: 100px;">
                <div class="wrapper" id="type_of_vehicle_container">
                    <label for="type_of_vehicle${tf_counter_quotation_form2.value}">
                        <i class="fa-solid fa-truck"></i>
                        Type of Vehicle
                    </label><br>
                    <select name="type_of_vehicle${tf_counter_quotation_form2.value}" id="type_of_vehicle${tf_counter_quotation_form2.value}" class="form-control" required style=" height: 55px !important;">
                        <option value="">SELECT</option>
                    </select>
                </div>
                <div class="wrapper">
                    <label for="transportation_fee${tf_counter_quotation_form2.value}">
                        <i class="fa-solid fa-list"></i>
                        Area of Hauling
                    </label><br>
                    <div class="search_input">
                        <input type="text" name="transportation_fee${tf_counter_quotation_form2.value}" id="transportation_fee${tf_counter_quotation_form2.value}" autocomplete="off" class="form-control" required style="padding-right: 20px !important;" placeholder="Type Area of Hauling...">
                    </div>
                </div>
                <div class="wrapper">
                    <label for="tf_mode${tf_counter_quotation_form2.value}">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Mode
                    </label><br>
                    <div class="search_input">
                        <select name="tf_mode${tf_counter_quotation_form2.value}" id="tf_mode${tf_counter_quotation_form2.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="CHARGE">CHARGE</option>
                            <option value="FREE OF CHARGE">FREE OF CHARGE</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <label for="tf_unit${tf_counter_quotation_form2.value}">
                        <i class="fa-solid fa-scale-balanced"></i>
                        Unit
                    </label><br>
                    <div class="search_input">
                        <select name="tf_unit${tf_counter_quotation_form2.value}" id="tf_unit${tf_counter_quotation_form2.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="TRIP">TRIP</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <label for="tf_unit_price${tf_counter_quotation_form2.value}">
                        <i class="fa-solid fa-money-bill-wave"></i>
                        Unit Price
                    </label><br>
                    <div class="search_input">
                        <input type="number" name="tf_unit_price${tf_counter_quotation_form2.value}" id="tf_unit_price${tf_counter_quotation_form2.value}" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <label for="tf_vat_calculation${tf_counter_quotation_form2.value}">
                        <i class="fa-solid fa-calculator"></i>
                        Vat Calculation
                    </label><br>
                    <div class="search_input">
                        <select name="tf_vat_calculation${tf_counter_quotation_form2.value}" id="tf_vat_calculation${tf_counter_quotation_form2.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="VAT INCLUSIVE">VAT INCLUSIVE</option>
                            <option value="VAT EXCLUSIVE">VAT EXCLUSIVE</option>
                            <option value="NON VATABLE">NON VATABLE</option>
                        </select>
                    </div>
                </div>
            </div>      
            `
            transportation_fee_container_quotation_form2.insertAdjacentHTML("beforeend", data);
            tf_value_quotation_form2.value = "true";
            if(tf_counter_quotation_form2.value > 1){
                remove_tf_button_quotation_form2.style.display = "block";
            }
            // Get all input elements of type "number"
            const numberInputs = document.querySelectorAll('input[type="number"]');
            typeOfVehicleOption2();

            // Loop through each input and set the "step" attribute
            numberInputs.forEach(input => {
                input.setAttribute('step', '0.01'); // Set the desired step value
            });
        }

        add_item_button_quotation_form2.addEventListener("click", () => {
            list_counter_quotation_form2.value = parseInt(list_counter_quotation_form2.value) + 1;
            var data = `
            <div class="list_item" id="list${list_counter_quotation_form2.value}" style="display: grid; grid-template-columns: 17% 30% 15% 13% 10% 15%; gap: 20px; width: calc(100% - 240px);"">
                <div class="wrapper">
                    <div class="search_input" id="search_waste_code">
                        <input type="text" name="waste_code${list_counter_quotation_form2.value}" id="waste_code${list_counter_quotation_form2.value}" autocomplete="off" class="form-control" required placeholder="Search">
                        <div class="autocom_box">
                        </div>
                        <div class="icon"><i class="fas fa-search"></i></div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="text" name="waste_name${list_counter_quotation_form2.value}" id="waste_name${list_counter_quotation_form2.value}" autocomplete="off" class="form-control" required placeholder="Type Waste Name..." style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="mode${list_counter_quotation_form2.value}" id="mode${list_counter_quotation_form2.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="CHARGE">CHARGE</option>
                            <option value="FREE OF CHARGE">FREE OF CHARGE</option>
                            <option value="BUYING">BUYING</option>
                            <option value="SELLING">SELLING</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="unit${list_counter_quotation_form2.value}" id="unit${list_counter_quotation_form2.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="Kg">KILOGRAMS</option>
                            <option value="L">LITERS</option>
                            <option value="DRUM">DRUM</option>
                            <option value="TRIP">TRIP</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="number" name="unit_price${list_counter_quotation_form2.value}" id="unit_price${list_counter_quotation_form2.value}" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="vat_calculation${list_counter_quotation_form2.value}" id="vat_calculation${list_counter_quotation_form2.value}" required class="form-control" style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="VAT INCLUSIVE">VAT INCLUSIVE</option>
                            <option value="VAT EXCLUSIVE">VAT EXCLUSIVE</option>
                            <option value="NON VATABLE">NON VATABLE</option>
                        </select>
                    </div>
                </div>
            </div>
            `
            list_container_quotation_form2.insertAdjacentHTML("beforeend", data);
            if(list_counter_quotation_form2.value > 1){
                remove_item_button_quotation_form2.style.display = "block";
            }
            else{
                remove_item_button_quotation_form2.style.display = "none";
            }
            typeOfWaste();
            // Get all input elements of type "number"
            const numberInputs = document.querySelectorAll('input[type="number"]');
    
            // Loop through each input and set the "step" attribute
            numberInputs.forEach(input => {
                input.setAttribute('step', '0.01'); // Set the desired step value
            })
        });

        remove_item_button_quotation_form2.addEventListener("click", () => {
            const list = list_container_quotation_form2.querySelectorAll(".list_item");
            const last_list = list[list.length - 1];
            
            if (list.length > 1) {
                list_container_quotation_form2.removeChild(last_list);
                list_counter_quotation_form2.value = parseInt(list_counter_quotation_form2.value) - 1;
                
                if (list_counter_quotation_form2.value == 1) {
                    remove_item_button_quotation_form2.style.display = "none";
                }
            }
        });
        
        tf_button_quotation_form2.addEventListener("click", () => {
            if(tf_value_quotation_form2.value == "false"){
                tf_counter_quotation_form2.value = 1;
                var data = `                        
                <div class="tf_item" style="display: grid; grid-template-columns: 17% 30% 15% 13% 10% 15%; gap: 20px; width: calc(100% - 240px); margin-top: 30px;">
                    <h4 style="position: absolute; top: -30px;">TRANSPORTATION FEE</h4>
                    <div class="wrapper">
                        <label for="type_of_vehicle1">
                        <i class="fa-solid fa-truck"></i>
                            Type of Vehicle
                        </label><br>
                        <select name="type_of_vehicle1" id="type_of_vehicle1" class="form-control" required style=" height: 55px !important;">
                            <option value="">SELECT</option>
                        </select>
                    </div>
                    <div class="wrapper">
                        <label for="transportation_fee1">
                        <i class="fa-solid fa-list"></i>
                        Area of Hauling
                        </label><br>
                        <div class="search_input">
                        <input type="text" name="transportation_fee1" id="transportation_fee1" autocomplete="off" class="form-control" required style="padding-right: 20px !important;" placeholder="Type Area of Hauling...">
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="mode1">
                        <i class="fa-solid fa-cart-shopping"></i>
                            Mode
                        </label><br>
                        <div class="search_input">
                            <select name="mode1" id="mode1" class="form-control" required style="height: 55px;">
                                <option value="">SELECT</option>
                                <option value="CHARGE">CHARGE</option>
                                <option value="FREE OF CHARGE">FREE OF CHARGE</option>
                            </select>
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="unit1">
                        <i class="fa-solid fa-scale-balanced"></i>
                            Unit
                        </label><br>
                        <div class="search_input">
                            <select name="unit1" id="unit1" class="form-control" required style="height: 55px;">
                                <option value="">SELECT</option>
                                <option value="TRIP">TRIP</option>
                            </select>
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="unit_price1">
                        <i class="fa-solid fa-money-bill-wave"></i>
                            Unit Price
                        </label><br>
                        <div class="search_input">
                            <input type="number" name="unit_price1" id="unit_price1" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
                        </div>
                    </div>
                    <div class="wrapper">
                        <label for="vat_calculation1">
                        <i class="fa-solid fa-calculator"></i>
                            Vat Calculation
                        </label><br>
                        <div class="search_input">
                            <select name="vat_calculation1" id="vat_calculation1" class="form-control" required style="height: 55px;">
                                <option value="">SELECT</option>
                                <option value="VAT INCLUSIVE">VAT INCLUSIVE</option>
                                <option value="VAT EXCLUSIVE">VAT EXCLUSIVE</option>
                                <option value="NON VATABLE">NON VATABLE</option>
                            </select>
                        </div>
                    </div>
                </div>      
                `
                transportation_fee_container_quotation_form2.insertAdjacentHTML("beforeend", data);
                tf_value_quotation_form2.value = "true";
                tf_button_quotation_form2.innerHTML = "WITHOUT<br>TRANSPORTATION<br>FEE";
                add_tf_button_quotation_form2.style.display = "block";
                // Get all input elements of type "number"
                const numberInputs = document.querySelectorAll('input[type="number"]');
                typeOfVehicleOption2();

                // Loop through each input and set the "step" attribute
                numberInputs.forEach(input => {
                    input.setAttribute('step', '0.01'); // Set the desired step value
                });
            }
            else{
                tf_counter_quotation_form2.value = 0;
                const transportation_fee_container = update_quotation_form_tab.querySelector("#transportation_fee_container");
                const tf_items = transportation_fee_container.querySelectorAll(".tf_item");
                
                tf_items.forEach(tf_item => {
                    transportation_fee_container.removeChild(tf_item);
                })
                tf_value_quotation_form2.value = "false";
                tf_button_quotation_form2.innerHTML = "WITH<br>TRANSPORTATION<br>FEE";
                add_tf_button_quotation_form2.style.display = "none";
                remove_tf_button_quotation_form2.style.display = "none";
            }
        })
        
        add_tf_button_quotation_form2.addEventListener("click", () => {
            tf_counter_quotation_form2.value = parseInt(tf_counter_quotation_form2.value) + 1;
            if(tf_counter_quotation_form2.value == 1){
                
            }
            var data = `                        
            <div class="tf_item" style="display: grid; grid-template-columns: 17% 30% 15% 13% 10% 15%; gap: 20px; width: calc(100% - 240px);">
                <div class="wrapper" id="type_of_vehicle_container">
                    <select name="type_of_vehicle${tf_counter_quotation_form2.value}" id="type_of_vehicle${tf_counter_quotation_form2.value}" class="form-control" required style=" height: 55px !important;">
                        <option value="">SELECT</option>
                    </select>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="text" name="transportation_fee${tf_counter_quotation_form2.value}" id="transportation_fee${tf_counter_quotation_form2.value}" autocomplete="off" class="form-control" required style="padding-right: 20px !important;" placeholder="Type Area of Hauling...">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="tf_mode${tf_counter_quotation_form2.value}" id="tf_mode${tf_counter_quotation_form2.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="CHARGE">CHARGE</option>
                            <option value="FREE OF CHARGE">FREE OF CHARGE</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="tf_unit${tf_counter_quotation_form2.value}" id="tf_unit${tf_counter_quotation_form2.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="TRIP">TRIP</option>
                        </select>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <input type="number" name="tf_unit_price${tf_counter_quotation_form2.value}" id="tf_unit_price${tf_counter_quotation_form2.value}" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="search_input">
                        <select name="tf_vat_calculation${tf_counter_quotation_form2.value}" id="tf_vat_calculation${tf_counter_quotation_form2.value}" class="form-control" required style="height: 55px;">
                            <option value="">SELECT</option>
                            <option value="VAT INCLUSIVE">VAT INCLUSIVE</option>
                            <option value="VAT EXCLUSIVE">VAT EXCLUSIVE</option>
                            <option value="NON VATABLE">NON VATABLE</option>
                        </select>
                    </div>
                </div>
            </div>      
            `
            transportation_fee_container_quotation_form2.insertAdjacentHTML("beforeend", data);
            tf_value_quotation_form2.value = "true";
            remove_tf_button_quotation_form2.style.display = "block";
            // Get all input elements of type "number"
            const numberInputs = document.querySelectorAll('input[type="number"]');
            typeOfVehicleOption2();

            // Loop through each input and set the "step" attribute
            numberInputs.forEach(input => {
                input.setAttribute('step', '0.01'); // Set the desired step value
            });
        })

        remove_tf_button_quotation_form2.addEventListener("click", () => {
            const transportation_fee_container = update_quotation_form_tab.querySelector("#transportation_fee_container");
            const tf_item = transportation_fee_container.querySelectorAll(".tf_item");

            const last_tf_item = tf_item[tf_item.length - 1];
            
            if (tf_item.length > 1) {
                transportation_fee_container.removeChild(last_tf_item);
                tf_counter_quotation_form2.value = parseInt(tf_counter_quotation_form2.value) - 1;
                
                if (tf_counter_quotation_form2.value == 1) {
                    remove_tf_button_quotation_form2.style.display = "none";
                }
            }
        });

        // commission
        const commission_form = document.querySelector("#commission_form");
        const new_commission_button_commission = commission_form.querySelector("#new_commission_button");
        const update_commission_button_commission = commission_form.querySelector("#update_commission_button");
        const new_commission_form_tab_commission = commission_form.querySelector("#new_commission_form_tab");
        const update_commission_form_tab_commission = commission_form.querySelector("#update_commission_form_tab");
        const add_item_button_commission = commission_form.querySelector("#add_item_button");
        const remove_item_button_commission = commission_form.querySelector("#remove_item_button");

        new_commission_button_commission.addEventListener("click", () => {
            if(new_commission_form_tab_commission.style.display == "block"){
                new_commission_form_tab_commission.style.display = "none";
            }
            else{
                new_commission_form_tab_commission.style.display = "block";
                update_commission_form_tab_commission.style.display = "none";
            }
        })
        update_commission_button_commission.addEventListener("click", () => {
            if(update_commission_form_tab_commission.style.display == "block"){
                update_commission_form_tab_commission.style.display = "none";
            }
            else{
                update_commission_form_tab_commission.style.display = "block";
                new_commission_form_tab_commission.style.display = "none";
            }
        })

        add_item_button_commission.addEventListener("click", addCommissionList)
        remove_item_button_commission.addEventListener("click", removeCommissionList)

        function addCommissionList(){
            const commission_data_counter_commission = commission_form.querySelector("#commission_data_counter");
            const commission_list_commission = commission_form.querySelector("#commission_list");
            commission_data_counter_commission.value = parseInt(commission_data_counter_commission.value) + 1;
            var commission_data = 
            `
            <div id="commission${commission_data_counter_commission.value}" style="display: grid; grid-template-columns: 15% 25% 15% 25% 20%; gap: 20px; width: calc(100% - 60px);">
                <div class="wrapper">
                </div>
                <div class="wrapper">
                </div>
                <div class="wrapper">
                </div>
                <div class="wrapper">
                    <div>
                        <input type="text" name="agent_name${commission_data_counter_commission.value}" id="agent_name${commission_data_counter_commission.value}" autocomplete="off" class="form-control" required placeholder="Type Agent Name">
                    </div>
                </div>
                <div class="wrapper">
                    <div>
                        <input type="number" name="commission_price${commission_data_counter_commission.value}" id="commission_price${commission_data_counter_commission.value}" autocomplete="off" class="form-control" required placeholder="Type Commission">
                    </div>
                </div>
            </div>
            `
            commission_list_commission.insertAdjacentHTML("beforeend", commission_data)
            remove_item_button_commission.style.display = "block";
        }
        function removeCommissionList(){
            const commission_data_counter_commission = commission_form.querySelector("#commission_data_counter");
            const commission = commission_form.querySelector(`#commission${commission_data_counter_commission.value}`);
            commission.remove();
            commission_data_counter_commission.value = parseInt(commission_data_counter_commission.value) - 1;
            if(commission_data_counter_commission.value == 1){
                remove_item_button_commission.style.display = "none"
            }
        }

        // clf_data_list
        // FORM GENERATOR
        const clf_form_no = document.getElementById("clf_form_no");
        var last_row = clf_data_list.content.length -1;
        var data_info = clf_data_list.content[last_row][findTextInArray(clf_data_list, "CLF #")];
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
        clf_form_no.value = `CLF${year}${month}${data_counter}`;

        const quotation_selection = commission_form.querySelector("#quotation_selection");
        const waste_name_selection = commission_form.querySelector("#waste_name_selection");
        const client = commission_form.querySelector("#client");
        const client_id_commission = commission_form.querySelector("#client_id");
        const waste_id_commission = commission_form.querySelector("#waste_id");

        var quotation_data = []
        for(let x = 1; x < qlf_data_list.content.length; x++){
            if (!quotation_data.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")])) {
                quotation_data.push(qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")])
            }
        }
        quotation_data.forEach((data) => {
            quotation_selection.insertAdjacentHTML("beforeend",
            `<option value="${data}">${data}</option>`
            )
        })

        var vehicle_list = [];
        for(let y = 1; y < vehicle_data_list.content.length; y++){
            if (!vehicle_list.includes(vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")])) {
                vehicle_list.push(vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]);
            }
        }

        var quotation_waste_data = []
        quotation_selection.addEventListener("change", () => {
            for(let x = 1; x < qlf_data_list.content.length; x++){
                if(quotation_selection.value == qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")]){
                    client.value = findClientName(qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")])
                    client_id_commission.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")]
                    if(!vehicle_list.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])){
                        quotation_waste_data.push(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")])
                    }
                }
            }
            quotation_waste_data.forEach((data) => {
                waste_name_selection.insertAdjacentHTML("beforeend",
                `<option value="${data}">${data}</option>`
                )
            })
        })

        waste_name_selection.addEventListener("change", () => {
            for(let x = 1; x < qlf_data_list.content.length; x++){
                if(quotation_selection.value == qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")] &&
                    waste_name_selection.value == qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")]){
                    waste_id_commission.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
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
            var data_info = prf_data_list.content[last_row][findTextInArray(prf_data_list, "PR #")];
            var data_counter = data_info.substring(9,12) || 0;
            var year = new Date().getFullYear();
            var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        
            for (let y = 1; y <= prf_counter.value; y++) {
                prf_form_no[y] = document.querySelector(`#prf_form_no${y}`);
                prf_form_no[y].value = `PR${year}${month}${((parseInt(data_counter) + y).toString().padStart(3,"0"))}`;
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
        var last_row = irf_data_list.content.length -1;        
        var data_info = irf_data_list.content[last_row][findTextInArray(irf_data_list, "IRF #")];
        var data_counter = data_info.substring(9,12);
        var year = new Date().getFullYear();
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(3, "0");
        irf_form_no.value = `IRF${year}${month}${data_counter}`;

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

        const generate_report_button = document.getElementById("generate_report_button");
        const close_report_button = document.getElementById("close_report_button");
        const report_generate_button = document.getElementById("report_generate_button");
        const report_download_button = document.getElementById("report_download_button");
        const generate_report_tab = document.getElementById("generate_report_tab");
        const report_date_from = document.getElementById("report_date_from");
        const report_date_to = document.getElementById("report_date_to");
        let currentPageHeight = 16;

        generate_report_button.addEventListener("click", () => {
            generate_report_tab.style.display = "block"
        })
        close_report_button.addEventListener("click", () => {
            generate_report_tab.style.display = "none"
        })

        report_generate_button.addEventListener("click", () => {
            const filteredData = [];
            const pageHeight = 500;
            const dataHeight = 16; // Adjust this value based on your content

            for(let x = 1; x < wcf_data_list.content.length; x++){
                var hauling_date = new Date(mtf_data_list.content[x][findTextInArray(mtf_data_list, "HAULING DATE")])
                var mtf_data = mtf_data_list.content[x][findTextInArray(mtf_data_list, "MTF #")]
                var hauling_date_data = mtf_data_list.content[x][findTextInArray(mtf_data_list, "HAULING DATE")]
                var hauling_time_data = mtf_data_list.content[x][findTextInArray(mtf_data_list, "HAULING TIME")]
                var client_id_data = mtf_data_list.content[x][findTextInArray(mtf_data_list, "CLIENT ID")]
                var waste_id_data = mtf_data_list.content[x][findTextInArray(mtf_data_list, "WASTE ID")]
                var report_from = new Date(report_date_from.value)
                var report_to = new Date(report_date_to.value)
                var datePortion = hauling_date_data.split("T")[0];
                var timePortion = hauling_time_data.split("T")[1];
                var hauling_datetime = new Date(datePortion + "T" + timePortion);
                if (hauling_date >= report_from && hauling_date <= report_to) {
                    filteredData.push({
                    mtf_data,
                    hauling_date_data,
                    hauling_time_data,
                    client_id_data,
                    waste_id_data,
                    hauling_datetime,
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
                        <td>${item.mtf_data}</td>
                        <td>${date_decoder(item.hauling_date_data)}</td>
                        <td>${time_decoder(item.hauling_time_data)}</td>
                        <td>${findClientName(item.client_id_data)}</td>
                        <td>${findWasteName(item.client_id_data, item.waste_id_data)}</td>
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
                                        <th>MTF #</td>
                                        <th>HAULING DATE</th>
                                        <th>HAULING TIME</th>
                                        <th>CLIENT</th>
                                        <th>TYPE OF WASTE</th>
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