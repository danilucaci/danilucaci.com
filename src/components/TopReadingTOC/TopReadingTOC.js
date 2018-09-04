import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

const StyledTopTOC = styled.div`
  background-color: ${theme.colors.gray100};
  display: inline-block;
  position: relative;
  z-index: 10;

  & h3 {
    padding: ${rem(12)};
    display: inline-block !important;
    margin-top: 0;
    margin-bottom: 0 !important;

    font-size: ${theme.fontSizes.s} !important;
    line-height: ${theme.lineHeights.s} !important;
  }
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  transition: transform 0.2s ease;
  transform: rotate(0deg);
  margin-left: ${rem(4)};
  margin-bottom: ${rem(2)};

  ${(props) =>
    props.open &&
    css`
      fill: ${theme.colors.main600};
    `};
`;

const StyledTocContentsShadow = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 75%
  );
  position: absolute;
  bottom: 110%;
  height: ${rem(40)};
  z-index: 2;
  pointer-events: none;
  width: 97%;
`;

const TocContainer = styled.div`
  position: absolute;
  top: 130%;
  right: 0;
  width: 180%;

  transition: scale, max-height 0.3s ease;
  transform-origin: 100% 0;
  transform: scaleY(${(props) => (props.showContent ? 1 : 0)});
  max-height: ${(props) => (props.showContent ? "42vh" : 0)};
  pointer-events: ${(props) => (props.showContent ? "auto" : "none")};

  ${mediaMin.s`
    max-height: ${(props) => (props.showContent ? rem(341) : 0)};
  `};

  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-color: #ffffff transparent transparent #ffffff;
    border-style: solid;
    border-width: ${rem(8)};
    transform: rotate(45deg);
    position: absolute;
    top: -${rem(8)};
    right: 20%;
    z-index: 1;
  }
`;

const StyledTocContentsInnerHTML = styled.div`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.dropdown};
  display: block;
  position: absolute;
  top: 120%;
  overflow: auto;
  width: 100%;

  will-change: transform, max-height;
  transition: scale, max-height 0.15s ease;
  transform-origin: 100% 0%;
  transform: scaleY(${(props) => (props.showContent ? 1 : 0)});
  max-height: ${(props) => (props.showContent ? "50vh" : 0)};
  pointer-events: ${(props) => (props.showContent ? "auto" : "none")};
  ${theme.showScrollBars};

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
    padding-left: ${rem(64)};
  }

  & a {
    display: block;
    transition: scale 0.2s ease-in;
    transition-delay: 0.4s;
    transform-origin: 100% 0;
    transform: scaleY(${(props) => (props.showContent ? 1 : 0)});
    
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

const TopReadingTOC = (props) => {
  return (
    <StyledTopTOC onClick={props.openTopReadingToc}>
      <h3>Table of Contents</h3>
      <StyledIcon open={props.contentVisible}>
        <use xlinkHref="#toc" />
      </StyledIcon>

      <TocContainer
        className="js-topReadingTOC"
        showContent={props.contentVisible}
      >
        {/* <StyledTocContentsShadow /> */}
        <StyledTocContentsInnerHTML
          showContent={props.contentVisible}
          dangerouslySetInnerHTML={{
            __html: props.tableOfContents,
          }}
        />
      </TocContainer>
    </StyledTopTOC>
  );
};

export default TopReadingTOC;
