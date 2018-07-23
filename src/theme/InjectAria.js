import { injectGlobal, css } from "styled-components";

injectGlobal`
button,
input {
  &:active,
  &:focus {
    outline: dashed 2px #0946B0;
  }
}

 /* Browser fallback for non-supporting hidden attribute
  * Usefull in ul lists to hide the ul element
  */
  [hidden] { display: none; }
`;
