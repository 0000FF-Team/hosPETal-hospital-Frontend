import { Tag } from "antd";
import React from "react";
import SimpleTable from "../../components/Table/SimpleTable";
import "../../styles/pages/information.scss";

const InformationPage = () => {
  return (
    <div className="info_container">
      <h1>병원 정보</h1>

      <div className="info_item_wrapper">
        <h2 className="info_h2">병원명</h2>
        <div className="info_info">해피동물병원</div>
      </div>

      <div className="info_item_wrapper">
        <h2 className="info_h2">병원소개</h2>
        <div className="info_info">
          오랜 임플란트 수술 경력을 가진 의료진의 풍부한 노하우로 정밀한 진단과
          꼼꼼하게 진료해드립니다. <br />
          서울퍼스트치과이 특별함 <br />
          임플란트로 새 삶을 찾다! <br />
          1. 다년간의 풍부한 임플란트 시술 경험과 노하우를 가진 임플란트 전담
          의료진이 정밀한 진단과 꼼꼼한 진료를 위해 항상 노력합니다. <br />
          2. 정밀하고 안정성 높은 치료를 위해 디지털 의료장비를 구축하여
          성공적인 치료를 위해 노력하고 있습니다. <br />
          3. 임플란트 정품 인증서와 사후관리 보증서 발급 <br />
          4. 찾아오시는 환자분들이 쾌적한 환경에서 편안한 진료를 받을 수 있도록
          맞춤형 서비스를 제공하고 있습니다.
        </div>
      </div>

      <div className="info_item_wrapper">
        <h2 className="info_h2">전화</h2>
        <div className="info_info">02-2340-5678</div>
      </div>

      <div className="info_item_wrapper">
        <h2 className="info_h2">위치</h2>
        <div className="info_info">서울특별시 강남구 강남대로 476 16층</div>
      </div>

      <div className="info_item_wrapper">
        <h2 className="info_h2">태그</h2>
        <div className="info_info">
          <Tag color="gold">주차가능</Tag>
          <Tag color="purple">야간진료</Tag>
        </div>
      </div>

      <div className="info_item_wrapper">
        <h2 className="info_h2">병원 로고</h2>
        <div className="info_info">
          <div>이미지</div>
        </div>
      </div>

      <div className="info_item_wrapper">
        <h2 className="info_h2">병원 사진</h2>
        <div className="info_info">
          <div>이미지</div>
        </div>
      </div>

      <div className="info_item_wrapper">
        <h2 className="info_h2">전문의</h2>
        <div className="info_info">
          <strong className="info_doctor">박광범원장</strong>
          <div>임플란트 일반의</div>
        </div>
      </div>

      <div className="info_item_wrapper2">
        <h1 className="info_h1">진료 정보</h1>

        <div>
          <SimpleTable />
        </div>
      </div>

      <div>
        <button className="btn_info_edit">수정하기</button>
      </div>
    </div>
  );
};

export default InformationPage;
