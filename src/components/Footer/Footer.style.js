import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 75vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  padding-top: 2%;

  @media (max-width: 560px) {
    width: 95vw;
  }
`;

export const FooterLeftSide = styled.div`
  width: 30%;
  @media (max-width: 640px) {
    width: 45%;
  }

  @media (max-width: 560px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 45px;
    font-weight: 900;
    color: #44a72c;
    @media (max-width: 560px) {
      font-size: 30px;
    }
  }
  small {
    color: black;
    @media (max-width: 560px) {
      font-size: 10px;
      margin-left: 7px;
    }
  }
`;

export const FooterRightSide = styled.div`
  width: 30%;
  @media (max-width: 640px) {
    width: 50%;
  }

  @media (max-width: 560px) {
    display: none;
  }

  small {
    @media (max-width: 890px) {
      font-size: 0.7rem;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5%;

    img {
      width: 45%;
      padding-top: 5%;
    }

  
  }
`;

export const CallInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2%;

  img {
    width: 10%;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    margin-left: 10px;

    @media (max-width: 890px) {
      font-size: 0.8rem;
    }
    @media (max-width: 560px) {
      font-size: 10px;
      
    }
  }
`;

export const FooterText = styled.div`
  text-align: center;
  font-weight: 200;

  @media (max-width: 560px) {
    font-size: 0.8rem;
    padding: 12px 0px;
  }
`;
