import styled from "styled-components";
import { blanco, violeta, formWidth } from "../../containers/App/GlobalStyles";

export const StyledStatistics = styled.div`
  .crud_container {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    min-height: 30vh;
    margin: 2rem 1.5rem 0;
    padding: 1rem;
    border: 2px solid black;
    border-radius: 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    background-color: ${blanco}; /* ;ex-direction: column; */
  }
  .containerStatistics {
    width: 45vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    canvas {
      max-height: 50vh !important;
      width: 100%;
    }
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    width: 100%;
    border-radius: 15px;
    color: ${blanco};
    background-color: ${violeta};
  }
  @media (max-width: 858px) {
    .crud_container {
      flex-direction: column !important;
      align-items: center;
      margin: 2rem auto 0;
      .containerStatistics {
        width: 90%;
        margin: 2rem 0 0;
        canvas {
          width: 100% !important;
        }
      }
    }
  }
`;
