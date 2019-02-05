import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

const StyledScrollToTop = styled.a`
  background-color: ${theme.colors.gray300};
  opacity: 0.88;
  text-decoration: none;
  position: fixed;
  bottom: ${rem(24)};
  right: ${rem(24)};
  display: block;

  ${theme.shadow.default};

  border-radius: ${rem(4)};
  will-change: transform;

  &:hover {
    background-color: ${theme.colors.gray400};
    transform: scale(1.15);
    transition: transform ease 150ms;
  }
`;

const ScrollToTopIcon = styled(Icon)`
  width: ${rem(48)};
  height: ${rem(48)};
  padding: ${rem(8)};
`;

const ScrollToTop = () => {
  return (
    <StyledScrollToTop href="#back_to_top" title="Back to top">
      <ScrollToTopIcon>
        <use xlinkHref="#up" />
      </ScrollToTopIcon>
    </StyledScrollToTop>
  );
};

export default ScrollToTop;
