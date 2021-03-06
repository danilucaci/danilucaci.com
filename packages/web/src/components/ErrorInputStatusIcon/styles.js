import styled from "styled-components";
import { rem } from "../../theme/theme";
import { errorSVGDataURI } from "../ValidationIcons/ValidationIcons";

export const StyledErrorInputStatusIcon = styled.span`
  display: block;
  ${errorSVGDataURI};
  background-size: ${rem(24)};
  background-repeat: no-repeat;
  background-position: 0px 0px;
  position: absolute;
  right: ${rem(12)};
  bottom: ${rem(12)};
  width: ${rem(24)};
  height: ${rem(24)};
`;
