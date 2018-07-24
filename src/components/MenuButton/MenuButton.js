import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

import { Icon } from "../Icon/Icon";

import { CopyBold } from "../Copy/Copy";

const StyledMenuButton = styled.button`
  display: block;
  float: right;
  border: 2px solid ${theme.colors.main600};
  background-color: ${theme.colors.gray100};
  color: ${theme.colors.main600};

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

const StyledLabel = CopyBold.extend`
  color: ${theme.colors.main600};
  display: inline-block;
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
      <StyledLabel small>Menu</StyledLabel>

      {showNav ? (
        <StyledIcon main animate={!showNav} aria-hidden="true">
          <use xlinkHref="#close" />
        </StyledIcon>
      ) : (
        <StyledIcon main animate={!showNav} aria-hidden="true">
          <use xlinkHref="#hamburger" />
        </StyledIcon>
      )}
    </StyledMenuButton>
  );
};

export default MenuButton;
