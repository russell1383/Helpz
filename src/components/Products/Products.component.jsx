import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  OffLabel,
  ProductBox,
  ProductButtonContainer,
  ProductContainerWrap,
  ProductImg,
  ProductInfo,
  LeftArrowButton,
  RightArrowButton,
  PickupTimigBox,
  TimeBox,
} from "./Products.style";
import LeftArrow from "../../assets/icons/left-arrow.png";
import RightArrow from "../../assets/icons/right-arrow.png";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";
import { productData } from "../../productData/productData";

const Products = ({ header, subheader }) => {
  const history = useHistory();

  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(null);

  const handleAddToCart = (item) => {
    let newItem = [...addToCart, item];
    setAddToCart(newItem);
    setPrice(item.price);
  };

  useEffect(() => {
    fetch("https://mudee.shop/eCommerce/api/category/electric")
      .then((res) => res.json())
      .then((data) => setProducts(data[2].data));
  }, []);

  useEffect(() => {}, []);
  var handleQuantity = (id) => {
    if (addToCart.find((product) => product.id === id)) {
      const product = addToCart.find((product) => product.id === id);
      product.quantity = product.quantity + 1;
      product.price = price * product.quantity;
      // console.log(product);

      if (addToCart.find((item) => item.id === product.id)) {
        var objectIndex = addToCart.findIndex((obj) => obj.id === product.id);
        var newItems = [...addToCart];
        newItems[objectIndex] = product;
        setAddToCart(newItems);
        // console.log(objectIndex);
      }
    }
  };

  console.log(addToCart);

  var settings = {
    focusOnSelect: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <ProductContainerWrap>
        <h2>{header}</h2>
        <p>{subheader}</p>

        <LeftArrowButton>
          <img src={LeftArrow} alt="" />
        </LeftArrowButton>
        <RightArrowButton>
          <img src={RightArrow} alt="" />
        </RightArrowButton>

        <Slider {...settings}>
          {productData.map((product, idx) => (
            <div>
              <ProductBox key={idx}>
                <OffLabel>25% Off</OffLabel>
                <ProductImg
                  src={product.img}
                  onClick={() => history.push(`/category/${product.name}`)}
                ></ProductImg>
                <ProductInfo
                  onClick={() => history.push(`/category/${product.name}`)}
                >
                  <div>
                    <p>Fresh</p>
                    <h3>{product.name.substring(0, 10)}</h3>
                    <p>{product.quantity}kg</p>
                  </div>
                  <div>
                    <h6>Price</h6>
                    <h6>
                      <del>30 tk</del>
                    </h6>
                    <h5>{product.price} tk</h5>
                  </div>
                </ProductInfo>
                <p>
                  Buy this & get <span>20 point</span>
                </p>
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
                    disabled={
                      addToCart.length &&
                      addToCart.find((p) => p.id === product.id) &&
                      true
                    }
                    onClick={() => handleAddToCart(product)}
                  >
                    {addToCart.length &&
                    addToCart.find((p) => p.id === product.id)
                      ? "Product Added"
                      : "Add to cart"}
                  </button>
                  <button
                    className="plus_button"
                    onClick={() => handleQuantity(product.id)}
                  >
                    +
                  </button>
                </ProductButtonContainer>
              </ProductBox>
            </div>
          ))}
        </Slider>
      </ProductContainerWrap>
    </>
  );
};
export default Products;
