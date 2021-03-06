import React, { useContext } from "react";
import {
  WishlistButton,
  WishListContainer,
  WishListIncrement,
  WishlistProductContainer,
  WishlistProductContainerWrap,
} from "./Wishlist.style";
import img from "../../assets/images/product-images/product-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  handleAddToCart,
  handleProductPrice,
  handleQuantityDecrement,
  handleQuantityIncrement,
} from "../../utils/cartManagement";
import { UserContext } from "../../App";

const Wishlist = ({ wishlist, wishListProducts }) => {
  const [openWishlist, setOpenWishlist] = wishlist;
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const [addToCart, setAddToCart] = value2;

  return (
    <>
      <WishListContainer openWishlist={openWishlist}>
        {openWishlist && <h1 onClick={() => setOpenWishlist(false)}>✖</h1>}
        {wishListProducts.length ? (
          wishListProducts.map((product) => (
            <WishlistProductContainerWrap key={product.id}>
              <WishlistProductContainer>
                <img
                  src={`https://mudee.shop/helpz/assets/images/products/${product.product.photo}`}
                  alt=""
                />

                <p>
                  {product.product.name.split(" ")[0]} <br />{" "}
                  {handleProductPrice(product.product)}TK
                </p>
                <p>1kg</p>

                <WishListIncrement>
                  <button
                    onClick={() =>
                      handleQuantityIncrement(
                        addToCart,
                        setAddToCart,
                        product.product.id
                      )
                    }
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      handleQuantityDecrement(
                        addToCart,
                        setAddToCart,
                        product.product.id
                      )
                    }
                  >
                    -
                  </button>
                </WishListIncrement>
              </WishlistProductContainer>
              <WishlistButton
                disabled={
                  addToCart.length &&
                  addToCart.find((p) => p.id === product.product.id) &&
                  true
                }
                onClick={() =>
                  handleAddToCart(addToCart, setAddToCart, product.product)
                }
              >
                <FontAwesomeIcon icon={faShoppingCart} />{" "}
                {addToCart.length &&
                addToCart.find((p) => p.id === product.product.id)
                  ? "Already on Cart"
                  : "Add to cart"}
              </WishlistButton>
            </WishlistProductContainerWrap>
          ))
        ) : (
          <small>There is no products in your wishlist.</small>
        )}
      </WishListContainer>
    </>
  );
};

export default Wishlist;
