import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";

export const StyledLoadingWrapper = styled.div``;

export const StyledLoadingCTA = styled.div`
  background-color: ${theme.colors.primary500};
  border: none;
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(10)} ${rem(24)};
  height: ${theme.buttonHeight.xl};
  margin-top: ${rem(16)};
  width: 100%;

  white-space: nowrap;

  ${theme.shadow.buttons.main};
`;

export const StyledErrorCTA = styled(StyledLoadingCTA)`
  background-color: ${theme.colors.grey00};
  border: ${rem(2)} solid ${theme.colors.danger600};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.danger600};

  ${theme.shadow.subscribeErrorMessage};
`;

export const StyledIcon = styled(Icon)`
  fill: ${theme.colors.buttonLight};
  margin-bottom: ${rem(1)};
  margin-left: ${rem(4)};
`;
