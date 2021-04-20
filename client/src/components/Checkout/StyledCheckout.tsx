import styled from "styled-components";
import { blanco } from "../../containers/App/GlobalStyles";

export const StyledCheckout = styled.div`
  .checkoutContainer {
    max-width: 35rem;
    min-height: 60vh;
    margin: 2rem auto 0 auto;
    padding: 1rem 0 1rem 0;
    border: 2px solid black;
    border-radius: 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${blanco};
    position: relative;
    flex-direction: column;
    font-weight: 500;

    h2 {
      font-size: 1.5rem;
    }
    ul {
      width: 70%;
    }
    ul li {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2rem 0 2rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      span {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
    .location {
      display: flex;
      flex-direction: column;
      height: 30vh;
      width: 30rem;
      justify-content: space-around;
      margin: 1.5rem;
      align-items: center;
      h3{
        margin: 1rem
      }
      input {
        margin: 0.5rem 0 0.5rem 0;
        width: 20rem;
        font-size:1.1rem;
      }
      span {
        font-size: 0.5rem;
        color: red;
        max-width: 45%;
        text-align: center;
      }
    }
  }
  @media (max-width: 858px) {
    .checkoutContainer {
      border: none;
      border-radius: 0;
      .location {
        width: 90%;
        input {
          width: 90%;
          line-height: 1.5rem;
        }
        .boton {
          width: 80%;
        }
      }
    }
  }
`;
