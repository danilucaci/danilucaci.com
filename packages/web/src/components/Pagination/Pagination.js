import React, { useContext } from "react";
import { string, number } from "prop-types";
import { FormattedMessage } from "react-intl";
import { localePaths } from "../../i18n/i18n";

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

const Pagination = (props) => {
  const {
    currentPage,
    totalPages,
    prevPath,
    nextPath,
    paginationPathPrefix,
  } = props;

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
          <FormattedMessage id="pagination.prev">
            {(txt) => <PaginationLabel>{txt}</PaginationLabel>}
          </FormattedMessage>
        </Prev>
      ) : (
        <DisabledPrev>
          <StyledIcon isDisabled={!prevPath}>
            <use xlinkHref="#left" />
          </StyledIcon>
          <FormattedMessage id="pagination.prev">
            {(txt) => <PaginationLabel>{txt}</PaginationLabel>}
          </FormattedMessage>
        </DisabledPrev>
      )}
      <PaginationContent>
        {pagination}
        <MobileCopy>
          {currentPage}
          &nbsp;
          <FormattedMessage id="pagination.of" />
          &nbsp;
          {totalPages}
        </MobileCopy>
      </PaginationContent>
      {nextPath ? (
        <Next to={nextPath}>
          <FormattedMessage id="pagination.next">
            {(txt) => <PaginationLabel>{txt}</PaginationLabel>}
          </FormattedMessage>
          <StyledIcon>
            <use xlinkHref="#right" />
          </StyledIcon>
        </Next>
      ) : (
        <DisabledNext>
          <FormattedMessage id="pagination.next">
            {(txt) => <PaginationLabel>{txt}</PaginationLabel>}
          </FormattedMessage>
          <StyledIcon isDisabled={!nextPath}>
            <use xlinkHref="#right" />
          </StyledIcon>
        </DisabledNext>
      )}
    </PaginationWrapper>
  );
};

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
