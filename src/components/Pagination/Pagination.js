import React from "react";
import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { DefaultLink } from "../Link/Link";
import { Icon } from "../Icon/Icon";
import { Copy } from "../Copy/Copy";

const Wrapper = styled.nav`
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;
`;

const StyledIcon = styled(Icon)`
  ${(props) =>
    props.disabled &&
    css`
      fill: ${theme.colors.gray500};
    `};
`;

const Prev = styled(DefaultLink)`
  color: ${theme.colors.dark800} !important;
  display: inline-block;

  font-family: ${theme.fonts.bodyBold};
  font-size: ${theme.fontSizes.m};
  font-weight: 700;
  line-height: ${theme.lineHeights.m};

  height: ${rem(48)};
  padding: ${rem(8)} ${rem(16)};
  margin-right: ${rem(8)};
  text-decoration: none;

  ${(props) =>
    props.prevPath &&
    css`
      color: ${theme.colors.gray500};
    `};
`;

const Next = Prev.extend`
  margin-right: 0;
  margin-left: ${rem(8)};

  ${(props) =>
    props.nextPath &&
    css`
      color: ${theme.colors.gray500};
    `};
`;

const PaginationItem = styled(DefaultLink)`
  color: ${theme.colors.dark800} !important;
  display: inline-block;

  font-family: ${theme.fonts.bodyBold};
  font-size: ${theme.fontSizes.m};
  font-weight: 700;
  line-height: ${theme.lineHeights.m};

  height: ${rem(48)};
  width: ${rem(48)};
  margin: ${rem(4)};
  padding: ${rem(8)} ${rem(16)};
  text-align: center;
  text-decoration: none;

  ${(props) =>
    props.currentItem &&
    css`
      background-color: ${theme.colors.dark900};
      border-radius: 50%;
      color: ${theme.colors.gray100} !important;

      &:hover {
        background-color: ${theme.colors.dark900};
      }
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
  const {
    currentPage,
    totalPagesInBlog,
    paginationPathPrefix,
    prevPath,
    nextPath,
  } = props;

  let pagination = [];

  for (var page = 1; page <= totalPagesInBlog; page += 1) {
    if (page === currentPage) {
      if (page === 1) {
        pagination.push(
          <PaginationItem key={page} to={paginationPathPrefix} currentItem>
            {page}
          </PaginationItem>
        );
      } else {
        pagination.push(
          <PaginationItem
            key={page}
            to={`${paginationPathPrefix}/page/${page}`}
            currentItem
          >
            {page}
          </PaginationItem>
        );
      }
    } else {
      if (page === 1) {
        pagination.push(
          <PaginationItem key={page} to={paginationPathPrefix}>
            {page}
          </PaginationItem>
        );
      } else {
        pagination.push(
          <PaginationItem
            key={page}
            to={`${paginationPathPrefix}/page/${page}`}
          >
            {page}
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
