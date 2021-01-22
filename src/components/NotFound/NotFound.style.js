import styled from "styled-components";

export const NotFoundContainerWrap = styled.div`
  background: #e5e5e5;
  height: 100vh;
`;

export const NotFoundContainer = styled.div`
  width: 80vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .left-side {
    img {
      width: 100%;
      @media (max-width: 768px) {
        padding-bottom: 10%;
      }
    }
  }

  .right-side {
    text-align: center;
    img {
      width: 50%;
      padding-bottom: 2%;

      @media (max-width: 768px) {
        padding-top: 10%;
      }
    }

    p {
      padding-bottom: 2%;
      font-family: "UniNeueRegular";
      font-size: 13px;

      @media (max-width: 768px) {
        font-size: 10px;
      }
    }

    button {
      background: #44a72c;
      color: #fff;
      padding: 1.5% 0;
      font-size: 15px;
      width: 40%;
      border: none;
      outline: none;
      font-family: "UniNeueRegular";

      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
  }
`;
