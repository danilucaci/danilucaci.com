import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../../components/Copy/Copy";
import { HR } from "../../components/HR/HR";

export const ContactMeWrapper = styled.section`
  max-width: ${theme.contain.wrapper.col10};
  margin-bottom: ${rem(64)};
  margin-left: auto;
  margin-right: auto;

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

  ${mediaMin.m`
    margin-top: ${rem(24)};
    margin-bottom: ${rem(80)};
  `};
`;

export const ContactMeHeader = styled.header`
  ${mediaMin.m`
    max-width: ${rem(640)};
    margin-left: auto;
    margin-right: auto;
  `};

  ${mediaMin.xxl`
    display: inline-block;
    vertical-align: top;
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
    display: inline-block;
    vertical-align: top;
    width: 55%;
    margin-top: -${rem(24)};
    margin-left: ${rem(24)};
  `};
`;

export const TopHR = styled(HR)`
  margin-top: ${rem(32)};
  margin-bottom: ${rem(24)};

  ${mediaMin.xxl`
      display: none;
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

export const AltCopy = styled(Copy)`
  color: ${theme.colors.dark800};
`;

export const StyledLink = styled.a`
  display: inline;
  white-space: nowrap;
`;

export const SayHiWrapper = styled.div`
  margin-top: ${rem(48)};
  width: 100%;
  margin-top: ${rem(32)};

  ${mediaMin.m`
    max-width: ${rem(640)};
    margin-left: auto;
    margin-right: auto;
  `};

  ${mediaMin.xxl`
    max-width: 100%;
    margin-top: ${rem(64)};
    margin-left: 0;
    margin-right: 0;
  `};
`;

export const SayHiTitle = styled.h3`
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
  margin-top: ${rem(32)};
`;
