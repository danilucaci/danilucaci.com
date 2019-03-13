import { COPY_CODE_MESSAGES, COPY_URL_MESSAGES } from "../i18n/i18n";

let globalLocale = "en";

export function calculateScroll() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const clientHeight = window.innerHeight || document.documentElement.clientHeight;
  const docScrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
  const docHeight = docScrollHeight - clientHeight;
  const scrolled = (winScroll / docHeight) * 100;

  return scrolled;
}

export function handleScrollLine() {
  const scrollLine = document.querySelector(".js-scrollLine");
  const scrolled = calculateScroll();
  scrollLine.style.width = scrolled + "%";
}

export function addSafariVideoControls() {
  if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1) {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.controls = true;
    });
  }
}

// https://gist.github.com/matthagemann/382adfc57adbd5af078dc93feef01fe1
export function slugify(string) {
  const a = "àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;";
  const b = "aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * https://vanillajstoolkit.com/helpers/isinviewport/
 * @param  {Node}    element The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
export function isInViewport(element) {
  const distance = element.getBoundingClientRect();

  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
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

export function checkForDoNotTrack() {
  // IE 10 or less has: window.external.msTrackingProtectionEnabled
  // IE 9 and 10 have: navigator.msDoNotTrack.
  // IE 11 and Edge have: window.doNotTrack.
  // Gecko 32 Firefox has: navigator.doNotTrack returning yes or no, not 1 or 0.
  // Safari 7.1.3+ has: window.doNotTrack.
  const dnt = window.doNotTrack || navigator.msDoNotTrack || navigator.doNotTrack;
  if (dnt !== "1" && dnt !== "yes") {
    return false;
  }
  return true;
}

export function detectBrowserLanguage() {
  return (
    (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage
  );
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

export function toUpperCamelCase(string) {
  return string
    .toLowerCase()
    .replace(/(?:(^.)|(\s+.))/g, (match) => match.charAt(match.length - 1).toUpperCase());
}

export function handleTOCScroll() {
  const h2s = document.querySelectorAll("h2");

  h2s.forEach((heading) => {
    const isVis = isInViewport(heading);

    if (isVis) {
      // console.log("heading: ", heading);
    }
  });
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
