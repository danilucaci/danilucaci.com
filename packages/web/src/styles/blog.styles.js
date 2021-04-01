import styled from "styled-components";

import { mediaMin, rem } from "../theme";
import { Row } from "../components/Grid";
import { Subhead } from "../components/Headings";

export const HeaderBackground = styled.header`
  background-color: ${({ theme }) => theme.color.background.section.lightest};
`;

export const PostsRow = styled(Row)`
  padding-top: ${rem(24)} !important;
`;

export const BlogTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.size.display.mobile.h3};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.h3};

  ${mediaMin.xs`
    font-size: ${({ theme }) => theme.font.size.display.desktop.h2};
    line-height: ${({ theme }) => theme.font.lineHeight.display.desktop.h2};
  `}
`;

export const TagsTitle = styled(Subhead)`
  margin-bottom: ${rem(8)};
`;

export const TagsWrapper = styled.div`
  margin-top: ${rem(24)};
`;
