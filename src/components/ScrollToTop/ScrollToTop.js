import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

const StyledScrollToTop = styled.a`
  text-decoration: none;
  position: fixed;
  bottom: ${rem(20)};
  right: ${rem(20)};
  display: block;
  background-color: ${theme.colors.scrollToTop};

  ${theme.shadow.default};

  border-radius: ${rem(4)};
  will-change: transform;

  &:hover {
    transform: scale(1.2);
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
