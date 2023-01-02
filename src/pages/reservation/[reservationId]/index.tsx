import React from "react";
import "../../../styles/pages/reservation.detail.scss";
import { Tag } from "antd";

const ReservationDetailPage = () => {
  const onClickRejectReservation = () => {
    alert("예약을 거절합니다! 사유를 작성해주세요.");
    history.back();
  };

  const onClickApproveReservation = () => {
    alert("예약이 확정되었습니다!");
    history.back();
  };
  return (
    <div className="reservation_detail_wrapper">
      <div className="reservation_info_wrapper">
        <div className="reservation_info_time_wrapper">
          <h1 className="reservation_h1">예약 상세 정보</h1>
          <div className="reservation_info_time">
            2022년 12월 23일 금요일 오후 3시 30분
          </div>
        </div>

        <Tag color="gold">
          <div className="tag_inner">예약 대기중</div>
        </Tag>
      </div>

      <div className="reservation_info">
        <div className="reservation_pet_info_wrapper">
          <h1> 동물 정보</h1>
          <div className="reservation_pet_info">
            <img className="reservation_pet_image" />
            <div className="reservation_pet_infos">
              <div>이름 : 테리</div>
              <div>종류 : 코리안 숏헤어</div>
              <div>나이 : 6개월</div>
              <div>성별 : 남</div>
              <div>특이사항 : 우유 알러지 있음</div>
            </div>
          </div>
        </div>

        <div className="reservation_owner_info_wrapper">
          <h1> 보호자 정보</h1>
          <div className="reservation_owner_infos">
            <div className="reservation_owner_info">이름 : 김민주</div>
            <div className="reservation_owner_info">전화 : 010-1234-5678</div>
            <div className="reservation_owner_info">
              주소 : 경기도 부천시 원미구 소향로181(중동, 상세정보아파트 몇동
              몇호)
            </div>
          </div>
        </div>
      </div>

      <div className="reservation_specific_wrapper">
        <h1> 예약 정보</h1>
        <div className="reservation_specifics">
          <div>진료 항목 : </div>
          <div>상세 항목 : </div>
          <div>증상 : </div>
          <div>전달사항 : </div>
        </div>
      </div>

      <div className="reservation_btn_wrapper">
        <button
          onClick={onClickRejectReservation}
          className="btn_error reservation_btn"
        >
          예약 거절
        </button>
        <button onClick={onClickApproveReservation} className="reservation_btn">
          예약 확정
        </button>
      </div>
    </div>
  );
};

export default ReservationDetailPage;
