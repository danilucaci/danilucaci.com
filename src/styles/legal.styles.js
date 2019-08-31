import styled from "styled-components";
import { theme, rem, mediaMin } from "../theme/theme";
import { Copy } from "../components/Copy/Copy";
import { GridRow } from "../components/Grid/Grid";

export const LegalPageRow = styled(GridRow)`
  p {
    font-feature-settings: "onum";
  }
`;

export const PostH1 = styled.h1`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};
`;

export const PostWrapper = styled.div`
  margin-top: ${rem(16)};
  margin-bottom: ${theme.spacing.row.s};

  ${mediaMin.m`
    margin-top: ${rem(32)};
    margin-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.xl`
    margin-bottom: ${theme.spacing.row.xl};
  `};

  h2 {
    display: block;

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};

    & + h3 {
      margin-top: ${rem(32)};
    }
  }

  h3 {
    display: block;

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  h4 {
    display: block;

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  p,
  ul,
  ol {
    margin-bottom: ${rem(32)};
  }
`;

export const Time = styled(Copy)`
  display: inline-block;
`;
