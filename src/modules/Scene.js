import img from '../Sprites/SpritesMap.png'
import Canvas from './Canvas.js'
import server from "./Server";

export default class Scene {
	constructor() {
		this.server = server;
		this.img = new Image();
		this.img.src = img;
	}

	init(canvas) {
		this.canvas = new Canvas(this.img, canvas);
		this.updateScene();
	}

	map = {};
	update = setInterval(() => {
		this.updateScene()
	}, 300);

	clInterval() {
		delete this.canvas;
		delete this.map;
		clearInterval(this.update);
	}

	async updateScene() {
		this.map = await this.server.checkHash();
		if (this.map && this.map.gamer) {
			this.gamer = this.map.gamer;
			this.canvas.drawMap(this.map, this.gamer);
			this.canvas.drawItem(this.map, this.gamer);
			this.canvas.drawGamers(this.map, this.gamer);
			this.canvas.drawGamer(this.gamer);
		}
	}

	click(event) {
		this.canvas.click(event);
	}
}
