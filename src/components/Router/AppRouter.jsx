import React from 'react';
import {routes} from "../../utils/routes";
import {Routes, Route, Navigate} from "react-router-dom";
import {routerPaths} from "../../utils/routerPaths.js";

const AppRouter = () => {
	return (
		<Routes>
			{routes.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />} />
			)}
			<Route path='/*' element={<Navigate to={routerPaths.login} />} />
		</Routes>
	);
};

export default AppRouter;
