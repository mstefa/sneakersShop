import styled from "styled-components";
import { blanco, formWidth, violeta } from "../../containers/App/GlobalStyles";

export const StyledOffer = styled.div`
  .discountContainer {
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

    h2 {
      text-align: center;
      padding-top: 2vh;
    }
    h3 {
      padding-left: 2vw;
    }
    form {
      min-height: 15rem;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;

      .inputGroup {
        width: 18rem;
        margin: 0.5rem;
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }

      .inputField {
        display: flex;
        height: 1.5rem;
        flex-direction: row;
        text-align: center;
        font-size: large;
      }

      select {
        width: 15rem;
        font-size: large;
      }
      input {
        border: none;
        border-bottom: 1px solid black;
        font-size: large;
        max-width: 5rem;
        height: 1.5rem;
        text-align: center;
        background-color: ${blanco};
        border-radius: 0.1rem;
      }

      input:focus {
        outline-color: #bebcc0;
      }

      .addButton {
        min-width: 10rem;
        max-width: 20rem;
        min-height: 3rem;
        padding: 1vh 0 1vh 0;
        border-radius: 3px;
        border: 2px solid ${violeta};
        color: ${violeta};
        font-weight: bold;
        &:hover {
          background-color: ${violeta};
          color: ${blanco};
        }
        &:disabled {
          background-color: #c5c5c5;
          color: #818181;
          border-color: #818181;
        }
      }
    }

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
    p.info {
      display: none;
    }

    .active,
    .finish {
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
    }

    .active {
      background-color: rgba(0, 128, 0, 0.8);
    }

    .finish {
      background-color: rgba(255, 0, 0, 0.6);
    }
  }

  @media (max-width: 858px) {
    .discountContainer {
      ul li {
        margin: auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5vw;
        grid-template-rows: auto;
        padding: 5vw;
        span {
          width: 100%;
          flex-direction: column;
          align-items: center;
        }
      }
      .titles {
        display: none;
      }

      p.info {
        display: inline;
        font-weight: bold;
      }
    }
  }
`;
