import React from "react";
import styled, { css } from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

export const Icon = styled.svg`
  fill: ${(props) =>
    props.main ? theme.colors.main600 : theme.colors.dark800};

  width: ${(props) => (props.size ? rem(props.size) : rem(24))};
  height: ${(props) => (props.size ? rem(props.size) : rem(24))};

  display: inline-block;
  vertical-align: middle;
  position: static;
`;
