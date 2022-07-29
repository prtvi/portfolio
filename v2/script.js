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
const filterBtn = document.querySelectorAll('[data-filter-btn]');

// filter variables

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
  filterItems.forEach(fi => {
    if (selectedValue === 'all') fi.classList.add('active');
    else if (selectedValue === fi.dataset.category) fi.classList.add('active');
    else fi.classList.remove('active');
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

// add event in all filter button items for large screen

let lastClickedBtn = filterBtn[0];

filterBtn.forEach(fb => {
  fb.addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedBtn = this;
  });
});

//
//
//
//
//
//
//
//
//
//

// Blog

// contact form variables

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const submitBtn = document.querySelector('[data-form-btn]');

// add event listeners for all input fields
formInputs.forEach(fi => {
  fi.addEventListener('input', function () {
    // check form validation
    if (form.checkValidity()) formBtn.removeAttribute('disabled');
    else formBtn.setAttribute('disabled', '');
  });
});

//
//
//
//
//
//
//
//
//
//

// page navigation variables

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// add event to all nav links

navigationLinks.forEach(navLink => {
  navLink.addEventListener('click', function () {
    // remove active class from all links first
    navigationLinks.forEach(nl => nl.classList.remove('active'));

    pages.forEach(page => {
      if (navLink.textContent.toLowerCase() === page.dataset.page) {
        // if matched then add active class to nav link
        navLink.classList.add('active');

        // display page with active class
        page.classList.add('active');

        window.scrollTo(0, 0);
      } else page.classList.remove('active');
    });
  });
});
