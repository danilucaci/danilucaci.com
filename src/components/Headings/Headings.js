import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const H4 = styled.h4``;

export const SectionHeader = styled.h4`
  color: ${theme.colors.dark700};
  text-transform: uppercase;
  font-size: ${theme.fontSizes.sectionHeaderS};
  line-height: ${theme.lineHeights.sectionHeaderS};
  letter-spacing: ${theme.letterSpacing.sectionHeaderS};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.sectionHeaderXL};
    line-height: ${theme.lineHeights.sectionHeaderXL};
    letter-spacing: ${theme.letterSpacing.sectionHeaderXL};
  `}
`;
