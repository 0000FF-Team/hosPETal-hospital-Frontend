import React from "react";
import NoticeCalendar from "../components/Calendar";
import CalendarPicker from "../components/Picker/CalendarPicker";
import "../styles/pages/main.scss";

export default function MainPage() {
  return (
    <div>
      <div>navigation</div>

      <div className="main_wrapper">
        <div className="main_top_wrapper">
          <div className="calendar_wrapper">
            {/* <CalendarPicker /> */}
            <NoticeCalendar />
          </div>
          <div className="schedule_wrapper">선택한 날짜 예약 일정</div>
        </div>

        <div className="waiting_list_wrapper">
          <div className="waiting_list_title_wrapper">
            <strong>예약 대기 환자</strong>
            <h3>2022년 12월 23일 금요일</h3>
          </div>

          <div className="waiting_lists">
            <div className="waiting_list">환자 리스트</div>
            <div className="waiting_list">환자 리스트</div>
            <div className="waiting_list">환자 리스트</div>
            <div className="waiting_list">환자 리스트</div>
          </div>
        </div>
      </div>
    </div>
  );
}
