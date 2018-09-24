import React from "react";
import Link from "gatsby-link";

import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

import { CopyBold } from "../Copy/Copy";
import { DefaultLink } from "../Link/Link";

const StyledSpan = styled(CopyBold)`
  color: inherit;
`;
const StyledLink = styled(DefaultLink)`
  text-decoration: none;
`;

const ChangeLang = () => {
  return (
    <StyledLink to="">
      <img src="" alt="" />
      <StyledSpan as="span">Cambiar a Español</StyledSpan>
    </StyledLink>
  );
};

export default ChangeLang;
