import styled from "styled-components";
import { theme } from "../../theme/globalStyles";

export const Copy = styled.p`
  font-weight: 400;
  font-style: normal;

  font-size: ${(props) =>
    props.small ? props.theme.font.size.body.s : props.theme.font.size.body.m};

  line-height: ${(props) =>
    props.small
      ? props.theme.font.lineHeight.body.s
      : props.theme.font.lineHeight.body.m};

  letter-spacing: ${theme.font.letterSpacing.body.subhead};
`;

export const CopyBold = styled(Copy)`
  font-family: ${theme.font.family.body.bold};
  font-weight: 700;
  font-style: normal;
`;

export const CopyItalic = styled(Copy)`
  font-family: ${theme.font.family.body.italic};
  font-weight: 400;
  font-style: italic;
`;
