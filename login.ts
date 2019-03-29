class Login {

    constructor() {

    }
    login() {
        const usernameInput = document.getElementById('username');
        const passwordInut = document.getElementById('password');
        let username = usernameInput.value;
        let password = passwordInut.value;
        if(username === 'jose' && password === '123abc') {
          this.goToHome();
      }else {
          this.displayError();
      }
    }

    logout() {
        window.location.href = 'login.html';
    }

    displayError() {
        const errorBox = document.getElementById('error-box');
        errorBox.innerHTML = 'User Not Found!';
        errorBox.style = "display: block;";
        const interval = setInterval(() => {
         errorBox.style = "display: none;"
        clearInterval(interval);
            }, 5000);
    }
    goToHome () {
        window.location.href = 'index.html'
    }
}

const login = new Login();