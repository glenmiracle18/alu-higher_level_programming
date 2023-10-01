#!/usr/bin/node
exports.converter = function (base) {
  function convertToBaseN (number) {
    if (number < base) {
    // For single-digit values, return the corresponding character if base is 16
      return base === 16 && number >= 10
        ? String.fromCharCode('A'.charCodeAt(0) + (number - 10))
        : String(number);
    } else {
      const remainder = number % base;
      return convertToBaseN(Math.floor(number / base)) + convertToBaseN(remainder);
    }
  }

  return function (number) {
    if (base < 2 || base > 36) {
      return null;
    }
    return convertToBaseN(number);
  };
};
