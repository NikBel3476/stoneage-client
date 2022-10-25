import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<header className="navbar">
			<h1 className="h2">Stone Age</h1>
			<div>
					<Link to='/login' type="button" className="btn btn-success m-1">
						Вход
					</Link>
					<Link to='/registration' type="button" className="btn btn-primary m-1">
						Регистрация
					</Link>
			</div>
		</header>
	)
}

export default Header;
