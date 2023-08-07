document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const ltf_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBLMvyNDsT9_dlVO4Qc31dI4ErcymUHbzKimOpCZHgbJxip2XxCl7Wk3hJyqcdtrxU/exec');
        const driver_trip_response_promise = fetch('https://script.google.com/macros/s/AKfycby-Jtmqgnn7s0vsVcyOVut4EzzhvBC_jciSpZOIMy4ANidFgKnsLZM0O3t0y4QqV52vuw/exec');
        const irf_response_promise = fetch('https://script.google.com/macros/s/AKfycbzTmhNOz5cXeKitSXAriUJ_FEahAQugYEKIRwDuFt9tjhj2AtPKEf2H4yTMmZ1igpUxlQ/exec');

        const [
            username_response,
            ltf_response,
            driver_trip_response,
            irf_response,
        ] = await Promise.all([
            username_response_promise,
            ltf_response_promise,
            driver_trip_response_promise,
            irf_response_promise,
        ]);

        const username_data  = await username_response.json();
        const ltf_data_list  = await ltf_response.json();
        const driver_trip_data_list  = await driver_trip_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");
        const irf_user = document.getElementById("irf_user");

        user.value = username_data.content[15][3];
        irf_user.value = username_data.content[15][3];
        user_sidebar.innerHTML = `<u>${username_data.content[15][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[15][4];
        

        // ap_accounting_dashboard
        const ap_accounting_dashboard = document.querySelector("#ap_accounting_dashboard");
        // const ordered_transactions_purchasing = ap_accounting_dashboard.querySelector("#ordered_transactions");
        const pending_list_container_ap_accounting = ap_accounting_dashboard.querySelector("#pending_list");
        // const pending_purchasing = ap_accounting_dashboard.querySelector("#pending");
        // const requested_purchasing = ap_accounting_dashboard.querySelector("#requested");
        // const approved_purchasing = ap_accounting_dashboard.querySelector("#approved");
        // const purchased_purchasing = ap_accounting_dashboard.querySelector("#purchased");
        let ltf_transaction_ap_accounting = []; // Variable containing existing elements
        let ltf_dtt_transaction_ap_accounting = []; // Variable containing existing elements
        
        for (let i = 1; i < ltf_data_list.content.length; i++) {
            if (!ltf_transaction_ap_accounting.includes(ltf_data_list.content[i][1])) {
                ltf_transaction_ap_accounting.push(ltf_data_list.content[i][1]);
            }
        }

        for (let i = 1; i < driver_trip_data_list.content.length; i++) {
            if (!ltf_dtt_transaction_ap_accounting.includes(driver_trip_data_list.content[i][2])) {
                ltf_dtt_transaction_ap_accounting.push(driver_trip_data_list.content[i][2]);
            }
        }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const pending_list_ap_accounting = ltf_transaction_ap_accounting.filter((element) => !ltf_dtt_transaction_ap_accounting.includes(element));

        // ordered_transactions_purchasing.innerText = prf_transaction_treatment.length;
        // pending_purchasing.innerText = pending_list_purchasing.length;
        // requested_purchasing.innerText = 0;
        // approved_purchasing.innerText = 0;
        // purchased_purchasing.innerText = 0;

        // pending_list
        var data_value = "";
        var data_value_counter = 1;
        for(let x = 1; x < ltf_data_list.content.length; x++){
            data_value += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${ltf_data_list.content[x][1]}</td>
                <td>${date_decoder(prf_data_list.content[x][0])} /<br> ${time_decoder(prf_data_list.content[x][0])}</td>
                <td>${ltf_data_list.content[x][3]}</td>
            </tr>
            `
            data_value_counter += 1;
        }
        pending_list_container_ap_accounting.innerHTML = data_value;

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
