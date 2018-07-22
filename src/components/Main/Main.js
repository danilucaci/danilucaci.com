import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const Main = styled.main`
  margin-top: ${(props) =>
    props.loose ? theme.mainMarginTop.s.loose : theme.mainMarginTop.s.normal};

  ${mediaMin.m`
    margin-top: ${(props) =>
      props.loose ? theme.mainMarginTop.m.loose : theme.mainMarginTop.m.normal};
  `};

  ${mediaMin.xl`
    margin-top: ${(props) =>
      props.loose
        ? theme.mainMarginTop.xl.loose
        : theme.mainMarginTop.xl.normal};
  `};
`;
