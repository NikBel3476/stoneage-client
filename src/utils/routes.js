import {Navigate} from "react-router-dom";
import {routerPaths} from "./routerPaths";
import Login from "../components/Login";
import Sign from "../components/Sign";
import Game from "../components/Game";

export const routes = [
	{
		path: routerPaths.any,
		component: <Navigate to={routerPaths.login} />
	},
	{
		path: routerPaths.login,
		component: <Login />
	},
	{
		path: routerPaths.registration,
		component: <Sign />
	},
	{
		path: routerPaths.game,
		component: <Game />
	}
];
