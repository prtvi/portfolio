'use strict';

// element toggle function
const elementToggleFunc = ele => ele.classList.toggle('active');

// sidebar variables

const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile

sidebarBtn.addEventListener('click', () => elementToggleFunc(sidebar));
