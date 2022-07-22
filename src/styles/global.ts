import { createGlobalStyle } from "styled-components"
import Trebuchet from "../fonts/trebuc.ttf"

export const GlobalStyle = createGlobalStyle`

    @font-face {
      font-family: 'Trebuchet MS';
      src: url(${Trebuchet}) format('truetype');
    }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
    :root {
      --blue: #389CD6;
      --green: #309D5F;
      --grey: #7B7070;
      --pink: #EE6381;
      --white-2: #00000014;
      --white: #FFFFFF;
    }

    body, input, button {
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 1rem;
    }
    h1, h2, h3 , h4 , h5 , h6 {
        font-weight: 700;
    }
    button {
        cursor: pointer;
    }

`
