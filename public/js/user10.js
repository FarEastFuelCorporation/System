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
        const ctf_response_promise = fetch('https://script.google.com/macros/s/AKfycbx1baTJSEL1piW4QrLRRuqIw0FW1kvz37Zo3NaMfJivPZUZObrkuDlcSZaa8GDUw9Td/exec');
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
            ctf_response,
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
            ctf_response_promise,
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
        const ctf_data_list  = await ctf_response.json();
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
        const users = document.querySelectorAll("#user");
        const irf_user = document.getElementById("irf_user");
        
        // users.forEach(user => {user.value = username_data_list.content[10][findTextInArray(username_data_list, "NAME")]})
        const user_name = username_data_list.content[10][findTextInArray(username_data_list, "NAME")];
        users.forEach(user => {user.value = username_data_list.content[10][findTextInArray(username_data_list, "NAME")]})
        irf_user.value = username_data_list.content[10][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[10][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[10][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[10][findTextInArray(username_data_list, "DEPARTMENT")];

        // marketing_dashboard
        const booked_transactions_marketing = document.getElementById("booked_transactions");
        const for_hauling_container_marketing = document.getElementById("for_hauling");
        const for_receiving_container_marketing = document.getElementById("for_receiving");
        const for_warehousing_container_marketing = document.getElementById("for_warehousing");
        const for_sorting_container_marketing = document.getElementById("for_sorting");
        const for_treatment_container_marketing = document.getElementById("for_treatment");
        const for_certification_container_marketing = document.getElementById("for_certification");
        const for_billing_container_marketing = document.getElementById("for_billing");
        const for_collection_container_marketing = document.getElementById("for_collection");
        const finished_marketing = document.getElementById("finished");
        const pending_list_marketing = document.getElementById("pending_list");
        // billing
        const billing_dashboard = document.querySelector("#billing_dashboard");
        const certified_counter_billing = billing_dashboard.querySelector("#certified_counter");
        const pending_counter_billing = billing_dashboard.querySelector("#pending_counter");
        const billed_counter_billing = billing_dashboard.querySelector("#billed_counter");
        const pending_list_billing = billing_dashboard.querySelector("#pending_list");
        let sf_transaction_billing = []; 
        let sf_tpf_transaction_billing = [];
        // collection
        const collection_dashboard = document.querySelector("#collection_dashboard");
        const billed_counter_collection = collection_dashboard.querySelector("#billed_counter");
        const pending_counter_collection = collection_dashboard.querySelector("#pending_counter");
        const collected_counter_collection = collection_dashboard.querySelector("#collected_counter");
        const billed_counter_amount_collection = collection_dashboard.querySelector("#billed_counter_amount");
        const pending_counter_amount_collection = collection_dashboard.querySelector("#pending_counter_amount");
        const collected_counter_amount_collection = collection_dashboard.querySelector("#collected_counter_amount");
        const pending_list_collection = collection_dashboard.querySelector("#pending_list");
        let bpf_transaction_collection = []; 
        let bpf_ctf_transaction_collection = []; 
        let bpf_transaction_amount_collection = 0; 
        let bpf_ctf_transaction_amount_collection = 0;
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
            // marketing
            var for_hauling_marketing = 0;
            var for_receiving_marketing = 0;
            var for_warehousing_marketing = 0;
            var for_sorting_marketing = 0;
            var for_treatment_marketing = 0;
            var for_certification_marketing = 0;
            var for_billing_marketing = 0;
            var for_collection_marketing = 0;
            var for_accounting_marketing = 0;

            var data_value_counter = 1;
            var data_value = "";
            for(let j = mtf_data_list.content.length - 1; j >= 1; j--){
                var status = "";
                var vehicle = "";
                // for logistics
                if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS" &&
                month_filter.value == formatMonth(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])){
                    vehicle = mtf_data_list.content[j][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")];
                    status = mtf_data_list.content[j][findTextInArray(mtf_data_list, "STATUS")];
                    if(status == "FOR HAULING"){
                        for_hauling_marketing += 1;
                    } 
                    else if(status == "FOR RECEIVING"){
                        for_receiving_marketing += 1;
                    } 
                    else if(status == "FOR SORTING"){
                        for_sorting_marketing += 1;
                    }
                    else if(status == "FOR TREATMENT"){
                        for_treatment_marketing += 1;
                    }
                    else if(status == "FOR CERTIFICATION"){
                        for_certification_marketing += 1;
                    }
                    else if(status == "FOR BILLING"){
                        for_billing_marketing += 1;
                    }
                    else if(status == "FOR COLLECTION"){
                        for_collection_marketing += 1;
                    }
                    else if(status == "FOR WAREHOUSING"){
                        for_warehousing_marketing += 1;
                    }
                    else if(status == "FOR ACCOUNTING"){
                        for_accounting_marketing += 1;
                    }
                }
                else if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS" &&
                month_filter.value == "ALL"){
                    vehicle = mtf_data_list.content[j][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")];
                    status = mtf_data_list.content[j][findTextInArray(mtf_data_list, "STATUS")];
                    if(status == "FOR HAULING"){
                        for_hauling_marketing += 1;
                    } 
                    else if(status == "FOR RECEIVING"){
                        for_receiving_marketing += 1;
                    } 
                    else if(status == "FOR SORTING"){
                        for_sorting_marketing += 1;
                    }
                    else if(status == "FOR TREATMENT"){
                        for_treatment_marketing += 1;
                    }
                    else if(status == "FOR CERTIFICATION"){
                        for_certification_marketing += 1;
                    }
                    else if(status == "FOR BILLING"){
                        for_billing_marketing += 1;
                    }
                    else if(status == "FOR COLLECTION"){
                        for_collection_marketing += 1;
                    }
                    else if(status == "FOR WAREHOUSING"){
                        for_warehousing_marketing += 1;
                    }
                    else if(status == "FOR ACCOUNTING"){
                        for_accounting_marketing += 1;
                    }
                }
                // for receiving
                else if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "RECEIVING" &&
                month_filter.value == formatMonth(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])){
                    vehicle = "PROVIDED BY CLIENT";
                    status = mtf_data_list.content[j][findTextInArray(mtf_data_list, "STATUS")];
                    if(status == "FOR HAULING"){
                        for_hauling_marketing += 1;
                    } 
                    else if(status == "FOR RECEIVING"){
                        for_receiving_marketing += 1;
                    } 
                    else if(status == "FOR SORTING"){
                        for_sorting_marketing += 1;
                    }
                    else if(status == "FOR TREATMENT"){
                        for_treatment_marketing += 1;
                    }
                    else if(status == "FOR CERTIFICATION"){
                        for_certification_marketing += 1;
                    }
                    else if(status == "FOR BILLING"){
                        for_billing_marketing += 1;
                    }
                    else if(status == "FOR COLLECTION"){
                        for_collection_marketing += 1;
                    }
                    else if(status == "FOR WAREHOUSING"){
                        for_warehousing_marketing += 1;
                    }
                    else if(status == "FOR ACCOUNTING"){
                        for_accounting_marketing += 1;
                    }
                }
                else if(mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")] == "RECEIVING" &&
                month_filter.value == "ALL"){
                    vehicle = "PROVIDED BY CLIENT";
                    status = mtf_data_list.content[j][findTextInArray(mtf_data_list, "STATUS")];
                    if(status == "FOR HAULING"){
                        for_hauling_marketing += 1;
                    } 
                    else if(status == "FOR RECEIVING"){
                        for_receiving_marketing += 1;
                    } 
                    else if(status == "FOR SORTING"){
                        for_sorting_marketing += 1;
                    }
                    else if(status == "FOR TREATMENT"){
                        for_treatment_marketing += 1;
                    }
                    else if(status == "FOR CERTIFICATION"){
                        for_certification_marketing += 1;
                    }
                    else if(status == "FOR BILLING"){
                        for_billing_marketing += 1;
                    }
                    else if(status == "FOR COLLECTION"){
                        for_collection_marketing += 1;
                    }
                    else if(status == "FOR WAREHOUSING"){
                        for_warehousing_marketing += 1;
                    }
                    else if(status == "FOR ACCOUNTING"){
                        for_accounting_marketing += 1;
                    }
                }
                var plate_no, driver_name;
                for(let x = 1; x < wcf_data_list.content.length; x++){
                    var mtf_no = mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")];
                    var mtf_wcf_no = wcf_data_list.content[x][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                    if(mtf_no == mtf_wcf_no){
                        plate_no = wcf_data_list.content[x][findTextInArray(wcf_data_list, "PLATE #")];
                        driver_name = findEmployeeName(wcf_data_list.content[x][findTextInArray(wcf_data_list, "DRIVER ID")]);
                        break
                    }
                    else{
                        plate_no = "PENDING";
                        driver_name = "PENDING";
                    }
                }
                for(let x = 1; x < ltf_data_list.content.length; x++){
                    var mtf_no = mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")];
                    var mtf_ltf_no = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                    if(mtf_no == mtf_ltf_no){
                        plate_no = ltf_data_list.content[x][findTextInArray(ltf_data_list, "PLATE #")];
                        driver_name = findEmployeeName(ltf_data_list.content[x][findTextInArray(ltf_data_list, "DRIVER ID")]);
                        break
                    }
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
                        <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "REMARKS")]}</td>
                        <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMITTED BY")]}</td>
                        <td>${plate_no}</td>
                        <td>${driver_name}</td>
                        <td>${status}</td>
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
                        <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "REMARKS")]}</td>
                        <td>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMITTED BY")]}</td>
                        <td>${plate_no}</td>
                        <td>${driver_name}</td>
                        <td>${status}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                    pending_list_marketing.innerHTML = data_value;
                }
            }
            booked_transactions_marketing.innerText = for_hauling_marketing + for_receiving_marketing + for_warehousing_marketing + for_sorting_marketing + for_treatment_marketing + for_certification_marketing + for_billing_marketing + for_collection_marketing + for_accounting_marketing;
            for_hauling_container_marketing.innerText = for_hauling_marketing;
            for_receiving_container_marketing.innerText = for_receiving_marketing;
            for_warehousing_container_marketing.innerText = for_warehousing_marketing;
            for_sorting_container_marketing.innerText = for_sorting_marketing;
            for_treatment_container_marketing.innerText = for_treatment_marketing;
            for_certification_container_marketing.innerText = for_certification_marketing;
            for_billing_container_marketing.innerText = for_billing_marketing;
            for_collection_container_marketing.innerText = for_collection_marketing;
            finished_marketing.innerText = for_accounting_marketing;
            
            // marketing 
            var options = {
                series: [for_hauling_marketing, for_receiving_marketing, for_warehousing_marketing, for_sorting_marketing, for_treatment_marketing, for_certification_marketing, for_billing_marketing, for_collection_marketing, for_accounting_marketing],
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
                labels: ["For Hauling", "For Receiving", "For Warehousing", "For Sorting", "For Treatment", "For Certification", "For Billing", "For Collection", "Finished"],
                colors: ["#dc3545", "#ffc107", "#c3c3c3", "#fd7e14", "#0d6efd", "#6610f2", "#0dcaf0", "#d63384", "#198754"], // Specify solid colors here
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

            // billing
            sf_transaction_billing = [];
            sf_tpf_transaction_billing = [];
            for (let i = 1; i < cod_data_list.content.length; i++) {
                if (!sf_transaction_billing.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]) &&
                month_filter.value == formatMonth(cod_data_list.content[i][findTextInArray(cod_data_list, "HAULING DATE")])) {
                    sf_transaction_billing.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
                }
                else if (!sf_transaction_billing.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]) &&
                month_filter.value == "ALL") {
                    sf_transaction_billing.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
                }
            }
    
            for (let i = 1; i < bpf_data_list.content.length; i++) {
                if (!sf_tpf_transaction_billing.includes(bpf_data_list.content[i][findTextInArray(bpf_data_list, "COD #")]) &&
                month_filter.value == formatMonth(bpf_data_list.content[i][findTextInArray(bpf_data_list, "HAULING DATE")])) {
                    sf_tpf_transaction_billing.push(bpf_data_list.content[i][findTextInArray(bpf_data_list, "COD #")]);
                }
                else if (!sf_tpf_transaction_billing.includes(bpf_data_list.content[i][findTextInArray(bpf_data_list, "COD #")]) &&
                month_filter.value == "ALL") {
                    sf_tpf_transaction_billing.push(bpf_data_list.content[i][findTextInArray(bpf_data_list, "COD #")]);
                }
            }

            // collection
            bpf_transaction_collection = [];
            bpf_ctf_transaction_collection = [];
            bpf_transaction_amount_collection = 0;
            bpf_ctf_transaction_amount_collection = 0;
            for (let i = 1; i < bpf_data_list.content.length; i++) {
                if (!bpf_transaction_collection.includes(bpf_data_list.content[i][findTextInArray(bpf_data_list, "BPF #")]) &&
                month_filter.value == formatMonth(bpf_data_list.content[i][findTextInArray(bpf_data_list, "HAULING DATE")])) {
                    bpf_transaction_collection.push(bpf_data_list.content[i][findTextInArray(bpf_data_list, "BPF #")]);
                    bpf_transaction_amount_collection += bpf_data_list.content[i][findTextInArray(bpf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")];
                }
                else if (!bpf_transaction_collection.includes(bpf_data_list.content[i][findTextInArray(bpf_data_list, "BPF #")]) &&
                month_filter.value == "ALL") {
                    bpf_transaction_collection.push(bpf_data_list.content[i][findTextInArray(bpf_data_list, "BPF #")]);
                    bpf_transaction_amount_collection += bpf_data_list.content[i][findTextInArray(bpf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")];
                }
            }
    
            for (let i = 1; i < ctf_data_list.content.length; i++) {
                if (!bpf_ctf_transaction_collection.includes(ctf_data_list.content[i][findTextInArray(ctf_data_list, "BPF #")]) &&
                month_filter.value == formatMonth(ctf_data_list.content[i][findTextInArray(ctf_data_list, "HAULING DATE")])) {
                    bpf_ctf_transaction_collection.push(ctf_data_list.content[i][findTextInArray(ctf_data_list, "BPF #")]);
                    bpf_ctf_transaction_amount_collection += ctf_data_list.content[i][findTextInArray(ctf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")];
                }
                else if (!bpf_ctf_transaction_collection.includes(ctf_data_list.content[i][findTextInArray(ctf_data_list, "BPF #")]) &&
                month_filter.value == "ALL") {
                    bpf_ctf_transaction_collection.push(ctf_data_list.content[i][findTextInArray(ctf_data_list, "BPF #")]);
                    bpf_ctf_transaction_amount_collection += ctf_data_list.content[i][findTextInArray(ctf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")];
                }
            }
    
            // billing
            const pending_billing = sf_transaction_billing.filter((element) => !sf_tpf_transaction_billing.includes(element));
    
            certified_counter_billing.innerText = sf_transaction_billing.length;
            pending_counter_billing.innerText = sf_transaction_billing.length - sf_tpf_transaction_billing.length;
            billed_counter_billing.innerText = sf_tpf_transaction_billing.length;

            // collection
            const pending_collection = bpf_transaction_collection.filter((element) => !bpf_ctf_transaction_collection.includes(element));
    
            billed_counter_collection.innerText = bpf_transaction_collection.length;
            pending_counter_collection.innerText = bpf_transaction_collection.length - bpf_ctf_transaction_collection.length;
            collected_counter_collection.innerText = bpf_ctf_transaction_collection.length;
            billed_counter_amount_collection.innerText = formatNumber(bpf_transaction_amount_collection);
            pending_counter_amount_collection.innerText = formatNumber(bpf_transaction_amount_collection - bpf_ctf_transaction_amount_collection);
            collected_counter_amount_collection.innerText = formatNumber(bpf_ctf_transaction_amount_collection);
            
            // billing
            var options = {
                series: [sf_transaction_billing.length - sf_tpf_transaction_billing.length, sf_tpf_transaction_billing.length],
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
                labels: ["Pending", "Billed"],
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
            const pieChart3 = document.querySelector("#pieChart3");
            while (pieChart3.firstChild) {
                pieChart3.removeChild(pieChart3.firstChild);
            }
            var chart = new ApexCharts(pieChart3, options);
            chart.render();
            
            // collection
            var options = {
                series: [bpf_transaction_collection.length - bpf_ctf_transaction_collection.length, bpf_ctf_transaction_collection.length],
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
                labels: ["Pending", "Collected"],
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
            const pieChart2 = document.querySelector("#pieChart2");
            while (pieChart2.firstChild) {
                pieChart2.removeChild(pieChart2.firstChild);
            }
            var chart = new ApexCharts(pieChart2, options);
            chart.render();
            
            // billing
            var data_value = "";
            var data_value_counter = 1;
            for(let i = 0; i < pending_billing.length; i++){
                for(let j = 1; j < cod_data_list.content.length; j++){
                    if(pending_billing[i] == cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")] &&
                    month_filter.value == formatMonth(cod_data_list.content[j][findTextInArray(cod_data_list, "HAULING DATE")])){
                        var mtf = "";
                        var ltf = "";
                        for(let k = 1; k < wcf_data_list.content.length; k++){
                            if(cod_data_list.content[j][findTextInArray(cod_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
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
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "ACTUAL COMPLETION DATE")])} /<br>${time_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "ACTUAL COMPLETION TIME")])}</td>
                            <td>${findClientName(cod_data_list.content[j][findTextInArray(cod_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(cod_data_list.content[j][findTextInArray(cod_data_list, "CLIENT ID")], cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE ID")])}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "WEIGHT")]}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "SUBMITTED BY")]}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                    else if(pending_billing[i] == cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")] &&
                    month_filter.value == "ALL"){
                        var mtf = "";
                        var ltf = "";
                        for(let k = 1; k < wcf_data_list.content.length; k++){
                            if(cod_data_list.content[j][findTextInArray(cod_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
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
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "ACTUAL COMPLETION DATE")])} /<br>${time_decoder(cod_data_list.content[j][findTextInArray(cod_data_list, "ACTUAL COMPLETION TIME")])}</td>
                            <td>${findClientName(cod_data_list.content[j][findTextInArray(cod_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(cod_data_list.content[j][findTextInArray(cod_data_list, "CLIENT ID")], cod_data_list.content[j][findTextInArray(cod_data_list, "WASTE ID")])}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "WEIGHT")]}</td>
                            <td>${cod_data_list.content[j][findTextInArray(cod_data_list, "SUBMITTED BY")]}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            pending_list_billing.innerHTML = data_value;            
            
            // collection
            var data_value_collection = "";
            var data_value_counter_collection = 1;
            for(let i = 0; i < pending_collection.length; i++){
                for(let j = 1; j < bpf_data_list.content.length; j++){
                    if(pending_collection[i] == bpf_data_list.content[j][findTextInArray(bpf_data_list, "BPF #")] &&
                    month_filter.value == formatMonth(bpf_data_list.content[j][findTextInArray(bpf_data_list, "HAULING DATE")])){
                        var mtf = "";
                        var ltf = "";
                        for(let k = 1; k < wcf_data_list.content.length; k++){
                            if(bpf_data_list.content[j][findTextInArray(bpf_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
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
                        data_value_collection +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${bpf_data_list.content[j][findTextInArray(bpf_data_list, "BPF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CREATED AT")])} /<br>${time_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CREATED AT")])}</td>
                            <td>${findClientName(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CLIENT ID")])}</td>
                            <td>${formatNumber(bpf_data_list.content[j][findTextInArray(bpf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")])}</td>
                        </tr>
                        `
                        data_value_counter_collection += 1;
                    }
                    else if(pending_collection[i] == bpf_data_list.content[j][findTextInArray(bpf_data_list, "BPF #")] &&
                    month_filter.value == "ALL"){
                        var mtf = "";
                        var ltf = "";
                        for(let k = 1; k < wcf_data_list.content.length; k++){
                            if(bpf_data_list.content[j][findTextInArray(bpf_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
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
                        data_value_collection +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${bpf_data_list.content[j][findTextInArray(bpf_data_list, "BPF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CREATED AT")])} /<br>${time_decoder(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CREATED AT")])}</td>
                            <td>${findClientName(bpf_data_list.content[j][findTextInArray(bpf_data_list, "CLIENT ID")])}</td>
                            <td>${formatNumber(bpf_data_list.content[j][findTextInArray(bpf_data_list, "TOTAL AMOUNT DUE VAT INCLUSIVE")])}</td>
                        </tr>
                        `
                        data_value_counter_collection += 1;
                    }
                }
            }
            pending_list_collection.innerHTML = data_value_collection;            

            // purchasing
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
            const pieChart4 = document.querySelector("#pieChart4");
            while (pieChart4.firstChild) {
                pieChart4.removeChild(pieChart4.firstChild);
            }
            var chart = new ApexCharts(pieChart4, options);
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

            const ap_accounting_head_dashboard = document.querySelector("#accounting_head_dashboard");
            const purchase_request_list_ap_accounting = ap_accounting_head_dashboard.querySelector("#purchase_request_list");
            // purchase_request
            var requested_data_value = "";
            var requested_data_value_counter = 1;
            for(let x = 1; x < prf_data_list.content.length; x++){  
                for(let y = 0; y < requested.length; y++){
                    if(requested[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
                        var pr_data, date_time, quantity, unit, item, details, remarks, department, status, amount, requisitioner, button, button2;
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
                            if(pr_data == pof_data_list.content[x][findTextInArray(pof_data_list, "ITM #")]){
                                amount = pof_data_list.content[x][findTextInArray(pof_data_list, "AMOUNT")]
                            }
                        }
                        button = `
                        <form action="https://script.google.com/macros/s/AKfycbwSvMfLEk_Wi-5YCJA_XkVaVHnzEf_9xpnYqdtrjvQff7jorizN6c8jK2bUhp7wz4Sp/exec" method="post">
                            <input type="hidden" name="itm_form_no" id="itm_form_no" value="${pr_data}">
                            <input type="hidden" name="timestamp" id="timestamp" value="${new Date()}">
                            <input type="hidden" name="user" id="user" value="${user_name}">
                            <button type="submit" style="background-color: transparent !important; padding:0; color: #198754; border: none">
                                <i class="fa-solid fa-thumbs-up"></i>
                            </button>
                        </form>
                        `
                        button2 = `
                        <form action="https://script.google.com/macros/s/AKfycbyuxk3trEn7iLal32AHo28NCXPAJTy_z6rn4zrStAvJjkdcobPVp_TAov33ajOUxWg4HA/exec" method="post">
                        <input type="hidden" name="itm_form_no" id="itm_form_no" value="${pr_data}">
                        <input type="hidden" name="timestamp" id="timestamp" value="${new Date()}">
                        <input type="hidden" name="user" id="user" value="${user_name}">
                        <button type="submit" style="background-color: transparent !important; padding:0; color: #dc3545; border: none">
                                <i class="fa-solid fa-thumbs-down"></i>
                            </button>
                        </form>
                        `

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
                            <td>${formatNumber(amount)}</td>
                            <td>${status}</td>
                            <td>${button}</td>
                            <td>${button2}</td>
                        </tr>
                        `
                        requested_data_value_counter += 1;
                    }
                }
            }
            purchase_request_list_ap_accounting.innerHTML = requested_data_value;


            // ap_accounting_head_dashboard
            const source_of_fund_ap_accounting = ap_accounting_head_dashboard.querySelector("#source_of_fund");
            const trucking_fund_ap_accounting = ap_accounting_head_dashboard.querySelector("#trucking_fund");
            const hauling_fund_ap_accounting = ap_accounting_head_dashboard.querySelector("#hauling_fund");
            const diesel_fund_ap_accounting = ap_accounting_head_dashboard.querySelector("#diesel_fund");
            const gasoline_fund_ap_accounting = ap_accounting_head_dashboard.querySelector("#gasoline_fund");
            const sir_ruels_fund_ap_accounting = ap_accounting_head_dashboard.querySelector("#sir_ruels_fund");
            const scrap_sales_ap_accounting = ap_accounting_head_dashboard.querySelector("#scrap_sales");
            const mold_runner_sales_ap_accounting = ap_accounting_head_dashboard.querySelector("#mold_runner_sales");
            const truck_scale_collection_ap_accounting = ap_accounting_head_dashboard.querySelector("#truck_scale_collection");
            const house_collection_ap_accounting = ap_accounting_head_dashboard.querySelector("#house_collection");
            const representation_fund_ap_accounting = ap_accounting_head_dashboard.querySelector("#representation_fund");

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

            var type_of_funds = ["SOURCE OF FUND", "HAULING FUND", "TRUCKING FUND", "DIESEL FUND", "GASOLINE FUND", "SIR RUEL'S FUND", "SCRAP SALES", "MOLD RUNNER SALES", "TRUCK SCALE COLLECTION", "HOUSE COLLECTION", "REPRESENTATION FUND"]

            for (let i = 1; i < ftf_data_list.content.length; i++) {
                // fund_source
                if(!type_of_funds.includes(ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")]) &&
                month_filter.value == formatMonth(ftf_data_list.content[i][findTextInArray(ftf_data_list, "CREATED AT")])){
                    if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "SOURCE OF FUND") {
                        source_of_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "HAULING FUND") {
                        hauling_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "TRUCKING FUND") {
                        trucking_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "DIESEL FUND") {
                        diesel_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "GASOLINE FUND") {
                        gasoline_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "SIR RUEL'S FUND") {
                        sir_ruels_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "SCRAP SALES") {
                        scrap_sales += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "MOLD RUNNER SALES") {
                        mold_runner_sales += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "TRUCK SCALE COLLECTION") {
                        truck_scale_collection += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "HOUSE COLLECTION") {
                        house_collection += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")] == "REPRESENTATION FUND") {
                        representation_fund += ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                }
                // fund_allocation
                if (!type_of_funds.includes(ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")]) &&
                    (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND SOURCE")].includes("RETURN"))) {
                    if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "SOURCE OF FUND") {
                        source_of_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "HAULING FUND") {
                        hauling_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "TRUCKING FUND") {
                        trucking_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "DIESEL FUND") {
                        diesel_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "GASOLINE FUND") {
                        gasoline_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "SIR RUEL'S FUND") {
                        sir_ruels_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "SCRAP SALES") {
                        scrap_sales -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "MOLD RUNNER SALES") {
                        mold_runner_sales -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "TRUCK SCALE COLLECTION") {
                        truck_scale_collection -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "HOUSE COLLECTION") {
                        house_collection -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
                    else if (ftf_data_list.content[i][findTextInArray(ftf_data_list, "FUND ALLOCATION")] == "REPRESENTATION FUND") {
                        representation_fund -= ftf_data_list.content[i][findTextInArray(ftf_data_list, "AMOUNT")]
                    }
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
        }
        
        const ap_accounting_head_dashboard = document.querySelector("#accounting_head_dashboard");
        const request_history_list_ap_accounting = ap_accounting_head_dashboard.querySelector("#request_history_list");
        const transfer_history_list_ap_accounting = ap_accounting_head_dashboard.querySelector("#transfer_history_list");
        const purchase_request_history_container_accounting = ap_accounting_head_dashboard.querySelector("#purchase_request_history");
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
        // pending_list
        var approved_data_value = "";
        var approved_data_value_counter = 1;
        var released_data_value = "";
        var released_data_value_counter = 1;
        var purchased_data_value = "";
        var purchased_data_value_counter = 1;
        for(let x = 1; x < prf_data_list.content.length; x++){  
            for(let y = 0; y < approved.length; y++){
                if(approved[y] == prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")]){
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
                        if(pr_data == pof_data_list.content[x][findTextInArray(pof_data_list, "ITM #")]){
                            amount = pof_data_list.content[x][findTextInArray(pof_data_list, "AMOUNT")]
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
                        if(pr_data == pof_data_list.content[x][findTextInArray(pof_data_list, "ITM #")]){
                            amount = pof_data_list.content[x][findTextInArray(pof_data_list, "AMOUNT")]
                        }
                    }                    released_data_value += `
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
                        if(pr_data == pof_data_list.content[x][findTextInArray(pof_data_list, "ITM #")]){
                            amount = pof_data_list.content[x][findTextInArray(pof_data_list, "AMOUNT")]
                        }
                    }                    purchased_data_value += `
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
        purchase_request_history_container_accounting.insertAdjacentHTML("beforeend", approved_data_value);
        purchase_request_history_container_accounting.insertAdjacentHTML("beforeend", released_data_value);
        purchase_request_history_container_accounting.insertAdjacentHTML("beforeend", purchased_data_value);

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
        for(let x = ftf_data_list.content.length - 1; x > 1; x--){
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
            var status = "PENDING";
            var duration = "PENDING";
            for(let y = 1; y < pof_data_list.content.length; y++){
                if(prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")] == (pof_data_list.content[y][findTextInArray(pof_data_list, "ITM #")])){
                    status = "REQUESTED"
                }
            }
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
