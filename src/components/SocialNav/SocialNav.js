import React from "react";

import styled, { css } from "styled-components";
import config from "../../../data/SiteConfig";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

import { Icon } from "../Icon/Icon";

const Wrapper = styled.div``;

const StyledLink = styled.a`
  display: inline-block;
  vertical-align: top;
  margin-right: ${rem(16)};
  will-change: transform;
  transition: transform ease 0.15s;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const SocialNav = () => {
  return (
    <Wrapper>
      <StyledLink
        target="_blank"
        rel="noopener"
        href="https://github.com/danilucaci"
      >
        <Icon size="40">
          <use xlinkHref="#github" />
        </Icon>
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noopener"
        href="https://twitter.com/danilucaci"
      >
        <Icon size="40">
          <use xlinkHref="#twitter" />
        </Icon>
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noopener"
        href="https://dribbble.com/danilucaci"
      >
        <Icon size="40">
          <use xlinkHref="#dribbble" />
        </Icon>
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/danielmlucaci"
      >
        <Icon size="40">
          <use xlinkHref="#linkedin" />
        </Icon>
      </StyledLink>
    </Wrapper>
  );
};

export default SocialNav;
