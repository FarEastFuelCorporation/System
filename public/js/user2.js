document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const treatment_process_response_promise = fetch('https://script.google.com/macros/s/AKfycbzlzR7zmvdHSz4JpeXtEzPE4OQckTIVaE6PBw5IYwlqmmeIprQxEKkp4d2Jb1kBcgndzA/exec');
        const mtf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzkzS4OVm3IfNl6KwOfLZq_uO3MnsXfu-oS5Su_1kxhfo1mMoKpYDm8a4RxWqsQh0qv/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const sf_response_promise = fetch('https://script.google.com/macros/s/AKfycby9b2VCfXc0ifkwBXJRi2UVUwgZIj9F4FTOdZa_SYKZdsTwbVtAzAXzNMFeklE35bg1/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');

        const [
            username_response,
            employee_response,
            vehicle_response,
            client_list_response,
            type_of_waste_response,
            treatment_process_response,
            mtf_response,
            ltf_response,
            wcf_response,
            sf_response,
            qlf_response,
        ] = await Promise.all([
            username_response_promise,
            employee_response_promise,
            vehicle_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            treatment_process_response_promise,
            mtf_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            sf_response_promise,
            qlf_response_promise,
        ]);
        qlf_response_promise;

        const username_data_list  = await username_response.json();
        const employee_data_list  = await employee_response.json();
        const vehicle_data_list  = await vehicle_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const treatment_process_data_list  = await treatment_process_response.json();
        const mtf_data_list  = await mtf_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const sf_data_list  = await sf_response.json();
        const qlf_data_list  = await qlf_response.json();

        // Code that depends on the fetched data
        // username_data_list
        const profile_picture = document.getElementById("profile_picture");
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const user = document.getElementById("user");

        profile_picture.src = `../images/profile_picture/${username_data_list.content[2][findTextInArray(username_data_list, "PICTURE")]}`;
        user.value = username_data_list.content[2][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[2][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[2][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[2][findTextInArray(username_data_list, "DEPARTMENT")];

        // sf_data_list
        // sorting_dashboard_section
        const total_sorting = document.querySelector("#sorting_dashboard_section #total");
        const sorted_sorting = document.querySelector("#sorting_dashboard_section #sorted");
        const unsorted_sorting = document.querySelector("#sorting_dashboard_section #unsorted");
        const unsorted_list_sorting = document.querySelector("#sorting_dashboard_section #unsorted_list");
        const sorted_list_sorting = document.querySelector("#sorting_dashboard_section #sorted_list");
        const sorted_items_sorting = document.querySelector("#sorting_dashboard_section #sorted_items");
        const sorted_items_list_sorting = document.querySelector("#sorting_dashboard_section #sorted_items_list");
        const month_filter = document.getElementById("month_filter");
        var wcf_transaction_sorting = []; // Variable containing existing elements
        var wcf_sf_transaction_sorting = []; // Variable containing existing elements
        var sf_transaction_sorting = []; // Variable containing existing elements
        var pending_sorting;
        var done_sorting_sorting;
        
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
            wcf_transaction_sorting = [];
            wcf_sf_transaction_sorting = [];
            sf_transaction_sorting = [];  
            for (let i = 1; i < wcf_data_list.content.length; i++) {
                if(wcf_data_list.content[i][findTextInArray(wcf_data_list, "SUBMIT TO")] == "SORTING"){
                    if (!wcf_transaction_sorting.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]) &&
                    month_filter.value == formatMonth(wcf_data_list.content[i][findTextInArray(wcf_data_list, "HAULING DATE")])) {
                        wcf_transaction_sorting.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]);
                    }
                    else if (!wcf_transaction_sorting.includes(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]) &&
                month_filter.value == "ALL") {
                        wcf_transaction_sorting.push(wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]);
                    }
                }
            }
            for (let i = 1; i < sf_data_list.content.length; i++) {
                if (!wcf_sf_transaction_sorting.includes(sf_data_list.content[i][findTextInArray(sf_data_list, "WCF #")]) &&
                month_filter.value == formatMonth(sf_data_list.content[i][findTextInArray(sf_data_list, "HAULING DATE")])) {
                    wcf_sf_transaction_sorting.push(sf_data_list.content[i][findTextInArray(sf_data_list, "WCF #")]);
                }
                else if (!wcf_sf_transaction_sorting.includes(sf_data_list.content[i][findTextInArray(sf_data_list, "WCF #")]) &&
                month_filter.value == "ALL") {
                    wcf_sf_transaction_sorting.push(sf_data_list.content[i][findTextInArray(sf_data_list, "WCF #")]);
                }
                if (sf_data_list.content[i][4] !==  "DISCREPANCY") {
                    if (!sf_transaction_sorting.includes(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")]) &&
                    month_filter.value == formatMonth(sf_data_list.content[i][findTextInArray(sf_data_list, "HAULING DATE")])) {
                        sf_transaction_sorting.push(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")]);
                    }
                    else if (!sf_transaction_sorting.includes(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")]) &&
                    month_filter.value == "ALL") {
                        sf_transaction_sorting.push(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")]);
                    }
                }
            }
    
            // Get elements from wcf_transaction not included in wcf_sf_transaction
            pending_sorting = wcf_transaction_sorting.filter((element) => !wcf_sf_transaction_sorting.includes(element));
            done_sorting_sorting = wcf_transaction_sorting.filter((element) => wcf_sf_transaction_sorting.includes(element));
            total_sorting.innerText = wcf_transaction_sorting.length;
            unsorted_sorting.innerText = wcf_transaction_sorting.length - wcf_sf_transaction_sorting.length;
            sorted_sorting.innerText = wcf_sf_transaction_sorting.length;
            sorted_items_sorting.innerText = sf_transaction_sorting.length;
            var options = {
                series: [wcf_transaction_sorting.length - wcf_sf_transaction_sorting.length, wcf_sf_transaction_sorting.length],
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
                labels: ["Pending", "Sorted"],
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
            for(let i = 0; i < pending_sorting.length; i++){
                for(let j = 1; j < wcf_data_list.content.length; j++){
                    if(pending_sorting[i] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")] &&
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
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "PULL OUT FORM #")]}</td>
                            <td>${findClientName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "NET WEIGHT")]} kg.</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                    else if(pending_sorting[i] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")] &&
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
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "PULL OUT FORM #")]}</td>
                            <td>${findClientName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${findWasteName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[j][findTextInArray(wcf_data_list, "WASTE ID")])}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "NET WEIGHT")]} kg.</td>
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            unsorted_list_sorting.innerHTML = data_value;    
    
            // sorted_list
            var data_value_done = "";
            var data_value__done_counter = 1;
            for(let i = 0; i < done_sorting_sorting.length; i++){
                for(let j = 1; j < wcf_data_list.content.length; j++){
                    if(done_sorting_sorting[i] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")] &&
                    month_filter.value == formatMonth(wcf_data_list.content[j][findTextInArray(wcf_data_list, "HAULING DATE")])){
                        var discrepancy_weight = 0;
                        var discrepancy_remarks ="COMPLETE";
                        var finished_date;
                        var finished_time;
                        for(let k = 1; k < sf_data_list.content.length; k++){
                            if(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")] == sf_data_list.content[k][findTextInArray(sf_data_list, "WCF #")]){
                                finished_date = date_decoder(sf_data_list.content[k][findTextInArray(sf_data_list, "COMPLETION DATE")]);
                                finished_time = time_decoder(sf_data_list.content[k][findTextInArray(sf_data_list, "COMPLETION TIME")]);
                                if(done_sorting_sorting[i] == sf_data_list.content[k][findTextInArray(sf_data_list, "WCF #")]){
                                    if(sf_data_list.content[k][findTextInArray(sf_data_list, "WASTE ID")] == "DISCREPANCY"){
                                        discrepancy_weight = sf_data_list.content[k][findTextInArray(sf_data_list, "WEIGHT")];
                                        discrepancy_remarks = sf_data_list.content[k][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")];
                                    }
                                }
                            }
                        }
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
                        data_value_done +=`
                        <tr>
                            <td>${data_value__done_counter}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                            <td>${findClientName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "NET WEIGHT")]} kg.</td>
                            <td>${discrepancy_weight} kg.</td>
                            <td>${discrepancy_remarks}</td>
                            <td>${finished_date} /<br> ${finished_time}</td>
                            <td>${calculateTravelTime(date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")]),time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")]),finished_date,finished_time)}</td>
                        </tr>
                        `
                        data_value__done_counter += 1;
                    }
                    else if(done_sorting_sorting[i] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")] &&
                    month_filter.value == "ALL"){
                        var discrepancy_weight = 0;
                        var discrepancy_remarks ="COMPLETE";
                        var finished_date;
                        var finished_time;
                        for(let k = 1; k < sf_data_list.content.length; k++){
                            if(wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")] == sf_data_list.content[k][findTextInArray(sf_data_list, "WCF #")]){
                                finished_date = date_decoder(sf_data_list.content[k][findTextInArray(sf_data_list, "COMPLETION DATE")]);
                                finished_time = time_decoder(sf_data_list.content[k][findTextInArray(sf_data_list, "COMPLETION TIME")]);
                                if(done_sorting_sorting[i] == sf_data_list.content[k][findTextInArray(sf_data_list, "WCF #")]){
                                    if(sf_data_list.content[k][findTextInArray(sf_data_list, "WASTE ID")] == "DISCREPANCY"){
                                        discrepancy_weight = sf_data_list.content[k][findTextInArray(sf_data_list, "WEIGHT")];
                                        discrepancy_remarks = sf_data_list.content[k][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")];
                                    }
                                }
                            }
                        }
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
                        data_value_done +=`
                        <tr>
                            <td>${data_value__done_counter}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")])} /<br> ${time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}</td>
                            <td>${findClientName(wcf_data_list.content[j][findTextInArray(wcf_data_list, "CLIENT ID")])}</td>
                            <td>${wcf_data_list.content[j][findTextInArray(wcf_data_list, "NET WEIGHT")]} kg.</td>
                            <td>${discrepancy_weight} kg.</td>
                            <td>${discrepancy_remarks}</td>
                            <td>${finished_date} /<br> ${finished_time}</td>
                            <td>${calculateTravelTime(date_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL DATE")]),time_decoder(wcf_data_list.content[j][findTextInArray(wcf_data_list, "ARRIVAL TIME")]),finished_date,finished_time)}</td>
                        </tr>
                        `
                        data_value__done_counter += 1;
                    }
                }
            }
            sorted_list_sorting.innerHTML = data_value_done;
    
            // sorted_items_list
            var data_value_done = "";
            var data_value__done_counter = 1;
            for(let j = 0; j < sf_transaction_sorting.length; j++){
                for(let i = 1; i < sf_data_list.content.length; i++){
                    if(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")] == sf_transaction_sorting[j] &&
                    sf_data_list.content[i][findTextInArray(sf_data_list, "WASTE ID")] !== "DISCREPANCY" &&
                    month_filter.value == formatMonth(sf_data_list.content[j][findTextInArray(sf_data_list, "HAULING DATE")])){
                        var mtf = "";
                        var ltf = "";
                        var wcf = "";
                        for(let j = 1; j < wcf_data_list.content.length; j++){
                            if(sf_data_list.content[i][findTextInArray(sf_data_list, "WCF #")] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")]){
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
                            }
                        }
                        data_value_done +=`
                        <tr>
                            <td>${data_value__done_counter}</td>
                            <td>${sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")]}</td>
                            <td>${sf_data_list.content[i][findTextInArray(sf_data_list, "WCF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(sf_data_list.content[i][findTextInArray(sf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(sf_data_list.content[i][findTextInArray(sf_data_list, "COMPLETION DATE")])} /<br> ${time_decoder(sf_data_list.content[i][findTextInArray(sf_data_list, "COMPLETION TIME")])}</td>
                            <td>${findClientName(sf_data_list.content[i][findTextInArray(sf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(sf_data_list.content[i][findTextInArray(sf_data_list, "WASTE ID")])}</td>
                            <td>${sf_data_list.content[i][findTextInArray(sf_data_list, "WASTE NAME")]}</td>
                            <td>${sf_data_list.content[i][findTextInArray(sf_data_list, "WEIGHT")]} kg.</td>
                            <td>${sf_data_list.content[i][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")]}</td>
                        </tr>
                        `
                        data_value__done_counter += 1;
                    }
                    if(sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")] == sf_transaction_sorting[j] &&
                    sf_data_list.content[i][findTextInArray(sf_data_list, "WASTE ID")] !== "DISCREPANCY" &&
                    month_filter.value == "ALL"){
                        var mtf = "";
                        var ltf = "";
                        var wcf = "";
                        for(let j = 1; j < wcf_data_list.content.length; j++){
                            if(sf_data_list.content[i][findTextInArray(sf_data_list, "WCF #")] == wcf_data_list.content[j][findTextInArray(wcf_data_list, "WCF #")]){
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
                            }
                        }
                        data_value_done +=`
                        <tr>
                            <td>${data_value__done_counter}</td>
                            <td>${sf_data_list.content[i][findTextInArray(sf_data_list, "SF #")]}</td>
                            <td>${sf_data_list.content[i][findTextInArray(sf_data_list, "WCF #")]}</td>
                            <td>${mtf}</td>
                            <td>${date_decoder(sf_data_list.content[i][findTextInArray(sf_data_list, "HAULING DATE")])}</td>
                            <td>${date_decoder(sf_data_list.content[i][findTextInArray(sf_data_list, "COMPLETION DATE")])} /<br> ${time_decoder(sf_data_list.content[i][findTextInArray(sf_data_list, "COMPLETION TIME")])}</td>
                            <td>${findClientName(sf_data_list.content[i][findTextInArray(sf_data_list, "CLIENT ID")])}</td>
                            <td>${findWasteCode(sf_data_list.content[i][findTextInArray(sf_data_list, "WASTE ID")])}</td>
                            <td>${sf_data_list.content[i][findTextInArray(sf_data_list, "WASTE NAME")]}</td>
                            <td>${sf_data_list.content[i][findTextInArray(sf_data_list, "WEIGHT")]} kg.</td>
                            <td>${sf_data_list.content[i][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")]}</td>
                        </tr>
                        `
                        data_value__done_counter += 1;
                    }
                }
            }
            sorted_items_list_sorting.innerHTML = data_value_done;    
        }

        // FORM GENERATOR    
        const sf_form_nos = [];
        var last_row = sf_data_list.content.length -1;        
        var data_info = sf_data_list.content[last_row][findTextInArray(sf_data_list, "SF #")];
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        var data_counter = data_info.substring(8,12);
        for (let i = 1; i <= 21; i++) {
            var current_year = new Date().getFullYear();
            var last_counter_year = data_info.substring(2,6);
            if(last_counter_year == current_year){
                sf_form_nos.push(`SF${last_counter_year}${month}${(parseInt(data_counter)+i).toString().padStart(4,"0")}`);
            } else {
                data_counter = (i + 1).toString().padStart(4, "0");
                sf_form_nos.push(`SF${current_year}${month}${data_counter}`);
            }
        }
        // Assigning values to sf_form_no variables
        for (let i = 1; i <= 21; i++) {
            const sf_form_no = document.getElementById(`sf_form_no${i}`);
            sf_form_no.value = sf_form_nos[i];
        }

        // type_of_waste_data_list
        var data_value = [];
        
        // wcf_data_list
        const search_sf_wcf_form_no = document.getElementById("search_sf_wcf_form_no");
        const search_sf_wcf_form_no_button = document.getElementById("search_sf_wcf_form_no_button");
        const sf_wcf_client = document.getElementById("sf_wcf_client");
        const search_sf_wcf_result = document.getElementById("search_sf_wcf_result");
        const batch_weight = document.getElementById("batch_weight");
        const batch_weight_list = document.getElementById("batch_weight_list");
        const additional_item1 = document.getElementById("additional_item1");
        const header = document.getElementById("header");
        const completion = document.getElementById("completion");
        const clear_sf_wcf_form_no_button = document.getElementById("clear_sf_wcf_form_no_button");
        const add_item_button = document.getElementById("add_item_button");
        const remove_item_button = document.getElementById("remove_item_button");
        const weights = document.getElementById("weights");
        const buttons = document.getElementById("buttons");
        const hauling_date = document.getElementById("hauling_date");
        const mtf_form_no = document.getElementById("mtf_form_no");
        
        var vehicle_list = [];
        for(let y = 1; y < vehicle_data_list.content.length; y++){
            if (!vehicle_list.includes(vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")])) {
                vehicle_list.push(vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]);
            }
        }
        
        var quotation_no_data
        search_sf_wcf_form_no_button.addEventListener("click", () => {
            quotation_no_data = ""
            var data_value_text;
            for(let a = 1; a < wcf_data_list.content.length; a++){
                if(search_sf_wcf_form_no.value == wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]){
                    data_value = [];
                    for(let b = 0; b < pending_sorting.length; b++){
                        if(search_sf_wcf_form_no.value == pending_sorting[b]){
                            var mtf = "";
                            var ltf = "";
                            if((wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                                mtf = wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                            }
                            else{
                                ltf = wcf_data_list.content[a][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                                for(let x = 1; x < ltf_data_list.content.length; x++){
                                    if(ltf == ltf_data_list.content[x][findTextInArray(ltf_data_list, "LTF #")]){
                                        mtf = ltf_data_list.content[x][findTextInArray(ltf_data_list, "MTF #")];
                                        break
                                    }
                                }
                            }
                            for(let x = 1; x < mtf_data_list.content.length; x++){
                                if(mtf_data_list.content[x][findTextInArray(mtf_data_list, "MTF #")] == mtf){
                                    quotation_no_data = mtf_data_list.content[x][findTextInArray(mtf_data_list, "QUOTATION CODE")];
                                    break
                                }
                            }
                            data_value_text = `
                            
                            WCF #: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]}<br>
                            CLIENT: ${findClientName(wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")])}<br>
                            WASTE CODE: ${findWasteCode(wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")])}<br>
                            WASTE DESCRIPTION: ${findWasteName(wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")], wcf_data_list.content[a][findTextInArray(wcf_data_list, "WASTE ID")])}<br>
                            PLATE NO: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "PLATE #")]}<br>
                            DRIVER: ${findEmployeeName(wcf_data_list.content[a][findTextInArray(wcf_data_list, "DRIVER ID")])}<br>
                            DATE IN: ${date_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "ARRIVAL DATE")])}<br>
                            TIME IN: ${time_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "ARRIVAL TIME")])}<br>
                            CLIENT WEIGHT: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT WEIGHT")]} Kg.<br>
                            PULL OUT FORM # #: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "PULL OUT FORM #")]}<br>
                            TRUCK SCALE #: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "TRUCK SCALE #")]}<br>
                            GROSS WEIGHT: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "GROSS WEIGHT")]} Kg.<br>
                            TARE WEIGHT: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "TARE WEIGHT")]} Kg.<br>
                            NET WEIGHT: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "NET WEIGHT")]} Kg.<br>
                            HAULING DATE: ${date_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "HAULING DATE")])}<br>
                            REMARKS: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "REMARKS")]}<br>
                            SUBMITTED BY: ${wcf_data_list.content[a][findTextInArray(wcf_data_list, "SUBMITTED BY")]}<br>
                            `
                            sf_wcf_client.value = wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")];
                            batch_weight.value = wcf_data_list.content[a][findTextInArray(wcf_data_list, "NET WEIGHT")];
                            hauling_date.value = date_decoder(wcf_data_list.content[a][findTextInArray(wcf_data_list, "HAULING DATE")]);
                            mtf_form_no.value = mtf;
                            batch_weight_list.style.display = "grid";
                            additional_item1.style.display = "grid";
                            completion.style.display = "grid";
                            header.style.display = "grid";
                            add_item_button.style.display = "block";
                            weights.style.display = "flex";
                            buttons.style.display = "flex";
                            rem_weight.value = batch_weight.value - total_weight.value;
                        }
                        search_sf_wcf_result.innerHTML = `
                        <div class="search_sf_wcf_result">
                        <h2>INFORMATION</h2>
                        No Data Found
                        </div><br>`
                    }
                    for (var x = 1; x < qlf_data_list.content.length; x++) {
                        if(qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")]){
                            if(!vehicle_list.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])){
                                data_value.push(`${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")]} (${findWasteCode(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])})`);
                            }
                        }
                    }
                }
            }
            if(data_value_text == undefined){
                search_sf_wcf_result.innerHTML = `
                <div class="search_sf_wcf_result">
                <h2>INFORMATION</h2>
                No Data Found
                </div><br>`            
            }
            else{
                search_sf_wcf_result.innerHTML = `
                <div class="search_sf_wcf_result">
                <h2>INFORMATION</h2>
                ${data_value_text}
                </div><br>`
            }
        });
    
        clear_sf_wcf_form_no_button.addEventListener("click", () => {
            search_sf_wcf_result.innerHTML = ``;
            search_sf_wcf_form_no.value = ``;
        })

        // for (var x = 1; x < type_of_waste_data_list.content.length; x++) {
        //     data_value.push(`${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE NAME")]} (${type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE CODE")]})`);
        // }

        
        const total_weight = document.getElementById("total_weight");
        const rem_weight = document.getElementById("rem_weight");
        const itemcounter = document.querySelectorAll(".search_input_type");
        const item_counter = document.getElementById("item_counter");
        const search_wrapper = [];
        const destruction_process = [];
        const waste_id = [];
        const waste_name = [];
        const quotation = [];
        const weight = [];
        const input_box = [];
        const sugg_box = [];
        
        for (let z = 1; z <= itemcounter.length; z++) {
            search_wrapper[z] = document.getElementById(`search_type_of_waste${z}`);
            destruction_process[z] = document.getElementById(`destruction_process${z}`);
            waste_id[z] = document.getElementById(`waste_id${z}`);
            waste_name[z] = document.getElementById(`waste_name${z}`);
            quotation[z] = document.getElementById(`quotation${z}`);
            weight[z] = document.getElementById(`weight${z}`);
            input_box[z] = search_wrapper[z].querySelector("input");
            sugg_box[z] = search_wrapper[z].querySelector(".autocom_box");

            input_box[z].onkeyup = (e) => {
                let user_data = e.target.value;
                let empty_array = [];
                if (user_data) {
                    empty_array = data_value.filter((data) => {
                        return data.toLocaleLowerCase().includes(user_data.toLocaleLowerCase());
                    });
                    empty_array = empty_array.map((data) => {
                        return '<li>' + data + '</li>';
                    });
                    search_wrapper[z].classList.add("active");
                    show_suggestions(empty_array, z);
                } else {
                    search_wrapper[z].classList.remove("active");
                }
            };

            sugg_box[z].addEventListener("click", (e) => {
                if (e.target.tagName === "LI") {
                    select(e.target.innerText, z);
                }
            });

            function select(element, index) {
                let select_user_data = element;
                input_box[index].value = select_user_data;
                search_wrapper[index].classList.remove("active");
                var treatment_input = document.getElementById(`destruction_process${index}`);
                for(let i = 1; i < wcf_data_list.content.length; i++){
                    if(search_sf_wcf_form_no.value == wcf_data_list.content[i][findTextInArray(wcf_data_list, "WCF #")]){
                        for (var x = 1; x < qlf_data_list.content.length; x++) {
                            if (wcf_data_list.content[i][findTextInArray(wcf_data_list, "CLIENT ID")] == qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")]){
                                if((input_box[z].value).replace(/\s*\([^)]*\)/, '') == qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")]) {
                                    waste_id[z].value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")];
                                    waste_name[z].value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")];
                                    quotation[z].value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")];
                                    break
                                }
                                else{
                                    waste_id[z].value = "W2023000";
                                    waste_name[z].value = input_box[z].value;
                                    quotation[z].value = quotation_no_data;
                                }
                                treatment_input.removeAttribute("readonly");
                            }
                        }
                        break
                    }
                }
            }

            function show_suggestions(list, index) {
                let list_data;
                if (!list.length) {
                    user_value = input_box[index].value;
                    list_data = '<li>' + user_value + '</li>';
                } else {
                    list_data = list.join("");
                }
                sugg_box[index].innerHTML = list_data;
            }

            // Batch Weight Calculator
            weight[z].addEventListener("input", () => {
                var new_weight = 0;
                var inputWeights = [];

                // Store the input values in the array and exclude NaN values
                for (let i = 1; i <= 21; i++) {
                    var weightInput = document.getElementById(`weight${i}`);
                    var intWeight = parseFloat(weightInput.value);
                    if (!isNaN(intWeight)) {
                        inputWeights.push(intWeight);
                    }
                }

                // Calculate the new weight by summing the input values
                new_weight = inputWeights.reduce((total, weight) => total + weight, 0);

                // Update the total weight input
                total_weight.value = new_weight;

                // Calculate and update the remaining weight
                rem_weight.value = batch_weight.value - total_weight.value;
                
            });

            item_counter.addEventListener("input", () => {
                var new_weight = 0;
                var inputWeights = [];

                // Store the input values in the array and exclude NaN values
                for (let i = 1; i <= 20; i++) {
                    var weightInput = document.getElementById(`weight${i}`);
                    var intWeight = parseInt(weightInput.value);
                    if (!isNaN(intWeight)) {
                        inputWeights.push(intWeight);
                    }
                }

                // Calculate the new weight by summing the input values
                new_weight = inputWeights.reduce((total, weight) => total + weight, 0);

                // Update the total weight input
                total_weight.value = new_weight;

                // Calculate and update the remaining weight
                rem_weight.value = batch_weight.value - total_weight.value;
            });

            // Create and dispatch the input event
            const inputEvent = new Event('input', { bubbles: true, cancelable: true });
            item_counter.dispatchEvent(inputEvent);
        }

        // treatment_type
        const itemcounter2 = document.querySelectorAll(".search_treatment_type");
        const search_wrapper2 = [];
        const input_box2 = [];
        const sugg_box2 = [];

        for (let z = 1; z <= itemcounter2.length; z++) {
            search_wrapper2[z] = document.getElementById(`search_type_of_treatment${z}`);
            input_box2[z] = search_wrapper2[z].querySelector("input");
            sugg_box2[z] = search_wrapper2[z].querySelector(".autocom_box");

            var data_value2 = ["FOR STORAGE"];

            for (let i = 1; i < treatment_process_data_list.content.length; i++) {
                if (!data_value2.includes(treatment_process_data_list.content[i][findTextInArray(treatment_process_data_list, "TREATMENT PROCESS")])) {
                    data_value2.push(treatment_process_data_list.content[i][findTextInArray(treatment_process_data_list, "TREATMENT PROCESS")]);
                }
            }

            input_box2[z].onkeyup = (e) => {
                let user_data = e.target.value;
                let empty_array = [];
                if (user_data) {
                    empty_array = data_value2.filter((data) => {
                        return data.toLocaleLowerCase().includes(user_data.toLocaleLowerCase());
                    });
                    empty_array = empty_array.map((data) => {
                        return '<li>' + data + '</li>';
                    });
                    search_wrapper2[z].classList.add("active");
                    show_suggestions2(empty_array, z);
                } else {
                    search_wrapper2[z].classList.remove("active");
                }
            };

            sugg_box2[z].addEventListener("click", (e) => {
                if (e.target.tagName === "LI") {
                    select2(e.target.innerText, z);
                }
            });

            function select2(element, index) {
                let select_user_data = element;
                input_box2[index].value = select_user_data;
                search_wrapper2[index].classList.remove("active");
            }

            function show_suggestions2(list, index) {
                let list_data;
                if (!list.length) {
                    user_value = input_box[index].value;
                    list_data = '<li>' + user_value + '</li>';
                } else {
                    list_data = list.join("");
                }
                sugg_box2[index].innerHTML = list_data;
            }
        }

        const discrepancy = document.getElementById("discrepancy");
        const discrepancy_button = document.getElementById("discrepancy_button");
        
        discrepancy_button.addEventListener("click", add_discrepancy_input);
        add_item_button.addEventListener("click", add_new_item);
        remove_item_button.addEventListener("click", remove_new_item);
        
        function add_discrepancy_input() {
            const is_discrepancy = document.getElementById("is_discrepancy");
            const sf_discrepancy = document.getElementById(`sf_discrepancy`);
            const sf_form_no = document.getElementById(`sf_form_no${parseInt(item_counter.value) + 1}`);
            sf_discrepancy.value = sf_form_no.value;
            
            discrepancy.style.display = "grid";
            add_item_button.style.display = "none";
            remove_item_button.style.display = "none";
            is_discrepancy.value = "true";
        }
        
        function add_new_item() {
            const item_counter_int = parseInt(item_counter.value) + 1;
            item_counter.value = item_counter_int;

            
            if (item_counter_int >= 2 && item_counter_int <= 20) {
                const additional_item = document.getElementById(`additional_item${item_counter_int}`);
                const type_of_waste = document.getElementById(`type_of_waste${item_counter_int}`);
                const weight = document.getElementById(`weight${item_counter_int}`);
                const destruction_process = document.getElementById(`destruction_process${item_counter_int}`);
                additional_item.style.display = "grid";
                type_of_waste.setAttribute("required", "true");
                weight.setAttribute("required", "true");
                destruction_process.setAttribute("required", "true");
                
                if (item_counter_int === 2) {
                    remove_item_button.style.display = "block";
                }
                
                if (item_counter_int === 20) {
                    add_item_button.style.display = "none";
                }
            }
        }
        
        function remove_new_item() {
            const item_counter_int = parseInt(item_counter.value);
            
            if (item_counter_int >= 2 && item_counter_int <= 20) {
                const additional_item = document.getElementById(`additional_item${item_counter_int}`);
                additional_item.style.display = "none";
                const type_of_waste = document.getElementById(`type_of_waste${item_counter_int}`);
                const destruction_process = document.getElementById(`destruction_process${item_counter_int}`);
                const weight = document.getElementById(`weight${item_counter_int}`);
                weight.value = 0;
                
                type_of_waste.removeAttribute("required")
                destruction_process.removeAttribute("required")
                weight.removeAttribute("required")

                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                item_counter.dispatchEvent(inputEvent);
                
                if (item_counter_int === 2) {
                    remove_item_button.style.display = "none";
                }
                
                if (item_counter_int === 20) {
                    add_item_button.style.display = "block";
                }
            }
            
            item_counter.value = item_counter_int - 1;
        }

        const type_of_waste_list = document.getElementById("type_of_waste_list");
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
                if(client_id == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")]){
                    var waste_id_data_full = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")];
                    var waste_id_data = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")].substring(0, 8);
                    var waste = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE NAME")];
                    if(waste_id == waste_id_data){
                        waste_name = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE NAME")];
                        break
                    }
                    else if(waste_id == "W2023100"){
                        waste_name = "ASSORTED NON-HAZARDOUS WASTE"
                        break
                    }
                    else if(waste_id == "W2023200"){
                        waste_name = "ASSORTED HAZARDOUS WASTE"
                        break
                    }
                    else if(waste_id_data == "W2023000"){
                        if(waste_id == waste_id_data_full){
                            waste_name = waste;
                            break
                        }
                    }
                    else{
                        waste_name = waste_id_data
                    }
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
            const dataHeight = 16; // Adjust this value based on your content

            for(let x = 1; x < sf_data_list.content.length; x++){
                var hauling_date = new Date(sf_data_list.content[x][findTextInArray(sf_data_list, "HAULING DATE")])
                var wcf_data = sf_data_list.content[x][findTextInArray(sf_data_list, "WCF #")]
                var sf_data = sf_data_list.content[x][findTextInArray(sf_data_list, "SF #")]
                var date_data = sf_data_list.content[x][findTextInArray(sf_data_list, "COMPLETION DATE")]
                var time_data = sf_data_list.content[x][findTextInArray(sf_data_list, "COMPLETION TIME")]
                var client_id_data = sf_data_list.content[x][findTextInArray(sf_data_list, "CLIENT ID")]
                var waste_name = sf_data_list.content[x][findTextInArray(sf_data_list, "WASTE NAME")]
                var weight = sf_data_list.content[x][findTextInArray(sf_data_list, "WEIGHT")]
                var process = sf_data_list.content[x][findTextInArray(sf_data_list, "DESTRUCTION PROCESS / DISCREPANCY REMARKS")]
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
                    sf_data,
                    mtf,
                    hauling_date,
                    date_data,
                    time_data,
                    client_id_data,
                    waste_name,
                    weight,
                    process,
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
                        <td>${item.sf_data}</td>
                        <td>${item.mtf}</td>
                        <td>${date_decoder(item.hauling_date)}</td>
                        <td>${date_decoder(item.date_data)}</td>
                        <td>${time_decoder(item.time_data)}</td>
                        <td>${findClientName(item.client_id_data)}</td>
                        <td>${item.waste_name}</td>
                        <td>${formatNumber(item.weight)}</td>
                        <td>${item.process}</td>
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
                            <h1 style="text-align: center; font-weight: bold;">SORTING TRANSACTIONS</h1>
                            <h1 style="text-align: center; font-weight: bold;">MATERIAL RECOVERY FACILITY DEPARTMENT</h1>
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
                                        <th>SF #</td>
                                        <th>MTF #</td>
                                        <th>HAULING DATE</th>
                                        <th>SORTING DATE</th>
                                        <th>SORTING TIME</th>
                                        <th>CLIENT</th>
                                        <th>WASTE NAME</th>
                                        <th>WEIGHT (kg)</th>
                                        <th>TREATMENT PROCESS</th>
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

