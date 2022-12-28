import React from "react";
import { ProcessBarPage } from "./processBar";
import SignUpStep1Page from "./step1";
import SignUpStep2Page from "./step2";
import SignUpStep3Page from "./step3";

export default function SignUpStepsPage() {
  return (
    <div>
      <h1>병원 정보 등록</h1>
      <div className="steps_wrapper">
        <ProcessBarPage />

        <div>
          <SignUpStep1Page />
          <SignUpStep2Page />
          <SignUpStep3Page />
        </div>
      </div>
    </div>
  );
}
