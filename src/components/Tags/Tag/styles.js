import styled from "styled-components";

import { theme, rem } from "../../../theme/globalStyles";
import LocaleLink from "../../LocaleLink/LocaleLink";

export const StyledTag = styled(LocaleLink)`
  display: inline-block;
  color: ${theme.colors.grey700};

  text-decoration: underline;

  font-size: ${theme.fontSizes.s};
  line-height: ${theme.fontSizes.s};

  margin-right: ${rem(24)};
  margin-top: ${rem(8)};
  margin-bottom: ${rem(8)};

  &:visited,
  &:link {
    color: ${theme.colors.grey700};
  }

  &:hover {
    color: ${theme.colors.grey900};
    background-color: transparent;
    cursor: pointer;
  }

  &:before {
    content: "#";
  }
`;
