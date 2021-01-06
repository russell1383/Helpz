import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 90px;
  width: 100%;
  background-color: #44a72c;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  position: fixed;
 z-index: 10;

  img{
    width: 150px;
    height: 55px;
  }
`;

export const SearchBox = styled.div`
width: 100%;
text-align: center;
padding: 0 100px;
  input {
   width: 80%;
    height: 40px;
    border: none;
    outline: none;
    padding: 5px;
    font-size: 15px;
  }
  button {
    width: 5%;
    height: 40px;
    width: 60px;
    border: none;
    margin-left: -2px;
  }
`;

export const ShoppingCart = styled.div`
display: flex;
justify-content: space-between;
width: 150px;
align-items: center;
color: #fff
`
