import styled from "styled-components";
import { mediaMin, mediaMax, rem } from "../theme/theme";
import { Copy } from "../components/Copy/Copy";
import { Row, RowSpacer, Col } from "../components/Grid/Grid";

export const HeaderRow = styled(Row)`
  ${mediaMin.xl`
    margin-top: ${rem(40)};
    align-items: center;
  `};

  ${mediaMin.xxl`
    margin-top: ${rem(64)};
  `};
`;

export const HeaderInfoCol = styled(Col)`
  margin-top: ${rem(16)};

  ${mediaMin.xl`
    margin-top: 0;
  `};

  ${mediaMin.xxl`
    padding-left: ${rem(40)};
    padding-right: ${rem(40)};
  `};
`;

export const AboutMeTitle = styled.h1`
  margin-bottom: ${rem(16)};

  font-size: ${({ theme }) => theme.font.size.display.mobile.h2};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.h2};

  ${mediaMin.xs`
    font-size: ${({ theme }) => theme.font.size.display.desktop.h2};
    line-height: ${({ theme }) => theme.font.lineHeight.display.desktop.h2};
  `}
`;

export const AboutCopy = styled(Copy)`
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
    margin-bottom: ${rem(24)};
  `}
`;

export const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(32)};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const AltRowBackground = styled(RowSpacer)`
  background-color: ${({ theme }) => theme.color.background.section.lightest};
`;

export const MyWorkTitle = styled.h2`
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
    margin-bottom: ${rem(32)};
  `};
`;

export const SkillsTitle = styled.h2`
  margin-bottom: ${rem(16)};

  ${mediaMin.xl`
    margin-bottom: ${rem(40)};
  `};
`;

export const SkillsSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.display.mobile.h4};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.h4};

  ${mediaMin.xs`
    font-size: ${({ theme }) => theme.font.size.display.desktop.h4};
    line-height: ${({ theme }) => theme.font.lineHeight.display.desktop.h4};
  `}

  margin-bottom: ${rem(16)};
`;

export const SkilsCol = styled(Col)`
  ${mediaMax.s`
    margin-bottom: ${rem(40)};
  `};
`;
