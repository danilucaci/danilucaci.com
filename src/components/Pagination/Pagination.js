import React from "react";
import styled, { css } from "styled-components";
import { theme, rem } from "../../theme/globalStyles";
import { DefaultLink } from "../Link/Link";
import { Icon } from "../Icon/Icon";
import { Copy } from "../Copy/Copy";

const Wrapper = styled.nav`
  display: block;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding: ${rem(8)} ${rem(16)};
  text-align: center;
`;

const StyledIcon = styled(Icon)`
  ${(props) =>
    props.disabled &&
    css`
      fill: ${theme.colors.gray500};
    `};
`;

const Prev = styled(DefaultLink)`
  color: ${theme.colors.dark800};
  display: inline-block;
  height: ${rem(48)};
  padding: ${rem(8)} ${rem(16)};
  margin: 0 ${rem(8)};
  text-decoration: none;

  ${(props) =>
    props.prevPath &&
    css`
      color: ${theme.colors.gray500};
    `};
`;

const PaginationItem = styled(DefaultLink)`
  color: ${theme.colors.dark800};
  display: inline-block;
  border-radius: 4px;
  height: ${rem(48)};
  margin: 0 ${rem(8)};
  padding: ${rem(8)} ${rem(16)};
  text-align: center;
  text-decoration: none;

  ${(props) =>
    props.current &&
    css`
      background-color: ${theme.colors.dark900};
      color: ${theme.colors.gray100} !important;

      &:hover {
        background-color: ${theme.colors.dark900};
      }
    `};
`;

const Next = Prev.extend`
  ${(props) =>
    props.nextPath &&
    css`
      color: ${theme.colors.gray500};
    `};
`;

const DisabledLabel = styled(Copy)`
  color: ${theme.colors.gray500};
  display: inline-block;
  margin-right: ${rem(16)};

  ${(props) =>
    props.leftSide &&
    css`
      margin-left: ${rem(16)};
    `};
`;

const Pagination = (props) => {
  const { currentPage, totalPagesInBlog, prevPath, nextPath } = props;

  let pagination = [];

  for (var current = 1; current <= totalPagesInBlog; current++) {
    if (current === currentPage) {
      if (current === 1) {
        pagination.push(
          <PaginationItem key={current} to={`/blog/`} current={currentPage}>
            {current}
          </PaginationItem>
        );
      } else {
        pagination.push(
          <PaginationItem
            key={current}
            to={`/blog/page/${current}`}
            current={currentPage}
          >
            {current}
          </PaginationItem>
        );
      }
    } else {
      if (current === 1) {
        pagination.push(
          <PaginationItem key={current} to={`/blog/`}>
            {current}
          </PaginationItem>
        );
      } else {
        pagination.push(
          <PaginationItem key={current} to={`/blog/page/${current}`}>
            {current}
          </PaginationItem>
        );
      }
    }
  }

  return (
    <Wrapper role="navigation">
      {prevPath ? (
        <Prev to={prevPath}>
          <StyledIcon disabled={!prevPath}>
            <use xlinkHref="#left" />
          </StyledIcon>
          Previous
        </Prev>
      ) : (
        <DisabledLabel>
          <StyledIcon disabled={!prevPath}>
            <use xlinkHref="#left" />
          </StyledIcon>
          Previous
        </DisabledLabel>
      )}
      {pagination}
      {nextPath ? (
        <Next to={nextPath}>
          Next
          <StyledIcon disabled={!nextPath}>
            <use xlinkHref="#right" />
          </StyledIcon>
        </Next>
      ) : (
        <DisabledLabel leftSide>
          Next
          <StyledIcon disabled={!nextPath}>
            <use xlinkHref="#right" />
          </StyledIcon>
        </DisabledLabel>
      )}
    </Wrapper>
  );
};

export default Pagination;
