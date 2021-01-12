import React from "react";
import AdImage from "../../components/AdImage/AdImage.component.jsx";
import Banner from "../../components/Banner/Banner.component.jsx";
import Footer from "../../components/Footer/Footer.component.jsx";
import FooterBottomSection from "../../components/FooterBottomSection/FooterBottomSection.component.jsx";
import FooterSection from "../../components/FooterSection/FooterSection.component.jsx";
import Navbar from "../../components/Navbar/Navbar.component.jsx";
import ProductGallery from "../../components/ProductGallery/ProductGallery.component.jsx";
import ProductImage from "../../components/ProductImage/ProductImage.component.jsx";
import Products from "../../components/Products/Products.component.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.component.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <Products />
      <ProductImage />
      <Products />
      <Products />
      <AdImage />
      <Products />
      <ProductGallery />
      <Products />
      <Testimonials />
      <FooterSection />
      <FooterBottomSection />
      <Footer />
    </>
  );
};

export default Home;
