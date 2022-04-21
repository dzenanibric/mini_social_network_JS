import { getProfileImage, getProfileInfo, uploadProfileImage } from "./functions.js";

const profile_image_div = document.querySelector('.profile__picture-change'),
profile_info_div = document.querySelector('.profile__info-b');

getProfileImage(profile_image_div);
getProfileInfo(profile_info_div);
uploadProfileImage();