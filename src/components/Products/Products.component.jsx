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
import axios from "axios";

const Products = ({ header, subheader }) => {
  const history = useHistory();

  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;
  const [products, setProducts] = useState([]);

  const handleAddToCart = (item) => {
    let newItem = [...addToCart, item];
    item.price = parseInt(item.price);
    item.quantity = 1;
    item.totalPrice = item.price;
    item.totalQuantity = item.quantity;
    setAddToCart(newItem);
  };

  useEffect(() => {
    let data = { category_id: 1 };
    axios
      .post("https://mudee.shop/eCommerce/api/product/cat/sub/child", data)
      .then((response) => setProducts(response.data));
  }, []);


const handleQuantity = (id) => {
    if (addToCart.find((product) => product.id === id)) {
      const product = addToCart.find((product) => product.id === id);
      product.totalQuantity = product.totalQuantity + 1;
      product.totalPrice = product.price * product.totalQuantity;

      if (addToCart.find((item) => item.id === product.id)) {
        var objectIndex = addToCart.findIndex((obj) => obj.id === product.id);
        var newItems = [...addToCart];
        newItems[objectIndex] = product;
        setAddToCart(newItems);
      }
    }
  };



  var settings = {
    focusOnSelect: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
  console.log(addToCart)

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
          {products.map((product, idx) => (
            <div>
              <ProductBox key={idx}>
                <OffLabel>25% Off</OffLabel>
                <ProductImg
                  src={`https://mudee.shop/eCommerce/assets/images/products/${product.photo}`}
                  // onClick={() => history.push(`/category/${product.name}`)}
                ></ProductImg>
                <ProductInfo
                  // onClick={() => history.push(`/category/${product.name}`)}
                >
                  <div>
                    <p>Fresh</p>
                    <h3>{product.name.substring(0,product.name.indexOf(' '))}</h3>
                    <p>1kg</p>
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
