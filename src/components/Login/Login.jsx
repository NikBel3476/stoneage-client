import React, {useReducer, useRef, useState} from 'react';
import {Button} from 'react-bootstrap';
import {Navigate} from 'react-router-dom';
import Header from '../Header/Header'
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import ViewSvg from '../../images/view.svg';
import noViewSvg from '../../images/no-view.svg';
import server from "../../modules/Server";

const formInitialState = {
	login: '',
	password: ''
}

const formActions = {
	login: 'login',
	password: 'password'
}

const formReducer = (state, action) => {
	switch(action.type) {
		case formActions.login:
			return { ...state, login: action.payload };
		case formActions.password:
			return { ...state, password: action.payload };
		default:
			return state;
	}
}

const Login = () => {
	const [passwordVisibilityImage, setPasswordVisibilityImage] = useState(ViewSvg);
	const [canRedirect, setCanRedirect] = useState(false);

	const [state, dispatch] = useReducer(formReducer, formInitialState);

	const passwordInputRef = useRef(null);

	const auth = async (event) => {
		event.preventDefault();
		const result = await server.login(state.login, state.password);
		setCanRedirect(result ?? false);
	}

	const changePasswordVisibility = () => {
		if (passwordInputRef.current.type === 'password') {
			passwordInputRef.current.setAttribute('type', 'text');
			setPasswordVisibilityImage(noViewSvg);
		} else {
			passwordInputRef.current.setAttribute('type', 'password');
			setPasswordVisibilityImage(ViewSvg);
		}
	}

	const handleLoginInputChange = (event) => {
		dispatch({ type: formActions.login, payload: event.target.value });
	}

	const handlePasswordInputChange = (event) => {
		dispatch({ type: formActions.password, payload: event.target.value });
	}

	if (canRedirect) {
		return <Navigate to='/game'/>
	}

	return (
		<div>
			<Header/>
			<div className="container mt-5">
				<div className="col-sm-4 mx-auto">
					<form>
						<div>
							<h2>Вход</h2>
							<div className="form-group">
								<label htmlFor="login">Логин</label>
								<input
									type="text"
									className="form-control mb-2"
									id="login"
									value={state.login}
									onChange={event => handleLoginInputChange(event)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Пароль</label>
								<div className="passwordLog">
									<input
										ref={passwordInputRef}
										className="form-control"
										id="password"
										type="password"
										value={state.password}
										onChange={event => handlePasswordInputChange(event)}
									/>
									{ /* eslint-disable-next-line */ }
									<a
										href="#"
										className="password-show"
										onClick={() => changePasswordVisibility()}
									>
										<img id="view-eye" src={passwordVisibilityImage} alt={"password visibility"}/>
									</a>
								</div>
							</div>
							<Button
								disabled={!(state.login && state.password)}
								type="submit"
								className="btn btn-success btn-block mt-3"
								onClick={event => auth(event)}
							>
								Войти
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
