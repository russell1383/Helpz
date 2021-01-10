import React from "react";
import { FooterRightSide } from "../Footer/Footer.style";
import {
  FooterSectionContainerWrap,
} from "../FooterSection/FooterSection.style";
import { FooterBottomNewsletterSection, FooterBottomSectionContainer, FooterBottomSectionRightSide } from "./FooterBottomSection.style";
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
const FooterBottomSection = () => {
  return (
    <>
      <FooterSectionContainerWrap>
        <FooterBottomSectionContainer>
          <FooterBottomNewsletterSection>
            <h2>Newsletter</h2>
            <small>
              You may unsubscribe at any moment. For that purpose, please
              find our contact info in the legal notice.
            </small>
            <div>
              <input type="text" />
              <div>Signup</div>
            </div>
          </FooterBottomNewsletterSection>

          <FooterBottomSectionRightSide>
            <div>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
              <FontAwesomeIcon icon={faTwitter} size="lg" />
              <FontAwesomeIcon icon={faYoutube} size="lg" />
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </div>
            <small>Download App Helpz From</small>
            <div>
              <img src={GooglePlayStoreImg} alt="" />
              <img src={AppleAppStoreImg} alt="" />
            </div>
          </FooterBottomSectionRightSide>
        </FooterBottomSectionContainer>
      </FooterSectionContainerWrap>
    </>
  );
};

export default FooterBottomSection;
