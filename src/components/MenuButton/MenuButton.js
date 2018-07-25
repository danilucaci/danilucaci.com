import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

import { Icon } from "../Icon/Icon";

const StyledMenuButton = styled.button`
  border: 2px solid ${theme.colors.main600};
  background-color: ${theme.colors.gray100};
  color: ${theme.colors.main600};

  font-family: ${theme.fonts.bodyBold};
  font-weight: 700;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};

  display: block;
  float: right;

  margin-left: auto;
  margin-right: 0;
  margin-top: ${rem(4)};
  margin-bottom: ${rem(4)};

  height: ${rem(40)};
  padding: ${rem(6)} ${rem(12)} ${rem(10)} ${rem(16)};

  ${mediaMin.s`
    display: none;
  `};
`;

const StyledIcon = Icon.extend`
  float: right;
  transition: transform 0.2s ease;

  ${(props) =>
    props.animate &&
    css`
      transform-origin: 50% 50%;
      transform: rotate(180deg);
    `};
`;

const MenuButton = (props) => {
  const showNav = props.showNav;

  return (
    <StyledMenuButton
      aria-haspopup="true"
      aria-expanded="false"
      onClick={props.onClick}
    >
      Menu
      <StyledIcon main animate={!showNav} aria-hidden="true">
        {showNav ? <use xlinkHref="#close" /> : <use xlinkHref="#hamburger" />}
      </StyledIcon>
    </StyledMenuButton>
  );
};

export default MenuButton;
