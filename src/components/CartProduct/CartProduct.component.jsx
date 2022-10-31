import React, { useContext, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import {
  ProductRowWrap,
  ProductRow,
  CartProductImg,
  IncrementDecrementBox,
  NoItemText,
} from "./CartProduct.style";
import img from "../../assets/images/product-images/product-1.png";
import { UserContext } from "../../App";
import {
  handleQuantityIncrement,
  handleQuantityDecrement,
  handleRemoveItemFromCart,
} from "../../utils/cartManagement";

const CartProduct = () => {
  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const closeToggle = () => {
    setToggleDropdown(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeToggle });

  return (
    <div ref={ref}>
      {addToCart.length ? (
        addToCart.map((product) => (
          <ProductRow key={product.id}>
            <CartProductImg
              src={`https://helpz.ecmanager.live/assets/images/products/${product.photo}`}
              alt=""
            />
            <h4>{product.name.split(" ")[0]}</h4>
            <div>
              <h4>{product.totalQuantity} Kg</h4>
              <IncrementDecrementBox>
                <button
                  onClick={() =>
                    handleQuantityIncrement(addToCart, setAddToCart, product.id)
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    handleQuantityDecrement(addToCart, setAddToCart, product.id)
                  }
                >
                  -
                </button>
              </IncrementDecrementBox>
            </div>
            <h4>{product.totalPrice} Tk</h4>
            <h2
              onClick={() =>
                handleRemoveItemFromCart(addToCart, setAddToCart, product.id)
              }
            >
              ✕
            </h2>
          </ProductRow>
        ))
      ) : (
        <NoItemText>There is no item in the cart.</NoItemText>
      )}
    </div>
  );
};

export default CartProduct;
