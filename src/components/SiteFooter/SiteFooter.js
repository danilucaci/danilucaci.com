import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import { FormattedMessage } from "react-intl";

import { theme, rem } from "../../theme/globalStyles";
import { Copy, CopyBold } from "../Copy/Copy";
import SocialNav from "../SocialNav/SocialNav";

const StyledFooter = styled.footer`
  display: block;
  text-align: center;
  background-color: ${(props) =>
    props.gray ? theme.colors.pageBackground : theme.colors.gray100};
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
      <StyledCopyright small>&copy; Dani Lucaci.</StyledCopyright>
      <StyledCopy small>
        This site is built with Gatsby.js and hosted on Netlify.
      </StyledCopy>
      <SocialNav />
      <FormattedMessage id="footerChangeLanguage">
        {(txt) => <Link to={props.changeLanguage}>{txt}</Link>}
      </FormattedMessage>
    </StyledFooter>
  );
};

SiteFooter.propTypes = {
  changeLanguage: PropTypes.string.isRequired,
};

export default SiteFooter;
