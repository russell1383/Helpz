import styled from "styled-components";

export const NavbarContainerWrap = styled.div`
  position: relative;
`;

export const NavbarContainer = styled.div`
  height: 75px;
  width: 100%;
  background-color: #44a72c;
  justify-content: space-around;
  font-family: "Roboto", sans-serif;
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
`;

export const NavLogo = styled.img`
  width: 100px;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 90px;
  }
`;

export const SearchBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  position: relative;
`;

export const SearchBox = styled.div`
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
    font-family: "UniNeueRegular";
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

export const SearchSuggestionsContainer = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  width: 58.4%;
  background: #fff;
  position: fixed;
  top: 57.5px;

  z-index: 150;
  border-top: 1px solid lightgrey;

  @media (max-width: 1360px) {
    width: 58.1%;
  }

  @media (max-width: 1160px) {
    width: 57.8%;
  }
  @media (max-width: 960px) {
    width: 57.4%;
  }
  @media (max-width: 830px) {
    width: 57%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ShoppingCart = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 120px;
  align-items: center;
  color: #fff;
  cursor: pointer;

  div {
    img {
      width: 35px;
      padding-top: 3px;
    }
  }

  h4 {
    font-size: 14px;
  }
`;

export const ItemsOnCart = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #44a72c;
  font-size: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 10%;
  border-radius: 50%;
  border: 1px solid lightgray;

  @media (max-width: 768px) {
    left: 6px;
    top: -5px;
  }
`;

export const ShoppingCartContainer = styled.div`
  width: 40%;
  position: fixed;
  top: 75px;
  right: 1.8%;
  z-index: 51;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* --------------------------Mobileview-------------------------- */
//
export const MdNavbarContainerWrap = styled.div`
  position: relative;
`;

export const MdNavbarContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100vw;
    background-color: #44a72c;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 30;
    padding: 0 3%;
  }
`;

export const MdTopHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 20px;
`;

export const MdSearchBoxWrap = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
`;

export const MdSearchBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;

  input {
    font-family: "UniNeueRegular";
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

  @media (max-width: 400px) {
    width: 70px;
  }
`;

export const MdShoppingCart = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  position: relative;

  img {
    width: 25px;
  }

  h4 {
    font-size: 16px;
    padding-left: 5px;

    @media (max-width: 400px) {
      font-size: 13px;
    }
  }
`;

export const HamburgerMenuIcon = styled.img`
  width: 70px;
  height: 20px;
`;

export const MdSearchSuggestionsContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
    width: 94%;
    background: #fff;
    position: fixed;
    z-index: 40;
    border-top: 1px solid lightgrey;
  }
`;

export const MdShoppingCartContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 75%;
    position: fixed;
    top: 75px;
    left: 3%;
    z-index: 50;
  }
`;

// -----------------Sidebar on Medium Device-----------------//

export const MdSidebar = styled.div`

display: none;

@media (max-width: 768px){
  display: block;
  transform: ${({ sidebarOpen }) => (sidebarOpen ? "translateX(0)" : "translateX(110%)")};
  position: fixed;
  height: 75vh;
  width: 30vh;
  background: #44A72C;
  z-index: 40;
  position:absolute;
  top: 60%;
  right: 8px;
  padding:5% 0 0 5%;
  transition: transform 0.3s ease-in-out;
  }
`;

export const MdSidebarItems = styled.div`
  width: 100%;
  color: #fff;
  font-weight: 500;
  font-family: "UniNeueRegular";
  font-size: 14px;
  padding-bottom: 18px;
  span {
    padding-left: 10px;
  }

  small{
    font-weight: 400;
    padding-left: 10px;
  }
`;

// -----------------CategoryBar on Medium Device-----------------//

export const MdCategoryBar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    transform: ${({ openCatergory }) => (openCatergory ? "translateX(0)" : "translateX(-120%)")};
    transition: transform 0.3s ease-in-out;
    position: fixed;
    width: 26vh;
    background: #44a72c;
    z-index: 40;
    position: absolute;
    top: 125px;
  }
`;

export const MdCategoryIcon = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 80px;
    position: fixed;
    left: 1%;
    bottom: 20px;
    z-index: 100;
  }
`;

export const MdCategoryItems = styled.h6`
  font-family: "UniNeueRegular";
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 5%;

  @media (max-width: 420px) {
    font-size: 10px;
  }
`;
