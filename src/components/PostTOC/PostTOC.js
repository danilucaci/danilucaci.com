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

const StyledTocContentsShadow = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 95%
  );
  position: absolute;
  bottom: 0;
  height: ${rem(40)};
  z-index: 2;
  pointer-events: none;
  width: 100%;
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
      overflow-y: scroll;
      max-height: ${rem(347)};
      margin-top: ${rem(8)};
    `};

  ${mediaMin.s`
    border-top: 1px solid ${theme.colors.gray300};
    opacity: 1;
    transform: scaleY(1);
    position: static;
    overflow-x: hidden;
    overflow-y: scroll;
    max-height: ${rem(411)};
    margin-top: ${rem(8)};
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
    padding-right: ${rem(16)};
    padding-left: ${rem(16)};
  }

  ${"" /* Heading 3 */}
  & ul li ul li a {
    padding-left: ${rem(32)};
  }

  ${"" /* Heading 4 */}
  & ul li ul li ul li a {
    padding-left: ${rem(56)};
  }

  & a {
    display: block;
    
    ${"" /* 16 side padding important for separating the heading level */}
    padding: ${rem(8)} ${rem(16)};
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
      <TocContainer showContent={props.contentVisible}>
        <StyledTocContentsShadow />
        <StyledTocContentsInnerHTML
          showContent={props.contentVisible}
          dangerouslySetInnerHTML={{
            __html: props.tableOfContents,
          }}
        />
      </TocContainer>
    </StyledTOC>
  );
};

export default PostTOC;
