import React from 'react';
import { CategoriesCardContainer } from './CartegoriesCard.style';

const catagories = [
    "Grocery & Staples",
    "Vegetables & Fruits",
    "Household Items",
    "Biacuits, Snacks & Chocolates",
    "Beverages",
    "Dairy",
    " Fresh & Frozen Food",
    "Baby Care",
    "Personal Care",
  ];

const CategoriesCard = () => {
    return (
        <>
            <CategoriesCardContainer>
                <h3>Categories</h3>
                {
                    catagories.map((catagory,idx) => <p key={idx}>{catagory}</p>)
                }
                
            </CategoriesCardContainer>
        </>
    );
};

export default CategoriesCard;