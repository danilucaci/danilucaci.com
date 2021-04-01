import styled from "styled-components";

import { rem } from "../../theme";

import ExternalGreyLink from "../ExternalGreyLink";

export const StyledFooterSocialNav = styled.ul`
  white-space: nowrap;
  margin-left: 0;
`;

export const StyledFooterSocialNavItem = styled.li`
  display: block;
  text-decoration: none;
  list-style-type: none;
  margin-bottom: ${rem(8)};
`;

export const FooterNavLink = styled(ExternalGreyLink)`
  text-decoration: none !important;
`;
