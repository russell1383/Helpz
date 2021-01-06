import React from 'react';
import { MenuItemsContainer } from './MenuItems.style';

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


const MenuItems = () => {
    return (
        <>
            <MenuItemsContainer>
                {
                    menuItems.map((item,idx) => <p key={idx}>{item}</p>)
                }
            </MenuItemsContainer> 
        </>
    );
};

export default MenuItems;