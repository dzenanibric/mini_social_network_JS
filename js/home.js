import { getProfileInfo, getProfileImage, submitPost, searchBar } from "./functions.js";

const profile_info_div = document.querySelector('.profile__info'),
profile_image_div = document.querySelector('.profile__picture'),
post_content = document.getElementById('post-content'),
submit_post_btn = document.getElementById('submit-post-btn'),
posts_div = document.querySelector('.posts'),
search_value = document.getElementById('search-input'),
search_btn = document.getElementById('search-btn'),
posts = document.getElementsByClassName('one__post');

getProfileInfo(profile_info_div);

getProfileImage(profile_image_div);

submit_post_btn.addEventListener('click', ()=>{
    submitPost(post_content, posts_div);
});

search_btn.addEventListener('click', ()=>{
    searchBar(posts, search_value);
});