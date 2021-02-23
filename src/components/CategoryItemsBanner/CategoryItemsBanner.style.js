import styled from "styled-components";

export const CategoryItemsContainer = styled.div`
  width: 98%;
  margin: 0 auto;
  z-index: 10;

  p {
    color: #888888;
    font-size: 12px;
    padding-top: 2%;
  }

  h2 {
    font-family: "UniNeueRegular";
    padding: 1% 0 2% 0;
  }
`;

export const CategoryProductsContainer = styled.div`
display:grid;
/* grid-template-columns: repeat(auto-fit,minmax(12rem,1fr)); */
grid-template-columns: repeat(5,1fr);
grid-gap: 0.8rem 0.6rem;

@media(max-width: 1350px){
    grid-template-columns: repeat(4,1fr);   
} 
@media(max-width: 1060px){
    grid-template-columns: repeat(3,1fr);   
} 
@media(max-width: 560px){
    grid-template-columns: repeat(2,1fr);   
} 
`;

export const ShowMoreButton = styled.button`
  padding: 1% 1%;
  width: 30%;
  display: block;
  font-family: "UniNeueRegular";
  margin: 3% auto;
  background: #44a72c;
  color: #fff;
  border: none;
  outline: none;
`;

export const LoaderGif = styled.img`
  width: 25%;
  margin: 0 auto;
  display: block;
  padding: 8% 0;

  @media (max-width: 450px) {
    width: 70%;
    padding-top: 50%;
  }
`;
