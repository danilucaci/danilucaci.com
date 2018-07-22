import styled from "styled-components";
import { mediaMin } from "../../theme/globalStyles";

export const Button = styled.button`
  color: ${(props) =>
    props.primary
      ? props.theme.colors.colorMain600
      : props.theme.colors.colorDark900};

  &:active,
  &:focus {
    color: #0946b0;
    outline: dashed 2px #0946b0;
  }
`;
