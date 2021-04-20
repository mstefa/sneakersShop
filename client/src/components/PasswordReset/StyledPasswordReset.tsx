import styled from "styled-components";
import { blanco, violeta, formWidth } from '../../containers/App/GlobalStyles'


export const StyledPasswordReset = styled.div`
  width: ${formWidth}vw;
  height: 30vh;
  margin: 2rem auto;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${blanco};
  position: relative;

  input::placeholder {
    color: ${violeta};
    opacity: 0.5;
  }
  
  form {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div {
      width: 80%;
      height: min-content;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    input,
    textarea,
    select {
      text-align: center;
    }

    input {
      border: none;
      border-bottom: 1px solid ${violeta};
      width: 80%;
    }
    .login{
      background-color:${blanco};
    }
    .boton{
      width:15vw;
    }
  }
  @media (max-width: 858px) {
    width: 90vw;
    form {
      .boton {
        width: 80%;
      }
    }
  }
`;
