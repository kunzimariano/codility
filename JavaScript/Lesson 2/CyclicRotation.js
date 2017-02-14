'use strict';

function getShiftedIndex(index, rotation, limit) {
  let shifted = index + rotation;
  while (shifted > limit) {
    shifted -= limit + 1;
  }
  return shifted;
}

function solution(A, K) {
  const result = new Array(A.length);

  A.forEach((item, index) => {
    let newIndex = getShiftedIndex(index, K, A.length - 1);
    result[newIndex] = item;
  });
  return result;
}

let r = solution([3, 8, 9, 7, 6], 3);
console.log(r);

r = solution([], 3);
console.log(r);

r = solution([2], 3);
console.log(r);