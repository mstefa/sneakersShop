import styled from "styled-components";
import { blanco, violeta } from "../../containers/App/GlobalStyles";

export const StyledFilter = styled.div`
  width:100%;
  margin: 0;
  display: flex;
  flex-wrap: wrap;



  .filter {
    flex: 1 0 33%;
    min-height: 2rem;
    padding: 0.25em 0.5em;
    font-size: 1.25rem;
    min-width: 2rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: ${violeta};
    align-items: center;
  }

  .sale{
    background-color: ${violeta};
    min-width: 2rem;
    color: ${blanco};
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    text-align: center;
    outline: none;
  }

  select {
    appearance: none;
    min-width: 12rem;
    background-color: ${violeta};
    color: ${blanco};
    border: none;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
  }
  @media (max-width: 600px){
    .filter{
      font-size: 0.8rem;
    }
    select{
      min-width: 5rem;
    }
`;
