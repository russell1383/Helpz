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
} from "./Navbar.style";
import logo from "../../assets/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import HamburgerIcon from "../../assets/icons/hamburger-icon.png";
import CatergoryBarIcon from "../../assets/icons/category-icon.png";
import CartIcon from "../../assets/icons/Cart.png";

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

  useEffect(() => {
    fetch("https://mudee.shop/eCommerce/api/allcategories")
      .then((res) => res.json())
      .then((data) => setCategories(data[0]));
  }, []);

  const handleMenubarClick = () => {
    setSidebarOpen(!sidebarOpen);
    setOpenCatergory(false);
  };
  const handleCategorybarClick = () => {
    setOpenCatergory(!openCatergory);
    setSidebarOpen(false);
  };
  
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
            <img src={CartIcon} alt="" />
          </div>
          <h4>৳ 00.00</h4>
        </ShoppingCart>
      </NavbarContainer>

      {/* --------------------------Mobileview-------------------------- */}

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

        <MdCategoryBar openCatergory={openCatergory}>
          {categories.map((category, idx) => (
            <MdCategoryItems key={idx}>{category.name}</MdCategoryItems>
          ))}
        </MdCategoryBar>

        <MdSearchBox>
          <input type="text" placeholder="Search Product" />
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </MdSearchBox>
      </MdNavbarContainer>
      <MdCategoryIcon src={CatergoryBarIcon} onClick={handleCategorybarClick} />
    </>
  );
};

export default Navbar;
