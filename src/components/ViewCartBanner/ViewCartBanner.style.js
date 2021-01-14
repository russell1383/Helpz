import styled from "styled-components";

export const ViewCartContainer = styled.div`
width: 55vw;
margin: 0 auto;

h3{
    margin: 3% 0;
    font-family: "UniNeueRegular";
}

p{
    font-family: "UniNeueRegular";
    font-size: 20px;
    margin: 2% 0;
    color: #44A72C;

}
`

export const ViewCartBannerContainer = styled.div`
position: relative;
width: 96vw;
margin: 0 auto;
box-sizing: border-box !important;
padding-top: 80px;
`

export const ViewCartProductWrap = styled.div`
background: #F7F7F7;
padding: 0 5%;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
`
export const TotalBox = styled.div`
border: 1px solid black;
margin-top: 5%;
text-align: right;
padding-right: 30%;
border-radius: 5px;



h3{
    font-family: "UniNeueRegular";
    font-weight: 200;
    span{
       font-weight: bold; 
       margin-left: 10%;
    }
}
`