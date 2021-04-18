function isPromise(value) {
  return Boolean(value && value.then && typeof value.then === "function");
}

module.exports = {
  isPromise: isPromise,
};
