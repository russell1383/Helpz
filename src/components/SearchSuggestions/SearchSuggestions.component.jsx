import React, { useContext } from "react";
import {
  SearchSuggestImg,
  SearchSuggestionsButton,
  SearchSuggestionsContentContainer,
  SearchSuggestQuantityBox,
} from "./SearchSuggestions.style";
import img from "../../assets/images/product-images/product-1.png";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";

const SearchSuggestions = ({
  productInfo,
  handleAddToCart,
  handleQuantity,
}) => {
  const history = useHistory();
  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;

  const handlePdClick = () => {
    history.push(`/product-info/${productInfo.id}`);
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

  console.log(productInfo);
  return (
    <>
      {productInfo && (
        <SearchSuggestionsContentContainer>
          <SearchSuggestImg
            src={`https://mudee.shop/eCommerce/assets/images/products/${productInfo.photo}`}
            alt=""
            onClick={handlePdClick}
          />
          <h4 onClick={handlePdClick}>{productInfo.name.split(" ")[0]}</h4>
          <h4>1 KG</h4>
          <h4>25% Off</h4>
          <h4>{productInfo.price} TK</h4>

          <SearchSuggestQuantityBox>
            <button>+</button>
            <h4>1 Kg</h4>
            <button>-</button>
          </SearchSuggestQuantityBox>

          <SearchSuggestionsButton
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
          </SearchSuggestionsButton>
        </SearchSuggestionsContentContainer>
      )}

      <hr />
    </>
  );
};

export default SearchSuggestions;
