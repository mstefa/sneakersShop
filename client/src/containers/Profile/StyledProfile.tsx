import styled from "styled-components";

export const StyledProfile = styled.div`
  padding: 2em 0;
position: relative;
  .profile_container {
    display: flex;
    height: 40vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    * label {
      opacity: .6;
      font-weight: 500;
    }

    h1 {
      width: 100%;
      text-align: center;
      padding: .2em
      background-color: #151515;
    }
  }

  .successModal {
    position: absolute;
    top: 10%;
    right: 5em;
    opacity: .7;
    background-color: green;
    color: #f9f9f9;
    padding: 1.5em 1em;
    display: none;
  }

  .boton {
    width: 15%;
    min-width: max-content;
    font-size: .8em;
    padding: 1.5em 1em;
    text-align: center;
    margin: 1em;
  }
`;
