document.addEventListener('DOMContentLoaded', async function() {
    try {
        const username_response_promise = fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec');

        const [
            username_response,
        ] = await Promise.all([
            username_response_promise,
        ]);

        const username_data_list  = await username_response.json();

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
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});