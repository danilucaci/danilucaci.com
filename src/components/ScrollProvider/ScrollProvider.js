import React, { Component } from "react";

const ScrollContext = React.createContext();

export class ScrollProvider extends Component {
  state = {
    hasScrolled: false,
    lastScrollPos: 0,
    showReadingNav: false,
    isBlogPost: false,
    pageWidth: 0,
  };

  componentDidMount() {
    const isBlog = this.props.location.pathname.includes("/blog/");

    if (isBlog) {
      this.handleBlogPost();
    }
  }

  componentWillUnmount() {
    if (this.state.isBlogPost) {
      window.removeEventListener("scroll", this.scrollListener);
      window.removeEventListener("resize", this.handleResize);

      clearInterval(this.scrollInterval);
      console.log("%c Scroll Interval Removed", "color: cyan");
    }
  }

  handleBlogPost = () => {
    this.setState({
      isBlogPost: true,
    });

    addEventListener("scroll", this.scrollListener);

    console.log("%c Scroll Interval Set", `color: cyan`);

    this.scrollInterval = setInterval(() => {
      var didScroll = this.state.hasScrolled;

      if (didScroll) {
        this.hasScrolled();
        this.setState({ hasScrolled: false });
      }
    }, 500);
  };

  scrollListener = () => {
    this.setState({ hasScrolled: true });
  };

  // http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
  getPageWidth = () => {
    let pageWidth = 0;

    if (typeof window.innerWidth == "number") {
      //Non-IE
      pageWidth = window.innerWidth;
    } else if (
      document.documentElement &&
      document.documentElement.clientWidth
    ) {
      //IE 6+ in 'standards compliant mode'
      pageWidth = document.documentElement.clientWidth;
    } else if (document.body && document.body.clientWidth) {
      //IE 4 compatible
      pageWidth = document.body.clientWidth;
    }

    return pageWidth;
  };

  hasScrolled = () => {
    let currentScrollPos = window.pageYOffset;
    let oldScrollPos = this.state.lastScrollPos;
    let sufficientScrollDiff = oldScrollPos - 8;
    let pageWidth = this.getPageWidth();

    if (currentScrollPos > 664) {
      if (currentScrollPos < sufficientScrollDiff) {
        this.setState({
          lastScrollPos: window.pageYOffset,
          showReadingNav: false,
          pageWidth: pageWidth,
        });
      } else {
        this.setState({
          lastScrollPos: window.pageYOffset,
          showReadingNav: true,
          pageWidth: pageWidth,
        });
      }
    } else {
      this.setState({
        showReadingNav: false,
      });
    }
  };

  render() {
    return (
      <ScrollContext.Provider
        value={{
          hasScrolled: this.state.hasScrolled,
          lastScrollPos: this.state.lastScrollPos,
          showReadingNav: this.state.showReadingNav,
          pageWidth: this.state.pageWidth,
        }}
      >
        {this.props.children}
      </ScrollContext.Provider>
    );
  }
}

export const ScrollConsumer = ScrollContext.Consumer;
