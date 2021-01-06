import React from "react";
import {
    CustomGalleryImg,
  GalleryImg,
  InnerGalleryBox,
  LeftGalleryBox,
  ProductGalleryContainer,
  RightGalleryBox,
} from "./ProductGallery.style";
import Img1 from "../../assets/images/img-1.png";
import Img2 from "../../assets/images/img-2.png";
import Img4 from "../../assets/images/img-4.png";
import { Col, Row } from "react-grid-system";

const ProductGallery = () => {
  return (
    <>
      <ProductGalleryContainer>

        <Row gutterWidth={10}>
          <Col md={6}>
            <GalleryImg src={Img1} alt="" />
          </Col>
          <Col md={6}>
            <CustomGalleryImg src={Img2} alt="" />
            <Row gutterWidth={10}>
              <Col xs={6}> <GalleryImg src={Img4} alt="" /></Col>
              <Col xs={6}> <GalleryImg src={Img4} alt="" /></Col>
            </Row>
          </Col>
        </Row>
      </ProductGalleryContainer>
    </>
  );
};

export default ProductGallery;
