fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec')
.then(res => res.json())
.then(data => {

    const submit_button = document.getElementById("submit_button");
        const form = document.forms.login;
        form.addEventListener('submit', function(event){
        event.preventDefault();
    })

    submit_button.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        for(x=1; x<data.content.length; x++){
            if(username === data.content[x][0] && password === data.content[x][1]){
                if(data.content[x][2] === "user1"){
                    window.location.assign("public/users/user1.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][2] === "user2"){
                    window.location.assign("public/users/user2.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][2] === "user3"){
                    window.location.assign("public/users/user3.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][2] === "user4"){
                    window.location.assign("public/users/user4.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][2] === "user5"){
                    window.location.assign("public/users/user5.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][2] === "accounting"){
                    window.location.assign("public/users/accounting.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else{
                    document.getElementById('error-message').innerText = 'Username and Password did not match'
                    document.getElementById('error-message').style.color = 'red'
                }
            }
        }
    })
})