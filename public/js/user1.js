document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const vehicle_log_response_promise = fetch('https://script.google.com/macros/s/AKfycbwOVO1qi9ac0YojlrZUh-XMYMe_gAeO2bg_wU_lSRdBkLgmJKQuzQuq41lzvSOjKfzA/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');

        const [
            username_response,
            employee_response,
            client_list_response,
            type_of_waste_response,
            vehicle_response,
            vehicle_log_response,
            mtf_response,
            ltf_response,
            wcf_response,
            qlf_response,
        ] = await Promise.all([
            username_response_promise,
            employee_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            vehicle_response_promise,
            vehicle_log_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            qlf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const employee_data_list  = await employee_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const vehicle_data_list  = await vehicle_response.json();
        const vehicle_log_data_list  = await vehicle_log_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const qlf_data_list  = await qlf_response.json();

        // Code that depends on the fetched data
        // username_data_list
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const user = document.getElementById("user");

        user.value = username_data_list.content[1][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[1][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[1][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[1][findTextInArray(username_data_list, "DEPARTMENT")];
        
        // receiving_dashboard
        const to_received_receiving = document.querySelector("#dashboard_section #to_received");
        const received_receiving = document.querySelector("#dashboard_section #received");
        const pending_receiving = document.querySelector("#dashboard_section #pending");
        const pending_list_receiving = document.querySelector("#dashboard_section #pending_list");
        const received_list_receiving = document.querySelector("#dashboard_section #received_list");
        const month_filter = document.getElementById("month_filter");

        var newElements_receiving = [];
        var newElements2_receiving = [];
        var newElements3_receiving = [];
        var newElements4_receiving = [];
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
            var ltf_transaction_receiving = []; // Variable containing existing elements
            var ltf_wcf_transaction_receiving = []; // Variable containing existing elements
            var mtf_transaction_receiving = []; // Variable containing existing elements
            var mtf_wcf_transaction_receiving = []; // Variable containing existing elements
            var ltf_transaction_counter_receiving = 0;
            var ltf_wcf_transaction_counter_receiving = 0;
            var mtf_transaction_counter_receiving = 0;
            var mtf_wcf_transaction_counter_receiving = 0;
            
            for (let i = 1; i < mtf_data_list.content.length; i++) {
                if(mtf_data_list.content[i][findTextInArray(mtf_data_list, "SUBMIT TO")] ==  "RECEIVING" &&
                month_filter.value == formatMonth(mtf_data_list.content[i][findTextInArray(mtf_data_list, "HAULING DATE")])){
                    if (!mtf_transaction_receiving.includes(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")])) {
                        mtf_transaction_receiving.push(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")]);
                        mtf_transaction_counter_receiving += 1
                    }
                }
                else if(mtf_data_list.content[i][findTextInArray(mtf_data_list, "SUBMIT TO")] ==  "RECEIVING" &&
                month_filter.value == "ALL"){
                    if (!mtf_transaction_receiving.includes(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")])) {
                        mtf_transaction_receiving.push(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")]);
                        mtf_transaction_counter_receiving += 1
                    }
                }
            }
            for (let i = 1; i < ltf_data_list.content.length; i++) {
                if (!ltf_transaction_receiving.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]) &&
                month_filter.value == formatMonth(ltf_data_list.content[i][findTextInArray(ltf_data_list, "HAULING DATE")])) {
                    ltf_transaction_receiving.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]);
                    ltf_transaction_counter_receiving += 1
                }
                else if (!ltf_transaction_receiving.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]) &&
                month_filter.value == "ALL") {
                    ltf_transaction_receiving.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]);
                    ltf_transaction_counter_receiving += 1
                }
            }
            for (let i = 1; i < wcf_data_list.content.length; i++) {
                if (!ltf_wcf_transaction_receiving.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]) &&
                month_filter.value == formatMonth(wcf_data_list.content[i][findTextInArray(wcf_data_list, "HAULING DATE")])) {
                    ltf_wcf_transaction_receiving.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]);
                    ltf_wcf_transaction_counter_receiving += 1
                }
                else if (!ltf_wcf_transaction_receiving.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]) &&
                month_filter.value == "ALL") {
                    ltf_wcf_transaction_receiving.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]);
                    ltf_wcf_transaction_counter_receiving += 1
                }
                if (!mtf_wcf_transaction_receiving.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]) &&
                month_filter.value == formatMonth(wcf_data_list.content[i][findTextInArray(wcf_data_list, "HAULING DATE")])) {
                    mtf_wcf_transaction_receiving.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]);
                    mtf_wcf_transaction_counter_receiving += 1
                }
                else if (!mtf_wcf_transaction_receiving.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]) &&
                month_filter.value == "ALL") {
                    mtf_wcf_transaction_receiving.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]);
                    mtf_wcf_transaction_counter_receiving += 1
                }
            }

            // Get elements from wcf_transaction not included in wcf_sf_transaction
            newElements_receiving = ltf_transaction_receiving.filter((element) => !ltf_wcf_transaction_receiving.includes(element));
            newElements2_receiving = mtf_transaction_receiving.filter((element) => !mtf_wcf_transaction_receiving.includes(element));
            newElements3_receiving = ltf_transaction_receiving.filter((element) => ltf_wcf_transaction_receiving.includes(element));
            newElements4_receiving = mtf_transaction_receiving.filter((element) => mtf_wcf_transaction_receiving.includes(element));
    
            received_receiving.innerText = ltf_wcf_transaction_counter_receiving;
            to_received_receiving.innerText = ltf_transaction_counter_receiving + mtf_transaction_counter_receiving;
            pending_receiving.innerText = newElements_receiving.length + newElements2_receiving.length;
            
            var options = {
                series: [newElements_receiving.length + newElements2_receiving.length, ltf_wcf_transaction_counter_receiving],
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
            for(let j = ltf_data_list.content.length -1; j >= 1 ; j--){
                for(let i = 0; i < newElements_receiving.length; i++){
                    if(newElements_receiving[i] == ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")] &&
                    month_filter.value == formatMonth(ltf_data_list.content[j][findTextInArray(ltf_data_list, "HAULING DATE")])){
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")]}</td>
                            <td>${date_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "HAULING DATE")])} /<br> ${time_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "HAULING TIME")])}</td>
                            <td>${findClientName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")], ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                            <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "TYPE OF VEHICLE")]}</td>
                            <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "PLATE #")]}</td>
                            <td>${findEmployeeName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DRIVER ID")])}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                    else if(newElements_receiving[i] == ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")] &&
                    month_filter.value == "ALL"){
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")]}</td>
                            <td>${date_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "HAULING DATE")])} /<br> ${time_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "HAULING TIME")])}</td>
                            <td>${findClientName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")], ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                            <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "TYPE OF VEHICLE")]}</td>
                            <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "PLATE #")]}</td>
                            <td>${findEmployeeName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DRIVER ID")])}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            for(let j = mtf_data_list.content.length -1; j >= 1 ; j--){
                for(let i = 0; i < newElements2_receiving.length; i++){
                    if(newElements2_receiving[i] == mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")] &&
                    month_filter.value == formatMonth(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])){
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")]}</td>
                            <td>${date_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])} /<br> ${time_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING TIME")])}</td>
                            <td>${findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")], mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                            <td>PROVIDED BY CLIENT</td>
                            <td>PROVIDED BY CLIENT</td>
                            <td>PROVIDED BY CLIENT</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                    else if(newElements2_receiving[i] == mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")] &&
                    month_filter.value == "ALL"){
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")]}</td>
                            <td>${date_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])} /<br> ${time_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING TIME")])}</td>
                            <td>${findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")], mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                            <td>PROVIDED BY CLIENT</td>
                            <td>PROVIDED BY CLIENT</td>
                            <td>PROVIDED BY CLIENT</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            pending_list_receiving.innerHTML = data_value;
    
            var data_value = "";
            var data_value_counter = 1;
            for(let j = wcf_data_list.content.length -1; j >= 1 ; j--){
                for(let i = 0; i < newElements3_receiving.length ; i++){
                    if(newElements3_receiving[i] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")] &&
                    month_filter.value == formatMonth(wcf_data_list.content[j][findTextInArray(wcf_data_list, "HAULING DATE")])){
                        for(let k = 1; k < ltf_data_list.content.length; k++){
                            var hauling_date_info;
                            var hauling_time_info;
                            var mtf_no;
                            if(wcf_data_list.content[j][1] == ltf_data_list.content[k][0]){
                                hauling_date_info =  date_decoder(ltf_data_list.content[k][findTextInArray(ltf_data_list, "HAULING DATE")]);
                                hauling_time_info =  time_decoder(ltf_data_list.content[k][findTextInArray(ltf_data_list, "HAULING TIME")]);
                                mtf_no =  ltf_data_list.content[k][findTextInArray(ltf_data_list, "MTF #")];
                                break
                            }
                        }
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")]}</td>
                            <td>${mtf_no}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "TRUCK SCALE #")]}</td>
                            <td>${hauling_date_info} /<br> ${hauling_time_info}</td>
                            <td>${findClientName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "NET WEIGHT")]}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "PLATE #")]}</td>
                            <td>${findEmployeeName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "DRIVER ID")])}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "DATE OUT")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "TIME OUT")])}</td>
                            <td>${calculateTravelTime(date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")]),time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")]),date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "DATE OUT")]),time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "TIME OUT")]))}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                    else if(newElements3_receiving[i] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")] &&
                    month_filter.value == "ALL"){
                        for(let k = 1; k < ltf_data_list.content.length; k++){
                            var hauling_date_info;
                            var hauling_time_info;
                            var mtf_no;
                            if(wcf_data_list.content[j][1] == ltf_data_list.content[k][0]){
                                hauling_date_info =  date_decoder(ltf_data_list.content[k][findTextInArray(ltf_data_list, "HAULING DATE")]);
                                hauling_time_info =  time_decoder(ltf_data_list.content[k][findTextInArray(ltf_data_list, "HAULING TIME")]);
                                mtf_no =  ltf_data_list.content[k][findTextInArray(ltf_data_list, "MTF #")];
                                break
                            }
                        }
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")]}</td>
                            <td>${mtf_no}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "TRUCK SCALE #")]}</td>
                            <td>${hauling_date_info} /<br> ${hauling_time_info}</td>
                            <td>${findClientName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "NET WEIGHT")]}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "PLATE #")]}</td>
                            <td>${findEmployeeName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "DRIVER ID")])}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "DATE OUT")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "TIME OUT")])}</td>
                            <td>${calculateTravelTime(date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")]),time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")]),date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "DATE OUT")]),time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "TIME OUT")]))}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
                for(let i = 0; i < newElements4_receiving.length ; i++){
                    if(newElements4_receiving[i] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")] &&
                    month_filter.value == formatMonth(wcf_data_list.content[j][findTextInArray(wcf_data_list, "HAULING DATE")])){
                        for(let k = 1; k < mtf_data_list.content.length; k++){
                            var hauling_date_info;
                            var hauling_time_info;
                            var mtf_no;
                            if(wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")] == mtf_data_list.content[k][findTextInArray(mtf_data_list, "MTF #")]){
                                hauling_date_info =  date_decoder(mtf_data_list.content[k][findTextInArray(mtf_data_list, "HAULING DATE")]);
                                hauling_time_info =  time_decoder(mtf_data_list.content[k][findTextInArray(mtf_data_list, "HAULING TIME")]);
                                mtf_no =  mtf_data_list.content[k][findTextInArray(mtf_data_list, "MTF #")];
                                break
                            }
                        }
                        data_value +=`
                        <tr>
                        <td>${data_value_counter}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")]}</td>
                            <td>${mtf_no}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "TRUCK SCALE #")]}</td>
                            <td>${hauling_date_info} /<br> ${hauling_time_info}</td>
                            <td>${findClientName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "NET WEIGHT")]}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "PLATE #")]}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "DRIVER ID")]}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "DATE OUT")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "TIME OUT")])}</td>
                            <td>${calculateTravelTime(date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")]),time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")]),date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "DATE OUT")]),time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "TIME OUT")]))}</td>
                            </tr>
                            `
                        data_value_counter += 1;
                    }
                    else if(newElements4_receiving[i] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")] &&
                    month_filter.value == "ALL"){
                        for(let k = 1; k < mtf_data_list.content.length; k++){
                            var hauling_date_info;
                            var hauling_time_info;
                            var mtf_no;
                            if(wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")] == mtf_data_list.content[k][findTextInArray(mtf_data_list, "MTF #")]){
                                hauling_date_info =  date_decoder(mtf_data_list.content[k][findTextInArray(mtf_data_list, "HAULING DATE")]);
                                hauling_time_info =  time_decoder(mtf_data_list.content[k][findTextInArray(mtf_data_list, "HAULING TIME")]);
                                mtf_no =  mtf_data_list.content[k][findTextInArray(mtf_data_list, "MTF #")];
                                break
                            }
                        }
                        data_value +=`
                        <tr>
                        <td>${data_value_counter}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")]}</td>
                            <td>${mtf_no}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "TRUCK SCALE #")]}</td>
                            <td>${hauling_date_info} /<br> ${hauling_time_info}</td>
                            <td>${findClientName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "NET WEIGHT")]}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "PLATE #")]}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "DRIVER ID")]}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "DATE OUT")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "TIME OUT")])}</td>
                            <td>${calculateTravelTime(date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")]),time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")]),date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "DATE OUT")]),time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "TIME OUT")]))}</td>
                            </tr>
                            `
                        data_value_counter += 1;
                    }
                }
            }
            received_list_receiving.innerHTML = data_value;
        }

        const wcf_data2 = document.getElementById("wcf_data2");
        const ltf_form_no = document.getElementById("ltf_form_no");
        const client = document.getElementById("client");
        const client_id = document.getElementById("client_id");
        const plate_no = document.getElementById("plate_no");
        const driver = document.getElementById("driver");
        const driver_id = document.getElementById("driver_id");
        const hauling_date = document.getElementById("hauling_date");
        const waste_description = document.getElementById("waste_description");
        const search_ltf_form_no = document.getElementById("search_ltf_form_no");
        const search_ltf_form_no_button = document.getElementById("search_ltf_form_no_button");
        const clear_ltf_form_no_button = document.getElementById("clear_ltf_form_no_button");
        const search_ltf_result = document.getElementById("search_ltf_result");
        const wcf_data = document.getElementById("wcf_data");
        const pull_out_form = document.getElementById("pull_out_form");
        const ptt = document.getElementById("ptt");
        const manifest = document.getElementById("manifest");
        const type_of_vehicle_container = document.getElementById("type_of_vehicle_container");
        
        search_ltf_form_no_button.addEventListener("click", () => {
            var data_value;
            var pull_out_value = "";
            var ptt_value = "";
            var manifest_value = "";
            for(let a = 0; a < newElements_receiving.length; a++){
                if(search_ltf_form_no.value == newElements_receiving[a]){
                    for(let z = 1; z < ltf_data_list.content.length; z++){
                        if(search_ltf_form_no.value == ltf_data_list.content[z][findTextInArray(ltf_data_list, "LTF #")]){
                            for(let x = 1; x < mtf_data_list.content.length; x++){
                                if(ltf_data_list.content[z][findTextInArray(ltf_data_list, "MTF #")] == mtf_data_list.content[x][findTextInArray(mtf_data_list, "MTF #")]){
                                    pull_out_value = mtf_data_list.content[x][findTextInArray(mtf_data_list, "PULL OUT FORM #")]
                                    ptt_value = mtf_data_list.content[x][findTextInArray(mtf_data_list, "PTT #")]
                                    manifest_value = mtf_data_list.content[x][findTextInArray(mtf_data_list, "MANIFEST #")]
                                }
                            }
                            var truck_helpers_array = [];
                            if(((ltf_data_list.content[z][findTextInArray(ltf_data_list, "TRUCK HELPER")]).toString()).includes("||")){
                                (ltf_data_list.content[z][findTextInArray(ltf_data_list, "TRUCK HELPER")]).split("||").map(number => {
                                    truck_helpers_array.push(findEmployeeName(number.trim()))
                                });
                            }
                            else{
                                truck_helpers_array.push(findEmployeeName(ltf_data_list.content[z][findTextInArray(ltf_data_list, "TRUCK HELPER")]))
                            }
                            data_value = `
                            LTF #: ${ltf_data_list.content[z][findTextInArray(ltf_data_list, "LTF #")]}<br>
                            CLIENT: ${findClientName(ltf_data_list.content[z][findTextInArray(ltf_data_list, "CLIENT ID")])}<br>
                            WASTE CODE: ${findWasteCode(ltf_data_list.content[z][findTextInArray(ltf_data_list, "WASTE ID")])}<br>
                            WASTE DESCRIPTION: ${findWasteName(ltf_data_list.content[z][findTextInArray(ltf_data_list, "CLIENT ID")], ltf_data_list.content[z][findTextInArray(ltf_data_list, "WASTE ID")])}<br>
                            HAULING DATE: ${date_decoder(ltf_data_list.content[z][findTextInArray(ltf_data_list, "HAULING DATE")])}<br>
                            HAULING TIME: ${time_decoder(ltf_data_list.content[z][findTextInArray(ltf_data_list, "HAULING TIME")])}<br>
                            TYPE OF VEHICLE: ${ltf_data_list.content[z][findTextInArray(ltf_data_list, "TYPE OF VEHICLE")]}<br>
                            PLATE #: ${ltf_data_list.content[z][findTextInArray(ltf_data_list, "PLATE #")]}<br>
                            DRIVER: ${findEmployeeName(ltf_data_list.content[z][findTextInArray(ltf_data_list, "DRIVER ID")])}<br>
                            TRUCK HELPER: ${truck_helpers_array.join(" || ")}<br>
                            DATE DEPARTURE: ${date_decoder(ltf_data_list.content[z][findTextInArray(ltf_data_list, "DEPARTURE DATE")])}<br>
                            TIME DEPARTURE: ${time_decoder(ltf_data_list.content[z][findTextInArray(ltf_data_list, "DEPARTURE TIME")])}<br>
                            REMARKS: ${ltf_data_list.content[z][findTextInArray(ltf_data_list, "REMARKS")]}<br>
                            SUBMITTED BY: ${ltf_data_list.content[z][findTextInArray(ltf_data_list, "SUBMITTED BY")]}<br>
                            `
                            ltf_form_no.value = ltf_data_list.content[z][findTextInArray(ltf_data_list, "LTF #")];
                            client_id.value = ltf_data_list.content[z][findTextInArray(ltf_data_list, "CLIENT ID")];
                            waste_description.value = ltf_data_list.content[z][findTextInArray(ltf_data_list, "WASTE ID")];
                            plate_no.value = ltf_data_list.content[z][findTextInArray(ltf_data_list, "PLATE #")];
                            driver.value = findEmployeeName(ltf_data_list.content[z][findTextInArray(ltf_data_list, "DRIVER ID")]);
                            driver_id.value = ltf_data_list.content[z][findTextInArray(ltf_data_list, "DRIVER ID")];
                            hauling_date.value = date_decoder(ltf_data_list.content[z][findTextInArray(ltf_data_list, "HAULING DATE")]);
                            wcf_data.style.display = "block";
                            var type_of_vehicle_data = `
                            <input type="text" autocomplete="off" name="type_of_vehicle" id="type_of_vehicle" class="form-control" required readonly style="height: 55px;" value="${ltf_data_list.content[z][findTextInArray(ltf_data_list, "TYPE OF VEHICLE")]}">
                            `
                            type_of_vehicle_container.insertAdjacentHTML("afterbegin", type_of_vehicle_data)
                        }
                    }
                }
            }
            for(let a = 0; a < newElements2_receiving.length; a++){
                if(search_ltf_form_no.value == newElements2_receiving[a]){
                    for(z=1; z<mtf_data_list.content.length; z++){
                        if(search_ltf_form_no.value == mtf_data_list.content[z][findTextInArray(mtf_data_list, "MTF #")]){
                            data_value = `
                            MTF #: ${mtf_data_list.content[z][findTextInArray(mtf_data_list, "MTF #")]}<br>
                            CLIENT: ${findClientName(mtf_data_list.content[z][findTextInArray(mtf_data_list, "CLIENT ID")])}<br>
                            WASTE CODE: ${findWasteCode(mtf_data_list.content[z][findTextInArray(mtf_data_list, "WASTE ID")])}<br>
                            WASTE DESCRIPTION: ${findWasteName(mtf_data_list.content[z][findTextInArray(mtf_data_list, "CLIENT ID")], mtf_data_list.content[z][findTextInArray(mtf_data_list, "WASTE ID")])}<br>
                            HAULING DATE: ${date_decoder(mtf_data_list.content[z][findTextInArray(mtf_data_list, "HAULING DATE")])}<br>
                            HAULING TIME: ${time_decoder(mtf_data_list.content[z][findTextInArray(mtf_data_list, "HAULING TIME")])}<br>
                            TYPE OF VEHICLE: ${mtf_data_list.content[z][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")]}<br>
                            PLATE #: PROVIDED BY CLIENT <br>
                            DRIVER:  PROVIDED BY CLIENT <br>
                            TRUCK HELPER:  PROVIDED BY CLIENT <br>
                            REMARKS: ${mtf_data_list.content[z][findTextInArray(mtf_data_list, "REMARKS")]}<br>
                            SUBMITTED BY: ${mtf_data_list.content[z][findTextInArray(mtf_data_list, "SUBMITTED BY")]}<br>
                            `
                            pull_out_value = mtf_data_list.content[z][findTextInArray(mtf_data_list, "PULL OUT FORM #")]
                            ptt_value = mtf_data_list.content[z][findTextInArray(mtf_data_list, "PTT #")]
                            manifest_value = mtf_data_list.content[z][findTextInArray(mtf_data_list, "MANIFEST #")]
                            ltf_form_no.value = mtf_data_list.content[z][findTextInArray(mtf_data_list, "MTF #")];
                            client_id.value = mtf_data_list.content[z][findTextInArray(mtf_data_list, "CLIENT ID")];
                            waste_description.value = mtf_data_list.content[z][findTextInArray(mtf_data_list, "WASTE ID")];
                            hauling_date.value = date_decoder(mtf_data_list.content[z][findTextInArray(mtf_data_list, "HAULING DATE")]);
                            wcf_data.style.display = "block";
                            var vehicle_list = [];
                            for(let x = 1; x < vehicle_data_list.content.length; x++){
                                if(!vehicle_list.includes(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")])){
                                    vehicle_list.push(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")])
                                }
                            }
                            var vehicle_choice = [];
                            for(let x = 1; x < qlf_data_list.content.length; x++){
                                if(mtf_data_list.content[z][findTextInArray(mtf_data_list, "CLIENT ID")] == qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")]){
                                    if(vehicle_list.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])){
                                        if(!vehicle_choice.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])){
                                            vehicle_choice.push(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])
                                        }
                                    }
                                }
                            }
                            var type_of_vehicle_data = `
                            <select autocomplete="off" name="type_of_vehicle" id="type_of_vehicle" class="form-control" required style="height: 55px;">
                                <option value="">SELECT</option>
                                <option value="CLIENT VEHICLE">CLIENT VEHICLE</option>
                                ${vehicle_choice.map(choice => `<option value="${choice}">${choice}</option>`).join('')}
                            </select>
                            `
                            type_of_vehicle_container.insertAdjacentHTML("afterbegin", type_of_vehicle_data)

                        }
                    }
                } 
            }
            pull_out_form.value = pull_out_value
            ptt.value = ptt_value
            manifest.value = manifest_value    
            if(data_value == undefined){
                search_ltf_result.innerHTML = `
                <div class="search_ltf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`            
            }
            else{
                search_ltf_result.innerHTML = `
                <div class="search_ltf_result">
                <h2>INFORMATION</h2>
                ${data_value}
                </div><br>`
            }
        })

        clear_ltf_form_no_button.addEventListener("click", () => {
            search_ltf_result.innerHTML = ``;
            search_ltf_form_no.value = ``;
        })

        

        // driver_data
        const search_wrapper2 = document.getElementById("search_driver");
        const input_box2 = search_wrapper2.querySelector("input");
        const sugg_box2 = search_wrapper2.querySelector(".autocom_box");
        var data_value2 = [];
        for(let x = 1; x < employee_data_list.content.length; x++){
            if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
                var gender = employee_data_list.content[x][findTextInArray(employee_data_list, "GENDER")];
                if(gender == "MALE"){
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "AFFIX")]}`
                    data_value2.push(full_name);
                }
                else{
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[x][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                    data_value2.push(full_name);
                }
            }
        }
        input_box2.onkeyup = (e) => {
            let user_data = e.target.value;
            let empty_array = [];
            if (user_data) {
                empty_array = data_value2.filter((data) => {
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
            input_box2.value = select_user_data;
            search_wrapper2.classList.remove("active");
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
    
        // vehicle_data
        const search_wrapper3 = document.getElementById("search_plate_no");
        const input_box3 = search_wrapper3.querySelector("input");
        const sugg_box3 = search_wrapper3.querySelector(".autocom_box");
        var data_value3 = [];
        for (x = 1; x < vehicle_data_list.content.length; x++) {
            data_value3.push(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "PLATE #")]);
            for (y = 1; y < vehicle_log_data_list.content.length; y++) {
                if(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "PLATE #")] == vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "PLATE #")]){
                    if(vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "STATUS")] != "AVAILABLE"){
                        data_value3 = data_value3.filter(item => item !== vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "PLATE #")]);
                    }
                    else if(vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "STATUS")] == "AVAILABLE"){
                        data_value3.push(vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "PLATE #")]);
                    }
                }
            }
        }    
        input_box3.onkeyup = (e) => {
            let user_data = e.target.value;
            let empty_array = [];
            if (user_data) {
                empty_array = data_value3.filter((data) => {
                    return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
                });
                empty_array = empty_array.map((data) => {
                    return '<li>' + data + '</li>';
                });
                search_wrapper3.classList.add("active");
                show_suggestions3(empty_array);
            } else {
                search_wrapper3.classList.remove("active");
            }
        };
    
        sugg_box3.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                select3(e.target.innerHTML);
            }
        });
    
        function select3(element) {
            let select_user_data = element;
            input_box3.value = select_user_data;
            search_wrapper3.classList.remove("active");            
        }
    
        function show_suggestions3(list) {
            let list_data;
            if (!list.length) {
                user_value = input_box3.value;
                list_data = '<li>' + user_value + '</li>';
            } else {
                list_data = list.join("");
            }
            sugg_box3.innerHTML = list_data;
        }    

        // wcf_data_list
        const wcf_form_no = document.getElementById("wcf_form_no"); 
        var last_row = wcf_data_list.content.length -1;        
        var data_info = wcf_data_list.content[last_row][findTextInArray(wcf_data_list, "WCF #")];
        var data_counter = data_info.substring(9,12);
        var year = new Date().getFullYear();
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(3, "0");
        wcf_form_no.value = `WCF${year}${month}${data_counter}`;
    
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
                var mtf_ltf_data = wcf_data_list.content[x][findTextInArray(wcf_data_list, "LTF/ MTF  #")]
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
                if (hauling_date >= report_from && hauling_date <= report_to) {
                    filteredData.push({
                    wcf_data,
                    mtf_ltf_data,
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
                        <td>${item.mtf_ltf_data}</td>
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
                    console.log(`of ${page_number.value}`)
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
                        console.log(`of ${page_number.value}`)
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
