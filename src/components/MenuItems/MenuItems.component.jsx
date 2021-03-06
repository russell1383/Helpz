import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
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
import LoginModal from "../LoginModal/LoginModal.component";
import { UserContext } from "../../App";
import axios from "axios";

const MenuItems = () => {
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [wishListProducts, setWishListProducts] = useState([]);
  const [sideBarWishList, setSideBarWishList] = useState(false);

  const handleShowWishList = (info) => {
    if (loggedInUser.id || info.id) {
      let data = { user_id: loggedInUser.id || info.id };
      axios
        .post("https://mudee.shop/helpz/api/wish-list-user", data)
        .then((response) => {
          setWishListProducts(response.data);
          setOpen(false);
          setOpenWishlist(true);
        });
    } else {
      setOpen(true);
      setSideBarWishList(true);
    }
  };

  return (
    <>
      <MenuItemsContainerWrap>
        <LoginModal
          open={open}
          close={onCloseModal}
          handleShowWishList={handleShowWishList}
          sideBarWishList={sideBarWishList}
        />
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
          <p onClick={handleShowWishList}>
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

        <Wishlist
          wishlist={[openWishlist, setOpenWishlist]}
          wishListProducts={wishListProducts}
        />
        <History history={[openHistory, setOpenHistory]} />
      </MenuItemsContainerWrap>
    </>
  );
};

export default MenuItems;
