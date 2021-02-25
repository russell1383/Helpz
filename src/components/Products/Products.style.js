import styled from "styled-components";

export const ProductContainerWrap = styled.div`
  width: 71.5vw;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 3%;
  }
`;

export const LeftArrowButton = styled.div`
  height: 40px;
  width: 30px;
  background: #eeeeee;
  position: absolute;
  top: 50%;
  left: -4px;
  display: flex;
  padding: 6px 1px;
  box-sizing: border-box;
  align-items: center;
  z-index: 1;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const RightArrowButton = styled.div`
  height: 40px;
  width: 30px;
  background: #eeeeee;
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  align-items: center;
  padding: 6px;
  z-index: 1;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const ProductWrap = styled.div`
  display: flex;
  padding: 5% 3% 5% 1%;
  margin: 10px 0 10px 0;

  &:focus {
    border: none;
    outline: none;
  }


`;

