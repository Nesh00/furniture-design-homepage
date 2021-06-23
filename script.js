'use strict';

// // Variables
// Menu
const header = document.querySelector('header');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

// Slider
const images = document.querySelectorAll('.images-container picture');
const captions = document.querySelectorAll('.caption');
const sliderLeft = document.querySelector('.controls-left');
const sliderRight = document.querySelector('.controls-right');
let currentSlide = 0;

// //Functionality

// Menu
const changeMenuIcon = function () {
  if (header.classList.contains('open')) {
    hamburgerBtn.src = 'images/icon-hamburger.svg';
  } else {
    hamburgerBtn.src = 'images/icon-close.svg';
  }
};

const openMenu = function () {
  changeMenuIcon();
  logo.classList.toggle('show');
  menu.classList.toggle('show');
  header.classList.toggle('open');
};

//Slider
const initSlideDisplay = function (n) {
  images.forEach(image => {
    image.style.opacity = '0';
  });

  captions.forEach(caption => {
    caption.style.opacity = '0';
  });

  images[n].style.opacity = 1;
  captions[n].style.opacity = 1;
};

const nextSlide = () => {
  currentSlide >= images.length - 1 ? (currentSlide = 0) : currentSlide++;
  initSlideDisplay(currentSlide);
};

const prevSlide = () => {
  currentSlide <= 0 ? (currentSlide = images.length - 1) : currentSlide--;
  initSlideDisplay(currentSlide);
};

// Event handlers
hamburgerBtn.addEventListener('click', openMenu);
document.addEventListener('DOMContentLoaded', initSlideDisplay(currentSlide));
sliderRight.addEventListener('click', nextSlide);
sliderLeft.addEventListener('click', prevSlide);
setInterval(nextSlide, 5000);
