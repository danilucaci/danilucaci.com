import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/theme";
import { Copy } from "../Copy/Copy";

export const StatusMessageWrapper = styled.div`
  background-color: ${theme.colors.grey00};
  border: ${rem(2)} solid ${theme.colors.primary600};
  border-radius: ${theme.borderRadius.default};
  color: ${theme.colors.primary600};

  display: block;

  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};

  padding: ${rem(16)};
  margin-top: ${rem(24)};
  white-space: pre-line;

  ${theme.shadow.subscribeSuccessMessage};

  ${mediaMin.xl`
      max-width: 84%;
  `};
`;

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
