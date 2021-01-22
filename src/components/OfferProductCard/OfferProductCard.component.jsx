import React from "react";
import {
  OfferButtonWrap,
  OfferOffLabel,
  OfferPicupTiming,
  OfferProductCardContainer,
  OfferProductInfoContainer,
} from "./OfferProductCard.style";
import offerImg from "../../assets/images/offer.png";
import productImg from "../../assets/images/product-images/product-1.png";

const OfferProductCard = () => {
  return (
    <>
      <OfferProductCardContainer>
        <img src={offerImg} alt="" />
        <div className="right_side">
          <img src={productImg} alt="" />
          <OfferProductInfoContainer>
            <p>
              Fresh <br />
              Onion <br />1 kg
            </p>
            <div>
              <small>
                Price <br /> <del>30 Tk</del> <br /> <span>20 tk</span>
              </small>
            </div>
          </OfferProductInfoContainer>
          <small>Pickup timing</small>
          <OfferPicupTiming>
            <div>2h</div>
            <div>4h</div>
            <div>8h</div>
            <div>12h</div>
          </OfferPicupTiming>

          <OfferButtonWrap>
            <button className="cart_btn">Add To Cart</button>
            <button className="plus_btn">+</button>
          </OfferButtonWrap>

          <OfferOffLabel>
            20% <br /> Off
          </OfferOffLabel>
        </div>
      </OfferProductCardContainer>
    </>
  );
};

export default OfferProductCard;
