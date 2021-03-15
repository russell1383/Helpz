import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import Sticky from "react-stickynode";
import CategoriesCard from "../CategoriesCard/CategoriesCard.component";
import { UserContext } from "../../App";
import MenuItems from "../MenuItems/MenuItems.component";
import {
  MagnifiedImage,
  MdProductInfoOffLabel,
  MdProductPrice,
  ProductBannerContainer,
  ProductInfo,
  ProductInfoBox,
  ProductInfoBoxImgContainer,
  ProductInfoBoxImgContainerWrap,
  ProductInfoContainer,
  ProductInfoOffLabel,
  ProductInfoPickupTimingBox,
  ProductOrderButtonsContainer,
  ProductSubImgContainer,
  RewardContainer,
} from "./ProductInfoBanner.style";
import loading from "../../assets/gifs/loader.gif";
import img from "../../assets/images/product-images/product-1.png";
import leftArrow from "../../assets/icons/left-arrow.png";
import rightArrow from "../../assets/icons/right-arrow.png";
import { useHistory, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import axios from "axios";
import { LoaderGif } from "../CategoryItemsBanner/CategoryItemsBanner.style";
import {
  handleAddToCart,
  handleQuantityIncrement,
  handleQuantityDecrement,
  handleProductPrice,
} from "../../utils/cartManagement";
import LoginModal from "../LoginModal/LoginModal.component";

const ProductInfoBanner = () => {
  const [product, setProduct] = useState({});
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const [addToCart, setAddToCart] = value2;
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true);
  const [zIndex, setZindex] = useState(false);
  const { productId } = useParams();
  const [wishListPage, setWishListPage] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    let data = { product_id: productId };
    axios
      .post("https://mudee.shop/helpz/api/product/cat/sub/child", data)
      .then((response) => {
        setLoader(false);
        setProduct(response.data[0]);
      });
  }, [productId]);

  const handleAddToWishList = (info) => {
    if (loggedInUser.email || info.email) {
      let data = {
        product_id: productId,
        user_id: loggedInUser.id || info.id,
      };
      axios
        .post("https://mudee.shop/helpz/api/wish-list-store", data)
        .then((response) => {
          console.log(response);
        });
      setOpen(false);
    } else {
      setOpen(true);
      setWishListPage(true);
    }
  };

  const showQuantity = (pId) => {
    const pd = addToCart.find((p) => p.id === product.id);
    if (pd) {
      return pd.totalQuantity;
    } else {
      return 1;
    }
  };

  return (
    <>
      <ProductBannerContainer>
        <LoginModal
          open={open}
          close={onCloseModal}
          handleAddToWishList={handleAddToWishList}
          wishListPage={wishListPage}
        />

        <Row nogutter>
          <Col md={1.5} className="d-none">
            <Sticky
              enabled={true}
              top={81}
              bottomBoundary="#more-details"
              className="category_card"
            >
              <CategoriesCard />
            </Sticky>
          </Col>

          <Col md={9}>
            {loader ? (
              <LoaderGif src={loading} />
            ) : (
              <ProductInfoContainer>
                <p className="bread_crumb">
                  HOME > FRUITS & VEGETABLES > FRESH VEGETABLES > POTATO, ONION
                  & TOMATO > FRESHO ONION
                </p>

                <ProductInfoBox>
                  <ProductInfoBoxImgContainerWrap>
                    <ProductInfoBoxImgContainer
                      onMouseOver={() => setZindex(true)}
                      onMouseLeave={() => setZindex(false)}
                    >
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,
                            src: `https://mudee.shop/helpz/assets/images/products/${product.photo}`,
                          },
                          largeImage: {
                            src: `https://mudee.shop/helpz/assets/images/products/${product.photo}`,
                            width: 1200,
                            height: 800,
                          },
                          enlargedImagePortalId: "myPortal",
                        }}
                      />
                      <MdProductInfoOffLabel>
                        25% <br /> Off
                      </MdProductInfoOffLabel>
                    </ProductInfoBoxImgContainer>

                    <ProductSubImgContainer>
                      {[1, 2, 3, 4, 5].map((item, idx) => (
                        <img
                          src={`https://mudee.shop/helpz/assets/images/products/${product.photo}`}
                          alt=""
                        />
                      ))}

                      <div className="left_arrow">
                        <img src={leftArrow} className="arrow_icon" alt="" />
                      </div>
                      <div className="right_arrow">
                        <img src={rightArrow} className="arrow_icon" alt="" />
                      </div>
                    </ProductSubImgContainer>
                  </ProductInfoBoxImgContainerWrap>
                  <ProductInfo>
                    <p>Fresh</p>
                    <h3>{product.name}</h3>
                    <p>1 kg</p>
                    <p className="d-none">
                      Price : <del>{product.price}Tk</del>
                    </p>
                    <h3 className="price_tag d-none">
                      {handleProductPrice(product)}
                      Tk
                    </h3>
                    <h3>Fresh {product.name} Offer</h3>
                    <p>
                      Fresh {product.name}
                      Offer If You buy 5 kg , we will provide 100 Loyalty Reward
                      as gift
                    </p>

                    <RewardContainer>
                      <p>Buy This & get reward : </p>
                      <div>{product.reward_point}</div>
                    </RewardContainer>
                    <p>Pickup timeing : </p>
                    <ProductInfoPickupTimingBox>
                      <div>2h</div>
                      <div>4h</div>
                      <div>10h</div>
                      <div>12h</div>
                    </ProductInfoPickupTimingBox>

                    <ProductOrderButtonsContainer>
                      <div>
                        <div className="quantity_box">
                          <button
                            onClick={() =>
                              handleQuantityDecrement(
                                addToCart,
                                setAddToCart,
                                product.id
                              )
                            }
                          >
                            -
                          </button>
                          {showQuantity()}
                          kg
                          <button
                            onClick={() =>
                              handleQuantityIncrement(
                                addToCart,
                                setAddToCart,
                                product.id
                              )
                            }
                          >
                            +
                          </button>
                        </div>

                        <button
                          disabled={
                            addToCart.length &&
                            addToCart.find((p) => p.id === product.id) &&
                            true
                          }
                          onClick={() =>
                            handleAddToCart(addToCart, setAddToCart, product)
                          }
                        >
                          {addToCart.length &&
                          addToCart.find((p) => p.id === product.id)
                            ? "Already on Cart"
                            : "Add to cart"}
                        </button>
                      </div>
                      <div>
                        <button>Order Now</button>
                        <button onClick={handleAddToWishList}>
                          Add to Wish List
                        </button>
                      </div>
                    </ProductOrderButtonsContainer>

                    <ProductInfoOffLabel>
                      25% <br /> Off
                    </ProductInfoOffLabel>

                    <MdProductPrice>
                      <p>
                        Price : <del>30Tk</del>
                      </p>
                      <h3 className="price_tag">20Tk</h3>
                    </MdProductPrice>
                  </ProductInfo>

                  <MagnifiedImage zIndex={zIndex} id="myPortal" />
                </ProductInfoBox>

                <h2>Packeg Offer</h2>

                <div className="packeg_offer">
                  <p>5 KG</p>
                  <p>30% OFF</p>
                  <p>80 TK</p>
                  <input type="radio" name="offer" className="circle" />
                </div>
                <div className="packeg_offer">
                  <p>5 KG</p>
                  <p>30% OFF</p>
                  <p>80 TK</p>
                  <input type="radio" name="offer" className="circle" />
                </div>
              </ProductInfoContainer>
            )}
          </Col>

          <Col md={1.5} className="d-none">
            <Sticky enabled={true} top={81} bottomBoundary="#more-details">
              <MenuItems />
            </Sticky>
          </Col>
        </Row>
      </ProductBannerContainer>
      )
    </>
  );
};

export default ProductInfoBanner;
