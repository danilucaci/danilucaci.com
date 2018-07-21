/* 
 * NOT BEING USED CURRENTLY
 * IF I CHANGE MY MIND SOMEDAY
 */

import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const Col = styled.div`
  display: inline-block;
  vertical-align: top;

  width: 100%;
  height: 100%;
  margin-bottom: ${rem(16)};

  background-color: ${theme.colors.main100};

  &:last-of-type {
    margin-right: 0;
  }

  ${mediaMin.s`
    margin-right: ${rem(24)};
    margin-bottom: ${rem(24)};
  `};

  ${({ xxs }) =>
    xxs &&
    `
    @media screen and (min-width: ${theme.breakpoints.xxs}) {
      width: calc((100% / ${xxs}) - ${rem(16)} + ${rem(4)});
      background-color: ${theme.colors.gray200};
    } 
  `};

  ${({ xs }) =>
    xs &&
    `
    @media screen and (min-width: ${theme.breakpoints.xs}) {
      width: calc((100% / ${xs}) - ${rem(24)} + ${rem(0)});
      background-color: ${theme.colors.gray300};
    } 
  `};

  ${({ s }) =>
    s &&
    `
    @media screen and (min-width: ${theme.breakpoints.s}) {
      width: calc((100% / ${s}) - ${rem(24)} + ${rem(0)});
      background-color: ${theme.colors.gray400};
    } 
  `};

  ${({ m }) =>
    m &&
    `
    @media screen and (min-width: ${theme.breakpoints.m}) {
      width: calc((100% / ${m}) - ${rem(24)} + ${rem(0)});
      background-color: ${theme.colors.gray500};
    } 
  `};

  ${({ l }) =>
    l &&
    `
    @media screen and (min-width: ${theme.breakpoints.l}) {
      width: calc((100% / ${l}) - ${rem(24)} + ${rem(0)});
      background-color: ${theme.colors.light300};
    } 
  `};

  ${({ xl }) =>
    xl &&
    `
    @media screen and (min-width: ${theme.breakpoints.xl}) {
      width: calc((100% / ${xl}) - ${rem(24)} + ${rem(0)});
      background-color: ${theme.colors.light400};
    } 
  `};

  ${({ xxl }) =>
    xxl &&
    `
    @media screen and (min-width: ${theme.breakpoints.xxl}) {
      width: calc((100% / ${xxl}) - ${rem(24)} + ${rem(0)});
      background-color: ${theme.colors.light500};
    } 
  `};
`;
