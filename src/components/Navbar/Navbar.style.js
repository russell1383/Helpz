import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #44a72c;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 80px;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 100px;
  input {
    width: 80%;
    height: 30px;
    border: none;
    outline: none;
    padding: 5px;
    font-size: 11px;
  }
  button {
    width: 5%;
    height: 30px;
    width: 60px;
    border: none;
  }
`;

export const ShoppingCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  align-items: center;
  color: #fff;
`;

export const MdNavbarContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100vw;
    background-color: #44a72c;
    position: fixed;
    display: flex;
    flex-direction: column;
    color: #fff;
    z-index:30;
    padding: 0 5%;
    
  }
`;

export const MdTopHeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

padding-top: 35px;
padding-bottom: 20px;

`;

export const MdSearchBox = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
  
  input {
    width: 90%;
    height: 30px;
    border: none;
    outline: none;
    padding: 5px;
    font-size: 15px;
  }
  button {
    width: 10%;
    height: 30px;
    border: none;
  }
`;

export const MdLogoImg = styled.img`
width: 100px;
`

export const MdShoppingCart = styled.div`
  display: flex;
  align-items: center;

  h4{
    font-size: 20px;
    padding-left: 5px
  }
`;

export const HamburgerMenuIcon = styled.img`
width: 45px;
height: 25px

`