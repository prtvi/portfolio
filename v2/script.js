'use strict';

// project tags
// auto, webdev, ml, iot, other

// ---------------------- SIDEBAR ----------------------

// element toggle function
const elementToggleFunc = ele => ele.classList.toggle('active');

const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener('click', () => elementToggleFunc(sidebar));

//
//

// ---------------------- PORTFOLIO ----------------------

// for dropdown selection

// select btn
const selectBtn = document.querySelector('[data-select]');

// value that is selected for selectBtn
const selectValue = document.querySelector('[data-select-value]');

// all possible selectable values for selectBtn
const selectItems = document.querySelectorAll('[data-select-item]');

// project items
const projectItems = document.querySelectorAll('[data-project-item]');

const filterFunc = function (selectedValue) {
  projectItems.forEach(pi => {
    // project tags or categories
    const tags = pi.dataset.category;

    // if selectedValue is all then show all projects
    if (selectedValue === 'all') pi.classList.add('active');
    // else if selectedValue exists in project tags then show that project
    else if (tags.includes(selectedValue)) pi.classList.add('active');
    // else hide that project
    else pi.classList.remove('active');
  });
};

// add event listeners
selectBtn.addEventListener('click', function () {
  elementToggleFunc(this);
});

selectItems.forEach(si => {
  si.addEventListener('click', function () {
    let selectedValue = this.dataset.selectItem;
    selectValue.innerText = this.innerText;
    elementToggleFunc(selectBtn);
    filterFunc(selectedValue);
  });
});

// larger screen only

const filterBtns = document.querySelectorAll('[data-filter-btn]');
// add event in all filter button items for large screen

let lastClickedBtn = filterBtns[0];

filterBtns.forEach(fb => {
  fb.addEventListener('click', function () {
    let selectedValue = this.dataset.filterBtn;
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedBtn = this;
  });
});

//
//

// ---------------------- PAGE NAVIGATION ----------------------

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// add event to all nav links

navigationLinks.forEach(navLink => {
  navLink.addEventListener('click', function () {
    // remove active class from all links first
    navigationLinks.forEach(nl => nl.classList.remove('active'));

    pages.forEach(page => {
      if (navLink.dataset.navLink === page.dataset.page) {
        // if matched then add active class to nav link
        navLink.classList.add('active');

        // display page with active class
        page.classList.add('active');

        window.scrollTo(0, 0);
      } else page.classList.remove('active');
    });
  });
});

//
//
//
//
//

/*
// modal

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

*/

/*
// Contact

// // contact form variables

// const form = document.querySelector('[data-form]');
// const formInputs = document.querySelectorAll('[data-form-input]');
// const submitBtn = document.querySelector('[data-form-btn]');

// // add event listeners for all input fields
// formInputs.forEach(fi => {
//   fi.addEventListener('input', function () {
//     // check form validation
//     if (form.checkValidity()) formBtn.removeAttribute('disabled');
//     else formBtn.setAttribute('disabled', '');
//   });
// });

*/
