import React from "react";
import { Col, Row } from "react-grid-system";
import Sticky from "react-stickynode";
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import MenuItems from "../MenuItems/MenuItems.component";
import {
  MdProductInfoOffLabel,
  MdProductPrice,
  ProductBannerContainer,
  ProductInfo,
  ProductInfoBox,
  ProductInfoBoxImgContainer,
  ProductInfoBoxImgContainerWrap,
  ProductInfoContainer,
  ProductInfoOffLabel,
  ProductInfoPickupTimingBox,
  ProductOrderButtonsContainer,
  ProductSubImgContainer,
  RewardContainer,
} from "./ProductInfoBanner.style";

import img from "../../assets/images/product-images/product-1.png";
import leftArrow from "../../assets/icons/left-arrow.png";
import rightArrow from "../../assets/icons/right-arrow.png";

const ProductInfoBanner = () => {
  return (
    <>
      <ProductBannerContainer>
        <Row nogutter>
          <Col md={2} className="d-none">
            <Sticky
              enabled={true}
              top={90}
              bottomBoundary="#more-details"
              className="category_card"
            >
              <CategoriesCard />
            </Sticky>
          </Col>

          <Col md={8}>
            <ProductInfoContainer>
              <p className="bread_crumb">
                HOME > FRUITS & VEGETABLES > FRESH VEGETABLES > POTATO, ONION &
                TOMATO > FRESHO ONION
              </p>

              <ProductInfoBox>
                <ProductInfoBoxImgContainerWrap>
                  <ProductInfoBoxImgContainer>
                    <img src={img} alt="" />
                    <MdProductInfoOffLabel> 25% <br /> Off</MdProductInfoOffLabel>
                  </ProductInfoBoxImgContainer>

                  <ProductSubImgContainer>
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />

                    <div className="left_arrow">
                      <img src={leftArrow} className="arrow_icon" alt="" />
                    </div>
                    <div className="right_arrow">
                      <img src={rightArrow} className="arrow_icon" alt="" />
                    </div>
                  </ProductSubImgContainer>
                </ProductInfoBoxImgContainerWrap>
                <ProductInfo>
                  <p>Fresh</p>
                  <h3>Onion</h3>
                  <p>1 kg</p>
                  <p className="d-none">
                    Price : <del>30Tk</del>
                  </p>
                  <h3 className="price_tag d-none">20Tk</h3>
                  <h3>Fresh Onion Offer</h3>
                  <p>
                    Fresh Onion Offer If You buy 5 kg , we will provide 100
                    Loyalty Reward as gift
                  </p>

                  <RewardContainer>
                    <p>Buy This & get reward : </p>
                    <div>20</div>
                  </RewardContainer>
                  <p>Pickup timeing : </p>
                  <ProductInfoPickupTimingBox>
                    <div>2h</div>
                    <div>4h</div>
                    <div>10h</div>
                    <div>12h</div>
                  </ProductInfoPickupTimingBox>

                  <ProductOrderButtonsContainer>
                    <div>
                      <div className="quantity_box">
                        <button>+</button>
                        1kg
                        <button>-</button>
                      </div>

                      <button>Add To cart</button>
                    </div>
                    <div>
                      <button>Order Now</button>
                      <button>Add to Wish List</button>
                    </div>
                  </ProductOrderButtonsContainer>

                  <ProductInfoOffLabel>
                    25% <br /> Off
                  </ProductInfoOffLabel>

                  <MdProductPrice>
                  <p>
                    Price : <del>30Tk</del>
                  </p>
                  <h3 className="price_tag">20Tk</h3>
                  </MdProductPrice>

                </ProductInfo>
              </ProductInfoBox>

              <h2>Packeg Offer</h2>

              <div className="packeg_offer">
                <p>5 KG</p>
                <p>30% OFF</p>
                <p>80 TK</p>
                <input type="radio" name="offer" className="circle"/>
              </div>
              <div className="packeg_offer">
              <p>5 KG</p>
                <p>30% OFF</p>
                <p>80 TK</p>
                <input type="radio" name="offer" className="circle"/>
              </div>
            </ProductInfoContainer>
          </Col>

          <Col md={2} className="d-none">
            <Sticky enabled={true} top={90} bottomBoundary="#more-details">
              <MenuItems />
            </Sticky>
          </Col>
        </Row>
      </ProductBannerContainer>
    </>
  );
};

export default ProductInfoBanner;
