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
} from "./Login.style";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const LoginComponent = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();

  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;

  const [login, setLogin] = useState(true);
  const [error, setError] = useState("");

  const handleLogin = (data, e) => {
    axios
      .post("https://mudee.shop/eCommerce/api/login", data)
      .then((response) => {
        if (response.data.errors) {
          setError(response.data.errors[0]);
        } else {
          setLoggedInUser(response.data);
          setError("");
          history.goBack();
        }
        e.target.reset();
      });
  };


  console.log(loggedInUser);

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
          <h1>Or Login with</h1>

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
                <span onClick={() => history.push(`/signup`)}>SIGN UP</span>
              </h6>
            </LoginForm>
          )}
        </LoginContentContainer>
      </LoginContainer>
    </>
  );
};

export default LoginComponent;
