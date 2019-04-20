import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";

import { Copy } from "../../src/components/Copy/Copy";
import { GridRow, GridCol } from "../../src/components/Grid/Grid";

export const Row = styled(GridRow)`
  max-width: ${theme.contain.wrapper.col10};
  flex-wrap: nowrap !important;
`;

export const HeaderImageWrapper = styled(GridCol)`
  order: 2;

  ${mediaMin.s`
    order: 1;
  `};
`;

export const ImageWrapper = styled.div`
  background: ${theme.colors.bgLight200};
`;

export const HeaderInfoWrapper = styled(GridCol)`
  order: 1;

  ${mediaMin.s`
    order: 2;
  `};
`;

export const AboutMeTitle = styled.h1`
  color: ${theme.colors.dark900};
  font-weight: 700;
  font-style: normal;
  font-family: ${theme.fonts.header};
  font-size: ${theme.fontSizes.h1s};

  ${mediaMin.xs`
    font-size: ${theme.fontSizes.h1};
  `}

  line-height: ${theme.lineHeights.h1s};
  margin-bottom: ${rem(16)};

  ${mediaMin.xs`
    line-height: ${theme.lineHeights.h1};
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
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.dark800} !important;
  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.buttonS};
  line-height: ${theme.lineHeights.buttonS};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(6)} ${rem(16)} ${rem(4)};
  height: ${theme.buttonHeight.s};
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
    background-color: ${theme.colors.grey100};
    ${theme.shadow.buttons.darkGhost};
  }
`;

export const StyledSocialNav = styled.div`
  margin-top: ${rem(2)};
  margin-right: ${rem(16)};
  float: left;
`;

export const DoingNowRow = styled(GridRow)`
  max-width: ${theme.contain.wrapper.col10};
  margin-bottom: ${theme.spacing.rowTop.s};

  ${mediaMin.s`
    margin-bottom: ${theme.spacing.rowTop.m};
  `};

  ${mediaMin.xl`
    margin-bottom: ${theme.spacing.rowTop.xl};
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
