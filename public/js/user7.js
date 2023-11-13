document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const vehicle_log_response_promise = fetch('https://script.google.com/macros/s/AKfycbwOVO1qi9ac0YojlrZUh-XMYMe_gAeO2bg_wU_lSRdBkLgmJKQuzQuq41lzvSOjKfzA/exec');
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
            employee_response,
            vehicle_response,
            vehicle_log_response,
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
            employee_response_promise,
            vehicle_response_promise,
            vehicle_log_response_promise,
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
        const employee_data_list  = await employee_response.json();
        const vehicle_data_list  = await vehicle_response.json();
        const vehicle_log_data_list  = await vehicle_log_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
        const qlf_data_list  = await qlf_response.json();
        const prf_data_list  = await prf_response.json();
        const pof_data_list  = await pof_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data_list
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("#user");
        const departments = document.querySelectorAll("#department");

        const user_name = username_data_list.content[7][findTextInArray(username_data_list, "NAME")];
        users.forEach(user => {user.value = username_data_list.content[7][findTextInArray(username_data_list, "NAME")]})
        departments.forEach(user => {user.value = username_data_list.content[1][findTextInArray(username_data_list, "DEPARTMENT")]})
        user_sidebar.innerHTML = `<u>${username_data_list.content[7][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[7][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[7][findTextInArray(username_data_list, "DEPARTMENT")];
        
        // logistic_dashboard
        const logistic_dashboard = document.querySelector("#logistic_dashboard");
        const booked_transactions_logistics = logistic_dashboard.querySelector("#booked_transactions");
        const on_hauling_transactions_logistics = logistic_dashboard.querySelector("#on_hauling_transactions");
        const hauled_transactions_logistics = logistic_dashboard.querySelector("#hauled_transactions");
        const pending_transactions_logistics = logistic_dashboard.querySelector("#pending_transactions");
        const ongoing_list_logistics = logistic_dashboard.querySelector("#ongoing_list");
        const pending_list_logistics = logistic_dashboard.querySelector("#pending_list");
        const vehicle_type_container_logistics = logistic_dashboard.querySelector("#vehicle_type_container");
        const vehicle_list_logistics = document.querySelector("#vehicle_list_section #vehicle_list");
        const month_filter = document.getElementById("month_filter");

        var newElements_logistics = [];
        var newElements2_logistics = [];
        var newElements3_logistics = [];
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
            var mtf_transaction_logistics = [];
            var mtf_ltf_transaction_logistics = [];
            var ltf_transaction_logistics = [];
            var ltf_wcf_transaction_logistics = [];
            
            for (let i = 1; i < mtf_data_list.content.length; i++) {
                if(mtf_data_list.content[i][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS" &&
                month_filter.value == formatMonth(mtf_data_list.content[i][findTextInArray(mtf_data_list, "HAULING DATE")])){
                    if (!mtf_transaction_logistics.includes(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")])) {
                        mtf_transaction_logistics.push(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")]);
                    }
                }
                else if(mtf_data_list.content[i][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS" &&
                month_filter.value == "ALL"){
                    if (!mtf_transaction_logistics.includes(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")])) {
                        mtf_transaction_logistics.push(mtf_data_list.content[i][findTextInArray(mtf_data_list, "MTF #")]);
                    }
                }
            }
    
            for (let i = 1; i < ltf_data_list.content.length; i++) {
                if (!mtf_ltf_transaction_logistics.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "MTF #")]) &&
                month_filter.value == formatMonth(ltf_data_list.content[i][findTextInArray(ltf_data_list, "HAULING DATE")])) {
                    mtf_ltf_transaction_logistics.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "MTF #")]);
                }
                else if (!mtf_ltf_transaction_logistics.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "MTF #")]) &&
                month_filter.value == "ALL") {
                    mtf_ltf_transaction_logistics.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "MTF #")]);
                }
                if (!ltf_transaction_logistics.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]) &&
                month_filter.value == formatMonth(ltf_data_list.content[i][findTextInArray(ltf_data_list, "HAULING DATE")])) {
                    ltf_transaction_logistics.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]);
                }
                else if (!ltf_transaction_logistics.includes(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]) &&
                month_filter.value == "ALL") {
                    ltf_transaction_logistics.push(ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]);
                }
            }
    
            for (let i = 1; i < wcf_data_list.content.length; i++) {
                if (!ltf_wcf_transaction_logistics.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]) &&
                month_filter.value == formatMonth(wcf_data_list.content[i][findTextInArray(wcf_data_list, "HAULING DATE")])) {
                    ltf_wcf_transaction_logistics.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]);
                }
                if (!ltf_wcf_transaction_logistics.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]) &&
                month_filter.value == "ALL") {
                    ltf_wcf_transaction_logistics.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "LTF/ MTF  #")]);
                }
            }
    
            newElements_logistics = mtf_transaction_logistics.filter((element) => !mtf_ltf_transaction_logistics.includes(element));
            newElements2_logistics = ltf_transaction_logistics.filter((element) => !ltf_wcf_transaction_logistics.includes(element));
            newElements3_logistics = ltf_transaction_logistics.filter((element) => ltf_wcf_transaction_logistics.includes(element));
            on_hauling_transactions_logistics.innerText = newElements2_logistics.length;
            hauled_transactions_logistics.innerText = newElements3_logistics.length;
            booked_transactions_logistics.innerText = mtf_transaction_logistics.length;
            pending_transactions_logistics.innerText = newElements_logistics.length;

            var options = {
                series: [newElements_logistics.length, newElements2_logistics.length, newElements3_logistics.length],
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
                labels: ["Pending", "Ongoing", "Hauled"],
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

            var data_value = "";
            var data_value_counter = 1;
            for(let i = newElements_logistics.length; i >= 0 ; i--){
                for(let j = 1; j < mtf_data_list.content.length; j++){
                    if(newElements_logistics[i] == mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")] &&
                    month_filter.value == formatMonth(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])){
                        if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS"){
                            data_value +=`
                            <tr>
                            <td>${data_value_counter}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")]}</td>
                            <td>${date_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])}<br>${time_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING TIME")])}</td>
                            <td>${findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")], mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")]}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "REMARKS")]}</td>
                            </tr>
                            `
                            data_value_counter += 1;        
                        }
                    }
                    else if(newElements_logistics[i] == mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")] &&
                    month_filter.value == "ALL"){
                        if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS"){
                            data_value +=`
                            <tr>
                            <td>${data_value_counter}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")]}</td>
                            <td>${date_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])}<br>${time_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING TIME")])}</td>
                            <td>${findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")], mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")]}</td>
                            <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "REMARKS")]}</td>
                            </tr>
                            `
                            data_value_counter += 1;        
                        }
                    }
                }
            }
            pending_list_logistics.innerHTML = data_value;     

            var data3_value = "";
            var data_value3_counter = 1;
            for( let j = ltf_data_list.content.length - 1; j >= 1; j--){
                for(let k = 0; k <= newElements2_logistics.length; k++){
                    if(ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")] == newElements2_logistics[k] &&
                    month_filter.value == formatMonth(ltf_data_list.content[j][findTextInArray(ltf_data_list, "HAULING DATE")])){
                        data3_value +=`
                        <tr>
                        <td>${data_value3_counter}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")]}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "MTF #")]}</td>
                        <td>${date_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE DATE")])}<br>${time_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE TIME")])}</td>
                        <td>${findClientName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")])}</td>
                        <td>${findWasteCode(ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                        <td>${findWasteName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")], ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "PLATE #")]}</td>
                        <td>${findEmployeeName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DRIVER ID")])}</td>
                        <td>ON HAULING</td>
                        <td>PENDING</td>
                        </tr>
                        `
                        data_value3_counter += 1;
                    }
                    else if(ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")] == newElements2_logistics[k] &&
                    month_filter.value == "ALL"){
                        data3_value +=`
                        <tr>
                        <td>${data_value3_counter}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")]}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "MTF #")]}</td>
                        <td>${date_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE DATE")])}<br>${time_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE TIME")])}</td>
                        <td>${findClientName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")])}</td>
                        <td>${findWasteCode(ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                        <td>${findWasteName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")], ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "PLATE #")]}</td>
                        <td>${findEmployeeName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DRIVER ID")])}</td>
                        <td>ON HAULING</td>
                        <td>PENDING</td>
                        </tr>
                        `
                        data_value3_counter += 1;
                    }
                }
                for(let k = 1; k < wcf_data_list.content.length; k++){
                    if(ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")] &&
                    month_filter.value == formatMonth(ltf_data_list.content[j][findTextInArray(ltf_data_list, "HAULING DATE")])){
                        data3_value +=`
                        <tr>
                        <td>${data_value3_counter}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")]}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "MTF #")]}</td>
                        <td>${date_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE DATE")])}<br>${time_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE TIME")])}</td>
                        <td>${findClientName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")])}</td>
                        <td>${findWasteCode(ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                        <td>${findWasteName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")], ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "PLATE #")]}</td>
                        <td>${findEmployeeName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DRIVER ID")])}</td>
                        <td>${date_decoder(wcf_data_list.content[k][findTextInArray(wcf_data_list, "ARRIVAL DATE")])}<br>${time_decoder(wcf_data_list.content[k][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                        <td>${calculateTravelTime(date_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE DATE")]),time_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE TIME")]),date_decoder(wcf_data_list.content[k][findTextInArray(wcf_data_list, "ARRIVAL DATE")]),time_decoder(wcf_data_list.content[k][findTextInArray(wcf_data_list, "ARRIVAL TIME")]))}</td>
                        </tr>
                        `
                        data_value3_counter += 1;            
                    }
                    else if(ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")] &&
                    month_filter.value == "ALL"){
                        data3_value +=`
                        <tr>
                        <td>${data_value3_counter}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "LTF #")]}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "MTF #")]}</td>
                        <td>${date_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE DATE")])}<br>${time_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE TIME")])}</td>
                        <td>${findClientName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")])}</td>
                        <td>${findWasteCode(ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                        <td>${findWasteName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "CLIENT ID")], ltf_data_list.content[j][findTextInArray(ltf_data_list, "WASTE ID")])}</td>
                        <td>${ltf_data_list.content[j][findTextInArray(ltf_data_list, "PLATE #")]}</td>
                        <td>${findEmployeeName(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DRIVER ID")])}</td>
                        <td>${date_decoder(wcf_data_list.content[k][findTextInArray(wcf_data_list, "ARRIVAL DATE")])}<br>${time_decoder(wcf_data_list.content[k][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                        <td>${calculateTravelTime(date_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE DATE")]),time_decoder(ltf_data_list.content[j][findTextInArray(ltf_data_list, "DEPARTURE TIME")]),date_decoder(wcf_data_list.content[k][findTextInArray(wcf_data_list, "ARRIVAL DATE")]),time_decoder(wcf_data_list.content[k][findTextInArray(wcf_data_list, "ARRIVAL TIME")]))}</td>
                        </tr>
                        `
                        data_value3_counter += 1;            
                    }
                } 
            }
            ongoing_list_logistics.innerHTML = data3_value;   
        }

        var on_hauling_vehicle_counter_logistics = 0;
        var under_maintenance_vehicle_counter_logistics = 0;
        var for_maintenance_vehicle_counter_logistics = 0;
        var data2_value = "";
        var data2_value_counter = 1;
        for(let j = 1; j < vehicle_data_list.content.length; j++){
            var vehicle_status_logistics = `AVAILABLE`;
            for(let k = 1; k < vehicle_log_data_list.content.length; k++){
                if(vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "PLATE #")] == vehicle_log_data_list.content[k][findTextInArray(vehicle_log_data_list, "PLATE #")]){
                    vehicle_status_logistics = vehicle_log_data_list.content[k][findTextInArray(vehicle_log_data_list, "STATUS")];
                    if(vehicle_status_logistics == "ON HAUL"){
                        on_hauling_vehicle_counter_logistics += 1
                    }
                    if(vehicle_status_logistics == "AVAILABLE"){
                        on_hauling_vehicle_counter_logistics -= 1
                    }
                    else if(vehicle_status_logistics == "UNDER MAINTENANCE"){
                        under_maintenance_vehicle_counter_logistics += 1
                    }
                    else if(vehicle_status_logistics == "FOR MAINTENANCE"){
                        for_maintenance_vehicle_counter_logistics += 1
                    }
                }
            }
            data2_value +=`
            <tr>
                <td>${data2_value_counter}</td>
                <td>${vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "PLATE #")]}</td>
                <td>${vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "VEHICLE")]}</td>
                <td>${vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]}</td>
                <td>${vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "NET CAPACITY (MT)")]}</td>
                <td>${vehicle_data_list.content[j][findTextInArray(vehicle_data_list, "OWNED / LEASED")]}</td>
                <td>${vehicle_status_logistics}</td>
            </tr>
            `
            data2_value_counter += 1;

        }
        vehicle_list_logistics.innerHTML = data2_value;  

        var vehicle_type = [];
        var vehicle_count = {};
        var available_vehicle = [];
        var available_vehicle_type = [];
        var available_vehicle_count = {};
        for (let x = 1; x < vehicle_data_list.content.length; x++) {
        const vehicleType = vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")];
            if (!vehicle_type.includes(vehicleType)) {
                vehicle_type.push(vehicleType);
                vehicle_count[vehicleType] = 1;
            } else {
                vehicle_count[vehicleType]++;
            }
            available_vehicle.push(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "PLATE #")])
        }
        for (let y = 1; y < vehicle_log_data_list.content.length; y++) {
            const plateStatus = vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "STATUS")];
            const plate = vehicle_log_data_list.content[y][findTextInArray(vehicle_log_data_list, "PLATE #")];
            if (plateStatus === "AVAILABLE") {
            available_vehicle.push(plate);
            } else {
                // Remove the plate number from the available_vehicle array
                const plateIndex = available_vehicle.indexOf(plate);
                if (plateIndex !== -1) {
                    available_vehicle.splice(plateIndex, 1);
                }
            }
        }
        for (let x = 1; x < vehicle_data_list.content.length; x++) {
            for(let y = 0; y < available_vehicle.length; y++){
                if(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "PLATE #")] == available_vehicle[y]){
                    const vehicleType = vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")];
                    if (!available_vehicle_type.includes(vehicleType)) {
                        available_vehicle_type.push(vehicleType);
                        available_vehicle_count[vehicleType] = 1;
                    } else {
                        available_vehicle_count[vehicleType]++;
                    }
                }
            }
        }
        // Ascending order (default behavior)
        vehicle_type.sort();

        var vehicle_type_list = "";
        for(let x = 0; x < vehicle_type.length; x++){
            var count = 0;
            var actual_count = 0;
            count = vehicle_count[vehicle_type[x]]
            if(available_vehicle_count[vehicle_type[x]] == undefined){
                actual_count = 0
            }
            else{
                actual_count = available_vehicle_count[vehicle_type[x]];
            }
            vehicle_type_list += `
            <div class="card">
                <div class="card-content">
                    <div class="number" id="vehicle_type${x + 1}">${actual_count}/${count}</div>
                    <div class="card-name">${toProperCase(splitText(vehicle_type[x], 1))}<br>${toProperCase(splitText(vehicle_type[x], 2))}</div>
                </div>
                <div class="icon-box">
                    <i class="fa-solid fa-truck-moving"></i>
                </div>
            </div>
            `
        }
        vehicle_type_container_logistics.innerHTML = vehicle_type_list

        function splitText(inputText, partNumber) {
            // Use a regular expression to split after "WHEELER" while keeping "6 WHEELER"
            let parts = inputText.split(/( WHEELER )/);
        
            if (parts.length === 3) {
            let firstPart = parts[0] + parts[1];
            let secondPart = parts[2];
        
            if (partNumber === 1) {
                return firstPart;
            } else if (partNumber === 2) {
                return secondPart;
            } else {
                return "Invalid part number. Use 1 for the first part or 2 for the second part.";
            }
            } else {
            return "The word 'WHEELER' was not found in the input text.";
            }
        }
        
        function toProperCase(inputString) {
            return inputString.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
                return match.toUpperCase();
            });
        }

        // driver_data
        const search_wrapper2 = document.getElementById("search_driver");
        const input_box2 = search_wrapper2.querySelector("input");
        const sugg_box2 = search_wrapper2.querySelector(".autocom_box");
        var driver_data = [];
        for(let x = 1; x < employee_data_list.content.length; x++){
            if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
                var gender = employee_data_list.content[x][findTextInArray(employee_data_list, "GENDER")];
                if(gender == "MALE"){
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "AFFIX")]}`
                    driver_data.push(full_name);
                }
                else{
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[x][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                    driver_data.push(full_name);
                }
            }
        }
        input_box2.onkeyup = (e) => {
            let user_data = e.target.value;
            let empty_array = [];
            if (user_data) {
                empty_array = driver_data.filter((data) => {
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
        
        // truck_helper
        const plate_driver_truck_helper = document.getElementById("plate_driver_truck_helper");
        var truck_helper_count = document.getElementById("truck_helper_count");
        const add_item_button_truck_helper = document.getElementById("add_item_button");
        const remove_item_button_truck_helper = document.getElementById("remove_item_button");
        
        add_item_button_truck_helper.addEventListener("click", () => {
            truck_helper_count.value = parseInt(truck_helper_count.value) + 1; // Increment the counter for the next item
            var data = `
            <div class="wrapper">
                <label for="truck_helper">
                    <i class="fa-solid fa-id-card"></i>
                    Truck Helper ${truck_helper_count.value}
                </label><br>
                <div class="search_input" id="search_truck_helper">
                    <input type="text" autocomplete="off" name="truck_helper${truck_helper_count.value}" id="truck_helper${truck_helper_count.value}" class="form-control" required placeholder="Type to Search Truck Helper Name...">
                    <div class="autocom_box">
                    </div>
                    <div class="icon"><i class="fas fa-search"></i></div>
                </div>
            </div>
            `
            plate_driver_truck_helper.insertAdjacentHTML("beforeend", data);
            add_event_function();
            if (truck_helper_count.value > 1) {
                remove_item_button.style.display = "block";
            }
        })

        add_event_function();

        function add_event_function(){
            const search_wrapper5 = document.querySelectorAll("#search_truck_helper");
            search_wrapper5.forEach((search_wrapper) => {
                const input_box5 = search_wrapper.querySelector("input");
                const sugg_box5 = search_wrapper.querySelector(".autocom_box");
                var data_value5 = [];
                for(let x = 1; x < employee_data_list.content.length; x++){
                    if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
                        var gender = employee_data_list.content[x][findTextInArray(employee_data_list, "GENDER")];
                        if(gender == "MALE"){
                            var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "AFFIX")]}`
                            data_value5.push(full_name);
                        }
                        else{
                            var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[x][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                            data_value5.push(full_name);
                        }
                    }
                }
                input_box5.onkeyup = (e) => {
                    let user_data = e.target.value;
                    let empty_array = [];
                    if (user_data) {
                        empty_array = data_value5.filter((data) => {
                            return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
                        });
                        empty_array = empty_array.map((data) => {
                            return '<li>' + data + '</li>';
                        });
                        search_wrapper.classList.add("active");
                        show_suggestions5(empty_array);
                    } else {
                        search_wrapper.classList.remove("active");
                    }
                };
                sugg_box5.addEventListener("click", (e) => {
                    if (e.target.tagName === "LI") {
                        select5(e.target.innerHTML);
                    }
                });
                function select5(element) {
                    let select_user_data = element;
                    input_box5.value = select_user_data;
                    search_wrapper.classList.remove("active");
                }
                function show_suggestions5(list) {
                    let list_data;
                    if (!list.length) {
                        user_value = input_box5.value;
                        list_data = '<li>' + user_value + '</li>';
                    } else {
                        list_data = list.join("");
                    }
                    sugg_box5.innerHTML = list_data;
                }
            })
        }

        remove_item_button_truck_helper.addEventListener("click", () => {
            const truckHelpers = plate_driver_truck_helper.querySelectorAll(".wrapper");
            const lastTruckHelper = truckHelpers[truckHelpers.length - 1];
            if (truckHelpers.length > 1) {
                plate_driver_truck_helper.removeChild(lastTruckHelper);
                truck_helper_count.value = parseInt(truck_helper_count.value) - 1;
                if (truck_helper_count.value === 1) {
                    remove_item_button.style.display = "none";
                }
            }
        });

        // vehicle_list_section 
        const total_vehicle_vehicle_list_section = document.querySelector("#total_vehicle");
        const available_vehicle_vehicle_list_section = document.querySelector("#available_vehicle");
        const on_hauling_vehicle_vehicle_list_section = document.querySelector("#on_hauling_vehicle");
        const under_maintenance_vehicle_vehicle_list_section = document.querySelector("#under_maintenance_vehicle");
        const for_maintenance_vehicle_vehicle_list_section = document.querySelector("#for_maintenance_vehicle");        
        var data_value3 = [];
        var total_vehicle_counter_vehicle_list_section = 0;
        for (x = 1; x < vehicle_data_list.content.length; x++) {
            data_value3.push(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "PLATE #")]);
            total_vehicle_counter_vehicle_list_section += 1;
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
        total_vehicle_vehicle_list_section.innerHTML = total_vehicle_counter_vehicle_list_section;
        available_vehicle_vehicle_list_section.innerHTML = total_vehicle_counter_vehicle_list_section - (for_maintenance_vehicle_counter_logistics + under_maintenance_vehicle_counter_logistics + on_hauling_vehicle_counter_logistics) ;
        on_hauling_vehicle_vehicle_list_section.innerHTML = on_hauling_vehicle_counter_logistics;
        under_maintenance_vehicle_vehicle_list_section.innerHTML = under_maintenance_vehicle_counter_logistics;
        for_maintenance_vehicle_vehicle_list_section.innerHTML = for_maintenance_vehicle_counter_logistics;
        
        const search_wrapper3 = document.getElementById("search_plate_no");
        const input_box3 = search_wrapper3.querySelector("input");
        const sugg_box3 = search_wrapper3.querySelector(".autocom_box");
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

        const search_wrapper4 = document.getElementById("maintenance_plate_no");
        const input_box4 = search_wrapper4.querySelector("input");
        const sugg_box4 = search_wrapper4.querySelector(".autocom_box");
        var data_value4 = [];
        
        input_box4.onkeyup = (e) => {
            let user_data = e.target.value;
            let empty_array = [];
            if (user_data) {
                empty_array = data_value4.filter((data) => {
                    return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase());
                });
                empty_array = empty_array.map((data) => {
                    return '<li>' + data + '</li>';
                });
                search_wrapper4.classList.add("active");
                show_suggestions4(empty_array);
            } else {
                search_wrapper4.classList.remove("active");
            }
        };
    
        sugg_box4.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                select4(e.target.innerHTML);
            }
        });
    
        function select4(element) {
            let select_user_data = element;
            input_box4.value = select_user_data;
            search_wrapper4.classList.remove("active");            
        }
    
        function show_suggestions4(list) {
            let list_data;
            if (!list.length) {
                user_value = input_box4.value;
                list_data = '<li>' + user_value + '</li>';
            } else {
                list_data = list.join("");
            }
            sugg_box4.innerHTML = list_data;
        }    

        // ltf_data_list
        const search_ltf_form_no = document.getElementById("search_ltf_form_no");
        const search_ltf_form_no_button = document.getElementById("search_ltf_form_no_button");
        const clear_ltf_form_no_button = document.getElementById("clear_ltf_form_no_button");
        const search_mtf_form_no = document.getElementById("search_mtf_form_no");
        const search_mtf_form_no_button = document.getElementById("search_mtf_form_no_button");
        const clear_mtf_form_no_button = document.getElementById("clear_mtf_form_no_button");
        const mtf_form_no = document.getElementById("mtf_form_no");
        const client = document.getElementById("client");
        const type_of_waste = document.getElementById("type_of_waste");
        const hauling_date = document.getElementById("hauling_date");
        const hauling_time = document.getElementById("hauling_time");
        const weight = document.getElementById("weight");
        const timestamp = document.getElementById("timestamp");
        const ltf_data = document.getElementById("ltf_data");

        const ltf_form_no = document.getElementById("ltf_form_no");
        var last_row = ltf_data_list.content.length -1;        
        var data_info = ltf_data_list.content[last_row][findTextInArray(ltf_data_list, "LTF #")];
        var data_counter = data_info.substring(9,12);
        var year = new Date().getFullYear();
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(3, "0");
        ltf_form_no.value = `LTF${year}${month}${data_counter}`
    
        // Search Button
        search_mtf_form_no_button.addEventListener("click", () => {
            for(b=0; b<=newElements_logistics.length; b++){
                for(a=1; a < mtf_data_list.content.length; a++){
                    if(newElements_logistics[b] == mtf_data_list.content[a][findTextInArray(mtf_data_list, "MTF #")]){
                        var data_value;
                        if(search_mtf_form_no.value == mtf_data_list.content[a][findTextInArray(mtf_data_list, "MTF #")]){
                            data_value =`
                            MTF #: ${mtf_data_list.content[a][findTextInArray(mtf_data_list, "MTF #")]}<br>
                            CLIENT: ${findClientName(mtf_data_list.content[a][findTextInArray(mtf_data_list, "CLIENT ID")])}<br>
                            WASTE CODE: ${findWasteCode(mtf_data_list.content[a][findTextInArray(mtf_data_list, "WASTE ID")])}<br>
                            WASTE DESCRIPTION: ${findWasteName(mtf_data_list.content[a][findTextInArray(mtf_data_list, "CLIENT ID")], mtf_data_list.content[a][findTextInArray(mtf_data_list, "WASTE ID")])}<br>
                            HAULING DATE: ${date_decoder(mtf_data_list.content[a][findTextInArray(mtf_data_list, "HAULING DATE")])}<br>
                            HAULING TIME: ${time_decoder(mtf_data_list.content[a][findTextInArray(mtf_data_list, "HAULING TIME")])}<br>
                            TYPE OF VEHICLE: ${mtf_data_list.content[a][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")]}<br>
                            REMARKS: ${mtf_data_list.content[a][findTextInArray(mtf_data_list, "REMARKS")]}<br>
                            SUBMITTED BY: ${mtf_data_list.content[a][findTextInArray(mtf_data_list, "SUBMITTED BY")]}<br>
                            `
                            mtf_form_no.value = mtf_data_list.content[a][findTextInArray(mtf_data_list, "MTF #")];
                            client.value = findClientName(mtf_data_list.content[a][findTextInArray(mtf_data_list, "CLIENT ID")]);
                            type_of_waste.value = mtf_data_list.content[a][findTextInArray(mtf_data_list, "WASTE ID")];
                            hauling_date.value = date_decoder(mtf_data_list.content[a][findTextInArray(mtf_data_list, "HAULING DATE")]);
                            hauling_time.value = time_decoder(mtf_data_list.content[a][findTextInArray(mtf_data_list, "HAULING TIME")]);
                            weight.value = mtf_data_list.content[a][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")];
                            ltf_data.style.display = "block";
                        }        
                        if(data_value == undefined){
                            search_mtf_result.innerHTML = `
                            <div class="search_ltf_result">
                            <h2>INFORMATION</h2>
                            No Data Found
                            </div><br>`            
                        }
                        else{
                            search_mtf_result.innerHTML = `
                            <div class="search_ltf_result">
                            <h2>INFORMATION</h2>
                            ${data_value}
                            </div><br>`
                        }
                    }  
                }  
            }  
        });
        
        search_ltf_form_no_button.addEventListener("click", () => {
            for(b=0; b<=newElements2_logistics.length; b++){
                for(a=1; a < ltf_data_list.content.length; a++){
                    if(newElements2_logistics[b] == ltf_data_list.content[a][findTextInArray(ltf_data_list, "LTF #")]){
                        var data_value;
                        if(search_ltf_form_no.value == ltf_data_list.content[a][findTextInArray(ltf_data_list, "LTF #")]){
                            data_value =`
                            LTF #: ${ltf_data_list.content[a][findTextInArray(ltf_data_list, "LTF #")]}<br>
                            MTF #: ${ltf_data_list.content[a][findTextInArray(ltf_data_list, "MTF #")]}<br>
                            CLIENT: ${findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")])}<br>
                            WASTE CODE: ${findWasteCode(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}<br>
                            WASTE DESCRIPTION: ${findWasteName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")], mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}<br>
                            HAULING DATE: ${date_decoder(ltf_data_list.content[a][findTextInArray(ltf_data_list, "HAULING DATE")])}<br>
                            HAULING TIME: ${time_decoder(ltf_data_list.content[a][findTextInArray(ltf_data_list, "HAULING TIME")])}<br>
                            TYPE OF VEHICLE: ${ltf_data_list.content[a][findTextInArray(ltf_data_list, "TYPE OF VEHICLE")]}<br>
                            REMARKS: ${ltf_data_list.content[a][findTextInArray(ltf_data_list, "REMARKS")]}<br>
                            SUBMITTED BY: ${ltf_data_list.content[a][findTextInArray(ltf_data_list, "SUBMITTED BY")]}<br>
                            `
                            mtf_form_no.value = ltf_data_list.content[a][findTextInArray(ltf_data_list, "MTF #")];
                            client.value = findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")]);
                            type_of_waste.value = mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")];
                            hauling_date.value = date_decoder(ltf_data_list.content[a][findTextInArray(ltf_data_list, "HAULING DATE")]);
                            hauling_time.value = time_decoder(ltf_data_list.content[a][findTextInArray(ltf_data_list, "HAULING TIME")]);
                            weight.value = ltf_data_list.content[a][findTextInArray(ltf_data_list, "TYPE OF VEHICLE")];
                            timestamp.value = ltf_data_list.content[a][findTextInArray(ltf_data_list, "CREATED AT")];
                            ltf_data.style.display = "block";
                        }        
                        if(data_value == undefined){
                            search_mtf_result.innerHTML = `
                            <div class="search_ltf_result">
                            <h2>INFORMATION</h2>
                            No Data Found
                            </div><br>`            
                        }
                        else{
                            search_mtf_result.innerHTML = `
                            <div class="search_ltf_result">
                            <h2>INFORMATION</h2>
                            ${data_value}
                            </div><br>`
                        }
                    }  
                }  
            }  
        });
    
        // Clear Button
        clear_mtf_form_no_button.addEventListener("click", () => {
            search_mtf_result.innerHTML = ``;
            search_mtf_form_no.value = ``;
        })

        // vehicle_list_section
        const vehicle_list_section = document.querySelector("#vehicle_list_section"); 
        const new_vehicle_tab = vehicle_list_section.querySelector("#new_vehicle_tab");
        const update_vehicle_tab = vehicle_list_section.querySelector("#update_vehicle_tab");
        const new_vehicle_button = vehicle_list_section.querySelector("#new_vehicle_button");
        const update_vehicle_button = vehicle_list_section.querySelector("#update_vehicle_button");

        new_vehicle_button.addEventListener("click", () => {
            if(new_vehicle_tab.style.display == "block"){
                new_vehicle_tab.style.display = "none";
                update_vehicle_tab.style.display = "none";
            }
            else{
                new_vehicle_tab.style.display = "block";
                update_vehicle_tab.style.display = "none";
            }
        })
        update_vehicle_button.addEventListener("click", () => {
            if(update_vehicle_tab.style.display == "block"){
                update_vehicle_tab.style.display = "none";
                new_vehicle_tab.style.display = "none";
            }
            else{
                update_vehicle_tab.style.display = "block";
                new_vehicle_tab.style.display = "none";
            }
        })

        // vehicle_maintenance_form
        const vehicle_maintenance_form = document.querySelector("#vehicle_maintenance_form"); 
        const vehicle_maintenance_tab = vehicle_maintenance_form.querySelector("#vehicle_maintenance_tab");
        const vehicle_maintenance_button = vehicle_maintenance_form.querySelector("#vehicle_maintenance_button");

        vehicle_maintenance_button.addEventListener("click", () => {
            if(vehicle_maintenance_tab.style.display == "block"){
                vehicle_maintenance_tab.style.display = "none";
                // update_vehicle_tab.style.display = "none";
            }
            else{
                vehicle_maintenance_tab.style.display = "block";
                // update_vehicle_tab.style.display = "none";
            }
        })
        // update_vehicle_button.addEventListener("click", () => {
        //     if(update_vehicle_tab.style.display == "block"){
        //         update_vehicle_tab.style.display = "none";
        //         new_vehicle_tab.style.display = "none";
        //     }
        //     else{
        //         update_vehicle_tab.style.display = "block";
        //         new_vehicle_tab.style.display = "none";
        //     }
        // })

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
        
            for(let x = 1; x < ltf_data_list.content.length; x++){
                var hauling_date = new Date(ltf_data_list.content[x][findTextInArray(ltf_data_list, "HAULING DATE")])
                var mtf_data = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")]
                var ltf_data = ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]
                var date_data = ltf_data_list.content[x][findTextInArray(ltf_data_list, "DEPARTURE DATE")]
                var time_data = ltf_data_list.content[x][findTextInArray(ltf_data_list, "DEPARTURE TIME")]
                var client_id_data = ltf_data_list.content[x][findTextInArray(ltf_data_list, "CLIENT ID")]
                var waste_id_data = ltf_data_list.content[x][findTextInArray(ltf_data_list, "WASTE ID")]
                var type_of_vehicle_data = ltf_data_list.content[x][findTextInArray(ltf_data_list, "TYPE OF VEHICLE")]
                var plate_no_data = ltf_data_list.content[x][findTextInArray(ltf_data_list, "PLATE #")]
                var report_from = new Date(report_date_from.value)
                var report_to = new Date(report_date_to.value)
                var datePortion = date_data.split("T")[0];
                var timePortion = time_data.split("T")[1];
                var datetime = new Date(datePortion + "T" + timePortion);
                if (hauling_date >= report_from && hauling_date <= report_to) {
                    filteredData.push({
                    ltf_data,
                    mtf_data,
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
                    <td>${item.ltf_data}</td>
                    <td>${item.mtf_data}</td>
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
                                        <th>LTF #</td>
                                        <th>MTF #</td>
                                        <th>HAULING DATE</th>
                                        <th>DEPARTURE DATE</th>
                                        <th>DEPARTURE TIME</th>
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