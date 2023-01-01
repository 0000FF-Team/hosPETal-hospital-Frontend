import React, { ReactNode } from "react";
import Navigation from "../components/Navigation";

interface IProps {
  children: ReactNode;
}

const HIDDEN_NAV = ["/signup"];

const Layout = (props: IProps) => {
  console.log("router");
  // const isHiddenNav = HIDDEN_NAV.router
  return (
    <div>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
