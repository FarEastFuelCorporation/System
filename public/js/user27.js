document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const bpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyux0GBj9tk6quRz46IkXa0VemEDAi-v2iEHx7C_6OFi416ERkv_BFtKqBmbw-bxaaiFQ/exec');

        const [
            username_response,
            employee_response,
            client_list_response,
            bpf_response,
        ] = await Promise.all([
            username_response_promise,
            employee_response_promise,
            client_list_response_promise,
            bpf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const employee_data_list  = await employee_response.json();
        const client_data_list  = await client_list_response.json();
        const bpf_data_list  = await bpf_response.json();

        // Code that depends on the fetched data
        // username_data_list
        const profile_picture = document.getElementById("profile_picture");
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("#user");
        const departments = document.querySelectorAll("#department");

        const user_name = username_data_list.content[27][findTextInArray(username_data_list, "NAME")];
        profile_picture.src = `../images/profile_picture/${username_data_list.content[27][findTextInArray(username_data_list, "PICTURE")]}`;
        users.forEach(user => {user.value = username_data_list.content[27][findTextInArray(username_data_list, "NAME")]})
        departments.forEach(user => {user.value = username_data_list.content[27][findTextInArray(username_data_list, "DEPARTMENT")]})
        user_sidebar.innerHTML = `<u>${username_data_list.content[27][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[27][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[27][findTextInArray(username_data_list, "DEPARTMENT")];
        
        // dashboard
        const dashboard_section = document.querySelector("#dashboard_section");
        const pending_list = dashboard_section.querySelector("#pending_list");
        const transactions = dashboard_section.querySelector("#transactions");
        const pending = dashboard_section.querySelector("#pending");
        const finished = dashboard_section.querySelector("#finished");
        const month_filter = document.getElementById("month_filter");

        var pending_array = [];
        var finish_array = [];
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
            var data_value = "";
            var data_value_counter = 1;
            for(let x = 1; x < bpf_data_list.content.length; x++){
                if(month_filter.value == formatMonth(bpf_data_list.content[x][findTextInArray(bpf_data_list, "HAULING DATE")])){
                    data_value =
                    `
                        <tr>
                            <td>${data_value_counter}</td>
                            <td>${bpf_data_list.content[x][findTextInArray(bpf_data_list, "BPF #")]}</td>
                            <td>${findClientName(bpf_data_list.content[x][findTextInArray(bpf_data_list, "CLIENT ID")])}</td>
                        </tr>
                    `
                    pending_array.push(bpf_data_list.content[x][findTextInArray(bpf_data_list, "BPF #")])
                    pending_list.insertAdjacentHTML("beforeend", data_value)
                    data_value_counter += 1;
                }
            }

            transactions.innerText = pending_array.length + finish_array.length;
            pending.innerText = pending_array.length;
            finished.innerText = finish_array.length;

            var options = {
                series: [pending_array.length, finish_array.length],
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
                    waste_code = "N/A";
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
                else{
                    waste_name = waste_id
                }
            }
            return waste_name
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
