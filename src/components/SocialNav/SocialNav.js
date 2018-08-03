import React from "react";

import styled, { css } from "styled-components";
import config from "../../../data/SiteConfig";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

import { Icon } from "../Icon/Icon";

const StyledSocialNav = styled.div``;

const StyledLink = styled.a`
  display: inline-block;
  vertical-align: top;
  margin-top: ${rem(8)};
  margin-right: ${rem(16)};

  &:last-of-type {
    margin-right: 0;
  }
`;

const SocialNav = () => {
  return (
    <StyledSocialNav>
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
    </StyledSocialNav>
  );
};

export default SocialNav;
