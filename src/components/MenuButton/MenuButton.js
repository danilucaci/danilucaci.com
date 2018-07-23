import React from "react";

import styled from "styled-components";
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
  padding: ${rem(8)} ${rem(12)} ${rem(8)} ${rem(16)};

  ${mediaMin.m`
    margin-right: ${rem(16)};
  `};

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
`;

const MenuButton = (props) => {
  return (
    <StyledMenuButton onClick={props.onClick}>
      <StyledLabel small>Menu</StyledLabel>
      <StyledIcon main>
        <use xlinkHref="#hamburger" />
      </StyledIcon>
    </StyledMenuButton>
  );
};

export default MenuButton;
