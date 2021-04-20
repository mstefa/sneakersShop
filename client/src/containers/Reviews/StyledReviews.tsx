import styled from "styled-components";
import {
  blanco,
  violeta,
  violetaHover,
  formWidth,
} from "../App/GlobalStyles";

export const StyledReviews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${formWidth * 2}vw;
  margin: 2rem auto;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${blanco};
  ul li:last-of-type {
    margin-bottom: 1rem;
  }
  .clip-star2 {
    background: ${violeta};
  }
  .empty-star2 {
    background: ${violetaHover};
  }
  .half-star2 {
    background: linear-gradient(90deg, ${violeta} 50%, ${violetaHover} 50%)
  }
  .clip-star2,
  .empty-star2,.half-star2 {
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
    height: 2vw;
    width: 2vw;
  }

  .reviewsHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 1vw;
    .reviewsAverage {
      font-size: 4rem;
      font-weight: bold;
    }
    .reviewsCount {
      margin-left: 1vw;
    }
  }

  @media screen and (max-width: 870px) {

  border: none;
  box-shadow: none;
    .clip-star2,
    .empty-star2, .half-star2 {
      height: 7vw;
      width: 7vw;
    }
    .clip-star,
    .empty-star, .half-star {
      height: 5vw;
      width: 5vw;
    }
  }
`;
