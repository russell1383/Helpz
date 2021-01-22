import styled from "styled-components";

export const ProductBannerContainer = styled.div`
  padding-top: 90px;
  width: 96vw;
  margin: 0 auto;
`;

export const ProductInfoContainer = styled.div`
  width: 62vw;
  margin: 3% auto;
  

  @media (max-width: 768px) {
    padding-top: 50px;
    width: 95vw;
    margin: 0 auto;
  }

  .bread_crumb {
    font-size: 12px;
    font-family: "UniNeueRegular";
    color: #888888;
  }

  .packeg_offer {
    border: 1px solid lightgray;
    margin-top: 2%;
    display: flex;
    padding: 2% 5%;
    justify-content: space-between;
    align-items: center;
    input {
      border: 0px;
      width: 10%;
      height: 2em;
    }
  }
`;

export const ProductInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4% 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductInfoBoxImgContainerWrap = styled.div`
  width: 55%;
  height: inherit;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductInfoBoxImgContainer = styled.div`
  border: 1px solid #888888;
  display: flex;
  align-items: center;
  position:relative;
  justify-content: center;

  img {
    width: 50%;
  }
`;

export const ProductSubImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 3%;

  img {
    width: 15%;
    border: 0.5px solid #bcbcbc;
  }

  .left_arrow {
    position: absolute;
    background: #eeeeee;
    height: 30px;
    width: 20px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .arrow_icon {
      width: 15px;
      border: none;
    }
  }
  .right_arrow {
    position: absolute;
    background: #eeeeee;
    height: 30px;
    width: 20px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .arrow_icon {
      width: 15px;
      border: none;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 42%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5%;
  }

  p {
    font-family: "UniNeueRegular";
    font-size: 14px;
    padding-bottom: 1%;
  }

  h3 {
    font-family: "UniNeueRegular";
    font-size: 16px;
    padding-bottom: 1%;
  }

  .price_tag {
    color: #44a72c;
    padding-left: 8%;
  }
`;
export const ProductInfoOffLabel = styled.div`
  width: 50px;
  height: 70px;
  background-color: #44a72c;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;

  @media (max-width: 768px){
    display: none;
  }
`;

export const ProductInfoPickupTimingBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;

  div {
    width: 55px;
    height: 50px;
    display: flex;
    align-items: center;
    font-family: "UniNeueRegular";
    justify-content: center;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    font-size: 13px;

    &::before {
      content: "";
      position: absolute;
      border: 0.5px solid #bcbcbc;
      width: 45px;
      height: 40px;
    }
  }
`;

export const ProductOrderButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  div {
    width: 49%;

    .quantity_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: 14px;
      font-family: "UniNeueRegular";

      button {
        height: 30px;
        width: 40px;
      }
    }
    button {
      background: #44a72c;
      color: #fff;
      border: none;
      outline: none;
      margin-bottom: 5%;
      height: 30px;
      font-family: "UniNeueRegular";
    }
  }
`;

export const RewardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 8%;

  div {
    background: #f7f7f7;
    width: 60%;
    border-radius: 5px;
    border: 1px solid #000000;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductInfoProductContainerWrap = styled.div`

width: 40vw;
margin: 0 auto;

`;

// --------------Medium Device content--------------//

export const MdProductInfoOffLabel = styled.div`
display: none;

@media (max-width: 768px){
  display: block;
  position: absolute;
  width: 40px;
  height: 50px;
  background-color: #44a72c;
  position: absolute;
  top: 0;
  right: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
}
`
export const MdProductPrice = styled.div`
display: none;

@media (max-width: 768px){
  display: block;
  position: absolute;
  top: 0;
  right: 0;

  p, .price_tag{
    text-align: right;
  }
}
`