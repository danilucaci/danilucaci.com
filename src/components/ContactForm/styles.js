import styled from "styled-components";
import { Form } from "formik";

import { rem, mediaMin } from "../../theme/theme";
import Label from "../Label/Label";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

export const FormContainer = styled.div`
  ${mediaMin.xl`
    margin-top: ${rem(32)};
  `};
`;

export const StyledForm = styled(Form)`
  width: 100%;
`;

export const StyledLabel = styled(Label)`
  display: block;
  margin-top: ${rem(16)};
  position: relative;

  &:first-of-type {
    margin-top: 0;
  }

  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

export const InputStatusIcon = styled.span`
  display: none;
  position: absolute;
  right: ${rem(12)};
  top: ${rem(48)};
  width: ${rem(24)};
  height: ${rem(24)};
`;

export const InputTextAreaStatusIcon = styled.span`
  display: block;
  position: absolute;
  right: ${rem(12)};
  top: ${rem(44)};
  width: ${rem(24)};
  height: ${rem(24)};
`;

export const StyledInput = styled(Input)`
  display: block;
  margin-top: ${rem(8)};
`;

export const StyledTextArea = styled(TextArea)`
  display: block;
  margin-top: ${rem(8)};
`;
