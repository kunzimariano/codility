'use strict';

function solution(n) {
  let longestGap = 0;
  let currentGap = 0;

  while (n > 1 && Math.floor(n % 2) === 0) { n/=2; };

  while (n > 1) {
    let remainder = Math.floor(n % 2);
    n/=2;

    if (remainder === 1) {
      currentGap = 0;
      continue;
    }

    currentGap++;
    longestGap = currentGap > longestGap ? currentGap : longestGap;
  }
  return longestGap;
}
