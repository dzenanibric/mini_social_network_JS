import { login_data } from "./data.js";

function checkLogin(username, password, error_div){
    if(username == login_data[0].username && password == login_data[0].password){
        window.location.href = "home.html";
    }
    else{
        error_div.style.display = 'block';
        const error = document.createElement('p');
        error.setAttribute('id', 'error');
        if(error_div.textContent.includes('Your username or password is incorrect')){
            document.getElementById('error').remove();
        }
        error.innerText = 'Your username or password is incorrect';
        error_div.appendChild(error);
    }
}

function openMobileMenu(menu_items, menu_div, menu_btn, close_btn){
    menu_div.style.display = 'flex';
    menu_div.append(menu_items);
    menu_items.style.display = 'block';
}

function closeMenu(menu_div, menu_btn, close_btn){
    menu_div.style.display = 'none';
    menu_btn.style.display = 'block';
}

function getProfileInfo(profile_info_div){
    let fl_name = document.createElement('p');
    fl_name.innerText = login_data[1].firstName + ' ' + login_data[1].lastName;
    fl_name.setAttribute('id', 'fl-name');
    let description = document.createElement('p');
    description.innerText = 'Description: ' + login_data[2].description;
    let age = document.createElement('p');
    age.innerText = 'Age: ' + login_data[3].age;
    let city = document.createElement('p');
    city.innerText = 'City: ' + login_data[3].city;
    let country  = document.createElement('p');
    country.innerText = 'Country: ' + login_data[3].country;
    let interest = document.createElement('p');
    interest.innerText = 'Interest: ' + login_data[3].interest;
    profile_info_div.appendChild(fl_name);
    profile_info_div.appendChild(description);
    profile_info_div.appendChild(age);
    profile_info_div.appendChild(city);
    profile_info_div.appendChild(country);
    profile_info_div.appendChild(interest);
}

function getProfileImage(profile_image_div){
    if(localStorage.getItem('path') === null){
        profile_image_div.innerHTML = '<img src = "' + login_data[4].profilePicturePath + '">';
    }
    else{
        profile_image_div.innerHTML = '<img src = "' + localStorage.getItem('path') + '">';
    }
}

function uploadProfileImage(){
    window.addEventListener('load', function() {
        document.querySelector('input[type="file"]').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                let img = document.querySelector('.profile__picture-change img');
                img.onload = () => {
                    URL.revokeObjectURL(img.src);
                }
      
                const file_name = document.getElementById('choose-file-input').value;
                localStorage.setItem('path', './assets/images/' + file_name.split("\\").pop());
            }
        });
    });
}

let oldest=1, id=0, lastAdded = 0;
function submitPost(post_content, posts_div){
    const one_post =document.createElement('div');
    const fl_name = document.createElement('h3');
    const text = document.createElement('p');
    const childrens = posts_div.children.length;
    
    if(post_content.value == ''){
        alert('Textarea cannot be empty!');
        throw new Error("Textarea cannot be empty");
    }
    else{
        id++;
        one_post.setAttribute('class', 'one__post');
        fl_name.innerText = login_data[1].firstName + ' ' + login_data[1].lastName;
        one_post.appendChild(fl_name);
        text.innerText = post_content.value;
        one_post.appendChild(text);
        one_post.setAttribute('id', id);
        posts_div.insertBefore(one_post, document.getElementById(lastAdded));
        lastAdded++;

        if(childrens == 7){
            document.getElementById(oldest).remove();
            oldest++;
        }
        post_content.value = '';
    }
}

function searchBar(posts, search_value){
    let p, txt_value;
    
    for(let i = 0; i<posts.length; i++){
        p = posts[i].getElementsByTagName('p')[0];
        txt_value = p.textContent || p.innerText;
        if(txt_value.toUpperCase() == search_value.value.toUpperCase()){
            const this_id = posts[i].id;
            document.getElementById(this_id).style.background = 'red';
        }
    }
    search_value.value = '';
}

function logout(){
    window.location.href = "index.html";
}

export {checkLogin, openMobileMenu, closeMenu, getProfileInfo, logout, getProfileImage, uploadProfileImage, submitPost, searchBar };