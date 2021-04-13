function isPromise(value) {
  return value && value.then && typeof value.then === "function";
}

module.exports = {
  isPromise: isPromise,
};
