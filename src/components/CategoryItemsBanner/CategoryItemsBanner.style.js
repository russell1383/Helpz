import styled from "styled-components";

export const CategoryItemsContainer = styled.div`
width:98%;
margin: 0 auto;

p{
    color: #888888;
    font-size: 12px;
    padding-top: 2%;
}

h2{
    font-family: "UniNeueRegular";
    padding: 1% 0 2% 0;
}
`

export const CategoryProductsContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;

div{
    margin-bottom: 2%;
}

`

export const ShowMoreButton = styled.button`
    padding: 1% 1%;
    width: 30%;
    display:block;
    font-family: "UniNeueRegular";
    margin: 3% auto;
    background: #44a72c;
    color: #fff;
    border: none;
    outline: none;
`

export const LoaderGif = styled.img`
width:18%;
margin: 0 auto;
display:block;
padding:12% 0;

`