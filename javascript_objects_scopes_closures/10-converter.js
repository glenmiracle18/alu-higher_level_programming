#!/usr/bin/node
exports.converter = function (base) {
  if (base !== 10) {
    return (a) => a.toString(base);
  } else {
    return (a) => parseInt(a, base);
  }
};
