import React from "react";
import ImageUploadInput from "../../../components/Inputs/ImageUploadInput";

const SignUpStep1Page = () => {
  return (
    <div className="step_wrapper">
      <h2 className="step_h2"> 병원 기본 정보 등록</h2>

      <div className="step_input_wrapper">
        <h3 className="step_h3">*병원명</h3>
        <input placeholder="강남해피동물병원" className="step_input" />
      </div>

      <div className="step_top_input_wrapper">
        <h3 className="step_h3_top">병원 소개</h3>
        <textarea
          placeholder="오랜 임플란트 수술 경력을 가진 의료진의 풍부한 노하우로 정밀한 진단과 꼼꼼하게 진료해드립니다."
          className="signup_textarea"
        ></textarea>
      </div>

      <div className="step_input_wrapper">
        <h3 className="step_h3">*전화</h3>
        <div className="signup_number_wrapper">
          <input placeholder="02" className="signup_number" type="number" /> -{" "}
          <input placeholder="3456" className="signup_number" type="number" /> -{" "}
          <input placeholder="7890" className="signup_number" type="number" />
        </div>
      </div>

      <div className="step_top_input_wrapper">
        <h3 className="step_h3_top">*소재지</h3>

        <div className="step_input_column_wrapper">
          <div>
            <button className="btn_search">검색하기</button>{" "}
            <input placeholder="주소를 검색하세요" />
            {/* <input placeholder="14547" /> */}
          </div>
          <input placeholder="상세주소를 입력하세요" />
        </div>
      </div>

      <div className="step_input_wrapper">
        <h3 className="step_h3">태그</h3>
        <input placeholder="태그 입력 후 스페이스바를 눌러주세요" />
      </div>

      <div className="step_top_input_wrapper ">
        <h3 className="step_h3_top step_h3_img">병원 로고</h3>
        <ImageUploadInput />
      </div>

      <div className="step_top_input_wrapper ">
        <h3 className="step_h3_top step_h3_img">병원 사진</h3>
        <ImageUploadInput />
      </div>
    </div>
  );
};

export default SignUpStep1Page;
