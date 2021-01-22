import React from "react";
import OfferBanner from "../../components/OfferBanner/OfferBanner.component";
import Footer from "../../components/Footer/Footer.component";
import FooterBottomSection from "../../components/FooterBottomSection/FooterBottomSection.component";
import FooterSection from "../../components/FooterSection/FooterSection.component";
import Navbar from "../../components/Navbar/Navbar.component";
const Offer = () => {
  return (
    <>
      <Navbar />
      <OfferBanner />
      <FooterSection />
      <FooterBottomSection />
      <Footer />
    </>
  );
};

export default Offer;
