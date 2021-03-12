import React from "react";
import { Col, Row } from "react-grid-system";
import Sticky from "react-stickynode";
import AccountContent from "../AccountContent/AccountContent.component";
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import MenuItems from "../MenuItems/MenuItems.component";
import { ViewCartBannerContainer } from "../ViewCartBanner/ViewCartBanner.style";

const AccountBanner = () => {
  return (
    <>
      <ViewCartBannerContainer>
        <Row nogutter>
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

          <Col xs={12} md={9}>
            <AccountContent />
          </Col>

          <Col md={1.5} className="d-none">
            <Sticky enabled={true} top={81} bottomBoundary="#payment_option">
              <MenuItems />
            </Sticky>
          </Col>
        </Row>
      </ViewCartBannerContainer>
    </>
  );
};

export default AccountBanner;
