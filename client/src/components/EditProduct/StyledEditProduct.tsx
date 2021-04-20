import styled from "styled-components";
import {
  blanco,
  violeta,
  verdeDetalle,
} from "../../containers/App/GlobalStyles";

export const StyledEditProduct = styled.div`
  ul {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    justify-content: center;

    li {
      margin: 5px;
    }
  }

  .container {
    background-color: ${blanco};
    /* border: 1px solid black; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
  }
  .reviewsSection {
    grid-column: 1 / 3;
  }
  .imagenes {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: min-content;
    padding-left: 10vw;
    .img1{
      display:flex;
      align-items:flex-end;
    }
    ul li {
      cursor: pointer;
    }
  }
  .botonInvertido {
    text-transform: capitalize;
  }
  .photoMain {
    width: 35vw;
    height: 35vw;
    object-position: 20% 90%;
    object-fit: cover;
    margin: 0 2rem 2rem 0;
    position: relative;
    top: 2.5rem;
  }
  .photoDetail {
    width: 10vw;
    height: 10vw;
    object-position: 20% 90%;
    object-fit: cover;
  }

  .fondoVioleta {
    background-color: ${violeta};
    width: 100%;
    height: 17rem;
    position: absolute;
    left: 0;
    margin-top: 2rem;
    filter: blur(2px);
  }

  .info {
    z-index: 2;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: 1rem 1fr 1fr;
    /* grid-rows-desc : void  back desc price button*/
    grid-template-rows: 2rem 17rem 4rem 10rem 1fr;
    padding-right: 10vw;

    h1 {
      grid-row: 2 / 3;
      grid-column: 1 / 3;
      display: flex;
      align-items: center;
    }
    .tituloLargo {
      font-size: 2.5rem;
    }
    .tituloCorto {
      font-size: 3.5rem;
    }

    .description {
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      grid-row: 3 / 4;
      grid-column: 2 / 3;
      * {
        margin-left: 0.5rem;
      }

      .category {
        opacity: 70%;
        transition: opacity 500ms ease;
        &:hover {
          opacity: 100%;
        }
      }
    }
    .precios {
      display: flex;
      flex-direction: column;
      justify-content: center;
      grid-row: 4 / 5;
      grid-column: 2 / 3;
    }
    .botones {
      margin-top: 2rem;
      grid-row: 5 / 6;
      width: 100%;
      grid-column: 2 / 4;
      * {
        margin: 0.3rem;
        width: 90%;
        height: 4rem;
      }
    }
  }
  .sale {
    background-color: red;
    color: white;
    text-align: center;
  }  

  #edit_name, 
  #edit_categories, 
  #edit_brand, 
  #edit_discount, 
  #edit_price {
    font-size: 1rem;
    height: 1rem;
    width: 1rem;
    align-self: center;
    opacity: 0.7;
    transition: opacity 500ms ease;
    cursor: pointer;
    margin: 0.5em;

    &:hover {
      opacity: 1;
    }
  }

  .modal {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 30%;
    height: 30%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;

    .close {
      align-self: flex-end;
      margin: 1rem;
      width: 2em;
      height: 2em;
      border-radius: 5px;
      border: 2px solid #151515;
      font-size: 1rem;
      color: ${blanco}
      font-weight: 1000;
      position: absolute;
      top: 0rem;
      background-color: #cc0000;
      cursor: pointer;

      &:hover {
	transform: scale(1.1);
      }
    }

    select {
      height: max-height;
    }

    input, select {
      width: 70%;
      margin: 1rem 0;
    }
  }

  @media screen and (max-width: 870px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto 1fr;
    }
    .fondoVioleta {
      display: none;
    }

    .imagenes {
      padding-left: 0;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      padding: 0.5rem;
      width: 100%;
      height: min-content;
      display: grid;
      grid-template-columns: 1rem 1fr 1rem;
      grid-template-rows: 3fr 1fr;

      .photoMain {
        margin: 0;
        grid-column: 1 / 4;
        grid-row: 1 / 2;
        width: 100%;
        height: 80%;
      }

      ul {
        grid-column: 2 / 3;
        grid-row: 2 / 3;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;

        li {
          grid-row: 1 / 2;
          width: 6rem;
          height: 6rem;

          img {
            width: 80%;
            height: 80%;
          }
        }

        &:nth-child(1) {
          grid-column: 1 / 2;
        }
        &:nth-child(2) {
          grid-column: 2 / 3;
        }
        &:nth-child(1) {
          grid-column: 3 / 4;
        }
      }
    }

    .info {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      padding-right: 0;
      grid-template-columns: 10% 1fr 10%;
      grid-template-rows: 1rem 8rem 4rem 6rem 1fr;
      h1 {
        padding: 0.5rem;
        grid-column: 1 / 4;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${violeta};
        width: 100%;
      }
      h1,
      .tituloLargo,
      .tituloCorto {
        font-size: 2rem;
      }

      .description {
        grid-column: 2 / 3;
        justify-content: center;

        span {
          display: block;
        }
      }

      .precios {
        align-items: center;
      }
    }

`;
