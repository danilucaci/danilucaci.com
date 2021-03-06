import styled from "styled-components";

import { rem, mediaMin } from "../../theme";
import Label from "../Label";

export const FormContainer = styled.div`
  ${mediaMin.xl`
    margin-top: ${rem(32)};
  `};
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledLabel = styled(Label)`
  display: block;
  margin-top: ${rem(24)};
  position: relative;

  &:first-of-type {
    margin-top: 0;
  }

  &:focus {
    box-shadow: none;
    outline: none;
  }
`;
