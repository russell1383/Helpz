import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CategoriesCardContainer,
  CategoriesCardContainerWrap,
  SubCategories,
  SubCategoryItems,
  SubCategoryItemsContainer,
  SubCatergoriesWrap,
} from "./CartegoriesCard.style";

const CategoriesCard = ({d}) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const history = useHistory();

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

  const handleCategoryItem = (item) => {
    console.log(item.id);
    history.push(`/products/category/${item.id}`);
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
                onClick={() =>
                  history.push(`/products/category/${category.name}/${category.id}`)
                }
              >
                {category.name}
              </p>
            ))}
        </CategoriesCardContainer>

        <SubCatergoriesWrap open={open}>
          <SubCategories>
            {subCategories.map((item, idx) => (
              <SubCategoryItemsContainer key={idx}>
                <SubCategoryItems>
                  <h4
                    key={item.id}
                    onClick={() =>
                      history.push(`/products/sub-category/${item.name}/${item.id}`)
                    }
                  >
                    {item.name}
                  </h4>
                  {item.childs &&
                    item.childs.map((pd) => (
                      <p
                        key={pd.id}
                        onClick={() =>
                          history.push(`/products/child-category/${pd.name}/${pd.id}`)
                        }
                      >
                        {pd.name}
                      </p>
                    ))}
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
