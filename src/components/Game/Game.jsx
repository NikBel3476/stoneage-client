import React from 'react';
import Scene from '../../modules/Scene.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Game.css';
import server from "../../modules/Server";
import {Link} from "react-router-dom";

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.server = server;
		this.canvasRef = React.createRef();
	}

	async componentDidMount() {
		this.scene = new Scene(this.server, this.canvasRef.current);
		await this.server.getMap();
	}

	handleLogoutButtonClick() {
		this.sendRequest('logout');
		this.scene.clInterval();
		delete this.scene;
	}

	handleCanvasClick(event) {
		this.scene.click(event.nativeEvent);
	}

	async sendRequest(method) {
		if (method && typeof method === 'string') {
			switch (method) {
				case 'logout':
					await this.server.logout(localStorage.getItem('token'));
					break;
				case 'takeItem':
					await this.server.takeItem();
					break;
				case 'dropItem':
					await this.server.dropItem('right');
					break;
				case 'putOn':
					await this.server.putOn();
					break;
				case 'putOnBackpack':
					await this.server.putOnBackpack();
					break;
				case 'repair':
					await this.server.repair();
					break;
				case 'fix':
					await this.server.fix();
					break;
				case 'eat':
					await this.server.eat();
					break;
				case 'makeItem':
					await this.server.makeItem();
					break;
				case 'makeBuilding':
					await this.server.makeBuilding();
					break;
				case 'keepBuilding':
					await this.server.keepBuilding();
					break;
				default:
					break;
			}
		}
	}

	render() {
		return (
			<div>
				<div className="navbar">
					<div className="h2">Stone Age</div>
					<div>
						<Link
							to='/login'
							onClick={() => this.handleLogoutButtonClick()}
							className="logout-button btn btn-primary"
						>
							Выход
						</Link>
					</div>
				</div>
				<div>
					<canvas
						id="canvas"
						ref={this.canvasRef}
						onClick={event => this.handleCanvasClick(event)}
					/>
				</div>
				<div className="buttons">
					<button className="interface-button" onClick={() => this.sendRequest('takeItem')}>
						Подобрать предмет
					</button>
					<button className="interface-button" onClick={() => this.sendRequest('dropItem')}>
						Выложить предмет
					</button>
					<button className="interface-button" onClick={() => this.sendRequest('putOn')}>
						Надеть
					</button>
					<button className="interface-button" onClick={() => this.sendRequest('putOnBackpack')}>
						Положить в рюкзак
					</button>
					<button className="interface-button" onClick={() => this.sendRequest('repair')}>
						Починить
					</button>
					<button className="interface-button" onClick={() => this.sendRequest('fix')}>
						Отремонтировать
					</button>
					<button className="interface-button" onClick={() => this.sendRequest('eat')}>
						Поесть
					</button>
					<button className="interface-button" onClick={() => this.sendRequest('makeItem')}>
						Сделать предмет
					</button>
					<button className="interface-button" onClick={() => this.sendRequest('makeBuilding')}>
						Построить
					</button>
					<button className="interface-button" onClick={() => this.sendRequest('keepBuilding')}>
						Продолжить стройку
					</button>
				</div>
			</div>
		);
	}
}

export default Game;
