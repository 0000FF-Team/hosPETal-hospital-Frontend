import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

interface IPropsDaumPostcode {
  setAddress: any;
  setIsOpen: any;
}

const DaumPostcode = ({ setAddress, setIsOpen }: IPropsDaumPostcode) => {
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress);

    setAddress(fullAddress);
    setIsOpen((prev: any) => !prev);
  };

  return <DaumPostcodeEmbed onComplete={handleComplete} />;
};

export default DaumPostcode;
