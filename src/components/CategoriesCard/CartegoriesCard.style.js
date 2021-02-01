import styled from "styled-components";

export const CategoriesCardContainerWrap = styled.div`
  position: relative;
`;

export const CategoriesCardContainer = styled.div`
  width: 100%;
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
    font-size: 14px;
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

export const SubCatergoriesWrap = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 100.5%;
  background: #44a72c;
  height: 100%;
  width: 200%;
  /* overflow: scroll; */
`;

export const SubCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  cursor: pointer;
`;

export const SubCategoryItemsContainer = styled.div`
  width: 50%;
`;

export const SubCategoryItems = styled.div`
padding: 5%;

h4{
padding: 5% 0;
}

p{
font-size: 13px;
padding: 2% 0;
}
`;
