import styled from "styled-components";

export const ProductInfoAdImgContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 2% 0;

@media (max-width: 768px) {
   flex-direction: column;
  }
.left_side{
    width: 49.8%;

    @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
    
}
.right_side{
    width: 49.8%;

    @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
}
`