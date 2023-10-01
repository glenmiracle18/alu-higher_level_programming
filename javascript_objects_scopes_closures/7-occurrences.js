#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  list.forEach((i) => {
    if (i === searchElement) {
      count++;
    }
  });

  return count;
};
