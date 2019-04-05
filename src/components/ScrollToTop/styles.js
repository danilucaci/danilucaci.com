import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const StyledScrollToTop = styled.a`
  background-color: ${theme.colors.grey300};
  opacity: 0.92;
  text-decoration: none;
  position: fixed;
  bottom: ${rem(16)};
  right: ${rem(16)};
  display: block;

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      right: max(${rem(16)}, env(safe-area-inset-right));
      bottom: max(${rem(16)}, env(safe-area-inset-bottom));
    }
  }

  ${theme.shadow.default};

  border-radius: ${theme.borderRadius.buttons};
  will-change: transform;

  &:hover {
    background-color: ${theme.colors.grey400};
    transform: scale(1.1);
    transition: transform ease 150ms;
  }
`;

export const ScrollToTopIcon = styled(Icon)`
  width: ${rem(48)};
  height: ${rem(48)};
  padding: ${rem(8)};

  ${mediaMin.s`
    width: ${rem(40)};
    height: ${rem(40)};
  `};
`;
