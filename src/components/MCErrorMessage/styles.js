import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

export const MessageTitle = styled(Copy)`
  color: ${theme.colors.grey800};
  display: block;
  font-size: ${theme.font.size.body.m};
  line-height: ${theme.font.lineHeight.body.s};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }
`;

export const APIMessageTitle = styled(Copy)`
  color: ${theme.colors.grey800};
  display: block;
  font-size: ${theme.font.size.body.m};
  line-height: ${theme.font.lineHeight.body.m};
  margin-top: ${rem(8)};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }
`;

export const StatusMessageWrapper = styled.div`
  background-color: ${theme.colors.grey00};
  border: ${rem(2)} solid ${theme.colors.grey800};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.grey800};

  display: block;

  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};

  padding: ${rem(16)};
  margin-top: ${rem(24)};
  white-space: pre-line;
  width: 100%;

  ${theme.shadow.default};
`;
