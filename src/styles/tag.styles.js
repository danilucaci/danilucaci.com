import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/theme";
import { GridRow } from "../components/Grid/Grid";
import { Subhead } from "../components/Headings/Headings";

export const PageBackground = styled.div`
  background-color: ${theme.color.background.section.lightest};
`;

export const TagHeader = styled(GridRow)`
  max-width: ${theme.layout.col8.wrapper};

  padding-bottom: ${theme.spacing.row.s};

  ${mediaMin.m`
    padding-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.l`
    padding-bottom: ${theme.spacing.row.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(
      280,
    )}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    padding-bottom: ${rem(64)};
  }
`;

export const PostsBackground = styled.section`
  background-color: white;
`;

export const PostsRow = styled(GridRow)`
  max-width: ${theme.layout.col8.wrapper};
  margin-left: auto;
  margin-right: auto;

  padding-top: ${rem(24)};
  padding-bottom: ${theme.spacing.row.s};

  ${mediaMin.m`
    padding-top: ${rem(40)};
    padding-bottom: ${theme.spacing.row.m};
  `};
  ${mediaMin.l`
    padding-bottom: ${theme.spacing.row.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(
      280,
    )}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    padding-bottom: ${rem(64)};
  }
`;

export const TagFoundWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%;

  ${mediaMin.l`
    margin-right: ${rem(12)};
    width: calc(42% - ${rem(12)});
  `};
`;

export const TagFoundTitle = styled.span`
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

export const TagsSubhead = styled(Subhead)`
  margin-bottom: ${rem(8)};
`;
