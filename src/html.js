import React from "react";
import PropTypes from "prop-types";

import { SVGSprite } from "./components/SVGSprite/SVGSprite";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="theme-color" content="#141C29" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      window.twttr = (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0],
                      t = window.twttr || {};
                    if (d.getElementById(id)) return t;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);

                    t._e = [];
                    t.ready = function(f) {
                      t._e.push(f);
                    };

                    return t;
                    }(document, "script", "twitter-wjs"));
                  `,
            }}
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} id="scrollTop">
          <SVGSprite />
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
