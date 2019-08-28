import styled from "styled-components";

import { theme, mediaMin, rem } from "../../theme/theme";
import { Copy } from "../Copy/Copy";
import { GridCol, GridRow } from "../Grid/Grid";
import SecondaryLinkButton from "../SecondaryLinkButton/SecondaryLinkButton";
// import mobileBackground from "../../images/illustrations/contact_card_circles.svg";

export const StyledContactCard = styled.aside`
  background-color: ${theme.color.background.section.contactCard};
  /* background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center; */
`;

export const Row = styled(GridRow)`
  max-width: ${theme.layout.col8.wrapper};
`;

export const ContactCardInner = styled(GridCol)`
  padding-top: ${theme.spacing.row.s};
  padding-bottom: ${theme.spacing.row.s};

  ${mediaMin.s`
    padding-top: ${theme.spacing.row.m};
    padding-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.xxl`
    padding-top: ${theme.spacing.row.xl};
    padding-bottom: ${theme.spacing.row.xl};
  `};
`;

export const ContactCardTitle = styled.h2`
  color: ${theme.color.text.light.white};

  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    font-size: ${theme.font.size.display.desktop.h1};
    line-height: ${theme.font.lineHeight.display.desktop.h1};
  `};
`;

export const Subtitle = styled(Copy)`
  color: ${theme.color.text.light.primary};
  display: block;
  font-size: ${theme.font.size.display.mobile.subtitle};
  line-height: ${theme.font.lineHeight.display.mobile.subtitle};

  margin-bottom: ${rem(24)};

  ${mediaMin.s`
    margin-bottom: ${rem(48)};
    font-size: ${theme.font.size.display.desktop.subtitle};
    line-height: ${theme.font.lineHeight.display.desktop.subtitle};
  `};
`;

export const StyleButton = styled(SecondaryLinkButton)`
  /* width: ${rem(200)}; */

  ${mediaMin.xs`
    width: ${rem(240)};  
  `};
`;
