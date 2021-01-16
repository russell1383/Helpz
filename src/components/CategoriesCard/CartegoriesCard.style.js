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
  display: flex;
  flex-direction: column;

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
position: absolute;
display: ${({ open }) => (open ? "block" : "none")};
top: 0;
left: 100.5%;
background: #44a72c;
color: #fff;
width: 80%;
cursor: pointer;
transition: all 0.5s ease;

}

h6{
  font-size: 15px;
  font-weight: 200;
  border-bottom: 1px solid #fff;
  padding: 5% 5%;
  font-family: "UniNeueRegular";

  @media (max-width: 1280px) {
    font-size: 11px;
  }
  @media (max-width: 900px) {
    font-size: 9px;
  }
}
`

export const SubDropDown = styled.div`
display: ${({ openSub }) => (openSub ? "block" : "none")};
width: 120%;
left: 180.8%;
position: absolute;
top: 0;
background: #44a72c;
color: #fff;
width: 200px;
cursor: pointer;

h6{
  font-size: 15px;
  font-weight: 200;
  border-bottom: 1px solid #fff;
  padding: 5% 5%;
  
  font-family: "UniNeueRegular";

  @media (max-width: 1280px) {
    font-size: 11px;
  }
  @media (max-width: 900px) {
    font-size: 9px;
  }
}
`