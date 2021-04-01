import styled from "styled-components";

import { mediaMin, mediaMax, rem } from "../theme";
import { Copy } from "../components/Copy";
import { Row, RowSpacer } from "../components/Grid";

export const IndexHeader = styled(Row)`
  ${mediaMin.s`
    padding-top: ${rem(16)};
  `};

  ${mediaMin.xl`
    padding-top: ${rem(72)};
  `};
`;

export const IndexTitle = styled.h1`
  margin-bottom: ${rem(16)};

  white-space: pre-line;

  font-size: ${({ theme }) => theme.font.size.display.mobile.h2};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.h2};

  ${mediaMin.m`
    font-size: ${({ theme }) => theme.font.size.display.desktop.h1};
    line-height: ${({ theme }) => theme.font.lineHeight.display.desktop.h1};
  `};
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.color.text.subdued};
  font-size: ${({ theme }) => theme.font.size.display.mobile.subtitle};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.subtitle};

  ${mediaMin.s`
    font-size: ${({ theme }) => theme.font.size.display.desktop.subtitle};
    line-height: ${({ theme }) =>
      theme.font.lineHeight.display.desktop.subtitle};
  `};

  font-family: ${({ theme }) => theme.font.family.display.fallback};
  font-weight: 400;

  .fonts-loaded & {
    font-family: ${({ theme }) => theme.font.family.body.regular};
  }

  margin-bottom: ${rem(16)};
`;

export const FindOutMore = styled.p`
  color: ${({ theme }) => theme.color.text.subdued};
  font-size: ${({ theme }) => theme.font.size.display.mobile.subtitle};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.subtitle};

  ${mediaMin.s`
    font-size: ${({ theme }) => theme.font.size.display.desktop.subtitle};
    line-height: ${({ theme }) =>
      theme.font.lineHeight.display.desktop.subtitle};
  `};

  font-family: ${({ theme }) => theme.font.family.display.fallback};
  font-weight: 400;

  .fonts-loaded & {
    font-family: ${({ theme }) => theme.font.family.body.regular};
  }
`;

export const ServicesRowBackground = styled(RowSpacer)`
  background-color: ${({ theme }) => theme.color.background.section.lightest};
`;

export const ServicesRow = styled(Row)`
  padding-top: ${rem(40)};
  padding-bottom: ${rem(40)};
`;

export const ServicesEntry = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};
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
  font-size: ${({ theme }) => theme.font.size.display.mobile.h2};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.h2};
  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    font-size: ${({ theme }) => theme.font.size.display.desktop.h2};
    line-height: ${({ theme }) => theme.font.lineHeight.display.desktop.h2};
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
