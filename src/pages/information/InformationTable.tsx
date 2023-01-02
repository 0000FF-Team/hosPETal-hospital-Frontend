import React from "react";
import { Space, Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  day: string;
  workingHour: string;
  lunchHour: string;
  category: string[];
}

const data: DataType[] = [
  {
    key: "1",
    day: "월",
    workingHour: "9:00 - 18:00",
    lunchHour: "12:00 - 13:00",
    category: [],
  },
  {
    key: "2",
    day: "화",
    workingHour: "9:00 - 22:00",
    lunchHour: "12:00 - 13:00",
    category: ["야간 진료"],
  },
  {
    key: "3",
    day: "수",
    workingHour: "9:00 - 14:00",
    lunchHour: "12:00 - 13:00",
    category: [],
  },
  {
    key: "4",
    day: "목",
    workingHour: "9:00 - 18:00",
    lunchHour: "12:00 - 13:00",
    category: [],
  },
  {
    key: "5",
    day: "금",
    workingHour: "9:00 - 18:00",
    lunchHour: "12:00 - 13:00",
    category: [],
  },
  {
    key: "6",
    day: "토",
    workingHour: "9:00 - 14:00",
    lunchHour: "-",
    category: ["점심시간 없음"],
  },
  {
    key: "7",
    day: "일",
    workingHour: "-",
    lunchHour: "-",
    category: ["휴무"],
  },
  {
    key: "8",
    day: "공휴일",
    workingHour: "9:00 - 14:00",
    lunchHour: "-",
    category: ["점심시간 없음"],
  },
];

const InformationTable: React.FC = () => (
  <Table dataSource={data} pagination={false} style={{ height: "100%" }}>
    <Column title="요일" dataIndex="day" key="day" />
    <Column title="진료시간" dataIndex="workingHour" key="workingHour" />

    <Column title="점심시간" dataIndex="lunchHour" key="lunchHour" />

    <Column
      title="비고"
      dataIndex="category"
      key="category"
      render={(category: string[]) => (
        <>
          {category.map((category) => (
            <Tag color="blue" key={category}>
              {category}
            </Tag>
          ))}
        </>
      )}
    />
  </Table>
);

export default InformationTable;
