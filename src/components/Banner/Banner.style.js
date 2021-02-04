import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 96vw;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box !important;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 140px;
    width: 100vw;
    padding: 0 2%;
    }

    @media (max-width:400px) {
    padding-top: 130px;
    }

`;

export const BannerTopPart = styled.div`
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
  height: 50%;
`;
export const CustomBannerImgFour = styled.img`
  height: 109%;
  width: 100%;
  padding-right:1%;
`;
export const CustomBannerImgFourRight = styled.img`
  height: 109%;
  width: 100%;
  padding-left:1%;
`;

export const CustomBannerImgFive = styled.img`
width: 96vw;
margin: 0 auto;
padding: 1% 0.8% 1% 0;

@media (max-width:490px){
  padding: 1% 1% 1% 0;
}
@media (max-width:400px){
  padding: 1% 1.5% 1% 0;
}
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
