import styled from "styled-components";
import { negro, violeta } from "../../containers/App/GlobalStyles";

export const StyledCartItem = styled.div`
  .itemContainer {
    margin: 2rem 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    /* position: relative; */
    /* background-color:green; */

    .itemImage{

      width: 10rem;
      text-align: center;

      img{
        width: 8rem;
        border: solid ${violeta} 0.05rem;
        border-radius: 10px; 
      }

      img:hover {
        border: red;
        transform: scale(1.15);
        transition: all 300ms ease;
      }
    }

    .itemData{
      width: 15rem;

      .oldPrice {
        text-decoration: line-through;
      }
      .oldPrice,
      .newPrice {
        span {
          font-weight: bold;
        }
      }
      .number-input,
      .number-input * {
        box-sizing: border-box;
      }

    }

    .itemButtons{
      width: 10rem;
      min-height: 6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .buttonDelete {
      /* position: absolute; */
        top: 0;
        right: 0;
        font-size: 1.8rem;
        border: none;
        color: ${negro};
        cursor: pointer;
        line-height: 0;
        &:hover {
          color: #920909;
          font-size: 1.9rem;
        }
      }

      .number-input {
      // border: 1px solid #ddd;
      /* position: absolute; */
      bottom: 0;
      left: 50%;
      /* transform: translate(-50%, -10%); */
      display: flex;
      /* flex-direction: row; */
      .fas{
        font-size: 1.7rem;
        &:hover {
          color: ${violeta};
        }
      }
      }
    }

    }

    input[type="number"] {
      appearance: textfield;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    /* .itemImage {
      position: relative;
    } */



    .number-input button {
      outline: none;
      -webkit-appearance: none;
      background-color: transparent;
      border: none;
      align-items: center;
      justify-content: center;
      width: 3rem;
      // height: 3rem;
      cursor: pointer;
      margin: 0;
      position: relative;
    }

    .number-input input[type="number"] {
      width: 2rem;
      border: 1px solid ${negro};
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
    }
  }

  @media (max-width: 650px) {
    .itemData{
      text-align: center;
    }
  }
`;
