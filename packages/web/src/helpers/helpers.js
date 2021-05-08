import { copyCodeMessages, copyUrlMessages } from "../i18n";

export function calculateScroll() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const clientHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const docScrollHeight =
    document.body.scrollHeight || document.documentElement.scrollHeight;
  const docHeight = docScrollHeight - clientHeight;
  const scrolled = (winScroll / docHeight) * 100;

  return scrolled;
}

export function calculatePageWidth() {
  let pageWidth = 0;

  if (typeof window.innerWidth === "number") {
    //Non-IE
    pageWidth = window.innerWidth;
  } else if (document.documentElement && document.documentElement.clientWidth) {
    //IE 6+ in 'standards compliant mode'
    pageWidth = document.documentElement.clientWidth;
  } else if (document.body && document.body.clientWidth) {
    //IE 4 compatible
    pageWidth = document.body.clientWidth;
  }

  return pageWidth;
}

export function handleScrollLine() {
  const scrollLine = document.querySelector(".js-scrollLine");
  const scrolled = calculateScroll();
  scrollLine.style.width = scrolled + "%";
}

export function addSafariVideoControls() {
  if (
    navigator.userAgent.indexOf("Safari") !== -1 &&
    navigator.userAgent.indexOf("Chrome") === -1
  ) {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      // eslint-disable-next-line no-param-reassign
      video.controls = true;
    });
  }
}

// Test via a getter in the options object to see if the passive property is accessed
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
export function textPassiveEventSupport() {
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      // eslint-disable-next-line getter-return
      get() {
        supportsPassive = true;
      },
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
    // eslint-disable-next-line no-empty
  } catch (e) {}

  return supportsPassive;
}

export function detectDataSaverMode() {
  if (navigator.connection && navigator.connection.saveData) {
    return true;
  }
  return false;
}

export function detectSlowConnectionType() {
  if (
    navigator.connection &&
    (navigator.connection.effectiveType === "slow-2g" ||
      navigator.connection.effectiveType === "2g")
  ) {
    return true;
  }
  return false;
}

/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * https://vanillajstoolkit.com/helpers/isinviewport/
 * @param  {Node} element The element
 * @return {Boolean} Returns true if element is in the viewport
 */
export function isInViewport(element) {
  const distance = element.getBoundingClientRect();

  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

/****************************************************************
 * Selects a dom node to copy its contents
 */
export function selectDomNodeToCopyContents(domNode) {
  // For iOS
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    const range = document.createRange();
    range.selectNodeContents(domNode);

    const select = window.getSelection();
    select.removeAllRanges();
    select.addRange(range);
    domNode.setSelectionRange(0, 999999);
    domNode.blur();
  } else {
    domNode.select();
    domNode.blur();
  }
}

export const COPY_CODE_CLASSES = {
  textarea: ".js-textarea-clipboard",
  copyURLButton: ".js-copyURL",
  copyCodeButtonClassname: "js-codeCopy",
  copyCodeButtons: ".js-codeCopy",
  copyURLButtonLabel: ".js-copyURL > span",
};

/****************************************************************
 * Clears all ranges after copying the contents from the dom node selected
 */
export function removeAllRanges() {
  window.getSelection().removeAllRanges();
}

/*****************************************************************
 * Return the dom node of the textarea used to store the contents
 * that I want to copy to the clipboard
 */
export function selectTextareaToCopyContents() {
  const textareaNode = document.querySelector(`${COPY_CODE_CLASSES.textarea}`);

  return textareaNode;
}

/*****************************************************************
 * Return the dom node created in each pre/code block generated
 * in markdown, to change the text content from "Copy" to "Copied!"
 */
export function selectCopyUrlButtonLabel() {
  const copyURLButtonLabel = document.querySelector(
    `${COPY_CODE_CLASSES.copyURLButtonLabel}`,
  );
  return copyURLButtonLabel;
}

/****************************************************************
 * Copies the page URL
 * Uses a textarea input field that stores the content
 * that will be copied to the clipboard
 * Expects a locale prop containing the current locale "en" or "es"
 */
export function copyURL(locale) {
  const textareaNode = selectTextareaToCopyContents();
  textareaNode.value = window.location.href;

  const copyURLButtonLabel = selectCopyUrlButtonLabel();

  selectDomNodeToCopyContents(textareaNode);

  try {
    document.execCommand("copy");
    copyURLButtonLabel.textContent = `${copyUrlMessages[locale].copied}`;

    setTimeout(() => {
      copyURLButtonLabel.textContent = `${copyUrlMessages[locale].default}`;
    }, 2000);
  } catch (err) {
    copyURLButtonLabel.textContent = `${copyUrlMessages[locale].error}`;
    setTimeout(() => {
      copyURLButtonLabel.textContent = `${copyUrlMessages[locale].default}`;
    }, 2000);
  }

  removeAllRanges();
}

/*****************************************************************
 * Get the textContent of the clicked inserted copy tag and
 * insert into the dummy input element to be able to use
 * execCommand("copy") as it only works on input elements
 */
export function copyCode(e, locale) {
  const textareaNode = selectTextareaToCopyContents();
  const currentCopyButton = e.target;

  textareaNode.value = e.target.previousElementSibling.textContent;

  selectDomNodeToCopyContents(textareaNode);

  try {
    document.execCommand("copy");
    currentCopyButton.textContent = `${copyCodeMessages[locale].copied}`;

    setTimeout(() => {
      currentCopyButton.textContent = `${copyCodeMessages[locale].default}`;
    }, 2000);
  } catch (err) {
    currentCopyButton.textContent = `${copyCodeMessages[locale].error}`;

    setTimeout(() => {
      currentCopyButton.textContent = `${copyCodeMessages[locale].default}`;
    }, 2000);
  }

  removeAllRanges();
}

/*****************************************************************
 * 1. Select each code hightlight made by gatsby
 * 2. Insert a span tag child element
 * 3. Add a click event listener to each copy button
 */
export function addCopyButtonsToCodeNodes(locale) {
  const getCodeNodes = Array.from(
    document.querySelectorAll(".gatsby-highlight"),
  );

  // eslint-disable-next-line no-use-before-define
  appendCopyCodeNodes(getCodeNodes, locale);

  // eslint-disable-next-line no-use-before-define
  addEventListenersToCopyButtons(locale);
}

/*****************************************************************
 * Get all the inserted span tags to trigger the code copying
 */
export function addEventListenersToCopyButtons(locale = "en") {
  const getCopyButtons = Array.from(
    document.querySelectorAll(`${COPY_CODE_CLASSES.copyCodeButtons}`),
  );

  getCopyButtons.forEach((copyButton) => {
    copyButton.addEventListener("click", (e) => copyCode(e, locale));
  });
}

/*****************************************************************
 * Inserts a child node as a span element to each of the nodes received
 * with a localized version of the text content
 */
export function appendCopyCodeNodes(nodes, locale = "en") {
  nodes.forEach((node) => {
    const copyButton = document.createElement("button");
    copyButton.textContent = `${copyCodeMessages[locale].default}`;
    copyButton.className = `${COPY_CODE_CLASSES.copyCodeButtonClassname}`;
    node.appendChild(copyButton);
  });
}

export function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
}
