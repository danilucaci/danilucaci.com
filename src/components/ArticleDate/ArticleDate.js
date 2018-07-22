import React from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

import { Icon } from "../Icon/Icon";
import { Copy, CopyBold } from "../Copy/Copy";

const Wrapper = styled.div`
  display: inline-block;
  margin-right: ${rem(16)};
`;

const Label = styled(Copy.withComponent("span"))`
  display: inline-block;
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
`;

const Time = styled(CopyBold.withComponent("time"))`
  display: inline-block;
`;

const ArticleDate = (props) => {
  return (
    <Wrapper>
      <StyledIcon>
        <use xlinkHref="#calendar" />
      </StyledIcon>
      <Label s>Last Updated:&nbsp;</Label>
      <Time dateTime={props.date}>{props.date}</Time>
    </Wrapper>
  );
};

export default ArticleDate;
