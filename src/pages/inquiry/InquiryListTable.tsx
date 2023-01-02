import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

export interface DataType {
  key: string;
  number: number;
  title: string;
  createdAt: string;
  process: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "No.",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "작성 날짜",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "답변 상태",
    key: "process",
    dataIndex: "process",
    render: (_, { process }) => (
      <>
        <Tag color={process === "답변 완료" ? "green" : "geekblue"}>
          {process}
        </Tag>
      </>
    ),
  },
  {
    title: "",
    key: "action",
    render: () => (
      <Space size="large">
        <Link to={"/inquiry/[inquiryId]"}>
          <a>더보기</a>
        </Link>
        <a>삭제하기</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    number: 3,
    title: "title",
    createdAt: "2023-01-01",

    process: "답변 대기중",
  },
  {
    key: "2",
    number: 2,
    title:
      "문의합니다. 엄청 긴 문의글 제목입니다. 제목이에요. 길어요. 어어어어어어엄청 긴 문의글 제목이 있다면?????",
    // "문의합니다. ",
    createdAt: "2022-12-18",
    process: "답변 완료",
  },
  {
    key: "3",
    number: 1,
    title: "문의 드립니다.",
    createdAt: "2022-10-08",

    process: "답변 완료",
  },
];

const InquiryListTable: React.FC = () => (
  <Table style={{ width: "100%" }} columns={columns} dataSource={data} />
);

export default InquiryListTable;
