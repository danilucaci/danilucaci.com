import styled from "styled-components";
import { theme, rem, mediaMin } from "../theme/theme";
import { Copy } from "../components/Copy/Copy";
import LoadComments from "../components/LoadComments/LoadComments";
import { Row } from "../components/Grid/Grid";

export const PostWrapper = styled.article`
  width: 100%;
`;

export const PostH1 = styled.h1`
  margin-top: ${rem(24)};
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
    margin-top: ${rem(16)};
    margin-bottom: ${rem(24)};
  `};
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
  `};
`;

export const PostDateReadTimeWrapper = styled.div`
  display: inline-block;
  margin-right: ${rem(16)};
`;

export const SocialShareWrapper = styled.div`
  display: inline-block;
  margin-top: ${rem(12)};

  ${mediaMin.s`
    margin-top: 0;
  `};
`;

export const IntroContainer = styled.div`
  max-width: ${theme.layout.col8.inner};
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

export const PostContentRow = styled(Row)`
  & h2:first-of-type {
    margin-top: ${rem(24)};
  }

  flex-direction: column !important;
  flex-wrap: nowrap !important;

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
    background-color: white;
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
  width: 100%;

  ${mediaMin.s`
    width: ${rem(280)};
    margin-left: auto;
    margin-right: auto;
  `};
`;

export const CommentsRow = styled(Row)`
  /* Layout breaks without setting the width to 100% */
  width: 100%;
`;
