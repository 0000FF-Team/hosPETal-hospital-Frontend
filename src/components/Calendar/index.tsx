import React from "react";
import type { BadgeProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 10:
      listData = [
        { type: "warning", content: "예약 대기" },
        { type: "success", content: "예약 확정" },
        { type: "error", content: "예약 거절" },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "치아 검진" },
        { type: "success", content: "건강 검진" },
        { type: "error", content: "예방 접종" },
        { type: "warning", content: "치아 검진" },
        { type: "success", content: "건강 검진" },
        { type: "error", content: "예방 접종" },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const NoticeCalendar: React.FC = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>총 예약 수</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
    />
  );
};

export default NoticeCalendar;
