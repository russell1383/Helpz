import React from "react";
import {
  CallInfo,
  FooterContainer,
  FooterLeftSide,
  FooterRightSide,
  FooterText,
} from "./Footer.style";
import phoneIcon from "../../assets/icons/phone-ring.png";
import AppleAppStoreImg from "../../assets/icons/apple-app-store.png";
import GooglePlayStoreImg from "../../assets/icons/google-play-store.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <FooterContainer>

        <FooterLeftSide>
          <h1>HelpZ</h1>
          <div>
            <small>For any Issue call us ON</small>
            <CallInfo>
              <img src={phoneIcon} alt="" />
              <p>+880 172 56565656</p>
            </CallInfo>
          </div>
        </FooterLeftSide>

      
        <FooterRightSide>
          <div>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </div>
          <small>Download App Helpz From</small>
          <div>
            <img src={GooglePlayStoreImg} alt="" />
            <img src={AppleAppStoreImg} alt="" />
          </div>
        </FooterRightSide>

      </FooterContainer>
      
      <FooterText>Copyright © Helpz.bd.com. All Rights Reserved</FooterText>
    </>
  );
};

export default Footer;
