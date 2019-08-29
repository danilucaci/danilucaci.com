import styled from "styled-components";
import { Copy } from "../Copy/Copy";
import { rem } from "../../theme/theme";

export const ArticleDate = styled(Copy)`
  display: inline-block;
`;

export const ArticleReadtime = styled(Copy)`
  display: inline-block;
`;

export const Dot = styled(Copy)`
  display: inline-block;
  margin-left: ${rem(8)};
  margin-right: ${rem(8)};
`;
