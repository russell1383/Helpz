import styled from "styled-components";

export const DiscountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    border: 1px solid black;
    border-radius: 5px;
    width: 30%;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 5%;
    }

    p {
      text-align: center;
      color: black;
      font-size: 16px;
      padding: 8% 0;
    }
  }
  
`;

export const PickupOptions = styled.select`
  width: 40%;
  height: 50px;
  border-radius: 5px;
  font-size: 16px;
  padding: 1%;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PaymentOptionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 5%;
`;

export const MobileBankingImg = styled.img`
  width: 13%;

  @media (max-width: 768px) {
    width: 50%;
    padding:8%;
  }
`;
export const OtherBankingImg = styled.img`
  width: 13%;
 

  @media (max-width: 768px) {
    width: 50%;
    padding:8%;
  }
`;
