import React from "react";
import DatePicker02 from "../../../components/Picker/DatePicker02";

const SignUpStep3Page = () => {
  return (
    <div className="step_wrapper">
      <h2 className="step_h2"> *의료진 정보 등록</h2>

      <div className="step_3_item_wrapper">
        <div className="step_3_wrapper">
          <h3 className="step_h3">이름</h3>

          <div className="step_3_input_wrapper">
            <input className="step_3_input_name" />

            <button className="btn_approve_empty btn_small">추가</button>
          </div>
        </div>

        <div className="step_license_wrapper">
          <h3 className="step_h3">면허 번호</h3>

          <div className="step_license_input_wrapper">
            <input className="step_3_input_license" />
            <DatePicker02 placeholder={"취득일을 입력하세요."} />
          </div>
        </div>
      </div>

      <div>
        <div className="step_3_wrapper">
          <h3 className="step_h3">이름</h3>

          <div className="step_3_input_wrapper">
            <input className="step_3_input_name" />

            <div className="step_3_btn_wrapper">
              <button className="btn_cancel_empty btn_small">삭제</button>
              <button className="btn_approve_empty btn_small">추가</button>
            </div>
          </div>
        </div>

        <div className="step_license_wrapper">
          <h3 className="step_h3">면허 번호</h3>

          <div className="step_license_input_wrapper">
            <input className="step_3_input_license" />
            <DatePicker02 placeholder={"취득일을 입력하세요."} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpStep3Page;
