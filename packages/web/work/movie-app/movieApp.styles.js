import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../src/theme";
import { Subhead } from "../../src/components/Headings/Headings";
import { Row, RowNested, RowSpacer, Col } from "../../src/components/Grid/Grid";

export const AltRowBackground = styled(RowSpacer)`
  background-color: ${theme.color.background.section.lightest};
`;

export const ProcessRow = styled(Row)``;

export const ProcessTitle = styled(Col)`
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
    margin-bottom: ${rem(32)};
  `};

  width: 100%;
`;

export const ProcessCol = styled(Col)`
  & h3 {
    background-color: ${theme.color.background.section.light};
    display: inline-block;
    border-radius: ${theme.borderRadius.default};
    padding: ${rem(4)} ${rem(8)};
    margin-top: 0;
    margin-bottom: ${rem(16)};
    margin-left: -${rem(4)};

    font-size: ${theme.font.size.display.mobile.h5};
    line-height: ${theme.font.lineHeight.display.mobile.h5};

    ${mediaMin.xs`
      font-size: ${theme.font.size.display.desktop.h5};
      line-height: ${theme.font.lineHeight.display.desktop.h5};
    `}
  }

  margin-bottom: ${rem(24)};

  & ul {
    list-style-type: none;
    margin-left: 0;
  }

  max-width: calc(50% - ${theme.layout.gutter.s});
  flex-basis: calc(50% - ${theme.layout.gutter.s});

  ${mediaMin.s`
    max-width: calc((100% / 12 * 4) - ${theme.layout.gutter.m});
    flex-basis: calc((100% / 12 * 4) - ${theme.layout.gutter.m});
  `};

  ${mediaMin.xl`
    max-width: calc(20% - ${theme.layout.gutter.m});
    flex-basis: calc(20% - ${theme.layout.gutter.m});
  `};
`;

export const ScreenshotRow = styled(RowNested)`
  ${({ center }) =>
    center &&
    css`
      ${mediaMin.xxl`
        align-items: center;
      `};
    `};
`;

export const InfoCol = styled(Col)`
  & h4 {
    margin-top: 0;

    font-size: ${theme.font.size.display.mobile.h5};
    line-height: ${theme.font.lineHeight.display.mobile.h5};

    ${mediaMin.xs`
      font-size: ${theme.font.size.display.desktop.h5};
      line-height: ${theme.font.lineHeight.display.desktop.h5};
    `}
  }
`;

export const ScreenshotCol = styled(Col)``;

export const MobileScreenshot = styled.div`
  margin-bottom: ${rem(32)};

  max-width: ${rem(288)};

  ${mediaMin.xxs`
    max-width: ${rem(360)};
  `};

  ${mediaMin.xl`
    margin-left: auto;
    margin-right: auto;
  `};

  & > figure {
    margin: 0;
  }

  & > p {
    width: 100%;
  }

  h3 {
    margin-bottom: ${rem(32)};
  }

  h4 {
    margin-top: 0;
  }
`;

export const StyledSubhead = styled(Subhead)`
  margin-bottom: ${rem(16)} !important;

  ${mediaMin.s`
    margin-bottom: ${rem(32)};
  `};

  width: 100%;
`;

export const SeparatedSubhead = styled(Subhead)`
  margin-top: ${rem(64)} !important;
  margin-bottom: ${rem(16)} !important;

  ${mediaMin.s`
    margin-bottom: ${rem(32)};
  `};

  width: 100%;
`;

export const StyledCol = styled(Col)`
  h2:first-child {
    margin-top: 0;
  }

  h3:first-child {
    margin-top: 0;
  }
`;
