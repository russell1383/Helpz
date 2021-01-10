import styled from "styled-components";

export const CategoriesCardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #44a72c;
  color: #fff;
  padding: 10%;
  postion: relative;
  cursor: pointer;
  

  h3 {
    font-family: "UniNeueRegular";
    @media (max-width: 1280px) {
      font-size: 16px;
    }
    @media (max-width: 900px) {
      font-size: 13px;
    }
  }

  @media (max-width: 752px) {
    display: none;
  }

  p {
    font-size: 16px;
    border-bottom: 1px solid #fff;
    padding: 5% 0%;
    margin-top: 5%;
    font-family: "UniNeueRegular";

    @media (max-width: 1280px) {
      font-size: 12px;
    }
    @media (max-width: 900px) {
      font-size: 10px;
    }
  }
`;
