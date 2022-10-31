import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
	const { updateActivePage } = props;

	const [activeNavLink, updateActiveNavLink] = React.useState('about');

	const getIfActive = (activeLink, link) =>
		activeLink === link ? 'active' : '';

	const changePage = function (e) {
		const activeNav = e.target.dataset.navLink;

		updateActivePage(activeNav);
		updateActiveNavLink(activeNav);
	};

	return (
		<nav className="navbar">
			<ul className="navbar-list">
				<li className="navbar-item">
					<button
						className={`navbar-link ${getIfActive(activeNavLink, 'about')}`}
						data-nav-link="about"
						onClick={changePage}
					>
						About
					</button>
				</li>

				<li className="navbar-item">
					<button
						className={`navbar-link ${getIfActive(activeNavLink, 'resume')}`}
						data-nav-link="resume"
						onClick={changePage}
					>
						Resume
					</button>
				</li>

				<li className="navbar-item">
					<button
						className={`navbar-link ${getIfActive(activeNavLink, 'portfolio')}`}
						data-nav-link="portfolio"
						onClick={changePage}
					>
						Portfolio
					</button>
				</li>
			</ul>
		</nav>
	);
}
