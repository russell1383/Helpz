import React from "react";
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

const ViewCartPaymentOptions = () => {
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
        <PickupOptions>
          <option value="Dhanmondi Branch">Dhanmondi Branch</option>
        </PickupOptions>
        <h3>Payment Options :</h3>

        <h3>Mobile Banking :</h3>
        <PaymentOptionsRow>
          <MobileBankingImg src={nagad} alt="" />
          <MobileBankingImg src={bkash} alt="" />
          <MobileBankingImg src={ipay} alt="" />
          <MobileBankingImg src={uCash} alt="" />
        </PaymentOptionsRow>

        <h3>Card Payment :</h3>

        <PaymentOptionsRow>
          <OtherBankingImg src={visa} alt="" />
          <OtherBankingImg src={masterCard} alt="" />
          <OtherBankingImg src={dbbl} alt="" />
          <OtherBankingImg src={ciyuMax} alt="" />
        </PaymentOptionsRow>

        <h3>Net Banking :</h3>

        <PaymentOptionsRow>
          <OtherBankingImg src={brancBank} alt="" />
          <OtherBankingImg src={eblSky} alt="" />
          <OtherBankingImg src={islamiBank} alt="" />
          <OtherBankingImg src={cityBank} alt="" />
        </PaymentOptionsRow>
      </ViewCartContainer>
    </div>
  );
};

export default ViewCartPaymentOptions;
