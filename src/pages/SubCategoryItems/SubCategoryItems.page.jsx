import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.component';
import FooterBottomSection from '../../components/FooterBottomSection/FooterBottomSection.component';
import FooterSection from '../../components/FooterSection/FooterSection.component';
import Navbar from '../../components/Navbar/Navbar.component';
import SubCategoryItemsContent from '../../components/SubCategoryItemsContent/SubCategoryItemsContent.component';

const SubCategoryItems = () => {
    const {subcategoryId,subCategoryName} = useParams()
    return (
        <>
            <Navbar />
            <SubCategoryItemsContent id={subcategoryId} name={subCategoryName} />
      <div id="end-point" />
      <FooterSection />
      <FooterBottomSection />
      <Footer />
        </>
    );
};

export default SubCategoryItems;