function openNav() {
  document.getElementById("mySidenav").style.width = "25vw";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// RATATOUILLE CAROUSEL
const slides = document.querySelector('.carousel_imgs');
const images = document.querySelectorAll('.carousel_imgs img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const container = document.querySelector('.carousel');

let index = 0;

function getSlideWidth() {
  return container.clientWidth;
}

function showSlide(i) {
  if (i < 0) {
    index = images.length - 1;
  } else if (i >= images.length) {
    index = 0;
  } else {
    index = i;
  }
  slides.style.transform = `translateX(${-index * getSlideWidth()}px)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 3000);
