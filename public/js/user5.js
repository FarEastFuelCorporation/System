document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const tpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbwbKss2XtW5lylCrUe8IC-ZA4ffA5CM5tY6kqIja9t80NXJw2nB8RBOJFWbXQz0hWMadw/exec');
        const cod_response_promise = fetch('https://script.google.com/macros/s/AKfycbzgiOuXizUVviCsLVfihqYN9HJ3pyNr7ElHoCl3JGkbtQnChnm2U42yQuLd4UMH0ci5/exec');
        const bpf_response_promise = fetch('https://script.google.com/macros/s/AKfycbyux0GBj9tk6quRz46IkXa0VemEDAi-v2iEHx7C_6OFi416ERkv_BFtKqBmbw-bxaaiFQ/exec');

        const [
            username_response,
            tpf_response,
            cod_response,
            bpf_response
        ] = await Promise.all([
            username_response_promise,
            tpf_response_promise,
            cod_response_promise,
            bpf_response_promise
        ]);

        const username_data  = await username_response.json();
        const tpf_data_list  = await tpf_response.json();
        const cod_data_list  = await cod_response.json();
        const bpf_data_list  = await bpf_response.json();

        // Code that depends on the fetched data
        // username_data
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user = document.getElementById("user");

        user.value = username_data.content[5][3];
        user_sidebar.innerHTML = `<u>${username_data.content[5][3]}</u>`;
        user_sidebar_officer.innerText = username_data.content[5][4];
    
        // dashboard
        var unsorted_list = document.getElementById("unsorted_list");
        var sf_tpf_transaction_counter = 0;
        var sf_transaction_counter = 0;
        let sf_transaction = []; // Variable containing existing elements
        let sf_tpf_transaction = []; // Variable containing existing elements

        for (let i = 1; i < cod_data_list.content.length; i++) {
            if (!sf_transaction.includes(cod_data_list.content[i][1])) {
                sf_transaction.push(cod_data_list.content[i][1]);
                sf_transaction_counter += 1
            }
        }

        for (let i = 1; i < bpf_data_list.content.length; i++) {
            if (!sf_tpf_transaction.includes(bpf_data_list.content[i][2])) {
                sf_tpf_transaction.push(bpf_data_list.content[i][2]);
                sf_tpf_transaction_counter += 1
            }
        }

        // Get elements from sf_transaction not included in sf_tpf_transaction
        const newElements = sf_transaction.filter((element) => !sf_tpf_transaction.includes(element));

        sorted.innerText = sf_tpf_transaction_counter;
        total.innerText = sf_transaction_counter
        unsorted.innerText = sf_transaction_counter - sf_tpf_transaction_counter;
        var data_value = "";
        var data_value_counter = 1;
        for(let i = 0; i < newElements.length; i++){
            for(let j = 1; j < cod_data_list.content.length; j++){
                if(newElements[i] == cod_data_list.content[j][1]){
                    data_value +=`
                    <tr>
                        <td>${data_value_counter}</td>
                        <td>${cod_data_list.content[j][1]}</td>
                        <td>${date_decoder(cod_data_list.content[j][10])}</td>
                        <td>${cod_data_list.content[j][5]}</td>
                        <td>${cod_data_list.content[j][6]}</td>
                        <td>${cod_data_list.content[j][8]}</td>
                    </tr>
                    `
                    data_value_counter += 1;
                }
            }
        }
        unsorted_list.innerHTML = data_value;            

        // cod_data_list
        const bpf_form_no = document.getElementById("bpf_form_no");
        const df_no = document.getElementById("df_no");
        const today = new Date();
        const today_year = today.getFullYear();
        const today_month = today.getMonth()+1;
        var month_new;
        var code_year_month;
        var data_counter4;

        // FORM GENERATOR
        if(today_month.toString().length == 1){ 
            month_new = `0${today_month}`;
        }
    
        code_year_month = `BPF${today_year}${month_new}`;
    
        var data_content4 = 1;
        var data_info4;
        var data_last_3digit = 0;
    
        for(x=1; x<bpf_data_list.content.length; x++){
            data_info4 = bpf_data_list.content[x][1];
            
            if(data_info4.includes(code_year_month) == true){
                data_last_3digit = data_info4.slice(9)
            }
        }
        
        data_content4 = parseInt(data_last_3digit) +1
    
        if(data_content4.toString().length == 1){
            data_counter4 = `00${data_content4}`;
        }
        else if(data_content4.toString().length == 2){
            data_counter4 = `0${data_content4}`;
        }
        else if(data_content4.toString().length == 3){
            data_counter4 = `${data_content4}`;
        }
    
        bpf_form_no.value = `${code_year_month}${data_counter4}`
        



    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
