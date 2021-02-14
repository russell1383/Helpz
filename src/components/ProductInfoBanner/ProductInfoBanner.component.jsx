import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import Sticky from "react-stickynode";
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import { UserContext } from "../../App";
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
import { useHistory, useParams } from "react-router-dom";
import { productData } from "../../productData/productData";
import { store } from "react-notifications-component";
import ReactImageMagnify from "react-image-magnify";

const ProductInfoBanner = () => {
  const history = useHistory();
  const { productName } = useParams();
  const [product, setProduct] = useState({});
  const { value, value2, value3 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;
  const [pdInfo, setPdInfo] = value3;

  const handleAddToCart = (item) => {
    let newItem = [...addToCart, item];
    item.price = parseInt(item.price);
    item.quantity = 1;
    item.totalPrice = item.price;
    item.totalQuantity = item.quantity;
    setAddToCart(newItem);
    store.addNotification({
      title: "Product Added to Cart",
      message: item.name,
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  };

  const quantityIncrement = (id) => {
    if (addToCart.find((item) => item.id === id)) {
      const product = addToCart.find((product) => product.id === id);
      product.totalQuantity = product.totalQuantity + 1;
      product.totalPrice = product.price * product.totalQuantity;
      var objectIndex = addToCart.findIndex((obj) => obj.id === product.id);
      var newItems = [...addToCart];
      newItems[objectIndex] = product;
      setAddToCart(newItems);
    }
  };

  const quantityDecrement = (id) => {
    if (addToCart.find((item) => item.id === id)) {
      const product = addToCart.find((product) => product.id === id);
      if (product.totalQuantity > 1) {
        product.totalQuantity = product.totalQuantity - 1;
        product.totalPrice = product.price * product.totalQuantity;
        var objectIndex = addToCart.findIndex((obj) => obj.id === product.id);
        var newItems = [...addToCart];
        newItems[objectIndex] = product;
        setAddToCart(newItems);
      }
    }
  };

  console.log(pdInfo);

  return (
    <>
      {pdInfo.name ? (
        <ProductBannerContainer>
          <Row nogutter>
            <Col md={1.5} className="d-none">
              <Sticky
                enabled={true}
                top={81}
                bottomBoundary="#more-details"
                className="category_card"
              >
                <CategoriesCard />
              </Sticky>
            </Col>

            <Col md={9}>
              <ProductInfoContainer>
                <p className="bread_crumb">
                  HOME > FRUITS & VEGETABLES > FRESH VEGETABLES > POTATO, ONION
                  & TOMATO > FRESHO ONION
                </p>

                <ProductInfoBox>
                  <ProductInfoBoxImgContainerWrap>
                    <ProductInfoBoxImgContainer>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src:
                            `https://mudee.shop/eCommerce/assets/images/products/${pdInfo.photo}`,
                        },
                        largeImage: {
                          src:
                            `https://mudee.shop/eCommerce/assets/images/products/${pdInfo.photo}`,
                          width: 1200,
                          height: 800,
                        },
                        enlargedImagePortalId: "myPortal",
                      }}
                    />
                      {/* <img
                        src={`https://mudee.shop/eCommerce/assets/images/products/${pdInfo.photo}`}
                        alt=""
                      /> */}
                      <MdProductInfoOffLabel>
                        {" "}
                        25% <br /> Off
                      </MdProductInfoOffLabel>
                    </ProductInfoBoxImgContainer>

                    <ProductSubImgContainer>
                      {[1, 2, 3, 4, 5].map((item, idx) => (
                        <img
                          src={`https://mudee.shop/eCommerce/assets/images/products/${pdInfo.photo}`}
                          alt=""
                        />
                      ))}

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
                    <h3>{pdInfo.name.split(" ")[0]}</h3>
                    <p>1 kg</p>
                    <p className="d-none">
                      Price : <del>30Tk</del>
                    </p>
                    <h3 className="price_tag d-none">{pdInfo.price}Tk</h3>
                    <h3>Fresh {pdInfo.name.split(" ")[0]} Offer</h3>
                    <p>
                      Fresh {pdInfo.name.split(" ")[0]}
                      Offer If You buy 5 kg , we will provide 100 Loyalty Reward
                      as gift
                    </p>

                    <RewardContainer>
                      <p>Buy This & get reward : </p>
                      <div>{pdInfo.reward_point}</div>
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
                          <button onClick={() => quantityIncrement(pdInfo.id)}>
                            +
                          </button>
                          {pdInfo.totalQuantity
                            ? pdInfo.totalQuantity
                            : pdInfo.quantity}
                          kg
                          <button onClick={() => quantityDecrement(pdInfo.id)}>
                            -
                          </button>
                        </div>

                        <button
                          disabled={
                            addToCart.length &&
                            addToCart.find((p) => p.id === pdInfo.id) &&
                            true
                          }
                          onClick={() => handleAddToCart(pdInfo)}
                        >
                          {addToCart.length &&
                          addToCart.find((p) => p.id === pdInfo.id)
                            ? "Already on Cart"
                            : "Add to cart"}
                        </button>
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

                 
                  <div id="myPortal"></div>
               

                </ProductInfoBox>

                <h2>Packeg Offer</h2>

                <div className="packeg_offer">
                  <p>5 KG</p>
                  <p>30% OFF</p>
                  <p>80 TK</p>
                  <input type="radio" name="offer" className="circle" />
                </div>
                <div className="packeg_offer">
                  <p>5 KG</p>
                  <p>30% OFF</p>
                  <p>80 TK</p>
                  <input type="radio" name="offer" className="circle" />
                </div>
              </ProductInfoContainer>
            </Col>

            <Col md={1.5} className="d-none">
              <Sticky enabled={true} top={81}  bottomBoundary="#more-details">
                <MenuItems />
              </Sticky>
            </Col>
          </Row>
        </ProductBannerContainer>
      ) : (
        history.push(`/not-found`)
      )}
    </>
  );
};

export default ProductInfoBanner;
