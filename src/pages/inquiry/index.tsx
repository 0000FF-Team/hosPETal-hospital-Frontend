import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import { Link } from "react-router-dom";
import SimplePagination from "../../components/Pagination";
import "../../styles/pages/inquiry.list.scss";
import InquiryListTable from "./InquiryListTable";

interface DataType {
  key: string;
  number: number;
  title: string;
  createdAt: string;
  process: string;
}

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

const InquiryListPage = () => {
  return (
    <div className="inquiry_list">
      <h1>문의 내역</h1>

      <div className="inquiry_btn_write_wrapper">
        <Link to={"/inquiry/new"}>
          <button className="btn_empty btn_write">
            <EditOutlined />
            <span className="btn_write_span">문의글 작성하기</span>
          </button>
        </Link>
      </div>

      <InquiryListTable />

      <div className="table_wrapper">
        <div className="table_column_title">
          <div className="table_others">No.</div>
          <div className="table_title">제목</div>
          <div className="table_others">작성날짜</div>
          <div className="table_others">답변상태</div>
        </div>

        {data.map((el) => (
          <div key={el.number}>
            <Link to={"/inquiry/:inquiryId"}>
              <div className="table_column">
                <div className="table_others">{el.number}</div>
                <div className="table_title">{el.title}</div>
                <div className="table_others">{el.createdAt}</div>
                <div className="table_others">
                  <Tag
                    color={el.process === "답변 완료" ? "green" : "geekblue"}
                  >
                    {el.process}
                  </Tag>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination_wrapper">
        <SimplePagination />
      </div>
    </div>
  );
};

export default InquiryListPage;
