import React from "react";
import { NavLink } from "../../Link/Link";

import styled from "styled-components";
import { theme, rem, mediaMin } from "../../../theme/globalStyles";

const StyledSiteNavItem = styled.li`
  background-color: ${theme.colors.gray100};
  color: ${theme.colors.main600};
  font-family: ${theme.fonts.header};
  font-size: ${rem(32)};
  line-height: ${rem(32)};
  text-decoration: none;
  list-style-type: none;
  text-align: center;
  padding: ${rem(16)};

  ${mediaMin.s`
    display: inline-block;
    color: ${theme.colors.dark800};
    font-family: ${theme.fonts.bodyRegular};
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.fontSizes.m};
  `};
`;

const SiteNavItem = (props) => {
  return (
    <StyledSiteNavItem>
      <NavLink to={props.to}>{props.label}</NavLink>
    </StyledSiteNavItem>
  );
};

export default SiteNavItem;
