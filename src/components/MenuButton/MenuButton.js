import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

const StyledMenuButton = styled.button`
  border: 2px solid ${theme.colors.dark900};
  border-radius: ${theme.borderRadius.buttons};
  background-color: ${theme.colors.gray100};
  color: ${theme.colors.dark900};

  font-family: ${theme.fonts.bodyRegular};

  font-weight: 700;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};

  display: block;
  float: right;

  margin-left: auto;
  margin-right: 0;
  margin-top: ${rem(8)};

  height: ${rem(40)};
  padding: ${rem(6)} ${rem(12)} ${rem(10)} ${rem(12)};

  ${mediaMin.s`
    display: none;
  `};
`;

const StyledIcon = styled(Icon)`
  fill: ${theme.colors.dark900};
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

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  showNav: PropTypes.bool.isRequired,
};

export default MenuButton;
