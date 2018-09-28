import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { theme, rem } from "../../theme/globalStyles";

const StyledScrollToTop = styled.a`
  text-decoration: none;
  position: fixed;
  bottom: ${rem(16)};
  right: ${rem(16)};
  display: block;
  background-color: ${theme.colors.gray300};
  ${theme.shadow.default};
  border-radius: ${rem(4)};

  &:hover {
    background-color: ${theme.colors.gray400};
    transform: scale(1.15);
    transition: transform ease 150ms;
  }

  &:active,
  &:focus {
    outline: 2px dashed ${theme.colors.main600};
  }
`;

const ScrollToTopIcon = styled(Icon)`
  width: ${rem(40)};
  height: ${rem(40)};
  padding: ${rem(8)};
`;

const ScrollToTop = () => {
  return (
    <StyledScrollToTop href="#scrollTop">
      <ScrollToTopIcon>
        <use xlinkHref="#up" />
      </ScrollToTopIcon>
    </StyledScrollToTop>
  );
};

export default ScrollToTop;
