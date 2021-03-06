import React, { useContext, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ModalContainer, LoginModalIconWrap } from "./LoginModal.style";
import "./LoginModal.css";
import helpzLogo from "../../assets/icons/logo-green.png";
import googleIcon from "../../assets/icons/Google.png";
import fbIcon from "../../assets/icons/facebook.png";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import axios from "axios";
import { OTPform } from "../Login/Login.style";

const LoginModal = ({
  open,
  close,
  handleOrderReq,
  orderPage,
  wishListPage,
  handleAddToWishList,
  sideBarWishList,
  handleShowWishList,
}) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);
  const [error, setError] = useState("");
  const [num, setNum] = useState("");
  const [proceedOTP, setProceedOTP] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleLogin = (data, e) => {
    axios.post("https://mudee.shop/helpz/api/login", data).then((response) => {
      if (response.data.errors) {
        // setError(response.data.errors[0]);
      } else {
        setLoggedInUser(response.data);
        // setError("");
        if (orderPage) {
          handleOrderReq(response.data);
        } else if (wishListPage) {
          handleAddToWishList(response.data);
        } else if (sideBarWishList) {
          handleShowWishList(response.data);
        }
      }
      e.target.reset();
    });
  };

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
          setSignup(false);
          setProceedOTP(true);
          e.target.reset();
        }
      });
  };

  const handleOtp = (e) => {
    const currentOtp = { otp: otp.join(""), phone: num };
    console.log(num);
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
          setError("");
          setOtp([...otp.map((v) => "")]);
          if (orderPage) {
            handleOrderReq(response.data);
          } else if (wishListPage) {
            handleAddToWishList(response.data);
          } else if (sideBarWishList) {
            handleShowWishList(response.data);
          }
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
    <Modal open={open} onClose={close} center closeIcon>
      <ModalContainer>
        {login && <h2>You are not Logged in !</h2>}

        <LoginModalIconWrap>
          <img src={fbIcon} alt="" />
          <img src={googleIcon} alt="" />
        </LoginModalIconWrap>
        <hr />
        <h3>{login ? "Login" : "Signup"}</h3>

        {/* --------------Login Form-------------- */}
        {login && (
          <form onSubmit={handleSubmit(handleLogin)}>
            <label htmlFor="phone">User Id</label>
            <input
              type="text"
              name="phone"
              placeholder="UserID"
              required
              ref={register}
              id="phone"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              ref={register}
              id="password"
            />
            <button type="submit">Login</button>
          </form>
        )}

        {/* --------------Signup Form-------------- */}
        {signup && (
          <form onSubmit={handleSubmit(handleSignup)}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              ref={register}
            />

            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
              ref={register}
            />

            <input
              type="text"
              id="tel"
              name="phone"
              placeholder="Mobile Number"
              required
              ref={register}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              ref={register}
            />
            <input
              type="password"
              id="confirmPass"
              name="password_confirmation"
              placeholder="Confim Password"
              required
              ref={register}
            />
            <button type="submit">Procceed With OTP</button>
          </form>
        )}

        {/* --------------Proceed OTP Form-------------- */}
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
            <button type="submit">Procceed With OTP</button>
          </OTPform>
        )}
        <h6>
          If you Don't have Account,
          <span
            onClick={() => {
              setLogin(false);
              setSignup(true);
            }}
          >
            SIGN UP
          </span>
        </h6>
      </ModalContainer>
    </Modal>
  );
};

export default LoginModal;
