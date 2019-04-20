import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { Wrapper, Label, StyledIcon } from "./styles";

const ReadTime = (props) => (
  <Wrapper>
    <StyledIcon>
      <use xlinkHref="#clock" />
    </StyledIcon>
    <FormattedMessage id="article.read.time">
      {(txt) => (
        <Label as="span" small>
          {props.timeToRead} {txt}
        </Label>
      )}
    </FormattedMessage>
  </Wrapper>
);

ReadTime.propTypes = {
  timeToRead: PropTypes.number.isRequired,
};

export default ReadTime;
