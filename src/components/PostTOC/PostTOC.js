import React from "react";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { H1, H2, H3, H4 } from "../Headings/Headings";
import { Copy, CopyBold } from "../Headings/Headings";

const StyledPostTOC = styled.nav``;

const PostTOC = (props) => {
  return <StyledPostTOC>{props.children}</StyledPostTOC>;
};

export default PostTOC;
