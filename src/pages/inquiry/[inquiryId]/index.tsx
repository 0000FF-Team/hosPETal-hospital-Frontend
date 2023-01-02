import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/pages/inquiry.detail.scss";

const InquiryDetailPage = () => {
  const onClickDeleteBtn = () => {
    alert("삭제하였습니다!");
    history.back();
  };
  return (
    <div className="inquiry_list">
      <h1 className="inquiry_detail_h1">문의내용</h1>

      <div className="inquiry_input_wrapper">
        <div className="inquiry_title">문의사항입니다.</div>
        <div className="inquiry_content">문의사항입니다.</div>
      </div>

      <h1 className="inquiry_detail_h1">관리자 답변</h1>
      <div className="inquiry_detail_content">내용</div>

      <div className="inquiry_btn_wrapper">
        <button
          onClick={onClickDeleteBtn}
          className="btn_submit btn_error_empty"
        >
          삭제하기
        </button>
        <Link to={"/inquiry/[inquiryId]/edit"}>
          <button className="btn_submit btn_empty btn_inquiry_detail">
            수정하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InquiryDetailPage;
