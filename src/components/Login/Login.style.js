import styled from "styled-components";

export const LoginContainer = styled.div`
display: flex;
flex-basis: 0;
flex-grow: 1;
text-align: center;

`
export const LoginLogo = styled.img`
width: 150px;
padding-top: 10%;
padding-bottom: 5%;
`

export const LoginImage = styled.img`
width: 45%;
height: 100vh;

`
export const LoginContentContainer = styled.div`
width: 55%;
height: 100vh;
background: #E5E5E5;
display:flex;
flex-direction: column;
align-items: center;

h1{
    padding-bottom: 4%;
}

hr{
    width: 450px;
    margin-bottom: 4%;
}
`

export const LoginWithIcons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 120px;
padding-bottom: 4%;

img{
    width: 40px;
    height: 40px;
}
`
export const LoginForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const LoginInput = styled.input`
width: 300px;
height: 40px;
border-radius: 5px;
border: none;
outline: none;
padding: 15px;
margin-bottom: 20px;
`
export const LoginButton = styled.button`
width: 280px;
height: 35px;
background: #44A72C;
border-radius: 5px;
color: #fff;
border: none;
outline: none;
font-size: 18px;
font-weight: bold;
`

