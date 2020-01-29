export const GA_EVENTS = {
  contactForm: {
    category: "Contact Form",
    actions: {
      submit: {
        name: "Submit",
        labels: {
          success: "Success",
          failed: "Failed",
          error: "Error",
          authFailed: "Missing User Token",
        },
      },
      ping: {
        name: "Ping",
        labels: {
          success: "Success",
          failed: "Failed",
          error: "Error",
        },
      },
    },
  },
  contactCard: {
    category: "Contact Card",
    actions: {
      ctaClick: {
        name: "Clicked CTA",
      },
    },
  },
  footerSocialNavVisit: {
    category: "Footer Social Nav Visit",
    actions: {
      twitter: {
        name: "Twitter",
      },
      linkedin: {
        name: "Linkedin",
      },
      dribbble: {
        name: "Dribbble",
      },
      github: {
        name: "Github",
      },
    },
  },
  socialNavVisit: {
    category: "Social Nav Visit",
    actions: {
      twitter: {
        name: "Twitter",
      },
      linkedin: {
        name: "Linkedin",
      },
      dribbble: {
        name: "Dribbble",
      },
      github: {
        name: "Github",
      },
    },
  },
  sharedArticle: {
    category: "Shared Article",
    actions: {
      twitter: {
        name: "On Twitter",
      },
      linkedin: {
        name: "On Linkedin",
      },
    },
  },
  contactPage: {
    category: "Contact Page",
    actions: {
      contactLinks: {
        name: "Contact Link Click",
        labels: {
          email: "Email",
          twitter: "Twitter",
        },
      },
    },
  },
  subscribers: {
    category: "Subscribers",
    actions: {
      success: {
        name: "Success",
        labels: {
          newSubscriber: "New Subscriber",
        },
      },
      error: {
        name: "Error",
        labels: {
          alreadySubscribed: "Already Subscribed",
          tooManyRequests: "Too Many Requests",
          generic: "Generic",
        },
      },
    },
  },
};

export default GA_EVENTS;
