import React from "react";
import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Link } from "gatsby";
import { Icon } from "../Icon/Icon";
import { CopyBold } from "../Copy/Copy";

const Wrapper = styled.nav`
  display: table;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;
  padding-top: ${rem(24)};

  ${mediaMin.m`
    max-width: 50%;
  `};
`;

const StyledIcon = styled(Icon)`
  ${(props) =>
    props.disabled &&
    css`
      fill: ${theme.colors.gray500};
    `};
`;

const StyledLink = styled(Link)`
  text-decoration: underline;

  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};
  font-family: ${theme.fonts.bodyBold};
  line-height: ${theme.lineHeights.m};
  font-style: normal;
  font-weight: 700;

  &:active,
  &:focus {
    outline: 2px dashed ${theme.colors.main600};
  }

  &:visited,
  &:link {
    color: ${theme.colors.dark800};
  }

  &:hover {
    color: ${theme.colors.dark800};
    background-color: ${theme.colors.gray300};
    cursor: pointer;
  }
`;

const DisabledPrev = styled(CopyBold)`
  color: ${theme.colors.gray500};
  display: table-cell;

  text-align: left;
  width: 33.333%;

  height: ${rem(48)};
  padding: ${rem(8)} ${rem(16)} ${rem(8)} 0;
  margin-left: 0;
  margin-right: ${rem(8)};
  text-decoration: none;
  white-space: nowrap;
`;

const Prev = styled(StyledLink)`
  color: ${theme.colors.dark800};
  display: table-cell;

  text-align: left;
  width: 33.333%;

  height: ${rem(48)};
  padding: ${rem(8)} ${rem(16)} ${rem(8)} 0;
  margin-left: 0;
  margin-right: ${rem(8)};
  text-decoration: none;
  white-space: nowrap;
`;

const Next = styled(StyledLink)`
  color: ${theme.colors.dark800};
  display: table-cell;

  text-align: right;
  width: 33.333%;

  height: ${rem(48)};
  padding: ${rem(8)} 0 ${rem(8)} ${rem(16)};
  margin-left: 0;
  margin-right: ${rem(8)};
  text-decoration: none;
  white-space: nowrap;
`;

const DisabledNext = styled(CopyBold)`
  color: ${theme.colors.gray500};
  display: table-cell;

  text-align: right;
  width: 33.333%;

  height: ${rem(48)};
  padding: ${rem(8)} 0 ${rem(8)} ${rem(16)};
  margin-left: 0;
  margin-right: ${rem(8)};
  text-decoration: none;
  white-space: nowrap;
`;

const PaginationContent = styled.div`
  display: table-cell;
  white-space: nowrap;
`;

const MobileCopy = styled(CopyBold)`
  display: table-cell;
  white-space: nowrap;
  text-align: center;
  width: 33.333%;

  ${mediaMin.s`
    display: none;
  `};
`;

const CurrentPaginationNumber = styled(StyledLink)`
  background-color: ${theme.colors.dark900};
  border-radius: 50%;
  color: ${theme.colors.gray100} !important;
  display: none;

  height: ${rem(48)};
  width: ${rem(48)};
  margin: ${rem(4)};
  padding: ${rem(10)} ${rem(16)};
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: ${theme.colors.dark900};
  }

  ${mediaMin.s`
    display: inline-block;
  `};
`;

const PaginationNumber = styled(StyledLink)`
  display: none;

  height: ${rem(48)};
  width: ${rem(48)};
  margin: ${rem(4)};
  padding: ${rem(10)} ${rem(16)};
  text-align: center;
  text-decoration: none;

  &:hover {
    border-radius: 50%;
  }

  ${mediaMin.s`
    display: inline-block;
  `};
`;

const PaginationLabel = styled.span`
  ${mediaMax.xs`
    display: none;
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
          <CurrentPaginationNumber key={page} to={paginationPathPrefix}>
            {page}
          </CurrentPaginationNumber>
        );
      } else {
        pagination.push(
          <CurrentPaginationNumber
            key={page}
            to={`${paginationPathPrefix}/page/${page}`}
          >
            {page}
          </CurrentPaginationNumber>
        );
      }
    } else {
      if (page === 1) {
        pagination.push(
          <PaginationNumber key={page} to={paginationPathPrefix}>
            {page}
          </PaginationNumber>
        );
      } else {
        pagination.push(
          <PaginationNumber
            key={page}
            to={`${paginationPathPrefix}/page/${page}`}
          >
            {page}
          </PaginationNumber>
        );
      }
    }
  }

  return (
    <Wrapper role="navigation">
      {prevPath ? (
        <Prev to={prevPath}>
          <StyledIcon>
            <use xlinkHref="#left" />
          </StyledIcon>
          <PaginationLabel>Previous</PaginationLabel>
        </Prev>
      ) : (
        <DisabledPrev>
          <StyledIcon disabled={!prevPath}>
            <use xlinkHref="#left" />
          </StyledIcon>
          <PaginationLabel>Previous</PaginationLabel>
        </DisabledPrev>
      )}
      <PaginationContent>
        {pagination}
        <MobileCopy>
          {currentPage} of {totalPagesInBlog}
        </MobileCopy>
      </PaginationContent>
      {nextPath ? (
        <Next to={nextPath}>
          <PaginationLabel>Next</PaginationLabel>
          <StyledIcon>
            <use xlinkHref="#right" />
          </StyledIcon>
        </Next>
      ) : (
        <DisabledNext>
          <PaginationLabel>Next</PaginationLabel>
          <StyledIcon disabled={!nextPath}>
            <use xlinkHref="#right" />
          </StyledIcon>
        </DisabledNext>
      )}
    </Wrapper>
  );
};

export default Pagination;
