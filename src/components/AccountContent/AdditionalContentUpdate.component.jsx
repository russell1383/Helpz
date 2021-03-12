import React, { useState } from "react";
import { Col, Row } from "react-grid-system";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import {
  AdditionalContentUpdateContainer,
  UpdateButton,
  UpdateContentBox,
  UserInfoInput,
} from "./AccountContent.style";
import editIcon from "../../assets/icons/edit-black.png";

const AdditionalContentUpdate = () => {
  const [updateAdditionalInfo, setUpdateAdditionalInfo] = useState(false);

  let nameUpdateRef = useClickOutside(() => {
    setUpdateAdditionalInfo(false);
  });
  return (
    <>
      <AdditionalContentUpdateContainer ref={nameUpdateRef}>
        <div>
          <UserInfoInput
            type="text"
            value="Update Address"
            black
            disabled={!updateAdditionalInfo ? "disabled" : ""}
          />
          <UserInfoInput
            type="text"
            value="Update Blood Group"
            black
            disabled={!updateAdditionalInfo ? "disabled" : ""}
          />
          <UserInfoInput
            type="text"
            value="Update Email"
            black
            disabled={!updateAdditionalInfo ? "disabled" : ""}
          />
          <UserInfoInput
            type="text"
            value="Update Email"
            black
            disabled={!updateAdditionalInfo ? "disabled" : ""}
          />
        </div>
        {updateAdditionalInfo ? (
          <>
            <UpdateButton black>Update</UpdateButton>
          </>
        ) : (
          <img
            src={editIcon}
            alt=" "
            onClick={() => setUpdateAdditionalInfo(true)}
          />
        )}
      </AdditionalContentUpdateContainer>
    </>
  );
};

export default AdditionalContentUpdate;
