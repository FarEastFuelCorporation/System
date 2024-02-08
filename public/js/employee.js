document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const leave_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBmD5-PmLKn61bDo7WweODJM703OsC7hIroNwwW7d2lKCWNM1Ka8aF4ZRzZ-gvyniAxw/exec');
        const employee_response_promise = fetch('https://script.google.com/macros/s/AKfycbwns5R6TA8U64ywbb9hwYu4LKurAjTM0Z18NYNZMt0Ft0m-_NUHYbYqblk_5KWugvt7lA/exec');
        const travel_order_response_promise = fetch('https://script.google.com/macros/s/AKfycbxBzXVf_B2hHUI3FK9m43Av2MQrmra6laPuHrOPJMt4MS1z9qHtfs7bzoDmXhxXtP-u/exec');
        const overtime_undertime_response_promise = fetch('https://script.google.com/macros/s/AKfycbzQMLI5voLzH7EiaRWyWtfS-kSovXWTBLDJaLmCL8-zJ25EOEsPN1ISlvlHcXlIylIs/exec');
        const loans_response_promise = fetch('https://script.google.com/macros/s/AKfycbwnHzcfjHaD6xRdvea58nU0MuvmIdrpLr73TKXiAo3kV6l7YVFUQoLV7FzDhzgSw4pB/exec');

        const [
            username_response,
            leave_response,
            employee_response,
            travel_order_response,
            overtime_undertime_response,
            loans_response,
        ] = await Promise.all([
            username_response_promise,
            leave_response_promise,
            employee_response_promise,
            travel_order_response_promise,
            overtime_undertime_response_promise,
            loans_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const leave_data_list  = await leave_response.json();
        const employee_data_list  = await employee_response.json();
        const tof_data_list  = await travel_order_response.json();
        const ot_ut_data_list  = await overtime_undertime_response.json();
        const loan_data_list  = await loans_response.json();

        // Code that depends on the fetched data
        // username_data_list
        const queryParams = new URLSearchParams(window.location.search);
        const xValue = queryParams.get('user');
        const profile_picture = document.getElementById("profile_picture");
        const user_sidebar = document.getElementById("user_sidebar");
        const user_sidebar_officer = document.getElementById("user_sidebar_officer");
        const user_sidebar_department = document.getElementById("user_sidebar_department");
        const user_sidebar_employee_type = document.getElementById("user_sidebar_employee_type");
        const users = document.querySelectorAll("#user");
        const employee_ids = document.querySelectorAll("#employee_id");
        const departments = document.querySelectorAll("#department");
        const designations = document.querySelectorAll("#designation");
        const url_inputs = document.querySelectorAll("#url");
        const url = window.location.href
        const employee_id = username_data_list.content[xValue][findTextInArray(username_data_list, "EMPLOYEE ID")]

        profile_picture.src = `../images/profile_picture/${username_data_list.content[xValue][findTextInArray(username_data_list, "PICTURE")]}`;
        url_inputs.forEach(url_input => {url_input.value = url})
        users.forEach(user => {user.value = username_data_list.content[xValue][findTextInArray(username_data_list, "NAME")]})
        employee_ids.forEach(employee_id => {employee_id.value = username_data_list.content[xValue][findTextInArray(username_data_list, "EMPLOYEE ID")]})
        designations.forEach(designation => {designation.value = username_data_list.content[xValue][findTextInArray(username_data_list, "SECTIONS")]})
        departments.forEach(user => {user.value = username_data_list.content[xValue][findTextInArray(username_data_list, "DEPARTMENT")]})
        user_sidebar.innerHTML = `${username_data_list.content[xValue][findTextInArray(username_data_list, "NAME")]}`;
        user_sidebar_officer.innerText = username_data_list.content[xValue][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[xValue][findTextInArray(username_data_list, "DEPARTMENT")];
        user_sidebar_employee_type.innerText = username_data_list.content[xValue][findTextInArray(username_data_list, "EMPLOYEE TYPE")];

        // application_section
        const application_section = document.querySelector("#application_section");
        const buttons = application_section.querySelectorAll("button");
        const sick_leave_button = buttons[0];
        const vacation_button = buttons[1];
        const travel_order_button = buttons[2];
        const undertime_button = buttons[3];
        const overtime_button = buttons[4];
        const cash_advance_button = buttons[5];
        const sick_leave_tab = application_section.querySelector("#sick_leave_tab");
        const vacation_leave_tab = application_section.querySelector("#vacation_leave_tab");
        const travel_order_tab = application_section.querySelector("#travel_order_tab");
        const undertime_tab = application_section.querySelector("#undertime_tab");
        const overtime_tab = application_section.querySelector("#overtime_tab");
        const cash_advance_tab = application_section.querySelector("#cash_advance_tab");
        const back1 = sick_leave_tab.querySelector("#back");
        const back2 = vacation_leave_tab.querySelector("#back");
        const back3 = travel_order_tab.querySelector("#back");
        const back4 = undertime_tab.querySelector("#back");
        const back5 = overtime_tab.querySelector("#back");
        const back6 = cash_advance_tab.querySelector("#back");

        sick_leave_button.addEventListener("click", () => {
            sick_leave_tab.style.display = "block"
        })
        vacation_button.addEventListener("click", () => {
            vacation_leave_tab.style.display = "block"
        })
        travel_order_button.addEventListener("click", () => {
            travel_order_tab.style.display = "block"
        })
        undertime_button.addEventListener("click", () => {
            undertime_tab.style.display = "block"
        })
        overtime_button.addEventListener("click", () => {
            overtime_tab.style.display = "block"
        })
        cash_advance_button.addEventListener("click", () => {
            cash_advance_tab.style.display = "block"
        })

        back1.addEventListener("click", () => {
            sick_leave_tab.style.display = "none"
        })
        back2.addEventListener("click", () => {
            vacation_leave_tab.style.display = "none"
        })
        back3.addEventListener("click", () => {
            travel_order_tab.style.display = "none"
        })
        back4.addEventListener("click", () => {
            undertime_tab.style.display = "none"
        })
        back5.addEventListener("click", () => {
            overtime_tab.style.display = "none"
        })
        back6.addEventListener("click", () => {
            cash_advance_tab.style.display = "none"
        })

        var employee_data = [];
        for(let x = 1; x < employee_data_list.content.length; x++){
            if(employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE STATUS")] == "ACTIVE"){
                var gender = employee_data_list.content[x][findTextInArray(employee_data_list, "GENDER")];
                var employeeId = employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE ID")];
                if(gender == "MALE"){
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "AFFIX")]}`
                    employee_data.push({employee_id : employeeId, name: full_name});
                }
                else{
                    var full_name = `${employee_data_list.content[x][findTextInArray(employee_data_list, "LAST NAME")]}, ${employee_data_list.content[x][findTextInArray(employee_data_list, "FIRST NAME")]} ${employee_data_list.content[x][findTextInArray(employee_data_list, "MIDDLE NAME")]} - ${employee_data_list.content[x][findTextInArray(employee_data_list, "SPOUSE NAME")]}`
                    employee_data.push({employee_id : employeeId, name: full_name});
                }
            }
        }
        
        // travel_order_tab
        const employeeList = travel_order_tab.querySelector("#employeeList");
        const add_item_button_travel_order_tab = travel_order_tab.querySelector("#add_item_button");
        const remove_item_button_travel_order_tab = travel_order_tab.querySelector("#remove_item_button");
        const add_item_button_travel_order_tab2 = travel_order_tab.querySelector("#add_item_button2");
        const remove_item_button_travel_order_tab2 = travel_order_tab.querySelector("#remove_item_button2");
        const name_container_travel_order_tab = travel_order_tab.querySelector("#name_container");
        const data_container_travel_order_tab = travel_order_tab.querySelector("#data_container");

        
        // FORM GENERATOR
        // tof_data_list
        // const tof_form_no = travel_order_tab.querySelector("#tof_form_no");
        // var last_row = tof_data_list.content.length -1;        
        // var data_info = tof_data_list.content[last_row][findTextInArray(tof_data_list, "TOF #")];
        // var data_counter = data_info.substring(9,13);
        // var current_year = new Date().getFullYear();
        // var last_counter_year = data_info.substring(3,7);
        // var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
        // data_counter = (parseInt(data_counter) +1).toString().padStart(4, "0");
        // if(last_counter_year == current_year){
        //     tof_form_no.value = `TOF${last_counter_year}${month}${data_counter}`;
        // } else {
        //     data_counter = (1).toString().padStart(4, "0");
        //     tof_form_no.value = `TOF${current_year}${month}${data_counter}`;
        // }

        employee_data.forEach((data) => {
            var list = 
            `
                <option value="${data.employee_id}">${data.name}</option>
            `
            employeeList.insertAdjacentHTML("beforeend", list)
        })

        add_item_button_travel_order_tab.addEventListener("click", () => {
            const name_counter = travel_order_tab.querySelector("#name_counter");
            name_counter.value++

            var list_option = 
            `
            <div id="name_container${name_counter.value}">
                <label for="name${name_counter.value}">
                    Name ${name_counter.value}
                </label>
                <input type="text" list="employeeList" id="name${name_counter.value}" name="name${name_counter.value}" required class="form-control" autocomplete="off" style="border: 1px solid black; width: 100% !important;" placeholder="Select Employee"><br>
            </div>
            `
            name_container_travel_order_tab.insertAdjacentHTML("beforeend", list_option)
            remove_item_button_travel_order_tab.style.display = "block";
        })

        remove_item_button_travel_order_tab.addEventListener("click", () => {
            const name_counter = travel_order_tab.querySelector("#name_counter");
            const name_container = travel_order_tab.querySelector(`#name_container${name_counter.value}`);

            name_container.remove();
            name_counter.value--;

            if(name_counter.value == 1){
                remove_item_button_travel_order_tab.style.display = "none";
            }
        })

        add_item_button_travel_order_tab2.addEventListener("click", () => {
            const destination_counter = travel_order_tab.querySelector("#destination_counter");
            destination_counter.value++

            var list_option = 
            `
            <div id="data_container${destination_counter.value}">
                <label for="destination${destination_counter.value}">
                    Destination ${destination_counter.value}
                </label>
                <input type="text" id="destination${destination_counter.value}" name="destination${destination_counter.value}" required class="form-control" autocomplete="off" style="border: 1px solid black; width: 100% !important;" placeholder="Input Destination"><br>
                <label for="purpose${destination_counter.value}">
                    Purpose ${destination_counter.value}
                </label>
                <input type="text" id="purpose${destination_counter.value}" name="purpose${destination_counter.value}" required class="form-control" autocomplete="off" style="border: 1px solid black; width: 100% !important;" placeholder="Input Purpose"><br>
            </div>
            `
            data_container_travel_order_tab.insertAdjacentHTML("beforeend", list_option)
            remove_item_button_travel_order_tab2.style.display = "block";
        })

        remove_item_button_travel_order_tab2.addEventListener("click", () => {
            const destination_counter = travel_order_tab.querySelector("#destination_counter");
            const data_container = travel_order_tab.querySelector(`#data_container${destination_counter.value}`);

            data_container.remove();
            destination_counter.value--;

            if(destination_counter.value == 1){
                remove_item_button_travel_order_tab2.style.display = "none";
            }
        })


        for(let x = 1; x < employee_data_list.content.length; x++){
            const employee_id_data = employee_data_list.content[x][findTextInArray(employee_data_list, "EMPLOYEE ID")]
            const date_hire_data = employee_data_list.content[x][findTextInArray(employee_data_list, "DATE HIRE")]
            if(employee_id == employee_id_data){
                // Convert date_hire_data and current date to Date objects
                const dateHire = new Date(date_hire_data);
                const currentDate = new Date();

                // Calculate the time difference in milliseconds
                const timeDiff = currentDate - dateHire;

                // Calculate the time difference in years
                const yearsDiff = timeDiff / (1000 * 60 * 60 * 24 * 365);

                // Check if the difference is greater than or equal to 1 year
                const sick_leave_note = application_section.querySelector("#sick_leave_note");
                if (yearsDiff >= 1) {
                    // Do something if date_hire is greater than or equal to 1 year from today
                    back1.classList.remove('disabled')
                    sick_leave_note.style.display = "none"

                }
                if (yearsDiff < 1) {
                    // Do something if date_hire is greater than or equal to 1 year from today
                    sick_leave_button.classList.add('disabled');
                    sick_leave_note.style.display = "flex"
                }
            }
        }
        var leave = 30;
        for(let x = 1; x < leave_data_list.content.length; x++){

        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});