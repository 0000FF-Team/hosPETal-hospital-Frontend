import styled from "@emotion/styled";
import React, { useRef, useState } from "react";

const ImageMultipleUploadInput = () => {
  const ref = useRef<any>(null);
  const [preview, setPreview] = useState("");

  const onClickUploadBtn = () => {
    ref.current?.click();
  };

  const onChangeImage = (event: any) => {
    console.log("🚗 ", event.target.files?.[0]);

    const file = event.target.files?.[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = ({ target }) => {
      setPreview(String(target?.result));
    };
  };

  return (
    <Wrapper>
      <Button onClick={onClickUploadBtn}>
        <PlusIcon src="/images/icons/add.png" />
      </Button>

      <InputWrapper>
        <input ref={ref} onChange={onChangeImage} type="file" multiple={true} />
      </InputWrapper>

      <Preview src={preview} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: #e0effb;
  color: #333;
  font-size: 22px;
  font-weight: 200;
  margin: 0 15px 0 0;
`;

const PlusIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const InputWrapper = styled.div`
  display: none;
  width: 100px;
`;

const Preview = styled.img`
  width: 100px;
  border-radius: 6px;
`;

export default ImageMultipleUploadInput;
