import React from "react";

import { renderWithReactIntl, setupReactIntl } from "../../../helpers/tests";
import { TEST_GATSBY_NODE_EDGES } from "../../../helpers/testData";
import CaseStudies from "../CaseStudies";
import messages from "../../../i18n/i18n";

describe("CaseStudies", () => {
  beforeAll(() => {
    setupReactIntl();
  });

  test("renders the case studies in english", () => {
    const LOCALE = "en";
    const HEADER_HEADING_LEVEL = "h1";
    const CARD_HEADING_LEVEL = "h3";
    const DATA = TEST_GATSBY_NODE_EDGES[LOCALE][0].node;

    const {
      container,
      getByText,
      getByRole,
      getByLabelText,
    } = renderWithReactIntl(
      <CaseStudies
        edges={TEST_GATSBY_NODE_EDGES[LOCALE]}
        header={HEADER_HEADING_LEVEL}
        cardHeadingLevel={CARD_HEADING_LEVEL}
      />,
      LOCALE,
    );

    const section = getByLabelText(/Latest/);
    const articleByRole = getByRole("article");
    const articleByLabel = getByLabelText(DATA.frontmatter.title);
    const articleDescription = getByText(DATA.frontmatter.snippet);

    const articleLink = getByLabelText(/Continue Reading/);

    const mainHeadingTag = container.querySelector(HEADER_HEADING_LEVEL);
    const cardHeadingTag = container.querySelector(CARD_HEADING_LEVEL);
    const noscriptTag = container.querySelector("noscript");
    const pictureTag = container.querySelector("picture");

    expect(section).toContainElement(mainHeadingTag);
    expect(section).toContainElement(articleByRole);
    expect(section).toContainElement(articleByLabel);

    expect(articleByLabel).toContainElement(noscriptTag);
    expect(articleByLabel).toContainElement(pictureTag);
    expect(articleByLabel).toContainElement(cardHeadingTag);
    expect(articleByLabel).toContainElement(articleDescription);
    expect(articleByLabel).toContainElement(articleLink);

    expect(mainHeadingTag).toHaveTextContent(
      messages[LOCALE]["case.studies.header"],
    );

    expect(articleLink).toHaveTextContent(
      messages[LOCALE]["article.link.continue.text"],
    );
  });

  test("renders the case studies in spanish", () => {
    const LOCALE = "es";
    const HEADER_HEADING_LEVEL = "h1";
    const CARD_HEADING_LEVEL = "h3";
    const DATA = TEST_GATSBY_NODE_EDGES[LOCALE][0].node;

    const {
      container,
      getByText,
      getByRole,
      getByLabelText,
    } = renderWithReactIntl(
      <CaseStudies
        edges={TEST_GATSBY_NODE_EDGES[LOCALE]}
        header={HEADER_HEADING_LEVEL}
        cardHeadingLevel={CARD_HEADING_LEVEL}
      />,
      LOCALE,
    );

    const section = getByLabelText(/Recientes/);
    const articleByRole = getByRole("article");
    const articleByLabel = getByLabelText(DATA.frontmatter.title);
    const articleDescription = getByText(DATA.frontmatter.snippet);

    const articleLink = getByLabelText(/Continuar/);

    const mainHeadingTag = container.querySelector(HEADER_HEADING_LEVEL);
    const cardHeadingTag = container.querySelector(CARD_HEADING_LEVEL);
    const noscriptTag = container.querySelector("noscript");
    const pictureTag = container.querySelector("picture");

    expect(section).toContainElement(mainHeadingTag);
    expect(section).toContainElement(articleByRole);
    expect(section).toContainElement(articleByLabel);

    expect(articleByLabel).toContainElement(noscriptTag);
    expect(articleByLabel).toContainElement(pictureTag);
    expect(articleByLabel).toContainElement(cardHeadingTag);
    expect(articleByLabel).toContainElement(articleDescription);
    expect(articleByLabel).toContainElement(articleLink);

    expect(mainHeadingTag).toHaveTextContent(
      messages[LOCALE]["case.studies.header"],
    );

    expect(articleLink).toHaveTextContent(
      messages[LOCALE]["article.link.continue.text"],
    );
  });
});
