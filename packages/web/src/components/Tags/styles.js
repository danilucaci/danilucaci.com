import styled from "styled-components";

export const TagsWrapper = styled.nav`
  display: ${(props) => (props.inline ? "inline-block" : "block")};
`;
