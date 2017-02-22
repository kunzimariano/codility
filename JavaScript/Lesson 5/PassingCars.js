'use strict';

const log = console.log;

function solution(A) {
  let zeros = 0;
  let passing = 0;
  let i = 0;

  while (i < A.length) {
    if (A[i] === 0) {
      zeros++;
    }
    else {
      passing += zeros;
    }

    if (passing > 1000000000) {
      return -1;
    }
    i++;
  }

  return passing;
}

let r = solution([0,1,0,1,1]);

log(r);