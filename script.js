// navbar
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

const toggleNavbar = function () {
	navbar.classList.toggle('toggle');
	hamburger.classList.toggle('toggle');

	navLinks.forEach(n => {
		if (!n.classList.contains('icon')) n.classList.toggle('toggle');
	});
};

const updateAge = function () {
	document.querySelector('.age').textContent = Math.abs(
		new Date(Date.now() - new Date(1999, 6, 25)).getUTCFullYear() - 1970
	);
};

const closeNavOnClick = function () {
	if (this.classList.contains('toggle')) toggleNavbar();
};

hamburger.addEventListener('click', toggleNavbar);
navLinks.forEach(n => n.addEventListener('click', closeNavOnClick)); // close navbar when any link is clicked

// update age dynamically
window.addEventListener('load', updateAge);
