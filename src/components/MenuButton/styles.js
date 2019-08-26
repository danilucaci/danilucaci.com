import styled, { css } from "styled-components";
import { Icon } from "../Icon/Icon";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const StyledMenuButton = styled.button`
  border: 2px solid ${theme.colors.grey900};
  border-radius: ${theme.borderRadius.buttons};
  background-color: ${theme.colors.grey00};
  color: ${theme.colors.grey900};

  font-weight: 700;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};

  display: block;
  float: right;

  margin-left: auto;
  margin-right: 0;
  margin-top: ${rem(8)};

  height: ${rem(40)};
  padding: ${rem(6)} ${rem(10)} ${rem(10)} ${rem(12)};

  ${mediaMin.nav`
    display: none;
  `};
`;

export const StyledIcon = styled(Icon)`
  fill: ${theme.colors.grey900};
  transition: transform 0.2s ease;
  margin-bottom: ${rem(2)};
  margin-left: ${rem(4)};
  width: ${rem(18)};
  height: ${rem(18)};
  vertical-align: middle;
  ${(props) =>
    props.animate &&
    css`
      transform-origin: 50% 50%;
      transform: rotate(180deg);
    `};
`;
