import styled from "styled-components";
import { theme, rem } from "../../theme/theme";

export const Icon = styled.svg`
  fill: ${theme.color.icon.default};

  width: ${(props) => (props.size ? rem(props.size) : rem(24))};
  height: ${(props) => (props.size ? rem(props.size) : rem(24))};

  display: inline-block;
  vertical-align: top;
  position: static;
`;
