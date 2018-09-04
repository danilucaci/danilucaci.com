import React from "react";

import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

import { Copy, CopyBold } from "../Copy/Copy";
import ChangeLang from "../ChangeLang/ChangeLang";
import SocialNav from "../SocialNav/SocialNav";

const StyledFooter = styled.footer`
  display: block;
  text-align: center;
  background-color: ${(props) =>
    props.gray ? theme.colors.gray200 : theme.colors.gray100};
  width: 100%;
  padding: ${rem(56)} ${rem(16)};
`;

const StyledCopyright = styled(CopyBold)``;
const StyledCopy = styled(Copy)`
  margin: ${rem(8)} 0;
`;

const SiteFooter = (props) => {
  return (
    <StyledFooter gray={props.gray} role="contentinfo">
      <StyledCopyright small>
        &copy;2018 Copyright Dani Lucaci. <br /> All rights reserved.
      </StyledCopyright>
      <StyledCopy small>
        This site is built with Gatsby.js and hosted on Netlify.
      </StyledCopy>
      <SocialNav />
    </StyledFooter>
  );
};

export default SiteFooter;
