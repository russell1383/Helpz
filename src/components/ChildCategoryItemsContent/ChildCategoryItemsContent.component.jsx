import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import Sticky from 'react-stickynode';
import { BannerContainer } from '../Banner/Banner.style';
import CategoriesCard from '../CategoriesCard/CategoriesCard.component';
import { CategoryItemsContainer, CategoryProductsContainer, ShowMoreButton } from '../CategoryItemsBanner/CategoryItemsBanner.style';
import MenuItems from '../MenuItems/MenuItems.component';
import ProductCard from '../ProductCard/ProductCard.component';

const ChildCategoryItemsContent = ({ id, name }) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      if (id) {
        let data = { category_id: id };
        axios
          .post("https://mudee.shop/eCommerce/api/product/cat/sub/child", data)
          .then((response) => setProduct(response.data));
      }
    }, [id]);
  
    console.log(product);
    return (
        <>
            <BannerContainer>
        <Row gutterWidth={6}>
          <Col md={1.5} className="d-none">
            <Sticky
              enabled={true}
              top={81}
              bottomBoundary="#end-point"
              className="category_card"
            >
              <CategoriesCard />
            </Sticky>
          </Col>

          <Col xs={12} md={9}>
            <CategoryItemsContainer>
              <p>HOME > {name}</p>
              <h2>{name}</h2>
              <CategoryProductsContainer>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </CategoryProductsContainer>
              <ShowMoreButton>Show More</ShowMoreButton>
            </CategoryItemsContainer>
          </Col>

          <Col md={1.5} className="d-none">
            <Sticky enabled={true} top={81} bottomBoundary="#end-point">
              <MenuItems />
            </Sticky>
          </Col>
        </Row>
      </BannerContainer>
        </>
    );
};

export default ChildCategoryItemsContent;