import styled from "styled-components";

import { theme } from "../../theme/theme";

export const StyledDribbblePost = styled.figure``;

export const PostBGImg = styled.span`
  display: block;
  width: 100%;
  padding-bottom: 75%;
  background-color: ${theme.colors.grey50};
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
  color: ${theme.colors.grey700} !important;
  text-decoration: none !important;

  display: inline-block;
  vertical-align: middle;

  &:hover {
    background-color: transparent !important;
  }

  position: relative;
  overflow: hidden;
  height: auto;
  width: 100%;

  &:hover {
    ${theme.shadow.hover};
    cursor: pointer;
  }
`;
