import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/theme";
import { Copy } from "../components/Copy/Copy";
import { Row, RowSpacer, Col } from "../components/Grid/Grid";

export const HeaderRow = styled(Row)`
  ${mediaMin.l`
    margin-top: ${rem(40)};
  `};

  ${mediaMin.xxl`
    align-items: center;
  `};
`;

export const HeaderInfoCol = styled(Col)`
  margin-top: ${rem(40)};

  ${mediaMin.s`
    margin-top: 0;
  `};

  ${mediaMin.xxl`
    padding-left: ${rem(40)};
    padding-right: ${rem(40)};
  `};
`;

export const AboutMeTitle = styled.h1`
  margin-bottom: ${rem(16)};

  font-size: ${theme.font.size.display.mobile.h2};
  line-height: ${theme.font.lineHeight.display.mobile.h2};

  ${mediaMin.xs`
    font-size: ${theme.font.size.display.desktop.h2};
    line-height: ${theme.font.lineHeight.display.desktop.h2};
  `}
`;

export const AboutCopy = styled(Copy)`
  margin-bottom: ${rem(16)};
`;

export const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(32)};

  &:last-of-type {
    margin-bottom: ${rem(20)};
  }
`;

export const ResumeWrapper = styled.div`
  display: block;
  margin-top: ${rem(16)};
  width: 100%;
`;

export const AltRowBackground = styled(RowSpacer)`
  background-color: ${theme.color.background.section.lightest};
`;

export const DoingNowTitle = styled.h2`
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
    margin-bottom: ${rem(32)};
  `};
`;

export const DoingNowSubTitle = styled.h3`
  font-size: ${theme.font.size.display.mobile.h5};
  line-height: ${theme.font.lineHeight.display.mobile.h5};

  ${mediaMin.xs`
    font-size: ${theme.font.size.display.desktop.h5};
    line-height: ${theme.font.lineHeight.display.desktop.h5};
  `}

  margin-top: ${rem(32)};
  margin-bottom: ${rem(16)};

  &:first-child {
    margin-top: ${rem(16)};
  }

  ${mediaMin.s`
    margin-top: 0;
  `};
`;

export const DoingNowProjectsRow = styled(Row)`
  margin-top: ${rem(16)};

  ${mediaMin.s`
    margin-top: ${rem(32)};
  `};
`;
