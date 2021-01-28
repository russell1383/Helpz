import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
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
  ResendOTPform,
} from "./Login.style";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const LoginComponent = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;


  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [proceedOTP, setProceedOTP] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [resendOtp, setResendOtp] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSignInClick = () => {
    setLogin(false);
    setSignUp(true);
  };

  const handleResendOtpClick = () => {
    setProceedOTP(false);
    setResendOtp(true);
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleLogin = (data, e) => {
    axios
      .post("https://mudee.shop/eCommerce/api/login", data)
      .then((response) => {
        if (response.data.errors) {
          setError(response.data.errors[0]);
        } else {
          console.log(response);
          setError("");
        }
        e.target.reset();
      });
  };

  const handleSignup = (data, e) => {
    console.log(data);

    axios
      .post("https://mudee.shop/eCommerce/api/register", data)
      .then((response) => {
        if (response.data.errors) {
          if (response.data.errors.phone) {
            setError(response.data.errors.phone);
          } else {
            setError(response.data.errors.password);
          }
        } else {
          console.log(response);
          setSignUp(false);
          setProceedOTP(true);
          e.target.reset();
        }
      });
  };

  const handleOtp = (e) => {
      const currentOtp = { otp: otp.join("") };
      console.log(currentOtp);
      axios
        .post("https://mudee.shop/eCommerce/api/register-otp", currentOtp)
        .then((response) => {
          if (response.data === "failed") {
            console.log(response.data);
            setError(true);
            setOtp([...otp.map((v) => "")]);
          } else {
            console.log("success");
            setError("");
            setOtp([...otp.map((v) => "")]);
          }
        });
  };

  const handleResendOtp = (data, e) => {
    axios
      .post("https://mudee.shop/eCommerce/api/resend-otp", data)
      .then((response) => {
        console.log(response);
        if (response.data === "failed") {
          console.log(response.data);
          setError(true);
          e.target.reset();
        } else {
          console.log("success");
          setError("");
          e.target.reset();
          setResendOtp(false);
          setProceedOTP(true);
        }
      });
  };

  console.log(loggedInUser)

  return (
    <>
      <LoginContainer>
        <LoginImage src={loginImg} />
        <LoginContentContainer>
          <LoginLogo src={helpzLogo} alt="" onClick={() => history.push("/")} />

          {login ? <h1>Login with</h1> : <h1>User Signup</h1>}

          <LoginWithIcons>
            <img src={fbIcon} alt="" />
            <img src={googleIcon} alt="" />
          </LoginWithIcons>

          <hr />
          {login && <h1>Or Login with</h1>}

          {/* -------------------Login Form------------------- */}
          {login && (
            <LoginForm onSubmit={handleSubmit(handleLogin)}>
              <LoginInputWrap>
                <LoginIconContainer />
                <LoginInput
                  type="text"
                  name="phone"
                  placeholder="UserID"
                  required
                  ref={register}
                />
              </LoginInputWrap>

              <LoginInputWrap>
                <LoginIconContainer password />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={register}
                />
              </LoginInputWrap>
              <p>{error ? error : "Forget Password ?"} </p>

              <LoginButton type="submit">Login</LoginButton>

              <h6>
                If you Don't have Account, please{" "}
                <span onClick={handleSignInClick}>SIGN UP</span>
              </h6>
            </LoginForm>
          )}

          {/* -------------------Signup Form------------------- */}

          {signUp && (
            <SignUpForm onSubmit={handleSubmit(handleSignup)}>
              <label htmlFor="name">Your Name</label>
              <SignUpInput
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                ref={register}
              />

              <label htmlFor="email">Your Email</label>
              <SignUpInput
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
                ref={register}
              />

              <label htmlFor="tel">Mobile Number</label>
              <SignUpInput
                type="text"
                id="tel"
                name="phone"
                placeholder="Mobile Number"
                required
                ref={register}
              />

              <label htmlFor="password">Password</label>
              <SignUpInput
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                ref={register}
              />

              <label htmlFor="confirmPass">Confirm Password</label>
              <SignUpInput
                type="password"
                id="confirmPass"
                name="password_confirmation"
                placeholder="Confim Password"
                required
                ref={register}
              />
              {error && <small>{error}</small>}
              <SingupButton type="submit">Procceed With OTP</SingupButton>
            </SignUpForm>
          )}

          {/* -------------------OTP Form------------------- */}

          {proceedOTP && (
            <OTPform onSubmit={handleSubmit(handleOtp)}>
              <div>
                {otp.map((data, index) => {
                  return (
                    <input
                      className="otp-field"
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
              </div>
              <p onClick={handleResendOtpClick}>Resend OTP</p>
              {error && <small>OTP did not matched! Try again.</small>}
              <SingupButton type="submit">Procceed With OTP</SingupButton>
            </OTPform>
          )}

          {resendOtp && (
            <ResendOTPform onSubmit={handleSubmit(handleResendOtp)}>
              <SignUpInput
                placeholder="Enter you number"
                type="tel"
                name="phone"
                required
                ref={register}
              />
              <SingupButton type="submit">Send OTP</SingupButton>
            </ResendOTPform>
          )}
        </LoginContentContainer>
      </LoginContainer>
    </>
  );
};

export default LoginComponent;
