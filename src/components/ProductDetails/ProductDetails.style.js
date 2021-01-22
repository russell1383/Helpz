import styled from "styled-components";

export const ProductDetailsContainerWrap = styled.div`
  background: #f1f1f1;
  padding: 3% 0;
  z-index: -1;
  width: 100vw;
`;

export const ProductDetailsContainer = styled.div`
  width: 62vw;
  margin: 0 auto;
  padding: 3% 0;
  @media (max-width: 768px) {
    width: 95vw;
    margin: 0 auto;
  }

  h2 {
    font-family: "UniNeueRegular";
    margin-bottom: 3%;
  }
  h3 {
    font-family: "UniNeueRegular";
  }
  p {
    font-family: "UniNeueRegular";
    margin-bottom: 2%;
  }

  #more-details{
    padding: 5% 0;
  }
`;
