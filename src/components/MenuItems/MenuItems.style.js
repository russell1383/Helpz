import styled from "styled-components";

export const MenuItemsContainerWrap = styled.div`
  position: relative;
`;

export const MenuItemsContainer = styled.div`
  width: 100%;
  background: #44a72c;
  color: #fff;
  cursor: pointer;
  padding: 13% 0 13% 5%;
  height: 50vh;

  @media (max-width: 1270px) {
    height: 45vh;
  }

  @media (max-width: 752px) {
    display: none;
  }

  p {
    font-size: 15px;
    font-family: "UniNeueRegular";
    padding: 1% 0 10% 8%;

    &:hover {
      transition: 0.3s;
      padding-left: 2.5vh;
    }

    @media (max-width: 1280px) {
      font-size: 12px;
    }
    @media (max-width: 1000px) {
      font-size: 10px;
    }
    @media (max-width: 850px) {
      font-size: 9px;
    }

    span {
      padding-left: 10px;

      @media (max-width: 1000px) {
        padding-left: 5px;
      }
    }
  }
`;
