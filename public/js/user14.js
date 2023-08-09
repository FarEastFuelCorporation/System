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

        const username_data  = await username_response.json();
        const prf_data_list  = await prf_response.json();
        const pof_data_list  = await pof_response.json();
        const irf_data_list  = await irf_response.json();

        // Code that depends on the fetched data
        // username_data3
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");
        const irf_user = document.getElementById("irf_user");

        user.value = username_data.content[14][3];
        irf_user.value = username_data.content[14][3];
        user_sidebar.innerHTML = `<u>${username_data.content[14][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[14][4];
        

        // purchasing_dashboard
        const purchasing_dashboard = document.querySelector("#purchasing_dashboard");
        const ordered_transactions_purchasing = purchasing_dashboard.querySelector("#ordered_transactions");
        const pending_list_container_purchasing = purchasing_dashboard.querySelector("#pending_list");
        const pending_purchasing = purchasing_dashboard.querySelector("#pending");
        const requested_purchasing = purchasing_dashboard.querySelector("#requested");
        const approved_purchasing = purchasing_dashboard.querySelector("#approved");
        const purchased_purchasing = purchasing_dashboard.querySelector("#purchased");
        let prf_transaction_treatment = []; // Variable containing existing elements
        let prf_pr_transaction_treatment = []; // Variable containing existing elements
        
        for (let i = 1; i < prf_data_list.content.length; i++) {
            if (!prf_transaction_treatment.includes(prf_data_list.content[i][1])) {
                prf_transaction_treatment.push(prf_data_list.content[i][1]);
            }
        }

        for (let i = 1; i < pof_data_list.content.length; i++) {
            if (!prf_pr_transaction_treatment.includes(pof_data_list.content[i][2])) {
                prf_pr_transaction_treatment.push(pof_data_list.content[i][2]);
            }
        }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const pending_list_purchasing = prf_transaction_treatment.filter((element) => !prf_pr_transaction_treatment.includes(element));

        ordered_transactions_purchasing.innerText = prf_transaction_treatment.length;
        pending_purchasing.innerText = pending_list_purchasing.length;
        requested_purchasing.innerText = 0;
        approved_purchasing.innerText = 0;
        purchased_purchasing.innerText = 0;

        // pending_list
        var data_value = "";
        var data_value_counter = 1;
        for(let x = 1; x < prf_data_list.content.length; x++){
            data_value += `
            <tr>
                <td>${data_value_counter}</td>
                <td>${prf_data_list.content[x][1]}</td>
                <td>${date_decoder(prf_data_list.content[x][0])} /<br> ${time_decoder(prf_data_list.content[x][0])}</td>
                <td>${prf_data_list.content[x][3]}</td>
                <td>${prf_data_list.content[x][4]}</td>
                <td>${prf_data_list.content[x][2]}</td>
                <td>${prf_data_list.content[x][5]}</td>
                <td>${prf_data_list.content[x][6]}</td>
                <td>${prf_data_list.content[x][7]}</td>
                <td>${prf_data_list.content[x][8]}</td>
            </tr>
            `
            data_value_counter += 1;
        }
        pending_list_container_purchasing.innerHTML = data_value;

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
