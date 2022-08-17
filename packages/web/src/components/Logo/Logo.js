import React, { useContext } from "react";
import { StyledLogo } from "./styles";
import LocaleContext from "../../i18n/LocaleContext";

function Logo() {
  const { locale } = useContext(LocaleContext);

  return (
    <StyledLogo to="/" aria-label={locale === "en" ? "Home page" : "Inicio"}>
      Dani Lucaci
    </StyledLogo>
  );
}

export default Logo;
