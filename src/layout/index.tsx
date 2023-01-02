import React, { ReactNode } from "react";
import "../styles/layout.scss";
import Navigation from "./\bNavigation";

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
