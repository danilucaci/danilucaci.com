export function calculateScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let clientHeight =
    window.innerHeight || document.documentElement.clientHeight;
  let docScrollHeight =
    document.body.scrollHeight || document.documentElement.scrollHeight;
  let docHeight = docScrollHeight - clientHeight;
  let scrolled = (winScroll / docHeight) * 100;

  return scrolled;
}

export function addSafariVideoControls() {
  if (
    navigator.userAgent.indexOf("Safari") != -1 &&
    navigator.userAgent.indexOf("Chrome") == -1
  ) {
    let videos = document.querySelectorAll("video");
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
  let distance = element.getBoundingClientRect();

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
    let range = document.createRange();
    range.selectNodeContents(dummyNode);

    let select = window.getSelection();
    select.removeAllRanges();
    select.addRange(range);
    dummyNode.setSelectionRange(0, 999999);
    dummyNode.blur();
  } else {
    dummyNode.select();
    dummyNode.blur();
  }
}

// Test via a getter in the options object to see if the passive property is accessed
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
export function textPassiveEventSupport() {
  var supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function() {
        supportsPassive = true;
      },
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {}

  return supportsPassive;
}

// https://gist.github.com/DiegoSalazar/4075533
// takes the form field value and returns true on valid number
export function validate_luhn(value) {
  // accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn Algorithm. It's so pretty.
  var nCheck = 0,
    nDigit = 0,
    bEven = false;
  value = value.replace(/\D/g, "");

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 == 0;
}

export function checkForDoNotTrack() {
  // IE 10 or less has: window.external.msTrackingProtectionEnabled
  // IE 9 and 10 have: navigator.msDoNotTrack.
  // IE 11 and Edge have: window.doNotTrack.
  // Gecko 32 Firefox has: navigator.doNotTrack returning yes or no, not 1 or 0.
  // Safari 7.1.3+ has: window.doNotTrack.
  var dnt = window.doNotTrack || navigator.msDoNotTrack || navigator.doNotTrack;
  if (dnt !== "1" && dnt !== "yes") {
    return false;
  } else return true;
}

export function detectBrowserLanguage() {
  return (
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage
  );
}

export function detectDataSaverMode() {
  if (navigator.connection && navigator.connection.saveData) {
    return true;
  } else {
    return false;
  }
}

export function detectSlowConnectionType() {
  if (
    navigator.connection &&
    (navigator.connection.effectiveType === "slow-2g" ||
      navigator.connection.effectiveType === "2g")
  ) {
    return true;
  } else {
    return false;
  }
}
