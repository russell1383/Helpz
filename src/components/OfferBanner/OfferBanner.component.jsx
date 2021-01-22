import React from "react";
import { Col, Row } from "react-grid-system";
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import MenuItems from "../MenuItems/MenuItems.component";
import OfferProductCard from "../OfferProductCard/OfferProductCard.component";
import {
  OfferBannerContainer,
  OfferBannerContent,
  OfferBannerContentContainer,
} from "./OfferBanner.style";

const OfferBanner = () => {
  return (
    <>
      <OfferBannerContainer>
        <Row nogutter>
          <Col md={2} className="d-none">
            <CategoriesCard />
          </Col>
          <Col md={8}>
            <OfferBannerContentContainer>
              <h2>Offers Only For You</h2>
              <OfferBannerContent>
                <OfferProductCard />
                <OfferProductCard />
                <h2>Special Offers</h2>
                <OfferProductCard />
                <OfferProductCard />
                <OfferProductCard />
                <OfferProductCard />
                <OfferProductCard />
                <OfferProductCard />
              </OfferBannerContent>
            </OfferBannerContentContainer>
          </Col>
          <Col md={2} className="d-none">
            <MenuItems />
          </Col>
        </Row>
      </OfferBannerContainer>
    </>
  );
};

export default OfferBanner;
