import React from "react";
import { renderWithTheme } from "../../../helpers/tests";
import Article from "../Article";

describe("Article", () => {
  it("Renders article fine", () => {
    const slug = "/blog/test-article";
    const tags = ["tag1", "tag2"];
    const category = "none";
    const title = "Test Article 01";
    const date = "14/08/2019";
    const snippet = "Article snippet";
    const timeToRead = 2;

    const ARTICLE_TITLE = new RegExp(/test article/i);

    const { getByText, debug } = renderWithTheme(<Article
      slug={slug}
      tags={tags}
      category={category}
      title={title}
      date={date}
      snippet={snippet}
      timeToRead={timeToRead}
    />);
    const el = getByText(ARTICLE_TITLE);

    expect(el).toBeInTheDocument();

    // debug();
  });
});

// test("temp", () => {
//   expect(true).toBe(true);
// });
