import styled from "styled-components";
import { Field } from "formik";
import { theme, rem } from "../../theme/theme";

export const Checkbox = styled(Field)`
  will-change: transform;

  /* take it out of document flow */
  position: absolute;

  /* hide it */
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  /* Box */
  & + label:before {
    content: "";
    margin-right: ${rem(8)};
    margin-bottom: ${rem(2)};
    display: inline-block;
    vertical-align: middle;
    width: ${rem(20)};
    height: ${rem(20)};
    background: ${theme.colors.grey00};
    border: ${theme.size.border.checkbox} solid
      ${theme.color.border.checkbox.enabled};
    border-radius: ${theme.borderRadius.default};
  }

  /* Box hover */
  &:hover + label:before {
    border: ${theme.size.border.checkbox} solid
      ${theme.color.border.checkbox.hover};
    transform: scale(1.1);
  }

  /* Disabled */
  &:disabled + label:before {
    border: ${theme.size.border.checkbox} solid
      ${theme.color.border.checkbox.disabled};
    background: ${theme.colors.grey00};
    transform: scale(1.1);
  }

  &:checked:hover + label:before {
    border: ${theme.size.border.checkbox} solid
      ${theme.color.border.checkbox.hoverActive};
    background: ${theme.color.background.primary.enabled};
    transform: scale(1.1);
  }

  /* Box focus */
  &:focus + label:before {
    border: ${theme.size.border.checkbox} solid
      ${theme.color.border.checkbox.focus};
    box-shadow: ${theme.shadow.checkbox.focus};
    transform: scale(1.1);
  }

  /* Box checked focus */
  &:checked:focus + label:before {
    border: ${theme.size.border.checkbox} solid
      ${theme.color.border.checkbox.focusActive};
    background: ${theme.color.background.primary.enabled};
    box-shadow: ${theme.shadow.checkbox.activeFocus};
    transform: scale(1.1);
  }

  /* Remove border from :before when checked */
  &:checked + label:before {
    border: none;
    background: ${theme.color.background.primary.enabled};
  }

  /* Box checked */
  &:checked:hover + label:after {
    transform-origin: center center;
    transform: scale(1.1) rotate(35deg);
  }

  /* Box checked */
  &:checked:focus + label:after {
    transform-origin: center center;
    transform: scale(1.1) rotate(35deg);
  }

  /* Checkmark */
  &:checked + label:after {
    content: "";
    position: absolute;
    left: ${rem(6)};
    bottom: ${rem(7)};
    background: none;
    width: ${rem(8)};
    height: ${rem(13)};
    border-top: none;
    border-left: none;
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(35deg);
  }
`;
