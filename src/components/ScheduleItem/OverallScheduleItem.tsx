import { CheckCircleOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/main.scss";

const OverallScheduleItem = () => {
  return (
    <div className="main_item_wrapper reservation_item_wrapper">
      <h2 className="reservation_item_date">2023년 1월 2일 월요일</h2>

      <div className="reservation_item_info_wrapper">
        {[1, 2, 3, 4].map((el) => (
          <Link to={"/reservation/[reservationId]"} key={el}>
            <div className="reservation_item_info">
              <strong>15시 00분</strong>
              <strong>코카스페니얼</strong>
              <span> 6세 | 남아</span>

              <Tag icon={<CheckCircleOutlined />} color="geekblue">
                치아검진
              </Tag>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OverallScheduleItem;
