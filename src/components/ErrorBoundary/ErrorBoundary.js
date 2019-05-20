import React from "react";
import * as Sentry from "@sentry/browser";

const NODE_ENV = process.env.NODE_ENV;
const GATSBY_SENTRY_URL = process.env.GATSBY_SENTRY_URL;

// should have been called before using it here
// ideally before even rendering your react app
if (NODE_ENV !== "development") {
  Sentry.init({
    dsn: GATSBY_SENTRY_URL,
  });
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      hasError: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("CDC: ", error);
    console.error("CDC: ", errorInfo);

    this.setState({
      error,
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
    if (this.state.hasError) {
      return (
        <div
          style={{
            maxWidth: "800px",
            padding: "24px",
            border: "1px solid lightgrey",
            margin: "0 auto",
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
            I apologize for any inconvenience this may have caused. If you would like to send me a
            report of the error that happened, feel free to send me an email or a tweet with the
            details.
          </p>
          <ul>
            <li
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                textDecoration: "underline",
                color: "#0946B0",
              }}
            >
              <a href="mailto:info@danilucaci.com?subject=Error%20Report">info@danilucaci.com</a>
            </li>
            <li
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                textDecoration: "underline",
                color: "#0946B0",
              }}
            >
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/danilucaci">
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

export default ErrorBoundary;
