import React from "react";
import "../../styles/components/input.modal.scss";

interface IProps {
  setIsOpenModal?: any;
}

const InputModal = ({ setIsOpenModal }: IProps) => {
  const onClickRejectBtn = () => {
    setIsOpenModal(false);
  };
  return (
    <div className="modal_mask">
      <div className="input_modal_wrapper">
        <h2> 예약을 거절하시겠습니까?</h2>
        {/* <div className=""> 거절하는 사유를 최대한 자세하게 작성해주세요.</div> */}
        <textarea
          placeholder="거절하는 사유를 최대한 자세하게 작성해주세요."
          className="input_modal_content"
        ></textarea>

        <div className="input_modal_btn_wrapper">
          <button
            onClick={onClickRejectBtn}
            className="btn_input_modal btn_error"
          >
            예약 거절하기
          </button>
          <button onClick={onClickRejectBtn} className="btn_input_modal btn_">
            취소하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
