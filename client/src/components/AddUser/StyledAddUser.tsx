import styled from "styled-components";
import { blanco, violeta, formWidth } from "../../containers/App/GlobalStyles";

export const StyledAddUser = styled.div`
  width: ${formWidth+10}vw;
  height: 75vh;
  margin: 2rem auto;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${blanco};
  position: relative;
  color: ${violeta};

  form {
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div {
      width: 100%;
      height: min-content;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .div_nlsuscribe{
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 60%;
      margin-top:0.4rem;
      margin-bottom:1rem;
      input{
        height: 20px;
        max-width: 2rem;
        
      }
      label{
        font-size: 19.5px;
        text-align: center;
      }
    }
    .div_postcode,
    .div_addressnumber {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      input {
        margin-left: 3vw;
        width: 30%;
      }
    }

    input,
    textarea,
    select {
      text-align: center;
    }

    input {
      border: none;
      border-bottom: 1px solid ${violeta};
      width: 60%;
      font-size: 17px;
    }
    input::placeholder {
      color: ${violeta};
      opacity: 0.5;
      font-size: 17px
    }
    .register{
      /*height: 3em*/
      background-color:${blanco};
    }
    .google_login{
      height: 4rem;
      width: 40%;
      margin-top: 0.8rem;
      background-color: black;
      span{
        margin-right: 1.2rem;
        margin-left: -2rem;
        font-size: 100%;
        color:${violeta};
      }
    }

    span{
      color: red;
      max-width: 70%;
      text-align: center
    }
  }


  @media (max-width: 600px) {
    width: 90vw;
    height: 80vh;
    form {
      select {
        width: 75%;
      }
      .boton {
        width: 80%;
      }
      span{
        font-size: 12px
      }
      .google_login{
        width: 70%;
      }
    }

  }
`;
