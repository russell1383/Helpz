import React from "react";
import { useHistory } from "react-router-dom";
import {
  LoginContainer,
  LoginContentContainer,
  LoginImage,
  LoginLogo,
  LoginWithIcons,
} from "../Login/Login.style";
import loginImg from "../../assets/images/login-img.png";
import helpzLogo from "../../assets/icons/logo-green.png";
import googleIcon from "../../assets/icons/Google.png";
import fbIcon from "../../assets/icons/facebook.png";

const SignupContent = () => {
  const history = useHistory();

  return (
    <>
      <LoginContainer>
        <LoginImage src={loginImg} />
        <LoginContentContainer>
          <LoginLogo src={helpzLogo} alt="" onClick={() => history.push("/")} />

          <h1>User Signup</h1>

          <LoginWithIcons>
            <img src={fbIcon} alt="" />
            <img src={googleIcon} alt="" />
          </LoginWithIcons>

                  <hr />
                  
                  

        </LoginContentContainer>
      </LoginContainer>
    </>
  );
};

export default SignupContent;
