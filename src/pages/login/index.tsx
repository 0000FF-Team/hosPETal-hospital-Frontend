import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/login.scss";

const LoginPage = () => {
  const handleLogin = (e: any) => {
    if (e.key === "Enter") {
      alert("로그인되었습니다");
    }
  };
  return (
    <div className="container">
      <img className="logo" src="/images/logo/logo-v3.png" alt="로고 이미지" />
      <div className="login_input_wrapper">
        <input placeholder="이메일" type="email" autoFocus />
        <div className="error">에러메세지</div>

        <input onKeyUp={handleLogin} placeholder="비밀번호" type="password" />
        <div className="error"> 에러메세지</div>
      </div>

      <button onClick={handleLogin} className="btn_login">
        로그인하기
      </button>

      <Link to={"/signup"}>
        <button className="btn_empty">회원가입하기</button>
      </Link>
    </div>
  );
};

export default LoginPage;
