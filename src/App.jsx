import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import V1 from './V1/V1';
import V2 from './V2/V2';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<></>} />
					<Route path="*" element={<></>} />
				</Route>

				<Route path="/v2">
					<Route index element={<V2 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
