import styled from "styled-components";
import { productWidth, blanco, negro, violeta } from "../../containers/App/GlobalStyles";

export const StyledOrderHistory = styled.div`
  
  margin-bottom : 0;
  
  h2{
    text-align: center;
    color:${violeta};
    margin: 0.5rem 2rem 2rem 2rem;
    border-bottom: 2px solid ${violeta};
  }
  .container {
    display: flex;
    flex-direction: column;
    max-width: 45rem;
    min-height: 10rem;
    margin: 2rem auto;
    border: 0.5rem, solid ${negro};
    border-radius: 1rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    background-color: ${blanco};
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
  }
  
  .itemData{
    width: 15rem;
  }
 
  .itemButtons{
      width: 10rem;
      min-height: 6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .boton {
        font-size: 0.9em;
        /* padding: 1em 1.5em; */
        text-align: center;
      }
  }

  @media (max-width: 750px) {

    h2{
      font-size: 2rem;
      border: none;
    }
    .container {
      border: 0;
      border-radius: 0;
      box-shadow: 0;
    
      .itemData{
          text-align: center;
      }
    }
  }
  }
`;
