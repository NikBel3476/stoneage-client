import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import AppRouter from "./components/Router";

const App = () => {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
