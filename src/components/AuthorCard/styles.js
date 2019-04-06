import styled from "styled-components";
import Img from "gatsby-image";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

export const StyledAuthorCard = styled.footer`
  background-color: ${theme.colors.bgLight100};
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
  width: ${rem(128)};
  height: ${rem(128)};
  margin-bottom: ${rem(16)};

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
    padding-right: ${rem(80)};
  `};
`;

export const AuthorDescription = styled(Copy)`
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};
  margin-bottom: ${rem(8)};
`;
