import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

const StyledIcon = styled(Icon)`
  float: right;
  margin-top: ${rem(4)};
  transition: transform 0.2s ease;
  transform-origin: 50% 50%;
  transform: rotate(${(props) => (props.animate ? "0deg" : "180deg")});
  margin-right: ${rem(16)};

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

  max-height: ${rem(407)};
  padding: ${rem(14)} 0;
  overflow: hidden;

  ${theme.shadow.default};

  ${mediaMin.s`
    max-height: ${rem(467)};
    margin-top: ${rem(24)};
    margin-bottom: ${rem(56)};
    padding-bottom: 0;
    ${theme.shadow.subtle};
  `};

  & h3 {
    display: inline-block !important;
    margin-top: 0;
    margin-bottom: 0 !important;
    padding-left: ${rem(16)};

    ${mediaMax.s`
      font-size: ${theme.fontSizes.m} !important;
      line-height: ${theme.lineHeights.m} !important;
    `};

    ${mediaMin.s`
      padding-left: ${rem(24)};
    `};
  }
`;

const TocContainer = styled.div`
  transition: scale, 0.2s ease;
  transform-origin: 100% 0;
  transform: scaleY(${(props) => (props.showContent ? 1 : 0)});
  max-height: ${(props) => (props.showContent ? rem(347) : 0)};
  pointer-events: ${(props) => (props.showContent ? "auto" : "none")};

  ${mediaMin.s`
    transform: scaleY(1);
    max-height: ${rem(411)};
    pointer-events: auto;
  `};
`;

const StyledTocContentsInnerHTML = styled.div`
  will-change: max-height, transform, opacity, position, overflow;
  transition: all 0.2s ease;
  transform: scaleY(0);
  transform-origin: 0% 0%;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  position: absolute;

  ${(props) =>
    props.showContent &&
    css`
      border-top: 1px solid ${theme.colors.gray300};
      opacity: 1;
      transform: scaleY(1);
      position: static;
      /* iOS innertia scroll */
      overflow-y: scroll; /* has to be scroll, not auto */
      -webkit-overflow-scrolling: touch;
      max-height: ${rem(347)};
      margin-top: ${rem(8)};
    `};

  ${mediaMin.s`
    border-top: 1px solid ${theme.colors.gray300};
    opacity: 1;
    transform: scaleY(1);
    position: static;
    overflow-x: hidden;
    ${"" /* iOS innertia scroll */}
    overflow-y: scroll; /* has to be scroll, not auto */
    -webkit-overflow-scrolling: touch;
    max-height: ${rem(411)};
    margin-top: ${rem(8)};
  `};
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
  let headings = [...props.tableOfContents];

  return (
    <StyledTOC onClick={props.openPostToc}>
      <h3>Table of Contents</h3>
      <StyledIcon animate={props.contentVisible}>
        <use xlinkHref="#down" />
      </StyledIcon>
      {headings.map((heading, index) => (
        <div key={index}>{heading.value + heading.value}</div>
      ))}
    </StyledTOC>
  );
};

export default PostTOC;
