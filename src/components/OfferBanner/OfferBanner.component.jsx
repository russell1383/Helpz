import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import Sticky from "react-stickynode";
import { UserContext } from "../../App";
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import MenuItems from "../MenuItems/MenuItems.component";
import OfferProductCard from "../OfferProductCard/OfferProductCard.component";
import {
  OfferBannerContainer,
  OfferBannerContent,
  OfferBannerContentContainer,
} from "./OfferBanner.style";

const OfferBanner = () => {
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const [offerProduct, setOfferProduct] = useState([]);

  useEffect(() => {
    let data = { user_id: loggedInUser.id };
    axios
      .post("https://mudee.shop/helpz/api/offer-list-user", data)
      .then((response) => {
        setOfferProduct(response.data);
      });
  }, []);
  console.log(offerProduct);
  return (
    <>
      <OfferBannerContainer>
        <Row nogutter>
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
            <OfferBannerContentContainer>
              <h2>Offers Only For You</h2>
              <OfferBannerContent>
                {offerProduct.length ? (
                  offerProduct.map((product) => (
                    <OfferProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <p>Sorry there is no offer for you for now. Stay with us.</p>
                )}
              </OfferBannerContent>
            </OfferBannerContentContainer>
          </Col>
          <Col md={1.5} className="d-none">
            <Sticky enabled={true} top={81} bottomBoundary="#end-point">
              <MenuItems />
            </Sticky>
          </Col>
        </Row>
      </OfferBannerContainer>
    </>
  );
};

export default OfferBanner;
