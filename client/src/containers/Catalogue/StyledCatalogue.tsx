import styled from "styled-components";

export const StyledCatalogue = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .productImg {
    width: 20rem;
    object-position: 20% 90%;
    object-fit: cover;
    transition: all 500ms ease;

    &:hover {
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
  a,
  a:active,
  a:focus {
    outline: none;
  }

  .productsUl {
    ul {
      padding: 5vh 0 0 0;
      display: flex;
      flex-flow: row wrap;
      list-style: none;
      gap: 12px;
      justify-content: center;
      li {
        position: relative;
        overflow: hidden;
      }
    }
  }


  @media (max-width: 858px) {
    /* .productImg{
      width: 100vw;
      height:100vw;
    } */
    /* .create, .trend{
      display:none;
    } */
    /* .productData{
      width:100vw;
    } */
    .productsUl {
      ul {
        flex-direction: column;
        padding: 2vh 0;
      }
    }
  }
`;
