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
  z-index:50;
  flex-direction: column;
  height: 50vh;

  @media (max-width: 1270px) {
    height: 45vh;
    }


  @media (max-width: 768px) {
    height: 60vh;
    }

  h3 {
    font-family: "UniNeueRegular";
    font-size:16px;
    @media (max-width: 900px) {
      font-size: 13px;
    }
  }

  p {
    font-size: 13px;
    border-bottom: 1px solid #fff;
    padding: 4% 0%;
    margin-top: 5%;
    font-family: "UniNeueRegular";
    &:hover {
      transition: 0.3s;
      padding-left: 1.5vh;

      &::after {
        content: " »";
        transition: 0.5s;
      }
    }

    @media (max-width: 1280px) {
      font-size: 10px;
    }
    @media (max-width: 1000px) {
      font-size: 8px;
    }
    @media (max-width:768px) {
      font-size: 10px;
    }
  }
`;

export const SubCatergoriesWrap = styled.div`

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index:49;
  position: absolute;
  top: 0;
  left: 100.5%;
  background: #44a72c;
  height: 100%;
  width: 100%;
  padding: ${({open})=>open && "5%"};
  padding: 5%;


  @media (max-width: 768px) {
    
  }
`;

export const SubCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  cursor: pointer;
`;

export const SubCategoryItemsContainer = styled.div`
  /* width: 50%; */
`;

export const SubCategoryItems = styled.div`
  padding: 5%;

  h4 {
    padding: 5% 0;
    &:hover {
      transition: 0.3s;
      padding-left: 1.5vh;
      transition: 0.3s;
      padding-left: 1.5vh;

      &::after {
        content: " »";
        transition: 0.5s;
      }
    }
  

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  p {
    font-size: 13px;
    padding: 2% 0;
    margin-left: 5%;
    &:hover {
      transition: 0.3s;
      padding-left: 1.5vh;
    }

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;
