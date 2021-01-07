import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 75px;
  width: 100%;
  background-color: #44a72c;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  overflow: hidden;
  top: 0;
  z-index: 60;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 100px;
    @media (max-width: 1024px) {
      width: 90px;
    }
  }
`;

export const SearchBox = styled.div`
  width: 60%;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 38px;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 15px;
  }
  div {
    width: 45px;
    background: #f1f1f1;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ShoppingCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  align-items: center;
  color: #fff;
`;

{
  /* --------------------------Mobileview-------------------------- */
}

export const MdNavbarContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100vw;
    background-color: #44a72c;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 30;
    padding: 0 5%;
  }
`;

export const MdTopHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 35px;
  padding-bottom: 20px;
`;

export const MdSearchBox = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 13px;
  }
  div {
    width: 45px;
    background: #f1f1f1;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MdLogoImg = styled.img`
  width: 85px;
  margin-left: -15px;
`;

export const MdShoppingCart = styled.div`
  display: flex;
  color: #fff;
  align-items: center;

  h4 {
    font-size: 16px;
    padding-left: 5px;
  }
`;

export const HamburgerMenuIcon = styled.img`
  width: 70px;
  height: 20px;
`;
