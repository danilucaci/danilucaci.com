import React from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

import { Icon } from "../Icon/Icon";
import { Copy, CopyBold } from "../Copy/Copy";

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

const LabelBold = styled(CopyBold.withComponent("span"))`
  display: inline-block;
`;

const ReadTime = (props) => {
  return (
    <Wrapper>
      <StyledIcon>
        <use xlinkHref="#clock" />
      </StyledIcon>
      <Label small>
        Read In:
        <LabelBold small>&nbsp;{props.timeToRead} minutes</LabelBold>
      </Label>
    </Wrapper>
  );
};

export default ReadTime;
