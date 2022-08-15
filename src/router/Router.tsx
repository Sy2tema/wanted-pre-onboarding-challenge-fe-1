import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../auth/Auth";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Todo from "../pages/Todo";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/todo" element={<Todo />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;