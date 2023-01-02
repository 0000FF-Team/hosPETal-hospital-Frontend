import React, { ReactNode } from "react";
import Navigation from "../components/Navigation";
import "../styles/layout.scss";

interface IProps {
  children: ReactNode;
}

const HIDDEN_NAV = ["/signup"];

const Layout = (props: IProps) => {
  // const isHiddenNav = HIDDEN_NAV.router
  return (
    <div>
      <Navigation />
      <div className="layout_body">{props.children}</div>
    </div>
  );
};

export default Layout;
