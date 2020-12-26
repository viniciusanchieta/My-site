import { createGlobalStyle } from 'styled-components';


const GlobalStyling = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: Roboto,sans-serif;
  background-color: #151719;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyling;