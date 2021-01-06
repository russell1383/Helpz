import React from "react";
import { NavbarContainer, SearchBox, ShoppingCart } from "./Navbar.style";
import logo from "../../assets/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <img src={logo} alt="" />
              
        <SearchBox>
          <input type="text" />
          <button>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </SearchBox>

        <ShoppingCart>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          <h4>৳ 00.00</h4>
        </ShoppingCart>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
