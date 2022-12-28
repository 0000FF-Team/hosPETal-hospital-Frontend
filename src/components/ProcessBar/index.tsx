import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import styled from "@emotion/styled";

export default function ProcessBar() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          paddingLeft: "100px",
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <Button className="btn_step_done" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TextDiv className="txt_step_done">병원 기본 정보 등록</TextDiv>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <Button className="" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TextDiv className="">진료 정보 등록</TextDiv>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <Button className="btn_step_todo" />
        </TimelineSeparator>
        <TimelineContent>
          <TextDiv className="txt_step_todo">의료진 정보 등록</TextDiv>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  margin-bottom: 0;
  background-color: #68bcff;

  &.btn_step_todo {
    background-color: #e0effb;
  }

  &.btn_step_done {
    background: url("/images/icons/check.png") no-repeat center center;
    background-color: #1a8de9;
    background-size: 18px;
  }
`;

const TextDiv = styled.div`
  margin-top: -5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #000000;

  &.txt_step_todo {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #bdbdbd;
  }

  &.txt_step_done {
    font-weight: 400;
  }
`;
