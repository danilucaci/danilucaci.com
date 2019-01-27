import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { rem } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";
import { Copy } from "../Copy/Copy";

const Wrapper = styled.div`
  display: inline-block;
  white-space: nowrap;
`;

const Label = styled(Copy)`
  display: inline-block;
  font-feature-settings: "smcp", "c2sc", "onum";
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

export default ReadTime;
