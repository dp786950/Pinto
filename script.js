// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Card animation when scrolling
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => {
    observer.observe(card);
});


// Image gallery popup
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    img.addEventListener("click", () => {

        const popup = document.createElement("div");
        popup.classList.add("popup");

        const popupImg = document.createElement("img");
        popupImg.src = img.src;

        popup.appendChild(popupImg);

        popup.addEventListener("click", () => {
            popup.remove();
        });

        document.body.appendChild(popup);
    });
});


// Show current year automatically in footer
document.querySelector("footer p").innerHTML =
"© " + new Date().getFullYear() + " PINTO (BiLHaT) Family";