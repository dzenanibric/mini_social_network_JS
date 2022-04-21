import { logout } from "./functions.js";

const logout_btn = document.getElementById('logout-btn');

logout_btn.addEventListener('click', ()=>{
    logout();
});