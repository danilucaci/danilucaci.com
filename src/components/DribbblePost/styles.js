import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme/globalStyles";

export const StyledDribbblePost = styled.figure``;

export const PostBGImg = styled.span`
  display: block;
  width: 100%;
  padding-bottom: 75%;
  background-color: ${theme.colors.bgLight200};
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
`;

export const StyledLink = styled.a`
  color: ${theme.colors.dark700} !important;
  text-decoration: none !important;

  display: inline-block;
  vertical-align: middle;

  &:hover {
    background-color: transparent !important;
  }

  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  margin-bottom: ${rem(24)};

  &:hover {
    ${theme.shadow.hover};
    cursor: pointer;
  }

  ${mediaMin.m`
    width: calc(50% - ${rem(12)});
    margin-bottom: ${rem(32)};
  
    &:nth-of-type(1n) {
      margin-right: ${rem(12)};
      margin-left: 0;
    }
  
    &:nth-of-type(2n) {
      margin-left: ${rem(12)};
      margin-right: 0;
    } 
  `};
`;
