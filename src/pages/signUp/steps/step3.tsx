import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import BasicDatePicker from "../../../components/Picker/DatePicker";

export default function SignUpStep3Page() {
  return (
    <div className="step_wrapper">
      <h2 className="step_h2"> *의료진 정보 등록</h2>

      <div className="step_3_item_wrapper">
        <div className="step_3_wrapper">
          <h3 className="step_h3">이름</h3>

          <div className="step_3_input_wrapper">
            <input className="step_3_input_name" />

            <button className="btn_add">추가</button>
          </div>
        </div>

        <div className="step_license_wrapper">
          <h3 className="step_h3">면허 번호</h3>

          <div className="step_license_input_wrapper">
            <input className="step_3_input_license" />
            <BasicDatePicker />
          </div>
        </div>
      </div>

      <div>
        <div className="step_3_wrapper">
          <h3 className="step_h3">이름</h3>

          <div className="step_3_input_wrapper">
            <input className="step_3_input_name" />

            <div className="step_3_btn_wrapper">
              <button className="btn_delete">삭제</button>
              <button className="btn_add">추가</button>
            </div>
          </div>
        </div>

        <div className="step_license_wrapper">
          <h3 className="step_h3">면허 번호</h3>

          <div className="step_license_input_wrapper">
            <input className="step_3_input_license" />
            {/* <div className="date_wrapper"> */}
            {/* <h3 className="step_h3_date">취득일</h3> */}
            <BasicDatePicker />
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="step_btn_wrapper">
        <Link to={"/signup"}>
          <button className="btn_empty btn_go_back">
            회원 정보 등록으로 돌아가기
          </button>
        </Link>

        <Link to={"/main"}>
          <button className="btn_submit">병원 정보 등록하기</button>
        </Link>
      </div>
    </div>
  );
}
