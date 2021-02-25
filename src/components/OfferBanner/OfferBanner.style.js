import styled from "styled-components";

export const OfferBannerContainer = styled.div`
  position: relative;
  width: 96vw;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box !important;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 140px;
    width: 100vw;
  }

  @media (max-width: 400px) {
    padding-top: 130px;
  }
`;

export const OfferBannerContentContainer = styled.div`
  width: 62vw;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95vw;
  }

  h2 {
    font-family: "UniNeueRegular";
    padding: 2% 0;
  }
`;

export const OfferBannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    padding: 5%;
    text-align: center;
  }
`;
