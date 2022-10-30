import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route
						index
						element={
							<main>
								<Home />
								<Skills />
								<Projects />
								<Contacts />
							</main>
						}
					/>
					<Route path="/v2" element={<div>this will be v2</div>} />

					<Route path="*" element={<div></div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
