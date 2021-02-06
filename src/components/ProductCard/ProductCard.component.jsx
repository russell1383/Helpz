import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
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

const ProductCard = ({
  productInfo,
  handleAddToCart,
  handleQuantity
}) => {
  const { value, value2, value3 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;
  const [pdInfo, setPdInfo] = value3;
  const history = useHistory();

  const handlePdClick = () => {
    setPdInfo(productInfo);

    if (pdInfo) {
      history.push(`/category/pd`);
    }
  };

  console.log(productInfo)

  return (
    <>
      <ProductCardContainer>
        <CardLabel>
          20% <br /> off
        </CardLabel>
        <img
          src={ `https://mudee.shop/eCommerce/assets/images/products/${productInfo.photo}`}
          alt=""
          onClick={handlePdClick}
        />
        <CardInfo onClick={handlePdClick}>
          <CartTextWrap>
            <p>Fresh</p>
            <h3>{productInfo.name.substring(0, productInfo.name.indexOf(" "))}</h3>
            <p>1 kg</p>
          </CartTextWrap>
          <CartTextWrap>
            <h6>Price</h6>
            <h6>
              <del>30 tk</del>
            </h6>
            <h5>{productInfo.price} tk</h5>
          </CartTextWrap>
        </CardInfo>

        <RewardPointText>
          Buy this & get <span>{productInfo.reward_point} </span>point
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
          <button
            className="addToCart"
            disabled={
              addToCart.length &&
              addToCart.find((p) => p.id === productInfo.id) &&
              true
            }
            onClick={() => handleAddToCart(productInfo)}
          >
            {addToCart.length && addToCart.find((p) => p.id === productInfo.id)
              ? "Product Added"
              : "Add to cart"}
          </button>
          <button className="plus"  onClick={() => handleQuantity(productInfo.id)}>+</button>
        </CardButtonWrap>
      </ProductCardContainer>
    </>
  );
};

export default ProductCard;
