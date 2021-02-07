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

const CartProduct = () => {
  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const closeToggle = () => {
    setToggleDropdown(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeToggle });

  const removeItemFromCart = (id) => {
    const remainingProduct = addToCart.filter((item) => item.id !== id);
    setAddToCart(remainingProduct);
  };

  const quantityIncrement = (id) => {
    if (addToCart.find((item) => item.id === id)) {
      const product = addToCart.find((product) => product.id === id);
      product.totalQuantity = product.totalQuantity + 1;
      product.totalPrice = product.price * product.totalQuantity;
      var objectIndex = addToCart.findIndex((obj) => obj.id === product.id);
      var newItems = [...addToCart];
      newItems[objectIndex] = product;
      setAddToCart(newItems);
    }
  };

  const quantityDecrement = (id) => {
    if (addToCart.find((item) => item.id === id)) {
      const product = addToCart.find((product) => product.id === id);
      if (product.totalQuantity > 1) {
        product.totalQuantity = product.totalQuantity - 1;
        product.totalPrice = product.price * product.totalQuantity;
        var objectIndex = addToCart.findIndex((obj) => obj.id === product.id);
        var newItems = [...addToCart];
        newItems[objectIndex] = product;
        setAddToCart(newItems);
      }
    }
  };

  return (
    <div ref={ref}>
      {addToCart.length ? (
        addToCart.map((product) => (
          <ProductRow key={product.id}>
            <CartProductImg
              src={`https://mudee.shop/eCommerce/assets/images/products/${product.photo}`}
              alt=""
            />
            <h4>{product.name.substring(0, product.name.indexOf(" "))}</h4>
            <div>
              <h4>{product.totalQuantity} Kg</h4> 
              <IncrementDecrementBox>
                <button onClick={() => quantityIncrement(product.id)}>+</button>

                <button onClick={() => quantityDecrement(product.id)}>-</button>
              </IncrementDecrementBox>
            </div>
            <h4>{product.totalPrice} Tk</h4>
            <h2 onClick={() => removeItemFromCart(product.id)}>✕</h2>
          </ProductRow>
        ))
      ) : (
        <NoItemText>There is no item in the cart.</NoItemText>
      )}
    </div>
  );
};

export default CartProduct;
