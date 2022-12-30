import React from "react";
import { Space, Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  pet: string;
  age: number;
  sex: string;
  species: string;
  category: string[];
}

const data: DataType[] = [
  {
    key: "1",
    pet: "뚱이",
    age: 11,
    sex: "여",
    species: "미니핀",
    category: ["건강검진"],
  },
  {
    key: "2",
    pet: "차차",
    age: 3,
    sex: "남",
    species: "코리안 숏헤어",
    category: ["치아 검진", "예방접종"],
  },
  {
    key: "3",
    pet: "루시",
    age: 1,
    sex: "남",
    species: "닥스훈트",
    category: ["예방접종"],
  },
];

const SimpleTable: React.FC = () => (
  <Table dataSource={data} style={{ height: "100%" }}>
    <ColumnGroup title="반려동물">
      <Column title="이름" dataIndex="pet" key="pet" />
      <Column title="나이" dataIndex="age" key="age" />
      <Column title="성별" dataIndex="sex" key="sex" />
      <Column title="종류" dataIndex="species" key="species" />
    </ColumnGroup>

    <Column
      title="진료항목"
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

export default SimpleTable;
