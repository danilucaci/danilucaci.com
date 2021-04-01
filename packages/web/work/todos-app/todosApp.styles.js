import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../src/theme";
import { Subhead } from "../../src/components/Headings/Headings";
import { Row, RowNested, RowSpacer, Col } from "../../src/components/Grid/Grid";

export const AltRowBackground = styled(RowSpacer)`
  background-color: ${theme.color.background.section.lightest};
`;

export const StyledCol = styled(Col)`
  h2:first-child {
    margin-top: 0;
  }

  h3:first-child {
    margin-top: 0;
  }
`;

export const StyledSubhead = styled(Subhead)`
  margin-bottom: ${rem(16)} !important;
`;

export const TechStackCol = styled(Col)`
  margin-bottom: ${rem(24)};

  & ul {
    list-style-type: none;
    margin-left: 0;
  }

  max-width: calc(50% - ${theme.layout.gutter.s});
  flex-basis: calc(50% - ${theme.layout.gutter.s});

  &:last-of-type {
    margin-bottom: 0;
  }

  ${mediaMin.s`
    max-width: calc((100% / 12 * 4) - ${theme.layout.gutter.m});
    flex-basis: calc((100% / 12 * 4) - ${theme.layout.gutter.m});
  `};

  ${mediaMin.xl`
    max-width: calc(20% - ${theme.layout.gutter.m});
    flex-basis: calc(20% - ${theme.layout.gutter.m});
  `};
`;

export const TechStackRow = styled(RowNested)`
  margin-top: ${rem(32)};

  ${mediaMin.xl`
    margin-top: ${rem(64)};
  `};
`;

export const ImageRow = styled(Row)`
  align-items: center;

  ${mediaMin.l`
    ${({ reverse }) =>
      reverse &&
      css`
        flex-direction: row-reverse;
      `};
  `};
`;

export const ImageCol = styled(Col)`
  align-items: center;
`;

export const ImageCopy = styled.div`
  & h3 {
    margin-top: 0;
    margin-bottom: ${rem(16)};
  }

  ${mediaMin.l`
    padding-right: ${rem(24)};

    ${({ reverse }) =>
      reverse &&
      css`
        padding-right: 0;
        padding-left: ${rem(24)};
      `};
  `};

  ${mediaMin.xxxl`
    padding-right: ${rem(80)};

    ${({ reverse }) =>
      reverse &&
      css`
        padding-right: 0;
        padding-left: ${rem(80)};
      `};
  `};
`;
