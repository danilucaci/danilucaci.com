import styled from "styled-components";
import { theme, rem, mediaMin } from "../theme/theme";
import { Copy } from "../components/Copy/Copy";
import { LoadComments } from "../components/Button/Button";
import { Icon } from "../components/Icon/Icon";
import { GridRow } from "../components/Grid/Grid";

export const PostWrapper = styled.article`
  width: 100%;
`;

export const StyledPageHeader = styled(GridRow)`
  max-width: ${theme.layout.col8.wrapper};
`;

export const PostH1 = styled.h1`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(16)};
`;

export const PostInfo = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: ${rem(12)} 0;

  ${mediaMin.s`
    align-items: center;
    flex-direction: row;
    padding: ${rem(8)} 0;
  `};
`;

export const PostDateReadTimeWrapper = styled.div`
  display: inline-block;
  margin-right: ${rem(16)};
`;

export const SocialShareWrapper = styled.div`
  display: inline-block;
`;

export const StyledIntroContainer = styled.div`
  max-width: ${theme.layout.col6.inner};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(32)};
  margin-bottom: ${rem(16)};
`;

export const IntroCopy = styled(Copy)`
  margin-bottom: ${rem(32)};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const PostContent = styled(GridRow)`
  & h2:first-of-type {
    margin-top: ${rem(24)};
  }

  flex-direction: column !important;
  flex-wrap: nowrap !important;

  max-width: ${theme.layout.col6.wrapper};
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.xl`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(
      280,
    )}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }

  header h1,
  nav h3 {
    margin-top: 0 !important;
  }

  h2 {
    display: block;
    margin-top: ${rem(64)};
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-bottom: ${rem(32)};
    `};
  }

  h3 {
    display: block;
    margin-top: ${rem(64)};
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-bottom: ${rem(32)};
    `};
  }

  h4 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-top: ${rem(64)};
      margin-bottom: ${rem(32)};
    `};
  }

  p,
  ul,
  ol {
    margin-bottom: ${rem(32)};
  }

  .js-codeCopy {
    background-color: ${theme.colors.grey00};
    display: none;
    white-space: nowrap;
    font-size: ${theme.font.size.body.s};
    line-height: ${theme.font.lineHeight.body.s};

    font-family: ${theme.font.family.body.regular};

    position: absolute;
    top: ${rem(12)};
    right: ${rem(12)};
    padding: ${rem(8)} ${rem(16)};
  }

  .gatsby-highlight {
    position: relative;

    &:hover .js-codeCopy {
      display: block;
    }
  }

  & .toc {
    background-color: ${theme.colors.grey50};
    padding: ${rem(32)} ${rem(16)};

    margin-bottom: ${rem(64)};

    & p {
      margin-bottom: 0;
    }

    & ul {
      margin-bottom: 0;
      list-style-type: none;
      margin-left: 0;
    }

    & h3 {
      margin-top: 0;
      margin-bottom: ${rem(8)};
    }

    margin-left: -${rem(16)};
    margin-right: -${rem(16)};

    ${mediaMin.m`
      margin-left: -${rem(24)};

      padding-left: ${rem(24)};
      padding-right: ${rem(24)};
    `};

    ${mediaMin.l`
      margin-left: -${rem(32)};
      margin-right: -${rem(32)};
      padding-left: ${rem(32)};
      padding-right: ${rem(32)};
    `};

    & ul a {
      display: block;
      color: ${theme.colors.grey900};
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      padding: ${rem(8)} 0;

      font-family: ${theme.font.family.body.regular};

      &:visited,
      &:link {
        color: ${theme.colors.grey900};
      }

      &:hover {
        cursor: pointer;
        background-color: transparent;
        text-decoration: underline;
      }
    }
  }
`;

export const DummyInput = styled.textarea`
  position: absolute;
  top: -1000em;
  left: -1000em;
  background-color: transparent;
  color: transparent;
`;

export const StyledLoadComments = styled(LoadComments)`
  margin: ${rem(32)} auto;
  display: block;
`;

export const LoadCommentsIcon = styled(Icon)`
  vertical-align: middle;
  margin-top: -${rem(3)};
  margin-right: ${rem(4)};
  fill: ${theme.colors.grey500};
`;

export const LoadCommentsLabel = styled.span`
  display: inline-block;
`;

export const CommentsWrapper = styled.aside`
  width: 100%;
  max-width: ${theme.layout.col10.wrapper};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${theme.spacing.components.s};

  padding-right: ${theme.layout.gutter.s};
  padding-left: ${theme.layout.gutter.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.layout.gutter.s}, env(safe-area-inset-left));
      padding-right: max(${theme.layout.gutter.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.layout.gutter.m};
    padding-left: ${theme.layout.gutter.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.layout.gutter.m}, env(safe-area-inset-left));
        padding-right: max(${theme.layout.gutter.m}, env(safe-area-inset-right));
      }
    }

    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(
      280,
    )}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;
