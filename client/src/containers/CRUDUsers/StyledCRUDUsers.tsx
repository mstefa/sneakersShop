import styled from "styled-components";
import {
  blanco,
  violeta,
  negro,
  formWidth,
} from "../../containers/App/GlobalStyles";

export const StyledCRUDUsers = styled.div`
  display: flex;
  flex-direction: column;
  width: ${formWidth * 2}vw;
  min-height: 30vh;
  margin: 2rem auto;
  margin-bottom: 0;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${blanco};
  
  ul li {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    span,
    h5,
    div {
      width: 20%;
      display: flex;
      justify-content: center;
    }
  }
  button,
  .addButton {
    margin: 1rem 0;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    align-self: center;
  }

  .deleted {
    margin-top: 3rem;
    text-align: center;
    h4 {
      margin-bottom: 1rem;
    }
  }

  .fas {
    color: ${negro};
    margin-left: 1vw;
    &:hover {
      color: ${violeta};
    }
  }

  .adminSpan,
  .clientSpan {
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
  }

  .adminSpan {
    background-color: rgba(0, 128, 0, 0.8);
  }

  .clientSpan {
    background-color: rgba(255, 0, 0, 0.6);
  }
  p.username,
  p.email,
  p.isAdmin {
    display: none;
  }

  @media (max-width: 858px) {
    ul li { 
      margin: auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 5vw;
      grid-template-rows: auto;
        padding:5vw;
      span{
        width: 100%;
        flex-direction: column;
        align-items: center;
      }
    }
    .titles {
      display: none;
    }
    p.username,
    p.email,
    p.isAdmin {
      display: inline;
      font-weight: bold;
    }
  }
`;
