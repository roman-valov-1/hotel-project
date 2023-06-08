import { Slider } from './../../blocks/slider/slider.js'; 

const sliderParent = document.querySelector('.apartment-card__slider');

const slider = new Slider(sliderParent, 
  ['./assets/apartment-one.png', 
  './assets/apartment-two.png', 
  './assets/apartment-three.png'
]);

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }



// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("apartment-card__slider-item");
//   let dots = document.getElementsByClassName("apartment-card__slider-dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//    }
//    slides[slideIndex-1].style.display = "block";
//    dots[slideIndex-1].className += " active";
// }

// document.querySelector('.apartment-card__slider-btn-prev').addEventListener('click', () => plusSlides(-1));
// document.querySelector('.apartment-card__slider-btn-next').addEventListener('click', () => plusSlides(1));