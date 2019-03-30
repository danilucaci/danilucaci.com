import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

export const Wrapper = styled.section`
  max-width: ${theme.contain.blog};
  margin-left: auto;
  margin-right: auto;
`;

export const StyledH2 = styled.h2`
  margin-bottom: ${rem(16)};
`;
