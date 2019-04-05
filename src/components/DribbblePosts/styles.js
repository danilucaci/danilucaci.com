import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { LoadComments } from "../Button/Button";

export const DribbblePostsWrapper = styled.div`
  max-width: ${theme.contain.inner.col10};
  margin-left: auto;
  margin-right: auto;
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
    font-family: ${theme.fonts.bodyRegular};
  }
`;

export const StyledLoadMore = styled(LoadComments)`
  margin: ${rem(16)} auto;
  display: block;

  ${mediaMin.s`
    margin-top: ${rem(56)};
  `};
`;

export const LoadMoreLabel = styled.span`
  display: inline-block;
`;
