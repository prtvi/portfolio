// navbar
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const hamburgerNavLink = document.querySelector('.nav-link.icon');
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

hamburgerNavLink.addEventListener('click', toggleNavbar);
navLinks.forEach(n => n.addEventListener('click', closeNavOnClick)); // close navbar when any link is clicked

// update age dynamically
window.addEventListener('load', updateAge);

// dynamic project load
const url =
	'https://raw.githubusercontent.com/prtvi/prtvi.github.io/master/allprojects.json';

function getProjectDomLi(project) {
	const p = document.createElement('p');
	p.textContent = project.desc;
	const h4 = document.createElement('h4');
	h4.textContent = project.title;

	const a = document.createElement('a');
	a.target = '_blank';

	if (project.is_hosted) a.href = project.hosted_url;
	else a.href = project.repo_url;

	a.appendChild(h4);
	a.appendChild(p);

	const div = document.createElement('div');
	div.appendChild(a);

	const li = document.createElement('li');
	li.classList.add('project');
	li.appendChild(div);

	return li;
}

fetch(url)
	.then(res => res.json())
	.then(data => {
		const ul = document.querySelector('ul.project-list');
		for (let i = 0; i < data.meta.n_items_for_p1; i++)
			ul.appendChild(getProjectDomLi(data.projects[i]));
	});
