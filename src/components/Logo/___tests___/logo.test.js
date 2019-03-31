import React from "react";
import { render } from "react-testing-library";

import { Logo } from "../Logo";

describe("404", () => {
  it("works", () => {
    const { getByText } = render(<Logo />);
    const el = getByText("danilucaci");
    expect(el).toBeInTheDocument();
  });
});
