import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import Sticky from 'react-stickynode';
import { UserContext } from '../../App';
import { BannerContainer } from '../Banner/Banner.style';
import CategoriesCard from '../CategoriesCard/CategoriesCard.component';
import { CategoryItemsContainer, CategoryProductsContainer, ShowMoreButton } from '../CategoryItemsBanner/CategoryItemsBanner.style';
import MenuItems from '../MenuItems/MenuItems.component';
import ProductCard from '../ProductCard/ProductCard.component';

const ChildCategoryItemsContent = ({ id, name }) => {
  const [products, setProducts] = useState([]);
  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;
    useEffect(() => {
      if (id) {
        let data = { category_id: id };
        axios
          .post("https://mudee.shop/eCommerce/api/product/cat/sub/child", data)
          .then((response) => setProducts(response.data));
      }
    }, [id]);

    const handleQuantity = (id) => {
      if (addToCart.find((product) => product.id === id)) {
        const product = addToCart.find((product) => product.id === id);
        product.totalQuantity = product.totalQuantity + 1;
        product.totalPrice = product.price * product.totalQuantity;
  
        if (addToCart.find((item) => item.id === product.id)) {
          var objectIndex = addToCart.findIndex((obj) => obj.id === product.id);
          var newItems = [...addToCart];
          newItems[objectIndex] = product;
          setAddToCart(newItems);
        }
      }
    };

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
              {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    rewardPoint={product.reward_point}
                    productInfo={product}
                    handleAddToCart={handleAddToCart}
                    handleQuantity={handleQuantity}
                  />
                ))}
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