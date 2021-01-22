import React from "react";
import Footer from "../../components/Footer/Footer.component";
import FooterBottomSection from "../../components/FooterBottomSection/FooterBottomSection.component";
import FooterSection from "../../components/FooterSection/FooterSection.component";
import Navbar from "../../components/Navbar/Navbar.component";
import ProductDetails from "../../components/ProductDetails/ProductDetails.component";
import ProductInfoAdImg from "../../components/ProductInfoAdImg/ProductInfoAdImg.component";
import ProductInfoBanner from "../../components/ProductInfoBanner/ProductInfoBanner.component";
import ProductMoreDetails from "../../components/ProductMoreDetails/ProductMoreDetails.component";
import Products from "../../components/Products/Products.component";

const ProductInfo = () => {
  return (
    <>
      <Navbar />
      <ProductInfoBanner />
      <ProductDetails />
      <ProductInfoAdImg/>
      <ProductMoreDetails/>
      <FooterSection />
      <FooterBottomSection />
      <Footer />
    </>
  );
};

export default ProductInfo;
