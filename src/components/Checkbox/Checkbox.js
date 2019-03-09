import styled, { keyframes } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const Checkbox = styled.input`
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
    background: ${theme.colors.gray100};
    border: 2px solid ${theme.colors.gray500};
    border-radius: ${theme.borderRadius.buttons};
  }

  /* Box hover */
  &:hover + label:before {
    border: 2px solid ${theme.colors.dark900};
    transform: scale(1.15);
  }

  /* Box focus */
  &:focus + label:before {
    border: 2px solid ${theme.colors.dark900};
    transform: scale(1.15);
  }

  /* Disabled state label. */
  &:disabled + label {
    background: ${theme.colors.gray500};
    cursor: auto;
  }

  /* Disabled box. */
  &:disabled + label:before {
    background: ${theme.colors.gray500};
    box-shadow: none;
  }

  /* Remove border from :before when checked */
  &:checked + label:before {
    border: none;
    background: ${theme.colors.main600};
  }

  /* Box checked */
  &:checked:hover + label:after {
    transform-origin: center center;
    transform: scale(1.15) rotate(35deg);
  }

  /* Checkmark */
  &:checked + label:after {
    content: "";
    position: absolute;
    left: ${rem(6)};
    bottom: ${rem(7)};
    background: none;
    width: ${rem(8)};
    height: ${rem(14)};
    border-top: none;
    border-left: none;
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(35deg);
  }
`;

const toggleCheckbox = keyframes`
  0% {
    transform: scale(1) rotate(35deg);
  }

  50% {
    transform: scale(1.5) rotate(35deg);
  }

  100% {
    transform: scale(1) rotate(35deg);
  }
`;
