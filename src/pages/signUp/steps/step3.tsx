import React from "react";
import DatePicker02 from "../../../components/Picker/DatePicker02";
import { useState } from "react";

const SignUpStep3Page = () => {
  const [name, setName] = useState("");
  const [licenseNumber, setLicenseNumber] = useState<number>();
  const [item, setItem] = useState(1);
  const arr = new Array(item).fill(1);

  const onClickAdd = () => {
    setItem((prev) => prev + 1);
  };

  const onClickDelete = () => {
    setItem((prev) => prev - 1);
  };

  console.log("🍒", item);

  return (
    <div className="step3_wrapper step_wrapper ">
      <h2 className="step_h2"> *의료진 정보 등록</h2>

      <div>
        {arr.map((el, i) => (
          <div className="step_3_item_wrapper" key={i}>
            <div className="step_3_wrapper">
              <h3 className="step_h3">이름</h3>

              <div className="step_3_input_wrapper">
                <input
                  onChange={({ target }) => setName(target.value)}
                  className="step_3_input_name"
                />

                <div className="step_3_btn_wrapper">
                  {i !== 0 && (
                    <button
                      onClick={onClickDelete}
                      className="btn_error_empty btn_small"
                    >
                      삭제
                    </button>
                  )}
                  <button onClick={onClickAdd} className="btn_empty btn_small">
                    추가
                  </button>
                </div>
              </div>
            </div>

            <div className="step_license_wrapper">
              <h3 className="step_h3">면허 번호</h3>

              <div className="step_license_input_wrapper">
                <input
                  onChange={({ target }) =>
                    setLicenseNumber(Number(target.value))
                  }
                  className="step_3_input_license"
                />
                <DatePicker02 placeholder={"취득일을 입력하세요."} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 
      <div>
        <div className="step_3_wrapper">
          <h3 className="step_h3">이름</h3>

          <div className="step_3_input_wrapper">
            <input className="step_3_input_name" />

            <div className="step_3_btn_wrapper">
              <button className="btn_error_empty btn_small">삭제</button>
              <button onClick={onClickAdd} className="btn_empty btn_small">
                추가
              </button>
            </div>
          </div>
        </div>

        <div className="step_license_wrapper">
          <h3 className="step_h3">면허 번호</h3>

          <div className="step_license_input_wrapper">
            <input className="step_3_input_license" />
            <DatePicker02 placeholder={"취득일을 입력하세요."} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SignUpStep3Page;
