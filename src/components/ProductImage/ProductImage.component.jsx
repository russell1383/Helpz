import React from "react";
import { ProductImages } from "./ProductImage.style";
import Img from "../../assets/images/img-5.png";

const ProductImage = () => {
  return (
    <>
      <ProductImages src={Img} />
    </>
  );
};

export default ProductImage;
