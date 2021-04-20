import styled from "styled-components";
import { blanco, formWidth } from "../../containers/App/GlobalStyles";

export const StyledSuccess = styled.div`
  width: ${formWidth}vw;
  min-height: 60vh;
  margin: 2rem auto;
  padding: 1rem 0 1rem 0;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${blanco};
  position: relative;
  flex-direction: column;
  font-weight: 500;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin: 1em;
  }
  div {
    width: 90%;
  }
  img {
    width: 40%;
  }
  @media (max-width: 858px) {
    width: 90vw;
  }
`;
