import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/login.scss";

export default function LoginPage() {
  return (
    <div className="container">
      <img className="logo" src="/images/logo/logo-v3.png" alt="로고 이미지" />
      <div className="login_input_wrapper">
        <input placeholder="이메일" type="email" />
        <div className="error">에러메세지</div>

        <input placeholder="비밀번호" type="password" />
        <div className="error"> 에러메세지</div>
      </div>

      <button className="btn_login">로그인하기</button>

      <Link to={"/signup"}>
        <button className="btn_empty">회원가입하기</button>
      </Link>
    </div>
  );
}
