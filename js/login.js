import { checkLogin } from "./functions.js";

const username = document.getElementById("username-input"),
password = document.getElementById('password-input'),
login_btn = document.getElementById('submit-login-btn'),
error_div = document.querySelector('.error');

login_btn.addEventListener('click', ()=>{
    checkLogin(username.value, password.value, error_div);
});
