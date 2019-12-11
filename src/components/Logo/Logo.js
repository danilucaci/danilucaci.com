import React from "react";
import { string } from "prop-types";
import { StyledLogo } from "./styles";

const Logo = ({ locale = "en" }) => (
  <StyledLogo to="/" aria-label={locale === "en" ? "Home page" : "Inicio"}>
    Dani Lucaci
  </StyledLogo>
);

export default Logo;

Logo.propTypes = {
  locale: string.isRequired,
};
