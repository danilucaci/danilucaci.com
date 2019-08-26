import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const H4 = styled.h4``;

export const SectionHeader = styled.span`
  color: ${theme.colors.grey700};
  display: block;
  text-transform: uppercase;
  font-size: ${theme.fontSizes.sectionHeaderS};
  line-height: ${theme.lineHeights.sectionHeaderS};
  letter-spacing: ${theme.letterSpacing.sectionHeaderS};

  font-weight: 700;
  font-style: normal;

  font-family: ${theme.fonts.headerFallback};

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  ${mediaMin.s`
    font-size: ${theme.fontSizes.sectionHeaderXL};
    line-height: ${theme.lineHeights.sectionHeaderXL};
    letter-spacing: ${theme.letterSpacing.sectionHeaderXL};
  `}
`;
