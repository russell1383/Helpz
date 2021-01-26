import React from "react";
import {
  WishlistButton,
  WishListContainer,
  WishListIncrement,
  WishlistProductContainer,
} from "./Wishlist.style";
import img from "../../assets/images/product-images/product-1.png";

const Wishlist = ({ openWishlist }) => {
  return (
    <>
      <WishListContainer openWishlist={openWishlist}>
        <WishlistProductContainer>
          <img src={img} alt="" />

          <p>
            Fresh Onion <br /> 20TK
          </p>
          <p>1kg</p>

          <WishListIncrement>
            <button>
              <svg
                width="18"
                height="8"
                viewBox="0 0 23 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.0383 11.9015C1.26148 12.1326 1.62973 12.1389 1.86078 11.9157L1.8608 11.9158L1.86233 11.9142L11.4971 2.27862L21.1318 11.9142L21.1319 11.9143L21.5435 11.9592L21.5435 12.0842C21.5436 12.0842 21.5437 12.0842 21.5437 12.0842C21.6975 12.0841 21.8451 12.0231 21.954 11.9145C22.1815 11.6877 22.1821 11.3194 21.9553 11.0919L21.9552 11.0917L11.9088 1.04531L11.9087 1.04529C11.6816 0.818242 11.3134 0.818227 11.0863 1.0453L11.0863 1.04531L6.06304 6.06852L1.03982 11.0917L1.03981 11.0917L1.0383 11.0933C0.820568 11.3187 0.820566 11.676 1.0383 11.9015ZM1.0383 11.9015L1.12819 11.8146L1.0383 11.9015C1.0383 11.9015 1.0383 11.9015 1.0383 11.9015Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.25"
                />
              </svg>
            </button>

            <button>
              <svg
                width="18"
                height="8"
                viewBox="0 0 23 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9617 1.05776C21.7385 0.826669 21.3703 0.820284 21.1392 1.04348L21.1392 1.04347L21.1377 1.045L11.5029 10.6806L1.86821 1.045L1.86812 1.0449L1.45651 1.00002L1.45646 0.875025C1.4564 0.875025 1.45635 0.875025 1.45629 0.875025C1.30247 0.875126 1.15493 0.936137 1.04597 1.04477C0.81848 1.27156 0.817872 1.63985 1.04467 1.86736L1.04481 1.86749L11.0912 11.9139L11.0913 11.9139C11.3184 12.141 11.6866 12.141 11.9137 11.9139L11.9137 11.9139L16.937 6.89071L21.9602 1.8675L21.9602 1.86751L21.9617 1.86595C22.1794 1.64053 22.1794 1.28319 21.9617 1.05776ZM21.9617 1.05776L21.8718 1.14458L21.9617 1.05776C21.9617 1.05776 21.9617 1.05776 21.9617 1.05776Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.25"
                />
              </svg>
            </button>
          </WishListIncrement>
        </WishlistProductContainer>

        <WishlistButton>Add to Cart</WishlistButton>
      </WishListContainer>
    </>
  );
};

export default Wishlist;
