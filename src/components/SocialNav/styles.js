import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

export const Wrapper = styled.nav`
  white-space: nowrap;
`;

export const StyledIcon = styled(Icon)`
  fill: ${(props) => (props.light ? theme.colors.light300 : null)};
  vertical-align: middle;

  width: ${rem(24)};
  height: ${rem(24)};
`;

export const StyledLink = styled.a`
  display: inline-block;
  margin-right: ${rem(16)};
  will-change: transform;
  transition: transform ease 0.15s;

  ${mediaMin.m`
    margin-right: ${rem(10)};
  `};

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background-color: transparent;
    transform: scale(${theme.iconsScale});
    cursor: pointer;
  }
`;
