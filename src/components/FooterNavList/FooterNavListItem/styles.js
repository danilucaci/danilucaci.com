import styled from "styled-components";

import { theme, rem, mediaMin } from "../../../theme/theme";

export const StyledFooterListItem = styled.li`
  display: block;

  text-decoration: none;
  list-style-type: none;
  font-weight: 700;

  font-size: ${theme.font.size.display.mobile.h4};
  line-height: ${theme.font.lineHeight.display.mobile.h4};

  .fonts-loaded & {
    font-family: ${theme.font.family.display.bold};
  }

  margin-bottom: ${rem(8)};

  ${mediaMin.s`
    font-size: ${theme.font.size.display.desktop.h4};
    line-height: ${theme.font.lineHeight.display.desktop.h4};
  `};

  & > a {
    color: ${theme.color.text.default};

    font-weight: 700;
    font-size: ${theme.font.size.display.mobile.h4};
    line-height: ${theme.font.lineHeight.display.mobile.h4};
    text-decoration: none;

    .fonts-loaded & {
      font-family: ${theme.font.family.display.bold};
    }

    ${mediaMin.s`
      font-size: ${theme.font.size.display.desktop.h4};
      line-height: ${theme.font.lineHeight.display.desktop.h4};
    `};

    &:visited,
    &:link {
      color: ${theme.color.text.default};
    }

    &:hover {
      background-color: transparent;
      color: ${theme.color.text.link.primary.hover};
      cursor: pointer;
    }

    &.current-nav-item {
      color: ${theme.color.text.default};
      font-weight: 700;

      .fonts-loaded & {
        font-family: ${theme.font.family.display.bold};
      }

      &:hover {
        background-color: transparent;
        color: ${theme.color.text.link.primary.hover};
      }
    }
  }
`;
