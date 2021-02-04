import React from "react";
import img from "../../assets/images/product-images/product-1.png";
import {
  CardButtonWrap,
  CardInfo,
  CartTextWrap,
  PickupTime,
  PickupTimeContainer,
  ProductCardContainer,
  RewardPointText,
  CardFooterText,
  PickupText,
  CardLabel,
} from "./ProductCard.style";

const ProductCard = ({ name, img, price, rewardPoint }) => {
  return (
    <>
      <ProductCardContainer>
        <CardLabel>
          20% <br /> off
        </CardLabel>
        <img
          src={`https://mudee.shop/eCommerce/assets/images/products/${img}`}
          alt=""
        />
        <CardInfo>
          <CartTextWrap>
            <p>Fresh</p>
            <h3>{name.substring(0,name.indexOf(' '))}</h3>
            <p>1 kg</p>
          </CartTextWrap>
          <CartTextWrap>
            <h6>Price</h6>
            <h6>
              <del>30 tk</del>
            </h6>
            <h5>{price} tk</h5>
          </CartTextWrap>
        </CardInfo>

        <RewardPointText>
          Buy this & get <span>{rewardPoint} </span>point
        </RewardPointText>

        <CardInfo>
          <PickupText>Pickup: timing</PickupText>
          <PickupTimeContainer>
            <PickupTime>2h</PickupTime>
            <PickupTime>4h</PickupTime>
            <PickupTime>8h</PickupTime>
            <PickupTime>12h</PickupTime>
          </PickupTimeContainer>
        </CardInfo>

        <CardFooterText>Express Delivery: Today 2:00PM - 4:00PM</CardFooterText>
        <CardButtonWrap>
          <button className="addToCart">Add to cart</button>
          <button className="plus">+</button>
        </CardButtonWrap>
      </ProductCardContainer>
    </>
  );
};

export default ProductCard;
