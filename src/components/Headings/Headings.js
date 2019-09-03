import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/theme";

export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const H4 = styled.h4``;

export const Subhead = styled.h4`
  color: ${theme.color.text.subdued};
  display: block;
  text-transform: uppercase;
  font-size: ${theme.font.size.body.subhead};
  line-height: ${theme.font.lineHeight.body.subhead};
  letter-spacing: ${theme.font.letterSpacing.body.subhead};

  font-weight: 700;
  font-style: normal;
  font-family: ${theme.font.family.body.fallback};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }
`;
