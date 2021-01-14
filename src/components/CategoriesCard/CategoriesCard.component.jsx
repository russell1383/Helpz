import React, { useEffect, useState } from "react";
import {
  CategoriesCardContainer,
  CategoriesCardContainerWrap,
  Dropdown,
  SubDropDown,
} from "./CartegoriesCard.style";

const CategoriesCard = () => {
  const [categories, setCategories] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [subCategoryItems, setSubCategoryItems] = useState([]);
  const [items, setItems] = useState([]);
  const [subCategoryProductItems, setSubCategoryProductItems] = useState([]);
  const [productId, setProductId] = useState({});
  const [subProductId, setSubProductId] = useState({});
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  // console.log(productId);

  useEffect(() => {
    fetch("https://mudee.shop/eCommerce/api/allcategories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data[0]);
      });
  }, []);

  useEffect(() => {
    fetch("https://mudee.shop/eCommerce/api/allcategories")
      .then((res) => res.json())
      .then((data) => {
        setCategoryItems(data[1]);
      });
  }, []);

  useEffect(() => {
    fetch("https://mudee.shop/eCommerce/api/allcategories")
      .then((res) => res.json())
      .then((data) => {
        setSubCategoryItems(data[2]);
      });
  }, []);

  useEffect(() => {
    if (productId) {
      const items = categoryItems.filter(
        (item) => item.category_id == productId
      );
      setItems(items);
      setOpen(true);
    }
  }, [productId]);

  useEffect(() => {
    if (subProductId) {
      const items = subCategoryItems.filter(
        (item) => item.subcategory_id == subProductId
      );
      setSubCategoryProductItems(items);
      setOpenSub(true)
    }
  }, [subProductId]);

  console.log(openSub);

  return (
    <>
      <CategoriesCardContainerWrap onMouseLeave={() => { setOpen(false); setOpenSub(false)}}>
        <CategoriesCardContainer>
          <h3>Categories</h3>
          {categories.map((category) => (
            <p key={category.id} onMouseOver={() => setProductId(category.id)}>
              {category.name}
            </p>
          ))}
        </CategoriesCardContainer>

       
        <Dropdown open={open}>
            {items &&
              items.map((item) => (
                <h6 key={item.id} onMouseOver={() => setSubProductId(item.id)}>
                  {item.name}
                </h6>
              ))}
          </Dropdown>
   

        <SubDropDown openSub={openSub} onMouseLeave={() => setOpenSub(false)}>
          {subCategoryProductItems &&
            subCategoryProductItems.map((product) => (
            <h6 key={product.id}>{product.name}</h6>
          ))}
        </SubDropDown>
      </CategoriesCardContainerWrap>
    </>
  );
};

export default CategoriesCard;
