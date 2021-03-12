import React from "react";
import AccountBanner from "../../components/AccountBanner/AccountBanner.component";
import Footer from "../../components/Footer/Footer.component";
import FooterBottomSection from "../../components/FooterBottomSection/FooterBottomSection.component";
import FooterSection from "../../components/FooterSection/FooterSection.component";
import Navbar from "../../components/Navbar/Navbar.component";

const Account = () => {
  return (
    <>
      <Navbar />
      <AccountBanner />
      <FooterSection />
      <FooterBottomSection />
      <Footer />
    </>
  );
};

export default Account;
