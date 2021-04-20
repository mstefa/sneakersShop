import styled from "styled-components";
import {
  blanco,
  violeta,
  violetaHover,
  formWidth,
} from "../../containers/App/GlobalStyles";

export const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${formWidth * 1.9}vw;
  margin: 1rem 1rem 0 1rem;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${blanco};
  .review {
    width: 95%;
    margin: auto;
  }
  .rating {
    margin: 2vh 0 0 0;
  }
  .ratingTitle {
    margin: 1vh 0 1vh 0;
  }
  .ratingDescription {
    margin: 0 0 2vh 0;
  }
  .clip-star {
    background: ${violeta};
  }
  .empty-star {
    background: ${violetaHover};
  }
  .clip-star,
  .empty-star {
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    display: inline-block;
    height: 1.5vw;
    width: 1.5vw;
  }
  @media screen and (max-width: 870px) {
    border: none;
    box-shadow: none;
    .clip-star,
    .empty-star{
      height: 5vw;
      width: 5vw;
    }
  }
`;
