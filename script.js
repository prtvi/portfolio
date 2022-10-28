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

hamburger.addEventListener('click', toggleNavbar);
window.addEventListener('load', updateAge);
