import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

export const SocialShareWrapper = styled.div`
  white-space: nowrap;

  ${mediaMin.s`
    margin-left: ${rem(24)};
  `};

  & .SocialMediaShareButton {
    display: inline-block;
    margin-right: ${rem(8)};
  }
`;

export const SocialShareButton = styled.a`
  margin-right: ${rem(8)};

  &:hover {
    background-color: transparent;
  }
`;

export const StyledCopyButton = styled.button`
  border: none;
  background-color: transparent;
  display: inline-block;
  position: relative;

  &:hover {
    & span {
      display: block;
    }
  }
`;

export const CopyIcon = styled(Icon)`
  width: ${rem(32)};
  height: ${rem(32)};
  fill: ${theme.colors.dark800};
  will-change: transform;
  transition: transform ease 0.15s;

  &:hover {
    transform: scale(${theme.iconsScale});
  }
`;

export const CopyTooltip = styled.span`
  background-color: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  ${theme.shadow.dropdown};

  display: none;
  white-space: nowrap;
  font-size: ${theme.fontSizes.xs};
  line-height: ${theme.lineHeights.xs};

  position: absolute;

  top: -${rem(44)};
  left: -${rem(64)};

  &:after {
    content: "";
    display: block;
    width: ${rem(16)};
    height: ${rem(16)};
    border-bottom: ${rem(8)} solid #ffffff;
    border-right: ${rem(8)} solid #ffffff;
    transform: rotate(45deg);
    position: absolute;
    top: ${rem(24)};
    left: ${rem(68)};
  }

  padding: ${rem(8)};
`;

export const StyledIcon = styled(Icon)`
  width: ${rem(32)};
  height: ${rem(32)};
  will-change: transform;
  transition: transform ease 0.15s;

  &:hover {
    transform: scale(${theme.iconsScale});
    background-color: transparent;
  }
`;
