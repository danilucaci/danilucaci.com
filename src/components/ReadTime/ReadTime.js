import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { rem } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";
import { Copy } from "../Copy/Copy";

const Wrapper = styled.div`
  display: inline-block;
  white-space: nowrap;
  margin-left: -${rem(2)};
`;

const Label = styled(Copy)`
  display: inline-block;
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
  margin-bottom: ${rem(3)};
`;

const ReadTime = (props) => {
  return (
    <Wrapper>
      <StyledIcon>
        <use xlinkHref="#clock" />
      </StyledIcon>
      <FormattedMessage id="articleReadTime">
        {(txt) => (
          <Label as="span" small>
            {props.timeToRead} {txt}
          </Label>
        )}
      </FormattedMessage>
    </Wrapper>
  );
};

ReadTime.propTypes = {
  timeToRead: PropTypes.number.isRequired,
};

export default ReadTime;
