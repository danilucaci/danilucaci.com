import styled from "styled-components";
import { rem, mediaMin } from "../theme/theme";
import { Copy } from "../components/Copy/Copy";
import LoadComments from "../components/LoadComments/LoadComments";
import { Row } from "../components/Grid/Grid";

export const PostWrapper = styled.article`
  width: 100%;
`;

export const PostH1 = styled.h1`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
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
  max-width: ${({ theme }) => theme.layout.col8.inner};
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
  & figure {
    margin-bottom: ${rem(32)};
  }

  flex-direction: column !important;
  flex-wrap: nowrap !important;

  header h1,
  nav h3 {
    margin-top: 0 !important;
  }

  figure + * {
    margin-top: ${rem(32)};

    ${mediaMin.s`
      margin-top: ${rem(64)};
    `};
  }

  h2 {
    display: block;

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  h3 {
    &:first-child {
      margin-top: 0;
    }

    display: block;
    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  h4 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};
  }

  h5 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};
  }

  p,
  ul,
  ol {
    margin-bottom: ${rem(32)};
  }

  .js-codeCopy {
    display: none;
    white-space: nowrap;
    position: absolute;
    top: ${rem(8)};
    right: ${rem(12)};

    ${mediaMin.s`
      top: ${rem(16)};
      right: ${rem(16)};
    `};

    background-color: ${({ theme }) => theme.color.background.outlined.enabled};
    border: ${({ theme }) => theme.size.border.button.default}
      ${({ theme }) => theme.color.border.outlined.enabled} solid;
    border-radius: ${({ theme }) => theme.borderRadius.button};
    color: ${({ theme }) =>
      theme.color.text.button.outlined.enabled} !important;

    text-align: center;
    font-size: ${({ theme }) => theme.font.size.button.default};
    line-height: ${({ theme }) => theme.font.lineHeight.button.default};
    font-style: normal;
    font-weight: 700;

    .fonts-loaded & {
      font-family: ${({ theme }) => theme.font.family.body.bold};
    }

    padding: ${({ theme }) => theme.spacing.button.s.vertical}
      ${({ theme }) => theme.spacing.button.s.horizontal};
    height: ${({ theme }) => theme.size.button.height.s};

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.background.outlined.hover};
      border: ${({ theme }) => theme.size.border.button.default}
        ${({ theme }) => theme.color.border.outlined.hover} solid;
      box-shadow: ${({ theme }) => theme.shadow.button.outlined.hover};
    }

    &:focus {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.background.outlined.focus};
      box-shadow: ${({ theme }) => theme.shadow.button.outlined.focus};
      border: ${({ theme }) => theme.size.border.button.focus}
        ${({ theme }) => theme.color.border.outlined.focus} solid;
      outline: none;
    }

    &:active {
      cursor: pointer;
      background-color: ${({ theme }) =>
        theme.color.background.outlined.active};
      border: ${({ theme }) => theme.size.border.button.default}
        ${({ theme }) => theme.color.border.outlined.active} solid;
      outline: none;
      box-shadow: none;
    }

    &:disabled {
      color: ${({ theme }) =>
        theme.color.text.button.outlined.disabled} !important;
      cursor: pointer;
      background-color: ${({ theme }) =>
        theme.color.background.disabled.default};
      border: ${({ theme }) => theme.size.border.button.default}
        ${({ theme }) => theme.color.border.outlined.disabled} solid;
      outline: none;
      box-shadow: none;

      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    }
  }

  .gatsby-highlight {
    position: relative;

    &:hover .js-codeCopy {
      display: block;
    }
  }

  & .toc {
    background-color: ${({ theme }) => theme.colors.grey50};
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
      color: ${({ theme }) => theme.colors.grey900};
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      padding: ${rem(8)} 0;

      font-family: ${({ theme }) => theme.font.family.body.regular};

      &:visited,
      &:link {
        color: ${({ theme }) => theme.colors.grey900};
      }

      &:hover {
        cursor: pointer;
        background-color: transparent;
        text-decoration: underline;
      }
    }
  }
`;

export const TextareaClipboard = styled.textarea`
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
