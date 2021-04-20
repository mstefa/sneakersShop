import styled from "styled-components";
import { blanco, negro, violeta } from "../../containers/App/GlobalStyles";

export const StyledWishListTable = styled.div`
  h2 {
    text-align: center;
    color: ${violeta};
    margin: 0.5rem 2rem 2rem 2rem;
    border-bottom: 2px solid ${violeta};
  }

  .productContainer {
    display: flex;
    flex-direction: column;
    max-width: 45rem;
    min-height: 30vh;
    margin: 2rem auto;
    margin-bottom: 0;
    border: 0.5rem, solid ${negro};
    border-radius: 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    background-color: ${blanco};


    ul li {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      margin: 1rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      img {
        width: 8rem;
        border: solid ${violeta} 0.05rem;
        border-radius: 10px;
      }

      img:hover {
        border: red;
        transform: scale(1.15);
        transition: all 300ms ease;
      }

      span,
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20rem;
        height: 5rem;
      }
      .divImg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20rem;
        height: 9rem;
      }
    }

    .fas {
      font-size: 2rem;
      color: ${negro};
    }
  }
  @media (max-width: 750px) {
    border: 0;
    border-radius: 0;
    box-shadow: 0;

    h2 {
      font-size: 2rem;
      border: none;
    }

    ul li {
      img {
        width: 8rem;
      }
    }
  }
`;
