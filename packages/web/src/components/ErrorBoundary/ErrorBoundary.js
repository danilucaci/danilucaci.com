import React, { Component } from "react";
import * as Sentry from "@sentry/react";
import { node } from "prop-types";

const NODE_ENV = process.env.NODE_ENV;
const GATSBY_SENTRY_URL = process.env.GATSBY_SENTRY_URL;

// should have been called before using it here
// ideally before even rendering your react app
if (NODE_ENV !== "development") {
  Sentry.init({
    dsn: GATSBY_SENTRY_URL,
  });
}

class ErrorBoundary extends Component {
  state = {
    // error: null,
    errorInfo: null,
    // hasError: null,
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error("CDC: ", error);
    // eslint-disable-next-line no-console
    console.error("CDC: ", errorInfo);

    this.setState({
      // error,
      errorInfo,
    });

    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div
          style={{
            maxWidth: "800px",
            padding: "24px",
            border: "1px solid lightgrey",
            borderRadius: "3px",
            margin: "0 auto",
            marginTop: "2rem",
            fontFamily: "system-ui",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              lineHeight: "32px",
              marginTop: "0px",
              marginBottom: "16px",
              paddingTop: "0px",
            }}
          >
            Shomething went wrong
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              marginBottom: "16px",
              color: "#5A616B",
            }}
          >
            I apologize for any inconvenience this may have caused. If you would
            like to send me a report of the error that happened, feel free to
            send me an email or a tweet with the details.
          </p>
          <ul
            style={{
              marginTop: "1rem",
            }}
          >
            <li
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                textDecoration: "underline",
                color: "#0946B0",
              }}
            >
              <a href="mailto:info@danilucaci.com?subject=Error%20Report">
                info@danilucaci.com
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                textDecoration: "underline",
                color: "#0946B0",
              }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/danilucaci"
              >
                @danilucaci
              </a>
            </li>
          </ul>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: node.isRequired,
};

export default ErrorBoundary;
