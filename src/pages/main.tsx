import React from "react";

export default function MainPage() {
  return (
    <div>
      <div>navigation</div>
      <div className="calendar_wrapper">calendar</div>
      <div className="schedule_wrapper">선택한 날짜 예약 일정</div>
      <div className="waiting_list_wrapper">예약 대기 환자</div>
    </div>
  );
}
