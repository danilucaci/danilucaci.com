import styled from "styled-components";
import { Field } from "formik";

import { theme, rem } from "../../theme/globalStyles";

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
    margin-right: ${rem(4)};
    margin-bottom: ${rem(2)};
    display: inline-block;
    vertical-align: middle;
    width: ${rem(20)};
    height: ${rem(20)};
    background: ${theme.colors.grey100};
    border: 2px solid ${theme.colors.grey400};
    border-radius: ${theme.borderRadius.buttons};
  }

  /* Box hover */
  &:hover + label:before {
    border: 2px solid ${theme.colors.dark900};
    transform: scale(1.1);
  }

  &:checked:hover + label:before {
    background: ${theme.colors.main500};
    transform: scale(1.1);
  }

  /* Box focus */
  &:focus + label:before {
    border: 2px solid ${theme.colors.dark900};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }

  /* Box checked */
  &:checked:focus + label:before {
    background: ${theme.colors.main500};
    transform: scale(1.1);
  }

  /* Remove border from :before when checked */
  &:checked + label:before {
    border: none;
    background: ${theme.colors.main600};
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
