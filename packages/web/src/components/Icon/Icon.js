import styled from "styled-components";
import { theme, rem } from "../../theme";

const Icon = styled.svg`
  fill: ${theme.color.icon.default};

  width: ${(props) => (props.size ? rem(props.size) : rem(24))};
  height: ${(props) => (props.size ? rem(props.size) : rem(24))};

  display: inline-block;
  vertical-align: top;
  position: static;
`;

export default Icon;
