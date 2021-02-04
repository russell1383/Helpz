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

const LoginModal = ({ open, close, handleLogin }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();

  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;

  const [error, setError] = useState("");


  return (
    <Modal open={open} onClose={close} center closeIcon>
      <ModalContainer>
        <h2>You are not Logged in !</h2>
        <LoginModalIconWrap>
          <img src={fbIcon} alt="" />
          <img src={googleIcon} alt="" />
        </LoginModalIconWrap>
        <hr />
        <h3>Login</h3>
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
        <h6>
          {" "}
          If you Don't have Account,
          <span onClick={() => history.push(`/signup`)}>SIGN UP</span>
        </h6>
      </ModalContainer>
    </Modal>
  );
};

export default LoginModal;
