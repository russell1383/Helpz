import React from "react";
import loginImg from "../../assets/images/login-img.png";
import helpzLogo from "../../assets/icons/logo-green.png";
import googleIcon from "../../assets/icons/Google.png";
import fbIcon from "../../assets/icons/facebook.png";
import {
  LoginButton,
  LoginContainer,
  LoginContentContainer,
  LoginForm,
  LoginImage,
  LoginInput,
  LoginLogo,
  LoginWithIcons,
} from "./Login.style";

const LoginComponent = () => {
  return (
    <>
      <LoginContainer>
        <LoginImage src={loginImg} />
        <LoginContentContainer>
          <LoginLogo src={helpzLogo} alt="" />
          <h1>Login with</h1>
          <LoginWithIcons>
            <img src={fbIcon} alt="" />
            <img src={googleIcon} alt="" />
          </LoginWithIcons>

          <hr />
          <h1>Or Login with</h1>
          <LoginForm action="">
            <LoginInput type="text" name="userid" placeholder="UserID" />
            <LoginInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <p>Forget Password</p>

            <LoginButton type="submit">Login</LoginButton>
          </LoginForm>
        </LoginContentContainer>
      </LoginContainer>
    </>
  );
};

export default LoginComponent;
