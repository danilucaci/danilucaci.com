import styled from "styled-components";
import { Link } from "gatsby";
import { theme, mediaMin, rem } from "../../theme/theme";

export const StyledArticle = styled.article`
  padding-top: ${rem(24)};
  padding-bottom: ${rem(24)};
  margin-bottom: ${theme.layout.gutter.m};

  ${mediaMin.m`
    padding-top: ${rem(40)};
    padding-bottom: ${rem(40)};
  `};

  &:hover {
    & h3 {
      color: ${theme.colors.primary600};
    }
  }
`;

export const ArticleLink = styled(Link)`
  color: ${theme.color.text.link.grey.enabled};
  text-decoration: none;
  font-style: normal;
  font-weight: 700;

  font-size: ${theme.font.size.display.mobile.articleTitle};
  line-height: ${theme.font.lineHeight.display.mobile.articleTitle};

  ${mediaMin.s`
    font-size: ${theme.font.size.display.desktop.articleTitle};
    line-height: ${theme.font.lineHeight.display.desktop.articleTitle};
  `};

  font-family: ${theme.font.family.display.fallback};

  .fonts-loaded & {
    font-family: ${theme.font.family.display.bold};
  }

  &:visited,
  &:link {
    color: ${theme.color.text.link.grey.enabled};
  }

  &:hover {
    background-color: transparent;
    color: ${theme.color.text.link.primary.enabled};
    cursor: pointer;
  }

  &:active {
    background-color: transparent;
    color: ${theme.color.text.link.primary.active};
    cursor: pointer;
  }
`;

export const ArticleTitle = styled.h3`
  margin-top: ${rem(12)};
  margin-bottom: ${rem(16)};
`;
