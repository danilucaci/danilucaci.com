import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

export const Copy = styled.p`
  color: ${theme.colors.dark800};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  font-weight: 400;
  font-style: normal;

  font-size: ${(props) =>
    props.small ? props.theme.fontSizes.s : props.theme.fontSizes.m};

  line-height: ${(props) =>
    props.small ? props.theme.lineHeights.s : props.theme.lineHeights.m};
`;

export const CopyBold = Copy.extend`
  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  font-weight: 700;
  font-style: normal;
`;

export const CopyItalic = Copy.extend`
  .fonts-loaded & {
    font-family: ${theme.fonts.bodyItalic};
  }

  font-weight: 400;
  font-style: italic;
`;
