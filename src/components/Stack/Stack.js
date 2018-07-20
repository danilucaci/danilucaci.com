import styled, { css } from "styled-components";
import { theme, mediaMin } from "../../theme/globalStyles";

export const Stack = styled.div`
  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m}};
    padding-right: ${theme.gutters.m}};
  `};

  min-height: ${(props) => props.height || "4rem"};

  ${(props) =>
    props.centered &&
    css`
      margin-left: auto;
      margin-right: auto;
    `};
`;
