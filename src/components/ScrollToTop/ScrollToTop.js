import React from "react";

import { StyledScrollToTop, ScrollToTopIcon } from "./styles";

const ScrollToTop = () => {
  return (
    <StyledScrollToTop href="#top" title="Scroll to top">
      <ScrollToTopIcon aria-hidden="true">
        <use xlinkHref="#up" />
      </ScrollToTopIcon>
    </StyledScrollToTop>
  );
};

export default ScrollToTop;
