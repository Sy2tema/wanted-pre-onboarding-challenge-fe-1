import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../components/auth/Auth";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;