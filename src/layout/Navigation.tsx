import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout.navigation.scss";

export default function Navigation() {
  return (
    <div className="wrapper">
      <Link to={"/main"}>
        <img className="nav_logo" src="/images/logo/logo-h3.png" />
      </Link>

      <div className="menu_wrapper">
        <Link to={"/information"}>
          <div className="menu">병원 정보 관리</div>
        </Link>

        <Link to={"/reservation"}>
          <div className="menu">예약 관리</div>
        </Link>
      </div>

      <Link to={"/mypage"}>
        <div className="nav_profile">해피병원</div>
      </Link>
    </div>
  );
}
