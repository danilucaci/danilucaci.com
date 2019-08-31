import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/theme";

import { Copy } from "../components/Copy/Copy";
import { GridRow, GridCol } from "../components/Grid/Grid";

export const Header = styled.header`
  max-width: ${theme.layout.col10.wrapper};

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  display: block;
  
  margin-left: auto;
  margin-right: auto;
  padding: ${theme.layout.gridSpacing.s};

  /* iPhone X 
  * Add the extra layout.gridSpacing used in the Grid
  * calc(env(safe-area-inset-left) + ${theme.layout.gridSpacing.s})
  */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(
        ${theme.layout.gridSpacing.s},
        calc(env(safe-area-inset-left) - ${theme.layout.gridSpacing.s})
      );
      padding-right: max(
        ${theme.layout.gridSpacing.s},
        calc(env(safe-area-inset-right) - ${theme.layout.gridSpacing.s})
      );
    }
  }

  ${mediaMin.s`
    padding: ${theme.layout.gridSpacing.m};

    /* iPhone X 
    * Add the extra layout.gridSpacing used in the Grid
    * calc(env(safe-area-inset-left) + ${theme.layout.gridSpacing.s})
    */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.layout.gridSpacing.m}, calc(env(safe-area-inset-left) - ${theme.layout.gridSpacing.m}));
        padding-right: max(${theme.layout.gridSpacing.m}, calc(env(safe-area-inset-right) - ${theme.layout.gridSpacing.m}));
      }
    }
  `};
`;

export const Row = styled(GridRow)`
  max-width: ${theme.layout.col10.wrapper};
`;

export const HeaderImageWrapper = styled(GridCol)`
  ${mediaMin.s`
      float: left;
      width: 100%;
  `};
`;

export const ImageWrapper = styled.div`
  background: ${theme.colors.grey50};
`;

export const HeaderInfoWrapper = styled(GridCol)`
  ${mediaMin.s`
      float: right;
      width: 100%;
  `};
`;

export const AboutMeTitle = styled.h1`
  color: ${theme.colors.grey900};
  font-weight: 700;
  font-style: normal;
  font-family: ${theme.font.family.display.bold};
  font-size: ${theme.font.size.display.mobile.h1};

  ${mediaMin.xs`
    font-size: ${theme.font.size.display.desktop.h1};
  `}

  line-height: ${theme.font.lineHeight.display.mobile.h1};
  margin-bottom: ${rem(16)};

  ${mediaMin.xs`
    line-height: ${theme.font.lineHeight.display.desktop.h1};
  `}
  
  ${mediaMin.xxl`
    margin-top: ${rem(24)};
  `}
`;

export const AboutCopy = styled(Copy)`
  margin-bottom: ${rem(16)};
`;

export const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(32)};

  &:last-of-type {
    margin-bottom: ${rem(20)};
  }
`;

export const ResumeWrapper = styled.div`
  display: block;
  margin-top: ${rem(16)};
  width: 100%;

  &::after {
    content: "";
    clear: both;
    display: table;
  }

  @media screen and (min-width: ${theme.breakpoints.s}) and (max-width: 47em) {
    margin-top: ${rem(8)};
  }

  @media screen and (min-width: 10em) and (max-width: 21.25em) {
    margin-top: ${rem(8)};
  }
`;

export const ResumeButton = styled.a`
  background-color: transparent;
  border: 2px solid ${theme.colors.grey400};
  border-radius: ${theme.borderRadius.button};
  color: ${theme.colors.grey800} !important;
  text-align: center;
  text-decoration: none;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(6)} ${rem(16)} ${rem(4)};
  height: ${theme.size.button.height.default};
  width: auto;

  white-space: nowrap;

  float: right;

  ${mediaMin.xxs`
    margin-top: 0;
  `};

  @media screen and (min-width: ${theme.breakpoints.s}) and (max-width: 47em) {
    width: 100%;
    margin-top: ${rem(16)};
  }

  @media screen and (min-width: 10em) and (max-width: 21.25em) {
    width: 100%;
    margin-top: ${rem(16)};
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.grey00};
  }
`;

export const StyledSocialNav = styled.div`
  /* margin-top: ${rem(2)}; */
  /* margin-right: ${rem(16)}; */
  /* float: left; */
`;

export const DoingNowRow = styled(GridRow)`
  max-width: ${theme.layout.col10.wrapper};
  margin-bottom: ${theme.spacing.row.s};

  ${mediaMin.s`
    margin-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.xl`
    margin-bottom: ${theme.spacing.row.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
    margin-bottom: ${rem(32)};
  }
`;

export const DoingNowItem = styled.div`
  margin-bottom: ${rem(24)};

  ${mediaMin.xxl`
    display: inline-block;
    vertical-align: top;

    &:nth-of-type(1) {
      width: calc(45% - ${rem(24)});
      margin-right: ${rem(12)};
    }

    &:nth-of-type(2) {
      width: calc(55% - ${rem(24)});
      margin-left: ${rem(12)};
    }

    &:nth-of-type(3) {
      width: 100%;
    }
  `};

  & h4 {
    margin-bottom: ${rem(8)};
  }
`;
