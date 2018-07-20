import styled from "styled-components";
import { mediaMin } from "../../theme/globalStyles";

export const Button = styled.button`
  color: ${(props) =>
    props.primary
      ? props.theme.colors.colorMain600
      : props.theme.colors.colorDark900};
`;

// export const ButtonMain = Button.extend`
//   color: ${(props) => props.theme.colors.colorMain600};

//   ${mediaMin.s`background: dodgerblue;`};
// `;
