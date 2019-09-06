import { COPY_CODE_MESSAGES, COPY_URL_MESSAGES } from "../i18n/i18n";

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
      get() {
        supportsPassive = true;
      },
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
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

export function selectDummyNodeToCopy(dummyNode) {
  // For iOS
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    const range = document.createRange();
    range.selectNodeContents(dummyNode);

    const select = window.getSelection();
    select.removeAllRanges();
    select.addRange(range);
    dummyNode.setSelectionRange(0, 999999);
    dummyNode.blur();
  } else {
    dummyNode.select();
    dummyNode.blur();
  }
}

/*****************************************************************
 * Get the textContent of the clicked inserted copy tag and
 * insert into the dummy input element to be able to use
 * execCommand("copy") as it only works on input elements
 */
export function copyCode(e) {
  const dummyNode = document.querySelector(".js-dummyInput");
  const currentCopyButton = e.target;

  dummyNode.value = e.target.previousElementSibling.textContent;

  selectDummyNodeToCopy(dummyNode);

  try {
    document.execCommand("copy");
    currentCopyButton.textContent = `${COPY_CODE_MESSAGES[globalLocale].copied}`;

    // If the textContent was changed, trigger a setTimeout after 2000ms
    // and change it back to "Copy"
    if (currentCopyButton.textContent === `${COPY_CODE_MESSAGES[globalLocale].copied}`) {
      setTimeout(() => {
        currentCopyButton.textContent = `${COPY_CODE_MESSAGES[globalLocale].default}`;
      }, 2000);
    }
  } catch (err) {
    currentCopyButton.textContent = `${COPY_CODE_MESSAGES[globalLocale].error}`;
    if (currentCopyButton.textContent === `${COPY_CODE_MESSAGES[globalLocale].error}`) {
      setTimeout(() => {
        currentCopyButton.textContent = `${COPY_CODE_MESSAGES[globalLocale].default}`;
      }, 2000);
    }
  }

  window.getSelection().removeAllRanges();
}

/****************************************************************
 * Code to handle the url copying and code snippets
 * It's all using a dummy input element which holds the content
 * Which is supposed to be copied to the clipboard
 */
export function copyURL() {
  const dummyNode = document.querySelector(".js-dummyInput");
  const copyURLButton = document.querySelector(".js-copyURL > span");

  dummyNode.value = window.location.href;

  selectDummyNodeToCopy(dummyNode);

  try {
    document.execCommand("copy");
    copyURLButton.textContent = `${COPY_URL_MESSAGES[globalLocale].copied}`;
    setTimeout(() => {
      copyURLButton.textContent = `${COPY_URL_MESSAGES[globalLocale].default}`;
    }, 2000);
  } catch (err) {
    copyURLButton.textContent = `${COPY_URL_MESSAGES[globalLocale].error}`;
    setTimeout(() => {
      copyURLButton.textContent = `${COPY_URL_MESSAGES[globalLocale].default}`;
    }, 2000);
  }

  window.getSelection().removeAllRanges();
}

/*****************************************************************
 * Get all the inserted span tags to trigger the code copying
 */
export function addEventListenersToCopyButtons() {
  const getCopyButtons = Array.from(document.querySelectorAll(".js-codeCopy"));

  getCopyButtons.forEach((copyButton) => {
    copyButton.addEventListener("click", copyCode);
  });
}

/*****************************************************************
 * Get each code hightlight made by gatsby and insert a span tag
 * to attach a click listener to trigger the code copying logic
 */
export function addCopyButtonsToCodeNodes(currLocale) {
  const getCodeNodes = Array.from(document.querySelectorAll(".gatsby-highlight"));
  globalLocale = currLocale;

  getCodeNodes.forEach((codeNode) => {
    const copyLink = document.createElement("span");
    copyLink.textContent = `${COPY_CODE_MESSAGES[globalLocale].default}`;
    copyLink.className = "js-codeCopy";
    codeNode.appendChild(copyLink);
  });

  addEventListenersToCopyButtons();
}
