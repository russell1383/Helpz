import styled from "styled-components";

export const WishListContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 20vw;
  height: fit-content;
  transform: ${({ openWishlist }) =>
    openWishlist ? "translateX(0)" : "translateX(150%)"};
  transition: transform 0.3s ease-in-out;
  background-color: #fff;
  padding: 30% 5%;
  border: 1px solid lightgray;

  h1 {
    position: absolute;
    top: 0;
    padding: 5px;
    cursor: pointer;
    font-size: 1.5vw;
  }

  small {
    text-align: center;
    display: block;
    font-size: 10px;
  }
`;

export const WishlistProductContainerWrap = styled.div`
  margin-bottom: 6%;
`;

export const WishlistProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  img {
    width: 20%;
    display: block;
  }

  p {
    font-size: 1vw;
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
  padding: 8px 0;
  border-radius: 3px;
`;
export const WishListIncrement = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;

  button {
    padding: 5%;
  }
`;
