'use strict';

// element toggle function
const elementToggleFunc = ele => ele.classList.toggle('active');

// sidebar variables

const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile

sidebarBtn.addEventListener('click', () => elementToggleFunc(sidebar));

// 
// 
// 
// 
// all for modal action

// testimonials variables

const testimonialsItems = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// modal variables

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

// modal toggle function

const testimonialsModalFunc = function () {
  overlay.classList.toggle('active');
  modalContainer.classList.toggle('active');
};

// add click events to all modal items

testimonialsItems.forEach(function (t) {
  t.addEventListener('click', function () {
    modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
    modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;

    modalTitle.innerHTML = this.querySelector(
      '[data-testimonials-title]'
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      '[data-testimonials-text]'
    ).innerHTML;

    testimonialsModalFunc();
  });
});

// add click event to close modal

modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);


// 
// 
// 
// 
// 
// 
// 