import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

const StyledIcon = styled(Icon)`
  float: right;
  transition: transform 0.2s ease;
  transform: rotate(0deg);
  margin-right: ${rem(16)};

  ${(props) =>
    props.animate &&
    css`
      transform-origin: 50% 50%;
      transform: rotate(180deg);
    `};

  ${mediaMin.s`
    display: none;
  `};
`;

const StyledTOC = styled.nav`
  background-color: ${theme.colors.gray100};
  display: block;
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};
  position: relative;

  max-height: ${rem(297)};
  max-height: 56vh;
  padding: ${rem(14)} 0;
  overflow: hidden;

  ${theme.shadow.default};

  ${mediaMin.s`
    margin-top: ${rem(24)};
    margin-bottom: ${rem(56)};
    box-shadow: none;
    padding: ${rem(24)};
  `};

  & h3 {
    padding-left: ${rem(16)};
    display: inline-block !important;
    margin-top: 0;
    margin-bottom: 0 !important;

    ${mediaMax.s`
      font-size: ${theme.fontSizes.m} !important;
      line-height: ${theme.lineHeights.m} !important;
    `};
  }

  & > div {
    margin-top: ${rem(8)};
  }
`;

const TocContents = styled.div`
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.1s ease-out;
  will-change: transform, opacity, position;
  transform-origin: 0% 0%;
  position: absolute;
  max-height: ${rem(243)};
  max-height: 48vh;
  overflow: hidden;

  ${(props) =>
    props.showContent &&
    css`
      opacity: 1;
      transform: none;
      position: static;
      overflow: auto;
      border-top: 1px solid ${theme.colors.gray300};
    `};

  ${mediaMin.s`
    opacity: 1;
    transform: none;
    position: static;
    overflow: auto;
  `};

  & * {
    text-align: left;
    list-style-type: none;
    font-weight: 400;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};

    ${mediaMin.m`
      font-size: ${theme.fontSizes.s};
      line-height: ${theme.lineHeights.s};
    `};

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyRegular};
    }
  }
  
  & p {
    margin-bottom: 0 !important;
  }

  ${"" /* Heading 2 */}
  & ul li a {
    margin-left: -${rem(16)};
    padding-left: ${rem(32)};
  }

  ${"" /* Heading 3 */}
  & ul li ul li a {
    padding-left: ${rem(48)};
  }

  ${"" /* Heading 4 */}
  & ul li ul li ul li a {
    padding-left: ${rem(56)};
  }

  & a {
    display: block;
    
    ${"" /* 16 side padding important for separating the heading level */}
    padding: ${rem(8)} 0 ${rem(8)} ${rem(16)};
  }

  a:active,
  a:focus {
    outline: 2px dashed ${theme.colors.main600};
  }

  a:visited,
  a:link {
    color: ${theme.colors.main600};
  }

  a:hover {
    background-color: ${theme.colors.gray300};
    color: ${theme.colors.main600};
    cursor: pointer;
  }
`;

const PostTOC = (props) => {
  return (
    <StyledTOC onClick={props.openPostToc}>
      <h3>Table of Contents</h3>
      <StyledIcon animate={props.contentVisible}>
        <use xlinkHref="#down" />
      </StyledIcon>
      <TocContents
        showContent={props.contentVisible}
        dangerouslySetInnerHTML={{
          __html: props.tableOfContents,
        }}
      />
    </StyledTOC>
  );
};

export default PostTOC;
