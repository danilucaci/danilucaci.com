import styled from "styled-components";
import { theme } from "../../theme/theme";

export const HR = styled.hr`
  display: block;
  border: none;
  border-top: 1px solid ${theme.color.divider.onWhite};
`;
