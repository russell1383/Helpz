import React, { useContext, useEffect, useState } from "react";

import {
  HamburgerMenuIcon,
  MdCategoryBar,
  MdCategoryIcon,
  MdCategoryItems,
  MdLogoImg,
  MdNavbarContainer,
  MdSearchBox,
  MdShoppingCart,
  MdSidebar,
  MdSidebarItems,
  MdTopHeaderContainer,
  NavbarContainer,
  SearchBox,
  ShoppingCart,
  SearchSuggestionsContainer,
  NavbarContainerWrap,
  SearchBoxWrap,
  MdNavbarContainerWrap,
  MdSearchSuggestionsContainer,
  MdSearchBoxWrap,
  MdSubCategoryBar,
  MdcategoryWrap,
  ShoppingCartContainer,
  MdShoppingCartContainer,
  NavLogo,
  ItemsOnCart,
} from "./Navbar.style";
import logo from "../../assets/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HamburgerIcon from "../../assets/icons/hamburger-icon.png";
import CatergoryBarIcon from "../../assets/icons/category-icon.png";
import CartIcon from "../../assets/icons/Cart.png";
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions.component";
import CartItems from "../CartItems/CartItems.component";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const Navbar = () => {
  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openCatergory, setOpenCatergory] = useState(false);
  const [showSearchSuggest, setShowSearchSuggest] = useState(false);
  const [subCategoryOpen, setSubCategoryOpen] = useState(true);
  const [showCartItems, setShowCartItems] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [childCategories, setChildCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  const history = useHistory();

  useEffect(() => {
    fetch("https://mudee.shop/eCommerce/api/allcategories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleGetSubCategories = (items) => {
    setSubCategories(items.subs);
    setSubCategoryOpen(true);
  };

  const handleChildCategories = (items) => {
    setChildCategories(items.childs);
    setOpenSub(true);
  };

  const handleMenubarClick = () => {
    setSidebarOpen(!sidebarOpen);
    setOpenCatergory(false);
    setShowSearchSuggest(false);
    setSubCategoryOpen(false);
    setShowCartItems(false);
  };
  const handleCategorybarClick = () => {
    setOpenCatergory(!openCatergory);
    setSidebarOpen(false);
    setShowSearchSuggest(false);
    if (!sidebarOpen) {
      setSubCategoryOpen(false);
      setShowCartItems(false);
    }
  };

  const handleShowSearchSuggestions = () => {
    setOpenCatergory(false);
    setSidebarOpen(false);
    setShowSearchSuggest(!showSearchSuggest);
    setSubCategoryOpen(false);
    setShowCartItems(false);
  };

  const handleShowCartItems = () => {
    setOpenCatergory(false);
    setSidebarOpen(false);
    setShowSearchSuggest(false);
    setSubCategoryOpen(false);
    setShowCartItems(!showCartItems);
  };



  return (
    <>
      <NavbarContainerWrap>
        <NavbarContainer>
          <NavLogo src={logo} alt="" onClick={() => history.push("/")} />

          <SearchBoxWrap>
            <SearchBox>
              <input
                type="text"
                placeholder="Search Product"
                onClick={handleShowSearchSuggestions}
              />
              <div>
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </div>
            </SearchBox>

            <SearchSuggestionsContainer open={showSearchSuggest}>
              <SearchSuggestions />
              <SearchSuggestions />
              <SearchSuggestions />
            </SearchSuggestionsContainer>
          </SearchBoxWrap>

          <ShoppingCart>
            <div onClick={handleShowCartItems}>
              <img src={CartIcon} alt="" />
            </div>
            <h4>৳ {addToCart.reduce((a, b) => a + b.totalPrice, 0)}.0</h4>
            {
              addToCart.length ?  <ItemsOnCart>{addToCart.length}</ItemsOnCart> : ""
            }
           
          </ShoppingCart>
        </NavbarContainer>
        {showCartItems && (
          <ShoppingCartContainer>
            <CartItems />
          </ShoppingCartContainer>
        )}
      </NavbarContainerWrap>
      {/* --------------------------Mobileview-------------------------- */}
      <MdNavbarContainerWrap>
        <MdNavbarContainer>
          <MdTopHeaderContainer>
            <MdShoppingCart onClick={handleShowCartItems}>
              <img src={CartIcon} alt="" />
              <h4>৳ {addToCart.reduce((a, b) => a + b.totalPrice, 0)}.0</h4>
              {
              addToCart.length ?  <ItemsOnCart>{addToCart.length}</ItemsOnCart> : ""
            }
            </MdShoppingCart>
            <div>
              <MdLogoImg src={logo} alt="" onClick={() => history.push("/")} />
            </div>

            <HamburgerMenuIcon
              src={HamburgerIcon}
              alt=""
              onClick={handleMenubarClick}
            />
          </MdTopHeaderContainer>

          <MdSidebar sidebarOpen={sidebarOpen}>
            <MdSidebarItems>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Login / Signup
              </Link>
            </MdSidebarItems>

            <MdSidebarItems>My Account</MdSidebarItems>
            <MdSidebarItems>My Cart</MdSidebarItems>
            <MdSidebarItems>My List</MdSidebarItems>
            <MdSidebarItems>History</MdSidebarItems>
            <MdSidebarItems>My Offer</MdSidebarItems>
            <MdSidebarItems>Notification</MdSidebarItems>
            <MdSidebarItems>Logout</MdSidebarItems>
          </MdSidebar>

          <MdcategoryWrap>
            <MdCategoryBar openCatergory={openCatergory}>
              {categories.map((category, idx) => (
                <MdCategoryItems
                  key={idx}
                  onMouseOver={() => handleGetSubCategories(category)}
                >
                  {category.name}
                </MdCategoryItems>
              ))}
            </MdCategoryBar>

            <MdSubCategoryBar open={subCategoryOpen}>
              {subCategories.map((item, idx) => (
                <MdCategoryItems key={idx}>{item.name}</MdCategoryItems>
              ))}
              {/*  */}
            </MdSubCategoryBar>
          </MdcategoryWrap>

          <MdSearchBoxWrap>
            <MdSearchBox>
              <input
                type="text"
                placeholder="Search Product"
                onClick={handleShowSearchSuggestions}
              />
              <div>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </MdSearchBox>
            <MdSearchSuggestionsContainer open={showSearchSuggest}>
              <SearchSuggestions />
              <SearchSuggestions />
              <SearchSuggestions />
            </MdSearchSuggestionsContainer>
          </MdSearchBoxWrap>
        </MdNavbarContainer>

        {showCartItems && (
          <MdShoppingCartContainer>
            <CartItems />
          </MdShoppingCartContainer>
        )}

        <MdCategoryIcon
          src={CatergoryBarIcon}
          onClick={handleCategorybarClick}
        />
      </MdNavbarContainerWrap>
    </>
  );
};

export default Navbar;
