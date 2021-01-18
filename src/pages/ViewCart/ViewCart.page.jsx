import React from "react";
import Footer from "../../components/Footer/Footer.component";
import FooterBottomSection from "../../components/FooterBottomSection/FooterBottomSection.component";
import FooterSection from "../../components/FooterSection/FooterSection.component";
import Navbar from "../../components/Navbar/Navbar.component";
import Testimonials from "../../components/Testimonials/Testimonials.component";
import ViewCartBanner from "../../components/ViewCartBanner/ViewCartBanner.component";
import ViewCartPaymentOptions from "../../components/ViewCartPaymentOptions/ViewCartPaymentOptions.component";

const ViewCart = () => {
  return (
    <>
      <Navbar />
      <ViewCartBanner />
      <ViewCartPaymentOptions />
      <FooterSection />
      <FooterBottomSection />
      <Footer />
    </>
  );
};

export default ViewCart;
