import { createGlobalStyle } from "styled-components";

export var verdeMain = "#64DFDF";
export var verdeDetalle = "#80FFDB";
export var verdeDetalleTrans = "#80FFDB50";
export var violeta = "#7d56bd";
export var violetaHover = "#6930C350";
export var blanco = "#F0F0F0";
export var negro = "#151515";
export var productWidth = 20;
export var navHeight = 18;
export var formWidth = 40;

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400&display=swap');
    
    body, * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        transition: all 300ms ease;
        
    }
    body{
        padding: 0 !important;
    }
    .App{
        min-height:100vh;
    }
    .footerFake{
        min-height:2vh;
        width:100%
    }
    a{
        text-decoration: none;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight: bold;
    }
    h1{
        font-size:3rem;
        color: ${verdeMain};
        text-transform: uppercase;
    }
    h2{
        font-size:2.4rem;
    }
    h3{
        font-size:1.6rem;
    }
    h4{
        font-size:1.2rem;
    }
    h5{
        font-size:1rem;
    }
    h6{
        font-size:0.8rem;
    }
    p{
        font-weight:400;
        font-size: 1rem;
    }
    ul{
        list-style-type:none;
    }
    img{
        border-radius:10px;
    }
    .priceBefore{
        text-decoration:line-through;
        font-weight: 400;
    }
    .boton, .botonInvertido, .botonGlass{
        font-weight: bold;
        font-size: 1rem;
        width: 60%;
        padding: 2%;
        border-radius: 35px;
        cursor: pointer;
    }
    .botonGlass{
        color: ${blanco};
        text-transform: uppercase;
    }
    .botonInvertido{
        background-color: transparent;
        border: 2px solid ${violeta};
        color: ${violeta};
    }
    .boton{
        background-color: ${violeta};
        text-transform: uppercase;
        border: none;
        color: ${blanco};

        &:hover{
            background-color: ${violetaHover};
            transition: all 0.3s;
        }
        &:disabled{
            background-color: ${violetaHover};
        }
    }
    .botonGlass{
        border: 2px solid ${verdeDetalle};
        background-color: ${verdeDetalleTrans};
    }
    .fondoDegradado{
        /* background: linear-gradient(180deg, ${verdeDetalle} 0%, rgba(255, 255, 255, 0) 100%), ${violetaHover}; */
        background: #d3e1ff
    }

    .sectionBar {
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;

        section {
        background-color: ${verdeMain};
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 500ms ease;
        flex-grow: 1;
        cursor: pointer;

        &:hover {
            background-color: ${verdeDetalle};
        }
        }
    }

  @media screen and (max-width:858px) {
    .crud_container {
      border-radius: 0 !important;
      border: none !important;
      width: 100vw !important;
    }
  }
`;
