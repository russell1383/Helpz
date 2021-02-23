import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import History from "../History/History.component";
import Wishlist from "../Wishlist/Wishlist.component";
import { MenuItemsContainer, MenuItemsContainerWrap } from "./MenuItems.style";
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

const MenuItems = () => {
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <>
      <MenuItemsContainerWrap>
        <MenuItemsContainer>
          <p>
            <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt} />
              <span>Login / Signup</span>{" "}
            </Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faUserCircle} />
            <span>My Account</span>
          </p>
          <p>
            <Link to="/view-cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>My Cart</span>
            </Link>
          </p>
          <p onClick={() => setOpenWishlist(!openWishlist)}>
            <FontAwesomeIcon icon={faList} />
            <span>My List</span>
          </p>
          <p onClick={() => setOpenHistory(!openHistory)}>
            <FontAwesomeIcon icon={faHistory} />
            <span>History</span>
          </p>
          <p>
            {" "}
            <Link to="/offer">
              <FontAwesomeIcon icon={faGift} />
              <span>My Offer</span>
            </Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faBell} />
            <span>Notification</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </p>
        </MenuItemsContainer>

        <Wishlist wishlist={[openWishlist, setOpenWishlist]} />
        <History history={[openHistory, setOpenHistory]} />

      
      </MenuItemsContainerWrap>
    </>
  );
};

export default MenuItems;
