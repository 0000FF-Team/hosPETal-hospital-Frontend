import React from "react";
import ProcessBar from "../../../components/ProcessBar";
import SignUpStep1Page from "./step1";
import SignUpStep2Page from "./step2";
import SignUpStep3Page from "./step3";
import "../../../styles/pages/steps.scss";

export default function SignUpStepsPage() {
  return (
    <div className="steps_container">
      <h1 className="step_h1">병원 정보 등록</h1>
      <div className="steps_wrapper">
        <div className="process_wrapper">
          <ProcessBar />
        </div>

        <div>
          <SignUpStep1Page />
          <SignUpStep2Page />
          <SignUpStep3Page />
        </div>
      </div>
    </div>
  );
}
