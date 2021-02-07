import styled from "styled-components";

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
    padding: 8%;
  }
`;
export const OtherBankingImg = styled.img`
  width: 13%;

  @media (max-width: 768px) {
    width: 50%;
    padding: 8%;
  }
`;

export const RedeemButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RedeemButton = styled.button`
  width: 32%;
  border: none;
  display:flex;
  align-items: center;
  color: #fff;
  border-radius: 5px;
  font-family: "UniNeueRegular";
  padding:2% 7%;
  font-size: 15px;
  background: ${(props) =>
    props.yellow
      ? "linear-gradient(315deg,#352D7B  30%,  #6A5AEC 70% 100%)"
      : props.tomato
      ? "linear-gradient(315deg, #CF0633  30%,  #E53658 70% 100%)"
      : props.green &&
        "linear-gradient(315deg, #129021  30%,  #17B020 70% 100%)"};

p{
  text-align:right;
  color: #fff;
  font-size: 15px;

  @media (max-width: 1050px) {
  font-size: 12px;
  }

}
@media (max-width: 1450px) {
  padding:2% 5%;
  }

@media (max-width: 1200px) {
  padding:2% 4%;
  }

@media (max-width: 1050px) {
  padding:2% 3%;
  font-size: 12px;
  }


  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 5%;
    padding:4% 10%;
  }
`;
