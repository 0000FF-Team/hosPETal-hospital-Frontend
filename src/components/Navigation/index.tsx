import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../../styles/config";

export default function Navigation() {
  return (
    <Wrapper>
      <Link to={"/main"}>
        <Logo src="/images/logo/logo-h3.png" />
      </Link>

      <MenuWrapper>
        <Link to={"/information"}>
          <Menu>병원 정보 관리</Menu>
        </Link>

        <Link to={"/reservation"}>
          <Menu>예약 관리</Menu>
        </Link>
      </MenuWrapper>

      <Link to={"/mypage"}>
        <Profile>해피병원</Profile>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #eee;
  background-color: white;

  position: fixed;
  top: 0;
  z-index: 999;
`;

const Logo = styled.img`
  height: 60px;
  margin-right: 50px;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 80%;
`;

const Menu = styled.div`
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  margin-right: 50px;
  color: black;
`;

const Profile = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;
  border-radius: 6px;
  background-color: ${COLORS.secondary[100]};

  font-size: 11px;
  line-height: 12px;
  color: black;
`;
