import React, { FC } from "react";
import { TimePicker } from "antd";

interface IPropsTimePicker {
  placeholder: [string, string];
}

const TimePicker02: FC<IPropsTimePicker> = ({ placeholder }) => (
  <TimePicker.RangePicker placeholder={placeholder} />
);

export default TimePicker02;
