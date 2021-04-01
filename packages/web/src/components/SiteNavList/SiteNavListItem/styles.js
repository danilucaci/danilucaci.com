import styled from "styled-components";

import { theme, rem, mediaMin } from "../../../theme";

export const StyledSiteNavListItem = styled.li`
  display: inline-block;

  padding: ${rem(8)} 0;

  text-decoration: none;
  list-style-type: none;
  text-align: center;
  font-weight: 400;
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }

  margin-right: ${rem(16)};

  ${mediaMin.xxxs`
    margin-right: ${rem(24)};
  `};

  ${mediaMin.s`
    margin-right: ${rem(32)};
  `};

  & > a {
    color: ${theme.color.text.default};

    padding: ${rem(8)} 0;

    font-weight: 400;
    font-size: ${theme.font.size.body.s};
    line-height: ${theme.font.lineHeight.body.s};
    text-decoration: none;

    .fonts-loaded & {
      font-family: ${theme.font.family.body.regular};
    }

    &:visited,
    &:link {
      color: ${theme.color.text.default};
    }

    &:hover {
      background-color: transparent;
      color: ${theme.color.text.primary};
      cursor: pointer;
    }

    &.current-nav-item {
      color: ${theme.color.text.default};
      font-weight: 700;

      .fonts-loaded & {
        font-family: ${theme.font.family.body.bold};
      }

      &:hover {
        background-color: transparent;
        color: ${theme.color.text.primary};
      }
    }
  }
`;
