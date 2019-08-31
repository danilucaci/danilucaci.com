import styled from "styled-components";
import { mediaMin, rem } from "../../theme/theme";

export const StyledSiteNavList = styled.ul`
  display: block;
  white-space: nowrap;

  margin-top: ${rem(8)};
  margin-left: 0;

  ${mediaMin.s`
      display: inline-block;
      margin-top: 0;
      margin-left: auto;
  `};
`;
