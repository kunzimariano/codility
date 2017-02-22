'use strict';

const log = console.log;

function solution(A, B, K) {
  if (Math.floor(A % K) === 0) {
    return Math.floor((B - A) / K) + 1;
  }
  else {
    return Math.floor((B - (A - A % K)) / K);
  }
}
