document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            ltf_response,
            wcf_response,
            sf_response,
            tpf_response,
            qlf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise,
            tpf_response_promise,
            qlf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
        const tpf_data_list  = await tpf_response.json();
        const qlf_data_list  = await qlf_response.json();
    
        // Code that depends on the fetched data
        // username_data_list
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const user = document.getElementById("user");

        user.value = username_data_list.content[3][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[3][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[3][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[3][findTextInArray(username_data_list, "DEPARTMENT")];

        // treatment_process_dashboard
        const total_counter_treatment = document.querySelector("#treatment_process_dashboard #total_counter");
        const pending_counter_treatment = document.querySelector("#treatment_process_dashboard #pending_counter");
        const treated_counter_treatment = document.querySelector("#treatment_process_dashboard #treated_counter");
        const pending_list_treatment = document.querySelector("#treatment_process_dashboard #pending_list");
        const finished_list_treatment = document.querySelector("#treatment_process_dashboard #finished_list");
        const month_filter = document.getElementById("month_filter");
        let pending_treatment_sf = [];
        let pending_treatment_wcf = [];
        let wcf_transaction_sorting = []; // Variable containing existing elements
        let wcf_tpf_transaction_sorting = []; // Variable containing existing elements
        let sf_transaction_treatment = []; // Variable containing existing elements
        let tpf_transaction_treatment = []; // Variable containing existing elements
        let sf_tpf_transaction_treatment = []; // Variable containing existing elements
        let sf_tpf_wcf_transaction_treatment = []; // Variable containing existing elements
        
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
            pending_treatment_sf = [];
            pending_treatment_wcf = [];
            for (let i = 1; i < wcf_data_list.content.length; i++) {
                if(wcf_data_list.content[i][findTextInArray(wcf_data_list, "SUBMIT TO")] !== "SORTING" &&
                wcf_data_list.content[i][findTextInArray(wcf_data_list, "SUBMIT TO")] !== "WAREHOUSE" &&
                wcf_data_list.content[i][findTextInArray(wcf_data_list, "SUBMIT TO")] !== "ACCOUNTING" &&
                month_filter.value == formatMonth(wcf_data_list.content[i][findTextInArray(wcf_data_list, "HAULING DATE")])){
                    if (!wcf_transaction_sorting.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")])) {
                        wcf_transaction_sorting.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]);
                    }
                }
                else if(wcf_data_list.content[i][findTextInArray(wcf_data_list, "SUBMIT TO")] !== "SORTING" &&
                wcf_data_list.content[i][findTextInArray(wcf_data_list, "SUBMIT TO")] !== "WAREHOUSE" &&
                wcf_data_list.content[i][findTextInArray(wcf_data_list, "SUBMIT TO")] !== "ACCOUNTING" &&
                month_filter.value == "ALL"){
                    if (!wcf_transaction_sorting.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")])) {
                        wcf_transaction_sorting.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]);
                    }
                }
            }
            for (let i = 1; i < sf_data_list.content.length; i++) {
                if(sf_data_list.content[i][findTextInArray(sf_data_list, "WASTE ID")] !== "DISCREPANCY"){
                    if(sf_data_list.content[i][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")] !== "FOR STORAGE" &&
                    sf_data_list.content[i][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")] !== "RECYCLING" &&
                    sf_data_list.content[i][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")] !== "CRUSHING" &&
                    month_filter.value == formatMonth(sf_data_list.content[i][findTextInArray(sf_data_list, "HAULING DATE")])){
                        if (!sf_transaction_treatment.includes(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")])) {
                            sf_transaction_treatment.push(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")]);
                        }
                    }
                }
                else if(sf_data_list.content[i][findTextInArray(sf_data_list, "WASTE ID")] !== "DISCREPANCY"){
                    if(sf_data_list.content[i][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")] !== "FOR STORAGE" &&
                    sf_data_list.content[i][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")] !== "RECYCLING" &&
                    sf_data_list.content[i][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")] !== "CRUSHING" &&
                    month_filter.value == "ALL"){
                        if (!sf_transaction_treatment.includes(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")])) {
                            sf_transaction_treatment.push(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")]);
                        }
                    }
                }
            }
            for (let i = 1; i < tpf_data_list.content.length; i++) {
                if (!sf_tpf_transaction_treatment.includes(tpf_data_list.content[i][findTextInArray(tpf_data_list, "SF #")]) &&
                month_filter.value == formatMonth(tpf_data_list.content[i][findTextInArray(tpf_data_list, "HAULING DATE")])) {
                    sf_tpf_transaction_treatment.push(tpf_data_list.content[i][findTextInArray(tpf_data_list, "SF #")]);
                    tpf_transaction_treatment.push(tpf_data_list.content[i][findTextInArray(tpf_data_list, "TPF #")]);
                }
                else if (!sf_tpf_transaction_treatment.includes(tpf_data_list.content[i][findTextInArray(tpf_data_list, "SF #")]) &&
                month_filter.value == "ALL") {
                    sf_tpf_transaction_treatment.push(tpf_data_list.content[i][findTextInArray(tpf_data_list, "SF #")]);
                    tpf_transaction_treatment.push(tpf_data_list.content[i][findTextInArray(tpf_data_list, "TPF #")]);
                }
                if (!sf_tpf_wcf_transaction_treatment.includes(tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]) &&
                month_filter.value == formatMonth(tpf_data_list.content[i][findTextInArray(tpf_data_list, "HAULING DATE")])) {
                    sf_tpf_wcf_transaction_treatment.push(tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]);
                }
                else if (!sf_tpf_wcf_transaction_treatment.includes(tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]) &&
                month_filter.value == "ALL") {
                    sf_tpf_wcf_transaction_treatment.push(tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]);
                }
                if (!wcf_tpf_transaction_sorting.includes(tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]) &&
                month_filter.value == formatMonth(tpf_data_list.content[i][findTextInArray(tpf_data_list, "HAULING DATE")])) {
                    wcf_tpf_transaction_sorting.push(tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]);
                }
                else if (!wcf_tpf_transaction_sorting.includes(tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]) &&
                month_filter.value == "ALL") {
                    wcf_tpf_transaction_sorting.push(tpf_data_list.content[i][findTextInArray(tpf_data_list, "WCF #")]);
                }
            }
            
            pending_treatment_sf = sf_transaction_treatment.filter((element) => !sf_tpf_transaction_treatment.includes(element));
            pending_treatment_wcf = wcf_transaction_sorting.filter((element) => !wcf_tpf_transaction_sorting.includes(element));
            const finished_treatment = sf_transaction_treatment.filter((element) => sf_tpf_transaction_treatment.includes(element));
            const filtered_pending_treatment_wcf = wcf_tpf_transaction_sorting.filter(element => !sf_tpf_wcf_transaction_treatment.includes(element));

            // pending_list
            total_counter_treatment.innerText = tpf_transaction_treatment.length;
            pending_counter_treatment.innerText = pending_treatment_sf.length + pending_treatment_wcf.length;
            treated_counter_treatment.innerText = sf_tpf_transaction_treatment.length + filtered_pending_treatment_wcf.length;

            var options = {
                series: [pending_treatment_sf.length + pending_treatment_wcf.length, sf_tpf_transaction_treatment.length + filtered_pending_treatment_wcf.length],
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
            
            var data_value = "";
            var data_value_counter = 1;
            for(let i = 0; i < pending_treatment_sf.length; i++){
                for(let j = 1; j < sf_data_list.content.length; j++){
                    if(pending_treatment_sf[i] == sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")] &&
                    month_filter.value == formatMonth(sf_data_list.content[j][findTextInArray(sf_data_list, "HAULING DATE")])){
                        var mtf = "";
                        var ltf = "";
                        for(let k = 1; k < wcf_data_list.content.length; k++){
                            if(sf_data_list.content[j][findTextInArray(sf_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
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
                            <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION DATE")])} /<br> ${time_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION TIME")])}</td>
                            <td>${findClientName(sf_data_list.content[j][findTextInArray(sf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE ID")])}</td>
                            <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE NAME")]}</td>
                            <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")]}</td>
                            <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "WEIGHT")]}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                    else if(pending_treatment_sf[i] == sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")] &&
                    month_filter.value == "ALL"){
                        var mtf = "";
                        var ltf = "";
                        for(let k = 1; k < wcf_data_list.content.length; k++){
                            if(sf_data_list.content[j][findTextInArray(sf_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
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
                            <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION DATE")])} /<br> ${time_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION TIME")])}</td>
                            <td>${findClientName(sf_data_list.content[j][findTextInArray(sf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE ID")])}</td>
                            <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE NAME")]}</td>
                            <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")]}</td>
                            <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "WEIGHT")]}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            for(let i = 0; i < pending_treatment_wcf.length; i++){
                for(let j = 1; j < wcf_data_list.content.length; j++){
                    if(pending_treatment_wcf[i] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")] &&
                    month_filter.value == formatMonth(wcf_data_list.content[j][findTextInArray(wcf_data_list, "HAULING DATE")])){
                        var mtf = "";
                        var ltf = "";
                        if((wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                            mtf = wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                        }else{
                            ltf = wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                            for(let x = 1; x < ltf_data_list.content.length; x++){
                                if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                    mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                                    break
                                }
                            }
                        }
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                            <td>${findClientName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findTreatmentProcess(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "NET WEIGHT")]}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                    else if(pending_treatment_wcf[i] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")] &&
                    month_filter.value == "ALL"){
                        var mtf = "";
                        var ltf = "";
                        if((wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                            mtf = wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                        }else{
                            ltf = wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                            for(let x = 1; x < ltf_data_list.content.length; x++){
                                if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                    mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                                    break
                                }
                            }
                        }
                        data_value +=`
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                            <td>${findClientName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findTreatmentProcess(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "NET WEIGHT")]}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            pending_list_treatment.innerHTML = data_value;

            // finished_list
            var data_value = "";
            var data_value_counter = 1;
            for(let i = 0; i < finished_treatment.length; i++){
                for(let j = 1; j < sf_data_list.content.length; j++){
                    if(finished_treatment[i] == sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")] &&
                    month_filter.value == formatMonth(sf_data_list.content[j][findTextInArray(sf_data_list, "HAULING DATE")])){
                        var sorted_date;
                        var sorted_time;
                        var tpf_no;
                        for(let k = 1; k < tpf_data_list.content.length; k++){
                            if(sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")] == tpf_data_list.content[k][findTextInArray(tpf_data_list, "SF #")]){
                                sorted_date = date_decoder(tpf_data_list.content[k][findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")]);
                                sorted_time = time_decoder(tpf_data_list.content[k][findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")]);
                                tpf_no = tpf_data_list.content[k][findTextInArray(tpf_data_list, "TPF #")];
                                break
                            }
                        }
                        var mtf = "";
                        var ltf = "";
                        for(let k = 1; k < wcf_data_list.content.length; k++){
                            if(sf_data_list.content[j][findTextInArray(sf_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
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
                        <td>${tpf_no}</td>
                        <td>${mtf}</td>
                        <td>${date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "HAULING DATE")])}</td>
                        <td>${date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION DATE")])} /<br> ${time_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION TIME")])}</td>
                        <td>${findClientName(sf_data_list.content[j][findTextInArray(sf_data_list, "CLIENT ID")])}</td>
                        <td>${findWasteCode(sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE ID")])}</td>
                        <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE NAME")]}</td>
                        <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")]}</td>
                        <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "WEIGHT")]} Kg.</td>
                        <td>${sorted_date} /<br> ${sorted_time}</td>
                        <td>${calculateTravelTime(date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION DATE")]),time_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION TIME")]),sorted_date,sorted_time)}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                    else if(finished_treatment[i] == sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")] &&
                    month_filter.value == "ALL"){
                        var sorted_date;
                        var sorted_time;
                        var tpf_no;
                        for(let k = 1; k < tpf_data_list.content.length; k++){
                            if(sf_data_list.content[j][findTextInArray(sf_data_list, "SF #")] == tpf_data_list.content[k][findTextInArray(tpf_data_list, "SF #")]){
                                sorted_date = date_decoder(tpf_data_list.content[k][findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")]);
                                sorted_time = time_decoder(tpf_data_list.content[k][findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")]);
                                tpf_no = tpf_data_list.content[k][findTextInArray(tpf_data_list, "TPF #")];
                                break
                            }
                        }
                        var mtf = "";
                        var ltf = "";
                        for(let k = 1; k < wcf_data_list.content.length; k++){
                            if(sf_data_list.content[j][findTextInArray(sf_data_list, "WCF #")] == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
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
                        <td>${tpf_no}</td>
                        <td>${mtf}</td>
                        <td>${date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "HAULING DATE")])}</td>
                        <td>${date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION DATE")])} /<br> ${time_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION TIME")])}</td>
                        <td>${findClientName(sf_data_list.content[j][findTextInArray(sf_data_list, "CLIENT ID")])}</td>
                        <td>${findWasteCode(sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE ID")])}</td>
                        <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "WASTE NAME")]}</td>
                        <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")]}</td>
                        <td>${sf_data_list.content[j][findTextInArray(sf_data_list, "WEIGHT")]} Kg.</td>
                        <td>${sorted_date} /<br> ${sorted_time}</td>
                        <td>${calculateTravelTime(date_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION DATE")]),time_decoder(sf_data_list.content[j][findTextInArray(sf_data_list, "COMPLETION TIME")]),sorted_date,sorted_time)}</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            finished_list_treatment.innerHTML = data_value;   


            // FORM GENERATOR
            // tpf_data_list
            const tpf_form_no = document.getElementById("tpf_form_no");  
            for(let x = tpf_data_list.content.length -1; x >= 1; x--){
                var data_info = tpf_data_list.content[x][findTextInArray(tpf_data_list, "TPF #")];
                if(data_info.substring(0,3) == "TPF"){
                    var data_counter = data_info.substring(9,12);
                    var year = new Date().getFullYear();
                    var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
                    data_counter = (parseInt(data_counter) +1).toString().padStart(3, "0");
                    tpf_form_no.value = `TPF${year}${month}${data_counter}`
                    break;
                }
            }

            // sf_data_list
            const wcf_form_no = document.getElementById("wcf_form_no");
            const client = document.getElementById("client");
            const waste_description = document.getElementById("waste_description");
            const waste_code_input = document.getElementById("waste_code");
            const weight = document.getElementById("weight");
            const destruction_process = document.getElementById("destruction_process");
            const hauling_date = document.getElementById("hauling_date");
            const target_date_of_completion = document.getElementById("target_date_of_completion");
            const search_sf_form_no = document.getElementById("search_sf_form_no");
            const search_sf_form_no_button = document.getElementById("search_sf_form_no_button");
            const search_sf_result = document.getElementById("search_sf_result");
            const additional_item1 = document.getElementById("additional_item1");
            const add_item_button = document.getElementById("add_item_button");
            const completion = document.getElementById("completion");
            const buttons = document.getElementById("buttons");
            const machine_counter = document.getElementById("machine_counter");

            search_sf_form_no_button.addEventListener("click", () => {
                var data_value;
                for(let a = 1; a < sf_data_list.content.length; a++){
                    for(let b=0; b<=pending_treatment_sf.length; b++){
                        if(search_sf_form_no.value == sf_data_list.content[a][findTextInArray(sf_data_list, "SF #")]){
                            if(search_sf_form_no.value == pending_treatment_sf[b]){
                                data_value = `
                                SF #: ${sf_data_list.content[a][findTextInArray(sf_data_list, "SF #")]}<br>
                                WCF #: ${sf_data_list.content[a][findTextInArray(sf_data_list, "WCF #")]}<br>
                                CLIENT: ${findClientName(sf_data_list.content[a][findTextInArray(sf_data_list, "CLIENT ID")])}<br>
                                WASTE NAME: ${sf_data_list.content[a][findTextInArray(sf_data_list, "WASTE NAME")]}<br>
                                WASTE CODE: ${findWasteCode(sf_data_list.content[a][findTextInArray(sf_data_list, "WASTE ID")])}<br>
                                WASTE DESCRIPTION: ${findWasteName(sf_data_list.content[a][findTextInArray(sf_data_list, "CLIENT ID")], sf_data_list.content[a][findTextInArray(sf_data_list, "WASTE ID")])}<br>
                                DESTRUCTION PROCESS: ${sf_data_list.content[a][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")]}<br>
                                WEIGHT: ${sf_data_list.content[a][findTextInArray(sf_data_list, "WEIGHT")]} kg.<br>
                                HAULING DATE: ${date_decoder(sf_data_list.content[a][findTextInArray(sf_data_list, "HAULING DATE")])}<br>
                                SORTED DATE: ${date_decoder(sf_data_list.content[a][findTextInArray(sf_data_list, "COMPLETION DATE")])}<br>
                                SORTED TIME: ${time_decoder(sf_data_list.content[a][findTextInArray(sf_data_list, "COMPLETION TIME")])}<br>
                                SUBMITTED BY: ${sf_data_list.content[a][findTextInArray(sf_data_list, "SUBMITTED BY")]}<br>
                                `
                                if(sf_data_list.content[a][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")] == 'THERMAL DECOMPOSITION'){
                                    machine_list.innerHTML = `
                                    <label for="tpf_form_no">
                                        <i class="fa-solid fa-gears"></i>
                                        Machine
                                    </label><br>
                                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px">
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Alpha
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight1" id="weight1" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine1" value="THERMAL GASIFIER ALPHA">
                                        </div>
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Bravo
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight2" id="weight2" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine2" value="THERMAL GASIFIER BRAVO">
                                        </div>
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Charlie
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight3" id="weight3" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine3" value="THERMAL GASIFIER CHARLIE">
                                        </div>
                                    </div><br>
                                    `
                                    machine_counter.value = 3
                                }
                                else if(sf_data_list.content[a][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")] == 'PYROLYSIS'){
                                    machine_list.innerHTML = `
                                    <label for="tpf_form_no">
                                        <i class="fa-solid fa-gears"></i>
                                        Machine
                                    </label><br>
                                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 20px">
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 1
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight1" id="weight1" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine1" value="Rotary 1">
                                        </div>
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 2
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight2" id="weight2" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine2" value="Rotary 2">
                                        </div>
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 3
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight3" id="weight3" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine3" value="Rotary 3">
                                        </div>
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Furnace
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight4" id="weight4" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine4" value="Furnace">
                                        </div>
                                    </div><br>
                                    `
                                    machine_counter.value = 4
                                }
                                else{
                                    machine_counter.value = 1
                                }
                                wcf_form_no.value = sf_data_list.content[a][findTextInArray(sf_data_list, "WCF #")];
                                client.value = sf_data_list.content[a][findTextInArray(sf_data_list, "CLIENT ID")];
                                waste_description.value = sf_data_list.content[a][findTextInArray(sf_data_list, "WASTE ID")];
                                waste_code_input.value = findWasteCode(sf_data_list.content[a][findTextInArray(sf_data_list, "WASTE NAME")]);
                                weight.value = sf_data_list.content[a][findTextInArray(sf_data_list, "WEIGHT")];
                                destruction_process.value = sf_data_list.content[a][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")];
                                hauling_date.value = date_decoder(sf_data_list.content[a][findTextInArray(sf_data_list, "HAULING DATE")]);
                                var hauling_date_plus2 = new Date(date_decoder(sf_data_list.content[a][findTextInArray(sf_data_list, "HAULING DATE")]));
                                target_date_of_completion.value = date_decoder(hauling_date_plus2.setDate(hauling_date_plus2.getDate()+2));
                                additional_item1.style.display = "grid";
                                add_item_button.style.display = "block";
                                completion.style.display = "grid";
                                buttons.style.display = "flex";    
                            }
                        }
                    }
                }
                for(let a = 1; a < wcf_data_list.content.length; a++){
                    for(let b=0; b<=pending_treatment_wcf.length; b++){
                        if(search_sf_form_no.value == wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]){
                            if(search_sf_form_no.value == pending_treatment_wcf[b]){
                                data_value = `
                                WCF #: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]}<br>
                                CLIENT: ${findClientName(wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")])}<br>
                                WASTE CODE: ${findWasteCode(wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")])}<br>
                                WASTE DESCRIPTION: ${findWasteName(wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")])}<br>
                                DESTRUCTION PROCESS: ${findTreatmentProcess(wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")])}<br>
                                WEIGHT: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "NET WEIGHT")]} kg.<br>
                                HAULING DATE: ${date_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "HAULING DATE")])}<br>
                                ARRIVAL DATE: ${date_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "ARRIVAL DATE")])}<br>
                                ARRIVAL TIME: ${time_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}<br>
                                SUBMITTED BY: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "SUBMITTED BY")]}<br>
                                `
                                if(findTreatmentProcess(wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")]) == 'THERMAL DECOMPOSITION'){
                                    machine_list.innerHTML = `
                                    <label for="tpf_form_no">
                                        <i class="fa-solid fa-gears"></i>
                                        Machine
                                    </label><br>
                                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px">
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Alpha
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight1" id="weight1" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine1" value="THERMAL GASIFIER ALPHA">
                                        </div>
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Bravo
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight2" id="weight2" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine2" value="THERMAL GASIFIER BRAVO">
                                        </div>
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Thermal Gasifier Charlie
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight3" id="weight3" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine3" value="THERMAL GASIFIER CHARLIE">
                                        </div>
                                    </div><br>
                                    `
                                    machine_counter.value = 3
                                }
                                else if(findTreatmentProcess(wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")]) == 'PYROLYSIS'){
                                    machine_list.innerHTML = `
                                    <label for="tpf_form_no">
                                        <i class="fa-solid fa-gears"></i>
                                        Machine
                                    </label><br>
                                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 20px">
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 1
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight1" id="weight1" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine1" value="Rotary 1">
                                        </div>
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 2
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight2" id="weight2" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine2" value="Rotary 2">
                                        </div>
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Rotary 3
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight3" id="weight3" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine3" value="Rotary 3">
                                        </div>
                                        <div>
                                            <label for="tpf_form_no">
                                                <i class="fa-solid fa-gears"></i>
                                                Furnace
                                            </label><br>
                                            <input type="number" autocomplete="off" name="weight4" id="weight4" step="0.01" class="form-control" placeholder="Input Weight">
                                            <input type="hidden" name="machine4" value="Furnace">
                                        </div>
                                    </div><br>
                                    `
                                    machine_counter.value = 4
                                }
                                wcf_form_no.value = wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")];
                                client.value = wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")];
                                waste_description.value = wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")];
                                waste_code_input.value = findWasteName(wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")]);
                                weight.value = wcf_data_list.content[a][findTextInArray(wcf_data_list, "NET WEIGHT")];
                                destruction_process.value = findTreatmentProcess(wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")]);
                                hauling_date.value = date_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "HAULING DATE")]);
                                var hauling_date_plus2 = new Date(date_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "HAULING DATE")]));
                                target_date_of_completion.value = date_decoder(hauling_date_plus2.setDate(hauling_date_plus2.getDate()+2));
                                additional_item1.style.display = "grid";
                                add_item_button.style.display = "block";
                                completion.style.display = "grid";
                                buttons.style.display = "flex";    
                            }
                        }
                    }
                }
                if(data_value == undefined){
                    search_sf_result.innerHTML = `
                    <div class="search_sf_result">
                    <h2>INFORMATION</h2>
                    No Data Found
                    </div><br>`            
                }
                else{
                    search_sf_result.innerHTML = `
                    <div class="search_sf_result">
                    <h2>INFORMATION</h2>
                    ${data_value}
                    </div><br>`
                }
            });    
        }



        const additional_item2 = document.getElementById("additional_item2");
        const additional_item3 = document.getElementById("additional_item3");
        const additional_item4 = document.getElementById("additional_item4");
        const additional_item5 = document.getElementById("additional_item5");
        const item_counter = document.getElementById("item_counter");
        var item_counter_int = parseInt(item_counter.value)
        const form_id = document.getElementById("form_id");

        add_item_button.addEventListener("click", add_new_item);

        function add_new_item(){        
            item_counter_int += 1;
            item_counter.value = item_counter_int;
        
            if(item_counter_int == 2){
                additional_item2.style.display ="grid";
                // FOR 2
                remove_item_button.style.display = "block"
            }
            else if(item_counter_int == 3){
                additional_item3.style.display ="grid";
                // FOR 3
            }
            else if(item_counter_int == 4){
                additional_item4.style.display ="grid";
                // FOR 4
            }
            else if(item_counter_int == 5){
                additional_item5.style.display ="grid";
                // FOR 5
                add_item_button.style.display = "none"
            }
        }

        remove_item_button.addEventListener("click", remove_new_item);
        
        function remove_new_item(){
            if(item_counter_int == 2){
                additional_item2.style.display ="none";        
                // FOR 1
                remove_item_button.style.display = "none"
            }
            else if(item_counter_int == 3){
                additional_item3.style.display ="none";
                // FOR 2
            }
            else if(item_counter_int == 4){
                additional_item4.style.display ="none";
                // FOR 3
            }
            else if(item_counter_int == 5){
                additional_item5.style.display ="none";
                // FOR 4
                add_item_button.style.display = "block"
            }
            item_counter_int -= 1;
            item_counter.value = item_counter_int;
        }
        
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
                if(client_id == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] && 
                    waste_id == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                    waste_name = (qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE NAME")]);
                    break
                }
            }
            return waste_name
        }
        function findTreatmentProcess(waste_id){
            var treatment_process = "";
            for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                if(waste_id.substring(0, 8) == (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")])){
                    treatment_process = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "TREATMENT PROCESS")]);
                    break
                }
            }
            return treatment_process
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

            for(let x = 1; x < tpf_data_list.content.length; x++){
                var hauling_date = new Date(tpf_data_list.content[x][findTextInArray(tpf_data_list, "HAULING DATE")])
                var wcf_data = tpf_data_list.content[x][findTextInArray(tpf_data_list, "WCF #")]
                var tpf_data = tpf_data_list.content[x][findTextInArray(tpf_data_list, "TPF #")]
                var date_data = tpf_data_list.content[x][findTextInArray(tpf_data_list, "ACTUAL COMPLETION DATE")]
                var time_data = tpf_data_list.content[x][findTextInArray(tpf_data_list, "ACTUAL COMPLETION TIME")]
                var client_id_data = tpf_data_list.content[x][findTextInArray(tpf_data_list, "CLIENT ID")]
                var waste_name = tpf_data_list.content[x][findTextInArray(tpf_data_list, "WASTE NAME")]
                var weight = tpf_data_list.content[x][findTextInArray(tpf_data_list, "WEIGHT")]
                var process = tpf_data_list.content[x][findTextInArray(tpf_data_list, "DESTRUCTION PROCESS")]
                var machine = tpf_data_list.content[x][findTextInArray(tpf_data_list, "MACHINE USED")]
                var report_from = new Date(report_date_from.value)
                var report_to = new Date(report_date_to.value)
                var datePortion = date_data.split("T")[0];
                var timePortion = time_data.split("T")[1];
                for(let j = 1; j < wcf_data_list.content.length; j++){
                    var mtf = "";
                    var ltf = "";
                    if((wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")] == wcf_data && 
                        wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                        mtf = wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                    }else{
                        ltf = wcf_data_list.content[j][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                        for(let x = 1; x < ltf_data_list.content.length; x++){
                            if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                            }
                        }
                    }
                }

                var datetime = new Date(datePortion + "T" + timePortion);
                if (hauling_date >= report_from && hauling_date <= report_to) {
                    filteredData.push({
                    tpf_data,
                    mtf,
                    hauling_date,
                    date_data,
                    time_data,
                    client_id_data,
                    waste_name,
                    weight,
                    process,
                    machine,
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
                        <td>${item.tpf_data}</td>
                        <td>${item.mtf}</td>
                        <td>${date_decoder(item.hauling_date)}</td>
                        <td>${date_decoder(item.date_data)}</td>
                        <td>${time_decoder(item.time_data)}</td>
                        <td>${findClientName(item.client_id_data)}</td>
                        <td>${item.waste_name}</td>
                        <td>${formatNumber(item.weight)}</td>
                        <td>${item.process}</td>
                        <td>${item.machine}</td>
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
                                        <th>SF #/ TPF #</td>
                                        <th>MTF #</td>
                                        <th>HAULING DATE</th>
                                        <th>DATE FINISHED</th>
                                        <th>TIME FINISHED</th>
                                        <th>CLIENT</th>
                                        <th>WASTE NAME</th>
                                        <th>WEIGHT (kg)</th>
                                        <th>TREATMENT PROCESS</th>
                                        <th>MACHINE USED</th>
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