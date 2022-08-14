import axios from 'axios';
import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from '../config/properties';

const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // 서버에서 입력한 이메일과 비밀번호가 서버에 있는지 확인하는 함수
    const handleSubmit = useCallback(
        async(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            try {
                await axios
                    .post(`${BASE_URL}/users/login`, {
                        email,
                        password,
                    })
                    .then((response) => {
                        // Todo
                        // 로그인 성공시 localStorage에 수신된 토큰값 넣어주기
                        if (response.status === 200) {
                            console.log(response);
                            navigate("/todo");
                        }
                    });
            } catch (err) {
                console.error(err);
            }
        }, [email, password]);
    
    const onChangeEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = event.target.value;
        console.log(emailValue);
        setEmail(emailValue);
    }, [email]);

    const onChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const passwordValue = event.target.value;
        console.log(passwordValue);
        setPassword(passwordValue);
    }, [password]);

    return (
        <div className="App-header">
            <h1>로그인 페이지</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" id="email" value={email} onChange={onChangeEmail} />
                </div>
                <div>
                    <input type="password" id="password" value={password} onChange={onChangePassword} />
                </div>
                <div>
                    <button
                        type="submit"
                    >로그인</button>
                    <Link to="/signup">
                        <button>회원가입</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Home;