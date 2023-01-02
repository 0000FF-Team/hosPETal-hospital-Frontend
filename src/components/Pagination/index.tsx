import React from "react";
import { Pagination } from "antd";

const SimplePagination: React.FC = () => (
  <Pagination defaultCurrent={1} total={50} />
);

export default SimplePagination;
