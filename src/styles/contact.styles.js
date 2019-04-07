import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import { Copy } from "../../src/components/Copy/Copy";
import { HR } from "../../src/components/HR/HR";

export const ContactMeWrapper = styled.section`
  max-width: ${theme.contain.wrapper.col10};
  margin-top: ${rem(8)};
  margin-bottom: ${rem(64)};
  margin-left: auto;
  margin-right: auto;

  &::after {
    content: "";
    clear: both;
    display: table;
  }

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
    margin-top: 0;
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
    margin-top: ${rem(24)};
    margin-bottom: ${rem(80)};
  `};
`;

export const StyledH1 = styled.h1`
  display: block;
  width: 100%;
  margin-bottom: ${rem(8)};
  margin-left: auto;
  margin-right: auto;

  max-width: ${rem(640)};

  ${mediaMin.xxl`
    max-width: auto;
    margin-left: 0;
    margin-right: 0;
  `};
`;

export const Subhead = styled(Copy)`
  margin-bottom: ${rem(16)};

  ${mediaMin.xxl`
    margin-bottom: ${rem(32)};
  `};
`;

export const Description = styled(Copy)`
  margin-bottom: ${rem(16)};

  ${mediaMin.xxl`
    margin-bottom: ${rem(32)};
  `};
`;

export const StyledLink = styled.a`
  display: inline;
  white-space: nowrap;
`;

export const SayHiWrapper = styled.div`
  width: 100%;
  margin-top: ${rem(64)};
  margin-left: auto;
  margin-right: auto;

  max-width: ${rem(640)};

  ${mediaMin.xxl`
    float: left;
    width: calc(45% - ${rem(24)});
    margin-top: ${rem(32)};
    max-width: auto;
    margin-left: 0;
    margin-right: 0;
  `};
`;

export const SayHiTitle = styled.h5`
  margin-top: ${rem(24)};
  margin-bottom: ${rem(8)};

  ${mediaMin.m`  
    margin-top: ${rem(32)};
  `};
`;

export const SayHiDescription = styled(Copy)`
  display: inline;
`;

export const SocialNavWrapper = styled.div`
  margin-top: ${rem(16)};
`;

export const ContactMeHeader = styled.header`
  ${mediaMin.m`
    max-width: ${rem(640)};
    margin-left: auto;
    margin-right: auto;
  `};

  ${mediaMin.xxl`
    float: left;
    width: calc(45% - ${rem(24)});
  `};
`;

export const ContactFormWrapper = styled.div`
  ${mediaMin.m`
    max-width: ${rem(640)};
    margin-left: auto;
    margin-right: auto;
  `};

  ${mediaMin.xxl`
    width: 55%;
    margin-top: -${rem(24)};
    margin-left: ${rem(24)};
    float: right;
  `};
`;

export const TopHR = styled(HR)`
  margin-top: ${rem(32)};
  margin-bottom: ${rem(24)};

  ${mediaMin.xxl`
      display: none;
  `};
`;
