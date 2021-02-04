import React, { useContext, useEffect, useState } from "react";
import { ViewCartContainer } from "../ViewCartBanner/ViewCartBanner.style";
import nagad from "../../assets/icons/Nagad-Logo 1.png";
import bkash from "../../assets/icons/Bkash logo.png";
import ipay from "../../assets/icons/Ipay.png";
import uCash from "../../assets/icons/Ucash.png";
import visa from "../../assets/icons/Visa card.png";
import masterCard from "../../assets/icons/Mastar card.png";
import dbbl from "../../assets/icons/dbbl nexus.png";
import ciyuMax from "../../assets/icons/Ciyu max.png";
import brancBank from "../../assets/icons/brac_bank.png";
import eblSky from "../../assets/icons/Ebl sky.png";
import islamiBank from "../../assets/icons/Islami bank.png";
import cityBank from "../../assets/icons/City bank.png";
import {
  DiscountContainer,
  MobileBankingImg,
  OtherBankingImg,
  PaymentOptionsRow,
  PickupOptions,
} from "./ViewCartPaymentOptions.style";
import LoginModal from "../LoginModal/LoginModal.component";
import { UserContext } from "../../App";
import axios from "axios";

const ViewCartPaymentOptions = () => {
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const [addToCart, setAddToCart] = value2;
  const [pickup, setPickup] = useState();
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setPickup(e.target.value);
  };

  const handleOrderReq = () => {
    if (loggedInUser.phone) {
      let orderInfo = {
        user_id: loggedInUser.id,
        customer_email: loggedInUser.email,
        customer_name: loggedInUser.name,
        customer_phone: loggedInUser.phone,
        method: "Amarpay",
        shipping: "pickup",
        pickup_location: pickup,
        ordered_products: [...addToCart],
        pay_amount: addToCart.reduce((a, b) => a + b.totalPrice, 0),
        txnid: "",
        payment_status: "",
        cupon_code: "",
      };

        axios
          .post("https://mudee.shop/eCommerce/api/order/store", orderInfo)
          .then((response) => {
            console.log(response);
            setOpen(false);
          });

      console.log(orderInfo);
    } else {
      setOpen(true);
    }
  };

  const handleLogin = (data, e) => {
    axios
      .post("https://mudee.shop/eCommerce/api/login", data)
      .then((response) => {
        if (response.data.errors) {
          // setError(response.data.errors[0]);
        } else {
          setLoggedInUser(response.data);
          // setError("");

          handleOrderReq();
          console.log("hello")
        }
        e.target.reset();
      });
  };

  return (
    <div id="payment_option">
      <ViewCartContainer>
        <DiscountContainer>
          <div>
            <p>Use Reward Point</p>
          </div>
          <div>
            <p>Use Reward Point</p>
          </div>
          <div>
            <p>Use Reward Point</p>
          </div>
        </DiscountContainer>

        <h3>Pickup Point :</h3>
        <PickupOptions onChange={handleChange}>
          <option value="">----Select a pick point----</option>
          <option value="Dhanmondi Branch">Dhanmondi Branch</option>
        </PickupOptions>
        <h3>Payment Options :</h3>

        <h3>Mobile Banking :</h3>
        <PaymentOptionsRow>
          <LoginModal
            open={open}
            close={onCloseModal}
            handleLogin={handleLogin}
          />
          <MobileBankingImg src={nagad} alt="" onClick={handleOrderReq} />
          <MobileBankingImg src={bkash} alt="" onClick={handleOrderReq} />
          <MobileBankingImg src={ipay} alt="" onClick={handleOrderReq} />
          <MobileBankingImg src={uCash} alt="" onClick={handleOrderReq} />
        </PaymentOptionsRow>

        <h3>Card Payment :</h3>

        <PaymentOptionsRow>
          <OtherBankingImg src={visa} alt="" onClick={handleOrderReq} />
          <OtherBankingImg src={masterCard} alt="" onClick={handleOrderReq} />
          <OtherBankingImg src={dbbl} alt="" onClick={handleOrderReq} />
          <OtherBankingImg src={ciyuMax} alt="" onClick={handleOrderReq} />
        </PaymentOptionsRow>

        <h3>Net Banking :</h3>

        <PaymentOptionsRow>
          <OtherBankingImg src={brancBank} alt="" onClick={handleOrderReq} />
          <OtherBankingImg src={eblSky} alt="" onClick={handleOrderReq} />
          <OtherBankingImg src={islamiBank} alt="" onClick={handleOrderReq} />
          <OtherBankingImg src={cityBank} alt="" onClick={handleOrderReq} />
        </PaymentOptionsRow>
      </ViewCartContainer>
    </div>
  );
};

export default ViewCartPaymentOptions;
