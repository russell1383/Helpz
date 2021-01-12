import React, { useContext, useEffect, useState } from "react";
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
import { UserContext } from "../../App";

const Products = () => {
  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);

  const handleAddToCart = (item) => {
    let newItem = [...addToCart, item];
    setAddToCart(newItem);
  };

  useEffect(() => {
    fetch("https://mudee.shop/eCommerce/api/categoryapi/electric")
      .then((res) => res.json())
      .then((data) => setProducts(data[2].data));
  }, []);

  const handleQuantity = (name) => {
    if (addToCart.length) {
      const product = addToCart.find((product) => product.name === name);
      product.quantity = 1;
    }
  };

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
          {products.map((product, idx) => (
            <ProductBox key={idx}>
              <OffLabel>{product.offer}</OffLabel>
              <ProductImg src={`https://mudee.shop/eCommerce/assets/images/thumbnails/${product.thumbnail}`}></ProductImg>
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
                  <h5>{product.price} $</h5>
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
                <button
                  className="add_to_cart_button"
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </button>
                <button
                  className="plus_button"
                  onClick={() => handleQuantity(product.name)}
                >
                  +
                </button>
              </ProductButtonContainer>
            </ProductBox>
          ))}
        </ProductsContainer>
      </ProductContainerWrap>
    </>
  );
};

export default Products;
