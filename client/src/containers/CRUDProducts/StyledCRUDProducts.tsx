import styled from "styled-components";
import {
  blanco,
  violeta,
  negro,
  formWidth,
} from "../../containers/App/GlobalStyles";

export const StyledCRUDProducts = styled.div`
  .productContainer {
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
    .fas, .far {
      color: ${negro};
      margin-left: 1vw;
      &:hover {
        color: ${violeta};
      }
    }
    .swal2-html-container {
      list-style-type: none;
    }
  }
  @media (max-width: 858px) {
    .fas {
      font-size: 1.5rem;
    }
  }
`;
