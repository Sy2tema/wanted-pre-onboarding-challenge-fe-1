import axios from 'axios';
import React, { HtmlHTMLAttributes, useCallback } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from "../components/auth/Auth";
import Router from '../router/Router';
import { BASE_URL } from "../config/properties";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // 유효성 검사
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);
    const navigate = useNavigate();

    // 제출 버튼이 눌렸을 경우 API를 호출
    // useCallback함수를 이용해 onSubmit을 재사용한다
    const handleSubmit = useCallback(
        async(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log(event.target);
            try {
                await axios
                    .post(`${BASE_URL}/users/create`, {
                        email: email,
                        password: password,
                    })
                    .then((response) => {
                        // 상태값이 200이면 정상적으로 응답을 수신했다는 뜻
                        // 서버에 이미 있는 이메일일 경우 홈으로 돌아가지 않도록 처리ㅌ
                        if (response.status === 200) {
                            console.log(response);
                            navigate("/");
                        }
                    });
            } catch(err) {
                console.error(err);
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            }
    }, [email, password, confirmPassword]);

    // 이메일 유효성 검사
    const onChangeEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        // 이메일 유효성 검사를 위한 정규식
        // @와 .을 반드시 포함해야 한다
        const emailRegex = /\w+@\w+[.]+([.\w])+/;
        const emailValue = event.target.value;
        setEmail(emailValue);

        // test함수를 이용해 입력값이 정규식 조건에 맞는지 확인
        if (!emailRegex.test(emailValue)) {
            console.log("이메일 형식 불일치");
            setIsEmail(false);
        } else {
            console.log("올바른 이메일 형식");
            setIsEmail(true);
        }
    }, []);

    // 비밀번호 유효성 검사
    const onChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        // 비밀번호 유효성 검사를 위한 정규식
        // 최소한 8글자가 되어야 한다
        const passwordRegex = /[\w#?!@$ %^&*-]{8,}/;
        const passwordValue = event.target.value;
        setPassword(passwordValue);

        if (!passwordRegex.test(passwordValue)) {
            console.log("비밀번호 형식 불일치");
            setIsPassword(false);
        } else {
            console.log("올바른 비밀번호 형식");
            setIsPassword(true);
        }
    }, []);

    // 비밀번호 재확인
    const onChangeConfirmPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const confirmPasswordValue = event.target.value;
        setConfirmPassword(confirmPasswordValue);
        console.log(`${password} | ${confirmPasswordValue}`);

        if (password === confirmPasswordValue) {
            console.log("비밀번호 일치");
            setIsConfirmPassword(true);
        } else {
            console.log("비밀번호 불일치");
            setIsConfirmPassword(false);
        }
    }, [password]);

    return (
        <>
            <form className="App-header" onSubmit={handleSubmit}>
                <h1>회원가입</h1>
                <div>
                    <input id="email" type="email" value={email} onChange={onChangeEmail} />
                </div>
                <div>
                    <input id="password" type="password" value={password} onChange={onChangePassword} />
                </div>
                <div>
                    <input id="confirmPassword" type="password" value={confirmPassword} onChange={onChangeConfirmPassword} />
                </div>
                <section>
                    <button
                        type="submit"
                        disabled={!(isEmail && isPassword && isConfirmPassword)}
                    >제출</button>
                </section>
            </form>
        </>
    );
};

export default SignUp;