import styled from "styled-components";

export const ProductRowWrap = styled.div`
border: 1px solid black;
border-radius: 10px;
padding: 5%
`

export const ProductRow = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid lightgrey;
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
    cursor: pointer;
    @media (max-width: 1100px){
        font-size: 15px
    }
}
`

export const CartProductImg = styled.img`
width: 10%;
display: block;
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
    cursor: pointer;

    @media (max-width: 630px){
        width: 15px;
        height: 15px;
    }

}
`

export const NoItemText = styled.div`
text-align: center;
padding: 5% 0;
`