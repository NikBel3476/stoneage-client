import {routerPaths} from "./routerPaths";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Game from "../components/Game";

export const routes = [
	{
		path: routerPaths.login,
		Component: Login
	},
	{
		path: routerPaths.registration,
		Component: Registration
	},
	{
		path: routerPaths.game,
		Component: Game
	}
];
