import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store } from "react-notifications-component";
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
  ProductWrap,
} from "./Products.style";
import LeftArrow from "../../assets/icons/left-arrow.png";
import RightArrow from "../../assets/icons/right-arrow.png";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";
import { productData } from "../../productData/productData";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = ({ header, subheader }) => {
  const history = useHistory();

  const { value, value2, value3 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;
  const [pdInfo, setPdInfo] = value3;
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    let data = { category_id: 2 };

    axios
      .post("https://mudee.shop/eCommerce/api/product/cat/sub/child", data)
      .then((response) =>
        setProducts(response.data.slice(0, 30).sort(() => 0.5 - Math.random()))
      );
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

  const handlePdClick = (productInfo) => {
    setPdInfo(productInfo);

    if (pdInfo) {
      history.push(`/category/pd`);
    }
  };

  const LeftArrow = ({ className, style, onClick }) => (
    <LeftArrowButton
      style={{ ...style, left: -5, backgroundColor: "#eeeeee" }}
      onClick={onClick}
      className={className}
    ></LeftArrowButton>
  );
  const RightArrow = ({ className, style, onClick }) => (
    <RightArrowButton
      style={{ ...style, right: -5, backgroundColor: "#eeeeee" }}
      onClick={onClick}
      className={className}
    ></RightArrowButton>
  );

  var settings = {
    focusOnSelect: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <ProductContainerWrap>
        <h2>{header}</h2>
        <p>{subheader}</p>

        {/* <LeftArrowButton>
          <img src={LeftArrow} alt="" />
        </LeftArrowButton>
        <RightArrowButton>
          <img src={RightArrow} alt="" />
        </RightArrowButton> */}

        <Slider {...settings}>
          {products.map((product, idx) => (
            <ProductWrap>
              <ProductBox key={idx}>
                <OffLabel>25% Off</OffLabel>
                <ProductImg
                  src={`https://mudee.shop/eCommerce/assets/images/products/${product.photo}`}
                  onClick={() => handlePdClick(product)}
                ></ProductImg>
                <ProductInfo onClick={() => handlePdClick(product)}>
                  <div>
                    <p>Fresh</p>
                    <h3>{product.name.split(" ")[0]}</h3>
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
                    <FontAwesomeIcon icon={faShoppingCart} />
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
            </ProductWrap>
          ))}
        </Slider>
      </ProductContainerWrap>
    </>
  );
};
export default Products;
