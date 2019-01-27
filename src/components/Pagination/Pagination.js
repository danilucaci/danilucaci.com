import React from "react";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, rem, mediaMin, mediaMax } from "../../theme/globalStyles";
import { BoldLink } from "../Link/Link";
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

const StyledLink = styled(BoldLink)`
  &:visited,
  &:link {
    color: ${theme.colors.dark900};
  }

  &:hover {
    color: ${theme.colors.dark900};
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

  ${mediaMin.xxxs`
    margin-left: -${rem(32)};
  `};

  ${mediaMin.s`
    margin-left: 0;
    display: none;
  `};
`;

const PaginationLabel = styled.span`
  ${mediaMax.xxxs`
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

const PaginationNumber = styled(StyledLink)`
  display: none;

  height: ${rem(48)};
  width: ${rem(48)};
  margin: ${rem(4)};
  padding: ${rem(8)} ${rem(12)} ${rem(16)};
  text-align: center;
  text-decoration: none;

  &:hover {
    border-radius: 50%;
  }

  ${mediaMin.s`
    display: inline-block;
  `};
`;

const CurrentPaginationNumber = styled(PaginationNumber)`
  background-color: ${theme.colors.dark900};
  border-radius: 50%;
  color: ${theme.colors.gray100} !important;

  &:hover {
    background-color: ${theme.colors.dark900};
  }
`;

const Pagination = (props) => {
  const {
    currentPage,
    totalPages,
    paginationPathPrefix,
    prevPath,
    nextPath,
  } = props;

  const paginationPageLabels = {
    en: "/page/",
    es: "/pagina/",
  };

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
            to={paginationPathPrefix + paginationPageLabels[props.lang] + page}
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
            to={paginationPathPrefix + paginationPageLabels[props.lang] + page}
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
          <FormattedMessage id="paginationPrev">
            {(txt) => <PaginationLabel>{txt}</PaginationLabel>}
          </FormattedMessage>
        </Prev>
      ) : (
        <DisabledPrev>
          <StyledIcon disabled={!prevPath}>
            <use xlinkHref="#left" />
          </StyledIcon>
          <FormattedMessage id="paginationPrev">
            {(txt) => <PaginationLabel>{txt}</PaginationLabel>}
          </FormattedMessage>
        </DisabledPrev>
      )}
      <PaginationContent>
        {pagination}
        <MobileCopy>
          {currentPage}
          &nbsp;
          <FormattedMessage id="paginationOf" />
          &nbsp;
          {totalPages}
        </MobileCopy>
      </PaginationContent>
      {nextPath ? (
        <Next to={nextPath}>
          <FormattedMessage id="paginationNext">
            {(txt) => <PaginationLabel>{txt}</PaginationLabel>}
          </FormattedMessage>
          <StyledIcon>
            <use xlinkHref="#right" />
          </StyledIcon>
        </Next>
      ) : (
        <DisabledNext>
          <FormattedMessage id="paginationNext">
            {(txt) => <PaginationLabel>{txt}</PaginationLabel>}
          </FormattedMessage>
          <StyledIcon disabled={!nextPath}>
            <use xlinkHref="#right" />
          </StyledIcon>
        </DisabledNext>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
