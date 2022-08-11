import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from "../components/auth/Auth";

const SignUp = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [token, setToken] = useState<string>("");

    // 제출 버튼이 눌렸을 경우 API를 호출
    const onSubmit = (value) = {
        Auth();
    }

    const onChangeEmail = () => {

    }

    // 회원가입
    const signUp = () => {
        
    };

    // 이메일 및 비밀번호 유효성 검사



    return (
        <>
            <div className="App-header">
                <h1>회원가입</h1>
                <form className="auth" method="post" action="/users/create" onSubmit={onSubmit}>
                    <input type="email" id="email" />
                    <input type="password" id="password" />
                </form>
                <Link to="/">
                    <button>제출</button>
                </Link>
            </div>
        </>
    );
};

export default SignUp;