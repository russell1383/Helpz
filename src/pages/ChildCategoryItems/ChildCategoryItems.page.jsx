import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryItemsBanner from '../../components/CategoryItemsBanner/CategoryItemsBanner.component';
import Footer from '../../components/Footer/Footer.component';
import FooterBottomSection from '../../components/FooterBottomSection/FooterBottomSection.component';
import FooterSection from '../../components/FooterSection/FooterSection.component';
import Navbar from '../../components/Navbar/Navbar.component';

const ChildCategoryItems = () => {
    const {childCategoryId,childCategoryName} = useParams()
    return (
        <>
              <Navbar />
      <CategoryItemsBanner id={childCategoryId} name={childCategoryName} />
      <div id="end-point" />
      <FooterSection />
      <FooterBottomSection />
      <Footer />
        </>
    );
};

export default ChildCategoryItems;