import React, { useCallback } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from "../components/auth/Auth";

const SignUp = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [token, setToken] = useState<string>("");

    // 유효성 검사
    const [isEmail, setIsEmail] = useState<boolean>(false);
    const [isPassword, setIsPassword] = useState<boolean>(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false);

    // 제출 버튼이 눌렸을 경우 API를 호출
    // useCallback함수를 이용해 onSubmit을 재사용한다
    const onSubmit = ()=>{};
    // const onSubmit = useCallback(
    //     async (event: React.FormEvent<HTMLFormElement>) => { 
    //         event.preventDefault();
    //         try {
    //             // exios사용해 서버와 연결
    //             await 

    //         } catch(err) {
    //             console.error(err);
    //         }
    //     },
    //     [email, password]
    // );

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
        const passwordRegex = /\w#?!@$ %^&*-]{8,}/;
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

        if (password === confirmPassword) {
            console.log("비밀번호 일치");
            setIsConfirmPassword(true);
        } else {
            console.log("비밀번호 불일치");
            setIsConfirmPassword(false);
        }
    }, [password]);

    return (
        <>
            <form className="App-header" onSubmit={onSubmit}>
                <h1>회원가입</h1>
                <div>
                    <input id="email" type="email" onChange={onChangeEmail} />
                </div>
                <div>
                    <input id="password" type="password" onChange={onChangePassword} />
                </div>
                <div>
                    <input id="confirmPassword" type="password" onChange={onChangeConfirmPassword} />
                </div>
                <section>
                    <button
                        type="submit"
                        disabled={!(isEmail && isPassword && isConfirmPassword)}
                    >회원가입</button>
                </section>
            </form>
        </>
    );
};

{/* <div className="App-header">
                <h1>회원가입</h1>
                <form className="auth" method="post" action="/users/create" onSubmit={onSubmit}>
                    <input type="email" id="email" />
                    <input type="password" id="password" />
                </form>
                <Link to="/">
                    <button>제출</button>
                </Link>
            </div> */}
export default SignUp;