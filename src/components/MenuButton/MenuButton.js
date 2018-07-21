import React from "react";

import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

import { Icon } from "../Icon/Icon";

import { CopyBold } from "../Copy/Copy";

const StyledMenuButton = styled.button`
  border: 2px solid ${theme.colors.main600};
  background-color: ${theme.colors.gray100};
  color: ${theme.colors.main600};

  display: block;
  margin-left: auto;
  margin-right: 0;
  float: right;

  height: ${rem(40)};
  padding: ${rem(8)} ${rem(12)} ${rem(8)} ${rem(16)};

  ${mediaMin.l`
    display: none;
  `};
`;

const StyledLabel = CopyBold.extend`
  color: ${theme.colors.main600};
  display: inline-block;
`;

const MenuButton = (props) => {
  return (
    <StyledMenuButton onClick={props.onClick}>
      <StyledLabel>Menu</StyledLabel>
      <Icon>
        <use xlinkHref="#down" />
      </Icon>
    </StyledMenuButton>
  );
};

export default MenuButton;
