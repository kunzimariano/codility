'use strict';

let getNextMin = function(number, done) {
  let n = number;
  while (true) {
    n++;
    if(done[n] === undefined) {
      return n;
    }
  }
};

let solution = function(A) {
  let min = 1;
  let done = [];

  for (let i = 0; i < A.length; i++) {
    done[A[i]] = 1;
    if (A[i] == min) {
      min = getNextMin(min, done);
    }
  }
  return min;
};
