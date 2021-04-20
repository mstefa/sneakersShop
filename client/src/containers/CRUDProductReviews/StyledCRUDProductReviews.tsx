import styled from "styled-components";
import {
  blanco,
  violeta,
  negro,
  formWidth,
} from "../App/GlobalStyles";

export const StyledCRUDProductReviews = styled.div`
  .categoryContainer {
    display: flex;
    flex-direction: column;
    width: ${formWidth * 2}vw;
    min-height: 30vh;
    margin: 2rem auto 0 auto;
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
    .deleted {
      margin-top: 3rem;
      text-align: center;
      h4 {
        margin-bottom: 1rem;
      }
    }
    .addButton {
      margin: 1rem 0;
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      align-self: center;
    }
    .fas {
      color: ${negro};
      margin-left: 1vw;
      &:hover {
        color: ${violeta};
      }
    }
  }
  @media (max-width: 858px) {
    .fas {
      font-size: 1.5rem;
    }
  }
`;
