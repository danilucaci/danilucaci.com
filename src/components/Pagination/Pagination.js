import React from "react";
import styled, { css } from "styled-components";
import { theme, rem } from "../../theme/globalStyles";
import { DefaultLink } from "../Link/Link";
import { Icon } from "../Icon/Icon";

const Wrapper = styled.nav`
  display: block;
`;

const PrevPaginationItem = styled(DefaultLink)`
  color: ${theme.colors.gray100};
  display: inline-block;
  height: 48px;
  padding: ${rem(16)};
  margin: 0 16px;

  ${(props) =>
    props.current &&
    css`
      background-color: ${theme.colors.dark900};
    `};
`;

const CurrentPaginationItem = styled.span`
  display: inline-block;
  height: 48px;
  margin: 0 16px;

  padding: ${rem(16)};
`;

const NextPaginationItem = PrevPaginationItem.extend`
  ${(props) =>
    props.hasNext &&
    css`
      background-color: ${theme.colors.dark900};
    `};
`;

const StyledIcon = styled(Icon)``;

const Pagination = (props) => {
  const { page, pagesSum, prevPath, nextPath } = props;

  return (
    <Wrapper role="navigation">
      <PrevPaginationItem to={prevPath}>
        <StyledIcon>
          <use xlinkHref="#left" />
        </StyledIcon>
        Previous
      </PrevPaginationItem>
      <CurrentPaginationItem>
        {page} of {pagesSum}
      </CurrentPaginationItem>
      <NextPaginationItem to={nextPath}>
        Next
        <StyledIcon>
          <use xlinkHref="#right" />
        </StyledIcon>
      </NextPaginationItem>
    </Wrapper>
  );
};

export default Pagination;
