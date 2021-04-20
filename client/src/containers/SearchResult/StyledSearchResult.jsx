import styled from "styled-components";
import {blanco, violeta, productWidth} from '../App/GlobalStyles'


export const StyledSearchResult = styled.div`
  min-height:100vh;
  display: flex;
  justify-content:center;
  .filterBar{
    ul{
      padding:5vh 0 0 0;
      display: flex;
      gap: 12px;
      justify-content:center;
      flex-flow: row wrap;
      list-style:none;
      li{
        position: relative;
        overflow:hidden;
      }
    }
  }
  .productImg {
    width: ${productWidth}vw;
    height: ${productWidth}vw;
    object-position: 20% 90%;
    object-fit: cover;
    transition: all 500ms ease;
  }

`;
