import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { theme, mediaMin, rem } from "../../../theme/globalStyles";
import LocaleLink from "../../LocaleLink/LocaleLink";

const StyledTag = styled(LocaleLink)`
  background-color: transparent;
  border-radius: ${rem(4)};
  border: 1px solid ${theme.colors.grey500};
  display: inline-block;

  text-decoration: none;

  font-size: ${theme.fontSizes.s};
  line-height: ${theme.fontSizes.s};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  margin-right: ${rem(16)};
  margin-top: ${rem(12)};
  padding: ${rem(6)} ${rem(10)};

  &:visited,
  &:link {
    color: ${theme.colors.dark800};
  }

  &:hover {
    text-decoration: underline;
  }

  &:before {
    content: "#";
  }
`;

const Tag = (props) => <StyledTag to={props.link}>{props.label}</StyledTag>;

Tag.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Tag;
