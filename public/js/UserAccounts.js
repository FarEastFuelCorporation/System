fetch('https://script.google.com/macros/s/AKfycbwmA97K4sdfq6dhzSsp14JU9KgQrFgSARNZbvSfiU7vuH8oEipt6TmcFo_o-jCI0kiQ/exec')
  .then(res => res.json())
  .then(data => {
    const submitButton = document.getElementById("submit_button");
    const form = document.forms.login;
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    });

    submitButton.addEventListener("click", () => {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      let user = null;
      for (let x = 1; x < data.content.length; x++) {
        if (username === data.content[x][0] && password === data.content[x][1]) {
          user = data.content[x][2];
          break;
        }
      }

      if (user) {
        window.location.assign(`public/users/${user}.html`);
        console.log("authenticated");
        document.getElementById('error-message').innerText = '';
      } else {
        document.getElementById('error-message').innerText = 'Username and Password did not match';
        document.getElementById('error-message').style.color = 'red';
        console.log('Username and Password did not match');
      }
    });
  });
