import styled from "styled-components";

export const HistoryContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 20vw;
  height: fit-content;

  transform: ${({ openHistory }) =>
    openHistory ? "translateX(0)" : "translateX(150%)"};
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
`;

export const HistoryContentConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #a4a0a0;
  padding-bottom: 10px;
  margin-bottom: 30px;
  margin-top: 15px;
  img {
    width: 30%;
    height: 30%;
  }

  .right_side {
    width: 68%;
    p {
      font-size: 0.8vw;

      span {
        font-weight: bold;
        font-size: 13px;
        color: black;
      }
    }
    span {
      color: #44a72c;
      font-size: 0.6vw;
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
