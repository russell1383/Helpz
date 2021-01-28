import React, { useEffect, useState } from "react";
import {
  CategoriesCardContainer,
  CategoriesCardContainerWrap,
  SubCategories,
  SubCategoryItems,
  SubCategoryItemsContainer,
  SubCatergoriesWrap,
} from "./CartegoriesCard.style";

const CategoriesCard = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
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
    console.log(subCategories);
    setOpen(true);
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
                onMouseLeave={() => setOpenSub(false)}
              >
                {category.name}
              </p>
            ))}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </CategoriesCardContainer>

        <SubCatergoriesWrap open={open}>
          <SubCategories>
            {subCategories.map((item, idx) => (
              <SubCategoryItemsContainer key={idx}>
                <SubCategoryItems>
                  <h4> {item.name}</h4>
                  {item.childs &&
                    item.childs.map((pd, idx) => <p key={idx}>{pd.name}</p>)}
                </SubCategoryItems>
              </SubCategoryItemsContainer>
            ))}
          </SubCategories>
        </SubCatergoriesWrap>
      </CategoriesCardContainerWrap>
    </>
  );
};

export default CategoriesCard;

// onMouseOver={() => setSubProduct(item)}
