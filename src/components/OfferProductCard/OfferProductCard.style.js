import styled from "styled-components";

export const OfferProductCardContainer = styled.div`
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  width: 49%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  padding: 2%;
    margin-top: 2%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5%;
  }

  img {
    width: 55%;
  }

  .right_side {
    position: relative;
    width: 42%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 30%;
    }
    p{
        font-family: "UniNeueRegular";
    }
  }
`;

export const OfferProductInfoContainer = styled.div`
  display: flex;
  p {
    font-family: "UniNeueRegular";
  }
  div {
    text-align: right;
    small {
      font-family: "UniNeueRegular";
    }
    span {
      color: #44a72c;
      font-weight: bold;
    }
  }
`;

export const OfferPicupTiming = styled.div`
  display: flex;

  div {
    margin: 3% 0;
    text-align: center;
    width: 20px;
    height: 20px;
    font-size: 8px;
    font-weight: 300;
    display: flex;
    align-items: center;
    font-family: "UniNeueRegular";
    justify-content: center;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    &::before {
      content: "";
      position: absolute;
      border: 1px solid #bcbcbc;
      width: 16px;
      height: 16px;
    }
  }
`;

export const OfferOffLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 50px;
  background-color: #44a72c;
  color: #fff;
  padding: 2%;
  font-size: 12px;
`;

export const OfferButtonWrap = styled.div`
  display: flex;

  button {
    background: #44a72c;
    color: #fff;
    border: none;
    outline: none;
    padding: 2% 0;
  }
  .cart_btn {
    width: 85%;
    margin-right: 1%;
  }

  .plus_btn {
    width: 15%;
    margin-left: 1%;
  }
`;
