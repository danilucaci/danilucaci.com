import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const H4 = styled.h4``;

export const SectionHeader = styled.h4`
  color: ${theme.colors.dark700};
  font-size: ${theme.fontSizes.sectionHeader};
  line-height: ${theme.lineHeights.sectionHeader};
  letter-spacing: ${theme.letterSpacing.sectionHeader};
  text-transform: uppercase;
`;
