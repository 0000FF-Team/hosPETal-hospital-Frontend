import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/signup.scss";
import { useState } from "react";

const SignUpPage = () => {
  const [isVisiblePwd, setIsVisiblePwd] = useState(false);
  const [isVisiblePwdCheck, setIsVisiblePwdCheck] = useState(false);

  const onClickVisiblePwd = () => {
    setIsVisiblePwd((prev) => !prev);
  };

  const onClickVisiblePwdCheck = () => {
    setIsVisiblePwdCheck((prev) => !prev);
  };

  const onClickAuthenticate = () => {
    alert("이메일이 전송되었습니다. 인증을 완료해주세요.");
  };

  return (
    <div className="container">
      <img className="logo" src="/images/logo/logo-v3.png" alt="로고 이미지" />
      <h1 className="signup_h1">회원 정보 등록</h1>

      <div className="signup_wrapper">
        <div>
          <input autoFocus placeholder="admin@hospetal.com" type="이메일" />
          <button onClick={onClickAuthenticate} className="btn btn_approve">
            인증하기
          </button>
        </div>
        <div className="error">에러메세지</div>

        <div className="input_wrapper">
          <input type={isVisiblePwd ? "" : "password"} placeholder="비밀번호" />
          {isVisiblePwd ? (
            <img
              onClick={onClickVisiblePwd}
              className="icon eye"
              src="/images/icons/eye-disable.png"
              alt="비밀번호 보기"
            />
          ) : (
            <img
              onClick={onClickVisiblePwd}
              className="icon eye"
              src="/images/icons/eye.png"
              alt="비밀번호 보기"
            />
          )}
        </div>
        <div className="error">에러메세지</div>

        <div className="input_wrapper">
          <input
            type={isVisiblePwdCheck ? "" : "password"}
            placeholder="비밀번호 확인"
          />
          {isVisiblePwdCheck ? (
            <img
              onClick={onClickVisiblePwdCheck}
              className="icon eye"
              src="/images/icons/eye-disable.png"
              alt="비밀번호 보기"
            />
          ) : (
            <img
              onClick={onClickVisiblePwdCheck}
              className="icon eye"
              src="/images/icons/eye.png"
              alt="비밀번호 보기"
            />
          )}
        </div>
        <div className="error">에러메세지</div>

        <Link to={"/signup_steps"}>
          <button className="btn_next">다음 단계로 이동</button>
          {/* btn_disabled  */}
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
