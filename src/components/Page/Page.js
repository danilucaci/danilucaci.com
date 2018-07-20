import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const Page = styled.div`
  width: 100%;
  margin-left: ${rem(`${theme.spacing.s}`)};
  margin-right: ${rem(`${theme.spacing.s}`)};

  ${mediaMin.s`
    margin-left: ${rem(`${theme.spacing.m}`)};
    margin-right: ${rem(`${theme.spacing.m}`)};
  `};
`;
