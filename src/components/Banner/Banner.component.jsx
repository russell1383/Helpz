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
import axios from "axios";
import loading from "../../assets/gifs/loader.gif";
import { LoaderGif } from "../CategoryItemsBanner/CategoryItemsBanner.style";

const Banner = () => {
  const [showText, setShowText] = useState(false);
  const [bannerImgs, setBannerImgs] = useState([]);
  const [loader, setLoader] = useState(true);

  useState(() => {
    async function fetchData() {
      let response = await axios("https://mudee.shop/helpz/api/banner");
      let imgs = await response.data;
      setBannerImgs(imgs);
      setLoader(false);
    }

    fetchData();
  }, []);

  // https://mudee.shop/helpz/assets/images/banners/161408474707c71adf-ef0e-4d08-8fc6-084c1dd3ccf6.jpg
  // console.log(bannerImgs[0].photo);
  return (
    <>
      {loader ? (
        <LoaderGif src={loading} />
      ) : (
        <BannerContainer>
          <BannerTopPart>
            <Row gutterWidth={6}>
              <Col xs={2.5} md={1.5} className="p-relative overflow-hidden">
                <BannerImg
                  src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[0].photo}`}
                  alt=""
                />
              </Col>
              <Col
                xs={7}
                md={4.5}
                className="overflow-hidden"
                onMouseOver={() => setShowText(true)}
                onMouseLeave={() => setShowText(false)}
              >
                <BannerImg
                  src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[1].photo}`}
                  alt=""
                />
                <TextAboveBannerImg showText={showText}>
                  <h3>100% NATURAL</h3>
                  <h1>
                    Fresh Vegetables <br /> And Fruits
                  </h1>
                </TextAboveBannerImg>
              </Col>
              <Col md={4.5} className="d-none">
                <CustomBannerImgThree
                  src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[2].photo}`}
                  alt=""
                />
                <Row nogutter>
                  <Col
                    md={6}
                    style={{ position: "relative" }}
                    className="flip-container"
                  >
                    <CustomBannerImgFour
                      src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[3].photo}`}
                      className="front"
                    />
                    <CustomBannerImgFour
                      src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[4].photo}`}
                      className="back"
                    />
                  </Col>
                  <Col
                    md={6}
                    style={{ position: "relative" }}
                    className="flip-container"
                  >
                    <CustomBannerImgFourRight
                      src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[4].photo}`}
                      className="left-space "
                    />
                  </Col>
                </Row>
              </Col>

              <Col xs={2.5} md={1.5} className="overflow-hidden">
                <BannerImg
                  src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[5].photo}`}
                  alt=""
                />
              </Col>
            </Row>

            <CustomBannerImgFive
              src={bannerImg3}
              alt=""
              className="custom-d-none"
            />

            <Row gutterWidth={6} className="custom-d-none">
              <Col xs={6} className="overflow-hidden">
                <BannerImg
                  src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[3].photo}`}
                />
              </Col>
              <Col xs={6} className="overflow-hidden">
                <BannerImg
                  src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[4].photo}`}
                />
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
                <BannerImg
                  src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[6].photo}`}
                  className="bannerImg1"
                  alt=""
                />
                <TextAboveBannerImg>
                  <h3>100% NATURAL</h3>
                  <h1>
                    Fresh Vegetables <br /> And Fruits
                  </h1>
                </TextAboveBannerImg>
              </Col>
              <Col xs={6} md={4.5}>
                <CustomBannerImgTwo
                  src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[7].photo}`}
                  className="bannerImg1"
                  alt=""
                />
                <CustomBannerImgTwo
                  src={`https://mudee.shop/helpz/assets/images/banners/${bannerImgs[8].photo}`}
                  className="bannerImg1"
                  alt=""
                />
              </Col>
              <Col md={1.5} className="d-none">
                <Sticky
                  enabled={true}
                  top={81}
                  bottomBoundary="#testimonials"
                  className="category_card"
                >
                  <MenuItems />
                </Sticky>
              </Col>
            </Row>
          </BannerBottomPart>

          {/*  */}
        </BannerContainer>
      )}
    </>
  );
};

export default Banner;
