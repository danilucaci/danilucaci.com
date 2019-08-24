import React from "react";
import renderer from "react-test-renderer";

import ContactForm from "../ContactForm";

describe("Contact Form", () => {
  it("Renders Contact Form fine", () => {
    expect(true).toBe(true);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<ContactForm locale="en" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
