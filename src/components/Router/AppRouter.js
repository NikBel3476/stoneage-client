import React from 'react';
import {routes} from "../../utils/routes";
import {Routes, Route} from "react-router-dom";

const AppRouter = () => {
	return (
		<Routes>
			{routes.map(route =>
				<Route path={route.path} element={route.component} key={route.path}/>
			)}
		</Routes>
	);
};

export default AppRouter;
