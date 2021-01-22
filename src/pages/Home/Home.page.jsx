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

      
      <Products header={'Best Deal Today'} subheader={'Best Selling Products'} />

      <Products header={'Most Popular'} subheader={'People Often Buy Near You'}/>
      <ProductImage />



      <Products header={'Food Grain Oil and Massala'} subheader={'Best Food Grain Oil and Massala'}/>

      <Products  header={'Drinks and Bevarage'} subheader={'Drinks and Bevarage for Refreshment'}/>
      <AdImage />


      <Products  header={'Snakes and Biscuits'} subheader={'Healthy Snakes and Biscuits'}/>
      <ProductGallery />


      <Products  header={'Cleaning and Household'} subheader={'Best Cleaning and Household for you'}/>
      <Testimonials />
      <FooterSection />
      <FooterBottomSection />
      <Footer />
    </>
  );
};

export default Home;
