import React from "react";
import ImageMultipleUploadInput from "../../../components/Inputs/ImageMultipleUploadInput";
import { useState } from "react";
import DaumPostcode from "../../../components/DaumPostcode";
import { Tag } from "antd";

const SignUpStep1Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [tagArr, setTagArr] = useState<string[]>([]);

  const onClickSearchBtn = () => {
    setIsOpen((prev) => !prev);
  };

  const onKeyupTag = (e: any) => {
    if (e.key === " " && e.target.value !== "") {
      if (tagArr.filter((el) => el === e.target.value).length >= 1) {
        e.target.value = "";
        alert("이미 존재하는 태그입니다.");
        return;
      }
      setTagArr([...tagArr, e.target.value]);
      e.target.value = "";
    }
  };

  const onClickDeleteTag = (e: any) => {
    tagArr.splice(Number(e.target.id), 1);
    setTagArr([...tagArr]);
  };

  return (
    <div className="step_wrapper">
      <h2 className="step_h2"> 병원 기본 정보 등록</h2>

      <div className="step_input_wrapper">
        <h3 className="step_h3">*병원명</h3>
        <input
          autoFocus
          placeholder="강남해피동물병원"
          className="step1_input"
        />
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
        <input
          placeholder="- 없이 숫자만 입력해주세요"
          className="step1_input"
        />
        {/* <div className="signup_number_wrapper">
          <input placeholder="02" className="signup_number" type="number" /> -{" "}
          <input placeholder="3456" className="signup_number" type="number" /> -{" "}
          <input placeholder="7890" className="signup_number" type="number" />
        </div> */}
      </div>

      <div className="step_top_input_wrapper">
        <h3 className="step_h3_top">*소재지</h3>

        <div className="step_input_column_wrapper">
          <div>
            <button onClick={onClickSearchBtn} className="btn_search">
              검색하기
            </button>{" "}
            <input
              onChange={({ target }) => setAddress(target.value)}
              value={address}
              style={{ width: "380px" }}
              placeholder="주소를 검색하세요"
            />
            {/* <input placeholder="14547" /> */}
          </div>
          <input className="step1_input" placeholder="상세주소를 입력하세요" />
        </div>

        {isOpen && (
          <div
            className="modal_postcode_wrapper"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <DaumPostcode setIsOpen={setIsOpen} setAddress={setAddress} />
          </div>
        )}
      </div>

      <div className="step_input_wrapper">
        <h3 className="step_h3">태그</h3>

        <div className="step_input_tag_wrapper">
          <input
            onKeyUp={onKeyupTag}
            className="step1_input"
            placeholder="태그 입력 후 스페이스바를 눌러주세요"
          />

          {tagArr.length >= 1 && (
            <div className="tag_wrapper">
              {tagArr.map((el, idx) => (
                <Tag
                  key={idx}
                  onClick={onClickDeleteTag}
                  id={String(idx)}
                  style={{ cursor: "pointer" }}
                  color="blue"
                >
                  {el}
                </Tag>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="step_top_input_wrapper ">
        <h3 className="step_h3_top step_h3_img">병원 사진</h3>
        <ImageMultipleUploadInput />
      </div>
    </div>
  );
};

export default SignUpStep1Page;
