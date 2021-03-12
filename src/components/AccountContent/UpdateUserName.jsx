import React, { useState } from "react";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import {
  UpdateButton,
  UserInfoContainer,
  UserInfoInput,
} from "./AccountContent.style";
import editIcon from "../../assets/icons/edit-icon.png";

const UpdateUserName = () => {
  const [updateUserName, setUpdateUserName] = useState(false);

  let nameUpdateRef = useClickOutside(() => {
    setUpdateUserName(false);
  });
  return (
    <>
      <UserInfoContainer ref={nameUpdateRef}>
        <UserInfoInput
          type="text"
          value="Chisty Himel"
          disabled={!updateUserName ? "disabled" : ""}
        />
        {updateUserName ? (
          <>
            <UpdateButton>Update</UpdateButton>
          </>
        ) : (
          <img src={editIcon} alt=" " onClick={() => setUpdateUserName(true)} />
        )}
      </UserInfoContainer>
    </>
  );
};

export default UpdateUserName;
