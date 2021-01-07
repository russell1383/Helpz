import React from "react";
import {
  HamburgerMenuIcon,
  MdLogoImg,
  MdNavbarContainer,
  MdSearchBox,
  MdShoppingCart,
  MdTopHeaderContainer,
  NavbarContainer,
  SearchBox,
  ShoppingCart,
} from "./Navbar.style";
import logo from "../../assets/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import HamburgerIcon from "../../assets/icons/hamburger-icon.png";
const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <img src={logo} alt="" />

        <SearchBox>
          <input type="text" placeholder="Search Product" />
          <div>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </div>
        </SearchBox>

        <ShoppingCart>
          <div>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </div>
          <h4>৳ 00.00</h4>
        </ShoppingCart>
      </NavbarContainer>

      {/* --------------------------Mobileview-------------------------- */}

      <MdNavbarContainer>
        <MdTopHeaderContainer>
          <MdShoppingCart>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <h4>৳ 00.00</h4>
          </MdShoppingCart>

          <div>

          <MdLogoImg src={logo} alt="" />
          </div>

          <HamburgerMenuIcon src={HamburgerIcon} alt="" />
        </MdTopHeaderContainer>

        <MdSearchBox>
          <input type="text" placeholder="Search Product" />
          <div>
            <FontAwesomeIcon icon={faSearch}  />
          </div>
        </MdSearchBox>
      </MdNavbarContainer>
    </>
  );
};

export default Navbar;
