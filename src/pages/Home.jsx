import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div class="App-header">
            <h1>로그인 페이지</h1>
            <input type="email" id="email" />
            <input type="password" id="password" />
            <div>
                <button href="">로그인</button>
                <Link to="/signup">
                    <button>회원가입</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;