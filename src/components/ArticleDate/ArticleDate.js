import React from "react";
import PropTypes from "prop-types";
import { FormattedDate } from "react-intl";

import { StyledIcon, Time, Wrapper } from "./styles";

const ArticleDate = (props) => (
  <Wrapper>
    <StyledIcon>
      <use xlinkHref="#calendar" />
    </StyledIcon>
    <FormattedDate value={props.date} year="numeric" month="long" day="numeric">
      {(txt) => (
        <Time as="time" dateTime={txt} small>
          {txt}
        </Time>
      )}
    </FormattedDate>
  </Wrapper>
);

ArticleDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ArticleDate;
