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
        const pending_purchasing = purchasing_dashboard.querySelector("#pending");
        const requested_purchasing = purchasing_dashboard.querySelector("#requested");
        const approved_purchasing = purchasing_dashboard.querySelector("#approved");
        const released_purchasing = purchasing_dashboard.querySelector("#released");
        const purchased_purchasing = purchasing_dashboard.querySelector("#purchased");
        const month_filter = document.getElementById("month_filter");

        let prf_transaction = []; // Variable containing existing elements
        let prf_pr_transaction = []; // Variable containing existing elements
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
                    pending.push(prf_data_list.content[i][findTextInArray(prf_data_list, "PR #")]);
                }
                if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "REQUESTED") {
                    requested.push(prf_data_list.content[i][findTextInArray(prf_data_list, "PR #")]);
                }
                if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "APPROVED") {
                    approved.push(prf_data_list.content[i][findTextInArray(prf_data_list, "PR #")]);
                }
                if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "RELEASED") {
                    released.push(prf_data_list.content[i][findTextInArray(prf_data_list, "PR #")]);
                }
                if (prf_data_list.content[i][findTextInArray(prf_data_list, "STATUS")] == "PURCHASED") {
                    purchased.push(prf_data_list.content[i][findTextInArray(prf_data_list, "PR #")]);
                }
            }
    
            for (let i = 1; i < pof_data_list.content.length; i++) {
                if (!prf_pr_transaction.includes(pof_data_list.content[i][findTextInArray(prf_data_list, "PR #")])) {
                    prf_pr_transaction.push(pof_data_list.content[i][findTextInArray(prf_data_list, "PR #")]);
                }
            }
    
            // Get elements from sf_transaction not included in sf_tpf_transaction
            const pending_list_purchasing = prf_transaction.filter((element) => !prf_pr_transaction.includes(element));
    
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
            var data_value = "";
            var data_value_counter = 1;
            for(let x = 1; x < prf_data_list.content.length; x++){
                var pr_data, date_time, quantity, unit, item, details, remarks, department, requisitioner;
                pr_data = prf_data_list.content[x][findTextInArray(prf_data_list, "ITM #")];
                date_time = prf_data_list.content[x][findTextInArray(prf_data_list, "CREATED AT")];
                quantity = prf_data_list.content[x][findTextInArray(prf_data_list, "QUANTITY")];
                unit = prf_data_list.content[x][findTextInArray(prf_data_list, "UNIT")];
                item = prf_data_list.content[x][findTextInArray(prf_data_list, "ITEM")];
                details = prf_data_list.content[x][findTextInArray(prf_data_list, "DETAILS")];
                remarks = prf_data_list.content[x][findTextInArray(prf_data_list, "REMARKS")];
                department = prf_data_list.content[x][findTextInArray(prf_data_list, "DEPARTMENT")];
                requisitioner = prf_data_list.content[x][findTextInArray(prf_data_list, "SUBMITTED BY")];
                data_value += `
                <tr>
                    <td>${data_value_counter}</td>
                    <td>${pr_data}</td>
                    <td>${date_decoder(date_time)} /<br> ${time_decoder(date_time)}</td>
                    <td>${quantity}</td>
                    <td>${unit}</td>
                    <td>${item}</td>
                    <td>${details}</td>
                    <td>${remarks}</td>
                    <td>${department}</td>
                    <td>${requisitioner}</td>
                </tr>
                `
                data_value_counter += 1;
            }
            pending_list_container_purchasing.innerHTML = data_value;
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
