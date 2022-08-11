import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="App-header">
            <h1>로그인 페이지</h1>
            <input type="email" id="email" />
            <input type="password" id="password" />
            <div>
                <Link to="/todo">
                    <button>로그인</button>
                </Link>
                <Link to="/signup">
                    <button>회원가입</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;