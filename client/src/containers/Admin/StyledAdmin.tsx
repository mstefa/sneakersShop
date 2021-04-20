import styled from "styled-components";
import { violeta, verdeDetalleTrans, blanco, verdeMain } from "../App/GlobalStyles";

export const StyledAdmin = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  align-content:start;
  background-color: ${violeta};
  min-height:82vh;

  a {
    color: ${blanco};
    text-decoration: none;
    font-weight: 750;
    font-size: 1.5rem;
    transition: transform 500ms ease;
    /* margin-bottom: 1rem; */
    &:hover {
      transform: scale(1.1)
    }
    div {
      min-width: 15rem;
      /* max-width: 25rem; */
      height: 10rem;
      border-radius: 10px;
      border: solid ${verdeMain};
      background-color:${verdeDetalleTrans};
      margin: 2rem;
      display: flex;
      flex-direction:row;
      justify-content: center;
      align-items: center;
      }
    }

    .fas{
      margin-right: 1rem;
      font-size: 3rem;
    }

`;
