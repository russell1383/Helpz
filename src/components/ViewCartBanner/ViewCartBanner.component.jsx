import React from "react";
import { Col, Row } from "react-grid-system";
import Sticky from "react-stickynode";
import CartProduct from "../CartProduct/CartProduct.component";
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import MenuItems from "../MenuItems/MenuItems.component";
import {
  TotalBox,
  ViewCartBannerContainer,
  ViewCartContainer,
  ViewCartProductWrap,
} from "./ViewCartBanner.style";

const ViewCartBanner = () => {

  return (
    <>
      <ViewCartBannerContainer>
        <Row nogutter>
          <Col md={2} className="d-none">
            <Sticky
              enabled={true}
              top={90}
              bottomBoundary="#payment_option"
              className="category_card"
            >
              <CategoriesCard />
            </Sticky>
          </Col>

          <Col md={8}>
            <ViewCartContainer>
              <h3>My Cart</h3>
              <ViewCartProductWrap>
                <CartProduct />
              </ViewCartProductWrap>

              <TotalBox>
                <h3>
                  Total Payable : <span> 130 TK</span>
                </h3>
              </TotalBox>

              <p>**Total Savings : 130TK</p>
            </ViewCartContainer>
          </Col>

          <Col md={2} className="d-none">
            <Sticky enabled={true} top={90} bottomBoundary="#payment_option">
              <MenuItems />
            </Sticky>
          </Col>
        </Row>
      </ViewCartBannerContainer>
    </>
  );
};

export default ViewCartBanner;
