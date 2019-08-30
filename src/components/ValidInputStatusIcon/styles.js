import styled from "styled-components";
import { rem } from "../../theme/theme";
import { successSVGDataURI } from "../ValidationIcons/ValidationIcons";

export const StyledValidInputStatusIcon = styled.span`
  display: block;
  ${successSVGDataURI};
  background-size: ${rem(24)};
  background-repeat: no-repeat;
  background-position: 0px 0px;
  position: absolute;
  right: ${rem(12)};
  bottom: ${rem(12)};
  width: ${rem(24)};
  height: ${rem(24)};
`;
