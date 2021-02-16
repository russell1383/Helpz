import React from "react";
import { Col, Row } from "react-grid-system";
import Sticky from "react-stickynode";
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
        <Col md={1.5} className="d-none">
            <Sticky
              enabled={true}
              top={81}
              bottomBoundary="#end-point"
              className="category_card"
            >
              <CategoriesCard />
            </Sticky>
          </Col>
          <Col xs={12} md={9}>
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
          <Col md={1.5} className="d-none">
            <Sticky enabled={true} top={81} bottomBoundary="#end-point">
              <MenuItems />
            </Sticky>
          </Col>
        </Row>
      </OfferBannerContainer>
    </>
  );
};

export default OfferBanner;
