import styled from "styled-components";

export const HistoryContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  display: ${({ openHistory }) => (openHistory ? "block" : "none")};
  background-color: #fff;
  padding: 30% 5%;
`;

export const HistoryContentConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #a4a0a0;
  padding-bottom: 5%;
  position: relative;
  img {
    width: 35%;
  }

  .right_side {
    width: 60%;
    p {
      font-size: 12px;

      span {
        font-weight: bold;
        font-size: 13px;
        color: black;
      }
    }
    span {
      color: #44a72c;
      font-size: 8px;
    }
  }
`;
export const PurchaseDate = styled.div`
  position: absolute;
  top: -25%;
  right: 0;
  text-align: right;
  font-size: 12px;
  color: #a4a0a0;
`;
