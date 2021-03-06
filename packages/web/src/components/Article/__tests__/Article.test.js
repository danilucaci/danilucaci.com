import React from "react";

import { renderWithReactIntl, setupReactIntl } from "../../../helpers/tests";
import localePaths from "../../../i18n/localePaths";
import Article from "../Article";

describe("<Article />", () => {
  beforeAll(() => {
    setupReactIntl();
  });

  test("renders semantic elements", () => {
    const LOCALE = "en";
    const MINUTES = 3;
    const YEAR = 2020;
    const FULL_DATE = `${YEAR}-06-20`;
    const ARTICLE_TITLE = "test article title";
    const ARTICLE_TAGS = ["react", "gatsby"];
    const ARTICLE_SLUG = `${localePaths[LOCALE].blog}/my-first-article`;

    const { container, getByRole } = renderWithReactIntl(
      <Article
        date={FULL_DATE}
        title={ARTICLE_TITLE}
        tags={ARTICLE_TAGS}
        slug={ARTICLE_SLUG}
        timeToRead={MINUTES}
      />,
      LOCALE,
    );

    const article = getByRole("article");
    const header = getByRole("banner");
    const nav = getByRole("navigation");
    const heading = getByRole("heading");
    const headerLink = container.querySelector("h3 a");

    expect(article).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(heading).toHaveTextContent(ARTICLE_TITLE);

    expect(article).toContainElement(header);
    expect(header).toContainElement(nav);
    expect(header).toContainElement(heading);
    expect(heading).toContainElement(headerLink);
    expect(headerLink.textContent).toBe(ARTICLE_TITLE);
  });

  test("renders the article tags in english", () => {
    const LOCALE = "en";
    const MINUTES = 3;
    const YEAR = 2020;
    const FULL_DATE = `${YEAR}-06-20`;
    const ARTICLE_TITLE = "test article title";
    const ARTICLE_TAGS = ["react", "gatsby"];
    const ARTICLE_SLUG = `${localePaths[LOCALE].blog}/my-first-article`;

    const { getByText, getByRole } = renderWithReactIntl(
      <Article
        date={FULL_DATE}
        title={ARTICLE_TITLE}
        tags={ARTICLE_TAGS}
        slug={ARTICLE_SLUG}
        timeToRead={MINUTES}
      />,
      LOCALE,
    );

    expect(getByRole("navigation")).toHaveTextContent(ARTICLE_TAGS[0]);
    expect(getByRole("navigation")).toHaveTextContent(ARTICLE_TAGS[1]);

    const TAG_0 = getByText(ARTICLE_TAGS[0]);
    const TAG_1 = getByText(ARTICLE_TAGS[1]);

    expect(TAG_0).toHaveStyle("text-transform: uppercase");
    expect(TAG_1).toHaveStyle("text-transform: uppercase");

    expect(TAG_0).toHaveAttribute(
      "href",
      localePaths[LOCALE].blog + localePaths[LOCALE].tags + ARTICLE_TAGS[0],
    );
    expect(TAG_1).toHaveAttribute(
      "href",
      localePaths[LOCALE].blog + localePaths[LOCALE].tags + ARTICLE_TAGS[1],
    );
  });

  test("renders the article tags in spanish", () => {
    const LOCALE = "es";
    const MINUTES = 3;
    const YEAR = 2020;
    const FULL_DATE = `${YEAR}-06-20`;
    const ARTICLE_TITLE = "test article title";
    const ARTICLE_TAGS = ["react", "gatsby"];
    const ARTICLE_SLUG = `${localePaths[LOCALE].blog}/my-first-article`;

    const { getByText, getByRole } = renderWithReactIntl(
      <Article
        date={FULL_DATE}
        title={ARTICLE_TITLE}
        tags={ARTICLE_TAGS}
        slug={ARTICLE_SLUG}
        timeToRead={MINUTES}
      />,
      "es",
    );

    expect(getByRole("navigation")).toHaveTextContent(ARTICLE_TAGS[0]);
    expect(getByRole("navigation")).toHaveTextContent(ARTICLE_TAGS[1]);

    const TAG_0 = getByText(ARTICLE_TAGS[0]);
    const TAG_1 = getByText(ARTICLE_TAGS[1]);

    expect(TAG_0).toHaveStyle("text-transform: uppercase");
    expect(TAG_1).toHaveStyle("text-transform: uppercase");

    expect(TAG_0).toHaveAttribute(
      "href",
      localePaths[LOCALE].blog + localePaths[LOCALE].tags + ARTICLE_TAGS[0],
    );
    expect(TAG_1).toHaveAttribute(
      "href",
      localePaths[LOCALE].blog + localePaths[LOCALE].tags + ARTICLE_TAGS[1],
    );
  });

  test("renders the article date and time in english", () => {
    const LOCALE = "en";
    const MINUTES = 3;
    const YEAR = 2020;
    const FULL_DATE = `${YEAR}-06-20`;
    const ARTICLE_TITLE = "test article title";
    const ARTICLE_TAGS = ["react", "gatsby"];
    const ARTICLE_SLUG = `${localePaths[LOCALE].blog}/my-first-article`;

    const { getByText } = renderWithReactIntl(
      <Article
        date={FULL_DATE}
        title={ARTICLE_TITLE}
        tags={ARTICLE_TAGS}
        slug={ARTICLE_SLUG}
        timeToRead={MINUTES}
      />,
      LOCALE,
    );

    expect(getByText(new RegExp(YEAR))).toHaveTextContent(`Jun 20, ${YEAR}`);
    expect(getByText(new RegExp(YEAR))).toHaveAttribute("datetime");
    expect(getByText(new RegExp(MINUTES))).toHaveTextContent(
      `${MINUTES} min read`,
    );
  });

  test("renders the article date and time in spanish", () => {
    const LOCALE = "es";
    const MINUTES = 3;
    const YEAR = 2020;
    const FULL_DATE = `${YEAR}-06-20`;
    const ARTICLE_TITLE = "test article title";
    const ARTICLE_TAGS = ["react", "gatsby"];
    const ARTICLE_SLUG = `${localePaths[LOCALE].blog}/my-first-article`;

    const { getByText } = renderWithReactIntl(
      <Article
        date={FULL_DATE}
        title={ARTICLE_TITLE}
        tags={ARTICLE_TAGS}
        slug={ARTICLE_SLUG}
        timeToRead={MINUTES}
      />,
      LOCALE,
    );

    expect(getByText(new RegExp(YEAR))).toHaveTextContent(`20 jun. ${YEAR}`);
    expect(getByText(new RegExp(YEAR))).toHaveAttribute("datetime");
    expect(getByText(new RegExp(MINUTES))).toHaveTextContent(
      `${MINUTES} min de lectura`,
    );
  });
});
