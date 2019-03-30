import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { StyledMenuButton, StyledIcon } from "./styles";

const MenuButton = (props) => {
  const showNav = props.showNav;

  return (
    <FormattedMessage id="buttonMenu">
      {(txt) => (
        <StyledMenuButton aria-haspopup="true" aria-expanded="false" onClick={props.onClick}>
          {txt}
          <StyledIcon main animate={!showNav} aria-hidden="true">
            {showNav ? <use xlinkHref="#close" /> : <use xlinkHref="#hamburger" />}
          </StyledIcon>
        </StyledMenuButton>
      )}
    </FormattedMessage>
  );
};

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  showNav: PropTypes.bool.isRequired,
};

export default MenuButton;
