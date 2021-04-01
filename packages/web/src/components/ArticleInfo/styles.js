import styled from "styled-components";

import { Copy } from "../Copy";
import { rem, theme } from "../../theme";

export const ArticleDate = styled(Copy)`
  display: inline-block;
  font-family: ${theme.font.family.body.fallback};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }
`;

export const ArticleReadtime = styled(Copy)`
  display: inline-block;
  font-family: ${theme.font.family.body.fallback};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }
`;

export const Dot = styled(Copy)`
  display: inline-block;
  margin-left: ${rem(8)};
  margin-right: ${rem(8)};
`;
