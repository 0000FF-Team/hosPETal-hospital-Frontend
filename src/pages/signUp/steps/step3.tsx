import styled from "@emotion/styled";
import React from "react";
import BasicDatePicker from "../../../components/DatePicker";

export default function SignUpStep3Page() {
  return (
    <div className="step_wrapper">
      <h2 className="step_h2"> *의료진 정보 등록</h2>

      <div className="step_3_item_wrapper">
        <div className="step_input_wrapper">
          <h3 className="step_h3">이름</h3>
          <input className="step_3_input" />
        </div>

        <div className="step_input_wrapper">
          <h3 className="step_h3">면허 번호</h3>
          <input className="step_3_input" />
        </div>

        <div className="step_input_wrapper">
          <h3 className="step_h3">취득일</h3>

          <div className="step_date_wrapper">
            <BasicDatePicker />

            <button className="btn_add">추가</button>
          </div>
        </div>
      </div>

      <div>
        <div className="step_input_wrapper">
          <h3 className="step_h3">이름</h3>
          <input className="step_3_input" />
        </div>

        <div className="step_input_wrapper">
          <h3 className="step_h3">면허 번호</h3>
          <input className="step_3_input" />
        </div>

        <div className="step_input_wrapper">
          <h3 className="step_h3">취득일</h3>

          <div className="step_date_wrapper">
            <BasicDatePicker />

            <div className="step_3_btn_wrapper">
              <button className="btn_delete">삭제</button>
              <button className="btn_add">추가</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
