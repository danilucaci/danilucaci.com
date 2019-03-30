import styled from "styled-components";
import Img from "gatsby-image";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

export const StyledAuthorCard = styled.footer`
  background-color: ${theme.colors.gray100};
  width: 100%;
  max-width: ${theme.contain.inner.col10};
  margin-left: auto;
  margin-right: auto;

  padding: ${rem(40)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.s`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.l`
    margin-bottom: ${theme.spacing.components.xl};
    text-align: left;
    flex-direction: row;
    padding: ${rem(64)} ${rem(48)};
  `};
`;

export const AuthorImage = styled(Img)`
  display: block;
  border-radius: 50%;
  margin-bottom: ${rem(16)};
  width: ${rem(144)};
  height: ${rem(144)};

  ${mediaMin.l`
    margin-left: auto;
    margin-right: ${rem(24)};
    margin-bottom: 0;
  `};
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaMin.l`
    padding-right: ${rem(40)};
    margin-right: auto;
  `};

  ${mediaMin.xl`
    margin-top: -${rem(8)};
    padding-right: ${rem(80)};
  `};
`;

export const AuthorDescription = styled(Copy)`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  margin-bottom: ${rem(12)};
`;
