'use strict';

// project tags
// webdev, ml, iot, other

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

const filterFunc = function (selectedValue) {
	const projectItems = document.querySelectorAll('[data-project-item]');

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

// dynamic project load
const url =
	'https://raw.githubusercontent.com/prtvi/prtvi.github.io/master/allprojects.json';

fetch(url)
	.then(res => res.json())
	.then(data => {
		const ul = document.querySelector('ul.project-list');
		data.forEach(d => ul.appendChild(getProjectLi(d)));
	});

function getProjectLi(proj) {
	const li = document.createElement('li');
	li.classList.add('project-item', 'active');
	li.dataset.projectItem = '';
	li.dataset.category = proj.project_category;

	// will go inside li
	const a = document.createElement('a');
	a.href = proj.is_hosted ? proj.hosted_url : proj.repo_url;
	a.target = '_blank';

	// will go inside a
	const figure = document.createElement('figure');
	figure.classList.add('project-img');

	// will go inside figure
	const div = document.createElement('div');
	div.classList.add('project-item-icon-box');
	div.innerHTML = `<ion-icon name="eye-outline"></ion-icon>`;

	// will go inside figure
	const img = document.createElement('img');
	img.src = proj.img_src;
	img.alt = proj.img_alt;
	img.loading = 'lazy';

	figure.appendChild(div);
	figure.appendChild(img);

	a.appendChild(figure);

	// will go inside a
	const h3 = document.createElement('h3');
	h3.classList.add('project-title');
	h3.textContent = proj.title;

	a.appendChild(h3);

	proj.project_category.forEach(pc => {
		const p = document.createElement('p');
		p.classList.add('project-category');
		p.textContent = pc;

		a.appendChild(p);
	});

	li.appendChild(a);

	return li;
}
