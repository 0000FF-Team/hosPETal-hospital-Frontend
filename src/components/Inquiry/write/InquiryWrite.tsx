import React from "react";
import "../../../styles/pages/inquiry.write.scss";

const InquiryWrite = () => {
  const onClickSubmitBtn = () => {
    alert("등록하였습니다!");
    history.back();
  };
  return (
    <div className="inquiry_list">
      <h1>문의하기</h1>
      <div className="inquiry_input_wrapper">
        <input className="inquiry_title" placeholder="제목을 입력해주세요" />
        <textarea
          className="inquiry_content"
          placeholder="내용을 입력해주세요"
        ></textarea>
      </div>

      <button onClick={onClickSubmitBtn} className="btn_submit">
        등록하기
      </button>
    </div>
  );
};

export default InquiryWrite;
