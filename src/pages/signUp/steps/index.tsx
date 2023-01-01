import React from "react";
import ProcessBar from "../../../components/ProcessBar";
import SignUpStep1Page from "./step1";
import SignUpStep2Page from "./step2";
import SignUpStep3Page from "./step3";
import "../../../styles/pages/steps.scss";
import { Link } from "react-router-dom";

const SignUpStepsPage = () => {
  return (
    <div className="steps_container">
      <h1 className="step_h1">병원 정보 등록</h1>

      <div className="create_info_wrapper">
        <div className="process_wrapper">
          <ProcessBar />
        </div>

        <div className="steps_wrapper">
          <div>
            <SignUpStep1Page />
            <SignUpStep2Page />
            <SignUpStep3Page />
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
      </div>
    </div>
  );
};

export default SignUpStepsPage;
