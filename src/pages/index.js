import React from "react";
import styled from "styled-components";

import { theme, mediaMin, rem } from "../theme/globalStyles";
import Layout from "../components/Layout";
import { Main } from "../components/Main/Main";

const Row = styled.section`
  margin-top: ${rem(64)};
  text-align: center;
`;

const Index = (props) => {
  let locale = "en";

  return (
    <Layout location={props.location} locale={locale}>
      <Main role="main" id="main">
        <Row>
          <h1>Soon</h1>
        </Row>
      </Main>
    </Layout>
  );
};

export default Index;
