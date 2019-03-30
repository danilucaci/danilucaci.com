import styled from "styled-components";

import { theme, rem } from "../../theme/globalStyles";
import { Icon } from "../Icon/Icon";
import { Copy } from "../Copy/Copy";

export const Wrapper = styled.div`
  display: inline-block;
  white-space: nowrap;
  margin-left: -${rem(2)};
`;

export const Label = styled(Copy)`
  display: inline-block;
`;

export const StyledIcon = styled(Icon)`
  display: inline-block;
  fill: ${theme.colors.dark700};
  margin-right: ${rem(2)};
  margin-bottom: ${rem(3)};
`;
