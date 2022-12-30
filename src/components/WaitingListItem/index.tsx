import { FieldTimeOutlined, PhoneOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import React from "react";
import "../../styles/pages/main.scss";

export default function WaitingListItem() {
  return (
    <div className="waiting_list">
      <div className="info_wrapper">
        <h2 className="info_reserve_time">
          <Tag color="lime">
            <FieldTimeOutlined />
            <span> 오후 3시 30분</span>
          </Tag>
        </h2>

        <img className="profile" src="/images/logo/logo-3.png" />
        <h2>차차</h2>
        <div className="profile_species">코커스패니얼</div>
        <div className="profile_age_sex">6살 | 남아</div>
        <div className="info_category">
          <Tag color="magenta">예방접종</Tag>
        </div>
        <div>
          <PhoneOutlined />
          <span className="info_specific">010-2345-6789</span>
        </div>
      </div>
    </div>
  );
}
