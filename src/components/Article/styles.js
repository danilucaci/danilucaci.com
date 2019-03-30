import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { BoldLink } from "../Link/Link";

export const StyledArticle = styled.article`
  background-color: ${theme.colors.gray100};
  padding: ${rem(12)} ${rem(16)} ${rem(24)} ${rem(16)};
  margin-bottom: ${theme.gutters.m};

  ${mediaMin.s`
    padding: ${rem(16)} ${rem(32)} ${rem(24)} ${rem(32)};
  `};

  &:hover {
    ${theme.shadow.hover};

    & h3 {
      color: ${theme.colors.main600};
    }
  }
`;

export const ContinueLink = styled(BoldLink)`
  display: block;

  padding-top: ${rem(16)};

  &:hover {
    background-color: transparent;
  }
`;

export const ArticleCopy = styled(Copy)`
  margin-top: ${rem(12)};
  margin-bottom: ${rem(16)};
`;

export const StyledH3 = styled.h3`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(12)};
`;