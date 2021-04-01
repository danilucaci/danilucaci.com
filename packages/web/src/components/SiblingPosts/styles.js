import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme";
import { Subhead } from "../Headings/Headings";
import { GreyLink } from "../Link/Link";

export const SiblingPostsContents = styled.div`
  display: flex;

  padding-top: ${rem(16)};
  padding-bottom: ${rem(48)};

  ${mediaMin.s`
    padding-top: ${rem(32)};
    padding-bottom: ${rem(64)};
  `};
`;

export const PreviousItemsContainer = styled.div`
  margin-right: ${rem(8)};
  flex: 0 1 50%;
`;

export const NextItemsContainer = styled.div`
  margin-left: ${rem(8)};
  flex: 0 1 50%;

  &:only-child {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const PrevSectionHeader = styled(Subhead)`
  margin-bottom: ${rem(12)};

  /* Breaks line if a \n character is inside the text */
  white-space: pre-line;

  ${mediaMin.s`
    white-space: normal;
  `};
`;

export const NextSectionHeader = styled(PrevSectionHeader)`
  text-align: right;

  display: block;
  margin-right: 0;
  margin-left: auto;
`;

export const PrevArticleLink = styled(GreyLink)`
  display: block;
  margin-right: 0;
  margin-left: auto;

  text-decoration: none;
  font-weight: 400;
  font-family: ${theme.font.family.display.fallback};
  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }

  font-size: ${theme.font.size.display.mobile.siblingArticleTitle};
  line-height: ${theme.font.lineHeight.display.mobile.siblingArticleTitle};

  ${mediaMin.s`
    font-size: ${theme.font.size.display.desktop.siblingArticleTitle};
    line-height: ${theme.font.lineHeight.display.desktop.siblingArticleTitle};
  `};

  &:hover {
    background-color: transparent;
    text-decoration: underline;
  }
`;

export const NextArticleLink = styled(PrevArticleLink)`
  text-align: right;
  margin-right: 0;
  margin-left: auto;
`;
