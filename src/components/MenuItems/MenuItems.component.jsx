import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wishlist from "../Wishlist/Wishlist.component";
import { MenuItemsContainer, MenuItemsContainerWrap } from "./MenuItems.style";

const MenuItems = () => {
  const [openWishlist, setOpenWishlist] = useState(false);

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
        <p >My Cart</p>
        <p onClick={()=>setOpenWishlist(!openWishlist)}>Wish List</p>
        <p>History</p>
        <p>My Offer</p>
        <p>Notification</p>
        <p>Logout</p>
        </MenuItemsContainer>
        

        <Wishlist openWishlist={openWishlist}/>
        
        {
          openWishlist && <h1 onClick={()=>setOpenWishlist(false)}>✖</h1>
        }
        
      </MenuItemsContainerWrap>
    </>
  );
};

export default MenuItems;
