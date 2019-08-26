import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { DefaultLink } from "../Link/Link";

export const SiblingPostsWrapper = styled.nav`
  width: 100%;
  max-width: ${theme.contain.wrapper.col10};
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

  margin-bottom: ${theme.spacing.components.s};
  ${mediaMin.s`
    margin-bottom: ${theme.spacing.components.m};
  `};
  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-device-width: ${rem(
      280,
    )}) and (min-device-height: ${rem(480)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;

export const SiblingPostsContents = styled.div`
  display: flex;

  padding-top: ${rem(16)};
  padding-bottom: ${rem(48)};

  ${mediaMin.s`
  padding-top: ${rem(32)};
  padding-bottom: ${rem(80)};
`};
`;

export const PreviousItemsContainer = styled.div`
  margin-right: ${rem(8)};
  flex: 0 1 50%;
`;

export const PrevSectionHeader = styled(Copy)`
  margin-bottom: ${rem(12)};

  /* Breaks line if a \n character is inside the text */
  white-space: pre-line;

  ${mediaMin.s`
    white-space: normal;
    margin-bottom: ${rem(8)};
  `};

  color: ${theme.colors.grey700};
  display: block;
  text-transform: uppercase;
  font-size: ${theme.font.size.body.subhead};
  line-height: ${theme.font.lineHeight.body.subhead};
  letter-spacing: ${theme.font.letterSpacing.body.subhead};

  font-weight: 700;
  font-style: normal;

  font-family: ${theme.font.family.body.fallback};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }

  ${mediaMin.s`
    font-size: ${theme.font.size.body.subhead};
    line-height: ${theme.font.lineHeight.body.subhead};
    letter-spacing: ${theme.font.letterSpacing.body.subhead};
  `}
`;

export const PrevArticleLink = styled(DefaultLink)`
  color: ${theme.colors.grey900} !important;
  text-decoration: none;
  font-size: ${rem(16)};
  line-height: ${rem(16)};

  display: block;
  margin-right: 0;
  margin-left: auto;

  ${mediaMin.s`
  font-size: ${rem(24)};
  line-height: ${rem(24)};
`};

  .fonts-loaded & {
    font-family: ${theme.font.family.display.boldRegular};
  }
  font-weight: 400;

  &:hover {
    background-color: transparent;
    text-decoration: underline;
  }
`;

export const NextItemsContainer = styled.div`
  margin-left: ${rem(8)};
  flex: 0 1 50%;

  &:only-child {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const NextSectionHeader = styled(Copy)`
  text-align: right;
  margin-bottom: ${rem(12)};
  display: block;
  margin-right: 0;
  margin-left: auto;

  /* Breaks line if a \n character is inside the text */
  white-space: pre-line;

  ${mediaMin.s`
    white-space: normal;
    margin-bottom: ${rem(8)};
  `};

  color: ${theme.colors.grey700};
  display: block;
  text-transform: uppercase;
  font-size: ${theme.font.size.body.subhead};
  line-height: ${theme.font.lineHeight.body.subhead};
  letter-spacing: ${theme.font.letterSpacing.body.subhead};

  font-weight: 700;
  font-style: normal;

  font-family: ${theme.font.family.body.fallback};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }

  ${mediaMin.s`
    font-size: ${theme.font.size.body.subhead};
    line-height: ${theme.font.lineHeight.body.subhead};
    letter-spacing: ${theme.font.letterSpacing.body.subhead};
  `}
`;

export const NextArticleLink = styled(DefaultLink)`
  color: ${theme.colors.grey900} !important;
  display: block;

  text-align: right;
  text-decoration: none;
  font-size: ${rem(16)};
  line-height: ${rem(16)};

  margin-right: 0;
  margin-left: auto;

  font-weight: 400;

  ${mediaMin.s`
    font-size: ${rem(24)};
    line-height: ${rem(24)};
  `};

  .fonts-loaded & {
    font-family: ${theme.font.family.display.boldRegular};
  }

  &:hover {
    background-color: transparent;
    text-decoration: underline;
  }
`;
