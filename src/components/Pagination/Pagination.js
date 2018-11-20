import React from "react";
import styled, { css } from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { Link } from "gatsby";
import { Icon } from "../Icon/Icon";
import { CopyBold } from "../Copy/Copy";

const PaginationWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: ${rem(24)};
`;

const StyledIcon = styled(Icon)`
  align-self: center;
  margin-bottom: ${rem(2)};

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
  line-height: ${theme.lineHeights.m};
  font-style: normal;
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

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

const PaginationContent = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  white-space: nowrap;
`;

const MobileCopy = styled(CopyBold)`
  display: flex;
  flex: 1 1 100%;
  white-space: nowrap;
  text-align: center;

  ${mediaMin.xs`
    margin-left: -${rem(32)};
  `};

  ${mediaMin.s`
    margin-left: 0;
    display: none;
  `};
`;

const DisabledPrev = styled(CopyBold)`
  color: ${theme.colors.gray500};
  display: flex;
  text-align: left;
  height: ${rem(48)};
  padding: ${rem(8)} ${rem(24)} ${rem(8)} 0;
  margin-left: 0;
  margin-right: auto;
  text-decoration: none;
  white-space: nowrap;
`;

const Prev = styled(StyledLink)`
  color: ${theme.colors.dark800};
  text-align: left;
  height: ${rem(48)};
  padding: ${rem(8)} ${rem(24)} ${rem(8)} 0;
  margin-left: 0;
  margin-right: auto;
  text-decoration: none;
  white-space: nowrap;

  ${mediaMax.xs`
    padding: ${rem(8)} ${rem(48)} ${rem(8)} 0;
  `};

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: transparent;
  }
`;

const Next = styled(StyledLink)`
  color: ${theme.colors.dark800};
  display: flex;
  text-align: right;
  height: ${rem(48)};
  padding: ${rem(8)} 0 ${rem(8)} ${rem(24)};
  margin-right: 0;
  margin-left: auto;
  text-decoration: none;
  white-space: nowrap;

  ${mediaMax.xs`
    padding: ${rem(8)} 0 ${rem(8)} ${rem(48)};
  `};

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: transparent;
  }
`;

const DisabledNext = styled(CopyBold)`
  color: ${theme.colors.gray500};
  display: flex;
  text-align: right;
  height: ${rem(48)};
  padding: ${rem(8)} 0 ${rem(8)} ${rem(16)};
  margin-left: auto;
  margin-right: 0;
  text-decoration: none;
  white-space: nowrap;
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
    totalPages,
    paginationPathPrefix,
    prevPath,
    nextPath,
  } = props;

  let pagination = [];

  for (var page = 1; page <= totalPages; page += 1) {
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
    <PaginationWrapper role="navigation">
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
          {currentPage} of {totalPages}
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
    </PaginationWrapper>
  );
};

export default Pagination;
