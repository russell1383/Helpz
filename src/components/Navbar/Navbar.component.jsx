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
import {
  faBell,
  faGift,
  faHistory,
  faList,
  faSearch,
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import HamburgerIcon from "../../assets/icons/hamburger-icon.png";
import CatergoryBarIcon from "../../assets/icons/category-icon.png";
import CartIcon from "../../assets/icons/Cart.png";
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions.component";
import CartItems from "../CartItems/CartItems.component";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import axios from "axios";
import Location from "../Location/Location.component";

const Navbar = () => {
  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openCatergory, setOpenCatergory] = useState(false);
  const [showSearchSuggest, setShowSearchSuggest] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const [searchTermNotMatched,setSearchTermNotMatched] = useState(false)
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const [toggleDropdown, setToggleDropdown] = useState(false);


  const handleAddToCart = (item) => {
    console.log(item);
    let newItem = [...addToCart, item];
    item.price = parseInt(item.price);
    item.quantity = 1;
    item.totalPrice = item.price;
    item.totalQuantity = item.quantity;
    setAddToCart(newItem);
  };

  const handleQuantity = (id) => {
    if (addToCart.find((product) => product.id === id)) {
      const product = addToCart.find((product) => product.id === id);
      product.totalQuantity = product.totalQuantity + 1;
      product.totalPrice = product.price * product.totalQuantity;

      if (addToCart.find((item) => item.id === product.id)) {
        var objectIndex = addToCart.findIndex((obj) => obj.id === product.id);
        var newItems = [...addToCart];
        newItems[objectIndex] = product;
        setAddToCart(newItems);
      }
    }
  };


  useEffect(() => {
    let data = {name: searchTerm}
    if (data.name) {
      console.log(data)
      axios
      .post("https://mudee.shop/eCommerce/api/product/search/frontend", data)
      .then((response) => {
        setSearchResults(response.data.slice(0, 5))
      });
      
    }

  },[searchTerm])

  const handleToggle = (e) => {
    e.preventDefault();
    setToggleDropdown((prevState) => !prevState);
    setOpenCatergory(false);
    setSidebarOpen(false);
    setShowSearchSuggest(false);
  };
  const closeToggle = () => {
    setToggleDropdown(false);
  };

  const handleMenubarClick = () => {
    setSidebarOpen(!sidebarOpen);
    setOpenCatergory(false);
    setShowSearchSuggest(false);
  };
  const handleCategorybarClick = () => {
    setOpenCatergory(!openCatergory);
    setSidebarOpen(false);
    setShowSearchSuggest(false);
  };

  const handleShowSearchSuggestions = () => {
    setOpenCatergory(false);
    setSidebarOpen(false);
    setShowSearchSuggest(!showSearchSuggest);
  };

  // console.log(searchResults)

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
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div>
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </div>
            </SearchBox>

            <SearchSuggestionsContainer open={showSearchSuggest}>
              {searchResults &&
                searchResults.map((product) => (
                  <SearchSuggestions
                    key={product.key}
                    productInfo={product}
                    handleAddToCart={handleAddToCart}
                    handleQuantity={handleQuantity}
                  />
                ))}
            
            </SearchSuggestionsContainer>
          </SearchBoxWrap>

          <ShoppingCart>
            <div onClick={handleToggle}>
              <img src={CartIcon} alt="" />
            </div>
            <h4>৳ {addToCart.reduce((a, b) => a + b.totalPrice, 0)}.0</h4>
            {addToCart.length ? (
              <ItemsOnCart >
                {addToCart.length}
              </ItemsOnCart>
            ) : (
              ""
            )}
          </ShoppingCart>
        </NavbarContainer>
        {toggleDropdown && (
          <ShoppingCartContainer>
            <CartItems closeToggle={closeToggle} />
          </ShoppingCartContainer>
        )}
      </NavbarContainerWrap>
      {/* --------------------------Mobileview-------------------------- */}
      <MdNavbarContainerWrap>
        <MdNavbarContainer>
          <MdTopHeaderContainer>
            <MdShoppingCart onClick={handleToggle}>
              <img src={CartIcon} alt="" />
              <h4>৳ {addToCart.reduce((a, b) => a + b.totalPrice, 0)}.0</h4>
              {addToCart.length ? (
                <ItemsOnCart>{addToCart.length}</ItemsOnCart>
              ) : (
                ""
              )}
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

          <MdSidebar
            sidebarOpen={sidebarOpen}
            onClick={() => history.push("/")}
          >
            <Location />
            <MdSidebarItems>
              <FontAwesomeIcon icon={faSignInAlt} />
              <span>Login / Signup</span>
            </MdSidebarItems>

            <MdSidebarItems>
              <FontAwesomeIcon icon={faUserCircle} />
              <span>My Account</span>
            </MdSidebarItems>
            <MdSidebarItems>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>My Cart</span>
            </MdSidebarItems>
            <MdSidebarItems>
              <FontAwesomeIcon icon={faList} />
              <span>My List</span>
            </MdSidebarItems>
            <MdSidebarItems>
              <FontAwesomeIcon icon={faHistory} />
              <span>History</span>
            </MdSidebarItems>
            <MdSidebarItems>
              <FontAwesomeIcon icon={faGift} />
              <span>My Offer</span>
            </MdSidebarItems>
            <MdSidebarItems>
              <FontAwesomeIcon icon={faBell} />
              <span>Notification</span>
            </MdSidebarItems>
            <MdSidebarItems>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Logout</span>
            </MdSidebarItems>
          </MdSidebar>

          <MdCategoryBar openCatergory={openCatergory}>
            <CategoriesCard></CategoriesCard>
          </MdCategoryBar>

          <MdSearchBoxWrap>
            <MdSearchBox>
              <input
                type="text"
                placeholder="Search Product"
                onClick={handleShowSearchSuggestions}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </MdSearchBox>
            <MdSearchSuggestionsContainer open={showSearchSuggest}>
            {searchResults &&
                searchResults.map((product) => (
                  <SearchSuggestions
                    key={product.key}
                    productInfo={product}
                    handleAddToCart={handleAddToCart}
                    handleQuantity={handleQuantity}
                  />
                ))}
            </MdSearchSuggestionsContainer>
          </MdSearchBoxWrap>
        </MdNavbarContainer>

        {toggleDropdown && (
          <MdShoppingCartContainer>
            <CartItems closeToggle={closeToggle} />
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
