import styled from "styled-components";
import { theme, mediaMin, mediaMax, rem } from "../theme/theme";
import { Copy } from "../components/Copy/Copy";
import { GridRow, GridRowSpacer } from "../components/Grid/Grid";

export const IndexHeader = styled(GridRow)`
  ${mediaMin.s`
    padding-top: ${rem(16)};
  `};

  ${mediaMin.xl`
    padding-top: ${rem(56)};
  `};
`;

export const Name = styled(Copy)`
  font-size: ${rem(18)};
  line-height: ${rem(32)};
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  ${mediaMin.s`
    font-size: ${rem(20)};
    line-height: ${rem(32)};
  `};
`;

export const IndexTitle = styled.h1`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};

  font-size: ${theme.font.size.display.mobile.h2};
  line-height: ${theme.font.lineHeight.display.mobile.h2};

  /* Breaks line if a \n character is inside the text */
  white-space: pre-line;

  ${mediaMin.m`
    font-size: ${theme.font.size.display.desktop.h1};
    line-height: ${theme.font.lineHeight.display.desktop.h1};
  `};
`;

export const Subtitle = styled.p`
  color: ${theme.color.text.subdued};
  font-size: ${theme.font.size.display.mobile.subtitle};
  line-height: ${theme.font.lineHeight.display.mobile.subtitle};

  margin-bottom: ${rem(16)};

  font-family: ${theme.font.family.display.fallback};
  font-weight: 300;

  .fonts-loaded & {
    font-family: ${theme.font.family.display.regular};
  }

  ${mediaMin.s`
    font-size: ${theme.font.size.display.desktop.subtitle};
    line-height: ${theme.font.lineHeight.display.desktop.subtitle};
  `};
`;

export const FindOutMore = styled.p`
  color: ${theme.color.text.subdued};
`;

export const ServicesRowBackground = styled(GridRowSpacer)`
  background-color: ${theme.color.background.section.lightest};
`;

export const ServicesRow = styled(GridRow)`
  padding-top: ${rem(40)};
  padding-bottom: ${rem(40)};
`;

export const ServicesEntry = styled.div`
  border-top: 1px solid ${theme.colors.grey300};
  display: block;

  padding-top: ${rem(40)};
  padding-bottom: ${rem(40)};

  ${mediaMin.m`  
    display: flex;
  `};

  ${mediaMin.xl`
    padding: ${rem(48)} ${rem(64)} ${rem(64)} ${rem(24)};
  `};

  &:last-of-type {
    padding-bottom: 0;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: ${theme.font.size.display.mobile.h2};
  line-height: ${theme.font.lineHeight.display.mobile.h2};
  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    font-size: ${theme.font.size.display.desktop.h2};
    line-height: ${theme.font.lineHeight.display.desktop.h2};
  `};
`;

export const ServiceTitle = styled.h3`
  margin-bottom: ${rem(8)};
`;

export const ServiceCopy = styled(Copy)`
  margin-bottom: ${rem(16)};
`;

export const ServiceImage = styled.picture`
  width: ${rem(132)};
  height: ${rem(132)};

  ${mediaMax.m`
    margin-left: -${rem(8)};
    margin-bottom: ${rem(32)};
  `};

  ${mediaMin.m`
    margin-top: -${rem(4)};
    flex: 1 0 auto;
    margin-right: ${rem(64)};
  `};
`;

export const ServiceContent = styled.div`
  ${mediaMin.m`
    flex: 4 1 auto;
  `};
`;
