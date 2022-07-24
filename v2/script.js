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

// portfolio

// custom select variables

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');

// filter variables

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
  filterItems.forEach(fi => {
    if (selectedValue === 'all') {
      fi.classList.add('active');
    } else if (selectedValue === fi.dataset.category) {
      fi.classList.add('active');
    } else {
      fi.classList.remove('active');
    }
  });
};

// add event listeners
select.addEventListener('click', function () {
  elementToggleFunc(this);
});

selectItems.forEach(si => {
  si.addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});
