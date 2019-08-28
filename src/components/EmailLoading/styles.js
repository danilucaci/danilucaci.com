import styled from "styled-components";
import { theme, rem } from "../../theme/theme";
import { Icon } from "../Icon/Icon";

export const StyledLoadingWrapper = styled.div``;

export const StyledLoadingCTA = styled.div`
  background-color: ${theme.colors.primary500};
  border: none;
  border-radius: ${theme.borderRadius.default};
  color: ${theme.colors.buttonLight};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(10)} ${rem(24)};
  height: ${theme.buttonHeight.xl};
  margin-top: ${rem(16)};
  width: 100%;

  white-space: nowrap;

  ${theme.shadow.button.main};
`;

export const StyledErrorCTA = styled(StyledLoadingCTA)`
  background-color: ${theme.colors.grey00};
  border: ${rem(2)} solid ${theme.colors.danger600};
  border-radius: ${theme.borderRadius.default};
  color: ${theme.colors.danger600};

  ${theme.shadow.subscribeErrorMessage};
`;

export const StyledIcon = styled(Icon)`
  fill: ${theme.colors.buttonLight};
  margin-bottom: ${rem(1)};
  margin-left: ${rem(4)};
`;
