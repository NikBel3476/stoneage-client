import React from 'react';
import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import Login from './components/Login/login'
import Sign from './components/Sign/sign'
import Game from './components/Game/Game';
import './App.css';
import Server from './modules/Server.js';

const App = () => {
	const server = new Server();

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login server={server}/>}/>
				<Route path='/registration' element={<Sign server={server}/>}/>
				<Route path='/game' element={<Game server={server}/>}/>
				<Route path='/*' element={<Navigate to='/login'/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
