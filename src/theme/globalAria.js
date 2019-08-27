import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalAria = createGlobalStyle`
  ${
    "" /* button,
  a,
  input {
    &:active,
    &:focus {
      outline: 2px solid ${theme.colors.grey800};
      ${theme.shadow.input.focus};
    }
  } */
  }

  /* Browser fallback for non-supporting hidden attribute
  * Usefull in ul lists to hide the ul element
  */
  [hidden] { display: none; }
`;

export default GlobalAria;
