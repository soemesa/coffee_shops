import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route Component={Home} path="" /  >
        </BrowserRouter>
    )
}