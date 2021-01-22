import React from 'react';
import { ProductDetailsContainer, ProductDetailsContainerWrap } from '../ProductDetails/ProductDetails.style';
import img1 from "../../assets/images/banner-images/banner-img-7.png";
import img2 from "../../assets/images/banner-images/banner-img-8.png";
import img3 from "../../assets/images/banner-images/banner-img-9.png";
import { ProductInfoAdImgContainer } from './ProductInfoAdImg.style';
import Products from '../Products/Products.component';
const ProductInfoAdImg = () => {
    return (
        <>
            <ProductDetailsContainer>

                <ProductInfoAdImgContainer>
                    <div className="left_side"><img src={img1} alt=""/></div>
                    <div className="right_side">
                        <div className="right_container">
                            <img src={img2} alt=""/>
                            <img src={img3} alt=""/>
                        </div>
                    </div>
                </ProductInfoAdImgContainer>
                
            </ProductDetailsContainer>

            <ProductDetailsContainerWrap>
                    <Products header={'Similar Products'}/>
            </ProductDetailsContainerWrap>
        </>
    );
};

export default ProductInfoAdImg;