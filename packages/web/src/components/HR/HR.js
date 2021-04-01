import styled from "styled-components";
import { theme } from "../../theme";

const HR = styled.hr`
  display: block;
  border: none;
  border-top: 1px solid ${theme.color.divider.onWhite};
`;

export default HR;
