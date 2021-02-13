import styled from "styled-components";

export const ModalContainer = styled.div`
  padding: 5%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;



  hr {
    width: 70%;
  }

  form {
    width: 50%;
    text-align: left;
    font-family: "UniNeueRegular";

div{
  input{
    height:50px;
    width:60px;

    @media(max-width:400px){
      height:45px;
    width:45px;
    }
  }
}
    @media (max-width: 560px){
        width: 80%;
    }

    @media (max-width: 400px){
        width: 95%;
    }
    input {
      display: block;
      height: 30px;
      margin-bottom: 4%;
      padding: 4%;
    }

    button {
      width: 100%;
      outline: none;
      border: none;
      background-color: #44a72c;
      color: #fff;
      padding: 3% 0;
      margin-top: 3%;
      font-family: "UniNeueRegular";
      font-size: 14px;
    }
  }

  h2{
    font-family: "UniNeueRegular";

    @media (max-width: 560px){
        margin: 3% 0;
        font-size: 18px;
    }
  }

  h3 {
    margin: 2% 0;
    font-family: "UniNeueRegular";

    @media (max-width: 560px){
        margin: 2% 0;
        font-size: 16px;
    }
  }

  h6 {
    font-size: 14px;
    margin: 2% 0;
    font-family: "UniNeueRegular";
    font-weight:400;
    cursor: pointer;

    @media (max-width: 560px){
        margin: 5% 0;
        font-size: 12px;
    }

    span {
      font-weight: bold;
      color: #44a72c;
      font-family: "UniNeueRegular";
    }
  }
`;

export const LoginModalIconWrap = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  margin: 0 auto;
  margin: 3% 0;
  @media (max-width: 560px){
    width: 80px;
    }


  img {
    width: 40%;

  }
`;
