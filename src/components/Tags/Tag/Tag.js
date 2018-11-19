import React from "react";

import styled, { css } from "styled-components";
import { theme, mediaMin, rem } from "../../../theme/globalStyles";

import { Link } from "gatsby";

const StyledTag = styled(Link)`
  background-color: transparent;
  border-radius: ${rem(2)};
  border: 1px solid ${theme.colors.dark900};
  display: inline-block;

  text-decoration: none;

  font-size: ${theme.fontSizes.m};
  line-height: ${theme.fontSizes.m};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  margin-right: ${rem(12)};
  margin-top: ${rem(12)};
  padding: ${rem(4)} ${rem(8)};

  &:hover {
    text-decoration: underline;
  }

  &:visited,
  &:link {
    color: ${theme.colors.dark800};
  }

  &:before {
    content: "#";
  }
`;

const Tag = (props) => {
  return <StyledTag to={props.link}>{props.label}</StyledTag>;
};

export default Tag;
