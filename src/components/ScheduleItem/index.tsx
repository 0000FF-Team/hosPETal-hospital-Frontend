import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import React, { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/main.scss";
import InputModal from "../Modal/InputModal";

const ScheduleItem = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClickRejectReservation = () => {
    setIsOpenModal((prev) => !prev);
  };

  const onClickApproveReservation = () => {
    alert("예약을 승인하시겠습니까?");
  };

  return (
    <div className="main_item_wrapper">
      <Link to={"/reservation/:reservationId"}>
        <div className="main_item_info">
          <strong className="main_item_info_time">15시 00분</strong>
          <strong>치아 검진</strong>

          <div>
            <strong>코카스페니얼</strong>
            <span> 6세 | 남아</span>
          </div>
        </div>
      </Link>

      <div className="main_item_tag_wrapper">
        <div className="">
          <Tag icon={<ClockCircleOutlined />} color="default">
            예약 대기 중
          </Tag>
          <Tag icon={<CheckCircleOutlined />} color="success">
            예약 확정
          </Tag>
          <Tag icon={<CloseCircleOutlined />} color="error">
            예약 거절
          </Tag>
        </div>

        <div className="main_btn_wrapper">
          <button
            onClick={onClickRejectReservation}
            className="btn_error btn_middle"
          >
            예약 거절
          </button>
          <button onClick={onClickApproveReservation} className="btn_middle">
            예약 확정
          </button>
        </div>
      </div>

      {isOpenModal && <InputModal setIsOpenModal={setIsOpenModal} />}
    </div>
  );
};

export default ScheduleItem;
