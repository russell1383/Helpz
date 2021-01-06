import React from "react";
import {
  BannerBottomPart,
  BannerContainer,
  BannerImg,
  BannerTopPart,
  CustomBannerImgOne,
  CustomBannerImgTwo,
} from "./Banner.style";
import { Container, Row, Col } from "react-grid-system";
import bannerImg1 from "../../assets/images/banner-images/banner-img-1.png";
import bannerImg2 from "../../assets/images/banner-images/banner-img-2.png";
import bannerImg3 from "../../assets/images/banner-images/banner-img-3.png";
import bannerImg4 from "../../assets/images/banner-images/customImg.png";
import bannerImg5 from "../../assets/images/banner-images/banner-img-5.png";
import bannerImg6 from "../../assets/images/banner-images/banner-img-6.png";
import bannerImg7 from "../../assets/images/banner-images/banner-img-7.png";
import bannerImg8 from "../../assets/images/banner-images/banner-img-8.png";
import bannerImg9 from "../../assets/images/banner-images/banner-img-9.png";
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import MenuItems from "../MenuItems/MenuItems.component";

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerTopPart>
          <Row gutterWidth={6}>
            <Col md={2}>
              <BannerImg src={bannerImg1} className="bannerImg1" alt="" />
            </Col>
            <Col md={4}>
              <BannerImg src={bannerImg2} className="bannerImg1" alt="" />
            </Col>
            <Col md={4}>
              <BannerImg
                src={bannerImg4}
                className="bannerImg1"
                alt=""
              />
            </Col>
            <Col md={2}>
              <BannerImg src={bannerImg6} className="bannerImg1" alt="" />
            </Col>
          </Row>
        </BannerTopPart>
        <BannerBottomPart>
          <Row gutterWidth={6}>
            <Col md={2}>
              <CategoriesCard/>
            </Col>
            <Col md={4}>
              <BannerImg src={bannerImg7} className="bannerImg1" alt="" />
            </Col>
            <Col md={4}>
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
            <Col md={2}>
              <MenuItems/>
            </Col>
          </Row>
        </BannerBottomPart>

        <Container></Container>
      </BannerContainer>
    </>
  );
};

export default Banner;
