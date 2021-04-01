import styled from "styled-components";

import { theme, rem, mediaMin } from "../../theme";
import Icon from "../Icon";

export const SocialShareWrapper = styled.div`
  white-space: nowrap;
  margin-bottom: ${rem(2)};

  ${mediaMin.s`
    margin-left: ${rem(24)};
  `};
`;

export const SocialShareButton = styled.a`
  margin-right: ${rem(8)};
  display: inline-block;
  vertical-align: baseline;
  margin-right: ${rem(8)};

  &:hover {
    background-color: transparent;
  }

  & svg {
    vertical-align: middle;
  }
`;

export const StyledCopyButton = styled.button`
  border: none;
  background-color: transparent;
  display: inline-block;
  vertical-align: baseline;
  position: relative;

  &:hover,
  &:focus,
  &:active {
    & span {
      display: block;
    }
  }
`;

export const CopyIcon = styled(Icon)`
  fill: ${theme.colors.grey800};
  will-change: transform;
  transition: transform ease 0.15s;

  &:hover {
    transform: scale(${theme.iconsScale});
  }
`;

export const CopyTooltip = styled.span`
  background-color: ${theme.colors.grey00};
  border: 1px solid ${theme.colors.grey400};
  border-radius: ${theme.borderRadius.default};
  box-shadow: ${theme.shadow.dropdown};

  display: none;
  white-space: nowrap;
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};

  position: absolute;

  top: -${rem(56)};
  left: -${rem(56)};

  &:after {
    content: "";
    display: block;
    width: ${rem(14)};
    height: ${rem(14)};
    border-bottom: ${rem(8)} solid #ffffff;
    border-right: ${rem(8)} solid #ffffff;
    transform: rotate(45deg);
    position: absolute;
    top: ${rem(32)};
    left: ${rem(56)};
    box-shadow: ${theme.shadow.copyUrl};
  }

  ${mediaMin.xs`
    left: -${rem(88)};  
    
    &:after {
      left: ${rem(88)};
    }
  `};

  ${mediaMin.s`
    left: -${rem(80)};  
    
    &:after {
      left: ${rem(80)};
    }
  `};

  ${mediaMin.xxl`
    left: -${rem(56)};  
    
    &:after {
      left: ${rem(56)};
    }
  `};

  padding: ${rem(8)};
`;

export const StyledIcon = styled(Icon)`
  width: ${rem(24)};
  height: ${rem(24)};
  will-change: transform;
  transition: transform ease 0.15s;

  &:hover {
    transform: scale(${theme.iconsScale});
    background-color: transparent;
  }
`;
