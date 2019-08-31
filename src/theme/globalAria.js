import { createGlobalStyle } from "styled-components";

const GlobalAria = createGlobalStyle`
  /* Browser fallback for non-supporting hidden attribute
  * Usefull in ul lists to hide the ul element
  */
  [hidden] { display: none; }
`;

export default GlobalAria;
