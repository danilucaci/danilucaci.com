import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedDate } from "react-intl";

import { theme, rem } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";
import { Copy } from "../Copy/Copy";

const Wrapper = styled.div`
  display: inline-block;
  margin-right: ${rem(20)};
  margin-left: -${rem(2)};
  white-space: nowrap;
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
  fill: ${theme.colors.dark700};
  margin-right: ${rem(3)};
  margin-bottom: ${rem(4)};
`;

const Time = styled(Copy)`
  display: inline-block;
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
          <Time as="time" dateTime={txt} small>
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
