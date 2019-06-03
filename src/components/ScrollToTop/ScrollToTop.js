import React from "react";

import { StyledScrollToTop, ScrollToTopIcon } from "./styles";

const ScrollToTop = () => (
  <StyledScrollToTop href="#top" title="Back to top">
    <ScrollToTopIcon>
      <use xlinkHref="#up" />
    </ScrollToTopIcon>
  </StyledScrollToTop>
);

export default ScrollToTop;
