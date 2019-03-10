import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { theme, mediaMin, rem } from "../../../theme/globalStyles";
import LocaleLink from "../../LocaleLink/LocaleLink";

const StyledTag = styled(LocaleLink)`
  background-color: ${theme.colors.gray300};
  border-radius: ${theme.borderRadius.buttons};
  display: inline-block;

  text-decoration: none;

  font-size: ${theme.fontSizes.s};
  line-height: ${theme.fontSizes.s};

  font-family: ${theme.fonts.bodyRegular};

  margin-right: ${rem(16)};
  margin-top: ${rem(8)};
  margin-bottom: ${rem(8)};
  padding: ${rem(6)} ${rem(8)};

  &:visited,
  &:link {
    color: ${theme.colors.dark800};
  }

  &:hover {
    background-color: ${theme.colors.gray400};
    color: ${theme.colors.dark900};
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
