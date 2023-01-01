import { Tag } from "antd";
import React from "react";
import NoticeCalendar from "../components/Calendar";
import Navigation from "../components/Navigation";
import ScheduleItem from "../components/ScheduleItem";
import SimpleTable from "../components/Table/SimpleTable";
import WaitingListItem from "../components/WaitingListItem";
import "../styles/pages/main.scss";

const MainPage = () => {
  return (
    <div>
      <Navigation />

      <div className="main_wrapper">
        <div className="main_top_wrapper">
          <div className="calendar_wrapper">
            <NoticeCalendar />
          </div>
          <div className="schedule_wrapper">
            <strong className="clicked_date">2022년 12월 30일 금요일 </strong>

            <div className="schedule_item_wrapper">
              {[1, 2, 3, 4, 5, 6, 7].map((el) => (
                <ScheduleItem key={el} />
              ))}
            </div>
          </div>
        </div>

        <div className="waiting_list_wrapper">
          <div className="waiting_list_title_wrapper">
            <h1>예약 대기 환자</h1>
            <h2 className="today">2022년 12월 23일 금요일</h2>
          </div>

          <div className="waiting_list_item_wrapper">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
              <WaitingListItem key={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
