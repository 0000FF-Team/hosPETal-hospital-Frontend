import React from "react";
import { DatePicker, Space } from "antd";

interface IProps {
  placeholder?: string;
}

const DatePicker02: React.FC<IProps> = ({ placeholder }) => (
  <Space direction="vertical" size={12}>
    <DatePicker
      placeholder={placeholder}
      style={{ width: "270px", height: "45px" }}
      dateRender={(current) => {
        const style: React.CSSProperties = {};
        if (current.date() === 1) {
          style.border = "1px solid #1890ff";
          style.borderRadius = "6px";
        }
        return (
          <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
  </Space>
);

export default DatePicker02;
