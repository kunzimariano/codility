'use strict';

let sumArray = function(A) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }
  return sum;
};

let solution = function(A) {
  let min = Number.MAX_SAFE_INTEGER;
  let total = sumArray(A);

  for (let i = A.length - 1; i > 0; i--) {
    total -= A[i] * 2;
    min = Math.min(min, Math.abs(total));
  }
  return min;
};

//console.log(solution([3, 1, 2, 4, 3]));
//console.log(solution([1, 1]));
