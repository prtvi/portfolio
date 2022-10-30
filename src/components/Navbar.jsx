import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
	const [navOpen, toggleNavOpen] = React.useState(false);

	const toggleNavbar = () => toggleNavOpen(curr => !curr);
	const ifNavOpen = () => (navOpen ? 'toggle' : '');

	const closeNav = e => {
		if (e.target.classList.contains('toggle')) toggleNavbar();
	};

	return (
		<>
			<nav className={`navbar ${ifNavOpen()}`}>
				<Link
					to="#home"
					onClick={closeNav}
					className={`nav-link ${ifNavOpen()}`}
				>
					Home
				</Link>

				<Link
					to="#skills"
					onClick={closeNav}
					className={`nav-link ${ifNavOpen()}`}
				>
					Skills
				</Link>

				<Link
					to="#projects"
					onClick={closeNav}
					className={`nav-link ${ifNavOpen()}`}
				>
					Projects
				</Link>

				<Link to="/v2" onClick={closeNav} className={`nav-link ${ifNavOpen()}`}>
					Portfolio
				</Link>

				<Link
					to="#contact"
					onClick={closeNav}
					className={`nav-link ${ifNavOpen()}`}
				>
					Contact
				</Link>

				<Link className={`nav-link icon ${ifNavOpen()}`} onClick={toggleNavbar}>
					<div className="hamburger-cont">
						<div className={`hamburger ${ifNavOpen()}`}>
							<div className="line1"></div>
							<div className="line2"></div>
							<div className="line3"></div>
						</div>
					</div>
				</Link>
			</nav>

			<Outlet />
		</>
	);
}
