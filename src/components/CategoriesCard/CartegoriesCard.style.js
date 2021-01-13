import styled from "styled-components";

export const CategoriesCardContainerWrap = styled.div`
position: relative;
`

export const CategoriesCardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #44a72c;
  color: #fff;
  padding: 8%;
  cursor: pointer;

  h3 {
    font-family: "UniNeueRegular";
    @media (max-width: 1280px) {
      font-size: 16px;
    }
    @media (max-width: 900px) {
      font-size: 13px;
    }
  }

  @media (max-width: 752px) {
    display: none;
  }

  p {
    font-size: 16px;
    border-bottom: 1px solid #fff;
    padding: 4% 0%;
    margin-top: 5%;
    font-family: "UniNeueRegular";

    @media (max-width: 1280px) {
      font-size: 12px;
    }
    @media (max-width: 900px) {
      font-size: 10px;
    }
  }
`;

export const DropdownWrap = styled.div`
display: ${({ open }) => (open ? "block" : "none")};
position: absolute;
top: 0;
left: 100%;
z-index: 10000;
`

export const Dropdown = styled.div`
background: #44a72c;
color: #fff;
position: fixed;
top: 12.8%;
width: 200px;
cursor: pointer;

h6{
  font-size: 13px;
  font-weight: 200;
  border-bottom: 1px solid #fff;
  padding: 5% 15%;
 
  font-family: "UniNeueRegular";
}
`