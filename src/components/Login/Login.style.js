import styled from "styled-components";
import passwordIcon from "../../assets/icons/password-icon.png";
import userIdIcon from "../../assets/icons/user-id-icon.png";

export const LoginContainer = styled.div`
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
`;
export const LoginLogo = styled.img`
  width: 25%;
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const LoginImage = styled.img`
  width: 48%;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginContentContainer = styled.div`
  width: 52%;
  height: 100vh;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  h1 {
    padding-bottom: 4%;
    font-family: "UniNeueRegular";
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  hr {
    width: 50%;
    margin-bottom: 4%;

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;

export const LoginWithIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  padding-bottom: 4%;

  img {
    width: 40px;
    height: 40px;
  }
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media (max-width: 1100px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  p {
    font-family: "UniNeueRegular";
    margin-bottom: 5%;
    text-align: left;
    color: red;
  }

  h6 {
    font-size: 15px;
    font-weight: 300;
    padding-top: 5%;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    span {
      font-weight: bold;
      color: #44a72c;
      cursor: pointer;
    }
  }
`;

export const LoginInputWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4%;
`;

export const LoginIconContainer = styled.div`
  width: 20%;
  margin-right: 1%;
  background-image: ${({ password }) =>
    password ? `url(${passwordIcon})` : `url(${userIdIcon})`};
  background-position: center;
  background-size: 30%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  height: 35px;
  background-color: #fff;
  border-radius: 5px;
`;

export const LoginInput = styled.input`
  height: 35px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 1.5%;
  font-family: "UniNeueRegular";
`;
export const LoginButton = styled.button`
  width: 75%;
  height: 35px;
  background: #44a72c;
  border-radius: 5px;
  color: #fff;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: "UniNeueRegular";
  font-weight: bold;
`;

// --------------SIGN UP FORM--------------//

export const SignUpForm = styled.form`
  text-align: left;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "UniNeueRegular";

  @media (max-width: 1100px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const SignUpInput = styled.input`
  height: 35px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin-bottom: 4%;
  margin-top: 0.8%;
  padding: 3%;
`;

export const SingupButton = styled.button`
  background: #44a72c;
  border-radius: 5px;
  color: #fff;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: "UniNeueRegular";
  font-weight: bold;
  width: 80%;
  height: 40px;
  margin-top: 5%;
`;

export const OTPform = styled.form`
  width: 40%;

  @media (max-width: 1100px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  div {
    display: flex;
    justify-content: space-between;
    height: 70px;
  }

  p{
      color: #44a72c;
      text-align: left;
      margin: 4%;
      font-size: 18px;
      cursor: pointer;
  }

  input {
    margin: 2%;
    border-radius: 5px;
    border: 1px solid lightgray;
    font-size: 20px;
    padding: 5%;
  }
`;
