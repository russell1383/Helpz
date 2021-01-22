import React from "react";
import {
  ProductDetailsContainer,
  ProductDetailsContainerWrap,
} from "./ProductDetails.style";

const ProductDetails = () => {
  return (
    <>
      <ProductDetailsContainerWrap>
        <ProductDetailsContainer>
          <h2>Fresh Onion</h2>
          <h3>About the Product</h3>
          <p>
            Onion is a vegetable which is almost like a staple in Indian food.
            This is also known to be one of the essential ingredients of raw
            salads. They come in different colours like white, red or yellow and
            are quite in demand in cold salads and hot soups. You can dice,
            slice or cut it in rings and put it in burgers and sandwiches.
            Onions emit a sharp flavour and fragrance once they are fried; it is
            due to the sulphur compound in the vegetable.
          </p>
          <h3>Natural Facts</h3>
          <p>
            Nutritional Facts Onions are known to be rich in biotin. Most of the
            flavonoids which are known as anti-oxidants are concentrated more in
            the outer layers, so when you peel off the layers, you should remove
            as little as possible. Onions, like garlic, are also rich in sulphur
            compounds.{" "}
          </p>
          <h3>Benifits</h3>
          <p>
            Onions are known to contain manganese, copper, Vitamin B6, Vitamin C
            and dietary fibers along with phosphorus, folate and copper.
            Benefits Onions are known to have antiseptic, antimicrobial and
            antibiotic properties which help you to get rid of infections. If a
            piece of onion is inhaled, it can slow down or stop nose bleeding.
            Those who have sleeping disorders or insomnia can have a good night
            sleep if they have an onion every day. Onions also help to improve
            the functions of the digestive system; because it releases the
            digestive juices and cures any problem related to digestion.
          </p>
          
        </ProductDetailsContainer>
      </ProductDetailsContainerWrap>
    </>
  );
};

export default ProductDetails;
