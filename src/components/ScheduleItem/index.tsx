import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import React from "react";
import "../../styles/pages/main.scss";

export default function ScheduleItem() {
  return (
    <div className="main_item_wrapper">
      <div className="main_item_pet_info">
        <strong className="main_item_info_time">15시 00분</strong>
        <strong>치아 검진</strong>

        <div>
          <strong>코카스페니얼</strong>
          <span> 6세 | 남아</span>
        </div>
      </div>

      <div className="main_item_right_wrapper">
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
          <button className="btn_cancel btn_middle">예약 취소</button>
          <button className="btn_middle">예약 확정</button>
        </div>
      </div>
    </div>
  );
}
