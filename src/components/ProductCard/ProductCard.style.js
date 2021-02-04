import styled from "styled-components";

export const ProductCardContainer = styled.div`
  padding: 0.5% 1.5%;
  width: 19%;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  position: relative;
    overflow: hidden;

  img {
    width: 70%;
    margin: 0 auto;
    display: block;
    padding-top: 5%;
    transition: transform 0.5s ease;
    &:hover {
      transform: scale(1.3);
    }
  }

  p,
  h3,
  h5,
  h6 {
    font-family: "UniNeueRegular";
  }

  @media (max-width: 1280px) {
    width: 24%;
  }
  @media (max-width: 1280px) {
    width: 49%;
  }
`;

export const CardLabel = styled.div`
  position: absolute;
  width: 40px;
  height: 65px;
  padding-left: 8px;
  font-family: "UniNeueRegular";
  padding-top: 5px;
  font-size: 13px;
  z-index: 1;
  top: 0;
  background: #44a72c;
  right: 10px;
  color: #fff;

  @media (max-width: 400px) {
    font-size: 10px;
    width: 30px;
    height: 40px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 5% 0;
`;
export const CartTextWrap = styled.div`
  h6,
  h5 {
    text-align: right;
  }

  p {
    font-size: 14px;
  }
  h3 {
    font-size: 16px;
  }
`;
export const RewardPointText = styled.p`
  text-align: right;
  padding: 0 0 5% 0;
  font-size: 12px;

  span {
    color: #44a72c;
    font-weight: bold;
    font-family: "UniNeueRegular";
  }
`;

export const PickupText = styled.div`
  font-size: 10px;
`;

export const PickupTimeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PickupTime = styled.div`
  width: 20px;
  height: 20px;
  font-size: 8px;
  font-weight: 300;
  display: flex;
  align-items: center;
  font-family: "UniNeueRegular";
  justify-content: center;
  margin-left: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  &::before {
    content: "";
    position: absolute;
    border: 1px solid #bcbcbc;
    width: 16px;
    height: 16px;
  }
`;

export const CardFooterText = styled.div`
  text-align: center;
  font-size: 8px;
  color: black;
  padding-bottom: 2%;
`;

export const CardButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .addToCart {
    width: 80%;
    padding: 3% 1%;
    font-family: "UniNeueRegular";
    background: #44a72c;
    color: #fff;
    border: none;
    outline: none;
  }

  .plus {
    width: 18%;
    padding: 3% 1%;
    font-family: "UniNeueRegular";
    background: #44a72c;
    color: #fff;
    border: none;
    outline: none;
  }
`;
