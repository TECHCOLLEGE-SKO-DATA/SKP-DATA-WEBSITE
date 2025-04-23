document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const images = document.querySelectorAll('.carousel-image');

  if (images.length > 0) {
    images[index].classList.add('active');

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 4000);
  }
});