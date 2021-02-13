import React, { useState } from "react";
import Sticky from "react-stickynode";
import "./Banner.css";
import {
  BannerBottomPart,
  BannerContainer,
  BannerImg,
  BannerTopPart,
  CustomBannerImgFive,
  CustomBannerImgFour,
  CustomBannerImgFourRight,
  CustomBannerImgThree,
  CustomBannerImgTwo,
  TextAboveBannerImg,
} from "./Banner.style";
import { Row, Col } from "react-grid-system";
import bannerImg1 from "../../assets/images/banner-images/banner-img-1.png";
import bannerImg2 from "../../assets/images/banner-images/banner-img-2.png";
import bannerImg3 from "../../assets/images/banner-images/banner-img-3.png";
import bannerImg4 from "../../assets/images/banner-images/banner-img-4.png";
import bannerImg5 from "../../assets/images/banner-images/banner-img-5.png";
import bannerImg6 from "../../assets/images/banner-images/banner-img-6.png";
import bannerImg7 from "../../assets/images/banner-images/banner-img-7.png";
import bannerImg8 from "../../assets/images/banner-images/banner-img-8.png";
import bannerImg9 from "../../assets/images/banner-images/banner-img-9.png";
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import MenuItems from "../MenuItems/MenuItems.component";

const Banner = () => {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <BannerContainer>
        <BannerTopPart>
          <Row gutterWidth={6}>
            <Col xs={2.5} md={1.5} className="p-relative overflow-hidden">
              <BannerImg src={bannerImg1} alt="" />
            </Col>
            <Col
              xs={7}
              md={4.5}
              className="overflow-hidden"
              onMouseOver={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
            >
              <BannerImg src={bannerImg2} alt="" />
              <TextAboveBannerImg showText={showText}>
                <h3>100% NATURAL</h3>
                <h1>
                  Fresh Vegetables <br /> And Fruits
                </h1>
              </TextAboveBannerImg>
            </Col>
            <Col md={4.5} className="d-none">
              <CustomBannerImgThree src={bannerImg3} alt="" />
              <Row nogutter>
                <Col md={6} style={{position:"relative"}} className="flip-container">
                  <CustomBannerImgFour src={bannerImg4} className="front"/>
                  <CustomBannerImgFour src={bannerImg5} className="back"/>
                </Col>
                <Col md={6} style={{position:"relative"}} className="flip-container">
                  <CustomBannerImgFourRight
                    src={bannerImg5}
                    className="left-space "
                  />
                 
                </Col>
              </Row>
            </Col>

            <Col xs={2.5} md={1.5} className="overflow-hidden">
              <BannerImg src={bannerImg6} alt="" />
            </Col>
          </Row>

          <CustomBannerImgFive
            src={bannerImg3}
            alt=""
            className="custom-d-none"
          />

          <Row gutterWidth={6} className="custom-d-none">
            <Col xs={6} className="overflow-hidden">
              <BannerImg src={bannerImg4} />
            </Col>
            <Col xs={6} className="overflow-hidden">
              <BannerImg src={bannerImg5} />
            </Col>
          </Row>
        </BannerTopPart>

        <BannerBottomPart>
          <Row gutterWidth={6}>
            <Col md={1.5} className="d-none">
              <Sticky
                enabled={true}
                top={81}
                bottomBoundary="#testimonials"
                className="category_card"
              >
                <CategoriesCard />
              </Sticky>
            </Col>
            <Col xs={6} md={4.5} className="overflow-hidden">
              <BannerImg src={bannerImg7} className="bannerImg1" alt="" />
              <TextAboveBannerImg>
                <h3>100% NATURAL</h3>
                <h1>
                  Fresh Vegetables <br /> And Fruits
                </h1>
              </TextAboveBannerImg>
            </Col>
            <Col xs={6} md={4.5}>
              <CustomBannerImgTwo
                src={bannerImg8}
                className="bannerImg1"
                alt=""
              />
              <CustomBannerImgTwo
                src={bannerImg9}
                className="bannerImg1"
                alt=""
              />
            </Col>
            <Col md={1.5} className="d-none">
              <Sticky enabled={true} top={81} bottomBoundary="#testimonials"  className="category_card">
                <MenuItems />
              </Sticky>
            </Col>
          </Row>
        </BannerBottomPart>

        {/*  */}
      </BannerContainer>
    </>
  );
};

export default Banner;
