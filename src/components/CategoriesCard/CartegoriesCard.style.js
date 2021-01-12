import styled from "styled-components";

export const CategoriesCardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #44a72c;
  color: #fff;
  padding: 8%;
  postion: relative;
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

export const Dropdown = styled.div`

background: #44A72C;
position: absolute;
z-index: 0;
top: 0;
left: 101%;
padding: 0 15%;
display: ${({ open }) => (open ? "block" : "none")};;

h6{
  font-size: 14px;
  font-weight: 200;
  border-bottom: 1px solid #fff;
  padding-top: 8%;
  padding-bottom: 5%;
  margin: 12% 0;
  font-family: "UniNeueRegular";
}
`