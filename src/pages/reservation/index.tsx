import React from "react";
import NoticeCalendar from "../../components/Calendar";
import OverallScheduleItem from "../../components/ScheduleItem/OverallScheduleItem";
import "../../styles/pages/reservation.scss";

const ReservationPage = () => {
  return (
    <div className="reservation_wrapper">
      <div className="main_top_wrapper ">
        <div className="calendar_wrapper">
          <NoticeCalendar />
        </div>

        <div className="schedule_wrapper">
          <h1 className="schedule_title">전체 예약 일정</h1>

          <div className="schedule_item_wrapper">
            {[1, 2, 3, 4, 5, 6, 7].map((el) => (
              <OverallScheduleItem key={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
