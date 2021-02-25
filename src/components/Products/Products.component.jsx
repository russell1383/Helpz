import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store } from "react-notifications-component";
import {
  ProductContainerWrap,
  LeftArrowButton,
  RightArrowButton,
  ProductWrap,
} from "./Products.style";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard.component";

const Products = ({ header, subheader }) => {
  const history = useHistory();
  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;
  const [products, setProducts] = useState([]);
  const [campaignPrice, setCampaignPrice] = useState(null);


  useEffect(() => {
    let data = { category_id: 2 };

    axios
      .post("https://mudee.shop/eCommerce/api/product/cat/sub/child", data)
      .then((response) =>
        setProducts(response.data.slice(0, 30).sort(() => 0.5 - Math.random()))
      );
  }, []);

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

  const handleCampaignPriceDiscount = (p) => {
    if (p.campaign) {
      let currentDate = new Date();
      console.log(currentDate)
      let campaignEndDate = Date.parse(p.campaign.end_date);
      // let currenTime = Date.parse(new Date());
      // let campaignEndTime = p.campaign.end_time.split(":");
      // console.log(campaignEndTime);
      //  console.log(currenTime)
      if (p.campaign.discount_type === "1" && currentDate < campaignEndDate) {
        let percentageCalc =
          (parseInt(p.campaign.offer) / 100) * parseInt(p.price);
        let offerPrice = parseInt(p.price) - percentageCalc;
        return offerPrice;
      }else {
        return p.price;
      }
    } else {
      return p.price;
    }
  };

  const settings = {
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

        <Slider {...settings}>
          {products.map((product, idx) => (
            <ProductWrap key={idx}>
              <ProductCard productInfo={product}></ProductCard>
              {/* <ProductBox>
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
                      <del>{product.price} tk</del>
                    </h6>
                    <h5>
                     { handleCampaignPriceDiscount(product)}
                        
                      tk
                    </h5>
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
                    onClick={() =>
                      handleAddToCart(
                        product,
                        handleCampaignPriceDiscount(product)
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {addToCart.length &&
                    addToCart.find((p) => p.id === product.id)
                      ? "Product Added"
                      : "Add to cart"}
                  </button>
                  <button
                    className="plus_button"
                    onClick={() =>
                      handleQuantity(
                        product.id,
                        handleCampaignPriceDiscount(product)
                      )
                    }
                  >
                    +
                  </button>
                </ProductButtonContainer>
              </ProductBox> */}
            </ProductWrap>
          ))}
        </Slider>
      </ProductContainerWrap>
    </>
  );
};
export default Products;
