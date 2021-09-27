'use strict';

let swiper = new Swiper('.swiper-container',{
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  },
  speed: 1000,

});