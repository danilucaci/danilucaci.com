import React from "react";

import { renderWithReactIntl, setupReactIntl } from "../../../helpers/tests";
import ArticleInfo from "../ArticleInfo";

describe("<ArticleInfo />", () => {
  beforeAll(() => {
    setupReactIntl();
  });

  test("renders the date and time in spanish", () => {
    const MINUTES = 3;
    const YEAR = 2020;
    const FULL_DATE = `${YEAR}-06-20`;

    const { getByText } = renderWithReactIntl(
      <ArticleInfo date={FULL_DATE} timeToRead={MINUTES} />,
      "es",
    );

    expect(getByText(new RegExp(YEAR))).toHaveTextContent(`20 jun. ${YEAR}`);
    expect(getByText(new RegExp(YEAR))).toHaveAttribute("datetime");
    expect(getByText(new RegExp(MINUTES))).toHaveTextContent(
      `${MINUTES} min de lectura`,
    );
  });

  test("renders the date and time in english", () => {
    const MINUTES = 3;
    const YEAR = 2020;
    const FULL_DATE = `${YEAR}-06-20`;

    const { getByText } = renderWithReactIntl(
      <ArticleInfo date={FULL_DATE} timeToRead={MINUTES} />,
      "en",
    );

    expect(getByText(new RegExp(YEAR))).toHaveTextContent(`Jun 20, ${YEAR}`);
    expect(getByText(new RegExp(YEAR))).toHaveAttribute("datetime");
    expect(getByText(new RegExp(MINUTES))).toHaveTextContent(
      `${MINUTES} min read`,
    );
  });

  test("renders the aria-hidden dot", () => {
    const MINUTES = 3;
    const YEAR = 2020;
    const FULL_DATE = `${YEAR}-06-20`;
    const DOT = "•";

    const { getByText } = renderWithReactIntl(
      <ArticleInfo date={FULL_DATE} timeToRead={MINUTES} />,
      "en",
    );

    expect(getByText(DOT)).toBeInTheDocument();
  });
});
