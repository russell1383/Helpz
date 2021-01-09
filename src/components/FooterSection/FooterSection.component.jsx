import React from "react";
import {
  FooterSectionContainer,
  FooterSectionContainerWrap,
  NewsletterSection,
} from "./FooterSection.style";

const FooterSection = () => {
  return (
    <>
      <FooterSectionContainerWrap >
        <FooterSectionContainer>
          <div>
            <h3>Customer Service</h3>
            <p>Help home</p>
            <p>Store locator</p>
            <p>Your Account</p>
            <p>Track your order</p>
            <p>Delivery & collection</p>
            <p>Product recall</p>
            <p>Email sign up</p>
            <p>Stay safe online</p>
          </div>
          <div>
            <h3>Payment Method</h3>
            <p>Payment types</p>
            <p>Gift cards</p>
            <p>Voucher codes</p>
            <p>Helpz loyalty Card</p>

            <h3>Aftercare</h3>
            <p>Product support</p>
            <p>Product care</p>
          </div>
          <div>
            <h3>Product information</h3>
            <p>Advice & inspiration</p>
            <p>Product reviews</p>
            <div></div>

            {/* <h3>About Argos</h3>
            <p>About us</p>
            <p>Helpz for Business</p>
            <p>Press Enqueries</p>
            <p>Nectar at Helpz</p> */}
            <NewsletterSection none className="newsletter">
              <h2>Newsletter</h2>
              <small>
                You may unsubscribe at any moment. For that purpose, please{" "}
                <br /> find our contact info in the legal notice.
              </small>
              <div>
                <input type="text" /> 
                <div>Signup</div>
              </div>
            </NewsletterSection>
          </div>
        </FooterSectionContainer>
      </FooterSectionContainerWrap>
    </>
  );
};

export default FooterSection;
