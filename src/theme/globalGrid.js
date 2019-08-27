import { createGlobalStyle } from "styled-components";
import { theme, mediaMin, rem } from "./globalStyles";

const GlobalGrid = createGlobalStyle`
  .row-bg-100 {
    background-color: ${theme.colors.grey50};
  }
  
  .row-bg-200 {
    background-color: ${theme.colors.grey50};
  }

  .row {
    &:after {
    content: "";
    display: table;
    clear: both;
  }

  display: block;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;

  max-width: ${theme.layout.col12.wrapper};

  margin-left: auto;
  margin-right: auto;
  padding-left: ${theme.layout.gridSpacing.s};
  padding-right: ${theme.layout.gridSpacing.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${
        theme.layout.gridSpacing.s
      }, env(safe-area-inset-left));
      padding-right: max(${
        theme.layout.gridSpacing.s
      }, env(safe-area-inset-right));
    }
  }

  ${mediaMin.l`
    padding-left: ${theme.layout.gridSpacing.m};
    padding-right: ${theme.layout.gridSpacing.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.layout.gridSpacing.m}, env(safe-area-inset-left));
        padding-right: max(${theme.layout.gridSpacing.m}, env(safe-area-inset-right));
      }
    }
  `};
  }
  
  .row--nested {
    &:after {
      content: "";
      display: table;
      clear: both;
    }

    display: block;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .row-full {
    &:after {
      content: "";
      display: table;
      clear: both;
    }

  display: block;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;

  margin-left: auto;
  margin-right: auto;
  padding-left: ${theme.layout.gridSpacing.s};
  padding-right: ${theme.layout.gridSpacing.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${
        theme.layout.gridSpacing.s
      }, env(safe-area-inset-left));
      padding-right: max(${
        theme.layout.gridSpacing.s
      }, env(safe-area-inset-right));
    }
  }

  ${mediaMin.l`
    padding-left: ${theme.layout.gridSpacing.m};
    padding-right: ${theme.layout.gridSpacing.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.layout.gridSpacing.m}, env(safe-area-inset-left));
        padding-right: max(${theme.layout.gridSpacing.m}, env(safe-area-inset-right));
      }
    }
  `};
  }

  .row-contain--10 {
    max-width: ${theme.layout.col10.wrapper};
  }

  .row-contain--8 {
    max-width: ${theme.layout.col8.wrapper};
  }

  .row-contain--6 {
    max-width: ${theme.layout.col6.wrapper};
  }

  .col {
    flex: 1 1 100%;
    max-width: 100%;
    margin-left: ${theme.layout.gridSpacing.s};
    margin-right: ${theme.layout.gridSpacing.s};
    margin-bottom: ${theme.layout.gutter.s};

    ${mediaMin.s`
      float: left;
    `};

    ${mediaMin.l`
      margin-left: ${theme.layout.gridSpacing.m};
      margin-right: ${theme.layout.gridSpacing.m};
      margin-bottom: ${theme.layout.gutter.m};
    `};
  }

  .col--nested {
    flex: 0 1 100%;
    max-width: 100%;

    ${mediaMin.s`
      float: left;
    `};
  }

  .col--1 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.xl`  
      max-width: calc(8.33333333% - ${theme.layout.gutter.m});
      flex-basis: calc(8.33333333% - ${theme.layout.gutter.m});
    `};
  }

  .col--2 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.layout.gutter.m});
      flex-basis: calc(50% - ${theme.layout.gutter.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(16.66666667% - ${theme.layout.gutter.m});
      flex-basis: calc(16.66666667% - ${theme.layout.gutter.m});
    `};
  }

  .col--3 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.layout.gutter.m});
      flex-basis: calc(50% - ${theme.layout.gutter.m});
    `};


    ${mediaMin.xl`  
      max-width: calc(25% - ${theme.layout.gutter.m});
      flex-basis: calc(25% - ${theme.layout.gutter.m});
    `};
  }

  .col--4 {
    max-width: 100%;
    flex-basis: 100%;
    
    ${mediaMin.l`  
      max-width: calc(50% - ${theme.layout.gutter.m});
      flex-basis: calc(50% - ${theme.layout.gutter.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(33.33333333% - ${theme.layout.gutter.m});
      flex-basis: calc(33.33333333% - ${theme.layout.gutter.m});
    `};
  }

  .col--5 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.layout.gutter.m});
      flex-basis: calc(50% - ${theme.layout.gutter.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(41.66666667% - ${theme.layout.gutter.m});
      flex-basis: calc(41.66666667% - ${theme.layout.gutter.m});
    `};
  }

  .col--6 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.layout.gutter.m});
      flex-basis: calc(50% - ${theme.layout.gutter.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(50% - ${theme.layout.gutter.m});
      flex-basis: calc(50% - ${theme.layout.gutter.m});
    `};
  }

  .col--7 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.layout.gutter.m});
      flex-basis: calc(50% - ${theme.layout.gutter.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(58.33333333% - ${theme.layout.gutter.m});
      flex-basis: calc(58.33333333% - ${theme.layout.gutter.m});
    `};
  }

  .col--8 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.layout.gutter.m});
      flex-basis: calc(50% - ${theme.layout.gutter.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(66.66666667% - ${theme.layout.gutter.m});
      flex-basis: calc(66.66666667% - ${theme.layout.gutter.m});
    `};
  }

  .col--9 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.layout.gutter.m});
      flex-basis: calc(50% - ${theme.layout.gutter.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(75% - ${theme.layout.gutter.m});
      flex-basis: calc(75% - ${theme.layout.gutter.m});
    `};
  }

  .col--10 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.l`  
      max-width: calc(50% - ${theme.layout.gutter.m});
      flex-basis: calc(50% - ${theme.layout.gutter.m});
    `};

    ${mediaMin.xl`  
      max-width: calc(83.33333333% - ${theme.layout.gutter.m});
      flex-basis: calc(83.33333333% - ${theme.layout.gutter.m});
    `};
  }

  .col--11 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.xl`  
      max-width: calc(91.66666667% - ${theme.layout.gutter.m});
      flex-basis: calc(91.66666667% - ${theme.layout.gutter.m});
    `};
  }

  .col--12 {
    max-width: 100%;
    flex-basis: 100%;

    ${mediaMin.xl`  
      max-width: calc(100% - ${theme.layout.gutter.m});
      flex-basis: calc(100% - ${theme.layout.gutter.m});
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
