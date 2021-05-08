import React, { useContext } from "react";
import { string, number } from "prop-types";
import { useIntl } from "react-intl";

import { localePaths } from "../../i18n";

import {
  PaginationWrapper,
  StyledIcon,
  DisabledPrev,
  Prev,
  Next,
  DisabledNext,
  PaginationContent,
  MobileCopy,
  PaginationLabel,
  PaginationNumber,
  CurrentPaginationNumber,
} from "./styles";
import LocaleContext from "../../i18n/LocaleContext";

function Pagination({
  currentPage,
  totalPages,
  prevPath,
  nextPath,
  paginationPathPrefix,
}) {
  const intl = useIntl();
  const { locale } = useContext(LocaleContext);

  let pagination = [];

  for (let page = 1; page <= totalPages; page += 1) {
    if (page === currentPage) {
      if (page === 1) {
        pagination.push(
          <CurrentPaginationNumber key={page} to={paginationPathPrefix}>
            {page}
          </CurrentPaginationNumber>,
        );
      } else {
        pagination.push(
          <CurrentPaginationNumber
            key={page}
            to={
              paginationPathPrefix + localePaths[locale].paginationName + page
            }
          >
            {page}
          </CurrentPaginationNumber>,
        );
      }
    } else {
      if (page === 1) {
        pagination.push(
          <PaginationNumber key={page} to={paginationPathPrefix}>
            {page}
          </PaginationNumber>,
        );
      } else {
        pagination.push(
          <PaginationNumber
            key={page}
            to={
              paginationPathPrefix + localePaths[locale].paginationName + page
            }
          >
            {page}
          </PaginationNumber>,
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
          <PaginationLabel>
            {intl.formatMessage({ id: "pagination.prev" })}
          </PaginationLabel>
        </Prev>
      ) : (
        <DisabledPrev>
          <StyledIcon isDisabled={!prevPath}>
            <use xlinkHref="#left" />
          </StyledIcon>
          <PaginationLabel>
            {intl.formatMessage({ id: "pagination.prev" })}
          </PaginationLabel>
        </DisabledPrev>
      )}
      <PaginationContent>
        {pagination}
        <MobileCopy>
          {currentPage}
          &nbsp;
          {intl.formatMessage({ id: "pagination.of" })}
          &nbsp;
          {totalPages}
        </MobileCopy>
      </PaginationContent>
      {nextPath ? (
        <Next to={nextPath}>
          <PaginationLabel>
            {intl.formatMessage({ id: "pagination.next" })}
          </PaginationLabel>
          <StyledIcon>
            <use xlinkHref="#right" />
          </StyledIcon>
        </Next>
      ) : (
        <DisabledNext>
          <PaginationLabel>
            {intl.formatMessage({ id: "pagination.next" })}
          </PaginationLabel>
          <StyledIcon isDisabled={!nextPath}>
            <use xlinkHref="#right" />
          </StyledIcon>
        </DisabledNext>
      )}
    </PaginationWrapper>
  );
}

Pagination.propTypes = {
  currentPage: number.isRequired,
  totalPages: number.isRequired,
  paginationPathPrefix: string.isRequired,
  prevPath: string,
  nextPath: string,
};

Pagination.defaultProps = {
  prevPath: null,
  nextPath: null,
};

export default Pagination;
