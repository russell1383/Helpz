import React, { useEffect, useRef, useState } from "react";
import {
  AccountContentContainer,
  AccountCover,
  AdditionalInfoContainer,
  DpContainer,
  UpdateButton,
  UserInfoContainer,
  UserInfoInput,
  UserRewardBox,
} from "./AccountContent.style";
import dummyDp from "../../assets/icons/dp-dummy.png";
import dpUpIcon from "../../assets/icons/dp-upload.png";
import editIcon from "../../assets/icons/edit-icon.png";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import { Col, Row } from "react-grid-system";
import UpdateUserName from "./UpdateUserName";
import AdditionalContentUpdate from "./AdditionalContentUpdate.component";

const AccountContent = () => {
  const [updateUserPhone, setUpdateUserPhone] = useState(false);
  let phoneUpdateRef = useClickOutside(() => {
    setUpdateUserPhone(false);
  });

  return (
    <>
      <AccountContentContainer>
        <AccountCover>
          <h2>Welcome To Your Account</h2>

          <UpdateUserName />

          <UserInfoContainer ref={phoneUpdateRef}>
            <UserInfoInput
              type="tel"
              value="+880 17x xxxx xxx"
              disabled={!updateUserPhone ? "disabled" : ""}
            />
            {updateUserPhone ? (
              <>
                <UpdateButton>Update</UpdateButton>
              </>
            ) : (
              <img
                src={editIcon}
                alt=" "
                onClick={() => setUpdateUserPhone(true)}
              />
            )}
          </UserInfoContainer>
        </AccountCover>
        <AdditionalInfoContainer>
          <div className="left">
            <AdditionalContentUpdate />
          </div>
          <div className="right">
            <UserRewardBox></UserRewardBox>
            <UserRewardBox></UserRewardBox>
            <UserRewardBox></UserRewardBox>
          </div>
        </AdditionalInfoContainer>

        <DpContainer>
          <img src={dummyDp} alt="" className="dp" />
          <div className="icon_wrap">
            <img src={dpUpIcon} alt="" className="icon" />
          </div>
        </DpContainer>
      </AccountContentContainer>
    </>
  );
};

export default AccountContent;
