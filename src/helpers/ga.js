/* eslint-disable no-console */

import GA_EVENTS from "./gaEvents";

const __DEV__ = process.env.NODE_ENV === "development";

export function GTMActive() {
  const isBrowser = typeof window !== "undefined";
  return isBrowser && Array.isArray(window.dataLayer);
}

export function sendGTMConsent() {
  if (GTMActive()) {
    window.dataLayer.push({
      event: "dl_consent",
      dl_consent_accepted: true,
    });
  }
}

export function removeGTMConsent() {
  if (GTMActive()) {
    window.dataLayer.push({
      event: "dl_consent",
      dl_consent_accepted: false,
    });

    // Reload the page so that any scripts already loaded don’t keep firing events
    // once the consent/cookie is removed, and the next route change detects
    // that the consent cookie is not there.
    window.location.reload();
  }
}

export function sendContactFormEvent({ action = "", label = "" }) {
  if (!action) {
    if (__DEV__) {
      console.warn("Missing action in `sendContactFormEvent`");
    }
    return;
  }
  if (!label) {
    if (__DEV__) {
      console.warn("Missing label in `sendContactFormEvent`");
    }
    return;
  }
  if (GTMActive()) {
    window.dataLayer.push({
      event: "contact_form",
      contact_form_event_category: GA_EVENTS.contactForm.category,
      contact_form_event_action: action,
      contact_form_event_label: label,
    });
  }
}

export function sendContactCardEvent() {
  if (GTMActive()) {
    window.dataLayer.push({
      event: "contact_card",
      contact_card_event_category: GA_EVENTS.contactCard.category,
      contact_card_event_action: GA_EVENTS.contactCard.actions.ctaClick.name,
    });
  }
}

export function sendFooterSocialNavVisitEvent({ action = "" }) {
  if (!action) {
    if (__DEV__) {
      console.warn("Missing action in `sendFooterSocialNavVisitEvent`");
    }
    return;
  }
  if (GTMActive()) {
    window.dataLayer.push({
      event: "footer_social_nav_visit",
      footer_social_nav_visit_event_category:
        GA_EVENTS.footerSocialNavVisit.category,
      footer_social_nav_visit_event_action: action,
    });
  }
}

export function sendSocialNavVisitEvent({ action = "" }) {
  if (!action) {
    if (__DEV__) {
      console.warn("Missing action in `sendSocialNavVisitEvent`");
    }
    return;
  }
  if (GTMActive()) {
    window.dataLayer.push({
      event: "social_nav_visit",
      social_nav_visit_event_category: GA_EVENTS.socialNavVisit.category,
      social_nav_visit_event_action: action,
    });
  }
}

export function sendSharedArticleEvent({ action = "" }) {
  if (!action) {
    if (__DEV__) {
      console.warn("Missing action in `sendSharedArticleEvent`");
    }
    return;
  }
  if (GTMActive()) {
    window.dataLayer.push({
      event: "shared_article",
      shared_article_event_category: GA_EVENTS.sharedArticle.category,
      shared_article_event_action: action,
    });
  }
}

export function sendContactPageEvent({ label = "" }) {
  if (!label) {
    if (__DEV__) {
      console.warn("Missing label in `sendContactPageEvent`");
    }
    return;
  }
  if (GTMActive()) {
    window.dataLayer.push({
      event: "contact_page",
      contact_page_event_category: GA_EVENTS.contactPage.category,
      contact_page_event_action:
        GA_EVENTS.contactPage.actions.contactLinks.name,
      contact_page_event_label: label,
    });
  }
}

export function sendSubscribersEvent({ action = "", label = "" }) {
  if (!action) {
    if (__DEV__) {
      console.warn("Missing action in `sendSubscribersEvent`");
    }
    return;
  }
  if (!label) {
    if (__DEV__) {
      console.warn("Missing label in `sendSubscribersEvent`");
    }
    return;
  }
  if (GTMActive()) {
    window.dataLayer.push({
      event: "subscribers",
      subscribers_event_category: GA_EVENTS.subscribers.category,
      subscribers_event_action: action,
      subscribers_event_label: label,
    });
  }
}
