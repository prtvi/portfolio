import React from 'react';
import './V2.css';

import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Resume from './Resume/Resume';
import Portfolio from './Portfolio/Portfolio';

// pages
// about, resume, portfolio

export default function V2() {
	const [activePage, updateActivePage] = React.useState('about');

	const getIfActive = (activePage, page) =>
		activePage === page ? 'active' : '';

	return (
		<main>
			<Sidebar />
			<div className="main-content">
				<Navbar updateActivePage={updateActivePage} />
				<About isActive={getIfActive(activePage, 'about')} />
				<Resume isActive={getIfActive(activePage, 'resume')} />
				<Portfolio isActive={getIfActive(activePage, 'portfolio')} />
			</div>
		</main>
	);
}
