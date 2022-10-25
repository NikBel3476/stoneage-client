import {Navigate} from "react-router-dom";
import {routerPaths} from "./routerPaths";
import Login from "../components/Login";
import Registration from "../components/Registration";
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
		component: <Registration />
	},
	{
		path: routerPaths.game,
		component: <Game />
	}
];
