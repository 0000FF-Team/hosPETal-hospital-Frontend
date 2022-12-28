import React from "react";
import "../../../styles/signUpSteps.scss";

export default function SignUpStep1Page() {
  return (
    <div className="step_wrapper">
      <h2> *병원 기본 정보 등록</h2>

      <div className="step_input_wrapper">
        <h3>*병원명</h3>
        <input />
      </div>

      <div className="step_input_wrapper">
        <h3>병원 소개</h3>
        <input />
      </div>

      <div className="step_input_wrapper">
        <h3>*전화</h3>
        <input />
      </div>

      <div className="step_input_wrapper">
        <h3>*소재지</h3>
        <div>
          <button>검색하기</button> <input />
        </div>

        <input />
      </div>

      <div className="step_input_wrapper">
        <h3>태그</h3>
        <input />
      </div>

      <div className="step_input_wrapper">
        <h3>병원 사진</h3>
        <input type="file" />
      </div>
    </div>
  );
}
