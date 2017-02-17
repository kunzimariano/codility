'use strict';

let log = console.log;

function solution(X, A) {
  let remainingSteps = X;
  let stepsDone = {};

  for (let i = 0; i < A.length; i++) {
    let element = A[i];
    if (!stepsDone[element]) {
      stepsDone[element] = true;
      remainingSteps--;
    }
    if (remainingSteps === 0) {
      return i;
    }
  };
  return -1;
}


let r = solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);
log(r);
r = solution(3, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1]);
log(r);
r = solution(5, [3]);
log(r);
