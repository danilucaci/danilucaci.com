import React from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../../theme/globalStyles";

import { DefaultLink } from "../../Link/Link";

const StyledTag = styled(DefaultLink)`
  color: ${theme.colors.main600};
  font-family: ${theme.fonts.bodyBold};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  display: inline-block;
  margin-right: ${rem(8)};
  margin-bottom: ${rem(16)};
  padding: ${rem(4)};

  &:hover {
    text-decoration: underline;
  }

  &:before {
    content: "#";
  }
`;

const Tag = (props) => {
  return (
    <StyledTag to={props.link}>
      {props.label}
      {/* <span className="a-tag__count">({props.tagCount})</span> */}
    </StyledTag>
  );
};

export default Tag;
