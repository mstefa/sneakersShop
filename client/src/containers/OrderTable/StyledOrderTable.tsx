import styled from "styled-components";
import { blanco, formWidth, verdeDetalle} from "../App/GlobalStyles";

export const StyledOrderTable = styled.div`

    .sectionBar section {
      text-transform: capitalize;
    }
    .sectionBar .currentState{
        background-color: ${verdeDetalle};
      }
  .orderContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
      justify-content: center;
      text-align:center;

      span,
      select {
        width: 15%;
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        text-align: center;
      }

      button {
        margin: 1rem 0;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        align-self: center;
      }
    }


    ul li + li {
      .product {
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
    p.product,
    p.model,
    p.quantity,
    p.price,
    p.state,
    p.username {
      display: none;
    }
  }
  @media (max-width: 858px) {
    .orderContainer {
      ul li {
        margin: 3vh auto 3vh auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5vw;
        grid-template-rows: auto;
        span,
        select {
          width: 90%;
          margin:auto;
          flex-direction: column;
          align-items: center;
        }
      }
      .titles {
        display: none;
      }
      p.product,
      p.model,
      p.quantity,
      p.price,
      p.state,
      p.username {
        display: inline;
        font-weight: bold;
      }
    }
  }
`;
