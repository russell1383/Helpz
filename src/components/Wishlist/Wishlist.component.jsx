import React from "react";
import {
  WishlistButton,
  WishListContainer,
  WishListIncrement,
  WishlistProductContainer,
} from "./Wishlist.style";
import img from "../../assets/images/product-images/product-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Wishlist = ({ wishlist }) => {
  const [openWishlist, setOpenWishlist] = wishlist;

  return (
    <>
      <WishListContainer openWishlist={openWishlist}>
        {openWishlist && <h1 onClick={() => setOpenWishlist(false)}>✖</h1>}
        <WishlistProductContainer>
          <img src={img} alt="" />

          <p>
            Fresh Onion <br /> 20TK
          </p>
          <p>1kg</p>

          <WishListIncrement>
            <button>+</button>

            <button>-</button>
          </WishListIncrement>
        </WishlistProductContainer>

        <WishlistButton><FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</WishlistButton>
      </WishListContainer>
      
      <WishListContainer openWishlist={openWishlist}>
        {openWishlist && <h1 onClick={() => setOpenWishlist(false)}>✖</h1>}
        <WishlistProductContainer>
          <img src={img} alt="" />

          <p>
            Fresh Onion <br /> 20TK
          </p>
          <p>1kg</p>

          <WishListIncrement>
            <button>+</button>

            <button>-</button>
          </WishListIncrement>
        </WishlistProductContainer>

        <WishlistButton><FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</WishlistButton>
      </WishListContainer>
    </>
  );
};

export default Wishlist;
