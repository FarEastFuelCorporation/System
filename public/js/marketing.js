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
        const cod_response_promise = fetch('https://script.google.com/macros/s/AKfycbzgiOuXizUVviCsLVfihqYN9HJ3pyNr7ElHoCl3JGkbtQnChnm2U42yQuLd4UMH0ci5/exec');
        const bpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyux0GBj9tk6quRz46IkXa0VemEDAi-v2iEHx7C_6OFi416ERkv_BFtKqBmbw-bxaaiFQ/exec');
        const stf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwj90Rla-HId1Oa61WeMKxqJDJUq-n1mvHYi8wXpRMhU34UNxtQpxTG1DytiKpeY4DL/exec');
        const qlf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyFU_skru2tnyEiv8I5HkpRCXbUlQb5vlJUm8Le0nZBCvfZeFkQPd2Naljs5CZY41I17w/exec');
        const clf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxTthjFI5UO-6LgpCH7bcy7A-c59g83xfiRiWgeBpetpHrPU9TBY7pP-TabLCQXc0zlSQ/exec');
        const ctf_response_promise = fetch('https://script.google.com/macros/s/AKfycby7B-ynU2Om6j9EZeGq4aROFUSMs7qjG3L7g54MSbwmbtzfAjimVJDavmUeJIy74YzDng/exec');
        const prf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxZctLub-6PuQGykx298syeH7Qm__S37uqQrVFYsHVtv-Qk8M2oSkRIPIMVT_1WexqRZA/exec');
        const pof_response_promise = fetch('https://script.google.com/macros/s/AKfycby9i2KfOZ_uF7-JUPX8qpXg7Jewmw6oU3EfUTpXiwnRRB91_qIW3xAVNy5SZBN1YhVzzg/exec');
        const iid_response_promise = fetch('https://script.google.com/macros/s/AKfycbyaV_cnq0bfOWPgDTfyrit-nCAMwyI5Vw1xlx47RNSoSEBd8PyMw3-0UeNlojqBKgk/exec');
        const wsf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxNmSYTrW2BWirX6dk1DKzJ0F2HmMlkNkdmGGZFoRIt5rW88RjqaUXMh41k_qM8pwjb/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');
        const void_response_promise = fetch('https://script.google.com/macros/s/AKfycbzeHHk1OkGhQEmii69e_l0jQLo4zNsxIFTRj8cF4__Sbm_UeCdNzupkDHv_3ZgdFUPdAw/exec');

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
            cod_response,
            bpf_response,
            stf_response,
            qlf_response,
            clf_response,
            ctf_response,
            prf_response,
            pof_response,
            iid_response,
            wsf_response,
            irf_response,
            void_response,
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
            cod_response_promise,
            bpf_response_promise,
            stf_response_promise,
            qlf_response_promise,
            clf_response_promise,
            ctf_response_promise,
            prf_response_promise,
            pof_response_promise,
            iid_response_promise,
            wsf_response_promise,
            irf_response_promise,
            void_response_promise,
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
        const cod_data_list  = await cod_response.json();
        const bpf_data_list  = await bpf_response.json();
        const stf_data_list  = await stf_response.json();
        const qlf_data_list  = await qlf_response.json();
        const clf_data_list  = await clf_response.json();
        const ctf_data_list  = await ctf_response.json();
        const prf_data_list  = await prf_response.json();
        const pof_data_list  = await pof_response.json();
        const iid_data_list  = await iid_response.json();
        const wsf_data_list  = await wsf_response.json();
        const irf_data_list  = await irf_response.json();
        const void_data_list  = await void_response.json();

        // Code that depends on the fetched data
        // username_data_list3
        const queryParams = new URLSearchParams(window.location.search);
        const xValue = queryParams.get('user');
        const profile_picture = document.getElementById("profile_picture");
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const users = document.querySelectorAll("#user");
        const departments = document.querySelectorAll("#department");

        const user_name = username_data_list.content[xValue][findTextInArray(username_data_list, "NAME")];
        profile_picture.src = `../images/profile_picture/${username_data_list.content[xValue][findTextInArray(username_data_list, "PICTURE")]}`;
        users.forEach(user => {user.value = username_data_list.content[xValue][findTextInArray(username_data_list, "NAME")]})
        departments.forEach(user => {user.value = username_data_list.content[xValue][findTextInArray(username_data_list, "DEPARTMENT")]})
        user_sidebar.innerHTML = `<u>${username_data_list.content[xValue][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[xValue][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[xValue][findTextInArray(username_data_list, "DEPARTMENT")];
        
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
        const month_filter = document.getElementById("month_filter");
        const marketing_transaction_form = document.querySelector("#marketing_transaction_form");
        const calendar_days = marketing_transaction_form.querySelector("#calendar_days");
        const calendar_month = marketing_transaction_form.querySelector("#calendar_month");

        var total_vehicle = [];
        var vehicle_type = [];
        for(let x = 1; x < vehicle_data_list.content.length; x++){
            if(!vehicle_type.includes(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "CODE")])){
                vehicle_type.push(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "CODE")])
                total_vehicle[vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "CODE")]] = 1;
            }
            else{
                total_vehicle[vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "CODE")]]++;
            }
        }
        

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
            pending_list_marketing.innerHTML = "";
            generateCalendarDays(2024, monthNameToNumber(month_filter.value))
            calendar_month.innerText = month_filter.value
            // color coding
            var [forHaulingColor, forReceivingColor, forWarehousingColor, forSortingColor, forTreatmentColor, forCertificationColor, forBillingColor, forCollectionColor, finishedColor] = 
                [
                "#FFC0CB", // Light Pink (forHaulingColor)
                "#FFDAB9", // Peachpuff (forSortingColor)
                "#FFB6C1", // Light Pink (forCollectionColor)
                "#FFE4B5", // Moccasin (forReceivingColor)
                "#AFEEEE", // Pale Turquoise (forWarehousingColor)
                "#D8BFD8", // Thistle (forCertificationColor)
                "#98FB98", // Pale Green (forTreatmentColor)
                "#B0C4DE", // Light Steel Blue (forBillingColor)
                "#C1FFC1"  // Pale Green (finishedColor)
                ];
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
                var color;
                var font_color = "black";
                if(month_filter.value == formatMonth(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])){
                    if(status == "FOR HAULING"){
                        color = forHaulingColor;
                    } else if(status == "FOR RECEIVING"){
                        color = forReceivingColor;
                    } else if(status == "FOR WAREHOUSING"){
                        color = forWarehousingColor;
                    } else if(status == "FOR SORTING"){
                        color = forSortingColor;
                    } else if(status == "FOR TREATMENT"){
                        color = forTreatmentColor;
                    } else if(status == "FOR CERTIFICATION"){
                        color = forCertificationColor;
                    } else if(status == "FOR BILLING"){
                        color = forBillingColor;
                    } else if(status == "FOR COLLECTION"){
                        color = forCollectionColor;
                    } else if(status == "FOR ACCOUNTING"){
                        color = finishedColor;
                    }
                    var style = `style="color: ${font_color}; font-size: 14px !important;"`
                    data_value +=`
                    <tr style="background-color: ${color};">
                        <td ${style}>${data_value_counter}</td>
                        <td ${style}>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "MTF #")]}</td>
                        <td ${style}>${date_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING DATE")])} /<br> ${time_decoder(mtf_data_list.content[j][findTextInArray(mtf_data_list, "HAULING TIME")])}</td>
                        <td ${style}>${findClientName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")])}</td>
                        <td ${style}>${findWasteCode(mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")])}</td>
                        <td ${style}>${findWasteName(mtf_data_list.content[j][findTextInArray(mtf_data_list, "CLIENT ID")], (mtf_data_list.content[j][findTextInArray(mtf_data_list, "WASTE ID")]))}</td>
                        <td ${style}>${vehicle}</td>
                        <td ${style}>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMIT TO")]}</td>
                        <td ${style}>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "REMARKS")]}</td>
                        <td ${style}>${mtf_data_list.content[j][findTextInArray(mtf_data_list, "SUBMITTED BY")]}</td>
                        <td ${style}>${plate_no}</td>
                        <td ${style}>${driver_name}</td>
                        <td ${style}>${status}</td>
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
                colors:                 
                    [
                    "#FFC0CB", // Light Pink (forHaulingColor)
                    "#FFDAB9", // Peachpuff (forSortingColor)
                    "#FFB6C1", // Light Pink (forCollectionColor)
                    "#FFE4B5", // Moccasin (forReceivingColor)
                    "#AFEEEE", // Pale Turquoise (forWarehousingColor)
                    "#D8BFD8", // Thistle (forCertificationColor)
                    "#98FB98", // Pale Green (forTreatmentColor)
                    "#B0C4DE", // Light Steel Blue (forBillingColor)
                    "#C1FFC1"  // Pale Green (finishedColor)
                    ], // Specify solid colors here
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
        
        var vehicle_list = [];
        for(let y = 1; y < vehicle_data_list.content.length; y++){
            if (!vehicle_list.includes(vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")])) {
                vehicle_list.push(vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]);
            }
        }

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

        const search_wrappers = document.querySelectorAll("#search_client");
        search_wrappers.forEach((search_wrapper) => {
            var data_value = [];
    
            for (x = 1; x < client_data_list.content.length; x++) {
                data_value.push(client_data_list.content[x][1]);
            }
            const input_box = search_wrapper.querySelector("input");
            const sugg_box = search_wrapper.querySelector(".autocom_box");
            input_box.onkeyup = (e) => {
                let user_data = e.target.value;
                let empty_array = [];
                if (user_data) {
                    empty_array = data_value.filter((data) => {
                        return data.toLocaleLowerCase().includes(user_data.toLocaleLowerCase());
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
                const client_id_input = document.querySelectorAll("#client_id_input");
                const search_client_id = document.querySelectorAll("#client_id");
                const marketing_transaction_form = document.querySelector("#marketing_transaction_form");
                const submit_to_marketing_transaction_form = marketing_transaction_form.querySelector("#submit_to");
                const type_of_vehicle_container_transaction_form = marketing_transaction_form.querySelector("#type_of_vehicle_container");
                const add_item_button_marketing_transaction_form = marketing_transaction_form.querySelector("#add_item_button");
                const remove_item_button_marketing_transaction_form = marketing_transaction_form.querySelector("#remove_item_button");
        
                add_item_button_marketing_transaction_form.style.display = "none";
                remove_item_button_marketing_transaction_form.style.display = "none";
                for (let y = 1; y < client_data_list.content.length; y++) {
                    
                    if (select_user_data == client_data_list.content[y][findTextInArray(client_data_list, "CLIENT NAME")]) {
                        var client_id = "";
                        client_id = client_data_list.content[y][findTextInArray(client_data_list, "CLIENT ID")];
                        client_id_input.value = client_id;
                        search_client_id.forEach((data) => {
                            data.value = client_id
                        })
                        client_id_input.forEach((data) => {
                            data.value = client_id
                        })
        
                        var is_there_quotation = false;
                        submit_to_marketing_transaction_form.value = "";
                        type_of_vehicle_container_transaction_form.innerHTML = "";
                        type_of_waste.innerHTML = `<option value="">SELECT</option>`;
                        for (let x = 1; x < qlf_data_list.content.length; x++) {
                            if (client_id == qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")] && !vehicle_list.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])) {
                                is_there_quotation = true;
                                var data = `
                                <option value="${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]}">${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")]} (${findWasteCode(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])})</option>
                                `
                                type_of_waste.insertAdjacentHTML("beforeend", data)
                            }
                        }
                        if(is_there_quotation){
                            var opt_data = `
                            <option value="W2023100">ASSORTED NON-HAZARDOUS WASTE</option>
                            <option value="W2023200">ASSORTED HAZARDOUS WASTE</option>
                            `
                            type_of_waste.insertAdjacentHTML("beforeend", opt_data)
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
        var waste_id_list = [];
        for (x = 1; x < type_of_waste_data_list.content.length; x++) {
            waste_name_list.push(type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE CODE")]);
            waste_id_list.push(type_of_waste_data_list.content[x][findTextInArray(type_of_waste_data_list, "WASTE ID")]);
        }

        const quotation_no = marketing_transaction_form.querySelector("#quotation_no");
        const type_of_waste = marketing_transaction_form.querySelector("#type_of_waste");
        const client_id_input = marketing_transaction_form.querySelector("#client_id_input");

        type_of_waste.addEventListener("change", () => {
            for (let x = 1; x < qlf_data_list.content.length; x++) {
                if (client_id_input.value == qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")] 
                && !vehicle_list.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])) {
                    if(type_of_waste.value == qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]){
                        quotation_no.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")];
                        break
                    }
                    else{
                        quotation_no.value = `N/A`
                    }
                }
            }
        })

        function typeOfWaste(){
            const search_wrappers2 = document.querySelectorAll("#search_waste_code");

            search_wrappers2.forEach((search_wrapper) => {
                const input_box = search_wrapper.querySelectorAll("input");
                const input_box1 = input_box[0];
                const input_box2 = input_box[1];
                const sugg_box = search_wrapper.querySelector(".autocom_box");
        
                input_box1.onkeyup = (e) => {
                    let user_data = e.target.value;
                    let empty_array = [];
                    if (user_data) {
                        empty_array = waste_name_list.filter((data) => {
                            return data.toLocaleLowerCase().includes(user_data.toLocaleLowerCase());
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
                    input_box1.value = select_user_data;
                    waste_name_list.forEach((data, index) => {
                        if(data == select_user_data){
                            input_box2.value = waste_id_list[index];
                        }
                    })
                    search_wrapper.classList.remove("active");
                    mtf_data.style.display = "block";
                        
                }
            
                function show_suggestions(list) {
                    let list_data;
                    if (!list.length) {
                        user_value = input_box1.value;
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

        // FORM GENERATOR
        // mtf_data_list
        const mtf_form_no = document.getElementById("mtf_form_no");
        var last_row = mtf_data_list.content.length -1;        
        var data_info = mtf_data_list.content[last_row][findTextInArray(mtf_data_list, "MTF #")];
        var data_counter = data_info.substring(9,13);
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(3,7);
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        if(last_counter_year == current_year){
            mtf_form_no.value = `MTF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            mtf_form_no.value = `MTF${current_year}${month}${data_counter}`;
        }

        const waste_category = marketing_transaction_form.querySelector("#waste_category");
        const document_container = marketing_transaction_form.querySelector("#document_container");
        const submit_to = marketing_transaction_form.querySelector("#submit_to");
        const type_of_waste_container = marketing_transaction_form.querySelector("#type_of_waste_container");
        const type_of_vehicle_container = marketing_transaction_form.querySelector("#type_of_vehicle_container");
        const marketing_transaction_button = marketing_transaction_form.querySelector("#marketing_transaction_button");
        const form_tab_marketing_transaction_form = marketing_transaction_form.querySelector("#form_tab");
        const close_button = marketing_transaction_form.querySelector("#close_button");
        const add_item_button_marketing_transaction_form = marketing_transaction_form.querySelector("#add_item_button");
        const remove_item_button_marketing_transaction_form = marketing_transaction_form.querySelector("#remove_item_button");
        
        function addTransaction(){
            // type_of_waste_data_list
            const marketing_transaction_form = document.querySelector("#marketing_transaction_form");
            const transaction_counter = marketing_transaction_form.querySelector("#transaction_counter");
            const client = marketing_transaction_form.querySelector("#client");
            transaction_counter.value++
            var data_value = 
            `
            <div id="type_of_vehicle_container${transaction_counter.value}">
                <label for="type_of_vehicle${transaction_counter.value}">
                    <i class="fa-solid fa-truck"></i>
                    Type of Vehicle ${transaction_counter.value}
                </label>
                <select name="type_of_vehicle${transaction_counter.value}" id="type_of_vehicle${transaction_counter.value}" class="form-control" required>
                    <option value="">SELECT</option>
                </select>
            </div>
            `
            type_of_vehicle_container.insertAdjacentHTML("beforeend", data_value);

            const type_of_vehicle = marketing_transaction_form.querySelector(`#type_of_vehicle${transaction_counter.value}`);
            const submit_to = marketing_transaction_form.querySelector(`#submit_to`);
            var done_vehicle = [];
            for (let y = 1; y < client_data_list.content.length; y++) {
                if (client.value == client_data_list.content[y][1]) {
                    var client_id = "";
                    client_id = client_data_list.content[y][findTextInArray(client_data_list, "CLIENT ID")];
                    for (let x = 1; x < qlf_data_list.content.length; x++) {
                        if (client_id == qlf_data_list.content[x][findTextInArray(qlf_data_list, "CLIENT ID")] && qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT")] == "TRIP") {
                            if(vehicle_list.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])){
                                if(!done_vehicle.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])){
                                    var data = `
                                    <option value="${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]}">${qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]}</option>
                                    `
                                    type_of_vehicle.insertAdjacentHTML("beforeend", data)
                                    done_vehicle.push(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])
                                }
                            }
                        }
                    }
                    if(submit_to.value == "RECEIVING"){
                        var data = `
                        <option value="CLIENT VEHICLE">CLIENT VEHICLE</option>
                        `
                        type_of_vehicle.insertAdjacentHTML("beforeend", data)
                    }
                }
            }
        }

        add_item_button_marketing_transaction_form.addEventListener("click", () => {
            addTransaction();
            remove_item_button_marketing_transaction_form.style.display = "block"
        })
        remove_item_button_marketing_transaction_form.addEventListener("click", () => {
            const marketing_transaction_form = document.querySelector("#marketing_transaction_form");
            const transaction_counter = marketing_transaction_form.querySelector("#transaction_counter");
            const type_of_vehicle_container = marketing_transaction_form.querySelector(`#type_of_vehicle_container${transaction_counter.value}`);
            type_of_vehicle_container.remove()
            transaction_counter.value--
            if(transaction_counter.value == 1){
                remove_item_button_marketing_transaction_form.style.display = "none"
            }
        })

        submit_to.addEventListener("change", () => {
            if(submit_to.value == "LOGISTICS"){
                const transaction_counter = marketing_transaction_form.querySelector("#transaction_counter");
                type_of_vehicle_container.innerHTML = "";
                transaction_counter.value = 0;
                add_item_button_marketing_transaction_form.style.display = "block"
                addTransaction();
            }
            else if(submit_to.value == "RECEIVING"){
                const type_of_vehicle_container = marketing_transaction_form.querySelector("#type_of_vehicle_container");
                const transaction_counter = marketing_transaction_form.querySelector("#transaction_counter");
                type_of_vehicle_container.innerHTML = "";
                transaction_counter.value = 0;
                add_item_button_marketing_transaction_form.style.display = "none";
                remove_item_button_marketing_transaction_form.style.display = "none";
                addTransaction();
            }
            else{
                type_of_vehicle_container.innerHTML = "";
                add_item_button_marketing_transaction_form.style.display = "none";
                remove_item_button_marketing_transaction_form.style.display = "none";
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
                    <input type="text" autocomplete="off" name="pull_out_form" id="pull_out_form" class="form-control form" required value="N/A">
                </div>
                <div id="ptt_container">
                    <label for="ptt">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        PTT #
                    </label>
                    <input type="text" autocomplete="off" name="ptt" id="ptt" class="form-control form" required>
                </div>
                <div id="manifest_container">
                    <label for="manifest">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Manifest #
                    </label>
                    <input type="text" autocomplete="off" name="manifest" id="manifest" class="form-control form" required>
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
                    <input type="text" autocomplete="off" name="pull_out_form" id="pull_out_form" class="form-control form" required>
                </div>
                <div id="ptt_container" style="display: none">
                    <label for="ptt">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        PTT #
                    </label>
                    <input type="text" autocomplete="off" name="ptt" id="ptt" class="form-control form" required value="N/A">
                </div>
                <div id="manifest_container" style="display: none">
                    <label for="manifest">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Manifest #
                    </label>
                    <input type="text" autocomplete="off" name="manifest" id="manifest" class="form-control form" required value="N/A">
                </div>`
                document_container.insertAdjacentHTML("afterbegin", data2)
            }
            else{
                while (document_container.firstChild) {
                    document_container.removeChild(document_container.firstChild);
                }
            }
        })

        close_button.addEventListener("click", () => {
            form_tab_marketing_transaction_form.style.display = "none";
        })

        function generateCalendarDays(year, month) {
            const hauling_date = marketing_transaction_form.querySelector("#hauling_date");

            calendar_days.innerHTML = '';
            // Get the number of days in the month
            var daysInMonth = new Date(year, month + 1, 0).getDate();
        
            // Get the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
            var firstDay = new Date(year, month, 1).getDay();
        
            // Initialize an array to store the day values
            var dayValues = [];
        
            // Generate day values
            for (var day = 1; day <= daysInMonth; day++) {
                dayValues.push(day);
            }
        
            // Generate the table rows
            var rows = Math.ceil((daysInMonth + firstDay) / 7);
        
            for (var i = 0; i < rows; i++) {
                var row = document.createElement("tr");
        
                for (var j = 0; j < 7; j++) {
                    var cell = document.createElement("td");
                    var index = i * 7 + j - firstDay;
        
                    if (index >= 0 && index < daysInMonth) {
                        // Create a span for the day value
                        var div_element = document.createElement("div");
                        div_element.classList.add("td_header");
        
                        var daySpan = document.createElement("span");
                        daySpan.textContent = dayValues[index];
        
                        // Add a class to the td element based on the date
                        cell.classList.add("date-" + dayValues[index]);
        
                        // Create a button for booking
                        var bookButton = document.createElement("button");
                        bookButton.textContent = "Book";
                        // Set class for the "Book" button
                        bookButton.classList.add("form-control");
                        bookButton.classList.add("book-button");

                        // Create a div for "Available slot"
                        var availableSlotDiv = document.createElement("div");
                        availableSlotDiv.textContent = "Available Vehicles:";
                        // Set class for the "Available slot" div
                        availableSlotDiv.classList.add("available_slot");

                        var total_vehicle_day = [];
                        var vehicle_type_day = [];
                        for(let x = 1; x < vehicle_data_list.content.length; x++){
                            if(!vehicle_type_day.includes(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "CODE")])){
                                vehicle_type_day.push(vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "CODE")])
                                total_vehicle_day[vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "CODE")]] = 1;
                            }
                            else{
                                total_vehicle_day[vehicle_data_list.content[x][findTextInArray(vehicle_data_list, "CODE")]]++;
                            }
                        }

                        var date_format = year + '-' + (month + 1).toString().padStart(2, "0") + '-' + (dayValues[index]).toString().padStart(2, "0");
                        
                        var booked_vehicle_day = [];
                        var booked_vehicle_type_day = [];
                        var book_logistics = 0
                        var book_receiving = 0
                        for(let x = 1; x < mtf_data_list.content.length; x++){
                            if(date_format == date_decoder2(mtf_data_list.content[x][findTextInArray(mtf_data_list, "HAULING DATE")])){
                                if(mtf_data_list.content[x][findTextInArray(mtf_data_list, "SUBMIT TO")] == "LOGISTICS"){
                                    var vehicle_code;
                                    for(let y = 1; y < vehicle_data_list.content.length; y++){
                                        if(vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")] == mtf_data_list.content[x][findTextInArray(mtf_data_list, "TYPE OF VEHICLE")]){
                                            vehicle_code = vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "CODE")]
                                            break
                                        }
                                    }
                                    if(!booked_vehicle_type_day.includes(vehicle_code)){
                                        booked_vehicle_type_day.push(vehicle_code)
                                        booked_vehicle_day[vehicle_code] = 1;
                                    }
                                    else{
                                        booked_vehicle_day[vehicle_code]++;
                                    }
                                    book_logistics += 1;
                                }
                                else if(mtf_data_list.content[x][findTextInArray(mtf_data_list, "SUBMIT TO")] == "RECEIVING"){
                                    book_receiving += 1;
                                }
                            }
                        }
                                
                        // Create a div for "Booked slot"
                        var bookSlotDiv = document.createElement("div");
                        bookSlotDiv.innerHTML = `Booked Transactions:<b>${book_logistics + book_receiving}</b><br>Logistics:<b>${book_logistics}</b> - Receiving:<b>${book_receiving}</b>`;
                        // Set class for the "Booked slot" div
                        bookSlotDiv.classList.add("book_slot");

                        var available_vehicle_div = document.createElement("div")
                        available_vehicle_div.classList.add("available_vehicle_class");
                        
                        vehicle_type.forEach((data, index) => {
                            var vehicle_div = document.createElement("div");
                            vehicle_div.classList.add("vehicle_div");
                            var actual_count = 0;
                            if(total_vehicle[vehicle_type[index]] - booked_vehicle_day[vehicle_type[index]] < 0){
                                actual_count = total_vehicle[vehicle_type[index]];
                            }
                            if(total_vehicle[vehicle_type[index]] - booked_vehicle_day[vehicle_type[index]] >= 0){
                                actual_count = total_vehicle[vehicle_type[index]] - booked_vehicle_day[vehicle_type[index]];
                            }
                            else{
                                actual_count = total_vehicle[vehicle_type[index]]
                            }
                            vehicle_div.textContent = `${data} : ${actual_count}/${total_vehicle[vehicle_type[index]]}`
                            available_vehicle_div.appendChild(vehicle_div);
                        })

                        // Append the day value, the button, and the "Available slot" div to the cell
                        div_element.appendChild(daySpan);
                        div_element.appendChild(bookButton);
                        cell.appendChild(div_element);
                        cell.appendChild(bookSlotDiv);
                        cell.appendChild(availableSlotDiv);
                        cell.appendChild(available_vehicle_div);
        
                        // Add click event listener to the "Book" button
                        bookButton.addEventListener("click", function (event) {
                            // Get the date from the clicked button's parent td element
                            var clickedDate = event.currentTarget.parentElement.querySelector('.td_header span').textContent;
        
                            // Format the date (assuming simple formatting for illustration purposes)
                            var formattedDate = year + '-' + (month + 1).toString().padStart(2, "0") + '-' + clickedDate.toString().padStart(2, "0");
        
                            // Set the hauling_date input value
                            hauling_date.value = formattedDate;
        
                            // Show the form
                            form_tab_marketing_transaction_form.style.display = "block";
                        });
                    } else {
                        // Set background color to gray for cells without a number
                        cell.style.backgroundColor = 'gray';
                    }
        
                    row.appendChild(cell);
                }
        
                calendar_days.appendChild(row);
            }
        }
        
        
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
        const with_moa_quotation_form = new_quotation_form_tab.querySelector("#with_moa");
        const without_moa_quotation_form = new_quotation_form_tab.querySelector("#without_moa");
        const validity_quotation_form = new_quotation_form_tab.querySelector("#validity");
        const validity_container_quotation_form = new_quotation_form_tab.querySelector("#validity_container");
        const generate_button_quotation_form = new_quotation_form_tab.querySelector("#generate_button");
        const quotation_no_quotation_form = new_quotation_form_tab.querySelector("#quotation_no");
        const qlf_form_no_container_quotation_form = new_quotation_form_tab.querySelector("#qlf_form_no_container");
        const date_made_container_quotation_form = new_quotation_form_tab.querySelector("#date_made_container");
        const client_id_input_quotation_form = new_quotation_form_tab.querySelector("#client_id_input");
        const client_name_container_quotation_form = new_quotation_form_tab.querySelector("#client_name_container");
        const address_container_quotation_form = new_quotation_form_tab.querySelector("#address_container");
        const nature_of_business_container_quotation_form = new_quotation_form_tab.querySelector("#nature_of_business_container");
        const contact_number_quotation_form = new_quotation_form_tab.querySelector("#contact_number");
        const contact_number_container_quotation_form = new_quotation_form_tab.querySelector("#contact_number_container");
        const client_name_container_quotation_form2 = new_quotation_form_tab.querySelector("#client_name_container2");
        const address_container_quotation_form2 = new_quotation_form_tab.querySelector("#address_container2");
        const contact_number2_container_quotation_form2 = new_quotation_form_tab.querySelector("#contact_number2_container");
        const nature_of_business_container_quotation_form2 = new_quotation_form_tab.querySelector("#nature_of_business_container2");
        const contact_number_quotation_form2 = new_quotation_form_tab.querySelector("#contact_number2");
        const table_data_quotation_form = new_quotation_form_tab.querySelector("#table_data");
        const validity_input_quotation_form = new_quotation_form_tab.querySelector("#validity_input");
        const terms_quotation_form = new_quotation_form_tab.querySelector("#terms");
        const terms2_quotation_form = new_quotation_form_tab.querySelector("#terms2");
        const charge_input_quotation_form = new_quotation_form_tab.querySelector("#charge_input");
        const buying_input_quotation_form = new_quotation_form_tab.querySelector("#buying_input");
        const marketing_user_quotation_form = new_quotation_form_tab.querySelector("#marketing_user");
        const marketing_signature_quotation_form = new_quotation_form_tab.querySelector("#marketing_signature");
        const accounting_head_signature_quotation_form = new_quotation_form_tab.querySelector("#accounting_head_signature");
        const vice_president_signature_quotation_form = new_quotation_form_tab.querySelector("#vice_president_signature");
        const user = new_quotation_form_tab.querySelector("#user");
        const convertToPDFandDownload_button = new_quotation_form_tab.querySelector("#convertToPDFandDownload_button");
        const convertToPDF_button = new_quotation_form_tab.querySelector("#convertToPDF_button");
        const submit_button = new_quotation_form_tab.querySelector("#submit_button");
        const revision_no_quotation_form = new_quotation_form_tab.querySelector("#revision_no");
        const revision_number_container_quotation_form = new_quotation_form_tab.querySelector("#revision_number_container");
        const valid_until_container_quotation_form = new_quotation_form_tab.querySelector("#valid_until_container");
        const scope_of_work_input_quotation_form = new_quotation_form_tab.querySelector("#scope_of_work_input");
        const scope_of_work_quotation_form = new_quotation_form_tab.querySelector("#scope_of_work");
        const remarks_input_quotation_form = new_quotation_form_tab.querySelector("#remarks_input");
        const remarks_quotation_form = new_quotation_form_tab.querySelector("#remarks");

        marketing_user_quotation_form.innerText = user.value.toLowerCase().replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
        if(user.value == "JEMINA CENTENO"){
            marketing_signature_quotation_form.innerHTML = `<img src="../images/CENTENO_JEMINA.png" alt="">`;
        }
        else if(user.value == "JOVELYN SORIANO"){
            marketing_signature_quotation_form.innerHTML = `<img src="../images/SORIANO_JOVELYN.png" alt="">`;
        }
        else if(user.value == "JOHONEY CANLAS"){
            marketing_signature_quotation_form.innerHTML = `<img src="../images/CANLAS_JOHONEY.png" alt="">`;
        }
        
        accounting_head_signature_quotation_form.innerHTML = `<img src="../images/CARDINEZ_DAISY.png" alt="">`;
        vice_president_signature_quotation_form.innerHTML = `<img src="../images/DE VERA_EXEQUIEL.png" alt="">`;

        generate_button_quotation_form.addEventListener("click", () => {
            scope_of_work_input_quotation_form.innerText = scope_of_work_quotation_form.value;
            remarks_input_quotation_form.innerText = remarks_quotation_form.value;
            qlf_form_no_container_quotation_form.innerText = quotation_no_quotation_form.value;
            var currentDate = new Date();
            date_made_container_quotation_form.innerText = date_decoder(currentDate);
            currentDate.setDate(currentDate.getDate() + 30);
            valid_until_container_quotation_form.innerText = date_decoder(currentDate);
            revision_number_container_quotation_form.innerText = (revision_no_quotation_form.value).toString().padStart(2, "0");

            for(let x = 1; x < client_data_list.content.length; x++){
                if(client_id_input_quotation_form.value == client_data_list.content[x][findTextInArray(client_data_list, "CLIENT ID")]){
                    client_name_container_quotation_form.innerText = client_data_list.content[x][findTextInArray(client_data_list, "BILLER NAME")]
                    address_container_quotation_form.innerText = client_data_list.content[x][findTextInArray(client_data_list, "BILLER ADDRESS")]
                    nature_of_business_container_quotation_form.innerText = client_data_list.content[x][findTextInArray(client_data_list, "NATURE OF BUSINESS")]
                    contact_number_quotation_form.innerText = client_data_list.content[x][findTextInArray(client_data_list, "BILLER CONTACT NUMBER")]
                    client_name_container_quotation_form2.innerText = client_data_list.content[x][findTextInArray(client_data_list, "CLIENT NAME")]
                    address_container_quotation_form2.innerText = client_data_list.content[x][findTextInArray(client_data_list, "ADDRESS")]
                    nature_of_business_container_quotation_form2.innerText = client_data_list.content[x][findTextInArray(client_data_list, "NATURE OF BUSINESS")]
                    contact_number_quotation_form2.innerText = client_data_list.content[x][findTextInArray(client_data_list, "CONTACT NUMBER")]
                    contact_number_container_quotation_form.style.display = "flex";
                    contact_number2_container_quotation_form2.style.display = "flex";
                }
            }
            var counter = 1
            var row = 0
            for(let x = 0; x < list_counter_quotation_form.value; x++){
                const waste_name = new_quotation_form_tab.querySelector(`#waste_name${x + 1}`);
                const unit = new_quotation_form_tab.querySelector(`#unit${x + 1}`);
                const unit_price = new_quotation_form_tab.querySelector(`#unit_price${x + 1}`);
                const mode = new_quotation_form_tab.querySelector(`#mode${x + 1}`);
                const vat_calculation = new_quotation_form_tab.querySelector(`#vat_calculation${x + 1}`);
                var quantity = 0
                const table_row = table_data_quotation_form.querySelectorAll("tr")[row];
                table_row.querySelectorAll("td")[0].innerText = `${counter}`;
                table_row.querySelectorAll("td")[1].innerText = waste_name.value.toUpperCase();
                table_row.querySelectorAll("td")[3].innerText = `Per ${unit.value}`;
                table_row.querySelectorAll("td")[4].style.justifyContent  = `right`;
                table_row.querySelectorAll("td")[5].style.justifyContent  = `right`;
                table_row.querySelectorAll("td")[4].style.paddingRight  = `5px`;
                table_row.querySelectorAll("td")[5].style.paddingRight  = `5px`;
                table_row.querySelectorAll("td")[4].innerText = formatNumber(parseFloat(unit_price.value));
                table_row.querySelectorAll("td")[5].innerText = formatNumber(unit_price.value * quantity);
                table_row.querySelectorAll("td")[6].innerText = mode.value;
                table_row.querySelectorAll("td")[7].innerText = vat_calculation.value;
                row = row + 1;
                counter = counter + 1;
            }
            for(let x = 0; x < tf_counter_quotation_form.value; x++){
                const type_of_vehicle = new_quotation_form_tab.querySelector(`#type_of_vehicle${x + 1}`);
                const transportation_fee = new_quotation_form_tab.querySelector(`#transportation_fee${x + 1}`);
                const tf_unit = new_quotation_form_tab.querySelector(`#tf_unit${x + 1}`);
                const tf_unit_price = new_quotation_form_tab.querySelector(`#tf_unit_price${x + 1}`);
                const tf_mode = new_quotation_form_tab.querySelector(`#tf_mode${x + 1}`);
                const tf_vat_calculation = new_quotation_form_tab.querySelector(`#tf_vat_calculation${x + 1}`);
                var quantity = 0
                const table_row = table_data_quotation_form.querySelectorAll("tr")[row];
                table_row.querySelectorAll("td")[0].innerText = `${counter}`;
                table_row.querySelectorAll("td")[1].innerText = `TRANSPORTATION FEE - ${type_of_vehicle.value}`;
                table_row.querySelectorAll("td")[1].style.fontSize = `9px`;
                table_row.querySelectorAll("td")[3].innerText = `Per ${tf_unit.value}`;
                table_row.querySelectorAll("td")[4].style.justifyContent  = `right`;
                table_row.querySelectorAll("td")[5].style.justifyContent  = `right`;
                table_row.querySelectorAll("td")[4].style.paddingRight  = `5px`;
                table_row.querySelectorAll("td")[5].style.paddingRight  = `5px`;
                table_row.querySelectorAll("td")[4].innerText = formatNumber(parseFloat(tf_unit_price.value));
                table_row.querySelectorAll("td")[5].innerText = formatNumber(tf_unit_price.value * quantity);
                table_row.querySelectorAll("td")[6].innerText = tf_mode.value;
                table_row.querySelectorAll("td")[7].innerText = tf_vat_calculation.value;
                row = row + 1;
                const table_row2 = table_data_quotation_form.querySelectorAll("tr")[row];
                table_row2.querySelectorAll("td")[1].innerText = `(AREA OF HAUL - ${transportation_fee.value})`;
                table_row2.querySelectorAll("td")[1].style.fontSize = `9px`;
                row = row + 1;
                counter = counter + 1;
            }
            // validity_input_quotation_form.innerText = `${validity_quotation_form.value} Days`;
            charge_input_quotation_form.innerText = terms_quotation_form.value.toUpperCase();
            buying_input_quotation_form.innerText = terms2_quotation_form.value.toUpperCase();
            convertToPDFandDownload_button.style.display = "block";
            convertToPDF_button.style.display = "block";
            submit_button.style.display = "block";
        })

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
        const timestamp_quotation_form2 = update_quotation_form_tab.querySelector("#timestamp");
        const terms_quotation_form2 = update_quotation_form_tab.querySelector("#terms");
        const client_quotation_form2 = update_quotation_form_tab.querySelector("#client");
        const waste_code1_quotation_form2 = update_quotation_form_tab.querySelector("#waste_code1");
        const waste_name1_quotation_form2 = update_quotation_form_tab.querySelector("#waste_name1");
        const mode1_quotation_form2 = update_quotation_form_tab.querySelector("#mode1");
        const unit1_quotation_form2 = update_quotation_form_tab.querySelector("#unit1");
        const unit_price1_quotation_form2 = update_quotation_form_tab.querySelector("#unit_price1");
        const vat_calculation1_quotation_form2 = update_quotation_form_tab.querySelector("#vat_calculation1");
        const with_moa_quotation_form2 = update_quotation_form_tab.querySelector("#with_moa");
        const without_moa_quotation_form2 = update_quotation_form_tab.querySelector("#without_moa");
        const validity_quotation_form2 = update_quotation_form_tab.querySelector("#validity");
        const validity_container_quotation_form2 = update_quotation_form_tab.querySelector("#validity_container");

        with_moa_quotation_form.addEventListener("click", () => {
            if(with_moa_quotation_form.value == "WITH MOA"){
                validity_quotation_form.classList.remove("disabled")
                validity_container_quotation_form.classList.remove("disabled")
                validity_quotation_form.setAttribute("required", "true");
            }
        })
        without_moa_quotation_form.addEventListener("click", () => {
            if(without_moa_quotation_form.value == "WITHOUT MOA"){
                validity_quotation_form.classList.add("disabled")
                validity_container_quotation_form.classList.add("disabled")
                validity_quotation_form.removeAttribute("required");
            }
        })
        with_moa_quotation_form2.addEventListener("click", () => {
            if(with_moa_quotation_form2.value == "WITH MOA"){
                validity_quotation_form2.classList.remove("disabled")
                validity_container_quotation_form2.classList.remove("disabled")
                validity_quotation_form2.setAttribute("required", "true");
            }
        })
        without_moa_quotation_form2.addEventListener("click", () => {
            if(without_moa_quotation_form2.value == "WITHOUT MOA"){
                validity_quotation_form2.classList.add("disabled")
                validity_container_quotation_form2.classList.add("disabled")
                validity_quotation_form2.removeAttribute("required"); 
            }
        })

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
        // update_quotation_button_quotation_form.addEventListener("click", () => {
        //     if(update_quotation_form_tab.style.display == "block"){
        //         update_quotation_form_tab.style.display = "none";
        //     }
        //     else{
        //         update_quotation_form_tab.style.display = "block";
        //         new_quotation_form_tab.style.display = "none";
        //     }
        // })

        var vehicle_list = [];
        for(let y = 1; y < vehicle_data_list.content.length; y++){
            if (!vehicle_list.includes(vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")])) {
                vehicle_list.push(vehicle_data_list.content[y][findTextInArray(vehicle_data_list, "TYPE OF VEHICLE")]);
            }
        }
        
        var qlf_data_value = "";
        var qlf_data_value_counter = 1;
        for(let x = 1; x < qlf_data_list.content.length; x++){
            if(!vehicle_list.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])){
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
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "TERMS CHARGE")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "TERMS BUYING")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "SUBMITTED BY")]}</td>
                </tr>
                `
                qlf_data_value_counter += 1;
            }
            else if(vehicle_list.includes(qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")])){
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
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "TERMS CHARGE")]}</td>
                    <td>${qlf_data_list.content[x][findTextInArray(qlf_data_list, "TERMS BUYING")]}</td>
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
                        <input type="hidden" name="waste_id${list_counter_quotation_form.value}" id="waste_id${list_counter_quotation_form.value}" autocomplete="off" class="form-control" required placeholder="Search">
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
                            <option value="Pc">PIECES</option>
                            <option value="Kg">KILOGRAMS</option>
                            <option value="L">LITERS</option>
                            <option value="DRUM">DRUM</option>
                            <option value="LOT">LOT</option>
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
            <div class="tf_item" style="display: grid; grid-template-columns: 15% 25% 13% 13% 9% 13% 12%; gap: 20px; width: calc(100% - 140px);">
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
                <div class="wrapper">
                    <div class="search_input">
                        <input type="number" name="max_capacity${tf_counter_quotation_form2.value}" id="max_capacity${tf_counter_quotation_form2.value}" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
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
                        <input type="hidden" name="waste_id${list_counter_quotation_form.value}" id="waste_id${list_counter_quotation_form.value}" autocomplete="off" class="form-control" required placeholder="Search">
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
                            <option value="Pc">PIECES</option>
                            <option value="Kg">KILOGRAMS</option>
                            <option value="L">LITERS</option>
                            <option value="DRUM">DRUM</option>
                            <option value="LOT">LOT</option>
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
            <div class="list_item" id="list${list_counter_quotation_form2.value}" style="display: grid; grid-template-columns: 17% 30% 15% 13% 10% 15%; gap: 20px; width: calc(100% - 240px);">
                <div class="wrapper">
                    <div class="search_input" id="search_waste_code">
                        <input type="text" name="waste_code${list_counter_quotation_form2.value}" id="waste_code${list_counter_quotation_form2.value}" autocomplete="off" class="form-control" required placeholder="Search">
                        <input type="hidden" name="waste_id${list_counter_quotation_form.value}" id="waste_id${list_counter_quotation_form.value}" autocomplete="off" class="form-control" required placeholder="Search">
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
                            <option value="Pc">PIECES</option>
                            <option value="Kg">KILOGRAMS</option>
                            <option value="L">LITERS</option>
                            <option value="DRUM">DRUM</option>
                            <option value="LOT">LOT</option>
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
            var data = `                        
            <div class="tf_item" style="display: grid; grid-template-columns: 15% 25% 13% 13% 9% 13% 12%; gap: 20px; width: calc(100% - 140px);">
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
                <div class="wrapper">
                    <div class="search_input">
                        <input type="number" name="max_capacity${tf_counter_quotation_form2.value}" id="max_capacity${tf_counter_quotation_form2.value}" autocomplete="off" class="form-control" required value="0" style="padding-right: 20px !important;">
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
        const commission_transaction_button_commission = commission_form.querySelector("#commission_transaction_button");
        const new_commission_form_tab_commission = commission_form.querySelector("#new_commission_form_tab");
        const update_commission_form_tab_commission = commission_form.querySelector("#update_commission_form_tab");
        const commission_transaction_form_tab_commission = commission_form.querySelector("#commission_transaction_form_tab");
        const add_item_button_commission = commission_form.querySelector("#add_item_button");
        const remove_item_button_commission = commission_form.querySelector("#remove_item_button");

        new_commission_button_commission.addEventListener("click", () => {
            if(new_commission_form_tab_commission.style.display == "block"){
                new_commission_form_tab_commission.style.display = "none";
            }
            else{
                new_commission_form_tab_commission.style.display = "block";
                update_commission_form_tab_commission.style.display = "none";
                commission_transaction_form_tab_commission.style.display = "none";
            }
        })
        update_commission_button_commission.addEventListener("click", () => {
            if(update_commission_form_tab_commission.style.display == "block"){
                update_commission_form_tab_commission.style.display = "none";
            }
            else{
                update_commission_form_tab_commission.style.display = "block";
                new_commission_form_tab_commission.style.display = "none";
                commission_transaction_form_tab_commission.style.display = "none";
            }
        })
        commission_transaction_button_commission.addEventListener("click", () => {
            if(commission_transaction_form_tab_commission.style.display == "block"){
                commission_transaction_form_tab_commission.style.display = "none";
            }
            else{
                commission_transaction_form_tab_commission.style.display = "block";
                new_commission_form_tab_commission.style.display = "none";
                update_commission_form_tab_commission.style.display = "none";
            }
        })

        // clf_data_list
        // FORM GENERATOR
        const clf_form_no = commission_form.querySelector("#clf_form_no");
        var last_row = clf_data_list.content.length -1;
        var data_info = clf_data_list.content[last_row][findTextInArray(clf_data_list, "CLF #")];
        var data_counter;
        if(last_row == 0){
            data_counter = 0;
        }
        else{
            data_counter = data_info.substring(9,13);
        }
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(3,7);
        if(last_counter_year == current_year){
            clf_form_no.value = `CLF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            clf_form_no.value = `CLF${current_year}${month}${data_counter}`;
        }


        const quotation_selection = commission_form.querySelector("#quotation_selection");
        const client = commission_form.querySelector("#client");
        const client_id_commission = commission_form.querySelector("#client_id");
        const clf_list_commission = commission_form.querySelector("#clf_list");

        add_item_button_commission.addEventListener("click", addCommissionList)
        remove_item_button_commission.addEventListener("click", removeCommissionList)

        function addCommissionList(){
            const commission_data_counter_commission = commission_form.querySelector("#commission_data_counter");
            const commission_list_commission = commission_form.querySelector("#commission_list");
            const waste_name_selection1 = commission_form.querySelector("#waste_name_selection1");
            commission_data_counter_commission.value = parseInt(commission_data_counter_commission.value) + 1;
            var clonedSelect = waste_name_selection1.cloneNode(true);
            clonedSelect.id = `waste_name_selection${commission_data_counter_commission.value}`;
            clonedSelect.name = `waste_name_selection${commission_data_counter_commission.value}`;

            var commission_data = 
            `
            <div id="commission${commission_data_counter_commission.value}" style="display: grid; grid-template-columns: 15% 25% 15% 25% 20%; gap: 20px; width: calc(100% - 60px);">
                <div class="wrapper">
                </div>
                <div class="wrapper">
                </div>
                <div class="wrapper">
                    ${clonedSelect.outerHTML}
                    <input type="hidden" name="waste_id${commission_data_counter_commission.value}" id="waste_id${commission_data_counter_commission.value}">
                </div>
                <div class="wrapper">
                    <div>
                        <input type="text" name="agent_name${commission_data_counter_commission.value}" id="agent_name${commission_data_counter_commission.value}" autocomplete="off" class="form-control" required placeholder="Type Agent Name">
                    </div>
                </div>
                <div class="wrapper">
                    <div>
                        <input type="number" step="0.01" name="commission_price${commission_data_counter_commission.value}" id="commission_price${commission_data_counter_commission.value}" autocomplete="off" class="form-control" required placeholder="Type Commission">
                    </div>
                </div>
            </div>
            `
            commission_list_commission.insertAdjacentHTML("beforeend", commission_data)
            remove_item_button_commission.style.display = "block";
            
            const waste_name_selection = commission_form.querySelector(`#waste_name_selection${commission_data_counter_commission.value}`);
            const waste_id_commission = commission_form.querySelector(`#waste_id${commission_data_counter_commission.value}`);
            waste_name_selection.addEventListener("change", () => {
                for(let x = 1; x < qlf_data_list.content.length; x++){
                    if(quotation_selection.value == qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")] &&
                        waste_name_selection.value == qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")]){
                        waste_id_commission.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                    }
                }
            })
        }

        const waste_name_selection1 = commission_form.querySelector(`#waste_name_selection1`);
        const waste_id_commission1 = commission_form.querySelector(`#waste_id1`);
        waste_name_selection1.addEventListener("change", () => {
            for(let x = 1; x < qlf_data_list.content.length; x++){
                if(quotation_selection.value == qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")] &&
                    waste_name_selection1.value == qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE NAME")]){
                    waste_id_commission1.value = qlf_data_list.content[x][findTextInArray(qlf_data_list, "WASTE ID/ TYPE OF VEHICLE")]
                }
            }
        })

        function removeCommissionList(){
            const commission_data_counter_commission = commission_form.querySelector("#commission_data_counter");
            const commission = commission_form.querySelector(`#commission${commission_data_counter_commission.value}`);
            commission.remove();
            commission_data_counter_commission.value = parseInt(commission_data_counter_commission.value) - 1;
            if(commission_data_counter_commission.value == 1){
                remove_item_button_commission.style.display = "none"
            }
        }

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
                waste_name_selection1.insertAdjacentHTML("beforeend",
                `<option value="${data}">${data}</option>`
                )
            })
        })



        // clf_list
        var clf_data_value_counter = 1;
        var clf_data_value = "";
        for(let x = 1; x < clf_data_list.content.length; x++){
            clf_data_value += 
            `
            <tr>
                <td>${clf_data_value_counter}</td>
                <td>${clf_data_list.content[x][findTextInArray(clf_data_list, "CLF #")]}</td>
                <td>${clf_data_list.content[x][findTextInArray(clf_data_list, "QUOTATION CODE")]}</td>
                <td>${findEmployeeName(clf_data_list.content[x][findTextInArray(clf_data_list, "AGENT ID")])}</td>
                <td>${findClientName(clf_data_list.content[x][findTextInArray(clf_data_list, "CLIENT ID")])}</td>
                <td>${clf_data_list.content[x][findTextInArray(clf_data_list, "WASTE NAME")]}</td>
                <td>${clf_data_list.content[x][findTextInArray(clf_data_list, "COMMISSION PRICE")]}</td>
                <td>${clf_data_list.content[x][findTextInArray(clf_data_list, "SUBMITTED BY")]}</td>
            </tr>
            `
            clf_data_value_counter += 1;
        }
        clf_list_commission.insertAdjacentHTML("beforeend", clf_data_value)

        // ctf_data_list
        // FORM GENERATOR
        // const ctf_form_no = commission_form.querySelector("#ctf_form_no");
        // var last_row = ctf_data_list.content.length -1;
        // var data_info = ctf_data_list.content[last_row][findTextInArray(ctf_data_list, "CTF #")];
        // var data_counter;
        // if(last_row == 0){
        //     data_counter = 0;
        // }
        // else{
        //     data_counter = data_info.substring(9,12);
        // }
        // var year = new Date().getFullYear();
        // var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        // data_counter = (parseInt(data_counter) +1).toString().padStart(3, "0");
        // ctf_form_no.value = `CTF${year}${month}${data_counter}`;

        const marketing_user_commission_form = commission_form.querySelector("#marketing_user");
        const marketing_signature_commission_form = commission_form.querySelector("#marketing_signature");
        const accounting_head_signature_commission_form = commission_form.querySelector("#accounting_head_signature");
        const vice_president_signature_commission_form = commission_form.querySelector("#vice_president_signature");
        const clf_pending_list_commission_form = commission_form.querySelector("#clf_pending_list");
        const generate_button_commission_form = commission_form.querySelector("#generate_button");
        const search_bpf_form_no_commission_form = commission_form.querySelector("#search_bpf_form_no");
        const commission_transaction_form_tab = commission_form.querySelector("#commission_transaction_form_tab");
        const table_data_commission_form = commission_transaction_form_tab.querySelector("#table_data");
        const ctf_form_no_container_commission_form = commission_transaction_form_tab.querySelector("#ctf_form_no_container");
        const ctf_form_no_commission_form = commission_transaction_form_tab.querySelector("#ctf_form_no");
        const client_name_container_commission_form = commission_transaction_form_tab.querySelector("#client_name_container");

        marketing_user_commission_form.innerText = user.value.toLowerCase().replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
        if(user.value == "JEMINA CENTENO"){
            marketing_signature_commission_form.innerHTML = `<img src="../images/CENTENO_JEMINA.png" alt="">`;
        }
        else if(user.value == "JOVELYN SORIANO"){
            marketing_signature_commission_form.innerHTML = `<img src="../images/SORIANO_JOVELYN.png" alt="">`;
        }
        else if(user.value == "JOHONEY CANLAS"){
            marketing_signature_commission_form.innerHTML = `<img src="../images/CANLAS_JOHONEY.png" alt="">`;
        }

        var bpf_data_counter = 1;
        for(let x = 1; x < clf_data_list.content.length; x++){
            var client_id_clf = clf_data_list.content[x][findTextInArray(clf_data_list, "CLIENT ID")];
            var waste_id_clf = clf_data_list.content[x][findTextInArray(clf_data_list, "WASTE ID")];
            var quotation_no_clf = clf_data_list.content[x][findTextInArray(clf_data_list, "QUOTATION CODE")];
            var agent_name_clf = clf_data_list.content[x][findTextInArray(clf_data_list, "AGENT ID")];
            var commission_price_clf = clf_data_list.content[x][findTextInArray(clf_data_list, "COMMISSION PRICE")];
            for(let y = 1; y < bpf_data_list.content.length; y++){
                var bpf_no_bpf = bpf_data_list.content[y][findTextInArray(bpf_data_list, "BPF #")];
                var cod_no_bpf = bpf_data_list.content[y][findTextInArray(bpf_data_list, "COD #")];
                var submitted_by_bpf = bpf_data_list.content[y][findTextInArray(bpf_data_list, "SUBMITTED BY")];
                var client_id_cod, waste_id_cod;
                for(let z = 1; z < cod_data_list.content.length; z++){
                    var cod_no_cod = cod_data_list.content[z][findTextInArray(cod_data_list, "COD #")];
                    var wcf_no_cod = cod_data_list.content[z][findTextInArray(cod_data_list, "WCF #")];
                    var weight_cod = cod_data_list.content[z][findTextInArray(cod_data_list, "WEIGHT")];
                    var mtf = "";
                    var ltf = "";
                    for(let k = 1; k < wcf_data_list.content.length; k++){
                        if(wcf_no_cod == wcf_data_list.content[k][findTextInArray(wcf_data_list, "WCF #")]){
                            if((wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")].substring(0,3) == "MTF")){
                                mtf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                            }else{
                                ltf = wcf_data_list.content[k][findTextInArray(wcf_data_list, "LTF/ MTF  #")];
                                for(let i = 1; i < ltf_data_list.content.length; i++){
                                    if(ltf == ltf_data_list.content[i][findTextInArray(ltf_data_list, "LTF #")]){
                                        mtf = ltf_data_list.content[i][findTextInArray(ltf_data_list, "MTF #")];
                                        break
                                    }
                                }
                            }
                        }
                    }
                    if(cod_no_bpf == cod_no_cod){
                        client_id_cod = cod_data_list.content[z][findTextInArray(cod_data_list, "CLIENT ID")]
                        waste_id_cod = cod_data_list.content[z][findTextInArray(cod_data_list, "WASTE ID")]
                        if(client_id_clf == client_id_cod && waste_id_clf == waste_id_cod){
                            var data_value =
                            `
                            <tr>
                                <td>${bpf_data_counter}</td>
                                <td>${bpf_no_bpf}</td>
                                <td>${mtf}</td>
                                <td>${quotation_no_clf}</td>
                                <td>${findEmployeeName(agent_name_clf)}</td>
                                <td>${findClientName(client_id_clf)}</td>
                                <td>${findWasteName(client_id_clf, waste_id_clf)}</td>
                                <td>${formatNumber2(weight_cod)}</td>
                                <td>${formatNumber(commission_price_clf)}</td>
                                <td>${formatNumber(commission_price_clf * weight_cod)}</td>
                                <td>${submitted_by_bpf}</td>
                            </tr>
                            `
                            clf_pending_list_commission_form.insertAdjacentHTML("beforeend", data_value)
                            bpf_data_counter += 1;
                        }
                    }
                }
            }
        }

        generate_button_commission_form.addEventListener("click", () => {
            for(let y = 1; y < bpf_data_list.content.length; y++){
                table_data_commission_form.innerHTML = "";
                var bpf_no_bpf = bpf_data_list.content[y][findTextInArray(bpf_data_list, "BPF #")];
                var cod_no_bpf = bpf_data_list.content[y][findTextInArray(bpf_data_list, "COD #")];
                var hauling_date_bpf = bpf_data_list.content[y][findTextInArray(bpf_data_list, "HAULING DATE")];
                var table_counter = 0;
                if(search_bpf_form_no_commission_form.value == bpf_no_bpf){
                    for(let z = 1; z < cod_data_list.content.length; z++){
                        var cod_no_cod = cod_data_list.content[z][findTextInArray(cod_data_list, "COD #")];
                        var waste_name_cod = cod_data_list.content[z][findTextInArray(cod_data_list, "WASTE NAME")];
                        var weight_cod = cod_data_list.content[z][findTextInArray(cod_data_list, "WEIGHT")];
                        if(cod_no_bpf == cod_no_cod){
                            var client_id_cod = cod_data_list.content[z][findTextInArray(cod_data_list, "CLIENT ID")]
                            var waste_id_cod = cod_data_list.content[z][findTextInArray(cod_data_list, "WASTE ID")]
                            var quotation_no_clf, agent_name_clf, commission_price_clf;
                            for(let x = 1; x < clf_data_list.content.length; x++){
                                var client_id_clf = clf_data_list.content[x][findTextInArray(clf_data_list, "CLIENT ID")];
                                var waste_id_clf = clf_data_list.content[x][findTextInArray(clf_data_list, "WASTE ID")];
                                if(client_id_clf == client_id_cod && waste_id_clf == waste_id_cod){
                                    quotation_no_clf = clf_data_list.content[x][findTextInArray(clf_data_list, "QUOTATION CODE")];
                                    agent_name_clf = clf_data_list.content[x][findTextInArray(clf_data_list, "AGENT ID")];
                                    commission_price_clf = clf_data_list.content[x][findTextInArray(clf_data_list, "COMMISSION PRICE")];
                                    break
                                }
                            }
                            var unit_qlf, vat_calculation_qlf;
                            for(let x = 1; x < qlf_data_list.content.length; x++){
                                var quotation_no_qlf = qlf_data_list.content[x][findTextInArray(qlf_data_list, "QUOTATION CODE")];
                                if(quotation_no_clf == quotation_no_qlf){
                                    unit_qlf = qlf_data_list.content[x][findTextInArray(qlf_data_list, "UNIT")];
                                    vat_calculation_qlf = qlf_data_list.content[x][findTextInArray(qlf_data_list, "VAT CALCULATION")];
                                    break
                                }
                            }
                            data = `
                            <tr>
                                <td>${date_decoder2(hauling_date_bpf)}</td>
                                <td></td>
                                <td></td>
                                <td style="font-size: 10px !important; padding-top: 2px;">${waste_name_cod}</td>
                                <td>${formatNumber2(weight_cod)}</td>
                                <td>${unit_qlf}</td>
                                <td style="text-align: right; padding-right: 5px">${formatNumber(commission_price_clf)}</td>
                                <td style="text-align: right; padding-right: 5px">${formatNumber(parseFloat(weight_cod) * parseFloat(commission_price_clf))}</td>
                                <td style="font-size: 10px !important">${vat_calculation_qlf}</td>
                            </tr>
                            `
                            table_data_commission_form.insertAdjacentHTML("beforeend", data);
                            table_counter += 1;
                        }
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
                        table_data_commission_form.insertAdjacentHTML("beforeend", data5);
                    }
                    ctf_form_no_container_commission_form.innerText = ctf_form_no_commission_form.value
                    client_name_container_commission_form.innerText = ""
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
            var data_info = prf_data_list.content[last_row][findTextInArray(prf_data_list, "ITM #")];
            var data_counter = data_info.substring(9,13) || 0;
            var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
            
            for (let y = 1; y <= prf_counter.value; y++) {
                prf_form_no[y] = document.querySelector(`#prf_form_no${y}`);
                var current_year = new Date().getFullYear();
                var last_counter_year = data_info.substring(3,7);
                if(last_counter_year == current_year){
                    data_counter = data_info.substring(9,13) || 0;
                    prf_form_no[y].value = `ITM${last_counter_year}${month}${((parseInt(data_counter) + y).toString().padStart(4,"0"))}`;
                } else {
                    data_counter = (0).toString().padStart(4, "0");
                    prf_form_no[y].value = `ITM${current_year}${month}${((parseInt(data_counter) + y).toString().padStart(4,"0"))}`;
                }
            
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

        // FORM GENERATOR
        // supplies_warehouse
        const wsf_form_no = document.getElementById("wsf_form_no");
        var last_row = wsf_data_list.content.length -1;
        var data_info = wsf_data_list.content[last_row][findTextInArray(wsf_data_list, "WSF #")];
        var data_counter;
        if(last_row == 0){
            data_counter = 0;
        }
        else{
            data_counter = data_info.substring(9,13);
        }
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(3,7);
        if(last_counter_year == current_year){
            wsf_form_no.value = `WSF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            wsf_form_no.value = `WSF${current_year}${month}${data_counter}`;
        }

        const supplies_warehouse = document.querySelector("#supplies_warehouse");
        const withdrawal_form_button = supplies_warehouse.querySelector("#withdrawal_form_button");
        const form_tab_supplies_transaction = supplies_warehouse.querySelector("#form_tab");
        const add_item_button_supplies_warehouse = supplies_warehouse.querySelector("#add_item_button");
        const remove_item_button_supplies_warehouse = supplies_warehouse.querySelector("#remove_item_button");
        const purpose_container_supplies_warehouse = supplies_warehouse.querySelector("#purpose_container");

        withdrawal_form_button.addEventListener("click", () => {
            if(form_tab_supplies_transaction.style.display == "none"){
                form_tab_supplies_transaction.style.display = "block"
            } else{
                form_tab_supplies_transaction.style.display = "none"
            }
        })
        addIIDItem()
        add_item_button_supplies_warehouse.addEventListener("click", () => {
            addIIDItem()
            remove_item_button_supplies_warehouse.style.display = "block"
        })
        remove_item_button_supplies_warehouse.addEventListener("click", () => {
            const iid_counter = document.getElementById("iid_counter");
            const iid_container = document.querySelector(`#iid_container${iid_counter.value}`)
            iid_container.remove();
            if(iid_counter.value == 1){
                remove_item_button_supplies_warehouse.style.display = "none"
            }
            iid_counter.value = parseInt(iid_counter.value) - 1;
        })

        var iid_no_array = [];
        var iid_item_array = [];
        var table_data_counter = 1;
        for(let x = 1; x < iid_data_list.content.length; x++){
            var quantity = 0
            var total_amount = 0
            var iid_no = iid_data_list.content[x][findTextInArray(iid_data_list, "IID #")]
            for(let y = 1; y < stf_data_list.content.length; y++){
                if(iid_no == stf_data_list.content[y][findTextInArray(stf_data_list, "IID #")]){
                    if(stf_data_list.content[y][findTextInArray(stf_data_list, "TRANSACTION")] == "RE-STOCK"){
                        quantity += stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")];
                        total_amount += (stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")] * stf_data_list.content[y][findTextInArray(stf_data_list, "AMOUNT")]);
                    }
                    else if(stf_data_list.content[y][findTextInArray(stf_data_list, "TRANSACTION")] == "WITHDRAW"){
                        quantity -= stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")];
                        total_amount -= (stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")] * stf_data_list.content[y][findTextInArray(stf_data_list, "AMOUNT")]);
                    }
                    else if(stf_data_list.content[y][findTextInArray(stf_data_list, "TRANSACTION")] == "NEW ITEM"){
                        quantity += stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")];
                        total_amount += (stf_data_list.content[y][findTextInArray(stf_data_list, "QUANTITY")] * stf_data_list.content[y][findTextInArray(stf_data_list, "AMOUNT")]);
                    }
                }
            }
            var table_data_supplies_inventory =
            `
            <tr>
                <td>${table_data_counter}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "IID #")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "STORAGE TYPE")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "RACK/ PALLET")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "LEVEL")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "ITEM")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "DESCRIPTION")]}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "UNIT")]}</td>
                <td>${quantity}</td>
                <td>${iid_data_list.content[x][findTextInArray(iid_data_list, "SUBMITTED BY")]}</td>
            </tr>
            `
            table_data_counter += 1;
            iid_no_array.push(iid_data_list.content[x][findTextInArray(iid_data_list, "IID #")])
            iid_item_array.push(iid_data_list.content[x][findTextInArray(iid_data_list, "ITEM")])
            supplies_inventory_list.insertAdjacentHTML("beforeend", table_data_supplies_inventory)
        }

        function addIIDItem(){
            const iid_counter = document.getElementById("iid_counter");
            iid_counter.value = parseInt(iid_counter.value) + 1;
            var iid_data = 
            `
            <div id="iid_container${iid_counter.value}" class="iid_container" style="display: flex; gap: 20px;">
                <div id="iid_form_no">
                    <label for="iid_form_no${iid_counter.value}">
                        <i class="fa-solid fa-list-ol"></i>
                        IID #
                    </label><br>
                    <div class="form">
                        <input type="text" id="iid_form_no${iid_counter.value}" name="iid_form_no${iid_counter.value}" required autocomplete="off" class="form-control">
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px">
                    <div>
                        <label for="item${iid_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Item
                        </label>
                        <input type="text" id="item${iid_counter.value}" name="item${iid_counter.value}" autocomplete="off" class="form-control" required readonly placeholder="Autofind">
                    </div>
                    <div>
                        <label for="quantity${iid_counter.value}">
                            <i class="fa-solid fa-list-ol"></i>
                            Quantity
                        </label>
                        <input type="text" id="quantity" name="quantity${iid_counter.value}" autocomplete="off" class="form-control" required placeholder="Input Quantity">
                    </div>
                </div>
            </div><hr>
            `
            purpose_container_supplies_warehouse.insertAdjacentHTML("beforebegin", iid_data)

            const iid_form_no = supplies_warehouse.querySelector(`#iid_form_no${iid_counter.value}`);
            const item = supplies_warehouse.querySelector(`#item${iid_counter.value}`);
            iid_form_no.addEventListener("keyup", () => {
                for(let x = 0; x < iid_no_array.length; x++){
                    if(iid_form_no.value == iid_no_array[x]){
                        for(let y = 1; y < iid_data_list.content.length; y++){
                            if(iid_form_no.value == iid_data_list.content[y][findTextInArray(iid_data_list, "IID #")]){
                                `${iid_data_list.content[y][findTextInArray(iid_data_list, "ITEM")]} ${iid_data_list.content[y][findTextInArray(iid_data_list, "DESCRIPTION")]}`;
                                break
                            }
                            else{
                                item.value = "No Item Found"
                            }
                        }
                    }
                }
            })
        }
                
        // incident report form
        const irf_form_no = document.getElementById("irf_form_no");
        var last_row = irf_data_list.content.length -1;        
        var data_info = irf_data_list.content[last_row][findTextInArray(irf_data_list, "IRF #")];
        var data_counter = data_info.substring(9,13);
        var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        var current_year = new Date().getFullYear();
        var last_counter_year = data_info.substring(3,7);
        if(last_counter_year == current_year){
            irf_form_no.value = `IRF${last_counter_year}${month}${data_counter}`;
        } else {
            data_counter = (1).toString().padStart(4, "0");
            irf_form_no.value = `IRF${current_year}${month}${data_counter}`;
        }
    

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
                        return data.toLocaleLowerCase().includes(user_data.toLocaleLowerCase());
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
                if((waste_id).toString().substring(0, 8) == type_of_waste_data_list.content[c][findTextInArray(type_of_waste_data_list, "WASTE ID")]){
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
                else if(waste_id == "W2023100"){
                    waste_name = "ASSORTED NON-HAZARDOUS WASTE"
                }
                else if(waste_id == "W2023200"){
                    waste_name = "ASSORTED HAZARDOUS WASTE"
                }
                else{
                    waste_name = waste_id
                }
            }
            return waste_name
        }
        function monthNameToNumber(monthName) {
            const months = [
                "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
                "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
            ];
        
            const monthIndex = months.findIndex(month => month === monthName.toUpperCase());
            return monthIndex;
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

            for(let x = 1; x < mtf_data_list.content.length; x++){

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
                        <h1 style="text-align: center; font-weight: bold;">MARKETING TRANSACTION</h1>
                        <h1 style="text-align: center; font-weight: bold;">MARKETING DEPARTMENT</h1>
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