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

  letter-spacing: ${(props) =>
    props.small ? props.theme.letterSpacing.s : props.theme.letterSpacing.m};
`;

export const CopyBold = styled(Copy)`
  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  font-weight: 700;
  font-style: normal;
`;

export const CopyItalic = styled(Copy)`
  .fonts-loaded & {
    font-family: ${theme.fonts.bodyItalic};
  }

  font-weight: 400;
  font-style: italic;
`;

export const BulletList = styled.ul`
  color: ${theme.colors.dark800};
  display: block;
  list-style-type: disc;
  list-style-position: inside;
  margin: 0;
  padding: 0;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-style: normal;

  font-size: ${(props) =>
    props.small ? props.theme.fontSizes.s : props.theme.fontSizes.m};

  line-height: ${(props) =>
    props.small ? props.theme.lineHeights.s : props.theme.lineHeights.m};

  letter-spacing: ${(props) =>
    props.small ? props.theme.letterSpacing.s : props.theme.letterSpacing.m};
`;

export const BulletListItem = styled.li``;
