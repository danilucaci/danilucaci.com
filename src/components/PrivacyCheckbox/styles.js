import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";
import { Checkbox } from "../Checkbox/Checkbox";

export const StyledCheckboxLabel = styled.label`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  display: inline-block;
  margin-top: ${rem(12)};
  margin-bottom: ${rem(8)};
  display: inline-block;
`;

export const StyledCheckbox = styled(Checkbox)`
  display: inline-block;
  margin-right: ${rem(8)};
/* 
  &:not(:checked) {
    & ~ input {
      pointer-events: none !important;
      background-color: ${theme.colors.grey700};
      color: ${theme.colors.grey100};

      &:hover,
      &:focus {
        background-color: ${theme.colors.grey700};
        box-shadow: none;
        cursor: not-allowed;
      }
    }
  }

  &:checked {
    & ~ input {
      pointer-events: auto;
    }
  } */
`;

export const Required = styled.span`
  display: inline-block;
  margin-left: ${rem(6)};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.grey900};
`;

export const AndSpan = styled.span`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  display: inline;
`;

export const LearnMoreLink = styled.a`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  display: inline;
  margin-left: ${rem(5)};
  color: ${theme.colors.grey800} !important;

  &:hover {
    background-color: ${theme.colors.grey300} !important;
  }
`;
