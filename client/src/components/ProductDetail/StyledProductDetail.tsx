import styled from "styled-components";
import {
  blanco,
  verdeMain,
  violeta,
  verdeDetalle,
} from "../../containers/App/GlobalStyles";

export const StyledProductDetail = styled.div`
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
        cursor: pointer;
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
      i{
        color:${violeta};
        cursor: pointer;
      }
    }

    .favoritos{
      grid-row: 4 ;
      grid-column: 3;
      align-self: center;
      padding-top: 1rem;
      .fas{
        font-size: 3rem;
      }
      .fa-heart.fas-on{
        color: ${violeta};
      }

      .fa-heart.fas-off{
        color: ${blanco};
        text-shadow: -1px 0 #2b2b2b, 0 1px black, 1px 0 black, 0 -1px black;
        
      }
    }
  }
  .related {
    margin-top: 1rem;
    grid-row: 2 / 3;
    grid-column: 1 / 3;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 5rem 1fr;
    border-top: solid 3px black;
    background-color: rgba(100, 223, 223, 0.3);

    h3 {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${violeta};
    }

    .photo {
      width: 100%;
      grid-row: 2 / 3;
      grid-column: 1 / 4;
      padding: 0 3rem 2rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      li {
        width: min-content;
        height: min-content;
        margin: 0 1.5rem;

        a {
          color: ${verdeDetalle};
          text-decoration: none;
          font-weight: 750;
          display: grid;
          grid-template-rows: 2fr 1fr 2fr;
          grid-template-columns: 1fr;
          width: 100%;

          .similData {
            opacity: 0;
            background-color: rgba(0, 0, 0, 0.6);
            padding: 0.2rem;
            width: 100%;
            grid-row: 2 / 3;
            grid-column: 1 / 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: opacity 500ms ease;
          }

          &:hover .similData {
            opacity: 1;
          }

          img {
            grid-row: 1 / 4;
            grid-column: 1 / 2;
            width: 20rem;
            height: 20rem;
            object-fit: cover;
          }
        }
      }
    }
  }
  .sale {
    background-color: red;
    color: ${blanco};
    text-align : center;
    padding: 0rem 0.5rem 0rem 0.5rem;
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
      .favoritos{
        grid-row:6;
        grid-column: 2/3;
        justify-self:center;
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

    .related {
      grid-column: 1 / 2;
      grid-row: 3 / 4;

      .photo li + li {
        margin: 1.5rem;
      }

      .photo ul li:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }
`;
