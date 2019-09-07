import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/theme";
import { Row, Col } from "../Grid/Grid";

export const SiteHeaderBackground = styled.header`
  padding-bottom: ${theme.spacing.main.top};

  ${({ colorHeader }) =>
    colorHeader &&
    `
      background-color: ${theme.color.background.section.lightest};
    `}
`;

export const SiteHeaderRow = styled(Row)`
  ${({ expand }) =>
    expand &&
    `
      max-width: ${theme.layout.col12.wrapper};
    `}
`;

export const StyledSiteNav = styled(Col)`
  position: relative;

  padding: ${rem(16)} 0 ${rem(8)} 0;

  ${mediaMin.s`
    padding: ${rem(8)} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`;
