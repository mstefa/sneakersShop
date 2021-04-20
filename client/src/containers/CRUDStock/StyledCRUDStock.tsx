import styled from "styled-components";
import { blanco, violeta, negro, formWidth } from "../App/GlobalStyles";

export const StyledCRUDStock = styled.div`
  .stockContainer {
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

    :first-child  {
        border: none;
        margin-bottom: 0;
      }

      span,
      h5,
      div {
        width: 20%;
        display: flex;
        justify-content: center;
      }
      
      select {
        width: 20%;
        margin: 0.1rem 1rem;
      }
    }
    .fas {
      color: ${negro};
      margin-left: 1vw;
      &:hover {
        color: ${violeta};
      }
    }
    .editStock {
      width: 3vw;
    }

    p.itemId,
    p.itemName,
    p.itemColor,
    p.itemSize,
    p.itemStock {
      display: none;
    }
  }
  @media (max-width: 858px) {
    .stockContainer {
      ul li {
        margin: auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5vw;
        grid-template-rows: auto;
        padding: 5vw;
        select{
          width:80%;
          justify-self:center;
        }
        h5{
          display:none;
        }
        span,
        div {
          width: 100%;
          flex-direction: column;
          align-items: center;
        }
      }
      .titles {
        display: none;
      }
      p.itemId,
      p.itemName,
      p.itemColor,
      p.itemSize,
      p.itemStock {
        display: inline;
        font-weight: bold;
      }
    }
  }
`;
