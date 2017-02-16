'use strict';

let solution = function(A) {
  const numbers = {};
  let start = Number.MAX_SAFE_INTEGER;
  let end = Number.MIN_SAFE_INTEGER;

  A.forEach(item => {
    numbers[item] = true;
    if (item < start) { start = item; }
    if (item > end) { end = item; }
  });

  if (end <= 0) {
    return 1;
  }

  start = 1;
  let result = end + 1;

  for (let i = start; i < end; i++) {
    if (!numbers[i]) {
      result = i;
      break;
    }
  }

  return result;
};

const log = console.log;

let r = solution([-10, 5, 9, 3, -9, -7, -8]);
log(r);

r = solution([2]);
log(r);

r = solution([-1,0,1,2,5]);
log(r);
