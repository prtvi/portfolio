import React from 'react';
import './V1.css';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';

export default function V1() {
	return (
		<>
			<Navbar />
			<main>
				<Home />
				<Skills />
				<Projects />
				<Contacts />
			</main>
		</>
	);
}
