import React, { useState } from "react";
import { Link } from "react-router-dom";
import History from "../History/History.component";
import Wishlist from "../Wishlist/Wishlist.component";
import { MenuItemsContainer, MenuItemsContainerWrap } from "./MenuItems.style";

const MenuItems = () => {
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <>
      <MenuItemsContainerWrap>
        <MenuItemsContainer>
          <p>
            <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
              Login / Signup
            </Link>
          </p>
          <p>My Account</p>
          <p>
            <Link to="/view-cart" style={{ textDecoration: "none", color: "#fff" }}>My Cart</Link>
          </p>
          <p onClick={() => setOpenWishlist(!openWishlist)}>Wish List</p>
          <p onClick={()=> setOpenHistory(!openHistory)}>History</p>
          <p> <Link to="/offer" style={{ textDecoration: "none", color: "#fff" }}>My Offer</Link></p>
          <p>Notification</p>
          <p>Logout</p>
        </MenuItemsContainer>

        <Wishlist openWishlist={openWishlist} />
        <History openHistory={openHistory}/>

        {openWishlist && <h1 onClick={() => setOpenWishlist(false)}>✖</h1>}
        {openHistory && <h1 onClick={() => setOpenHistory(false)}>✖</h1>}
      </MenuItemsContainerWrap>  
    </>
  );
};

export default MenuItems;
