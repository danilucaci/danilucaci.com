import styled from "styled-components";

import { theme, rem } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";
import { Copy } from "../Copy/Copy";

export const Wrapper = styled.div`
  display: inline-block;
  margin-right: ${rem(20)};
  margin-left: -${rem(2)};
  white-space: nowrap;
`;

export const StyledIcon = styled(Icon)`
  display: inline-block;
  fill: ${theme.colors.dark700};
  margin-right: ${rem(4)};
  margin-bottom: ${rem(4)};
`;

export const Time = styled(Copy)`
  display: inline-block;
`;
