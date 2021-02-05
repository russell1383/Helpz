import styled from "styled-components";

export const ProductContainerWrap = styled.div`
  width: 71.5vw;
  margin: 0 auto;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 3%;
  }

  h2 {
    font-weight: 700;
    margin-top: 4%;
    font-family: "UniNeueRegular";

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 4%;
    font-family: "UniNeueRegular";

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  div {
    p {
      font-family: "UniNeueRegular";
      font-size: 13px;
      text-align: right;

      span {
        color: #44a72c;
      }
    }
  }
`;

export const LeftArrowButton = styled.div`
  height: 45px;
  width: 35px;
  background: #eeeeee;
  position: absolute;
  top: 50%;
  left: -4px;
  display: flex;
  padding: 7px;
  align-items: center;
  z-index: 1;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const RightArrowButton = styled.div`
  height: 45px;
  width: 35px;
  background: #eeeeee;
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  align-items: center;
  padding: 7px;
  z-index: 1;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const ProductBox = styled.div`
  position: relative;
  padding: 3% 3%;
  border: 1px solid lightgrey;
  small {
    font-size: 10px;
    text-align: center;
    display: block;
    padding: 2% 0;

    @media (max-width: 560px) {
      font-size: 8px;
    }
  }

 
`;
export const OffLabel = styled.div`
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

export const ProductWrap = styled.div`
display:flex;
padding-right:3%; 
`

export const ProductImg = styled.img`
  width: 80%;
  display: block;
  margin: 0 auto;
  padding-top: 10%;
  overflow: hidden;

  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.3);
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    p {
      font-family: "UniNeueRegular";
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      @media (max-width: 560px) {
        font-size: 13px;
      }
    }
    h3 {
      font-size: 16px;
      text-align: left;
      font-family: "UniNeueRegular";
      font-weight: 800;
      @media (max-width: 560px) {
        font-size: 13px;
      }
    }
    h6 {
      font-family: "UniNeueRegular";
      font-size: 12px;
      text-align: right;
      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
    h5 {
      font-family: "UniNeueRegular";
      color: #44a72c;
      font-size: 15px;
      text-align: right;
      @media (max-width: 560px) {
      }
    }
  }
`;

export const PickupTimigBox = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  p {
    font-family: "UniNeueRegular";
    font-size: 10px;
    margin-top: 2%;

    @media (max-width: 400px) {
      font-size: 9px;
    }
  }

  div {
    display: flex;
    position: relative;
  }
`;
export const TimeBox = styled.div`
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

export const ProductButtonContainer = styled.div`
  display: flex;

  .add_to_cart_button {
    width: 80%;
    background: #44a72c;
    color: #fff;
    border: 0;
    font-family: "UniNeueRegular";
    padding: 4% 1%;
    margin-right: 1px;
    cursor: pointer;
  }

  .plus_button {
    width: 20%;
    background: #44a72c;
    color: #fff;
    border: 0;
    padding: 4% 1%;
    margin-left: 1px;
    cursor: pointer;
  }
`;
