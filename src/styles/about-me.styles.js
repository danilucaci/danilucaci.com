import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";

import { Copy } from "../../src/components/Copy/Copy";

export const AboutMeWrapper = styled.section``;

export const HeaderInfo = styled.header`
  display: block;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${theme.contain.wrapper.col10};

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};

  margin-left: auto;
  margin-right: auto;

  ${mediaMin.m`
    flex-direction: row; 
    justify-content: space-between;
    margin-top: ${rem(24)};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-top: 0;
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

  @media screen and (min-width: ${theme.breakpoints.m}) and (max-width: 55em) {
    margin-top: ${rem(8)};
  }
`;

export const StyledSocialNav = styled.div`
  margin-top: ${rem(2)};
  margin-right: ${rem(16)};
  float: left;
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

  @media screen and (min-width: ${theme.breakpoints.m}) and (max-width: 48em) {
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

export const LeftHeaderWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  margin-top: ${theme.gutters.s};
  order: 2;

  ${mediaMin.m`
    order: 1;
    height: 100%;
    width: calc(((100% / 10) * 4) - ${rem(16)});
  `};
`;

export const ImageWrapper = styled.div`
  background: ${theme.colors.bgLight200};
`;

export const InfoWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  order: 1;

  ${mediaMin.m`
    order: 2;
    display: inline-flex;
    flex-direction: column;
    margin-left: ${rem(16)};
    width: calc(((100% / 10) * 6) - ${rem(16)});
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

  ${mediaMin.s`
    margin-top: ${rem(32)};
  `}
`;

export const AboutCopy = styled(Copy)`
  margin-bottom: ${rem(16)};
`;

export const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(32)};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const DoingNowTitle = styled.h2`
  margin-bottom: ${rem(32)};
`;

export const Col1 = styled.div`
  margin-bottom: ${rem(48)};

  ${mediaMin.l`
    display: inline-block;
    vertical-align: top;
    margin-bottom: 0;
    margin-right: ${rem(32)};
    width: calc(((100% / 10) * 4) - ${rem(32)});
  `};
`;

export const Col2 = styled.div`
  ${mediaMin.l`
    display: inline-block;
    vertical-align: top;
    margin-left: ${rem(12)};
    width: calc(((100% / 10) * 6) - ${rem(12)});
  `};
`;

export const MoreAboutMeWrapper = styled.section`
  padding-top: ${theme.spacing.row.s};

  ${mediaMin.s`
    padding-top: ${theme.spacing.row.m};

  `};

  ${mediaMin.m`
    padding-top: ${theme.spacing.row.xl};

  `};
  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    padding-top: ${rem(64)};
  }
`;

export const MoreAboutMeInner = styled.div`
  max-width: ${theme.contain.wrapper.col10};
  margin: 0 auto;

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};
`;

export const AboutMeItem = styled.div`
  display: inline-block;

  ${mediaMin.s`  
    width: calc(50% - ${rem(24)});
    vertical-align: top;
  `};

  margin-right: ${rem(24)};
  margin-bottom: ${rem(32)};

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }

  & h4 {
    margin-bottom: ${rem(8)};
  }
`;

export const ContactWrapper = styled.div`
  margin-top: ${theme.spacing.row.s};
  margin-bottom: ${theme.spacing.row.s};

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    margin-top: ${theme.spacing.row.m};
    margin-bottom: ${theme.spacing.row.m};
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};

  ${mediaMin.m`
    margin-top: ${theme.spacing.row.xl};
    margin-bottom: ${theme.spacing.row.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-top: ${rem(64)};
    margin-bottom: ${rem(64)};
  }
`;
