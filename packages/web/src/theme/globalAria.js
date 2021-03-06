import { createGlobalStyle } from "styled-components";

const GlobalAria = createGlobalStyle`
  /* Browser fallback for non-supporting hidden attribute
  * Usefull in ul lists to hide the ul element
  */
  [hidden] { display: none; }
  
  /* https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/ */
  @media screen and
  (prefers-reduced-motion: reduce), 
  (update: slow) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/#comment-1700170) */
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }
`;

export default GlobalAria;
