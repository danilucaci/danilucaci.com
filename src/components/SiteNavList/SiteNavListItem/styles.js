import styled from "styled-components";

import { theme, rem, mediaMin } from "../../../theme/globalStyles";

export const StyledSiteNavListItem = styled.li`
  display: inline-block;

  text-decoration: none;
  list-style-type: none;
  text-align: center;
  font-weight: 400;
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.size.body.s};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }

  margin-right: ${rem(24)};

  ${mediaMin.s`
    margin-right: ${rem(32)};
  `};

  & > a {
    color: ${theme.colors.grey900};

    font-weight: 400;
    font-size: ${theme.font.size.body.s};
    line-height: ${theme.font.size.body.s};
    text-decoration: none;

    .fonts-loaded & {
      font-family: ${theme.font.family.body.regular};
    }

    &:visited,
    &:link {
      color: ${theme.colors.grey900};
    }

    &:hover {
      background-color: transparent;
      color: ${theme.colors.primary600};
      cursor: pointer;
    }

    &.current-nav-item {
      color: ${theme.colors.grey900};
      font-weight: 700;

      .fonts-loaded & {
        font-family: ${theme.font.family.body.bold};
      }

      &:hover {
        background-color: transparent;
        color: ${theme.colors.primary600};
      }
    }
  }
`;
