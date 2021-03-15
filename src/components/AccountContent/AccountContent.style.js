import styled from "styled-components";

export const AccountContentContainer = styled.div`
  /* background-color: red; */
  margin-top: 3%;
  position: relative;
`;

export const AccountCover = styled.div`
  width: 80%;
  background-color: #44a72c;
  margin: 0 auto;
  padding-left: 9%;

  h2 {
    text-align: center;
    font-family: "UniNeueRegular";
    color: #fff;
    padding-top: 2%;
    padding-bottom: 5%;
  }
`;

export const DpContainer = styled.div`
  /* background-color: red; */
  width: 10vw;
  position: absolute;
  top: 10%;
  left: 3%;

  @media (max-width: 768px) {
  }

  .dp {
    width: 100%;
  }

  .icon_wrap {
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 0;
    right: 20px;
    background: rgba(226, 224, 224, 0.4);
    /* padding: 10px; */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      width: 28px;
    }
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  color: ${(props) => (props.black ? "black" : "#fff")};
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 40%;
  margin-bottom: 10px;
  img {
    width: 24px;
    cursor: pointer;
  }
`;

export const UpdateButton = styled.button`
  width: 80px;
  height: 40px;
  font-size: 15px;

  cursor: pointer;
  padding: 5px;
  border: none;
  outline: none;
  color: ${(props) => (props.black ? "#fff" : "black")};
  border-radius: 4px;
  background-color: ${(props) => (props.black ? "#44A72C" : "#fff")};
`;

export const UserInfoInput = styled.input`
  background: transparent;
  padding: 5px 0 5px 10px;
  outline: none;
  width: 70%;
  height: 40px;
  border: 1px solid lightgray;
  font-family: "UniNeueRegular";
  font-size: ${(props) => (props.black ? "16px" : "18px")};
  border-radius: 4px;
  color: ${(props) => (props.black ? "black" : "#fff")};

  &[type="text"]:disabled,
  &[type="tel"]:disabled,
  &[type="email"]:disabled,
  &[type="number"]:disabled,
  &[type="password"]:disabled {
    border: none;
    font-weight: bold;
  }
`;

export const AdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 30px auto;

  .left {
    /* border: 1px solid black; */
    width: 50%;
    margin-left: auto;
  }
  .right {
    /* border: 1px solid black; */
    width: 40%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const AdditionalContentUpdateContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  div {
    width: 68%;
  }
  img {
    width: 24px;
    cursor: pointer;
  }
`;

export const UpdateContentBox = styled.div``;

export const UserRewardBox = styled.div`
  width: 45%;
  height: 0;
  padding-bottom: 45%;

  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  margin-bottom: 20px;
`;
