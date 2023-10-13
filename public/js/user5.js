document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const client_list_response_promise = fetch('https://script.google.com/macros/s/AKfycbxXnIsmgK52Ws9H2qAh47qkgZxDltFJaHSFV0e9UQRwaK1g_xwFUKGokL_hk4fq-_mhSg/exec');
        const type_of_waste_response_promise = fetch('https://script.google.com/macros/s/AKfycbw0yC-8_V38Zl1-KGyBwX1JmfTEW1jwyFxgpZ-oNC2lvtoAraUtkLCS27HfNbXi_l4IPg/exec');
        const vehicle_response_promise = fetch('https://script.google.com/macros/s/AKfycbw-JCnctX1x1W1ogGbrkhNdIGd9q6bYjy_nvaYeoiaBf7HreB2a1tKJZaJHw2wu4wmpcA/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const wcf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBFTBuFZ4PkvwmPi_3Pp_v74DCSEK2VpNy6janIGgaAK-P22wazmmShOKn6iwFbrQn/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');
        const cod_response_promise = fetch('https://script.google.com/macros/s/AKfycbzgiOuXizUVviCsLVfihqYN9HJ3pyNr7ElHoCl3JGkbtQnChnm2U42yQuLd4UMH0ci5/exec');
        const bpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyux0GBj9tk6quRz46IkXa0VemEDAi-v2iEHx7C_6OFi416ERkv_BFtKqBmbw-bxaaiFQ/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');

        const [
            username_response,
            client_list_response,
            type_of_waste_response,
            vehicle_response,
            ltf_response,
            wcf_response,
            tpf_response,
            cod_response,
            bpf_response,
            qlf_response,
        ] = await Promise.all([
            username_response_promise,
            client_list_response_promise,
            type_of_waste_response_promise,
            vehicle_response_promise,
            ltf_response_promise,
            wcf_response_promise,
            tpf_response_promise,
            cod_response_promise,
            bpf_response_promise,
            qlf_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const client_data_list  = await client_list_response.json();
        const type_of_waste_data_list  = await type_of_waste_response.json();
        const vehicle_data_list  = await vehicle_response.json();
        const ltf_data_list  = await ltf_response.json();
        const wcf_data_list  = await wcf_response.json();
        const tpf_data_list  = await tpf_response.json();
        const cod_data_list  = await cod_response.json();
        const bpf_data_list  = await bpf_response.json();
        const qlf_data_list  = await qlf_response.json();

        // Code that depends on the fetched data
        // username_data_list
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const user = document.getElementById("user");

        user.value = username_data_list.content[5][findTextInArray(username_data_list, "NAME")];
        user_sidebar.innerHTML = `<u>${username_data_list.content[5][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[5][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[5][findTextInArray(username_data_list, "DEPARTMENT")];
    
        // billing_dashboard
        const certified_counter_billing = document.querySelector("#billing_dashboard #certified_counter");
        const pending_counter_billing = document.querySelector("#billing_dashboard #pending_counter");
        const billed_counter_billing = document.querySelector("#billing_dashboard #billed_counter");
        const unsorted_list_billing = document.querySelector("#billing_dashboard #unsorted_list");
        var sf_tpf_transaction_counter_billing = 0;
        var sf_transaction_counter_billing = 0;
        let sf_transaction_billing = []; // Variable containing existing elements
        let sf_tpf_transaction_billing = []; // Variable containing existing elements
        const month_filter = document.querySelector("#month_filter");
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
            sf_tpf_transaction_counter_billing = 0;
            sf_transaction_counter_billing = 0;
            sf_transaction_billing = [];
            sf_tpf_transaction_billing = [];
            for (let i = 1; i < cod_data_list.content.length; i++) {
                if (!sf_transaction_billing.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]) &&
                month_filter.value == formatMonth(cod_data_list.content[i][findTextInArray(cod_data_list, "HAULING DATE")])) {
                    sf_transaction_billing.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
                    sf_transaction_counter_billing += 1
                }
                else if (!sf_transaction_billing.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]) &&
                month_filter.value == "ALL") {
                    sf_transaction_billing.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
                    sf_transaction_counter_billing += 1
                }
            }
    
            for (let i = 1; i < bpf_data_list.content.length; i++) {
                if (!sf_tpf_transaction_billing.includes(bpf_data_list.content[i][findTextInArray(bpf_data_list, "COD #")]) &&
                month_filter.value == formatMonth(bpf_data_list.content[i][findTextInArray(bpf_data_list, "HAULING DATE")])) {
                    sf_tpf_transaction_billing.push(bpf_data_list.content[i][findTextInArray(bpf_data_list, "COD #")]);
                    sf_tpf_transaction_counter_billing += 1
                }
                else if (!sf_tpf_transaction_billing.includes(bpf_data_list.content[i][findTextInArray(bpf_data_list, "COD #")]) &&
                month_filter.value == "ALL") {
                    sf_tpf_transaction_billing.push(bpf_data_list.content[i][findTextInArray(bpf_data_list, "COD #")]);
                    sf_tpf_transaction_counter_billing += 1
                }
            }
    
            // Get elements from sf_transaction not included in sf_tpf_transaction
            const newElements_billing = sf_transaction_billing.filter((element) => !sf_tpf_transaction_billing.includes(element));
    
            certified_counter_billing.innerText = sf_transaction_counter_billing;
            pending_counter_billing.innerText = sf_transaction_counter_billing - sf_tpf_transaction_counter_billing;
            billed_counter_billing.innerText = sf_tpf_transaction_counter_billing;
            
            var options = {
                series: [sf_transaction_counter_billing - sf_tpf_transaction_counter_billing, sf_tpf_transaction_counter_billing],
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
            const pieChart = document.querySelector("#pieChart");
            while (pieChart.firstChild) {
                pieChart.removeChild(pieChart.firstChild);
            }
            var chart = new ApexCharts(pieChart, options);
            chart.render();
            
            var data_value = "";
            var data_value_counter = 1;
            for(let i = 0; i < newElements_billing.length; i++){
                for(let j = 1; j < cod_data_list.content.length; j++){
                    if(newElements_billing[i] == cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")] &&
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
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                    else if(newElements_billing[i] == cod_data_list.content[j][findTextInArray(cod_data_list, "COD #")] &&
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
                        </tr>
                        `
                        data_value_counter += 1;
                    }
                }
            }
            unsorted_list_billing.innerHTML = data_value;            
        }

        // cod_data_list
        // FORM GENERATOR
        const bpf_form_no = document.getElementById("bpf_form_no");
        var last_row = bpf_data_list.content.length -1;
        var data_info = bpf_data_list.content[last_row][findTextInArray(bpf_data_list, "BPF #")];
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
        bpf_form_no.value = `BPF${year}${month}${data_counter}`;
        
        const billing_process_form = document.querySelector("#billing_process_form");
        const generate_button = billing_process_form.querySelector("#generate_button");
        const convertToPDFandDownload_button = billing_process_form.querySelector("#convertToPDFandDownload_button");
        const convertToPDF_button = billing_process_form.querySelector("#convertToPDF_button");
        const bpf_form_no_container = billing_process_form.querySelector("#bpf_form_no_container");
        const date_made_container = billing_process_form.querySelector("#date_made_container");
        const client_name_container = billing_process_form.querySelector("#client_name_container");
        const address_container = billing_process_form.querySelector("#address_container");
        const tin_id_container = billing_process_form.querySelector("#tin_id_container");
        const nature_of_business_container = billing_process_form.querySelector("#nature_of_business_container");
        const table_data = billing_process_form.querySelector("#table_data");
        const total_amount_payable_container = billing_process_form.querySelector("#total_amount_payable_container");
        const non_vatable_container = billing_process_form.querySelector("#non_vatable_container");
        const vatable_container = billing_process_form.querySelector("#vatable_container");
        const vat_container = billing_process_form.querySelector("#vat_container");
        const credits_container = billing_process_form.querySelector("#credits_container");
        const total_amount_due_container = billing_process_form.querySelector("#total_amount_due_container");
        const due_date_container = billing_process_form.querySelector("#due_date_container");
        const total_amount_container = billing_process_form.querySelector("#total_amount_container");
        const si_client_name_container = billing_process_form.querySelector("#si_client_name_container");
        const si_address_container = billing_process_form.querySelector("#si_address_container");
        const si_tin_nature_of_business_container = billing_process_form.querySelector("#si_tin_nature_of_business_container");
        const si_date_container = billing_process_form.querySelector("#si_date_container");
        const si_table_data = billing_process_form.querySelector("#si_table_data");
        const si_vat_ex_container = billing_process_form.querySelector("#si_vat_ex_container");
        const si_vat_container = billing_process_form.querySelector("#si_vat_container");
        const si_credits_container = billing_process_form.querySelector("#si_credits_container");
        const si_total_amount_container = billing_process_form.querySelector("#si_total_amount_container");
        const si_total_sales_container = billing_process_form.querySelector("#si_total_sales_container");
        const si_terms_container = billing_process_form.querySelector("#si_terms_container");
        const what_to_print = billing_process_form.querySelector("#what_to_print");
        const what_to_print2 = billing_process_form.querySelector("#what_to_print2");
        let table_data_info = [];
        let table_data_transportation = [];
        let si_table_data_info = [];
        let si_table_data_transportation = [];

        var wcf_transaction = [];
        var cod_transaction = [];
        for (let i = 1; i < cod_data_list.content.length; i++) {
            if (!wcf_transaction.includes(cod_data_list.content[i][findTextInArray(cod_data_list, "WCF #")])) {
                wcf_transaction.push(cod_data_list.content[i][findTextInArray(cod_data_list, "WCF #")]);
                cod_transaction.push(cod_data_list.content[i][findTextInArray(cod_data_list, "COD #")]);
            }
        }
        function generate(){
            const search_cod_form_no = billing_process_form.querySelector("#search_cod_form_no");
            const service_invoice_no = billing_process_form.querySelector("#service_invoice_no");
            var non_vatable = 0;
            var vatable = 0;
            var credits = 0;
            var si_total_amount = 0;
            var si_credits = 0;
            var date_of_certification = "";
            var date_of_certification_transportation = "";
            var transportation_vehicle = ""
            var transportation_unit = ""
            var transportation_fee = ""
            var transportation_calculation = ""
            var term = ""
            var data3_counter = 1;
            var data4_counter = 2;
            var table_counter = 0;
            for(let x = 1; x < cod_data_list.content.length; x++){
                var client_name = "";
                var address = "";
                var nature_of_business = "";
                date_of_certification = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                for(let c = 1; c < client_data_list.content.length; c++){
                    if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == client_data_list.content[c][findTextInArray(client_data_list, "CLIENT ID")]){
                        client_name = client_data_list.content[c][findTextInArray(client_data_list, "BILLER NAME")];
                        address = client_data_list.content[c][findTextInArray(client_data_list, "BILLER ADDRESS")];
                        // nature_of_business = client_data_list.content[c][findTextInArray(client_data_list, "NATURE OF BUSINESS")];
                        break
                    }
                }
                var waste_code = "";
                for(let c = 1; c < type_of_waste_data_list.content.length; c++){
                    if(cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
                        waste_code = (type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE CODE")]).substring(0, 4);
                        break
                    }
                }
                var waste_name = "";
                var mode = "";
                var unit = "";
                var unit_price = "";
                var vat_calculation = "";
                for(let c = 1; c < qlf_data_list.content.length; c++){
                    if(cod_data_list.content[x][findTextInArray(cod_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                    cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                        waste_name = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE NAME")];
                        mode = qlf_data_list.content[c][findTextInArray(qlf_data_list, "MODE")];
                        unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")];
                        unit_price = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")];
                        vat_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")];
                        break
                    }
                    else{
                        waste_name = cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")];
                    }
                }
                for(let a = 1; a < wcf_data_list.content.length; a++){
                    if(cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")] == wcf_data_list.content[a][findTextInArray(wcf_data_list, "WCF #")]){
                        for(let c = 1; c < qlf_data_list.content.length; c++){
                            if(wcf_data_list.content[a][findTextInArray(wcf_data_list, "CLIENT ID")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "CLIENT ID")] &&
                            wcf_data_list.content[a][findTextInArray(wcf_data_list, "TYPE OF VEHICLE")] == qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                                transportation_vehicle = qlf_data_list.content[c][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                                transportation_unit = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT")]
                                transportation_fee = qlf_data_list.content[c][findTextInArray(qlf_data_list, "UNIT PRICE")]
                                transportation_calculation = qlf_data_list.content[c][findTextInArray(qlf_data_list, "VAT CALCULATION")]
                                term = qlf_data_list.content[c][findTextInArray(qlf_data_list, "TERMS DAYS")]
                            }
                        }
                    }
                }
                var data = "";
                var data3 = "";
                if(search_cod_form_no.value == cod_data_list.content[x][findTextInArray(cod_data_list, "COD #")] &&
                type_of_form.value == "By COD"){
                    // && vat_calculation == "CHARGE"
                    bpf_form_no_container.innerText = bpf_form_no.value;
                    date_made_container.innerText = date_decoder(new Date());
                    client_name_container.innerHTML = client_name;
                    si_client_name_container.innerText = client_name;
                    address_container.innerText = address;
                    si_address_container.innerText = address;
                    tin_id_container.innerText = "008-648-866-000";
                    nature_of_business_container.innerText = nature_of_business;
                    si_tin_nature_of_business_container.innerText = `008-648-866-000 / ${nature_of_business}`;
                    si_tin_nature_of_business_container.innerText = `008-648-866-000 / ${nature_of_business}`;
                    si_date_container.innerText = date_of_certification;
                    data = `
                    <tr>
                        <td>${date_of_certification}</td>
                        <td></td>
                        <td>${service_invoice_no.value}</td>
                        <td style="font-size: 10px !important; padding-top: 2px;">${cod_data_list.content[x][findTextInArray(cod_data_list, "WASTE NAME")]}</td>
                        <td>${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                        <td>${unit}</td>
                        <td style="text-align: right; padding-right: 5px">${formatNumber(unit_price)}</td>
                        <td style="text-align: right; padding-right: 5px">${formatNumber(parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price))}</td>
                        <td style="font-size: 10px !important">${vat_calculation}</td>
                    </tr>
                    `
                    table_data_info.push(data);
                    var si_unit_price = 0;
                    var si_amount = 0;
                    if(vat_calculation == "VAT EXCLUSIVE"){
                        vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                        si_unit_price = parseFloat(unit_price) + (parseFloat(unit_price)*.12);
                        si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                        si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * (parseFloat(unit_price) + (parseFloat(unit_price)*.12));
                    }
                    else{
                        non_vatable += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                        si_unit_price = parseFloat(unit_price);
                        si_amount = parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                        si_total_amount += parseFloat(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")]) * parseFloat(unit_price);
                    }                    
                    data3 = `
                    <tr>
                        <td>${data3_counter}</td>
                        <td class="amount">${formatNumber2(cod_data_list.content[x][findTextInArray(cod_data_list, "WEIGHT")])}</td>
                        <td>${unit}</td>
                        <td>${date_of_certification}</td>
                        <td style="font-size: 10px !important; padding-top: 5px !important;">${waste_name}</td>
                        <td class="amount">${formatNumber(si_unit_price)}</td>
                        <td class="amount">${formatNumber(si_amount)}</td>
                    </tr>
                    `
                    data3_counter += 2;
                    table_counter += 1;
                    si_table_data_info.push(data3);
                }
            }
            for(let y = 0; y < wcf_transaction.length; y++){
                if(search_cod_form_no.value == cod_transaction[y] &&
                    type_of_form.value == "By COD"){
                    for(let x = 1; x < cod_data_list.content.length; x++){
                        if(wcf_transaction[y] == cod_data_list.content[x][findTextInArray(cod_data_list, "WCF #")]){
                            date_of_certification_transportation = date_decoder3(cod_data_list.content[x][findTextInArray(cod_data_list, "HAULING DATE")]);
                        }
                    }
                    var data2 = "";
                    var data4 = "";
                    data2 = `
                    <tr>
                        <td>${date_of_certification_transportation}</td>
                        <td></td>
                        <td>${service_invoice_no.value}</td>
                        <td style="font-size: 10px !important; padding-top: 2px">TRANS. FEE ${transportation_vehicle}</td>
                        <td>${1}</td>
                        <td>${transportation_unit}</td>
                        <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                        <td style="text-align: right; padding-right: 5px">${formatNumber(transportation_fee)}</td>
                        <td style="font-size: 10px !important">${transportation_calculation}</td>
                    </tr>
                    `
                    table_data_transportation.push(data2);
                    var si_unit_price = 0;
                    var si_amount = 0;
                    if(transportation_calculation == "VAT EXCLUSIVE"){
                        vatable += parseFloat(transportation_fee);
                        si_unit_price = parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12);
                        si_amount = (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                        si_total_amount += (1 * (parseFloat(transportation_fee) + (parseFloat(transportation_fee)*.12)));
                    }
                    else{
                        non_vatable += parseFloat(transportation_fee);
                        si_unit_price = parseFloat(transportation_fee);
                        si_amount = (1 * (parseFloat(transportation_fee)));
                        si_total_amount += (1 * (parseFloat(transportation_fee)));
                    }
                    data4 = `
                    <tr>
                        <td>${data4_counter}</td>
                        <td class="amount">${1}</td>
                        <td>${transportation_unit}</td>
                        <td>${date_of_certification_transportation}</td>
                        <td style="font-size: 10px !important; padding-top: 5px !important;">TRANS. FEE ${transportation_vehicle}</td>
                        <td class="amount">${formatNumber(si_unit_price)}</td>
                        <td class="amount">${formatNumber(si_amount)}</td>
                    </tr>
                    `
                    data4_counter += 2;
                    table_counter += 1;
                    si_table_data_transportation.push(data4);
                }
            }
            for(let x = 0; x < table_data_info.length; x++){
                table_data.insertAdjacentHTML("beforeend", table_data_info[x])
                table_data.insertAdjacentHTML("beforeend", table_data_transportation[x])
            }
            for(let x = 0; x < si_table_data_info.length; x++){
                si_table_data.insertAdjacentHTML("beforeend", si_table_data_info[x])
                si_table_data.insertAdjacentHTML("beforeend", si_table_data_transportation[x])
            }
            for(let x = 0; x < 20 - table_counter; x++){
                var data5 = "";
                data5 = `
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                `
                table_data.insertAdjacentHTML("beforeend", data5);
            }
            non_vatable_container.innerText = formatNumber(non_vatable);
            vatable_container.innerText = formatNumber(vatable);
            vat_container.innerText = formatNumber((parseFloat(vatable))*.12);
            total_amount_payable_container.innerText = formatNumber(non_vatable + vatable + (parseFloat(vatable))*.12);
            credits_container.innerText = formatNumber(credits);
            total_amount_due_container.innerText = formatNumber((non_vatable + vatable + (parseFloat(vatable))*.12) - parseFloat(credits));
            due_date_container.innerHTML = `${term} days<br>from the date received`;
            total_amount_container.innerText = formatNumber((non_vatable + vatable + (parseFloat(vatable))*.12) - parseFloat(credits));
            si_vat_ex_container.innerText = formatNumber((parseFloat(si_total_amount))/1.12);
            si_vat_container.innerText = formatNumber((parseFloat(si_total_amount)) - ((parseFloat(si_total_amount))/1.12));
            si_credits_container.innerText = formatNumber(si_credits);
            si_total_amount_container.innerText = formatNumber(si_total_amount);
            si_total_sales_container.innerText = formatNumber(si_total_amount);
            si_terms_container.innerText = `${term} Days Term`;
            convertToPDFandDownload_button.style.display = "block";
            convertToPDF_button.style.display = "block";
            what_to_print.style.display = "block";
            what_to_print2.style.display = "block";

        }

        const type_of_form = document.getElementById("type_of_form");
        const type_of_form_list = document.getElementById("type_of_form_list");
        const bpf_form = document.getElementById("bpf_form");
        
        type_of_form.addEventListener("change", () => {
            var data_content;
            if(type_of_form.value == "By Waste Description"){
                data_content = 
                `
                <div>
                    <label for="waste_description">
                        <i class="fa-solid fa-list-ol"></i>
                        Waste Description
                    </label><br>
                    <div class="form">
                        <input type="text" id="waste_description" autocomplete="off" name="waste_description" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="year_covered">
                        <i class="fa-solid fa-list-ol"></i>
                        Year Covered
                    </label><br>
                    <div class="form">
                        <input type="text" autocomplete="off" name="year_covered" id="year_covered" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="month_covered">
                        <i class="fa-solid fa-list-ol"></i>
                        Month Covered
                    </label><br>
                    <div class="form">
                        <select name="month_covered" id="month_covered" class="form-control">
                            <option value="">Select Month</option>
                            <option value="1">JANUARY</option>
                            <option value="2">FEBRUARY</option>
                            <option value="3">MARCH</option>
                            <option value="4">APRIL</option>
                            <option value="5">MAY</option>
                            <option value="6">JUNE</option>
                            <option value="7">JULY</option>
                            <option value="8">AUGUST</option>
                            <option value="9">SEPTEMBER</option>
                            <option value="10">OCTOBER</option>
                            <option value="11">NOVEMBER</option>
                            <option value="12">DECEMBER</option>
                        </select>
                    </div>
                </div>
                `
                // what_to_print.style.display = "none";
                // client_container.style.display = "grid";    
                type_of_form_list.innerHTML = data_content;
            }
            else if(type_of_form.value == "By COD"){
                data_content = 
                `
                <div>
                    <label for="search_cod_form_no">
                        Search COD #
                    </label><br>
                    <div class="bpf_form">
                        <div class="form">
                            <input type="text" id="search_cod_form_no" autocomplete="off" name="search_cod_form_no" class="form-control"><br>
                        </div>
                    </div>
                </div>
                <div>
                    <label for="service_invoice_no">
                        Service Invoice #
                    </label><br>
                    <div class="bpf_form">
                        <div class="form">
                            <input type="text" id="service_invoice_no" autocomplete="off" name="service_invoice_no" class="form-control"><br>
                        </div>
                    </div>
                </div>
                `
                type_of_form_list.innerHTML = data_content;
                generate_button.addEventListener("click", generate)
            }
            else if(type_of_form.value == "By Waste and Date Coverage"){
                data_content = 
                `
                <div>
                    <label for="waste_description">
                            <i class="fa-solid fa-list-ol"></i>
                            Waste Description
                    </label><br>
                    <div class="form">
                        <input type="text" id="waste_description" autocomplete="off" name="waste_description" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="waste_description">
                        <i class="fa-solid fa-list-ol"></i>
                        From
                    </label><br>
                    <div class="form">
                        <input type="date" id="date_from" autocomplete="off" name="date_from" class="form-control"><br>
                    </div>
                </div>
                <div>
                    <label for="waste_description">
                        <i class="fa-solid fa-list-ol"></i>
                        To
                    </label><br>
                    <div class="form">
                        <input type="date" id="date_to" autocomplete="off" name="date_to" class="form-control"><br>
                    </div>
                </div>
                `
                // what_to_print.style.display = "none";
                // client_container.style.display = "grid";    
                type_of_form_list.innerHTML = data_content;
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
