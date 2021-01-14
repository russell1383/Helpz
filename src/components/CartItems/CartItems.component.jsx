import React from "react";
import {
  CartItemsContainer,
  ViewCartItemsButton,
} from "./CartItems.style";
import CartProduct from "../CartProduct/CartProduct.component";
const CartItems = () => {
  return (
    <>
      <CartItemsContainer>
       
          <CartProduct/>
        <ViewCartItemsButton>View Cart & Checkout</ViewCartItemsButton>
      </CartItemsContainer>
    </>
  );
};

export default CartItems;
