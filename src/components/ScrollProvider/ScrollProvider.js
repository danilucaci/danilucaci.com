import React, { Component } from "react";

const ScrollContext = React.createContext();

export class ScrollProvider extends Component {
  state = {
    hasScrolled: false,
    lastScrollPos: 0,
    showReadingNav: false,
    isBlogPost: false,
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

  hasScrolled = () => {
    console.log("Scrolled");
    let currentScrollPos = window.pageYOffset;
    let oldScrollPos = this.state.lastScrollPos;
    let sufficientScrollDiff = oldScrollPos - 20;

    if (currentScrollPos > 600) {
      if (currentScrollPos < sufficientScrollDiff) {
        this.setState({ lastScrollPos: window.pageYOffset });
        this.setState({ showReadingNav: false });
      } else {
        this.setState({ lastScrollPos: window.pageYOffset });
        this.setState({ showReadingNav: true });
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
        }}
      >
        {this.props.children}
      </ScrollContext.Provider>
    );
  }
}

export const ScrollConsumer = ScrollContext.Consumer;
