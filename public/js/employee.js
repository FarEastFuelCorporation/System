document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');
        const leave_response_promise = fetch('https://script.google.com/macros/s/AKfycbyBmD5-PmLKn61bDo7WweODJM703OsC7hIroNwwW7d2lKCWNM1Ka8aF4ZRzZ-gvyniAxw/exec');

        const [
            username_response,
            leave_response,
        ] = await Promise.all([
            username_response_promise,
            leave_response_promise,
        ]);

        const username_data_list  = await username_response.json();
        const leave_data_list  = await leave_response.json();

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
        const departments = document.querySelectorAll("#department");

        const user_name = username_data_list.content[xValue][findTextInArray(username_data_list, "NAME")];
        profile_picture.src = `../images/profile_picture/${username_data_list.content[xValue][findTextInArray(username_data_list, "PICTURE")]}`;
        users.forEach(user => {user.value = username_data_list.content[xValue][findTextInArray(username_data_list, "NAME")]})
        departments.forEach(user => {user.value = username_data_list.content[xValue][findTextInArray(username_data_list, "DEPARTMENT")]})
        user_sidebar.innerHTML = `<u>${username_data_list.content[xValue][findTextInArray(username_data_list, "NAME")]}</u>`;
        user_sidebar_officer.innerText = username_data_list.content[xValue][findTextInArray(username_data_list, "SECTIONS")];
        user_sidebar_department.innerText = username_data_list.content[xValue][findTextInArray(username_data_list, "DEPARTMENT")];
        user_sidebar_employee_type.innerText = username_data_list.content[xValue][findTextInArray(username_data_list, "EMPLOYEE TYPE")];
        

        // application_section
        const application_section = document.querySelector("#application_section");
        const buttons = application_section.querySelectorAll("button");
        const sick_leave_button = buttons[0];
        const vacation_button = buttons[1];
        const undertime_button = buttons[2];
        const overtime_button = buttons[3];
        const sick_leave_tab = application_section.querySelector("#sick_leave_tab");
        const vacation_leave_tab = application_section.querySelector("#vacation_leave_tab");
        const undertime_tab = application_section.querySelector("#undertime_tab");
        const overtime_tab = application_section.querySelector("#overtime_tab");
        const back1 = sick_leave_tab.querySelector("#back");
        const back2 = vacation_leave_tab.querySelector("#back");
        const back3 = undertime_tab.querySelector("#back");
        const back4 = overtime_tab.querySelector("#back");

        sick_leave_button.addEventListener("click", () => {
            sick_leave_tab.style.display = "block"
        })
        vacation_button.addEventListener("click", () => {
            vacation_leave_tab.style.display = "block"
        })
        undertime_button.addEventListener("click", () => {
            undertime_tab.style.display = "block"
        })
        overtime_button.addEventListener("click", () => {
            overtime_tab.style.display = "block"
        })

        back1.addEventListener("click", () => {
            sick_leave_tab.style.display = "none"
        })
        back2.addEventListener("click", () => {
            vacation_leave_tab.style.display = "none"
        })
        back3.addEventListener("click", () => {
            undertime_tab.style.display = "none"
        })
        back4.addEventListener("click", () => {
            overtime_tab.style.display = "none"
        })

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});