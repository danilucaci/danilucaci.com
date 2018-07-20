import React from "react";

import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

import { Link } from "gatsby";

const StyledLogo = styled(Link)`
  margin-left: 0;
  margin-right: auto;
  float: left;
`;

const Logo = () => {
  return (
    <StyledLogo to="/" alt="danilucaci.com">
      <img src="./logo.svg" alt="" />
    </StyledLogo>
  );
};

export default Logo;
