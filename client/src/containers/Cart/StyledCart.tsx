import styled from "styled-components";
import { blanco, negro, violeta } from "../../containers/App/GlobalStyles";

export const StyledCart = styled.div`
    min-height: 78vh;
  .cartContainer {
    display: flex;
    flex-direction: column;
    max-width: 45rem;
    margin: 2rem auto;
    border: 0.5rem, solid ${negro};
    border-radius: 1rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    background-color: ${blanco};
  }

  h2{
    text-align: center;
    color:${violeta};
    margin: 0.5rem 2rem 2rem 2rem;
    border-bottom: 2px solid ${violeta};
  }

  ul li {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0 0 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .cartItem:last-of-type{
    margin-bottom:5vh;
  }
  footer {
    display: flex;
    bottom: 0;
    width: 100%;
    flex-direction: column;
    background-color: #c2c0c0;
    align-items: center;
    font-weight: 500;
    padding: 1rem;
    height: 6rem;
    border-radius: 0 0 1.1rem 1.1rem;
    button {
      width: 20rem;
      margin: 0.5rem;
      height: 2.5rem;
      padding: 0;
      &:hover {
        outline: none;
      }
    }

    a{
      text-decoration: none;
      color:${negro};
      text-align: center;
    }
  }

    @media (max-width: 750px) {

      h2{
        font-size: 2rem;
        border: none;
      }
    
      .cartContainer {
        border: 0;
        border-radius: 0;
        box-shadow: 0;
        margin-bottom:0;

      }
      footer{
        border-radius: 0;
      }

      .footerFake{
        display: none
      }
  }
`;
