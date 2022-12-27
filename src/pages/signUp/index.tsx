import React from "react";
import "../../styles/signUp.scss";

export default function SignUpPage() {
  return (
    <div className="container">
      <img className="logo" src="/images/logo/logo-v3.png" alt="로고 이미지" />
      <h1 className="title">회원가입</h1>

      <div className="wrapper">
        <div>
          <input placeholder="admin@hospetal.com" type="이메일" />
          <button className="btn btn_approve">인증하기</button>
        </div>
        <div className="error">에러메세지</div>

        <div className="input_wrapper">
          <input placeholder="******" type="password" />
          <img
            className="icon eye"
            src="/images/icons/eye.png"
            alt="비밀번호 숨기기"
          />
        </div>
        <div className="error">에러메세지</div>

        <div className="input_wrapper">
          <input placeholder="******" type="password" />
          <img
            className="icon eye"
            src="/images/icons/eye-disable.png"
            alt="비밀번호 보기"
          />
        </div>
        <div className="error">에러메세지</div>

        <button className="btn btn_next">다음 단계로 이동</button>
      </div>
    </div>
  );
}
