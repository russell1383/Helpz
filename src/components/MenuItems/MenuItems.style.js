import styled from "styled-components";

export const MenuItemsContainerWrap = styled.div`
position: relative;



h1{
      position: absolute;
      top: 1%;
      left: 5%;
      cursor: pointer;
      display: inline;
    }
`

export const MenuItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #44a72c;
  color: #fff;
  padding: 10%;
  cursor: pointer;

  @media (max-width: 752px) {
    display: none;
  }

  p {
    padding: 8%;
    font-size: 16px;
    font-family: "UniNeueRegular";

    @media (max-width: 1280px) {
      font-size: 12px;
    }
    @media (max-width: 900px) {
      font-size: 10px;
    }

  }
`;
