import styled from "styled-components";

import { theme, rem } from "../../../theme";
import LocaleLink from "../../LocaleLink";

export const StyledTag = styled(LocaleLink)`
  display: inline-block;
  color: ${theme.color.text.subdued};
  text-transform: uppercase;
  font-size: ${theme.font.size.body.subhead};
  line-height: ${theme.font.lineHeight.body.subhead};
  letter-spacing: ${theme.font.letterSpacing.body.subhead};

  font-weight: 700;
  font-style: normal;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  margin-right: ${rem(16)};
  margin-top: ${rem(4)};
  margin-bottom: ${rem(4)};

  &:before {
    content: "#";
  }

  &:visited,
  &:link {
    color: ${theme.color.text.subdued};
  }

  &:hover {
    background-color: ${theme.color.background.link.grey};
    color: ${theme.color.text.link.grey.hover};
    cursor: pointer;
  }

  &:active {
    background-color: ${theme.color.background.link.grey};
    color: ${theme.color.text.link.grey.active};
    cursor: pointer;
  }
`;
