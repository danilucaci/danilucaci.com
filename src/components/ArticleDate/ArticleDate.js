import React from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

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
`;

const ArticleDate = (props) => {
  return (
    <Wrapper>
      <StyledIcon>
        <use xlinkHref="#calendar" />
      </StyledIcon>
      <Time as="time" dateTime={props.date}>
        {props.date}
      </Time>
    </Wrapper>
  );
};

export default ArticleDate;
