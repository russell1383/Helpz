import React, { useEffect, useState } from "react";
import loginImg from "../../assets/images/login-img.png";
import helpzLogo from "../../assets/icons/logo-green.png";
import googleIcon from "../../assets/icons/Google.png";
import fbIcon from "../../assets/icons/facebook.png";
import {
  LoginButton,
  LoginContainer,
  LoginContentContainer,
  LoginIconContainer,
  LoginForm,
  LoginImage,
  LoginInput,
  LoginInputWrap,
  LoginLogo,
  LoginWithIcons,
  SignUpForm,
  SignUpInput,
  SingupButton,
  OTPform,
} from "./Login.style";


const LoginComponent = () => {
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [proceedOTP, setProceedOTP] = useState(false);

  const handleSignInClick = () => {
    setLogin(false);
    setSignUp(true);
  };

  const handleProceedOTP = (e) => {
    e.preventDefault();
    setSignUp(false);
    setProceedOTP(true);
  };

  return (
    <>
      <LoginContainer>
        <LoginImage src={loginImg} />
        <LoginContentContainer>
          <LoginLogo src={helpzLogo} alt="" />

          {login ? <h1>Login with</h1> : <h1>User Signup</h1>}

          <LoginWithIcons>
            <img src={fbIcon} alt="" />
            <img src={googleIcon} alt="" />
          </LoginWithIcons>

          <hr />
          {login && <h1>Or Login with</h1>}

          {/* -------------------Login Form------------------- */}
          {login && (
            <LoginForm action="">
              <LoginInputWrap>
                <LoginIconContainer />
                <LoginInput
                  type="text"
                  name="userid"
                  placeholder="UserID"
                  required
                />
              </LoginInputWrap>

              <LoginInputWrap>
                <LoginIconContainer password />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </LoginInputWrap>
              <p>Forget Password ? </p>

              <LoginButton type="submit">Login</LoginButton>

              <h6>
                If you Don't have Account, please{" "}
                <span onClick={handleSignInClick}>SIGN UP</span>
              </h6>
            </LoginForm>
          )}

          {/* -------------------Signup Form------------------- */}

          {signUp && (
            <SignUpForm>
              <label htmlFor="email">Your Email</label>
              <SignUpInput type="text" id="email" placeholder="Email" />

              <label htmlFor="password">Password</label>
              <SignUpInput
                type="password"
                id="password"
                placeholder="Password"
              />

              <label htmlFor="confirmPass">Confirm Password</label>
              <SignUpInput
                type="password"
                id="confirmPass"
                placeholder="Confim Password"
              />

              <label htmlFor="tel">Mobile Number</label>
              <SignUpInput
                type="text"
                id="tel"
                name="tel"
                placeholder="Mobile Number"
              />

              <SingupButton type="submit" onClick={handleProceedOTP}>
                Procceed With OTP
              </SingupButton>
            </SignUpForm>
          )}

          {/* -------------------OTP Form------------------- */}

          {proceedOTP && (
            <OTPform>
              <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <p>Resend OTP</p>
              <SingupButton type="submit" onClick={handleProceedOTP}>
                Procceed With OTP
              </SingupButton>
            </OTPform>
          )}
        </LoginContentContainer>
      </LoginContainer>
    </>
  );
};

export default LoginComponent;
