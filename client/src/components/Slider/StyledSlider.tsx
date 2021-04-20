import styled from "styled-components";

export const StyledSlider = styled.div`
  width: 100%;
  overflow: hidden;
  .carousel-status{
    display: none;
  }

  div img {
    border-radius: 0;
    /* object-position: 0 70%;
    object-fit: cover; */
  }

  @media (max-width: 858px) {
    height: 30vh;
    div img{
      height: 30vh;
      object-fit: cover;
      overflow:hidden;
    }
  }
`;
