import React from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { CartItemsContainer, ViewCartItemsButton } from "./CartItems.style";
import CartProduct from "../CartProduct/CartProduct.component";
import { Link } from "react-router-dom";
const CartItems = ({ closeToggle }) => {
  const ref = useDetectClickOutside({ onTriggered: closeToggle });
  return (
    <>
      <CartItemsContainer ref={ref}>
        <CartProduct />

        <Link to="/view-cart" style={{ textDecoration: "none" }}>
          <ViewCartItemsButton>View Cart & Checkout</ViewCartItemsButton>
        </Link>
      </CartItemsContainer>
    </>
  );
};

export default CartItems;
