'use strict';

function getMaxCounter(counters, counter, maxCounter) {
  let c = counters[counter - 1];
  if (c > maxCounter) {
    return c;
  }
  return maxCounter;
}

function increaseCounter(counters, x, minCounter) {
  if (counters[x - 1] && counters[x - 1] >= minCounter) {
    counters[x - 1]++;
  }
  else {
    counters[x - 1] = minCounter + 1;
  }
}

function fillCounters(counters, minCounter) {
  for (let i = 0; i < counters.length; i++) {
    if (!counters[i] || counters[i] < minCounter) {
      counters[i] = minCounter;
    }
  }
}

function solution(n, a) {
  let maxCounter = 0;
  let minCounter = 0;
  let counters = new Array(n);

  a.forEach(x => {
    if (x >= 1 && x <= n) {
      increaseCounter(counters, x, minCounter);
      maxCounter = getMaxCounter(counters, x, maxCounter);
    }

    if (x === n + 1) {
      minCounter = maxCounter;
    }
  });

  fillCounters(counters, minCounter);
  return counters;
}

let r = solution(5, [3, 4, 4, 6, 1, 4, 4]);
console.log(r);
