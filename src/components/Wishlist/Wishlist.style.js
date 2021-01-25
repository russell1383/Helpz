import styled from "styled-components";

export const WishListContainer = styled.div`
  display: ${({ openWishlist }) => (openWishlist ? "block" : "none")};
  position: absolute;
  top: 0;
  height: 100vh;

  background-color: #fff;
  padding-top: 30%;
  padding-left: 2%;
`;
export const WishlistProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    width: 18%;
    display: block;
  }

  p {
    font-size: 12px;
    display: block;
    text-align: center;
  }
`;

export const WishlistButton = styled.button`
  width: 100%;
  background: #44a72c;
  color: #fff;
  border: none;
  outline: none;
  height: 4%;
  margin-top: 5%;
`;
export const WishListIncrement = styled.div`
  display: flex;
  flex-direction: column;
  width: 20px;
  button {
    width: 15px;
    height: 16px;
  }
`;
