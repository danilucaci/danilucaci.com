import React from "react";
import { render } from "@testing-library/react";

import AriaText from "../AriaText";

describe("<AriaText />", () => {
  test("renders the aria hidden text", () => {
    const TEXT = "hello-mundo";

    const { getByText } = render(<AriaText>{TEXT}</AriaText>);

    expect(getByText(TEXT)).toHaveTextContent(TEXT);
  });
});
