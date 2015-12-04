'use strict';

let getNextMin = function(number, done) {
  done[number] = 1;
  let n = number;
  while (true) {
    n++;
    if(done[n] === undefined) {
      return n;
    }
  }
};

let solution = function(A) {
  let min = A[0];
  let done = [];
  
  for (let i = 0; i < A.length; i++) {
    done[A[i]] = 1;
    if (A[i] == min) {
      min = getNextMin(min, done);
    }
  }
  return min;
};

//console.log(solution([1, 3, 7, 4, 1, 2]));


//console.log(solution([1, 1]));
