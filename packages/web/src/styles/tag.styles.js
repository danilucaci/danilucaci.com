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

export const TagFoundWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%;

  ${mediaMin.l`
    margin-right: ${rem(12)};
    width: calc(42% - ${rem(12)});
  `};
`;

export const TagFoundTitle = styled.span`
  color: ${({ theme }) => theme.colors.grey900};
  display: block;

  font-weight: 700;
  font-style: normal;

  font-family: ${({ theme }) => theme.font.family.display.fallback};

  .fonts-loaded & {
    font-family: ${({ theme }) => theme.font.family.display.bold};
  }

  font-size: ${({ theme }) => theme.font.size.display.mobile.h2};
  line-height: ${({ theme }) => theme.font.lineHeight.display.mobile.h2};

  ${mediaMin.xs`
    font-size: ${({ theme }) => theme.font.size.display.desktop.h2};
    line-height: ${({ theme }) => theme.font.lineHeight.display.desktop.h2};
  `}
`;

export const OtherTagsWrapper = styled.div`
  margin-top: ${rem(24)};

  ${mediaMin.l`
    margin-top: 0;
    display: inline-block;
    vertical-align: top;
    margin-left: ${rem(12)};
    width: calc(58% - ${rem(12)});
  `};
`;

export const TagsSubhead = styled(Subhead)`
  margin-bottom: ${rem(8)};
`;
