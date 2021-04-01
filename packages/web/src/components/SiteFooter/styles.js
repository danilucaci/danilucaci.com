import styled from "styled-components";

import { theme, rem, mediaMin } from "../../theme";
import { GreyLink } from "../Link";
import { Copy } from "../Copy";
import { Subhead } from "../Headings";
import { Col, Row, RowSpacer } from "../Grid";
import HR from "../HR";

export const FooterRowBackground = styled(RowSpacer)`
  display: block;
  background-color: ${theme.color.background.footer};
  width: 100%;
  padding-top: ${rem(40)};
  padding-bottom: ${rem(40)};

  ${mediaMin.s`
    padding-top: ${rem(64)};
  `};
`;

export const FooterInnerRow = styled(Row)`
  ${(props) =>
    props.expand &&
    `
    max-width: ${theme.layout.col12.wrapper};
  `}
`;

export const NavCol = styled(Col)`
  margin-bottom: ${rem(16)};

  ${mediaMin.l`
      margin-bottom: 0;
  `};
`;

export const SocialCol = styled(Col)`
  margin-bottom: ${rem(16)};

  ${mediaMin.l`
      margin-bottom: 0;
      margin-left: auto;
  `};
`;

export const StyledSubhead = styled(Subhead)`
  margin-bottom: ${rem(16)};

  ${mediaMin.m`  
    margin-bottom: ${rem(24)};
  `};
`;

export const Divider = styled(HR)`
  border-top: 1px solid ${theme.color.divider.onGrey};

  margin-top: ${rem(24)};
  margin-bottom: ${rem(16)};

  ${mediaMin.l`  
    margin-top: ${rem(64)};
  `};
`;

export const FooterBottom = styled.div`
  width: 100%;

  ${mediaMin.l` 
    display: flex;
    justify-content: space-between;
  `};
`;

export const LegalDocsList = styled.ul`
  margin-bottom: ${rem(16)};
  margin-left: 0;

  ${mediaMin.l`
    margin-bottom: 0;
  `};
`;

export const LegalDocsListItem = styled.li`
  display: inline-block;
  text-decoration: none;
  list-style-type: none;
`;

export const LegalDocLink = styled(GreyLink)`
  display: inline-block;
  text-decoration: none;
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};
  margin-right: ${rem(16)};
`;

export const Copyright = styled(Copy)`
  white-space: nowrap;
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s};
`;

export const LanguageCol = styled(Col)`
  margin-top: ${rem(40)};

  ${mediaMin.s`
      margin-top: 0;
  `};
`;
