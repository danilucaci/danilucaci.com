import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme/theme";
import { LoadComments } from "../Button/Button";

export const Title = styled.h1`
  font-size: ${theme.font.size.display.mobile.h1};
  line-height: ${theme.font.lineHeight.display.mobile.h1};

  margin-bottom: ${rem(24)};

  ${mediaMin.s`
    font-size: ${theme.font.size.display.desktop.h2};
    line-height: ${theme.font.lineHeight.display.desktop.h2};
  `};
`;

export const ErrorMessageWrapper = styled.div`
  background-color: ${theme.colors.danger100};
  display: block;
  padding: ${rem(16)} ${rem(16)};
  border-left: ${rem(4)} solid ${theme.colors.danger600};
  margin-bottom: ${rem(32)};
`;

export const ErrorMessage = styled.p`
  color: ${theme.colors.danger600};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }
`;

export const StyledLoadMore = styled(LoadComments)`
  margin-left: auto;
  margin-right: auto;
  display: block;

  ${mediaMin.s`
    margin-top: ${rem(64)};
  `};
`;

export const LoadMoreLabel = styled.span`
  display: inline-block;
`;
