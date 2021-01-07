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
} from "./Products.style";
import { productData } from "../../productData/productData";
import { Col, Row } from "react-grid-system";
import LeftArrow from "../../assets/icons/left-arrow.png";
import RightArrow from "../../assets/icons/right-arrow.png";

const Products = () => {
  return (
    <>
      <ProductContainerWrap>
       
        <h2>Best DeaL Today</h2>
        <p>Best Selling Products</p>
        <ProductsContainer>
        <LeftArrowButton><img src={LeftArrow} alt=""/></LeftArrowButton>
        <RightArrowButton><img src={RightArrow} alt=""/></RightArrowButton>
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
              <small>Express Delivery: Today 2:00PM - 4:00PM</small>
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
