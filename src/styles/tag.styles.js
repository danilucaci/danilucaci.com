import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/theme";
import { GridRow } from "../components/Grid/Grid";

export const TagWrapper = styled(GridRow)`
  max-width: ${theme.layout.col8.wrapper};

  margin-bottom: ${theme.spacing.row.s};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.l`
    margin-bottom: ${theme.spacing.row.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(
      280,
    )}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;

export const TagHeader = styled.header`
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.l`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(
      280,
    )}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;

export const TagTitleWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%;

  ${mediaMin.l`
    margin-right: ${rem(12)};
    width: calc(42% - ${rem(12)});
  `};
`;

export const TagTitle = styled.span`
  color: ${theme.colors.grey900};
  display: block;

  font-weight: 700;
  font-style: normal;

  font-family: ${theme.font.family.display.bold};

  font-size: ${theme.font.size.display.mobile.h2};
  line-height: ${theme.font.lineHeight.display.mobile.h2};

  ${mediaMin.xs`
    font-size: ${theme.font.size.display.desktop.h2};
    line-height: ${theme.font.lineHeight.display.desktop.h2};
  `}
`;

export const OtherTagsWrapper = styled.div`
  margin-top: ${rem(24)};

  ${mediaMin.l`
    margin-top: 0;
    display: inline-block;
    vertical-align: top;
    margin-left: ${rem(12)};
    width: calc(58% - ${rem(12)});
  `};
`;
