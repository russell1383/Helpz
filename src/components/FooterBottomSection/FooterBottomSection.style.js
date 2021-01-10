import styled from "styled-components";

export const FooterBottomSectionContainer = styled.div`
  width: 75vw;

  display: none;

  @media (max-width: 560px) {
    display: block;
    display: flex;
    justify-content: space-between;
    width: 95vw;
    margin: 0 auto;
    padding: 3% 0;
  }
`;

export const FooterBottomNewsletterSection = styled.div`
  width: 45%;
  line-height: 0.7 !important;
  h2 {
    font-family: "UniNeueRegular";
    font-size: 15px;
  }

  small {
    font-family: "UniNeueRegular";
    font-size: 7px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
  }

  div {
    display: flex;
    input {
      font-family: "UniNeueRegular";
      width: 75%;
      height: 30px;
      border: none;
      margin-top: 5px;
      outline: none;
      @media (max-width: 410px) {
          height: 20px;
      }
    }
    div {
      font-family: "UniNeueRegular";
      width: 25%;
      height: 30px;
      border: none;
      display: flex;
      margin-top: 5px;
      justify-content: center;
       align-items: center;
      outline: none;
      font-size: 10px;
      background: #44a72c;
      color: #fff;
      @media (max-width: 410px) {
        height: 20px;
        font-size: 8px;
    }
      
    }
  }
`;

export const FooterBottomSectionRightSide = styled.div`
  width: 30%;
  @media (max-width: 640px) {
    width: 50%;
  }

  small {
    @media (max-width: 890px) {
      font-size: 0.7rem;
      font-family: "UniNeueRegular";
    }
  }
  div {
    display: flex;
    justify-content: space-between;

    img {
      width: 45%;
      padding-top: 2%;
    }
  }
`;
