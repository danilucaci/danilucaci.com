import styled from "styled-components";

import { theme, rem } from "../../theme/theme";
import { Copy } from "../Copy/Copy";

export const MessageTitle = styled(Copy)`
  color: ${theme.colors.primary600};
  display: block;
  font-size: ${theme.font.size.body.m};
  line-height: ${theme.font.lineHeight.body.s};
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.font.family.display.bold};
  }
`;

export const MessageSubtitle = styled(Copy)`
  color: ${theme.colors.primary600};
  display: block;
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};
`;

export const StatusMessageWrapper = styled.div`
  border: ${rem(2)} solid ${theme.colors.primary600};
  border-radius: ${theme.borderRadius.default};
  display: block;
  background-color: ${theme.colors.grey00};
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};
  color: ${theme.colors.primary600};
  padding: ${rem(16)};
  margin-top: ${rem(24)};
  ${theme.shadow.subscribeSuccessMessage};
  white-space: pre-line;
`;
