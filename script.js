'use strict';

// Variables
const header = document.querySelector('header');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

//Slider
const images = document.querySelectorAll('.images-container picture');
const captions = document.querySelectorAll('.caption');
const currentSlide = 0;
const maxSlide = images.length;

// //Functionality

// Menu
const checkScreenSize = function () {
  if (window.innerWidth <= 800) {
    menu.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
  }
};
checkScreenSize();

const changeMenuIcon = function () {
  if (header.classList.contains('open')) {
    hamburgerBtn.src = 'images/icon-hamburger.svg';
  } else {
    hamburgerBtn.src = 'images/icon-close.svg';
  }
};

const mobileMenu = function () {
  changeMenuIcon();
  logo.classList.toggle('hidden');
  menu.classList.toggle('hidden');
  header.classList.toggle('open');
};

//Slider

// Event handlers
hamburgerBtn.addEventListener('click', mobileMenu);
