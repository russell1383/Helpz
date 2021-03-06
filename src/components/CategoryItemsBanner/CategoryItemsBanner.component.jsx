import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import Sticky from "react-stickynode";
import { UserContext } from "../../App";
import { BannerContainer } from "../Banner/Banner.style";
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import MenuItems from "../MenuItems/MenuItems.component";
import ProductCard from "../ProductCard/ProductCard.component";
import {
  CategoryItemsContainer,
  CategoryProductsContainer,
  LoaderGif,
  ShowMoreButton,
} from "./CategoryItemsBanner.style";
import loading from "../../assets/gifs/loader.gif";

const CategoryItemsBanner = ({ id, name }) => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const { value, value2 } = useContext(UserContext);
  const [addToCart, setAddToCart] = value2;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      let data = { category_id: id };
      axios
        .post("https://mudee.shop/helpz/api/product/cat/sub/child", data)
        .then((response) => {
          setLoader(false);
          setProducts(response.data);
        });
    }
  }, [id]);

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
            {loader ? (
              <LoaderGif src={loading} />
            ) : (
              <CategoryItemsContainer>
                <p>HOME > {name}</p>
                <h2>{name}</h2>
                <CategoryProductsContainer>
                  {products.map((product) => (
                    <ProductCard key={product.id} productInfo={product} />
                  ))}
                </CategoryProductsContainer>
                <ShowMoreButton>Show More</ShowMoreButton>
              </CategoryItemsContainer>
            )}
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

export default CategoryItemsBanner;
