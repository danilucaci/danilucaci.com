import styled from "styled-components";
import { mediaMin, rem } from "../../theme/theme";

export const StyledFooterNavList = styled.ul`
  display: block;
  white-space: nowrap;

  margin-top: ${rem(12)};
  margin-left: 0;

  ${mediaMin.s`
      display: inline-block;
      margin-top: 0;
      margin-left: auto;
  `};
`;
