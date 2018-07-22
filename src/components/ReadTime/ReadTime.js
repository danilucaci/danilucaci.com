import React from "react";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

import { Icon } from "../Icon/Icon";
import { Copy, CopyBold } from "../Copy/Copy";

const Wrapper = styled.div`
  display: block;
`;

const Label = styled(Copy.withComponent("span"))`
  display: inline-block;
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
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
      <Label s>
        Read In:
        <LabelBold s>&nbsp;{props.timeToRead} minutes</LabelBold>
      </Label>
    </Wrapper>
  );
};

export default ReadTime;
