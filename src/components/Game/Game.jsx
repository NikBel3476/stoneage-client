import React, {useEffect, useRef} from 'react';
import Scene from '../../modules/Scene.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Game.css';
import server from "../../modules/Server";
import {Link} from "react-router-dom";

const Game = () => {
	const canvasRef = useRef();
	const sceneRef = useRef(new Scene(canvasRef.current));

	useEffect(() => {
		sceneRef.current.init(canvasRef.current);
		server.getMap()
	}, []);

	const handleLogoutButtonClick = () => {
		sendRequest('logout');
		sceneRef.current.clInterval();
	}

	const handleCanvasClick = (event) => {
		sceneRef.current.click(event.nativeEvent);
	}

	const sendRequest = async (method) => {
		if (method && typeof method === 'string') {
			switch (method) {
				case 'logout':
					await server.logout(localStorage.getItem('token'));
					break;
				case 'takeItem':
					await server.takeItem();
					break;
				case 'dropItem':
					await server.dropItem('right');
					break;
				case 'putOn':
					await server.putOn();
					break;
				case 'putOnBackpack':
					await server.putOnBackpack();
					break;
				case 'repair':
					await server.repair();
					break;
				case 'fix':
					await server.fix();
					break;
				case 'eat':
					await server.eat();
					break;
				case 'makeItem':
					await server.makeItem();
					break;
				case 'makeBuilding':
					await server.makeBuilding();
					break;
				case 'keepBuilding':
					await server.keepBuilding();
					break;
				default:
					break;
			}
		}
	}

	return (
		<div>
			<div className="navbar">
				<div className="h2">Stone Age</div>
				<div>
					<Link
						to='/login'
						onClick={() => handleLogoutButtonClick()}
						className="logout-button btn btn-primary"
					>
						Выход
					</Link>
				</div>
			</div>
			<div>
				<canvas
					id="canvas"
					ref={canvasRef}
					onClick={event => handleCanvasClick(event)}
				/>
			</div>
			<div className="buttons">
				<button className="interface-button" onClick={() => sendRequest('takeItem')}>
					Подобрать предмет
				</button>
				<button className="interface-button" onClick={() => sendRequest('dropItem')}>
					Выложить предмет
				</button>
				<button className="interface-button" onClick={() => sendRequest('putOn')}>
					Надеть
				</button>
				<button className="interface-button" onClick={() => sendRequest('putOnBackpack')}>
					Положить в рюкзак
				</button>
				<button className="interface-button" onClick={() => sendRequest('repair')}>
					Починить
				</button>
				<button className="interface-button" onClick={() => sendRequest('fix')}>
					Отремонтировать
				</button>
				<button className="interface-button" onClick={() => sendRequest('eat')}>
					Поесть
				</button>
				<button className="interface-button" onClick={() => sendRequest('makeItem')}>
					Сделать предмет
				</button>
				<button className="interface-button" onClick={() => sendRequest('makeBuilding')}>
					Построить
				</button>
				<button className="interface-button" onClick={() => sendRequest('keepBuilding')}>
					Продолжить стройку
				</button>
			</div>
		</div>
	);
}

export default Game;
