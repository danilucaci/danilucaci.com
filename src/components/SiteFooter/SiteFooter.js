import React from "react";

import config from "../../../data/SiteConfig";

import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

import { Copy, CopyBold } from "../Copy/Copy";
import ChangeLang from "../ChangeLang/ChangeLang";
import SocialNav from "../SocialNav/SocialNav";
import { Stack } from "../Stack/Stack";

const StyledFooter = styled.footer`
  display: block;
  text-align: center;
  background-color: ${theme.colors.gray100};
  width: 100%;
  padding: ${rem(40)} ${rem(16)} ${rem(32)};
`;

const StyledCopyright = CopyBold.extend``;
const StyledCopy = Copy.extend`
  margin: ${rem(8)} 0;
`;

const SiteFooter = () => {
  return (
    <StyledFooter>
      <Stack centered>
        <ChangeLang />
        <SocialNav />
        <StyledCopyright s>
          &copy;2018 Copyright Dani Lucaci. <br /> All rights reserved.
        </StyledCopyright>
        <StyledCopy s>
          This site is built with GatsbyJS and hosted on Netlify.
        </StyledCopy>
      </Stack>
    </StyledFooter>
  );
};

export default SiteFooter;
