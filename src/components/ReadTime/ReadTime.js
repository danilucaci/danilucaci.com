import React from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

import { Icon } from "../Icon/Icon";
import { Copy } from "../Copy/Copy";

const Wrapper = styled.div`
  display: inline-block;
  white-space: nowrap;
`;

const Label = styled(Copy.withComponent("span"))`
  display: inline-block;
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
  margin-right: ${rem(2)};
  margin-bottom: ${rem(4)};
`;

const ReadTime = (props) => {
  return (
    <Wrapper>
      <StyledIcon>
        <use xlinkHref="#clock" />
      </StyledIcon>
      <Label>{props.timeToRead} min read</Label>
    </Wrapper>
  );
};

export default ReadTime;
