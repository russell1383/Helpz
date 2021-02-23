import styled from "styled-components";

export const ProductContainerWrap = styled.div`
  width: 71.5vw;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 3%;
  }

  /* h2 {
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
  } */
`;

export const LeftArrowButton = styled.div`
  height: 40px;
  width: 30px;
  background: #eeeeee;
  position: absolute;
  top: 50%;
  left: -4px;
  display: flex;
  padding: 6px 1px;
  box-sizing: border-box;
  align-items: center;
  z-index: 1;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const RightArrowButton = styled.div`
  height: 40px;
  width: 30px;
  background: #eeeeee;
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  align-items: center;
  padding: 6px;
  z-index: 1;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const ProductBox = styled.div`
  position: relative;
  padding: 3% 3%;
  border: 1px solid lightgrey;
  box-shadow: rgb(221 221 221) 0px 0px 10px;
  border-radius: 3px;

  &:hover {
    box-shadow: 0 11px 11px 0 rgba(0, 0, 0, 0.16);
    border: 1px solid lightgray;
  }

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
  display: flex;
  padding: 5% 3% 5% 1%;
  margin: 10px 0 10px 0;

  &:focus {
    border: none;
    outline: none;
  }


`;

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
  align-items: center;
  .add_to_cart_button {
    width: 80%;
    background: #44a72c;
    color: #fff;
    border: 0;
    font-family: "UniNeueRegular";
    padding: 4% 0;
    margin-right: 1px;
    cursor: pointer;
    border-radius: 3px;
    transition: background 0.8s;
    &:hover {
      background: #4bb530 radial-gradient(circle, transparent 1%, #44a72c 1%)
        center/15000%;
    }

    &:active {
      background-color: #4bb530;
      background-size: 100%;
      transition: background 0s;
    }

    @media (max-width: 768px) {
      font-size: 11px;
    }

    svg {
      margin-right: 3%;
    }
  }

  .plus_button {
    width: 20%;
    background: #44a72c;
    color: #fff;
    border: 0;
    padding: 4% 1%;
    margin-left: 1px;
    cursor: pointer;
    border-radius: 3px;

    @media (max-width: 768px) {
      font-size: 11px;
    }
  }
`;
