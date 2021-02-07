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
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import axios from "axios";

const Navbar = () => {
  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openCatergory, setOpenCatergory] = useState(false);
  const [showSearchSuggest, setShowSearchSuggest] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const history = useHistory();

  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    let data = { category_id: 1 };
    axios
      .post("https://mudee.shop/eCommerce/api/product/cat/sub/child", data)
      .then((response) => {
        setAllProducts(response.data);
      });
  }, []);

  useEffect(() => {
    if (allProducts.length) {
      let item = allProducts.filter((pd) =>
        pd.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(item);
    }
  }, [searchTerm]);

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
              <SearchSuggestions />
              <SearchSuggestions />
              <SearchSuggestions />
            </SearchSuggestionsContainer>
          </SearchBoxWrap>

          <ShoppingCart>
            <div onClick={handleToggle}>
              <img src={CartIcon} alt="" />
            </div>
            <h4>৳ {addToCart.reduce((a, b) => a + b.totalPrice, 0)}.0</h4>
            {addToCart.length ? (
              <ItemsOnCart>{addToCart.length}</ItemsOnCart>
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

          <MdCategoryBar openCatergory={openCatergory}>
            <CategoriesCard></CategoriesCard>
          </MdCategoryBar>

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
