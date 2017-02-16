'use strict';

let solution = function(A) {
  let min = Number.MAX_SAFE_INTEGER;
  let total = A.reduce((acc, item) => acc += item, 0);

  for (let i = A.length - 1; i > 0; i--) {
    //substract twice since it was already added once during the sum
    total -= A[i] * 2;
    min = Math.min(min, Math.abs(total));
  }
  return min;
};

//console.log(solution([3, 1, 2, 4, 3]));
//console.log(solution([1, 1]));
