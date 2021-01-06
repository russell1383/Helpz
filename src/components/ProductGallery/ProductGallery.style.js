import styled from "styled-components";

export const ProductGalleryContainer = styled.div`
  width: 66.5vw;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  @media (max-width: 560px) {
    width: 95vw;
  }
`;

export const CustomGalleryImg = styled.img`
  width: 100%;
  height: 52%;
  padding-bottom: 5px
`;

export const GalleryImg = styled.img`
  height: 100%;
  width: 100%;
  padding-bottom: 5px;
`;
