import styled, { css } from "styled-components";
import { theme, rem } from "../../theme/theme";
import FilteredPropsInputField from "../FilteredPropsInputField/FilteredPropsInputField";

export const StyledInput = styled(FilteredPropsInputField)`
  background-color: ${theme.color.background.input.enabled};
  border: ${theme.size.border.input} solid ${theme.color.border.input.enabled};
  border-radius: ${theme.borderRadius.default};
  color: ${theme.color.text.default};

  font-size: ${theme.font.size.input.default};
  line-height: ${theme.font.lineHeight.input.default};
  font-style: normal;
  font-weight: 400;

  width: 100%;

  padding: ${theme.spacing.input.default.vertical}
    ${theme.spacing.input.default.horizontal};

  &:focus,
  &:active {
    border: ${theme.size.border.input} solid ${theme.color.border.input.focus};
    box-shadow: ${theme.shadow.input.focus};
    outline: none;
  }

  /* Change Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: ${theme.colors.grey00};
    border: ${theme.size.border.input} solid ${theme.color.border.input.enabled};
    border-radius: ${theme.borderRadius.default};
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${theme.color.text.default};
  }

  /* When input is... */
  /*  1. NOT Empty */
  /*  2. NOT In Focus */
  &:not(:focus):not(:placeholder-shown) {
    color: ${theme.color.text.default};
  }

  /*  When input is... */
  /*  1. Default State */
  /*  2. Required */
  /*  2. Empty */
  /* Remove the red box-shadow for firefox */
  &:placeholder-shown:required {
    box-shadow: none;
  }

  &:placeholder-shown:required:focus {
    box-shadow: ${theme.shadow.input.error};
  }

  ${({ valid }) => valid
    && css`
      border: ${theme.size.border.input} solid ${theme.color.border.input.valid};

      &:focus,
      &:active {
        border: ${theme.size.border.input} solid
          ${theme.color.border.input.valid};
        box-shadow: ${theme.shadow.input.valid};
        outline: none;
      }

      /* Change Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: ${theme.size.border.input} solid
          ${theme.color.border.input.valid};
      }
    `}

  ${({ error }) => error
    && css`
      border: ${theme.size.border.input} solid ${theme.color.border.input.error};

      &:focus,
      &:active {
        border: ${theme.size.border.input} solid
          ${theme.color.border.input.error};
        box-shadow: ${theme.shadow.input.error};
        outline: none;
      }

      /* Change Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: ${theme.size.border.input} solid
          ${theme.color.border.input.error};
      }
    `}
`;
