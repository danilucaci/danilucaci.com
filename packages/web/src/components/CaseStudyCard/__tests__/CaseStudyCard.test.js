import React from "react";

import { renderWithReactIntl, setupReactIntl } from "../../../helpers/tests";
import { TEST_GATSBY_NODE_EDGES } from "../../../helpers/testData";
import CaseStudyCard from "../CaseStudyCard";
import messages from "../../../i18n/i18n";

describe("CaseStudyCard", () => {
  beforeAll(() => {
    setupReactIntl();
  });

  test("renders a case study in english", () => {
    const LOCALE = "en";

    const CARD_HEADING_LEVEL = "h3";
    const DATA = TEST_GATSBY_NODE_EDGES[LOCALE][0].node;

    const { container, getByText, getByRole, getByLabelText } =
      renderWithReactIntl(
        <CaseStudyCard
          title={DATA.frontmatter.title}
          snippet={DATA.frontmatter.snippet}
          cardImage={DATA.frontmatter.cardImage.childImageSharp.gatsbyImageData}
          slug={DATA.fields.slug}
          cardHeadingLevel={CARD_HEADING_LEVEL}
        />,
        LOCALE,
      );

    const articleByRole = getByRole("article");
    const articleByLabel = getByLabelText(DATA.frontmatter.title);
    const articleDescription = getByText(DATA.frontmatter.snippet);
    const articleLink = getByLabelText(/Continue Reading/);

    const cardHeadingTag = container.querySelector(CARD_HEADING_LEVEL);
    const noscriptTag = container.querySelector("noscript");
    const pictureTag = container.querySelector("picture");

    expect(articleByRole).toBeInTheDocument();

    expect(articleByLabel).toContainElement(noscriptTag);
    expect(articleByLabel).toContainElement(pictureTag);
    expect(articleByLabel).toContainElement(cardHeadingTag);
    expect(articleByLabel).toContainElement(articleDescription);
    expect(articleByLabel).toContainElement(articleLink);

    expect(articleLink).toHaveTextContent(
      messages[LOCALE]["article.link.continue.text"],
    );
  });

  test("renders a case study in spanish", () => {
    const LOCALE = "es";

    const CARD_HEADING_LEVEL = "h3";
    const DATA = TEST_GATSBY_NODE_EDGES[LOCALE][0].node;

    const { container, getByText, getByRole, getByLabelText } =
      renderWithReactIntl(
        <CaseStudyCard
          title={DATA.frontmatter.title}
          snippet={DATA.frontmatter.snippet}
          cardImage={DATA.frontmatter.cardImage.childImageSharp.gatsbyImageData}
          slug={DATA.fields.slug}
          cardHeadingLevel={CARD_HEADING_LEVEL}
        />,
        LOCALE,
      );

    const articleByRole = getByRole("article");
    const articleByLabel = getByLabelText(DATA.frontmatter.title);
    const articleDescription = getByText(DATA.frontmatter.snippet);
    const articleLink = getByLabelText(/Continuar/);

    const cardHeadingTag = container.querySelector(CARD_HEADING_LEVEL);
    const noscriptTag = container.querySelector("noscript");
    const pictureTag = container.querySelector("picture");

    expect(articleByRole).toBeInTheDocument();

    expect(articleByLabel).toContainElement(noscriptTag);
    expect(articleByLabel).toContainElement(pictureTag);
    expect(articleByLabel).toContainElement(cardHeadingTag);
    expect(articleByLabel).toContainElement(articleDescription);
    expect(articleByLabel).toContainElement(articleLink);

    expect(articleLink).toHaveTextContent(
      messages[LOCALE]["article.link.continue.text"],
    );
  });

  test("renders a card heading level of h2", () => {
    const LOCALE = "es";

    const CARD_HEADING_LEVEL = "h2";
    const DATA = TEST_GATSBY_NODE_EDGES[LOCALE][0].node;

    const { container, getByLabelText } = renderWithReactIntl(
      <CaseStudyCard
        title={DATA.frontmatter.title}
        snippet={DATA.frontmatter.snippet}
        cardImage={DATA.frontmatter.cardImage.childImageSharp.gatsbyImageData}
        slug={DATA.fields.slug}
        cardHeadingLevel={CARD_HEADING_LEVEL}
      />,
      LOCALE,
    );

    const articleByLabel = getByLabelText(DATA.frontmatter.title);
    const cardHeadingTag = container.querySelector("h2");
    expect(articleByLabel).toContainElement(cardHeadingTag);
    expect(cardHeadingTag).toBeInTheDocument();
  });

  test("renders a card heading level of h3", () => {
    const LOCALE = "es";

    const CARD_HEADING_LEVEL = "h3";
    const DATA = TEST_GATSBY_NODE_EDGES[LOCALE][0].node;

    const { container, getByLabelText } = renderWithReactIntl(
      <CaseStudyCard
        title={DATA.frontmatter.title}
        snippet={DATA.frontmatter.snippet}
        cardImage={DATA.frontmatter.cardImage.childImageSharp.gatsbyImageData}
        slug={DATA.fields.slug}
        cardHeadingLevel={CARD_HEADING_LEVEL}
      />,
      LOCALE,
    );

    const articleByLabel = getByLabelText(DATA.frontmatter.title);
    const cardHeadingTag = container.querySelector("h3");
    expect(articleByLabel).toContainElement(cardHeadingTag);
    expect(cardHeadingTag).toBeInTheDocument();
  });
});
