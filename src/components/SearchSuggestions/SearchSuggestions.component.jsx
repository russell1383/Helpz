import React from "react";
import {
  SearchSuggestImg,
  SearchSuggestionsButton,
  SearchSuggestionsContentContainer,
  SearchSuggestQuantityBox,
} from "./SearchSuggestions.style";
import img from "../../assets/images/product-images/product-1.png";

const SearchSuggestions = () => {
  return (
    <>
      <SearchSuggestionsContentContainer>
        <SearchSuggestImg src={img} alt="" />
        <h4>Fresh Onion</h4>
        <h4>1 KG</h4>
        <h4>25% Off</h4>
        <h4>20 TK</h4>

        <SearchSuggestQuantityBox>
          <button>+</button>
          <h4>1 Kg</h4>
          <button>-</button>
        </SearchSuggestQuantityBox>

        <SearchSuggestionsButton>Add To Cart</SearchSuggestionsButton>
      </SearchSuggestionsContentContainer>
      <hr />
    </>
  );
};

export default SearchSuggestions;
