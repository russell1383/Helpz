import React from "react";
import {
  OffLabel,
  ProductBox,
  ProductButtonContainer,
  ProductContainerWrap,
  ProductImg,
  ProductInfo,
  LeftArrowButton,
  ProductsContainer,
  RightArrowButton,
  PickupTimigBox,
  TimeBox,
} from "./Products.style";
import { productData } from "../../productData/productData";
import LeftArrow from "../../assets/icons/left-arrow.png";
import RightArrow from "../../assets/icons/right-arrow.png";

const Products = () => {
  return (
    <>
      <ProductContainerWrap>
        <h2>Best DeaL Today</h2>
        <p>Best Selling Products</p>
        <ProductsContainer>
          <LeftArrowButton>
            <img src={LeftArrow} alt="" />
          </LeftArrowButton>
          <RightArrowButton>
            <img src={RightArrow} alt="" />
          </RightArrowButton>
          {productData.map((product, idx) => (
            <ProductBox key={idx}>
              {console.log(product.display)}
              <OffLabel>{product.offer}</OffLabel>
              <ProductImg src={product.img}></ProductImg>
              <ProductInfo>
                <div>
                  <p>Fresh</p>
                  <h3>{product.name}</h3>
                  <p>1kg</p>
                </div>
                <div>
                  <h6>Price</h6>
                  <h6>
                    <del>30 tk</del>
                  </h6>
                  <h5>{product.price}</h5>
                </div>
              </ProductInfo>

              <PickupTimigBox>
                <p>Pickup: timing</p>
                <div>
                  <TimeBox>2h</TimeBox>
                  <TimeBox>4h</TimeBox>
                  <TimeBox>8h</TimeBox>
                  <TimeBox>12h</TimeBox>
                </div>
              </PickupTimigBox>

              <ProductButtonContainer>
                <button className="add_to_cart_button">Add To Cart</button>
                <button className="plus_button">+</button>
              </ProductButtonContainer>
            </ProductBox>
          ))}
        </ProductsContainer>
      </ProductContainerWrap>
    </>
  );
};

export default Products;
