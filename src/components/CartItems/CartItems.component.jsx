import React from "react";
import {
  CartItemsContainer,
  ViewCartItemsButton,
} from "./CartItems.style";
import CartProduct from "../CartProduct/CartProduct.component";
import { Link } from "react-router-dom";
const CartItems = () => {
  return (
    <>
      <CartItemsContainer>
       
        <CartProduct />
        
        <Link to="/view-cart" style={{ textDecoration: 'none' }}>

        <ViewCartItemsButton>View Cart & Checkout</ViewCartItemsButton>
        </Link>
      </CartItemsContainer>
    </>
  );
};

export default CartItems;
