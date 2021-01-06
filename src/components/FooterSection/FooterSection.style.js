import styled from "styled-components";

export const FooterSectionContainerWrap = styled.div`
  width: 100vw;
  background: #ededed;
  font-family: "Roboto", sans-serif;
`;

export const FooterSectionContainer = styled.div`
  width: 75vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 2% 0;
  @media (max-width: 560px) {
    width: 95vw;
  }

  div {
      
    h3 {
      padding: 5% 0;
      @media (max-width: 950px) {
        font-size: 0.8rem;
      }
    }
    p {
      padding: 0 0 4% 0;
      @media (max-width: 950px) {
        font-size: 0.7rem;
      }
    }
  }
`;

export const NewsletterSection = styled.div`
@media (max-width: 800px) {
    line-height: 0.7;
  }
  @media (max-width: 560px) {
    display: ${(props) => props.none && "none"};
  }

  h2{
    @media (max-width: 800px) {
        font-size: 15px;
        padding-bottom: 8px;
      }
  }

  small{
    @media (max-width: 800px) {
        font-size: 8px;
        
      }
  }

  div {
    input {
      width: 75%;
      height: 38px;
      border: none;
      outline: none;
      @media (max-width: 800px) {
        height: 30px;
        margin-top: 8px;
      }
    }
    button {
      width: 25%;
      height: 38px;
      border: none;
      outline: none;
      background: #44a72c;
      color: #fff;
      font-size: 16px;
      @media (max-width: 800px) {
        height: 30px;
        font-size: 12px;
      }
    }
  }
`;
