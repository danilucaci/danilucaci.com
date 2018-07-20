import React from "react";
import Link from "gatsby-link";

import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

import { CopyBold } from "../Copy/Copy";
import { DefaultLink } from "../Link/Link";

const StyledSpan = styled(CopyBold.withComponent("span"))`
  color: inherit;
`;
const StyledLink = DefaultLink.extend`
  text-decoration: none;
`;

const ChangeLang = () => {
  return (
    <StyledLink to="">
      <img src="" alt="" />
      <StyledSpan>Cambiar a Español</StyledSpan>
    </StyledLink>
  );
};

export default ChangeLang;
