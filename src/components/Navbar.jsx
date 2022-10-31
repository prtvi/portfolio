import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
	const [navOpen, toggleNavOpen] = React.useState(false);

	const toggleNavbar = () => toggleNavOpen(curr => !curr);
	const ifNavOpen = () => (navOpen ? 'toggle' : '');

	const closeNavAndScrollTo = e => {
		if (e.target.classList.contains('toggle')) toggleNavbar();

		const elementToScroll = document.getElementById(
			String(e.target.textContent).toLowerCase()
		);

		window.scrollTo({
			top: elementToScroll.offsetTop,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<nav className={`navbar ${ifNavOpen()}`}>
				<Link
					to="#home"
					onClick={closeNavAndScrollTo}
					className={`nav-link ${ifNavOpen()}`}
				>
					Home
				</Link>

				<Link
					to="#skills"
					onClick={closeNavAndScrollTo}
					className={`nav-link ${ifNavOpen()}`}
				>
					Skills
				</Link>

				<Link
					to="#projects"
					onClick={closeNavAndScrollTo}
					className={`nav-link ${ifNavOpen()}`}
				>
					Projects
				</Link>

				<Link
					to="/v2"
					onClick={closeNavAndScrollTo}
					className={`nav-link ${ifNavOpen()}`}
				>
					Portfolio
				</Link>

				<Link
					to="#contact"
					onClick={closeNavAndScrollTo}
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
