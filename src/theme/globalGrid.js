import { createGlobalStyle } from "styled-components";
import { theme, mediaMin, rem } from "./globalStyles";

const GlobalGrid = createGlobalStyle`
  .row-bg-100 {
    background-color: ${theme.colors.bgLight100};
  }
  
  .row-bg-200 {
    background-color: ${theme.colors.bgLight200};
  }

  .row {
    &:after {
    content: "";
    display: table;
    clear: both;
  }

  display: block;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  max-width: ${theme.contain.wrapper.col12};

  margin-left: auto;
  margin-right: auto;
  padding: ${theme.gridSpacing.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gridSpacing.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gridSpacing.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.l`
    padding: ${theme.gridSpacing.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gridSpacing.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gridSpacing.m}, env(safe-area-inset-right));
      }
    }
  `};
  }

  .row-full {
    &:after {
    content: "";
    display: table;
    clear: both;
  }

  display: block;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-left: auto;
  margin-right: auto;
  padding: ${theme.gridSpacing.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gridSpacing.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gridSpacing.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.l`
    padding: ${theme.gridSpacing.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gridSpacing.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gridSpacing.m}, env(safe-area-inset-right));
      }
    }
  `};
  }

  .row-contain--10 {
    max-width: ${theme.contain.wrapper.col10};
  }

  .row-contain--8 {
    max-width: ${theme.contain.wrapper.col8};
  }

  .row-contain--6 {
    max-width: ${theme.contain.wrapper.col6};
  }

  .col {
    float: left;
    flex: 0 1 auto;
    margin: 0 ${theme.gridSpacing.s};

    ${mediaMin.l`
      margin: 0 ${theme.gridSpacing.m};
    `};
  }

  .col--1 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.xl`  
      max-width: calc(8.33333333% - ${theme.gutters.m});
      flex-basis: calc(8.33333333% - ${theme.gutters.m});
    `};
  }

  .col--2 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.gutters.m});
      flex-basis: calc(50% - ${theme.gutters.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(16.66666667% - ${theme.gutters.m});
      flex-basis: calc(16.66666667% - ${theme.gutters.m});
    `};
  }

  .col--3 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.gutters.m});
      flex-basis: calc(50% - ${theme.gutters.m});
    `};


    ${mediaMin.xl`  
      max-width: calc(25% - ${theme.gutters.m});
      flex-basis: calc(25% - ${theme.gutters.m});
    `};
  }

  .col--4 {
    max-width: 100%;
    flex-basis: 100%;
    
    ${mediaMin.l`  
      max-width: calc(50% - ${theme.gutters.m});
      flex-basis: calc(50% - ${theme.gutters.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(33.33333333% - ${theme.gutters.m});
      flex-basis: calc(33.33333333% - ${theme.gutters.m});
    `};
  }

  .col--5 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.gutters.m});
      flex-basis: calc(50% - ${theme.gutters.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(41.66666667% - ${theme.gutters.m});
      flex-basis: calc(41.66666667% - ${theme.gutters.m});
    `};
  }

  .col--6 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.gutters.m});
      flex-basis: calc(50% - ${theme.gutters.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(50% - ${theme.gutters.m});
      flex-basis: calc(50% - ${theme.gutters.m});
    `};
  }

  .col--7 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.gutters.m});
      flex-basis: calc(50% - ${theme.gutters.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(58.33333333% - ${theme.gutters.m});
      flex-basis: calc(58.33333333% - ${theme.gutters.m});
    `};
  }

  .col--8 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.gutters.m});
      flex-basis: calc(50% - ${theme.gutters.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(66.66666667% - ${theme.gutters.m});
      flex-basis: calc(66.66666667% - ${theme.gutters.m});
    `};
  }

  .col--9 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.gutters.m});
      flex-basis: calc(50% - ${theme.gutters.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(75% - ${theme.gutters.m});
      flex-basis: calc(75% - ${theme.gutters.m});
    `};
  }

  .col--10 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.gutters.m});
      flex-basis: calc(50% - ${theme.gutters.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(83.33333333% - ${theme.gutters.m});
      flex-basis: calc(83.33333333% - ${theme.gutters.m});
    `};
  }

  .col--11 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.xl`  
      max-width: calc(91.66666667% - ${theme.gutters.m});
      flex-basis: calc(91.66666667% - ${theme.gutters.m});
    `};
  }

  .col--12 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.xl`  
      max-width: calc(100% - ${theme.gutters.m});
      flex-basis: calc(100% - ${theme.gutters.m});
    `};
  }

  .ml-auto {
    margin-left: auto;
  }

  .mr-auto {
    margin-left: auto;
  }

  .m-auto {
    margin: auto;
  }
`;

export default GlobalGrid;
