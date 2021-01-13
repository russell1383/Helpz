import React, { useEffect, useState } from "react";
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
} from "./Navbar.style";
import logo from "../../assets/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import HamburgerIcon from "../../assets/icons/hamburger-icon.png";
import CatergoryBarIcon from "../../assets/icons/category-icon.png";
import CartIcon from "../../assets/icons/Cart.png";
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions.component";

const menuItems = [
  "Login / Signup",
  "My Account",
  "My Cart",
  "My List",
  "History",
  "Loyality Point",
  "My offer",
  "Notification",
  "Logout",
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openCatergory, setOpenCatergory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showSearchSuggest, setShowSearchSuggest] = useState(false);
  const [categoryItems, setCategoryItems] = useState([]);
  const [productId, setProductId] = useState({});
  const [subCategoryOpen, setSubCategoryOpen] = useState(false);
  const [items, setItems] = useState([]);

  console.log(items);
  useEffect(() => {
    fetch("https://mudee.shop/eCommerce/api/allcategories")
      .then((res) => res.json())
      .then((data) => setCategories(data[0]));
  }, []);

  useEffect(() => {
    fetch("https://mudee.shop/eCommerce/api/allcategories")
      .then((res) => res.json())
      .then((data) => {
        setCategoryItems(data[1]);
      });
  }, []);

  useEffect(() => {
    if (productId) {
      const items = categoryItems.filter(
        (item) => item.category_id == productId
      );
      setItems(items);
      setSubCategoryOpen(true);
    }
  }, [productId]);

  const handleMenubarClick = () => {
    setSidebarOpen(!sidebarOpen);
    setOpenCatergory(false);
    setShowSearchSuggest(false);
    setSubCategoryOpen(false)

  
  };
  const handleCategorybarClick = () => {
    setOpenCatergory(!openCatergory);
    setSidebarOpen(false);
    setShowSearchSuggest(false);
    if (!sidebarOpen) {
      setSubCategoryOpen(false)
    }
  };

  const handleShowSearchSuggestions = () => {
    setOpenCatergory(false);
    setSidebarOpen(false);
    setShowSearchSuggest(!showSearchSuggest);
    setSubCategoryOpen(false);
  };


  

  return (
    <>
      <NavbarContainerWrap>
        <NavbarContainer>
          <img src={logo} alt="" />
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
            <div>
              <img src={CartIcon} alt="" />
            </div>
            <h4>৳ 00.00</h4>
          </ShoppingCart>
        </NavbarContainer>
      </NavbarContainerWrap>
      {/* --------------------------Mobileview-------------------------- */}
      <MdNavbarContainerWrap>
        <MdNavbarContainer>
          <MdTopHeaderContainer>
            <MdShoppingCart>
              <img src={CartIcon} alt="" />
              <h4>৳ 00.00</h4>
            </MdShoppingCart>
            <div>
              <MdLogoImg src={logo} alt="" />
            </div>

            <HamburgerMenuIcon
              src={HamburgerIcon}
              alt=""
              onClick={handleMenubarClick}
            />
          </MdTopHeaderContainer>

          <MdSidebar sidebarOpen={sidebarOpen}>
            {menuItems.map((item, idx) => (
              <MdSidebarItems key={idx}>{item}</MdSidebarItems>
            ))}
          </MdSidebar>

          <MdcategoryWrap>
          
          <MdCategoryBar openCatergory={openCatergory}>
            {categories.map((category, idx) => (
              <MdCategoryItems key={idx} onMouseOver={() => setProductId(category.id)}>{category.name}</MdCategoryItems>
            ))}
          </MdCategoryBar>

          <MdSubCategoryBar open={subCategoryOpen} onMouseLeave={() => setOpenCatergory(false)}>
          {items && items.map((item) => <MdCategoryItems>{item.name}</MdCategoryItems>)}
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

        <MdCategoryIcon
          src={CatergoryBarIcon}
          onClick={handleCategorybarClick}
        />
      </MdNavbarContainerWrap>
    </>
  );
};

export default Navbar;
