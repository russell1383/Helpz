import React from "react";
import { ViewCartContainer } from "../ViewCartBanner/ViewCartBanner.style";
import nagad from "../../assets/icons/Nagad-Logo 1.png";
import bkash from '../../assets/icons/Bkash logo.png';
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
import { MobileBankingImg, OtherBankingImg, PaymentOptionsRow } from "./ViewCartPaymentOptions.style";

const ViewCartPaymentOptions = () => {
  return (
    <div id="payment_option">
      <ViewCartContainer>
              <h3>Payment Options</h3>
              
              <p>Mobile Banking</p>

              <PaymentOptionsRow>
                  <MobileBankingImg  src={nagad} alt=""/>
                  <MobileBankingImg src={bkash} alt=""/>
                <MobileBankingImg src={ipay} alt=""/>
                  <MobileBankingImg src={uCash} alt=""/>
              </PaymentOptionsRow>

              <p>Card Payment</p>

              <PaymentOptionsRow>
                  <OtherBankingImg src={visa} alt=""/>
                  <OtherBankingImg src={masterCard} alt=""/>
                  <OtherBankingImg src={dbbl} alt=""/>
                  <OtherBankingImg src={ciyuMax} alt=""/>
              </PaymentOptionsRow>

              <p>Net Banking</p>

              <PaymentOptionsRow>
                  <OtherBankingImg src={brancBank} alt=""/>
                  <OtherBankingImg src={eblSky} alt=""/>
                  <OtherBankingImg src={islamiBank} alt=""/>
                  <OtherBankingImg src={cityBank} alt=""/>
              </PaymentOptionsRow>

      </ViewCartContainer>
    </div>
  );
};

export default ViewCartPaymentOptions;
