import React, { useContext, useEffect, useState } from "react";
import {
  OfferButtonWrap,
  OfferOffLabel,
  OfferPicupTiming,
  OfferProductCardContainer,
  OfferProductInfoContainer,
} from "./OfferProductCard.style";
import offerImg from "../../assets/images/offer.png";
import productImg from "../../assets/images/product-images/product-1.png";
import axios from "axios";
import { UserContext } from "../../App";
import {
  handleAddToCart,
  handleQuantityIncrement,
} from "../../utils/cartManagement";

const OfferProductCard = ({ product }) => {
  const [offerProduct, setOfferProduct] = useState({});
  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;
  const [loader, setLoader] = useState(true);
  console.log(product);

  useEffect(() => {
    let data = { product_id: product.offers.product_id };
    axios
      .post("https://helpz.ecmanager.live/api/product/cat/sub/child", data)
      .then((response) => {
        setLoader(false);
        let data = response.data[0];
        let item = { ...data };
        item.offerPrice = parseInt(product.offers.offer_price);
        setOfferProduct(item);
      });
  }, [product]);

  console.log(product);
  console.log(offerProduct);
  return (
    <>
      <OfferProductCardContainer>
        <img
          src={`https://helpz.ecmanager.live/assets/images/offers/${product.offers.photo}`}
          alt=""
        />
        <div className="right_side">
          <img
            src={`https://helpz.ecmanager.live/assets/images/products/${offerProduct.photo}`}
            alt=""
          />
          <OfferProductInfoContainer>
            <p>
              Fresh <br />
              {offerProduct.name && offerProduct.name.split(" ")[0]} <br />1 kg
            </p>
            <div>
              <small>
                Price <br /> <del>{product.offers.regular_price} Tk</del> <br />
                <span>{product.offers.offer_price} tk</span>
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
            <button
              className="cart_btn"
              onClick={() =>
                handleAddToCart(addToCart, setAddToCart, offerProduct)
              }
            >
              Add To Cart
            </button>
            <button
              className="plus_btn"
              onClick={() =>
                handleQuantityIncrement(
                  addToCart,
                  setAddToCart,
                  offerProduct.id
                )
              }
            >
              +
            </button>
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
