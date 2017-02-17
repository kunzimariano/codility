'use strict';

function solution(A) {
  let n = A.length;
  let expectedSum = (n * (n + 1)) / 2;
  let sum = 0;
  let duplicates = {};

  A.forEach((item, i) => {
    if (duplicates[item]) {
      return 0;
    }
    if (item < 1) {
      return 0;
    }
    sum += item;
    duplicates[item] = true;
  });

  if (sum === expectedSum) {
    return 1;
  }
  return 0;
}