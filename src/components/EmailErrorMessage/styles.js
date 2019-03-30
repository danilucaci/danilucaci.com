import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

export const MessageTitle = styled(Copy)`
  color: ${theme.colors.dark800};
  display: block;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.s};
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }
`;

export const MessageSubtitle = styled(Copy)`
  color: ${theme.colors.dark800};
  display: block;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
`;

export const StatusMessageWrapper = styled.div`
  border: ${rem(2)} solid ${theme.colors.dark900};
  border-radius: ${theme.borderRadius.buttons};
  display: block;
  background-color: ${theme.colors.gray100};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.dark900};
  padding: ${rem(16)};
  margin-top: ${rem(24)};
  ${theme.shadow.default};
  white-space: pre-line;
`;
