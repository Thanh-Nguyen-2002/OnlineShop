import {useRoutes, Navigate } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

const AppRoutes = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const role = user?.role;

    if(!user || !role) {
        return useRoutes([
            ...publicRoutes,
            {path: "*", element: <Navigate to="/login" />}
        ]);
    }

    const routes = [
        ...(publicRoutes || []),
        ...(privateRoutes[role] || []),
        { path: "*", element: <Navigate to="/" /> }
    ];
    return useRoutes(routes);
};


export default AppRoutes;