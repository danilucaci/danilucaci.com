import styled from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const Main = styled.main`
  max-width: ${rem(`${theme.maxPageWidth}`)};
  margin-left: auto;
  margin-right: auto;

  margin-top: ${(props) =>
    props.loose
      ? rem(`${theme.mainMarginTop.s.loose}`)
      : rem(`${theme.mainMarginTop.s.normal}`)};

  ${mediaMin.m`
    margin-top: ${(props) =>
      props.loose
        ? rem(`${theme.mainMarginTop.m.loose}`)
        : rem(`${theme.mainMarginTop.m.normal}`)};
  `};

  ${mediaMin.xl`
    margin-top: ${(props) =>
      props.loose
        ? rem(`${theme.mainMarginTop.xl.loose}`)
        : rem(`${theme.mainMarginTop.xl.normal}`)};
  `};
`;
