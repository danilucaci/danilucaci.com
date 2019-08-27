import styled from "styled-components";
import { theme, rem } from "../../theme/theme";

export const Wrapper = styled.section`
  max-width: ${theme.layout.col8.inner};
  margin-left: auto;
  margin-right: auto;
`;

export const StyledH2 = styled.h2`
  margin-bottom: ${rem(16)};
`;
