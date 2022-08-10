import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from "../components/auth/Auth";

const SignUp = () => {
    const [email, setEmail] = useState();

    return (
        <div className="App-header">
            <h1>회원가입</h1>
            <input type="email" id="email" />
            <input type="password" id="password" />
            <Link to="/">
                <button>제출</button>
            </Link>
        </div>
    );
};

export default SignUp;