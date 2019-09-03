import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/theme";
import { Copy } from "../components/Copy/Copy";
import { Col } from "../components/Grid/Grid";

export const HeaderImageWrapper = styled(Col)`
  ${mediaMin.s`
      float: left;
      width: 100%;
  `};
`;

export const ImageWrapper = styled.div`
  background: ${theme.colors.grey50};
`;

export const HeaderInfoWrapper = styled(Col)`
  ${mediaMin.s`
      float: right;
      width: 100%;
  `};
`;

export const AboutMeTitle = styled.h1`
  color: ${theme.colors.grey900};
  font-weight: 700;
  font-style: normal;
  font-family: ${theme.font.family.display.bold};
  font-size: ${theme.font.size.display.mobile.h1};

  ${mediaMin.xs`
    font-size: ${theme.font.size.display.desktop.h1};
  `}

  line-height: ${theme.font.lineHeight.display.mobile.h1};
  margin-bottom: ${rem(16)};

  ${mediaMin.xs`
    line-height: ${theme.font.lineHeight.display.desktop.h1};
  `}
  
  ${mediaMin.xxl`
    margin-top: ${rem(24)};
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

  &::after {
    content: "";
    clear: both;
    display: table;
  }

  @media screen and (min-width: ${theme.breakpoints.s}) and (max-width: 47em) {
    margin-top: ${rem(8)};
  }

  @media screen and (min-width: 10em) and (max-width: 21.25em) {
    margin-top: ${rem(8)};
  }
`;

export const DoingNowItem = styled.div`
  margin-bottom: ${rem(24)};

  ${mediaMin.xxl`
    display: inline-block;
    vertical-align: top;

    &:nth-of-type(1) {
      width: calc(45% - ${rem(24)});
      margin-right: ${rem(12)};
    }

    &:nth-of-type(2) {
      width: calc(55% - ${rem(24)});
      margin-left: ${rem(12)};
    }

    &:nth-of-type(3) {
      width: 100%;
    }
  `};

  & h4 {
    margin-bottom: ${rem(8)};
  }
`;
