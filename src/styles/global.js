import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import bg from '../assets/imgs/bg.svg';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  :root {
    --bg-color: #191920;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--bg-color) url(${bg}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  div#root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
`;

export default GlobalStyle;
