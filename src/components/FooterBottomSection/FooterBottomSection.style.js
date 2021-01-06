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
    font-size: 15px;
  }

  small {
    font-size: 7px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
  }

  div {
    
    input {
      width: 75%;
      height: 30px;
      border: none;
      outline: none;
      @media (max-width: 410px) {
          height: 20px;
      }
    }
    button {
      width: 25%;
      height: 30px;
      border: none;
      outline: none;
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

  @media (max-width: 560px) {
  }

  small {
    @media (max-width: 890px) {
      font-size: 0.7rem;
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
