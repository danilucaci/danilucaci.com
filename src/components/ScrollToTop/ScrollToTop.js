import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

const StyledScrollToTop = styled.a`
  background-color: ${theme.colors.gray300};
  opacity: 0.92;
  text-decoration: none;
  position: fixed;
  bottom: ${rem(16)};
  right: ${rem(16)};
  display: block;

  ${theme.shadow.default};

  border-radius: ${theme.borderRadius.buttons};
  will-change: transform;

  &:hover {
    background-color: ${theme.colors.gray400};
    transform: scale(1.1);
    transition: transform ease 150ms;
  }
`;

const ScrollToTopIcon = styled(Icon)`
  width: ${rem(40)};
  height: ${rem(40)};
  padding: ${rem(8)};
`;

const ScrollToTop = () => {
  return (
    <StyledScrollToTop href="#main" title="Back to top">
      <ScrollToTopIcon>
        <use xlinkHref="#up" />
      </ScrollToTopIcon>
    </StyledScrollToTop>
  );
};

export default ScrollToTop;
