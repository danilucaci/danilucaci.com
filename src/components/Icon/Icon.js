import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

export const Icon = styled.svg`
  fill: ${(props) => (props.main ? theme.colors.primary600 : theme.colors.grey800)};

  width: ${(props) => (props.size ? rem(props.size) : rem(24))};
  height: ${(props) => (props.size ? rem(props.size) : rem(24))};

  display: inline-block;
  vertical-align: top;
  position: static;
`;
