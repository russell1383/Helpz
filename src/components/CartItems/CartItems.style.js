import styled from "styled-components";

export const CartItemsContainer = styled.div`
background: #fff;
z-index: 50;
padding: 20px;
border-radius: 5px;

@media (max-width: 630px){
 padding: 10px;
}
`

export const ViewCartItemsButton = styled.button`
background: #44A72C;
color: #fff;
padding: 2%;
border: 0;
display: block;
outline: 0;
width: 200px;
margin-left: auto;
border-radius: 5px;
margin-top: 5%;

@media (max-width: 630px){
    font-size: 10px;
    width: 100%;
}

`