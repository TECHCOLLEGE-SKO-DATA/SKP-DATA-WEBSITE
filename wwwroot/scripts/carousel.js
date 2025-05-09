let backgroundIndex = 0;
let contentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const backgroundSlides = document.getElementsByClassName("mySlides");
    const contentSlides = document.getElementsByClassName("mySlide");
    const dots = document.getElementsByClassName("dot");

    if (backgroundSlides.length > 0) {
        cycleBackgroundSlides(backgroundSlides);
    }

    if (contentSlides.length > 0) {
        cycleContentSlides(contentSlides, dots);
    }
});

function cycleBackgroundSlides(slides) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].style.transition = "opacity 1.5s ease";
    }

    backgroundIndex = (backgroundIndex + 1) > slides.length ? 1 : backgroundIndex + 1;
    slides[backgroundIndex - 1].style.opacity = "1";

    setTimeout(() => cycleBackgroundSlides(slides), 7000);
}

function cycleContentSlides(slides, dots) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    contentIndex = (contentIndex + 1) > slides.length ? 1 : contentIndex + 1;
    slides[contentIndex - 1].style.display = "block";

    if (dots.length === slides.length) {
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        dots[contentIndex - 1].classList.add("active");
    }

    setTimeout(() => cycleContentSlides(slides, dots), 3000);
}
