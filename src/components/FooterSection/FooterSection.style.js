import styled from "styled-components";

export const FooterSectionContainerWrap = styled.div`
  width: 100vw;
  background: #ededed;
  font-family: "Roboto", sans-serif;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
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
      font-family: "UniNeueRegular";
      @media (max-width: 950px) {
        font-size: 0.8rem;
      }
      @media (max-width: 500px) {
        font-size: 10px;
      }
    }
    p {
      padding: 0 0 4% 0;
      font-family: "UniNeueRegular";
      @media (max-width: 950px) {
        font-size: 0.7rem;
      }
      @media (max-width: 500px) {
        font-size: 8px;
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

  h2 {
    font-family: "UniNeueRegular";
    @media (max-width: 800px) {
      font-size: 15px;
      padding-bottom: 8px;
    }
    @media (max-width: 500px) {
      font-size: 5px;
    }
  }

  small {
    font-family: "UniNeueRegular";
    @media (max-width: 800px) {
      font-size: 8px;
    }
  }

  div {
    display: flex;
    input {
      font-family: "UniNeueRegular";
      width: 75%;
      height: 38px;
      border: none;
      outline: none;
      @media (max-width: 800px) {
        height: 30px;
        margin-top: 8px;
      }
    }
    div {
      font-family: "UniNeueRegular";
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 38px;
      background: #44a72c;
      color: #fff;
      font-size: 16px;
      @media (max-width: 800px) {
        height: 30px;
        font-size: 10px;
        margin-top: 8px;
      }
    }
  }
`;
