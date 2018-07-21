import styled, { css } from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

export const Stack = styled.div`
  display: block;
  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  @media screen and (min-width: ${theme.breakpoints.s}) {
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  }

  ${(props) =>
    props.center &&
    css`
      margin-left: auto;
      margin-right: auto;
    `};

  ${(props) =>
    props.contain &&
    css`
      max-width: ${rem(`${theme.maxPageWidth}`)};
    `};

  ${"" /* min-height: ${(props) => props.example || "4rem"}; */};
`;
