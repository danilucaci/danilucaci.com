import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

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
    transform: scale(1.1);
  }

  &:checked:hover + label:before {
    background: ${theme.colors.main500};
    transform: scale(1.1);
  }

  /* Box focus */
  &:focus + label:before {
    border: 2px solid ${theme.colors.dark900};
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
    width: ${rem(7)};
    height: ${rem(13)};
    border-top: none;
    border-left: none;
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(35deg);
  }
`;
