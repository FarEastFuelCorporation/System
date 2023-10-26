document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const vehicle_log_response_promise = fetch('https://script.google.com/macros/s/AKfycbwOVO1qi9ac0YojlrZUh-XMYMe_gAeO2bg_wU_lSRdBkLgmJKQuzQuq41lzvSOjKfzA/exec');
        const ftf_response_promise = fetch('https://script.google.com/macros/s/AKfycby_KPLGaMLvzccQFKwKCZVrI1mkOzVDh7cySezC_OiZW6YVOR4mC5XkNbwllOe_Ua6TGA/exec');
        const frf_response_promise = fetch('https://script.google.com/macros/s/AKfycbz1BRgSEEjm-WwwEViGKbtqG_HodoU2O-Bw1DMySKnOytZJVtq3XmfOc4mbVhnc7Rke/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');
        const cod_response_promise = fetch('https://script.google.com/macros/s/AKfycbzgiOuXizUVviCsLVfihqYN9HJ3pyNr7ElHoCl3JGkbtQnChnm2U42yQuLd4UMH0ci5/exec');
        const bpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyux0GBj9tk6quRz46IkXa0VemEDAi-v2iEHx7C_6OFi416ERkv_BFtKqBmbw-bxaaiFQ/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');
        const prf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec');
        const pof_response_promise = fetch('https://script.google.com/macros/s/AKfycby9i2KfOZ_uF7-JUPX8qpXg7Jewmw6oU3EfUTpXiwnRRB91_qIW3xAVNy5SZBN1YhVzzg/exec');
        const idf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyXPvq606vmfSlFG3nVjYuJLN8Jnv4BFGbhEmDp6e4wLL1kUQVa4kIi2dGGRKuSklT2bg/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            employee_response,
            vehicle_response,
            vehicle_log_response,
            ftf_response,
            frf_response,
            mtf_response,
            ltf_response,
            wcf_response,
            sf_response,
            tpf_response,
            cod_response,
            bpf_response,
            irf_response,
            prf_response,
            pof_response,
            idf_response,
            qlf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            employee_response_promise,
            vehicle_response_promise,
            vehicle_log_response_promise,
            ftf_response_promise,
            frf_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise,
            tpf_response_promise,
            cod_response_promise,
            bpf_response_promise,
            irf_response_promise,
            prf_response_promise,
            pof_response_promise,
            idf_response_promise,
            qlf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const employee_data_list  = await employee_response.json();
        const vehicle_data  = await vehicle_response.json();
        const vehicle_log_data  = await vehicle_log_response.json();
        const ftf_data_list  = await ftf_response.json();
        const frf_data_list  = await frf_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
        const tpf_data_list  = await tpf_response.json();
        const cod_data_list  = await cod_response.json();
        const bpf_data_list  = await bpf_response.json();
        const irf_data_list  = await irf_response.json();
        const prf_data_list  = await prf_response.json();
        const pof_data_list  = await pof_response.json();
        const idf_data_list  = await idf_response.json();
        const qlf_data_list  = await qlf_response.json();

        // Code that depends on the fetched data
        // username_data
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        // const users = document.querySelectorAll("#user");
        const irf_user = document.getElementById("irf_user");

        // users.forEach(user => {user.value = username_data_list.content[10][findTextInArray(username_data_list, "NAME")]})
        irf_user.value = username_data_list.content[10][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[10][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[10][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[10][findTextInArray(username_data_list, "DEPARTMENT")];

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

        // ap_accounting_dashboard
        const ap_accounting_dashboard = document.querySelector("#accounting_head_dashboard");

        const source_of_fund_ap_accounting = ap_accounting_dashboard.querySelector("#source_of_fund");
        const trucking_fund_ap_accounting = ap_accounting_dashboard.querySelector("#trucking_fund");
        const hauling_fund_ap_accounting = ap_accounting_dashboard.querySelector("#hauling_fund");
        const diesel_fund_ap_accounting = ap_accounting_dashboard.querySelector("#diesel_fund");
        const gasoline_fund_ap_accounting = ap_accounting_dashboard.querySelector("#gasoline_fund");
        const sir_ruels_fund_ap_accounting = ap_accounting_dashboard.querySelector("#sir_ruels_fund");
        const scrap_sales_ap_accounting = ap_accounting_dashboard.querySelector("#scrap_sales");
        const mold_runner_sales_ap_accounting = ap_accounting_dashboard.querySelector("#mold_runner_sales");
        const truck_scale_collection_ap_accounting = ap_accounting_dashboard.querySelector("#truck_scale_collection");
        const house_collection_ap_accounting = ap_accounting_dashboard.querySelector("#house_collection");
        const representation_fund_ap_accounting = ap_accounting_dashboard.querySelector("#representation_fund");
        const request_history_list_ap_accounting = ap_accounting_dashboard.querySelector("#request_history_list");
        const transfer_history_list_ap_accounting = ap_accounting_dashboard.querySelector("#transfer_history_list");
        
        var source_of_fund = 0;
        var trucking_fund = 0;
        var hauling_fund = 0;
        var diesel_fund = 0;
        var gasoline_fund = 0;
        var sir_ruels_fund = 0;
        var scrap_sales = 0;
        var mold_runner_sales = 0;
        var truck_scale_collection = 0;
        var house_collection = 0;
        var representation_fund = 0;

        for (let i = 1; i < ftf_data_list.content.length; i++) {
            // fund_source
            if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "SOURCE OF FUND") {
                source_of_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "HAULING FUND") {
                hauling_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "TRUCKING FUND") {
                trucking_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "DIESEL FUND") {
                diesel_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "GASOLINE FUND") {
                gasoline_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "SIR RUEL'S FUND") {
                sir_ruels_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "SCRAP SALES") {
                scrap_sales -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "MOLD RUNNER SALES") {
                mold_runner_sales -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "TRUCK SCALE COLLECTION") {
                truck_scale_collection -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "HOUSE COLLECTION") {
                house_collection -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "REPRESENTATION FUND") {
                representation_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            // fund_allocation
            if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "SOURCE OF FUND") {
                source_of_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "HAULING FUND") {
                hauling_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "TRUCKING FUND") {
                trucking_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "DIESEL FUND") {
                diesel_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "GASOLINE FUND") {
                gasoline_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "SIR RUEL'S FUND") {
                sir_ruels_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "SCRAP SALES") {
                scrap_sales += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "MOLD RUNNER SALES") {
                mold_runner_sales += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "TRUCK SCALE COLLECTION") {
                truck_scale_collection += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "HOUSE COLLECTION") {
                house_collection += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
            else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "REPRESENTATION FUND") {
                representation_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
            }
        }
        
        source_of_fund_ap_accounting.innerText = formatNumber(source_of_fund);
        trucking_fund_ap_accounting.innerText = formatNumber(trucking_fund);
        hauling_fund_ap_accounting.innerText = formatNumber(hauling_fund);
        diesel_fund_ap_accounting.innerText = formatNumber(diesel_fund);
        gasoline_fund_ap_accounting.innerText = formatNumber(gasoline_fund);
        sir_ruels_fund_ap_accounting.innerText = formatNumber(sir_ruels_fund);
        scrap_sales_ap_accounting.innerText = formatNumber(scrap_sales);
        mold_runner_sales_ap_accounting.innerText = formatNumber(mold_runner_sales);
        truck_scale_collection_ap_accounting.innerText = formatNumber(truck_scale_collection);
        house_collection_ap_accounting.innerText = formatNumber(house_collection);
        representation_fund_ap_accounting.innerText = formatNumber(representation_fund);
        
        // pending_list
        var data = "";
        var data_value_counter = 0;
        for(let x = 1; x < frf_data_list.content.length; x++){
            data_value_counter += 1;
            var button = "";
            var button2 = "";
            var button3 = "";
            if(frf_data_list.content[x][findTextInArray(frf_data_list, "APPROVED AMOUNT")] == "" && frf_data_list.content[x][findTextInArray(frf_data_list, "STATUS")] !== "DISAPPROVED"){
                button = `
                <form action="https://script.google.com/macros/s/AKfycbwi5iYRP9xlinY9nS9YBRW7Alex9LdImCWhKBda6VtrIiDmPvH72AUlW-CgEPNwJCg/exec" method="post">
                    <input type="hidden" name="frf_no" id="frf_no" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "FRF #")]}">
                    <input type="hidden" name="fund_allocation" id="fund_allocation" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "FUND ALLOCATION")]}">
                    <input type="hidden" name="fund_amount" id="fund_amount" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "REQUESTED AMOUNT")]}">
                    <input type="hidden" name="purpose" id="purpose" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "PURPOSE")]}">
                    <input type="hidden" name="submitted_by" id="submitted_by" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "SUBMITTED BY")]}">
                    <input type="hidden" name="timestamp" id="timestamp" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "CREATED AT")]}">
                    <button type="submit" style="background-color: transparent !important; padding:0; color: #198754; border: none">
                        <i class="fa-solid fa-thumbs-up"></i>
                    </button>
                </form>
                `
            }
            if(frf_data_list.content[x][findTextInArray(frf_data_list, "APPROVED AMOUNT")] == "" && frf_data_list.content[x][findTextInArray(frf_data_list, "STATUS")] !== "DISAPPROVED"){
                button2 = `
                <form action="https://script.google.com/macros/s/AKfycbzq-UG0qBDytOpODyfXMWVKEPYyKHKlfBkqTOm2Aje_JiYeSicB4i6aoxE97Zc9MSyTSQ/exec" method="post">
                <input type="hidden" name="frf_no" id="frf_no" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "FRF #")]}">
                <input type="hidden" name="fund_allocation" id="fund_allocation" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "FUND ALLOCATION")]}">
                <input type="hidden" name="fund_amount" id="fund_amount" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "REQUESTED AMOUNT")]}">
                <input type="hidden" name="purpose" id="purpose" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "PURPOSE")]}">
                <input type="hidden" name="submitted_by" id="submitted_by" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "SUBMITTED BY")]}">
                <input type="hidden" name="timestamp" id="timestamp" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "CREATED AT")]}">
                <button type="submit" style="background-color: transparent !important; padding:0; color: #dc3545; border: none">
                        <i class="fa-solid fa-thumbs-down"></i>
                    </button>
                </form>
                `
            }
            if(frf_data_list.content[x][findTextInArray(frf_data_list, "APPROVED AMOUNT")] == "" && frf_data_list.content[x][findTextInArray(frf_data_list, "STATUS")] !== "DISAPPROVED"){
                button3 = `
                <button type="button" id="amount_tab_button" style="background-color: transparent !important; padding:0; color: #f6d754; border: none;">
                    <i class="fa-solid fa-pen-to-square" style="font-size: 30px;"></i>
                    <input type="hidden" name="frf_no" id="frf_no" value="${frf_data_list.content[x][findTextInArray(frf_data_list, "FRF #")]}">
                </button>
                `
            }
            var approved_date = "";
            var approved_time = "";
            var duration = "";
            if(frf_data_list.content[x][findTextInArray(frf_data_list, "UPDATED AT")] !== ""){
                approved_date = date_decoder(frf_data_list.content[x][findTextInArray(frf_data_list, "UPDATED AT")]);
                approved_time = time_decoder2(frf_data_list.content[x][findTextInArray(frf_data_list, "UPDATED AT")]);
                duration = calculateTravelTime(date_decoder(frf_data_list.content[x][findTextInArray(frf_data_list, "CREATED AT")]),time_decoder2(frf_data_list.content[x][findTextInArray(frf_data_list, "CREATED AT")]),date_decoder(frf_data_list.content[x][findTextInArray(frf_data_list, "UPDATED AT")]),time_decoder2(frf_data_list.content[x][findTextInArray(frf_data_list, "UPDATED AT")]))
            }

            data += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${frf_data_list.content[x][findTextInArray(frf_data_list, "FRF #")]}</td>
                <td>${date_decoder(frf_data_list.content[x][findTextInArray(frf_data_list, "CREATED AT")])}<br>${time_decoder2(frf_data_list.content[x][findTextInArray(frf_data_list, "CREATED AT")])}</td>
                <td>${frf_data_list.content[x][findTextInArray(frf_data_list, "FUND ALLOCATION")]}</td>
                <td>${formatNumber(frf_data_list.content[x][findTextInArray(frf_data_list, "REQUESTED AMOUNT")])}</td>
                <td>${frf_data_list.content[x][findTextInArray(frf_data_list, "PURPOSE")]}</td>
                <td>${frf_data_list.content[x][findTextInArray(frf_data_list, "SUBMITTED BY")]}</td>
                <td>${formatNumber(frf_data_list.content[x][findTextInArray(frf_data_list, "APPROVED AMOUNT")])}</td>
                <td>${frf_data_list.content[x][findTextInArray(frf_data_list, "APPROVED BY")]}</td>
                <td>${approved_date}<br>${approved_time}</td>
                <td>${duration}</td>
                <td>${frf_data_list.content[x][findTextInArray(frf_data_list, "STATUS")]}</td>
                <td>${button}</td>
                <td class="px-0">${button2}</td>
                <td>${button3}</td>
            </tr>
            `
        }
        request_history_list_ap_accounting.innerHTML = data;

        const amount_tab_buttons = document.querySelectorAll("#amount_tab_button");
        const amount_tab = document.getElementById("amount_tab");
        const frf_no =  amount_tab.querySelector("#frf_no");
        const fund_allocation =  amount_tab.querySelector("#fund_allocation");
        const fund_amount =  amount_tab.querySelector("#fund_amount");
        const purpose =  amount_tab.querySelector("#purpose");
        const submitted_by =  amount_tab.querySelector("#submitted_by");
        const timestamp =  amount_tab.querySelector("#timestamp");
        const close_button =  amount_tab.querySelector("#close_button");

        amount_tab_buttons.forEach(amount_tab_button => {
            amount_tab_button.addEventListener("click", () => {
                if(amount_tab.style.display == "block"){
                    amount_tab.style.display = "none";
                }
                else{
                    amount_tab.style.display = "block";
                }
                const input_value = amount_tab_button.querySelector("input");
                for(let x = 1; x < frf_data_list.content.length; x++){
                    if(input_value.value == frf_data_list.content[x][0]){
                        frf_no.value = frf_data_list.content[x][0]
                        fund_allocation.value = frf_data_list.content[x][1]
                        console.log("🚀 ~ file: user10.js:283 ~ amount_tab_button.addEventListener ~ fund_allocation.value:", fund_allocation.value)
                        fund_amount.value = frf_data_list.content[x][2]
                        purpose.value = frf_data_list.content[x][3]
                        submitted_by.value = frf_data_list.content[x][5]
                        timestamp.value = frf_data_list.content[x][8]
                    }
                }
            })
            close_button.addEventListener("click", () => {
                amount_tab.style.display = "none";
            })
        })

        var data = "";
        var data_value_counter = 0;
        for(let x = 1; x < ftf_data_list.content.length; x++){
            data_value_counter += 1;
            data += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${ftf_data_list.content[x][0]}</td>
                <td>${date_decoder(ftf_data_list.content[x][6])} / ${time_decoder2(ftf_data_list.content[x][6])}</td>
                <td>${ftf_data_list.content[x][1]}</td>
                <td>${ftf_data_list.content[x][2]}</td>
                <td>${formatNumber(ftf_data_list.content[x][3])}</td>
                <td>${ftf_data_list.content[x][5]}</td>
                <td>${ftf_data_list.content[x][4]}</td>
            </tr>
            `
        }
        transfer_history_list_ap_accounting.innerHTML = data;
        
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
