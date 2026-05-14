const images = document.querySelectorAll(".photo-grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display="flex";
lightboxImg.src = img.src;

});

});

closeBtn.addEventListener("click", () => {

lightbox.style.display="none";

});

lightbox.addEventListener("click", () => {

lightbox.style.display="none";

});