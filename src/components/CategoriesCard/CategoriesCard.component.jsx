import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CategoriesCardContainer,
  CategoriesCardContainerWrap,
  Dropdown,
  SubDropDown,
} from "./CartegoriesCard.style";

const CategoriesCard = () => {

  const {productInfo} = useParams()

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [childCategories, setChildCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  useEffect(() => {
    fetch("https://mudee.shop/eCommerce/api/allcategories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleGetSubCategories = (items) => {
    setSubCategories(items.subs);
    setOpen(true);
  };

  const handleChildCategories = (items) => {
    setChildCategories(items.childs);
    setOpenSub(true);
  };

  return (
    <>
      <CategoriesCardContainerWrap
        onMouseLeave={() => {
          setOpen(false);
          setOpenSub(false);
        }}
      >
        <CategoriesCardContainer>
          <h3>Categories</h3>
          {categories &&
            categories.map((category) => (
              <p
                key={category.id}
                onMouseOver={() => {
                  handleGetSubCategories(category);
                }}
                onMouseLeave={()=>setOpenSub(false)}
              >
                {category.name}
               
              </p>
            ))}
        </CategoriesCardContainer>

        <Dropdown open={open}>
          {subCategories.map((item) => (
            <h6 key={item.id} onMouseOver={()=>handleChildCategories(item)}>{item.name}</h6>
          ))}
        </Dropdown>

        <SubDropDown openSub={openSub} >
          {childCategories &&
            childCategories.map((product) => (
              <h6 key={product.id}>{product.name}</h6>
            ))}
        </SubDropDown> 
      </CategoriesCardContainerWrap>
    </>
  );
};

export default CategoriesCard;

// onMouseOver={() => setSubProduct(item)}
