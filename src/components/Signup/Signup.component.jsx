import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  LoginContainer,
  LoginContentContainer,
  LoginImage,
  LoginLogo,
  LoginWithIcons,
  OTPform,
  SignUpForm,
  SignUpInput,
  SingupButton,
} from "../Login/Login.style";
import loginImg from "../../assets/images/login-img.png";
import helpzLogo from "../../assets/icons/logo-green.png";
import googleIcon from "../../assets/icons/Google.png";
import fbIcon from "../../assets/icons/facebook.png";
import axios from "axios";
import { UserContext } from "../../App";
import { store } from "react-notifications-component";

const SignupContent = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [signUp, setSignUp] = useState(true);
  const [proceedOTP, setProceedOTP] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [error, setError] = useState("");
  const [num, setNum] = useState("");

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSignup = (data, e) => {
    console.log(data);
    setNum(data.phone);

    axios
      .post("https://mudee.shop/helpz/api/register", data, {
        headers: {
          accept: "application/json",
        },
      })
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
    const currentOtp = { otp: otp.join(""), phone: num };
    console.log(currentOtp);
    axios
      .post("https://mudee.shop/helpz/api/register-otp", currentOtp)
      .then((response) => {
        if (response.data === "failed") {
          console.log(response.data);
          setError(true);
          setOtp([...otp.map((v) => "")]);
        } else {
          console.log("Regestered Successfully");
          console.log(response);
          setLoggedInUser(response.data);
          localStorage["user"] = JSON.stringify(response.data);
          setError("");
          setOtp([...otp.map((v) => "")]);
          store.addNotification({
            title: "Registered successfully !",
            message: " ",
            type: "success",
            insert: "top",
            container: "bottom-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 1500,
              // onScreen: true,
            },
          });
          history.replace(from);
        }
      });
  };

  const handleResendOtp = () => {
    if (num) {
      const phone = { phone: num };
      axios
        .post("https://mudee.shop/helpz/api/resend-otp", phone)
        .then((response) => {
          if (response.data === "failed") {
            console.log("Can not send OTP");
            setError(true);
          } else {
            console.log(response);
            console.log("OTP Send Successfully");
            setError("");
            setProceedOTP(true);
          }
        });
    }
  };

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

              <SingupButton type="submit">Procceed With OTP</SingupButton>
            </SignUpForm>
          )}

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
              <p onClick={handleResendOtp}>Resend OTP</p>
              {error && <small>OTP did not matched! Try again.</small>}
              <SingupButton type="submit">Procceed With OTP</SingupButton>
            </OTPform>
          )}
        </LoginContentContainer>
      </LoginContainer>
    </>
  );
};

export default SignupContent;
