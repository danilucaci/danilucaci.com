import React from "react";

const Intl = jest.genMockFromModule("react-intl");

// Here goes intl context injected into component, feel free to extend
const intl = {
  formatMessage: ({ defaultMessage }) => defaultMessage,
  locale: "en",
};

Intl.injectIntl = (Component) => {
  const renderWrapped = (props) => <Component {...props} intl={intl} />;
  renderWrapped.displayName =
    Component.displayName || Component.name || "Component";
  return renderWrapped;
};

module.exports = Intl;
