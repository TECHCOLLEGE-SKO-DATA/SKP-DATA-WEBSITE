let slideIndex = 0;
let slides;

window.addEventListener('DOMContentLoaded', (event) => {
    slides = document.getElementsByClassName("mySlides");
    if (slides.length > 0) {
        showSlides();
    }
});

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].style.transition = "opacity 1.5s ease"; 
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.opacity = "1";

    setTimeout(showSlides, 7000);
}