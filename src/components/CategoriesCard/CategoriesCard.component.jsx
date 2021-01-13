import React, { useEffect, useState } from "react";
import { CategoriesCardContainer, Dropdown } from "./CartegoriesCard.style";

const CategoriesCard = () => {
  const [categories, setCategories] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [items, setItems] = useState([]);
  const [productId, setProductId] = useState({});
  const [open, setOpen] = useState(false);

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
    if (productId) {
      const items = categoryItems.filter(
        (item) => item.category_id == productId
      );
      setItems(items);
      setOpen(true);
    }
  }, [productId]);

  return (
    <>
      
    </>
  );
};

export default CategoriesCard;
