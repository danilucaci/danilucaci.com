import React from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../../theme/globalStyles";

import { Link } from "gatsby";

const StyledTag = styled(Link)`
  background: ${theme.colors.gray300};
  border-radius: ${rem(4)};
  color: ${theme.colors.dark800};
  display: inline-block;

  text-decoration: none;

  font-size: ${theme.fontSizes.s};
  line-height: ${rem(20)};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  margin-right: ${rem(16)};
  margin-top: ${rem(16)};
  padding: ${rem(4)} ${rem(8)};

  &:hover {
    text-decoration: underline;
  }

  &:visited,
  &:link {
    color: ${theme.colors.dark800};
  }

  &:active,
  &:focus {
    outline: 2px dashed ${theme.colors.main600};
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
