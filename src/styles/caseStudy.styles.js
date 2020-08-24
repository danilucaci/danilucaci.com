import styled, { keyframes, css } from "styled-components";
import { rem, mediaMin } from "../theme/theme";
import { Copy } from "../components/Copy/Copy";
import { Row, RowSpacer, Col } from "../components/Grid/Grid";

export const ArticleWrapper = styled.section`
  blockquote {
    margin-bottom: ${rem(32)};

    ${mediaMin.l`
      border-left: 4px solid ${({ theme }) => theme.colors.primary600};
      margin-right: -${({ theme }) => theme.layout.gutter.m};
      margin-left: -${({ theme }) => theme.layout.gutter.m};
      padding: ${rem(8)} ${({ theme }) => theme.layout.gutter.m};
    `};
  }

  header h1,
  nav h3 {
    margin-top: 0 !important;
  }

  h2 + h3 {
    margin-top: ${rem(32)};
  }

  figure + * {
    margin-top: ${rem(32)};

    ${mediaMin.s`
      margin-top: ${rem(64)};
    `};
  }

  h2 {
    display: block;

    &:first-child {
      margin-top: 0;
    }

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  h3 {
    &:first-child {
      margin-top: 0;
    }

    display: block;
    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  h4 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};
  }

  h5 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};
  }

  p {
    margin-bottom: ${rem(32)};
  }

  p + ul {
    margin-top: ${rem(32)};
  }

  p:last-child {
    margin-bottom: 0;
  }

  /* fix for markdown nested p tags inside li tags */
  li > p + ul {
    margin-top: -${rem(32)};
  }

  li {
    margin-bottom: ${rem(4)};
  }

  ul + p {
    margin-top: ${rem(32)};
  }
`;

export const HeaderBackground = styled.header`
  background-color: ${({ theme }) => theme.color.background.section.lightest};
`;

export const PostH1 = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.display.mobile.h2};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.h2};

  ${mediaMin.xs`
    font-size: ${({ theme }) => theme.font.size.display.desktop.h1};
    line-height: ${({ theme }) => theme.font.lineHeight.display.desktop.h1};
  `}

  ${mediaMin.xl`
    margin-top: ${rem(48)};
  `}
  
  margin-bottom: ${rem(16)};
  margin-left: auto;
  margin-right: auto;
  max-width: ${rem(680)};
`;

export const CaseStudyDescription = styled(Copy)`
  text-align: center;
  color: ${({ theme }) => theme.color.text.default};
  font-size: ${({ theme }) => theme.font.size.display.mobile.subtitle};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.subtitle};

  max-width: ${rem(760)};
  margin-bottom: ${rem(0)} !important;

  font-family: ${({ theme }) => theme.font.family.display.fallback};
  font-weight: 400;

  .fonts-loaded & {
    font-family: ${({ theme }) => theme.font.family.body.regular};
  }

  ${mediaMin.s`
    font-size: ${({ theme }) => theme.font.size.display.desktop.subtitle};
    line-height: ${({ theme }) =>
      theme.font.lineHeight.display.desktop.subtitle};
  `};
`;

export const CaseStudyImgWrapper = styled.div`
  display: block;
  max-width: ${({ theme }) => theme.layout.col8.inner};
  margin-left: auto;
  margin-right: auto;

  margin-top: ${rem(24)};
`;

export const OverviewRow = styled(Row)`
  & h2 {
    color: ${({ theme }) => theme.color.text.subdued};
    display: block;

    margin-top: 0;
    margin-bottom: ${rem(16)};

    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.body.subhead};
    line-height: ${({ theme }) => theme.font.lineHeight.body.subhead};
    letter-spacing: ${({ theme }) => theme.font.letterSpacing.body.subhead};

    font-weight: 700;
    font-style: normal;
    font-family: ${({ theme }) => theme.font.family.body.fallback};

    .fonts-loaded & {
      font-family: ${({ theme }) => theme.font.family.body.bold};
    }
  }

  & p:last-child {
    margin-bottom: ${rem(16)};
  }
`;

export const OverviewInfoCol = styled(Col)`
  display: flex;
  flex-wrap: wrap;

  ${mediaMin.xl`
    margin-left: auto;
  `};
`;

export const OverviewInfoItem = styled.div`
  width: 100%;
  margin-bottom: ${rem(32)};

  & h3 {
    color: ${({ theme }) => theme.color.text.subdued};
    display: block;
    margin-top: 0;
    margin-bottom: ${rem(16)};

    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.body.subhead};
    line-height: ${({ theme }) => theme.font.lineHeight.body.subhead};
    letter-spacing: ${({ theme }) => theme.font.letterSpacing.body.subhead};

    font-weight: 700;
    font-style: normal;
    font-family: ${({ theme }) => theme.font.family.body.fallback};

    .fonts-loaded & {
      font-family: ${({ theme }) => theme.font.family.body.bold};
    }
  }

  & ul {
    list-style-type: none;
    margin-left: 0;
  }

  float: right;
  width: calc(50% - ${rem(16)});
  flex: 1 1 calc(50% - ${rem(16)});
  padding-right: ${rem(16)};

  ${mediaMin.s`
    margin-bottom: ${rem(24)};
  `};

  ${mediaMin.xxl`
    width: calc(50% - ${rem(24)});
    flex: 1 1 calc(50% - ${rem(24)});
    padding-right: ${rem(24)};
  `};
`;

export const AltRowBackground = styled(RowSpacer)`
  background-color: ${({ theme }) => theme.color.background.section.lightest};
`;

export const ProcessRow = styled(Row)``;

export const ProcessCol = styled(Col)`
  & h4 {
    background-color: ${({ theme }) => theme.color.background.section.light};
    display: inline-block;
    padding: ${rem(4)} ${rem(16)};
    margin-top: 0;
    margin-bottom: ${rem(16)};
  }

  ${mediaMin.s`
    max-width: calc(20% - ${({ theme }) => theme.layout.gutter.m});
    flex-basis: calc(20% - ${({ theme }) => theme.layout.gutter.m});
  `};
`;
