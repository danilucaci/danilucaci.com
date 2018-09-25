import styled from "styled-components";
import { theme, mediaMin } from "../../theme/globalStyles";

export const NameHeader = styled.h3`
  color: ${theme.colors.main600};
  font-weight: 700;
  font-style: normal;
  letter-spacing: ${theme.letterSpacing.nameHeader};

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  font-size: ${theme.fontSizes.nameHeaderS};

  ${mediaMin.xs`
    font-size: ${theme.fontSizes.nameHeader};
  `}

  line-height: ${theme.lineHeights.nameHeaderS};

  ${mediaMin.xs`
    line-height: ${theme.lineHeights.nameHeader};
  `}
`;
