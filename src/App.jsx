import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import V1 from './V1/V1';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<V1 />} />

					<Route path="/v2" element={<div>v2</div>} />

					<Route path="*" element={<div></div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
