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

export const ProductRowWrap = styled.div`
border: 1px solid black;
border-radius: 10px;
padding: 5%
`

export const ProductRow = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid black;
justify-content:  space-between;
text-align: center;
padding-bottom: 2%; 
padding-top: 2%; 
div{
    display: flex;
    align-items: center;
}

h4{
    font-family: "UniNeueRegular";

    @media (max-width: 1100px){
        font-size: 12px
    }
    @media (max-width: 630px){
        font-size: 9px
    }

}

h2{
    text-align: right;
    @media (max-width: 1100px){
        font-size: 15px
    }
}
`

export const CartProductImg = styled.img`
width: 10%;
display: block;
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
export const IncrementDecrementBox = styled.div`
display: flex;
flex-direction: column;


button{
    background: #fff;
    border: 1px solid black;
    border-radius: 2px;
    margin-bottom: 2px;
    width: 25px;

    @media (max-width: 630px){
        width: 15px;
        height: 15px;
    }

}
`


