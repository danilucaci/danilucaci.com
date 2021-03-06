import styled from "styled-components";
import { rem } from "../../theme/theme";

export const StyledLabel = styled.label`
  & > input {
    margin-top: ${rem(8)};
  }

  & > textarea {
    margin-top: ${rem(8)};
  }
`;
