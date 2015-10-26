'use strict';

function solution(A) {
  let n = A.length + 1;
  let sum = Math.floor(n * (n + 1) / 2);

  for (let i = 0; i < A.length; i++) {
    sum -= A[i];
  }
  return sum;
}
