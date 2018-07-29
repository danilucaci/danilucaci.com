import React from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../../theme/globalStyles";

import { DefaultLink } from "../../Link/Link";

const StyledTag = styled(DefaultLink)`
  color: ${theme.colors.dark900} !important;
  display: inline-block;

  text-decoration: none;

  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  font-family: ${theme.fonts.bodyBold};
  margin-right: ${rem(8)};
  margin-bottom: ${rem(8)};
  padding: ${rem(4)};

  &:hover {
    text-decoration: underline;
  }

  &:before {
    content: "#";
  }
`;

const Tag = (props) => {
  return <StyledTag to={props.link}>{props.label}</StyledTag>;
};

export default Tag;
