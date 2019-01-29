import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedDate } from "react-intl";

import { rem } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";
import { Copy } from "../Copy/Copy";

const Wrapper = styled.div`
  display: inline-block;
  margin-right: ${rem(16)};
  margin-left: -${rem(2)};
  white-space: nowrap;
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
  margin-right: ${rem(2)};
  margin-bottom: ${rem(4)};
`;

const Time = styled(Copy)`
  display: inline-block;
  font-variant: small-caps;
  text-transform: lowercase;
  letter-spacing: ${rem(0.5)};
  font-feature-settings: "smcp", "c2sc", "onum";
`;

const ArticleDate = (props) => {
  return (
    <Wrapper>
      <StyledIcon>
        <use xlinkHref="#calendar" />
      </StyledIcon>
      <FormattedDate
        value={props.date}
        year="numeric"
        month="long"
        day="numeric"
      >
        {(txt) => (
          <Time as="time" dateTime={txt}>
            {txt}
          </Time>
        )}
      </FormattedDate>
    </Wrapper>
  );
};

ArticleDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ArticleDate;
