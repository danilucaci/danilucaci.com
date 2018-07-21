import styled from "styled-components";
import { theme, mediaMin } from "../../theme/globalStyles";

export const H1 = styled.h1`
  color: ${theme.colors.dark900};
  font-family: ${theme.fonts.header};
  font-weight: 700;
  font-style: normal;

  font-size: ${theme.fontSizes.h1s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h1};
  `}

  line-height: ${theme.lineHeights.h1s};

  ${mediaMin.m`
    line-height: ${theme.lineHeights.h1};
  `}
`;

export const H2 = styled.h2`
  color: ${theme.colors.dark900};
  font-family: ${theme.fonts.header};
  font-weight: 700;
  font-style: normal;

  font-size: ${theme.fontSizes.h2s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h2};
  `}

  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.m`
    line-height: ${theme.lineHeights.h2};
  `}
`;

export const H3 = styled.h3`
  color: ${theme.colors.dark900};
  font-family: ${theme.fonts.header};
  font-weight: 700;
  font-style: normal;

  font-size: ${theme.fontSizes.h3s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h3};
  `}

  line-height: ${theme.lineHeights.h3s};

  ${mediaMin.m`
    line-height: ${theme.lineHeights.h3};
  `}
`;

export const H4 = styled.h4`
  color: ${theme.colors.dark900};
  font-family: ${theme.fonts.header};
  font-weight: 700;
  font-style: normal;

  font-size: ${theme.fontSizes.h4s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h4};
  `};
`;
