import styled from "styled-components";

export const MenuItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #44a72c;
  color: #fff;
  padding: 10%;
  font-family: "Roboto", sans-serif;
  cursor: pointer;

  @media (max-width: 752px) {
    display: none;
  }

  p {
    padding: 8%;
    font-size: 16px;

    @media (max-width: 1280px) {
      font-size: 12px;
    }
    @media (max-width: 900px) {
      font-size: 10px;
    }
  }
`;
