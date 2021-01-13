import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 96vw;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box !important;
  padding-top: 80px;


  @media (max-width: 768px) {
    padding-top: 133px;
  }

  @media (max-width: 560px) {
    width: 100vw;
  }
`;

export const BannerTopPart = styled.div`
  dispaly: flex;
  flex-wrap: no-warp;
`;
export const BannerBottomPart = styled.div`
  padding-top: 5px;
`;
export const BannerImg = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
`;

export const CustomBannerImgOne = styled.img`
  width: 100%;
  height: 50%;
`;
export const CustomBannerImgTwo = styled.img`
  width: 100%;
  height: 50%;
`;
export const CustomBannerImgThree = styled.img`
  width: 100%;
  height: 60%;
`;
export const CustomBannerImgFour = styled.img`
  height: 100%;
  width: 100%;
`;

export const CustomBannerImgFive = styled.img`
width: 96vw;
margin: 0 auto;
`

export const TextAboveBannerImg = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  color: #fff;
  z-index: 3;

  h3 {
    font-size: 30px;
    font-weight: 300;
    text-shadow: 2px 4px 0 rgba(0, 0, 0, 0.3);
    font-family: "UniNeueRegular";

    @media (max-width: 1160px) {
      font-size: 25px;
    }

    @media (max-width: 990px) {
      font-size: 20px;
    }

    @media (max-width: 860px) {
      font-size: 15px;
    }

    @media (max-width: 450px) {
      font-size: 12px;
    }
  }

  h1 {
    font-size: 40px;
    font-weight: 800;
    text-shadow: 2px 4px 0 rgba(0, 0, 0, 0.3);
    font-family: "UniNeueRegular";

    @media (max-width: 1160px) {
      font-size: 35px;
    }

    @media (max-width: 990px) {
      font-size: 30px;
    }
    @media (max-width: 860px) {
      font-size: 25px;
    }

    @media (max-width: 450px) {
      font-size: 15px;
    }
  }
`;
