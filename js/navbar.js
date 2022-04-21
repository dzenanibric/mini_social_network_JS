import { openMobileMenu, closeMenu } from "./functions.js";

const menu_btn = document.querySelector('.menu__btn i'),
menu_items = document.querySelector('.menu__items'),
menu_div = document.querySelector('.mobile__menu'),
close_btn = document.querySelector('.close__menu');

menu_btn.addEventListener('click', ()=>{
    if(menu_btn.getAttribute('class') == 'uil uil-bars'){
        openMobileMenu(menu_items, menu_div, menu_btn, close_btn);
        menu_btn.setAttribute('class', 'uil uil-multiply');
    }
    else{
        menu_btn.setAttribute('class', 'uil uil-bars');
        closeMenu(menu_div, menu_btn);
    }
});