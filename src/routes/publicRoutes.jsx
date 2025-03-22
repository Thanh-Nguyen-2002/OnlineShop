import React from "react";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const publicRoutes = [
    {
        path :"/",
        element : <Login />
    },
    {
        path :"/register",
        element : <Register/>
    }
];

export default publicRoutes;