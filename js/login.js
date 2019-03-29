var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        var passwordInut = document.getElementById('password');
        var username = usernameInput.value;
        var password = passwordInut.value;
        if (username === 'jose' && password === '123abc') {
            this.goToHome();
        }
        else {
            this.displayError();
        }
    };
    Login.prototype.logout = function () {
        window.location.href = 'login.html';
    };
    Login.prototype.displayError = function () {
        var errorBox = document.getElementById('error-box');
        errorBox.innerHTML = 'User Not Found!';
        errorBox.style = "display: block;";
        var interval = setInterval(function () {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    };
    Login.prototype.goToHome = function () {
        window.location.href = 'index.html';
    };
    return Login;
}());
var login = new Login();
