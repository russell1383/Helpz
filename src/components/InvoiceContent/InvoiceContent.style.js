import styled from "styled-components";

export const InvoiceContainer = styled.div`
  width: 40vw;
  border: 1px solid lightgray;
  padding: 2%;
  margin: 0 auto;

  @media (max-width: 920px) {
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 70vw;
  }

  @media (max-width: 560px) {
    width: 90vw;
  }

  h2 {
    font-family: "UniNeueRegular";
  }

  h3 {
    font-family: "UniNeueRegular";
  }

  p {
    font-family: "UniNeueRegular";
  }

  hr{
      margin: 2% 0;
  }

  table,
  td,
  th {
    border: 1px solid black;
    text-align: center;
    padding: 2% 0;
  }
  th:first-child {
    width: 30%;
  }

  th:nth-child(2) {
    width: 200%;
  }
  th:nth-child(3) {
    width: 60%;
  }
  th:nth-child(4) {
    width: 50%;
  }

  td {
    font-size: 12px;
    font-family: "UniNeueRegular";
    @media (max-width: 768px) {
      font-size: 11px;
    }
    @media (max-width: 560px) {
      font-size: 9px;
    }
  }
  th {
    font-size: 14px;
    font-family: "UniNeueRegular";

    @media (max-width: 768px) {
      font-size: 12px;
    }
    @media (max-width: 560px) {
      font-size: 10px;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    margin-top: 5%;
  }
`;

export const InvoiceInfoWrap = styled.div`
  padding: 2% 0;
`;

export const PrintButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3% 0;
  align-items: center;

  button {
    width: 50%;
    padding: 2% 1%;
    font-family: "UniNeueRegular";
    background: #44a72c;
    color: #fff;
    border: none;
    outline: none;
  }
`;

export const BackButton = styled.button`
margin: 5% 0;
    padding: 2% 1%;
    font-family: "UniNeueRegular";
    background: #2c3e50;
    color: #fff;
    border: none;
    outline: none;
    width: 150px;
    
`