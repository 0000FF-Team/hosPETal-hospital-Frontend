import React, { ReactNode } from "react";
import "../styles/layout.scss";
import Navigation from "./Navigation";

interface IProps {
  children: ReactNode;
}

const HIDDEN_NAV = ["/signup", "/"];

const Layout = (props: IProps) => {
  const currentPath = location.pathname;
  const isHiddenNav = HIDDEN_NAV.includes(currentPath);

  console.log(":🥸", currentPath, isHiddenNav);
  return (
    <div>
      {!isHiddenNav && <Navigation />}
      <div className="layout_body">{props.children}</div>
    </div>
  );
};

export default Layout;
